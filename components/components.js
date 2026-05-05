/* ── COMPONENTS LOADER ──────────────────────────────────────────
   Carga nav.html y footer.html e los inyecta en cada página.
   Detecta si estamos en la raíz o en una subcarpeta (/projects/)
   y ajusta las rutas automáticamente.
────────────────────────────────────────────────────────────── */

(function () {
  // Detectar profundidad de ruta para ajustar el path a /components/
  const depth = location.pathname.split('/').filter(Boolean).length;
  const isSubpage = depth > 1 || location.pathname.includes('/projects/');
  const base = isSubpage ? '../' : './';
  const compBase = base + 'components/';

  /* ── Inyectar un componente en un selector ── */
  async function loadComponent(selector, file, callback) {
    const el = document.querySelector(selector);
    if (!el) return;
    try {
      const res = await fetch(compBase + file);
      if (!res.ok) return;
      const html = await res.text();
      el.innerHTML = html;
      if (callback) callback();
    } catch (e) {
      console.warn('Component load failed:', file, e);
    }
  }

  /* ── NAV ── */
  loadComponent('#nav-placeholder', 'nav.html', () => {
    // Dark mode toggle
    const darkBtn = document.getElementById('dark-toggle');
    if (darkBtn) {
      // Restaurar preferencia guardada
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        darkBtn.textContent = '☀ Light';
      }
      darkBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        darkBtn.textContent = isDark ? '☀ Light' : '☽ Dark';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    }

    // Lang toggle — solo en index, en subpáginas se oculta si no hay i18n
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn && typeof applyLang === 'undefined') {
      // Estamos en una subpágina sin i18n — ocultar el botón
      langBtn.style.display = 'none';
    }

    // Links del nav: si estamos en index, scroll suave; si no, navegar a index + hash
    document.querySelectorAll('[data-nav-link]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        if (location.pathname === '/' || location.pathname.endsWith('index.html')) {
          // Estamos en index — scroll suave
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Estamos en subpágina — ir a index con hash
          location.href = base + 'index.html#' + target;
        }
      });
    });

    // Logo — siempre va a index
    const logo = document.querySelector('[data-nav-home]');
    if (logo) {
      logo.addEventListener('click', e => {
        e.preventDefault();
        location.href = base + 'index.html';
      });
    }

    window.dispatchEvent(new Event('nav:ready'));

    // Nav adaptativo (secciones oscuras) — solo en index
    if (typeof darkSections !== 'undefined') return;
    const nav = document.querySelector('nav');
    const darkIds = ['manifesto-sec', 'work-sec'];
    const darkClasses = ['.proj-hero'];
    function updateNavColor() {
      const navH = nav ? nav.offsetHeight : 0;
      const checkY = navH + 2;
      let isDark = false;
      darkIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= checkY && rect.bottom >= checkY) isDark = true;
      });
      darkClasses.forEach(sel => {
        const el = document.querySelector(sel);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= checkY && rect.bottom >= checkY) isDark = true;
      });
      nav && (isDark ? nav.classList.add('nav-light') : nav.classList.remove('nav-light'));
    }
    window.addEventListener('scroll', updateNavColor, { passive: true });
    window.addEventListener('resize', updateNavColor, { passive: true });
    updateNavColor();
  });

  /* ── FOOTER ── */
  loadComponent('#footer-placeholder', 'footer.html', () => {
    // Año dinámico
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

  /* ── Restaurar tema antes de que cargue el nav (evita flash) ── */
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
})();

