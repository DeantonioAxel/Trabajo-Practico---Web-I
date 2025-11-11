import { Validaciones } from "./validaciones.js";
import { Usuario } from "./usuario.js";

//validaciones
const validar = new Validaciones();

//formulario
const FORM_REGISTER = document.querySelector('.js-form-register');

//mensajes de error
const ERROR_NOMBRE = document.querySelector('#js-error-nombre');
const ERROR_APELLIDO = document.querySelector('#js-error-apellido');
const ERROR_CORREO = document.querySelector('#js-error-correo');
const ERROR_CONTRASENIA = document.querySelector('#js-error-contrasenia');
const ERROR_REPETIR_CONTRASENIA = document.querySelector('#js-error-repetir-contrasenia');
const ERROR_USUARIO_EXISTENTE = document.querySelector('#js-error-usuario-existente');

//input
const INPUT_NOMBRE = document.querySelector('#nombre');
const INPUT_APELLIDO = document.querySelector('#apellido');
const INPUT_CORREO = document.querySelector('#correo');
const INPUT_CONTRASENIA = document.querySelector('#contrasenia');
const INPUT_REPETIR_CONTRASENIA = document.querySelector('#repetir-contrasenia');

//Dialog
const DIALOG = document.querySelector('.dialog-register');
const ACEPTAR_DIALOG = document.querySelector('.js-btn-aceptar')

//Formulario
FORM_REGISTER.addEventListener('submit', (event) => {
    event.preventDefault();

    const NOMBRE = INPUT_NOMBRE.value.trim();
    const APELLIDO = INPUT_APELLIDO.value.trim();
    const CORREO = INPUT_CORREO.value.trim();
    const CONTRASENIA = INPUT_CONTRASENIA.value.trim();
    const REPETIR_CONTRASENIA = INPUT_REPETIR_CONTRASENIA.value.trim();

    if (NOMBRE !== "") {

        if (APELLIDO !== "") {

            if (validar.correo(CORREO) && CORREO !== "") {

                if (validar.contrasenia(CONTRASENIA) && CONTRASENIA !== "") {

                    if (validar.contrasenias_iguales(CONTRASENIA, REPETIR_CONTRASENIA)) {

                        const NUEVO_USUARIO = new Usuario(NOMBRE, APELLIDO, CORREO, CONTRASENIA);
                        const USUARIOS_GUARDADOS = JSON.parse(localStorage.getItem('usuarios')) || [];

                        if (!validar.usuario_existente(NUEVO_USUARIO.correo, USUARIOS_GUARDADOS)) {

                            USUARIOS_GUARDADOS.push(NUEVO_USUARIO);
                            localStorage.setItem('usuarios', JSON.stringify(USUARIOS_GUARDADOS));

                            DIALOG.showModal();

                            ACEPTAR_DIALOG.addEventListener('click', (event) => {
                                FORM_REGISTER.reset();
                                ERROR_USUARIO_EXISTENTE.textContent = "";
                                ERROR_USUARIO_EXISTENTE.classList.remove('activo');
                                window.location.href = "IniciarSesion.html"
                            });
                        } else {
                            ERROR_USUARIO_EXISTENTE.textContent = "Ya existe un usuario con ese correo"
                            ERROR_USUARIO_EXISTENTE.classList.add('activo');
                        }
                    } else {
                        ERROR_REPETIR_CONTRASENIA.innerHTML = `
                            Contraseña inválida.<br>
                            Debe ser igual a la contraseña ingresada anteriormente`;
                        ERROR_REPETIR_CONTRASENIA.classList.add('activo');
                    }
                } else {
                    ERROR_CONTRASENIA.innerHTML = `
                            Contraseña inválida.<br>
                            Debe contener al menos:
                                <ul>
                                    <li>1 letra mayúscula</li>
                                    <li>1 letra minúscula</li>
                                    <li>1 número</li>
                                    <li>1 carácter especial</li>
                                    <li>8 o más caracteres</li>
                                </ul>`;
                    ERROR_CONTRASENIA.classList.add('activo');
                }
            } else {
                ERROR_CORREO.textContent = "Correo invalido";
                ERROR_CORREO.classList.add('activo');
            }
        } else {
            ERROR_APELLIDO.textContent = "Complete el campo";
            ERROR_APELLIDO.classList.add('activo');
        }
    } else {
        ERROR_NOMBRE.textContent = "Complete el campo";
        ERROR_NOMBRE.classList.add('activo');
    }
})

//Borro los msj de error
INPUT_NOMBRE.addEventListener('input', () => {
    if (INPUT_NOMBRE.value.trim() !== "") {
        ERROR_NOMBRE.textContent = "";
        ERROR_NOMBRE.classList.remove('activo');
    }
});

INPUT_APELLIDO.addEventListener('input', () => {
    if (INPUT_APELLIDO.value.trim() !== "") {
        ERROR_APELLIDO.textContent = "";
        ERROR_APELLIDO.classList.remove('activo');
    }
});

INPUT_CORREO.addEventListener('input', () => {
    if (validar.correo(INPUT_CORREO.value.trim())) {
        ERROR_CORREO.textContent = "";
        ERROR_CORREO.classList.remove('activo');
    }
});

INPUT_CONTRASENIA.addEventListener('input', () => {
    if (validar.contrasenia(INPUT_CONTRASENIA.value.trim())) {
        ERROR_CONTRASENIA.textContent = "";
        ERROR_CONTRASENIA.classList.remove('activo');
    }
});

INPUT_REPETIR_CONTRASENIA.addEventListener('input', () => {
    if (validar.contrasenias_iguales(INPUT_CONTRASENIA.value.trim(), INPUT_REPETIR_CONTRASENIA.value.trim())) {
        ERROR_REPETIR_CONTRASENIA.textContent = "";
        ERROR_REPETIR_CONTRASENIA.classList.remove('activo');
    }
});