@@include('./swiper.min.js', {});

const mySwiperPortfolio = new Swiper('.slider-portfolio', {
  wrapperClass: 'slider-portfolio__container',
  slideClass: 'slider-portfolio__slides',
  slidesPerView: 4,
  loop: true,
});

const mySwiperReviews = new Swiper('.slider-reviews', {
  wrapperClass: 'slider-reviews__container',
  slideClass: 'slider-reviews__slides',
  slidesPerView: 1,
  loop: true,
});
const mySwipeInfo = new Swiper('.slider-info', {
  wrapperClass: 'slider-info__container',
  slideClass: 'slider-info__slides',
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
