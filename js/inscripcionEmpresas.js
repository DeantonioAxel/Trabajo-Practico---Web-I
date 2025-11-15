import {Dialog} from './dialog.js';
import { HeaderOtrasVistas } from "./headerOtrasVistas.js";

const header = new HeaderOtrasVistas();
const nombreEmpresaInput = document.querySelector("#company_name");
const selectCursos = document.querySelector("#Seleccion_curso");
const precioAcumulado = document.querySelector("#Importe_acumulado");
const botonBorrarAlumno = document.querySelector("#borrar-alumno");
const botonAgregarAlumno = document.querySelector("#agregar-alumno");
let precioPorAlumno = 0;
let contadorAlumnos = 0;
const botonConfirmar = document.querySelector(".boton_inscripcion");
const empresaSeleccionadaDialog = document.querySelector(".contenedor_empresa_dialog");

nombreEmpresaInput.addEventListener("keyup", (event) => {
    const filtro = event.target.value.toUpperCase();
    empresaSeleccionadaDialog.textContent = `Empresa: ${filtro}`;
});

const cursosDisponibles = [
    {id: 1, nombre: "Canva", precio: 29.99},
    {id: 2, nombre: "Blenderdiseño3d", precio: 69.99},
    {id: 3, nombre: "JavaScript", precio: 59.99},
    {id: 4, nombre: "Python", precio: 59.99},
    {id: 5, nombre: "Chat Gpt", precio: 49.99},
    {id: 6, nombre: "Illustrator", precio: 49.99},
    {id: 7, nombre: "Photoshop", precio: 39.99},
    {id: 8, nombre: "Java", precio: 59.99},
    {id: 9, nombre: "Programacion C", precio: 49.99},
    {id: 10, nombre: "Inteligencia artificial (AI)", precio: 69.99},
    {id: 11, nombre: "AI: Generación de Prompts", precio: 39.99},
    {id: 12, nombre: "AI: Marketing Digital", precio: 59.99},
]

selectCursos.innerHTML = "";
const opcionDefault = document.createElement("option");
opcionDefault.textContent = "Selecciona un curso";
opcionDefault.disabled = true;
opcionDefault.selected = true;
selectCursos.appendChild(opcionDefault);

cursosDisponibles.forEach(curso => {
    const option = document.createElement("option");
    option.value = curso.nombre;
    option.textContent = `${curso.nombre} - U$S ${curso.precio}`;
    selectCursos.appendChild(option);
});

selectCursos.addEventListener("change", (event) => {
    const cursoSeleccionado = cursosDisponibles.find(curso => curso.nombre === event.target.value);
        if (cursoSeleccionado) {
                console.log(`Curso seleccionado: ${cursoSeleccionado.nombre}, Precio: U$D ${cursoSeleccionado.precio}`);
                precioPorAlumno = cursoSeleccionado.precio;
        }
});

botonBorrarAlumno.addEventListener("click", (event) => {
    event.preventDefault();
    const datosAlumno = botonBorrarAlumno.parentElement;
    datosAlumno.remove();
});

botonAgregarAlumno.addEventListener("click", (event) => {
    event.preventDefault(); 
    const nuevoAlumnoDiv = document.createElement("div");
    nuevoAlumnoDiv.classList.add("datos_alumno");
    const datosAlumno = botonAgregarAlumno.parentElement;   
    nuevoAlumnoDiv.innerHTML = `
        
        <label for="first_name">
            <input type="text" id="first_name_${contadorAlumnos}" name="first_name" placeholder="Nombre" required>
        </label>
        <label for="last_name">
            <input type="text" id="last_name_${contadorAlumnos}" name="last_name" placeholder="Apellido" required>
        </label>
        <label for="DNI">
            <input type="text" id="DNI_${contadorAlumnos}" name="DNI" placeholder="DNI" max="99999999" required>
        </label>
        <button type="button" class="boton_circular" id="borrar-alumno">-</button>`;
        
    botonAgregarAlumno.parentElement.insertAdjacentElement("beforebegin", nuevoAlumnoDiv);
    const nuevoBotonBorrar = nuevoAlumnoDiv.querySelector("#borrar-alumno");
    contadorAlumnos++;
    precioAcumulado.textContent = `US$${(contadorAlumnos * precioPorAlumno).toFixed(2)}.-`;
    nuevoBotonBorrar.addEventListener("click", (event) => {
        event.preventDefault();
        nuevoAlumnoDiv.remove();
        contadorAlumnos--;
        precioAcumulado.textContent = `US$${(contadorAlumnos * precioPorAlumno).toFixed(2)}.-`;
    });
});

header.render();

const DIALOG_EMPRESAS = new Dialog();