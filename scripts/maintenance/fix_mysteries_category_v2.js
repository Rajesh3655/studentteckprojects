const fs = require('fs');
const path = require('path');

const CAT_FILE = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\categories\\internet-mysteries.html';
let html = fs.readFileSync(CAT_FILE, 'utf-8');

// 1. Fix the article-list nesting
// Remove all existing articles and re-insert them inside one clean article-list div
const startMarker = '<div class="article-list">';
const endMarker = '<div class="pagination" id="pagination-controls"></div>';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error('Markers not found');
    process.exit(1);
}

const before = html.substring(0, startIndex + startMarker.length);
const after = html.substring(endIndex);

// New high-quality cards
const cards = [
    { num: '01', title: 'Why Websites Disappear', slug: 'why-websites-disappear-from-internet', date: 'March 15, 2026', read: '5 min', excerpt: 'The real reasons websites vanish and how to preserve them with modern digital archiving tools.' },
    { num: '02', title: 'Why Old Websites Vanish', slug: 'why-old-websites-vanish', date: 'March 15, 2026', read: '5 min', excerpt: 'Why classic internet era sites eventually die and what replaces them in the modern high-speed web.' },
    { num: '03', title: 'How the Internet Archive Works', slug: 'how-internet-archive-works', date: 'March 15, 2026', read: '5 min', excerpt: 'How the Wayback Machine crawls, saves, and reconstructs the historic internet for future researchers.' },
    { num: '04', title: 'Why Information Changes Online', slug: 'why-information-changes-online', date: 'March 15, 2026', read: '5 min', excerpt: 'Why digital content is rarely permanent and how version control is shaping our collective memory.' },
    { num: '05', title: 'How Knowledge Evolves Online', slug: 'how-knowledge-evolves-online', date: 'March 15, 2026', read: '5 min', excerpt: 'How Wikipedia, Science, and AI reshape how we store and access human knowledge in the 21st century.' },
    { num: '06', title: 'Why Websites Suddenly Disappear', slug: 'why-websites-disappear-from-internet', date: 'March 24, 2026', read: '7 min', excerpt: 'Discover the technical and legal forces that cause thousands of websites to vanish from the digital landscape daily.' },
    { num: '07', title: 'What Happens When a Website Is Deleted', slug: 'what-happens-when-website-deleted-forever', date: 'March 24, 2026', read: '7 min', excerpt: 'Explore the technical aftermath of website deletion and the traces left behind in the global digital fossil record.' },
    { num: '08', title: 'How the Internet Archive Saves Lost Sites', slug: 'how-internet-archive-saves-lost-websites', date: 'March 24, 2026', read: '7 min', excerpt: 'Learn about the Herculean task of archiving the entire internet and how you can contribute to digital preservation.' },
    { num: '09', title: 'Lost Websites and Forgotten History', slug: 'lost-websites-forgotten-history', date: 'March 24, 2026', read: '7 min', excerpt: 'Travel back to the era of GeoCities and MySpace to see how much of our early digital culture has already been lost.' },
    { num: '10', title: 'Why Information Gets Removed from Google', slug: 'why-information-removed-from-google', date: 'March 24, 2026', read: '7 min', excerpt: 'Understand the "Right to be Forgotten" and how search engine indexing is shaped by legal and corporate policies.' },
    { num: '11', title: 'How Digital Data Can Be Lost Permanently', slug: 'how-digital-data-lost-permanently', date: 'March 24, 2026', read: '7 min', excerpt: 'From Bit Rot to hardware failure, learn the hidden enemies of digital data longevity and how to defeat them.' },
    { num: '12', title: 'Strange Internet Phenomena Explained', slug: 'strange-internet-phenomena', date: 'March 24, 2026', read: '7 min', excerpt: 'Explore the unsolved puzzles of the web, from Cicada 3301 to mysterious "ghost" servers running for decades.' },
    { num: '13', title: 'How Old Internet Content Is Preserved', slug: 'how-old-internet-content-preserved', date: 'March 24, 2026', read: '7 min', excerpt: 'Discover the grassroots efforts and volunteer archivists saving the web one page at a time with custom tools.' },
    { num: '14', title: 'Why Some Pages Exist but Cannot Be Found', slug: 'why-pages-exist-cannot-be-found', date: 'March 24, 2026', read: '7 min', excerpt: 'Uncover the "Invisible Web" and why search engines only show you a tiny fraction of what is actually online.' },
    { num: '15', title: 'The Hidden History of the Early Internet', slug: 'hidden-history-early-internet', date: 'March 24, 2026', read: '7 min', excerpt: 'Go beyond the history books to discover the experimental and often chaotic origins of our global digital world.' }
];

let cardHtml = '\n';
cards.forEach(c => {
    cardHtml += `            <article class="article-card">
              <div class="article-card-number">${c.num}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag cat-mystery">Internet Mysteries</span>
                  <time datetime="2026-03-24">${c.date}</time>
                  <span>${c.read} read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="../blog/internet-mysteries/${c.slug}.html">${c.title}</a></h2>
                <p class="excerpt">${c.excerpt}</p>
                <a href="../blog/internet-mysteries/${c.slug}.html" class="read-more">Read article →</a>
              </div>
            </article>\n`;
});

cardHtml += '          </div>\n          ';

fs.writeFileSync(CAT_FILE, before + cardHtml + after);
console.log('Fixed Internet Mysteries category page structure and content.');
