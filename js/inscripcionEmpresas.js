import {Dialog} from './dialog.js';
import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import {inicializarDatalist} from './datalist.js'
import { cursosDisponibles } from './cursos.js';
import { Footer } from "./footer.js";


const header = new HeaderOtrasVistas();
const footer = new Footer();

inicializarDatalist()
header.render();
footer.render();
const nombreEmpresaInput = document.querySelector("#company_name");
const selectCursos = document.querySelector("#Seleccion_curso");
const precioAcumulado = document.querySelector("#Importe_acumulado");
const botonBorrarAlumno = document.querySelector("#borrar-alumno");
const contenedorAlumnos = document.querySelector(".contenedorListadoAlumnos")
const botonAgregarAlumno = document.querySelector("#agregar-alumno");
let precioPorAlumno = 0;
let contadorAlumnos = 0;
let index = 1;
const botonConfirmar = document.querySelector(".boton_inscripcion");
const empresaSeleccionadaDialog = document.querySelector(".contenedor_empresa_dialog");

nombreEmpresaInput.addEventListener("keyup", (event) => {
    const filtro = event.target.value.toUpperCase();
    empresaSeleccionadaDialog.textContent = `Empresa: ${filtro}`;
});

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
        precioPorAlumno = Number(
        cursoSeleccionado.precio.toString().replace(/[^0-9.]/g, ""));
    }
});



botonAgregarAlumno.addEventListener("click", () => {

    const nuevoAlumnoDiv = document.createElement("div");
    nuevoAlumnoDiv.classList.add("datos_alumno");

    nuevoAlumnoDiv.innerHTML = `
        <label><input type="text" id="last_name_${index}" name="last_name" placeholder="Apellido" required></label>
        <label><input type="text" id="first_name_${index}" name="first_name" placeholder="Nombre" required></label>
        <label><input type="text" id="DNI_${index}" name="DNI" placeholder="DNI" max="99999999" required></label>
        <button type="button" class="boton_circular borrar-alumno">-</button>
    `;

    contenedorAlumnos.appendChild(nuevoAlumnoDiv);

    
    const botonBorrar = nuevoAlumnoDiv.querySelector(".borrar-alumno");
    agregarEventoBorrar(botonBorrar, nuevoAlumnoDiv, false); 

    contadorAlumnos++;
    precioAcumulado.textContent = `US$ ${(contadorAlumnos * precioPorAlumno).toFixed(2)}.-`;

    index++; 
});

const borrarPrimerAlumno = document.querySelector("#borrar-primer-alumno");
const primerAlumnoDiv = borrarPrimerAlumno.closest(".datos_alumno");

agregarEventoBorrar(borrarPrimerAlumno, primerAlumnoDiv, true);

function agregarEventoBorrar(boton, alumnoDiv, esPrimerAlumno = false) {

    if (esPrimerAlumno) {
        
        boton.addEventListener("click", () => {
            const inputs = alumnoDiv.querySelectorAll("input");
            inputs.forEach(input => input.value = "");
            
        });

    } else {
        
        boton.addEventListener("click", () => {
            alumnoDiv.remove();
            contadorAlumnos--;
            precioAcumulado.textContent = `US$ ${(contadorAlumnos * precioPorAlumno).toFixed(2)}.-`;
        });
    }
}



const DIALOG_EMPRESAS = new Dialog();

