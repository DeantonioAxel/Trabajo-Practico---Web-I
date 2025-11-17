export class Footer {
    constructor() {}

    render() {
        const usuarioLogueado = localStorage.getItem("usuarioLogueado");
        const footer = document.querySelector(".js-footer");

        if (!footer) return;

        if (usuarioLogueado) {
            // FOOTER PARA USUARIOS LOGUEADOS
            footer.innerHTML = `
                <div class="footer-data grupo">
                    <h4>Integrantes</h4>
                    <p>Fernando Aybar 39211330</p>
                    <p>Silvana Topatigh 33810330</p>
                    <p>Sol Benitez 45749670</p>
                    <p>Axel Deantonio 42673324</p>
                    <p>Gonzalo Gomez 45128637</p>
                </div>

                <div class="footer-data menu">
                    <h4>Menú</h4>
                    <a href="../index.html"><p>Inicio</p></a>
                    <a href="../html/Nosotros.html"><p>Nosotros</p></a>
                    <a href="../html/mercadoDeCursos.html"><p>Mercado de Cursos</p></a>
                    <a href="../html/contacto.html"><p>Contacto</p></a>
                    <a href="../html/giftcard.html"><p>GiftCard</p></a>
                    <a href="../html/calendarioOctubre.html"><p>Calendario</p></a>
                    <a href="../html/inscripcionParaEmpresas.html"><p>Empresas</p></a>
                </div>

                <div class="footer-data redes">
                    <h4>Redes</h4>
                    <div class="iconos">
                        <a href="https://x.com/?lang=es" target="_blank"><img src="../images/twitter-x.svg"></a>
                        <a href="https://www.facebook.com/?locale=es_LA" target="_blank"><img src="../images/facebook.svg"></a>
                        <a href="https://web.whatsapp.com/" target="_blank"><img src="../images/whatsapp.svg"></a>
                    </div>
                </div>
            `;
        } else {
            // FOOTER SIN LOGIN (HOME / VISITANTES)
            footer.innerHTML = `
                <div class="footer-data grupo">
                    <h4>Integrantes</h4>
                    <p>Fernando Aybar 39211330</p>
                    <p>Silvana Topatigh 33810330</p>
                    <p>Sol Benitez 45749670</p>
                    <p>Axel Deantonio 42673324</p>
                    <p>Gonzalo Gomez 45128637</p>
                </div>

                <div class="footer-data menu">
                    <h4>Menú</h4>
                    <a href="../index.html"><p>Inicio</p></a>
                    <a href="../html/Nosotros.html"><p>Nosotros</p></a>
                    <a href="../html/mercadoDeCursos.html"><p>Mercado de Cursos</p></a>
                    <a href="../html/contacto.html"><p>Contacto</p></a>
                </div>

                <div class="footer-data redes">
                    <h4>Redes</h4>
                    <div class="iconos">
                        <a href="https://x.com/?lang=es" target="_blank"><img src="../images/twitter-x.svg"></a>
                        <a href="https://www.facebook.com/?locale=es_LA" target="_blank"><img src="../images/facebook.svg"></a>
                        <a href="https://web.whatsapp.com/" target="_blank"><img src="../images/whatsapp.svg"></a>
                    </div>
                </div>
            `;
        }
    }
}