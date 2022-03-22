'use strict';

{
  // header

  const open = document.getElementById('open');
  const hero = document.querySelector('.hero');
  const overlay = document.querySelector('.overlay');
  const colse = document.getElementById('close');
  const saerch_button = document.getElementById('saerch_button');
  const hidden_input = document.getElementById('hidden_input');
  
  open.addEventListener('click', () => {
    overlay.classList.add('show');
  });

  open.addEventListener('click', () => {
    images.classList.add('hidden_hero');
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
        console.log('fired');
      } else {
        header.classList.remove('scrolled');
        toTop.classList.remove('scrolled');
      }
    });
  }


  // to_top

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

  // hero

  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 3000);
  }

  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  play();
  

  // Intersection Observer API

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
}