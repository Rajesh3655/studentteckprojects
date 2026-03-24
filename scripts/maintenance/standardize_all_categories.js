const fs = require('fs');
const path = require('path');

const CAT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\categories';
const FILES = fs.readdirSync(CAT_DIR).filter(f => f.endsWith('.html'));

function standardize(filePath) {
  let html = fs.readFileSync(filePath, 'utf-8');
  
  // Find start of list and start of pagination
  const startMarker = '<div class="article-list">';
  const endMarker = '<div class="pagination" id="pagination-controls"></div>';
  
  const startIndex = html.indexOf(startMarker);
  const endIndex = html.indexOf(endMarker);
  
  if (startIndex === -1 || endIndex === -1) {
    console.log(`Markers not found in ${path.basename(filePath)} skipping.`);
    return;
  }
  
  const content = html.substring(startIndex + startMarker.length, endIndex);
  
  // Extract all cards
  // Regex for article cards - being careful to handle nested content
  const cardRegex = /<article class="article-card">([\s\S]*?)<\/article>/g;
  let matches = [...content.matchAll(cardRegex)];
  
  if (matches.length === 0) {
    console.log(`No cards found in ${path.basename(filePath)} skipping.`);
    return;
  }
  
  let newContent = '\n';
  matches.forEach((match, index) => {
    let cardBody = match[1];
    let num = (index + 1).toString().padStart(2, '0');
    
    // 1. Fix numbering
    cardBody = cardBody.replace(/<div class="article-card-number">.*?<\/div>/, `<div class="article-card-number">${num}</div>`);
    
    // 2. Standardize h3 to h2
    cardBody = cardBody.replace(/<h3>/g, '<h2 style="font-size:1.25rem;">').replace(/<\/h3>/g, '</h2>');
    
    // 3. Ensure excerpts are clean and long enough (previous script already did some of this, but we reinforce)
    
    newContent += `            <article class="article-card">\n${cardBody}\n            </article>\n`;
  });
  
  newContent += '          </div>\n          ';
  
  const finalHtml = html.substring(0, startIndex + startMarker.length) + newContent + html.substring(endIndex);
  fs.writeFileSync(filePath, finalHtml);
  console.log(`Standardized ${path.basename(filePath)} with ${matches.length} articles.`);
}

FILES.forEach(f => standardize(path.join(CAT_DIR, f)));
console.log('Site-wide category standardization complete.');
