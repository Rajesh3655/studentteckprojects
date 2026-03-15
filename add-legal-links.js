const fs = require('fs');
const path = require('path');

const baseDir = __dirname;

function getHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            results = results.concat(getHtmlFiles(fullPath));
        } else if (file.endsWith('.html') && file !== 'privacy-policy.html' && file !== 'terms-of-service.html') {
            results.push(fullPath);
        }
    });
    return results;
}

const htmlFiles = getHtmlFiles(baseDir);
let count = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // We already have the new full footer in privacy-policy.html / terms-of-service.html, so we're skipping them.
    // Let's modify all other pages.

    if (!content.includes('privacy-policy.html')) {
        const relBase = path.relative(path.dirname(file), baseDir).replace(/\\/g, '/');
        const prefix = relBase === '' ? '.' : relBase;
        const ppLink = `${prefix}/privacy-policy.html`;
        const tosLink = `${prefix}/terms-of-service.html`;

        const newLinks = `\n<div style="text-align:center; font-size: 0.9em; margin-top: 1rem;"><a href="${ppLink}">Privacy Policy</a> &nbsp;|&nbsp; <a href="${tosLink}">Terms of Service</a></div>\n`;

        // Inject right before the closing </footer> or closing </div> inside footer-bottom
        content = content.replace(/(2026 Student Tech Project Hub <a href="https:\/\/studenttechprojects.in">studenttechprojects.in<\/a><\/p>)/, `$1${newLinks}`);
        
        fs.writeFileSync(file, content, 'utf8');
        count++;
    }
});

console.log(`Successfully added Privacy Policy and Terms of Service links to ${count} HTML files.`);
