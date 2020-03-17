"use strict";
import { gsap } from "gsap";

window.addEventListener("DOMContentLoaded", start);

function start() {
  gsap.to(".ball", { x: 400, duration: 2 });
  gsap.to(".ball", { rotate: 200, duration: 2 });

  setTimeout(function() {
    gsap.to(".ball", { scale: 0, y: 30, duration: 2 });
  }, 2000);
}

// other ways

function start1() {
  gsap.to(".ball", { x: 400, duration: 2 });
  gsap.to(".ball", { rotate: 200, duration: 2 });

  gsap.to(".ball", { delay: 2, scale: 0, y: 30, duration: 2 });
}

function start2() {
  gsap.to(".ball", { x: 400, duration: 2 });
  gsap.to(".ball", { rotate: 200, duration: 2, onComplete: next });
}

function next() {
  gsap.to(".ball", { delay: 2, scale: 0, y: 30, duration: 2 });
}
