document.addEventListener('DOMContentLoaded', () =>{
    startEvents();

    function startEvents(){
        document.querySelectorAll('.main-links').forEach((e) =>{
            const link = e.querySelector('.link');
            link.parentElement.addEventListener('mouseenter', () => {
                document.querySelectorAll('.menu').forEach((e) => {
                    const menu = e.querySelector('.menu-open');

                    if(menu.dataset.menu === link.innerHTML){
                        abrirMenu(menu);
                    }
                })
            })

            link.parentElement.addEventListener('mouseleave', () => {

                document.querySelectorAll('.menu').forEach((e) => {
                    const menu = e.querySelector('.menu-open')

                    setTimeout(() =>{
                        if(!link.matches(':hover') && !menu.matches(':hover')){
                        cerrarMenu(menu);
                        }
                    }, 100);


                    menu.addEventListener('mouseleave', () => {
                        cerrarMenu(menu);
                    })
                })

                
            })
        })


        document.querySelectorAll('.menu').forEach((e) => {
            const menu = e.querySelector('.menu-open');
            if(menu.cafe){
                console.log(menu);
            }
        })
    }

    function abrirMenu(menu){
        menu.classList.add('visibleMenu');
    }

    function cerrarMenu(menu){
        menu.classList.remove('visibleMenu');
    }

})

// document.addEventListener('DOMContentLoaded', () => {
//     const link = document.querySelectorAll('.main-links');
//     const linkCafe = link[1];
//     const menuCafe = document.querySelector('.menu-open');

//     startEvents();
//     function startEvents(){
//         linkCafe.addEventListener('mouseenter', abrirMenu);
//         linkCafe.addEventListener('mouseleave', () => {
//             setTimeout(() => {
//                 if(!menuCafe.matches(':hover') && !linkCafe.matches(':hover')){
//                     cerrarMenu();
//                 }
//             }, 100);
//         });
//         menuCafe.addEventListener('mouseleave', cerrarMenu);

//     }

//     function abrirMenu(){
//         menuCafe.classList.add('visibleMenu');
//     }

//     function cerrarMenu(){
//         menuCafe.classList.remove('visibleMenu');
//     }
// })