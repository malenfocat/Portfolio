/* Consentimiento de cookies + Google Analytics + contenido de terceros */
(function(){
'use strict';
var GA_ID='G-HHNEE53FWN';            // <-- pega aquí tu ID de medición de Google Analytics 4
var GTM_ID='GTM-WQHXG8SZ';            // <-- o pega aquí tu ID de Google Tag Manager (si usas GTM, deja GA_ID tal cual)
var KEY='mf_consent', BASE=document.currentScript?new URL('../',document.currentScript.src).href:'/';
var COOKIES_URL=BASE+'legal/cookies.html';
var $=function(s,r){return (r||document).querySelector(s);};

function read(){try{var c=JSON.parse(localStorage.getItem(KEY));return c&&c.v===1?c:null;}catch(e){return null;}}
function write(c){try{localStorage.setItem(KEY,JSON.stringify(c));}catch(e){}}

/* ---------- estilos ---------- */
var st=document.createElement('style');
st.textContent=
'.ck{position:fixed;z-index:1000;left:1rem;bottom:1rem;width:min(440px,calc(100% - 2rem));background:#121212;color:#f2f2ee;border:1px solid #2a2a2a;border-radius:20px;padding:1.3rem 1.3rem 1.1rem;font:400 13px/1.55 "DM Sans",sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.55);transform:translateY(24px);opacity:0;visibility:hidden;transition:transform .5s cubic-bezier(.16,1,.3,1),opacity .35s,visibility .35s;}'+
'.ck.on{transform:none;opacity:1;visibility:visible;}'+
'.ck h3{font:700 15px/1.2 "DM Sans",sans-serif;letter-spacing:.02em;margin-bottom:.5rem;}'+
'.ck p{color:#a9a9a4;margin-bottom:.9rem;} .ck a{color:#f2f2ee;text-decoration:underline;text-underline-offset:3px;}'+
'.ck-row{display:flex;gap:.5rem;flex-wrap:wrap;}'+
'.ck button{font:500 12px "DM Sans",sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:.7rem 1.1rem;border-radius:30px;border:1px solid #3a8f8c;background:none;color:#f2f2ee;cursor:pointer;flex:1 1 auto;transition:background .2s,color .2s;}'+
'.ck button:hover{background:#3a8f8c;color:#0a0a0a;} .ck button.pri{background:#3a8f8c;color:#0a0a0a;} .ck button.pri:hover{background:#f2f2ee;border-color:#f2f2ee;}'+
'.ck button.lnk{border-color:#333;color:#a9a9a4;} .ck button.lnk:hover{border-color:#f2f2ee;background:none;color:#f2f2ee;}'+
'.ck-opt{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;padding:.7rem 0;border-top:1px solid #222;} .ck-opt b{display:block;font-weight:500;color:#f2f2ee;margin-bottom:.15rem;} .ck-opt span{color:#8a8a85;font-size:12px;}'+
'.ck-sw{position:relative;flex:none;width:42px;height:24px;margin-top:2px;} .ck-sw input{position:absolute;inset:0;opacity:0;cursor:pointer;margin:0;z-index:2;} .ck-sw i{position:absolute;inset:0;border-radius:20px;background:#2a2a2a;transition:background .2s;} .ck-sw i:after{content:"";position:absolute;left:3px;top:3px;width:18px;height:18px;border-radius:50%;background:#f2f2ee;transition:transform .25s;} .ck-sw input:checked+i{background:#3a8f8c;} .ck-sw input:checked+i:after{transform:translateX(18px);} .ck-sw input:disabled{cursor:default;} .ck-sw input:disabled+i{opacity:.5;} .ck-sw input:focus-visible+i{outline:2px solid #f2f2ee;outline-offset:2px;}'+
'.ck-cfg{display:none;margin-bottom:1rem;} .ck.cfg .ck-cfg{display:block;} .ck.cfg .ck-row.ck-cfg{display:flex;} .ck.cfg .ck-main{display:none;}'+
'.consent-ph{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.8rem;padding:1.2rem;text-align:center;background:#121212;color:#f2f2ee;}'+
'.consent-ph p{font-size:12px;line-height:1.5;color:#8a8a85;max-width:28ch;} .consent-ph a{text-decoration:underline;}'+
'.consent-ph button{font:500 12px "DM Sans",sans-serif;letter-spacing:.1em;text-transform:uppercase;border:1px solid #3a8f8c;color:#3a8f8c;background:none;padding:.65rem 1.2rem;border-radius:30px;cursor:pointer;transition:background .2s,color .2s;} .consent-ph button:hover{background:#3a8f8c;color:#0a0a0a;} .consent-ph .alt{border-color:#333;color:#8a8a85;}'+
'@media (max-width:560px){.ck{left:.6rem;right:.6rem;bottom:.6rem;width:auto;} .ck button{padding:.75rem .6rem;}}';
document.head.appendChild(st);

/* ---------- Google Analytics ---------- */
var gaOn=false;
function loadGA(){
  if(gaOn) return;
  window.dataLayer=window.dataLayer||[];
  if(/^GTM-[A-Z0-9]{4,}$/.test(GTM_ID)&&GTM_ID!=='GTM-XXXXXXX'){
    gaOn=true;dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});
    var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtm.js?id='+GTM_ID;document.head.appendChild(g);return;
  }
  if(!/^G-[A-Z0-9]{6,}$/.test(GA_ID)||GA_ID==='G-XXXXXXXXXX') return;
  gaOn=true;
  var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};
  gtag('js',new Date());gtag('config',GA_ID,{anonymize_ip:true});
}
function clearGA(){
  document.cookie.split(';').forEach(function(c){var n=c.split('=')[0].trim();
    if(/^_ga/.test(n)||n==='_gid'||n==='_gat'){['',' domain='+location.hostname,' domain=.'+location.hostname.replace(/^www\./,'')].forEach(function(d){document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;'+d;});}});
}

/* ---------- contenido de terceros (YouTube, Instagram, TikTok) ---------- */
var embeds=[].slice.call(document.querySelectorAll('iframe[data-src]'));
embeds.forEach(function(f){
  var u=f.dataset.src, name=/instagram/.test(u)?'Instagram':/tiktok/.test(u)?'TikTok':'YouTube';
  var w=f.parentElement; w.style.position='relative';
  var ph=document.createElement('div');ph.className='consent-ph';
  ph.innerHTML='<button type="button">Cargar vídeo</button><p>Al cargarlo, '+name+' puede instalar cookies y recibir tu IP. <a href="'+COOKIES_URL+'">Más info</a></p>';
  ph.querySelector('button').addEventListener('click',function(){load(f);});
  f._ph=ph; w.appendChild(ph);
});
function load(f){if(!f.getAttribute('src'))f.src=f.dataset.src; if(f._ph){f._ph.remove();f._ph=null;}}
function loadAllEmbeds(){embeds.forEach(load);}

/* ---------- aplicar ---------- */
function apply(c){ if(c&&c.a) loadGA(); if(c&&c.m) loadAllEmbeds(); }

/* ---------- banner ---------- */
var box;
function build(){
  if(box) return box;
  box=document.createElement('div');box.className='ck';box.setAttribute('role','dialog');box.setAttribute('aria-label','Preferencias de cookies');
  box.innerHTML=
  '<div class="ck-main"><h3>Tu privacidad</h3><p>Uso cookies de <b>analítica</b> (Google Analytics, para saber qué se visita) y cargo <b>contenido de terceros</b> (YouTube, Instagram, TikTok). Tú decides. <a href="'+COOKIES_URL+'">Más info</a></p>'+
  '<div class="ck-row"><button data-a="no">Rechazar</button><button data-a="cfg" class="lnk">Configurar</button><button data-a="all" class="pri">Aceptar todo</button></div></div>'+
  '<div class="ck-cfg"><h3>Configurar cookies</h3>'+
  '<div class="ck-opt"><div><b>Técnicas</b><span>Recuerdan tu elección. Necesarias, siempre activas.</span></div><label class="ck-sw"><input type="checkbox" checked disabled><i></i></label></div>'+
  '<div class="ck-opt"><div><b>Analítica</b><span>Google Analytics: visitas y uso del sitio, de forma agregada.</span></div><label class="ck-sw"><input type="checkbox" id="ck-a"><i></i></label></div>'+
  '<div class="ck-opt"><div><b>Contenido de terceros</b><span>Vídeos de YouTube, Instagram y TikTok.</span></div><label class="ck-sw"><input type="checkbox" id="ck-m"><i></i></label></div></div>'+
  '<div class="ck-row ck-cfg" style="margin-bottom:0"><button data-a="no">Rechazar todo</button><button data-a="save" class="pri">Guardar</button></div>';
  document.body.appendChild(box);
  box.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var a=b.dataset.a;
    if(a==='cfg'){box.classList.add('cfg');return;}
    if(a==='all') set({a:1,m:1});
    else if(a==='no') set({a:0,m:0});
    else if(a==='save') set({a:$('#ck-a',box).checked?1:0,m:$('#ck-m',box).checked?1:0});
  });
  return box;
}
function open(){
  var b=build(),c=read()||{a:0,m:0};
  $('#ck-a',b).checked=!!c.a;$('#ck-m',b).checked=!!c.m;
  b.classList.toggle('cfg',!!read());
  requestAnimationFrame(function(){b.classList.add('on');});
}
function close(){if(box)box.classList.remove('on');}
function set(c){
  var prev=read();c.v=1;c.ts=Date.now();write(c);close();
  var revoked=prev&&((prev.a&&!c.a)||(prev.m&&!c.m));
  if(!c.a) clearGA();
  if(revoked){location.reload();return;}
  apply(c);
}

/* ---------- init ---------- */
function init(){
  var c=read(); if(c) apply(c); else setTimeout(open,600);
  document.addEventListener('click',function(e){var l=e.target.closest('[data-cookie-settings]');if(l){e.preventDefault();open();}});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
