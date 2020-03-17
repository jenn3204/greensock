"use strict";
import { gsap } from "gsap";

window.addEventListener("DOMContentLoaded", start);

function start() {
  gsap.from(".ball", { y: -400, duration: 2, stagger: 0.2 });
}
