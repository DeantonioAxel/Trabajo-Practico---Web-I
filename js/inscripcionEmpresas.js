
const nombreEmpresaInput = document.querySelector("#company_name");
const empresaSeleccionadaDialog = document.querySelector(".container");
const selectCursos = document.querySelector("#Seleccion_curso");
const cursoOption = document.createElement("option");
const precioTotal = document.querySelector(".Importe_acumulado");
const botonBorrarAlumno = document.querySelector("#borrar-alumno");
const botonAgregarAlumno = document.querySelector("#agregar-alumno");
const contenedorAlumno = document.querySelector("#contenedor");

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
    option.textContent = `${curso.nombre} - $${curso.precio}`;
    selectCursos.appendChild(option);
});


selectCursos.addEventListener("change", (event) => {
    const cursoSeleccionado = cursosDisponibles.find(curso => curso.nombre === event.target.value);
        if (cursoSeleccionado) {
                console.log(`Curso seleccionado: ${cursoSeleccionado.nombre}, Precio: $${cursoSeleccionado.precio}`);
        }
});

botonBorrarAlumno.addEventListener("click", (event) => {
    event.preventDefault();
    const datosAlumno = botonBorrarAlumno.parentElement;
    datosAlumno.remove();
});

botonAgregarAlumno.addEventListener("click", (event) => {
    event.preventDefault();    
    contenedorAlumno.innerHTML = `
        
        <label for="first_name">
            <input type="text" id="first_name" name="first_name" placeholder="Nombre" required>
        </label>
        <label for="last_name">
            <input type="text" id="last_name" name="last_name" placeholder="Apellido" required>
        </label>
        <label for="DNI">
            <input type="text" id="DNI" name="DNI" placeholder="DNI" max="99999999" required>
        </label>
        <button type="reset" class="boton_circular" id="borrar-alumno">-</button>`;
        
    botonAgregarAlumno.parentElement.insertAdjacentElement("beforebegin", nuevoAlumnoDiv);
    const nuevoBotonBorrar = nuevoAlumnoDiv.querySelector("#borrar-alumno");
    nuevoBotonBorrar.addEventListener("click", (event) => {
        event.preventDefault();
        datosAlumno.remove();
    });
});