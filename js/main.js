const curEl=document.getElementById('cur');
let MX=300,MY=300,CX=300,CY=300;

// FIX 2: Detectar touch — si es dispositivo táctil, desactivar cursor custom y restaurar cursor por defecto
const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
if (isTouch) {
  document.body.style.cursor = 'auto';
  if (curEl) curEl.style.display = 'none';
} else {
  document.addEventListener('mousemove',e=>{MX=e.clientX;MY=e.clientY;});
  (function cl(){CX+=(MX-CX)*.13;CY+=(MY-CY)*.13;if(curEl){curEl.style.left=CX+'px';curEl.style.top=CY+'px';}requestAnimationFrame(cl);})();
}

// FIX 1: Eliminado el e.preventDefault() global que bloqueaba TODOS los anchors (incluyendo el mailto del CTA)
// document.querySelectorAll('a').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
// Ahora solo el nav tiene preventDefault, aplicado directamente en su propio listener más abajo

let pulling=false;
document.addEventListener('mousedown',()=>{pulling=true;document.body.classList.add('pulling');});
document.addEventListener('mouseup',()=>{pulling=false;document.body.classList.remove('pulling');});

// En lugar de buscar el botón inmediatamente, esperar a que el nav esté listo
function initNav() {
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      lang = lang === 'es' ? 'en' : 'es';
      langToggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
      applyLang();
      setTimeout(() => applyManifestoLang(lang), 0);
    });
  }
}

// Escuchar el evento que dispara components.js cuando el nav está listo
window.addEventListener('nav:ready', initNav);
// Por si el nav ya estaba en el HTML directamente (sin components.js)
if (document.getElementById('dark-toggle')) initNav();

const TEXTS={
  es:{
    nav:['Trabajo','Sobre mí','Contacto'],
    challenge:['Agrupa las formas NEGRAS en el centro','Lleva las formas TEAL a la derecha','Agrupa TODAS las formas arriba'],
 
    // NUEVO: textos que aparecen al completar cada reto
    skillFlashTitle:['+ de 30 eventos cubiertos.','IA generativa integrada.','Soluciones 360.'],
    skillFlashSub:[
      'Desde bodas hasta rebranding corporativo.',
      'No como tendencia. Como herramienta.',
      'Foto, vídeo, web y diseño. Un interlocutor para todo.'
    ],
 
    hint:'Empuja · Click para atraer · Scroll para revelar',
 
    // NUEVO: texto de bienvenida abajo izquierda
    welcome:'¿Vienes a mirar o a jugar?\nScroll para descubrirlo todo ↓',
 
    rewPre:'🎉 Has completado el juego',
    rewTitle:'Primera consulta<br>gratis para ti',
    rewDesc:'Como recompensa por descubrir Malenfocat Studio, te regalo una sesión de briefing sin coste — foto, vídeo, web o diseño. Tú eliges el proyecto, yo pongo las primeras horas.',
    copyHint:'Toca para copiar el código',
    copied:'¡Copiado al portapapeles!',
    rewBtn:'Usar ahora →',rewBtnAlt:'Seguir explorando',
    labelAbout:'01 — Sobre mí',h2About:'Multidisciplinar<br>por necesidad',
    p1:'Soy creativo con base en <strong>Madrid</strong>, disponible en toda España y para proyectos remotos en cualquier parte. Me muevo entre la cámara, el código y el píxel con la misma comodidad — no porque no haya elegido, sino porque los mejores proyectos <strong>viven en la intersección</strong> de todas esas disciplinas.',
    p2:'"Malenfocat" viene del catalán <em>mal enfocado</em> — una referencia al mundo audiovisual y a lo que vengo a resolver. El nombre no es una excusa; es una <strong>declaración de intenciones</strong>: lo que para otros es ruido, para mí es el punto de partida.',
    labelSkills:'Habilidades',
    skNames:['Fotografía','Video & Edición','Generación con IA','Diseño Gráfico','Desarrollo Web','Diseño UX/UI'],
    skDescs:['Retrato, producto, evento y dirección de arte visual.','Grabación, montaje, color grading y postproducción.','Midjourney, Stable Diffusion y flujos generativos creativos.','Identidad visual, cartelería, composición y tipografía.','HTML, CSS, JS, WordPress y sitios estáticos modernos.','Wireframes, prototipos y sistemas de diseño en Figma.'],
    labelWork:'02 — Proyectos',h2Work:'Trabajo selecto',
    cpre:'03 — Contacto',ch:'¿Trabajamos<br><strong>juntos?</strong>',
    cdesc:'Basado en Madrid, disponible en toda España y para proyectos remotos en cualquier parte del mundo.',
    subHero:'Diseño · Foto · Video · Código · IA',
    scrollHint:'Scroll para revelar',
  },
  en:{
    nav:['Work','About','Contact'],
    challenge:['Group the BLACK shapes in the center','Move the TEAL shapes to the right','Group ALL shapes at the top'],
 
    skillFlashTitle:['30+ events covered.','Generative AI integrated.','360 solutions.'],
    skillFlashSub:[
      'From weddings to corporate rebranding.',
      'Not as a trend. As a tool.',
      'Photo, video, web and design. One contact for everything.'
    ],
 
    hint:'Push · Click to attract · Scroll to reveal',
    welcome:'Here to look or to play?\nScroll to discover everything ↓',
 
    rewPre:'🎉 You completed the game',
    rewTitle:'First consultation<br>free for you',
    rewDesc:'As a reward for discovering Malenfocat Studio, I offer you a free briefing session — photo, video, web or design. You choose the project, I put in the first hours.',
    copyHint:'Tap to copy the code',
    copied:'Copied to clipboard!',
    rewBtn:'Use now →',rewBtnAlt:'Keep exploring',
    labelAbout:'01 — About',h2About:'Multidisciplinary<br>by necessity',
    p1:'I\'m a creative based in <strong>Madrid</strong>, available across Spain and for remote projects anywhere. I move between camera, code and pixel with equal ease — not because I haven\'t chosen, but because the best projects <strong>live at the intersection</strong> of all those disciplines.',
    p2:'"Malenfocat" comes from Catalan for <em>out of focus</em> — a reference to the audiovisual world and what I\'m here to solve. The name isn\'t an excuse; it\'s a <strong>declaration of intent</strong>: what others call noise, I call a starting point.',
    labelSkills:'Skills',
    skNames:['Photography','Video & Editing','AI Generation','Graphic Design','Web Development','UX/UI Design'],
    skDescs:['Portrait, product, event and visual art direction.','Filming, editing, color grading and post-production.','Midjourney, Stable Diffusion and generative creative workflows.','Visual identity, poster design, composition and typography.','HTML, CSS, JS, WordPress and modern static sites.','Wireframes, prototypes and design systems in Figma.'],
    labelWork:'02 — Projects',h2Work:'Selected work',
    cpre:'03 — Contact',ch:'Shall we work<br><strong>together?</strong>',
    cdesc:'Based in Madrid, available across Spain and for remote projects anywhere in the world.',
    subHero:'Design · Photo · Video · Code · AI',
    scrollHint:'Scroll to reveal',
  }
};

let lang='es';


function applyLang(){
  const t=TEXTS[lang];
  document.getElementById('hint-box').textContent=t.hint;
  document.getElementById('rew-pre').textContent=t.rewPre;
  document.getElementById('rew-title').innerHTML=t.rewTitle;
  document.getElementById('rew-desc').textContent=t.rewDesc;
  document.getElementById('copy-hint').textContent=t.copyHint;
  document.getElementById('rew-contact').textContent=t.rewBtn;
  document.getElementById('rew-close').textContent=t.rewBtnAlt;
  document.getElementById('label-about').textContent=t.labelAbout;
  document.getElementById('h2-about').innerHTML=t.h2About;
  document.getElementById('about-p1').innerHTML=t.p1;
  document.getElementById('about-p2').innerHTML=t.p2;
  document.getElementById('label-skills').textContent=t.labelSkills;
  document.getElementById('label-work').textContent=t.labelWork;
  document.getElementById('h2-work').textContent=t.h2Work;
  document.getElementById('cpre').textContent=t.cpre;
  document.getElementById('ch').innerHTML=t.ch;
  document.getElementById('cdesc').textContent=t.cdesc;
  for(let i=1;i<=6;i++){
    document.getElementById(`sk${i}n`).textContent=t.skNames[i-1];
    document.getElementById(`sk${i}d`).textContent=t.skDescs[i-1];
  }
  if(!gameOver&&currentChallenge<CHALLENGES.length)
    document.getElementById('challenge-text').textContent=t.challenge[currentChallenge];
  currentSubHero=t.subHero;
}

let currentSubHero=TEXTS.es.subHero;

document.getElementById('code-wrap').addEventListener('click',()=>{
  navigator.clipboard?.writeText('MALENFOCAT-FREE').catch(()=>{});
  document.getElementById('copy-hint').style.display='none';
  document.getElementById('copy-confirm').style.display='block';
});
document.getElementById('rew-contact').addEventListener('click',()=>document.getElementById('reward-overlay').classList.remove('show'));
document.getElementById('rew-close').addEventListener('click',()=>document.getElementById('reward-overlay').classList.remove('show'));

const canvas=document.getElementById('c');
const ctx=canvas.getContext('2d');
let W,H;

// FIX 3: resize guarda estado del juego y solo recalcula dimensiones + posiciones de letras
// Las shapes NO se reinician para no perder el progreso del challenge
function resize(){
  W=canvas.width=canvas.offsetWidth;
  H=canvas.height=canvas.offsetHeight;
  computeLetterPos();
  // Solo reiniciar shapes si todavía no se han creado (primera carga)
  if(shapes.length===0) init();
}

const TEAL='#3a8f8c',BLACK='#111111';
const word='MALENFOCAT®';

const CHALLENGES=[
  {key:0,targetColor:BLACK,zone:'center',skill:'Fotografía',isTeal:false},
  {key:1,targetColor:TEAL,zone:'right',skill:'Video & Edición',isTeal:true},
  {key:2,targetColor:'all',zone:'top',skill:'Generación con IA',isTeal:true},
];

let currentChallenge=0,completedChallenges=[],challengeComplete=false,gameOver=false,revealTimer=null;

const rewardOverlay=document.getElementById('reward-overlay');
const skillFlash=document.getElementById('skill-flash');
const sfWord=document.getElementById('sf-word');
const hintBox=document.getElementById('hint-box');
const challengeBox=document.getElementById('challenge-box');
const challengeTextEl=document.getElementById('challenge-text');
const progressRow=document.getElementById('progress-row');

function buildDots(){
  progressRow.innerHTML='';
  CHALLENGES.forEach((_,i)=>{
    const d=document.createElement('div');
    const done=completedChallenges.includes(i);
    d.className='prog-dot'+(done?(CHALLENGES[i].isTeal?' done-t':' done-b'):'');
    progressRow.appendChild(d);
  });
}

function showChallenge(){
  const wb = document.getElementById('welcome-box');
  if(wb && currentChallenge > 0) wb.classList.add('hidden');
  // O ocultarlo cuando se completa el primer reto — dentro de triggerReveal:
  if(ch.key === 0) { const wb = document.getElementById('welcome-box'); if(wb) wb.classList.add('hidden'); }
  if(gameOver)return;
  challengeTextEl.textContent=TEXTS[lang].challenge[currentChallenge];
  buildDots();challengeBox.style.opacity='1';skillFlash.classList.remove('show');
}
showChallenge();

function triggerReveal(ch){
  challengeComplete=true;
 
  const title = document.getElementById('sf-title');
  const sub   = document.getElementById('sf-sub');
  if(title) title.textContent = TEXTS[lang].skillFlashTitle[ch.key];
  if(sub)   sub.textContent   = TEXTS[lang].skillFlashSub[ch.key];
 
  skillFlash.classList.add('show');
  challengeBox.style.opacity='0';
  completedChallenges.push(currentChallenge); buildDots();
  clearTimeout(revealTimer);
  revealTimer=setTimeout(()=>{
    skillFlash.classList.remove('show'); currentChallenge++; challengeComplete=false;
    if(currentChallenge>=CHALLENGES.length){
      gameOver=true;
      challengeBox.style.opacity='0';
      hintBox.textContent='';
      setTimeout(()=>rewardOverlay.classList.add('show'),600);
    } else showChallenge();
  },3000); // 3s para que dé tiempo a leerlo
}

function getZoneRect(zone){
  const m=90;
  if(zone==='center')return{x:W/2-m,y:H/2-m,w:m*2,h:m*2};
  if(zone==='right')return{x:W-m*2.2,y:0,w:m*2.2,h:H};
  if(zone==='top')return{x:0,y:0,w:W,h:m*1.8};
}

class Shape{
  constructor(cfg){
    Object.assign(this,cfg);
    this.vx=(Math.random()-.5)*.7;this.vy=(Math.random()-.5)*.7;
    this.vrot=(Math.random()-.5)*.013;this.captureFlash=0;
    this.homeX=cfg.x;this.homeY=cfg.y;
  }
  draw(alpha){
    ctx.save();
    const fl=this.captureFlash>0?(.55+Math.sin(this.captureFlash*.5)*.45):1;
    ctx.globalAlpha=(alpha??1)*fl;
    ctx.translate(this.x,this.y);ctx.rotate(this.rot);
    const isDark=document.body.classList.contains('dark');
    const col=this.color===BLACK?(isDark?'#f0f0f0':'#111111'):TEAL;
    ctx.strokeStyle=col;ctx.fillStyle=col;ctx.lineWidth=2.5;
    ctx.beginPath();
    const s=this.size;
    if(this.type==='circle'){ctx.arc(0,0,s,0,Math.PI*2);}
    else if(this.type==='rect'){ctx.rect(-s/2,-s/2,s,s);}
    else if(this.type==='tri'){ctx.moveTo(0,-s);ctx.lineTo(s*.87,s*.5);ctx.lineTo(-s*.87,s*.5);ctx.closePath();}
    else if(this.type==='diamond'){ctx.moveTo(0,-s);ctx.lineTo(s*.6,0);ctx.lineTo(0,s);ctx.lineTo(-s*.6,0);ctx.closePath();}
    else if(this.type==='line'){ctx.moveTo(-s,0);ctx.lineTo(s,0);}
    if(this.filled)ctx.fill();else ctx.stroke();
    ctx.restore();
    if(this.captureFlash>0)this.captureFlash--;
  }
  update(sp){
    if(sp>0.02)return;
    const dx=this.x-MX,dy=this.y-MY,dist=Math.sqrt(dx*dx+dy*dy)||1;
    if(pulling){
      const str=Math.min(5500,160000/(dist*dist+80));
      const a=Math.atan2(dy,dx);
      this.vx-=Math.cos(a)*str*.016;this.vy-=Math.sin(a)*str*.016;
      this.vx*=0.88;this.vy*=0.88;
    } else {
      const rep=105;
      if(dist<rep){const f=(rep-dist)/rep,a=Math.atan2(dy,dx);this.vx+=Math.cos(a)*f*1.9;this.vy+=Math.sin(a)*f*1.9;}
      this.vx*=.91;this.vy*=.91;
    }
    this.vrot*=.97;this.x+=this.vx;this.y+=this.vy;this.rot+=this.vrot;
    const mg=this.size+4;
    if(this.x<mg){this.x=mg;this.vx=Math.abs(this.vx)*.72;}
    if(this.x>W-mg){this.x=W-mg;this.vx=-Math.abs(this.vx)*.72;}
    if(this.y<mg){this.y=mg;this.vy=Math.abs(this.vy)*.72;}
    if(this.y>H-mg){this.y=H-mg;this.vy=-Math.abs(this.vy)*.72;}
  }
  scatter(){this.x=this.homeX;this.y=this.homeY;this.vx=(Math.random()-.5)*4;this.vy=(Math.random()-.5)*4;this.vrot=(Math.random()-.5)*.02;}
}

function collide(a,b){
  if(a.type==='line'||b.type==='line')return;
  const dx=b.x-a.x,dy=b.y-a.y,dist=Math.sqrt(dx*dx+dy*dy)||1,min=(a.size+b.size)*.7;
  if(dist<min){
    const nx=dx/dist,ny=dy/dist,ov=(min-dist)/2;
    a.x-=nx*ov;a.y-=ny*ov;b.x+=nx*ov;b.y+=ny*ov;
    const dvx=a.vx-b.vx,dvy=a.vy-b.vy,dot=dvx*nx+dvy*ny;
    if(dot>0){const imp=dot*.82;a.vx-=imp*nx;a.vy-=imp*ny;b.vx+=imp*nx;b.vy+=imp*ny;a.vrot+=(Math.random()-.5)*.008;b.vrot+=(Math.random()-.5)*.008;}
  }
}

// FIX 3: shapes declarado antes de resize para que la guardia shapes.length===0 funcione
let shapes=[];

function init(){
  shapes=[];
  const d=[
    {type:'circle',x:W*.15,y:H*.22,size:44,filled:false,color:BLACK,rot:0},
    {type:'circle',x:W*.82,y:H*.68,size:32,filled:true,color:TEAL,rot:0},
    {type:'circle',x:W*.5,y:H*.12,size:20,filled:false,color:TEAL,rot:0},
    {type:'circle',x:W*.28,y:H*.78,size:16,filled:true,color:BLACK,rot:0},
    {type:'circle',x:W*.72,y:H*.28,size:12,filled:false,color:BLACK,rot:0},
    {type:'rect',x:W*.24,y:H*.38,size:34,filled:false,color:BLACK,rot:.3},
    {type:'rect',x:W*.76,y:H*.55,size:24,filled:true,color:TEAL,rot:.7},
    {type:'rect',x:W*.6,y:H*.18,size:17,filled:false,color:BLACK,rot:.5},
    {type:'rect',x:W*.1,y:H*.62,size:21,filled:true,color:BLACK,rot:.2},
    {type:'rect',x:W*.9,y:H*.35,size:13,filled:false,color:TEAL,rot:1.1},
    {type:'tri',x:W*.88,y:H*.22,size:30,filled:false,color:BLACK,rot:.1},
    {type:'tri',x:W*.38,y:H*.82,size:22,filled:true,color:TEAL,rot:.4},
    {type:'tri',x:W*.55,y:H*.48,size:17,filled:false,color:TEAL,rot:.8},
    {type:'tri',x:W*.18,y:H*.5,size:13,filled:true,color:BLACK,rot:1.2},
    {type:'diamond',x:W*.2,y:H*.58,size:26,filled:false,color:TEAL,rot:0},
    {type:'diamond',x:W*.78,y:H*.38,size:19,filled:true,color:BLACK,rot:.3},
    {type:'diamond',x:W*.65,y:H*.75,size:13,filled:false,color:BLACK,rot:.6},
    {type:'line',x:W*.35,y:H*.08,size:36,filled:false,color:BLACK,rot:-.2},
    {type:'line',x:W*.65,y:H*.92,size:30,filled:false,color:TEAL,rot:.3},
    {type:'line',x:W*.92,y:H*.5,size:22,filled:false,color:BLACK,rot:.6},
    {type:'circle',x:W*.44,y:H*.62,size:50,filled:false,color:BLACK,rot:0},
    {type:'rect',x:W*.5,y:H*.5,size:38,filled:false,color:TEAL,rot:.4},
  ];
  d.forEach(cfg=>shapes.push(new Shape(cfg)));
}

let letterPos=[];
function computeLetterPos(){
  if(!W)return;
  const fs=Math.min(W*.085,72);
  ctx.font=`700 ${fs}px 'Aloevera'`;
  const tw=ctx.measureText(word).width;
  let cx=(W-tw)/2;letterPos=[];
  for(let i=0;i<word.length;i++){
    const cw=ctx.measureText(word[i]).width;
    letterPos.push({x:cx+cw/2,y:H/2,fs});cx+=cw;
  }
}

resize();

// FIX 3: el listener de resize ya no llama a init(), solo redimensiona y recalcula letras
window.addEventListener('resize',()=>{ resize(); });

const tealBar=document.getElementById('teal-bar');
let scrollP=0,prevScrollP=0;
window.addEventListener('scroll',()=>{
  const wrap=document.getElementById('sticky-wrap');
  const rect=wrap.getBoundingClientRect();
  const scrolled=Math.max(0,-rect.top);
  const total=wrap.offsetHeight-window.innerHeight;
  prevScrollP=scrollP;scrollP=Math.min(1,scrolled/total);
  tealBar.style.transform=`scaleX(${scrollP})`;
  if(scrollP<0.02&&prevScrollP>=0.02)shapes.forEach(s=>s.scatter());
});

function eio(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;}
function lerp(a,b,t){return a+(b-a)*t;}

function getTextColor(){return document.body.classList.contains('dark')?'#f0f0f0':'#111111';}

function drawZone(zone,color){
  const zr=getZoneRect(zone);if(!zr)return;
  ctx.save();
  const isTealZone=color===TEAL||color==='all';
  ctx.strokeStyle=isTealZone?'rgba(58,143,140,.25)':'rgba(100,100,100,.2)';
  ctx.fillStyle=isTealZone?'rgba(58,143,140,.06)':'rgba(100,100,100,.04)';
  ctx.lineWidth=1.5;ctx.setLineDash([5,4]);
  ctx.beginPath();ctx.rect(zr.x,zr.y,zr.w,zr.h);ctx.fill();ctx.stroke();ctx.setLineDash([]);
  ctx.restore();
}

function drawGravityRings(){
  if(!pulling)return;
  ctx.save();
  for(let r=16;r<100;r+=18){
    ctx.beginPath();ctx.arc(MX,MY,r,0,Math.PI*2);
    ctx.strokeStyle=`rgba(58,143,140,${.14-r*.0012})`;ctx.lineWidth=1;ctx.stroke();
  }
  ctx.restore();
}

let checkT=0;
function checkCapture(){
  if(challengeComplete||gameOver)return;
  const ch=CHALLENGES[currentChallenge];
  const zr=getZoneRect(ch.zone);if(!zr)return;
  const targets=shapes.filter(s=>ch.targetColor==='all'||s.color===ch.targetColor);
  const inside=targets.filter(s=>s.x>zr.x&&s.x<zr.x+zr.w&&s.y>zr.y&&s.y<zr.y+zr.h);
  if(inside.length/targets.length>=0.7){inside.forEach(s=>s.captureFlash=25);triggerReveal(ch);}
}

function frame(){
  ctx.clearRect(0,0,W,H);
  const ep=eio(scrollP);
  const tc=getTextColor();
  if(!gameOver&&scrollP<.02){const ch=CHALLENGES[currentChallenge];if(ch)drawZone(ch.zone,ch.targetColor);}
  drawGravityRings();
  for(let i=0;i<shapes.length;i++)for(let j=i+1;j<shapes.length;j++)collide(shapes[i],shapes[j]);
  shapes.forEach((s,i)=>{
    s.update(ep);
    if(ep>0.02){
      const tgt=letterPos[i%letterPos.length];
      if(tgt){s.x=lerp(s.x,tgt.x,ep*.06);s.y=lerp(s.y,tgt.y,ep*.06);s.rot=lerp(s.rot,0,ep*.08);s.vx*=1-ep*.3;s.vy*=1-ep*.3;}
    }
    s.draw(ep>.72?Math.max(0,1-(ep-.72)/.26):1);
  });
  if(ep>.58){
    const fs=letterPos[0]?.fs||60;
    ctx.font=`700 ${fs}px 'Aloevera'`;ctx.fillStyle=tc;
    ctx.globalAlpha=Math.min(1,(ep-.58)/.3);ctx.textBaseline='middle';
    const tw=ctx.measureText(word).width;
    ctx.fillText(word,(W-tw)/2,H/2);
    if(ep>.8){
      ctx.globalAlpha=Math.min(1,(ep-.8)/.2);
      ctx.fillStyle=document.body.classList.contains('dark')?'#888':'#444';
      const subFs=Math.max(fs*.15,14);
      ctx.font=`400 ${subFs}px 'Aloevera'`;
      const sub=currentSubHero;
      const sw=ctx.measureText(sub).width;
      ctx.fillText(sub,(W-sw)/2,H/2+fs*.78);
    }
    ctx.globalAlpha=1;
  }
  checkT++;if(checkT%28===0)checkCapture();
  requestAnimationFrame(frame);
}
frame();

const obs=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    document.querySelectorAll('.sc-fill').forEach((f,i)=>setTimeout(()=>f.classList.add('vis'),i*140));
    obs.disconnect();
  }
},{threshold:.2});
obs.observe(document.getElementById('skills-list'));

// FIX 1: preventDefault solo en los links del nav, no de forma global
document.querySelectorAll("nav a[data-target]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = link.getAttribute("data-target");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ── MANIFIESTO CANVAS ──────────────────────────────────────── */
(function(){
  const mc = document.getElementById('mcanvas');
  if (!mc) return;
  const mctx = mc.getContext('2d');
  let MW, MH;
 
  function mresize() {
    MW = mc.width = mc.offsetWidth;
    MH = mc.height = mc.offsetHeight;
  }
  mresize();
  window.addEventListener('resize', mresize);
 
  // Formas lentas de fondo — misma paleta pero más tenues
  const MTEAL = 'rgba(58,143,140,';
  const MWHITE = 'rgba(240,240,240,';
 
  const mshapes = [
    { type:'circle', x:.12, y:.2,  size:80,  color:MTEAL,  opacity:.07, vx:.12, vy:.08,  rot:0, vrot:.002  },
    { type:'circle', x:.85, y:.75, size:55,  color:MTEAL,  opacity:.05, vx:-.09,vy:-.06, rot:0, vrot:.001  },
    { type:'rect',   x:.7,  y:.15, size:45,  color:MWHITE, opacity:.04, vx:-.1, vy:.1,   rot:.4,vrot:.003  },
    { type:'rect',   x:.25, y:.8,  size:30,  color:MTEAL,  opacity:.06, vx:.08, vy:-.07, rot:.8,vrot:-.002 },
    { type:'tri',    x:.5,  y:.5,  size:60,  color:MWHITE, opacity:.03, vx:.07, vy:.09,  rot:.2,vrot:.004  },
    { type:'tri',    x:.9,  y:.4,  size:35,  color:MTEAL,  opacity:.08, vx:-.08,vy:.05,  rot:1, vrot:-.003 },
    { type:'diamond',x:.15, y:.6,  size:40,  color:MWHITE, opacity:.04, vx:.1,  vy:-.08, rot:0, vrot:.002  },
    { type:'circle', x:.6,  y:.88, size:25,  color:MWHITE, opacity:.05, vx:-.07,vy:-.09, rot:0, vrot:0     },
    { type:'line',   x:.4,  y:.3,  size:70,  color:MTEAL,  opacity:.06, vx:.06, vy:.07,  rot:.3,vrot:.001  },
    { type:'diamond',x:.78, y:.55, size:20,  color:MTEAL,  opacity:.09, vx:-.1, vy:.08,  rot:.5,vrot:-.004 },
  ].map(s => ({
    ...s,
    x: s.x * (MW || window.innerWidth),
    y: s.y * (MH || window.innerHeight),
  }));
 
  function mdraw() {
    mctx.clearRect(0, 0, MW, MH);
 
    mshapes.forEach(s => {
      // mover suavemente, rebotar en bordes
      s.x += s.vx;
      s.y += s.vy;
      s.rot += s.vrot;
 
      const margin = s.size + 10;
      if (s.x < margin || s.x > MW - margin) s.vx *= -1;
      if (s.y < margin || s.y > MH - margin) s.vy *= -1;
 
      mctx.save();
      mctx.translate(s.x, s.y);
      mctx.rotate(s.rot);
      mctx.strokeStyle = s.color + s.opacity + ')';
      mctx.fillStyle   = s.color + (s.opacity * .3) + ')';
      mctx.lineWidth = 1.5;
 
      mctx.beginPath();
      const sz = s.size;
      if (s.type === 'circle')       { mctx.arc(0, 0, sz, 0, Math.PI*2); }
      else if (s.type === 'rect')    { mctx.rect(-sz/2, -sz/2, sz, sz); }
      else if (s.type === 'tri')     { mctx.moveTo(0,-sz); mctx.lineTo(sz*.87,sz*.5); mctx.lineTo(-sz*.87,sz*.5); mctx.closePath(); }
      else if (s.type === 'diamond') { mctx.moveTo(0,-sz); mctx.lineTo(sz*.6,0); mctx.lineTo(0,sz); mctx.lineTo(-sz*.6,0); mctx.closePath(); }
      else if (s.type === 'line')    { mctx.moveTo(-sz,0); mctx.lineTo(sz,0); }
 
      mctx.stroke();
      if (s.type !== 'line') mctx.fill();
      mctx.restore();
    });
 
    requestAnimationFrame(mdraw);
  }
  mdraw();
 
  // Reveal por scroll con IntersectionObserver
  const msec = document.getElementById('manifesto-sec');
  const mobs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      msec.classList.add('m-visible');
      mobs.disconnect();
    }
  }, { threshold: .35 });
  mobs.observe(msec);
 
  // Traducción integrada con el toggle de idioma existente
  const MTEXTS = {
    es: { label:'Malenfocat Studio', l1:'No todo lo que parece mal hecho', l2:'está mal pensado.' },
    en: { label:'Malenfocat Studio', l1:'Not everything that looks poorly made', l2:'is poorly thought.' },
  };
 
  function applyManifestoLang(l) {
    const t = MTEXTS[l];
    document.getElementById('m-label').textContent  = t.label;
    document.getElementById('m-line1').textContent  = t.l1;
    document.getElementById('m-line2').textContent  = t.l2;
  }
 
 // Esperar a que el nav esté listo antes de enganchar el toggle
  window.addEventListener('nav:ready', () => {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', () => {
      setTimeout(() => applyManifestoLang(lang), 0);
    });
  });
})();

/* ── NAV ADAPTATIVO — detecta fondo oscuro bajo el nav ─────── */
(function(){
  // Secciones que tienen fondo oscuro (negro) independientemente del tema
  const darkSections = ['manifesto-sec', 'work-sec'];

  function updateNav() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  const checkY = nav.offsetHeight + 2;

  let isDark = false;
  darkSections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top <= checkY && rect.bottom >= checkY) isDark = true;
  });

  isDark ? nav.classList.add('nav-light') : nav.classList.remove('nav-light');
}

  // No llamar updateNav() directamente — esperar a que el nav esté en el DOM
  window.addEventListener('scroll', updateNav, { passive: true });
  window.addEventListener('resize', updateNav, { passive: true });
  window.addEventListener('nav:ready', updateNav); // ejecutar cuando el nav esté listo
})();

