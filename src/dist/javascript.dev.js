"use strict";

var nav_toggler = document.querySelector(".nav_toggler");
var nav_ul = document.querySelector(".nav-ul2"); // let nav_ul.style.display='hidden';

nav_toggler.addEventListener("click", function () {
  if (nav_ul.style.display == "" || nav_ul.style.display == "none") {
    nav_ul.style.display = "flex";
  } else {
    nav_ul.style.display = "none";
  }
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal-right");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function reveal2() {
  var reveals = document.querySelectorAll(".reveal-left");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active2");
    } else {
      reveals[i].classList.remove("active2");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);