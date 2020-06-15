//regex para validar campos
const regexEmail = /\w+@\w+\.+[a-zA-Z]/;
const regexfiveTofifteencharacters = /\w{5,15}/;
const numeroCelular = /[0-9]{10,10}/


//FORMULARIO INCIO SESIÓN
//botones y inputs de formulario
let botonInicioSesion = document.getElementById('btn-iniciarsesion');
let campoEmail = document.getElementById('correoElectronico');
let campoPassword = document.getElementById('contrasena');
let mensajeError = document.getElementsByClassName("ocultar");
const formularioInicioSesion = document.getElementById('formlogin');

//funcion para validar un correo
function validacionEmail(e) {
    if(!regexEmail.test(campoEmail.value)){
        campoEmail.style.borderBottom ='1px solid red';
        mensajeError[0].classList.add("mostrarmsg");
        e.preventDefault();
    }else{
        campoEmail.style.borderBottom ='';
        mensajeError[0].classList.remove("mostrarmsg");
    }
}
//funcion para validar la contraseña
function validarPass(e) {
    if(!regexfiveTofifteencharacters.test(campoPassword.value)){
        campoPassword.style.borderBottom = '1px solid red'
        mensajeError[1].classList.add("mostrarmsg");
        e.preventDefault();
    }else{
        campoPassword.style.borderBottom=''
        mensajeError[1].classList.remove("mostrarmsg");
    }
}
//validacion inicio sesión
function validacionGeneral(e) {
    validacionEmail(e);
    validarPass(e);
    redireccionar();
}
formularioInicioSesion.addEventListener('submit',validacionGeneral);
//FORMULARIO INCIO SESIÓN

//REDIRECCIONAR VISTAS
const userAdmin = 'pepeMojica@hotmail.com';
const passAdmin = 'pepe123';
const userCustomer = 'briolarte@gmail.com';
const passCustomer = 'bri123';
function redireccionar() {
    if(campoEmail.value === userAdmin && campoPassword.value === passAdmin){
        window.open('./views/vistasporusuarios/vista-administrador/reportes.html')
    }else if(campoEmail.value === userCustomer && campoPassword.value === passCustomer){
        window.open('./views/vistasporusuarios/vista-cliente/pedidos-cliente.html')
    }   
}



