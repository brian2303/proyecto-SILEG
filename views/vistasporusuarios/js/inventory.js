const botonAñadir = document.getElementById('agregar-producto');
const seleccionProductos = document.getElementById('seleccion-producto');
const unidadesPorProducto = document.getElementById('unidades');

//funcion para añadir productos
function añadirProductos () {
    let selectedOption = seleccionProductos.options[seleccionProductos.selectedIndex];
    console.log(selectedOption.value);
}

//botonAñadir.addEventListener