const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';

const footerHome = `<footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="logo-text">Student Tech Project Hub</span>
          <p>A knowledge hub for technology, AI explanations, research resources, and student opportunities at <strong>studenttechprojects.in</strong>.</p>
          <p style="font-size:0.8rem; margin-top:0.5rem;">Domain: studenttechprojects.in</p>
        </div>
        <div class="footer-col">
          <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">Categories</h3>
          <ul>
            <li><a href="./categories/ai-technology.html">AI Technology</a></li>
            <li><a href="./categories/internet-search-problems.html">Internet Search</a></li>
            <li><a href="./categories/deep-web-resources.html">Deep Web Resources</a></li>
            <li><a href="./categories/government-data.html">Government Data</a></li>
            <li><a href="./categories/research-databases.html">Research Databases</a></li>
            <li><a href="./categories/student-opportunities.html">Student Opportunities</a></li>
            <li><a href="./categories/internet-mysteries.html">Internet Mysteries</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">Quick Links</h3>
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./archive.html">Full Article Archive</a></li>
            <li><a href="./blog/article-template.html">Article Template</a></li>
            <li><a href="./robots.txt">robots.txt</a></li>
            <li><a href="./sitemap.xml">Sitemap (XML)</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">Resources</h3>
          <ul>
            <li><a href="https://data.gov.in" target="_blank" rel="noopener">data.gov.in</a></li>
            <li><a href="https://scholar.google.com" target="_blank" rel="noopener">Google Scholar</a></li>
            <li><a href="https://doaj.org" target="_blank" rel="noopener">DOAJ</a></li>
            <li><a href="https://sih.gov.in" target="_blank" rel="noopener">Smart India Hackathon</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Student Tech Project Hub · <a href="https://studenttechprojects.in">studenttechprojects.in</a></p>
        <p>Built for Indian students · Static SEO Site · Free to Use</p>
      </div>
    </div>
  </footer>`;

function fixIndex() {
    const indexPath = path.join(ROOT_DIR, 'index.html');
    let content = fs.readFileSync(indexPath, 'utf-8');
    
    // Find where the footer starts and ends
    const start = content.indexOf('<footer');
    const end = content.indexOf('</footer>') + 9;
    
    if (start !== -1 && end !== -1) {
        content = content.slice(0, start) + footerHome + content.slice(end);
        // Ensure main is closed properly if it was eaten
        if(!content.includes('</main>')) {
            content = content.replace(footerHome, '</main>\n\n' + footerHome);
        }
        fs.writeFileSync(indexPath, content, 'utf-8');
        console.log("Fixed Homepage Footer.");
    }
}

function fixCategories() {
    const catDir = path.join(ROOT_DIR, 'categories');
    const files = fs.readdirSync(catDir).filter(f => f.endsWith('.html'));

    files.forEach(file => {
        const fullPath = path.join(catDir, file);
        let content = fs.readFileSync(fullPath, 'utf-8');
        const start = content.indexOf('<footer');
        const end = content.indexOf('</footer>') + 9;

        if (start !== -1 && end !== -1) {
            const footerCat = `<footer class="site-footer">
    <div class="container">
      <div class="footer-bottom">
        <p>© 2026 Student Tech Project Hub · <a href="https://studenttechprojects.in">studenttechprojects.in</a></p>
        <p><a href="../">Home</a> · <a href="../archive.html">Full Archive</a> · <a href="../categories/ai-technology.html">AI</a> · <a href="../categories/student-opportunities.html">Opportunities</a></p>
      </div>
    </div>
  </footer>`;
            content = content.slice(0, start) + footerCat + content.slice(end);
            fs.writeFileSync(fullPath, content, 'utf-8');
            console.log("Fixed Footer in Category: " + file);
        }
    });
}

function fixTemplate() {
    const templatePath = path.join(ROOT_DIR, 'blog', 'article-template.html');
    let content = fs.readFileSync(templatePath, 'utf-8');
    const start = content.indexOf('<footer');
    const end = content.indexOf('</footer>') + 9;

    if (start !== -1 && end !== -1) {
        const footerArt = `  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom">
        <p>© 2026 Student Tech Project Hub · <a href="https://studenttechprojects.in">studenttechprojects.in</a></p>
        <p><a href="../../">Home</a> · <a href="../../archive.html">Full Archive</a> · <a href="../../categories/ai-technology.html">AI</a> · <a href="../../categories/student-opportunities.html">Opportunities</a></p>
      </div>
    </div>
  </footer>`;
        content = content.slice(0, start) + footerArt + content.slice(end);
        // Ensure main/container are closed
        if(!content.includes('</main>')) {
            content = content.replace(footerArt, '    </div>\n  </main>\n\n' + footerArt);
        }
        fs.writeFileSync(templatePath, content, 'utf-8');
        console.log("Fixed Template Footer.");
    }
}

function fixAllArticles() {
    const blogBase = path.join(ROOT_DIR, 'blog');
    const cats = fs.readdirSync(blogBase).filter(f => fs.lstatSync(path.join(blogBase, f)).isDirectory());

    cats.forEach(cat => {
        const dir = path.join(blogBase, cat);
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            let content = fs.readFileSync(fullPath, 'utf-8');
            const start = content.indexOf('<footer');
            const end = content.indexOf('</footer>') + 9;

            if (start !== -1 && end !== -1) {
                const footerArt = `  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom">
        <p>© 2026 Student Tech Project Hub · <a href="https://studenttechprojects.in">studenttechprojects.in</a></p>
        <p><a href="../../">Home</a> · <a href="../../archive.html">Full Archive</a> · <a href="../../categories/ai-technology.html">AI</a> · <a href="../../categories/student-opportunities.html">Opportunities</a></p>
      </div>
    </div>
  </footer>`;
                content = content.slice(0, start) + footerArt + content.slice(end);
                fs.writeFileSync(fullPath, content, 'utf-8');
            }
        });
        console.log("Fixed all article footers in category: " + cat);
    });
}

fixIndex();
fixCategories();
fixTemplate();
fixAllArticles();
