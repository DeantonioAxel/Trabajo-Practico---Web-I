import { cursoBlender } from "./cursoBlender.js";
import { cursoAIMarketingDigital } from "./cursoMarketingDigitalIA.js";
import { cursoProgramacionC } from "./cursoProgramacionC.js";
import { cursoCanva } from "./cursoCanva.js";
import { cursoChatGPT } from "./cursoChatGpt.js";
import { cursoIllustrator } from "./cursoIllustrator.js";
import { cursoInteligenciaArtificial } from "./cursoInteligenciaArtificial.js";
import { cursoJava } from "./cursoJava.js";
import { cursoJavaScript } from "./cursoJavaScript.js";
import { cursoGeneraciónPromptsIA } from "./cursoGeneraciónPromptsIA.js";
import { cursoPython } from "./cursoPhyton.js";
import { cursoPhotoshop } from "./cursoPhotoshop.js";
import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import {inicializarDatalist} from './datalist.js'
import { Footer } from "./footer.js";


inicializarDatalist();

document.addEventListener("DOMContentLoaded", () => {
    const header = new HeaderOtrasVistas();
    const footer = new Footer();
    
    footer.render();

    const cursos = {
        "2025-10-01": cursoPhotoshop ,
        "2025-10-06": cursoJava ,
        "2025-10-09": cursoChatGPT,
        "2025-10-14": cursoProgramacionC,
        "2025-10-23": cursoPython,
        "2025-10-26": cursoJavaScript,
        "2025-10-31": cursoBlender,

        "2025-11-01": cursoBlender,
        "2025-11-03": cursoPhotoshop,
        "2025-11-13": cursoCanva,
        "2025-11-18": cursoJava,
        "2025-11-28": cursoIllustrator,
        "2025-11-30": cursoAIMarketingDigital,

        "2025-12-12": cursoGeneraciónPromptsIA,
        "2025-12-15": cursoInteligenciaArtificial,
        "2025-12-27": cursoChatGPT,
        "2025-12-29": cursoProgramacionC,
    };

    const popup = document.getElementById("popup");
    const tituloCurso = document.getElementById("tituloCurso");
    const resumenCurso = document.getElementById("resumenCurso");
    const botonCurso = document.getElementById("botonCurso");
    const cerrarPopup = document.getElementById("cerrarPopup");

    const hoy = new Date();
    const hoySinHora = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());

    // --- Leer mes y año desde el título
    const tituloMes = document.querySelector(".calender-tittle")?.textContent?.trim() || "";
    // Mapeo español -> número de mes
    const meses = {
        "enero": 1, "febrero": 2, "marzo": 3, "abril": 4,
        "mayo": 5, "junio": 6, "julio": 7, "agosto": 8,
        "septiembre": 9, "octubre": 10, "noviembre": 11, "diciembre": 12
    };

    let mesNumero = null;
    let anioNumero = null;
    if (tituloMes) {
        const partes = tituloMes.split(" ");
        if (partes.length >= 2) {
            const nombreMes = partes[0].toLowerCase();
            anioNumero = parseInt(partes[1], 10);
            mesNumero = meses[nombreMes] || null;
        }
    }

    // Si no pudo detectar, por seguridad asumimos octubre (10)
    if (!mesNumero || !anioNumero) {
        mesNumero = 10;
        anioNumero = 2025;
    }

    function pad(n) { return String(n).padStart(2, "0"); }
    function construirClave(year, monthNumber, dayNumber) {
        return `${year}-${pad(monthNumber)}-${pad(dayNumber)}`;
    }

    // === Recorre los enlaces del calendario ===
    document.querySelectorAll(".day.number a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const parent = link.parentElement;
            const span = parent ? parent.querySelector("span") : null;
            if (!span) return;
            const diaTexto = span.textContent.trim();
            const diaNumero = parseInt(diaTexto, 10);
            if (Number.isNaN(diaNumero)) return;

            const clave = construirClave(anioNumero, mesNumero, diaNumero);
            const curso = cursos[clave];

            if (!curso) {
                tituloCurso.textContent = link.textContent.trim() || "Curso";
                resumenCurso.textContent = "Información del curso no disponible.";
                botonCurso.style.display = "none";
                popup.style.display = "flex";
                return;
            }

            tituloCurso.textContent = curso.titulo;
            const fechaCurso = new Date(anioNumero, mesNumero - 1, diaNumero);

            if (fechaCurso <= hoySinHora) {
                resumenCurso.textContent = "🕒 La inscripción a este curso ya finalizó.";
                botonCurso.style.display = "none";
            } else {
                resumenCurso.textContent = curso.resumen;
                botonCurso.onclick = () => {
                    localStorage.setItem("cursoSeleccionado", JSON.stringify(curso));
                    window.location.href = "./cursoDinamico.html";
                };

                botonCurso.style.display = "inline-block";
            }

            popup.style.display = "flex";
        });
    });

    // cerrar popup
    cerrarPopup?.addEventListener("click", () => popup.style.display = "none");
    popup?.addEventListener("click", (e) => { if (e.target === popup) popup.style.display = "none"; });

    header.render();
});
