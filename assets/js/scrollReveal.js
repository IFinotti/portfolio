const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 500, //ms
  reset: true,
});

scrollReveal.reveal(
  `.gray-section, .black-section, .section, .grid, .text-content`,
  {
    interval: 10,
  },
);
