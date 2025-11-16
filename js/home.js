import { HeaderHome } from "./headerHome.js";
import { cursosDisponibles } from "./cursos.js";
import { Slider } from "./slider.js";
import { mostrarSoloPares } from "./mostrarCursos.js";

document.addEventListener('DOMContentLoaded', () => {
    const header = new HeaderHome();
    const slider = new Slider();
    const contenedorCursos = document.querySelector('.cajasCursosRecomendados');
    
    mostrarSoloPares(cursosDisponibles);
    

    
    slider.render();
    header.render();
});
