document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-mobile-cont');
    const burgerBtn = document.querySelector('.burgerMenu');
    const overlay = document.querySelector('.mobileMenuOverlay');

    startEvents();

    function startEvents(){
        burgerBtn.addEventListener('click', () => {
            abrirMenu();
        })

        document.addEventListener('click', (e) => {
            if(!menu.contains(e.target) && !burgerBtn.contains(e.target)){
                cerrarMenu();
            }
        })
    }

    function abrirMenu(){
        menu.classList.add('active');
        overlay.classList.add('active');
        window.bloquearScroll();
    }

    function cerrarMenu(){
        menu.classList.remove('active');
        overlay.classList.remove('active');
        window.desbloquearScroll();
    }
})