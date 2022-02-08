'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const colse = document.getElementById('close');
  const saerch_button = document.getElementById('saerch_button');
  const hidden_input = document.getElementById('hidden_input');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
  });

  colse.addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  saerch_button.addEventListener('click', () => {
    hidden_input.classList.toggle('hidden');
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

  // Intersection Observer API

  function callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
    });
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
}