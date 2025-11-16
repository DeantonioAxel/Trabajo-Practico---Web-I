import { HeaderHome } from "./headerHome.js";
import { cursosDisponibles } from "./cursos.js";
import { Slider } from "./slider.js";
import { mostrarPrimerosNCursos } from "./mostrarCursos.js";

const header = new HeaderHome();
const slider = new Slider();

slider.render();
header.render();


document.addEventListener('DOMContentLoaded', () => {
    
    const contenedorCursos = document.querySelector('#cajasCursosRecomendados');
    mostrarPrimerosNCursos();
    

    
   
});
