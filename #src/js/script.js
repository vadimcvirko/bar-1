@@include('./swiper.min.js', {});


const swiperInfo = document.querySelector('.slider-info');
const swiperPortfolio = document.querySelector('.slider-portfolio');
const swiperReviews = document.querySelector('.slider-reviews ');



const mySwiper = new Swiper(swiperInfo, {

  slideClass: 'slider__item',
  wrapperClass: 'slider__wrapper',
  slidesPerView: 1,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const mySwiperPortfolio = new Swiper(swiperPortfolio, {

  slideClass: 'slides',
  wrapperClass	: 'slider-container',
  slidesPerView: 'auto',
  spaceBetween: 0,

  // If we need pagination

});
const mySwiperReviews = new Swiper(swiperReviews, {

  slideClass: 'slides',
  wrapperClass	: 'slider-container',
  slidesPerView: '1',
  spaceBetween: 0,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});