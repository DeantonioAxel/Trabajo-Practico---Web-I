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
            <p>Precio: $${curso.precio}</p>
            <p>Carga Horaria: ${curso.cargaHoraria} horas</p>
            <h3>${curso.titulo}</h3>
            <h5 class="verMasIndex">Ver más</h5>
            <button class="botonComprarCurso">Comprar</button>
        `;

        const verMasBtn = cursoSection.querySelector('.verMasIndex');
            if (curso.link) {
                verMasBtn.addEventListener('click', () => {
                    window.location.href = curso.link;
                });
            } else {
                verMasBtn.addEventListener('click', () => {
                    alert("El link de este curso no está disponible");
                });
            }

        const comprarBtn = cursoSection.querySelector('.botonComprarCurso');
        comprarBtn.addEventListener('click', (event) => {
            localStorage.setItem("cursoSeleccionado", JSON.stringify(curso));
            window.location.href = curso.link;
            
        });
        
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