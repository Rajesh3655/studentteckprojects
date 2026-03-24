const fs = require('fs');
const path = require('path');

const BLOG_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\blog\\student-opportunities';

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.html'));

const CORRECT_CLOSING = `
      </div><!-- /.site-content -->
    </div><!-- /.container -->
  </main>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-bottom">
        <p>&copy; 2026 Student Tech Project Hub &middot; <a href="https://studenttechprojects.in">studenttechprojects.in</a></p>
        <p><a href="../../">Home</a> &middot; <a href="../../archive.html">Full Archive</a> &middot; <a href="../../categories/ai-technology.html">AI</a> &middot; <a href="../../categories/student-opportunities.html">Opportunities</a></p>
      </div>
    </div>
  </footer>

  <script>
    // Mobile nav toggle
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
      });
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        document.querySelectorAll('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  </script>

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
</body>
</html>`;

let fixedCount = 0;

files.forEach(file => {
    const filePath = path.join(BLOG_DIR, file);
    let html = fs.readFileSync(filePath, 'utf-8');
    
    // Check if this file has the broken structure
    // The issue: after </aside>, there's raw JS without <script> tag, no closing divs, no footer
    
    // Fix sidebar category links (wrong relative path ../categories/ should be ../../categories/)
    html = html.replace(/<a href="\.\.\/categories\//g, '<a href="../../categories/');
    
    // Fix author placeholder
    html = html.replace(/By \[Author Full Name\]/g, 'By Rajesh K');
    html = html.replace(/\[A\]/g, 'R');
    html = html.replace(/<meta name="author" content="\[Author Name\]"/g, '<meta name="author" content="Rajesh K"');
    
    // Fix date placeholders
    html = html.replace(/datetime="\[YYYY-MM-DD\]"/g, 'datetime="2026-03-24"');
    html = html.replace(/\[Month DD, YYYY\]/g, 'March 24, 2026');
    html = html.replace(/content="\[YYYY-MM-DD\]T00:00:00\+05:30"/g, 'content="2026-03-24T00:00:00+05:30"');
    html = html.replace(/"datePublished": "\[YYYY-MM-DD\]"/g, '"datePublished": "2026-03-24"');
    html = html.replace(/"dateModified": "\[YYYY-MM-DD\]"/g, '"dateModified": "2026-03-24"');
    html = html.replace(/\[X\] min read/g, '7 min read');
    
    // Fix the main structural issue: after </aside>, rebuild the closing
    const asideEndIdx = html.indexOf('</aside>');
    if (asideEndIdx !== -1) {
        // Find everything after </aside>
        const afterAside = html.slice(asideEndIdx + '</aside>'.length);
        
        // Check if the structure is broken (no proper closing divs/footer)
        if (!afterAside.includes('<footer class="site-footer">') || afterAside.includes('const toggle = document.getElementById') && !afterAside.includes('<script>')) {
            // Cut at </aside> and replace everything after
            html = html.slice(0, asideEndIdx + '</aside>'.length) + '\n' + CORRECT_CLOSING;
            fixedCount++;
        }
    }
    
    fs.writeFileSync(filePath, html);
});

console.log(`Fixed ${fixedCount} out of ${files.length} articles in student-opportunities.`);
