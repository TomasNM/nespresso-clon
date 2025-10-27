document.addEventListener('DOMContentLoaded', () => {
    const linkMobile = document.querySelectorAll('.link-mobile');
    const dropdown = document.querySelectorAll('.dropdownCont');

    console.log([...dropdown]);

    startEvents();

    function startEvents(){
        linkMobile.forEach((link) => {
            link.addEventListener('click', (e) => {

                e.stopPropagation();
                const targetMenu = document.querySelector(`.dropdownCont[data-dropdown="${link.dataset.dropdown}"]`);
                if(!targetMenu){
                    return;
                }

                
                
                linkMobile.forEach(l => {
                    if(l !== link){
                        l.classList.remove('active');
                    }
                })

                dropdown.forEach(menu => {
                    if(menu !== targetMenu){
                        menu.classList.remove('active');
                    }
                });

                targetMenu.classList.toggle('active');
                link.classList.toggle('active');
            })

        })

        document.addEventListener('click', (e) => {
            dropdown.forEach(menu => {
                if(!menu.contains(e.target)){
                    menu.classList.remove('active');
                }
            })

            linkMobile.forEach(link => {
                if(!link.contains(e.target) && ![...dropdown].some((menu ) => menu.classList.contains('active'))){
                    link.classList.remove('active');
                }
            })
        })

        
    }

})