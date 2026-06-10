const TEXTS = {
  es: {
    nav: ['Sobre mí','Trabajo','Contacto'],
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
    p1: 'Soy un creativo basado en <strong>Madrid</strong>, disponible para proyectos en toda España y también en remoto.',
    p2: 'Me muevo entre la fotografía, el vídeo, el diseño y lo digital con bastante naturalidad. No porque nunca me haya decidido por una sola cosa, sino porque muchas veces las ideas más interesantes aparecen justo <strong>en medio de todas ellas</strong>.',
    p3: '<em>"Malenfocat"</em> viene del catalán <em>mal enfocat</em> ("mal enfocado"), un término muy ligado al mundo audiovisual. Más que un error, siempre lo he visto como <strong>otra forma de mirar las cosas</strong>. El proyecto nace un poco de ahí: evitar lo demasiado perfecto o predecible y encontrar maneras más honestas y personales de contar historias, ya sea para una marca, un evento o una persona.',
    labelSkills: 'Habilidades',
    skNames: ['Fotografía','Video & Edición','Generación con IA','Diseño Gráfico','Desarrollo Web','Diseño UX/UI'],
    skDescs: ['Retrato, producto, evento y dirección de arte visual.','Grabación, montaje, color grading y postproducción.','Midjourney, Stable Diffusion y flujos generativos creativos.','Identidad visual, cartelería, composición y tipografía.','HTML, CSS, JS, WordPress y sitios estáticos modernos.','Wireframes, prototipos y sistemas de diseño en Figma.'],
    labelWork: '02 — Proyectos', h2Work: 'Trabajo selecto',
    cpre: '03 — Contacto', ch: '¿Trabajamos<br><strong>juntos?</strong>',
    cdesc: 'Basado en Madrid, disponible en toda España y para proyectos remotos en cualquier parte del mundo.',
    subHero: 'Diseño · Foto · Video · Código · IA',
    manifesto: { label: 'Malenfocat Studio', l1: 'No todo lo que parece mal hecho', l2: 'está mal pensado.' },
    footerClaim: 'No todo lo que parece mal hecho está mal pensado.',
    footerCopy: 'Desde Madrid para todo el mundo',
    navPrev: '← Anterior', navNext: 'Siguiente →', navAll: 'Ver todos',
    proj0: 'Photo Portfolio', proj1: 'Vídeo Reel', proj2: 'AI Influencer',
    infoTitle: 'Cómo jugar',
    infoL1a: 'Mueve el cursor', infoL1b: ' para empujar las formas',
    infoL2a: 'Click sostenido', infoL2b: ' para atraerlas hacia ti',
    infoL3a: '3 retos', infoL3b: ' para desbloquear la recompensa',
    infoL4a: 'Scroll', infoL4b: ' para revelar el portfolio',
  },
  en: {
    nav: ['About','Work','Contact'],
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
    p1: 'I\'m a creative based in <strong>Madrid</strong>, available for projects across Spain and remotely.',
    p2: 'I move between photography, video, design and digital work quite naturally. Not because I never chose just one thing, but because the most interesting ideas often show up <strong>right in between all of them</strong>.',
    p3: '<em>"Malenfocat"</em> comes from the Catalan <em>mal enfocat</em> ("out of focus"), a term closely tied to the audiovisual world. More than a mistake, I\'ve always seen it as <strong>another way of looking at things</strong>. The project grows out of that: avoiding the overly perfect or predictable, and finding more honest, personal ways to tell stories; whether for a brand, an event or a person.',
    labelSkills: 'Skills',
    skNames: ['Photography','Video & Editing','AI Generation','Graphic Design','Web Development','UX/UI Design'],
    skDescs: ['Portrait, product, event and visual art direction.','Filming, editing, color grading and post-production.','Midjourney, Stable Diffusion and generative creative workflows.','Visual identity, poster design, composition and typography.','HTML, CSS, JS, WordPress and modern static sites.','Wireframes, prototypes and design systems in Figma.'],
    labelWork: '02 — Projects', h2Work: 'Selected work',
    cpre: '03 — Contact', ch: 'Shall we work<br><strong>together?</strong>',
    cdesc: 'Based in Madrid, available across Spain and for remote projects anywhere in the world.',
    subHero: 'Design · Photo · Video · Code · AI',
    manifesto: { label: 'Malenfocat Studio', l1: 'Not everything that looks poorly made', l2: 'is poorly thought.' },
    footerClaim: 'Not everything that looks poorly made is poorly thought.',
    footerCopy: 'From Madrid to the world',
    navPrev: '← Previous', navNext: 'Next →', navAll: 'All work',
    proj0: 'Photo Portfolio', proj1: 'Video Reel', proj2: 'AI Influencer',
    infoTitle: 'How to play',
    infoL1a: 'Move the cursor', infoL1b: ' to push the shapes',
    infoL2a: 'Click and hold', infoL2b: ' to attract them toward you',
    infoL3a: '3 challenges', infoL3b: ' to unlock the reward',
    infoL4a: 'Scroll', infoL4b: ' to reveal the portfolio',
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
  if ($('about-p3')) $('about-p3').innerHTML = t.p3;
  $('label-skills').textContent = t.labelSkills;
  $('label-work').textContent   = t.labelWork;
  $('h2-work').textContent      = t.h2Work;
  $('cpre').textContent         = t.cpre;
  $('ch').innerHTML             = t.ch;
  $('cdesc').textContent        = t.cdesc;
  // Popup instrucciones
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key.startsWith('nav') && t[key] !== undefined) el.textContent = t[key];
  });
  for (let i = 1; i <= 6; i++) {
    $(`sk${i}n`).textContent = t.skNames[i - 1];
    $(`sk${i}d`).textContent = t.skDescs[i - 1];
  }
  if (!gameOver && currentChallenge < CHALLENGES.length)
    $('challenge-text').textContent = t.challenge[currentChallenge];
  currentSubHero = t.subHero;
  applyManifestoLang();

  // Links "ver todos" con idioma + hash correcto
  document.querySelectorAll('.proj-nav-all').forEach(a => {
    const base = a.getAttribute('data-href') || a.getAttribute('href').split('?')[0].split('#')[0];
    a.setAttribute('data-href', base);
    a.setAttribute('href', lang === 'en' ? base + '?lang=en#work-sec' : base + '#work-sec');
  });
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