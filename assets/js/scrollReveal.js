const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700, //mili segundos
  reset: true,
});

scrollReveal.reveal(`.gray-section, .black-section`, {
  interval: 100,
});
