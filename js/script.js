const convertMenu = document.getElementById("menu");
const convertMenu2 = document.getElementById("menu--click");
const controlMenu = document.getElementById("menu--click");

controlMenu.onclick = () => {

        convertMenu.classList.toggle('menu-burger_active');
        convertMenu2.classList.toggle('header__burger_active');

}

