//regex para validar campos
const regexEmail = /\w+@\w+\.+[a-zA-Z]/;
const regexfiveTofifteencharacters = /\w{5,35}/;
const cellphone = /[0-9]{10,10}/
const phoneNumber = /[0-9]{7,10}/
const password = /[\w\.\-\@\$]{10,}/

//VALIDACION REGISTRO CLIENTE
const nombreCliente = document.getElementById('nombres-cliente');
const apellidosCliente = document.getElementById('apellidos-cliente');
const celularCliente = document.getElementById('celular-cliente');
const telefonoCliente = document.getElementById('telefono-cliente');
const emailCliente = document.getElementById('email-cliente');
const direccionCliente = document.getElementById('direccion-cliente');
const ciudadCliente = document.getElementById('ciudad-cliente');
const contraseñaCliente = document.getElementById('contraseña-cliente');
const repetirContCliente = document.getElementById('repetir-contraseña-cliente');
const formRegistro = document.getElementById('form-registro-cliente');

function validacionEmail(e) {
    if(!regexEmail.test(emailCliente.value)){
        emailCliente.style.borderBottom ='1px solid red';
        e.preventDefault();
    }else{
        emailCliente.style.borderBottom ='';
    }
}

const validationNameandLastName = e =>{
    if(!regexfiveTofifteencharacters.test(nombreCliente.value && apellidosCliente.value)){
        nombreCliente.style.borderBottom ='1px solid red';
        apellidosCliente.style.borderBottom ='1px solid red';
        e.preventDefault();
    }else{
        nombreCliente.style.borderBottom ='';
        apellidosCliente.style.borderBottom ='';
    }
}

const validationDirectionCustomer = e =>{
    if(!regexfiveTofifteencharacters.test(direccionCliente.value)){
        direccionCliente.style.borderBottom ='1px solid red';
        e.preventDefault();
    }else{
        direccionCliente.style.borderBottom ='';
    }
}

const validationPhoneNumber = e =>{
    if(!phoneNumber.test(telefonoCliente.value)){
        telefonoCliente.style.borderBottom ='1px solid red';
        e.preventDefault();
    }else{
        telefonoCliente.style.borderBottom ='';
    }
}

const validationCellPhone = e =>{
    if(!cellphone.test(celularCliente.value)){
        celularCliente.style.borderBottom ='1px solid red';
        e.preventDefault();
    }else{
        celularCliente.style.borderBottom ='';
    }
}
const validationPassword = e =>{
    if(!password.test(contraseñaCliente.value && repetirContCliente.value)){
        contraseñaCliente.style.borderBottom ='1px solid red';
        repetirContCliente.style.borderBottom ='1px solid red'
        e.preventDefault();
    }else{
        contraseñaCliente.style.borderBottom ='';
        repetirContCliente.style.borderBottom =''
    }
}

const validationCity = e =>{
    if(!regexfiveTofifteencharacters.test(ciudadCliente.value)){
        ciudadCliente.style.borderBottom ='1px solid red';
        e.preventDefault();
    }else{
        ciudadCliente.style.borderBottom ='';
    }
}

function validaciones(e) {
    validationNameandLastName(e)
    validationDirectionCustomer(e)
    validationPhoneNumber(e)
    validationCellPhone(e)
    validacionEmail(e)
    validationPassword(e)
    validationCity(e)
}

formRegistro.addEventListener('submit',validaciones);