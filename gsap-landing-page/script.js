const open = document.querySelector('.open');
const close = document.querySelector('.close');

gsap.to('.strip', {
  height: 0,
  duration: 1,
  stagger: 0.3,
});

gsap.to('.overlay', {
  height: 0,
  duration: 1,
  delay: 0.3,
});

gsap.from('.bg', {
  scale: 1.2,
  duration: 0.5,
  delay: 0.5,
});

gsap.from('.menu li, .fade', {
  y: '-10px',
  opacity: 0,
  delay: 1,
  stagger: 0.2,
  duration: 0.4,
});

open.addEventListener('click', () => {
  gsap.to('.toggle-menu', {
    left: 0,
    duration: 0.1,
  });

  gsap.from('.row', {
    width: 0,
    duration: 1,
    ease: Power3.in,
  });
});

close.addEventListener('click', () => {
  gsap.to('.toggle-menu', {
    left: '-100%',
    duration: 0.5,
    delay: 0.5,
  });
});
