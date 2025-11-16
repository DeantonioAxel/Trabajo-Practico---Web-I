import { cursosDisponibles } from './cursos.js';

const contenedorCursos = document.querySelector('.cajasCursosRecomendados');

export function mostrarCursos(lista) {
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

        const comprarBtn = cursoSection.querySelector('.botonComprarCurso');
        comprarBtn.addEventListener('click', (event) => {
            localStorage.setItem("cursoSeleccionado", JSON.stringify(curso));
            window.location.href = curso.link;
            
        });
        
        contenedorCursos.appendChild(cursoSection);
    });
}

export function mostrarSoloPares() {
    const pares = cursosDisponibles.filter(c => c.id % 2 === 0);
    mostrarCursos(pares);
}