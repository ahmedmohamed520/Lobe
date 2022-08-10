"use strict";
const modalBtn = document.querySelector(".video-container");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-icon");
const video = document.querySelector(".video");

modalBtn.addEventListener("click", () => {
    overlay.classList.add("show");
    video.setAttribute("src", "https://www.youtube.com/embed/Mdcw3Sb98DA?autoplay=1");
});
closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");

    video.setAttribute("src", "");
});

// MOBILE NAV
const navBtn = document.querySelector(".close-nav-btn");
const headerEl = document.querySelector(".header");

navBtn.addEventListener("click", () => {
    headerEl.classList.toggle("open");
});
