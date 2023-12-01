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
