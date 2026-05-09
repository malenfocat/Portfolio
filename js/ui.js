// ── CURSOR ───────────────────────────────────────────────────
const curEl = document.getElementById('cur');
let MX=300, MY=300, CX=300, CY=300;

const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
if (isTouch) {
  document.body.style.cursor = 'auto';
  if (curEl) curEl.style.display = 'none';
  const hintEl = document.getElementById('hint-box');
  if (hintEl) hintEl.textContent = 'El juego interactivo solo está disponible en escritorio — ¡pruébalo desde tu ordenador!';
} else {
  document.addEventListener('mousemove', e => { MX=e.clientX; MY=e.clientY; });
  (function cl(){ CX+=(MX-CX)*.13; CY+=(MY-CY)*.13; if(curEl){curEl.style.left=CX+'px';curEl.style.top=CY+'px';} requestAnimationFrame(cl); })();
}

document.addEventListener('mousedown', () => { pulling=true;  document.body.classList.add('pulling'); });
document.addEventListener('mouseup',   () => { pulling=false; document.body.classList.remove('pulling'); });

// ── IDIOMA: fuente única de verdad ───────────────────────────
// Prioridad: ?lang en URL > localStorage > 'es'
(function(){
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const target  = (urlLang==='en'||urlLang==='es') ? urlLang
                : (localStorage.getItem('lang')||'es');
  lang = target;
  // URL limpia cuando es español
  if (urlLang && lang === 'es') {
    const url = new URL(window.location);
    url.searchParams.delete('lang');
    window.history.replaceState({}, '', url);
  }
})();

// Aplicar cuando el nav esté listo
window.addEventListener('nav:ready', () => applyLang());

// ── LANG TOGGLE ──────────────────────────────────────────────
function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.textContent = lang === 'es' ? 'EN' : 'ES';
  btn.addEventListener('click', () => {
    lang = lang==='es' ? 'en' : 'es';
    localStorage.setItem('lang', lang);
    const url = new URL(window.location);
    if (lang==='en') url.searchParams.set('lang','en');
    else url.searchParams.delete('lang');
    window.history.replaceState({}, '', url);
    applyLang();
  });
}
window.addEventListener('nav:ready', initLangToggle);

// ── PROPAGAR IDIOMA EN NAVEGACIÓN ────────────────────────────
// Intercepta clicks — no modifica hrefs estáticos nunca
// Excluye links de nav (scroll suave) y logo
document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (!a) return;
  if (a.hasAttribute('data-nav-link') || a.hasAttribute('data-nav-home')) return;
  const href = a.getAttribute('href');
  if (!href || href.startsWith('mailto') || href.startsWith('http') || href.startsWith('#')) return;
  if (lang === 'es') return;
  e.preventDefault();
  const url = new URL(href, window.location.href);
  url.searchParams.set('lang', 'en');
  window.location.href = url.pathname + url.search;
});

// ── REWARD CARD ──────────────────────────────────────────────
const codeWrap = document.getElementById('code-wrap');
if (codeWrap) {
  codeWrap.addEventListener('click', () => {
    navigator.clipboard?.writeText('MALENFOCAT-FREE').catch(()=>{});
    document.getElementById('copy-hint').style.display = 'none';
    document.getElementById('copy-confirm').style.display = 'block';
  });
  document.getElementById('rew-contact').addEventListener('click', () => document.getElementById('reward-overlay').classList.remove('show'));
  document.getElementById('rew-close').addEventListener('click',   () => document.getElementById('reward-overlay').classList.remove('show'));
}

// ── POPUP INSTRUCCIONES ──────────────────────────────────────
(function(){
  const btn   = document.getElementById('info-btn');
  const popup = document.getElementById('info-popup');
  const close = document.getElementById('info-close');
  if (!btn||!popup) return;
  btn.addEventListener('click', e => { e.stopPropagation(); popup.classList.toggle('open'); });
  close.addEventListener('click', () => popup.classList.remove('open'));
  document.addEventListener('click', e => { if(!popup.contains(e.target)&&e.target!==btn) popup.classList.remove('open'); });
})();

// ── SKILLS OBSERVER ──────────────────────────────────────────
const skillsList = document.getElementById('skills-list');
if (skillsList) {
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting)
      document.querySelectorAll('.sc-fill').forEach((f,i) => setTimeout(()=>f.classList.add('vis'), i*140));
  }, {threshold:.2}).observe(skillsList);
}

// ── NAV ADAPTATIVO ───────────────────────────────────────────
(function(){
  const darkSections = ['manifesto-sec','work-sec'];
  function updateNav() {
    const nav = document.querySelector('nav'); if (!nav) return;
    const checkY = nav.offsetHeight+2;
    let isDark = false;
    darkSections.forEach(id => {
      const el=document.getElementById(id); if(!el) return;
      const r=el.getBoundingClientRect();
      if(r.top<=checkY && r.bottom>=checkY) isDark=true;
    });
    const hero=document.querySelector('.proj-hero');
    if(hero){const r=hero.getBoundingClientRect();if(r.top<=checkY&&r.bottom>=checkY)isDark=true;}
    isDark ? nav.classList.add('nav-light') : nav.classList.remove('nav-light');
  }
  window.addEventListener('scroll', updateNav, {passive:true});
  window.addEventListener('resize', updateNav, {passive:true});
  window.addEventListener('nav:ready', updateNav);
})();