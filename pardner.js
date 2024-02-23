AOS.init({
    duration: 3000,
    once: true,
});

window.addEventListener('scroll', function() {
    var nav = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        nav.classList.add('navbar-scroll');
    } else {
        nav.classList.remove('navbar-scroll');
    }
});
