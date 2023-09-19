const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 500, //ms
  reset: true,
});

scrollReveal.reveal(`.grid, .text-content, .sections-title, .title`, {
  interval: 100,
});
