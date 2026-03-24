const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';

function cleanupCategory(categoryFile, keepFromIndex) {
    const filePath = path.join(SITE_ROOT, 'categories', categoryFile);
    let html = fs.readFileSync(filePath, 'utf-8');

    // Simple regex to find all <article class="article-card"> blocks
    const articleRegex = /<article class="article-card">[\s\S]*?<\/article>/g;
    const articles = html.match(articleRegex);

    if (articles && articles.length > keepFromIndex) {
        // Keep only the articles from keepFromIndex to the end
        const premiumArticles = articles.slice(keepFromIndex);
        
        // Renumber them
        const renumberedArticles = premiumArticles.map((article, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            return article.replace(/<div class="article-card-number">.*?<\/div>/, `<div class="article-card-number">${num}</div>`);
        });

        // Replace the entire article list area
        const startTag = '<div class="article-list">';
        const endTag = '</div>\n          <div class="pagination"';
        
        const startIndex = html.indexOf(startTag);
        const endIndex = html.indexOf(endTag);

        if (startIndex !== -1 && endIndex !== -1) {
            html = html.substring(0, startIndex + startTag.length) + '\n            ' + renumberedArticles.join('\n            ') + '\n          ' + html.substring(endIndex);
            fs.writeFileSync(filePath, html);
            console.log(`Cleaned up ${categoryFile}: Kept ${renumberedArticles.length} premium articles.`);
        }
    }
}

// For Internet Mysteries, the first 5 are old, keep the last 10 (index 5 to 14)
cleanupCategory('internet-mysteries.html', 5);

// For Student Opportunities, the first 5 are old, keep the last 10 (index 5 to 14)
cleanupCategory('student-opportunities.html', 5);
