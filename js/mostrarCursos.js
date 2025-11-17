import { cursosDisponibles } from './cursos.js';



export function mostrarCursos(lista) {
    const contenedorCursos = document.querySelector('.cajasCursosRecomendados');

    if (!contenedorCursos) {
        console.error("ERROR: No existe .cajasCursosRecomendados en el HTML");
        return;
    }

    contenedorCursos.innerHTML = "";

    lista.forEach(curso => {
        const cursoSection = document.createElement('section');
        cursoSection.classList.add('contenedorCursosDestacado');

        cursoSection.innerHTML = `
            <img class="${curso.imgclass}" src="${curso.imgsrc}" alt="${curso.imgalt}">
            <h3 class="precioIndex">${curso.precio}</h3>
            <h3 class="duracionIndex">${curso.cargaHoraria}</h3>
            <h4 class="tituloCursoIndex">${curso.titulo}</h4>
            <a href="../html/cursoDinamico.html">
                <h5 class="verMasIndex">Ver más</h5>
            </a>
            <a href="../html/formulario.html" class="comprarIndex">Comprar</a>
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
    const contenedorCursos = document.querySelector('.cajasCursosRecomendados');

    if (!contenedorCursos) {
        console.error("ERROR: No existe .cajasCursosRecomendados en el HTML");
        return;
    }

    const pares = cursosDisponibles.filter(c => c.id % 2 === 0);
    mostrarCursos(pares);
}

export function mostrarPrimerosNCursos(n = 3) {
    const contenedorCursos = document.querySelector('.cajasCursosRecomendados');

    if (!contenedorCursos) {
        console.error("ERROR: No existe .cajasCursosRecomendados en el HTML");
        return;
    }

    const primerosNCursos = cursosDisponibles.slice(0, n);

    mostrarCursos(primerosNCursos);
}