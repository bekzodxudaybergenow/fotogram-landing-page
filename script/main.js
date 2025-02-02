let header = document.querySelector('.header');
let sidebar = document.querySelector('.sidebar');
let headerMenu = document.querySelector('.header-menu');
let sidebarClose = document.querySelector('.sidebar-close');
let sidebarShadow = document.querySelector('.sidebar-shadow');




headerMenu.addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebarShadow.classList.add('shadow-active');
})
sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarShadow.classList.remove('shadow-active');
})
sidebarShadow.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarShadow.classList.remove('shadow-active');
})


let scrollManual = 0;
window.addEventListener('scroll', () => {

    if(scrollY > scrollManual) {
        header.classList.add('headScroll');
    }
    else {
        header.classList.remove('headScroll');
    }
    
    scrollManual = scrollY;
})


var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
