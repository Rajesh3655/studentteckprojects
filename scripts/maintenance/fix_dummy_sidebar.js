const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const categories = ['ai-technology', 'internet-search-problems', 'deep-web'];

// Find all HTML files in a given category
function scanCategory(cat) {
    const p = path.join(ROOT_DIR, 'blog', cat);
    if (!fs.existsSync(p)) return [];
    return fs.readdirSync(p)
      .filter(f => f.endsWith('.html') && f !== 'index.html')
      .map(f => path.join(p, f));
}

// Extract Title from HTML
function getTitle(content) {
    const match = content.match(/<h1 id="article-title">(.*?)<\/h1>/);
    if (match) return match[1];
    
    // fallback to normal title
    const match2 = content.match(/<title>(.*?)<\/title>/);
    return match2 ? match2[1].split('–')[0].trim() : 'Related Article';
}

categories.forEach(cat => {
    const files = scanCategory(cat);
    
    // Extract metadata for all
    const articlesMap = files.map(f => {
        const content = fs.readFileSync(f, 'utf-8');
        const title = getTitle(content);
        const slug = path.basename(f);
        return { file: f, title, slug, content };
    });

    // We will pick 3 related articles. Just the first 3 that aren't the current one.
    articlesMap.forEach(target => {
        let related = articlesMap.filter(a => a.slug !== target.slug).slice(0, 3);
        
        let targetContent = target.content;
        
        const dummyHTML = `              <li><a href="#">[Related Article 1]</a></li>
              <li><a href="#">[Related Article 2]</a></li>
              <li><a href="#">[Related Article 3]</a></li>`;
              
        // We might also have it without the exact whitespace, use regex if needed
        let newRelatedHTML = '';
        if (related.length >= 1) newRelatedHTML += `              <li><a href="../../blog/${cat}/${related[0].slug}">${related[0].title}</a></li>\n`;
        if (related.length >= 2) newRelatedHTML += `              <li><a href="../../blog/${cat}/${related[1].slug}">${related[1].title}</a></li>\n`;
        if (related.length >= 3) newRelatedHTML += `              <li><a href="../../blog/${cat}/${related[2].slug}">${related[2].title}</a></li>`;
        
        // Exact replacement
        if (targetContent.includes('<li><a href="#">[Related Article 1]</a></li>')) {
            targetContent = targetContent.replace(
                /<li><a href="#">\[Related Article 1\]<\/a><\/li>\s*<li><a href="#">\[Related Article 2\]<\/a><\/li>\s*<li><a href="#">\[Related Article 3\]<\/a><\/li>/, 
                newRelatedHTML
            );
            fs.writeFileSync(target.file, targetContent, 'utf-8');
            console.log("Fixed dummy links in:", path.relative(ROOT_DIR, target.file));
        }
    });

});
