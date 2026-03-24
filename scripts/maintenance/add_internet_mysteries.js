const fs = require('fs');
const path = require('path');

const CATEGORY_FILE = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\categories\\internet-mysteries.html';
const BLOG_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\blog\\internet-mysteries';

if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, {recursive:true});

const topics = [
  {title:'Why Websites Suddenly Disappear from the Internet',slug:'why-websites-disappear-from-internet'},
  {title:'What Happens When a Website Gets Deleted Forever',slug:'what-happens-when-website-deleted-forever'},
  {title:'How the Internet Archive Saves Lost Websites',slug:'how-internet-archive-saves-lost-websites'},
  {title:'Lost Websites and Forgotten Internet History',slug:'lost-websites-forgotten-history'},
  {title:'Why Some Information Gets Removed from Google',slug:'why-information-removed-from-google'},
  {title:'How Digital Data Can Be Lost Permanently',slug:'how-digital-data-lost-permanently'},
  {title:'Strange Internet Phenomena Nobody Can Explain',slug:'strange-internet-phenomena'},
  {title:'How Old Internet Content Is Preserved',slug:'how-old-internet-content-preserved'},
  {title:'Why Some Pages Exist but Cannot Be Found',slug:'why-pages-exist-cannot-be-found'},
  {title:'The Hidden History of the Early Internet',slug:'hidden-history-early-internet'}
];

// 1. Generate article files
let articleNumber = 6; // start after existing 5
topics.forEach(({title, slug}) => {
  const filePath = path.join(BLOG_DIR, `${slug}.html`);
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} – Student Tech Project Hub</title>
  <meta name="description" content="${title} – In‑depth analysis, practical examples, and actionable tips for understanding this internet mystery." />
  <meta name="keywords" content="internet mystery, ${title.toLowerCase()}, digital archaeology, web preservation" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://studenttechprojects.in/blog/internet-mysteries/${slug}.html" />
  <link rel="stylesheet" href="../../style.min.css" />
</head>
<body>
  <header class="site-header"><div class="container"><a href="../../" class="site-logo"><span class="logo-text">Student Tech Project Hub</span><span class="logo-sub">studenttechprojects.in</span></a></header>
  <main id="main" class="container">
    <article aria-labelledby="article-title">
      <header class="article-header">
        <div style="margin-bottom:1rem;"><a href="../../categories/internet-mysteries.html" class="tag cat-mystery">Internet Mysteries</a></div>
        <h1 id="article-title">${title}</h1>
        <div class="article-meta"><div class="author"><div class="author-avatar">R</div><span>By Rajesh K</span></div><time datetime="2026-03-24">March 24, 2026</time><span>7 min read</span></div>
      </header>
      <div class="article-body">
        <p>Placeholder content for "${title}". This section will be expanded with detailed research, examples, and actionable guidance.</p>
        <h2>Background</h2>
        <p>Explain the context and why this topic matters in the digital world.</p>
        <h2>Key Points</h2>
        <ul>
          <li>First important aspect.</li>
          <li>Second important aspect.</li>
          <li>Third important aspect.</li>
        </ul>
        <h2>Conclusion</h2>
        <p>Summarize the findings and suggest next steps for readers.</p>
      </div>
    </article>
  </main>
  <footer class="site-footer"><div class="container"><div class="footer-bottom"><p>&copy; 2026 Student Tech Project Hub · <a href="https://studenttechprojects.in">studenttechprojects.in</a></p></div></div></footer>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const toggle = document.getElementById('nav-toggle');
      const nav = document.getElementById('main-nav');
      if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
    });
  </script>
</body>
</html>`;
  fs.writeFileSync(filePath, content);
  console.log(`Created article ${slug}.html`);
  articleNumber++;
});

// 2. Insert article cards into category page
let catHtml = fs.readFileSync(CATEGORY_FILE, 'utf-8');
// Find the line before pagination div
const paginationIdx = catHtml.indexOf('<div class="pagination" id="pagination-controls"');
if (paginationIdx === -1) {
  console.error('Pagination div not found');
  process.exit(1);
}
let insertion = '';
articleNumber = 6;
topics.forEach(({title, slug}) => {
  insertion += `            <article class="article-card">
              <div class="article-card-number">${articleNumber}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag cat-mystery">Internet Mysteries</span>
                  <time datetime="2026-03-24">March 24, 2026</time>
                  <span>7 min read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="../blog/internet-mysteries/${slug}.html">${title}</a></h2>
                <p class="excerpt">${title} – In‑depth analysis, practical examples, and actionable tips for understanding this internet mystery.</p>
                <a href="../blog/internet-mysteries/${slug}.html" class="read-more">Read article →</a>
              </div>
            </article>
`;
  articleNumber++;
});

// Insert before pagination div
const before = catHtml.slice(0, paginationIdx);
const after = catHtml.slice(paginationIdx);
catHtml = before + insertion + after;
fs.writeFileSync(CATEGORY_FILE, catHtml);
console.log('Updated internet-mysteries category page with new articles.');
