const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
let W, H;

const TEAL = '#3a8f8c', BLACK = '#111111';
const word = 'MALENFOCAT®';

const CHALLENGES = [
  { key: 0, targetColor: BLACK, zone: 'center', isTeal: false },
  { key: 1, targetColor: TEAL,  zone: 'right',  isTeal: true  },
  { key: 2, targetColor: 'all', zone: 'top',    isTeal: true  },
];

let currentChallenge = 0, completedChallenges = [], challengeComplete = false, gameOver = false, revealTimer = null;
let shapes = [], letterPos = [];
let scrollP = 0, prevScrollP = 0;
let pulling = false;
let checkT = 0;

const rewardOverlay  = document.getElementById('reward-overlay');
const skillFlash     = document.getElementById('skill-flash');
const hintBox        = document.getElementById('hint-box');
const challengeBox   = document.getElementById('challenge-box');
const challengeTextEl= document.getElementById('challenge-text');
const progressRow    = document.getElementById('progress-row');

function buildDots() {
  progressRow.innerHTML = '';
  CHALLENGES.forEach((_, i) => {
    const d = document.createElement('div');
    const done = completedChallenges.includes(i);
    d.className = 'prog-dot' + (done ? (CHALLENGES[i].isTeal ? ' done-t' : ' done-b') : '');
    progressRow.appendChild(d);
  });
}

function showChallenge() {
  if (gameOver) return;
  challengeTextEl.textContent = TEXTS[lang].challenge[currentChallenge];
  buildDots();
  challengeBox.style.opacity = '1';
  skillFlash.classList.remove('show');
}

function triggerReveal(ch) {
  challengeComplete = true;
  document.getElementById('sf-title').textContent = TEXTS[lang].skillFlashTitle[ch.key];
  document.getElementById('sf-sub').textContent   = TEXTS[lang].skillFlashSub[ch.key];
  skillFlash.classList.add('show');
  challengeBox.style.opacity = '0';
  completedChallenges.push(currentChallenge);
  buildDots();
  clearTimeout(revealTimer);
  revealTimer = setTimeout(() => {
    skillFlash.classList.remove('show');
    currentChallenge++;
    challengeComplete = false;
    if (currentChallenge >= CHALLENGES.length) {
      gameOver = true;
      challengeBox.style.opacity = '0';
      hintBox.textContent = '';
      setTimeout(() => rewardOverlay.classList.add('show'), 600);
    } else {
      showChallenge();
    }
  }, 3000);
}

function getZoneRect(zone) {
  const m = 90;
  if (zone === 'center') return { x: W/2-m, y: H/2-m, w: m*2, h: m*2 };
  if (zone === 'right')  return { x: W-m*2.2, y: 0, w: m*2.2, h: H };
  if (zone === 'top')    return { x: 0, y: 0, w: W, h: m*1.8 };
}

class Shape {
  constructor(cfg) {
    Object.assign(this, cfg);
    this.vx = (Math.random()-.5)*.7; this.vy = (Math.random()-.5)*.7;
    this.vrot = (Math.random()-.5)*.013; this.captureFlash = 0;
    this.homeX = cfg.x; this.homeY = cfg.y;
  }
  draw(alpha) {
    ctx.save();
    const fl = this.captureFlash > 0 ? (.55 + Math.sin(this.captureFlash*.5)*.45) : 1;
    ctx.globalAlpha = (alpha ?? 1) * fl;
    ctx.translate(this.x, this.y); ctx.rotate(this.rot);
    const isDark = document.body.classList.contains('dark');
    const col = this.color === BLACK ? (isDark ? '#f0f0f0' : '#111111') : TEAL;
    ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = 2.5;
    ctx.beginPath();
    const s = this.size;
    if      (this.type==='circle')  { ctx.arc(0,0,s,0,Math.PI*2); }
    else if (this.type==='rect')    { ctx.rect(-s/2,-s/2,s,s); }
    else if (this.type==='tri')     { ctx.moveTo(0,-s);ctx.lineTo(s*.87,s*.5);ctx.lineTo(-s*.87,s*.5);ctx.closePath(); }
    else if (this.type==='diamond') { ctx.moveTo(0,-s);ctx.lineTo(s*.6,0);ctx.lineTo(0,s);ctx.lineTo(-s*.6,0);ctx.closePath(); }
    else if (this.type==='line')    { ctx.moveTo(-s,0);ctx.lineTo(s,0); }
    if (this.filled) ctx.fill(); else ctx.stroke();
    ctx.restore();
    if (this.captureFlash > 0) this.captureFlash--;
  }
  update(sp) {
    if (sp > 0.02) return;
    const dx = this.x-MX, dy = this.y-MY, dist = Math.sqrt(dx*dx+dy*dy)||1;
    if (pulling) {
      const str = Math.min(5500, 160000/(dist*dist+80));
      const a = Math.atan2(dy,dx);
      this.vx -= Math.cos(a)*str*.016; this.vy -= Math.sin(a)*str*.016;
      this.vx *= 0.88; this.vy *= 0.88;
    } else {
      const rep = 105;
      if (dist < rep) { const f=(rep-dist)/rep, a=Math.atan2(dy,dx); this.vx+=Math.cos(a)*f*1.9; this.vy+=Math.sin(a)*f*1.9; }
      this.vx *= .91; this.vy *= .91;
    }
    this.vrot *= .97; this.x += this.vx; this.y += this.vy; this.rot += this.vrot;
    const mg = this.size+4;
    if (this.x<mg)   { this.x=mg;   this.vx= Math.abs(this.vx)*.72; }
    if (this.x>W-mg) { this.x=W-mg; this.vx=-Math.abs(this.vx)*.72; }
    if (this.y<mg)   { this.y=mg;   this.vy= Math.abs(this.vy)*.72; }
    if (this.y>H-mg) { this.y=H-mg; this.vy=-Math.abs(this.vy)*.72; }
  }
  scatter() { this.x=this.homeX; this.y=this.homeY; this.vx=(Math.random()-.5)*4; this.vy=(Math.random()-.5)*4; this.vrot=(Math.random()-.5)*.02; }
}

function collide(a,b) {
  if (a.type==='line'||b.type==='line') return;
  const dx=b.x-a.x, dy=b.y-a.y, dist=Math.sqrt(dx*dx+dy*dy)||1, min=(a.size+b.size)*.7;
  if (dist<min) {
    const nx=dx/dist, ny=dy/dist, ov=(min-dist)/2;
    a.x-=nx*ov; a.y-=ny*ov; b.x+=nx*ov; b.y+=ny*ov;
    const dvx=a.vx-b.vx, dvy=a.vy-b.vy, dot=dvx*nx+dvy*ny;
    if (dot>0) { const imp=dot*.82; a.vx-=imp*nx; a.vy-=imp*ny; b.vx+=imp*nx; b.vy+=imp*ny; a.vrot+=(Math.random()-.5)*.008; b.vrot+=(Math.random()-.5)*.008; }
  }
}

function initShapes() {
  shapes = [];
  const d = [
    {type:'circle',x:W*.15,y:H*.22,size:44,filled:false,color:BLACK,rot:0},
    {type:'circle',x:W*.82,y:H*.68,size:32,filled:true, color:TEAL, rot:0},
    {type:'circle',x:W*.5, y:H*.12,size:20,filled:false,color:TEAL, rot:0},
    {type:'circle',x:W*.28,y:H*.78,size:16,filled:true, color:BLACK,rot:0},
    {type:'circle',x:W*.72,y:H*.28,size:12,filled:false,color:BLACK,rot:0},
    {type:'rect',  x:W*.24,y:H*.38,size:34,filled:false,color:BLACK,rot:.3},
    {type:'rect',  x:W*.76,y:H*.55,size:24,filled:true, color:TEAL, rot:.7},
    {type:'rect',  x:W*.6, y:H*.18,size:17,filled:false,color:BLACK,rot:.5},
    {type:'rect',  x:W*.1, y:H*.62,size:21,filled:true, color:BLACK,rot:.2},
    {type:'rect',  x:W*.9, y:H*.35,size:13,filled:false,color:TEAL, rot:1.1},
    {type:'tri',   x:W*.88,y:H*.22,size:30,filled:false,color:BLACK,rot:.1},
    {type:'tri',   x:W*.38,y:H*.82,size:22,filled:true, color:TEAL, rot:.4},
    {type:'tri',   x:W*.55,y:H*.48,size:17,filled:false,color:TEAL, rot:.8},
    {type:'tri',   x:W*.18,y:H*.5, size:13,filled:true, color:BLACK,rot:1.2},
    {type:'diamond',x:W*.2,y:H*.58,size:26,filled:false,color:TEAL, rot:0},
    {type:'diamond',x:W*.78,y:H*.38,size:19,filled:true,color:BLACK,rot:.3},
    {type:'diamond',x:W*.65,y:H*.75,size:13,filled:false,color:BLACK,rot:.6},
    {type:'line',  x:W*.35,y:H*.08,size:36,filled:false,color:BLACK,rot:-.2},
    {type:'line',  x:W*.65,y:H*.92,size:30,filled:false,color:TEAL, rot:.3},
    {type:'line',  x:W*.92,y:H*.5, size:22,filled:false,color:BLACK,rot:.6},
    {type:'circle',x:W*.44,y:H*.62,size:50,filled:false,color:BLACK,rot:0},
    {type:'rect',  x:W*.5, y:H*.5, size:38,filled:false,color:TEAL, rot:.4},
  ];
  d.forEach(cfg => shapes.push(new Shape(cfg)));
}

function computeLetterPos() {
  if (!W) return;
  const fs = Math.min(W*.085, 72);
  ctx.font = `700 ${fs}px 'Aloevera'`;
  const tw = ctx.measureText(word).width;
  let cx = (W-tw)/2; letterPos = [];
  for (let i = 0; i < word.length; i++) {
    const cw = ctx.measureText(word[i]).width;
    letterPos.push({ x: cx+cw/2, y: H/2, fs });
    cx += cw;
  }
}

function resizeGame() {
  W = canvas.width  = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
  computeLetterPos();
  if (shapes.length === 0) initShapes();
}

function eio(t) { return t<.5 ? 2*t*t : 1-Math.pow(-2*t+2,2)/2; }
function lerp(a,b,t) { return a+(b-a)*t; }
function getTextColor() { return document.body.classList.contains('dark') ? '#f0f0f0' : '#111111'; }

function drawZone(zone, color) {
  const zr = getZoneRect(zone); if (!zr) return;
  ctx.save();
  const isTeal = color===TEAL||color==='all';
  ctx.strokeStyle = isTeal ? 'rgba(58,143,140,.25)' : 'rgba(100,100,100,.2)';
  ctx.fillStyle   = isTeal ? 'rgba(58,143,140,.06)' : 'rgba(100,100,100,.04)';
  ctx.lineWidth=1.5; ctx.setLineDash([5,4]);
  ctx.beginPath(); ctx.rect(zr.x,zr.y,zr.w,zr.h); ctx.fill(); ctx.stroke(); ctx.setLineDash([]);
  ctx.restore();
}

function drawGravityRings() {
  if (!pulling) return;
  ctx.save();
  for (let r=16; r<100; r+=18) {
    ctx.beginPath(); ctx.arc(MX,MY,r,0,Math.PI*2);
    ctx.strokeStyle=`rgba(58,143,140,${.14-r*.0012})`; ctx.lineWidth=1; ctx.stroke();
  }
  ctx.restore();
}

function checkCapture() {
  if (challengeComplete||gameOver) return;
  const ch = CHALLENGES[currentChallenge];
  const zr = getZoneRect(ch.zone); if (!zr) return;
  const targets = shapes.filter(s => ch.targetColor==='all' || s.color===ch.targetColor);
  const inside  = targets.filter(s => s.x>zr.x && s.x<zr.x+zr.w && s.y>zr.y && s.y<zr.y+zr.h);
  if (inside.length/targets.length >= 0.7) { inside.forEach(s=>s.captureFlash=25); triggerReveal(ch); }
}

function gameFrame() {
  ctx.clearRect(0,0,W,H);
  const ep = eio(scrollP);
  const tc = getTextColor();
  if (!gameOver && scrollP<.02) { const ch=CHALLENGES[currentChallenge]; if(ch) drawZone(ch.zone,ch.targetColor); }
  drawGravityRings();
  for (let i=0; i<shapes.length; i++) for (let j=i+1; j<shapes.length; j++) collide(shapes[i],shapes[j]);
  shapes.forEach((s,i) => {
    s.update(ep);
    if (ep > 0.02) {
      const tgt = letterPos[i % letterPos.length];
      if (tgt) { s.x=lerp(s.x,tgt.x,ep*.06); s.y=lerp(s.y,tgt.y,ep*.06); s.rot=lerp(s.rot,0,ep*.08); s.vx*=1-ep*.3; s.vy*=1-ep*.3; }
    }
    s.draw(ep>.72 ? Math.max(0,1-(ep-.72)/.26) : 1);
  });
  if (ep > .58) {
    const fs = letterPos[0]?.fs || 60;
    ctx.font=`700 ${fs}px 'Aloevera'`; ctx.fillStyle=tc;
    ctx.globalAlpha=Math.min(1,(ep-.58)/.3); ctx.textBaseline='middle';
    const tw=ctx.measureText(word).width;
    ctx.fillText(word,(W-tw)/2,H/2);
    if (ep > .8) {
      ctx.globalAlpha=Math.min(1,(ep-.8)/.2);
      ctx.fillStyle=document.body.classList.contains('dark')?'#888':'#444';
      const subFs=Math.max(fs*.15,14);
      ctx.font=`400 ${subFs}px 'Aloevera'`;
      const sw=ctx.measureText(currentSubHero).width;
      ctx.fillText(currentSubHero,(W-sw)/2,H/2+fs*.78);
    }
    ctx.globalAlpha=1;
  }
  checkT++; if(checkT%28===0) checkCapture();
  requestAnimationFrame(gameFrame);
}

// Scroll
const tealBar = document.getElementById('teal-bar');
window.addEventListener('scroll', () => {
  const wrap = document.getElementById('sticky-wrap');
  const rect = wrap.getBoundingClientRect();
  const scrolled = Math.max(0,-rect.top);
  const total = wrap.offsetHeight - window.innerHeight;
  prevScrollP = scrollP; scrollP = Math.min(1, scrolled/total);
  tealBar.style.transform = `scaleX(${scrollP})`;
  if (scrollP<0.02 && prevScrollP>=0.02) shapes.forEach(s=>s.scatter());
});