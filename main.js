// =====================
// NAV TOGGLE (menu hambúrguer)
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

// =====================
// NEWSLETTER
// =====================
const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("newsletterEmail").value;
  const msg = document.getElementById("newsletterMsg");

  msg.textContent = "A enviar...";
  msg.style.color = "orange";

  fetch("https://formsubmit.co/ajax/ernestomanueltchissuale@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      email: email,
      origem: "Newsletter Clube O País"
    })
  })
  .then(response => response.json())
  .then(data => {
    msg.textContent = "✅ Subscrição feita! Bem-vindo ao clube.";
    msg.style.color = "lime";
    newsletterForm.reset();
  })
  .catch(error => {
    msg.textContent = "❌ Erro ao enviar. Tenta novamente.";
    msg.style.color = "red";
  });
});
