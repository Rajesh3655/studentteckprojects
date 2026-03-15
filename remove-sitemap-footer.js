const fs = require('fs');
const path = require('path');

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            results = results.concat(getFiles(fullPath));
        } else if (file.endsWith('.html')) {
            results.push(fullPath);
        }
    });
    return results;
}

const files = getFiles(process.cwd());
let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Remove variations of Sitemap links
    let newContent = content
        .replace(/<li><a href="[^"]*sitemap\.xml">Sitemap<\/a><\/li>/g, '')
        .replace(/·\s*<a href="[^"]*sitemap\.xml">Sitemap<\/a>/g, '')
        .replace(/(?:·\s*)?<a href="[^"]*sitemap\.xml">Sitemap<\/a>(?:\s*·)?/g, ''); 
        
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        updatedCount++;
    }
});

console.log(`Removed sitemap links from the footers of ${updatedCount} HTML files.`);
