const fs = require('fs');
const path = require('path');

const CAT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\categories';
const categories = fs.readdirSync(CAT_DIR).filter(f => f.endsWith('.html'));

const CLEAN_SCRIPT = `
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Nav Toggle
      const toggle = document.getElementById('nav-toggle');
      const nav = document.getElementById('main-nav');
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('open');
        });
      }

      // FAQ Accordion
      document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('.faq-item');
          const isOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        });
      });

      // Pagination Logic
      const itemsPerPage = 8;
      const list = document.querySelector('.article-list');
      const paginationContainer = document.getElementById('pagination-controls');
      
      if (list && paginationContainer) {
        const items = Array.from(list.querySelectorAll('.article-card'));
        if (items.length > itemsPerPage) {
          let currentPage = 1;
          const totalPages = Math.ceil(items.length / itemsPerPage);

          function renderPage(page) {
            currentPage = page;
            items.forEach((item, index) => {
              item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'flex' : 'none';
            });
            renderControls();
          }

          function renderControls() {
            paginationContainer.innerHTML = '';
            for (let i = 1; i <= totalPages; i++) {
              const btn = document.createElement('button');
              btn.innerText = i;
              btn.className = i === currentPage ? 'page-btn active' : 'page-btn';
              btn.onclick = () => {
                renderPage(i);
                window.scrollTo({ top: list.offsetTop - 100, behavior: 'smooth' });
              };
              paginationContainer.appendChild(btn);
            }
          }
          renderPage(1);
        }
      }
    });
  </script>`;

const LAZY_LOAD_AD_GTM = `
<script>
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
</script>`;

categories.forEach(cat => {
    const filePath = path.join(CAT_DIR, cat);
    let html = fs.readFileSync(filePath, 'utf-8');
    
    // Remove old scripts
    html = html.replace(/<script>document\.addEventListener\('DOMContentLoaded'[\s\S]*?<\/script>/g, '');
    html = html.replace(/<script>\s*document\.addEventListener\('DOMContentLoaded'[\s\S]*?<\/script>/g, '');
    html = html.replace(/<script>\s*\/\/ Lazy-load[\s\S]*?<\/script>/g, '');
    html = html.replace(/<script>\s*\/\/ Pagination Logic[\s\S]*?<\/script>/g, '');
    
    // Add clean ones before </body>
    html = html.replace('</body>', CLEAN_SCRIPT + '\n' + LAZY_LOAD_AD_GTM + '\n</body>');
    
    // Ensure pagination div is there once
    if (html.includes('id="pagination-controls"')) {
        // remove existing ones to re-insert cleanly
        html = html.replace(/<div class="pagination" id="pagination-controls"><\/div>/g, '');
        html = html.replace(/<div id="pagination-controls" class="pagination-controls"><\/div>/g, '');
    }
    
    // Re-insert pagination div
    html = html.replace('</div>\n\n        <aside class="sidebar">', '</div>\n          <div class="pagination" id="pagination-controls"></div>\n        </div>\n\n        <aside class="sidebar">');

    fs.writeFileSync(filePath, html);
    console.log(`Deep cleaned pagination and scripts in ${cat}`);
});
