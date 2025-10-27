document.addEventListener('DOMContentLoaded', () => {
    
    
    const registerBtn = document.querySelector('.registerBtn');
    const registerMenu = document.querySelector('.registerMenu');
    const overlay = document.querySelector('.loginOverlay');

    startEvents();

    function startEvents() {
        registerBtn.addEventListener('click', () => {
            if(registerMenu.classList.contains('active')){
                cerrarMenu();
            }else{
                abrirMenu();
            }
        })

        document.addEventListener('click', (e) => {
            if(!registerMenu.contains(e.target) && !registerBtn.contains(e.target)){
                cerrarMenu();
            }
        })
    }

    function abrirMenu() {
        registerMenu.classList.add('active');
        overlay.classList.add('active');
    }

    function cerrarMenu(){
        registerMenu.classList.remove('active');
        overlay.classList.remove('active');
    }
})