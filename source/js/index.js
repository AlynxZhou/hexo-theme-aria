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

    // (40em - 0.6em) * 16px
    // 40 is total size and 0.4 is scroll bar size.
    // jQuery won't calculate scroll bar size. But CSS will.
    var minWidth = Math.round((40 - 0.4) * 16);
    // Auto hide main nav menus in small screen.
    if ($(window).width() <= minWidth) {
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

    if (typeof lightGallery != "undefined") {
      var options = {
        selector: ".gallery-item",
      };
      $(".content").each(function (i, entry) {
        lightGallery(entry, options);
      });
    }
  });
})(jQuery);
