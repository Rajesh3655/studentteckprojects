const fs = require('fs');
const path = require('path');

const DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\blog\\deep-web';

if (fs.existsSync(DIR)) {
    const files = fs.readdirSync(DIR).filter(f => f.endsWith('.html'));
    files.forEach(file => {
        const fullPath = path.join(DIR, file);
        let content = fs.readFileSync(fullPath, 'utf-8');
        let newContent = content.split('categories/deep-web.html').join('categories/deep-web-resources.html');
        // Also check if there's any other place like that
        if (content !== newContent) {
            fs.writeFileSync(fullPath, newContent, 'utf-8');
            console.log("Fixed deep-web categories link in: " + file);
        }
    });
}
