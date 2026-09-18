"use strict";
import { createIcons, icons } from "lucide";
document.addEventListener("DOMContentLoaded", () => {
  createIcons({ icons });
});

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(TextPlugin, SplitText, ScrollTrigger, GSDevTools);

// HERO SECTION
const heroTl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
heroTl
  .from(".hero__textbox .eyebrow", { x: -100, duration: 1.6 })
  .from(".hero__textbox h1", { x: 100, duration: 1.2 }, "<")
  .from(".hero__textbox p", { y: 30, duration: 0.8 })
  .from(".hero__textbox button", { y: 40, duration: 0.8 });

// ABOUT SECTION

let splitHeading = new SplitText(".about h2", { type: "chars" });
let splitLines = new SplitText(".about p", { type: "lines" });

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    toggleActions: "play none none none",
  },
  defaults: {
    ease: "back",
    opacity: 0,
  },
});

aboutTl
  .from(".about .eyebrow", { x: -100, duration: 1.6 })
  .from(splitHeading.chars, { stagger: 0.05 })
  .from(splitLines.lines, { stagger: 0.1 })
  .fromTo(
    ".about button",
    { x: -100 },
    { x: 0, opacity: 1, duration: 1, ease: "none" },
  )
  .fromTo(
    ".about img",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, stagger: 0.1, duration: 1 },
    "<",
  );

// FEATURES SECTION

gsap.set(".features__feature", {
  opacity: 0,
  y: 30,
});

let splitFeatureHeading = new SplitText("#section-features h2", {
  type: "chars",
});
const featuresTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section-features",
    start: "top 75%",
    toggleActions: "play none none none",
  },
  defaults: {
    ease: "back",
  },
});

featuresTl
  .from(splitFeatureHeading.chars, { stagger: 0.05, opacity: 0 })
  .fromTo(".features-wrapper", { scale: 0 }, { scale: 1, duration: 1 })
  .fromTo(
    ".features__feature",
    { autoAlpha: 0, y: 30 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      stagger: { each: 0.2 },
      ease: "power2.out",
      immediateRender: false,
    },
  );

// GSDevTools.create();
