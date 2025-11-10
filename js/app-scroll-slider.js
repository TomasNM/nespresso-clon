document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.packs-slider');
    const slide = document.querySelectorAll('.pack-slide');
    const currentSlide = document.querySelector('.currentSlide');
    const totalSlides = document.querySelector('.totalSlides');
    const prevSlideBtn = document.querySelector('.prevSlideBtn');
    const nextSlideBtn = document.querySelector('.nextSlideBtn');

    const total = slide.length;
    let slideActual = 1;
    let index = 1;
    totalSlides.innerHTML = `${total}`;
    currentSlide.innerHTML = `${slideActual}`;

    startEvents();

    function startEvents(){
        slider.addEventListener('scroll', () => {
            updateSlide();
        })
        nextSlideBtn.addEventListener('click', () => {
            nextSlide();
        })
    }

    function updateSlide(){
        const scrollLeft = slider.scrollLeft;
        const slideWidth = slide[0].offsetWidth + 16;
        const index = Math.round(scrollLeft / slideWidth);

        if(slideActual <= total){
            slideActual = index + 1;
        }

        currentSlide.innerHTML = `${slideActual}`;
        // console.log(`Estás en el slide ${index + 1}`);
    }

    function nextSlide(){
        index++;
        if(index > slide.length){
            index = 1;
        }else if (index < 1){
            index = slide.length;
        }

        updateCurrentSlide();
    }

    function updateCurrentSlide(){
        slider.style.transform = `translateX(calc(-100% * ${index} - ${slider.offsetWidth} / ${slide[0].offsetWidth + 16}))`;
        console.log(index);
    }
})