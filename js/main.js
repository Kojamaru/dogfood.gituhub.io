'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const colse = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
  });

  colse.addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
        toTop.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }

  const header = document.querySelector('header');
  const toTop = document.getElementById('to_top');

  const onScrollObserver = new IntersectionObserver(onScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));
  
  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}