import {cursosDisponibles} from './cursos.js';
import {Dialog} from './dialog.js';
import { generarFormulario } from './generarFormulario.js';
import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import {inicializarDatalist} from './datalist.js'

const header = new HeaderOtrasVistas();

inicializarDatalist();

const cursoSeleccionado = JSON.parse(localStorage.getItem("cursoSeleccionado"));

if(cursoSeleccionado){
    generarFormulario(cursoSeleccionado);
} else {
    console.warn("No hay curso seleccionado");
}

const mensaje = new Dialog();

header.render();



