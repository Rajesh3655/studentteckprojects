const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const htmlFiles = [];

// Recursive function to get all HTML files
function getHtmlFiles(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!file.startsWith('.') && file !== 'node_modules') {
                getHtmlFiles(fullPath);
            }
        } else if (file.endsWith('.html')) {
            htmlFiles.push(fullPath);
        }
    });
}

getHtmlFiles(baseDir);

let count = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace exact occurrences of 'style.css' inside href attributes with 'style.min.css'
    // E.g., href="/style.css", href="../style.css", href="../../style.css"
    const newContent = content.replace(/href="([^"]*)style\.css"/g, 'href="$1style.min.css"');

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        count++;
    }
});

console.log(`Updated CSS links to use style.min.css in ${count} HTML files.`);
