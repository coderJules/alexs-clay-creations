function myFunction(){document.getElementById("myDropdown").classList.toggle("show")}function myFunction(){document.getElementById("myDropdownHome").classList.toggle("show")}window.onclick=function(o){if(!o.target.matches(".dropbtn")){var n,e=document.getElementsByClassName("dropdown-content");for(n=0;n<e.length;n++){var t=e[n];t.classList.contains("show")&&t.classList.remove("show")}}},$(function(){}),$(document).ready(function(){$(window).scroll(function(){$(".fade-in").each(function(o){var n=$(this).position().top+$(this).outerHeight();$(window).scrollTop()+$(window).height()>n&&$(this).fadeTo(800,1)})})}),$(document).ready(function(){var o=$(".page-text").offset();$(document).scroll(function(){$(this).scrollTop()<o.top?($(".mobile-dropdown-nav").addClass("transparent-color"),$(".mobile-dropdown-nav").removeClass("background-color")):($(".mobile-dropdown-nav").removeClass("transparent-color"),$(".mobile-dropdown-nav").addClass("background-color"))})}),$(document).ready(function(){$(window).width()<500&&($(".mobile-dropdown-nav").addClass("background-color"),$(".mobile-dropdown-nav").addClass("transparent-color"))});var slideIndex=1;function plusDivs(o){showDivs(slideIndex+=o)}function showDivs(o){var n,e=document.getElementsByClassName("mySlides");for(o>e.length&&(slideIndex=1),o<1&&(slideIndex=e.length),n=0;n<e.length;n++)e[n].style.opacity="0";e[slideIndex-1].style.opacity="1"}showDivs(slideIndex);