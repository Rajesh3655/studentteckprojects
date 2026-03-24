const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';

const featuredWidget = `
          <div class="sidebar-widget accent" style="background: var(--color-primary); color: #fff; border-radius: var(--radius-md); padding: 1.5rem; margin-top: 2rem; border: none;">
            <h4 style="color: #fff; border-bottom: 2px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem; margin-bottom: 1rem; font-size: 1.1rem;">🎓 Featured Guides</h4>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="margin-bottom: 1rem;"><a href="../../blog/student-opportunities/hidden-scholarships-indian-students-2026-guide.html" style="color: #fff; text-decoration: none; font-size: 0.95rem; font-weight: 600; display: block; line-height: 1.4;">→ Top Scholarships in India 2026</a></li>
              <li style="margin-bottom: 1rem;"><a href="../../blog/ai-technology/ai-agent-architecture.html" style="color: #fff; text-decoration: none; font-size: 0.95rem; font-weight: 600; display: block; line-height: 1.4;">→ How AI Agents Work: Architecture Explained</a></li>
              <li style="margin-bottom: 1rem;"><a href="../../blog/internet-mysteries/hidden-history-early-internet.html" style="color: #fff; text-decoration: none; font-size: 0.95rem; font-weight: 600; display: block; line-height: 1.4;">→ The Hidden History of the Early Internet</a></li>
              <li style="margin-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem;"><a href="../../archive.html" style="color: rgba(255,255,255,0.85); text-decoration: underline; font-size: 0.85rem;">Browse all 120 guides →</a></li>
            </ul>
          </div>
`;

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (file.endsWith('.html') && !file.includes('index.html')) {
            let html = fs.readFileSync(fullPath, 'utf-8');
            
            // Inject before the end of the sidebar
            if (html.includes('</aside>') && !html.includes('Featured Guides')) {
                html = html.replace('</aside>', featuredWidget + '\n        </aside>');
                fs.writeFileSync(fullPath, html);
                console.log(`Added featured widget to: ${file}`);
            }
        }
    });
}

walk(path.join(SITE_ROOT, 'blog'));
console.log('Finished updating site-wide featured guides.');
