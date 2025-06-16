document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.stage-carousel-slide');
  const left = document.querySelector('.stage-carousel-arrow-left');
  const right = document.querySelector('.stage-carousel-arrow-right');
  let current = 0;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
  }

  left.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  right.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  showSlide(current);
});
