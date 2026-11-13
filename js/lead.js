/*
  Kane Academy lead helper.
  1. KaneLead.send(data): saves a lead to Kit through /api/lead.
  2. Remembers the parent's email and the reel source (?src=) on this browser.
  3. Adds the parent's email (prefilled_email) to every Stripe link on the page,
     so each sale can be matched to the lead in Stripe and Kit.
*/
(function () {
  var KEY = 'kane_lead';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(obj) {
    try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) {}
  }
  function clean(s, max) {
    return String(s == null ? '' : s).trim().slice(0, max || 80);
  }
  function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

  // Read ?src= and ?email= from the link (email comes from Kit email links).
  var params = new URLSearchParams(window.location.search);
  var stored = load();
  var urlSrc = clean(params.get('src'), 40).toLowerCase().replace(/[^a-z0-9_-]/g, '');
  var urlEmail = clean(params.get('email'), 120);
  if (urlSrc) stored.src = urlSrc;
  if (urlEmail && validEmail(urlEmail)) {
    stored.email = urlEmail;
    // Take the email out of the address bar once it is saved.
    params.delete('email');
    var q = params.toString();
    try { history.replaceState(null, '', window.location.pathname + (q ? '?' + q : '') + window.location.hash); } catch (e) {}
  }
  save(stored);

  function tagStripeLinks() {
    var data = load();
    var links = document.querySelectorAll('a[href*="buy.stripe.com"]');
    for (var i = 0; i < links.length; i++) {
      try {
        var u = new URL(links[i].href);
        if (data.email && !u.searchParams.get('prefilled_email')) u.searchParams.set('prefilled_email', data.email);
        // Links marked data-ref-src get the reel or email source added to their tag.
        var base = links[i].getAttribute('data-ref-src');
        if (base && urlSrc) u.searchParams.set('client_reference_id', (base + '-' + urlSrc).slice(0, 200));
        links[i].href = u.toString();
      } catch (e) {}
    }
  }

  function send(data) {
    var lead = {
      firstName: clean(data.firstName, 60),
      email: clean(data.email, 120),
      guide: clean(data.guide, 40),
      score: data.score === undefined ? '' : data.score,
      band: clean(data.band, 120),
      checkedNumbers: clean(data.checkedNumbers, 500),
      checkedText: clean(data.checkedText, 3000),
      path: clean(data.path, 40),
      src: clean(data.src || load().src || '', 40),
      resultUrl: clean(data.resultUrl, 500)
    };
    var s = load();
    s.email = lead.email;
    s.firstName = lead.firstName;
    save(s);
    tagStripeLinks();

    return fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      keepalive: true
    }).then(function (r) {
      if (!r.ok) throw new Error('lead api ' + r.status);
      return r.json();
    }).catch(function (x) {
      console.error('Lead API failed:', x);
    });
  }

  window.KaneLead = { send: send, src: function () { return load().src || ''; } };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tagStripeLinks);
  else tagStripeLinks();
})();
