$(function(){
    'use strict'
    // banner slider start
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 2000,
        dots: true,
      });

    // Gallery Venobox start
    $('.venobox').venobox();

    // Testimonal slider start
    $('.testimonial_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      speed: 2000,
      dots: true,
    });

    // Counter-up part start
    $('.counter_up').counterUp();


});