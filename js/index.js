"use strict";

document
  .querySelector(".cta__button_mobile")
  .addEventListener("click", function () {
    document.querySelector(".mobile-nav").classList.toggle("open");
  });

document.querySelector(".close-button").addEventListener("click", function () {
  document.querySelector(".mobile-nav").classList.remove("open");
});
