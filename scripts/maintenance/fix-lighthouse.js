const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = __dirname;

// 1. UPDATE CSS FOR CONTRAST & REMOVE @IMPORT
let css = fs.readFileSync('style.css', 'utf8');
const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');`;
css = css.replace(fontImport, '');
css = css.replace(/--color-text-muted:\s*#475569;/g, '--color-text-muted:    #334155;');
css = css.replace(/--color-text-light:\s*#94a3b8;/g, '--color-text-light:    #475569;');
if (!css.includes('.article-body a { text-decoration: underline;')) {
    css += `\n.article-body a { text-decoration: underline; font-weight: 500; color: var(--color-primary-dark); }\n`;
}
fs.writeFileSync('style.css', css, 'utf8');

console.log("Re-minifying CSS...");
execSync('npx --yes clean-css-cli style.css -o style.min.css');

// 2. FIND ALL HTML FILES
const htmlFiles = [];
function getHtmlFiles(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!file.startsWith('.') && file !== 'node_modules') {
                getHtmlFiles(fullPath);
            }
        } else if (file.endsWith('.html')) {
            htmlFiles.push(fullPath);
        }
    });
}
getHtmlFiles(baseDir);

const fontLink = `<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;600;700&display=swap" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;600;700&display=swap"></noscript>`;

const delayedScripts = `
<script>
  // Lazy-load Third Party Scripts for 100/100 PageSpeed Performance
  setTimeout(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VBHBBYC1KK');

    const gtm = document.createElement('script');
    gtm.src = "https://www.googletagmanager.com/gtag/js?id=G-VBHBBYC1KK";
    gtm.async = true;
    document.head.appendChild(gtm);

    const ads = document.createElement('script');
    ads.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2919350397675296";
    ads.async = true;
    ads.crossOrigin = "anonymous";
    document.head.appendChild(ads);
  }, 3500);
</script>
</body>`;

let modifyCount = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Remove old tracking inline blocks
    content = content.replace(/<!-- Google tag \(gtag\.js\) -->/g, '');
    content = content.replace(/<script async src="https:\/\/www\.googletagmanager\.com.*?<\/script>/is, '');
    content = content.replace(/<script>[\s\S]*?window\.dataLayer[\s\S]*?gtag\('config',\s*'G-VBHBBYC1KK'\);[\s\S]*?<\/script>/is, '');
    
    content = content.replace(/<!-- Google AdSense -->/g, '');
    content = content.replace(/<script async src="https:\/\/pagead2\.googlesyndication\.com.*?<\/script>/is, '');

    // Add font preload right before style.min.css
    if (!content.includes('as="style" href="https://fonts.googleapis.com')) {
        content = content.replace(/(<link rel="stylesheet" href="[^"]*style\.min\.css"\s*\/?>)/, fontLink + '\n  $1');
    }

    // Fix H5 to H3 in footer for accessibility sequential headers
    content = content.replace(/<h5>/g, '<h3 style="font-size: 1.1rem; margin-bottom: 1rem;">');
    content = content.replace(/<\/h5>/g, '</h3>');

    // Add delayed scripts right before </body>, only if not already added
    if (!content.includes('Lazy-load Third Party Scripts')) {
        content = content.replace(/<\/body>/, delayedScripts);
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        modifyCount++;
    }
});

console.log('Fixed accessibility and performance issues across ' + modifyCount + ' files!');
