import {cursosDisponibles} from './cursos.js';
import {Dialog} from './dialog.js';
import { generarFormulario } from './generarFormulario.js';
import { HeaderOtrasVistas } from "./headerOtrasVistas.js";

const header = new HeaderOtrasVistas();
const cursoSeleccionado = JSON.parse(localStorage.getItem("cursoSeleccionado"));
const btnInscripcion = document.querySelector('.inscription');

if(cursoSeleccionado){
    generarFormulario(cursoSeleccionado);

    const mensaje = new Dialog();

    btnInscripcion.addEventListener('click', () => {
        const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

        usuarioLogueado.cursos.push(cursoSeleccionado);

        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioLogueado));
    })
} else {
    console.warn("No hay curso seleccionado");
}

header.render();



