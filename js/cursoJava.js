export const cursoJava = {
    nombre: "Java",
    titulo: "Curso completo de Java",
    precio: "59.99 US$",
    cargaHoraria: "62 horas",
    imgclass:"imagenCursoDestacadoIndex" , 
    imgsrc:"../images/Curso java.png", 
    imgalt:"Curso Java" ,
    filtro : "programacion",
    id:"8",
    resumen: "Aprende programación en Java desde cero.",

    descripcion: [
        "Aprenderás a programar en Java desde cero hasta un nivel avanzado. Verás fundamentos de la programación orientada a objetos, estructuras de datos, excepciones, colecciones y acceso a bases de datos.",
        "Además, desarrollarás proyectos prácticos que te permitirán aplicar tus conocimientos en aplicaciones reales."
    ],
    requisitos: {
        conocimientos: [
            "Manejo básico de computadora.",
            "No se necesita experiencia previa en programación."
        ],
        tecnicos: [
            "Computadora con al menos 4 GB de RAM.",
            "JDK de Java instalado.",
            "Editor recomendado: Eclipse o IntelliJ IDEA."
        ]
    },
    link: "./formulario.html",
    verMas: "./cursoDinamico.html",
    comprar: "../html/cursoDinamico.html",
    
    unidades: [
        {
            unidad: "Unidad 1: Fundamentos de Java",
            clases: [
                { tipo: "video", titulo: "¿Qué es Java y para qué se usa?", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Instalación del JDK y entorno de trabajo", tiempo: "25 minutos" },
                { tipo: "practica", titulo: "Ejercicio práctico: tu primer programa en Java", tiempo: "15 minutos" }
            ]
        },
        {
            unidad: "Unidad 2: Variables y Operadores",
            clases: [
                { tipo: "video", titulo: "Tipos de datos en Java", tiempo: "20 minutos" },
                { tipo: "video", titulo: "Operadores aritméticos, lógicos y relacionales", tiempo: "30 minutos" },
                { tipo: "practica", titulo: "Ejercicios prácticos de variables y operadores", tiempo: "25 minutos" }
            ]
        },
        {
            unidad: "Unidad 3: Estructuras de Control",
            clases: [
                { tipo: "video", titulo: "Condicionales: if, else, switch", tiempo: "25 minutos" },
                { tipo: "video", titulo: "Bucles: for, while, do-while", tiempo: "25 minutos" },
                { tipo: "practica", titulo: "Ejercicio práctico: calculadora simple", tiempo: "30 minutos" }
            ]
        },
        {
            unidad: "Unidad 4: Programación Orientada a Objetos",
            clases: [
                { tipo: "video", titulo: "Clases y objetos", tiempo: "30 minutos" },
                { tipo: "video", titulo: "Herencia y polimorfismo", tiempo: "35 minutos" },
                { tipo: "proyecto", titulo: "Proyecto: sistema de gestión de estudiantes", tiempo: "40 minutos" }
            ]
        },
        {
            unidad: "Unidad 5: Colecciones y Excepciones",
            clases: [
                { tipo: "video", titulo: "Listas, sets y mapas en Java", tiempo: "30 minutos" },
                { tipo: "video", titulo: "Manejo de excepciones", tiempo: "25 minutos" },
                { tipo: "practica", titulo: "Ejercicio: gestor de inventario", tiempo: "35 minutos" }
            ]
        },
        {
            unidad: "Unidad 6: Acceso a Bases de Datos",
            clases: [
                { tipo: "video", titulo: "Introducción a JDBC", tiempo: "30 minutos" },
                { tipo: "video", titulo: "Conexión a MySQL desde Java", tiempo: "40 minutos" },
                { tipo: "proyecto", titulo: "Proyecto: CRUD con base de datos", tiempo: "50 minutos" }
            ]
        },
        {
            unidad: "Unidad 7: Proyecto Final",
            clases: [
                { tipo: "video", titulo: "Arquitectura de aplicaciones en Java", tiempo: "30 minutos" },
                { tipo: "proyecto", titulo: "Proyecto final: aplicación completa", tiempo: "2 horas" }
            ]
        }
    ],
    docente: {
        nombre: "Carlos Méndez",
        estrellas: 4.5,
        descripcion: "Carlos es ingeniero en sistemas con más de 10 años de experiencia en desarrollo backend con Java. Ha trabajado en proyectos de banca, e-commerce y aplicaciones educativas, y es docente universitario especializado en programación orientada a objetos."
    }
};