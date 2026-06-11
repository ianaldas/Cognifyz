const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

// Toggle menu open/close on hamburger click
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// Close menu when clicking outside navbar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  }
});