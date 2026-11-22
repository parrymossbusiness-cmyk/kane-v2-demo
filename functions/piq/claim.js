/* GET /piq/claim?session_id=cs_...  Stripe sends buyers here after paying. Logs them in, then shows the thank-you page.
   It also tags the buyer in Kit ("Buyer: Parent IQ System") so the offer emails stop for people who already bought. */
import { buyerFromSession, startSession, lockOn } from '../../functions-lib/piq-auth.js';

const BUYER_TAG_ID = 26304014; // Kit tag "Buyer: Parent IQ System"

// Tag only people already in Kit. A buyer who never gave an email is not added to the list.
async function tagBuyerInKit(env, email) {
  if (!env.KIT_API_KEY || !email) return;
  await fetch('https://api.kit.com/v4/tags/' + BUYER_TAG_ID + '/subscribers', {
    method: 'POST',
    headers: { 'X-Kit-Api-Key': env.KIT_API_KEY, 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ email_address: email })
  }).catch(function () {});
}

export async function onRequestGet({ request, env, waitUntil }) {
  const url = new URL(request.url);
  const thanks = url.origin + '/thanks-playbooks/';
  const sessionId = url.searchParams.get('session_id');

  let buyer = null;
  if (env.STRIPE_KEY && sessionId) {
    try { buyer = await buyerFromSession(env, sessionId); } catch (e) {}
  }
  if (buyer && buyer.email) waitUntil(tagBuyerInKit(env, buyer.email));

  if (!lockOn(env)) return Response.redirect(thanks, 302);
  if (!buyer) return Response.redirect(url.origin + '/parent-iq-login/?why=checkout', 302);
  return new Response(null, { status: 302, headers: { Location: thanks, 'Set-Cookie': await startSession(env, buyer), 'Cache-Control': 'no-store' } });
}
