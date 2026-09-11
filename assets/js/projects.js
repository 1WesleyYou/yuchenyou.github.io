/* Interactions for /projects/: filter chips, cursor spotlight + tilt,
   scroll-in reveal, and an image lightbox. No dependencies. */
(function () {
  'use strict';

  var root = document.querySelector('[data-projects]');
  if (!root) return;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  var MAX_TILT_DEG = 2.5;
  var REVEAL_THRESHOLD = 0.12;
  var HIDE_DELAY_MS = 380;

  var cards = Array.prototype.slice.call(root.querySelectorAll('.proj-card'));
  var groups = Array.prototype.slice.call(root.querySelectorAll('.proj-group'));
  var filterButtons = Array.prototype.slice.call(root.querySelectorAll('[data-filter]'));
  var emptyNote = root.querySelector('.proj-empty');

  /* ---------- scroll-in reveal ---------- */

  function revealAll() {
    cards.forEach(function (card) { card.classList.add('is-visible'); });
  }

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: REVEAL_THRESHOLD, rootMargin: '0px 0px -8% 0px' });

    cards.forEach(function (card) { observer.observe(card); });
  }

  /* ---------- spotlight + tilt ---------- */

  function onCardMove(event) {
    var card = event.currentTarget;
    var rect = card.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    var px = x / rect.width;
    var py = y / rect.height;

    card.style.setProperty('--mx', x.toFixed(1) + 'px');
    card.style.setProperty('--my', y.toFixed(1) + 'px');

    if (prefersReducedMotion) return;
    var tiltY = ((px - 0.5) * 2 * MAX_TILT_DEG).toFixed(2) + 'deg';
    var tiltX = ((0.5 - py) * 2 * MAX_TILT_DEG).toFixed(2) + 'deg';
    card.style.setProperty('--tilt-x', tiltX);
    card.style.setProperty('--tilt-y', tiltY);
  }

  function onCardLeave(event) {
    var card = event.currentTarget;
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
  }

  if (hasFinePointer) {
    cards.forEach(function (card) {
      card.addEventListener('mousemove', onCardMove);
      card.addEventListener('mouseleave', onCardLeave);
    });
  }

  /* ---------- filtering ---------- */

  function setActiveButton(active) {
    filterButtons.forEach(function (btn) {
      var isActive = btn === active;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function applyFilter(filter) {
    var visibleCount = 0;

    cards.forEach(function (card) {
      var matches = filter === 'all' || card.getAttribute('data-group') === filter;
      if (matches) {
        card.hidden = false;
        // next frame so the transition from hidden runs
        window.requestAnimationFrame(function () {
          card.classList.remove('is-filtered-out');
          card.classList.add('is-visible');
        });
        visibleCount += 1;
      } else {
        card.classList.add('is-filtered-out');
        window.setTimeout(function () {
          if (card.classList.contains('is-filtered-out')) card.hidden = true;
        }, prefersReducedMotion ? 0 : HIDE_DELAY_MS);
      }
    });

    groups.forEach(function (group) {
      var show = filter === 'all' || group.getAttribute('data-group') === filter;
      group.hidden = !show;
    });

    if (emptyNote) emptyNote.hidden = visibleCount > 0;
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      setActiveButton(btn);
      applyFilter(filter);
      if (window.history && window.history.replaceState) {
        var url = filter === 'all' ? window.location.pathname : '#' + filter;
        window.history.replaceState(null, '', url);
      }
    });
  });

  // Restore a filter from the URL hash (e.g. /projects/#research)
  var initial = window.location.hash.replace('#', '');
  var initialButton = filterButtons.filter(function (btn) {
    return btn.getAttribute('data-filter') === initial;
  })[0];
  if (initialButton) {
    setActiveButton(initialButton);
    applyFilter(initial);
  }

  /* ---------- lightbox ---------- */

  var dialog = document.querySelector('[data-lightbox-dialog]');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  var dialogImg = dialog.querySelector('.proj-lightbox__img');
  var dialogCaption = dialog.querySelector('.proj-lightbox__caption');
  var closeButton = dialog.querySelector('[data-lightbox-close]');

  function openLightbox(src, caption) {
    dialogImg.src = src;
    dialogImg.alt = caption;
    dialogCaption.textContent = caption;
    dialog.showModal();
  }

  function closeLightbox() {
    if (dialog.open) dialog.close();
  }

  root.querySelectorAll('[data-lightbox]').forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      openLightbox(trigger.getAttribute('data-lightbox'), trigger.getAttribute('data-caption') || '');
    });
  });

  closeButton.addEventListener('click', closeLightbox);

  // Click on the backdrop (outside the image) closes the dialog
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) closeLightbox();
  });

  dialog.addEventListener('close', function () {
    dialogImg.src = '';
  });
})();
