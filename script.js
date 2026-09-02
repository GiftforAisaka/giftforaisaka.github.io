// ============================================================
// TROCA DE PALETA DE CORES
// Cada bolinha tem um data-tema; clicar aplica esse tema no <html>
// via atributo data-tema, que o CSS já sabe reconhecer.
// ============================================================
const paletaDots = document.querySelectorAll(".paleta-dot");

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-tema", tema);
  localStorage.setItem("tema-portfolio", tema); // lembra a escolha na próxima visita
}

paletaDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    aplicarTema(dot.dataset.tema);
  });
});

// ao carregar a página, recupera a última paleta escolhida (se existir)
const temaSalvo = localStorage.getItem("tema-portfolio");
if (temaSalvo) {
  aplicarTema(temaSalvo);
}

// ============================================================
// MENU MOBILE
// ============================================================
const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  menuToggle.setAttribute("aria-expanded", String(aberto));
});

// fecha o menu mobile ao clicar num link
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
