import { Validaciones } from "./validaciones.js";

//validaciones
const validar = new Validaciones();

//formulario
const FORMULARIO_LOGIN = document.querySelector('.js-form-login');

//mensajes de error
const MSJ_ERROR = document.querySelector('#js-msj-error');
const ERROR_USUARIO_INEXISTENTE = document.querySelector('#js-error-usuario-inexistente');

//inputs
const INPUT_CORREO = document.querySelector('#correo');
const INPUT_CONTRASENIA = document.querySelector('#password');

if (FORMULARIO_LOGIN) {
    FORMULARIO_LOGIN.addEventListener('submit', (event) => {
        event.preventDefault();

        const CORREO = INPUT_CORREO.value.trim();
        const CONTRASENIA = INPUT_CONTRASENIA.value.trim();


        if ((validar.correo(CORREO) && CORREO !== "") && (validar.contrasenia(CONTRASENIA) && CONTRASENIA !== "")) {
            const USUARIOS_GUARDADOS = JSON.parse(localStorage.getItem('usuarios') || []);

            const USUARIO_ENCONTRADO = validar.obtener_usuario(CORREO, CONTRASENIA, USUARIOS_GUARDADOS);

            if (USUARIO_ENCONTRADO) {
                localStorage.setItem('usuarioLogueado', JSON.stringify(USUARIO_ENCONTRADO));
                window.location.href = "../index.html";
            } else {
                ERROR_USUARIO_INEXISTENTE.textContent = "Error al iniciar sesion"
                ERROR_USUARIO_INEXISTENTE.classList.add('activo');
            }
        } else {
            MSJ_ERROR.textContent = "Los datos ingresados son incorrectos"
            MSJ_ERROR.classList.add('activo');
        }
    })
}

//Borro los msj de error
if (INPUT_CORREO) {
    INPUT_CORREO.addEventListener('input', () => {
        if (INPUT_CORREO.value.trim() !== "") {
            MSJ_ERROR.textContent = "";
            MSJ_ERROR.classList.remove('active');
        }
    });
}

if (INPUT_CONTRASENIA) {
    INPUT_CONTRASENIA.addEventListener('input', () => {
        if (INPUT_CONTRASENIA.value.trim() !== "") {
            MSJ_ERROR.textContent = "";
            MSJ_ERROR.classList.remove('active');
        }
    });
}