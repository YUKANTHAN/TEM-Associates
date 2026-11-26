/* TEM Associates — interaction layer */
/* Hover micro-animations, focus management, nav toggle */

(function () {
  const menuButton = document.getElementById('menu-button');
  const primaryMenu = document.getElementById('primary-menu');

  if (menuButton && primaryMenu) {
    menuButton.addEventListener('click', function () {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      primaryMenu.hidden = expanded;
    });

    primaryMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuButton.setAttribute('aria-expanded', 'false');
        primaryMenu.hidden = true;
      });
    });
  }

  /* Ensure focused elements are never covered by sticky header */
  document.addEventListener('focusin', function (event) {
    const header = document.querySelector('.site-header');
    const target = event.target;
    if (!header || !target) return;
    const headerBottom = header.getBoundingClientRect().bottom;
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < headerBottom && targetRect.bottom > headerBottom) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
})();
