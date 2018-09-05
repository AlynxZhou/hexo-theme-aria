"use strict";
/* global hexo */
const fs = require("fs");
const path = require("path");
// In fact, this works after every page rendered, not only post.
hexo.extend.filter.register("after_post_render", (data) => {
  if (hexo.config.post_asset_folder) {
    for (let key of ["excerpt", "more", "content"]) {
      if (data[key] != null) {
        // Replace Markdown asset image src to absolute path.
        data[key] = data[key].replace(/<img src="([^"]+)/g,
                                      (match, src) => {
          if (src.startsWith("https://") || src.startsWith("http://") ||
              src.startsWith("//") || src.startsWith("/") ||
              src.startsWith("data:image") || data["asset_dir"] == null ||
              !fs.existsSync(path.join(data["asset_dir"], src))) {
            return match;
          }
          return `<img src="${path.posix.join(path.posix.sep,
                                              data.path, src)}`;
        })
        // Replace Markdown asset link href to absolute path.
        data[key] = data[key].replace(/<a href="([^"]+)/g,
                                      (match, href) => {
          if (href.startsWith("https://") || href.startsWith("http://") ||
              href.startsWith("//") || href.startsWith("/") ||
              href.startsWith("#") || data["asset_dir"] == null ||
              !fs.existsSync(path.join(data["asset_dir"], href))) {
            return match;
          }
          return `<a href="${path.posix.join(path.posix.sep,
                                             data.path, href)}`;
        })
      }
    }
  }
});
hexo.extend.filter.register("after_render:html", (str, data) => {
  return str
  // Hexo-util generates <figure> tag with `highlight` class,
  // but hljs uses `hljs` class.
  .replace(/<figure class="highlight/g, "<figure class=\"hljs highlight")
  // Bootstrap toc scrollspy needs such classes.
  .replace(/<ol class="toc/g, "<ol class=\"list-group toc")
  .replace(/<a class="toc-link/g, "<a class=\"list-group-item toc-link");
  // Removed: Cannot fit various conditions, use browser DOM operation instead.
  // Add class for image link.
  // .replace(/<a(?!\s+class="gallery-item")(.+?><img.+?>)/g,
  //         "<a class=\"img-link\"$1")
  // Add class and caption for lightGallery images.
  // .replace(/(?<!<a.+?>)<img\s+src="(.+?)".*?>/g,
  //          "<a class=\"gallery-item\" href=\"$1\">$&</a>"));
});
