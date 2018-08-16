/*
 * A local search script for [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)
 * CopyLeft (C) 2015-2018
 * Joseph Pan <http://github.com/wzpan>
 * Shuhao Mao <http://github.com/maoshuhao>
 * Edited by MOxFIVE <http://github.com/MOxFIVE>
 * Rewrited by AlynxZhou <https://alynx.xyz/>
 *   Cleaned: Use native JavaScript instead of jQuert. Split functions.
 *   Fixed: Mark all keywords found in content and title.
 *   Optimized: Sort result by the number of keyword found.
 */

"use strict";

var SUBSTRING_OFFSET = 15;
var MAX_KEYWORDS = 30;
var MAX_DISPLAY_SLICES = 5;

// Calculate how many keywords a page contains.
function findKeywords(keywords, prop) {
  for (var i = 0; i < keywords.length; ++i) {
    var indexContent = prop["dataContent"].toLowerCase().indexOf(keywords[i].toLowerCase());
    // Find all keyword indices.
    while (indexContent >= 0) {
      prop["matchedContentKeywords"].push({
        "keyword": prop["dataContent"].substring(indexContent, indexContent + keywords[i].length),
        "index": indexContent
      });
      indexContent = prop["dataContent"].toLowerCase().indexOf(keywords[i].toLowerCase(), indexContent + keywords[i].length);
    }
    var indexTitle = prop["dataTitle"].toLowerCase().indexOf(keywords[i].toLowerCase());
    while (indexTitle >= 0) {
      prop["matchedTitleKeywords"].push({
        "keyword": prop["dataTitle"].substring(indexTitle, indexTitle + keywords[i].length),
        "index": indexTitle
      });
      indexTitle = prop["dataTitle"].toLowerCase().indexOf(keywords[i].toLowerCase(), indexTitle + keywords[i].length);
    }
  }
}

function buildSortedMatchedDataProps(datas, keywords) {
  var matchedDataProps = [];
  for (var i = 0; i < datas.length; ++i) {
    var prop = {
      "matchedContentKeywords": [],
      "matchedTitleKeywords": [],
      "dataTitle": datas[i]["title"].trim(),
      "dataContent": datas[i]["content"].trim().replace(/<[^>]+>/g, ""),
      "dataURL": datas[i]["url"]
    };
    // Only match articles with valid titles and contents.
    if (prop["dataTitle"].length + prop["dataContent"].length > 0) {
      findKeywords(keywords, prop);
    }
    if (prop["matchedContentKeywords"].length + prop["matchedTitleKeywords"].length > 0) {
      matchedDataProps.push(prop);
    }
  }
  // The more keywords a page contains, the higher this page ranks.
  matchedDataProps.sort(function (a, b) {
    return -((a["matchedContentKeywords"].length + a["matchedTitleKeywords"].length) - (b["matchedContentKeywords"].length + b["matchedTitleKeywords"].length));
  });
  return matchedDataProps;
}

function buildSortedSliceArray(prop) {
  var sliceArray = [];
  // Sorting slice array is hard so sort index array instead.
  prop["matchedContentKeywords"].sort(function (a, b) {
    return a["index"] - b["index"]
  });
  // Get content slice position.
  for (var i = 0; i < prop["matchedContentKeywords"].length && i < MAX_DISPLAY_SLICES; ++i) {
    var start = prop["matchedContentKeywords"][i]["index"] - SUBSTRING_OFFSET;
    var end = prop["matchedContentKeywords"][i]["index"] + prop["matchedContentKeywords"][i]["keyword"].length + SUBSTRING_OFFSET;
    if (start < 0) {
      start = 0;
    }
    if (start === 0) {
      end = SUBSTRING_OFFSET + prop["matchedContentKeywords"][i]["keyword"].length + SUBSTRING_OFFSET;
    }
    if (end > prop["dataContent"].length) {
      end = prop["dataContent"].length;
    }
    sliceArray.push({ "start": start, "end": end });
  }
  return sliceArray;
}

function mergeSliceArray(sliceArray) {
  var mergedSliceArray = [];
  if (sliceArray.length === 0) {
    return mergedSliceArray;
  }
  mergedSliceArray.push(sliceArray[0])
  for (var i = 1; i < sliceArray.length; ++i) {
    // If two slice have common part, merge them.
    if (mergedSliceArray[mergedSliceArray.length - 1]["end"] >= sliceArray[i]["start"]) {
      if (sliceArray[i]["end"] > mergedSliceArray[mergedSliceArray.length - 1]["end"]) {
        mergedSliceArray[mergedSliceArray.length - 1]["end"] = sliceArray[i]["end"];
      }
    } else {
      mergedSliceArray.push(sliceArray[i]);
    }
  }
  return mergedSliceArray;
}

function buildHighlightedTitle(prop) {
  var matchedTitle = prop["dataTitle"];
  var reArray = [];
  for (var i = 0; i < prop["matchedTitleKeywords"].length; ++i) {
    if (prop["matchedTitleKeywords"][i]["keyword"].length > 0) {
      reArray.push(prop["matchedTitleKeywords"][i]["keyword"])
    }
  }
  // Replace all in one time to prevent it from matching <strong> tag.
  var re = new RegExp(reArray.join("|"), "gi");
  // `$&` is the matched part of RegExp.
  matchedTitle = matchedTitle.replace(re, "<strong class=\"search-keyword\">$&</strong>");
  return matchedTitle;
}

function buildHighlightedContent(prop, mergedSliceArray) {
  var matchedContentArray = [];
  for (var i = 0; i < mergedSliceArray.length; ++i) {
    matchedContentArray.push(prop["dataContent"].substring(mergedSliceArray[i]["start"], mergedSliceArray[i]["end"]));
  }
  var reArray = [];
  for (var i = 0; i < prop["matchedContentKeywords"].length; ++i) {
    if (prop["matchedContentKeywords"][i]["keyword"].length > 0) {
      reArray.push(prop["matchedContentKeywords"][i]["keyword"]);
    }
  }
  var re = new RegExp(reArray.join("|"), "gi");
  for (var i = 0; i < matchedContentArray.length; i++) {
    matchedContentArray[i] = matchedContentArray[i].replace(re, "<strong class=\"search-keyword\">$&</strong>");
  }
  return matchedContentArray.join("...");
}

function onInput(input, resultContent, datas) {
  resultContent.innerHTML = "";
  if (input.value.trim().length <= 0) {
    return;
  }
  var keywords = input.value.trim().split(/[\s-\+]+/);
  var li = [];
  if (keywords.length > MAX_KEYWORDS) {
    keywords = keywords.slice(0, MAX_KEYWORDS);
    // li.push("<span>Keywords more than ");
    // li.push(MAX_KEYWORDS);
    // li.push(" are sliced.</span>");
  }
  var matchedDataProps = buildSortedMatchedDataProps(datas, keywords);
  if (matchedDataProps.length === 0) {
    return;
  }
  li.push("<ul class=\"search-result-list\">");
  for (var i = 0; i < matchedDataProps.length; ++i) {
    // Show search results
    li.push("<li><a href=\"")
    li.push(matchedDataProps[i]["dataURL"]);
    li.push("\" class=\"search-result-title\">");
    li.push(buildHighlightedTitle(matchedDataProps[i]));
    li.push("</a>");
    li.push("<p class=\"search-result-content\">...");
    var sliceArray = buildSortedSliceArray(matchedDataProps[i])
    var mergedSliceArray = mergeSliceArray(sliceArray);
    // Highlight keyword.
    li.push(buildHighlightedContent(matchedDataProps[i], mergedSliceArray));
    li.push("...</p>");
  }
  li.push("</ul>");
  resultContent.innerHTML = li.join("");
}

function ajax(url, callback) {
  var xhr = null;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (xhr == null) {
    console.error("Your broswer does not support XMLHttpRequest!");
    return;
  }
  xhr.onreadystatechange = function () {
    // 4 is ready.
    if (xhr.readyState !== 4) {
      return;
    }
    if (xhr.status !== 200) {
      console.error("XMLHttpRequest failed!");
      return;
    }
    callback(xhr);
  };
  xhr.open("GET", url, true);
  xhr.send(null);
}

var searchFunc = function (path, searchID, contentID) {
  ajax(path, function (xhr) {
    var datas = [];
    if (xhr.responseXML) {
      var xmlDoc = xhr.responseXML;
      var entries = xmlDoc.getElementsByTagName("entry");
      for (var i = 0; i < entries.length; i++) {
        datas.push({
          "title": entries[i].getElementsByTagName("title")[0].innerHTML || "",
          "content": entries[i].getElementsByTagName("content")[0].innerHTML || "",
          "url": entries[i].getElementsByTagName("url")[0].innerHTML || ""
        });
      }
    } else {
      var xhrJSON = JSON.parse(xhr.response);
      for (var i = 0; i < xhrJSON.length; i++) {
        datas.push({
          "title": xhrJSON[i]["title"] || "",
          "content": xhrJSON[i]["content"] || "", // Hexo Generator Search does not fill a key when a page is blank.
          "url": xhrJSON[i]["url"] || ""
        });
      }
    }
    var input = document.getElementById(searchID);
    var resultContent = document.getElementById(contentID);
    input.addEventListener("input", function () {
      onInput(input, resultContent, datas);
    });
  });
}
