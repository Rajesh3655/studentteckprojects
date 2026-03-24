const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(ROOT_DIR, 'blog');
const SITEMAP_PATH = path.join(ROOT_DIR, 'sitemap.xml');

const today = new Date().toISOString().split('T')[0];

function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://studenttechprojects.in/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://studenttechprojects.in/archive.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

  // Categories
  const catFiles = fs.readdirSync(path.join(ROOT_DIR, 'categories')).filter(f => f.endsWith('.html'));
  catFiles.forEach(f => {
    xml += `
  <url>
    <loc>https://studenttechprojects.in/categories/${f}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Articles
  const blogCats = fs.readdirSync(BLOG_DIR).filter(f => fs.lstatSync(path.join(BLOG_DIR, f)).isDirectory());
  blogCats.forEach(cat => {
    const dir = path.join(BLOG_DIR, cat);
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'article-template.html');
    files.forEach(file => {
      xml += `
  <url>
    <loc>https://studenttechprojects.in/blog/${cat}/${file}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
  });

  xml += '\n</urlset>';
  fs.writeFileSync(SITEMAP_PATH, xml, 'utf-8');
  console.log("Regenerated clean sitemap.xml with " + (xml.split('<url>').length - 1) + " total URLs.");
}

generateSitemap();
