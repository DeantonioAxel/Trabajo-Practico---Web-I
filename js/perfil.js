import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import { inicializarDatalist } from './datalist.js'

const header = new HeaderOtrasVistas();
inicializarDatalist();

const USUARIO = JSON.parse(localStorage.getItem('usuarioLogueado'));
const NOMBRE_USUARIO = document.querySelector('.js-nombre-usuario');
const CORREO_USUARIO = document.querySelector('.js-correo-usuario');
const CURSOS_DEL_USUARIO = USUARIO.cursos;

NOMBRE_USUARIO.textContent = USUARIO.nombre;
CORREO_USUARIO.textContent = USUARIO.correo;

header.render();

document.addEventListener("DOMContentLoaded", () => {
  const btnEliminar = document.querySelector("#btnEliminarCuenta");
  const cursosDelUsuario = document.querySelector('.mis-cursos-grilla');

  const dialog = document.querySelector('.dialog-borrar-curso');
  const btnAceptarDialog = document.querySelector('.js-btn-aceptar');
  const btnCancelarDialog = document.querySelector('.js-btn-cancelar');

  CURSOS_DEL_USUARIO.forEach((curso, index) => {
    const cursoSection = document.createElement('section');
    cursoSection.classList.add('cursos-contenedor');

    cursoSection.innerHTML = `
        <img class="imagenCurso" src="${curso.imgsrc}" alt="${curso.imgalt}">
        <h3 class="duracion">${curso.cargaHoraria}</h3>
        <h4 class="tituloCurso">${curso.titulo}</h4>
        <a href="#"><h5 class="verMas">Ver más</h5></a>
        <button class="btn-eliminar-cuenta js-eliminar-curso">Eliminar curso</button>
      `;
    cursosDelUsuario.appendChild(cursoSection);

    const btnEliminarCurso = cursoSection.querySelector('.js-eliminar-curso');
    if (btnEliminarCurso) {
      btnEliminarCurso.addEventListener('click', () => {
        dialog.showModal();

        btnAceptarDialog.addEventListener('click', () => {
          CURSOS_DEL_USUARIO.splice(index, 1);
          USUARIO.cursos = CURSOS_DEL_USUARIO;

          localStorage.setItem('usuarioLogueado', JSON.stringify(USUARIO));

          const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
          const pos = usuarios.findIndex(u => u.correo === USUARIO.correo);

          if (pos !== -1) {
            usuarios[pos] = USUARIO;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
          }

          dialog.close();
          location.reload();
        });

        btnCancelarDialog.addEventListener('click', () => {
          dialog.close();
        })
      })
    }
  });

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