"use strict";
import { gsap } from "gsap";

let heroTl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
heroTl
  .from(".hero__textbox .eyebrow", { x: 100, duration: 1.6 })
  .from(".hero__textbox h1", { x: -100, duration: 1.2 }, "<")
  .from(".hero__textbox p", { y: 30, duration: 0.8 })
  .from(".hero__textbox button", { y: 40, duration: 0.8 });
