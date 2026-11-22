/*
  Basketball Parent IQ, the seven habits in one place.
  Used by the quiz (/confidence-score/) and the score page (/services/playbooks/).
  Numbers match the question numbers the quiz sends to Kit (checked_numbers).
  Each flag names the habit in plain words and the night of the System that fixes it.
  Night numbers were checked against the portal (parent-iq/js/content-data.js).
*/
window.KaneIQ = {
  flags: {
    1: { name: "Asking about minutes on the car ride home", night: 1,
         line: "Night 1 shows you what to say on that drive instead, and it's simpler than you think." },
    2: { name: "Talking about the coach's favorites where your kid can hear", night: 3,
         line: "Night 3 shows you how to talk about playing time without handing your kid an excuse." },
    3: { name: "Talking to the coach right after a game", night: 6,
         line: "Night 6 gives you the 24 hour rule, and what to do with that first day instead." },
    4: { name: "Going to the coach before your kid does", night: 3,
         line: "Night 3 shows you how to help your kid ask the coach himself, and why that earns more respect." },
    5: { name: "Worrying about minutes that are actually normal", night: 4,
         line: "Night 4 shows you what normal minutes look like, and the signs that really are worth a meeting." },
    6: { name: "The mood at home after a tough game", night: 1,
         line: "Night 1 gives you the one thing to say that night, so home feels the same after a loss as after a win." },
    7: { name: "Praising points over effort", night: 5,
         line: "Night 5 shows you how to praise the effort plays that coaches reward." }
  },
  // "1, 3, 7" or "1,3,7" -> [1, 3, 7], sorted by the night that fixes each one.
  parse: function (s) {
    var seen = {}, out = [];
    String(s || '').split(/[^0-9]+/).forEach(function (n) {
      var k = parseInt(n, 10);
      if (k >= 1 && k <= 7 && !seen[k]) { seen[k] = true; out.push(k); }
    });
    var f = this.flags;
    return out.sort(function (a, b) { return f[a].night - f[b].night || a - b; });
  }
};
