"use strict";
hexo.extend.filter.register("after_render:html", function (str) {
  return (str
  // Hexo-util generates <figure> tag with `highlight` class, but hljs uses `hljs` class.
  .replace(/<figure class="highlight/g, "<figure class=\"hljs highlight")
  // Bootstrap toc scrollspy needs such classes.
  .replace(/<ol class="toc/g, "<ol class=\"list-group toc")
  .replace(/<a class="toc-link/g, "<a class=\"list-group-item toc-link")
  // Add class for image link.
  .replace(/<a(?!\s+class="gallery-item")(.+?><img.+?>)/g, "<a class=\"img-link\"$1")
  // Add class and caption for lightGallery images.
  .replace(/(?<!<a.+?>)<img\s+src="(.+?)"\s+title="(.+?)".*?>/g, "<a class=\"gallery-item\" href=\"$1\" title=\"$2\">$&</a><span class=\"caption\">$2</span>"));
});
