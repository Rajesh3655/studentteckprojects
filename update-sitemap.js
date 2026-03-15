const fs = require('fs');
const path = require('path');

const sitemapPath = 'C:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\sitemap.xml';
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

const baseDir = 'C:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const blogDir = path.join(baseDir, 'blog');

// Find all HTML files recursively in blog/
function getHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getHtmlFiles(fullPath));
        } else if (file.endsWith('.html') && file !== 'index.html' && file !== 'article-template.html') {
            results.push(fullPath);
        }
    });
    return results;
}

const htmlFiles = getHtmlFiles(blogDir);

let addition = '';
const today = new Date().toISOString().split('T')[0];

htmlFiles.forEach(file => {
    // get relative path from baseDir
    let relPath = file.substring(baseDir.length).replace(/\\/g, '/');
    if (relPath.startsWith('/')) relPath = relPath.substring(1);
    
    // check if it's already in sitemap
    if (!sitemap.includes(relPath)) {
        addition += `  <url>\n    <loc>https://studenttechprojects.in/${relPath}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.80</priority>\n  </url>\n`;
    }
});

if (addition) {
    sitemap = sitemap.replace('</urlset>', addition + '</urlset>');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('Sitemap updated with new URLs.');
} else {
    console.log('No new URLs needed to be added to sitemap.');
}
