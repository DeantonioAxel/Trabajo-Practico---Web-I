import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import {inicializarDatalist} from './datalist.js'

inicializarDatalist();

document.addEventListener('DOMContentLoaded', () => {
    const header = new HeaderOtrasVistas();

    header.render();
})
