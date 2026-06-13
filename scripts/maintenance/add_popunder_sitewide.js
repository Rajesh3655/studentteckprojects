const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..', '..');
const POPUNDER_SRC = 'https://pl29731159.effectivecpmnetwork.com/ba/a5/86/baa5864798a800127efce1373c3d2a4c.js';
const POPUNDER_SNIPPET = `  <script src="${POPUNDER_SRC}"></script>\n`;

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
  if (html.includes(POPUNDER_SRC)) {
    continue;
  }

  const headIndex = html.lastIndexOf('</head>');
  if (headIndex === -1) {
    continue;
  }

  html = html.slice(0, headIndex) + POPUNDER_SNIPPET + html.slice(headIndex);
  fs.writeFileSync(filePath, html, 'utf8');
  updated++;
  console.log(`Injected popunder into ${path.relative(ROOT_DIR, filePath)}`);
}

console.log(`Done. Updated ${updated} HTML file(s).`);
