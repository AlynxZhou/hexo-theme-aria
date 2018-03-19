"use strict";
(function ($) {
  $(document).ready(function () {
    // To top button
    $("#back-to-top").on("click", function () {
      $("body, html").animate({ scrollTop: 0 }, 600);
    });

    // Nav bar toggle
    $("#nav-toggle").on("click", function () {
      $("#menu").slideToggle();
    });

    // Sidebar expend
    $("#sidebar-toggle").click(function () {
      if ($("#sidebar").hasClass("fold")) {
        $("#sidebar").removeClass("fold");
        $("#sidebar-container").slideDown("fast", function () {
          $("#sidebar").animate({ "flex-basis": "20%" }, "fast");
        });
        $("#sidebar-toggle").empty().append("<i class=\"fas fa-angle-double-up\"></i>")
      } else {
        $("#sidebar").addClass("fold");
        $("#sidebar").animate({ "flex-basis": "1%" }, "fast", function () {
          $("#sidebar-container").slideUp("fast");
        });
        $("#sidebar-toggle").empty().append("<i class=\"fas fa-angle-double-down\"></i>")
      }
    });

    // // Caption
    // $('.article-entry').each(function(i) {
    //   $(this).find('img').each(function() {
    //     if (this.alt && !(!!$.prototype.justifiedGallery && $(this).parent('.justified-gallery').length)) {
    //       $(this).after('<span class="caption">' + this.alt + '</span>');
    //     }
  	//
    //     // 对于已经包含在链接内的图片不适用lightGallery
    //     if ($(this).parent().prop("tagName") !== 'A') {
    //       $(this).wrap('<a href="' + this.src + '" title="' + this.alt + '" class="gallery-item"></a>');
    //     }
    //   });
  	//
    // });
    // if (typeof lightGallery != 'undefined') {
    //   var options = {
    //     selector: '.gallery-item',
    //   };
    //   $('.article-entry').each(function(i, entry) {
    //     lightGallery(entry, options);
    //   });
    //   lightGallery($('.article-gallery')[0], options);
    // }
    // if (!!$.prototype.justifiedGallery) {  // if justifiedGallery method is defined
    //   var options = {
    //     rowHeight: 140,
    //     margins: 4,
    //     lastRow: 'justify'
    //   };
    //   $('.justified-gallery').justifiedGallery(options);
    // }

  });
})(jQuery);
