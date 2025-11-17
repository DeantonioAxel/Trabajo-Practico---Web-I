export class Dialog {
        constructor() {
                const formulario = document.querySelector("form");
                const dialog = document.querySelector("dialog");
                const cerrar = document.querySelector("#js-CloseDialog");

                formulario.addEventListener("submit", (event) => {
                        event.preventDefault();
                        dialog.showModal();
                });

                cerrar.addEventListener("click", () => {
                        dialog.close();
                        formulario.reset();
                        window.location.href = "../index.html";
                });
        }
}