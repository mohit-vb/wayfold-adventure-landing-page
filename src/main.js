"use strict";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(TextPlugin, SplitText, GSDevTools);

const heroTl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
heroTl
  .from(".hero__textbox .eyebrow", { x: -100, duration: 1.6 })
  .from(".hero__textbox h1", { x: 100, duration: 1.2 }, "<")
  .from(".hero__textbox p", { y: 30, duration: 0.8 })
  .from(".hero__textbox button", { y: 40, duration: 0.8 });

const aboutTl = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
let splitHeading = new SplitText(".about h2", { type: "chars" });
let splitLines = new SplitText(".about p", { type: "lines" });
aboutTl
  .from(".about .eyebrow", { x: -100, duration: 1.6 }, 2.9)
  .from(splitHeading.chars, { opacity: 0, stagger: 0.05 })
  .from(splitLines.lines, { opacity: 0, stagger: 0.1 })
  .from(".about button", { x: -100, duration: 0.8 })
  .fromTo(
    ".about img",
    { opacity: 0, scale: 0.5 },
    { opacity: 1, scale: 1, stagger: 0.1, duration: 1 },
  );

GSDevTools.create();
