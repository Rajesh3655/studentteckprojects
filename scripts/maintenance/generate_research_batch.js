const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(ROOT_DIR, 'blog', 'research-databases');
const TEMPLATE_PATH = path.join(ROOT_DIR, 'blog', 'article-template.html');
const CATEGORY_HTML_PATH = path.join(ROOT_DIR, 'categories', 'research-databases.html');
const SITEMAP_PATH = path.join(ROOT_DIR, 'sitemap.xml');

const articles = [
  {
    title: "Free Research Paper Websites (Legal and Updated List)",
    slug: "free-research-paper-websites-legal-list",
    desc: "A comprehensive, updated list of legal websites where students can download peer-reviewed research papers for free without violating copyright.",
    keywords: "free research paper websites, legal research papers, open access journals, DOAJ, CORE, BASE academic search",
    intro: "Finding high-quality research papers shouldn't cost a fortune. While many journals are locked behind paywalls, a massive ecosystem of legal, open-access repositories exists to provide students with the same level of academic rigor for exactly zero dollars.",
    h2_1: "Top Federated Open Access Repositories",
    p_1: "The most efficient way to find free papers is through federated search engines like CORE and BASE (Bielefeld Academic Search Engine). Unlike Google, these engines only index scholarly, peer-reviewed content from thousands of institutional repositories worldwide. They provide direct links to full-text PDFs that are officially hosted as open-access versions of published research.",
    h2_2: "Utilizing Institutional Repositories",
    p_2: "Many top-tier universities, such as MIT, Harvard, and Stanford, host their own digital archives (e.g., DASH or DSpace@MIT). These repositories house 'Green Open Access' versions of papers authored by their faculty. These are legal, pre-print or post-print versions of papers that would otherwise be paywalled on commercial publisher sites.",
    faq1_q: "Is it legal to download papers from these sites?",
    faq1_a: "Yes. These sites host papers under open-access licenses or institutional agreements that specifically allow for public distribution of scholarly work."
  },
  {
    title: "Where Researchers Actually Find Papers (Not Google)",
    slug: "where-researchers-find-papers-not-google",
    desc: "Move beyond Google Scholar. Discover the specialized search engines and academic networks professional researchers use to find credible literature.",
    keywords: "research search engines, academic databases, where to find research papers, scholarly search tools, Semantic Scholar",
    intro: "While Google Scholar is a convenient starting point, professional researchers rely on much more specialized tools to navigate the billions of existing academic citations. These tools offer advanced filtering, citation mapping, and AI-driven relevance signals that general crawlers lack.",
    h2_1: "The Power of Citation Mapping Tools",
    p_1: "Advanced researchers use tools like 'Connected Papers' or 'Litmaps' to find relevant literature. Instead of keyword searching, these tools take a 'seed' paper and visualize a graph of every other paper that is cited by it or cites it. This allows you to visually identify the seminal works and emerging trends in any niche field with incredible speed.",
    h2_2: "AI-Driven Scholarly Search Engines",
    p_2: "Platforms like Semantic Scholar and Consensus leverage Large Language Models to read and summarize papers for you. They don't just return links; they extract key findings, identify the study's limitations, and provide a 'TL;DR' summary. This level of semantic understanding allows researchers to filter through thousands of results to find the exact methodology they need.",
    faq1_q: "Why isn't Google enough for serious research?",
    faq1_a: "Google is designed for broad relevance, not strict academic precision. It often misses papers hidden in deep databases and lacks the disciplinary filters (like MeSH for medicine) required for professional systematic reviews."
  },
  {
    title: "Best Academic Databases Students Don’t Know About",
    slug: "best-academic-databases-students-hidden",
    desc: "Stop limiting yourself to the big names. Discover specialized academic databases that offer unique data and research insights for your projects.",
    keywords: "hidden academic databases, specialized research databases, ERIC database, PsycINFO, SSRN, student research resources",
    intro: "Most students stick to the 'big three': Google Scholar, JSTOR, and Wikipedia. However, specialized databases tailored to specific disciplines often contain high-quality, niche papers that those broad tools completely overlook.",
    h2_1: "Social Science and Humanities Troves",
    p_1: "For students in law, economics, or sociology, the Social Science Research Network (SSRN) is indispensable. It hosts 'working papers'—research that is currently being peer-reviewed or recently finished. This gives you access to the newest ideas in the field months or even years before they are formally published in a journal.",
    h2_2: "STEM and Field-Specific Databases",
    p_2: "If you are researching education, ERIC (Education Resources Information Center) provides a level of depth that general science databases cannot match. Similarly, for psychology students, PsycINFO offers meticulously indexed abstracts and citations that follow strict APA guidelines, ensuring your bibliography is professional and accurate.",
    faq1_q: "Are these specialized databases free?",
    faq1_a: "Many offer significant amounts of open-access content. For the paywalled sections, most students can log in using their university's library proxy for full legal access."
  },
  {
    title: "How to Access Paid Research Papers for Free (Legal Ways)",
    slug: "how-to-access-paid-research-papers-legally",
    desc: "A legal guide to bypassing publisher paywalls. Use browser extensions, library loans, and direct author contact to get the data you need.",
    keywords: "access paid papers free, legal paywall bypass, Unpaywall extension, Interlibrary loan, research paper access",
    intro: "Encountering a $40 paywall for a single research paper is a student's nightmare. Fortunately, there are several 100% legal methods to obtain these documents without paying a cent or visiting 'pirate' websites.",
    h2_1: "Using 'Open Access' Browser Extensions",
    p_1: "Extensions like 'Unpaywall' or 'The Open Access Button' are essential for every student's browser. When you land on a paywalled paper, these extensions automatically search millions of legal repositories for an open-access version of that same paper. If a legal copy exists anywhere in the world, a small green lock icon appears, giving you instant PDF access.",
    h2_2: "Direct Outreach and Interlibrary Loans",
    p_2: "If no online copy exists, you can simply email the corresponding author. Most researchers are happy to share their own PDFs for free as it increases their citation count. Alternatively, use your university's 'Interlibrary Loan' (ILL) service. Your library will contact another library that *does* have the subscription and have a digital copy of the article sent directly to your inbox.",
    faq1_q: "Is it illegal to ask an author for their paper?",
    faq1_a: "No, it is 100% legal. Most copyright agreements between authors and publishers allow the authors to share their work for personal or academic purposes."
  },
  {
    title: "Google Scholar vs Real Research Databases (Comparison)",
    slug: "google-scholar-vs-real-research-databases",
    desc: "Unpack the key differences between Google's crawler and professional databases like Scopus or Web of Science. Which should you use for your project?",
    keywords: "Google Scholar vs Scopus, Web of Science vs Google Scholar, academic search comparison, research database performance",
    intro: "Google Scholar is a fantastic tool, but it is not a 'database' in the same way Scopus or Web of Science are. Understanding the structural differences between a crawler and a curated index is vital for producing high-quality academic work.",
    h2_1: "The Problem with Automated Crawling",
    p_1: "Google Scholar uses automated bots to scrape anything that 'looks' like a paper. This often results in indexing low-quality 'predatory' journals, student essays, or unvetted blog posts. In contrast, databases like Web of Science are manually curated by human experts who verify the quality and impact of every journal before it is added to the index.",
    h2_2: "When to Use Which Tool",
    p_2: "Use Google Scholar for quick, broad exploratory searches or when looking for a specific paper title you already know. However, use professional databases for 'Systematic Literature Reviews' or when you need to ensure you are only citing high-impact, peer-reviewed journals. Professional databases also allow for much more complex Boolean searches (AND, OR, NOT) that Google often ignores.",
    faq1_q: "Does Google Scholar cover more content than Scopus?",
    faq1_a: "In terms of sheer volume, yes. However, a significant portion of that volume includes non-peer-reviewed or low-quality materials that can weaken a research project's credibility."
  },
  {
    title: "Hidden Scientific Databases Used by Universities",
    slug: "hidden-scientific-databases-university-lists",
    desc: "Explore the heavyweight scientific databases that top-tier universities pay millions for. Learn what they are and how to leverage their data.",
    keywords: "university research databases, specialized scientific databases, SpringerLink, Elsevier ScienceDirect, Wiley Online Library",
    intro: "The elite research you see quoted in top journals usually originates from a few massive, proprietary database networks. These systems are the 'engines' of global science, and knowing how to navigate them is a core skill for any advanced student.",
    h2_1: "The Core Publisher Platforms",
    p_1: "Major publishers like Elsevier (ScienceDirect), Springer (SpringerLink), and Wiley host millions of papers in their own proprietary ecosystems. While these are paywalled, they offer incredibly advanced search filters. You can filter by specific laboratory techniques, chemical compounds, or even specific hardware models used in experiments—granularity that general search engines cannot provide.",
    h2_2: "Aggregator Databases: EBSCO and ProQuest",
    p_2: "Universities also subscribe to 'Aggregators' like EBSCOhost or ProQuest. These platforms don't publish their own content; instead, they aggregate thousands of journals from different publishers into one interface. This allows you to perform one single search that spans across multiple publishers, saving hours of manual tab-switching while ensuring comprehensive coverage.",
    faq1_q: "Why do universities pay for these if many papers are free?",
    faq1_a: "Subscriptions provide high-speed access to the 'Version of Record' (the final, formatted published copy) and advanced analytical tools to track research impact and citations."
  },
  {
    title: "How to Do Literature Review Faster Using Tools",
    slug: "how-to-do-literature-review-faster-tools",
    desc: "Accelerate your research process. Use AI summarizers, citation managers, and mapping tools to finish your literature review in half the time.",
    keywords: "literature review tools, Zotero, Mendeley, AI research tools, how to write literature review faster",
    intro: "Writing a literature review is often the most time-consuming part of a thesis. By adopting a modern tech stack of citation managers and AI-assisted reading tools, you can automate the busywork and focus on the actual analysis.",
    h2_1: "Citation Management: Zotero and Mendeley",
    p_1: "If you are manually typing out your bibliography, you are wasting hours of time. Tools like Zotero or Mendeley allow you to save papers from your browser with a single click. They automatically extract the metadata (author, journal, year) and can instantly generate a perfectly formatted bibliography in IEEE, APA, or MLA style with zero errors.",
    h2_2: "AI Summarization and Synthesis",
    p_2: "Don't read every paper from start to finish. Use tools like 'Elicit' or 'Explainpaper' to ask questions of a PDF. You can ask 'What was the specific sample size?' or 'What statistical test did they use?' and the AI will extract the answer directly from the text. This allows you to screen out irrelevant papers in seconds, ensuring you only spend time reading the most vital content.",
    faq1_q: "Can I trust AI to summarize my research?",
    faq1_a: "AI summaries are excellent for screening, but you should always verify the 'key findings' by reading the actual 'Results' section of the paper before citing it in your work."
  },
  {
    title: "Open Access Journals That Provide Free Papers",
    slug: "open-access-journals-free-papers-list",
    desc: "A list of the world's top-tier, high-impact open access journals where you can read and download cutting-edge research completely for free.",
    keywords: "open access journals list, PLOS ONE, Nature Communications OA, free medical journals, free engineering journals",
    intro: "Open Access (OA) is a global movement aimed at making scientific research freely available to everyone. Many of the world's most prestigious journals now publish exclusively in OA format, removing all financial barriers for students.",
    h2_1: "The 'Mega-Journals': PLOS and Frontiers",
    p_1: "Mega-journals like 'PLOS ONE' or 'Frontiers' publish tens of thousands of peer-reviewed papers every year across every conceivable discipline. Because they are 100% open access, every single paper they have ever published is available to download as a PDF for free. These journals have rigorous peer-review standards, making them highly credible sources for your projects.",
    h2_2: "Discipline-Specific OA Leaders",
    p_2: "In medicine, specialized journals like 'The BMJ Open' provide high-impact clinical data for free. In physics and math, journals like 'Journal of High Energy Physics' are entirely open access. Finding these high-impact open journals ensures that your research is supported by the absolute latest and most authoritative data without requiring a library subscription.",
    faq1_q: "Are free journals lower quality than paid ones?",
    faq1_a: "Not necessarily. Many top-tier journals (like Nature Communications or PLOS) are open access and have higher 'Impact Factors' than many established subscription-based journals."
  },
  {
    title: "How to Find High-Quality Research Papers Quickly",
    slug: "how-to-find-high-quality-research-papers-quickly",
    desc: "Master the art of rapid scholarly searching. Learn how to filter for quality, impact, and relevance to find exactly what you need in under 10 minutes.",
    keywords: "find research papers quickly, academic search tips, evaluating research quality, fast literature search",
    intro: "Quantity is not quality. Finding 100 papers on a topic is easy; finding the 5 most important ones is a skill. By focusing on 'Impact Factors' and 'Citation Counts,' you can quickly separate the breakthrough research from the noise.",
    h2_1: "Filtering by Citation Count",
    p_1: "The fastest way to judge a paper's importance is its citation count. In Google Scholar or Scopus, always check the 'Cited by' link. If a paper has been cited hundreds of times, it is likely a foundational work that you *must* include in your review. Conversely, if a paper is 5 years old and has zero citations, it may not be as relevant or authoritative.",
    h2_2: "Utilizing Review Articles (The Ultimate Shortcut)",
    p_2: "When starting a new topic, don't search for raw studies—search for a 'Review Article' (e.g., 'Recent advances in AI: A Review'). A team of experts has already done the literature review for you, summarizing the last 5-10 years of research and pointing you directly to the most important papers. One high-quality review article can save you 20 hours of manual searching.",
    faq1_q: "What is an Impact Factor?",
    faq1_a: "An Impact Factor is a score that measures how often the average article in a journal is cited. Higher scores generally indicate a more prestigious and high-quality journal."
  },
  {
    title: "Best Data Sources for Academic Research Projects",
    slug: "best-data-sources-academic-research-projects",
    desc: "Need raw data for your analysis? Discover the top public and academic data sources for economics, social science, and STEM projects.",
    keywords: "academic data sources, raw datasets for research, Kaggle datasets, World Bank data, government data for students",
    intro: "A great research project needs real data. While finding papers is important, finding the raw data used to generate those papers allows you to perform your own original analysis and gain unique insights for your project.",
    h2_1: "Secondary Data Repositories",
    p_1: "Platforms like 'Figshare,' 'Dryad,' and 'Zenodo' allow researchers to upload the raw Excel or CSV files from their published experiments. This 'Open Data' movement means you can take a study's raw data and run your own statistical tests to see if you find the same results, or combine multiple datasets for a new 'meta-analysis' project.",
    h2_2: "Institutional and Global Data Banks",
    p_2: "For economics and social science, institutional data banks like the World Bank, IMF, or the OECD provide structured, reliable datasets spanning decades. For data science and ML, Kaggle is a popular choice, but for academic-grade credibility, you should also look at 'UCI Machine Learning Repository' which is a standard source for benchmark datasets in university-level research.",
    faq1_q: "Do I need to cite datasets in my research?",
    faq1_a: "Yes! Datasets have their own DOIs (Digital Object Identifiers). Just like a paper, you must cite the original dataset creator in your bibliography."
  }
];

const deepDiveContent = `
            <!-- ── DEEP DIVE SECTION ─────────────────────────────────── -->
            <h2 id="deep-dive">Deep Dive into the Technology</h2>
            <p>As this technology continues to mature, its implementations across various industries are becoming more sophisticated. The foundational architectures underlying these models are constantly undergoing refinement to optimize for both efficiency and accuracy. By evaluating the mathematical frameworks that dictate these operations, researchers are uncovering new paradigms in computational modeling. This signifies a fundamental shift, moving away from rigid programmatic structures towards dynamic, statistically-driven problem solving capable of tackling unprecedented complexities.</p>
            <p>Moreover, the integration of these systems into daily workflows requires a comprehensive understanding of their constraints and edge cases. While early iterations relied heavily on brute-force computations, modern frameworks leverage optimized algorithmic pathways to reduce latency and computational cost. This evolution not only democratizes access to advanced capabilities but also accelerates the timeline for achieving scalable, robust solutions in the digital ecosystem. Businesses that adopt these architectures early are seeing exponential returns on process efficiencies.</p>
            <h3>Real-World Implementation Challenges</h3>
            <p>The transition from theoretical research to production-ready deployments introduces significant hurdles. Developers must continuously monitor these systems for concept drift—a phenomenon where an AI model's predictive capabilities degrade over time because the real-world data it processes changes significantly from its original training data. Furthermore, designing robust fallback mechanisms remains a critical priority. Ultimately, establishing a transparent, interpretable framework for decision-making is essential to fostering trust and driving widespread adoption among non-technical end users.</p>
`;

if (!fs.existsSync(BLOG_DIR)){
    fs.mkdirSync(BLOG_DIR, { recursive: true });
}

function generate() {
  let templateContent = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  let categoryHTML = fs.readFileSync(CATEGORY_HTML_PATH, 'utf-8');
  let sitemapXML = fs.readFileSync(SITEMAP_PATH, 'utf-8');

  let newCards = '';
  let dateStr = "2026-03-24"; 
  let monthStr = "March 24, 2026";
  
  const cardsInHtml = (categoryHTML.match(/<article class="article-card">/g) || []).length;
  let existingIndexOffset = cardsInHtml + 1;

  articles.forEach((art, index) => {
    const articlePath = path.join(BLOG_DIR, art.slug + '.html');
    let result = templateContent;
    
    // Correct deepest paths explicitly
    result = result.split('="../').join('="../../');
    
    result = result.split('[Article Title]').join(art.title);
    result = result.split('[Full Article Title With Primary Keyword]').join(art.title);
    result = result.replace(/\[Write a compelling 150-160 character.*?\]/g, art.desc);
    result = result.replace(/\[keyword1, keyword2.*?\]/g, art.keywords);
    result = result.split('[Author Name]').join("Rajesh K");
    result = result.split('[Author Full Name]').join("Rajesh K");
    result = result.replace(/<div class="author-avatar">\s*<span>\[A\]<\/span>\s*<\/div>/g, '<div class="author-avatar">\n          <span>R</span>\n        </div>');
    result = result.split('[CATEGORY]').join("research-databases");
    result = result.split('[Category Name]').join("Research Databases");
    result = result.split('[CSS-CLASS]').join("research");
    result = result.split('[SLUG]').join(art.slug);
    result = result.split('[YYYY-MM-DD]').join(dateStr);
    result = result.split('[Month DD, YYYY]').join(monthStr);
    result = result.split('[X] min read').join("7 min read");
    result = result.split('[primary keyword tag]').join("Research Databases");
    result = result.split('[Article Title Short]').join(art.title.split(' ').slice(0, 5).join(' ') + '...');
    
    // Body replacement
    result = result.replace(/\[Introduction paragraph.*?\]/g, art.intro);
    result = result.replace(/\[Section 1 Heading.*?\]/g, art.h2_1);
    result = result.replace(/\[Section 1 paragraph content.*?\]/g, art.p_1);
    result = result.replace(/\[Second paragraph of section 1.\]/g, "");
    
    result = result.replace(/\[Section 2 Heading\]/g, art.h2_2);
    result = result.replace(/\[Section 2 content\.\.\.\]/g, art.p_2);
    result = result.replace(/\[Continue section 2\.\.\.\]/g, "");
    
    result = result.replace(/<h3.*?>\[Subsection 1.1.*?>.*?<\/ul>/s, ""); 
    
    result = result.replace(/<h2 id="section-3.*?<!-- ── CONCLUSION ────────────────────────────────── -->/s, deepDiveContent + "\n            <!-- ── CONCLUSION ────────────────────────────────── -->");

    result = result.replace(/\[Wrap up in 2-3 sentences.*?\]/g, "Mastering these databases is the first step toward academic excellence. Always prioritize verified, peer-reviewed sources to ensure your research project stands on a foundation of scientific truth.");

    result = result.replace(/\[FAQ Question 1.*?\]/g, art.faq1_q);
    result = result.replace(/\[Answer to FAQ 1.*?\]/g, art.faq1_a);
    result = result.replace(/<div class="faq-item">\s*<button class="faq-question".*?\[FAQ Question 2\].*?<\/div>\s*<\/div>/s, "");
    result = result.replace(/<div class="faq-item">\s*<button class="faq-question".*?\[FAQ Question 3\].*?<\/div>\s*<\/div>/s, "");

    // Dynamic Sidebar
    let related1 = articles[(index + 1) % 10];
    let related2 = articles[(index + 2) % 10];
    let related3 = articles[(index + 3) % 10];

    const dynamicSidebarHTML = `              <li><a href="../../blog/research-databases/${related1.slug}.html">${related1.title}</a></li>
              <li><a href="../../blog/research-databases/${related2.slug}.html">${related2.title}</a></li>
              <li><a href="../../blog/research-databases/${related3.slug}.html">${related3.title}</a></li>`;
              
    result = result.replace(/<li><a href="#">\[Related Article 1\]<\/a><\/li>\s*<li><a href="#">\[Related Article 2\]<\/a><\/li>\s*<li><a href="#">\[Related Article 3\]<\/a><\/li>/, dynamicSidebarHTML);

    // Dynamic Internal Links Block
    const internalLinksBlock = `<section class="internal-links-section" aria-labelledby="related-links-heading">
            <h3 id="related-links-heading">📚 Related Articles &amp; Resources</h3>
            <ul>
              <li><a href="../../categories/deep-web-resources.html">🌐 Deep Web Resources — Browse all articles</a></li>
              <li><a href="../../blog/research-databases/${related1.slug}.html">${related1.title}</a></li>
              <li><a href="../../blog/deep-web/10-hidden-research-databases-google-cannot-access.html">10 Hidden Research Databases Google Cannot Access</a></li>
              <li><a href="../../categories/student-opportunities.html">Student Opportunities — Scholarships &amp; Hackathons</a></li>
            </ul>
          </section>`;
    
    result = result.replace(/<section class="internal-links-section" aria-labelledby="related-links-heading">[\s\S]*?<\/section>/, internalLinksBlock);

    fs.writeFileSync(articlePath, result, 'utf-8');
    console.log("Created: " + articlePath);

    if (!categoryHTML.includes(art.slug)) {
        let printNumber = existingIndexOffset + index;
        newCards += `
            <article class="article-card">
              <div class="article-card-number">${printNumber.toString().padStart(2, '0')}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag cat-research">Research Databases</span>
                  <time datetime="${dateStr}">${monthStr}</time>
                  <span>7 min read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="../blog/research-databases/${art.slug}.html">${art.title}</a></h2>
                <p class="excerpt">${art.desc}</p>
                <a href="../blog/research-databases/${art.slug}.html" class="read-more">Read article →</a>
              </div>
            </article>\n`;
    }

    let sitemapEntry = `  <url>\n    <loc>https://studenttechprojects.in/blog/research-databases/${art.slug}.html</loc>\n    <lastmod>${dateStr}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`;
    if (!sitemapXML.includes(art.slug)) {
      sitemapXML = sitemapXML.split('</urlset>').join(sitemapEntry);
    }
  });

  if (newCards !== '') {
    let targetInjection = /<\/div>\s*<\/div>\s*<aside class="sidebar">/;
    
    // Check if pagination exists, if not add container
    if (!categoryHTML.includes('id="pagination-controls"')) {
        const paginationHTML = `
            <div class="pagination" id="pagination-controls"></div>
`;
        categoryHTML = categoryHTML.replace(targetInjection, newCards + "          </div>\n" + paginationHTML + "        </div>\n\n        <aside class=\"sidebar\">");
    } else {
        // Prepend new cards to the article list
        categoryHTML = categoryHTML.replace("</div>\n\n            <!-- Pagination Controls -->", newCards + "</div>\n\n            <!-- Pagination Controls -->");
    }

    // Always ensure pagination script is present and updated
    if(!categoryHTML.includes('const ITEMS_PER_PAGE = 10;')) {
        const scriptPos = categoryHTML.lastIndexOf('</body>');
        const paginationScript = `
<script>
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.article-list');
  const cards = Array.from(list.querySelectorAll('.article-card'));
  const ITEMS_PER_PAGE = 10;
  let currentPage = 1;
  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
  const paginationControls = document.getElementById('pagination-controls');

  function renderPage(page) {
    cards.forEach((c, idx) => {
      c.style.display = (idx >= (page - 1) * ITEMS_PER_PAGE && idx < page * ITEMS_PER_PAGE) ? 'flex' : 'none';
    });
    renderControls(page);
    window.scrollTo({ top: list.parentElement.offsetTop - 100, behavior: 'smooth' });
  }

  function renderControls(page) {
    if(!paginationControls) return;
    paginationControls.innerHTML = '';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn' + (page === 1 ? ' disabled' : '');
    prevBtn.innerHTML = '← Prev';
    prevBtn.onclick = () => { if(page > 1) { currentPage--; renderPage(currentPage); } };
    paginationControls.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.className = 'page-btn' + (i === page ? ' active' : '');
      btn.innerHTML = i;
      btn.onclick = () => { currentPage = i; renderPage(currentPage); };
      paginationControls.appendChild(btn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn' + (page === totalPages ? ' disabled' : '');
    nextBtn.innerHTML = 'Next →';
    nextBtn.onclick = () => { if(page < totalPages) { currentPage++; renderPage(currentPage); } };
    paginationControls.appendChild(nextBtn);
  }

  if(cards.length > 0) {
    renderPage(1);
  }
});
</script>
`;
        categoryHTML = categoryHTML.slice(0, scriptPos) + paginationScript + categoryHTML.slice(scriptPos);
    }
    fs.writeFileSync(CATEGORY_HTML_PATH, categoryHTML, 'utf-8');
    console.log('Updated category page with new cards and pagination');
  }
  
  fs.writeFileSync(SITEMAP_PATH, sitemapXML, 'utf-8');
  console.log('Updated sitemap');
}

generate();
