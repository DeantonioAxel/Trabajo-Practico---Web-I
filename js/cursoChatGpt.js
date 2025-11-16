export const cursoChatGPT = {
  nombre: "Chat Gpt",
  titulo: "Curso completo de ChatGPT",
  precio: "49,99 US$",
  cargaHoraria: "50 horas",
  imgclass:"imagenCursoDestacadoIndex" , 
  imgsrc:"../images/Curso chat gpt.png", 
  imgalt:"Curso ChatGPT" ,
  filtro : "inteligencia artificial",

  descripcion: [
    "En este curso aprenderás a usar ChatGPT de forma práctica, desde lo más básico hasta aplicaciones avanzadas en estudio, trabajo y creación de contenidos. Descubrirás cómo diseñar prompts efectivos, automatizar tareas y aplicar la IA en diferentes áreas.",
    "Conocerás los fundamentos de la inteligencia artificial generativa, técnicas de ingeniería de prompts y casos de uso en redacción, marketing, programación y productividad."
  ],

  requisitos: {
    conocimientos: [
      "Manejo básico de computadora e Internet.",
      "Conocimientos básicos de redacción.",
      "No se requiere experiencia previa en IA."
    ],
    tecnicos: [
      "Computadora con navegador actualizado.",
      "Conexión a Internet estable.",
      "Cuenta en OpenAI (gratuita o de pago)."
    ]
  },

  link: "./formulario.html",

  unidades: [
    {
      unidad: "Unidad 1: Introducción a ChatGPT",
      clases: [
        { titulo: "¿Qué es ChatGPT y cómo funciona?", tiempo: "15 minutos" },
        { titulo: "Modelos de lenguaje e IA generativa", tiempo: "20 minutos" },
        { titulo: "Primeros pasos: crear cuenta y configurar entorno", tiempo: "10 minutos" }
      ]
    },
    {
      unidad: "Unidad 2: Ingeniería de Prompts",
      clases: [
        { titulo: "Estructura de un buen prompt", tiempo: "25 minutos" },
        { titulo: "Estrategias avanzadas: few-shot y chain-of-thought", tiempo: "25 minutos" },
        { titulo: "Taller práctico: diseñar un prompt maestro", tiempo: "20 minutos" }
      ]
    },
    {
      unidad: "Unidad 3: Productividad y Estudio",
      clases: [
        { titulo: "Resúmenes, explicaciones y mapas de estudio", tiempo: "20 minutos" },
        { titulo: "Generación de ejercicios y autoevaluaciones", tiempo: "15 minutos" },
        { titulo: "Proyecto: planificador de estudio con IA", tiempo: "25 minutos" }
      ]
    },
    {
      unidad: "Unidad 4: Contenidos y Marketing",
      clases: [
        { titulo: "Ideación y calendarización de contenidos", tiempo: "20 minutos" },
        { titulo: "Redacción para blogs y redes", tiempo: "25 minutos" },
        { titulo: "Workshop: piezas listas para publicar", tiempo: "30 minutos" }
      ]
    },
    {
      unidad: "Unidad 5: Programación con ChatGPT",
      clases: [
        { titulo: "Explicación y corrección de código", tiempo: "25 minutos" },
        { titulo: "Generación de tests y documentación", tiempo: "20 minutos" },
        { titulo: "Desafío práctico de programación", tiempo: "35 minutos" }
      ]
    },
    {
      unidad: "Unidad 6: Automatización y Flujos",
      clases: [
        { titulo: "Plantillas reutilizables y librerías", tiempo: "20 minutos" },
        { titulo: "Integraciones con documentos", tiempo: "25 minutos" },
        { titulo: "Pipeline de generación de contenido", tiempo: "30 minutos" }
      ]
    },
    {
      unidad: "Unidad 7: Buenas Prácticas y Proyecto Final",
      clases: [
        { titulo: "Sesgos, privacidad y uso responsable", tiempo: "15 minutos" },
        { titulo: "Mejora iterativa de prompts", tiempo: "20 minutos" },
        { titulo: "Proyecto final: asistente personalizado", tiempo: "40 minutos" }
      ]
    }
  ],

  docente: {
    nombre: "Laura Fernández",
    estrellas: 4.5,
    descripcion:
      "Laura es especialista en inteligencia artificial aplicada a la productividad y creación de contenidos. Tiene más de 8 años de experiencia en marketing digital y formación en herramientas de IA."
  }
};