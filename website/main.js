const hamburger = document.querySelector('div.hamburger');
const navMenu = document.querySelector('div.primary-nav > ul');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}