const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';

// 1. Minify CSS (Simple minifier)
function minifyCSS() {
    const cssPath = path.join(SITE_ROOT, 'style.css');
    const minPath = path.join(SITE_ROOT, 'style.min.css');
    if (!fs.existsSync(cssPath)) return;
    
    let css = fs.readFileSync(cssPath, 'utf-8');
    // Remove comments
    css = css.replace(/\/\*[\s\S]*?\*\//g, '');
    // Remove whitespace
    css = css.replace(/\s+/g, ' ');
    css = css.replace(/ ?\{ ?/g, '{');
    css = css.replace(/ ?\} ?/g, '}');
    css = css.replace(/ ?\: ?/g, ':');
    css = css.replace(/ ?\; ?/g, ';');
    css = css.replace(/ ?, ?/g, ',');
    
    fs.writeFileSync(minPath, css.trim());
    console.log('CSS Minified.');
}

// 2. Process HTML Files
function processHTML(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(f => {
        const fp = path.join(dir, f);
        if (fs.statSync(fp).isDirectory()) {
            if (f !== 'scripts' && f !== '.git' && f !== 'assets') {
                processHTML(fp);
            }
        } else if (f.endsWith('.html')) {
            let html = fs.readFileSync(fp, 'utf-8');
            
            // a. Replace common inline styles
            html = html.replace(/style="padding: 2rem 0 1rem;"/g, 'class="category-header"');
            html = html.replace(/style="margin-bottom:1rem; display:inline-block;"/g, 'class="tag-block"');
            html = html.replace(/style="font-size:1.15rem; color:var\(--color-text-muted\); max-width:680px;"/g, 'class="page-intro-text"');
            html = html.replace(/style="font-size:1.25rem;"/g, ''); // Handled by CSS now for h3
            html = html.replace(/style="border-radius: 50px; padding: 0.8rem 2rem; font-weight: 600;"/g, 'class="btn-pill"');
            html = html.replace(/style="grid-template-columns: repeat\(auto-fill, minmax\(240px, 1fr\)\);"/g, 'class="grid-standard"');
            html = html.replace(/style="font-size:0.8rem; margin-top:0.5rem;"/g, 'class="footer-meta-sm"');
            
            // b. Remove Dev Comments
            html = html.replace(/<!-- ══════════════════════════════════════════════════════[\s\S]*?══════════════════════════════════════════════════════ -->/g, '');
            html = html.replace(/<!-- ##################################################[\s\S]*?################################################## -->/g, '');
            
            // c. Ensure it uses minified CSS
            html = html.replace(/href="([^"]*)style\.css"/g, 'href="$1style.min.css"');

            fs.writeFileSync(fp, html);
            console.log(`Optimized: ${path.relative(SITE_ROOT, fp)}`);
        }
    });
}

minifyCSS();
processHTML(SITE_ROOT);

console.log('Project Cleanup & Optimization Complete.');
