"use strict";
import { gsap } from "gsap";

gsap.from(".hero__textbox > *", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.25,
});
