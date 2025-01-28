let header = document.querySelector('.header');


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


