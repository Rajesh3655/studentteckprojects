const fs = require('fs');
const path = require('path');

const BASE_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(BASE_DIR, 'blog');
const INDEX_PATH = path.join(BASE_DIR, 'index.html');

const categories = [
    'ai-technology',
    'internet-search-problems',
    'deep-web',
    'government-data',
    'research-databases',
    'student-opportunities',
    'internet-mysteries'
];

function updateIndexLatest() {
    let allArticles = [];
    
    categories.forEach(cat => {
        const dir = path.join(BLOG_DIR, cat);
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'article-template.html');
            files.forEach(file => {
                const content = fs.readFileSync(path.join(dir, file), 'utf-8');
                const titleMatch = content.match(/<h1[^>]*>(.*?)<\/h1>/);
                const descMatch = content.match(/<meta name="description" content="(.*?)"/);
                const tagMatch = content.match(/<span class="tag (cat-.*?)">(.*?)<\/span>/);
                
                if (titleMatch) {
                    allArticles.push({
                        title: titleMatch[1],
                        desc: descMatch ? descMatch[1] : '',
                        tagClass: tagMatch ? tagMatch[1] : 'cat-ai',
                        tagName: tagMatch ? tagMatch[2] : 'Tech',
                        url: `./blog/${cat}/${file}`,
                        mtime: fs.statSync(path.join(dir, file)).mtime
                    });
                }
            });
        }
    });

    // Sort by most recent
    allArticles.sort((a, b) => b.mtime - a.mtime);
    const latest = allArticles.slice(0, 10);

    let indexContent = fs.readFileSync(INDEX_PATH, 'utf-8');
    
    const latestHtml = latest.map((art, index) => `
          <article class="article-card">
            <div class="article-card-number">${(10 - index).toString().padStart(2, '0')}</div>
            <div class="article-card-body">
              <div class="article-card-meta">
                <span class="tag ${art.tagClass}">${art.tagName}</span>
                <time datetime="2026-03-24">March 24, 2026</time>
                <span>7 min read</span>
              </div>
              <h3 style="font-size:1.25rem;"><a href="${art.url}">${art.title}</a></h3>
              <p class="excerpt">${art.desc}</p>
              <a href="${art.url}" class="read-more">Read article →</a>
            </div>
          </article>`).join('\n');

    const startMarker = '<div class="article-list">';
    const endMarker = '</div><!-- /.article-list -->';
    
    const startIdx = indexContent.indexOf(startMarker) + startMarker.length;
    const endIdx = indexContent.indexOf(endMarker);
    
    if (startIdx !== -1 && endIdx !== -1) {
        indexContent = indexContent.slice(0, startIdx) + '\n' + latestHtml + '\n        ' + indexContent.slice(endIdx);
        // Also update the count in the button
        indexContent = indexContent.replace(/View All \d+\+ Articles/, `View All ${allArticles.length}+ Articles`);
        fs.writeFileSync(INDEX_PATH, indexContent);
        console.log(`Updated index.html with ${latest.length} latest articles and total count of ${allArticles.length}.`);
    } else {
        console.error("Could not find markers in index.html");
    }
}

updateIndexLatest();
