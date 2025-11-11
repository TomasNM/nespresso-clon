document.addEventListener('DOMContentLoaded', () => {
    const firstBanner = document.querySelector('.hero-frst');
    const secondBanner = document.querySelector('.hero-scnd');
    const bannerBg = document.querySelector('.hero-bg');
    const dots = document.querySelectorAll('.hero-dot');
    const terms = document.querySelector('.hero-terms');

    const dotsArray = [...dots];

    startEvents();

    function startEvents(){
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                updateSlide(i);
                updateDots(i);
            })
        })
    }

    function updateSlide(i){
        if(i === 0){
            firstBanner.classList.remove('inactive');
            secondBanner.classList.add('inactive');
            bannerBg.classList.remove('scnd');
            terms.style.color = 'black';

        }
        if(i === 1){
            firstBanner.classList.add('inactive');
            secondBanner.classList.remove('inactive');
            bannerBg.classList.add('scnd');
            terms.style.color = 'white';
        }
    }

    function updateDots(i){
        dotsArray.forEach((dot, index) => {
            if (index === i){
                dot.classList.add('active');
            }else{
                dot.classList.remove('active');
            }
        })
    }
})