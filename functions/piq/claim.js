/* GET /piq/claim?session_id=cs_...  Stripe sends buyers here after paying. Logs them in, then shows the thank-you page. */
import { buyerFromSession, startSession, lockOn } from '../../functions-lib/piq-auth.js';

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const thanks = url.origin + '/thanks-playbooks/';
  if (!lockOn(env)) return Response.redirect(thanks, 302);
  let buyer = null;
  try { buyer = await buyerFromSession(env, url.searchParams.get('session_id')); } catch (e) {}
  if (!buyer) return Response.redirect(url.origin + '/parent-iq-login/?why=checkout', 302);
  return new Response(null, { status: 302, headers: { Location: thanks, 'Set-Cookie': await startSession(env, buyer), 'Cache-Control': 'no-store' } });
}
