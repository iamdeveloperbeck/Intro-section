document.addEventListener('DOMContentLoaded', function() {

    const dropdown = document.querySelectorAll('.dropdown-toggle'); 
    const dropMobile = document.querySelectorAll('.menu-dropdown'); 
    const openMenu = document.querySelector('.menu-icon'); 
    const menu = document.querySelector('.mobile-menu'); 
    const menuClose = document.querySelector('.menu-close'); 

    dropdown.forEach((drop) => {
        drop.addEventListener('click', () => {
            drop.classList.toggle('active');
        });
    });

    dropMobile.forEach((drop) => {
        drop.addEventListener('click', () => {
            drop.classList.toggle('active');
        });
    });

    openMenu.addEventListener('click', () => {
        menu.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});