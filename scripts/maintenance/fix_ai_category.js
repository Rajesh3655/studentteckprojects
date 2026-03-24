const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const CATEGORY_HTML_PATH = path.join(ROOT_DIR, 'categories', 'ai-technology.html');

const articles = [
  { title: "How AI Agents Will Replace Apps in the Next 5 Years", slug: "how-ai-agents-will-replace-apps", desc: "Discover how AI agents are evolving to replace traditional apps by automating tasks, reasoning through problems, and interacting directly with services." },
  { title: "Why AI Models Like ChatGPT Sometimes Give Wrong Answers", slug: "why-chatgpt-gives-wrong-answers", desc: "Understand the concept of AI hallucinations, why models like ChatGPT generate incorrect information, and how they predict text instead of looking up facts." },
  { title: "Inside LLMs: How AI Actually Understands Language", slug: "inside-llms-how-ai-understands-language", desc: "Dive deep into the mechanics of Large Language Models (LLMs). Learn about tokens, embeddings, and the attention mechanism that power modern AI." },
  { title: "AI vs Human Intelligence \u2013 What AI Still Cannot Do", slug: "ai-vs-human-intelligence", desc: "Explore the fundamental differences between artificial intelligence and human cognition, comparing pattern recognition with true comprehension and reason." },
  { title: "How AI Is Changing Software Development in 2026", slug: "how-ai-changes-software-development", desc: "Discover how AI pair programmers, automated testing, and generative code models are revolutionizing the software engineering landscape." },
  { title: "What Happens Inside an AI Model When You Ask a Question", slug: "what-happens-inside-ai-model", desc: "Step-by-step breakdown of how an AI model processes a user prompt, from tokenization and neural network layers to final output generation." },
  { title: "Why AI Needs Huge Data to Learn (Simple Explanation)", slug: "why-ai-needs-huge-data", desc: "A beginner-friendly explanation of why artificial intelligence and machine learning models require massive datasets to function effectively." },
  { title: "Future of Autonomous AI Systems \u2013 What\u2019s Coming Next", slug: "future-of-autonomous-ai-systems", desc: "Explore the evolution of autonomous AI, moving from reactive chatbots to proactive systems that can plan, execute, and adapt without human guidance." },
  { title: "How AI Recommendation Systems Control What You See Online", slug: "ai-recommendation-systems-explained", desc: "Uncover how the recommendation algorithms on YouTube, TikTok, and Amazon use AI to predict your behavior and curate your digital world." },
  { title: "Hidden Risks of AI That Nobody Talks About", slug: "hidden-risks-of-ai", desc: "Beyond the sci-fi tropes of robot takeovers, discover the real, immediate, and hidden risks that artificial intelligence poses to society today." }
];

let categoryHTML = fs.readFileSync(CATEGORY_HTML_PATH, 'utf-8');

let newCards = '';
let dateStr = "2026-03-24"; 
let monthStr = "March 24, 2026";

articles.forEach((art, index) => {
    if (!categoryHTML.includes(art.slug)) {
        let existingIndex = 10 + index + 1;
        newCards += `
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
            </article>\n`;
    }
});

if (newCards !== '') {
    categoryHTML = categoryHTML.replace('          </div>\r\n        </div>\r\n\r\n        <aside class="sidebar">', newCards + '          </div>\r\n        </div>\r\n\r\n        <aside class="sidebar">');
    // Also try without \r if Windows format differs
    categoryHTML = categoryHTML.replace('          </div>\n        </div>\n\n        <aside class="sidebar">', newCards + '          </div>\n        </div>\n\n        <aside class="sidebar">');
    
    fs.writeFileSync(CATEGORY_HTML_PATH, categoryHTML, 'utf-8');
    console.log('Fixed category page');
} else {
    console.log('No update needed or replacement failed again.');
}
