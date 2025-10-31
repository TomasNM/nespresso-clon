document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.querySelector('.register-mobile');
    const registerMenu = document.querySelector('.registerMenuMobile');
    const overlay = document.querySelector('.overlayRegistMobile');

    startEvents();

    function startEvents(){
        registerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if(!registerMenu.classList.contains('active')){
                abrirMenu();
            }else{
                cerrarMenu();
            }
        })

        document.addEventListener('click', (e) => {
            if(!registerMenu.contains(e.target) && !registerBtn.contains(e.target)){
                cerrarMenu();
            }
        })
    }

    function abrirMenu(){
        registerMenu.classList.add('active');
        registerMenu.style.textAlign = 'center';
        overlay.classList.add('active');
    }

    function cerrarMenu(){
        registerMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
})