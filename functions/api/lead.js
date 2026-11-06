/*
  POST /api/lead
  Saves one lead to the Google Sheet (same Apps Script as before),
  then adds the parent to Kit with a tag and custom fields.

  Cloudflare settings (Pages project > Settings > Variables and Secrets):
    KIT_API_KEY  (secret, required for Kit)  Kit > Settings > Developer > V4 API key
    SHEET_URL    (optional) a new Apps Script URL, if it ever changes
    KIT_TAGS     (optional) JSON to rename tags, e.g. {"map":"Lead: Season Map"}

  A lead with "+test" in the email is marked TEST in the sheet's Path column,
  so test rows are easy to find and delete.
*/

const DEFAULT_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbxGUhQj6VzFQIK0nzyQw6SOBvCItjOplwMeqjI7TlbXtydbiHUaPi0OyDkvYQMU1Gwv6Q/exec';

// guide value from the page -> Kit tag. The tag starts the matching Kit sequence.
const DEFAULT_TAGS = {
  'map': 'Lead: Season Map',
  'preseason': 'Lead: Parent IQ Quiz',
  'blueprint-page': 'Lead: Blueprint Page',
  'scorecard': 'Lead: Parent Scorecard'
};

// guide value -> Kit sequence ID. Leads are added to these only when SEQUENCES_LIVE is true.
// Keep it false until the emails in Kit are published, or Kit skips the unpublished emails.
const SEQUENCES_LIVE = true;
const SEQUENCES = {
  'map': 2960260,            // MAP: Season Map follow-up
  'preseason': 2960311,      // QUIZ: Parent IQ Quiz and Tryout Blueprint follow-up
  'blueprint-page': 2960311
};

// Kit custom fields. Created in Kit automatically if missing.
const FIELD_LABELS = ['guide', 'score', 'band', 'source', 'result_url'];

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
    result_url: lead.resultUrl
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
  const tagName = tags[lead.guide];
  if (tagName) {
    const id = await tagId(env, tagName);
    await kit(env, '/tags/' + id + '/subscribers', 'POST', { email_address: lead.email });
  }
  const seq = SEQUENCES[lead.guide];
  if (SEQUENCES_LIVE && seq) {
    await kit(env, '/sequences/' + seq + '/subscribers', 'POST', { email_address: lead.email });
  }
  return tagName || 'no tag for guide ' + lead.guide;
}

async function saveToSheet(env, lead) {
  const res = await fetch(env.SHEET_URL || DEFAULT_SHEET_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(lead),
    redirect: 'follow'
  });
  if (!res.ok) throw new Error('sheet ' + res.status);
  return true;
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
    path: (isTest ? 'TEST ' : '') + clean(d.path, 40),
    src: clean(d.src, 40),
    resultUrl: clean(d.resultUrl, 500)
  };

  const results = await Promise.allSettled([
    saveToSheet(env, lead),
    env.KIT_API_KEY ? addToKit(env, lead) : Promise.resolve('skipped: no KIT_API_KEY')
  ]);

  const sheet = results[0].status === 'fulfilled';
  const kitResult = results[1].status === 'fulfilled' ? results[1].value : 'error';
  if (!sheet) console.error('Sheet save failed:', results[0].reason && results[0].reason.message);
  if (results[1].status === 'rejected') console.error('Kit failed:', results[1].reason && results[1].reason.message);

  return json({
    ok: sheet || kitResult !== 'error',
    sheet: sheet,
    kit: kitResult,
    kitError: results[1].status === 'rejected' ? String(results[1].reason && results[1].reason.message) : undefined
  });
}

export async function onRequest(context) {
  if (context.request.method === 'POST') return onRequestPost(context);
  return json({ ok: false, error: 'POST only' }, 405);
}
