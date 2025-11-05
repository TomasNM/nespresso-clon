document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.pack-dot');
    const next = document.querySelector('.next-p');
    const prev = document.querySelector('.prev-p');
    const slider = document.querySelector('.packs-slider');
    const slide = document.querySelectorAll('.pack');
    const eachDot = document.querySelectorAll('.d-1');

    let index = 0;

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
        })

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
})