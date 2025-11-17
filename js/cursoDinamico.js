import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import {inicializarDatalist} from './datalist.js'
import { cursosDisponibles } from "./cursos.js";
import {generarInformacionDelCursoSeleccionado} from "./generarInfoCurso.js"
import { generarUnidades } from "./generarInfoCurso.js";
import { generarImagenDelCursoSeleccionado } from "./generarInfoCurso.js";
import {generarInformacionDocente} from "./generarInfoCurso.js";
import { Footer } from "./footer.js";


inicializarDatalist();

const cursoSeleccionado = JSON.parse(localStorage.getItem("cursoSeleccionado"));
const contenedorImagen = document.querySelector("#imagenPaginaCurso");
const contenedorInformacionCurso = document.querySelector(".contenedorInformacionCurso");
const contenedorContenidoClases = document.querySelector(".contenidoClases");
const contenedorInfoDocente = document.querySelector(".informacionDocente");

const header = new HeaderOtrasVistas();
const footer = new Footer();

footer.render();

if(cursoSeleccionado){
    generarImagenDelCursoSeleccionado(cursoSeleccionado, contenedorImagen);

} else {
    console.warn("No hay curso seleccionado");
}

if(cursoSeleccionado){
    generarInformacionDelCursoSeleccionado(cursoSeleccionado, contenedorInformacionCurso);

} else {
    console.warn("No hay curso seleccionado");
}

document.addEventListener("DOMContentLoaded", () => {
    const contenedorContenidoClases = document.querySelector(".contenidoClases");
    const cursoSeleccionado = JSON.parse(localStorage.getItem("cursoSeleccionado"));
    
    if (contenedorContenidoClases && cursoSeleccionado) {
        generarUnidades(cursoSeleccionado.unidades, contenedorContenidoClases);
    } else {
        console.error("No se encontró el contenedor o no hay curso seleccionado");
    }
});

if(cursoSeleccionado){
    generarInformacionDocente(cursoSeleccionado, contenedorInfoDocente);

} else {
    console.warn("No hay curso seleccionado");
}

header.render();
