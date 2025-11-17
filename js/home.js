import { HeaderHome } from "./headerHome.js";
import { cursosDisponibles } from "./cursos.js";
import { Slider } from "./slider.js";
import { mostrarPrimerosNCursos } from "./mostrarCursos.js";
import { MediosPagosSlider } from "./mediosPagosSlider.js";
import {inicializarDatalist} from './datalist.js'
import { Footer } from "./footer.js";

const header = new HeaderHome();
const slider = new Slider();
const mediosPagosSlider = new MediosPagosSlider();
const footer = new Footer();

slider.render();
header.render();
footer.render();

mediosPagosSlider.init();
inicializarDatalist();

document.addEventListener('DOMContentLoaded', () => { 
    const contenedorCursos = document.querySelector('#cajasCursosRecomendados');
    mostrarPrimerosNCursos();
});