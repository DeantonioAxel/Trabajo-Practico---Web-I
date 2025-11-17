import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import {inicializarDatalist} from './datalist.js'
import { Footer } from "./footer.js";

inicializarDatalist();

document.addEventListener('DOMContentLoaded', () => {
    const header = new HeaderOtrasVistas();
    const footer = new Footer();

    header.render();
    footer.render();
})
