import Rellax from './relax.min.js';
import gasp from './gsap.mini.js';
import ScrollReveal from './scroll.reveral.min.js';
// ====================== SHOW MENU =============================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// ====================== MENU SHOW =============================
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
// ====================== MENU CLOSE =============================
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// ====================== REMOVE MENU MOBILE =============================
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(link => link.addEventListener('click', linkAction))

// ====================== CHANGE BACKGROUND HEADER ============================
const scrollHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('scroll-header') : 
                         header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

// ====================== SHOW SCROLL UP ============================
const scrollUP = () => {
    const scrollUp = document.getElementById('scrollUp');
    this.scrollY >=  350 ? scrollUp.classList.add('show-scroll'):
                           scrollUp.classList.remove('show-scroll');    
};
window.addEventListener('scroll', scrollUP);

// ====================== SCROLL SECTIONS ACTIVE LINK  ============================
const sections = document.querySelectorAll('.section');

const scrollActive = () =>{
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop-270,
              sectionId = current.getAttribute('id'),
              sectionClass =document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
             sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

// ====================== PARALLAX ============================
let parallax = new Rellax('.parallax');

// ====================== GSAP ANIMATION ============================
gsap.from('.home__village', 1.2, {opacity: 0, y: 100, delay: .1})
gsap.from('.home__pine-tree', 1.2, {opacity: 0, y: 150, delay: .3})
gsap.from('.home__mountain-2', 1.2, {opacity: 0, x: 150, delay: .6})
gsap.from('.home__mountain-3', 1.2, {opacity: 0, x: -150, delay: .5})
gsap.from('.home__mountain-1', 1.2, {opacity: 0, y: 250, delay: .7})
gsap.from('.home__moon', 1.2, {opacity: 0, y: 200, delay: .8})
gsap.from('.home__trineo', 1.2, {opacity: 0, x: -250, delay: .8})
gsap.from('.home__title', 1.2, {opacity: 0, y: -30, delay: 1})

// ====================== SCROLL REVERAL ANIMATION ============================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
})

sr.reveal(`.about__data`, {origin: 'right'})
sr.reveal(`.about__image`, {origin: 'left'})
sr.reveal(`.send__card`, {interval:100})
sr.reveal(`.footer`)