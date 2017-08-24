function video() {
	var instance = $('#video').data('vide');
}
video();

function slider() {
	if($('.js-slider').length){
		$('.js-slider').slick({
			slidesToShow: 3,
			slideToScroll: 1,
			arrows: false,
			dots: true,
			autoplay: true,
			responsive: [
				{ 
					breakpoint: 1023,
					settings: {
						slidesToShow: 2
					}
				},
				{ 
					breakpoint: 767,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}
}
slider();

function autoFooter() {
	if($('.js-footer').length) {
		var wrapper = $('.wrapper'),
				footer = $('.js-footer'),
				footerHeight = footer.outerHeight();
		footer.css('margin-top',-footerHeight);
		wrapper.css('padding-bottom',footerHeight);
	}
}
autoFooter();

function nav() {
		if(window.innerWidth < 1024) { 
		var $trigger = $('.js-nav-trigger'),
				$inner = $('.js-nav-inner'),
				$container = $('.js-nav');
		$trigger.on('click', function() {
			$(this).toggleClass('is-open');
			$(this).closest('html').toggleClass('is-locked');
			$(this).closest($container).find($inner).toggleClass('is-visible');
		})
	}
}
nav();

function toTop() {
	$('.js-totop').on('click', function () {
		$('html, body').animate({
				scrollTop: 0
		}, 600);
		return false;
	});
	$(window).on('scroll', function() {
		if($(window).scrollTop() > 200) {
			$('.js-totop').show(300);
		} else if($(window).scrollTop() < 200) {
			$('.js-totop').hide(300);
		}
	})
}
toTop();

function sliderInit() {
	var maxWidth = 768,
		slickVar = {
			lazyLoad: 'ondemand',
			dots: true,
			arrows: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			mobileFirst: true,
			responsive: [
				{
					breakpoint: maxWidth,
					settings: 'unslick'
				}
			]
		},
		runSlick = function() {
			$('.js-slider-mobile').slick(slickVar);
			
		};
		runSlick();
}
sliderInit();

$(document).on('ready', function() {
	video();
	totop();
	slider();
	nav();
})

$(window).on('load', function() {
	autoFooter();
});

$(window).on('resize', function() {
	nav();
})