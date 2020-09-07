const slider = document.querySelector('.slider-main__container');
const portfolioSlider = document.querySelector('.portfolio-slider__container');
const menuTogle = document.querySelector('#menuToggle');
const menuList = document.querySelector('.menu__list');
const header = document.querySelector('.header')

menuTogle.addEventListener('click', function() {
  menuList.classList.toggle('menu__list-active');

});

window.onscroll = function showHeader() {
  if(window.pageYOffset > 200){
      header.classList.add('header_fixed');
  } else{
      header.classList.remove('header_fixed');
  }
};


let mySwiper = new Swiper(slider,{
  loop:true,
  slideClass:'slider__slide',
  wrapperClass:'slider-wrapper',


});

let myPortfolioSlider = new Swiper(portfolioSlider, {
  loop:true,
  slideActiveClass:'portfolio-slide__active',
  slideClass:'portfolio-slide',
  wrapperClass:'portfolio-slider__wrapper',
  spaceBetween: 10,
  centeredSlides:true,
  slidesPerView: 1,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    380: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
  

});



// $('mobile-menu').on('click', function (e) {
// e.prevenrDefault()
// });


//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

// function testWebP(callback) {

//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//     callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
//     }
    
//     testWebP(function (support) {
    
//     if (support == true) {
//     document.querySelector('body').classList.add('webp');
//     }else{
//     document.querySelector('body').classList.add('no-webp');
//     }
//     });