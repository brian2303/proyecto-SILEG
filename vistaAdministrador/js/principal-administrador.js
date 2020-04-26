let botonVentas = document.getElementById('mod-ventas');
let subMenu = document.getElementById('sub-menu-ventas');

botonVentas.addEventListener('click',function () {
    if(subMenu.classList.contains('mostrar')){
        subMenu.classList.add('ocultar');
        subMenu.classList.remove('mostrar');
    }else{
        subMenu.classList.add('mostrar');
        subMenu.classList.remove('ocultar');
    }
});