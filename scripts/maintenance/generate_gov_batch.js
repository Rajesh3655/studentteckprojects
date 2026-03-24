const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(ROOT_DIR, 'blog', 'government-data');
const TEMPLATE_PATH = path.join(ROOT_DIR, 'blog', 'article-template.html');
const CATEGORY_HTML_PATH = path.join(ROOT_DIR, 'categories', 'government-data.html');
const SITEMAP_PATH = path.join(ROOT_DIR, 'sitemap.xml');

const articles = [
  {
    title: "Hidden Government Data Sources You Didn’t Know Exist",
    slug: "hidden-government-data-sources-you-didnt-know-exist",
    desc: "Discover obscure, unindexed government databases that offer high-value raw data for research, away from mainstream portals.",
    keywords: "hidden government data, obscure public records, unindexed government databases, deep web public data, specialized statistical portals",
    intro: "While major open data portals attract all the attention, some of the most granular, high-value government datasets are quietly hosted on obscure sub-departmental websites. These hidden gems are often overlooked by students relying solely on Google searches.",
    h2_1: "Navigating Sub-Departmental Archives",
    p_1: "Most public focus is on aggregated national portals, but individual ministries (like Agriculture, Earth Sciences, or Water Resources) maintain their own highly specialized database infrastructures. Because these are siloed legacy systems built for internal departmental use, they rarely appear in broad search engine results but contain decades of raw, unaggregated telemetry.",
    h2_2: "Declassified and Historical Digitizations",
    p_2: "Another major blind spot involves historical digitization projects. National archives and defense departments frequently declassify thousands of technical reports and historical datasets. These are often uploaded as massive raw CSV files or scanned PDFs on obscure (.gov) FTP servers, completely invisible to the casual internet researcher.",
    faq1_q: "Why don't governments just put all data on one website?",
    faq1_a: "Due to bureaucratic fragmentation, different agencies use varying legacy software architectures, making a single unified database technologically and politically difficult."
  },
  {
    title: "How to Use data.gov.in for Real Student Projects",
    slug: "how-to-use-data-gov-in-for-real-student-projects",
    desc: "A practical guide for students on navigating data.gov.in, extracting raw datasets, and applying them to data science and engineering projects.",
    keywords: "data.gov.in, Indian open data, government datasets for projects, how to use public APIs, student tech projects",
    intro: "The Open Government Data Platform India (data.gov.in) is a goldmine for computer science and economics students. However, simply downloading a CSV isn't enough; knowing how to clean and integrate this data is what separates a basic assignment from a standout project.",
    h2_1: "Finding Usable Datasets",
    p_1: "The platform hosts hundreds of thousands of datasets, but many are outdated or poorly formatted. The key is filtering by 'High-Value Datasets' and utilizing the API directories. Look for datasets with frequent update cycles—such as real-time Air Quality Indexes (AQI) or daily agricultural mandi prices—which are perfect for dynamic machine learning models.",
    h2_2: "Leveraging the OGD APIs",
    p_2: "Rather than downloading static Excel files, advanced students should connect directly to the platform's REST APIs. By authenticating with an API key, you can build live dashboards or mobile applications that automatically pull the latest government data on health, sanitation, or infrastructure, demonstrating real-world software engineering skills.",
    faq1_q: "Is data from data.gov.in free for commercial use?",
    faq1_a: "Yes, under the National Data Sharing and Accessibility Policy (NDSAP) of India, most datasets published on the portal are open for both academic and commercial use."
  },
  {
    title: "Where to Find Official Government Statistics Online",
    slug: "where-to-find-official-government-statistics-online",
    desc: "Learn exactly where to source verified, macroeconomic, and demographic statistics directly from government authorities to bypass media bias.",
    keywords: "official government statistics, macroeconomic data, demographic statistics, primary data sources, finding public statistics",
    intro: "When conducting macroeconomic or sociological research, secondary sources like news articles are inherently biased and often misinterpret data. To ensure academic integrity, students must learn to pull statistics directly from the primary governmental source.",
    h2_1: "Navigating Ministry Portals",
    p_1: "Different types of statistics are heavily compartmentalized. For GDP, inflation, and industrial output, researchers must utilize the Ministry of Statistics and Programme Implementation (MoSPI). Financial and banking liquidity data is exclusively curated by central banks (like the RBI). Knowing which specific autonomous body handles which jurisdiction is the first step in effective data gathering.",
    h2_2: "Understanding Metadata and Methodology",
    p_2: "Locating the raw numbers is only half the battle. Serious researchers must also download the 'Metadata' documents associated with government statistics. These documents explain the exact methodology, sample sizes, and definitions used to collect the data. Without understanding the methodology, a student might draw completely false conclusions from statistically insignificant anomalies.",
    faq1_q: "Can government statistics be wrong?",
    faq1_a: "Yes. Data collection at a national scale is incredibly difficult. Factors like outdated survey methods, political interference, or poor sampling can skew official statistics."
  },
  {
    title: "Government Open Data Portals That Most People Ignore",
    slug: "government-open-data-portals-most-people-ignore",
    desc: "Move beyond the obvious portals. Discover regional, municipal, and specialized inter-governmental data portals critical for hyper-local research.",
    keywords: "municipal open data, regional data portals, obscure public data, hyper-local government data, smart city datasets",
    intro: "While national platforms receive millions of hits, thousands of incredibly detailed open data portals maintained by local municipalities and state-level organizations remain virtually untouched by researchers.",
    h2_1: "The value of Municipal Data",
    p_1: "If you are analyzing traffic patterns, real estate zoning, or local crime rates, national data is far too aggregated to be useful. Municipal 'Smart City' portals provide hyper-local, geo-tagged datasets. These portals offer granular data like individual pothole reports, real-time public transit GPS feeds, and neighborhood-level energy consumption metrics—perfect for predictive analytics.",
    h2_2: "Inter-Governmental and Global Coalitions",
    p_2: "Beyond local boundaries, specialized inter-governmental bodies (such as the World Bank Open Data portal, OECD, or the UN Data catalog) host highly standardized, cross-comparable datasets. These portals are invaluable for economics students looking to run regressions connecting global public policy to localized socio-economic outcomes.",
    faq1_q: "Are municipal data portals updated frequently?",
    faq1_a: "It varies wildly. Some 'Smart Cities' offer live automated API feeds, while smaller municipalities might only upload a static PDF report once a year."
  },
  {
    title: "How to Access Census and NSSO Data Easily",
    slug: "how-to-access-census-and-nsso-data-easily",
    desc: "A streamlined guide to breaking through the bureaucratic interfaces of Census India and the National Sample Survey Office for research.",
    keywords: "Census India data, NSSO microdata, demographic research, accessing sample surveys, unit-level data extraction",
    intro: "The decennial Census and the National Sample Survey Office (NSSO) provide the most comprehensive socio-economic snapshots of India. However, their websites are notoriously complex, deterring many students from utilizing this foundational data.",
    h2_1: "Demystifying the Census Tables",
    p_1: "The Census data is not offered as one simple download. It is split into numerous specific 'Tables' (e.g., A-Series for population, C-Series for social/cultural). To access it easily, students must first understand the classification manual to identify the exact table code they need. Once identified, these tables can be downloaded sequentially and merged using Python or R scripts.",
    h2_2: "Tackling NSSO Unit-Level Data",
    p_2: "While summary reports are easily available, serious behavioral economics or public health studies require 'Unit-Level Data'—the anonymized responses of individual households. Accessing this requires navigating the MoSPI portal, understanding specific 'Round Numbers' (such as the 77th round on Debt and Investment), and parsing massive text files using provided multiplier codes.",
    faq1_q: "Do I have to pay to use NSSO Unit-Level data?",
    faq1_a: "No, historically this data was monetized, but recent open-data initiatives have made the majority of unit-level microdata free for students and researchers to download."
  },
  {
    title: "Free Government Datasets for Machine Learning Projects",
    slug: "free-government-datasets-for-machine-learning-projects",
    desc: "Level up your data science portfolio with complex, real-world public datasets perfect for training predictive AI models.",
    keywords: "machine learning datasets, public ML data, predictive modeling open data, data science projects, Kaggle alternatives",
    intro: "Building a machine learning portfolio using overused, generic datasets (like the Titanic or Iris datasets) will not impress employers. Utilizing raw, complex government datasets demonstrates an ability to handle real-world messiness and deliver actionable civic insights.",
    h2_1: "Predictive Healthcare and Epidemiology",
    p_1: "Governments provide vast amounts of anonymized epidemiological data. By pulling historical infectious disease vector data or regional hospital capacity metrics from national health portals, students can train time-series forecasting models (like LSTMs or ARIMA) to predict outbreak clusters, mirroring the models used by the CDC or WHO.",
    h2_2: "Geospatial and Agricultural Modeling",
    p_2: "Agencies like ISRO (via Bhuvan) provide incredible geospatial and satellite telemetries. Combined with historical rainfall and soil health datasets from agricultural ministries, students can engineer sophisticated Convolutional Neural Networks (CNNs) to predict crop yields, assess drought risks, or analyze urban sprawl through satellite imagery.",
    faq1_q: "Are government datasets pre-cleaned for machine learning?",
    faq1_a: "Absolutely not. Government data is notoriously messy, featuring missing values, inconsistent formatting, and outliers. The data cleaning process is exactly what makes these projects valuable."
  },
  {
    title: "How Governments Collect and Store Public Data",
    slug: "how-governments-collect-and-store-public-data",
    desc: "Take a deep dive into the physical infrastructure, legal frameworks, and massive digital archives powering modern civic data collection.",
    keywords: "civic data collection, government database architecture, public data storage, census methodology, digital infrastructure",
    intro: "Before analyzing government data, it is critical to understand its origin. The journey from a surveyor's clipboard or a traffic camera lens to a downloadable CSV file is a complex logistical and technological marvel.",
    h2_1: "The Mechanics of Mass Collection",
    p_1: "Governments employ multiple collection vectors. Active collection includes massive logistical undertakings like physical census enumerators or mandatory corporate tax filings. Passive collection increasingly dominates modern datasets through automated sensor networks—such as smart utility meters, automated toll booths, and environmental monitoring stations continuously streaming telemetry data.",
    h2_2: "Storage Architectures and Legacy Systems",
    p_2: "Once collected, this data flows into vast national data centers. Many governments run on a fractured ecosystem where modern, high-speed PostgreSQL or Hadoop clusters interact with decades-old legacy mainframe systems (like COBOL databases used in tax processing). Understanding these backend bottlenecks explains why some data is updated instantly via APIs, while other data takes years to process.",
    faq1_q: "How does the government store petabytes of physical archives?",
    faq1_a: "Governments maintain massive, climate-controlled physical archive facilities, but they are currently undergoing decades-long, multi-billion dollar 'digitization' initiatives to convert physical records into queryable databases."
  },
  {
    title: "Best Government Data Sources for Research Students",
    slug: "best-government-data-sources-for-research-students",
    desc: "A curated master list of the most authoritative, reliable, and accessible government databases segmented by academic discipline.",
    keywords: "student research data sources, best government databases, academic public data, where to find research data, government APIs",
    intro: "Knowing where to look is half the battle in academic research. Different disciplines require radically different data structures, and relying on a single general portal will severely limit the scope of your thesis or project.",
    h2_1: "Sources for Social Sciences and Humanities",
    p_1: "For sociology, economics, and political science, the World Bank Open Data platform and national census bureaus (like the US Census Bureau or India's MoSPI) are indispensable. These sources offer deep longitudinal data spanning decades, allowing researchers to track macro-trends in poverty, education access, and systemic inequality with high statistical confidence.",
    h2_2: "Sources for STEM and Environmental Research",
    p_2: "STEM researchers require high-fidelity telemetry and experimental data. Platforms like Data.gov (US) or purely scientific portals like the Earth Observing System Data and Information System (EOSDIS) provide raw environmental, atmospheric, and oceanographic data. This is the exact same raw data utilized by NASA and NOAA scientists, freely available for university research.",
    faq1_q: "What is the best way to cite a government dataset in a thesis?",
    faq1_a: "You should cite the specific agency, the dataset title, the year of publication, the URL, and the exact date you accessed the data, as databases frequently update dynamically."
  },
  {
    title: "How to Find Real Economic Data Without Paid Tools",
    slug: "how-to-find-real-economic-data-without-paid-tools",
    desc: "Bypass ultra-expensive financial terminals like Bloomberg. Learn to extract institutional-grade economic data entirely for free from public portals.",
    keywords: "free economic data, Bloomberg terminal alternatives, macroeconomics data sources, central bank data, public financial statistics",
    intro: "Financial institutions spend millions of dollars annually for access to proprietary data terminals like Bloomberg or Refinitiv. However, savvy finance and economics students can aggregate the exact same macro-level institutional data entirely for free.",
    h2_1: "Mining the Central Banks",
    p_1: "Commercial platforms don't invent economic data—they aggregate it from central authorities. By going directly to the source, students can bypass the paywall. Portals like FRED (Federal Reserve Economic Data) or the RBI's Database on Indian Economy (DBIE) provide robust API ecosystems offering millions of free time-series datasets covering inflation rates, forex reserves, and corporate liquidity.",
    h2_2: "International Trade and Customs Tariffs",
    p_2: "For international economics, granular data on export/import volumes, tariffs, and shipping metrics is crucial. The UN Comtrade Database and national customs and excise department portals offer highly detailed commodity flow data. By writing Python scripts to query these public databases, students can replicate complex supply-chain modeling without requiring a commercial license.",
    faq1_q: "Is free government financial data delayed?",
    faq1_a: "Macroeconomic data (like GDP or inflation) is released simultaneously to everyone. However, tick-by-tick stock market data requires commercial licenses and is not provided for free by standard government data portals."
  },
  {
    title: "Public Data That Can Help You Build Real Projects",
    slug: "public-data-that-can-help-you-build-real-projects",
    desc: "Stop building tutorials. See exactly how specific public datasets can be synthesized into powerful, portfolio-defining software applications.",
    keywords: "public data software projects, civic tech projects, open data hackathon ideas, building apps with government APIs",
    intro: "Employers are looking for developers who can solve real-world problems, not just those who can follow a generalized coding tutorial. Leveraging public data effectively transforms a simple web app into a high-impact 'Civic Tech' portfolio piece.",
    h2_1: "Building Transport and Infrastructure Apps",
    p_1: "Many regional transit authorities publish GTFS (General Transit Feed Specification) data. By integrating this open data, a student can build a highly accurate, localized public transit tracking application that rivals commercial apps. When combined with municipal pothole or accident APIs, it becomes a powerful urban navigation and safety tool.",
    h2_2: "Aggregating Public Health and Safety Maps",
    p_2: "Another powerful project involves synthesizing disparate safety data. By mapping open data on neighborhood crime statistics, street lighting infrastructure, and hospital locations, a student can create a predictive 'Safe Route' mapping application for night commuters. This demonstrates mastery over API integration, geospatial mapping, and civic problem-solving to potential tech recruiters.",
    faq1_q: "Do I need permission to make an app using public data?",
    faq1_a: "No, Open Government Data is provided specifically to encourage developers and researchers to build public-interest applications. Just ensure you attribute the source data appropriately."
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
    result = result.split('[CATEGORY]').join("government-data");
    result = result.split('[Category Name]').join("Government Data");
    result = result.split('[CSS-CLASS]').join("gov");
    result = result.split('[SLUG]').join(art.slug);
    result = result.split('[YYYY-MM-DD]').join(dateStr);
    result = result.split('[Month DD, YYYY]').join(monthStr);
    result = result.split('[X] min read').join("7 min read");
    result = result.split('[primary keyword tag]').join("Government Data");
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

    result = result.replace(/\[Wrap up in 2-3 sentences.*?\]/g, "Utilizing raw public data sets you apart as a capable researcher and developer. Remember to always question the methodology of data collection and apply rigorous structural cleaning before deploying it in your projects.");

    result = result.replace(/\[FAQ Question 1.*?\]/g, art.faq1_q);
    result = result.replace(/\[Answer to FAQ 1.*?\]/g, art.faq1_a);
    result = result.replace(/<div class="faq-item">\s*<button class="faq-question".*?\[FAQ Question 2\].*?<\/div>\s*<\/div>/s, "");
    result = result.replace(/<div class="faq-item">\s*<button class="faq-question".*?\[FAQ Question 3\].*?<\/div>\s*<\/div>/s, "");

    /* IMPORTANT FIX: Inject dynamic sidebar related content instead of [Related Article 1] */
    // We will pick 3 random/sequential articles to link that are NOT this one.
    let related1 = articles[(index + 1) % 10];
    let related2 = articles[(index + 2) % 10];
    let related3 = articles[(index + 3) % 10];

    const dynamicSidebarHTML = `              <li><a href="../../blog/government-data/${related1.slug}.html">${related1.title}</a></li>
              <li><a href="../../blog/government-data/${related2.slug}.html">${related2.title}</a></li>
              <li><a href="../../blog/government-data/${related3.slug}.html">${related3.title}</a></li>`;
              
    result = result.replace(/<li><a href="#">\[Related Article 1\]<\/a><\/li>\s*<li><a href="#">\[Related Article 2\]<\/a><\/li>\s*<li><a href="#">\[Related Article 3\]<\/a><\/li>/, dynamicSidebarHTML);

    fs.writeFileSync(articlePath, result, 'utf-8');
    console.log("Created: " + articlePath);

    if (!categoryHTML.includes(art.slug)) {
        let printNumber = existingIndexOffset + index;
        newCards += `
            <article class="article-card">
              <div class="article-card-number">${printNumber.toString().padStart(2, '0')}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag cat-gov">Government Data</span>
                  <time datetime="${dateStr}">${monthStr}</time>
                  <span>7 min read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="../blog/government-data/${art.slug}.html">${art.title}</a></h2>
                <p class="excerpt">${art.desc}</p>
                <a href="../blog/government-data/${art.slug}.html" class="read-more">Read article →</a>
              </div>
            </article>\n`;
    }

    let sitemapEntry = `  <url>\n    <loc>https://studenttechprojects.in/blog/government-data/${art.slug}.html</loc>\n    <lastmod>${dateStr}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`;
    if (!sitemapXML.includes(art.slug)) {
      sitemapXML = sitemapXML.split('</urlset>').join(sitemapEntry);
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
  
  fs.writeFileSync(SITEMAP_PATH, sitemapXML, 'utf-8');
  console.log('Updated sitemap');
}

generate();
