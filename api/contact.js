/**
 * Función serverless de Vercel: POST /api/contact
 * Envía (1) aviso a ti y (2) confirmación al remitente, vía Resend.
 *
 * Variables de entorno (Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY   obligatoria
 *   FROM             opcional, por defecto "Malenfocat <hola@malenfocat.com>"
 *   TO_EMAILS        opcional, por defecto "info@malenfocat.com,martifoal@gmail.com"
 */
const { clean, oneLine, renderConfirm, renderNotify, textConfirm, textNotify } = require('../lib/mail.js');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method' });

  // Solo aceptamos peticiones desde esta misma web
  const origin = req.headers.origin;
  if (origin) {
    let host = ''; try { host = new URL(origin).host; } catch {}
    if (host !== req.headers.host) return res.status(403).json({ ok: false, error: 'origin' });
  }

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = null; } }
  if (!b || typeof b !== 'object') return res.status(400).json({ ok: false, error: 'json' });

  // Anti-spam: campo trampa + tiempo mínimo desde que se cargó la página
  if (b.website) return res.status(200).json({ ok: true });
  if (Number(b.t) < 2500) return res.status(200).json({ ok: true });

  if (b.consent !== true) return res.status(422).json({ ok: false, error: 'consent' });
  const data = {
    name: clean(b.name, 100),
    email: clean(b.email, 160),
    message: clean(b.message, 4000),
    tipo: Array.isArray(b.tipo) ? b.tipo.map(x => clean(x, 40)).filter(Boolean).slice(0, 6) : [],
  };
  if (!data.name || data.message.length < 5 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) {
    return res.status(422).json({ ok: false, error: 'invalid' });
  }

  const from = process.env.FROM || 'Malenfocat <hola@malenfocat.com>';
  const to = (process.env.TO_EMAILS || 'info@malenfocat.com,martifoal@gmail.com').split(',').map(s => s.trim()).filter(Boolean);
  const send = payload => fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, ...payload }),
  });

  try {
    const [n, c] = await Promise.all([
      send({ to, reply_to: data.email, subject: oneLine(`Nuevo mensaje de ${data.name} — Malenfocat`), html: renderNotify(data), text: textNotify(data) }),
      send({ to: [data.email], reply_to: to[0], subject: 'He recibido tu mensaje — Malenfocat', html: renderConfirm(data), text: textConfirm(data) }),
    ]);
    if (!n.ok) { console.error('aviso no enviado', await n.text()); return res.status(502).json({ ok: false, error: 'send' }); }
    if (!c.ok) console.warn('confirmación no enviada', await c.text());
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ ok: false, error: 'send' });
  }
};
