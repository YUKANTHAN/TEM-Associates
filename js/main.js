/* TEM Associates — interaction layer */
/* Popup, smooth scroll, mobile menu, focus management */

(function () {
  /* ---- Mobile menu toggle ---- */
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

  /* ---- Hero 3-path popup ---- */
  const trigger = document.getElementById('hero-trigger');
  const popup = document.getElementById('hero-popup');
  const backdrop = document.getElementById('hero-backdrop');
  const closeBtn = popup ? popup.querySelector('.popup-close') : null;

  function openPopup() {
    if (!popup || !backdrop) return;
    popup.showModal ? popup.showModal() : (popup.hidden = false);
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closePopup() {
    if (!popup || !backdrop) return;
    popup.close ? popup.close() : (popup.hidden = true);
    backdrop.hidden = true;
    document.body.style.overflow = '';
  }

  if (trigger) trigger.addEventListener('click', openPopup);
  if (closeBtn) closeBtn.addEventListener('click', closePopup);
  if (backdrop) backdrop.addEventListener('click', closePopup);

  /* ---- Smooth scroll for anchor links ---- */
  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  /* ---- Ensure focused elements are never covered by sticky header ---- */
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
