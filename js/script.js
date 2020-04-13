var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    mouseDrag: true,
    center: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        }
    }
});
var owl = $('.owl-carousels');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    mouseDrag: true,
    center: true,
    autoplayTimeout: 1000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
});
var owl = $('.owl-carousels2');
owl.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    mouseDrag: true,
    center: true,
    rtl: true,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
});
new WOW().init();
$(document).ready(function() {
    $(".se-pre-con").fadeOut("slow");
    $('.toggle').click(function() {
        $('nav').toggleClass('active');
    });
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".navbars").css("background-color", "#25499F"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbars").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });
    $('.toggle').click(function() {
        $('nav').toggleClass('menu')
    });
     $('.navopt').click(function() {
        $('nav').toggleClass('menu')
    });
});
var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 30,
    backSpeed: 10,
    loop: true
});