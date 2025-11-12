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

document.addEventListener("DOMContentLoaded", () => {
  const btnEliminar = document.querySelector("#btnEliminarCuenta");

  if (!btnEliminar) return;

  btnEliminar.addEventListener("click", () => {
    const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (!usuarioLogueado) {
      alert("No hay ningún usuario logueado.");
      return;
    }

    const confirmar = confirm("¿Seguro que querés eliminar tu cuenta? Esta acción no se puede deshacer.");

    if (!confirmar) return;

    const usuariosActualizados = usuarios.filter(u => u.correo !== usuarioLogueado.correo);

    localStorage.setItem("usuarios", JSON.stringify(usuariosActualizados));
    localStorage.removeItem("usuarioLogueado");

    alert("Tu cuenta ha sido eliminada correctamente.");
    window.location.href = "../html/IniciarSesion.html";
  });
});