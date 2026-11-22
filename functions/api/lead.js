/*
  POST /api/lead
  Adds the parent to Kit with a tag and custom fields.

  Cloudflare settings (Pages project > Settings > Variables and Secrets):
    KIT_API_KEY  (secret, required for Kit)  Kit > Settings > Developer > V4 API key
    KIT_TAGS     (optional) JSON to rename tags, e.g. {"map":"Lead: Season Map"}

  A lead with "+test" in the email is marked TEST in its path, so test leads are easy to find.

  Audit applications (path "audit-application") also send an email to APPLY_NOTIFY_TO
  with the parent's name, email and situation lines. It uses the same Resend key as the
  Parent IQ login emails (RESEND_KEY, sender PIQ_FROM). Reply-To is the parent, so a reply goes to them.
*/

const APPLY_NOTIFY_TO = 'coach@coachdenniskane.com';

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function notifyApplication(env, lead) {
  if (!env.RESEND_KEY) return 'skipped: no RESEND_KEY';
  const situation = lead.situation || '(no situation lines)';
  const text =
    'A parent applied for the Future Success Audit.\n\n' +
    'Name: ' + lead.firstName + '\n' +
    'Email: ' + lead.email + '\n' +
    'Source: ' + (lead.src || 'none') + '\n\n' +
    'Their situation, in their words:\n' + situation + '\n\n' +
    'Reply to this email to answer the parent directly.';
  const html =
    '<p>A parent applied for the Future Success Audit.</p>' +
    '<p><b>Name:</b> ' + esc(lead.firstName) + '<br><b>Email:</b> ' + esc(lead.email) +
    '<br><b>Source:</b> ' + esc(lead.src || 'none') + '</p>' +
    '<p><b>Their situation, in their words:</b></p>' +
    '<p style="white-space:pre-wrap;border-left:3px solid #D9560B;padding-left:12px">' + esc(situation) + '</p>' +
    '<p>Reply to this email to answer the parent directly.</p>';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + env.RESEND_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.PIQ_FROM || 'Coach Kane <login@kanebasketballacademy.com>',
      to: [APPLY_NOTIFY_TO],
      reply_to: lead.email,
      subject: (lead.path.indexOf('TEST') === 0 ? '[TEST] ' : '') + 'Audit application: ' + lead.firstName,
      text: text,
      html: html
    })
  });
  if (!res.ok) throw new Error('resend ' + res.status + ' ' + (await res.text()).slice(0, 200));
  return 'sent';
}

// guide value from the page -> Kit tag. The tag starts the matching Kit sequence.
const DEFAULT_TAGS = {
  'map': 'Lead: Season Map',
  'preseason': 'Lead: Parent IQ Quiz',
  'blueprint-page': 'Lead: Blueprint Page',
  'scorecard': 'Lead: Parent Scorecard',
  'season': 'Lead: Full Season Quiz',
  'season-page': 'Lead: Full Season Blueprint',
  'blueprint': 'Lead: In-Season Parent Guide'
};

// Extra tags by path. An audit applicant is tagged so the offer emails skip them.
const PATH_TAGS = { 'audit-application': 'Audit applicant' };
// Paths that are not added to the guide's email sequence.
const NO_SEQUENCE_PATHS = ['audit-application'];

// guide value -> Kit sequence ID. Leads are added to these only when SEQUENCES_LIVE is true.
// Keep it false until the emails in Kit are published, or Kit skips the unpublished emails.
const SEQUENCES_LIVE = true;
const SEQUENCES = {
  'map': 2960260,            // MAP: Season Map follow-up
  'preseason': 2960311,      // QUIZ: Parent IQ Quiz and Tryout Blueprint follow-up
  'blueprint-page': 2960311,
  'season': 2969487,         // IQ QUIZ: Low Minutes reel follow-up (/iq/ DM link and the season quiz)
  'blueprint': 2982499       // IN-SEASON In-Season Parent Guide follow-up (Emails 1 and 2; Email 3 runs from a Kit automation)
};

// Kit custom fields. Created in Kit automatically if missing.
const FIELD_LABELS = ['guide', 'score', 'band', 'source', 'result_url', 'checked_numbers', 'checked_text', 'player_level', 'placement', 'situation'];

const ALLOWED_ORIGINS = [
  'https://kanebasketballacademy.com',
  'https://www.kanebasketballacademy.com'
];

let tagCache = null;
let fieldCache = null;

function json(body, status) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });
}

function clean(v, max) {
  return String(v == null ? '' : v).trim().slice(0, max);
}

function originOk(request) {
  const origin = request.headers.get('Origin');
  if (!origin) return true; // server tests and old browsers
  if (ALLOWED_ORIGINS.indexOf(origin) !== -1) return true;
  return /^https:\/\/[a-z0-9-]+\.[a-z0-9-]+\.pages\.dev$/.test(origin) || /^https:\/\/[a-z0-9-]+\.pages\.dev$/.test(origin);
}

async function kit(env, path, method, body) {
  const res = await fetch('https://api.kit.com/v4' + path, {
    method: method,
    headers: {
      'X-Kit-Api-Key': env.KIT_API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  if (!res.ok) throw new Error(method + ' ' + path + ' ' + res.status + ' ' + text.slice(0, 300));
  return text ? JSON.parse(text) : {};
}

async function ensureFields(env) {
  if (fieldCache) return fieldCache;
  const found = {};
  let after = null;
  do {
    const res = await kit(env, '/custom_fields?per_page=1000' + (after ? '&after=' + after : ''), 'GET');
    (res.custom_fields || []).forEach(function (f) { found[f.key] = true; });
    after = res.pagination && res.pagination.has_next_page ? res.pagination.end_cursor : null;
  } while (after);
  for (const label of FIELD_LABELS) {
    if (!found[label]) {
      await kit(env, '/custom_fields', 'POST', { label: label });
      found[label] = true;
    }
  }
  fieldCache = found;
  return found;
}

async function tagId(env, name) {
  if (!tagCache) {
    tagCache = {};
    let after = null;
    do {
      const res = await kit(env, '/tags?per_page=1000' + (after ? '&after=' + after : ''), 'GET');
      (res.tags || []).forEach(function (t) { tagCache[t.name] = t.id; });
      after = res.pagination && res.pagination.has_next_page ? res.pagination.end_cursor : null;
    } while (after);
  }
  if (!tagCache[name]) {
    const res = await kit(env, '/tags', 'POST', { name: name });
    tagCache[name] = res.tag.id;
  }
  return tagCache[name];
}

async function addToKit(env, lead) {
  await ensureFields(env);
  const fields = {
    guide: lead.guide,
    score: lead.score === '' ? '' : String(lead.score),
    band: lead.band,
    source: lead.src,
    result_url: lead.resultUrl,
    checked_numbers: lead.checkedNumbers,
    checked_text: lead.checkedText,
    player_level: lead.playerLevel,
    placement: lead.placement,
    situation: lead.situation
  };
  Object.keys(fields).forEach(function (k) { if (fields[k] === '') delete fields[k]; });

  await kit(env, '/subscribers', 'POST', {
    email_address: lead.email,
    first_name: lead.firstName,
    state: 'active',
    fields: fields
  });

  let tags = DEFAULT_TAGS;
  if (env.KIT_TAGS) {
    try { tags = Object.assign({}, DEFAULT_TAGS, JSON.parse(env.KIT_TAGS)); } catch (e) {}
  }
  const basePath = lead.path.replace(/^TEST /, '');
  const extraTag = PATH_TAGS[basePath];
  if (extraTag) {
    const xid = await tagId(env, extraTag);
    await kit(env, '/tags/' + xid + '/subscribers', 'POST', { email_address: lead.email });
  }
  const tagName = tags[lead.guide];
  if (tagName) {
    const id = await tagId(env, tagName);
    await kit(env, '/tags/' + id + '/subscribers', 'POST', { email_address: lead.email });
  }
  const seq = SEQUENCES[lead.guide];
  if (SEQUENCES_LIVE && seq && NO_SEQUENCE_PATHS.indexOf(basePath) === -1) {
    await kit(env, '/sequences/' + seq + '/subscribers', 'POST', { email_address: lead.email });
  }
  return tagName || 'no tag for guide ' + lead.guide;
}

export async function onRequestPost(context) {
  const { request, env } = context;
  if (!originOk(request)) return json({ ok: false, error: 'origin' }, 403);

  let d;
  try { d = await request.json(); } catch (e) { return json({ ok: false, error: 'bad json' }, 400); }

  const email = clean(d.email, 120).toLowerCase();
  const firstName = clean(d.firstName, 60);
  if (!firstName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'name and email required' }, 400);
  }

  const isTest = email.indexOf('+test') !== -1;
  const lead = {
    firstName: firstName,
    email: email,
    guide: clean(d.guide, 40),
    score: d.score === '' || d.score == null ? '' : clean(d.score, 10),
    band: clean(d.band, 120),
    checkedNumbers: clean(d.checkedNumbers, 500),
    checkedText: clean(d.checkedText, 3000),
    playerLevel: clean(d.playerLevel, 40).replace(/[^a-z-]/g, ''),
    placement: clean(d.placement, 40).replace(/[^a-z-]/g, ''),
    situation: clean(d.situation, 1500),
    path: (isTest ? 'TEST ' : '') + clean(d.path, 40),
    src: clean(d.src, 40),
    resultUrl: clean(d.resultUrl, 500)
  };

  let kitResult = 'error';
  let kitError;
  try {
    kitResult = env.KIT_API_KEY ? await addToKit(env, lead) : 'skipped: no KIT_API_KEY';
  } catch (e) {
    kitError = String(e && e.message);
    console.error('Kit failed:', kitError);
  }

  // Audit applications: email the inbox with name, email and situation, whatever Kit did.
  let notify;
  if (lead.path.replace(/^TEST /, '') === 'audit-application') {
    try { notify = await notifyApplication(env, lead); }
    catch (e) { notify = 'error'; console.error('Notify failed:', String(e && e.message)); }
  }

  return json({
    ok: kitResult !== 'error',
    kit: kitResult,
    kitError: kitError,
    notify: notify
  });
}

export async function onRequest(context) {
  if (context.request.method === 'POST') return onRequestPost(context);
  return json({ ok: false, error: 'POST only' }, 405);
}
