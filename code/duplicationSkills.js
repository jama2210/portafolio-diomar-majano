//Duplica la seccion de skills para que la animacion sea infinita

let copy = document.querySelector('.skills-slide').cloneNode(true);
document.querySelector('.skills').appendChild(copy);

//Menu de navegacion responsive

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navBg = document.querySelector('.nav-bg');



menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    navBg.classList.toggle('active');
})