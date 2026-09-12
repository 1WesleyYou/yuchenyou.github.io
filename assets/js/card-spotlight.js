/* Cursor-follow highlight for publication cards. The projects page has its
   own richer version (spotlight + tilt + reveal) in projects.js. */
(function () {
  'use strict';

  var cards = document.querySelectorAll('.pub-card');
  if (!cards.length) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  Array.prototype.forEach.call(cards, function (card) {
    card.addEventListener('mousemove', function (event) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (event.clientX - rect.left).toFixed(1) + 'px');
      card.style.setProperty('--my', (event.clientY - rect.top).toFixed(1) + 'px');
    });
  });
})();
