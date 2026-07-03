// ── PROJECT PAGE JS ──────────────────────────────────────────
// El cursor, dark mode e idioma los gestiona ui.js + components.js.
// Este archivo solo maneja lo específico de las páginas de proyecto.

// ── REVEAL DE IMÁGENES AL SCROLL ─────────────────────────────
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

// ── REVEAL DE SECCIONES DE TEXTO ─────────────────────────────
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

// ── PARALLAX EN IMÁGENES FULL-WIDTH ──────────────────────────
const parallaxImgs = document.querySelectorAll('.proj-full-img');
if (parallaxImgs.length > 0 && !window.matchMedia('(hover: none)').matches) {
  function parallax() {
    const wh = window.innerHeight;
    parallaxImgs.forEach(section => {
      const img = section.querySelector('img');
      if (!img) return;
      const rect = section.getBoundingClientRect();
      const progress = rect.top / wh;
      img.style.transform = `translateY(${(progress - 0.5) * 130}px)`;
    });
    requestAnimationFrame(parallax);
  }
  parallax();
}
