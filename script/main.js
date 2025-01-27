let header = document.querySelector('.header');


window.addEventListener('scroll', () => {
    if(scrollY > 0) {
        header.classList.add('headScroll');
    }
})


