export const cursoProgramacionC = {
    nombre: "Programacion C",
    titulo: "Curso completo de Programación en C",
    precio: "49.99 US$",
    cargaHoraria: "50 horas",
    imgclass:"imagenCursoDestacadoIndex" , 
    imgsrc:"../images/Curso programacion c.png", 
    imgalt:"Curso C" ,
    filtro : "programacion",
    id:"9",
    resumen: "Fundamentos de programación estructurada en C.",
    
    descripcion: [
        "Este curso está diseñado para quienes quieran aprender los fundamentos de la programación desde cero con el lenguaje C, uno de los más influyentes de la historia.",
        "Aprenderás la sintaxis básica, estructuras de control, funciones, punteros, manejo de memoria y trabajarás con archivos. Además, realizarás proyectos prácticos para consolidar tu aprendizaje."
    ],
    requisitos: {
        conocimientos: [
            "Manejo básico de computadora.",
            "No se necesita experiencia previa en programación."
        ],
        tecnicos: [
            "Computadora con compilador de C instalado (GCC o similar).",
            "Editor recomendado: Code::Blocks o Visual Studio Code."
        ]
    },
    link: "../html/formulario.html",
    verMas: "../html/cursoDinamico.html",
    comprar: "../html/cursoDinamico.html",
    
    unidades: [
        {
            unidad: "Unidad 1: Introducción a C",
            clases: [
                { titulo: "Historia y características del lenguaje C", tipo: "video", tiempo: "15 minutos" },
                { titulo: "Instalación y configuración del compilador", tipo: "video", tiempo: "25 minutos" },
                { titulo: "Ejercicio: tu primer programa en C", tipo: "practica", tiempo: "20 minutos" }
            ]
        },
        {
            unidad: "Unidad 2: Tipos de Datos y Operadores",
            clases: [
                { titulo: "Variables y constantes", tipo: "video", tiempo: "25 minutos" },
                { titulo: "Operadores aritméticos y lógicos", tipo: "video", tiempo: "20 minutos" },
                { titulo: "Ejercicios de operadores", tipo: "practica", tiempo: "20 minutos" }
            ]
        },
        {
            unidad: "Unidad 3: Control de Flujo",
            clases: [
                { titulo: "Condicionales if y switch", tipo: "video", tiempo: "30 minutos" },
                { titulo: "Bucles for y while", tipo: "video", tiempo: "25 minutos" },
                { titulo: "Ejercicio: calculadora en C", tipo: "practica", tiempo: "30 minutos" }
            ]
        },
        {
            unidad: "Unidad 4: Funciones",
            clases: [
                { titulo: "Definición y declaración de funciones", tipo: "video", tiempo: "25 minutos" },
                { titulo: "Ámbito de variables y paso de parámetros", tipo: "video", tiempo: "30 minutos" },
                { titulo: "Ejercicio: funciones matemáticas", tipo: "practica", tiempo: "35 minutos" }
            ]
        },
        {
            unidad: "Unidad 5: Arreglos y Cadenas",
            clases: [
                { titulo: "Vectores y matrices", tipo: "video", tiempo: "40 minutos" },
                { titulo: "Manipulación de cadenas", tipo: "video", tiempo: "30 minutos" },
                { titulo: "Ejercicio: sistema de calificaciones", tipo: "practica", tiempo: "40 minutos" }
            ]
        },
        {
            unidad: "Unidad 6: Punteros y Memoria Dinámica",
            clases: [
                { titulo: "Concepto de punteros", tipo: "video", tiempo: "35 minutos" },
                { titulo: "Reserva y liberación de memoria", tipo: "video", tiempo: "30 minutos" },
                { titulo: "Ejercicio: lista dinámica de números", tipo: "practica", tiempo: "45 minutos" }
            ]
        },
        {
            unidad: "Unidad 7: Archivos y Proyecto Final",
            clases: [
                { titulo: "Lectura y escritura de archivos", tipo: "video", tiempo: "40 minutos" },
                { titulo: "Proyecto final: sistema de gestión de biblioteca", tipo: "practica", tiempo: "1 hora 30 minutos" }
            ]
        }
    ],
    docente: {
        nombre: "Ana Torres",
        estrellas: 4,
        descripcion: "Ana es licenciada en informática y docente universitaria con más de 12 años de experiencia enseñando programación en C. Ha trabajado en sistemas embebidos, aplicaciones de bajo nivel y proyectos de investigación en eficiencia de software."
    }
};