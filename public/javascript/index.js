const humberger = document.getElementById("nav-button");
const hamburgerClose = document.getElementById("nav-close-button");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-links");

humberger.addEventListener("click", () => {
  navMenu.classList.toggle("translate-x-full");
});

hamburgerClose.addEventListener("click", () => {
  navMenu.classList.toggle("translate-x-full");
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.toggle("translate-x-full");
  });
});
