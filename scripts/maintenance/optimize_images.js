const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Resolve the root directory of the site
const ROOT_DIR = path.join(__dirname, '..', '..');

// Recursively find all image files
function getImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        // Skip node_modules or .git
        if (filePath.includes('node_modules') || filePath.includes('.git')) continue;
        
        if (fs.statSync(filePath).isDirectory()) {
            getImages(filePath, fileList);
        } else if (/\.(png|jpe?g|webp)$/i.test(filePath)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const images = getImages(ROOT_DIR);
console.log(`Found ${images.length} images. Starting optimization...\n`);

async function optimizeImages() {
    let savedBytes = 0;

    for (const file of images) {
        const originalSize = fs.statSync(file).size;
        const ext = path.extname(file).toLowerCase();
        const tempFile = `${file}.tmp${ext}`;

        try {
            let pipeline = sharp(file);
            
            // Apply specific compressions based on file type
            if (ext === '.jpg' || ext === '.jpeg') {
                pipeline = pipeline.jpeg({ quality: 80, progressive: true });
            } else if (ext === '.png') {
                pipeline = pipeline.png({ quality: 80, compressionLevel: 8 });
            } else if (ext === '.webp') {
                pipeline = pipeline.webp({ quality: 80 });
            }

            await pipeline.toFile(tempFile);
            const newSize = fs.statSync(tempFile).size;
            
            // Only replace the original if the optimized version is actually smaller
            if (newSize < originalSize) {
                fs.renameSync(tempFile, file);
                const saved = originalSize - newSize;
                savedBytes += saved;
                console.log(`✅ Optimized ${path.basename(file)} (Saved ${(saved / 1024).toFixed(2)} KB)`);
            } else {
                fs.unlinkSync(tempFile);
                console.log(`⏭️  Skipped ${path.basename(file)} (Already highly optimized)`);
            }
        } catch (err) {
            console.error(`❌ Failed to optimize ${path.basename(file)}:`, err.message);
            if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        }
    }

    console.log(`\n🎉 Optimization complete! Total space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB.`);
}

optimizeImages();