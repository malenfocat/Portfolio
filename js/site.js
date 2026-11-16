/* SITE.JS — comportamiento común de las páginas de proyecto */
(()=>{
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const yr=$('#yr'); if(yr) yr.textContent=new Date().getFullYear();

/* cursor */
const dot=$('#dot');
if(dot){
  if(matchMedia('(hover:hover) and (pointer:fine)').matches){
    let mx=innerWidth/2,my=innerHeight/2,x=mx,y=my;
    addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
    (function loop(){ x+=(mx-x)*.15; y+=(my-y)*.15; dot.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
    $$('a,button,.proj-img-wrap').forEach(el=>{
      el.addEventListener('mouseenter',()=>dot.classList.add('big'));
      el.addEventListener('mouseleave',()=>dot.classList.remove('big'));
    });
  }else dot.remove();
}

/* botones magnéticos */
$$('.cta,.nav-cta,.proj-nav-all').forEach(b=>{
  b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`;});
  b.addEventListener('mouseleave',()=>{b.style.transform='';});
});

/* progreso + parallax de imágenes anchas */
const prog=$('#prog'), wide=$$('.proj-full-img,.proj-cover');
function onScroll(){
  prog.style.transform=`scaleX(${scrollY/(document.documentElement.scrollHeight-innerHeight||1)})`;
  wide.forEach(s=>{
    const img=s.querySelector('img'); if(!img) return;
    const r=s.getBoundingClientRect(); if(r.bottom<0||r.top>innerHeight) return;
    img.style.transform=`translateY(${(r.top/innerHeight-.5)*90}px)`;
  });
}
addEventListener('scroll',onScroll,{passive:true}); onScroll();

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.08});
$$('.proj-section,.video-reel-item,.tour-compare-item,.proj-grid-2,.proj-grid-3').forEach(el=>io.observe(el));
})();

/* menú móvil (hamburguesa) */
(function(){
  const nav=document.querySelector('nav'), ul=nav&&nav.querySelector('ul'); if(!ul) return;
  const links=[...ul.querySelectorAll('a')];
  const b=document.createElement('button'); b.className='burger'; b.type='button'; b.setAttribute('aria-label','Menú'); b.setAttribute('aria-expanded','false'); b.innerHTML='<span></span><span></span>';
  nav.appendChild(b);
  const m=document.createElement('div'); m.className='mmenu'; m.setAttribute('aria-hidden','true');
  m.innerHTML=links.map((a,i)=>'<a class="ml" href="'+a.getAttribute('href')+'"><small>0'+(i+1)+'</small>'+a.textContent+'</a>').join('')+'<div class="mm-foot"><a href="mailto:info@malenfocat.com">info@malenfocat.com</a><span>Madrid · Malenfocat</span></div>';
  document.body.appendChild(m);
  const set=o=>{document.body.classList.toggle('menu-open',o);b.setAttribute('aria-expanded',o);m.setAttribute('aria-hidden',!o);};
  b.addEventListener('click',()=>set(!document.body.classList.contains('menu-open')));
  m.addEventListener('click',e=>{if(e.target.closest('a'))set(false);});
  addEventListener('keydown',e=>{if(e.key==='Escape')set(false);});
  matchMedia('(min-width:861px)').addEventListener('change',e=>{if(e.matches)set(false);});
})();
