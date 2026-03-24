const fs = require('fs');
const path = require('path');

const baseDir = __dirname;

function getHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory() && file !== 'node_modules' && file !== '.git') {
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
    const originalContent = content;

    // Replace href="..." ending in /index.html with /
    content = content.replace(/href="([^"]*?)\/index\.html"/g, 'href="$1/"');
    
    // Replace standalone href="index.html" with href="./"
    content = content.replace(/href="index\.html"/g, 'href="./"');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
    }
});

console.log(`Replaced index.html links in ${modifiedCount} files.`);
