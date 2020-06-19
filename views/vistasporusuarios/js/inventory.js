//boton para añadir productos a la tabla
const botonAñadir = document.getElementById('agregar-producto');
//cuerpo de la tabla donde se almacenan los productos
const carrito = document.getElementById('productos-compra');
class Carrito{
    //Añadir el producto al carrito
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('add-car')){
            //formulario completo de registro de compra
            const formularioCompra = document.getElementById('formulario-compra');
            console.log(formularioCompra);
            //rescata los valores que se ingresaran a la tabla
            this.leerDatosProducto(formularioCompra);
        }
    }

    leerDatosProducto(formCompra){
        //json que me permite guardar los campos de form que ingresare a la tabla
        const detalleCompra = {
            nombre : formCompra.querySelector('#seleccion-producto').value,
            unidades : formCompra.querySelector('#unidades').value
        }
        this.insertarCarrito(detalleCompra)
    }
    
    insertarCarrito(camposform){
        const row = document.createElement('tr');
        row.innerHTML += `
            <td>${camposform.nombre}</td>
            <td>${camposform.unidades}</td>
            <td><i class="fas fa-minus-circle remover"></i></td>
        `;
        carrito.appendChild(row)
    }

    eliminarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('remover')){
            e.target.parentElement.parentElement.remove();
        }
    }
}
//escuchador del evento para agregar un producto
const  carro = new Carrito();
botonAñadir.addEventListener('click',(e) =>{
    carro.comprarProducto(e)
});
//escuchador del evento para eliminar un producto
carrito.addEventListener('click',(e)=>{
    carro.eliminarProducto(e);
})



















