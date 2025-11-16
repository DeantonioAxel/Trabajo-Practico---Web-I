export const cursoInteligenciaArtificial = {
    nombre: "Inteligencia artificial (AI)",
    titulo: "Curso completo de Inteligencia Artificial",
    precio: "69.99 US$",
    cargaHoraria: "55 horas",
    imgclass:"imagenCursoDestacadoIndex" , 
    imgsrc:"../images/Curso inteligencia artificial.png", 
    imgalt:"Curso AI" ,
    filtro : "inteligencia artificial",

    descripcion: [
        "Este curso te permitirá adentrarte en el mundo de la Inteligencia Artificial, comprendiendo sus fundamentos, algoritmos y aplicaciones prácticas.",
        "Comenzarás conociendo los conceptos básicos de IA, aprendizaje supervisado y no supervisado. Luego, aprenderás a trabajar con modelos de machine learning y redes neuronales.",
        "Al finalizar, serás capaz de aplicar técnicas de IA en proyectos reales como procesamiento de imágenes, análisis de texto y predicciones basadas en datos."
    ],
    requisitosPrevios: {
        conocimientos: [
            "Conocimientos básicos de programación (Python recomendado).",
            "Nociones de álgebra y estadística."
        ],
        requisitosTecnicos: [
            "Una computadora con al menos:\n  - Procesador i5 o superior\n  - 8 GB de RAM (ideal 16 GB)\n  - Espacio libre en disco (mínimo 15 GB)",
            "Python 3.x instalado",
            "Librerías: NumPy, Pandas, Scikit-learn, TensorFlow o PyTorch",
            "Conexión a internet"
        ]
    },
    link: "./formulario.html",
    contenidoClases: [
        {
            unidad: "Unidad 1: Introducción a la IA",
            clases: [
                { titulo: "Historia y aplicaciones de la IA", duracion: "20 minutos" },
                { titulo: "Conceptos básicos: aprendizaje supervisado y no supervisado", duracion: "25 minutos" }
            ]
        },
        {
            unidad: "Unidad 2: Machine Learning",
            clases: [
                { titulo: "Algoritmos supervisados", duracion: "30 minutos" },
                { titulo: "Algoritmos no supervisados", duracion: "30 minutos" }
            ]
        },
        {
            unidad: "Unidad 3: Redes neuronales",
            clases: [
                { titulo: "Fundamentos de redes neuronales", duracion: "35 minutos" },
                { titulo: "Construcción de una red neuronal simple", duracion: "45 minutos" }
            ]
        },
        {
            unidad: "Unidad 4: Procesamiento de datos",
            clases: [
                { titulo: "Preprocesamiento y limpieza de datos", duracion: "30 minutos" },
                { titulo: "Ejercicio práctico: preparación de dataset", duracion: "40 minutos" }
            ]
        },
        {
            unidad: "Unidad 5: Proyecto final",
            clases: [
                { titulo: "Implementación de un modelo de IA para resolver un problema real", duracion: "2 horas" }
            ]
        }
    ],
    docente: {
        nombre: "Diego Fernández",
        valoracion: 5,
        descripcion: "Diego es ingeniero en sistemas y especialista en Inteligencia Artificial. Ha trabajado en proyectos de machine learning e IA aplicada en empresas de tecnología y como docente en universidades, ayudando a estudiantes y profesionales a introducirse en este campo."
    }
};