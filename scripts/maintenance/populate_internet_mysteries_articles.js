const fs = require('fs');
const path = require('path');

const TEMPLATE_PATH = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\blog\\article-template.html';
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

const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

topics.forEach(({title, slug}) => {
  // Replace placeholders in the template
  let html = template
    .replace(/\[Article Title\]/g, title)
    .replace(/\[Category Name\]/g, 'Internet Mysteries')
    .replace(/\[CATEGORY\]/g, 'internet-mysteries')
    .replace(/\[SLUG\]/g, slug)
    .replace(/\[Author Name\]/g, 'Rajesh K')
    .replace(/\[Author\]/g, 'Rajesh K')
    .replace(/\[YYYY-MM-DD\]/g, '2026-03-24')
    .replace(/\[BRIEF DESCRIPTION\]/g, `${title} – In‑depth analysis, practical examples, and actionable tips.`)
    .replace(/href="\.\.\/style\.min\.css"/g, 'href="../../style.min.css"');

  // Ensure CSS path for article depth (2 levels up)
  const outputPath = path.join(BLOG_DIR, `${slug}.html`);
  fs.writeFileSync(outputPath, html);
  console.log(`Generated article: ${outputPath}`);
});

console.log('All Internet Mysteries articles generated with premium template.');
