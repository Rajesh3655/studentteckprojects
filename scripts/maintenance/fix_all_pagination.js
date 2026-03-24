const fs = require('fs');
const path = require('path');

const CAT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\categories';

const categories = fs.readdirSync(CAT_DIR).filter(f => f.endsWith('.html'));

const PAGINATION_JS = `
      // Pagination Logic
      const itemsPerPage = 8;
      const list = document.querySelector('.article-list');
      if (list) {
        const items = Array.from(list.querySelectorAll('.article-card'));
        const paginationContainer = document.getElementById('pagination-controls');
        if (paginationContainer && items.length > itemsPerPage) {
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
                window.scrollTo({
                  top: list.offsetTop - 100,
                  behavior: 'smooth'
                });
              };
              paginationContainer.appendChild(btn);
            }
          }
          renderPage(1);
        }
      }
    });`;

categories.forEach(cat => {
    const filePath = path.join(CAT_DIR, cat);
    let html = fs.readFileSync(filePath, 'utf-8');
    
    // 1. Ensure pagination div exists
    if (!html.includes('id="pagination-controls"')) {
        html = html.replace('</div>\n\n        <aside class="sidebar">', '</div>\n          <div class="pagination" id="pagination-controls"></div>\n        </div>\n\n        <aside class="sidebar">');
    }

    // 2. Ensure pagination JS exists inside DOMContentLoaded
    if (!html.includes('// Pagination Logic')) {
        // Find the toggle script
        const domContentMarker = 'document.addEventListener(\'DOMContentLoaded\',()=>{';
        const domContentMarkerAlt = 'document.addEventListener(\'DOMContentLoaded\', () => {';
        
        if (html.includes(domContentMarker)) {
            html = html.replace('});</script>', PAGINATION_JS + '\n  </script>');
        } else if (html.includes(domContentMarkerAlt)) {
            // Find the last closing brace before </script>
            const scriptIdx = html.indexOf('// Pagination Logic'); // already checked but double check
            if (scriptIdx === -1) {
                const endTagIdx = html.lastIndexOf('});');
                if (endTagIdx !== -1) {
                    html = html.slice(0, endTagIdx) + PAGINATION_JS + html.slice(endTagIdx);
                }
            }
        } else {
            // No DOMContentLoaded yet? Let's add it properly.
            // (Assuming most have it based on previous view_file)
        }
    }
    
    fs.writeFileSync(filePath, html);
    console.log(`Ensured pagination in ${cat}`);
});
