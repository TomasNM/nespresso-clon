document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.header-nav-cont');

    startEvents();

    function startEvents(){
        window.addEventListener('scroll', () => {
            if(window.scrollY > 10){
                navbar.classList.add('scrolled');
            }else{
                navbar.classList.remove('scrolled');
            }
        })
    }
})