
import { HeaderHome } from "./headerHome.js";
import { cursosDisponibles } from "./cursos.js";
import { Slider } from "./slider.js";
import { mostrarPrimerosNCursos } from "./mostrarCursos.js";
import { MediosPagosSlider } from "./mediosPagosSlider.js";
import { inicializarDatalist } from './datalist.js';
import { Footer } from "./footer.js";

document.addEventListener('DOMContentLoaded', () => {
   
    const header = new HeaderHome();
    const slider = new Slider();
    const mediosPagosSlider = new MediosPagosSlider();
    const footer = new Footer();

    
    header.render();
    slider.render();
    footer.render();

    
    mediosPagosSlider.init();
    inicializarDatalist();

    
    const contenedorCursos = document.querySelector('#cajasCursosRecomendados');
    if (contenedorCursos) {
        mostrarPrimerosNCursos(contenedorCursos, 4); 
    }
});
