
import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import { inicializarDatalist } from './datalist.js'
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
const botonAgregarAlumno = document.querySelector("#agregar-alumno");
let precioPorAlumno = 0;
let contadorAlumnos = 0;
let index = 1;
const botonConfirmar = document.querySelector(".boton_inscripcion");
const empresaSeleccionadaDialog = document.querySelector(".contenedor_empresa_dialog");



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

document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.querySelector(".contenedorListadoAlumnos");
    const agregarBtn = document.getElementById("agregar-alumno");
    const importeTexto = document.getElementById("Importe_acumulado");

    // --- FUNCIÓN PARA ACTUALIZAR IMPORTE ---
    function actualizarImporte() {
        const alumnos = document.querySelectorAll(".datos_alumno");

        let cantidad = 0;

        alumnos.forEach(alumno => {
            const inputs = alumno.querySelectorAll("input");

            // Si el alumno tiene por lo menos un campo completo, cuenta
            const tieneDatos = Array.from(inputs).some(input => input.value.trim() !== "");
            if (tieneDatos) {
                cantidad++;
            }
        });

        // precioPorAlumno viene del selectCurso.addEventListener("change")
        const total = cantidad * precioPorAlumno;

        importeTexto.textContent = `$${total.toLocaleString()}.-`;
    }

    // --- LIMPIAR PRIMER ALUMNO ---
    const botonPrimerBorrar = document.getElementById("borrar-primer-alumno");
    botonPrimerBorrar.addEventListener("click", () => {
        const primerAlumno = document.querySelector(".datos_alumno");
        primerAlumno.querySelectorAll("input").forEach(input => input.value = "");
        actualizarImporte();
    });

    // --- AGREGAR NUEVO ALUMNO ---
    agregarBtn.addEventListener("click", () => {
        const alumnoOriginal = document.querySelector(".datos_alumno");
        const nuevoAlumno = alumnoOriginal.cloneNode(true);

        // limpiar inputs
        nuevoAlumno.querySelectorAll("input").forEach(input => input.value = "");

        // botón borrar del nuevo alumno
        const botonBorrar = nuevoAlumno.querySelector("button");
        botonBorrar.addEventListener("click", () => {
            nuevoAlumno.remove();
            actualizarImporte();
        });

        // inputs del nuevo alumno actualizan importe
        nuevoAlumno.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", actualizarImporte);
        });

        contenedor.appendChild(nuevoAlumno);

        actualizarImporte();
    });

    // inputs del primer alumno actualizan importe
    document.querySelectorAll(".datos_alumno input").forEach(input => {
        input.addEventListener("input", actualizarImporte);
    });

    // cuando cambia el curso, recalcula todo
    selectCursos.addEventListener("change", actualizarImporte);

});

document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById("inscripcionDialog");
    if (!dialog) {
        console.error("No se encontró el diálogo. Revisa el HTML.");
        return;
    }

    const empresaDialog = dialog.querySelector(".contenedor_empresa_dialog");
    const alumnosDialog = dialog.querySelector(".contenedor_alumnos_dialog");
    const cerrarBtn = document.getElementById("js-CloseDialog");
    const botonConfirmar = document.querySelector(".boton_inscripcion");

    botonConfirmar.addEventListener("click", (event) => {
        event.preventDefault();

        const empresa = document.querySelector("#company_name").value.trim();
        empresaDialog.textContent = `Empresa: ${empresa}`;

        const alumnos = document.querySelectorAll(".datos_alumno");
        const listaFinal = [];
        alumnos.forEach(alumno => {
            const apellido = alumno.querySelector('input[name="last_name"]').value.trim();
            const nombre = alumno.querySelector('input[name="Name"]').value.trim();
            const dni = alumno.querySelector('input[name="DNI"]').value.trim();
            if (apellido || nombre || dni) {
                listaFinal.push(`${apellido}, ${nombre} - DNI: ${dni}`);
            }
        });

        alumnosDialog.innerHTML = listaFinal.map(a => `<p>${a}</p>`).join("");

        dialog.showModal();
    });

    cerrarBtn.addEventListener("click", () => {
        dialog.close();
        document.querySelector("form").reset();
    });
});

