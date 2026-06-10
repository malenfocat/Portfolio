/* ── COMPONENTS LOADER ──────────────────────────────────────────
   Carga nav.html y footer.html e los inyecta en cada página.
   Detecta si estamos en la raíz o en una subcarpeta (/projects/)
   y ajusta las rutas automáticamente.
────────────────────────────────────────────────────────────── */

(function () {
  const depth = location.pathname.split('/').filter(Boolean).length;
  const isSubpage = depth > 1 || location.pathname.includes('/projects/');
  const base = isSubpage ? '../' : './';
  const compBase = base + 'components/';
  // Raíz del sitio: en producción '/', en local file:// usamos base
  const root = location.protocol === 'file:' ? base : '/';

  async function loadComponent(selector, file, callback) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(compBase + file);
      if (!res.ok) return;
      const html = await res.text();
      el.innerHTML = html;
      // Ajustar rutas de assets en componentes según profundidad
      el.querySelectorAll('img[data-src-root]').forEach(img => {
        img.src = base + img.getAttribute('data-src-root');
      });
      if (callback) callback();
    } catch (e) {
      console.warn('Component load failed:', file, e);
    }
  }

  /* ── NAV ── */
  loadComponent('#nav-placeholder', 'nav.html', () => {
    // Logo src dinámico
    const logoImg = document.querySelector('.nav-logo img');
    if (logoImg) logoImg.src = base + 'assets/logo.svg';

    // Dark mode
    const darkBtn = document.getElementById('dark-toggle');
    if (darkBtn) {
      const isDarkNow = document.body.classList.contains('dark');
      darkBtn.textContent = isDarkNow ? '☀ Light' : '☽ Dark';
      darkBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        darkBtn.textContent = isDark ? '☀ Light' : '☽ Dark';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    }

    // Lang toggle — ocultar en subpáginas sin i18n
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn && typeof applyLang === 'undefined') {
      langBtn.style.display = 'none';
    }

    // Helper: construir URL a index con idioma preservado
    function indexUrl(hash) {
      const lang = typeof window.lang !== 'undefined' ? window.lang : localStorage.getItem('lang') || 'es';
      const params = lang === 'en' ? '?lang=en' : '';
      const fragment = hash ? '#' + hash : '';
      return root + params + fragment;
    }

    // Nav links
    document.querySelectorAll('[data-nav-link]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        const onIndex = location.pathname === '/' || location.pathname.endsWith('index.html') || location.pathname === root;
        if (onIndex) {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          location.href = indexUrl(target);
        }
      });
    });

    // Logo — siempre a la raíz
    const logo = document.querySelector('[data-nav-home]');
    if (logo) {
      logo.addEventListener('click', e => {
        e.preventDefault();
        location.href = indexUrl();
      });
    }

    // Ajustar rutas del dropdown según profundidad
    document.querySelectorAll('.nav-drop-link').forEach(a => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('/projects/')) {
        a.setAttribute('href', base + 'projects/' + href.replace('/projects/', ''));
      }
    });

    window.dispatchEvent(new Event('nav:ready'));

    // Nav adaptativo
    const nav = document.querySelector('nav');
    const darkIds = ['manifesto-sec', 'work-sec'];
    function updateNavColor() {
      if (!nav) return;
      const checkY = nav.offsetHeight + 2;
      let isDark = false;
      darkIds.forEach(id => {
        const el = document.getElementById(id); if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= checkY && r.bottom >= checkY) isDark = true;
      });
      const hero = document.querySelector('.proj-hero');
      if (hero) { const r = hero.getBoundingClientRect(); if (r.top <= checkY && r.bottom >= checkY) isDark = true; }
      isDark ? nav.classList.add('nav-light') : nav.classList.remove('nav-light');
    }
    window.addEventListener('scroll', updateNavColor, { passive: true });
    window.addEventListener('resize', updateNavColor, { passive: true });
    updateNavColor();
    // Segundo disparo tras render completo por si el layout no estaba listo
    requestAnimationFrame(updateNavColor);
  });

  /* ── FOOTER ── */
  loadComponent('#footer-placeholder', 'footer.html', () => {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    // Logo del footer con ruta dinámica
    const footerLogo = document.querySelector('.footer-brand img');
    if (footerLogo) footerLogo.src = base + 'assets/logos/malenfocat_logotipo blanc.png';
  });

  /* ── Restaurar tema ── */
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  } else if (!savedTheme) {
    // Sin preferencia guardada: light por defecto, limpiar cualquier clase dark residual
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
})();

