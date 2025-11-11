//import {dialog} from './dialog.js';
   


//input
const INPUT_NOMBRE_DESTINATARIO = document.querySelector('#js-Name');
const INPUT_COLOR_LETRA = document.querySelector('#color');
const SELECT_TAMANIO_LETRA = document.querySelector('#Font');
const INPUT_IMPORTE = document.querySelector('#monto');
const INPUT_FONDO = document.querySelectorAll('#Background');

//vista previa
const vistaPreviaNombre = document.querySelector('#js-giftcard-nombre-destinatario');

//seleccion de nombre destinatario
INPUT_NOMBRE_DESTINATARIO.addEventListener('keyup', (event) => {
    const eventValue = event.target.value.toUpperCase();
    vistaPreviaNombre.textContent = eventValue;
});