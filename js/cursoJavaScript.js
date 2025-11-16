export const cursoJavaScript = {
    nombre: "JavaScript",
    titulo: "Curso completo de JavaScript",
    precio: "59,99 US$",
    cargaHoraria: "60 horas",
    imgclass:"imagenCursoDestacadoIndex" , 
    imgsrc:"../images/Curso javascript.png", 
    imgalt:"Curso JavaScript" ,  
    filtro : "programacion",
    id:"3",
    
    descripcion: [
        "Este curso te permitirá dominar JavaScript, el lenguaje esencial para el desarrollo web. Aprenderás a darle dinamismo e interactividad a tus páginas, construir aplicaciones del lado del cliente y sentar bases para frameworks modernos.",
        "Comenzarás con lo fundamental: variables, operadores y funciones. Luego avanzarás hacia manipulación del DOM, eventos y asincronía. Finalmente, aprenderás conceptos modernos de ES6+, APIs y proyectos prácticos."
    ],
    requisitos: {
        conocimientos: [
            "Conocimientos básicos de HTML y CSS.",
            "No se requiere experiencia previa en programación avanzada."
        ],
        tecnicos: [
            "Un navegador moderno (Chrome, Firefox, Edge).",
            "Editor de texto (VS Code recomendado)."
        ]
    },
    link: "./formulario.html",
    verMas: "./cursoDinamico.html",
    
    unidades: [
        {
            unidad: "Unidad 1: Introducción a JavaScript",
            clases: [
                { titulo: "¿Qué es JavaScript y dónde se usa?", tiempo: "15 minutos" },
                { titulo: "Integración de JavaScript en HTML", tiempo: "20 minutos" },
                { titulo: "Primer script en el navegador", tiempo: "15 minutos" }
            ]
        },
        {
            unidad: "Unidad 2: Variables y Tipos de Datos",
            clases: [
                { titulo: "let, const y var", tiempo: "20 minutos" },
                { titulo: "Tipos primitivos", tiempo: "25 minutos" },
                { titulo: "Ejercicios básicos con variables", tiempo: "20 minutos" }
            ]
        },
        {
            unidad: "Unidad 3: Operadores y Estructuras de Control",
            clases: [
                { titulo: "Operadores aritméticos y lógicos", tiempo: "25 minutos" },
                { titulo: "Condicionales if, else, switch", tiempo: "30 minutos" },
                { titulo: "Bucles for y while", tiempo: "25 minutos" }
            ]
        },
        {
            unidad: "Unidad 4: Funciones",
            clases: [
                { titulo: "Funciones tradicionales", tiempo: "20 minutos" },
                { titulo: "Funciones flecha (arrow functions)", tiempo: "20 minutos" },
                { titulo: "Ejercicio: calculadora básica", tiempo: "30 minutos" }
            ]
        },
        {
            unidad: "Unidad 5: DOM y Eventos",
            clases: [
                { titulo: "Selección de elementos del DOM", tiempo: "30 minutos" },
                { titulo: "Manipulación de contenido y estilos", tiempo: "25 minutos" },
                { titulo: "Manejo de eventos", tiempo: "30 minutos" }
            ]
        },
        {
            unidad: "Unidad 6: Asincronía",
            clases: [
                { titulo: "Callbacks y promesas", tiempo: "35 minutos" },
                { titulo: "Async/Await", tiempo: "30 minutos" },
                { titulo: "Ejercicio: consumo de una API", tiempo: "40 minutos" }
            ]
        },
        {
            unidad: "Unidad 7: Proyecto Final",
            clases: [
                { titulo: "Buenas prácticas y estructura de proyectos", tiempo: "30 minutos" },
                { titulo: "Uso de ES6+ (spread, destructuring, módulos)", tiempo: "40 minutos" },
                { titulo: "Proyecto final: To-Do List interactiva", tiempo: "1 hora 30 minutos" }
            ]
        }
    ],
    docente: {
        nombre: "Laura Fernández",
        estrellas: 4.5,
        descripcion: "Laura es desarrolladora frontend con más de 8 años de experiencia. Ha trabajado en startups y empresas internacionales creando aplicaciones modernas con JavaScript, React y Node.js. Su enfoque es práctico y siempre basado en proyectos reales."
    }
};