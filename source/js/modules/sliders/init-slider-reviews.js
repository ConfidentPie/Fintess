const sliderReviews = document.querySelector('.reviews__swiper');
const buttonNext = document.querySelector('.reviews__button--next');
const buttonPrev = document.querySelector('.reviews__button--prev');

const initSliderReviews = () => {
  if (sliderReviews) {
    // eslint-disable-next-line
    new Swiper(sliderReviews, {

      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },

      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
};

export {initSliderReviews};
