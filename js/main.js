//regex para validar campos
const regexEmail = /\w+@\w+\.+[a-zA-Z]/;
const regexPass = /\w{5,15}/;

//botones y inputs de formulario
let botonInicioSesion = document.getElementById('btn-iniciarsesion');
let campoEmail = document.getElementById('formGroupExampleInput');
let campoPassword = document.getElementById('formGroupExampleInput2');
let mensajeError = document.getElementsByClassName("ocultar");
console.log(mensajeError);
//funcion para validar un correo
function validacion() {
    if(!regexEmail.test(campoEmail.value)){
        campoEmail.style.border='2px solid red';
        mensajeError[0].classList.add("mostrarmsg");
    }else{
        campoEmail.style.border='1px solid #ced4da';
        mensajeError[0].classList.remove("mostrarmsg");
    }
}

//funcion para validar un password en inicio de sesion
function validacionPass() {
    if(!regexPass.test(campoPassword.value)){
        campoPassword.style.border='2px solid red';
        mensajeError[1].classList.add("mostrarmsg");
    }else{
        campoPassword.style.border='1px solid #ced4da';
        mensajeError[1].classList.remove("mostrarmsg");
    }
}

//validacion de campos inicio de sesión
botonInicioSesion.addEventListener("click",()=>{
    validacion();
    validacionPass();
});
