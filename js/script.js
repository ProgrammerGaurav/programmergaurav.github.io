var frm = $('#contact');
frm.submit(function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let messege = document.getElementById("messege").value.trim();
    var win = window.open(`https://wa.me/+918450996596?text=Hi%20I%27m%20${name},%20${messege}`, '_blank');
});
new WOW().init();
$(document).ready(function () {
    $(".se-pre-con").fadeOut("slow");
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".navbar").css("background-color", "#111111");
        } else {
            $(".navbar").css("background-color", "transparent");
        }
    });
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });
});

var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
$('.work').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    mouseDrag: true,
    center: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
});
$('.skill').owlCarousel({
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
$('.certificate').owlCarousel({
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
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});