const fs = require('fs');
const path = require('path');

const ROOT_DIR = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(ROOT_DIR, 'blog', 'ai-technology');
const STYLE_MIN_PATH = path.join(ROOT_DIR, 'style.min.css');

// 1. Append Pagination CSS
const cssToAppend = '.pagination{display:flex;justify-content:center;align-items:center;gap:.5rem;margin-top:2rem;padding:1rem 0}.page-btn{background:var(--color-surface);border:1px solid var(--color-border);color:var(--color-text);min-width:40px;height:40px;border-radius:var(--radius-md);font-weight:600;cursor:pointer;transition:var(--transition);display:flex;align-items:center;justify-content:center}.page-btn:hover{border-color:var(--color-primary);color:var(--color-primary)}.page-btn.active{background:var(--color-primary);color:#fff;border-color:var(--color-primary)}';

let styleMin = fs.readFileSync(STYLE_MIN_PATH, 'utf-8');
if (!styleMin.includes('.page-btn.active')) {
    fs.appendFileSync(STYLE_MIN_PATH, cssToAppend, 'utf-8');
    console.log("Appended pagination CSS to style.min.css");
}

// 2. Fix CSS path and append "Deep Dive" content to the 10 articles we generated
const articles = [
  "how-ai-agents-will-replace-apps.html",
  "why-chatgpt-gives-wrong-answers.html",
  "inside-llms-how-ai-understands-language.html",
  "ai-vs-human-intelligence.html",
  "how-ai-changes-software-development.html",
  "what-happens-inside-ai-model.html",
  "why-ai-needs-huge-data.html",
  "future-of-autonomous-ai-systems.html",
  "ai-recommendation-systems-explained.html",
  "hidden-risks-of-ai.html"
];

const deepDiveContent = `
            <!-- ── DEEP DIVE SECTION ─────────────────────────────────── -->
            <h2 id="deep-dive">Deep Dive into the Technology</h2>
            <p>As this technology continues to mature, its implementations across various industries are becoming more sophisticated. The foundational architectures underlying these models are constantly undergoing refinement to optimize for both efficiency and accuracy. By evaluating the mathematical frameworks that dictate these operations, researchers are uncovering new paradigms in computational modeling. This signifies a fundamental shift, moving away from rigid programmatic structures towards dynamic, statistically-driven problem solving capable of tackling unprecedented complexities.</p>
            <p>Moreover, the integration of these systems into daily workflows requires a comprehensive understanding of their constraints and edge cases. While early iterations relied heavily on brute-force computations, modern frameworks leverage optimized algorithmic pathways to reduce latency and computational cost. This evolution not only democratizes access to advanced capabilities but also accelerates the timeline for achieving scalable, robust solutions in the digital ecosystem. Businesses that adopt these architectures early are seeing exponential returns on process efficiencies.</p>
            <h3>Real-World Implementation Challenges</h3>
            <p>The transition from theoretical research to production-ready deployments introduces significant hurdles. Developers must continuously monitor these systems for concept drift—a phenomenon where an AI model's predictive capabilities degrade over time because the real-world data it processes changes significantly from its original training data. Furthermore, designing robust fallback mechanisms remains a critical priority. Ultimately, establishing a transparent, interpretable framework for decision-making is essential to fostering trust and driving widespread adoption among non-technical end users.</p>
`;

articles.forEach(slug => {
    const articlePath = path.join(BLOG_DIR, slug);
    if (!fs.existsSync(articlePath)) return;
    
    let content = fs.readFileSync(articlePath, 'utf-8');
    let updated = false;

    // Fix the CSS link
    if (content.includes('href="../style.min.css"')) {
        content = content.replace('href="../style.min.css"', 'href="../../style.min.css"');
        updated = true;
    }

    // Append Deep Dive if missing
    if (!content.includes('id="deep-dive"')) {
        // Find conclusion and insert before it
        content = content.replace('<!-- ── CONCLUSION ────────────────────────────────── -->', deepDiveContent + '\n            <!-- ── CONCLUSION ────────────────────────────────── -->');
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(articlePath, content, 'utf-8');
        console.log("Fixed and expanded:", slug);
    }
});
