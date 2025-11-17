import { HeaderHome } from "./headerHome.js";
import { cursosDisponibles } from "./cursos.js";
import { Slider } from "./slider.js";
import { mostrarPrimerosNCursos } from "./mostrarCursos.js";
import { MediosPagosSlider } from "./mediosPagosSlider.js";
import {inicializarDatalist} from './datalist.js'

const header = new HeaderHome();
const slider = new Slider();
const mediosPagosSlider = new MediosPagosSlider();

slider.render();
header.render();
mediosPagosSlider.init();
inicializarDatalist();
s

document.addEventListener('DOMContentLoaded', () => {
    s
    const contenedorCursos = document.querySelector('#cajasCursosRecomendados');
    mostrarPrimerosNCursos();
    

    
   
});
