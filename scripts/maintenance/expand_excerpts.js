const fs = require('fs');
const path = require('path');

const CAT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\categories';
const categories = fs.readdirSync(CAT_DIR).filter(f => f.endsWith('.html'));

function expandExcerpt(excerpt) {
  // If excerpt already > 200 chars, leave it.
  if (excerpt.replace(/<[^>]*>/g, '').length > 200) return excerpt;
  // Add two generic SEO-friendly sentences.
  const extra = ' This article provides in‑depth analysis, practical examples, and actionable tips to help readers master the topic and apply it in real‑world projects.';
  return excerpt.replace('</p>', extra + '</p>');
}

let totalFixed = 0;
categories.forEach(cat => {
  const filePath = path.join(CAT_DIR, cat);
  let html = fs.readFileSync(filePath, 'utf-8');
  const regex = /<p class="excerpt">([\s\S]*?)<\/p>/g;
  let changed = false;
  html = html.replace(regex, (match, p1) => {
    const newP = expandExcerpt(match);
    if (newP !== match) {
      changed = true;
      totalFixed++;
    }
    return newP;
  });
  if (changed) {
    fs.writeFileSync(filePath, html);
    console.log(`Expanded excerpts in ${cat}`);
  }
});
console.log(`Total excerpts expanded: ${totalFixed}`);
