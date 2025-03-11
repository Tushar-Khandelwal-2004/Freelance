(function ($) {
	"use strict";

	// image background
	function bgImageActive($scope, $) {
		$("[data-background]").each(function () {
			$(this).css(
				"background-image",
				"url(" + $(this).attr("data-background") + ") "
			);
		});
	}

	// hero slider
	function heroSlider($scope, $) {
		if ($(".fti_hero_3_active").length) {
			let fti_hero_3 = new Swiper(".fti_hero_3_active", {
				loop: true,
				spaceBetween: 0,
				speed: 500,
				slidesPerView: 1,
				effect: "fade",
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				fadeEffect: {
					crossFade: true,
				},
				navigation: {
					nextEl: ".fti-hero-3-next",
					prevEl: ".fti-hero-3-prev",
				},
			});
		}

		if ($(".fti_hero_4_active").length) {
			let fti_hero_4 = new Swiper(".fti_hero_4_active", {
				loop: true,
				spaceBetween: 0,
				speed: 500,
				slidesPerView: 1,
				effect: "fade",
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				fadeEffect: {
					crossFade: true,
				},
				pagination: {
					el: ".fti-hero-4-pagination",
					clickable: true,
				},
			});
		}

		if ($(".fti_hero_5_active").length) {
			let fti_hero_5 = new Swiper('.fti_hero_5_active', {
				loop: true,
				spaceBetween: 0,
				speed: 500,
				slidesPerView: 1,
				effect: 'fade',
				autoplay: {
					delay: 5000,
					disableOnInteraction: false
				},
				fadeEffect: {
					crossFade: true
				},
				navigation: {
					nextEl: '.fti-hero-5-next',
					prevEl: '.fti-hero-5-prev',
				},
				pagination: {
					el: ".fti-hero-5-pagination",
					clickable: true,
				},
			});
		}

		if ($(".fti_hero_1_active").length) {
			let fti_hero_1 = new Swiper('.fti_hero_1_active', {
				loop: true,
				spaceBetween: 0,
				speed: 500,
				slidesPerView: 1,
				effect: 'fade',
				autoplay: {
					delay: 5000,
					disableOnInteraction: false
				},
				fadeEffect: {
					crossFade: true
				},
				pagination: {
					el: ".fti-hero-1-pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">' + (index + 1) + "</span>";
					},
				},

				navigation: {
					nextEl: '.fti-hero-1-next',
					prevEl: '.fti-hero-1-prev',
				},
			});
		}

		if ($(".fti_hero_2_active").length) {
			let fti_hero_2 = new Swiper('.fti_hero_2_active', {
				loop: true,
				spaceBetween: 0,
				speed: 500,
				slidesPerView: 1,
				effect: 'fade',
				autoplay: {
					delay: 5000,
					disableOnInteraction: false
				},
				fadeEffect: {
					crossFade: true
				},
				pagination: {
					el: ".fti-hero-2-pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '">0' + (index + 1) + "</span>";
					},
				},
			});
		}
	}

	// service_list
	function tx_service_lists($scope, $) {
		if ($(".fti_project_3_active").length) {
			let fti_project_3 = new Swiper(".fti_project_3_active", {
				loop: true,
				speed: 500,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				centeredSlides: true,
				navigation: {
					nextEl: ".fti-project-3-next",
					prevEl: ".fti-project-3-prev",
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1400: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1600: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
				},
			});
		}

		if ($(".fti_company_3_active").length) {
			let fti_company_3 = new Swiper(".fti_company_3_active", {
				loop: true,
				spaceBetween: 0,
				speed: 500,
				slidesPerView: 1,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				pagination: {
					el: ".fti-company-3-pagination",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">0' +
							(index + 1) +
							"</span>"
						);
					},
				},
			});
		}

		if ($(".fti_services_1_active").length) {
			let fti_services_1 = new Swiper('.fti_services_1_active', {
				spaceBetween: 30,
				loop: true,
				infinite: false,
				speed: 500,
				autoplay: {
					delay: 5000,
				},
				navigation: {
					nextEl: ".fti_services_1_next",
					prevEl: ".fti_services_1_prev",
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 3,
					},
					1600: {
						slidesPerView: 4,
					},
				}

			});
		}

		if ($(".fti_project_1_active").length) {
			let fti_project_1 = new Swiper('.fti_project_1_active', {
				spaceBetween: 30,
				loop: true,
				infinite: false,
				speed: 500,
				autoplay: {
					delay: 5000,
				},
				navigation: {
					nextEl: ".fti_project_1_next",
					prevEl: ".fti_project_1_prev",
				},
				pagination: {
					el: ".fti_project_1_pagination",
					type: "fraction",
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 3,
					},
					1600: {
						slidesPerView: 4,
					},
				}

			});
		}

		if ($(".fti_trand_1_active").length) {
			let fti_trand_1 = new Swiper('.fti_trand_1_active', {
				spaceBetween: 25,
				loop: true,
				infinite: false,
				speed: 500,
				autoplay: {
					delay: 5000,
				},
				pagination: {
					el: ".fti-trand-1-pagination",
					clickable: true,
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 2,
					},
					1400: {
						slidesPerView: 2,
					},
					1600: {
						slidesPerView: 2,
					},
				}

			});
		}

		if ($(".fti_services_2_active").length) {
			let fti_services_2 = new Swiper('.fti_services_2_active', {
				spaceBetween: 30,
				loop: true,
				infinite: false,
				speed: 500,
				autoplay: {
					delay: 5000,
				},
				navigation: {
					nextEl: ".fti_services_2_next",
					prevEl: ".fti_services_2_prev",
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 3,
					},
					1600: {
						slidesPerView: 4,
					},
				}

			});
		}
	}

	// tx_testimonial
	function tx_testimonial($scope, $) {
		if ($(".fti_testimonial_4_active").length) {
			let fti_testimonial_4 = new Swiper(".fti_testimonial_4_active", {
				loop: true,
				spaceBetween: 0,
				speed: 500,
				slidesPerView: 1,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: ".fti-testimonial-4-next",
					prevEl: ".fti-testimonial-4-prev",
				},
			});
		}
		if ($(".fti_blockquote_5_active").length) {
			let fti_blockquote_5 = new Swiper('.fti_blockquote_5_active', {
				loop: true,
				spaceBetween: 0,
				speed: 500,
				slidesPerView: 1,
				autoplay: {
					delay: 5000,
					disableOnInteraction: false
				},
				pagination: {
					el: ".fti-blockquote-5-pagination",
					clickable: true,
				},
			});
		}

		if ($(".chy_testimonial_5_active").length) {

			let chyt5_thumb = new Swiper('.chy_t5_preview_active', {
				spaceBetween: 30,
				loop: false,
				speed: 1000,
				slidesPerView: 3,
				direction: 'vertical',
				rtl: false,
				centeredSlides: false,
				watchSlidesProgress: false,

				breakpoints: {
					320: {
					slidesPerView: 2,
					direction: 'horizontal',
					},
					576: {
					slidesPerView: 3,
					direction: 'horizontal',
					},
					768: {
					slidesPerView: 3,
					direction: 'horizontal',

					},
					992: {
					slidesPerView: 3,
					direction: 'vertical',
					},
					1200: {
					slidesPerView: 3,
					direction: 'vertical',
					},
					1400: {
					slidesPerView: 3,
					direction: 'vertical',
					},
					1600: {
					slidesPerView: 3,
					direction: 'vertical',
					},

				}
			});

			let chyt5 = new Swiper('.chy_testimonial_5_active', {
				loop: true,
				spaceBetween: 0,
				rtl: false,
				slidesPerView: 1,
				effect: 'fade',
				autoplay: {
					delay: 40000000,
					},
				fadeEffect: {
					crossFade: true
				},
				thumbs: {
					swiper: chyt5_thumb,
				},
			});
		}
	}

	// tx_team
	function tx_team($scope, $) {
		if ($(".fti_team_2_active").length) {
			let fti_team_2 = new Swiper('.fti_team_2_active', {
				loop: true,
				infinite: false,
				speed: 500,
				autoplay: {
					delay: 5000,
				},
				navigation: {
					nextEl: ".fti_team_2_next",
					prevEl: ".fti_team_2_prev",
				},
				breakpoints: {
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 50,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1400: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
					1600: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}
			});
		}
	}

	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_hero_slider.default",
			function ($scope, $) {
				bgImageActive($scope, $);
				heroSlider($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_service_lists.default",
			function ($scope, $) {
				bgImageActive($scope, $);
				tx_service_lists($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_cta.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_post_grid.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_testimonial.default",
			function ($scope, $) {
				bgImageActive($scope, $);
				tx_testimonial($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_count_box.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_about.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_team.default",
			function ($scope, $) {
				tx_team($scope, $);
				bgImageActive($scope, $);
			}
		);
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/tx_contact_info.default",
			function ($scope, $) {
				bgImageActive($scope, $);
			}
		);

	});
})(jQuery);
