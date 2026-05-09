window.addEventListener('DOMContentLoaded', () => {
  resizeGame();
  window.addEventListener('resize', resizeGame);
  showChallenge();
  gameFrame();

  window.addEventListener('nav:ready', () => {
    applyLang();
  });

  // Si hay hash en la URL (#work-sec, etc.), scroll suave al cargar
  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 300);
  }
});