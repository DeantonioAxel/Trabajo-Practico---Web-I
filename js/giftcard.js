import {Dialog} from './dialog.js';
//header
import { HeaderOtrasVistas } from "./headerOtrasVistas.js";

const header = new HeaderOtrasVistas();

header.render();
   

//input
const INPUT_NOMBRE_DESTINATARIO = document.querySelector('#js-Name');
const INPUT_COLOR_LETRA = document.querySelectorAll('input[name="color"]');
const SELECT_TAMANIO_LETRA = document.querySelector('#Font');
const INPUT_IMPORTE = document.querySelector('#monto');
const INPUT_FONDO = document.querySelectorAll('#Background');

//vista previa
const vistaPreviaNombre = document.querySelector('#js-giftcard-nombre-destinatario');
const vistaPreviaColorLetra = document.querySelectorAll('.js-color-letra');
const vistaPreviaImporte = document.querySelector('.importe');

//seleccion de nombre destinatario
INPUT_NOMBRE_DESTINATARIO.addEventListener('keyup', (event) => {
    const eventValue = event.target.value.toUpperCase();
    vistaPreviaNombre.textContent = eventValue;
});

//seleccion de color de letra
INPUT_COLOR_LETRA.forEach( radio => {
    radio.addEventListener('change', (event) => {
        const colorSeleccionado = event.target.value;
        vistaPreviaColorLetra.forEach( elemento => {
            elemento.style.color = colorSeleccionado;
        });
    });
});

//seleccion de tamaño de letra
SELECT_TAMANIO_LETRA.addEventListener('change', (event) => {
    const tamanioSeleccionado = event.target.value;
    vistaPreviaNombre.style.fontSize = tamanioSeleccionado;
});

//seleccion de importe
INPUT_IMPORTE.addEventListener('keyup', (event) => {
    const importeValue = event.target.value;
    vistaPreviaImporte.textContent = `${importeValue}.-US$`;
});

//seleccion de fondo
INPUT_FONDO.forEach( radio => {
    radio.addEventListener('change', (event) => {
        const fondoSeleccionado = event.target.value;
        document.querySelector('.visualizacion').style.backgroundColor = fondoSeleccionado;
    });
});

//dialog al confirmar
const DIALOG_GIFTCARD = new Dialog();

