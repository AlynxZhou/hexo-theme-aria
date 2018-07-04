"use strict";
hexo.extend.filter.register("after_render:html", function (str) {
  return (str
  // Hexo-util generates <figure> tag with `highlight` class, but hljs uses `hljs` class.
  .replace(/<figure class="highlight/g, "<figure class=\"hljs highlight")
  // Bootstrap toc scrollspy needs such classes.
  .replace(/<ol class="toc/g, "<ol class=\"list-group toc")
  .replace(/<a class="toc-link/g, "<a class=\"list-group-item toc-link"));
  // Removed: Cannot fit various conditions, use browser DOM operation instead.
  // Add class for image link.
  // .replace(/<a(?!\s+class="gallery-item")(.+?><img.+?>)/g, "<a class=\"img-link\"$1")
  // Add class and caption for lightGallery images.
  // .replace(/(?<!<a.+?>)<img\s+src="(.+?)".*?>/g, "<a class=\"gallery-item\" href=\"$1\">$&</a>"));
});
