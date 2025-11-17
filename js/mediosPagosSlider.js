// mediosPagosSlider.js
export class MediosPagosSlider {
    constructor() {
        // contenedor donde ya están tus logos
        this.contenedor = document.querySelector(".logosMediosDePagosIndex");
        // las dos flechas que ya tenés en el HTML
        this.flechas = document.querySelectorAll(".flecha");

        if (!this.contenedor || this.flechas.length < 2) return;

        // imágenes visibles (las que ya pusiste en el HTML)
        this.imagenesVisibles = this.contenedor.querySelectorAll("img");
        this.cantidadVisible = this.imagenesVisibles.length || 4;

        // 🧠 acá cargas TODOS los medios de pago que quieras rotar
        this.medios = [
            { src: "../images/Logo american express.png",          alt: "Visa" },
            { src: "../images/Logo cabal.png",    alt: "Mastercard" },
            { src: "../images/Logo mastercard.png",      alt: "American Express" },
            { src: "../images/logo mercado pago.png",         alt: "Cabal" },
            { src: "../images/logo naranja.png",       alt: "Tarjeta Naranja" },
            { src: "../images/Logo visa.png",   alt: "Mercado Pago" },
            // agregá acá todas las que quieras
        ];

        this.inicio = 0;
    }

    // pinta las imágenes según el índice actual
    pintar() {
        this.imagenesVisibles.forEach((img, i) => {
            const medio = this.medios[(this.inicio + i) % this.medios.length];
            img.src = medio.src;
            img.alt = medio.alt;
        });
    }

    agregarEventos() {
        const [flechaIzq, flechaDer] = this.flechas;

        flechaDer.addEventListener("click", () => {
            this.inicio = (this.inicio + this.cantidadVisible) % this.medios.length;
            this.pintar();
        });

        flechaIzq.addEventListener("click", () => {
            this.inicio = (this.inicio - this.cantidadVisible + this.medios.length) % this.medios.length;
            this.pintar();
        });
    }

    init() {
        if (!this.contenedor || this.flechas.length < 2) return;
        this.pintar();
        this.agregarEventos();
    }
}