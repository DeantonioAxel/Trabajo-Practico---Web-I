import { HeaderOtrasVistas } from "./headerOtrasVistas.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nombre = document.querySelector("#name");
  const apellido = document.querySelector("#last_name");
  const telefono = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const mensaje = document.querySelector("#message");
  const dialog = document.querySelector("dialog");
  const cerrarDialog = document.querySelector("#js-CloseDialog");

  const header = new HeaderOtrasVistas();

  const contador = document.createElement("p");
  contador.id = "contador";
  contador.style.fontSize = "0.9em";
  contador.style.color = "#6227dc";
  contador.style.textAlign = "right";
  contador.textContent = "0/1000 caracteres (1000 restantes)";
  mensaje.insertAdjacentElement("afterend", contador);

  const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const regexTelefono = /^\d{4}-\d{4}$/;

  mensaje.addEventListener("input", () => {
    let l = mensaje.value.length;
    if (l > 1000) {
      mensaje.value = mensaje.value.slice(0, 1000);
      l = 1000;
    }
    contador.textContent = `${l}/1000 caracteres (${1000 - l} restantes)`;
  });

  telefono.addEventListener("input", () => {
    const digits = telefono.value.replace(/\D/g, "").slice(0, 8);
    if (digits.length <= 4) {
      telefono.value = digits;
    } else {
      telefono.value = digits.slice(0, 4) + "-" + digits.slice(4);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nombre.value.trim() === "" || apellido.value.trim() === "") {
      alert("El nombre y el apellido no pueden estar vacíos.");
      return;
    }

    if (!regexEmail.test(email.value.trim())) {
      alert("Ingrese un correo electrónico válido (ej: ejemplo@dominio.com).");
      return;
    }

    const tel = telefono.value.trim();
    if (tel !== "" && !regexTelefono.test(tel)) {
      alert("El teléfono debe tener 8 dígitos con un guion en el medio (ej: 1234-5678).");
      return;
    }

    if (mensaje.value.trim() === "") {
      alert("Por favor, escriba su consulta.");
      return;
    }

    dialog.showModal();
  });

  cerrarDialog.addEventListener("click", () => {
    dialog.close();
    window.location.href = "../index.html";
  });

  header.render();
});