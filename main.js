// =====================
// NAV TOGGLE
// =====================
const navToggle = document.getElementById("navToggle");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("menu-open");
});

// Fecha o menu ao clicar num link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("menu-open");
  });
});
