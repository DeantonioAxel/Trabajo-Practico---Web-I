const USUARIO = JSON.parse(localStorage.getItem('usuarioLogueado'));
const NOMBRE_USUARIO = document.querySelector('.js-nombre-usuario');
const CORREO_USUARIO = document.querySelector('.js-correo-usuario')

const BTN_CERRAR_SESION = document.querySelector('.js-btn-cerrar-sesion');

NOMBRE_USUARIO.textContent = USUARIO.nombre;
CORREO_USUARIO.textContent = USUARIO.correo;

BTN_CERRAR_SESION.addEventListener('click', (event) => {
    localStorage.removeItem('usuarioLogueado');
    window.location.href = "../html/IniciarSesion.html";
});