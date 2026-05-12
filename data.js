const patientData = {
  patient: {
    name: "Carla Aveiro Pérez",
    age: "16 años",
    status: "Tu plan personalizado ya está listo",
    photo: "assets/patient-carla-source.png",
    photoCrop: true,
    logo: "assets/logo-Araujo.jpeg"
  },

  financial: {
    total: "12.302,50 €",
    monthly: "295€ /mes",
    monthlyNote: "en 24 cómodas cuotas",
    financingAvailable: true
  },

  odontogram: {
    image: "assets/odontograma-source.png",
    crop: false
  },

  summaryTreatments: [
    "Ortodoncia Invisalign™",
    "Tratamiento funcional complejo",
    "Tratamiento gingivitis"
  ],

  treatments: [
    {
      title: "Estudio interdisciplinar",
      description: "Adquisición de imágenes, diagnóstico y plan tratamiento",
      piece: "",
      price: "250,00",
      discount: "-12,50",
      total: "237,50",
      icon: "assets/icon-multidisciplinar.png",
      explanation: "explanations/multidisciplinar.png"
    },
    {
      title: "Tratamiento gingivitis",
      description: "Puede evolucionar a periodontitis si no se trata a tiempo",
      warning: true,
      piece: "",
      price: "210,00",
      discount: "-10,50",
      total: "199,50",
      icon: "assets/icon-gingivitis.png",
      explanation: "explanations/gingivitis.png"
    },
    {
      title: "Tratamiento funcional complejo",
      description: "Mejora de la mordida y función",
      piece: "",
      price: "3.000,00",
      discount: "-150,00",
      total: "2.850,00",
      icon: "assets/icon-sarpe.png",
      explanation: "explanations/sarpe.png"
    },
    {
      title: "Ortodoncia Invisalign™",
      description: "Alinea tus dientes de forma discreta y efectiva",
      piece: "",
      price: "4.390,00",
      discount: "-219,50",
      total: "4.170,50",
      icon: "assets/icon-invisalign.png",
      explanation: "explanations/alineadores.png"
    },
    {
      title: "Carillas porcelanas especiales",
      description: "Mejora forma y color con un resultado natural y duradero.",
      piece: "13",
      price: "700,00",
      discount: "-35,00",
      total: "665,00",
      icon: "assets/icon-carillas.png",
      explanation: "explanations/carillas.png"
    },
    {
      title: "Carillas porcelanas especiales",
      description: "Mejora forma y color con un resultado natural y duradero.",
      piece: "12",
      price: "700,00",
      discount: "-35,00",
      total: "665,00",
      icon: "assets/icon-carillas.png",
      explanation: "explanations/carillas.png"
    },
    {
      title: "Carillas porcelanas especiales",
      description: "Mejora forma y color con un resultado natural y duradero.",
      piece: "11",
      price: "700,00",
      discount: "-35,00",
      total: "665,00",
      icon: "assets/icon-carillas.png",
      explanation: "explanations/carillas.png"
    },
    {
      title: "Carillas porcelanas especiales",
      description: "Mejora forma y color con un resultado natural y duradero.",
      piece: "21",
      price: "700,00",
      discount: "-35,00",
      total: "665,00",
      icon: "assets/icon-carillas.png",
      explanation: "explanations/carillas.png"
    },
    {
      title: "Carillas porcelanas especiales",
      description: "Mejora forma y color con un resultado natural y duradero.",
      piece: "22",
      price: "700,00",
      discount: "-35,00",
      total: "665,00",
      icon: "assets/icon-carillas.png",
      explanation: "explanations/carillas.png"
    },
    {
      title: "Carillas porcelanas especiales",
      description: "Mejora forma y color con un resultado natural y duradero.",
      piece: "23",
      price: "700,00",
      discount: "-35,00",
      total: "665,00",
      icon: "assets/icon-carillas.png",
      explanation: "explanations/carillas.png"
    },
    {
      title: "Férula descarga",
      description: "Evita el desgaste dental y reduce la tensión mandibular acumulada durante el descanso.",
      piece: "",
      price: "495,00",
      discount: "-24,75",
      total: "470,25",
      icon: "assets/icon-ferula.png",
      explanation: "explanations/ferula.png"
    },
    {
      title: "Essix contención",
      description: "Mantiene tus dientes en su nueva posición tras el tratamiento de ortodoncia",
      piece: "",
      price: "110,00",
      discount: "-5,50",
      total: "104,50",
      icon: "assets/icon-essix.png",
      explanation: "explanations/essix.png"
    },
    {
      title: "Ferulización ortodoncia",
      description: "Fija los dientes para evitar movimientos indeseados tras la ortodoncia.",
      piece: "",
      price: "495,00",
      discount: "-24,75",
      total: "470,25",
      icon: "assets/icon-retainer.png",
      explanation: "explanations/retainer.png"
    }
  ],

  timeline: {
    image: "assets/plan-tratamiento.png",
    crop: true,
    startDate: "30 de junio",
    intro: "antes del verano tu sonrisa ya estará en marcha.",
    phases: [
      {
        date: "30 junio",
        emotion: "Tu boca sana es el punto de partida de todo lo que viene.",
        items: [
          { text: "Tratamos tu gingivitis", link: "explanations/gingivitis.png" },
          "Empezamos a alinear tu mordida"
        ],
        color: "#2a7c6f"
      },
      {
        date: "julio – agosto",
        emotion: "Aquí empieza el cambio que vas a notar cada vez que te mires al espejo.",
        items: ["Alineamos tus dientes y ajustamos tu mordida con Invisalign"],
        color: "#e8934a"
      },
      {
        date: "septiembre – octubre",
        emotion: "Aquí tu sonrisa empieza a tomar su forma definitiva.",
        items: ["Restauramos tu sonrisa con carillas de porcelana"],
        color: "#4a9eb5"
      },
      {
        date: "diciembre",
        emotion: "Este diciembre, tu sonrisa ya es tuya.",
        items: ["A partir de aquí, solo hay que mantenerla."],
        color: "#c0392b"
      }
    ]
  }
};