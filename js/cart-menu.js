document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.querySelector('.cartBtn');
    const cartMenu = document.querySelector('.cartMenu');
    const closeCartBtn = document.querySelector('.close-cart-btn');
    const overlayCart = document.querySelector('.cartOverlay');
    const overlayMobile = document.querySelector('.overlayCartMobile');
    const loginBtn = document.querySelector('.registerBtn');
    

    startEvents();

    function startEvents(){
        cartBtn.addEventListener('click', (e) => {
            e.stopPropagation();
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

        loginBtn.addEventListener('click', () => {
            cerrarMenu();
        })
    }

    function abrirMenu(){
        overlayCart.classList.add('active');
        cartMenu.classList.add('active');

        window.bloquearScroll();
    }

    function cerrarMenu(){
        overlayCart.classList.remove('active');
        cartMenu.classList.remove('active');
        overlayMobile.classList.remove('active');

        window.desbloquearScroll();
    }

})