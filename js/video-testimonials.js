// Video testimonials: tap the orange button to play with sound.
// Only one video plays at a time.
document.addEventListener('DOMContentLoaded', function () {
  var wraps = document.querySelectorAll('.vt-media');
  function start(wrap) {
    var v = wrap.querySelector('video');
    document.querySelectorAll('.vt-media video').forEach(function (other) {
      if (other !== v && !other.paused) other.pause();
    });
    v.controls = true;
    wrap.classList.add('is-playing');
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }
  wraps.forEach(function (wrap) {
    var v = wrap.querySelector('video');
    wrap.addEventListener('click', function (e) {
      if (!wrap.classList.contains('is-playing')) { e.preventDefault(); start(wrap); }
    });
    v.addEventListener('play', function () {
      document.querySelectorAll('.vt-media video').forEach(function (other) {
        if (other !== v && !other.paused) other.pause();
      });
    });
  });
});
