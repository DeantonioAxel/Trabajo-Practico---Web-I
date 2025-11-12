import { Validaciones } from "./validaciones.js";

//validaciones
const validar = new Validaciones();

//formulario
const FORMULARIO_LOGIN = document.querySelector('.js-form-login');

//mensajes de error
const ERROR_CORREO = document.querySelector('#js-error-correo');
const ERROR_CONTRASENIA = document.querySelector('#js-error-contrasenia');
const ERROR_USUARIO_INEXISTENTE = document.querySelector('#js-error-usuario-inexistente');

//inputs
const INPUT_CORREO = document.querySelector('#correo');
const INPUT_CONTRASENIA = document.querySelector('#password');

if (FORMULARIO_LOGIN) {
    FORMULARIO_LOGIN.addEventListener('submit', (event) => {
        event.preventDefault();

        const CORREO = INPUT_CORREO.value.trim();
        const CONTRASENIA = INPUT_CONTRASENIA.value.trim();


        if (validar.correo(CORREO) && CORREO !== "") {
            if (validar.contrasenia(CONTRASENIA) && CONTRASENIA !== "") {

                const USUARIOS_GUARDADOS = JSON.parse(localStorage.getItem('usuarios') || []);
                
                const USUARIO_ENCONTRADO = validar.obtener_usuario(CORREO, CONTRASENIA, USUARIOS_GUARDADOS);
                
                if (USUARIO_ENCONTRADO) {
                    localStorage.setItem('usuarioLogueado', JSON.stringify(USUARIO_ENCONTRADO));                   
                    window.location.href = "../html/homeLogueado.html";
                } else {
                    ERROR_USUARIO_INEXISTENTE.textContent = "No existe un usuario con ese correo "
                    ERROR_USUARIO_INEXISTENTE.classList.add('activo');
                }
            } else {
                ERROR_CONTRASENIA.textContent = "Ingrese una contraseña valida"
                ERROR_CONTRASENIA.classList.add('activo');
            }
        } else {
            ERROR_CORREO.textContent = "Ingrese un correo valido";
            ERROR_CORREO.classList.add('activo');
        }
    })
}

//Borro los msj de error
if (INPUT_CORREO) {
    INPUT_CORREO.addEventListener('input', () => {
        if (INPUT_CORREO.value.trim() !== "") {
            ERROR_CORREO.textContent = "";
            ERROR_CORREO.classList.remove('active');
        }
    });
}

if (INPUT_CONTRASENIA) {
    INPUT_CONTRASENIA.addEventListener('input', () => {
        if (INPUT_CONTRASENIA.value.trim() !== "") {
            ERROR_CONTRASENIA.textContent = "";
            ERROR_CONTRASENIA.classList.remove('active');
        }
    });
}