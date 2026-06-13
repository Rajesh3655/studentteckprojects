const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..', '..');
const SMARTLINK_URL = 'https://www.effectivecpmnetwork.com/b1i76bkcb?key=32d73fb96b5c496045994fa3d23c6acc';
const SMARTLINK_HTML = `\n        <p class="footer-sponsored"><a href="${SMARTLINK_URL}" target="_blank" rel="noopener sponsored">Sponsored Link</a></p>`;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

let updated = 0;

for (const filePath of walk(ROOT_DIR)) {
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes(SMARTLINK_URL)) {
    continue;
  }

  const footerBottomIndex = html.lastIndexOf('<div class="footer-bottom">');
  if (footerBottomIndex !== -1) {
    const insertAfter = html.indexOf('</div>', footerBottomIndex);
    if (insertAfter !== -1) {
      html = html.slice(0, insertAfter) + SMARTLINK_HTML + html.slice(insertAfter);
      fs.writeFileSync(filePath, html, 'utf8');
      updated++;
      console.log(`Injected smartlink into ${path.relative(ROOT_DIR, filePath)}`);
    }
  }
}

console.log(`Done. Updated ${updated} HTML file(s).`);
