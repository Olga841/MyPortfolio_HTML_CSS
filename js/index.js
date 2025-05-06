const slider = document.querySelectorAll('.portfolio__item'),
      sliderContainer = document.querySelectorAll('.portfolio__wrapper'),
      btnNext = document.querySelector('.portfolio__button-next'),
      btnPrev = document.querySelector('.portfolio__button-prev');

let sliderIndex = 0;

showSlides(sliderIndex);
function showSlides(n)  {

    if (n > slider.length-1) {
        sliderIndex = 0;
    }

    if (n < 0) {
        sliderIndex = slider.length-1;
    }
    slider.forEach(s => s.style.display = 'none');
    slider[sliderIndex].style.display = 'flex';
};

const nextSlide = (n) => {
    showSlides(sliderIndex +=n);
}



btnNext.addEventListener('click', () => {
    nextSlide(1);
});

btnPrev.addEventListener('click', () => {
    nextSlide(-1);
    
})