var tl = gsap.timeline({
  defaults: {
    opacity: 0,
    ease: "linear",
    duration: 1,
  },
});

tl.fromTo(
  ".sidebar",
  { width: 0 },
  {
    opacity: 1,
    width: "50%",
  }
);

tl.fromTo(".main-image", { x: 0 }, { opacity: 1 });

tl.fromTo(".content", { x: -100 }, { opacity: 1, x: 0 });
