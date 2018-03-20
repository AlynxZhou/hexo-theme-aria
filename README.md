hexo-theme-aria
===============

![ARIA Screenshot](ARIA_Demo_Screenshot.png)

Live Demo: [喵's StackHarbor](https://sh.alynx.xyz/)

Feature:
  - Responsive double column layout with css animation
  - Comment system (currently only supprt [hypercomments](https://www.hypercomments.com/).
  - Hexo local search support (needs to install `hexo-generator-search`).
  - Multi-languages support (currently zh_CN and en, PR welcome).

Usage:
  1. Run `npm install --save hexo-renderer-nunjucks`.
  2. `git clone https://github.com/AlynxZhou/hexo-theme-aria.git themes/aria`.
  3. Change your Hexo site config.
  4. If you want comment in one page, add `comment: true` to the page's source file. If you want Hexo add it automatically when creating a new page, add it to Hexo markdown templates in `scaffolds/` folder.

TODO:
  - More function
  - Image display
  - Sticky toc
  - Docs
