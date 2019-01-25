//DROPDOWN MENUS----------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction() {
  document.getElementById("myDropdownHome").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


$(function(){  // $(document).ready shorthand

});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.fade-in').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).fadeTo(800, 1);

            }

        });

    });

});


$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.page-text');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start < offset.top) {
          $('.mobile-dropdown-nav').addClass('transparent-color');
          $('.mobile-dropdown-nav').removeClass('background-color');
       } else {
           $('.mobile-dropdown-nav').removeClass('transparent-color');
            $('.mobile-dropdown-nav').addClass('background-color');

       }
   });
});

// $(document).ready(function(){
//    var scroll_start = 0;
//    var startchange = $('.page-text');
//    var offset = startchange.offset();
//    $(document).scroll(function() {
//       scroll_start = $(this).scrollTop();
//       if(scroll_start < offset.top) {
//           $('.background-color').css('background-color', 'rgba(70, 80, 90, .9');
//        } else {
//           $('.background-color').css('background-color', 'rgba(70, 80, 90, .9)');
//        }
//    });
// });

$(document).ready(function(){
 if($(window).width()<500){
  $('.mobile-dropdown-nav').addClass('background-color');
  $('.mobile-dropdown-nav').addClass('transparent-color');
 }
});
