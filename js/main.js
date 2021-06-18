$(document).ready(function () {
  // init ScrollMagic
  var controller = new ScrollMagic.Controller();

  $(".frame").each(function () {
    // console.log(this);

    // build scene
    var fstScene = new ScrollMagic.Scene({
      triggerElement: this,
      // duration: 300, // animation ending indicator in pixels
      // triggerHook: 0, // where on page the trigger is
      // reverse: false // animation only runs 1 time
    })
      .setClassToggle(this, "fade-in") // add class "show" to element "this"
      // .addIndicators({ // indicators to show where the element is and when it's triggered
      //   name: "first scene",
      //   colorTrigger: "red",
      //   indent: 200,
      //   colorStart: "cian",
      //   colorEnd: "pink"
      // })
      .addTo(controller)
  })
});

// var pageURL = window.location.href.toString();
// pageURL.substring(pageURL.lastIndexOf("/") + 1);
// pageURL = /:(.+)/.exec(pageURL)[1];
// pageURL.substring(0, pageURL.lastIndexOf("/") + 1);
// pageURL.substring(pageURL.lastIndexOf("/"));



function prevPage() {
  // get site url
  var pageURL = window.location.href.toString();
  // main website url without page html
  var page = pageURL.substring(0, pageURL.lastIndexOf("/") + 1);
  // page number without html extension
  var pageURLNum = pageURL.substring(pageURL.length - 7, pageURL.length - 5);
  // page number as integer
  var pageNum = parseInt(pageURLNum, 10);

  var prevPage = pageNum - 1;

  if (prevPage < 10) {
    var previousPage = "0" + prevPage;
  } else if (prevPage >= 10)
    var previousPage = prevPage;
  
  window.location.href = page + "pg" + previousPage + ".html";
}

function nextPage() {
  // get site url
  var pageURL = window.location.href.toString();
  // main website url without page html
  var page = pageURL.substring(0, pageURL.lastIndexOf("/") + 1);
  // page number without html extension
  var pageURLNum = pageURL.substring(pageURL.length - 7, pageURL.length - 5);
  // page number as integer
  var pageNum = parseInt(pageURLNum, 10);

  var nextPage = pageNum + 1;

  if (nextPage < 10) {
    var nexxtPage = "0" + nextPage;
  } else if (nextPage >= 10)
    var nexxtPage = nextPage;

  window.location.href = page + "pg" + nexxtPage + ".html";
}