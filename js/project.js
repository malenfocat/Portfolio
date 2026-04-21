/* ── PROJECT PAGE JS ────────────────────────────────────────── */

// Cursor custom (igual que en main.js)
const curEl = document.getElementById('cur');
let MX = 300, MY = 300, CX = 300, CY = 300;

const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
if (isTouch) {
  document.body.style.cursor = 'auto';
  if (curEl) curEl.style.display = 'none';
} else {
  document.addEventListener('mousemove', e => { MX = e.clientX; MY = e.clientY; });
  (function cl() { CX += (MX - CX) * .13; CY += (MY - CY) * .13; curEl.style.left = CX + 'px'; curEl.style.top = CY + 'px'; requestAnimationFrame(cl); })();
}

// Dark mode toggle
document.getElementById('dark-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.getElementById('dark-toggle').textContent = document.body.classList.contains('dark') ? '☀ Light' : '☽ Dark';
});

// Reveal de imágenes al hacer scroll
const imgWraps = document.querySelectorAll('.proj-img-wrap, .proj-cover, .proj-full-img');
const imgObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('img-visible');
      imgObs.unobserve(e.target);
    }
  });
}, { threshold: .1 });
imgWraps.forEach(el => imgObs.observe(el));

// Reveal de secciones de texto
const sections = document.querySelectorAll('.proj-section');
const secObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('sec-visible');
      secObs.unobserve(e.target);
    }
  });
}, { threshold: .15 });
sections.forEach(el => secObs.observe(el));