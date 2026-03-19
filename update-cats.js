const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const categoriesDir = path.join(baseDir, 'categories');
const indexFile = path.join(baseDir, 'index.html');

// Copy-pasting the data array from gen.js to use for formatting
const data = [
  // Search Problems
  ["why-google-search-results-change-daily", "blog/internet-search-problems", "cat-search", "Search Problems", "Why Google Search Results Change Daily", "Google updates its index continuously. Algorithm refreshes, PageRank recalculations, and freshness signals all cause daily result shifts.", "Why Do Google Results Change Daily", "Google runs thousands of algorithm micro-updates per year. Freshness signals, backlink changes, and user behavior data cause results to shift constantly.", "Named vs Minor Algorithm Updates", "Major updates like Core Updates happen a few times yearly. But minor changes occur daily, invisibly adjusting how pages are ranked.", "Use Search Console to Track Changes", "Google Search Console's Performance report shows ranking changes over time. Third-party tools track keyword position history.", "Why do Google search results change every day?", "Google continuously recalculates rankings using freshness signals, backlink data, and user engagement metrics.", "Does Google update its algorithm daily?", "Yes. Google makes thousands of minor adjustments yearly. Major named updates happen a few times per year.", "How can I track ranking changes?", "Use Google Search Console for free tracking or tools like SEMrush."],
  ["why-google-shows-outdated-results", "blog/internet-search-problems", "cat-search", "Search Problems", "Why Google Shows Outdated Results", "Google may show old versions of your pages due to slow crawl schedules, low site authority, or cached content. Learn how to fix it.", "How Google Crawl Schedules Work", "Google does not crawl every page daily. Low-authority sites may be crawled only every few weeks.", "Why Pages Stay in Cache", "Googlebot stores a cached version of each page. Infrequently updated or low-traffic pages retain old cached versions.", "Force Google to Re-index Your Page", "Use Google Search Console URL Inspection tool and click Request Indexing.", "Why does Google still show old content?", "Google may not have re-crawled your page yet. Request indexing via Search Console.", "How long does Google take to update results?", "A few hours to several weeks depending on site authority and crawl frequency.", "What is crawl budget?", "It's the number of pages Googlebot crawls per site within a time period."],
  ["why-google-ignores-search-keywords", "blog/internet-search-problems", "cat-search", "Search Problems", "Why Google Ignores Your Keywords", "Google uses semantic search powered by AI to interpret query intent rather than matching keywords literally.", "Google Uses Semantic Search", "Google BERT and MUM models understand what you mean, not just what you typed.", "Signs Google Changed Your Keywords", "When Google shows 'Showing results for' a different term, it has reinterpreted your query.", "Force Exact Keyword Matching", "Wrap phrases in double quotes for exact match. Use a minus sign to exclude terms.", "Why does Google change my keywords?", "Google interprets query intent using its BERT language model rather than exact text.", "How do I search for an exact phrase?", "Wrap your phrase in double quotation marks.", "Why does Google say Showing results for?", "Google detected that your original search had few quality results and modified it."],
  ["why-google-search-results-fluctuate", "blog/internet-search-problems", "cat-search", "Search Problems", "Why Google Search Results Fluctuate", "Ranking fluctuations are caused by algorithm updates, competitor activity, backlink changes, and user signal shifts.", "Core Causes of Fluctuations", "Algorithm updates, competitor improvements, and Core Web Vitals changes all affect where your page ranks.", "Competitor Activity", "When competitors publish better content, their rankings improve and push others down.", "How to Reduce Volatility", "Build E-E-A-T: write authoritative long-form content, earn high-quality backlinks, and improve page speed.", "Are ranking fluctuations normal?", "Yes. Minor daily fluctuations of 1-5 positions are completely normal.", "How long do fluctuations last?", "Minor fluctuations resolve in days. Core Update effects may take 2-4 weeks.", "What tools monitor ranking fluctuations?", "Google Search Console, SEMrush Sensor, Mozcast, and Ahrefs."],
  ["how-google-indexing-works", "blog/internet-search-problems", "cat-search", "Search Problems", "How Google Indexing Works", "Google indexing involves crawling, rendering, and indexing. Learn how Googlebot discovers web pages.", "Stage 1 - Crawling", "Googlebot discovers URLs through sitemaps and backlinks, then fetches page content.", "Stage 2 - Rendering", "Google renders each page like a browser, extracting text, links, and structured data.", "Stage 3 - Indexing and Ranking", "Processed content enters Google's index to be retrieved by search algorithms.", "How long does indexing take?", "New pages on established sites index within hours to days.", "What blocks Google from indexing?", "Robots.txt rules, noindex tags, password protection, and duplicate content.", "How can I check if my page is indexed?", "Search site:yourdomain.com/your-page on Google."],
  ["how-search-engines-crawl-websites", "blog/internet-search-problems", "cat-search", "Search Problems", "How Search Engines Crawl Websites", "Web crawlers systematically browse the internet to index content. Understand how crawling works.", "What Web Crawlers Actually Do", "Search engine crawlers are automated programs that follow hyperlinks across the web to download data.", "Crawl Priority and Scheduling", "Popular pages are crawled multiple times per day. Crawl frequency depends on page importance.", "How to Optimize for Crawling", "Submit a sitemap.xml to Search Console and fix crawl errors.", "What is a web crawler?", "A program that browses the internet systematically to index content.", "How often does Googlebot crawl?", "Important sites may be crawled multiple times daily.", "Can I stop Googlebot from crawling?", "Yes, using robots.txt or noindex meta tags."],
  ["how-google-ranking-works", "blog/internet-search-problems", "cat-search", "Search Problems", "How Google Ranking Works", "Google uses over 200 ranking factors. Understand PageRank, E-E-A-T, and Core Web Vitals.", "PageRank and Link Authority", "PageRank measures a page's importance based on quality links pointing to it.", "E-E-A-T Framework", "Experience, Expertise, Authoritativeness, and Trustworthiness matter heavily.", "Core Web Vitals", "Google measures loading speed, interactivity, and visual stability.", "What are the top ranking factors?", "Content quality, backlinks, technical performance, and E-E-A-T.", "How many ranking factors exist?", "Google uses over 200 known ranking factors.", "Does social media affect rankings?", "Indirectly, by increasing traffic and potential backlinks."],
  ["how-ai-search-engines-work", "blog/internet-search-problems", "cat-search", "Search Problems", "How AI Search Engines Work", "AI search engines use large language models to synthesize answers rather than just returning links.", "Traditional vs AI Search", "Traditional search lists links. AI search synthesizes answers using LLMs.", "Retrieval Augmented Generation", "Modern AI search uses RAG to fetch pages and generate an answer from them.", "Challenges and Accuracy", "AI search engines can hallucinate facts. Always verify with sources.", "What is Perplexity AI?", "An AI-powered search engine that retrieves web pages and generates answers.", "Is AI replacing regular search?", "Not entirely. Google presents AI Overviews alongside regular results.", "Are AI answers always accurate?", "No, AI can hallucinate. Check citations."],
  ["future-of-ai-search-engines", "blog/internet-search-problems", "cat-search", "Search Problems", "The Future of AI Search Engines", "Explore where search engine technology is heading with multimodal AI and conversational search.", "Conversational Search", "The next generation will be conversational, allowing multi-step reasoning.", "Multimodal Search", "Future search will integrate text, image, video, audio, and code queries seamlessly.", "Personalized Search", "Search will use personal context securely via on-device AI.", "Will Google be replaced by AI?", "Google is transforming its own search rather than being replaced.", "What is agentic search?", "AI agents autonomously browsing and completing tasks.", "When will AI beat human research?", "AI is faster, but humans retain depth and domain expertise."],

  // Deep Web
  ["deep-web-research-databases-list", "blog/deep-web", "cat-deep", "Deep Web", "Deep Web Research Databases", "A list of legitimate deep web research databases accessible to students.", "What Are Deep Web Databases?", "Content not indexed by Google, like academic databases requiring logins.", "Top Deep Web Databases", "JSTOR, IEEE Xplore, PubMed, Scopus, and SpringerLib.", "Access for Indian Students", "Many universities provide access via INFLIBNET's e-Shodh Sindhu.", "What is the deep web?", "Any content not indexed by search engines, legally accessed via logins.", "Is it the dark web?", "No. The dark web is hidden part of the internet requiring special software.", "Which databases are free?", "DOAJ, PubMed Central, and arXiv are free."],
  ["deep-web-search-engines-explained", "blog/deep-web", "cat-deep", "Deep Web", "Deep Web Search Engines", "Learn how deep web search engines work and which ones find academic content.", "Why Google Can't Index Everything", "Google can't access password-protected or dynamically generated databases.", "Best Deep Web Search Engines", "BASE, Semantic Scholar, Microsoft Academic, and RefSeek.", "How to Use Them Effectively", "Combine search engines for better coverage and use Boolean operators.", "What search engines search the deep web?", "Specialized engines like BASE and Semantic Scholar.", "Is it legal to use them?", "Absolutely. They search publicly accessible academic repositories.", "Which engine has the most content?", "BASE indexes over 240 million documents."],
  ["hidden-academic-databases", "blog/deep-web", "cat-deep", "Deep Web", "Hidden Academic Databases", "Discover hidden academic databases most students don't know about.", "What Are Hidden Databases?", "Specialized collections, institutional repositories, and government archives.", "Databases by Subject", "dblp for CS, zbMATH for Math, SSRN for Social Sciences.", "Indian Institutional Repositories", "Shodhganga, IISc eprints, and CSIR archives.", "What are institutional repositories?", "Digital archives maintained by universities to host their own research.", "How to find them?", "Check university libraries or the Registry of Open Access Repositories.", "Are preprints included?", "Yes, preprint servers are a major component of this public deep web."],
  ["how-to-access-deep-web-legally", "blog/deep-web", "cat-deep", "Deep Web", "How to Access the Deep Web Legally", "A beginner's guide to legally accessing deep web academic content.", "Method 1: University Access", "Log in to your library portal for institutional access.", "Method 2: Open Access Tools", "Use Unpaywall or Open Access Button extensions.", "Method 3: Direct Requests", "Email authors directly or use Interlibrary Loan.", "Is it legal in India?", "Yes. Accessing academic deep web via institutional access is fully legal.", "Do I need special software?", "No. Standard browsers work perfectly.", "What is e-Shodh Sindhu?", "India's program providing university students access to thousands of journals."],
  ["examples-of-deep-web-data", "blog/deep-web", "cat-deep", "Deep Web", "Examples of Deep Web Data", "Real examples of deep web data that researchers use legitimately.", "Government Deep Web Data", "NSSO data, US Census microdata, and RBI database portions.", "Academic Deep Web Data", "JSTOR archives, ProQuest dissertations, and IEEE proceedings.", "Scientific Data Examples", "NASA raw datasets, CERN open data, and GenBank sequences.", "What types of data exist here?", "Academic papers, stats, medical records, and legal archives.", "Can students use government data?", "Yes, sites like data.gov.in host free deep web datasets.", "How does it differ from surface web?", "Deep web data requires logins, queries, or API access."],

  // AI 
  ["ai-agent-architecture-explained", "blog/ai-technology", "cat-ai", "AI Technology", "AI Agent Architecture", "How autonomous AI agents are built using LLMs, memory, and tools.", "The Brain: LLMs", "The LLM acts as the reasoning engine to decide what actions to take.", "Memory Systems", "Agents use short-term context and long-term vector databases to remember.", "Tool Use", "Agents can browse the web, execute code, and query APIs.", "What is an AI agent?", "An AI that can perceive, reason, and act autonomously.", "What makes it different from a chatbot?", "Agents can take actions via tools, chatbots mostly generate text.", "Are AI agents used today?", "Yes, in coding assistants, customer support, and research."],
  ["how-neural-networks-learn-patterns", "blog/ai-technology", "cat-ai", "AI Technology", "How Neural Networks Learn", "Neural networks learn by adjusting weights via backpropagation.", "What Is a Neural Network?", "A system of connected nodes inspired by the human brain.", "How Backpropagation Works", "It calculates error and adjusts connection weights backwards to improve.", "Gradient Descent", "The algorithm that guides the network to reduce its error rate.", "How do neural networks learn?", "By adjusting internal weights using backpropagation and gradient descent.", "What is backpropagation?", "The algorithm that distributes prediction error backward.", "How many layers do they have?", "From a few layers to hundreds in deep learning models."],
  ["what-is-vector-database-in-ai", "blog/ai-technology", "cat-ai", "AI Technology", "What Is a Vector Database?", "Vector databases store numerical embeddings for semantic search.", "Traditional vs Vector Databases", "Traditional search is exact-match; vector search is semantic meaning.", "How Embeddings Work", "Models convert text into vectors capturing meaning.", "Popular Vector Databases", "Pinecone, Weaviate, Qdrant, Chroma, and Milvus.", "What is it used for?", "Semantic search, RAG pipelines, and recommendations.", "Vector vs Keyword search?", "Vector finds meaning; Keyword finds exact text.", "Best vector database for students?", "ChromaDB and FAISS are great free local options."],
  ["how-ai-models-generate-text", "blog/ai-technology", "cat-ai", "AI Technology", "How AI Generates Text", "LLMs predict the next token. Learn how transformers generate text.", "Transformer Architecture", "They use self-attention to weigh word importance in context.", "Token Prediction", "LLMs predict one token at a time based on all previous tokens.", "Training Shapes Output", "Models learn language patterns from vast text datasets.", "How does ChatGPT generate text?", "By predicting the next likely word based on its massive training.", "What is temperature?", "A setting controlling randomness in AI text generation.", "Why does AI hallucinate?", "It predicts statistically plausible text, not guaranteed facts."],
  ["reinforcement-learning-explained", "blog/ai-technology", "cat-ai", "AI Technology", "Reinforcement Learning Explained", "How AI learns through trial, error, rewards, and penalties.", "What Is Reinforcement Learning?", "Agents learn optimal actions by interacting with an environment.", "Agent, Environment, Reward", "The agent acts, the environment updates, and a reward is given.", "Real Applications", "AlphaGo, robotics, and RLHF for language models.", "RL vs Supervised Learning?", "RL learns via trial and error; Supervised learns via labeled examples.", "What is RLHF?", "Reinforcement Learning from Human Feedback, used to align LLMs.", "Is RL used in robotics?", "Yes, for locomotion and manipulation control."],
  ["autonomous-ai-systems-explained", "blog/ai-technology", "cat-ai", "AI Technology", "Autonomous AI Systems", "Systems that perceive, reason, and act without human direction.", "Core Capabilities", "Perception, reasoning, and autonomous action execution.", "Types of Autonomous AI", "Self-driving cars, trading bots, and autonomous web agents.", "Current Limitations", "They struggle with unexpected out-of-distribution situations.", "What is an autonomous agent?", "A system that achieves goals without step-by-step instruction.", "Are self-driving cars autonomous AI?", "Yes, they use real-time perception and decision AI.", "Automation vs Autonomous AI?", "Automation follows fixed rules; Autonomous AI adapts to dynamics."],
  ["ai-decision-making-models", "blog/ai-technology", "cat-ai", "AI Technology", "AI Decision Making Models", "How AI chooses actions using rules, probabilities, or deep learning.", "Rule-Based Systems", "Classic AI using IF-THEN expert systems.", "Probabilistic Models", "Bayesian networks that update beliefs based on evidence.", "Deep Learning Decisions", "Neural networks making complex pattern-based decisions.", "How do AI systems decide?", "Using rules, statistical patterns, or reward optimizations.", "Most common decision approach?", "Neural networks trained with supervised learning.", "Can AI make ethical decisions?", "Only by mimicking the ethics present in their training data."],
  ["ai-inference-engine-explained", "blog/ai-technology", "cat-ai", "AI Technology", "AI Inference Engine Explained", "How trained AI models run on new data to make predictions.", "What Is an Inference Engine?", "The runtime that executes a trained model against new input.", "Training vs Inference", "Training builds the model; Inference uses the model.", "Optimizing Inference", "Quantization and dedicated hardware speed up inference.", "Difference between training and inference?", "Training happens once; inference happens millions of times.", "What hardware is used?", "GPUs and dedicated NPUs (Neural Processing Units).", "What is quantization?", "Reducing numerical precision to make AI run faster."],
  ["ai-vector-search-explained", "blog/ai-technology", "cat-ai", "AI Technology", "AI Vector Search Explained", "How vector search powers semantic recommendations and RAG.", "What Is Vector Search?", "Converting data to arrays of numbers to find semantic nearest neighbors.", "Embeddings Enable Search", "AI models map text and images to high-dimensional space.", "Real-World Applications", "Spotify recommendations, Google image search, and RAG systems.", "Vector vs Keyword search?", "Vector understands synonyms and context; keyword only matches strings.", "What are vector embeddings?", "Numerical representations of underlying meaning in data.", "Who uses it?", "Virtually every major tech company for their search engines."],
  ["ai-knowledge-graph-explained", "blog/ai-technology", "cat-ai", "AI Technology", "AI Knowledge Graphs Explained", "How Google and others structure facts as networks of entities.", "What Is a Knowledge Graph?", "Data stored as nodes (entities) and edges (relationships).", "Google's Knowledge Graph", "Powers direct answers and the knowledge panel in search results.", "AI Reasoning over Graphs", "Graph Neural Networks parse relationships to answer complex queries.", "What is Google's Knowledge Graph?", "A massive database of billions of facts and entities.", "Graph vs Database space?", "Graphs handle flexible relationships far better than tables.", "How do AI systems use them?", "To ground LLM answers in actual, verifiable facts."],

  // Research Databases
  ["free-scientific-paper-databases", "blog/research-databases", "cat-research", "Research Databases", "Free Scientific Databases", "Access millions of peer-reviewed papers for free.", "Open Access Databases", "PubMed Central covers biomedical; arXiv covers physics.", "Multidisciplinary Databases", "DOAJ, Semantic Scholar, and BASE.", "Indian Free Resources", "Shodhganga for Indian PhD theses and CSIR e-journals.", "Best free database?", "PubMed for health, arXiv for physics/CS, Semantic Scholar for general.", "Are these legal?", "Yes, completely legal and officially maintained.", "How big is arXiv?", "It hosts over 2 million open-access preprints."],
  ["open-access-research-journals", "blog/research-databases", "cat-research", "Research Databases", "Open Access Research Journals", "Journals covering science and humanities available for free.", "What Are Open Access Journals?", "Journals that publish peer-reviewed research available for free to anyone.", "Top Directories", "DOAJ lists 20,000+ vetted open access journals.", "How to Find Them", "Use DOAJ or Sherpa Romeo to verify journal policies.", "What is an open access journal?", "A journal providing free online access to its articles.", "Are they peer-reviewed?", "Yes, reputable OA journals use standard peer review.", "How to spot a fake journal?", "Check if it is indexed in DOAJ and not on Beall's List."],
  ["academic-preprint-servers-list", "blog/research-databases", "cat-research", "Research Databases", "Academic Preprint Servers", "Access cutting edge research before formal peer review.", "What Is a Preprint Server?", "A platform hosting drafts of research papers before journal publication.", "Servers by Discipline", "arXiv (Physics), bioRxiv (Biology), medRxiv (Medicine).", "Why Preprints Matter", "They give you access to research months before formal publication.", "Preprint vs Published?", "Preprints lack formal peer review.", "Is it safe to cite them?", "Yes, but note that it is a preprint.", "Which is the largest?", "arXiv is the largest globally."],
  ["government-research-databases", "blog/research-databases", "cat-research", "Research Databases", "Government Research Databases", "Top government-funded databases for science and technical reports.", "US Government Databases", "ERIC, PubMed, and NASA Technical Reports.", "Indian Government Resources", "CSIR, ICMR, and Shodhganga for university theses.", "Technical Reports", "Free access to detailed government science data.", "What are they?", "Repositories of publicly funded research accessible to all.", "Are they peer reviewed?", "Many index peer-reviewed work; technical reports are expert-reviewed.", "How to access Indian data?", "Via Shodhganga and ministry portals like CSIR."],
  ["free-datasets-for-machine-learning", "blog/research-databases", "cat-research", "Research Databases", "Free Datasets for Machine Learning", "Best free ML datasets for student projects.", "Image Datasets", "ImageNet, CIFAR-10, and COCO.", "NLP Datasets", "Wikipedia dumps, SQuAD, and AI4Bharat for Indian languages.", "Tabular Datasets", "UCI Machine Learning Repository and Kaggle.", "Where to find datasets?", "Kaggle, Hugging Face, and UCI ML Repo.", "How to use Hugging Face?", "Use their pip datasets library for one-line loading.", "Are Kaggle datasets free?", "Mostly yes, for non-commercial student use."],
  ["osint-research-tools-list", "blog/research-databases", "cat-research", "Research Databases", "OSINT Research Tools", "Tools used by researchers to find public information systematically.", "What Is OSINT?", "Open Source Intelligence: gathering information from public sources.", "Top OSINT Tools", "Maltego, Shodan, Google Dorks, and Wayback Machine.", "Academic Uses", "Verifying sources, investigating company backgrounds.", "What is Google Dorking?", "Using advanced search operators like site: and filetype:.", "Is OSINT legal in India?", "Yes, it only uses publicly accessible information.", "Tools journalists use?", "Wayback Machine, DocumentCloud, and reverse image search."],
  ["open-data-research-sources", "blog/research-databases", "cat-research", "Research Databases", "Open Data Research Sources", "Platforms making institutional data freely available.", "What Is Open Data?", "Data anyone can use and share without restrictions.", "Best Open Data Platforms", "World Bank Open Data, data.gov.in, Zenodo.", "Open Data for Students", "Zenodo and Figshare host datasets from real research papers.", "Open Data vs Open Access?", "Open data = datasets; Open access = research papers.", "Where to find paper data?", "Zenodo, Figshare, and Harvard Dataverse.", "Can I use it commercially?", "Often yes, check the specific Creative Commons license."],
  ["academic-data-repositories", "blog/research-databases", "cat-research", "Research Databases", "Academic Data Repositories", "Digital archives storing raw datasets from published studies.", "What Are Data Repositories?", "Archives ensuring reproducibility of published science.", "Multidisciplinary Repositories", "Zenodo, Figshare, and Dryad.", "Discipline-Specific", "GenBank for genomics, PDB for proteins.", "What is Zenodo?", "An open science repository operated by CERN.", "How to cite a dataset?", "Cite the dataset DOI, author, and repository name.", "What is ICPSR?", "A major social science data archive."],
  ["scientific-archives-online", "blog/research-databases", "cat-research", "Research Databases", "Scientific Archives Online", "Archives preserving primary research literature permanently.", "What Archives Preserve", "They maintain long-term access to papers and raw data.", "PubMed Central", "The massive US government biomedical archive.", "CERN and Physics Archives", "CERN Document Server and arXiv preserve physics history.", "PubMed vs PubMed Central?", "PubMed is a search engine; PMC is a full-text archive.", "How to access them?", "Via web portals or the Unpaywall extension.", "Are they permanent?", "Major ones like PMC and arXiv are institutionalized to last."],

  // Student Opportunities
  ["remote-internships-for-students", "blog/student-opportunities", "cat-student", "Student Opportunities", "Remote Internships for Students", "How Indian students can find and land remote global internships.", "Top Platforms", "Internshala, LinkedIn, AngelList, and Wellfound.", "How to Apply Successfully", "Tailor your resume for remote skills and show a strong GitHub/portfolio.", "High-Demand Skills", "Web development, data analysis, and content writing.", "Best tracking websites?", "Internshala, Wellfound, and LinkedIn.", "Can first-years apply?", "Yes, especially for content and social media roles.", "Is Internshala free?", "Yes, it is completely free for students."],
  ["government-fellowships-for-students", "blog/student-opportunities", "cat-student", "Student Opportunities", "Government Fellowships in India", "Well-funded government fellowships for Indian students.", "Science Fellowships", "INSPIRE Fellowship (DST) and CSIR Junior Research Fellowship.", "Social Science Fellowships", "ICSSR and ICCR fellowships.", "How to Apply", "Maintain top grades and submit strong research proposals via official portals.", "What is INSPIRE?", "A major DST fellowship for top science students in India.", "What is PM-RF?", "The Prime Minister's Research Fellowship for PhD at IITs.", "Where to find them?", "Check dst.gov.in and ugc.ac.in."],
  ["free-certification-programs-online", "blog/student-opportunities", "cat-student", "Student Opportunities", "Free Certification Programs", "Earn certificates from top institutions for free.", "Tech Giant Certificates", "Google Digital Garage, IBM SkillsBuild, and Meta Blueprint.", "NPTEL & IITs", "Free high-quality courses from IIT professors.", "Coursera and edX", "Audit courses for free from global universities.", "Most valued certificates?", "Google Analytics and AWS Cloud Practitioner.", "Is NPTEL free?", "Learning is free, the exam certificate costs ~Rs 1000.", "Are Coursera certs free?", "Yes, if you apply for Financial Aid."],
  ["research-internships-abroad", "blog/student-opportunities", "cat-student", "Student Opportunities", "Research Internships Abroad", "Global research internships open to Indian students.", "DAAD and Germany", "DAAD WISE offers fully-funded summer research in Germany.", "US Programs", "NSF REU and Amgen Scholars programs.", "Asian Programs", "OIST Japan and NTU Singapore summer programs.", "Are they open to Indians?", "Yes, DAAD WISE and Mitacs specifically target India.", "How competitive are they?", "Highly. They require top GPAs and strong proposals.", "When to apply?", "Usually between November and January."],
  ["technology-fellowships-list", "blog/student-opportunities", "cat-student", "Student Opportunities", "Technology Fellowships List", "Fellowships offering funding and mentorship for student tech projects.", "Global Tech Fellowships", "Google Summer of Code, Outreachy, and MLH Fellowship.", "Indian Government Programs", "Smart India Hackathon and Atal Innovation Mission.", "Private Sector Fellowships", "Tata Trusts Fellowships and Google Developer Clubs.", "What is GSoC?", "Google Summer of Code pays students to code open source.", "How to apply for Outreachy?", "Submit an initial application and then make open source contributions.", "What is Atal Innovation?", "A NITI Aayog mission supporting student innovation labs."],

  // Government Data
  ["open-government-data-portals", "blog/government-data", "cat-gov", "Government Data", "Open Government Data Portals", "Official portals hosting open public data.", "data.gov.in Portal", "India's official portal with 3,00,000+ government datasets.", "Global Portals", "data.gov (US), data.europa.eu, and World Bank Data.", "How to Use Government Data", "Download CSVs and use Python or R for deep analysis.", "What is on data.gov.in?", "Agriculture, health, education, and transport statistics.", "Is it free to use?", "Yes, most open data is free even for commercial use.", "How reliable is it?", "It is official data, though collection methods vary."],
  ["satellite-data-public-sources", "blog/government-data", "cat-gov", "Government Data", "Free Satellite Data Sources", "Access free satellite imagery from globally funded space programs.", "NASA Earthdata", "Petabytes of free terrain and climate satellite data.", "ESA Copernicus", "Free Sentinel data covering land, ocean, and atmosphere.", "ISRO Bhuvan", "Free Indian satellite imagery and mapping data.", "Where to download?", "Earthdata, Sentinel Hub, and Earth Explorer.", "What is Google Earth Engine?", "A cloud platform for planetary-scale geospatial analysis.", "Can students use it?", "Yes, widely used in agriculture and urban study projects."],
  ["climate-data-research-databases", "blog/government-data", "cat-gov", "Government Data", "Climate Data Research Databases", "Historical and real-time climate data sources.", "NOAA Climate Data", "Global historical weather data strictly from official stations.", "NASA Climate Resources", "GISTEMP and MERRA-2 atmospheric data.", "IMD Data", "India Meteorological Department historical gridded data.", "Where to get historical data?", "NOAA, NASA GISS, and Berkeley Earth.", "Is it free for students?", "Yes, all major government climate data portals are free.", "What is ERA5?", "A massive global climate reanalysis dataset from ECMWF."],
  ["census-data-sources-online", "blog/government-data", "cat-gov", "Government Data", "Census Data Sources Online", "How to access population and demographic microdata.", "India Census Data", "District and village level data from censusindia.gov.in.", "International Microdata", "IPUMS provides harmonized census data globally.", "Working with Census Data", "Use R or pandas to analyze large demographic files.", "Where to download Indian data?", "censusindia.gov.in and data.gov.in.", "What is NSSO data?", "Massive Indian household surveys on employment and consumption.", "How often is the census?", "Every 10 years in India (last published in 2011)."],
  ["public-statistics-databases", "blog/government-data", "cat-gov", "Government Data", "Public Statistics Databases", "Databases hosting key national economic and social data.", "National Statistics", "MOSPI (India), ONS (UK), and ABS (Australia).", "International Statistics", "World Bank Open Data, IMF, and OECD Stats.", "Sectoral Statistics", "WHO for health, FAO for agriculture, IEA for energy.", "Best international database?", "World Bank Open Data is exceptionally comprehensive.", "Is RBI DBIE free?", "Yes, it provides free Indian economic statistics.", "Where to find poverty data?", "World Bank PovcalNet and Indian PLFS datasets."],

  // Internet Mysteries
  ["why-websites-disappear-from-internet", "blog/internet-mysteries", "cat-mystery", "Internet Mysteries", "Why Websites Disappear", "The real reasons websites vanish and how to preserve them.", "Why Websites Go Offline", "Unpaid hosting, expired domains, and server crashes.", "The Link Rot Problem", "Studies show 25 percent of web links break within 2 years.", "Preserving the Web", "Use the Wayback Machine to save important public pages.", "Why do they disappear?", "Mostly financial constraints or company closures.", "Can you recover them?", "Often yes, via archive.org's Wayback Machine.", "What percentage of old links work?", "Very few; older content suffers from severe link rot."],
  ["why-old-websites-vanish", "blog/internet-mysteries", "cat-mystery", "Internet Mysteries", "Why Old Websites Vanish", "Why classic internet era sites eventually die.", "Website Lifecycle", "Most sites live 3-7 years before maintenance stops.", "Platform Closures", "GeoCities, Vine, and Google+ closures erased millions of pages.", "Digital Preservation Issues", "Digital assets require continuous active maintenance.", "Why did GeoCities shut down?", "Yahoo shut it down in 2009 to cut costs.", "Can I see old websites?", "Yes, the Internet Archive saves historical snapshots.", "Why do domains expire?", "They must be paid for annually, or ownership lapses."],
  ["how-internet-archive-works", "blog/internet-mysteries", "cat-mystery", "Internet Mysteries", "How the Internet Archive Works", "How the Wayback Machine crawls and saves the internet.", "What Is the Internet Archive?", "A non-profit preserving digital history since 1996.", "How it Crawls", "Automated bots snapshot HTML, CSS, and images.", "How to use the Wayback Machine", "Enter a URL to see a timeline calendar of past versions.", "How many sites are saved?", "Over 800 billion web pages so far.", "Is it legal?", "Yes, it operates under fair use and library laws.", "How to save a page?", "Use archive.org/save to archive any URL immediately."],
  ["why-information-changes-online", "blog/internet-mysteries", "cat-mystery", "Internet Mysteries", "Why Information Changes Online", "Why digital content is rarely permanent.", "Wikipedia Revisions", "Articles change constantly based on new consensus.", "News Stealth Edits", "Publications regularly update articles without notes.", "The Memory Hole", "Entities frequently scrub controversial digital history.", "Why does Wikipedia change?", "Millions of editors constantly update and debate facts.", "How to track news edits?", "Use Diffchecker or the Wayback Machine.", "Do search results change?", "Yes, as the underlying indexed pages get updated."],
  ["how-knowledge-evolves-online", "blog/internet-mysteries", "cat-mystery", "Internet Mysteries", "How Knowledge Evolves Online", "How Wikipedia, Science, and AI reshape collective knowledge.", "Dynamic Knowledge", "Digital encyclopedias are perpetually rewritten.", "Crowdsourced Intelligence", "Wikipedia rivals printed encyclopedias through crowd verification.", "AI Reshaping Knowledge", "LLMs snapshot the internet's knowledge at training time.", "Does Wikipedia get more accurate?", "Yes, mature pages with many eyes are highly accurate.", "Does scientific knowledge change?", "Yes, through continuous peer-reviewed research updates.", "Why do sites disagree?", "Varying editorial standards; always check primary sources."]
];

// Helper to generate a card block
function generateCard(item, index, linkPrefix) {
    const [slug, folder, tagClass, tagLabel, title, desc] = item;
    // Padded index (01, 02)
    const num = (index + 1).toString().padStart(2, '0');
    const href = `${linkPrefix}${folder}/${slug}.html`;
    
    return `            <article class="article-card">
              <div class="article-card-number">${num}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag ${tagClass}">${tagLabel}</span>
                  <time datetime="2026-03-15">March 15, 2026</time>
                  <span>5 min read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="${href}">${title}</a></h2>
                <p class="excerpt">${desc}</p>
                <a href="${href}" class="read-more">Read article →</a>
              </div>
            </article>`;
}

// Group data by category
const categoryData = {};
data.forEach(item => {
    const categorySlug = item[1].split('/')[1];
    if (!categoryData[categorySlug]) categoryData[categorySlug] = [];
    categoryData[categorySlug].push(item);
});

// For each category group, read the corresponding categories/ file and overwrite the .article-list contents
Object.keys(categoryData).forEach(catSlug => {
    let fileName = catSlug;
    if (catSlug === 'deep-web') fileName = 'deep-web-resources';
    
    const catFile = path.join(categoriesDir, `${fileName}.html`);
    if (fs.existsSync(catFile)) {
        let content = fs.readFileSync(catFile, 'utf8');
        
        // Generate the block of cards
        const cardsHtml = categoryData[catSlug].map((item, index) => generateCard(item, index, '../')).join('\n\n');
        
        // Replace everything inside <div class="article-list"> ... </div>
        // Using a regex to capture everything between the open tag and the closing </div> of that section
        const regex = /(<div class="article-list">)[\s\S]*?(<\/div>\s*<\/div>\s*<aside class="sidebar">)/;
        
        if (regex.test(content)) {
            content = content.replace(regex, `$1\n\n${cardsHtml}\n\n          $2`);
            fs.writeFileSync(catFile, content, 'utf8');
            console.log(`Updated ${catSlug}.html`);
        } else {
            console.log(`Failed to match regex on ${catSlug}.html`);
        }
    }

    // Update blog/[catSlug]/index.html
    const blogIndexFile = path.join(baseDir, 'blog', catSlug, 'index.html');
    if (fs.existsSync(blogIndexFile)) {
        let content = fs.readFileSync(blogIndexFile, 'utf8');
        
        const blogCardsHtml = categoryData[catSlug].map((item, index) => {
            const [slug, folder, tagClass, tagLabel, title, desc] = item;
            const num = (index + 1).toString().padStart(2, '0');
            const href = `./${slug}.html`;
            
            return `            <article class="article-card">
              <div class="article-card-number">${num}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag ${tagClass}">${tagLabel}</span>
                  <time datetime="2026-03-15">March 15, 2026</time>
                  <span>5 min read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="${href}">${title}</a></h2>
                <p class="excerpt">${desc}</p>
                <a href="${href}" class="read-more">Read article →</a>
              </div>
            </article>`;
        }).join('\n\n');
        
        const regex = /(<div class="article-list">)[\s\S]*?(<\/div>\s*<\/div>\s*<aside class="sidebar">)/;
        if (regex.test(content)) {
            content = content.replace(regex, `$1\n\n${blogCardsHtml}\n\n          $2`);
            fs.writeFileSync(blogIndexFile, content, 'utf8');
            console.log(`Updated blog/${catSlug}/index.html`);
        } else {
            // Some blog index pages might not have the sidebar, let's use an alternate regex
            const regexAlt = /(<div class="article-list">)[\s\S]*?(<\/div><!-- \/\.article-list -->)/;
            if (regexAlt.test(content)) {
                content = content.replace(regexAlt, `$1\n\n${blogCardsHtml}\n\n          $2`);
                fs.writeFileSync(blogIndexFile, content, 'utf8');
                console.log(`Updated blog/${catSlug}/index.html (alt regex)`);
            } else {
                console.log(`Failed to match regex on blog/${catSlug}/index.html`);
            }
        }
    }
});

// Update the index.html with the latest 6 articles overall (using a mix of categories)
if (fs.existsSync(indexFile)) {
    let content = fs.readFileSync(indexFile, 'utf8');
    
    // Grab one article from 6 different categories
    const latestItems = [];
    Object.values(categoryData).forEach(group => {
        if(latestItems.length < 6 && group.length > 0) {
            latestItems.push(group[0]);
        }
    });
    
    const cardsHtml = latestItems.map((item, index) => {
        // Since it's from index, linkPrefix is './'
        const [slug, folder, tagClass, tagLabel, title, desc] = item;
        const num = (index + 1).toString().padStart(2, '0');
        const href = `./${folder}/${slug}.html`;
        
        return `          <article class="article-card">
            <div class="article-card-number">${num}</div>
            <div class="article-card-body">
              <div class="article-card-meta">
                <span class="tag ${tagClass}">${tagLabel}</span>
                <time datetime="2026-03-15">March 15, 2026</time>
                <span>5 min read</span>
              </div>
              <h3 style="font-size:1.25rem;"><a href="${href}">${title}</a></h3>
              <p class="excerpt">${desc}</p>
              <a href="${href}" class="read-more">Read article →</a>
            </div>
          </article>`;
    }).join('\n\n');

    const startMarker = '<div class="article-list">';
    const endMarker = '</div><!-- /.article-list -->';
    
    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker);
    
    if (startIndex !== -1 && endIndex !== -1) {
        const before = content.substring(0, startIndex + startMarker.length);
        const after = content.substring(endIndex);
        
        content = before + '\n\n' + cardsHtml + '\n\n        ' + after;
        fs.writeFileSync(indexFile, content, 'utf8');
        console.log(`Updated index.html`);
    }
}
