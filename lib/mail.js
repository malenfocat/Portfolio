/* Utilidades y plantillas de correo (compartidas por api/contact.js) */
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nl2br = s => esc(s).replace(/\r?\n/g, '<br>');
const clean = (s, max) => String(s ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
const oneLine = s => String(s).replace(/[\r\n]+/g, ' ');

/* ───────────── Plantillas HTML (tablas + estilos inline: compatibles con Gmail/Outlook) ───────────── */
const TEAL = '#3a8f8c', INK = '#0a0a0a', PAPER = '#f2f2ee';
const FONT = "'Helvetica Neue',Helvetica,Arial,sans-serif";

function shell({ preheader, title, bodyHtml }) {
  return `<!DOCTYPE html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light"><title>${esc(title)}</title></head>
<body style="margin:0;padding:0;background:${PAPER};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${PAPER};">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAPER};padding:32px 12px;">
<tr><td align="center">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:18px;overflow:hidden;">
    <tr><td style="background:${INK};padding:28px 36px;">
      <span style="font-family:${FONT};font-weight:800;font-size:22px;letter-spacing:-0.5px;color:#ffffff;">MALENFOCAT</span>
      <span style="font-family:${FONT};font-size:10px;letter-spacing:3px;color:${TEAL};text-transform:uppercase;padding-left:8px;">Studio</span>
    </td></tr>
    <tr><td style="background:${TEAL};height:4px;line-height:4px;font-size:0;">&nbsp;</td></tr>
    <tr><td style="padding:40px 36px 12px 36px;font-family:${FONT};color:${INK};">${bodyHtml}</td></tr>
    <tr><td style="padding:24px 36px 32px 36px;font-family:${FONT};font-size:12px;line-height:1.6;color:#8a8a85;border-top:1px solid #ececE8;">
      Enfocar distinto no es enfocar mal.<br>Malenfocat · <a href="https://malenfocat.com" style="color:${TEAL};text-decoration:none;">malenfocat.com</a>
    </td></tr>
  </table>
</td></tr></table></body></html>`;
}

const label = t => `<div style="font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${TEAL};font-weight:700;margin:0 0 6px 0;">${t}</div>`;

function renderConfirm({ name, tipo, message }) {
  const first = esc(name.split(' ')[0]);
  const body = `
    <h1 style="margin:0 0 18px 0;font-size:30px;line-height:1.1;letter-spacing:-1px;">Gracias, ${first}.<br><span style="color:${TEAL};">Tu mensaje ya está en foco.</span></h1>
    <p style="margin:0 0 24px 0;font-size:16px;line-height:1.7;color:#333;">He recibido tu mensaje y lo leeré con calma. Te respondo personalmente lo antes posible, normalmente en un par de días laborables.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAPER};border-radius:14px;margin:0 0 28px 0;"><tr><td style="padding:22px 24px;">
      ${tipo.length ? label('Sobre') + `<div style="font-size:15px;margin:0 0 16px 0;">${tipo.map(esc).join(' · ')}</div>` : ''}
      ${label('Tu mensaje')}
      <div style="font-size:15px;line-height:1.65;color:#333;">${nl2br(message)}</div>
    </td></tr></table>
    <p style="margin:0 0 6px 0;font-size:15px;line-height:1.7;color:#333;">Si quieres añadir algo, responde directamente a este correo.</p>
    <p style="margin:0 0 28px 0;font-size:15px;line-height:1.7;color:#333;">Un abrazo,<br><strong>Martí</strong> — Malenfocat</p>`;
  return shell({ preheader: 'He recibido tu mensaje y te responderé lo antes posible.', title: 'Mensaje recibido', bodyHtml: body });
}

function renderNotify({ name, email, tipo, message }) {
  const row = (k, v) => `<tr><td style="padding:12px 0;border-bottom:1px solid #ececE8;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${TEAL};font-weight:700;width:110px;vertical-align:top;">${k}</td><td style="padding:12px 0;border-bottom:1px solid #ececE8;font-size:15px;line-height:1.6;color:${INK};">${v}</td></tr>`;
  const body = `
    <h1 style="margin:0 0 22px 0;font-size:28px;line-height:1.1;letter-spacing:-1px;">Nuevo mensaje desde la web</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 26px 0;">
      ${row('Nombre', esc(name))}
      ${row('Email', `<a href="mailto:${esc(email)}" style="color:${INK};">${esc(email)}</a>`)}
      ${row('Proyecto', tipo.length ? tipo.map(esc).join(' · ') : '—')}
      ${row('Mensaje', nl2br(message))}
    </table>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 28px 0;"><tr><td style="background:${INK};border-radius:30px;">
      <a href="mailto:${esc(email)}?subject=${encodeURIComponent('Re: tu mensaje a Malenfocat')}" style="display:inline-block;padding:14px 28px;font-family:${FONT};font-size:13px;color:#ffffff;text-decoration:none;">Responder a ${esc(name.split(' ')[0])} →</a>
    </td></tr></table>`;
  return shell({ preheader: `${name}: ${message.slice(0, 90)}`, title: 'Nuevo mensaje', bodyHtml: body });
}

const textConfirm = d => `Gracias, ${d.name.split(' ')[0]}.\n\nHe recibido tu mensaje y te responderé lo antes posible.\n\nTu mensaje:\n${d.message}\n\n— Martí · Malenfocat\nEnfocar distinto no es enfocar mal.`;
const textNotify = d => `Nuevo mensaje desde la web\n\nNombre: ${d.name}\nEmail: ${d.email}\nProyecto: ${d.tipo.join(', ') || '—'}\n\n${d.message}`;


module.exports={clean,oneLine,renderConfirm,renderNotify,textConfirm,textNotify};
