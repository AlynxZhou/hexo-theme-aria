"use strict";
(function ($) {
  $(document).ready(function () {
    var DELAY_STEP = 300;
    var animationOptions = {
      "opacity": 1,
      "top": 0
    };
    function animateMain() {
      var dfd = $.Deferred();
      var els = $(".animate");
      var length = els.length;

      els.each(function (index, el) {
        $(el).delay(index * DELAY_STEP).addClass("active");
        // $(el).delay(index * DELAY_STEP).animate(animationOptions);
        // $(el).delay(index * DELAY_STEP).css("transform", "rotateX(360deg)");
        (length - 1 === index) && dfd.resolve();
      });
      return dfd.promise();
    }
    animateMain();
  });
})(jQuery);
