import { cursosDisponibles } from './cursos.js';
import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import { mostrarCursos } from './mostrarCursos.js';
import {inicializarDatalist} from './datalist.js'
import { Footer } from "./footer.js";


const header = new HeaderOtrasVistas();
const footer = new Footer();

footer.render();

inicializarDatalist();

const contenedorCursos = document.querySelector('.cajasCursosRecomendados');
const filtros = document.querySelectorAll('.filtroCategoria');

mostrarCursos(cursosDisponibles);

function aplicarFiltros() {
    const seleccionados = [...filtros].filter(f => f.checked).map(f => f.value);

    if (seleccionados.includes("todos") || seleccionados.length === 0) {
        mostrarCursos(cursosDisponibles);
        return;
    }

    const filtrados = cursosDisponibles.filter(curso => seleccionados.includes(curso.filtro));

    mostrarCursos(filtrados);
}
filtros.forEach(f => f.addEventListener("change", aplicarFiltros));

header.render();