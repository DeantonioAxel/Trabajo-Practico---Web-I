import {cursosDisponibles} from './cursos.js';

const contenedorTitulo = document.querySelector(".forms-inner");
const contenedorPrecio = document.querySelector(".forms-enrollment-amount");


export function generarFormulario (curso){
    contenedorTitulo.innerHTML = '';
    contenedorPrecio.innerHTML = '';
    const titulodiv = document.createElement('div');
    titulodiv.innerHTML = `
        <h2>${curso.titulo}</h2>
        
    `;
    contenedorTitulo.appendChild(titulodiv);

    const precioH3 = document.createElement('h3');
    precioH3.innerHTML = `US$ ${curso.precio}.-`;
    contenedorPrecio.appendChild(precioH3);

}