const fs = require('fs');
const path = require('path');

const CAT_FILE = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site\\categories\\student-opportunities.html';
let html = fs.readFileSync(CAT_FILE, 'utf-8');

// Standardize card structure (H2 instead of H3, proper numbering tags)
const startMarker = '<div class="article-list">';
const endMarker = '<div class="pagination" id="pagination-controls"></div>';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error('Markers not found');
    process.exit(1);
}

const before = html.substring(0, startIndex + startMarker.length);
const after = html.substring(endIndex);

// Generate 15 high-quality standardized cards
const cards = [
    { num: '01', title: 'Top 10 Emerging Tech Internships', slug: 'top-emerging-tech-internships', date: 'March 10, 2026', read: '6 min', excerpt: 'Explore the highest-paying and most impactful tech internships for the upcoming summer season.' },
    { num: '02', title: 'How to Build a Research Portfolio', slug: 'build-research-portfolio', date: 'March 11, 2026', read: '8 min', excerpt: 'A comprehensive guide on documenting your projects to impress top-tier university recruiters.' },
    { num: '03', title: 'Global Hackathons You Cant Miss', slug: 'global-hackathons-2026', date: 'March 12, 2026', read: '5 min', excerpt: 'A curated list of international hackathons offering massive prizes and networking opportunities.' },
    { num: '04', title: 'Mastering the Technical Interview', slug: 'mastering-technical-interview', date: 'March 13, 2026', read: '10 min', excerpt: 'The ultimate roadmap to acing coding rounds and system design interviews at FAANG companies.' },
    { num: '05', title: 'Remote Work for Tech Students', slug: 'remote-work-for-students', date: 'March 14, 2026', read: '7 min', excerpt: 'How to balance a high-paying remote dev job while pursuing your full-time degree.' },
    { num: '06', title: 'Hidden Scholarships for Indian Students', slug: 'hidden-scholarships-indian-students-2026-guide', date: 'March 24, 2026', read: '7 min', excerpt: 'Discover less-known but highly impactful academic scholarships available to students across India in 2026.' },
    { num: '07', title: 'Remote Internships Without Experience', slug: 'remote-internships-without-experience-guide', date: 'March 24, 2026', read: '7 min', excerpt: 'Learn how to secure remote roles by leveraging personal projects and open-source contributions.' },
    { num: '08', title: 'Government Fellowships for Students', slug: 'government-fellowships-ignored-by-students', date: 'March 24, 2026', read: '7 min', excerpt: 'A guide to prestigious government fellowships that offer significant stipends and national exposure.' },
    { num: '09', title: 'Free Online Certifications That Value', slug: 'free-online-certifications-value-guide', date: 'March 24, 2026', read: '7 min', excerpt: 'Which free courses actually carry weight in the job market? We compare the top providers.' },
    { num: '10', title: 'Research Internships Abroad Guide', slug: 'research-internships-abroad-step-by-step', date: 'March 24, 2026', read: '7 min', excerpt: 'The complete roadmap to securing fully-funded research positions at top global universities.' },
    { num: '11', title: 'Best Platforms to Find Internships', slug: 'best-platforms-find-internships-india', date: 'March 24, 2026', read: '7 min', excerpt: 'Stop searching blindly. Here are the most effective platforms for Indian students to land early careers.' },
    { num: '12', title: 'AI and Tech Internships for Beginners', slug: 'ai-tech-internships-beginners-guide', date: 'March 24, 2026', read: '7 min', excerpt: 'A specialized guide for students breaking into AI roles without a heavy background in machine learning.' },
    { num: '13', title: 'Hackathons and Competitions in 2026', slug: 'hackathons-competitions-students-2026', date: 'March 24, 2026', read: '7 min', excerpt: 'A regional focus on competitions that help you build a name and win substantial prizes.' },
    { num: '14', title: 'Startup Programs and Grants India', slug: 'startup-programs-grants-students-india', date: 'March 24, 2026', read: '7 min', excerpt: 'How to turn your student project into a funded startup with the help of Indian government grants.' },
    { num: '15', title: 'Build a Strong Student Profile', slug: 'build-strong-student-profile-opportunities', date: 'March 24, 2026', read: '7 min', excerpt: 'The long-term strategy for building a resume that opens doors to elite scholarships and jobs.' }
];

let cardHtml = '\n';
cards.forEach(c => {
    cardHtml += `            <article class="article-card">
              <div class="article-card-number">${c.num}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag cat-student">Student Opportunities</span>
                  <time datetime="2026-03-24">${c.date}</time>
                  <span>${c.read} read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="../blog/student-opportunities/${c.slug}.html">${c.title}</a></h2>
                <p class="excerpt">${c.excerpt}</p>
                <a href="../blog/student-opportunities/${c.slug}.html" class="read-more">Read article →</a>
              </div>
            </article>\n`;
});

cardHtml += '          </div>\n          ';

fs.writeFileSync(CAT_FILE, before + cardHtml + after);
console.log('Fixed Student Opportunities category page structure and content.');
