// shows real images once they load, keeps the placeholder box up until then
// highlights the current page in the nav, and handles the mobile menu button

document.addEventListener('DOMContentLoaded', function () {

  // image placeholders
  document.querySelectorAll('.img-slot').forEach(function (slot) {
    var img = slot.querySelector('img');
    if (!img) return;
    img.addEventListener('load', function () { slot.classList.add('has-image'); });
    img.addEventListener('error', function () { slot.classList.remove('has-image'); });
    if (img.complete && img.naturalWidth > 0) slot.classList.add('has-image');
  });

  // active nav link
  var current = location.pathname.split('/').pop();
  if (current === '') current = 'index.html';
  document.querySelectorAll('.navlinks a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });

  // hamburger menu on mobile
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

});
