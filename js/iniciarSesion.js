import { Validaciones } from "./validaciones.js";

//validaciones
const validar = new Validaciones();

//formulario
const FORMULARIO_LOGIN = document.querySelector('.js-form-login');


FORMULARIO_LOGIN.addEventListener('submit', (event) => {
    event.preventDefault();

    const CORREO = document.querySelector('#correo').value.trim();
    const CONTRASENIA = document.querySelector('#password').value.trim();

    if (validar.correo(CORREO) && CORREO !== "") {
        
        if (validar.contrasenia(CONTRASENIA) && CONTRASENIA !== "") {
            
            const USUARIOS_GUARDADOS = JSON.parse(localStorage.getItem('usuarios') || []);

            if (validar.usuario_existente(CORREO, USUARIOS_GUARDADOS)) {
                window.location.href("../index.html");
            }
        }
    }
})