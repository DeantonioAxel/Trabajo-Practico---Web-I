import { HeaderOtrasVistas } from "./headerOtrasVistas.js";
import {inicializarDatalist} from './datalist.js'

inicializarDatalist();

document.addEventListener("DOMContentLoaded", () => {
    const header = new HeaderOtrasVistas();
    const cursos = {
        "2025-10-01": { titulo: "Photoshop", resumen: "Curso de edición digital en Photoshop.", link: "./cursoPhotoshop.html" },
        "2025-10-06": { titulo: "Java", resumen: "Aprende programación en Java desde cero.", link: "./cursoJava.html" },
        "2025-10-09": { titulo: "Chat GPT", resumen: "Uso profesional de ChatGPT y creación de prompts.", link: "./cursoChatGpt.html" },
        "2025-10-14": { titulo: "Programación en C", resumen: "Fundamentos de programación estructurada en C.", link: "./cursoProgramacionC.html" },
        "2025-10-23": { titulo: "Python", resumen: "Introducción a Python para principiantes.", link: "./cursoPhyton.html" },
        "2025-10-26": { titulo: "JavaScript", resumen: "Aprende JavaScript para desarrollo web.", link: "./cursoJavaScript.html" },
        "2025-10-31": { titulo: "Blender Diseño 3D", resumen: "Modelado y animación 3D con Blender.", link: "./cursoBlenderDiseño3d.html" },

        "2025-11-01": { titulo: "Curso de Blender Diseño 3D", resumen: "Modelado y animación 3D con Blender.", link: "./cursoBlenderDiseño3d.html" },
        "2025-11-03": { titulo: "Curso de Photoshop", resumen: "Edición y retoque profesional con Photoshop.", link: "./cursoPhotoshop.html" },
        "2025-11-13": { titulo: "Curso de Canva", resumen: "Diseñá contenidos visuales fácilmente con Canva.", link: "./cursoCanva.html" },
        "2025-11-18": { titulo: "Curso de Java", resumen: "Introducción a Java y POO.", link: "./cursoJava.html" },
        "2025-11-28": { titulo: "Curso de Illustrator", resumen: "Creá ilustraciones vectoriales con Illustrator.", link: "./cursoIllustrator.html" },
        "2025-11-30": { titulo: "Curso de Marketing Digital", resumen: "Estrategias digitales y uso de IA para marketing.", link: "./cursoMarketingDigitalIA.html" },

        "2025-12-12": { titulo: "Curso de Prompts con IA", resumen: "Aprendé a crear prompts avanzados para optimizar resultados con IA.", link: "./cursoGeneraciónPromptsIA.html" },
        "2025-12-15": { titulo: "Curso de Inteligencia Artificial", resumen: "Introducción a los conceptos y aplicaciones de la inteligencia artificial.", link: "./cursoInteligenciaArtificial.html" },
        "2025-12-27": { titulo: "Curso de ChatGPT", resumen: "Uso profesional de ChatGPT y creación de prompts personalizados.", link: "./cursoChatGpt.html" },
        "2025-12-29": { titulo: "Curso de Programación en C", resumen: "Fundamentos de la programación estructurada en lenguaje C.", link: "./cursoProgramacionC.html" }
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
                botonCurso.href = curso.link;
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
