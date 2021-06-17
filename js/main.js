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

var pageURL = window.location.href.toString();
pageURL.substring(pageURL.lastIndexOf("/") + 1).substring(0, pageURL.lastIndexOf("."));

pageURL = /:(.+)/.exec(pageURL)[1];

pageURL.substring(0, pageURL.lastIndexOf("/") + 1);

pageURL.substring(pageURL.lastIndexOf("/"));