const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(ROOT_DIR, 'blog', 'deep-web'); // Or deep-web-resources? Wait, the category page links to `../blog/deep-web/...`
const TEMPLATE_PATH = path.join(ROOT_DIR, 'blog', 'article-template.html');
const CATEGORY_HTML_PATH = path.join(ROOT_DIR, 'categories', 'deep-web-resources.html');
const SITEMAP_PATH = path.join(ROOT_DIR, 'sitemap.xml');

// Deep Web mapping
const articles = [
  {
    title: "10 Hidden Research Databases Google Cannot Access",
    slug: "10-hidden-research-databases-google-cannot-access",
    desc: "Discover the top 10 hidden research databases invisible to Google. Perfect for students and academics needing peer-reviewed deep web resources.",
    keywords: "hidden research databases, deep web databases, invisible web, academic deep web, research portals",
    intro: "While Google indexes billions of pages, the vast majority of high-quality, peer-reviewed academic research remains completely hidden from its crawlers. These resources are locked behind 'Deep Web' databases that require specialized access or specific query interfaces.",
    h2_1: "The Limitations of Surface Crawlers",
    p_1: "Standard search engines operate by following hyperlinks from one public page to another. However, academic databases like JSTOR, PubMed, or proprietary university repositories generate content dynamically in response to specific user searches. Because there are no static links to these millions of PDFs, Googlebot simply cannot 'see' them.",
    h2_2: "Unlocking the Invisible Academic Web",
    p_2: "To access these hidden troves, researchers must use dedicated portals. Platforms such as CORE (COnnecting REpositories), BASE (Bielefeld Academic Search Engine), and WorldWideScience tap directly into the APIs of these deep web databases, federating search results across thousands of institutional libraries worldwide.",
    faq1_q: "Are these hidden databases legal to access?",
    faq1_a: "Yes, absolutely. The 'Deep Web' simply means the pages aren't indexed by Google. Most academic databases are completely legal, and students often have free access through their university library credentials."
  },
  {
    title: "Deep Web vs Dark Web – What 99% People Get Wrong",
    slug: "deep-web-vs-dark-web-what-you-get-wrong",
    desc: "Clear up the widespread confusion between the Deep Web and the Dark Web. Learn the technical differences and why the Deep Web is perfectly safe.",
    keywords: "deep web vs dark web, darknet, invisible web, tor network, deep web facts",
    intro: "Thanks to sensationalist media, the terms 'Deep Web' and 'Dark Web' are frequently used interchangeably. This fundamentally misunderstands the architecture of the internet, leading many to believe that accessing the Deep Web involves illegal activity.",
    h2_1: "The Deep Web: The Harmless Majority",
    p_1: "The Deep Web simply refers to any web page that is not indexed by standard search engines. If you log into your Gmail account, check your online banking portal, or view a private YouTube video, you are exclusively using the Deep Web. It accounts for an estimated 90-95% of the total internet and is completely benign and essential for digital privacy.",
    h2_2: "The Dark Web: The Encrypted Minority",
    p_2: "The Dark Web is a tiny, intentionally hidden subset of the Deep Web. It requires specific software, primarily the Tor browser, to access. Websites on the Dark Web use complex routing to mask the IP addresses of the servers hosting them. While it harbors illicit marketplaces, it is also used by journalists and whistleblowers in oppressive regimes to communicate securely.",
    faq1_q: "Do I need a special browser for the Deep Web?",
    faq1_a: "No. You use standard browsers (Chrome, Firefox, Safari) to access the Deep Web every day. You only need a specialized browser like Tor for the Dark Web."
  },
  {
    title: "How Students Can Access Deep Web Data Legally",
    slug: "how-students-can-access-deep-web-data-legally",
    desc: "A comprehensive guide for students on how to leverage university proxy networks to legally unlock premium Deep Web research data.",
    keywords: "student deep web access, legal deep web research, university proxies, academic databases",
    intro: "For students conducting serious biological, engineering, or sociological research, the Surface Web is rarely sufficient. The most valuable datasets and historical archives are locked deep within proprietary databases. Fortunately, students have a legal golden ticket to bypass these paywalls.",
    h2_1: "Leveraging Institutional Access",
    p_1: "Virtually all accredited universities spend millions of dollars annually purchasing institutional subscriptions to elite Deep Web databases (like IEEE Xplore, ProQuest, or LexisNexis). To access these legally and for free, students must route their internet connection through the university's EZproxy server or VPN, which authenticates them as authorized users.",
    h2_2: "Navigating Open Access Repositories",
    p_2: "If you lack institutional credentials, the Deep Web still offers an abundance of legal, free data via the Open Access movement. Institutional repositories (like Harvard's DASH or MIT's DSpace) house millions of pre-prints and post-prints of published research. Using federated deep web search tools like Directory of Open Access Journals (DOAJ) allows students to bypass commercial paywalls ethically.",
    faq1_q: "Is using Sci-Hub considered legal Deep Web searching?",
    faq1_a: "No. Sci-Hub operates by bypassing Publisher paywalls, which violates copyright law in many jurisdictions. It goes beyond utilizing legitimate Deep Web access channels."
  },
  {
    title: "Why 95% of the Internet Is Not on Google",
    slug: "why-95-percent-of-internet-is-not-on-google",
    desc: "Explore the vast hidden architecture of the internet. Understand why traditional crawlers capture only a tiny fraction of digital information.",
    keywords: "unindexed web, invisible web size, deep web percentage, limits of Google",
    intro: "The scale of the internet is almost incomprehensible, yet Google only shows you the tip of the iceberg. Various estimates suggest that up to 95% of the web's data footprint exists entirely outside of traditional search engine indexes.",
    h2_1: "The Dynamic Web Barrier",
    p_1: "The vast majority of unindexed data lives behind login screens or search query forms. When you search for a flight on Expedia, the price and availability data are generated dynamically from an underlying relational database at the exact moment you click 'Search.' Because Google cannot fill out forms or mimic user logins, the billions of permutations of this dynamic data remain unindexed.",
    h2_2: "Data Volume and Crawl Constraints",
    p_2: "Furthermore, the sheer volume of server logs, private corporate intranets, medical imaging archives, and unlinked orphan pages vastly exceeds Google's server capacity to crawl and store. To operate efficiently, search engines intentionally prioritize public, extensively cross-linked, high-traffic pages, systematically ignoring the heavier, complex architecture of the Deep Web.",
    faq1_q: "How big is the Deep Web compared to the Surface Web?",
    faq1_a: "While exact measurements fluctuate, data scientists estimate the Deep Web is anywhere from 400 to 500 times larger than the searchable Surface Web."
  },
  {
    title: "Hidden Academic Resources Used by Researchers",
    slug: "hidden-academic-resources-used-by-researchers",
    desc: "Discover the obscure Deep Web academic tools and hidden archives that professional researchers use to bypass traditional search limits.",
    keywords: "hidden academic resources, researcher tools, deep web archives, specialized scholarly search",
    intro: "Professional researchers rarely use Google to conduct extensive literature reviews. Instead, they rely on a heavily guarded ecosystem of specialized Deep Web tools designed to meticulously filter, cross-reference, and extract raw academic data.",
    h2_1: "Grey Literature Databases",
    p_1: "A massive source of obscure academic knowledge is 'Grey Literature'—research produced by organizations outside traditional commercial publishing. This includes government technical reports, corporate white papers, and conference proceedings. Databases like OpenGrey or the National Technical Reports Library (NTRL) grant access to this vital layer of the Deep Web that standard crawlers ignore.",
    h2_2: "Disciplinary Repositories",
    p_2: "Experts also frequent highly specific disciplinary repositories. Physicists utilize arXiv, economists use SSRN (Social Science Research Network), and biomedical researchers rely on PubMed Central. Because these repositories are deeply structured with highly specific metadata, searching them directly yields significantly higher precision than relying on Google's broad algorithmic guesswork.",
    faq1_q: "Why isn't Grey Literature published in journals?",
    faq1_a: "Grey literature is often highly technical, highly specific, and time-sensitive. Commercial publishers usually reject it for being too narrow, allowing it to remain freely accessible in the Deep Web."
  },
  {
    title: "Deep Web Search Engines That Actually Work",
    slug: "deep-web-search-engines-that-actually-work",
    desc: "Looking to explore the invisible web? Here is a curated list of functioning Deep Web search engines designed to surface unindexed data.",
    keywords: "deep web search engines, federated search tools, invisible web search, alternative search engines",
    intro: "If Google can't see the Deep Web, how do you search it? The answer lies in specialized federated search engines. These tools don't rely on pre-built indexes; instead, they query multiple disparate databases simultaneously in real-time.",
    h2_1: "Academic and Scientific Federators",
    p_1: "For scholarly pursuits, engines like BASE (Bielefeld Academic Search Engine) are unparalleled, indexing over 300 million documents from thousands of academic repositories. Another powerful tool is Science.gov, which acts as a gateway to over 200 million pages of authoritative U.S. government science information, much of which is buried off the Surface Web.",
    h2_2: "Public Records and Specialized Data",
    p_2: "For journalists and OSINT (Open Source Intelligence) researchers, tools like Pipl or the Internet Archive's Wayback Machine handle the heavy lifting. The Wayback Machine specifically archives billions of dead or deleted pages that Google has purged, effectively functioning as a search engine for the historical Deep Web.",
    faq1_q: "Is there one single search engine that searches the entire Deep Web?",
    faq1_a: "No. Because the Deep Web is fractured into millions of proprietary, unlinked databases and varied formats (PDFs, Excel data, private video), a unified index is technologically impossible."
  },
  {
    title: "What Kind of Data Exists in the Deep Web (Real Examples)",
    slug: "what-kind-of-data-exists-in-deep-web",
    desc: "A breakdown of exactly what makes up the invisible web. Look at real-world examples of Deep Web data, from medical records to massive scientific datasets.",
    keywords: "examples of deep web data, deep web content, invisible web examples, what is on the deep web",
    intro: "It is easy to categorize the Deep Web as an abstract matrix of code, but the reality is much more tangible. The data comprising the invisible web represents the functional backbone of modern digital civilization.",
    h2_1: "Financial and Personal Records",
    p_1: "The single largest category of Deep Web data consists of private records. Every digital transaction you make, every tax record filed, and every electronic health record (EHR) created by a hospital is securely stored in a network of decentralized databases. Security protocols ensure these trillions of bytes remain entirely inaccessible to external search indexers.",
    h2_2: "Raw Scientific Data Sets",
    p_2: "Beyond personal records, the Deep Web houses unimaginable quantities of raw scientific datasets. NASA's planetary imaging archives, the European Organization for Nuclear Research (CERN) collision data, and global weather telemetry telemetry create petabytes of information. This data isn't formatted neatly for HTML web browsing, inherently keeping it off the Surface Web.",
    faq1_q: "Can I accidentally post Deep Web data to the Surface Web?",
    faq1_a: "Yes. If an organization misconfigures a server or accidentally posts a secure link on a public, indexable forum, previously hidden data can be scraped and permanently embedded into the Surface Web."
  },
  {
    title: "How Governments Store Data Outside Google Search",
    slug: "how-governments-store-data-outside-google-search",
    desc: "Examine the localized databases, secure intranets, and complex architectures governments use to shield data from commercial search algorithms.",
    keywords: "government deep web, unindexed public records, secure intranets, government data storage, OSINT deep web",
    intro: "Governments generate an unfathomable amount of bureaucratic and statistical data daily. While transparency laws demand much of this data be public, governments deliberately structure it so that commercial search engines like Google cannot easily scrape or monetize it.",
    h2_1: "Balkanized Database Architecture",
    p_1: "Unlike commercial websites designed for maximum visibility, government data is heavily Balkanized. County court records, state property deeds, and federal census microdata are often siloed in outdated legacy systems. Users must navigate explicitly to a specific government portal, agree to terms of service, and use rigid drop-down menus to execute queries. This breaks the automated link-following behavior that Googlebot relies upon.",
    h2_2: "Security Clearances and Intranets",
    p_2: "For sensitive operational data, governments utilize physically separate intranets (such as the US military's SIPRNet). These networks do not connect to the broader internet architecture. Even for unclassified but sensitive data, governments employ strict API throttling, CAPTCHAs, and robot-blocking meta tags to prevent foreign algorithms from mapping and consolidating national infrastructures.",
    faq1_q: "Why doesn't the government make public records easy to Google?",
    faq1_a: "Partly due to outdated technology, but largely to protect citizen privacy. Forcing users to manually query localized databases prevents mass-scraping of public data for identity theft."
  },
  {
    title: "Deep Web Medical and Scientific Databases Explained",
    slug: "deep-web-medical-scientific-databases",
    desc: "An in-depth guide to navigating the specialized Deep Web databases critical to biological, medical, and pharmaceutical research.",
    keywords: "deep web medical databases, scientific research deep web, PubMed, clinical trials data, bioinformatics search",
    intro: "In the fields of medicine and biology, relying on general search algorithms can be dangerous. The highest echelons of verified scientific truth are curated in massive, restricted Deep Web databases specifically engineered for researchers.",
    h2_1: "Bioinformatics and Genetic Repositories",
    p_1: "Databases such as GenBank (operated by the NIH) store annotated collections of all publicly available DNA sequences. Searching these repositories requires specialized bioinformatics knowledge and software. The data is entirely structural and programmatic, completely alien to the natural language processing models used by Google to index typical web pages.",
    h2_2: "Clinical Trial Registries",
    p_2: "For pharmaceutical research, the Deep Web provides critical transparency. Registries like ClinicalTrials.gov house highly structured data regarding experimental treatments, statistical outcomes, and adverse effects. This data is meticulously categorized behind search query forms to prevent the spread of medical misinformation that could easily occur if raw data were scraped out of context onto the Surface Web.",
    faq1_q: "Is it safe to look up medical information on the Deep Web?",
    faq1_a: "While Deep Web medical databases are highly accurate, they are written for scientists and doctors. Without a medical background, the highly technical data is easily misinterpreted."
  },
  {
    title: "How to Find Information That Google Cannot Show",
    slug: "how-to-find-information-google-cannot-show",
    desc: "Step-by-step techniques and OSINT strategies to uncover the hidden information locked away in the Deep Web.",
    keywords: "deep web research techniques, OSINT deep web, advanced search strategies, bypassing google limits",
    intro: "When standard algorithmic searches fail to yield the necessary depth, researchers must adopt an investigative mindset. Finding information that Google cannot show requires transitioning from passive searching to proactive, structural data hunting.",
    h2_1: "Mastering the 'Invisible Web' Portals",
    p_1: "The first step is shifting tactics from searching for the *answer* to searching for the *database* that holds the answer. If you need historical flight data, don't ask Google for the data; use Google to locate aviation regulatory databases. Once you find the specific portal, switch to using their internal proprietary search engine, which will search the Deep Web layer directly.",
    h2_2: "Boolean Logic and Library Sciences",
    p_2: "To succeed in Deep Web academic or legal portals, you must master strict Boolean logic (AND, OR, NOT) and proximity operators. Unlike Google, which loosely approximates your intent, database engines require absolute precision. By combining Boolean mechanics with domain-specific 'controlled vocabularies' (like MeSH terms in medicine), you can force these hidden systems to yield highly granular exact matches.",
    faq1_q: "Is Open Source Intelligence (OSINT) strictly about the Deep Web?",
    faq1_a: "No. OSINT utilizes both Surface and Deep Web sources, combining globally indexed data with hidden public records to form comprehensive intelligence profiles."
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

// Build folder if needed
if (!fs.existsSync(BLOG_DIR)){
    fs.mkdirSync(BLOG_DIR, { recursive: true });
}

function generate() {
  let templateContent = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  let categoryHTML = fs.readFileSync(CATEGORY_HTML_PATH, 'utf-8');
  let sitemapXML = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  let categoryUpdated = false;
  let sitemapUpdated = false;

  let newCards = '';
  let dateStr = "2026-03-24"; 
  let monthStr = "March 24, 2026";
  let existingIndexOffset = 6; // Because there are already 5 cards in the html. Wait, we will verify below.

  const cardsInHtml = (categoryHTML.match(/<article class="article-card">/g) || []).length;
  existingIndexOffset = cardsInHtml + 1; // dynamically set offset 

  articles.forEach((art, index) => {
    const articlePath = path.join(BLOG_DIR, art.slug + '.html');
    
    let result = templateContent;
    
    // Correct deepest paths explicitly
    result = result.split('="../').join('="../../');
    
    // Avoid regex escaping bugs by using split/join for string replacement
    result = result.split('[Article Title]').join(art.title);
    result = result.split('[Full Article Title With Primary Keyword]').join(art.title);
    result = result.replace(/\[Write a compelling 150-160 character.*?\]/g, art.desc);
    result = result.replace(/\[keyword1, keyword2.*?\]/g, art.keywords);
    result = result.split('[Author Name]').join("Rajesh K");
    result = result.split('[Author Full Name]').join("Rajesh K");
    result = result.replace(/<div class="author-avatar">\s*<span>\[A\]<\/span>\s*<\/div>/g, '<div class="author-avatar">\n          <span>R</span>\n        </div>');
    result = result.split('[CATEGORY]').join("deep-web");
    result = result.split('[Category Name]').join("Deep Web Resources");
    result = result.split('[CSS-CLASS]').join("deep");
    result = result.split('[SLUG]').join(art.slug);
    result = result.split('[YYYY-MM-DD]').join(dateStr);
    result = result.split('[Month DD, YYYY]').join(monthStr);
    result = result.split('[X] min read').join("7 min read");
    result = result.split('[primary keyword tag]').join("Deep Web");
    result = result.split('[Article Title Short]').join(art.title.split(' ').slice(0, 5).join(' ') + '...');
    
    // Body replacement
    result = result.replace(/\[Introduction paragraph.*?\]/g, art.intro);
    result = result.replace(/\[Section 1 Heading.*?\]/g, art.h2_1);
    result = result.replace(/\[Section 1 paragraph content.*?\]/g, art.p_1);
    result = result.replace(/\[Second paragraph of section 1.\]/g, "");
    
    result = result.replace(/\[Section 2 Heading\]/g, art.h2_2);
    result = result.replace(/\[Section 2 content\.\.\.\]/g, art.p_2);
    result = result.replace(/\[Continue section 2\.\.\.\]/g, "");
    
    // Clean up template chunks
    result = result.replace(/<h3.*?>\[Subsection 1.1.*?>.*?<\/ul>/s, ""); 
    
    // Inject Deep Dive and Conclusion
    result = result.replace(/<h2 id="section-3.*?<!-- ── CONCLUSION ────────────────────────────────── -->/s, deepDiveContent + "\n            <!-- ── CONCLUSION ────────────────────────────────── -->");

    result = result.replace(/\[Wrap up in 2-3 sentences.*?\]/g, "Exploring the Deep Web fundamentally shifts how we understand digital information. Always use these hidden protocols legally and harness the immense power of invisible data to elevate your academic capabilities.");

    // FAQ
    result = result.replace(/\[FAQ Question 1.*?\]/g, art.faq1_q);
    result = result.replace(/\[Answer to FAQ 1.*?\]/g, art.faq1_a);
    result = result.replace(/<div class="faq-item">\s*<button class="faq-question".*?\[FAQ Question 2\].*?<\/div>\s*<\/div>/s, "");
    result = result.replace(/<div class="faq-item">\s*<button class="faq-question".*?\[FAQ Question 3\].*?<\/div>\s*<\/div>/s, "");

    // Link update in Internal Links
    result = result.split('[RELATED-CATEGORY]').join("internet-search-problems");
    result = result.split('[Related Category Name]').join("Internet Search Problems");
    result = result.split('[RELATED-SLUG]').join("why-google-search-is-getting-worse-explained");
    result = result.split('[Related Article Title]').join("Why Google Search Is Getting Worse (Real Reasons Explained)");
    result = result.split('[OTHER-CATEGORY]').join("ai-technology");
    result = result.split('[Another Related Article]').join("How AI Agents Will Replace Apps in the Next 5 Years");
    
    fs.writeFileSync(articlePath, result, 'utf-8');
    console.log("Created: " + articlePath);

    // 2. Prepare Category Addition
    if (!categoryHTML.includes(art.slug)) {
        let printNumber = existingIndexOffset + index;
        newCards += `
            <article class="article-card">
              <div class="article-card-number">${printNumber.toString().padStart(2, '0')}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag cat-deep">Deep Web</span>
                  <time datetime="${dateStr}">${monthStr}</time>
                  <span>7 min read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="../blog/deep-web/${art.slug}.html">${art.title}</a></h2>
                <p class="excerpt">${art.desc}</p>
                <a href="../blog/deep-web/${art.slug}.html" class="read-more">Read article →</a>
              </div>
            </article>\n`;
    }

    // 3. Add to sitemap
    let sitemapEntry = `  <url>\n    <loc>https://studenttechprojects.in/blog/deep-web/${art.slug}.html</loc>\n    <lastmod>${dateStr}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`;
    if (!sitemapXML.includes(art.slug)) {
      sitemapXML = sitemapXML.split('</urlset>').join(sitemapEntry);
      sitemapUpdated = true;
    }
  });

  if (newCards !== '') {
    // Inject pagination correctly
    let targetInjection = /<\/div>\s*<\/div>\s*<aside class="sidebar">/;
    
    const paginationHTML = `
            <!-- Pagination Controls -->
            <div class="pagination" id="pagination-controls">
              <!-- JS will inject buttons here -->
            </div>
`;
    categoryHTML = categoryHTML.replace(targetInjection, newCards + "          </div>\n" + paginationHTML + "        </div>\n\n        <aside class=\"sidebar\">");

    if (!categoryHTML.includes('id="pagination-controls"')) {
        console.log("Failed to inject into category HTML");
    } else {
        // Only inject JS logic if not already there
        if(!categoryHTML.includes('paginationControls.innerHTML = \'\';')) {
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
        console.log('Updated category page with new cards');
    }
  }
  
  if (sitemapUpdated) {
    fs.writeFileSync(SITEMAP_PATH, sitemapXML, 'utf-8');
    console.log('Updated sitemap');
  }
}

generate();
