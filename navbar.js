document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var navbarHeight = navbar.offsetHeight;

    window.addEventListener("scroll", function () {
      var scrolled = window.scrollY > navbarHeight;
      navbar.classList.toggle("scrolled", scrolled);
    });
  });
});
