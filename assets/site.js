const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#menu-mobile');
const year = document.querySelector('#current-year');
if (year) year.textContent = String(new Date().getFullYear());

function closeMenu({ restoreFocus = false } = {}) {
  if (!toggle || !mobileMenu) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('inert', '');
  header.classList.remove('menu-active');
  document.body.classList.remove('menu-open');
  if (restoreFocus) toggle.focus();
}
function openMenu() {
  toggle.setAttribute('aria-expanded', 'true');
  toggle.setAttribute('aria-label', 'Fechar menu');
  mobileMenu.classList.add('is-open');
  mobileMenu.removeAttribute('inert');
  header.classList.add('menu-active');
  document.body.classList.add('menu-open');
  mobileMenu.querySelector('a')?.focus();
}
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => toggle.getAttribute('aria-expanded') === 'true' ? closeMenu({restoreFocus:true}) : openMenu());
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu({restoreFocus:true}); });
  window.addEventListener('resize', () => { if (window.innerWidth > 990 && toggle.getAttribute('aria-expanded') === 'true') closeMenu(); }, {passive:true});
}
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 36);
window.addEventListener('scroll', updateHeader, {passive:true});
updateHeader();
const desktopLinks = [...document.querySelectorAll('.desktop-nav a')];
if ('IntersectionObserver' in window && desktopLinks.length) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        desktopLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    }
  }, {rootMargin:'-30% 0px -60% 0px', threshold:0});
  desktopLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean).forEach(section => observer.observe(section));
}