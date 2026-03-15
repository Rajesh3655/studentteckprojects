const fs = require('fs');
const path = require('path');

const baseDir = __dirname;

function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getHtmlFiles(fullPath, fileList);
        } else if (fullPath.endsWith('.html')) {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

const htmlFiles = getHtmlFiles(baseDir);
let modifiedCount = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Calculate how deep this file is relative to the baseDir
    const relPath = path.relative(baseDir, file);
    // Split by cross-platform sep
    const depth = relPath.split(path.sep).length - 1;
    
    let prefix = '';
    if (depth === 0) prefix = './';
    else if (depth === 1) prefix = '../';
    else if (depth === 2) prefix = '../../';
    else if (depth === 3) prefix = '../../../';
    else prefix = '../'.repeat(depth);

    // Track if we changed anything
    const originalContent = content;

    // 1. Replace exact root links: href="/" -> href="./index.html" (or ../index.html)
    content = content.replace(/href="\/"/g, `href="${prefix}index.html"`);
    
    // 2. Replace absolute path links: href="/categories/..." -> href="../categories/..."
    // Note: We avoid replacing https:// or // URLs because our regex strictly looks for href="/..."
    content = content.replace(/href="\/([^"/][^"]*)"/g, `href="${prefix}$1"`);

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
    }
});

console.log(`Successfully converted absolute paths to relative paths in ${modifiedCount} HTML files.`);
