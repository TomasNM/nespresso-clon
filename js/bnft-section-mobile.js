document.addEventListener('DOMContentLoaded', () => {
    const sliderDots = document.querySelectorAll('.b-dot');
    const prevBtn = document.querySelector('.prev--slide');
    const nextBtn = document.querySelector('.next--slide');
    const slider = document.querySelector('.cards--inner');

    let index = 0;

    startEvents();

    function startEvents(){
        nextBtn.addEventListener('click', () => {
            nextSlide();
        })

        prevBtn.addEventListener('click', () => {
            prevSlide();
        })
    }

    function nextSlide(){
        if(window.innerWidth < 768){
            if (index === 0){
                index++;
                slider.style.transform = `translateX(calc(-100% * ${index} / 3))`;
                sliderDots.forEach(dot => {
                    dot.classList.remove('active');
                });
                sliderDots[index].classList.add('active');
                prevBtn.classList.add('active');
            }else if (index === 1){
                index++;
                slider.style.transform = `translateX(calc(-100% * ${index} / 3))`;
                sliderDots.forEach(dot => dot.classList.remove('active'));
                sliderDots[index].classList.add('active');
                nextBtn.classList.add('inactive');
            }
        }else if (window.innerWidth > 768 && window.innerWidth < 1000){
            if(index === 0){
                index++;
                slider.style.transform = `translateX(calc(-100% * ${index} / 3))`;
                sliderDots.forEach(dot => dot.classList.remove('active'));
                sliderDots[index].classList.add('active');
                nextBtn.classList.add('inactive');
                prevBtn.classList.add('active');
            }
        }
    }

    function prevSlide(){
        if(window.innerWidth < 768){
            if(index === 2){
                index--;
                slider.style.transform = `translateX(calc(-100% * ${index} / 3))`;
                sliderDots.forEach(dot => dot.classList.remove('active'));
                sliderDots[index].classList.add('active');
                nextBtn.classList.remove('inactive');
            }else if (index === 1){
                index--;
                slider.style.transform = `translateX(calc(-100% * ${index} / 3))`;
                sliderDots.forEach(dot => dot.classList.remove('active'));
                sliderDots[index].classList.add('active');
                prevBtn.classList.remove('active');
            }
        }else if (window.innerWidth > 768 && innerWidth < 1000){
            index--;
            slider.style.transform = `translateX(calc(-100% * ${index} / 3))`;
            sliderDots.forEach(dot => dot.classList.remove('active'));
            sliderDots[index].classList.add('active');
            prevBtn.classList.remove('active');
            nextBtn.classList.remove('inactive');
        }
    }
})