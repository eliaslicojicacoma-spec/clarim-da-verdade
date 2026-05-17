// =====================
// NAV TOGGLE
// =====================
const navToggle = document.getElementById("navToggle");
const navbar = document.getElementById("navbar");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("menu-open");
});

// Fecha o menu ao clicar num link de navegação
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("menu-open");
  });
});

// =====================
// PRÉ-INSCRIÇÃO
// =====================
const adesaoForm = document.getElementById("adesaoForm");
const adesaoFeedback = document.getElementById("adesaoFeedback");

adesaoForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome  = document.getElementById("adesaoNome").value;
  const tel   = document.getElementById("adesaoTel").value;
  const email = document.getElementById("adesaoEmail").value;
  const mota  = document.getElementById("adesaoMota").value;
  const texto = document.getElementById("adesaoTexto").value;

  adesaoFeedback.textContent = "A enviar...";
  adesaoFeedback.style.color = "orange";

  fetch("https://formsubmit.co/ajax/ernestomanueltchissuale@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      _subject: "Nova pré-inscrição — Clube O País",
      nome:     nome,
      telefone: tel,
      email:    email,
      mota:     mota || "Não indicado",
      mensagem: texto || "Sem mensagem",
      origem:   "Formulário de pré-inscrição — clubeopais.ao"
    })
  })
  .then(res => res.json())
  .then(() => {
    adesaoFeedback.textContent = "✅ Pré-inscrição enviada! Vamos entrar em contacto em breve.";
    adesaoFeedback.style.color = "lime";
    adesaoForm.reset();
  })
  .catch(() => {
    adesaoFeedback.textContent = "❌ Erro ao enviar. Tenta novamente.";
    adesaoFeedback.style.color = "red";
  });
});
