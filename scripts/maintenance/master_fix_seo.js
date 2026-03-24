const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(ROOT_DIR, 'blog');

const categories = [
    { dir: 'ai-technology', name: '🤖 AI Technology' },
    { dir: 'internet-search-problems', name: '🔍 Internet Search Problems' },
    { dir: 'deep-web', name: '🌐 Deep Web Resources' },
    { dir: 'government-data', name: '🏛️ Government Data' },
    { dir: 'research-databases', name: '📚 Research Databases' },
    { dir: 'student-opportunities', name: '🎯 Student Opportunities' },
    { dir: 'internet-mysteries', name: '🕵️ Internet Mysteries' }
];

// Helper to extract title from HTML
function getTitle(content) {
    const match = content.match(/<h1[^>]*>(.*?)<\/h1>/);
    return match ? match[1].trim() : null;
}

function runMasterFix() {
    const allArticles = [];

    // 1. Gather all data
    categories.forEach(cat => {
        const catPath = path.join(BLOG_DIR, cat.dir);
        if (fs.existsSync(catPath)) {
            const files = fs.readdirSync(catPath).filter(f => f.endsWith('.html') && f !== 'index.html');
            files.forEach(file => {
                const fullPath = path.join(catPath, file);
                const content = fs.readFileSync(fullPath, 'utf-8');
                const title = getTitle(content);
                if (title) {
                    allArticles.push({
                        path: fullPath,
                        file: file,
                        slug: file.replace('.html', ''),
                        title: title,
                        categoryDir: cat.dir,
                        categoryName: cat.name.replace(/[^\w\s]/g, '').trim()
                    });
                }
            });
        }
    });

    console.log(`Found ${allArticles.length} articles to patch.`);

    // 2. Patch each article
    allArticles.forEach(art => {
        let content = fs.readFileSync(art.path, 'utf-8');

        // A. Fix Sidebar "In This Category"
        const sameCategory = allArticles.filter(a => a.categoryDir === art.categoryDir && a.slug !== art.slug);
        const sidebarLinks = sameCategory.slice(0, 4).map(a => `              <li><a href="../../blog/${a.categoryDir}/${a.file}">${a.title}</a></li>`).join('\n');
        
        const sidebarRegex = /<div class="sidebar-widget">\s*<h4>In This Category<\/h4>\s*<ul>[\s\S]*?<\/ul>\s*<\/div>/;
        const newSidebar = `<div class="sidebar-widget">
            <h4>In This Category</h4>
            <ul>
${sidebarLinks}
            </ul>
          </div>`;
        content = content.replace(sidebarRegex, newSidebar);

        // B. Fix Related Articles Section
        const crossCategory = allArticles.filter(a => a.categoryDir !== art.categoryDir);
        const relatedLinks = [
            ...sameCategory.slice(4, 6),
            ...crossCategory.slice(0, 2)
        ].map(a => `              <li><a href="../../blog/${a.categoryDir}/${a.file}">${a.title}</a></li>`).join('\n');
        
        const relatedSectionRegex = /<section class="internal-links-section" aria-labelledby="related-links-heading">[\s\S]*?<\/section>/;
        const newRelatedSection = `<section class="internal-links-section" aria-labelledby="related-links-heading">
            <h3 id="related-links-heading">📚 Related Articles &amp; Resources</h3>
            <ul>
${relatedLinks}
              <li><a href="../../archive.html">Full Article Archive — Browse all ${allArticles.length} topics</a></li>
            </ul>
          </section>`;
        content = content.replace(relatedSectionRegex, newRelatedSection);

        // C. Standardize Header tags for SEO (Project style)
        // Check if intro-box exists, if not maybe add it? (Already usually there)
        
        // Ensure "Conclusion" is H2
        content = content.replace(/<h3>Conclusion<\/h3>/g, '<h2>Conclusion</h2>');
        content = content.replace(/<h3>Frequently Asked Questions<\/h3>/g, '<h2>Frequently Asked Questions</h2>');

        // D. Fix Canonical if it's broken
        const canonicalRegex = /<link rel="canonical" href=".*?" \/>/;
        const newCanonical = `<link rel="canonical" href="https://studenttechprojects.in/blog/${art.categoryDir}/${art.file}" />`;
        content = content.replace(canonicalRegex, newCanonical);

        fs.writeFileSync(art.path, content, 'utf-8');
    });

    console.log("Master fix completed. All articles now have real, high-quality internal links and sidebar data.");
}

runMasterFix();
