import { cursosDisponibles } from './cursos.js';
import { Dialog } from './dialog.js';
import { generarFormulario } from './generarFormulario.js';
import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import { inicializarDatalist } from './datalist.js'

const header = new HeaderOtrasVistas();

inicializarDatalist();

const cursoSeleccionado = JSON.parse(localStorage.getItem("cursoSeleccionado"));
const btnInscripcion = document.querySelector('.inscription');

if (cursoSeleccionado) {
    generarFormulario(cursoSeleccionado);

    const mensaje = new Dialog();

    btnInscripcion.addEventListener('click', () => {
        const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        usuarioLogueado.cursos.push(cursoSeleccionado);

        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));

        const index = usuarios.findIndex(u => u.correo === usuarioLogueado.correo);
        if (index !== -1) {
            usuarios[index] = usuarioLogueado;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
    });
} else {
    console.warn("No hay curso seleccionado");
}

header.render();



