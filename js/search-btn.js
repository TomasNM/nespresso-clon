document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.searchBtn');
    const searchBar = document.querySelector('.search-bar');

    startEvents();

    function startEvents(){
        searchBtn.addEventListener('click', () => {
            barraVisible();
        })

        document.addEventListener('click', (e) => {
            if(!searchBar.contains(e.target) && !searchBtn.contains(e.target)){
                cerrarBarra();
            }
        })
    }

    function barraVisible(){
        searchBar.classList.add('active');
        searchBtn.classList.add('hidden');
    }

    function cerrarBarra(){
        searchBar.classList.remove('active');
        searchBtn.classList.remove('hidden');
    }
})