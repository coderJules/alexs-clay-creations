// function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}function myFunction(){document.getElementById("myDropdownHome").classList.toggle("show")}window.onclick=function(o){if(!o.target.matches(".dropbtn")){var n,e=document.getElementsByClassName("dropdown-content");for(n=0;n<e.length;n++){var s=e[n];s.classList.contains("show")&&s.classList.remove("show")}}},$(document).ready(function(){var o=$(".page-text").offset();$(document).scroll(function(){$(this).scrollTop()<o.top?($(".mobile-dropdown-nav").addClass("transparent-color"),$(".mobile-dropdown-nav").removeClass("background-color")):($(".mobile-dropdown-nav").removeClass("transparent-color"),$(".mobile-dropdown-nav").addClass("background-color"))})}),$(document).ready(function(){$(window).width()<500&&($(".mobile-dropdown-nav").addClass("background-color"),$(".mobile-dropdown-nav").addClass("transparent-color"))});var slideIndex=1;function plusDivs(o){showDivs(slideIndex+=o)}function showDivs(o){var n,e=document.getElementsByClassName("mySlides");for(o>e.length&&(slideIndex=1),o<1&&(slideIndex=e.length),n=0;n<e.length;n++)e[n].style.opacity="0";e[slideIndex-1].style.opacity="1"}showDivs(slideIndex);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show")
}

function myFunction() {
    document.getElementById("myDropdownHome").classList.toggle("show")
    document.getElementById("myDropdownHomeLandscape").classList.toggle("show")
}
window.onclick = function(o) {
    if (!o.target.matches(".dropbtn")) {
        var n, e = document.getElementsByClassName("dropdown-content");
        for (n = 0; n < e.length; n++) {
            var s = e[n];
            s.classList.contains("show") && s.classList.remove("show")
        }
    }
}, $(document).ready(function() {
    var o = $(".about-text" || ".video-page").offset();
    $(document).scroll(function() {
        $(this).scrollTop() < o.top ? ($(".desktop-nav").addClass("transparent-color"), $(".desktop-nav").removeClass("background-color")) : ($(".desktop-nav").removeClass("transparent-color"), $(".desktop-nav").addClass("background-color"))
        $(this).scrollTop() < o.top ? ($(".mobile-dropdown-nav").addClass("transparent-color"), $(".mobile-dropdown-nav").removeClass("background-color")) : ($(".mobile-dropdown-nav").removeClass("transparent-color"), $(".mobile-dropdown-nav").addClass("background-color"))
    })
}), $(document).ready(function() {
    $(window).width() < 500 && ($(".mobile-dropdown-nav").addClass("background-color"), $(".mobile-dropdown-nav").addClass("transparent-color"))
});

var slideIndex = 1;

function plusDivs(o) {
    showDivs(slideIndex += o)
}

// function showDivs(o) {
//     var n, e = document.getElementsByClassName("mySlides");
//     for (o > e.length && (slideIndex = 1), o < 1 && (slideIndex = e.length), n = 0; n < e.length; n++) e[n].style.opacity = "0";
//     e[slideIndex - 1].style.opacity = "1"
// }
// showDivs(slideIndex);

//slide up photo's and text effect
// check to see if the element is in the viewport


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});

//large screensize slideshow
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  4000);
