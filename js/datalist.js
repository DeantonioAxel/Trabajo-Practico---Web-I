import { cursosDisponibles } from './cursos.js';

export function inicializarDatalist() {
    document.addEventListener('DOMContentLoaded', () => {
        const input = document.getElementById('traveling-web');
        const datalist = document.getElementById('cursos');

        datalist.innerHTML = "";

        cursosDisponibles.forEach(curso => {
            const option = document.createElement('option');
            option.value = curso.nombre;
            datalist.appendChild(option);
        });

        function redirigirCurso(nombreCurso) {
            const cursoSeleccionado = cursosDisponibles.find(
                c => c.nombre.toLowerCase() === nombreCurso.toLowerCase()
            );
            if (cursoSeleccionado) {
                localStorage.setItem("cursoSeleccionado", JSON.stringify(cursoSeleccionado));
                window.location.href ='./cursoDinamico.html';
            } else {
                alert("Curso no encontrado");
            }
        }

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                redirigirCurso(input.value);
            }
        });

        input.addEventListener('input', () => {
            const match = cursosDisponibles.some(
                c => c.nombre.toLowerCase() === input.value.toLowerCase()
            );
            if (match) {
                redirigirCurso(input.value);
            }
        });
    });
}