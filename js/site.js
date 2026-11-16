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
