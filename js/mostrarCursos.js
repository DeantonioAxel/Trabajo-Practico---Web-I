import { cursosDisponibles } from './cursos.js';

const contenedorCursos = document.querySelector('.cajasCursosRecomendados');

export function mostrarCursos(lista) {
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

        const verMasBtn = cursoSection.querySelector('.verMasIndex');
        if (curso.verMas) {
            verMasBtn.addEventListener('click', () => {
                localStorage.setItem("cursoSeleccionado", JSON.stringify(curso));
                window.location.href = curso.verMas;
            });
        } else {
            verMasBtn.addEventListener('click', () => {
                alert("El link de este curso no está disponible");
            });
        }

        const comprarBtn = cursoSection.querySelector('.comprarIndex');
        if (curso.comprar) {
            comprarBtn.addEventListener('click', (event) => {
                localStorage.setItem("cursoSeleccionado", JSON.stringify(curso));
                window.location.href = curso.link;

            });
        }
        contenedorCursos.appendChild(cursoSection);
    });
}

export function mostrarSoloPares() {
    const pares = cursosDisponibles.filter(c => c.id % 2 === 0);
    mostrarCursos(pares);
}