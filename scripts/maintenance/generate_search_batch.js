const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(ROOT_DIR, 'blog', 'internet-search-problems');
const TEMPLATE_PATH = path.join(ROOT_DIR, 'blog', 'article-template.html');
const CATEGORY_HTML_PATH = path.join(ROOT_DIR, 'categories', 'internet-search-problems.html');
const SITEMAP_PATH = path.join(ROOT_DIR, 'sitemap.xml');

const articles = [
  {
    title: "Why Google Search Is Getting Worse (Real Reasons Explained)",
    slug: "why-google-search-is-getting-worse-explained",
    desc: "Discover why Google Search feels less effective today. We explore SEO spam, AI-generated content, ad dominance, and algorithmic shifts causing search decay.",
    keywords: "Google search getting worse, search decay, SEO spam, why google search is bad, AI content in search",
    intro: "Many internet users have noticed a frustrating trend: typing a query into Google often returns pages filled with affiliate links, generic AI content, and aggressive ads. The feeling that 'Google Search is getting worse' isn't just nostalgia—it's driven by measurable shifts in how the internet is monetized.",
    h2_1: "The Rise of SEO Spam and AI Content",
    p_1: "One of the primary reasons search quality has degraded is the explosion of Search Engine Optimization (SEO) spam. Websites use sophisticated tactics—and increasingly, generative AI—to flood the web with low-quality articles purely designed to rank high, pushing genuinely helpful, human-written content further down the page.",
    h2_2: "Monetization and Ad Dominance",
    p_2: "Over the years, Google's business model has prioritized paid advertisements. The top half of a search results page is frequently dominated by sponsored links and Google's own integrated features (like 'Snippets' or 'People Also Ask'). This creates a fundamentally biased layout where commercial intent eclipses pure informational discovery.",
    faq1_q: "Is Google intentionally making search worse?",
    faq1_a: "No, Google is constantly fighting a war against SEO spammers. The decline in quality is a side effect of millions of websites trying to game an increasingly complex and monetized algorithm."
  },
  {
    title: "Why Google Shows Outdated Results Even in 2026",
    slug: "why-google-shows-outdated-results-even-in-2026",
    desc: "Understand the technical mechanisms behind Google's crawling schedule and why outdated web pages still rank highly for modern searches.",
    keywords: "outdated google results, search engine crawling, web index delays, google cache issues, why outdated pages rank",
    intro: "It is incredibly frustrating to search for a fast-moving, modern topic and be confronted with articles from 2015. Despite the immense computing power of Google, search results can often lag significantly behind the real-world timeline.",
    h2_1: "The Mechanics of Link Equity (PageRank)",
    p_1: "Google relies heavily on 'authority' metrics, often derived from how many other sites link to a page. Older pages have had years to accumulate thousands of backlinks. Even if a new article is far more accurate and up-to-date, Google’s algorithm may still favor the older page simply because its historical 'trust' score is massively inflated.",
    h2_2: "Crawl Budgets and Site Architecture",
    p_2: "Google does not index the entire internet in real-time. It allocates a 'crawl budget' to each website. If a site has poor internal linking or millions of dynamically generated pages, Googlebots might taking weeks or months to discover newly updated content. This means the search index you are querying is practically a delayed snapshot of the web.",
    faq1_q: "How can I force Google to show recent results?",
    faq1_a: "You can use Google's 'Tools' button directly under the search bar and filter results by 'Past year' or 'Past month' to force the algorithm to prioritize freshness."
  },
  {
    title: "Why You Can’t Find Some Information on the Internet",
    slug: "why-you-cant-find-some-information-on-the-internet",
    desc: "Explore the bounds of the indexed internet. Learn about the Deep Web, walled gardens, and why search engines aren't omniscient.",
    keywords: "unsearchable internet, deep web, walled gardens, hidden information online, limits of search engines",
    intro: "We often treat search engines as omniscient oracles containing all human knowledge. However, the reality is that the vast majority of digital information is completely invisible to standard search algorithms—a phenomenon largely misunderstood by the public.",
    h2_1: "The Surface Web vs. The Deep Web",
    p_1: "Google only searches the 'Surface Web'—pages that are publicly linked and freely indexable. The 'Deep Web,' which comprises an estimated 90% of the internet, consists of academic databases, private social media groups, medical records, and paywalled archives. Because bots cannot log in or bypass paywalls, this wealth of data remains unsearchable.",
    h2_2: "Walled Gardens and Ephemeral Content",
    p_2: "Modern platforms like Discord, Telegram, and TikTok operate as 'walled gardens.' The highly valuable discussions and data within these ecosystems are intentionally locked away from Google's crawlers to monopolize user attention. As more human interaction shifts to these private platforms, traditional web search engines are increasingly left indexing yesterday's news.",
    faq1_q: "Does Google censor search results?",
    faq1_a: "While Google complies with local laws regarding copyright and extreme illegal content, the main reason you can't find information is usually because it is locked in a database or private network, not censorship."
  },
  {
    title: "How Google Decides What You See (Ranking Secrets)",
    slug: "how-google-decides-what-you-see-ranking-secrets",
    desc: "A breakdown of Google's core ranking signals, from backlink profiles to user intent and semantic relevance.",
    keywords: "google ranking factors, search algorithm secrets, how ranking works, SEO ranking signals, intent optimization",
    intro: "Behind the simple white search box lies one of the most complex algorithms ever created. Deciphering exactly how Google decides which ten links deserve to be on the first page out of millions involves understanding the core pillars of modern search logic.",
    h2_1: "Matching Search Intent",
    p_1: "In the early days, Google simply counted how many times your keyword appeared on a page. Today, thanks to natural language processing models like BERT and MUM, Google assesses 'search intent'. If you search 'Apple,' the algorithm uses context and machine learning to understand whether you want the fruit, the tech company, or a nearby store, curating results tailored to the statistically most likely intent.",
    h2_2: "The E-E-A-T Framework",
    p_2: "Google employs an architectural guideline known as E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness. The algorithm looks for signals—such as author credentials, high-quality citations, and secure domain structures—to boost sites that appear legitimate and suppress sites that look like spam, particularly for crucial health or financial queries.",
    faq1_q: "What is the most important ranking factor?",
    faq1_a: "There is no single factor; however, high-quality content that thoroughly satisfies the user's search intent, combined with authoritative backlinks, consistently yields the best results."
  },
  {
    title: "Why Google Ignores Exact Keywords You Type",
    slug: "why-google-ignores-exact-keywords",
    desc: "Find out why Google frequently changes your search query and ignores specific words, favoring semantic meaning over strict matching.",
    keywords: "google ignores keywords, semantic search, fuzzy matching, search intent over keywords, algorithmic query modification",
    intro: "It’s a common experience: you type a precise sequence of technical terms into Google, but the results omit your most critical keyword entirely. This is a deliberate design choice marking the shift from 'lexical' to 'semantic' search.",
    h2_1: "The Death of Boolean Search",
    p_1: "Decades ago, search engines operated on strict Boolean logic—if a word wasn't on the page, the page wasn't shown. However, because humans often use synonyms (e.g., 'car' vs 'automobile') or misspell words, Google evolved. The algorithm now breaks down your query mathematically to grasp the conceptual meaning, intentionally ignoring exact keywords if it believes a different set of words better represents your underlying question.",
    h2_2: "When AI Overcorrects",
    p_2: "While this semantic matching is brilliant for conversational queries, it utterly fails for researchers or developers who need highly specific strings of code or model numbers. Google's algorithm essentially assumes it knows what you want better than you do, aggressively broadening the scope of narrow queries to ensure it never returns a 'zero results' page, even if the broadened results are unhelpful.",
    faq1_q: "How can I force Google to use my exact words?",
    faq1_a: "Put the specific word or phrase in double quotation marks (e.g., \"error code 404X\"). This forces Google to execute a strict exact-match search for that specific string."
  },
  {
    title: "Why Search Results Change Every Day (Behind the Algorithm)",
    slug: "why-search-results-change-every-day",
    desc: "An exploration of Google's continuous indexing, algorithm updates, and machine learning adjustments that make search volatile.",
    keywords: "search result volatility, google algorithm updates, SERP fluctuations, why search changes, continuous indexing",
    intro: "You find a perfect resource on Monday, but when you search for the exact same term on Wednesday, that website has vanished from the first page. The internet is not a static library; it is a highly volatile environment continuously reorganized by dynamic algorithms.",
    h2_1: "Continuous Indexing and Freshness",
    p_1: "The web generates millions of new pages daily. Google's crawlers operate 24/7, constantly injecting new content into the global index. Based on predictive modeling, Google applies a 'Quality Deserves Freshness' (QDF) modifier. If a topic suddenly spikes in the news, the algorithm will aggressively shuffle the deck, pulling down established evergreen content to prioritize breaking, up-to-the-minute updates.",
    h2_2: "Machine Learning and A/B Testing",
    p_2: "Modern search engines utilize deep reinforcement learning to optimize rankings in real-time. Google will often temporarily elevate a page from page 2 to page 1 to measure how real humans interact with it in a live A/B test. If users quickly hit the 'Back' button (a high bounce rate), the page is demoted. These constant algorithmic micro-adjustments lead to the daily 'dance' of search result positions.",
    faq1_q: "What is a Google Core Update?",
    faq1_a: "A Google Core Update is a broad algorithmic change designed to ensure the system is presenting helpful and reliable results overall, which can cause massive ranking shifts across the entire internet."
  },
  {
    title: "Why Google Shows Reddit and Quora Results First",
    slug: "why-google-shows-reddit-quora-first",
    desc: "Unpack exactly why Google's algorithm has pivoted to favor user-generated content platforms like Reddit and Quora over independent blogs.",
    keywords: "reddit in google search, Quora ranking, user generated content SEO, hidden gems update, why reddit ranks high",
    intro: "Recently, almost every factual search seems to conclude with the word 'reddit'. Even when you don't type it, forums like Reddit and Quora absolutely dominate the top spots. This isn't an accident; it's a structural reaction to the current state of the internet.",
    h2_1: "The Backlash Against Corporate SEO",
    p_1: "Google recognized the growing user frustration with overly optimized, robotic affiliate blogs. People lost trust in generic review sites that prioritized ad income over authentic opinions. As a result, Google introduced major algorithmic shifts (like the 'Hidden Gems' update) explicitly designed to reward User-Generated Content (UGC), favoring real, unpolished human discussions over sanitized corporate articles.",
    h2_2: "The Authority Loop of Mega-Domains",
    p_2: "Furthermore, platforms like Reddit possess virtually infinite domain authority. Because millions of diverse sites link to Reddit daily, Google views the entire domain as a highly trusted leviathan. When an internet user asks a niche question, Google's algorithm assumes the collective human verification built into Reddit's upvote system provides a safer, more reliable answer than a small, unverified independent tech blog.",
    faq1_q: "Is information on Reddit more accurate than blogs?",
    faq1_a: "It depends. Reddit offers authentic, unvarnished human opinions, but it also suffers from echo chambers, bias, and confidently incorrect medical or legal advice."
  },
  {
    title: "Why Some Websites Never Appear on Google",
    slug: "why-some-websites-never-appear-on-google",
    desc: "Learn about the technical roadblocks preventing indexing, from rogue robots.txt files to Javascript rendering failures.",
    keywords: "why website not on google, indexing problems, googlebot issues, robots.txt errors, SEO technical failures",
    intro: "A developer can spend months building a breathtakingly beautiful website, only to launch it and find that zero traffic arrives. It simply does not exist on Google. Understanding why sites become invisible requires looking under the technical hood.",
    h2_1: "The Infamous Robots.txt and NoIndex Tags",
    p_1: "The most common and devastating reason a site isn't indexed is a small snippet of code. The 'robots.txt' file operates as a bouncer at the door of your server. If a developer accidentally leaves a 'Disallow: /' directive active from the staging phase, Googlebots will respectfully turn around and completely ignore the entire site. Similarly, rogue 'noindex' meta tags will permanently exclude pages regardless of their quality.",
    h2_2: "JavaScript Rendering and Orphan Pages",
    p_2: "Modern web frameworks (like React or Angular) often build pages using heavy Client-Side JavaScript. While Google's 'rendering engine' can execute JavaScript, it is resource-intensive and often deferred. If your crucial content or navigation links rely strictly on JS firing correctly within a few milliseconds, Google might simply see a blank page. If no other site links to your page (leaving it an 'orphan'), the crawler will never even know to look for it.",
    faq1_q: "How can I check if my site is indexed?",
    faq1_a: "Go to Google and type 'site:yourdomain.com'. If nothing appears, your site is entirely absent from Google’s index database."
  },
  {
    title: "How Search Engines Fail for Technical and Niche Topics",
    slug: "how-search-engines-fail-technical-niche-topics",
    desc: "Understand the inherent limitations of broad algorithms when dealing with highly specialized academic, programming, or niche queries.",
    keywords: "search engine failures, academic search problems, niche SEO issues, long tail query limits, technical search engine bias",
    intro: "Search engines are built to operate at an unimaginable scale, satisfying the 'average' intent of billions of users. Consequently, when researchers, coders, or specialists try to utilize these same tools for highly nuanced technical queries, the system often crumbles.",
    h2_1: "The 'Popularity Contest' Problem",
    p_1: "Google ranks content primarily on popularity and interconnectivity. For broad topics like 'how to boil an egg,' this works perfectly. However, for a niche topic like 'asynchronous memory allocation in legacy operating systems,' the system fails. Highly accurate, technical treatises might have zero backlinks and poor mobile optimization, causing the algorithm to suppress them in favor of a watered-down, slightly-relevant tech blog with a massive marketing budget.",
    h2_2: "Context Collapse in Complex Queries",
    p_2: "Technical searches often rely on strict syntax, punctuation, or highly specific acronyms. Because AI-driven search models aggressively normalize queries—stripping out punctuation, collapsing synonyms, and ignoring rare terms—they effectively obliterate the technical context. A developer searching for a specific bash command will often find Google returning results for generic Linux tutorials instead, because the algorithm generalized a hyper-specific phrase.",
    faq1_q: "Where should I search for technical documents instead of Google?",
    faq1_a: "Use specialized indexes like Google Scholar, IEEE Xplore, Semantic Scholar, GitHub, or dedicated technical forums like Stack Overflow."
  },
  {
    title: "Why Your Search Results Are Different From Others",
    slug: "why-your-search-results-are-different",
    desc: "Discover how personalization, location tracking, and browser history create a unique 'filter bubble' for every Google user.",
    keywords: "personalized search results, filter bubbles, location based search, why SERP differs, algorithmic personalization",
    intro: "If you and your colleague sit beside each other and type the exact same phrase into Google, you will almost certainly receive different sets of links. Google search is not an objective, static encyclopedia—it is a dynamically generated proxy tailored specifically to you.",
    h2_1: "Location and Device Signals",
    p_1: "The most immediate factor altering your results is your IP address. Search engines prioritize local context. A search for 'attorney' in Mumbai yields entirely different results than the same search in New York. Furthermore, algorithms detect whether you are using a mobile phone or a desktop, suppressing sites that aren't mobile-friendly for phone users, fundamentally altering the perceived ranking hierarchy.",
    h2_2: "Behavioral Profiles and Filter Bubbles",
    p_2: "Google maintains detailed behavioral profiles on logged-in users. It knows your search history, the YouTube videos you watch, and which links you tend to click. By feeding this data into a personalization matrix, the engine curates results it thinks *you* want to see, constructing a 'Filter Bubble.' If you frequently engage with articles leaning toward a specific political bias, the algorithm will quietly bury contrasting viewpoints, reinforcing your existing worldview.",
    faq1_q: "How can I see objective, unpersonalized search results?",
    faq1_a: "Use your browser's 'Incognito' or 'Private' mode, ensure you are logged out of all Google accounts, or use a privacy-focused search engine like DuckDuckGo."
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

function generate() {
  let templateContent = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  let categoryHTML = fs.readFileSync(CATEGORY_HTML_PATH, 'utf-8');
  let sitemapXML = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  let categoryUpdated = false;
  let sitemapUpdated = false;

  let newCards = '';
  // Set the correct date
  let dateStr = "2026-03-24"; 
  let monthStr = "March 24, 2026";

  articles.forEach((art, index) => {
    const articlePath = path.join(BLOG_DIR, `${art.slug}.html`);
    
    // 1. Generate Article HTML
    let result = templateContent;
    
    // Correct deepest paths explicitly in the generated markup
    result = result.split('="../').join('="../../');
    
    // Use proper JS replace rules, don't use double escaping in tool string
    result = result.replace(/\[Article Title\]/g, art.title);
    result = result.replace(/\[Full Article Title With Primary Keyword\]/g, art.title);
    result = result.replace(/\[Write a compelling 150-160 character.*?\]/g, art.desc);
    result = result.replace(/\[keyword1, keyword2.*?\]/g, art.keywords);
    result = result.replace(/\[Author Name\]/g, "Rajesh K");
    result = result.replace(/\[Author Full Name\]/g, "Rajesh K");
    result = result.replace(/\[A\]/g, "R");
    result = result.replace(/\[CATEGORY\]/g, "internet-search-problems");
    result = result.replace(/\[Category Name\]/g, "Internet Search Problems");
    result = result.replace(/\[CSS-CLASS\]/g, "search");
    result = result.replace(/\[SLUG\]/g, art.slug);
    result = result.replace(/\[YYYY-MM-DD\]/g, dateStr);
    result = result.replace(/\[Month DD, YYYY\]/g, monthStr);
    result = result.replace(/\[X\] min read/g, "6 min read");
    result = result.replace(/\[primary keyword tag\]/g, "Search Problems");
    result = result.replace(/\[Article Title Short\]/g, art.title.split(' ').slice(0, 5).join(' ') + '...');
    
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

    result = result.replace(/\[Wrap up in 2-3 sentences.*?\]/g, "As search algorithms evolve, understanding these hidden mechanics becomes crucial. Navigate the complexities of the internet with this advanced perspective and remain critical of the information presented on any single platform.");

    // FAQ
    result = result.replace(/\[FAQ Question 1.*?\]/g, art.faq1_q);
    result = result.replace(/\[Answer to FAQ 1.*?\]/g, art.faq1_a);
    result = result.replace(/<div class="faq-item">\s*<button class="faq-question".*?\[FAQ Question 2\].*?<\/div>\s*<\/div>/s, "");
    result = result.replace(/<div class="faq-item">\s*<button class="faq-question".*?\[FAQ Question 3\].*?<\/div>\s*<\/div>/s, "");

    // Link update in Internal Links
    result = result.replace(/\[RELATED-CATEGORY\]/g, "ai-technology");
    result = result.replace(/\[Related Category Name\]/g, "AI Technology");
    result = result.replace(/\[RELATED-SLUG\]/g, "how-ai-agents-will-replace-apps");
    result = result.replace(/\[Related Article Title\]/g, "How AI Agents Will Replace Apps in the Next 5 Years");
    result = result.replace(/\[OTHER-CATEGORY\]/g, "deep-web-resources");
    result = result.replace(/\[Another Related Article\]/g, "Deep Web Databases Explained");
    
    fs.writeFileSync(articlePath, result, 'utf-8');
    console.log(`Created/overwritten explicitly styled: ${articlePath}`);

    // 2. Prepare Category Addition
    // Assumes category HTML has the same structure where newCards can be prepended before the pagination.
    if (!categoryHTML.includes(art.slug)) {
        let existingIndex = 10 + index + 1; // It already had 10 articles.
        newCards += `
            <article class="article-card">
              <div class="article-card-number">${existingIndex}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag cat-search">Search Problems</span>
                  <time datetime="${dateStr}">${monthStr}</time>
                  <span>6 min read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="../../blog/internet-search-problems/${art.slug}.html">${art.title}</a></h2>
                <p class="excerpt">${art.desc}</p>
                <a href="../../blog/internet-search-problems/${art.slug}.html" class="read-more">Read article →</a>
              </div>
            </article>\n`;
    }

    // 3. Add to sitemap
    let sitemapEntry = `  <url>\n    <loc>https://studenttechprojects.in/blog/internet-search-problems/${art.slug}.html</loc>\n    <lastmod>${dateStr}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`;
    if (!sitemapXML.includes(art.slug)) {
      sitemapXML = sitemapXML.replace('</urlset>', sitemapEntry);
      sitemapUpdated = true;
    }
  });

  if (newCards !== '') {
    categoryHTML = categoryHTML.replace('          </div>\\r\\n\\r\\n        </div>\\r\\n\\r\\n        <aside class="sidebar">', newCards + '          </div>\\r\\n\\r\\n        </div>\\r\\n\\r\\n        <aside class="sidebar">');
    // Also try without \\r just in case
    categoryHTML = categoryHTML.replace('          </div>\\n\\n        </div>\\n\\n        <aside class="sidebar">', newCards + '          </div>\\n\\n        </div>\\n\\n        <aside class="sidebar">');
    
    fs.writeFileSync(CATEGORY_HTML_PATH, categoryHTML, 'utf-8');
    console.log('Updated category page with new cards');
  }
  
  if (sitemapUpdated) {
    fs.writeFileSync(SITEMAP_PATH, sitemapXML, 'utf-8');
    console.log('Updated sitemap');
  }
}

generate();
