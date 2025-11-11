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
        document.addEventListener('resize', () => {
            updateSlide();
            updateOpacity();
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
        updateOpacity();
        // console.log(`Estás en el slide ${index + 1}`);
    }

    function nextSlide(){

        let slideWidth = slide[0].offsetWidth + 16; // gap

        if(window.innerWidth < 800){
            
            slider.scrollLeft += slideWidth;
        }
        
        if(window.innerWidth >= 800){
            slideWidth = slide[0].offsetWidth + 40;
            slider.scrollLeft += slideWidth;
        }

    }

    function prevSlide(){
        const slideWidth = slide[0].offsetWidth + 16;
        slider.scrollLeft -= slideWidth;
    }

    function updateOpacity(){
        slide.forEach((eachSlide, i) => {
            if(window.innerWidth < 800){
                if(i === slideActual - 1){
                    eachSlide.style.opacity = '1';
                }else if(i === slideActual -2 || i === slideActual){
                    eachSlide.style.opacity = '0.4';
                }
            }else{
                eachSlide.style.opacity = '1';
            }
            
        })
    }
    
    updateOpacity();
})