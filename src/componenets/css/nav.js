const mainMenu = document.querySelector('.navbar.nav');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('.nav-link');



// document.addEventListener('DOMContentLoaded', function () {
//     openMenu.addEventListener('click',show);
//     closeMenu.addEventListener('click',close);
// });
 openMenu.addEventListener('click',show);
 closeMenu.addEventListener('click',close); 
    


// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
