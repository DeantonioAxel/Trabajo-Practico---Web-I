import {cursosDisponibles} from './cursos.js';
import {Dialog} from './dialog.js';
import { generarFormulario } from './generarFormulario.js';

const cursoSeleccionado = JSON.parse(localStorage.getItem("cursoSeleccionado"));

if(cursoSeleccionado){
    generarFormulario(cursoSeleccionado);
} else {
    console.warn("No hay curso seleccionado");
}

const mensaje = new Dialog();





