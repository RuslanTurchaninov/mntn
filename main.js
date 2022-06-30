

const navBtn = ducument.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile-nav-active');
    mobileNav.classList.toggle('mobile-nav-close');
    mobileNav.classList.toggle('no-scroll');
})

window.addEventListener('click', function () {
    
})

mobileNav.addEventListener('click', function(event) {
    event.stopPropagation();
})


