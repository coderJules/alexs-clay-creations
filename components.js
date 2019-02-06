// //DROPDOWN MENUS----------------

// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// function myFunction() {
//   document.getElementById("myDropdownHome").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

// // $(function(){  // $(document).ready shorthand

// // });

// // $(document).ready(function() {

// //     /* Every time the window is scrolled ... */
// //     $(window).scroll( function(){

// //         /* Check the location of each desired element */
// //         $('.fade-in').each( function(i){

// //             var bottom_of_object = $(this).position().top + $(this).outerHeight();
// //             var bottom_of_window = $(window).scrollTop() + $(window).height();

// //             /* If the object is completely visible in the window, fade it it */
// //             if( bottom_of_window > bottom_of_object ){

// //                 $(this).fadeTo(800, 1);

// //             }

// //         });

// //     });

// // });

// $(document).ready(function(){
//    var scroll_start = 0;
//    var startchange = $('.page-text');
//    var offset = startchange.offset();
//    $(document).scroll(function() {
//       scroll_start = $(this).scrollTop();
//       if(scroll_start < offset.top) {
//           $('.mobile-dropdown-nav').addClass('transparent-color');
//           $('.mobile-dropdown-nav').removeClass('background-color');
//        } else {
//            $('.mobile-dropdown-nav').removeClass('transparent-color');
//             $('.mobile-dropdown-nav').addClass('background-color');

//        }
//    });
// });

// $(document).ready(function(){
//  if($(window).width()<500){
//   $('.mobile-dropdown-nav').addClass('background-color');
//   $('.mobile-dropdown-nav').addClass('transparent-color');
//  }
// });

// //Slideshow

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.opacity = "0";
//   }
//   x[slideIndex-1].style.opacity = "1";
// }


// // Stop load of images off veiwport

// // $(document).ready(function () {
// //   setTimeout(function () {
// //     $('.load-delay').each(function () {
// //       var imagex = $(this);
// //       var imgOriginal = imagex.data('original');
// //       $(imagex).attr('src', imgOriginal);
// //     });
// //   }, 3000);
// // });
