document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let index = 0;
    let intervalId;

    startInterval();
    startEvents();

    function startEvents(){
        prev.addEventListener('click', () => {
            startSlide(index - 1);
            clearInterval(intervalId);
            startInterval();
        })

        
        next.addEventListener('click', () => {
            startSlide(index + 1);
            clearInterval(intervalId);
            startInterval();
        })
        
    }

    function startSlide(i){
        if(i < 0){
            index = slide.length - 1;
        }else if (i >= slide.length){
            index = 0;
        }else{
            index = i;
        }

        slides.style.transform = `translateX(${-index * 100}%)`;
        
    }

    function startInterval(){
        intervalId = setInterval(()  => {
            startSlide(index + 1);
        }, 8000);
    }
})