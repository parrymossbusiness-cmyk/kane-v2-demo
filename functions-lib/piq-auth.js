/*
  Login for the $47 Basketball Parent IQ System (/parent-iq/ and /audio/).

  No passwords. A buyer is logged in right after Stripe checkout, or by a link sent to the
  email they paid with. Each device stays logged in for a year. Up to 3 devices per buyer;
  a 4th login signs out the oldest device.

  Cloudflare settings (Pages project > Settings > Variables and Secrets):
    PIQ_LOCK        "on" turns the lock on. Anything else: the product stays open (safe default).
    PIQ_SECRET      (secret) a long random phrase. Signs login links and cookies.
    STRIPE_KEY      (secret) Stripe restricted key, Checkout Sessions: Read.
    RESEND_KEY      (secret) Resend API key, for the login link email.
    PIQ_FROM        (optional) sender, default "Coach Kane <login@kanebasketballacademy.com>"
    PIQ_EXTRA       (optional) comma list of emails that get free access (Parry, Coach Kane, testers)
  Binding: KV namespace bound as PIQ_KV (device lists and rate limits).
*/

export const PAYMENT_LINKS = ['plink_1UIXZPK7hnGJEQmmrCRnEIkK'];   // $47 Basketball Parent IQ System
export const COOKIE = 'piq';
export const MAX_DEVICES = 3;
const YEAR = 365 * 24 * 3600;
const LINK_LIFE = 24 * 3600;

export function lockOn(env) { return env.PIQ_LOCK === 'on' && env.PIQ_SECRET; }

const enc = new TextEncoder();
function b64u(bytes) {
  let s = ''; bytes = new Uint8Array(bytes);
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function unb64u(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '=';
  return Uint8Array.from(atob(s), c => c.charCodeAt(0));
}
async function hmac(env, data) {
  const key = await crypto.subtle.importKey('raw', enc.encode(env.PIQ_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64u(await crypto.subtle.sign('HMAC', key, enc.encode(data)));
}
export async function sign(env, obj) {
  const body = b64u(enc.encode(JSON.stringify(obj)));
  return body + '.' + await hmac(env, body);
}
export async function verify(env, token) {
  if (!token || token.indexOf('.') < 0) return null;
  const [body, sig] = token.split('.');
  if (await hmac(env, body) !== sig) return null;
  try {
    const obj = JSON.parse(new TextDecoder().decode(unb64u(body)));
    if (!obj.x || obj.x < Date.now() / 1000) return null;
    return obj;
  } catch (e) { return null; }
}

export function readCookie(request, name) {
  const c = request.headers.get('Cookie') || '';
  const m = c.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
  return m ? m[1] : null;
}
export function cookieHeader(value, maxAge) {
  return `${COOKIE}=${value}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;
}

export function cleanEmail(e) { return String(e || '').trim().toLowerCase().slice(0, 120); }

function extra(env, email) {
  return (env.PIQ_EXTRA || '').split(',').map(cleanEmail).filter(Boolean).indexOf(email) !== -1;
}

async function stripe(env, path) {
  const res = await fetch('https://api.stripe.com/v1' + path, { headers: { Authorization: 'Bearer ' + env.STRIPE_KEY } });
  if (!res.ok) throw new Error('stripe ' + res.status);
  return res.json();
}

/* Did this email buy the $47 System? Returns { email, name } or null. */
export async function findBuyer(env, typed) {
  const email = cleanEmail(typed);
  if (extra(env, email)) return { email, name: '' };
  if (!env.STRIPE_KEY) return null;
  for (const link of PAYMENT_LINKS) {
    // Stripe matches the email exactly, so try it as typed and in lower case.
    for (const e of Array.from(new Set([String(typed || '').trim(), email]))) {
      const q = `/checkout/sessions?limit=3&status=complete&payment_link=${link}&customer_details[email]=${encodeURIComponent(e)}`;
      const r = await stripe(env, q);
      const s = (r.data || []).find(x => x.payment_status === 'paid' || x.payment_status === 'no_payment_required');
      if (s) return { email, name: (s.customer_details && s.customer_details.name) || '' };
    }
  }
  return null;
}

/* Checkout just finished: look up the session Stripe sent back. */
export async function buyerFromSession(env, sessionId) {
  if (!/^cs_[A-Za-z0-9_]+$/.test(sessionId || '') || !env.STRIPE_KEY) return null;
  const s = await stripe(env, '/checkout/sessions/' + sessionId);
  if (s.status !== 'complete' || PAYMENT_LINKS.indexOf(s.payment_link) === -1) return null;
  if (s.payment_status !== 'paid' && s.payment_status !== 'no_payment_required') return null;
  const d = s.customer_details || {};
  return { email: cleanEmail(d.email), name: d.name || '' };
}

/* Log this device in: add it to the buyer's list (oldest drops off past 3) and return the cookie. */
export async function startSession(env, buyer) {
  const d = b64u(crypto.getRandomValues(new Uint8Array(12)));
  if (env.PIQ_KV) {
    const key = 'dev:' + buyer.email;
    let list = [];
    try { list = JSON.parse(await env.PIQ_KV.get(key) || '[]'); } catch (e) {}
    list.push({ d, t: Date.now() });
    list = list.slice(-MAX_DEVICES);
    await env.PIQ_KV.put(key, JSON.stringify(list));
  }
  const token = await sign(env, { e: buyer.email, n: buyer.name, d, x: Math.floor(Date.now() / 1000) + YEAR });
  return cookieHeader(token, YEAR);
}

/* Is this device still on the buyer's list? (Checked on page loads, not on every file.) */
export async function deviceActive(env, sess) {
  if (!env.PIQ_KV) return true;
  try {
    const list = JSON.parse(await env.PIQ_KV.get('dev:' + sess.e) || '[]');
    return list.some(x => x.d === sess.d);
  } catch (e) { return true; }
}

export async function loginLink(env, origin, email, next) {
  const t = await sign(env, { e: email, x: Math.floor(Date.now() / 1000) + LINK_LIFE, l: 1 });
  return origin + '/piq/verify?t=' + t + (next ? '&next=' + encodeURIComponent(next) : '');
}

export async function sendLoginEmail(env, to, link) {
  const html = `<div style="font-family:Arial,sans-serif;font-size:16px;line-height:1.5;color:#222">
<p>Hi,</p><p>Tap the button to open your Basketball Parent IQ System. This link works for 24 hours.</p>
<p><a href="${link}" style="display:inline-block;background:#D9560B;color:#fff;text-decoration:none;padding:12px 20px;border-radius:8px;font-weight:bold">Open my System</a></p>
<p>Once you open it, this phone or computer stays logged in for a year.</p>
<p>If you did not ask for this, you can ignore this email.</p><p>Coach Dennis Kane</p></div>`;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + env.RESEND_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.PIQ_FROM || 'Coach Kane <login@kanebasketballacademy.com>', to: [to],
      subject: 'Your login link for the Basketball Parent IQ System', html })
  });
  if (!res.ok) throw new Error('resend ' + res.status);
}

/* Shared gate for /parent-iq/* and /audio/*. */
export async function gate(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const isPage = url.pathname === '/parent-iq' || url.pathname === '/parent-iq/' || url.pathname.endsWith('.html');

  if (!lockOn(env)) {
    const res = await next();
    const out = new Response(res.body, res);
    out.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return out;
  }

  const sess = await verify(env, readCookie(request, COOKIE));
  let ok = !!sess && !sess.l;
  if (ok && isPage) ok = await deviceActive(env, sess);

  if (!ok) {
    if (isPage) {
      const why = sess && !sess.l ? '&why=device' : '';
      return Response.redirect(url.origin + '/parent-iq-login/?next=' + encodeURIComponent(url.pathname) + why, 302);
    }
    return new Response('Please log in.', { status: 401, headers: { 'X-Robots-Tag': 'noindex', 'Cache-Control': 'no-store' } });
  }

  const res = await next();
  const out = new Response(res.body, res);
  out.headers.set('X-Robots-Tag', 'noindex, nofollow');
  out.headers.set('Cache-Control', 'private, max-age=300');
  if (!isPage || !(res.headers.get('Content-Type') || '').includes('text/html')) return out;

  const who = (sess.n || sess.e).replace(/[<>&"]/g, '');
  return new HTMLRewriter().on('body', {
    element(el) {
      el.append(`<div style="position:fixed;left:0;right:0;bottom:72px;text-align:center;font:11px Inter,system-ui,sans-serif;color:#857F78;pointer-events:none;z-index:30">Licensed to ${who}</div>`, { html: true });
    }
  }).transform(out);
}
