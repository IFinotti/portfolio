const closeMenuButton = document.getElementById("close-menu");
const menu = document.querySelector(".menu");
const menuLink = document.querySelector(".menu-link");

closeMenuButton.addEventListener("change", function () {
  if (this.checked) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

menuLink.addEventListener("click", function () {
  menu.style.display = "none";
  closeMenuButton.checked = false;
});
