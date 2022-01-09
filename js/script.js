$(function () {
	'use strict'
	// Banner slider start
	$('#banner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		speed: 2000,
		dots: true,
	});

	// Team slider start
	$('.team_slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		speed: 2000,
		dots: false,
		responsive: [
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
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
		responsive: [
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Counter-up part start
	$('.counter_up').counterUp();

	// Classes slider start
	$('.classes_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		speed: 2000,
		dots: false,
		prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
		nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
		centerMode: true,
		centerPadding: 0,
		arrows: true,
		responsive: [
			{
				breakpoint: 1199.98,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					arrows: false
				}
			},
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false
				}
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false
				}
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false
				}
			}
		]
	});
});