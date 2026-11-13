/* POST /api/piq-login {email, next}  Sends a login link if this email bought the $47 System. */
import { cleanEmail, findBuyer, loginLink, sendLoginEmail, lockOn } from '../../functions-lib/piq-auth.js';

function json(body, status) {
  return new Response(JSON.stringify(body), { status: status || 200, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('Origin');
  const url = new URL(request.url);
  if (origin && origin !== url.origin) return json({ ok: false, error: 'origin' }, 403);
  if (!lockOn(env)) return json({ ok: true, open: true });

  let d; try { d = await request.json(); } catch (e) { return json({ ok: false, error: 'bad' }, 400); }
  const typed = String(d.email || '').trim();
  const email = cleanEmail(typed);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: 'email' }, 400);
  const next = /^\/parent-iq\//.test(d.next || '') ? d.next : '/parent-iq/';

  // At most 5 links per email per hour.
  if (env.PIQ_KV) {
    const k = 'rl:' + email;
    const n = parseInt(await env.PIQ_KV.get(k) || '0', 10);
    if (n >= 5) return json({ ok: false, error: 'slow' }, 429);
    await env.PIQ_KV.put(k, String(n + 1), { expirationTtl: 3600 });
  }

  let buyer;
  try { buyer = await findBuyer(env, typed); } catch (e) { return json({ ok: false, error: 'lookup' }, 502); }
  if (!buyer) return json({ ok: false, error: 'nobuy' }, 404);

  try { await sendLoginEmail(env, email, await loginLink(env, url.origin, email, next)); }
  catch (e) { return json({ ok: false, error: 'send' }, 502); }
  return json({ ok: true });
}
