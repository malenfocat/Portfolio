window.addEventListener('DOMContentLoaded', () => {
  // Resize inicial del juego
  resizeGame();
  window.addEventListener('resize', resizeGame);

  // Arrancar juego
  showChallenge();
  gameFrame();

  // Nav toggle de idioma (esperar al nav inyectado por components.js)
  window.addEventListener('nav:ready', () => {
    applyLang(); // aplicar idioma guardado al nav recién montado
  });
});