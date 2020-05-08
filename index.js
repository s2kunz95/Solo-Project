$(document).ready(function() {
	// Nav bar hover
	$(".nav-drop-down").hover(function() {
		$(".dropdown-menu", this).slideDown('fast');
	},

	function() {
		$(".dropdown-menu").css('display', 'none');
	});

	// Cart hover
	$('.cart-icon').hover(function() {
		$('.cart-dropdown').css('top', '80%');
		$('.cart-dropdown').animate({height: 'toggle', top: '100%'}, 'fast');
	},

	function() {
		$('.cart-dropdown').css('display', 'none');
	});

	// Account hover
	$('.accounts-icon').hover(function() {
		$('.account-dropdown').css('top', '80%');
		$('.account-dropdown').animate({height: 'toggle', top: '100%'}, 'fast');
	},

	function() {
		$('.account-dropdown').css('display', 'none');
	});

	// Search click
	$('.search-icon').click(function() {
		$('.search-modal').css('display', 'block');
		$('.search-modal').css('z-index', '1');
		$('.modal-content').animate({ top: '50%' });
	})

	$(window).click(function(event) {
		if(event.target.className === 'search-modal') {
			$('.search-modal').css('display', 'none');	
		}
	});

	// Banner nav

	var navCount = 0;

	$('.previous').click(function() {
		if(navCount > -99) {
			$('.four-img').css('left', (navCount - 33).toString() + '%');
			navCount -= 33;
		}
	});

	$('.next').click(function() {
		if(navCount < 0) {
			$('.four-img').css('left', (navCount + 33).toString() + '%');
			navCount += 33;
		}
	});

	// Banner nav scroll

	window.onscroll = function() {
		if(document.documentElement.scrollTop > 0) {
			$('.banner-item').css('transform', 'scale(1)');
		}
	}
});