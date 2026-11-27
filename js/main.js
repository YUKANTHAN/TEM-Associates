/* TEM Associates — interaction layer */
/* Patterns from reference sites: Bechtel (tabs, video popup), SOM (modal, deep-dive), Turner (hero popup) */
/* Hover micro-animations, focus management, nav toggle, popup, video lightbox */

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
    if (popup.showModal) popup.showModal(); else popup.hidden = false;
    backdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    popup.focus();
  }

  function closePopup() {
    if (!popup || !backdrop) return;
    if (popup.close) popup.close(); else popup.hidden = true;
    backdrop.hidden = true;
    document.body.style.overflow = '';
  }

  if (trigger) trigger.addEventListener('click', openPopup);
  if (closeBtn) closeBtn.addEventListener('click', closePopup);
  if (backdrop) backdrop.addEventListener('click', closePopup);

  /* Close popup on Escape */
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && popup && !popup.hidden) {
      closePopup();
    }
  });

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

  /* ---- Video lightbox (Bechtel video-popup pattern) ---- */
  const videoTriggers = document.querySelectorAll('[data-video]');
  const videoModal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-frame');
  const videoClose = document.getElementById('video-close');

  function openVideo(url) {
    if (!videoModal || !videoFrame) return;
    videoFrame.src = url;
    videoModal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    if (!videoModal || !videoFrame) return;
    videoFrame.src = '';
    videoModal.hidden = true;
    document.body.style.overflow = '';
  }

  videoTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      const url = trigger.getAttribute('data-video');
      openVideo(url);
    });
  });

  if (videoClose) videoClose.addEventListener('click', closeVideo);
  if (videoModal) videoModal.addEventListener('click', function (event) {
    if (event.target === videoModal) closeVideo();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && videoModal && !videoModal.hidden) {
      closeVideo();
    }
  });

  /* ---- Form enhancement: inline validation hints ---- */
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      const requiredFields = form.querySelectorAll('input[required], textarea[required], select[required]');
      let hasError = false;

      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          field.setAttribute('aria-invalid', 'true');
          field.classList.add('field-error');
          hasError = true;
        } else {
          field.removeAttribute('aria-invalid');
          field.classList.remove('field-error');
        }
      });

      if (hasError) {
        event.preventDefault();
        const firstError = form.querySelector('[aria-invalid="true"]');
        if (firstError) firstError.focus();
      }
    });

    form.querySelectorAll('input[required], textarea[required], select[required]').forEach(function (field) {
      field.addEventListener('input', function () {
        if (field.value.trim()) {
          field.removeAttribute('aria-invalid');
          field.classList.remove('field-error');
        }
      });
    });
  });

  /* ---- Project search & filter (Projects page) ---- */
  const searchInput = document.getElementById('project-search');
  const filterChips = document.querySelectorAll('.filter-chip');
  const projectCards = document.querySelectorAll('.project-list li');

  function filterProjects() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const activeChip = document.querySelector('.filter-chip.active');
    const activeFilter = activeChip ? activeChip.getAttribute('data-filter') : 'all';

    projectCards.forEach(function (card) {
      const text = card.textContent.toLowerCase();
      const tags = card.getAttribute('data-tags') || '';
      const matchesSearch = text.includes(searchTerm);
      const matchesFilter = activeFilter === 'all' || tags.includes(activeFilter);

      if (matchesSearch && matchesFilter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterProjects);
  }

  filterChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      filterChips.forEach(function (c) {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
      filterProjects();
    });
  });
})();


/* ==========================================================================
   INTERNATIONAL STANDARD INTERACTION LAYER
   Active nav state, sticky header scroll state, IntersectionObserver reveals
   ========================================================================== */
(function () {
  /* Highlight active navigation link */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* Header scroll shadow */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Scroll-triggered reveals disabled to prevent cards ever getting stuck invisible */
})();
