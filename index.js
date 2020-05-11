$(document).ready(function() {
	// Nav bar
	$(".nav-drop-down").hover(function() {
		$(".dropdown-menu", this).slideDown('fast');
	},

	function() {
		$(".dropdown-menu").css('display', 'none');
	});

	// Cart
	$('.cart-icon').hover(function() {
		$('.cart-dropdown').css('top', '80%');
		$('.cart-dropdown').animate({height: 'toggle', top: '100%'}, 'fast');
	},

	function() {
		$('.cart-dropdown').css('display', 'none');
	});

	// Account
	$('.accounts-icon').hover(function() {
		$('.account-dropdown').css('top', '80%');
		$('.account-dropdown').animate({height: 'toggle', top: '100%'}, 'fast');
	},

	function() {
		$('.account-dropdown').css('display', 'none');
	});

	var frmSwitch = document.getElementsByClassName('frm-switch');
	for(var i = 0; i < frmSwitch.length; i++) {
		frmSwitch[i].addEventListener('click', function() {
			var frmActive = document.getElementsByClassName('frm-active');
			frmActive[0].className = frmActive[0].className.replace(' frm-active', '');
			this.className = ' frm-active';
		});
	}

	$('.frm-login').click(function() {
		$('.register-frm').css('display','none');
		$('.login-frm').css('display','block');
	})

	$('.frm-register').click(function() {
		$('.login-frm').css('display','none');
		$('.register-frm').css('display','block');
	})

	var currencies = document.getElementsByClassName('cur');
	for(var i = 0; i < currencies.length ; i++) {
		currencies[i].addEventListener('click', function() {
			var curActive = document.getElementsByClassName('active');
			curActive[0].className = curActive[0].className.replace(' active', '');
			this.className += ' active';
		});
	}

	// Search
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
		if(navCount > -99.99) {
			$('.four-img').css('left', (navCount - 33.33).toString() + '%');
			navCount -= 33.33;
		}
	});

	$('.next').click(function() {
		if(navCount < 0) {
			$('.four-img').css('left', (navCount + 33.33).toString() + '%');
			navCount += 33.33;
		}
	});

	window.onscroll = function() {
		if(document.documentElement.scrollTop > 0) {
			$('.banner-item').css('transform', 'scale(1)');
		}
		if(document.documentElement.scrollTop > 300) {
			$('.welcome').css('transform', 'scale(1)');
		}
	}
});