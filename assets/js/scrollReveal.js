const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700, //mili segundos
  reset: true,
});

scrollReveal.reveal(
  `.gray-section, .black-section, .section, .grid, .text-content`,
  {
    interval: 100,
  },
);
