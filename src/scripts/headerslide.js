const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  menuToggle.style.display = 'none';
  menuClose.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  mobileMenu.classList.add('closing');
  menuToggle.style.display = 'block';
  menuClose.style.display = 'none';
  mobileMenu.addEventListener('animationend', () => {
    mobileMenu.classList.remove('closing');
    document.body.style.overflow = '';
  }, { once: true });
});