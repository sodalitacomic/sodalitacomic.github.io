// get site url
var pageURL = window.location.href.toString();
// main website url without page html
var page = pageURL.substring(0, pageURL.lastIndexOf("/") + 1);
// page number without html extension
var pageURLNum = pageURL.substring(pageURL.length - 7, pageURL.length - 5);
// page number as integer
var pageNum = parseInt(pageURLNum, 10);
  
function prevPage() {
  var prevPage = pageNum - 1;

  if (prevPage < 10) {
    var previousPage = "0" + prevPage;
  } else if (prevPage >= 10)
    var previousPage = prevPage;
  
  if (prevPage == 1) {
    window.location.href = page + "index.html";
  } else {
    window.location.href = page + "pg" + previousPage + ".html";
  }

  if (pageURLNum == "ex") {
    window.location.href = page + "index.html";
  } else {
    window.location.href = page + "pg" + nexxtPage + ".html";
  }
}

function nextPage() {
  var nextPage = pageNum + 1;

  if (nextPage < 10) {
    var nexxtPage = "0" + nextPage;
  } else if (nextPage >= 10) {
    var nexxtPage = nextPage;
  }  

  if (pageURLNum == "ex") {
    window.location.href = page + "pg02.html";
  } else if (pageURLNum == "16") {
    window.location.href = page + "index.html";
  } else {
    window.location.href = page + "pg" + nexxtPage + ".html";
  }
}

function teamPage() {
  window.location.href = page + "team.html";
}