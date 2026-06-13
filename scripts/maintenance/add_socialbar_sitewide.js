const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..', '..');
const SOCIALBAR_SRC = 'https://pl29731161.effectivecpmnetwork.com/51/c6/20/51c620f0d6c70fe9e1688eb5a852e94b.js';
const SOCIALBAR_SNIPPET = `  <script src="${SOCIALBAR_SRC}"></script>\n`;

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
  if (html.includes(SOCIALBAR_SRC)) {
    continue;
  }

  const bodyIndex = html.lastIndexOf('</body>');
  if (bodyIndex === -1) {
    continue;
  }

  html = html.slice(0, bodyIndex) + SOCIALBAR_SNIPPET + html.slice(bodyIndex);
  fs.writeFileSync(filePath, html, 'utf8');
  updated++;
  console.log(`Injected social bar into ${path.relative(ROOT_DIR, filePath)}`);
}

console.log(`Done. Updated ${updated} HTML file(s).`);
