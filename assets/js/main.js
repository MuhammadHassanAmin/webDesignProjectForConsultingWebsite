(function($) { 
	"use strict";
	/*
		1 - NAVBAR / HEADER
		2 - Swiper Slider (Plugin)
		3 - Isotope (Plugin)
		4 - Owl Carousel (Plugin)

	*/

	/*----------------------------------------------------------------
						     1) NAVBAR / HEADER
	------------------------------------------------------------------*/
    window.onscroll = function() {
    	let navHeight = $('nav.navbar').outerHeight();
    	document.getElementById('navbar').style.height = navHeight+'px';
    	scrollFunction();
    	navbarScroll();
    };

	function navbarScroll() {
	    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
	        $('nav.navbar').css('top', '0px');
			$('nav.navbar').css('position', 'fixed');
			$('nav.navbar').css('min-height', '0px');
			$('nav.navbar').css('height', '80px');

	    } else if(document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
			$('nav.navbar').css('position', 'relative');
			$('nav.navbar').css('min-height', '100px');
			$('nav.navbar').css('transition', 'height 1s ease');

	    }
	}

	/*----------------------------------------------------------------
						    2) Swiper Slider
	------------------------------------------------------------------*/
	let mySwiper = new Swiper ('.swiper-container', {
	    // Optional parameters
		autoplay: {
			delay: 2000
		},
	    direction: 'horizontal',
	    loop: false,

	    // Navigation arrows
	    navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
	    }
	});

	let mySwiperBg = document.querySelectorAll('[data-slide-bg]');

	mySwiperBg.forEach(function(element){
		let bgLink = element.getAttribute("data-slide-bg");
		element.style.backgroundImage = 'url('+bgLink+')';
		element.style.backgroundSize = 'cover';
	});


	/*----------------------------------------------------------------
						   3) Protfolio (isotope)
	------------------------------------------------------------------*/
	var $grid = $('.portfolioContainer');
    $grid.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $grid.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });


    /*----------------------------------------------------------------
						 4) Owl Carousel (Plugin)
	------------------------------------------------------------------*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        dots: true,
        margin:16,
        autoplay:true,
        autoplayTimeout:6000,
        responsiveClass: true,
        slideSpeed:1000,
        autoHeight:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:true
            }
        }
    });


    /*----------------------------------------------------------------
						     5) Scroll Functions
	------------------------------------------------------------------*/

	// Navbar Toggle Active Class
    $(document).on("scroll", function() {
    	var scrollPos = $(document).scrollTop();

	    $('[data-scroll]').each(function () {
	        let currLink = $(this);
	        let refElement = $(currLink.attr("data-scroll"));

	        if (refElement.position().top-83 <= scrollPos && refElement.position().top + refElement.outerHeight() > scrollPos) {
	            $('li.nav-item').removeClass("active");
	            currLink.addClass("active");
	        }
	        else{
	            currLink.removeClass("active");
	        }

	    });

    });


	// Smooth Scrolling
	$('a[href*="#"]').bind("click", function(e) {
	    e.preventDefault();

	    var target = $(this).attr("href"); //Get the target
	    var scrollToPosition = $(target).offset().top - 80;

	    $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(){
	        window.location.hash = "" + target;
	        // This hash change will jump the page to the top of the div with the same id
	        // so we need to force the page to back to the end of the animation
	        $('html').animate({ 'scrollTop': scrollToPosition }, 0);
	    });
	});







	// When the user scrolls down 20px from the top of the document, show the button
    
    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("scrollUp").style.display = "block";
        } else {
            document.getElementById("scrollUp").style.display = "none";
        }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

}(jQuery));