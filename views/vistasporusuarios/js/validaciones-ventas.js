// validaciones para formulario registro de ventas
let cantidad = document.getElementById('cantidad')
let expresion = /^[1-9]{1,2}/
let formulario = document.getElementById('registro-venta')
let campoCedula = document.getElementById('cedula')
let exprecionCedula = /^[0-9]{7,10}/

formulario.addEventListener('submit', function (e) {


})

function validacion(e) {
    validar(cantidad, expresion,e)
    validar(campoCedula, exprecionCedula, e)
}

function validar(campo, express,e) {
    if (!express.test(campo.value)) {
        alert('cantidad no valida')
        campo.style.border = '1px solid red'
        e.preventDefault()
    }
}




formulario.addEventListener('submit', validacion)
