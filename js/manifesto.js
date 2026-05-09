(function(){
  const mc = document.getElementById('mcanvas');
  if (!mc) return;
  const mctx = mc.getContext('2d');
  let MW, MH;

  function mresize() { MW=mc.width=mc.offsetWidth; MH=mc.height=mc.offsetHeight; }
  mresize();
  window.addEventListener('resize', mresize);

  const MTEAL  = 'rgba(58,143,140,';
  const MWHITE = 'rgba(240,240,240,';

  const mshapes = [
    {type:'circle', x:.12,y:.2,  size:80, color:MTEAL,  opacity:.07, vx:.12, vy:.08,  rot:0,  vrot:.002 },
    {type:'circle', x:.85,y:.75, size:55, color:MTEAL,  opacity:.05, vx:-.09,vy:-.06, rot:0,  vrot:.001 },
    {type:'rect',   x:.7, y:.15, size:45, color:MWHITE, opacity:.04, vx:-.1, vy:.1,   rot:.4, vrot:.003 },
    {type:'rect',   x:.25,y:.8,  size:30, color:MTEAL,  opacity:.06, vx:.08, vy:-.07, rot:.8, vrot:-.002},
    {type:'tri',    x:.5, y:.5,  size:60, color:MWHITE, opacity:.03, vx:.07, vy:.09,  rot:.2, vrot:.004 },
    {type:'tri',    x:.9, y:.4,  size:35, color:MTEAL,  opacity:.08, vx:-.08,vy:.05,  rot:1,  vrot:-.003},
    {type:'diamond',x:.15,y:.6,  size:40, color:MWHITE, opacity:.04, vx:.1,  vy:-.08, rot:0,  vrot:.002 },
    {type:'circle', x:.6, y:.88, size:25, color:MWHITE, opacity:.05, vx:-.07,vy:-.09, rot:0,  vrot:0    },
    {type:'line',   x:.4, y:.3,  size:70, color:MTEAL,  opacity:.06, vx:.06, vy:.07,  rot:.3, vrot:.001 },
    {type:'diamond',x:.78,y:.55, size:20, color:MTEAL,  opacity:.09, vx:-.1, vy:.08,  rot:.5, vrot:-.004},
  ].map(s => ({ ...s, x: s.x*(MW||window.innerWidth), y: s.y*(MH||window.innerHeight) }));

  function mdraw() {
    mctx.clearRect(0,0,MW,MH);
    mshapes.forEach(s => {
      s.x+=s.vx; s.y+=s.vy; s.rot+=s.vrot;
      const mg=s.size+10;
      if(s.x<mg||s.x>MW-mg) s.vx*=-1;
      if(s.y<mg||s.y>MH-mg) s.vy*=-1;
      mctx.save();
      mctx.translate(s.x,s.y); mctx.rotate(s.rot);
      mctx.strokeStyle=s.color+s.opacity+')';
      mctx.fillStyle  =s.color+(s.opacity*.3)+')';
      mctx.lineWidth=1.5;
      mctx.beginPath();
      const sz=s.size;
      if      (s.type==='circle')  { mctx.arc(0,0,sz,0,Math.PI*2); }
      else if (s.type==='rect')    { mctx.rect(-sz/2,-sz/2,sz,sz); }
      else if (s.type==='tri')     { mctx.moveTo(0,-sz);mctx.lineTo(sz*.87,sz*.5);mctx.lineTo(-sz*.87,sz*.5);mctx.closePath(); }
      else if (s.type==='diamond') { mctx.moveTo(0,-sz);mctx.lineTo(sz*.6,0);mctx.lineTo(0,sz);mctx.lineTo(-sz*.6,0);mctx.closePath(); }
      else if (s.type==='line')    { mctx.moveTo(-sz,0);mctx.lineTo(sz,0); }
      mctx.stroke();
      if(s.type!=='line') mctx.fill();
      mctx.restore();
    });
    requestAnimationFrame(mdraw);
  }
  mdraw();

  const msec = document.getElementById('manifesto-sec');
  new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) { msec.classList.add('m-visible'); }
  }, {threshold:.35}).observe(msec);
})();