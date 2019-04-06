/*smooth scroll*/

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
   speed: 800
});

/*image slider*/

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');

const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }else{
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}