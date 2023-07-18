const slides = document.querySelectorAll('.swiper-slide');

const getSlidesTabs = () => {
  const slidesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('tabindex', '0');
      } else {
        entry.target.removeAttribute('tabindex', '0');
      }
    });
  });

  slides.forEach((slide) => slidesObserver.observe(slide));
};

export {getSlidesTabs};
