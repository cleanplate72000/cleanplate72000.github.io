// The App Wire — professional scroll-reveal motion
(function () {
  var items = document.querySelectorAll('.card, article.post, article.page, footer.site .cols > div');
  items.forEach(function (el) { el.classList.add('reveal'); });
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();

// The App Wire — live search: filter cards on pages that have a search box
(function () {
  document.querySelectorAll('.search-box').forEach(function (box) {
    box.addEventListener('input', function () {
      var q = box.value.trim().toLowerCase();
      var scope = box.closest('main') || document;
      scope.querySelectorAll('.card').forEach(function (c) {
        var t = c.textContent.toLowerCase();
        c.style.display = (!q || t.indexOf(q) !== -1) ? '' : 'none';
      });
    });
  });
})();
