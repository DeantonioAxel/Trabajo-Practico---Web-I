import { HeaderHome } from "./headerHome.js";
import { cursosDisponibles } from "./cursos.js";
import { Slider } from "./slider.js";
import { mostrarPrimerosNCursos } from "./mostrarCursos.js";
import {inicializarDatalist} from './datalist.js'

const header = new HeaderHome();
const slider = new Slider();

slider.render();
header.render();
inicializarDatalist();


document.addEventListener('DOMContentLoaded', () => {
    
    const contenedorCursos = document.querySelector('#cajasCursosRecomendados');
    mostrarPrimerosNCursos();
    

    
   
});
