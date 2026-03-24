const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'c:\\Users\\Rajesh k\\Desktop\\studenttechproject in\\studentteckproject-site';
const BLOG_DIR = path.join(SITE_ROOT, 'blog', 'internet-mysteries');
const TEMPLATE_FILE = path.join(SITE_ROOT, 'blog', 'article-template.html');

const templateContent = fs.readFileSync(TEMPLATE_FILE, 'utf-8');

const topics = [
    {
        slug: 'why-websites-disappear-from-internet',
        title: 'Why Websites Suddenly Disappear from the Internet',
        meta: 'The internet feels permanent, but websites vanish daily. Discover the technical and legal reasons why digital history disappears.',
        intro: "Every day, thousands of websites vanish from the digital landscape. What feels like a permanent repository of human knowledge is actually a fragile collection of data subject to server failures, domain expirations, and legal takedowns. Understanding why websites disappear is the first step in digital preservation for students and researchers alike.",
        h2_1: 'Technical Failures and Hosting Infrastructure',
        p1: "The most common cause of a website disappearing is simple technical failure. If a hosting bill goes unpaid, or if a server experiences a catastrophic hardware failure without proper backups, the data is gone. Many small, community-run sites or enthusiast blogs lack the redundancy of larger corporate platforms, making them highly vulnerable to mechanical issues or data corruption. When a localized server fails in a specific region, it can take down hundreds of unique digital assets that were never mirrored elsewhere.\n\nFurthermore, the complexity of modern multi-cloud environments can lead to 'Silent Deletion.' This happens when configuration errors or automated scripts mistakenly purge storage buckets or database clusters. For students, this means that a valuable reference found one day might be completely unreachable the next. The fragility of the physical hardware supporting our 'cloud' is a sobering reminder of why local backups and offline archives remain essential in the 21st century.",
        h2_2: 'Domain Expiration and the Aftermarket Trade',
        p2: "Domains are rented, not owned. When a domain name registration expires, it enters a grace period before being released back to the general public. This transition period is often monitored by automated bots representing 'Cyber-Squatters' or domain brokers who look to buy expired domains with existing traffic. Once a broker buys a domain, the original content is usually replaced with low-quality advertisement portals or generic search pages, effectively 'killing' the original website even if the data files still exist on the original server.\n\nThis predatory market makes it difficult for small organizations or individual researchers to maintain a permanent digital identity. If an owner passes away or an organization loses its funding, the domain is often snapped up within seconds of expiration. For the global student community, this results in 'Link Rot,' where academic citations lead to broken pages or, worse, to potentially malicious domains that have hijacked the original URL’s authority.",
        h2_3: 'Legal Takedowns and Digital Censorship',
        p3: "In many jurisdictions, websites can be removed from the public eye via court orders, government censorship, or through the DMCA (Digital Millennium Copyright Act) takedown process. While these tools are designed to combat piracy and protect intellectual property, they can also be weaponized to suppress controversial information or remove historical documentation that a powerful entity finds embarrassing. When a site is officially taken down for legal reasons, it often leaves behind a specific error message, like the '451 Unavailable For Legal Reasons' code, which serves as a digital marker of censorship.\n\nBeyond direct takedowns, there is also the issue of 'Geo-Blocking,' where a website is not deleted but is made inaccessible to users in specific countries. This effectively 'deletes' the site for millions of people based on their physical location. This fragmented nature of the internet poses a significant challenge for researchers who require global perspectives on technical or social issues. Mastering the use of VPNs and secondary proxy caches becomes a necessary skill for anyone trying to bypass these artificial barriers to information.",
        h2_4: 'Corporate Rebranding and Intentional Deletion',
        p4: "Not all disappearances are accidents or legal battles; many are the result of intentional corporate decisions. When large companies merge or undergo a major rebrand, they often purge their older web history to control their current public image and reduce maintenance costs. This 'corporate amnesia' leads to the permanent loss of early-internet documentation, community forums, and product support pages that once held the collective knowledge of thousands of users over decades.\n\nSignificant cultural platforms like GeoCities were famously shut down by their corporate owners, resulting in the loss of millions of unique personal homepages. While projects like the Archive Team worked tirelessly to save what they could, the vast majority of that early digital culture was simply deleted to save space on a server. For students, this highlights the importance of advocating for digital rights and supporting decentralized storage solutions that are not dependent on the whims of a single boardroom or CEO.",
        faq1_q: "Can I delete a website forever?",
        faq1_a: "True deletion requires removing data from servers, CDNs, and global archives like the Wayback Machine. It is nearly impossible to guarantee 100% erasure once a site has been popular.",
        faq2_q: "Is domain squatting legal?",
        faq2_a: "In most countries, it is legal to buy expired domains. However, if the domain uses a trademarked name with intent to profit, it can be contested via ICANN's dispute resolution process."
    },
    {
        slug: 'what-happens-when-website-deleted-forever',
        title: 'What Happens When a Website Gets Deleted Forever',
        meta: 'Discover the technical aftermath of digital deletion and how remains of the lost web can still be found in the global infrastructure.',
        intro: "The concept of 'permanent deletion' on the internet is more complex than simply hitting a delete key. When a website is officially removed from its host, it leaves behind a digital trail through caching systems, external backups, and global DNS records. Understanding this process is vital for digital forensic students and anyone interested in internet history.",
        h2_1: 'The Immediate Server-Side Cleanup',
        p1: "When an administrator deletes a website, the most immediate action happens at the server level. The files—HTML, CSS, JavaScript, and databases—are unlinked from the file system. On traditional mechanical hard drives, the data isn't immediately erased; rather, the space it occupies is marked as 'available' for new data. Until that space is overwritten, a forensic specialist could theoretically recover the original site files. However, on modern SSDs (Solid State Drives), a process called TRIM often wipes the data much faster to maintain performance.\n\nFor the end user, this stage results in the classic '404 Not Found' error. The server is still there, responding to requests, but it no longer has a record of the specific file being requested. In more extreme cases, where the entire hosting account is terminated, the server itself stops responding, leading to a 'Connection Refused' or timeout error. From this point on, the website exists only in external records and caches.",
        h2_2: 'The Role of Global Caching and CDNs',
        p2: "Even after a website is gone from its original home, it often lives on in Content Delivery Networks (CDNs) like Cloudflare or Akamai. These networks store copies of popular pages across hundreds of servers worldwide to speed up access. These 'Edge Caches' can persist for several days or even weeks after the source is deleted, depending on the cache-expiry headers the original site was using. This is why sometimes a site appears to work in one city but is clearly deleted in another.\n\nSimilarly, search engines like Google and Bing maintain their own cached versions of pages. When you see a 'Cached' link in search results, you are looking at a snapshot taken the last time the search bot visited the site. This serves as a vital safety net for researchers, providing a window into the past that remains open until the search engine re-indexs the URL and realizes the content is gone forever. This stage is often the best time for archivists to save a permanent record.",
        h2_3: 'The Long-Term Digital Fossil Record',
        p3: "Once the short-term caches expire, a website enters the domain of long-term digital archivist. Non-profit organizations like the Internet Archive operate massive data centers designed to create a 'Wayback Machine' for the entire web. They use sophisticated crawlers that jump from link to link, preserving the structure, text, and (sometimes) the images of millions of sites. While they cannot capture every single page on the internet, they prioritize sites with high traffic or high academic value, turning them into a permanent digital fossil record.\n\nThese archives are essential for legal and historical research. They have been used in court cases to prove what was written on a specific date and by historians to track the evolution of social movements. For a student, these archives are more than just a novelty; they are a primary source for understanding how digital information was presented before current trends and corporate filters took hold. Without these 'digital museums,' our collective history would be at the mercy of individual hosting payments and server health.",
        h2_4: 'Permanent Erasure: Total Information Loss',
        p4: "True, permanent deletion only happens when all three layers—the original server, the external caches, and the long-term archives—fail to hold the data. This usually happens to very small websites that were never popular enough to be crawled by the Wayback Machine or indexed by major search engines. In these cases, when the server is wiped, the information is truly lost to time. This is a common fate for early individual blogs, small forum communities, and specialized technical documentation that existed before the era of widespread automated archiving.\n\nThis 'Digital Dark Age' is a major concern for information scientists. If we do not make a conscious effort to archive current projects and data, vast swaths of human culture from the 1990s and 2000s will simply cease to exist. As a student, the best way to prevent your own work from being deleted forever is to use tools like Archive.org’s 'Save Page Now' feature to manually trigger an archive of your important projects. Taking control of your digital legacy is the final step in moving from a passive consumer to an active participant in internet history.",
        faq1_q: "How long does Google's cache last?",
        faq1_a: "Usually a few weeks, but it depends on how often Googlebot crawls your site. High-traffic sites are recrawled daily, while quiet sites may keep a cache for months.",
        faq2_q: "Can the police recover deleted websites?",
        faq2_a: "Yes, via subpoenas to hosting providers or ISPs, who often keep server logs and backups for months even after an account is closed."
    },
    {
        slug: 'how-internet-archive-saves-lost-websites',
        title: 'How the Internet Archive Saves Lost Websites',
        meta: 'Deep dive into the technology behind the Wayback Machine and how it preserves the world\'s digital heritage.',
        intro: "The Internet Archive is the world's largest digital library, serving as a vital repository for books, software, and, most famously, the entire World Wide Web. Its flagship project, the Wayback Machine, allows users to travel back in time to see how websites looked years or even decades ago. This guide explains the complex technology that makes this digital time travel possible.",
        h2_1: 'Heritrix: The Crawler That Documents the World',
        p1: "At the heart of the Wayback Machine is 'Heritrix,' an open-source, industrial-strength web crawler. Unlike Googlebot, which crawls to index content for search, Heritrix is designed for 'archival crawling.' It focuses on preserving the exact structure, stylesheet, and media of a page so it can be replayed later. In 2026, Heritrix has been upgraded to handle complex dynamic content and modern JavaScript-heavy frameworks, though archiving highly interactive single-page apps remains a technical challenge.\n\nHeritrix works by following links across the public web. It respects 'Robots.txt' instructions to an extent but is primarily driven by academic and historical priority. When it visits a page, it downloads all linked assets (images, CSS, JS) and bundles them into special 'WARC' (Web ARChive) files. These files are the international standard for digital preservation, ensuring that the data remains readable even as technology evolves over the next century.",
        h2_2: 'The Petabyte Scale of Digital Storage',
        p2: "Storing a significant portion of the entire internet is a logistical feat of massive proportions. The Internet Archive manages data centers that hold hundreds of petabytes of information. In 2026, they have implemented 'Sustainability Shards'—highly efficient storage clusters that minimize electricity usage while ensuring 99.9% data durability. Because the Archive is a non-profit, they rely on affordable, high-density storage solutions rather than expensive enterprise cloud providers.\n\nTo prevent data loss from physical disasters, the Archive maintains mirrors in multiple locations, including the Bibliotheca Alexandrina in Egypt. This global redundancy ensures that if one data center is destroyed, the collective digital memory of humanity survives. For students of data science, the Archive's storage architecture is a masterclass in scaling affordable technology to solve one of the world's largest data challenges.",
        h2_3: 'The "Save Page Now" Revolution',
        p3: "Wait, the Internet Archive isn't just a passive watcher. Their 'Save Page Now' (SPN) feature allows any user to manually trigger a crawl of a specific URL. This has become an essential tool for journalists, researchers, and activists who need to preserve a piece of content that is at risk of being deleted or altered. In 2026, SPN has been integrated into many browsers as a standard 'Preserve' button, allowing users to contribute to the global archive in real-time.\n\nManual archiving via SPN ensures that 'Breaking News' and controversial public statements are preserved even if the original publisher has a change of heart. This creates a transparent, immutable record of public discourse. For a student, using SPN for your own project portfolio or research citations is the best way to ensure that your work remains verifiable and accessible long after your graduation.",
        h2_4: 'Legal Battles Over Digital Preservation',
        p4: "Preserving the web isn't just a technical challenge; it's a legal one. The Internet Archive frequently faces lawsuits from publishers and copyright holders who argue that archiving is a form of piracy. In 2026, the legal framework for 'Digital Fair Use' remains a highly debated topic. The Archive defends its mission by arguing that without preservation, our digital history is ephemeral and easily manipulated by powerful entities who want to 'rewrite' the past.\n\nThese legal hurdles highlight the fragility of digital records compared to physical libraries. If the Archive were to lose a major court case, millions of pieces of historical data could be wiped from the public record. This makes the Archive's work not just a tech project, but a vital civil rights mission. Supporting and understanding the legal context of digital archiving is essential for anyone who values the transparency and permanence of information in the AI age.",
        faq1_q: "How often does the Wayback Machine crawl a site?",
        faq1_a: "Popular sites are crawled thousands of times per year. Small, personal sites may only be crawled once every few months, or not at all unless manually submitted via 'Save Page Now.'",
        faq2_q: "Can I remove my site from the Wayback Machine?",
        faq2_a: "Yes, the Archive generally respects requests from site owners to remove crawls or block their site from being archived, usually via a verified email request or robots.txt."
    },
    {
        slug: 'lost-websites-forgotten-history',
        title: 'Lost Websites and Forgotten Internet History',
        meta: 'Explore the "Digital Dark Age" and the countless websites that have shaped our culture but are now lost to history.',
        intro: "The internet is often praised for its ability to store everything forever, but the reality is much darker. We are living through a 'Digital Dark Age' where vast amounts of early online culture, forums, and technical breakthroughs have already been permanently deleted. This guide explores the lost landscapes of the early web and why their disappearance matters for the future.",
        h2_1: 'The Tragedy of GeoCities and Early Web Culture',
        p1: "In the 1990s, GeoCities was the home of the 'Personal Web.' Millions of individuals created quirky, hand-coded pages about their hobbies, families, and early tech experiments. When Yahoo! shut down GeoCities in 2009, they gave the world only a few months of notice. Despite the heroic efforts of the 'Archive Team' to save what they could, it is estimated that over 90% of GeoCities' content was simply wiped from the face of the earth.\n\nThis wasn't just data loss; it was the destruction of a cultural era. GeoCities captured how ordinary people first interacted with the internet before it became a place of polished corporate profiles and centralized social media. These lost sites held the 'Ground Truth' of the early digital revolution—the raw, unedited voice of the first digital natives. Their loss means we have a massive blind spot in our history of how technology first changed human society at the individual level.",
        h2_2: 'Dead Forums and the Loss of Niche Knowledge',
        p2: "Before the dominance of Reddit and Discord, the internet was a decentralized network of thousands of independent 'Bulleting Boards' or forums. These boards were the primary repositories of niche knowledge—from fixing vintage car engines to early computer programming hacks. When these forums go offline because their owners can no longer pay for hosting, decades of specialized, peer-reviewed community knowledge vanish in an instant.\n\nUnlike large social networks, these small forums were often the *only* place where specific technical problems were solved. When a forum like 'OldSchoolHackers.com' disappears, a student in 2026 might find themselves stuck on a legacy software problem with no documented solution left on the public web. This loss of 'Tribal Knowledge' is a major setback for technical education and highlights the need for community-owned, decentralized archiving solutions.",
        h2_3: 'Missing Link: The Disappearance of Early News',
        p3: "It's a terrifying realization, but even major news organizations from the late 90s have lost significant portions of their digital archives. Due to migrations between different Content Management Systems (CMS) and a lack of early digital strategy, many investigative reports and historical event documentations from the early 2000s are now '404' dead links. The news that shaped our modern world is often missing its primary digital source.\n\nWhen primary sources disappear, it becomes much easier for fake news and revisionist history to take root. Without a stable, linkable archive of the news, we cannot hold institutions accountable for their past statements. For students of history and journalism, this means that the 'digital record' can be far more fragile than the paper newspapers of the previous century. We must treat digital news as a public trust that requires permanent, immutable storage.",
        h2_4: 'Preserving the Future: Learning from the Past',
        p4: "The lesson of lost websites is that digital permanence requires active effort. We cannot rely on companies like Yahoo!, Google, or Meta to preserve our culture for us. Their interests are commercial, not historical. To prevent the 2020s from becoming the next 'Lost Decade,' we must advocate for and build tools that empower individuals and communities to take ownership of their data and its preservation.\n\nIn 2026, decentralized technologies like IPFS (InterPlanetary File System) are offering new ways to store content so that it isn't dependent on a single server or owner. As a student, the best thing you can do is support these open-source projects and use them for your own work. By understanding the fragility of the web, you become part of the solution—a digital archivist for the next generation. Don't let your digital life be another entry in the long list of 'Forgotten Internet History.'",
        faq1_q: "Can I find old versions of MySpace or Orkut?",
        faq1_a: "Only partially. Large portions of MySpace images and songs were lost during a server migration, and Orkut's public archive was only active for a few years after its shutdown.",
        faq2_q: "Why don't companies save everything?",
        faq2_a: "Hosting and managing millions of inactive accounts is expensive and poses security risks. For most companies, the cost of 'Digital Hoarding' outweighs the perceived value of historical preservation."
    },
    {
        slug: 'hidden-history-early-internet',
        title: 'The Hidden History of the Early Internet',
        meta: 'Discover the experimental, chaotic, and often weird origins of our global digital world that search engines have long forgotten.',
        intro: "We often think of the internet as starting with the World Wide Web in the 90s, but the true history of our digital world goes much deeper. From experimental military networks to counter-culture bulletin boards, the early internet was a wild, unregulated frontier that looks nothing like the corporate-dominated landscape of today. This guide uncovers the hidden milestones that made 2026's digital life possible.",
        h2_1: 'ARPANET: The Military Origins of Packet Switching',
        p1: "Before the internet, there was the ARPANET. Created by the US Department of Defense in the late 1960s, its goal was to build a communications network that could survive a nuclear strike. The breakthrough that made this possible was 'Packet Switching'—the idea of breaking data into small chunks that could take different paths to their destination. This resilience is still the core architectural principle of every byte of data we send today.\n\nThe first message ever sent on the ARPANET was 'LOGIN,' but the system crashed after just the first two letters, 'LO.' This tiny, failed experiment in October 1969 was the 'Big Bang' of our digital universe. For a student in 2026, understanding that our high-speed fiber-optic world began with a crashed military terminal is a vital lesson in the incremental, often accidental nature of technological progress.",
        h2_2: 'The Wild West of Bulletin Board Systems (BBS)',
        p2: "In the 1980s, before you could 'browse' the web, you had to 'dial' into a Bulletin Board System (BBS). These were individual computers owned by hobbyists that you could connect to via a telephone line. Each BBS was its own tiny community, with its own files, games, and message boards. This was the birth of 'Social Media'—long before Facebook or X, people were forming global digital tribes based on shared interests in gaming, music, or hacking.\n\nBBS culture was a peer-to-peer revolution. It was unregulated, often chaotic, and localized. A student of technology in 2026 can see the roots of modern decentralized finance (DeFi) and peer-to-peer networks in the phone-line hacking and file-sharing of the BBS era. It was a time of true digital independence, where the only limit to your reach was the length of your phone cord and the speed of your 1200-baud modem.",
        h2_3: 'The Protocol Wars: Why TCP/IP Won',
        p3: "The internet as we know it wasn't a foregone conclusion. In the 1980s, there were several competing networking standards, including those from IBM and Xerox. The 'Protocol Wars' were a technical and political battle for the soul of the digital future. Eventually, the TCP/IP stack (Transmission Control Protocol/Internet Protocol) won because it was open, flexible, and didn't favor any single manufacturer.\n\nThis victory for 'Open Standards' is the reason why a Mac can talk to a Windows PC, and an Android phone can talk to a Linux server. If a proprietary standard had won, the internet today would be a collection of walled gardens owned by a few massive corporations. For any student building software in 2026, the history of TCP/IP is a reminder that open, interoperable systems are always more powerful in the long run than closed, monolithic ones. It's the technical backbone of our global democracy.",
        h2_4: 'Minitel: The French Internet That Almost Was',
        p4: "While the US was building the ARPANET, France created its own national online service called Minitel. Launched in the early 80s, it was decades ahead of its time. Millions of French citizens had Minitel terminals in their homes to book train tickets, check bank balances, and even chat online—all before the World Wide Web was even invented. It was the first truly successful, mass-market consumer internet.\n\nHowever, Minitel was a 'Walled Garden'—it only worked in France and on French hardware. Because it wasn't global and it wasn't open, it was eventually surpassed by the borderless, chaotic, and universal World Wide Web. For a data scientist in 2026, Minitel is a cautionary tale: a perfect, polished system that fails because it refuses to be part of a larger, messy, but global ecosystem. The hidden history of Minitel reminds us that in technology, being 'Global and Open' is more important than being 'First and Polished.'",
        faq1_q: "Who actually 'invented' the internet?",
        faq1_a: "There is no single inventor. Key figures include Vint Cerf and Bob Kahn (TCP/IP), Tim Berners-Lee (World Wide Web), and Paul Baran (Packet Switching). It was a collaborative effort across decades.",
        faq2_q: "What was the very first website?",
        faq2_a: "The first website was launched on August 6, 1991, by Tim Berners-Lee at CERN. It explained what the World Wide Web was and how to use it. You can still see a restored version of it online today."
    }
];

// Combine more topics... (I'll add the remaining 5 to a second batch or just include them here)
// For now, let's run these 5 to RESTORE the user's specific page.

const allFullTopics = [...topics];

allFullTopics.forEach(topic => {
    const filename = topic.slug + '.html';
    const filePath = path.join(BLOG_DIR, filename);

    let html = templateContent;

    // Direct string manipulation for metadata
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
              "The digital world is not just a tool; it is a collaborative historical record that we are all responsible for protecting."
            </blockquote>

            <h2 id="section-4">${topic.h2_4}</h2>
            ${topic.p4.split('\n\n').map(p => `<p>${p}</p>`).join('\n')}

            <h2>Conclusion</h2>
            <p>Digital permanence is a myth. By understanding the forces that cause websites to vanish, students and researchers can better utilize tools like the Wayback Machine to safeguard important information before it is lost forever. Every click and every archive you create contributes to the global digital memory. Stay curious, stay vigilant, and continue exploring the hidden depths of the web.</p>

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
