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

    // Tamaño de pantalla
    let screenWidth = window.innerWidth;
    let isMobile = screenWidth < 1000;

    let index = 0;

    // Detectar si se agregaron los listeners de desktop
    let deskListenersAdded = false;

    updateTotalSlides();
    updateButtons();
    updateCurrentSlide();
    updateOpacityMob();
    
    if(isMobile === false){
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

        if(window.innerWidth >= 1000){
            addDeskListeners();
        }

        navDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                clickDot(i);
            })
        })

        // Detectar si es mobile o desktop
        window.addEventListener('resize', () => {

            resetOpacity();
            updateSlide();

            screenWidth = window.innerWidth;
            if(screenWidth < 1000){
                isMobile = true;
            }else{
                isMobile = false;
            }

            if(isMobile){
                updateOpacityMob();
            }else{
                updateOpacityDesk();
            }

            if(!isMobile){
                addDeskListeners();
            }
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
        updateOpacityMob();
    }

    function prevSlide(){

        index--;

        const prevPos = slides[index].offsetLeft;

        slider.scrollTo({
            left: prevPos,
        })

        updateButtons();
        updateCurrentSlide();
        updateOpacityMob();
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
        const clientWidth = slides[0].clientWidth;
        const currentIndex = Math.round(scrollLeft / clientWidth);

        if(currentIndex != index){
            index = currentIndex;
            updateButtons();
            updateCurrentSlide();
            updateOpacityMob();
        }
    }

    function nextDesk(){
        indexDesk++;
        sliderDesk.style.transform = `translateX(-25%)`;

        updateBtnsDesk();
        updateDots();

        if(isMobile === false){
            updateOpacityDesk();
        }else{
            updateOpacityMob();
        }
        
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

    function updateOpacityMob(){

        if(isMobile === false){
            return;
        }

        slides.forEach((slide, i) => {
            if(i === index){
                slide.style.opacity = `1`;
            }else if(i === index + 1 || i === index - 1){
                slide.style.opacity = `40%`;
            }else{
                slide.style.opacity = `1`;
            }
        })
    }

    function addDeskListeners(){
        if (!deskListenersAdded){
            prevBtnDesk.addEventListener('click', () => {
                prevDesk();
            })

            nextBtnDesk.addEventListener('click', () => {
                nextDesk();
            })
        }

        deskListenersAdded = true;
    }

    function resetOpacity(){
        slides.forEach(slide => {
            slide.style.opacity = '1';
            slide.style.pointerEvents = 'all'
        })
    }

    function clickDot(i){
        if(i === indexDesk){
            return;
        }

        indexDesk = i;

        sliderDesk.style.transform = `translateX(-${indexDesk * 25}%)`;
        updateDots();
        updateOpacityDesk();
        updateBtnsDesk();
    }
})