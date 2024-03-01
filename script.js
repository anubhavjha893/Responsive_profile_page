var tl = gsap.timeline();

tl.from(".nav h4,a", {
  y: -50,
  duration: 1,
  delay: 0.4,
  opacity: 0,
  stagger: 0.3,
});
tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
});
tl.from("#main img", {
  x: 500,
  duration: 1,
  delay: 0.4,
  opacity: 0,
  stagger: 1,
  rotate:360,
});
tl.from(".lower h4", {
  y: 500,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
});
