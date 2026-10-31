// ============================================================
// MENU MOBILE
// ============================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const aberto = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(aberto));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
