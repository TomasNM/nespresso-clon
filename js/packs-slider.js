document.addEventListener('DOMContentLoaded', () => {

    const next = document.querySelector('.next-p');
    const prev = document.querySelector('.prev-p');
    const slider = document.querySelector('.packs-slider');
    const slide = document.querySelectorAll('.pack');
    const packNavDots = document.querySelector('.pack-nav-dots');

    let dots = document.querySelectorAll('.pack-dot');
    let eachDot = document.querySelectorAll('.d-1');
    let index = 0;

    let extraPackDot = [];

    addExtraPackDot();

    console.log(dots.length);
    console.log(slide.length);

    startEvents();

    function startEvents(){
        next.addEventListener('click', () => {
            nextSlide();
        })

        prev.addEventListener('click', () => {
            prevSlide();
        })

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                index = Number(dot.dataset.dot) - 1;
                updateSlider();
            })
        })
    }

    function nextSlide(){
        index++;
        if (index >= dots.length){
            index = 0;
        }
        updateSlider();
    }

    function prevSlide(){
        index--;
        if(index < 0){
            index = dots.length - 1;
        }
        updateSlider();
    }

    function updateSlider(){
        slider.style.transform = `translateX(calc(-${index * 100}% / ${slide.length}))`;

        eachDot.forEach(dot => {
            dot.classList.remove('active');
            if(Number(dot.dataset.id) === index){
                dot.classList.add('active');
            }
        });

        if(index > 0){
            prev.classList.add('active');
        }else{
            prev.classList.remove('active');
        }

        if(index === dots.length - 1){
            next.classList.remove('active');
        }else{
            next.classList.add('active');
        }
    }

    function addExtraPackDot(){

        extraPackDot.forEach(dot => {
            dot.remove();
        })
        extraPackDot = [];
        const width = window.innerWidth;

        if(width < 768){
            createExtraDot();
            createExtraDot();
        }else if(width < 1000){
            createExtraDot();
        }

        updateDots();

    }

    function updateDots(){
        dots = document.querySelectorAll('.pack-dot');
        eachDot = document.querySelectorAll('.d-1');
    }

    function createExtraDot(){

        const newDot = document.createElement('button');
        newDot.classList.add('pack-dot');
        newDot.dataset.dot = document.querySelectorAll('.pack-dot').length + 1;
        packNavDots.appendChild(newDot);

        const newD1 = document.createElement('span');
        newD1.classList.add('d-1');
        newD1.dataset.id = document.querySelectorAll('.d-1').length;
        newDot.appendChild(newD1);

        extraPackDot.push(newDot);

        updateDots();
    }

    window.addEventListener('resize', () => {
        index = 0;
        updateSlider();
        addExtraPackDot();
    });
})