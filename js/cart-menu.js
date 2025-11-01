document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('.cartBtn');
    const cartMenu = document.querySelector('.cartMenu');
    const closeCartBtn = document.querySelector('.close-cart-btn');
    const overlay = document.querySelector('.cartOverlay');
    const overlayMobile = document.querySelector('.overlayCartMobile');

    startEvents();

    function startEvents(){
        cartBtn.addEventListener('click', () => {
            if(cartMenu.classList.contains('active')){
                cerrarMenu();
            }else{
                abrirMenu();
            }
        })

        closeCartBtn.addEventListener('click', () => {
            cerrarMenu();
        })

        document.addEventListener('click', (e) => {
            if(!cartBtn.contains(e.target) && !cartMenu.contains(e.target)){
                cerrarMenu();
            }
        })
    }

    function abrirMenu(){
        overlay.classList.add('active');
        cartMenu.classList.add('active');
    }

    function cerrarMenu(){
        overlay.classList.remove('active');
        cartMenu.classList.remove('active');
        overlayMobile.classList.remove('active');
    }
})