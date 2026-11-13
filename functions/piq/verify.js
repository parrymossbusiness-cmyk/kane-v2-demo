/* GET /piq/verify?t=...  The link from the login email. Logs this device in for a year. */
import { verify, startSession } from '../../functions-lib/piq-auth.js';

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const link = await verify(env, url.searchParams.get('t'));
  if (!link || !link.l) return Response.redirect(url.origin + '/parent-iq-login/?why=expired', 302);
  const next = /^\/parent-iq\//.test(url.searchParams.get('next') || '') ? url.searchParams.get('next') : '/parent-iq/';
  return new Response(null, { status: 302, headers: { Location: next, 'Set-Cookie': await startSession(env, { email: link.e, name: '' }), 'Cache-Control': 'no-store' } });
}
