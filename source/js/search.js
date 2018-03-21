// A local search script with the help of [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
// Copyright (C) 2015
// Joseph Pan <http://github.com/wzpan>
// Shuhao Mao <http://github.com/maoshuhao>
// Edited by MOxFIVE <http://github.com/MOxFIVE>
// Cleaned and bug fixed by AlynxZhou <https://alynx.xyz/>

"use strict";
var searchFunc = function (path, searchID, contentID) {
  $.ajax({
    url: path,
    dataType: "xml",
    success: function (xmlResponse) {
      // get the contents from search data
      var datas = $("entry", xmlResponse).map(function () {
        return {
          title: $("title", this).text(),
          content: $("content",this).text(),
          link: $("link" , this).attr("href")
        };
      }).get();
      var input = document.getElementById(searchID);
      var resultContent = document.getElementById(contentID);
      input.addEventListener("input", function () {
        var str="<ul class=\"search-result-list\">";
        var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
        resultContent.innerHTML = "";
        if (this.value.trim().length <= 0) {
          return;
        }
        // perform local searching
        datas.forEach(function (data) {
          var isMatch = true;
          var dataTitle = data.title.trim().toLowerCase();
          var dataContent = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
          var dataLink = data.link;
          var indexTitle = -1;
          var indexContent = -1;
          var firstOccur = -1;
          // only match artiles with not empty titles and contents
          if (dataTitle != "" && dataContent != "") {
            keywords.forEach(function (keyword, i) {
              indexTitle = dataTitle.indexOf(keyword);
              indexContent = dataContent.indexOf(keyword);
              if(indexTitle < 0 && indexContent < 0) {
                isMatch = false;
              } else {
                if (indexContent < 0) {
                  indexContent = 0;
                }
                if (i == 0) {
                  firstOccur = indexContent;
                }
              }
            });
          }
          // show search results
          if (isMatch) {
            str += "<li><a href=\""+ dataLink +"\" class=\"search-result-title\">"+ "> " + dataTitle +"</a>";
            var content = data.content.trim().replace(/<[^>]+>/g, "");
            if (firstOccur >= 0) {
              // cut out characters
              var start = firstOccur - 6;
              var end = firstOccur + 12;
              if (start < 0) {
                start = 0;
              }
              if (start == 0) {
                end = 10;
              }
              if (end > content.length) {
                end = content.length;
              }
              var matchContent = content.substring(start, end);
              // highlight all keywords
              keywords.forEach(function (keyword) {
                var regS = new RegExp(keyword, "gi");
                matchContent = matchContent.replace(regS, "<strong class=\"search-keyword\">"+keyword+"</strong>");
              })
              str += "<p class=\"search-result-content\">" + matchContent +"...</p>"
            }
          }
        })
        resultContent.innerHTML = str;
      })
    }
  })
}
