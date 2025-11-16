import { cursosDisponibles } from './cursos.js';
import { HeaderOtrasVistas } from "./headerOtrasVistas.js";

const header = new HeaderOtrasVistas();
const contenedorCursos = document.querySelector('.cajasCursosRecomendados');
const filtros = document.querySelectorAll('.filtroCategoria');

function mostrarCursos(lista) {
    contenedorCursos.innerHTML = "";
    lista.forEach(curso => {
        const cursoSection = document.createElement('section');
        cursoSection.classList.add('contenedorCursosDestacado');
        cursoSection.innerHTML = `
            <img class="${curso.imgclass}" src="${curso.imgsrc}" alt="${curso.imgalt}">
            <h3 class="precioIndex">${curso.precio}</h3>
            <h3 class="duracionIndex">${curso.cargaHoraria}</h3>
            <h4 class="tituloCursoIndex">${curso.titulo}</h4>
            <a href="./html/IniciarSesion.html">
                <h5 class="verMasIndex">Ver más</h5>
            </a>
            <a href="./html/IniciarSesion.html" class="comprarIndex">Comprar</a>
        `;
        contenedorCursos.appendChild(cursoSection);
    });
}
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