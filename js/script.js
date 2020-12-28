new WOW().init();

var frm = document.querySelector('#contact')
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let messege = document.getElementById("messege").value;
    var win = window.open(`https://wa.me/+918450996596?text=Hi%20I%27m%20${name},%20${messege}`, '_blank');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});

var typed = new Typed("#typed", {
    stringsElement: '#typed-strings',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true
});
// 

const work = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
});
setInterval(() => work.next(), 3000);

const skills = new Siema({
    perPage: {
        768: 1,
        992: 3,
    },
    selector: '.skill',
    duration: 200,
    easing: 'ease-out',
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
});
setInterval(() => skills.next(), 1500);

const navbarNav = document.querySelector('.navbar-nav');
const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar')

toggle.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

navbarNav.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.style.height = "64px";
        navbar.style.lineHeight = "64px";
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
        navbarNav.classList.add('navBar');
    } else if (window.pageYOffset == 0) {
        navbar.style.height = "77px";
        navbar.style.lineHeight = "77px";
        navbar.style.backgroundColor = "black";
        navbar.style.color = "white";
        navbarNav.classList.remove('navBar');
    }
});