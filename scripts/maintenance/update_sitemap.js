const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_ROOT = path.join(SITE_ROOT, 'blog');
const BASE_URL = 'https://studenttechprojects.in';

let urls = [];

// Static Pages
urls.push({ loc: `${BASE_URL}/`, priority: '1.0', freq: 'weekly' });
urls.push({ loc: `${BASE_URL}/archive.html`, priority: '0.9', freq: 'weekly' });

// Categories
const catDir = path.join(SITE_ROOT, 'categories');
fs.readdirSync(catDir).forEach(f => {
    if (f.endsWith('.html')) {
        urls.push({ loc: `${BASE_URL}/categories/${f}`, priority: '0.8', freq: 'weekly' });
    }
});

// Blog Posts
function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(f => {
        const fp = path.join(dir, f);
        if (fs.statSync(fp).isDirectory()) {
            walk(fp);
        } else if (f.endsWith('.html') && f !== 'article-template.html' && f !== 'index.html') {
            const rel = path.relative(SITE_ROOT, fp).replace(/\\/g, '/');
            urls.push({ loc: `${BASE_URL}/${rel}`, priority: '0.7', freq: 'monthly' });
        }
    });
}
walk(BLOG_ROOT);

const today = new Date().toISOString().split('T')[0];
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

urls.forEach(u => {
    xml += `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync(path.join(SITE_ROOT, 'sitemap.xml'), xml);
console.log(`Sitemap updated with ${urls.length} URLs.`);
