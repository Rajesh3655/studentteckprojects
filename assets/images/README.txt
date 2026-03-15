This file is a placeholder to ensure the assets/images/ directory is tracked by version control.

HOW TO USE THIS FOLDER:
- Place all article images here as: assets/images/article-name.jpg (or .png, .webp)
- Recommended image sizes:
  • Featured images (article header): 1200×630px (OG image too)
  • Category images: 800×450px
  • Inline images: 800×500px max
- Naming convention: use the article slug, e.g., ai-agent-architecture-featured.jpg
- WebP format recommended for best performance

REFERENCING IMAGES IN ARTICLES:
From /blog/ai-technology/article.html:
  <img src="/assets/images/your-image.jpg" alt="Descriptive alt text" width="800" height="450" loading="lazy" />

From /categories/ or root:
  <img src="/assets/images/your-image.jpg" alt="..." />

ALWAYS include:
  - A descriptive alt attribute (important for SEO and accessibility)
  - width and height attributes (prevents layout shift)
  - loading="lazy" for images below the fold
