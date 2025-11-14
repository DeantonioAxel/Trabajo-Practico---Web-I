import {cursosDisponibles} from './cursos.js';


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
        contenedorCursos.appendChild(cursoSection);
    });
}

mostrarCursos(cursosDisponibles);

function aplicarFiltros() {
    const seleccionados = [...filtros].filter(f => f.checked).map(f => f.value);
    
    if(seleccionados.includes("todos") || seleccionados.length===0){
        mostrarCursos(cursosDisponibles);
        return;
    }

    const filtrados = cursosDisponibles.filter (curso => seleccionados.includes (curso.filtro));

    mostrarCursos(filtrados);
}

filtros.forEach(f => f.addEventListener("change", aplicarFiltros));