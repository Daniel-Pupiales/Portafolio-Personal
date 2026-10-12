const sr = ScrollReveal({
  distance: "20px",
  easing: "cubic-bezier(0.68,-0.55,0.265,1.55)",
  reset: false,
});

sr.reveal(".hero", { origin: "top" });

sr.reveal(".card", {
  origin: "bottom",
  interval: 250,
});

sr.reveal(".footer", {
  origin: "bottom",
  interval: 250,
});

sr.reveal(".reveal-left", {
  origin: "left",
  distance: "20px",
  delay: 200,
});

sr.reveal(".reveal-right", {
  origin: "right",
  distance: "20px",
  delay: 400,
});
