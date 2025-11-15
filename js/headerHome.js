export class HeaderHome {
    constructor() { }

    render() {
        const usuarioLogueado = localStorage.getItem('usuarioLogueado');
        const botones = document.querySelector('.js-btns-header');
        const nav = document.querySelector('.js-nav');

        if (usuarioLogueado) {
            botones.innerHTML = `
                    <div class="shoppingCart">
                        <img src="../images/shopping cart.png" alt="logo de carrito">
                        <p>0</p>
                    </div>
                    <a href="./html/perfil.html" class="login">Perfil</a>
                    <a href="../html/IniciarSesion.html" class="register js-btn-cerrarSesion">Cerrar Sesión</a>                
                `;
            nav.innerHTML = `
                    <li><a href="./index.html"><h3>Inicio</h3></a></li>
                    <li><a href="./html/Nosotros.html"><h3>Nosotros</h3></a></li>
                    <li><a href="./html/giftcard.html"><h3>GiftCard</h3></a></li>
                    <li><a href="./html/contacto.html"><h3>Contacto</h3></a></li>
                    <li><a href="./html/mercadoDeCursos.html"><h3>Mercado de Cursos</h3></a></li>
                    <li><a href="./html/calendarioOctubre.html"><h3>Calendario</h3></a></li>
                    <li><a href="./html/inscripcionParaEmpresas.html"><h3>Empresas</h3></a></li>
            `;
        } else {
            botones.innerHTML = `
                    <div class="shoppingCart">
                        <img src="./images/shopping cart.png" alt="logo de carrito">                        
                    </div>
                    <a href="./html/IniciarSesion.html" class="login">Iniciar Sesión</a>
                    <a href="./html/registrarse.html" class="register">Registrarse</a>
                `;
            nav.innerHTML = `
                    <li><a href="index.html"><h3>Inicio</h3></a></li>
                    <li><a href="./html/Nosotros.html"><h3>Nosotros</h3></a></li>
                    <li><a href="./html/contacto.html"><h3>Contacto</h3></a></li>
                    <li><a href="./html/mercadoDeCursos.html"><h3>Mercado de Cursos</h3></a></li>
            `;
        }

        const btnCerrarSesion = document.querySelector('.js-btn-cerrarSesion');

        if (btnCerrarSesion) {
            btnCerrarSesion.addEventListener('click', () => {
                localStorage.removeItem('usuarioLogueado');
                window.location.href = "../html/IniciarSesion.html"
            })
        }
    }
}