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
  if (
    //this condition is just applied if the width of the window is less than 600px
    window.innerWidth < // Return the width of the navigator window
    60 * parseFloat(getComputedStyle(document.documentElement).fontSize) // make the conversion by rem to px
  ) {
    menu.style.display = "none";
    closeMenuButton.checked = false;
  }
});
