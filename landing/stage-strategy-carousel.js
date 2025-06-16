document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.stage-strategy-carousel-slide');
    const left = document.querySelector('.stage-strategy-carousel-arrow.left');
    const right = document.querySelector('.stage-strategy-carousel-arrow.right');
    let current = 0;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            if (i === idx) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    if (left && right && slides.length) {
        left.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        right.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        showSlide(current);
    }
});
  }
});
