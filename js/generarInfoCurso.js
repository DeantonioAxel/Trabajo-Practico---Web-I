import { cursosDisponibles } from "./cursos.js";


const contenedorInformacionCurso = document.querySelector(".contenedorInformacionCurso");


export function generarInformacionDelCursoSeleccionado (curso , contenedor){
    contenedor.innerHTML="";
    const infoSection = document.createElement ('section');
    infoSection.innerHTML= `
    <h2> ${curso.titulo} </h2>
    <h3> Valor: ${curso.precio} </h3>
    <h3> Tiempo de dedicación necesario: ${curso.cargaHoraria}</h3>
    <h3>Descripción del curso:</h3>
    ${generarParrafos(curso.descripcion)}
    <h3>Requisitos previos:</h3>
    <div class="requisitosCurso">
        <h3>Conocimientos</h3>
        ${generarLista(curso.requisitos.conocimientos)}
        <h4>Requisitos técnicos</h4>
        ${generarLista(curso.requisitos.tecnicos)}
        <button class="buttonInscribirse">Inscribirse</button>
        `;

        const buttonInscribirse = infoSection.querySelector('.buttonInscribirse');
        buttonInscribirse.addEventListener('click', (event) => {
            localStorage.setItem("cursoSeleccionado", JSON.stringify(curso));
            window.location.href = curso.link;
            
        });
    contenedor.appendChild(infoSection);
}


export function generarUnidades(unidades, contenedor){
    contenedor.innerHTML="";
    unidades.forEach(unidad => {
        const tituloUnidad = document.createElement('h3');
        tituloUnidad.textContent = unidad.unidad;
        contenedor.appendChild(tituloUnidad);
        const lista = document.createElement('ul');
        unidad.clases.forEach(clase => {
            const li = document.createElement('li');
            li.textContent = `${clase.titulo} — ${clase.tiempo}`;
            lista.appendChild(li);
        });
        contenedor.appendChild(lista);
    });
}

export function generarInformacionDocente (curso, contenedor){
    contenedor.innerHTML="";
    contenedor.innerHTML=`
    <h2>Docente</h2>
    <h3>${curso.docente.nombre}</h3>
    <p>${curso.docente.descripcion}</p>
    `;

}





export function generarImagenDelCursoSeleccionado(curso, contenedor){
    contenedor.innerHTML="";
    contenedor.innerHTML=`
    <img src= "${curso.imgsrc}" alt= "${curso.alt}">
    `;
}

export function generarLista(array) {
    if (!array || array.length === 0) return "<p>No hay elementos</p>";
    let listaHTML = "<ul>";
    array.forEach(item => {
        listaHTML += `<li>${item}</li>`;
    });
    listaHTML += "</ul>";
    return listaHTML;
}

export function generarParrafos(items){
    const contenedor = document.createElement('div');
    items.forEach(item => {
        const parrafo = document.createElement('p');
        parrafo.textContent = item;
        contenedor.appendChild(parrafo);
    });
}