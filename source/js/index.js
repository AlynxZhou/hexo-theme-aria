"use strict";
(function ($) {
  $(document).ready(function () {
    // To top button.
    $("#back-to-top").on("click", function () {
      $("body, html").animate({ "scrollTop": 0 }, 600);
    });

    $("#reward-button").on("click", function () {
      $("#qr").slideToggle();
    });

    $("#nav-toggle").on("click", function () {
      $("#menu").slideToggle();
    });

    // Bootstrap toc scrollspy needs such classes.
    $(".toc").addClass("list-group");
    $(".toc-link").addClass("list-group-item");

    // (40em - 0.6em) * 16px
    // 40 is total size and 0.4 is scroll bar size.
    // jQuery won't calculate scroll bar size. But CSS will.
    var minWidth = Math.round((40 - 0.4) * 16);
    // Auto hide main nav menus in small screen.
    if ($(window).width() < minWidth) {
      $("#menu").hide();
    }
    var windowWidth = $(window).width();
    // Show menu again when window becomes bigger.
    $(window).resize(function () {
      if ($(window).width() > minWidth) {
        $("#menu").show();
      } else {
        // Android chrome fires resize when scroll down.
        // Because it hides address bar to enlarge window height.
        // To avoid it, check width.
        if ($(window).width() !== windowWidth) {
          $("#menu").hide();
          windowWidth = $(window).width();
        }
      }
    });

    $(".content").each(function (i) {
      $(this).find("img").each(function () {
        // if (this.alt && !(!!$.prototype.justifiedGallery && $(this).parent(".justified-gallery").length)) {
        if (this.title) {
          $(this).after("<span class=\"caption\">" + this.title + "</span>");
        }
        // If img is already a link, ignore it.
        if ($(this).parent().prop("tagName") !== "A") {
          $(this).wrap("<a href=\"" + this.src + "\" title=\"" + this.alt + "\" class=\"gallery-item\"></a>");
        } else {
          $(this).parent().addClass("img-link");
        }
      });
    });
    if (typeof lightGallery != "undefined") {
      var options = {
        selector: ".gallery-item",
      };
      $(".content").each(function (i, entry) {
        lightGallery(entry, options);
      });
      // lightGallery($(".article-gallery")[0], options);
    }
    // if (!!$.prototype.justifiedGallery) {  // if justifiedGallery method is defined
    //   var options = {
    //     rowHeight: 140,
    //     margins: 4,
    //     lastRow: "justify"
    //   };
    //   $(".justified-gallery").justifiedGallery(options);
    // }

    // Hexo-util generates <figure> tag with `highlight` class, but hljs uses `hljs` class.
    $(".highlight").each(function (i) {
      $(this).addClass("hljs");
    });
  });
})(jQuery);
