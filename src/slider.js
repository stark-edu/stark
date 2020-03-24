$(document).ready(function(){
    $('.header-slider__items').slick({
        dots: true,
        dotsClass: 'header-slider__dots',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });
    $('.courses').slick({
        dots: true,
        dotsClass: 'courses-slider__dots',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        responsive: [
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
    });


    // function courseSlider(){
    //     let swiper = new Swiper('.swiper-container', {
    //         slidesPerView: 'auto',
    //         effect: 'coverflow',
    //         spaceBetween: 30,
    //         initialSlide: 1,
    //         coverflowEffect: {
    //           rotate: 50,
    //           stretch: 0,
    //           depth: 100,
    //           modifier: 1,
    //           slideShadows : true,
    //         },
    //         navigation: {
    //           nextEl: '.swiper-button-next',
    //           prevEl: '.swiper-button-prev',
    //         },
    //     });
    // }

    // courseSlider();
  });