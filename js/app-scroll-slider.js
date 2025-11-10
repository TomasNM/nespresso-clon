document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.packs-slider');
    const slide = document.querySelectorAll('.pack-slide');
    const currentSlide = document.querySelector('.currentSlide');
    const totalSlides = document.querySelector('.totalSlides');
    const prevSlideBtn = document.querySelector('.prevSlideBtn');
    const nextSlideBtn = document.querySelector('.nextSlideBtn');

    const total = slide.length;
    let slideActual = 1;

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
        prevSlideBtn.addEventListener('click', () => {
            prevSlide();
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
        const slideWidth = slide[0].offsetWidth + 16; // gap
        slider.scrollLeft += slideWidth;

    }

    function prevSlide(){
        const slideWidth = slide[0].offsetWidth + 16;
        slider.scrollLeft -= slideWidth;
    }

    

})