const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(ROOT_DIR, 'blog', 'ai-technology');
const TEMPLATE_PATH = path.join(ROOT_DIR, 'blog', 'article-template.html');
const CATEGORY_HTML_PATH = path.join(ROOT_DIR, 'categories', 'ai-technology.html');
const SITEMAP_PATH = path.join(ROOT_DIR, 'sitemap.xml');

const articles = [
  {
    title: "How AI Agents Will Replace Apps in the Next 5 Years",
    slug: "how-ai-agents-will-replace-apps",
    desc: "Discover how AI agents are evolving to replace traditional apps by automating tasks, reasoning through problems, and interacting directly with services.",
    keywords: "AI agents, future of apps, artificial intelligence, replace apps with AI, autonomous agents",
    intro: "The era of downloading a separate app for every task is coming to an end. Over the next five years, autonomous AI agents are set to fundamentally change how we interact with technology, moving us from a paradigm of manual clicking to natural language delegation.",
    h2_1: "The Shift from Direct Manipulation to Delegation",
    p_1: "In the current app ecosystem, you act as the orchestrator. If you want to book a flight and find a hotel, you open a travel app, a hotel app, and maybe a calendar app. You do the heavy lifting of moving data and making decisions based on app interfaces. AI agents, however, are designed to take a high-level goal—like 'Book a weekend trip to Goa under ₹15,000'—and execute the sub-tasks across various services completely autonomously.",
    h2_2: "Why Agents Are Superior to Traditional Apps",
    p_2: "Apps require you to learn their specific user interfaces, which can be unintuitive and cluttered. An AI agent uses natural language as the universal interface. Powered by Large Language Models (LLMs) and connected to tools via APIs, these agents can reason through complex workflows, remember your preferences, and correct themselves if they hit a snag, offering a deeply personalized, frictionless experience.",
    faq1_q: "What is an AI agent?",
    faq1_a: "An AI agent is a system that can perceive its environment, make decisions, and take actions to achieve a specific goal without continuous human intervention."
  },
  {
    title: "Why AI Models Like ChatGPT Sometimes Give Wrong Answers",
    slug: "why-chatgpt-gives-wrong-answers",
    desc: "Understand the concept of AI hallucinations, why models like ChatGPT generate incorrect information, and how they predict text instead of looking up facts.",
    keywords: "ChatGPT wrong answers, AI hallucination, LLM mistakes, why AI is wrong, generative AI errors",
    intro: "We've all been there: you ask ChatGPT a factual question, and it gives you an incredibly confident but completely inaccurate answer. This phenomenon, known as an 'AI hallucination,' exposes the fundamental difference between how AI models generate text and how humans recall facts.",
    h2_1: "AI Predicts Words, It Doesn't Look Up Facts",
    p_1: "Unlike a search engine or a database, Large Language Models (LLMs) like ChatGPT don't store information as discrete, searchable facts. Instead, they store statistical relationships between words and concepts. When you ask a question, the model isn't retrieving an answer; it is mathematically predicting the most likely sequence of words that should follow your prompt based on its vast training data.",
    h2_2: "The Confidence of a Pattern Matcher",
    p_2: "Because AI models are optimized to sound fluent and convincing, they will confidently string together grammatically perfect sentences even when the underlying factual relationships are weak or non-existent. Without a built-in mechanism to verify its own output against a ground truth (unless paired with external search tools), the AI doesn't 'know' when it's improvising, leading to very persuasive wrong answers.",
    faq1_q: "What is an AI hallucination?",
    faq1_a: "An AI hallucination occurs when an AI model generates false, misleading, or nonsensical information but presents it as a confident fact."
  },
  {
    title: "Inside LLMs: How AI Actually Understands Language",
    slug: "inside-llms-how-ai-understands-language",
    desc: "Dive deep into the mechanics of Large Language Models (LLMs). Learn about tokens, embeddings, and the attention mechanism that power modern AI.",
    keywords: "how LLMs work, inside LLMs, AI language understanding, tokens embeddings attention, natural language processing",
    intro: "Large Language Models (LLMs) appear to possess a magical grasp of human language, holding nuanced conversations and writing complex code. However, beneath the surface, there is no conscious thought—only brilliant mathematics, turning language into numbers that the machine can process.",
    h2_1: "Tokens and Embeddings: The Alphabet of AI",
    p_1: "Before an LLM can process text, the words must be broken down into 'tokens' (chunks of words or syllables). These tokens are then mapped to high-dimensional numerical vectors called 'embeddings.' In this mathematical space, words with similar meanings (like 'king' and 'queen') are plotted close together. This allows the AI to understand semantic relationships and context purely through geometry and math.",
    h2_2: "The Magic of Self-Attention",
    p_2: "The real breakthrough that enabled modern LLMs is the 'Transformer' architecture, specifically its 'self-attention' mechanism. As the AI reads a sentence, attention allows it to weigh the importance of every word relative to every other word. This means the model understands that in 'The bank of the river,' the word 'bank' relates to nature, whereas in 'The bank is closed,' it relates to finance. It reads the whole context simultaneously.",
    faq1_q: "Do LLMs understand what they are saying?",
    faq1_a: "Not in a human sense. They understand mathematical relationships between words and patterns, allowing them to predict appropriate responses without conscious comprehension."
  },
  {
    title: "AI vs Human Intelligence – What AI Still Cannot Do",
    slug: "ai-vs-human-intelligence",
    desc: "Explore the fundamental differences between artificial intelligence and human cognition, comparing pattern recognition with true comprehension and reason.",
    keywords: "AI vs Human Intelligence, artificial general intelligence, limits of AI, what AI cannot do, differences between AI and humans",
    intro: "Artificial Intelligence has achieved superhuman performance in specific tasks like playing chess or protein folding. Yet, despite these impressive feats, AI still struggles with basic tasks that a toddler can perform effortlessly. The gap between artificial and human intelligence remains vast.",
    h2_1: "Pattern Recognition vs. True Comprehension",
    p_1: "Current AI systems excel at pattern recognition. They can scan millions of medical images to spot a tumor faster than any human. However, they lack true comprehension. An AI can paint a beautiful picture of a bicycle, but it doesn't intuitively understand how the pedals turn the wheels, the physics of balance, or what it feels like to ride one. It only knows the statistical pattern of what bicycle images look like.",
    h2_2: "Common Sense and Generalization",
    p_2: "Humans possess 'common sense'—an implicit understanding of how the world works, gained through physical interaction and conscious experience. If a human learns to drive a car on a sunny day, they can easily adapt to driving in the rain. An AI might completely fail if the lighting conditions change slightly because it lacks the ability to generalize knowledge across unrelated domains—a hallmark of human intelligence.",
    faq1_q: "Will AI ever achieve human-like intelligence?",
    faq1_a: "Many researchers believe Artificial General Intelligence (AGI) is possible, but current architectures like LLMs may not be the path to get there, as they lack true reasoning and world modeling."
  },
  {
    title: "How AI Is Changing Software Development in 2026",
    slug: "how-ai-changes-software-development",
    desc: "Discover how AI pair programmers, automated testing, and generative code models are revolutionizing the software engineering landscape.",
    keywords: "AI in software development, AI coding assistants, future of programming, generative AI code, software engineering 2026",
    intro: "Software development is undergoing a paradigm shift. AI is no longer just a sophisticated autocomplete tool; it has evolved into a fully-fledged pair programmer that participates in system design, debugging, and deployment, fundamentally altering the role of a software engineer.",
    h2_1: "From Writing Code to Guiding Systems",
    p_1: "In the past, developers spent most of their time writing syntax. Today, AI models can generate entire boilerplate applications, functions, and unit tests from simple natural language prompts. The role of the developer is shifting from a 'code writer' to a 'system orchestrator' or 'prompt engineer,' focusing on high-level architecture, business logic, and verifying the AI's output.",
    h2_2: "Automated Debugging and Maintenence",
    p_2: "One of the most tedious parts of software engineering is finding bugs and maintaining legacy code. AI agents are now capable of reading through thousands of lines of legacy code, identifying inefficiencies, and automatically suggesting refactoring improvements. They can instantly translate codebases from older languages into modern frameworks, dramatically reducing tech debt for organizations.",
    faq1_q: "Will AI replace software developers?",
    faq1_a: "In the near future, AI will likely not replace developers entirely but will replace developers who do not use AI. It acts as a powerful multiplier for human productivity."
  },
  {
    title: "What Happens Inside an AI Model When You Ask a Question",
    slug: "what-happens-inside-ai-model",
    desc: "Step-by-step breakdown of how an AI model processes a user prompt, from tokenization and neural network layers to final output generation.",
    keywords: "how AI works, inside AI model, neural network layers, tokenization process, AI workflow explained",
    intro: "When you hit 'Enter' after typing a prompt into an AI interface, a complex and incredibly fast cascade of mathematical operations occurs. Let's lift the hood and trace the journey of your question as it travels through a modern neural network.",
    h2_1: "Tokenization and Embedding",
    p_1: "First, your question is split into tokens—pieces of words. For example, 'ChatGPT' might be split into 'Chat' and 'GPT'. These tokens are translated into long lists of numbers called embeddings. At this point, your textual question has been transformed into a mathematical vector mapping its semantic meaning in a high-dimensional space.",
    h2_2: "Passing Through the Neural Layers",
    p_2: "This mathematical representation is then passed through dozens of layers in the neural network. At each layer, 'attention mechanisms' analyze the relationships between the words, while 'feed-forward networks' apply learned weights and biases. The network calculates probabilities for what the first word of the answer should be. Once it picks the highest probability word, it adds that word to your prompt, feeds it back through the entire network, and predicts the second word, repeating this until the answer is complete.",
    faq1_q: "Does the AI read my whole question at once?",
    faq1_a: "Yes, modern Transformer models read and process the entire input prompt simultaneously using self-attention mechanisms, rather than reading it word-by-word like older models."
  },
  {
    title: "Why AI Needs Huge Data to Learn (Simple Explanation)",
    slug: "why-ai-needs-huge-data",
    desc: "A beginner-friendly explanation of why artificial intelligence and machine learning models require massive datasets to function effectively.",
    keywords: "why AI needs data, machine learning data size, big data and AI, AI training sets explained, neural network data",
    intro: "You often hear that data is the 'new oil' fueling the AI revolution. But why exactly does an artificial intelligence need gigabytes, or even terabytes, of text, images, or audio just to learn a simple task?",
    h2_1: "Learning Through Trial, Error, and Statistics",
    p_1: "If you show a human toddler one or two pictures of a cat, they instantly understand what a cat is. AI does not learn this way. An AI starts as a blank mathematical slate. It learns by guessing. If it guesses wrong, it slightly adjusts its internal math. To accurately distinguish a cat from a dog, the AI needs to make millions of random guesses, slowly tuning its parameters. It needs huge data to provide enough examples for this statistical trial-and-error process.",
    h2_2: "Capturing Every Edge Case",
    p_2: "The real world is messy and deeply complex. A dataset needs to capture not just the 'average' example, but every possible variation. A self-driving car AI needs data showing sunny roads, snowy roads, nighttime driving, and roads with pedestrians crossing unexpectedly. Small datasets result in AI models that are 'brittle'—they work well in laboratory conditions but fail completely when faced with something they haven't seen before.",
    faq1_q: "Can AI learn from small amounts of data?",
    faq1_a: "Traditional deep learning requires huge data, but researchers are developing techniques like 'few-shot learning' and 'transfer learning' to help AI adapt using much smaller datasets."
  },
  {
    title: "Future of Autonomous AI Systems – What’s Coming Next",
    slug: "future-of-autonomous-ai-systems",
    desc: "Explore the evolution of autonomous AI, moving from reactive chatbots to proactive systems that can plan, execute, and adapt without human guidance.",
    keywords: "autonomous AI systems, future of artificial intelligence, proactive AI agents, AI planning, agentic workflows",
    intro: "Today's AI systems are mostly reactive—you give them a prompt, and they give you an output. The next monumental leap in artificial intelligence is the shift towards 'Agentic' or Autonomous AI systems: programs that operate continuously and independently to achieve complex long-term goals.",
    h2_1: "From Chatbots to Digital Employees",
    p_1: "The future autonomous system isn't just a chatbot; it's a digital worker. Imagine an autonomous marketing AI. You don't ask it to write a tweet. Instead, you say, 'Increase our brand awareness for the new product.' The AI will independently analyze the market, formulate a strategy, write the copy, generate images, schedule the posts, analyze the engagement data, and adjust its strategy over the course of a month—all without you lifting a finger.",
    h2_2: "The Challenge of Alignment and Safety",
    p_2: "As AI systems gain the ability to chain together long thoughts and execute actions (like spending money or sending emails), safety becomes paramount. The biggest challenge researchers face is 'Alignment'—ensuring that an autonomous agent pursues its goal in a way that aligns with human values, without taking dangerous shortcuts or breaking protocols.",
    faq1_q: "What makes an AI autonomous?",
    faq1_a: "An AI is autonomous when it can independently break down a high-level goal into actionable steps, use tools to execute those steps, and correct its own course if it makes a mistake."
  },
  {
    title: "How AI Recommendation Systems Control What You See Online",
    slug: "ai-recommendation-systems-explained",
    desc: "Uncover how the recommendation algorithms on YouTube, TikTok, and Amazon use AI to predict your behavior and curate your digital world.",
    keywords: "AI recommendation engines, algorithm feed, how algorithms work, social media AI, content personalization",
    intro: "Every time you scroll through a social media feed, watch a streaming service, or shop online, an invisible AI is quietly observing your actions. AI recommendation systems are the unseen curators of our digital lives, dictating what information and entertainment reaches our screens.",
    h2_1: "Building Your Digital Twin",
    p_1: "Recommendation algorithms work by collecting vast amounts of data on your behavior. They track what you click, how long you linger on a post before scrolling, what you share, and when you log on. By comparing your behavior to millions of other users, the AI builds a 'digital twin' of your preferences. If you share 90% of the same viewing habits as another user, the algorithm assumes you will like the 10% of content they have seen but you haven't.",
    h2_2: "The Engagement Optimization Loop",
    p_2: "The primary goal of these AI systems is rarely to educate or inform; it is to maximize engagement and keep you on the platform for as long as possible. This optimization often leads to the 'echo chamber' effect. By constantly feeding you content that aligns with your existing views, or content designed to trigger a strong emotional response, the AI ensures you keep clicking—sometimes at the cost of exposing you to diverse perspectives.",
    faq1_q: "Can I reset my recommendation algorithm?",
    faq1_a: "Most platforms allow you to clear your watch or search history, which essentially resets the personalized data the AI uses, returning your feed to a baseline state."
  },
  {
    title: "Hidden Risks of AI That Nobody Talks About",
    slug: "hidden-risks-of-ai",
    desc: "Beyond the sci-fi tropes of robot takeovers, discover the real, immediate, and hidden risks that artificial intelligence poses to society today.",
    keywords: "AI risks, dangers of AI, bias in AI, artificial intelligence ethical issues, hidden AI dangers",
    intro: "While pop culture often focuses on apocalyptic scenarios of superintelligent AI conquering humanity, the real risks of AI are already happening around us. These invisible threats are subtle, systemic, and deeply woven into the fabrics of our daily infrastructure.",
    h2_1: "Algorithmic Bias and Discrimination",
    p_1: "AI models learn from historical human data. Because human history is filled with bias, prejudice, and inequality, AI naturally inherits and amplifies these flaws. When algorithms are used to screen resumes, approve loans, or predict criminal recidivism, they often subtly discriminate against minority groups. Because the AI is seen as an 'objective machine,' these biased decisions are rarely questioned, baking discrimination into the system at scale.",
    h2_2: "The Erosion of Truth and Data Poisoning",
    p_2: "As AI-generated text, images, and audio flood the internet, we are facing an epistemological crisis—hyper-realistic deepfakes make it impossible to trust what we see. Furthermore, as AI companies scrape the internet for new training data, they increasingly ingest content produced by *other* AIs. This feedback loop, called 'model collapse,' can degrade the quality of future AI systems, filling the web with automated mediocrity.",
    faq1_q: "Is AI inherently biased?",
    faq1_a: "The underlying math isn't biased, but the data used to train the math almost always contains human biases, which the AI inevitably learns and replicates."
  }
];

function generate() {
  let templateContent = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
  let categoryHTML = fs.readFileSync(CATEGORY_HTML_PATH, 'utf-8');
  let sitemapXML = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  let categoryUpdated = false;
  let sitemapUpdated = false;

  articles.forEach((art, index) => {
    const articlePath = path.join(BLOG_DIR, `${art.slug}.html`);
    if (fs.existsSync(articlePath)) {
      console.log(`Skipping ${art.slug}, already exists.`);
      return;
    }

    // 1. Generate Article HTML
    let dateStr = "2026-03-24"; 
    let monthStr = "March 24, 2026";
    
    let result = templateContent;
    result = result.replace(/\[Article Title\]/g, art.title);
    result = result.replace(/\[Full Article Title With Primary Keyword\]/g, art.title);
    result = result.replace(/\[Write a compelling 150-160 character.*?\]/g, art.desc);
    result = result.replace(/\[keyword1, keyword2.*?\]/g, art.keywords);
    result = result.replace(/\[Author Name\]/g, "Rajesh Kumar");
    result = result.replace(/\[Author Full Name\]/g, "Rajesh Kumar");
    result = result.replace(/\[A\]/g, "R");
    result = result.replace(/\[CATEGORY\]/g, "ai-technology");
    result = result.replace(/\[Category Name\]/g, "AI Technology");
    result = result.replace(/\[CSS-CLASS\]/g, "ai");
    result = result.replace(/\[SLUG\]/g, art.slug);
    result = result.replace(/\[YYYY-MM-DD\]/g, dateStr);
    result = result.replace(/\[Month DD, YYYY\]/g, monthStr);
    result = result.replace(/\[X\] min read/g, "5 min read");
    result = result.replace(/\[primary keyword tag\]/g, "AI");
    result = result.replace(/\[Article Title Short\]/g, art.title.split(' ').slice(0, 5).join(' ') + '...');
    
    // Body replacement
    result = result.replace(/\[Introduction paragraph.*?\]/g, art.intro);
    result = result.replace(/\[Section 1 Heading.*?\]/g, art.h2_1);
    result = result.replace(/\[Section 1 paragraph content.*?\]/g, art.p_1);
    result = result.replace(/\[Second paragraph of section 1.\]/g, "");
    
    result = result.replace(/\[Section 2 Heading\]/g, art.h2_2);
    result = result.replace(/\[Section 2 content\.\.\.\]/g, art.p_2);
    result = result.replace(/\[Continue section 2\.\.\.\]/g, "");
    
    // Clean up remaining sections template placeholders or fill them roughly
    result = result.replace(/<h3.*?>\[Subsection 1.1.*?>.*?<\/ul>/s, ""); // remove subsection snippet
    
    result = result.replace(/<h2 id="section-3.*?<!-- ── CONCLUSION ────────────────────────────────── -->/s, "<!-- ── CONCLUSION ────────────────────────────────── -->");

    result = result.replace(/\[Wrap up in 2-3 sentences.*?\]/g, "As AI rapidly advances, understanding its underlying mechanisms and broader implications is crucial. Keep exploring the fast-paced world of artificial intelligence and stay ahead of the curve.");

    // FAQ
    result = result.replace(/\[FAQ Question 1.*?\]/g, art.faq1_q);
    result = result.replace(/\[Answer to FAQ 1.*?\]/g, art.faq1_a);
    result = result.replace(/<div class="faq-item">\s*<button class="faq-question".*?\[FAQ Question 2\].*?<\/div>\s*<\/div>/s, "");
    result = result.replace(/<div class="faq-item">\s*<button class="faq-question".*?\[FAQ Question 3\].*?<\/div>\s*<\/div>/s, "");

    // Link update in Internal Links
    result = result.replace(/\[RELATED-CATEGORY\]/g, "student-opportunities");
    result = result.replace(/\[Related Category Name\]/g, "Student Opportunities");
    result = result.replace(/\[RELATED-SLUG\]/g, "ai-agent-architecture-explained");
    result = result.replace(/\[Related Article Title\]/g, "AI Agent Architecture Explained");
    result = result.replace(/\[OTHER-CATEGORY\]/g, "deep-web-resources");
    result = result.replace(/\[Another Related Article\]/g, "Deep Web vs Dark Web");
    
    // Write out the article
    fs.writeFileSync(articlePath, result, 'utf-8');
    console.log(`Created: ${articlePath}`);

    // 2. Add to Category HTML
    let existingIndex = 10 + index + 1; // It already had 10 articles.
    let newCard = `
            <article class="article-card">
              <div class="article-card-number">${existingIndex}</div>
              <div class="article-card-body">
                <div class="article-card-meta">
                  <span class="tag cat-ai">AI Technology</span>
                  <time datetime="${dateStr}">${monthStr}</time>
                  <span>5 min read</span>
                </div>
                <h2 style="font-size:1.25rem;"><a href="../blog/ai-technology/${art.slug}.html">${art.title}</a></h2>
                <p class="excerpt">${art.desc}</p>
                <a href="../blog/ai-technology/${art.slug}.html" class="read-more">Read article →</a>
              </div>
            </article>
`;
    if (!categoryHTML.includes(art.slug)) {
      categoryHTML = categoryHTML.replace('</div>\n        </div>\n\n        <aside', newCard + '          </div>\n        </div>\n\n        <aside');
      categoryUpdated = true;
    }

    // 3. Add to sitemap
    let sitemapEntry = `  <url>\n    <loc>https://studenttechprojects.in/blog/ai-technology/${art.slug}.html</loc>\n    <lastmod>${dateStr}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`;
    if (!sitemapXML.includes(art.slug)) {
      sitemapXML = sitemapXML.replace('</urlset>', sitemapEntry);
      sitemapUpdated = true;
    }
  });

  if (categoryUpdated) {
    fs.writeFileSync(CATEGORY_HTML_PATH, categoryHTML, 'utf-8');
    console.log('Updated category page');
  }
  if (sitemapUpdated) {
    fs.writeFileSync(SITEMAP_PATH, sitemapXML, 'utf-8');
    console.log('Updated sitemap');
  }
}

generate();
