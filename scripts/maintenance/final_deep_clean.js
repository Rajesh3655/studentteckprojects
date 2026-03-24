const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';

// 1. Files to delete (the old, non-premium versions)
const filesToDelete = [
    'blog/student-opportunities/research-internships-abroad.html',
    'blog/student-opportunities/technology-fellowships-list.html',
    'blog/student-opportunities/free-certification-programs-online.html',
    'blog/student-opportunities/remote-internships-for-students.html',
    'blog/student-opportunities/government-fellowships-ignored-by-students.html',
    'blog/internet-mysteries/why-old-websites-vanish.html',
    'blog/internet-mysteries/how-internet-archive-works.html',
    'blog/internet-mysteries/how-knowledge-evolves-online.html',
    'blog/internet-mysteries/how-digital-data-lost-permanently.html'
];

filesToDelete.forEach(f => {
    const p = path.join(SITE_ROOT, f);
    if (fs.existsSync(p)) {
        fs.unlinkSync(p);
        console.log(`Deleted redundant: ${f}`);
    }
});

// 2. Cleanup Homepage (Latest Articles)
const indexFile = path.join(SITE_ROOT, 'index.html');
let indexHtml = fs.readFileSync(indexFile, 'utf-8');

// List of current premium articles for the homepage
const latestArticles = `
          <article class="article-card">
            <div class="article-card-number">01</div>
            <div class="article-card-body">
              <div class="article-card-meta">
                <span class="tag cat-mystery">Internet Mysteries</span>
                <time datetime="2026-03-24">March 24, 2026</time>
                <span>7 min read</span>
              </div>
              <h3 ><a href="./blog/internet-mysteries/hidden-history-early-internet.html">The Hidden History of the Early Internet</a></h3>
              <p class="excerpt">Discover the experimental, chaotic, and often weird origins of our global digital world that search engines have long forgotten.</p>
              <a href="./blog/internet-mysteries/hidden-history-early-internet.html" class="read-more">Read article →</a>
            </div>
          </article>

          <article class="article-card">
            <div class="article-card-number">02</div>
            <div class="article-card-body">
              <div class="article-card-meta">
                <span class="tag cat-student">Opportunities</span>
                <time datetime="2026-03-24">March 24, 2026</time>
                <span>7 min read</span>
              </div>
              <h3 ><a href="./blog/student-opportunities/hidden-scholarships-indian-students-2026-guide.html">Hidden Scholarships for Indian Students</a></h3>
              <p class="excerpt">Explore academic scholarships in India for 2026 that are often overlooked by students but provide significant funding.</p>
              <a href="./blog/student-opportunities/hidden-scholarships-indian-students-2026-guide.html" class="read-more">Read article →</a>
            </div>
          </article>

          <article class="article-card">
            <div class="article-card-number">03</div>
            <div class="article-card-body">
              <div class="article-card-meta">
                <span class="tag cat-ai">AI Technology</span>
                <time datetime="2026-03-24">March 24, 2026</time>
                <span>7 min read</span>
              </div>
              <h3 ><a href="./blog/ai-technology/ai-agent-architecture.html">How AI Agents Work: Architecture Explained</a></h3>
              <p class="excerpt">A comprehensive guide on the internal architecture of AI agents, from reasoning loops to multi-agent collaboration systems.</p>
              <a href="./blog/ai-technology/ai-agent-architecture.html" class="read-more">Read article →</a>
            </div>
          </article>
`;

// Replace the article list section on the homepage
const startTag = '<div class="article-list">';
const endTag = '</div><!-- /.article-list -->';
const startIndex = indexHtml.indexOf(startTag);
const endIndex = indexHtml.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    indexHtml = indexHtml.substring(0, startIndex + startTag.length) + latestArticles + indexHtml.substring(endIndex);
    fs.writeFileSync(indexFile, indexHtml);
    console.log('Homepage "Latest Articles" cleaned up.');
}
