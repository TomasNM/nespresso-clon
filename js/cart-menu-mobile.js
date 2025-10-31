document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('.cartMobile');
    const cartMenu = document.querySelector('.cartMenu');
    const overlay = document.querySelector('.overlayCartMobile');

    startEvents();

    function startEvents(){
        cartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if(!cartBtn.classList.contains('active')){
                openMenu();
            }
        })
    }

    function openMenu(){
        cartMenu.classList.add('active');
        overlay.classList.add('active');
        cartMenu.classList.add('maxWid');
    }
})