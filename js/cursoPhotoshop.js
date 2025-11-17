export const cursoPhotoshop = {
    nombre: "Photoshop",
    titulo: "Curso completo de Photoshop",
    precio: "39,99 US$",
    cargaHoraria: "32 horas",
    imgclass: "imagenCursoDestacadoIndex",
    imgsrc: "../images/Curso photoshop.png",
    imgalt: "Curso Photoshop",
    filtro: "diseño",
    id:"7",
    resumen: "Curso de edición digital en Photoshop.",

    descripcion: [
        "Con este curso aprenderás a usar Adobe Photoshop aunque nunca hayas utilizado el programa antes. A través de una serie lecciones prácticas descubrirás todo lo que necesitas saber para convertirte en un profesional del diseño y la edición digital.",
        "Comenzarás conociendo la interfaz y las herramientas principales de Adobe Photoshop. Aprenderás a gestionar y combinar documentos, a trabajar con capas, selecciones y algo fundamental en este tipo de proyectos: las máscaras.",
        "Después te sumergirás en el mundo del fotomontaje y adquirirás conocimientos fundamentales sobre el tamaño y la resolución de la imagen. Además, aprenderás a usar las transformaciones para poder plasmar visualmente todo lo que te propongas.",
        "También aprenderás a usar las herramientas de retoque para reconstruir, limpiar y mejorar tus fotografías e imágenes con un acabado impecable y realista."
    ],

    requisitos: {
        conocimientos: [
            "Manejo básico de computadora: saber abrir carpetas, guardar archivos, copiar/pegar.",
            "Conocimientos básicos de navegación por Internet",
            "No se necesita experiencia previa en diseño gráfico ni en Photoshop."
        ],
        tecnicos: [
            "Una computadora (PC o Mac) con al menos: Procesador i5 o superior, 8 GB de RAM (ideal 16 GB), Espacio libre en disco (mínimo 10 GB)",
            "Adobe Photoshop instalado (versión CC 2020 o superior)",
            "Conexión a internet"
        ]
    },

    link: "./formulario.html",
    verMas: "./cursoDinamico.html",
    comprar: "../html/cursoDinamico.html",

    unidades: [
        {
            unidad: "Unidad 1: Introducción",
            clases: [
                { tipo: "video", titulo: "¿Qué es Photoshop y para qué se usa?", tiempo: "10 minutos" },
                { tipo: "video", titulo: "Conociendo la interfaz: paneles, herramientas, menús", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Crear un nuevo documento: tamaños, resoluciones y formatos", tiempo: "15 minutos" },
                { tipo: "video", titulo: "Guardado y formatos de exportación", tiempo: "10 minutos" },
                { tipo: "video", titulo: "Atajos de teclado básicos", tiempo: "5 minutos" },
                { tipo: "ejercicio", titulo: "Ejercicio práctico: Crear un archivo simple con texto e imagen", tiempo: "15 minutos" },
                { tipo: "examen", titulo: "Examen 1 – Introducción", tiempo: "15 minutos" }
            ]
        },
        {
            unidad: "Unidad 2: Herramientas de Selección y Capas",
            clases: [
                { tipo: "video", titulo: "Herramientas de selección: marco, lazo, varita mágica", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Capas: creación, organización, opacidad y fusión", tiempo: "30 minutos" },
                { tipo: "video", titulo: "Capas de ajuste: brillo, contraste, niveles, curvas", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Máscaras de capa: usos básicos y ejemplos", tiempo: "30 minutos" },
                { tipo: "video", titulo: "Organización de capas con carpetas", tiempo: "10 minutos" },
                { tipo: "ejercicio", titulo: "Ejercicio práctico: Recorte y composición básica", tiempo: "20 minutos" }
            ]
        },
        {
            unidad: "Unidad 3: Herramientas de Retoque y Corrección",
            clases: [
                { tipo: "video", titulo: "Herramienta de clonar y parche", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Pincel corrector y tampón de clonar", tiempo: "15 minutos" },
                { tipo: "video", titulo: "Corrección de color: tono, saturación, balance", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Filtros: enfoque, desenfoque, ruido", tiempo: "15 minutos" },
                { tipo: "video", titulo: "Uso de la herramienta licuar", tiempo: "30 minutos" },
                { tipo: "ejercicio", titulo: "Ejercicio práctico: Retoque facial de retrato", tiempo: "30 minutos" },
                { tipo: "examen", titulo: "Examen 2 – Retoque fotográfico", tiempo: "20 minutos" }
            ]
        },
        {
            unidad: "Unidad 4: Texto y Diseño Gráfico",
            clases: [
                { tipo: "video", titulo: "Herramienta de texto: tipos, alineación y estilos", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Estilos de capa: sombras, resplandores, trazos", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Uso de formas vectoriales", tiempo: "15 minutos" },
                { tipo: "video", titulo: "Diseño de un póster o banner web", tiempo: "40 minutos" },
                { tipo: "video", titulo: "Exportación para web y redes sociales", tiempo: "15 minutos" },
                { tipo: "ejercicio", titulo: "Ejercicio práctico: Crear una tarjeta de presentación", tiempo: "30 minutos" }
            ]
        },
        {
            unidad: "Unidad 5: Fotomontaje y Composición Avanzada",
            clases: [
                { tipo: "video", titulo: "Perspectiva y transformaciones", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Técnicas de recorte avanzadas: selección por canales", tiempo: "30 minutos" },
                { tipo: "video", titulo: "Integración de elementos en una escena", tiempo: "30 minutos" },
                { tipo: "video", titulo: "Iluminación y sombras realistas", tiempo: "30 minutos" },
                { tipo: "ejercicio", titulo: "Ejercicio práctico: Crear un fotomontaje completo", tiempo: "1 hora" },
                { tipo: "examen", titulo: "Examen 3 – Composición gráfica", tiempo: "20 minutos" }
            ]
        },
        {
            unidad: "Unidad 6: Automatización y Productividad",
            clases: [
                { tipo: "video", titulo: "Acciones: grabar y usar acciones automáticas", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Procesamiento por lotes de imágenes", tiempo: "30 minutos" },
                { tipo: "video", titulo: "Configuración de espacios de trabajo personalizados", tiempo: "15 minutos" },
                { tipo: "video", titulo: "Uso de Adobe Bridge con Photoshop", tiempo: "30 minutos" },
                { tipo: "video", titulo: "Exportaciones múltiples y rápidas", tiempo: "10 minutos" },
                { tipo: "ejercicio", titulo: "Ejercicio práctico: Crear acción para redimensionar y exportar", tiempo: "20 minutos" }
            ]
        },
        {
            unidad: "Unidad 7: Proyecto Final y Consejos Profesionales",
            clases: [
                { tipo: "video", titulo: "Planificación del proyecto gráfico", tiempo: "15 minutos" },
                { tipo: "video", titulo: "Briefing de cliente simulado", tiempo: "10 minutos" },
                { tipo: "video", titulo: "Desarrollo de un proyecto real (banner + portada + fotomontaje)", tiempo: "2 horas" },
                { tipo: "ejercicio", titulo: "Entrega final en distintos formatos", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Consejos de trabajo freelance con Photoshop", tiempo: "15 minutos" },
                { tipo: "ejercicio", titulo: "Proyecto final entregable + autoevaluación", tiempo: "2 horas" }
            ]
        },

    ],

    docente: {
        nombre: "Ana Torres",
        estrellas: 4,
        descripcion: "Ana es licenciada en informática y docente universitaria con más de 12 años de experiencia enseñando programación en C. Ha trabajado en sistemas embebidos, aplicaciones de bajo nivel y proyectos de investigación en eficiencia de software."
    }
};