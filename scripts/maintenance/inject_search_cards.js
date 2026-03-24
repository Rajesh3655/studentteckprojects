const fs = require('fs');
const path = require('path');

const CATEGORY_HTML_PATH = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\categories\\internet-search-problems.html';

const articles = [
  { slug: "why-google-search-is-getting-worse-explained", title: "Why Google Search Is Getting Worse (Real Reasons Explained)", desc: "Discover why Google Search feels less effective today. We explore SEO spam, AI-generated content, ad dominance, and algorithmic shifts causing search decay." },
  { slug: "why-google-shows-outdated-results-even-in-2026", title: "Why Google Shows Outdated Results Even in 2026", desc: "Understand the technical mechanisms behind Google's crawling schedule and why outdated web pages still rank highly for modern searches." },
  { slug: "why-you-cant-find-some-information-on-the-internet", title: "Why You Can’t Find Some Information on the Internet", desc: "Explore the bounds of the indexed internet. Learn about the Deep Web, walled gardens, and why search engines aren't omniscient." },
  { slug: "how-google-decides-what-you-see-ranking-secrets", title: "How Google Decides What You See (Ranking Secrets)", desc: "A breakdown of Google's core ranking signals, from backlink profiles to user intent and semantic relevance." },
  { slug: "why-google-ignores-exact-keywords", title: "Why Google Ignores Exact Keywords You Type", desc: "Find out why Google frequently changes your search query and ignores specific words, favoring semantic meaning over strict matching." },
  { slug: "why-search-results-change-every-day", title: "Why Search Results Change Every Day (Behind the Algorithm)", desc: "An exploration of Google's continuous indexing, algorithm updates, and machine learning adjustments that make search volatile." },
  { slug: "why-google-shows-reddit-quora-first", title: "Why Google Shows Reddit and Quora Results First", desc: "Unpack exactly why Google's algorithm has pivoted to favor user-generated content platforms like Reddit and Quora over independent blogs." },
  { slug: "why-some-websites-never-appear-on-google", title: "Why Some Websites Never Appear on Google", desc: "Learn about the technical roadblocks preventing indexing, from rogue robots.txt files to Javascript rendering failures." },
  { slug: "how-search-engines-fail-technical-niche-topics", title: "How Search Engines Fail for Technical and Niche Topics", desc: "Understand the inherent limitations of broad algorithms when dealing with highly specialized academic, programming, or niche queries." },
  { slug: "why-your-search-results-are-different", title: "Why Your Search Results Are Different From Others", desc: "Discover how personalization, location tracking, and browser history create a unique 'filter bubble' for every Google user." }
];

let html = fs.readFileSync(CATEGORY_HTML_PATH, 'utf-8');

let newCards = '';
articles.forEach((art, index) => {
    let existingIndex = 11 + index;
    newCards += `
            <article class="article-card">
              <div class="article-card-number">${existingIndex}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag cat-search">Search Problems</span>
                  <time datetime="2026-03-24">March 24, 2026</time>
                  <span>6 min read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="../blog/internet-search-problems/${art.slug}.html">${art.title}</a></h2>
                <p class="excerpt">${art.desc}</p>
                <a href="../blog/internet-search-problems/${art.slug}.html" class="read-more">Read article →</a>
              </div>
            </article>\n`;
});

const paginationHTML = `
            <!-- Pagination Controls -->
            <div class="pagination" id="pagination-controls">
              <!-- JS will inject buttons here -->
            </div>
`;

const replaceTarget = /<\/div>\s*<\/div>\s*<aside class="sidebar">/;

html = html.replace(replaceTarget, newCards + "          </div>\n" + paginationHTML + "        </div>\n\n        <aside class=\"sidebar\">");

if (!html.includes('id="pagination-controls"')) {
    console.log("Failed to inject!");
} else {
    // Inject JS logic
    const scriptPos = html.lastIndexOf('</body>');
    const paginationScript = `
<script>
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.article-list');
  const cards = Array.from(list.querySelectorAll('.article-card'));
  const ITEMS_PER_PAGE = 10;
  let currentPage = 1;
  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
  const paginationControls = document.getElementById('pagination-controls');

  function renderPage(page) {
    cards.forEach((c, idx) => {
      c.style.display = (idx >= (page - 1) * ITEMS_PER_PAGE && idx < page * ITEMS_PER_PAGE) ? 'flex' : 'none';
    });
    renderControls(page);
    window.scrollTo({ top: list.parentElement.offsetTop - 100, behavior: 'smooth' });
  }

  function renderControls(page) {
    if(!paginationControls) return;
    paginationControls.innerHTML = '';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn' + (page === 1 ? ' disabled' : '');
    prevBtn.innerHTML = '← Prev';
    prevBtn.onclick = () => { if(page > 1) { currentPage--; renderPage(currentPage); } };
    paginationControls.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.className = 'page-btn' + (i === page ? ' active' : '');
      btn.innerHTML = i;
      btn.onclick = () => { currentPage = i; renderPage(currentPage); };
      paginationControls.appendChild(btn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn' + (page === totalPages ? ' disabled' : '');
    nextBtn.innerHTML = 'Next →';
    nextBtn.onclick = () => { if(page < totalPages) { currentPage++; renderPage(currentPage); } };
    paginationControls.appendChild(nextBtn);
  }

  if(cards.length > 0) {
    renderPage(1);
  }
});
</script>
`;
    html = html.slice(0, scriptPos) + paginationScript + html.slice(scriptPos);
    fs.writeFileSync(CATEGORY_HTML_PATH, html, 'utf-8');
    console.log("Injected perfectly.");
}
