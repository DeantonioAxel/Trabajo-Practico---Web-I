export const cursoPython = {
  nombre: "Python",
  titulo: "Curso completo de Python",
  precio: "59,99 US$",
  cargaHoraria: "62 horas",
  imgclass: "imagenCursoDestacadoIndex",
  imgsrc: "../images/Curso python.png",
  imgalt: "Curso Python",
  filtro: "programacion",

  descripcion: [
      "Este curso está pensado para aprender Python desde cero hasta un nivel intermedio-avanzado. Python es un lenguaje versátil y muy usado en desarrollo web, análisis de datos, inteligencia artificial y automatización.",
      "Comenzarás con la sintaxis básica, tipos de datos y estructuras de control. Luego avanzarás hacia programación orientada a objetos, manejo de archivos y librerías estándar. También aprenderás a trabajar con librerías de análisis de datos y proyectos prácticos."
  ],
  requisitos: {
    conocimientos: [
      "Manejo básico de computadora.",
      "No se requiere experiencia previa en programación."
    ],
    tecnicos: [
      "Computadora con Python 3 instalado.",
      "Editor recomendado: PyCharm, VS Code o Jupyter Notebook."
    ]
  },
  link: "formulario.html",

  unidades: [
    {
      unidad: "Unidad 1: Introducción a Python",
      lecciones: [
        { titulo: "Historia y aplicaciones de Python", tipo: "video", duracion: "15 minutos" },
        { titulo: "Instalación y entorno de trabajo", tipo: "video", duracion: "20 minutos" },
        { titulo: "Primer programa en Python", tipo: "ejercicio", duracion: "15 minutos" }
      ]
    },
    {
      unidad: "Unidad 2: Tipos de Datos y Operadores",
      lecciones: [
        { titulo: "Números, cadenas y booleanos", tipo: "video", duracion: "25 minutos" },
        { titulo: "Operadores básicos y lógicos", tipo: "video", duracion: "20 minutos" },
        { titulo: "Ejercicios de operadores", tipo: "ejercicio", duracion: "20 minutos" }
      ]
    },
    {
      unidad: "Unidad 3: Control de Flujo",
      lecciones: [
        { titulo: "Condicionales if y match", tipo: "video", duracion: "30 minutos" },
        { titulo: "Bucles for y while", tipo: "video", duracion: "25 minutos" },
        { titulo: "Ejercicio: juego de adivinanza", tipo: "ejercicio", duracion: "30 minutos" }
      ]
    },
    {
      unidad: "Unidad 4: Funciones y Módulos",
      lecciones: [
        { titulo: "Definir y llamar funciones", tipo: "video", duracion: "25 minutos" },
        { titulo: "Parámetros y retorno", tipo: "video", duracion: "30 minutos" },
        { titulo: "Módulos y paquetes", tipo: "video", duracion: "25 minutos" }
      ]
    },
    {
      unidad: "Unidad 5: Estructuras de Datos",
      lecciones: [
        { titulo: "Listas y tuplas", tipo: "video", duracion: "35 minutos" },
        { titulo: "Diccionarios y conjuntos", tipo: "video", duracion: "30 minutos" },
        { titulo: "Ejercicio: agenda de contactos", tipo: "ejercicio", duracion: "40 minutos" }
      ]
    },
    {
      unidad: "Unidad 6: Programación Orientada a Objetos",
      lecciones: [
        { titulo: "Clases y objetos", tipo: "video", duracion: "35 minutos" },
        { titulo: "Herencia y polimorfismo", tipo: "video", duracion: "40 minutos" },
        { titulo: "Ejercicio: sistema de facturación", tipo: "ejercicio", duracion: "50 minutos" }
      ]
    },
    {
      unidad: "Unidad 7: Archivos y Proyecto Final",
      lecciones: [
        { titulo: "Lectura y escritura de archivos", tipo: "video", duracion: "30 minutos" },
        { titulo: "Manejo de excepciones", tipo: "video", duracion: "25 minutos" },
        { titulo: "Proyecto final: gestor de tareas con Python", tipo: "ejercicio", duracion: "1 hora 30 minutos" }
      ]
    },
  ],
  docente: {
    nombre: "Carlos Méndez",
    estrellas: 4,
    descripcion: "Carlos es desarrollador backend especializado en Python y Django. Tiene experiencia en proyectos de inteligencia artificial, ciencia de datos y automatización de procesos. Sus clases son prácticas y orientadas a proyectos reales."
  },
};