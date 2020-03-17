"use strict";
import { gsap } from "gsap";

window.addEventListener("DOMContentLoaded", start);

// exercise 3

function start() {
  let timeline = gsap.timeline({ repeat: 2 });

  timeline.to(".ball", { x: 400, rotate: 200, duration: 2 });
  timeline.to(".ball", { scale: 0.2, y: 30, duration: 2 });
  timeline.to(".ball", { y: -700, x: 1100, duration: 2 });
}

//exercise 1

function start0() {
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
