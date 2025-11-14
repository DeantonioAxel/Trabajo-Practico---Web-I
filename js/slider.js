export class Slider {

    constructor() { }

    render() {
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        let fotoActual = 0;

        //Mostrar c/u de las imgs
        function mostrarSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[n].classList.add('active');
            dots[n].classList.add('active');

            fotoActual = n;

        }

        mostrarSlide(fotoActual);

        // cada 3S

        setInterval(() => {
            fotoActual = (fotoActual + 1) % slides.length;
            mostrarSlide(fotoActual);
        }, 3000);


        //eleccion de img
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                mostrarSlide(i);
            });
        });
    };
}