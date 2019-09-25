"use strict";
(function ($) {
  $(document).ready(function () {
    // To top button.
    $("#back-to-top").on("click", function () {
      $("body, html").animate({"scrollTop": 0}, 600);
    });

    $("#reward-button").on("click", function () {
      if ($("#qr").attr("aria-hidden") === "true") {
        $("#qr").attr("aria-hidden", "false");
      } else {
        $("#qr").attr("aria-hidden", "true");
      }
      $("#qr").slideToggle();
    });

    $("#nav-toggle").on("click", function () {
      if ($("#menu").attr("aria-hidden") === "true") {
        $("#menu").attr("aria-hidden", "false");
      } else {
        $("#menu").attr("aria-hidden", "true");
      }
      $("#menu").slideToggle();
    });

    // (40em - 0.6em) * 16px
    // 40 is total size and 0.4 is scroll bar size.
    // jQuery won't calculate scroll bar size. But CSS will.
    var minWidth = Math.round((40 - 0.4) * 16);
    // Auto hide main nav menus in small screen.
    if ($(window).width() <= minWidth) {
      $("#menu").hide();
      $("#menu").attr("aria-hidden", "true");
      $("#nav-toggle").attr("aria-hidden", "false");
    }
    var windowWidth = $(window).width();
    // Show menu again when window becomes bigger.
    $(window).resize(function () {
      if ($(window).width() > minWidth) {
        $("#menu").show();
        $("#menu").attr("aria-hidden", "false");
        $("#nav-toggle").attr("aria-hidden", "true");
      } else {
        // Android chrome fires resize when scroll down.
        // Because it hides address bar to enlarge window height.
        // To avoid it, check width.
        if ($(window).width() !== windowWidth) {
          $("#menu").hide();
          $("#menu").attr("aria-hidden", "true");
          $("#nav-toggle").attr("aria-hidden", "false");
          windowWidth = $(window).width();
        }
      }
    });

    $(".post img").each(function (i) {
      if ($(this).parent().prop("tagName") !== "A") {
        if (this.title) {
          // Hexo asset_img tag generates title.
          $(this).after("<span class=\"caption\">" + this.title + "</span>");
        }
        $(this).wrap("<a href=\"" + this.src + "\" class=\"gallery-item\"></a>");
      } else {
        // If img is already a link, ignore it.
        $(this).parent().addClass("img-link");
      }
    });
    if (typeof lightGallery != "undefined") {
      $(".post").each(function (i, entry) {
        lightGallery(entry, {"selector": ".gallery-item"});
      });
    }
  });
})(jQuery);
