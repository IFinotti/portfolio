const closeMenuButton = document.getElementById("close-menu");
const menu = document.querySelector(".menu");

closeMenuButton.addEventListener("change", function () {
  if (this.checked) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
