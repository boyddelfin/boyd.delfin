document.addEventListener('load', preloading());

function preloading() {
    setTimeout(() => {
        const pl = document.querySelector('.preloader');
        pl.classList.add('fadeOut');
        setTimeout(() => {
            pl.classList.remove('fadeOut');
            pl.classList.add('hide');
        }, 1200);
    }, 1000);
}