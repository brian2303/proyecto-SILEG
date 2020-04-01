const regexEmail = /\w+@\w+\.+[a-zA-Z]/;

let botonInicioSesion = document.getElementById('btn-iniciarsesion');
let campoEmail = document.getElementById('formGroupExampleInput');

//funcion para validar un correo
function validacion() {
    if(!regexEmail.test(campoEmail.value)){
        campoEmail.style.border='2px solid red';
    }else{
        campoEmail.style.border='1px solid #ced4da';
    }
}

botonInicioSesion.addEventListener("click",()=>{
    validacion();
});