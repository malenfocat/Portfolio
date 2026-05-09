const TEXTS = {
  es: {
    nav: ['Trabajo','Sobre mí','Contacto'],
    challenge: ['Agrupa las formas NEGRAS en el centro','Lleva las formas TEAL a la derecha','Agrupa TODAS las formas arriba'],
    skillFlashTitle: ['+ de 30 eventos cubiertos.','IA generativa integrada.','Soluciones 360.'],
    skillFlashSub: ['Desde bodas hasta rebranding corporativo.','No como tendencia. Como herramienta.','Foto, vídeo, web y diseño. Un interlocutor para todo.'],
    hint: 'Empuja · Click para atraer · Scroll para revelar',
    rewPre: '🎉 Has completado el juego',
    rewTitle: 'Primera consulta<br>gratis para ti',
    rewDesc: 'Como recompensa por descubrir Malenfocat Studio, te regalo una sesión de briefing sin coste — foto, vídeo, web o diseño. Tú eliges el proyecto, yo pongo las primeras horas.',
    copyHint: 'Toca para copiar el código', copied: '¡Copiado al portapapeles!',
    rewBtn: 'Usar ahora →', rewBtnAlt: 'Seguir explorando',
    labelAbout: '01 — Sobre mí', h2About: 'Multidisciplinar<br>por necesidad',
    p1: 'Soy creativo con base en <strong>Madrid</strong>, disponible en toda España y para proyectos remotos en cualquier parte. Me muevo entre la cámara, el código y el píxel con la misma comodidad — no porque no haya elegido, sino porque los mejores proyectos <strong>viven en la intersección</strong> de todas esas disciplinas.',
    p2: '"Malenfocat" viene del catalán <em>mal enfocado</em> — una referencia al mundo audiovisual y a lo que vengo a resolver. El nombre no es una excusa; es una <strong>declaración de intenciones</strong>: lo que para otros es ruido, para mí es el punto de partida.',
    labelSkills: 'Habilidades',
    skNames: ['Fotografía','Video & Edición','Generación con IA','Diseño Gráfico','Desarrollo Web','Diseño UX/UI'],
    skDescs: ['Retrato, producto, evento y dirección de arte visual.','Grabación, montaje, color grading y postproducción.','Midjourney, Stable Diffusion y flujos generativos creativos.','Identidad visual, cartelería, composición y tipografía.','HTML, CSS, JS, WordPress y sitios estáticos modernos.','Wireframes, prototipos y sistemas de diseño en Figma.'],
    labelWork: '02 — Proyectos', h2Work: 'Trabajo selecto',
    cpre: '03 — Contacto', ch: '¿Trabajamos<br><strong>juntos?</strong>',
    cdesc: 'Basado en Madrid, disponible en toda España y para proyectos remotos en cualquier parte del mundo.',
    subHero: 'Diseño · Foto · Video · Código · IA',
    manifesto: { label: 'Malenfocat Studio', l1: 'No todo lo que parece mal hecho', l2: 'está mal pensado.' },
  },
  en: {
    nav: ['Work','About','Contact'],
    challenge: ['Group the BLACK shapes in the center','Move the TEAL shapes to the right','Group ALL shapes at the top'],
    skillFlashTitle: ['30+ events covered.','Generative AI integrated.','360 solutions.'],
    skillFlashSub: ['From weddings to corporate rebranding.','Not as a trend. As a tool.','Photo, video, web and design. One contact for everything.'],
    hint: 'Push · Click to attract · Scroll to reveal',
    rewPre: '🎉 You completed the game',
    rewTitle: 'First consultation<br>free for you',
    rewDesc: 'As a reward for discovering Malenfocat Studio, I offer you a free briefing session — photo, video, web or design. You choose the project, I put in the first hours.',
    copyHint: 'Tap to copy the code', copied: 'Copied to clipboard!',
    rewBtn: 'Use now →', rewBtnAlt: 'Keep exploring',
    labelAbout: '01 — About', h2About: 'Multidisciplinary<br>by necessity',
    p1: 'I\'m a creative based in <strong>Madrid</strong>, available across Spain and for remote projects anywhere. I move between camera, code and pixel with equal ease — not because I haven\'t chosen, but because the best projects <strong>live at the intersection</strong> of all those disciplines.',
    p2: '"Malenfocat" comes from Catalan for <em>out of focus</em> — a reference to the audiovisual world and what I\'m here to solve. The name isn\'t an excuse; it\'s a <strong>declaration of intent</strong>: what others call noise, I call a starting point.',
    labelSkills: 'Skills',
    skNames: ['Photography','Video & Editing','AI Generation','Graphic Design','Web Development','UX/UI Design'],
    skDescs: ['Portrait, product, event and visual art direction.','Filming, editing, color grading and post-production.','Midjourney, Stable Diffusion and generative creative workflows.','Visual identity, poster design, composition and typography.','HTML, CSS, JS, WordPress and modern static sites.','Wireframes, prototypes and design systems in Figma.'],
    labelWork: '02 — Projects', h2Work: 'Selected work',
    cpre: '03 — Contact', ch: 'Shall we work<br><strong>together?</strong>',
    cdesc: 'Based in Madrid, available across Spain and for remote projects anywhere in the world.',
    subHero: 'Design · Photo · Video · Code · AI',
    manifesto: { label: 'Malenfocat Studio', l1: 'Not everything that looks poorly made', l2: 'is poorly thought.' },
  }
};

let lang = 'es';
let currentSubHero = TEXTS.es.subHero;

function applyLang() {
  const t = TEXTS[lang];
  const $ = id => document.getElementById(id);

  // Nav links — presentes en TODAS las páginas
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key.startsWith('nav')) {
      const i = parseInt(key.replace('nav', ''));
      if (t.nav[i] !== undefined) el.textContent = t.nav[i];
    }
  });
  // Botón de idioma
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.textContent = lang === 'es' ? 'EN' : 'ES';

  // Todo lo siguiente solo existe en index — salir si no está
  if (!$('hint-box')) return;

  $('hint-box').textContent     = t.hint;
  $('rew-pre').textContent      = t.rewPre;
  $('rew-title').innerHTML      = t.rewTitle;
  $('rew-desc').textContent     = t.rewDesc;
  $('copy-hint').textContent    = t.copyHint;
  $('rew-contact').textContent  = t.rewBtn;
  $('rew-close').textContent    = t.rewBtnAlt;
  $('label-about').textContent  = t.labelAbout;
  $('h2-about').innerHTML       = t.h2About;
  $('about-p1').innerHTML       = t.p1;
  $('about-p2').innerHTML       = t.p2;
  $('label-skills').textContent = t.labelSkills;
  $('label-work').textContent   = t.labelWork;
  $('h2-work').textContent      = t.h2Work;
  $('cpre').textContent         = t.cpre;
  $('ch').innerHTML             = t.ch;
  $('cdesc').textContent        = t.cdesc;
  for (let i = 1; i <= 6; i++) {
    $(`sk${i}n`).textContent = t.skNames[i - 1];
    $(`sk${i}d`).textContent = t.skDescs[i - 1];
  }
  if (!gameOver && currentChallenge < CHALLENGES.length)
    $('challenge-text').textContent = t.challenge[currentChallenge];
  currentSubHero = t.subHero;
  applyManifestoLang();
}

function applyManifestoLang() {
  const m = TEXTS[lang].manifesto;
  const ml = document.getElementById('m-label');
  const m1 = document.getElementById('m-line1');
  const m2 = document.getElementById('m-line2');
  if (ml) ml.textContent = m.label;
  if (m1) m1.textContent = m.l1;
  if (m2) m2.textContent = m.l2;
}