const body = document.body;
const button = document.querySelector('#button-change-theme');
const buttonMenuBurguer = document.querySelector('#button-menu-burguer');
const menuResponsive = document.querySelector('#menu-responsive')

let menuIsActivate = false;

button.addEventListener("click", () => {
    
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) button.innerHTML = '&#x2600;'
    else button.innerHTML = '&#x1F319;'
});

buttonMenuBurguer.addEventListener("click", () => {
    
    if(!menuIsActivate) { 
        buttonMenuBurguer.style.cssText = "rotate: 180deg";
        menuIsActivate = true;
    } else {
        buttonMenuBurguer.style.cssText = "rotate: 90deg";
        menuIsActivate = false;
    }
    menuResponsive.classList.toggle('hidden');
    menuResponsive.classList.toggle('menu-responsive');
});
