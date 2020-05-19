const botonVentas = document.getElementById('menu-principal-ventas');
const subMenuVentas = document.getElementById('sub-menu-ventas');
const botonInventarios = document.getElementById('mod-inventarios');
const subMenuInventarios = document.getElementById('sub-menu-inventarios');
const botonFide = document.getElementById('mod-fidelizacion');
const subMenuFidelizacion = document.getElementById('sub-menu-fidelizacion');
const botonUsuarios = document.getElementById('mod-usuarios')
const subMenuUsuarios = document.getElementById('sub-menu-usuarios');
const botonReportes = document.getElementById('mod-reportes');
const subMenuReportes = document.getElementById('sub-menu-reportes');

function mostrar(elemento) {
    $(elemento).toggle(800);
}

botonVentas.addEventListener('click',()=>{
    mostrar(subMenuVentas);
});

botonInventarios.addEventListener('click',()=>{
    mostrar(subMenuInventarios);
});

botonFide.addEventListener('click',()=>{
    mostrar(subMenuFidelizacion);
});

botonUsuarios.addEventListener('click',()=>{
    mostrar(subMenuUsuarios);
});

botonReportes.addEventListener('click',()=>{
    mostrar(subMenuReportes);
});



