let header = document.querySelector('.header');
let sidebar = document.querySelector('.sidebar');
let headerMenu = document.querySelector('.header-menu');
let sidebarClose = document.querySelector('.sidebar-close');




headerMenu.addEventListener('click', () => {
    sidebar.classList.add('active');
})
sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('active');
})


// let scrollManual = 0;
// window.addEventListener('scroll', () => {

//     if(scrollY > scrollManual) {
//         header.classList.add('headScroll');
//     }
//     else {
//         header.classList.remove('headScroll');
//     }
    
//     scrollManual = scrollY;
// })


