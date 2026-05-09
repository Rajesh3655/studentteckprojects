const fs = require('fs');
const path = require('path');

// Resolve the root directory of the site (2 levels up from this script)
const ROOT_DIR = path.join(__dirname, '..', '..');

// Recursively find all HTML files
function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
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
const externalLinks = new Map(); // Map to store unique link -> array of files

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const linkRegex = /(?:href|src)="([^"]+)"/g;
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
        const link = match[1];
        if (link.startsWith('http://') || link.startsWith('https://')) {
            if (!externalLinks.has(link)) {
                externalLinks.set(link, []);
            }
            const relativeFile = file.replace(ROOT_DIR, '');
            if (!externalLinks.get(link).includes(relativeFile)) {
                externalLinks.get(link).push(relativeFile);
            }
        }
    }
});

console.log(`\nFound ${externalLinks.size} unique external links across ${htmlFiles.length} HTML files.`);
console.log("Checking links over the network... This may take a moment.\n");

async function checkLinks() {
    const brokenLinks = [];
    let checkedCount = 0;

    for (const [link, files] of externalLinks.entries()) {
        try {
            // Use fetch with a generic User-Agent to prevent strict servers from blocking the request
            let response = await fetch(link, { 
                method: 'HEAD',
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
            });

            // Fall back to GET if the server rejects HEAD requests
            if (response.status === 405 || response.status === 403) {
                response = await fetch(link, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' }});
            }

            // Consider 400+ as broken, except 403 (which is often just a bot protection false positive)
            if (!response.ok && response.status !== 403) {
                brokenLinks.push({ link, status: response.status, files });
            }
        } catch (error) {
            // Catches DNS errors, connection timeouts, etc.
            brokenLinks.push({ link, status: error.cause ? error.cause.code : error.message, files });
        }
        
        checkedCount++;
        process.stdout.write(`\rChecked ${checkedCount}/${externalLinks.size} links...`);
    }

    console.log(`\n\nFinished checking external links.`);
    if (brokenLinks.length > 0) {
        console.log(`\n⚠️ Found ${brokenLinks.length} potentially broken external links:`);
        brokenLinks.forEach(b => {
            console.log(`\n  - Link: ${b.link}\n    Status: ${b.status}\n    Found in: ${b.files.join(', ')}`);
        });
    } else {
        console.log("\n✅ Success! No broken external links found.");
    }
}

if (typeof fetch === 'undefined') {
    console.error("Error: This script requires Node.js v18 or newer to use the native 'fetch' API.");
    process.exit(1);
}

checkLinks();