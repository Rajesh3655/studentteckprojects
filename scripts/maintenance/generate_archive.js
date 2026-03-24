const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_ROOT = path.join(SITE_ROOT, 'blog');

const categories = {
    'ai-technology': '🤖 AI Technology',
    'internet-search-problems': '🔍 Internet Search Problems',
    'deep-web': '🌐 Deep Web Resources',
    'government-data': '🏛️ Government Data',
    'research-databases': '📚 Research Databases',
    'student-opportunities': '🎯 Student Opportunities',
    'internet-mysteries': '🕵️ Internet Mysteries'
};

let archiveData = {};

Object.keys(categories).forEach(cat => {
    archiveData[cat] = {
        title: categories[cat],
        articles: []
    };
    const catPath = path.join(BLOG_ROOT, cat);
    if (fs.existsSync(catPath)) {
        const files = fs.readdirSync(catPath);
        files.forEach(f => {
            if (f.endsWith('.html') && f !== 'index.html') {
                const content = fs.readFileSync(path.join(catPath, f), 'utf-8');
                const titleMatch = content.match(/<title>(.*?) –/);
                const title = titleMatch ? titleMatch[1] : f.replace('.html', '').replace(/-/g, ' ');
                archiveData[cat].articles.push({
                    title: title,
                    url: `./blog/${cat}/${f}`
                });
            }
        });
        // Sort articles alphabetically
        archiveData[cat].articles.sort((a, b) => a.title.localeCompare(b.title));
    }
});

let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Article Archive – Student Tech Project Hub</title>
    <meta name="description" content="Complete list of all articles published on Student Tech Project Hub. Explore AI, research, data, and opportunities.">
    <link rel="stylesheet" href="./style.min.css">
    <style>
        .archive-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 3rem; margin-top: 3rem; }
        .archive-cat h2 { 
            font-size: 1.25rem;
            border-bottom: 2px solid var(--color-primary); 
            padding-bottom: 0.75rem; 
            margin-bottom: 1.5rem; 
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .archive-list { list-style: none; padding: 0; }
        .archive-list li { margin-bottom: 0.75rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.5rem; }
        .archive-list li:last-child { border-bottom: none; }
        .archive-list a { color: var(--color-text); text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: var(--transition); }
        .archive-list a:hover { color: var(--color-primary); transform: translateX(5px); display: inline-block; }
    </style>
</head>
<body>
    <header class="site-header">
        <div class="container">
            <a href="./" class="site-logo">
                <span class="logo-text">Student Tech Project Hub</span>
            </a>
            <nav class="site-nav">
                <a href="./">Home</a>
                <a href="./archive.html" class="active">Archive</a>
            </nav>
        </div>
    </header>

    <main class="container" style="padding: 5rem 1rem;">
        <span class="tag cat-ai" style="margin-bottom: 1rem; display: inline-block;">Knowledge Base</span>
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">Information Archive</h1>
        <p class="page-intro-text">A comprehensive, categorized directory of all high-quality articles and guides available on the platform.</p>

        <div class="archive-grid">
`;

Object.keys(archiveData).forEach(cat => {
    if (archiveData[cat].articles.length > 0) {
        html += `            <div class="archive-cat">
                <h2>${archiveData[cat].title}</h2>
                <ul class="archive-list">
`;
        archiveData[cat].articles.forEach(art => {
            html += `                    <li><a href="${art.url}">${art.title}</a></li>\n`;
        });
        html += `                </ul>
            </div>
`;
    }
});

html += `        </div>
    </main>

    <footer class="site-footer">
        <div class="container">
            <div style="padding-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 2rem;">
                <span class="logo-text" style="color: white; font-weight: 800; font-size: 1.2rem;">Student Tech Project Hub</span>
            </div>
            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.5);">© 2026 Student Tech Project Hub · <a href="./" style="color: inherit;">Home</a> · <a href="./archive.html" style="color: inherit;">Full Archive</a></p>
        </div>
    </footer>
</body>
</html>`;

fs.writeFileSync(path.join(SITE_ROOT, 'archive.html'), html);
console.log('Archive page regenerated with all current articles.');
