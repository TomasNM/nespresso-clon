document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide-pack');
    const prevBtnMob = document.querySelector('.prevSlideBtn-mob');
    const nextBtnMob = document.querySelector('.nextSlideBtn-mob');
    const currentSlide = document.querySelector('.currentSlide');
    const totalSlides = document.querySelector('.totalSlides');
    
    const prevBtnDesk = document.querySelector('.prevSlideBtn-desk');
    const nextBtnDesk = document.querySelector('.nextSlideBtn-desk');
    const sliderDesk = document.querySelector('.slider-packs');
    const navDots = document.querySelectorAll('.desk-dot');
    let indexDesk = 0;

    let index = 0;

    updateTotalSlides();
    updateButtons();
    updateCurrentSlide();
    
    if(window.innerWidth > 1000){
        updateOpacityDesk();
        updateBtnsDesk();
    }

    startEvents();

    function startEvents(){

        prevBtnMob.addEventListener('click', () => {
            prevSlide();
        })

        nextBtnMob.addEventListener('click', () => {
            nextSlide();
        })

        slider.addEventListener('scroll', () => {
            updateSlide();
        })

        // Desktop

        if(window.innerWidth > 1000){
            prevBtnDesk.addEventListener('click', () => {
                prevDesk();
            })

            nextBtnDesk.addEventListener('click', () => {
                nextDesk();
            })
        }

        

        window.addEventListener('resize', () => {

            if(window.innerWidth > 1000){
                updateOpacityDesk();
                updateBtnsDesk();
                index = 0;
                indexDesk = 0;
            }

            // if(window.innerWidth <= 1000){
                
            // }
            
            
        })
    }

    function nextSlide(){

        index++;

        const nextPos = slides[index].offsetLeft;

        slider.scrollTo({
            left: nextPos,
        })

        updateButtons();
        updateCurrentSlide();
    }

    function prevSlide(){

        index--;

        const prevPos = slides[index].offsetLeft;

        slider.scrollTo({
            left: prevPos,
        })

        updateButtons();
        updateCurrentSlide();
    }

    function updateTotalSlides(){
        totalSlides.innerHTML = `${slides.length}`;
    }

    function updateButtons(){

        if(index <= 0){
            prevBtnMob.classList.add('hidden');
        }else if(index > 0){
            prevBtnMob.classList.remove('hidden');
        }

        if(index >= slides.length - 1){
            nextBtnMob.classList.add('hidden');
        }else{
            nextBtnMob.classList.remove('hidden');
        }
    }

    function updateCurrentSlide(){
        currentSlide.innerHTML = `${index + 1}`;
    }

    function updateSlide(){
        const scrollLeft = slider.scrollLeft;
        const clientWidth = slider.clientWidth - (65 * 2);
        const currentIndex = Math.round(scrollLeft / clientWidth);

        if(currentIndex != index){
            index = currentIndex;
            updateButtons();
            updateCurrentSlide();
        }
    }

    function nextDesk(){
        indexDesk++;
        sliderDesk.style.transform = `translateX(-25%)`;

        updateBtnsDesk();
        updateDots();
        updateOpacityDesk();
    }

    function prevDesk(){
        indexDesk--;
        sliderDesk.style.transform = `translateX(0)`;
        updateBtnsDesk();
        updateDots();
        updateOpacityDesk();
    }

    function updateBtnsDesk(){
        if(indexDesk >= (slides.length / 2) - 1){
            nextBtnDesk.classList.add('hidden');
        }else{
            nextBtnDesk.classList.remove('hidden');
        }

        if(indexDesk <= 0){
            prevBtnDesk.classList.add('hidden');
        }else{
            prevBtnDesk.classList.remove('hidden');
        }
    }

    function updateDots(){
        navDots.forEach((dot, i) => {
            if(indexDesk === i){
                dot.classList.add('active');
            }else{
                dot.classList.remove('active');
            }
        })
    }

    function updateOpacityDesk(){
        const lastSlide = slides[slides.length - 1];
        const firstSlide = slides[0];

        if(indexDesk <= 0){
            lastSlide.style.opacity = `40%`;
            lastSlide.style.pointerEvents = 'none';
        }else{
            lastSlide.style.opacity = `1`;
            lastSlide.style.pointerEvents = 'all';
        }

        if(indexDesk >= (slides.length / 2) - 1){
            firstSlide.style.opacity = '40%';
            firstSlide.style.pointerEvents = 'none';
        }else{
            firstSlide.style.opacity = `1`;
            firstSlide.style.pointerEvents = 'all';
        }
    }
})