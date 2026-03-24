const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';

const categories = {
    'student-opportunities': {
        name: 'Student Opportunities',
        file: 'student-opportunities.html',
        css: 'student'
    },
    'internet-mysteries': {
        name: 'Internet Mysteries',
        file: 'internet-mysteries.html',
        css: 'mystery'
    }
};

function fixBreadcrumbs(categoryKey) {
    const info = categories[categoryKey];
    const dir = path.join(SITE_ROOT, 'blog', categoryKey);
    
    if (!fs.existsSync(dir)) return;

    fs.readdirSync(dir).forEach(file => {
        if (file.endsWith('.html')) {
            const fullPath = path.join(dir, file);
            let html = fs.readFileSync(fullPath, 'utf-8');
            
            // 1. Get real title
            const titleMatch = html.match(/<h1 id="article-title">([^<]+)<\/h1>/);
            const realTitle = titleMatch ? titleMatch[1].trim() : 'Article';

            // 2. Replace breadcrumbs
            html = html.replace(
                /<li><a href="\.\.\/\.\.\/categories\/\[CATEGORY\]\.html">\[Category Name\]<\/a><\/li>\s*<li>\[Article Title\]<\/li>/,
                `<li><a href="../../categories/${info.file}">${info.name}</a></li>\n        <li>${realTitle}</li>`
            );

            // 3. Replace tag if placeholder
            html = html.replace(
                /<a href="\.\.\/\.\.\/categories\/\[CATEGORY\]\.html" class="tag cat-\[CSS-CLASS\]">\[Category Name\]<\/a>/,
                `<a href="../../categories/${info.file}" class="tag cat-${info.css}">${info.name}</a>`
            );

            fs.writeFileSync(fullPath, html);
            console.log(`Fixed breadcrumbs for: ${categoryKey}/${file}`);
        }
    });
}

fixBreadcrumbs('student-opportunities');
fixBreadcrumbs('internet-mysteries');
console.log('Finished fixing breadcrumbs.');
