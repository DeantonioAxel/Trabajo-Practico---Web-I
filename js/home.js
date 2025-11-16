import { HeaderHome } from "./headerHome.js";
import { cursosDisponibles } from "./cursos.js";
import { Slider } from "./slider.js";
import { mostrarCursos } from "./mostrarCursos.js";

document.addEventListener('DOMContentLoaded', () => {
    const header = new HeaderHome();
    const slider = new Slider();
    const contenedorCursos = document.querySelector('.cajasCursosRecomendados');
    
    mostrarCursos(cursosDisponibles);
    

    
    slider.render();
    header.render();
});
