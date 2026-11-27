(function () {
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('main-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      const open = nav.style.display === 'flex';
      nav.style.display = open ? '' : 'flex';
      nav.style.flexDirection = open ? '' : 'column';
      nav.style.position = open ? '' : 'absolute';
      nav.style.top = open ? '' : '76px';
      nav.style.left = open ? '' : '0';
      nav.style.right = open ? '' : '0';
      nav.style.background = open ? '' : '#ffffff';
      nav.style.padding = open ? '' : '1.5rem';
      nav.style.borderBottom = open ? '' : '1px solid #E2E8F0';
    });
  }
})();
