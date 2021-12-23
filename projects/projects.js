const navbarNav = document.querySelector(".navbar-nav");
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
	navbarNav.classList.toggle("show");
});

navbarNav.addEventListener("click", () => {
	navbarNav.classList.toggle("show");
});

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		navbar.style.height = "64px";
		navbar.style.lineHeight = "64px";
		navbar.style.backgroundColor = "white";
		navbar.style.color = "black";
		navbarNav.classList.add("navBar");
	} else if (window.pageYOffset == 0) {
		navbar.style.height = "77px";
		navbar.style.lineHeight = "77px";
		navbar.style.backgroundColor = "black";
		navbar.style.color = "white";
		navbarNav.classList.remove("navBar");
	}
});
