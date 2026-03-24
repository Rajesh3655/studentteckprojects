const fs = require('fs');
const path = require('path');

const CAT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\categories';
const categories = fs.readdirSync(CAT_DIR).filter(f => f.endsWith('.html'));

categories.forEach(cat => {
    const filePath = path.join(CAT_DIR, cat);
    let html = fs.readFileSync(filePath, 'utf-8');
    
    // Clean up all existing pagination and closing div combinations
    // We want: </div> <!-- end article-list --> \n <div class="pagination" id="pagination-controls"></div> \n </div> <!-- end articles-wrapper -->
    
    // 1. Identify the article-list end and the sidebar start
    const siteContentStart = html.indexOf('<div class="site-content">');
    const sidebarStart = html.indexOf('<aside class="sidebar">');
    
    if (siteContentStart !== -1 && sidebarStart !== -1) {
        const preContent = html.slice(0, siteContentStart);
        const postContent = html.slice(sidebarStart);
        
        // Extract strictly the article-list part
        let middle = html.slice(siteContentStart, sidebarStart);
        
        // Find all articles and rebuild the middle
        const articleMatches = middle.match(/<article class="article-card">[\s\S]*?<\/article>/g);
        
        if (articleMatches) {
            let newMiddle = `<div class="site-content">
        <div>
          <div class="article-list">
            ${articleMatches.join('\n            ')}
          </div>
          <div class="pagination" id="pagination-controls"></div>
        </div>
        `;
            html = preContent + newMiddle + postContent;
        }
    }
    
    fs.writeFileSync(filePath, html);
    console.log(`Re-structured and cleaned pagination in ${cat}`);
});
