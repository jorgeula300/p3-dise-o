document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector("header ul"); // Asegúrate de que coincida con el selector

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
