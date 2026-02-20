/**
 * Mareli Embragues - Reveal on scroll y utilidades
 */

(function () {
  'use strict';

  // Reveal on scroll: elementos con clase .reveal
  var revealEls = document.querySelectorAll('.reveal');
  var serviceRows = document.querySelectorAll('.service-row');
  var zigzagRows = document.querySelectorAll('.zigzag-row--reveal');

  function reveal() {
    var windowH = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;

    revealEls.forEach(function (el, i) {
      if (el.classList.contains('revealed')) return;
      var rect = el.getBoundingClientRect();
      var top = rect.top + scrollY;
      var trigger = scrollY + windowH * 0.85;
      if (top < trigger) {
        el.classList.add('revealed');
      }
    });

    // Filas de servicios: efecto "ensamblaje" escalonado
    serviceRows.forEach(function (row, i) {
      if (row.classList.contains('revealed')) return;
      var rect = row.getBoundingClientRect();
      var top = rect.top + scrollY;
      var trigger = scrollY + windowH * 0.82;
      if (top < trigger) {
        var delay = i * 80;
        setTimeout(function () {
          row.classList.add('revealed');
        }, delay);
      }
    });

    // Zig-zag: slide-in al entrar en viewport
    zigzagRows.forEach(function (row) {
      if (row.classList.contains('revealed')) return;
      var rect = row.getBoundingClientRect();
      var trigger = scrollY + windowH * 0.75;
      if (rect.top + scrollY < trigger) {
        row.classList.add('revealed');
      }
    });
  }

  window.addEventListener('scroll', reveal, { passive: true });
  window.addEventListener('resize', reveal);
  reveal(); // ejecutar al cargar
})();
