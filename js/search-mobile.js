document.addEventListener('DOMContentLoaded', () => {
    const searchMenu = document.querySelector('.searchContMobile');
    const searchBtn = document.querySelector('.searchMobile');
    const closeBtn = document.querySelector('.closeSearch');

    startEvents();

    function startEvents(){
        searchBtn.addEventListener('click', () => {
            if(!searchMenu.classList.contains('active')){
                abrirMenu();
            }
        })

        closeBtn.addEventListener('click', () => {
            if(searchMenu.classList.contains('active')){
                cerrarMenu();
            }
        })
    }

    function abrirMenu(){
        searchMenu.classList.add('active');
    }

    function cerrarMenu(){
        searchMenu.classList.remove('active');
    }
})