const fs = require('fs');
const path = require('path');

// Resolve the root directory of the site (2 levels up from this script)
const ROOT_DIR = path.join(__dirname, '..', '..');

// Recursively find all HTML files
function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        // Skip node_modules or .git if they exist
        if (filePath.includes('node_modules') || filePath.includes('.git')) continue;
        
        if (fs.statSync(filePath).isDirectory()) {
            getAllHtmlFiles(filePath, fileList);
        } else if (filePath.endsWith('.html')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const htmlFiles = getAllHtmlFiles(ROOT_DIR);
let totalLinks = 0;
let brokenInternalLinks = [];

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Regex to match href="..." and src="..."
    const linkRegex = /(?:href|src)="([^"]+)"/g;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
        totalLinks++;
        const link = match[1];

        // Ignore external links, mailto, tel, and pure anchors
        if (link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('#')) {
            continue;
        }

        // Remove anchors and query strings for local file checking (e.g., style.css?v=2 -> style.css)
        let cleanLink = link.split('#')[0].split('?')[0];
        if (!cleanLink) continue;

        // Resolve the target path
        const targetPath = cleanLink.startsWith('/') 
            ? path.join(ROOT_DIR, cleanLink) // Absolute path relative to root
            : path.join(path.dirname(file), cleanLink); // Relative path

        if (!fs.existsSync(targetPath)) {
            brokenInternalLinks.push({ file: file.replace(ROOT_DIR, ''), link });
        }
    }
});

console.log(`\nChecked ${totalLinks} internal links across ${htmlFiles.length} HTML files.`);
if (brokenInternalLinks.length > 0) {
    console.log(`\n⚠️ Found ${brokenInternalLinks.length} broken internal links:`);
    brokenInternalLinks.forEach(b => {
        console.log(`  - File: ${b.file}\n    Broken link: ${b.link}`);
    });
} else {
    console.log("\n✅ Success! No broken internal links found.");
}