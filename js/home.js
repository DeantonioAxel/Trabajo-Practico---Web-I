import { HeaderHome } from "./headerHome.js";
import { cursosDisponibles } from "./cursos.js";
import { Slider } from "./slider.js";

document.addEventListener('DOMContentLoaded', () => {
    const header = new HeaderHome();
    const slider = new Slider();
    const contenedorCursos = document.querySelector('.cajasCursosRecomendados');

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
    slider.render();
    header.render();
});
