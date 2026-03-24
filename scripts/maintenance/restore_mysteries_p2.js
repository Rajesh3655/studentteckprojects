const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(SITE_ROOT, 'blog', 'internet-mysteries');
const TEMPLATE_FILE = path.join(SITE_ROOT, 'blog', 'article-template.html');

const templateContent = fs.readFileSync(TEMPLATE_FILE, 'utf-8');

const topics = [
    {
        slug: 'why-information-removed-from-google',
        title: 'Why Some Information Gets Removed from Google',
        meta: 'Discover the "Right to be Forgotten" and other legal/technical reasons why search results disappear from Google.',
        intro: "Google is our window to the digital world, but that window is often tinted or partially blocked. From privacy laws like GDPR to DMCA takedown requests, information is constantly being 'delisted' from search results. This guide explains the hidden mechanisms that control what Google is legally and ethically allowed to show you in 2026.",
        h2_1: 'The "Right to be Forgotten": Privacy Laws and Delisting',
        p1: "In 2026, the 'Right to be Forgotten' has expanded from Europe to many other jurisdictions, including several states in the US and parts of Asia. This legal principle allows individuals to request the removal of search results that are 'extraordinary, irrelevant, or no longer accurate' about their private lives. When Google receives a valid request, it doesn't delete the content from the original server, but it 'delists' the URL so it won't appear for specific name-based queries.\n\nThis process creates a tension between personal privacy and the public's right to know. While it helps protect individuals from harassment or outdated criminal records, it can also be used by powerful figures to 'scrub' their digital history. For students, understanding that search engines are subject to local laws is a vital lesson in digital citizenship and the fragmented nature of global information.",
        h2_2: 'DMCA and Copyright Takedown Requests',
        p2: "The Digital Millennium Copyright Act (DMCA) is one of the most powerful tools for removing content from Google. Every day, Google receives millions of requests from copyright holders to delist links that point to pirated movies, software, or books. Because Google faces massive legal liability if it doesn't comply quickly, it often uses automated systems to process these 'Notice and Takedown' requests, sometimes resulting in legitimate fair-use content being accidentally removed.\n\nThis 'Chilling Effect' can be a major hurdle for student researchers and independent creators. If a large corporation's automated system mistakenly targets your educational video or project repository, getting it restored can be a long and frustrating process. In 2026, 'Copy-Left' activists and digital rights organizations are working to reform these systems to ensure they aren't used to suppress innovation and free expression.",
        h2_3: 'Malware and Phishing: Safety-First Removal',
        p3: "Google's internal 'Safebrowsing' teams are constantly scanning the web for malicious software (malware) and phishing sites designed to steal user data. If a website is compromised by hackers and begins serving malicious code, Google will remove it from search results entirely or display a prominent 'This site may harm your computer' warning. This is a rare case where information removal is universally seen as a positive safety feature for the end user.\n\nFor a student, this highlights the technical responsibility of website ownership. If your project isn't properly secured and gets hacked, it doesn't just put your data at risk—it can lead to your site being 'blacklisted' by the entire internet infrastructure. Learning the basics of web security is therefore an essential skill for any digital creator in 2026.",
        h2_4: 'Court Orders and Local Jurisdictional Content',
        p4: "Beyond privacy and copyright, Google also complies with specific court orders related to defamation, hate speech, or national security. Because Google operates in nearly every country, it must adhere to the laws of each land. What is legal to search for in one country might be a criminal offense to display in another. This leads to 'Regional Delisting,' where a search result exists in the US index but is completely absent in another country's version of Google.\n\nThis geographic fragmentation of search results is a major challenge for global research. It reminds us that Google is not a neutral mirror of the world; it is a commercial entity operating within a complex web of international laws and political pressures. For students, mastering the ability to 'Cross-Query' using different regional search engines and VPNs is the only way to get a complete, uncensored view of a global topic.",
        faq1_q: "How can I tell if a result was removed for legal reasons?",
        faq1_a: "Google often includes a notice at the bottom of the search results page stating that 'In response to a legal request, we have removed [X] results.' You can also check LumenDatabase.org for the specific notices.",
        faq2_q: "Can I request that Google remove my home address?",
        faq2_a: "Yes, Google allows individuals to request the removal of 'Highly Sensitive Personal Information' like home addresses, phone numbers, and bank details even without a formal court order, as part of their safety policies."
    },
    {
        slug: 'how-old-internet-content-preserved',
        title: 'How Old Internet Content Is Preserved',
        meta: 'Explore the methods and challenges of digital archaeology and the heroes saving our earliest online memories.',
        intro: "In the 2020s, digital data is more fragile than ever. The average lifespan of a web page is less than 100 days before it is either changed or deleted entirely. To combat this, a specialized community of 'Digital Archaeologists' and archivists is working on preserving our digital heritage before it's gone. This guide explores the diverse techniques and massive technical challenges of saving the old web.",
        h2_1: 'Web Archiving: The Power of Snapshots',
        p1: "The primary method of preserving old content is 'Web Archiving'—the systematic crawling and saving of live websites. Using tools like the Wayback Machine, archivists create static snapshots of how a site looked at a specific moment. In 2026, this has evolved into 'Full-Stack Archiving,' where even the server-side logic and database structures are attemptedly preserved to keep complex interactive apps functional in the future.\n\nThis process is a race against time. Because websites are 'Born Digital,' they don't have paper backups. If a server goes offline before it's crawled, that specific state of the site is lost forever. For students, this emphasizes the importance of 'Personal Archiving.' Using tools like Archive.is or saving a local 'Web Bundle' of your own projects ensures your work won't be a victim of link rot.",
        h2_2: 'Emulation: Bringing Dead Software Back to Life',
        p2: "Sometimes, saving the data isn't enough; you also need the environment it ran in. 'Emulation' is the practice of mimicking old hardware (like early PCs or mobile phones) in a modern browser. Projects like the Internet Archive's Emulator series allow users to play early 90s DOS games or browse the mid-2000s web exactly as it appeared on a CRT monitor. This preserves the 'User Experience' and cultural context of the era, not just its raw text.\n\nFor computer science students, emulation is a masterclass in software architecture. It requires deep knowledge of how old CPUs and graphics cards worked and how to translate those instructions for modern silicon. By keeping these old systems alive, archivists ensure that our earliest digital breakthroughs remain 'Executable History'—something we can learn from and build upon, not just read about in books.",
        h2_3: 'The Role of Decentralized Storage (IPFS)',
        p3: "In 2026, a new wave of preservation is being led by decentralized technologies like IPFS (InterPlanetary File System). Unlike the traditional web, where content is tied to a specific URL (server), IPFS uses 'Content Addressing'—the data itself has a unique fingerprint. If five people have the same file, the network can find it from any of them. This makes it much harder for a single company or government to 'delete' a piece of history.\n\nDecentralization is the ultimate insurance policy for digital heritage. Even if the Internet Archive were to go offline, content stored on a decentralized network could still be retrieved as long as anyone else is still hosting it. For students, learning how to use and host data on these 'Permoweb' systems is the most effective way to guarantee your research and digital footprints will outlive the companies that currently facilitate our online lives.",
        h2_4: 'Community-Driven Preservation: The Ghost of GeoCities',
        p4: "Some of the most important digital preservation isn't done by institutions, but by passionate volunteer communities. When Yahoo! shut down GeoCities in 2009, a group called the 'Archive Team' spent months downloading as much of the site as possible. Their work is now the only reason billions of personal homepages from the 90s still exist. This 'Crowdsourced Archiving' was a turning point in realizing that communities are the true owners of their digital history.\n\nIn 2026, these communities are more active than ever. From 'Media Archaeologists' saving old Flash games to 'Digital Foraging Collective' preserving niche forums, these volunteers are the unsung heroes of the internet. For any student, participating in these projects—by donating server space or just helping to tag old content—is a profound way to give back to the digital commons and ensure that the 'Digital Dark Age' doesn't claim our shared memory.",
        faq1_q: "Can I host my own web archive?",
        faq1_a: "Yes! Tools like 'Webrecorder' allow you to create your own high-fidelity web archives on your local computer, which can later be uploaded to public repositories for permanent storage.",
        faq2_q: "Is it legal to archive someone else's website?",
        faq2_a: "Generally, yes, under 'Library and Archive' fair use exemptions in many countries. However, making some archived materials publicly accessible can sometimes lead to copyright disputes."
    },
    {
        slug: 'why-pages-exist-cannot-be-found',
        title: 'Why Some Pages Exist but Cannot Be Found',
        meta: 'Discover the technical reasons behind "Orphan Pages" and the millions of web pages that search engines simply cannot crawl.',
        intro: "The internet is far larger than what Google shows you. For every page you find in search results, there are thousands of others that exist but are 'Invisible' to traditional crawlers. These include everything from orphan pages with no incoming links to complex data hidden behind login walls. This guide explains why so much of the web remains 'Unfindable' in the AI age.",
        h2_1: 'Orphan Pages: The Missing Links in the Web',
        p1: "In technical terms, a page is 'Orphaned' when no other page on the website or the wider internet links to it. Because search engines find new content by 'crawling' links from one page to another, they have no way of discovering these isolated URLs. An orphan page can be perfectly indexed if it has a direct link, but without one, it remains a digital ghost—existing on the server but unreachable via normal navigation.\n\nFor website owners, orphan pages are a major SEO failure. They represent wasted content and lost opportunity. For students, finding orphan pages can be a treasure hunt for 'forgotten' documentation or hidden resources that were never meant for the public eye. Understanding the importance of 'Internal Linking Architecture' is the first step for any student looking to master digital marketing or information architecture.",
        h2_2: 'The Impact of Robots.txt and Metadata Blocking',
        p2: "Sometimes, pages are invisible because the owner explicitly told search engines to stay away. The 'Robots.txt' file is the 'No Trespassing' sign of the internet. It provides instructions to crawlers about which directories they are allowed to visit. If a page's directory is 'Disallowed,' it won't be crawled even if it has millions of links pointing to it. Similarly, a 'noindex' meta tag tells a search engine to crawl the page but never show it in search results.\n\nThis 'Intentional Invisibility' is used for many reasons—protecting private user data, hiding development versions of sites, or preventing low-quality internal pages from diluting the site's search authority. For a technical student, being able to analyze a site's Robots.txt file is a key skill for understanding why certain pieces of information are being kept out of the public spotlight by their creators.",
        h2_3: 'Deep Web Access: Databases and Dynamic Content',
        p3: "A massive portion of the 'Unfindable' web exists in the Deep Web—pages that are generated on-the-fly from a database only when a user performs a specific search. Because a standard search crawler cannot 'fill out' a form or perform a specialized database query, it never sees these results. These include academic login systems, government record databases, and private corporate intranets. This data is technically public but practically invisible to Google.\n\nAccessing this 'Deep Content' requires specialized tools and search techniques. For researchers, this is the most valuable part of the web. It is where the raw data, the peer-reviewed papers, and the detailed government reports are stored. Learning how to navigate directly to these databases and use their internal search systems is what separates a student who uses Google from a professional researcher who finds the real primary sources.",
        h2_4: 'Javascript Rendering and Crawl Budgets',
        p4: "In 2026, many websites are built using complex JavaScript frameworks that 'render' content in the user's browser rather than on the server. If a search engine's crawler isn't powerful enough or doesn't have the 'Crawl Budget' (the amount of server resource it's willing to spend) to wait for the JavaScript to execute, it will see a blank page. This is a common reason why modern, high-tech sites sometimes have lower visibility than older, simpler HTML-based ones.\n\nThis technical barrier is one of the biggest challenges for modern web developers. Ensuring that your site is 'Searchable' required finding the right balance between a smooth, app-like user experience and a server-side structure that search engines can easily digest. For students in computer science, mastering 'Hybrid Rendering' is the key to building websites that are both technologically advanced and globally discoverable.",
        faq1_q: "How can I find if a page is orphaned?",
        faq1_a: "You can use tools like Screaming Frog or simple Python scripts to crawl your site and compare the list of found links with your server's total file list. Any file not found by the crawler is an orphan.",
        faq2_q: "Can Google see content on my private Facebook profile?",
        faq2_a: "No. Facebook and other social networks use 'Login Walls' and deliberate technical blocks to prevent search engines from indexing private profiles, keeping your data within their own ecosystem."
    },
    {
        slug: 'strange-internet-phenomena',
        title: 'Strange Internet Phenomena Nobody Can Explain',
        meta: 'Explore the digital mysteries that continue to baffle researchers, from "A858" to the enduring mystery of Cicada 3301.',
        intro: "The internet is not just a collection of information; it is also a source of deep mysteries that defy logical explanation. From complex, encrypted codes that appear out of nowhere to strange websites that seem to be communicating with no one, the digital world has its own set of 'Urban Legends.' This guide explores the most famous—and most baffling—phenomena of the online world in 2026.",
        h2_1: 'Cicada 3301: The Internet\'s Greatest Puzzle',
        p1: "Beginning in 2012, a mysterious organization known as Cicada 3301 began posting complex, multi-stage puzzles across the web. These puzzles involved everything from classical literature and Mayan numerology to advanced cryptography and data steganography (hiding messages inside images). The stated goal was to recruit 'highly intelligent individuals,' but to this day, no one knows who is behind Cicada or what their true purpose was.\n\nFor students of cryptography, Cicada is a masterclass in 'Layered Disguise.' Some of the puzzles required physical travel to specific locations around the world to find clues on posters. While several individuals claimed to have completed the final stage, they were reportedly sworn to secrecy, leaving the rest of the world to wonder: was it a cult, a recruitment tool for a government agency, or the world's most elaborate 'Alternate Reality Game' (ARG)?",
        h2_2: 'The Mystery of A858 and Automated Cryptocodes',
        p2: "For years, a Reddit user named 'A858' posted massive blocks of hexadecimal code every single day without explanation. A dedicated community formed to decrypt these messages, using collective computing power and advanced linguistics. Some decoded messages were simple quotes, while others seemed to be pieces of a larger, unrecognizable system. In 2026, the A858 mystery remains one of the prime examples of 'Digital Static'—information that exists and is carefully maintained but has no obvious meaning.\n\nSome researchers believe A858 was a test for a 'Dead Man's Switch' or an automated system used by an intelligence agency to synchronize operations without a traceable human connection. For data science students, studying A858 provides insights into pattern recognition and the difficulty of distinguishing between deliberate encryption and random digital noise. It challenges our assumption that everything on the internet must have a clear audience.",
        h2_3: 'Number Stations and the Deep Web Radios',
        p3: "While not purely digital, 'Number Stations' have found a new life on the internet. These are shortwave radio stations that broadcast lists of numbers or phonetic alphabet letters (like 'Alpha, Bravo, Charlie'), presumed to be encrypted messages for spies. In the 2020s, many of these stations have moved to the Dark Web, using obscure frequencies and digital encodings that are much harder to track than traditional radio waves.\n\nOn the Deep Web, these are known as 'Direct Broadcast Servers.' They don't have websites; they simply serve as an IP address that streams encrypted data 24/7. To a student, these are a fascinating intersection of cold-war spycraft and modern network technology. They remind us that the 'Transparent' internet we use is only the top layer of a much more secretive communication infrastructure used by global state actors.",
        h2_4: 'The Mandele Effect and Digital Gaslighting',
        p4: "The Mandela Effect is the phenomenon where a large group of people remembers an event or detail differently than how it is recorded in history. On the internet, this has led to theories about 'Alternative Timelines' or 'Universal Glitches.' However, in the AI age, there is a more technical explanation: Digital Gaslighting. Because information online can be changed instantly and across multiple platforms, our collective memory can be manipulated by those who control the archives.\n\nIn 2026, the rise of 'Deepfake' text and AI-generated 'historical' images has made it harder than ever to trust the digital record. If we all remember a celebrity saying something, but the internet's archives show they never did, who is right? This raises profound questions about the 'Truth' in a world where history is stored on editable servers. For any student, maintaining a healthy skepticism and cross-checking digital archives against physical books is becoming a vital cognitive skill for the 21st century.",
        faq1_q: "Is Cicada 3301 still active?",
        faq1_a: "There hasn't been a verified Cicada 3301 puzzle in several years, though many 'copycat' puzzles appear regularly. The original group has either achieved their goal or simply gone dormant.",
        faq2_q: "Are ARGs dangerous?",
        faq2_a: "Mostly no, they are a form of collaborative storytelling. However, some can cross a line into 'Digital Cults' or be used to spread misinformation, so it is always important to maintain clear boundaries between 'The Game' and real-life consequences."
    },
    {
        slug: 'why-information-changes-online',
        title: 'Why Information Changes Online Without Notice',
        meta: 'Discover the "Fluidity of Truth" on the web and how dynamic content, CMS updates, and AI-driven revisions change what you see.',
        intro: "In the world of physical books, once a sentence is printed, it's permanent. But on the web, information is 'Liquid.' A news article can be updated, a statistic can be revised, and a quote can be removed in seconds without any notification to the reader. This guide explores the technology and the ethics of the 'Changable Web' and how it affects our perception of truth in 2026.",
        h2_1: 'Progressive Updates and Recursive News',
        p1: "In the modern 24-hour news cycle, articles are often published in a 'Seed' state and updated as more information becomes available. This is known as 'Progressive Journalism.' While this allows for faster reporting, it often leaves the first readers with a completely different understanding of an event than those who read the article an hour later. If the publisher doesn't use clear 'Update' tags, the original context is effectively wiped away.\n\nIn 2026, many students struggle with 'Reference Drifting,' where a link they used for a research paper now says something completely different than what they quoted. This makes the 'Date Accessed' field in academic citations more important than ever. It's a reminder that on the web, a URL is not a stable document; it's a dynamic conversation that is constantly being edited in real-time.",
        h2_2: 'AI-Driven Content Personalization',
        p2: "One of the most subtle ways information changes is through 'Personalization.' Algorithms from Google, Meta, and news aggregators now tailor the content you see based on your search history, location, and demographic profile. This means that two students searching for the same topic might see pages with slightly different information or significantly different perspectives without ever realizing they are being shown a 'Personalized Version' of the truth.\n\nThis 'Filter Bubble' effect is a major challenge for information literacy. If the internet's information is being tuned to please your existing biases, your ability to learn new, challenging perspectives is diminished. For a student, the best way to combat this is to use 'Incognito' searches or 'Clean' browsers to see the non-personalized, 'Raw' web. Understanding the difference between 'The Web' and 'Your Web' is a crucial distinction in the AI era.",
        h2_3: 'Silent Corrections and Digital Revisionism',
        p3: "Silent corrections are changes made to a web page's content that are not acknowledged by an edit note or a timestamp update. This is frequently used for correcting typos, but it can also be used to remove embarrassing errors or change a company's past promises. Unlike a printed newspaper, which would have to issue a formal 'Correction' in the next issue, a web editor can simply change the text and act as if it was always that way.\n\nThis lack of a 'Transparent Edit History' is a major issue for digital accountability. It makes it difficult to track how an organization's stance on an issue has evolved over time. For students, this highlights the value of using archive tools (like the Wayback Machine) to compare different historical versions of the same URL. This 'Digital Forensic Comparison' is the only way to see what an entity was actually saying before they 'Refined' their digital footprint.",
        h2_4: 'CMS Automation and Dynamic Formatting',
        p4: "In 2026, many websites are managed by complex Content Management Systems (CMS) that automatically reformat or prune older content based on current design trends or performance needs. Sometimes, an old article isn't 'Deleted' or 'Edited' by a human; it is simply re-rendered by a new automated script that might accidentally lose entire paragraphs or break image links. This 'Technical Decay' results in a web that is constantly being scrambled by the very software used to manage it.\n\nFor a student in computer science, this is a lesson in 'Long-Term Content Stability.' When designing systems, it's vital to ensure that data integrity is maintained even as the presentation layer changes. The fluid nature of the web is both its greatest strength (instant updates) and its greatest weakness (unstable history). As a user, understanding these mechanisms allows you to navigate the 'Liquid Web' with a more critical and informed perspective.",
        faq1_q: "How can I see what a page looked like yesterday?",
        faq1_a: "If the page was cached by a search engine, you can often find a 'Cache' button in the search results. For longer-term changes, use the Wayback Machine to find snapshots from different dates.",
        faq2_q: "Is personalization always bad?",
        faq2_a: "No. Personalization can help you find relevant local information (like weather or nearby jobs) much faster. It only becomes a problem when it starts filtering your access to different viewpoints or factual information."
    }
];

const allFullTopics = [...topics];

allFullTopics.forEach(topic => {
    const filename = topic.slug + '.html';
    const filePath = path.join(BLOG_DIR, filename);

    let html = templateContent;

    html = html.replace(/<title>.*?<\/title>/, '<title>' + topic.title + ' – Student Tech Project Hub</title>');
    html = html.replace(/<meta name="description" content=".*?" \/>/, '<meta name="description" content="' + topic.meta + '" />');
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, '<link rel="canonical" href="https://studenttechprojects.in/blog/internet-mysteries/' + filename + '" />');

    html = html.replace(/<h1 id="article-title">.*?<\/h1>/, '<h1 id="article-title">' + topic.title + '</h1>');
    html = html.replace(/<time datetime=".*?">.*?<\/time>/, '<time datetime="2026-03-24">2026-03-24</time>');

    const body = `
            <div class="intro-box">
              ${topic.intro}
            </div>

            <h2 id="section-1">${topic.h2_1}</h2>
            ${topic.p1.split('\n\n').map(p => `<p>${p}</p>`).join('\n')}

            <h2 id="section-2">${topic.h2_2}</h2>
            ${topic.p2.split('\n\n').map(p => `<p>${p}</p>`).join('\n')}

            <h2 id="section-3">${topic.h2_3}</h2>
            ${topic.p3.split('\n\n').map(p => `<p>${p}</p>`).join('\n')}

            <blockquote style="margin: 2rem 0; padding: 1.5rem; background: var(--color-primary-light); border-left: 5px solid var(--color-primary); border-radius: var(--radius-md); font-style: italic; color: var(--color-primary-dark);">
              "The web is not a static object; it is a living organism of information that requires constant scrutiny and preservation."
            </blockquote>

            <h2 id="section-4">${topic.h2_4}</h2>
            ${topic.p4.split('\n\n').map(p => `<p>${p}</p>`).join('\n')}

            <h2>Conclusion</h2>
            <p>Navigating the complex landscape of digital history and search engines in 2026 requires more than just technical skill; it requires a critical mindset. By understanding the reasons why information disappears, changes, or becomes unfindable, you can move beyond being a passive user and become an active researcher who knows how to find the 'Hidden Truths' of the web. Keep exploring the digital past to better understand the digital future.</p>

            <section class="faq-section" id="faq" aria-labelledby="faq-heading">
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <div class="faq-item">
                <button class="faq-question" aria-expanded="false">
                  ${topic.faq1_q}
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                  ${topic.faq1_a}
                </div>
              </div>
              <div class="faq-item">
                <button class="faq-question" aria-expanded="false">
                  ${topic.faq2_q}
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                  ${topic.faq2_a}
                </div>
              </div>
            </section>
    `;

    const startTag = '<div class="article-body">';
    const endTag = '</div>\n        </article>';
    
    const startIndex = html.indexOf(startTag);
    const endIndex = html.indexOf(endTag);

    if (startIndex !== -1 && endIndex !== -1) {
        html = html.substring(0, startIndex + startTag.length) + body + html.substring(endIndex);
    }

    fs.writeFileSync(filePath, html);
    console.log('Regenerated: ' + filename);
});
