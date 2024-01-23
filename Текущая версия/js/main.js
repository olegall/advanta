$(function() {
	var $topline = $('.js-topline');
	var $header = $('.js-main-header');

	toplineFix();
	animatedButtons();
	jumpLinks();
	overlayCallMe();
	overlayRegForm();
	video();
	tabs();
	speakers();

	$(document).on('scroll', function() {
		toplineFix();
	}).ready(function() {
		$('.js-reviews-carousel').owlCarousel({
			loop: true,
			margin: 20,
			nav: true,
			responsive: {
				0: {
					items: 1
				},

				600: {
					items: 3
				}
			}
		});

		$('.js-icons-carousel').owlCarousel({
			loop: true,
			margin: 60,
			nav: true,
			responsive: {
				0: {
					items: 1
				},

				600: {
					items: 3
				},

				800: {/* thr */
					items: 4
				}/* /thr */
			}
		});
	}).on('click', function(e) {
		if ($(e.target).closest('.js-speaker-info-tooltip, .js-speaker').length) {
			return;
		}

		$('.js-speaker').removeClass('active');
	}).on('click', '.js-overlay', function(e) {
		if ($(e.target).closest('.js-overlay-content, .js-call-me-btn, .js-reg-overlay-btn').length) {
			return;
		}

		$('.js-reg-overlay-close').trigger('click');
		$('.js-call-me-close').trigger('click');
	}).on('keyup', function(e) {
		if (e.which == '27') {
			$('.js-reg-overlay-close').trigger('click');
			$('.js-call-me-close').trigger('click');
			$('.js-speaker').removeClass('active');
		}
	});

	function speakers() {
		var $btn = $('.js-speaker');

		$btn.on('click', function() {
			var $t = $(this);

			$btn.removeClass('active');

			$t.toggleClass('active');
		});
	}

	function tabs() {
		var $tab = $('.js-tab-menu-item');

		$tab.on('click', function() {
			var $t = $(this);

			$t.parent().find('.active').removeClass('active');
			$t.addClass('active');
		});
	}

	function video() {
		var $btn = $('.js-video-btn');

		$btn.on('click', function() {
			alert('Действия с видео');
		});
	}

	function overlayRegForm() {
		var $btn = $('.js-reg-overlay-btn');
		var $form = $('.js-reg-overlay');
		var $closeBtn = $('.js-reg-overlay-close');

		$btn.on('click', function() {
			overlayShow();

			$form.removeClass('dn');

			setTimeout(function() {
				$form.addClass('show');
			}, 100);
		});

		$closeBtn.on('click', function() {
			$form.removeClass('show');

			setTimeout(function() {
				$form.addClass('dn');
				overlayHide();
			}, 300);
		});
	}

	function overlayCallMe() {
		var $btn = $('.js-call-me-btn');
		var $closeBtn = $('.js-call-me-close');
		var $toolip = $('.js-call-me-tooltip');

		$btn.on('click', function() {
			overlayShow();

			$(this).addClass('active');

			setTimeout(function() {
				$toolip.addClass('show');
			}, 300);
		});

		$closeBtn.on('click', function() {
			$toolip.removeClass('show');
			$btn.removeClass('active');

			setTimeout(function() {
				overlayHide();
			}, 300);
		});
	}

	function overlayShow() {
		var $overlay = $('.js-overlay');

		$overlay.removeClass('dn');

		setTimeout(function() {
			$overlay.addClass('show');
		}, 100);
	}

	function overlayHide() {
		var $overlay = $('.js-overlay');

		$overlay.removeClass('show');

		setTimeout(function() {
			$overlay.addClass('dn');
		}, 300);
	}

	function jumpLinks() {
		var $links = $('.js-jump-link');
		var offset = 50;
		var target;

		$links.on('click', function() {
			var $t = $(this);

			if ($t.attr('data-offset')) {
				offset = $t.data('offset');
			}

			target = $($t.attr('href')).offset().top - offset;

			$('html, body').animate({
				scrollTop: target
			}, 400);

			return false;
		});
	}

	function toplineFix() {
		if ($(document).scrollTop() > 0) {
			$header.addClass('thin');
			$topline.addClass('thin');
		} else {
			$header.removeClass('thin');
			$topline.removeClass('thin');
		}
	}

	function animatedButtons() {
		$('.js-animated-btn').hover(function(e) {
			var $t = $(this);
			var parentOffset = $t.offset();
			var relX = e.pageX - parentOffset.left;
			var relY = e.pageY - parentOffset.top;

			$('.js-btn-animation', $t).css({
				top: relY,
				left: relX
			});
		}, function(e) {
			var $t = $(this);
			var parentOffset = $t.offset();
			var relX = e.pageX - parentOffset.left;
			var relY = e.pageY - parentOffset.top;

			$('.js-btn-animation', $t).css({
				top: relY,
				left: relX
			});
		});
	}
});
