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
    p1: 'Trabajo desde <strong>Madrid</strong>, para proyectos de toda España e internacional. Fotografía, vídeo, diseño y desarrollo web, distintos lenguajes para un mismo objetivo: contar algo bien, ya sea una marca, un evento o cualquier reto que tengas en mente.',
    p2: 'Cuido cada detalle del proceso, del planteamiento a la entrega final, y me implico a fondo en lo que haga falta para sacarlo adelante.',
    p3: '<em>"Malenfocat"</em> viene del catalán <em>mal enfocat</em> ("mal enfocado"), un término muy ligado al mundo audiovisual. Más que un error, siempre lo he visto como <strong>otra forma de mirar las cosas</strong>. El proyecto nace un poco de ahí: evitar lo demasiado perfecto o predecible y encontrar maneras más honestas y personales de contar historias, ya sea para una marca, un evento o una persona.',
    labelSkills: 'Habilidades',
    skNames: ['Fotografía','Video & Edición','Generación con IA','Diseño Gráfico','Desarrollo Web','Diseño UX/UI'],
    skDescs: ['Retrato, producto, evento y dirección de arte visual.','Grabación, montaje, color grading y postproducción.','Midjourney, Stable Diffusion y flujos generativos creativos.','Identidad visual, cartelería, composición y tipografía.','HTML, CSS, JS, WordPress y sitios estáticos modernos.','Wireframes, prototipos y sistemas de diseño en Figma.'],
    labelWork: '02 — Proyectos', h2Work: 'Trabajo selecto',
    cpre: '03 — Contacto', ch: '¿Trabajamos<br><strong>juntos?</strong>',
    cdesc: 'Si tienes una idea, un proyecto, un reto o simplemente quieres hacer algo diferente, escríbeme. Trabajo en toda España e internacionalmente.',
    subHero: 'Diseño · Foto · Video · Código · IA',
    manifesto: { label: 'Malenfocat Studio', l1: 'Enfocar distinto', l2: 'no es enfocar mal.' },
    footerClaim: 'Enfocar distinto no es enfocar mal.',
    footerCopy: 'Desde Madrid para todo el mundo',
    navPrev: '← Anterior', navNext: 'Siguiente →', navAll: 'Ver todos',
    proj0: 'Photo Portfolio', proj1: 'Vídeo Reel', proj2: 'AI Influencer', proj3: 'Tour Virtual 360°',
    secContext: 'Contexto', secImages: 'Imágenes', secProcess: 'Proceso',
    secVideo: 'Vídeo', secMore: 'Más imágenes', secSpecs: 'Ficha',
    specRole: 'Rol', specClient: 'Cliente', specYear: 'Año', specTools: 'Herramientas',
    tourHint: 'Arrastra para explorar · Rueda del ratón para zoom',
    tourFullscreen: 'Pantalla completa',
    compareBefore: 'Antes', compareAfter: 'Después',
    proj_photo: {
      category: 'Fotografía',
      title: 'Photo Portfolio',
      subtitle: 'Eventos corporativos, cultura, belleza y momentos únicos; una mirada que busca lo que otros pasan por alto.',
      tags: ['Fotografía','Dirección de arte','Postproducción'],
      ctx: ['Selección de trabajos realizados en distintos contextos: eventos, retratos, proyectos personales y colaboraciones. Más que un único proyecto, es una forma de trabajar y de mirar que se mantiene constante en todos ellos.','Muchas veces el reto no está solo en documentar lo que pasa, sino en encontrar imágenes con intención dentro de situaciones rápidas, caóticas o imprevisibles.'],
      proc: ['El enfoque parte siempre de observar antes de disparar. Entender qué está pasando, qué tipo de energía hay y qué historia se puede contar dentro de ese contexto.','En lugar de buscar solo la imagen “correcta”, intento capturar momentos más naturales: miradas perdidas, gestos a medio hacer, pequeños fallos que hacen que la imagen sea más real.','A nivel técnico, trabajo con luz disponible siempre que es posible, adaptándome al entorno en lugar de forzarlo. En edición, el objetivo no es sobreprocesar, sino reforzar lo que ya está en la imagen.','Muchas veces lo interesante aparece justo donde nadie está mirando.'],
      role: 'Fotografía · Postproducción', client: 'Varios', year: '2017 — 2024', tools: 'Nikon D3400 · Sony A6500 · Sony A7 · Lightroom · Photoshop',
    },
    proj_tfg: {
      category: 'TFG',
      title: 'AI Influencer',
      subtitle: 'Creación de identidad digital, narrativa visual y mundo ficticio; explorando los límites de la imagen generada.',
      tags: ['IA','Web','Vídeo'],
      ctx: ['Trabajo Final de Grado centrado en la creación de una influencer virtual, Tania Costa, y su entorno: la ciudad ficticia de Kernel, dentro de una estética solarpunk.','El reto principal era conseguir consistencia visual en un momento en el que la generación de imagen y vídeo con IA todavía era inestable y poco predecible.'],
      proc: ['El proyecto se construyó utilizando herramientas open source como ComfyUI y modelos basados en Stable Diffusion, trabajando con distintas variantes, checkpoints y LoRAs para definir tanto el personaje como su entorno.','Uno de los puntos clave fue desarrollar un sistema de trabajo que permitiera mantener coherencia entre imágenes: controlando prompts, semillas, referencias visuales y entrenando estilos específicos para Tania Costa.','En lugar de buscar resultados aislados, el enfoque fue crear un flujo reproducible. Esto implicó pruebas constantes, iteración y ajuste fino de parámetros hasta conseguir que el personaje mantuviera identidad entre distintas escenas, poses y contextos.','La ciudad de Kernel se planteó como un espacio coherente dentro del universo visual, explorando una estética solarpunk que combinara tecnología y sostenibilidad.','Uno de los principales problemas fue la inconsistencia facial y corporal típica de estos modelos. Se resolvió combinando LoRAs específicos, control de composición y postproducción en Photoshop.','El proyecto no solo busca un resultado visual, sino entender hasta qué punto estas herramientas pueden utilizarse para construir identidades digitales creíbles.'],
      role: 'Generative AI · Postproducción · Web · XXSS', client: 'Trabajo Final de Grado', year: '2023 — 2024', tools: 'ComfyUI · Google Colab · Photoshop · Hugging Face · Civitai',
    },
    proj_video: {
      category: 'Vídeo',
      title: 'Vídeo Portfolio',
      subtitle: 'Campañas de marca, eventos corporativos, motion graphics y momentos que merecen ser contados bien.',
      tags: ['Producción','Edición','Motion Graphics','Postproducción','Drone'],
      role: 'Producción · Dirección · Edición · Motion', client: 'DUIN · Coelbo · Parc Vallès · Solit', year: '2024 — 2025', tools: 'Sony A7III · Sony A6500 · DJI Mini · Premiere Pro · After Effects · DaVinci · Blender',
      b1label: 'DUIN<br>Campaña 01', b1title: '«La mejor inversión eres tú»', b1desc: 'Campaña completa para DUIN: desde la conceptualización y el guión con storyboards hasta la producción en set y la postproducción final. Dos piezas audiovisuales pensadas para comunicar valor de marca en redes sociales.',
      b2label: 'DUIN<br>Campaña 02', b2title: '«Donde otros ven agua, nosotros vemos evolución»', b2desc: 'Serie de 4 piezas para fomentar el uso de la piscina como espacio de desarrollo y evolución personal. Producción completa en colaboración con el equipo de DUIN.',
      b3label: 'DUIN<br>Verano', b3title: 'Campaña de Verano', b3desc: 'Piezas de contenido estival para DUIN, adaptadas para Instagram Reels y YouTube Shorts.',
      b4label: 'Panelmatic<br>Coelbo', b4title: 'Panelmatic — Coelbo Pump Drivers', b4desc: 'Producción audiovisual técnica con animaciones 3D, motion graphics y grabación en instalaciones reales. Guionización del concepto, dirección de arte y postproducción completa.',
      b5label: 'Parc Vallès<br>Eventos', b5title: 'Parc Vallès — Centro Comercial Terrassa', b5desc: 'Cobertura audiovisual de eventos institucionales y culturales. Grabación, dirección en set y edición final adaptada al tono de cada acto.',
      b6label: 'Drone<br>Solar', b6title: 'Placas solares — Energía renovable', b6desc: 'Sobrevuelos con drone sobre edificios con instalaciones de placas solares para documentar y comunicar su impacto energético.',
      b7label: 'Ana\'s<br>Restaurant', b7title: 'Contenido para Ana\'s Restaurant', b7desc: 'Serie de 5 reels para el restaurante italiano Ana\'s en Barcelona. Dos cocineros protagonizan distintos formatos: conversaciones sobre su vida, recetas explicadas en cámara y un reel solo de recursos con música.',
      b8label: 'The Iberian<br>Lisardo Castro', b8title: 'The Iberian × Jamones Lisardo Castro', b8desc: 'Extracts de un proyecto documental más amplio: el fundador de The Iberian visita las instalaciones de Jamones Lisardo Castro. Grabamos el proceso productivo del jamón, la sala histórica, el corte profesional y las conversaciones entre fundadores. Cuatro vídeos largos para YouTube en proceso de publicación.',
      soon: 'Próximamente',
    },
    proj_tour: {
      category: 'Tour Virtual',
      title: 'Tour Virtual 360°',
      subtitle: 'Captura, postproducción y publicación de espacios en 360°. Fotografía inmersiva que permite explorar cualquier lugar desde cualquier pantalla.',
      tags: ['Fotografía 360°','Postproducción','Tour Virtual','IA'],
      ctx: ['DUIN Sports adquiere el Club SOHO de Badalona, un nuevo gimnasio que incorpora a su red de instalaciones. Para presentarlo digitalmente, se capturan imágenes esféricas en 360° de todas las zonas del espacio.','El trabajo no se limita a la captura: la postproducción incluye pixelado de personas para respetar la privacidad, mejora de calidad de imagen, corrección de color y sustitución de elementos de identidad visual; logos del anterior club reemplazados por los de DUIN.'],
      proc: ['La postproducción de imágenes 360° tiene sus propias particularidades. Al trabajar con proyecciones esféricas, cualquier intervención local afecta a la geometría de la imagen completa. El pixelado de personas, la corrección de logos y la mejora de calidad se hacen teniendo en cuenta esa deformación característica del formato equirectangular.','A continuación, algunos ejemplos del antes y después del proceso:'],
      cap1: 'Sala cycling — sustitución de logos y ajuste de color', cap2: 'Entrada — sustitución de logos y ajuste de color',
      role: 'Captura 360° · Postproducción · Publicación', client: 'Club SOHO Badalona by DUIN Sports', year: '2026', tools: 'Cámara 360° · Photoshop · IA · Krpano',
    },
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
    p1: 'Based in <strong>Madrid</strong>, working on projects across Spain and internationally. Photography, video, design and web development — different languages for the same goal: telling something well, whether it\'s a brand, an event, or whatever challenge you have in mind.',
    p2: 'I care about every detail of the process, from the initial approach to final delivery, and I get fully involved in whatever it takes to make it happen.',
    p3: '<em>"Malenfocat"</em> comes from the Catalan <em>mal enfocat</em> ("out of focus"), a term closely tied to the audiovisual world. More than a mistake, I\'ve always seen it as <strong>another way of looking at things</strong>. The project grows from that: avoiding the overly perfect or predictable, and finding more honest, personal ways to tell stories — whether for a brand, an event or a person.',
    labelSkills: 'Skills',
    skNames: ['Photography','Video & Editing','AI Generation','Graphic Design','Web Development','UX/UI Design'],
    skDescs: ['Portrait, product, event and visual art direction.','Filming, editing, color grading and post-production.','Midjourney, Stable Diffusion and generative creative workflows.','Visual identity, poster design, composition and typography.','HTML, CSS, JS, WordPress and modern static sites.','Wireframes, prototypes and design systems in Figma.'],
    labelWork: '02 — Projects', h2Work: 'Selected work',
    cpre: '03 — Contact', ch: 'Shall we work<br><strong>together?</strong>',
    cdesc: 'If you have an idea, a project, a challenge or simply want to do something different, get in touch. I work across Spain and internationally.',
    subHero: 'Design · Photo · Video · Code · AI',
    manifesto: { label: 'Malenfocat Studio', l1: 'Focusing differently', l2: 'isn\'t focusing incorrectly.' },
    footerClaim: 'Focusing differently isn\'t focusing incorrectly.',
    footerCopy: 'From Madrid to the world',
    navPrev: '← Previous', navNext: 'Next →', navAll: 'All work',
    proj0: 'Photo Portfolio', proj1: 'Video Reel', proj2: 'AI Influencer', proj3: 'Virtual Tour 360°',
    secContext: 'Context', secImages: 'Images', secProcess: 'Process',
    secVideo: 'Video', secMore: 'More images', secSpecs: 'Specs',
    specRole: 'Role', specClient: 'Client', specYear: 'Year', specTools: 'Tools',
    tourHint: 'Drag to explore · Scroll to zoom',
    tourFullscreen: 'Full screen',
    compareBefore: 'Before', compareAfter: 'After',
    proj_photo: {
      category: 'Photography',
      title: 'Photo Portfolio',
      subtitle: 'Corporate events, culture, beauty and unique moments; a perspective that finds what others overlook.',
      tags: ['Photography','Art direction','Post-production'],
      ctx: ['A selection of work across different contexts: events, portraits, personal projects and collaborations. More than a single project, it\'s a consistent way of working and seeing.','Often the challenge isn\'t just documenting what happens, but finding intentional images within fast, chaotic or unpredictable situations.'],
      proc: ['The approach always starts with observing before shooting. Understanding what\'s happening, what kind of energy is in the room and what story can be told within that context.','Rather than chasing the “correct” image, I try to capture more natural moments: lost gazes, half-finished gestures, small imperfections that make the image feel real.','Technically, I work with available light whenever possible, adapting to the environment rather than forcing it. In editing, the goal is not to over-process, but to reinforce what\'s already in the image.','Often the most interesting things appear exactly where nobody is looking.'],
      role: 'Photography · Post-production', client: 'Various', year: '2017 — 2024', tools: 'Nikon D3400 · Sony A6500 · Sony A7 · Lightroom · Photoshop',
    },
    proj_tfg: {
      category: 'Final Degree Project',
      title: 'AI Influencer',
      subtitle: 'Creation of a digital identity, visual narrative and fictional world; exploring the limits of generated imagery.',
      tags: ['AI','Web','Video'],
      ctx: ['A Final Degree Project focused on creating a virtual influencer, Tania Costa, and her world: the fictional city of Kernel, built around a solarpunk aesthetic.','The main challenge was achieving visual consistency at a time when AI image and video generation was still unstable and unpredictable.'],
      proc: ['The project was built using open source tools like ComfyUI and Stable Diffusion-based models, working with different checkpoints and LoRAs to define both the character and her environment.','A key focus was developing a workflow that maintained consistency between images: controlling prompts, seeds, visual references and training specific styles for Tania Costa.','Rather than chasing isolated results, the approach was to create a reproducible pipeline. This meant constant testing, iteration and fine-tuning until the character retained her identity across different scenes, poses and contexts.','The city of Kernel was conceived as a coherent space within the visual universe, exploring a solarpunk aesthetic that combined technology and sustainability.','One of the main challenges was the facial and body inconsistency typical of these models at the time. It was resolved by combining specific LoRAs, composition control and Photoshop post-production.','The project is not just about visual output, but about understanding how far these tools can go in building credible digital identities.'],
      role: 'Generative AI · Post-production · Web · Social Media', client: 'Final Degree Project', year: '2023 — 2024', tools: 'ComfyUI · Google Colab · Photoshop · Hugging Face · Civitai',
    },
    proj_video: {
      category: 'Video',
      title: 'Video Reel',
      subtitle: 'Brand campaigns, corporate events, motion graphics and moments that deserve to be told well.',
      tags: ['Production','Editing','Motion Graphics','Post-production','Drone'],
      role: 'Production · Direction · Editing · Motion', client: 'DUIN · Coelbo · Parc Vallès · Solit', year: '2024 — 2025', tools: 'Sony A7III · Sony A6500 · DJI Mini · Premiere Pro · After Effects · DaVinci · Blender',
      b1label: 'DUIN<br>Campaign 01', b1title: '‘The best investment is you’', b1desc: 'Full campaign for DUIN: from concept and storyboarded scripts through on-set production to final post-production. Two video pieces designed to communicate brand value on social media.',
      b2label: 'DUIN<br>Campaign 02', b2title: '‘Where others see water, we see evolution’', b2desc: 'A series of 4 pieces encouraging the use of the pool as a space for personal growth. Full production in collaboration with the DUIN team.',
      b3label: 'DUIN<br>Summer', b3title: 'Summer Campaign', b3desc: 'Summer content pieces for DUIN, adapted for Instagram Reels and YouTube Shorts.',
      b4label: 'Panelmatic<br>Coelbo', b4title: 'Panelmatic — Coelbo Pump Drivers', b4desc: 'Technical audiovisual production with 3D animations, motion graphics and real-location filming. Concept scripting, art direction and full post-production.',
      b5label: 'Parc Vallès<br>Events', b5title: 'Parc Vallès — Terrassa Shopping Centre', b5desc: 'Audiovisual coverage of institutional and cultural events. Filming, on-set direction and final editing adapted to the tone of each occasion.',
      b6label: 'Drone<br>Solar', b6title: 'Solar panels — Renewable energy', b6desc: 'Drone flights over buildings with solar panel installations to document and communicate their energy impact.',
      soon: 'Coming soon',
    },
    proj_tour: {
      category: 'Virtual Tour',
      title: 'Virtual Tour 360°',
      subtitle: 'Capture, post-production and publishing of 360° spaces. Immersive photography that lets you explore any space from any screen.',
      tags: ['360° Photography','Post-production','Virtual Tour','AI'],
      ctx: ['DUIN Sports acquires Club SOHO in Badalona, a new gym joining their network of facilities. To present it digitally, spherical 360° images are captured across all areas of the space.','The work goes beyond capture: post-production includes blurring people to protect privacy, image quality enhancement, colour correction and replacement of visual identity elements — the previous club\'s logos replaced with DUIN\'s.'],
      proc: ['Post-producing 360° images has its own particularities. When working with spherical projections, any local intervention affects the geometry of the entire image. Blurring people, correcting logos and enhancing quality are all done with the characteristic distortion of the equirectangular format in mind.','Below, some before and after examples from the process:'],
      cap1: 'Cycling room — logo replacement and colour correction', cap2: 'Entrance — logo replacement and colour correction',
      role: '360° Capture · Post-production · Publishing', client: 'Club SOHO Badalona by DUIN Sports', year: '2026', tools: '360° Camera · Photoshop · AI · Krpano',
    },
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

  // Páginas de proyecto — siempre, antes del early return
  applyProjectLang();

  // Links "ver todos"
  document.querySelectorAll('.proj-nav-all').forEach(a => {
    const base = a.getAttribute('data-href') || a.getAttribute('href').split('?')[0].split('#')[0];
    a.setAttribute('data-href', base);
    a.setAttribute('href', lang === 'en' ? base + '?lang=en#work-sec' : base + '#work-sec');
  });

  // Solo en index — salir si no está
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

  // Links "ver todos" ya aplicados arriba
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

function applyProjectLang() {
  const t = TEXTS[lang];
  const path = window.location.pathname;
  let p = null;
  if (path.includes('photo'))      p = t.proj_photo;
  else if (path.includes('video'))  p = t.proj_video;
  else if (path.includes('tfg'))    p = t.proj_tfg;
  else if (path.includes('tour'))   p = t.proj_tour;
  if (!p) return;

  // Hero
  const cat = document.querySelector('.proj-category');
  const h1  = document.querySelector('.proj-title');
  const sub = document.querySelector('.proj-subtitle');
  const tags = document.querySelectorAll('.proj-tags span');
  if (cat) cat.textContent = p.category;
  if (h1)  h1.textContent  = p.title;
  if (sub) sub.textContent = p.subtitle;
  tags.forEach((tag, i) => { if (p.tags[i]) tag.textContent = p.tags[i]; });

  // Labels de sección
  document.querySelectorAll('.proj-col-label').forEach(el => {
    const k = el.getAttribute('data-i18n-sec');
    if (k && t[k]) el.textContent = t[k];
  });

  // Párrafos de contexto
  document.querySelectorAll('[data-i18n-ctx]').forEach(el => {
    const i = parseInt(el.getAttribute('data-i18n-ctx'));
    if (p.ctx && p.ctx[i] !== undefined) el.innerHTML = p.ctx[i];
  });

  // Párrafos de proceso
  document.querySelectorAll('[data-i18n-proc]').forEach(el => {
    const i = parseInt(el.getAttribute('data-i18n-proc'));
    if (p.proc && p.proc[i] !== undefined) el.innerHTML = p.proc[i];
  });

  // Ficha técnica
  const specKeys = ['role','client','year','tools'];
  document.querySelectorAll('.spec-label').forEach((el, i) => {
    const keys = ['specRole','specClient','specYear','specTools'];
    if (t[keys[i]]) el.textContent = t[keys[i]];
  });
  document.querySelectorAll('.spec-val[data-i18n-spec]').forEach(el => {
    const k = el.getAttribute('data-i18n-spec');
    if (p[k]) el.textContent = p[k];
  });

  // Bloques específicos de video.html
  if (path.includes('video') && p) {
    for (let i = 1; i <= 8; i++) {
      const lbl = document.querySelector(`[data-i18n-vid-label="b${i}"]`);
      const ttl = document.querySelector(`[data-i18n-vid-title="b${i}"]`);
      const dsc = document.querySelector(`[data-i18n-vid-desc="b${i}"]`);
      if (lbl && p[`b${i}label`]) lbl.innerHTML = p[`b${i}label`];
      if (ttl && p[`b${i}title`]) ttl.textContent = p[`b${i}title`];
      if (dsc && p[`b${i}desc`])  dsc.textContent = p[`b${i}desc`];
    }
    document.querySelectorAll('.soon-label').forEach(el => {
      if (p.soon) el.textContent = p.soon;
    });
  }

  // Tour específico
  const hint = document.querySelector('.tour-hint');
  const fsBtn = document.querySelector('.tour-fullscreen-btn span');
  if (hint) hint.textContent = t.tourHint;
  if (fsBtn) fsBtn.textContent = t.tourFullscreen;
  document.querySelectorAll('.compare-label:not(.compare-label--after)').forEach(el => el.textContent = t.compareBefore);
  document.querySelectorAll('.compare-label--after').forEach(el => el.textContent = t.compareAfter);
  const caps = document.querySelectorAll('[data-i18n-cap]');
  caps.forEach(el => {
    const k = el.getAttribute('data-i18n-cap');
    if (p[k]) el.textContent = p[k];
  });
}