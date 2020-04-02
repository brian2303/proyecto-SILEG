//regex para validar campos
const regexEmail = /\w+@\w+\.+[a-zA-Z]/;
const regexPass = /\w+/;

//botones y inputs de formulario
let botonInicioSesion = document.getElementById('btn-iniciarsesion');
let campoEmail = document.getElementById('formGroupExampleInput');
let campoPassword = document.getElementById('formGroupExampleInput2');

//funcion para validar un correo
function validacion() {
    if(!regexEmail.test(campoEmail.value)){
        campoEmail.style.border='2px solid red';
    }else{
        campoEmail.style.border='1px solid #ced4da';
    }
}

//funcion para validar un password en inicio de sesion
function validacionPass() {
    if(!regexPass.test(campoPassword.value)){
        campoPassword.style.border='2px solid red';
    }else{
        campoPassword.style.border='1px solid #ced4da';
    }
}

//validacion de campos inicio de sesión
botonInicioSesion.addEventListener("click",()=>{
    validacion();
    validacionPass();
});
