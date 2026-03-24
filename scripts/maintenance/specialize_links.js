const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';

function applyInternalLinks(category, articles) {
    const blogDir = path.join(SITE_ROOT, 'blog', category);
    
    articles.forEach((topic, index) => {
        const filePath = path.join(blogDir, topic.slug + '.html');
        if (!fs.existsSync(filePath)) return;
        
        let html = fs.readFileSync(filePath, 'utf-8');
        
        // Define related links for this category
        const related = articles
            .filter((_, i) => i !== index) // Don't link to self
            .slice(0, 4); // Take 4 others
            
        const relatedHtml = `
            <section class="internal-links-section" aria-labelledby="related-links-heading">
              <h3 id="related-links-heading">📚 Related Articles &amp; Resources</h3>
              <ul>
                ${related.map(r => `<li><a href="../../blog/${category}/${r.slug}.html">${r.title}</a></li>`).join('\n                ')}
                <li><a href="../../archive.html">Full Article Archive — Browse all 120 topics</a></li>
              </ul>
            </section>
        `;
        
        // Replace current section
        const startTag = '<section class="internal-links-section"';
        const endTag = '</section>';
        const startIndex = html.indexOf(startTag);
        const endIndex = html.indexOf(endTag, startIndex);
        
        if (startIndex !== -1 && endIndex !== -1) {
            html = html.substring(0, startIndex) + relatedHtml + html.substring(endIndex + endTag.length);
            fs.writeFileSync(filePath, html);
            console.log(`Updated links for: ${topic.slug}`);
        }
    });
}

const mysteries = [
    { slug: 'why-websites-disappear-from-internet', title: 'Why Websites Disappear' },
    { slug: 'what-happens-when-website-deleted-forever', title: 'What Happens When a Website is Deleted' },
    { slug: 'how-internet-archive-saves-lost-websites', title: 'How the Internet Archive Saves Lost Sites' },
    { slug: 'lost-websites-forgotten-history', title: 'Lost Websites and Forgotten History' },
    { slug: 'hidden-history-early-internet', title: 'The Hidden History of the Early Internet' },
    { slug: 'why-information-removed-from-google', title: 'Why Information Gets Removed from Google' },
    { slug: 'how-old-internet-content-preserved', title: 'How Old Internet Content is Preserved' },
    { slug: 'why-pages-exist-cannot-be-found', title: 'Why Some Pages Exist but Cannot be Found' },
    { slug: 'strange-internet-phenomena', title: 'Strange Internet Phenomena' },
    { slug: 'why-information-changes-online', title: 'Why Information Changes Online' }
];

const opportunities = [
    { slug: 'hidden-scholarships-indian-students-2026-guide', title: 'Hidden Scholarships for Indian Students' },
    { slug: 'remote-internships-without-experience-guide', title: 'Remote Internships Without Experience' },
    { slug: 'government-fellowships-for-students', title: 'Government Fellowships for Students' },
    { slug: 'free-online-certifications-value-guide', title: 'Free Online Certifications That Actually Have Value' },
    { slug: 'research-internships-abroad-step-by-step', title: 'Research Internships Abroad' },
    { slug: 'best-platforms-find-internships-india', title: 'Best Platforms to Find Internships in India' },
    { slug: 'ai-tech-internships-beginners-guide', title: 'AI and Tech Internships for Beginners' },
    { slug: 'hackathons-competitions-students-2026', title: 'Hackathons and Competitions in 2026' },
    { slug: 'startup-programs-grants-students-india', title: 'Startup Programs and Grants India' },
    { slug: 'build-strong-student-profile-opportunities', title: 'How to Build a Strong Student Profile' }
];

applyInternalLinks('internet-mysteries', mysteries);
applyInternalLinks('student-opportunities', opportunities);
