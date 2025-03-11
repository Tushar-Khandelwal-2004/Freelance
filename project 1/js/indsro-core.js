/*
	Author: themexriver
	Version: 1.0
*/

(function ($) {
	"use strict";

	gsap.config({
		nullTargetWarn: false,
	});

	const lenis = new Lenis({
		duration: 2,
	});

	// smoooth scroll activation start
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	// preloader

	$(window).on("load", function () {
		let preloader = document.querySelector("#preloader");

		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {}, 1000);
		}
	});

	// scroll to top
	if ($(".scroll-top")) {
		var scrollTopbtn = document.querySelector(".scroll-top");
		var progressPath = document.querySelector(".scroll-top path");
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition =
			"none";
		progressPath.style.strokeDasharray = pathLength + " " + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition =
			"stroke-dashoffset 10ms linear";
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength) / height;
			progressPath.style.strokeDashoffset = progress;
		};
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 750;
		jQuery(window).on("scroll", function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery(scrollTopbtn).addClass("show");
			} else {
				jQuery(scrollTopbtn).removeClass("show");
			}
		});
		jQuery(scrollTopbtn).on("click", function (event) {
			event.preventDefault();
			jQuery("html, body").animate({ scrollTop: 0 }, duration);
			return false;
		});
	}

	/*
	title-animation
	====start====
	*/

	$(window).on("load", function () {
		var st = $(".fti-split-text");
		if (st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function (index, el) {
			el.split = new SplitText(el, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(el, { perspective: 400 });

			if ($(el).hasClass("fti-split-in-right-1")) {
				gsap.set(el.split.chars, {
					opacity: 1,
					color: "#EC6C06",
					x: "50",
					ease: "Back.easeOut",
				});
			}
			if ($(el).hasClass("fti-split-in-right-2")) {
				gsap.set(el.split.chars, {
					opacity: 1,
					color: "#000",
					x: "50",
					ease: "Back.easeOut",
				});
			}

			if ($(el).hasClass("fti-split-in-right-3")) {
				gsap.set(el.split.chars, {
					opacity: 1,
					color: "#ea5501",
					x: "50",
					ease: "Back.easeOut",
				});
			}

			if ($(el).hasClass("fti-split-in-right-4")) {
				gsap.set(el.split.chars, {
					opacity: 1,
					color: "#ff5317",
					x: "50",
					ease: "Back.easeOut",
				});
			}

			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				color: "inherit",
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: 1,
				stagger: 0.02,
			});
		});
	});

	/*
	search-popup
	====start====
	*/

	$(".search_btn_toggle").on("click", function () {
		$(".overlay, .search_1_popup_active").addClass("active");
	});
	$(".overlay, .search_1_popup_close").on("click", function () {
		$(".search_1_popup_active").removeClass("active");
		$(".overlay").removeClass("active");
	});
	/*
	search-popup
	====end====
	*/

	/*
 	why-choose-1-item-active-class-start
	*/
	$(".choose-item").on("mouseover", function () {
		var current_class =
			document.getElementsByClassName("choose-item active");
		current_class[0].className = current_class[0].className.replace(
			" active",
			""
		);
		this.className += " active";
	});

	/*
	why-choose-1-item-active-class-end
	*/

	/*
 	process-2-item-active-class-start
	*/
	$(".fti-process-2-item").on("mouseover", function () {
		var current_class = document.getElementsByClassName(
			"fti-process-2-item active"
		);
		current_class[0].className = current_class[0].className.replace(
			" active",
			""
		);
		this.className += " active";
	});

	/*
	process-2-item-active-class-end
	*/

	// active class added
	const boxWrap = gsap.utils.toArray(".fti-class-add");
	boxWrap.forEach((img) => {
		gsap.to(img, {
			scrollTrigger: {
				trigger: img,
				scrub: 1,
				start: "top 80%",
				end: "bottom bottom",
				toggleClass: "active",
				toggleActions: "play none none reverse",
				once: true,
			},
		});
	});

	// scroll slide left animation
	gsap.utils.toArray(".fti_left_slide_1").forEach((el, index) => {
		let ls_1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		ls_1.set(el, { transformOrigin: "center center" }).from(
			el,
			{ opacity: 0, x: "-=100" },
			{ opacity: 1, x: 0, duration: 1, immediateRender: false }
		);
	});

	// scroll slide right animation
	gsap.utils.toArray(".fti_right_slide_1").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 0, x: "+=100" },
				{ opacity: 1, x: 0, duration: 1, immediateRender: false }
			);
	});

	// scroll slide left animation down up left
	gsap.utils.toArray(".down_up_left").forEach((el, index) => {
		let ls_1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		ls_1.set(el, { transformOrigin: "center center" }).from(
			el,
			{ opacity: 1, x: "-=100", scale: 0.8 },
			{ opacity: 1, x: 0, scale: 1, duration: 1, immediateRender: false }
		);
	});

	// scroll slide right animation downUp right
	gsap.utils.toArray(".down_up_right").forEach((el, index) => {
		let ls_1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		ls_1.set(el, { transformOrigin: "center center" }).from(
			el,
			{ opacity: 1, x: "+=100", scale: 0.8 },
			{ opacity: 1, x: 0, scale: 1, duration: 1, immediateRender: false }
		);
	});

	// why choose 2 top shape img 1
	gsap.utils.toArray(".img-top-bottom-anim").forEach((el, index) => {
		let ls_1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 20%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		ls_1.set(el, { transformOrigin: "center center" }).from(
			el,
			{ opacity: 0, y: -100, x: -100 },
			{ opacity: 1, y: 0, x: 0, duration: 50, immediateRender: false }
		);
	});

	// why choose 2 top shape img 2
	gsap.utils.toArray(".img-bottom-top-anim").forEach((el, index) => {
		let ls_1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 20%",
				end: "top 70%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		ls_1.set(el, { transformOrigin: "center center" }).from(
			el,
			{ opacity: 0, y: 100, x: 100 },
			{ opacity: 1, y: 0, x: 0, duration: 50, immediateRender: false }
		);
	});

	// fti-trand-1-divider animation
	gsap.utils.toArray(".fti-trand-1-divider").forEach((el, index) => {
		let ls_1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		ls_1.set(el, { transformOrigin: "center center" }).from(
			el,
			{ opacity: 1, scale: 0.1 },
			{ opacity: 1, scale: 1, duration: 1, immediateRender: false }
		);
	});

	// highligt-text
	gsap.utils.toArray(".highligt-text").forEach((el, index) => {
		let ls_1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 20%",
				end: "top 100%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		ls_1.set(el, { transformOrigin: "center center" }).from(
			el,
			{ opacity: 1, y: 200, color: "#000" },
			{ opacity: 1, y: 0, duration: 5, immediateRender: false }
		);
	});

	// subtitle-3 line-1
	gsap.utils.toArray(".subtitle-line-1").forEach((el, index) => {
		let ls_1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		ls_1.set(el, { transformOrigin: "right right" }).from(
			el,
			{ opacity: 1, scale: 0.1 },
			{ opacity: 1, scale: 1, duration: 4, immediateRender: false }
		);
	});

	// subtitle-3 line-2
	gsap.utils.toArray(".subtitle-line-2").forEach((el, index) => {
		let ls_1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		ls_1.set(el, { transformOrigin: "left left" }).from(
			el,
			{ opacity: 1, scale: 0.1 },
			{ opacity: 1, scale: 1, duration: 4, immediateRender: false }
		);
	});

	// scroll up-down animatino
	gsap.utils.toArray(".asslideupcta").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, y: "+=200" },
				{ opacity: 1, y: 0, duration: 1, immediateRender: false }
			);
	});

	// cta 1
	gsap.utils.toArray(".fti-cta-1-wrap").forEach((el, index) => {
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tlcta
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, scale: 0.9 },
				{ opacity: 1, scale: 1, duration: 1, immediateRender: false }
			);
	});

	// short video section
	gsap.utils.toArray(".fti-short-video-1-area").forEach((el, index) => {
		let short_video_s = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		short_video_s
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, scaleX: 0.9 },
				{ opacity: 1, scaleX: 1, duration: 1.5, immediateRender: false }
			);
	});

	// intro video section
	gsap.utils.toArray(".fti-intro-video-1-area").forEach((el, index) => {
		let short_video_s = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "top 20%",

				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		short_video_s
			.set(el, { transformOrigin: "center center" })
			.from(
				el,
				{ opacity: 1, scaleX: 0.7 },
				{ opacity: 1, scaleX: 1, duration: 1.5, immediateRender: false }
			);
	});

	// fade-down
	gsap.utils.toArray(".fti-fade-down img").forEach((el, index) => {
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: ".fti-fade-down",
				scrub: 2,
				start: "top 70%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl1.from(
			el,
			{ opacity: 1, yPercent: 100 },
			{ opacity: 1, duration: 1, immediateRender: false }
		);
	});

	// roated animation
	gsap.utils.toArray(".fti-roated-1").forEach((el, index) => {
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 80%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl1.from(
			el,
			{ Transform: "rotateY(-60deg) translateX(150px)" },
			{ opacity: 1, duration: 1, immediateRender: false }
		);
	});

	// roated animation 2
	gsap.utils.toArray(".fti-roated-2").forEach((el, index) => {
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 80%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl1.from(
			el,
			{ Transform: "rotateY(60deg) translateX(150px)" },
			{ opacity: 1, duration: 1, immediateRender: false }
		);
	});

	// scale-plus
	gsap.utils.toArray(".fti-scale-plus").forEach((el, index) => {
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 85%",
				end: "buttom 50%",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl1.from(
			el,
			{ scale: 1.4 },
			{ opacity: 1, duration: 1, immediateRender: false }
		);
	});

	// team 2
	var team2 = gsap.timeline({
		scrollTrigger: {
			animation: team2,
			trigger: ".fti-team-2-membar",
			start: "top 80%",
			end: "top -50%",
			toggleActions: "play none play reverse",
			markers: false,
			stagger: 0.2,
		},
	});
	team2
		.from(".fti-team-2-membar", { opacity: 0, duration: 0.3, stagger: 0.1 })
		.from(
			".fti-team-2-membar-img-wrap",
			{
				transform: "rotate3d(1, 1, 1, 90deg)",
				duration: 0.7,
				stagger: 0.2,
			},
			"<"
		)
		.from(
			".fti-team-2-membar-img .main-img",
			{ yPercent: 100, duration: 0.7, stagger: 0.2 },
			".1"
		);

	// blog list slider start
	let feh_blog1 = new Swiper(".fti_bloglist_slide_active", {
		loop: true,
		spaceBetween: 0,
		speed: 500,
		slidesPerView: 1,
		navigation: {
			nextEl: ".feh_blog_1_next",
			prevEl: ".feh_blog_1_prev",
		},
	});

	// blog-details-slider
	let feh_blog_details = new Swiper(".blog-details-slider", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: ".blog-details-next",
			prevEl: ".blog-details-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
		},
	});

	// parallax-img
	if ($(".parallax-img").length) {
		$(".parallax-img").parallaxie({
			speed: 0.5,
		});
	}

	// project-details img-1
	gsap.to(".project-details-area", {
		scrollTrigger: {
			trigger: ".project-details-img-1",
			start: "top 70%",
			end: "bottom bottom",
			toggleClass: "active",
			once: true,
		},
	});

	// choose-1 progressbar-start
	if ($(".progress-bar").length) {
		var $progress_bar = $(".progress-bar");
		$progress_bar.appear();
		$(document.body).on("appear", ".progress-bar", function () {
			var current_item = $(this);
			if (!current_item.hasClass("appeared")) {
				var percent = current_item.data("percent");
				current_item
					.css("width", percent + "%")
					.addClass("appeared")
					.parent()
					.append("<span>" + percent + "%" + "</span>");
			}
		});
	}
	// choose-1 progressbar-end

	// team-details progressbar-start
	if ($(".team-details-progress-bar").length) {
		var $progress_bar = $(".team-details-progress-bar");
		$progress_bar.appear();
		$(document.body).on(
			"appear",
			".team-details-progress-bar",
			function () {
				var current_item = $(this);
				if (!current_item.hasClass("appeared")) {
					var percent = current_item.data("percent");
					current_item
						.css("width", percent + "%")
						.addClass("appeared")
						.parent()
						.append("<span>" + percent + "%" + "</span>");
				}
			}
		);
	}
	// team-details progressbar-end

	/*
	nice-selector-activiton
	====start====
	*/

	$(".nice-select select").niceSelect();
	/*
	nice-selector-activiton
	=====end====
	*/

	/*
	wow-activition
	=====start====
	*/

	new WOW().init();

	/*
	wow-activition
	=====end====
	*/

	/*
	popup-video-activition
	====start====
	*/
	$(".popup-video").magnificPopup({
		type: "iframe",
	});
	/*
	popup-video-activition
	====end====
	*/

	/*
	popup-img-activition
	====start====
	*/
	$(".popup_img").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});
	/*
	popup-img-activition
	====end====
	*/

	/*
	counter-activition
	====start====
	*/
	$(".counter").counterUp({
		delay: 10,
		time: 3000,
	});
	/*
	counter-activition
	====end====
	*/

	/*
	data-bg-activition
	====start====
	*/
	$("[data-background]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-background") + ") "
		);
	});
	/*
	data-bg-activition
	====end====
	*/

	/*
	marquee-activiton
	====start====
	*/

	$(".fti-hero-2-marquee").marquee({
		speed: 100,
		gap: 30,
		delayBeforeStart: 0,
		direction: "left",
		duplicated: true,
		pauseOnHover: true,
	});

	/*
	marquee-activiton
	=====end====
	*/

	$(".open_menu").on("click", function () {
		$(".mobile-menu").toggleClass("mobile_menu_on");
	});

	$(".open_menu").on("click", function () {
		$("body").toggleClass("mobile_menu_overlay_on");
	});

	if ($(".mobile_menu li.dropdown ul").length) {
		$(".mobile_menu li.dropdown").append(
			'<div class="dropdown-btn"><span class="fas fa-caret-right"></span></div>'
		);
		$(".mobile_menu li.dropdown .dropdown-btn").on("click", function () {
			$(this).prev("ul").slideToggle(500);
		});
	}

	$(".dropdown-btn").on("click", function () {
		$(this).toggleClass("toggle-open");
	});

	jQuery(".mobile-main-navigation li.dropdown").append(
		'<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'
	),
		jQuery(".mobile-main-navigation li .dropdown-btn").on(
			"click",
			function () {
				jQuery(this).hasClass("active")
					? (jQuery(this)
							.closest("ul")
							.find(".dropdown-btn.active")
							.toggleClass("active"),
					  jQuery(this)
							.closest("ul")
							.find(".dropdown-menu.active")
							.toggleClass("active")
							.slideToggle())
					: (jQuery(this)
							.closest("ul")
							.find(".dropdown-btn.active")
							.toggleClass("active"),
					  jQuery(this)
							.closest("ul")
							.find(".dropdown-menu.active")
							.toggleClass("active")
							.slideToggle(),
					  jQuery(this).toggleClass("active"),
					  jQuery(this)
							.parent()
							.find("> .dropdown-menu")
							.toggleClass("active"),
					  jQuery(this)
							.parent()
							.find("> .dropdown-menu")
							.slideToggle());
			}
		);

	// qty activation
	if ($("input.product-count").length) {
		$("input.product-count").TouchSpin({
			min: 1,
			max: 1000,
			step: 1,
			buttondown_class: "btn btn-link",
			buttonup_class: "btn btn-link",
		});
	}
})(jQuery);
