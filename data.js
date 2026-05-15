const patientData = {
  patient: {
    name: "Vicente Alonso Rodríguez",
    age: "47 años",
    status: "Tu plan personalizado ya está listo",
    photo: null,
    photoCrop: false,
    logo: "assets/logo-Araujo.jpeg"
  },

  financial: {
    total: "16.785,39 €",
    monthly: "699€ /mes",
    monthlyNote: "en 24 cómodas cuotas",
    financingAvailable: true
  },

  odontogram: {
    image: null,
    crop: false
  },

  summaryTreatments: [
    "Ortodoncia Invisalign™",
    "Expansión Maxilar SARPE",
    "Implante Unitario"
  ],

  treatments: [
    {
      title: "Tratamiento periodontal",
      description: "Control de la enfermedad de las encías para proteger la base de tu salud oral.",
      warning: true,
      piece: "",
      price: "455,83",
      discount: "-13,67",
      total: "442,16",
      icon: "assets/icon-gingivitis.png",
      explanation: "explanations/gingivitis.png"
    },
    {
      title: "Limpieza profunda",
      description: "Eliminación de sarro y placa en profundidad para sanear tus encías.",
      piece: "",
      price: "186,86",
      discount: "-13,08",
      total: "173,78",
      icon: null,
      explanation: null
    },
    {
      title: "Gingivectomía",
      description: "Remodelación del tejido gingival para mejorar salud y estética.",
      piece: "",
      price: "321,15",
      discount: "-16,06",
      total: "305,09",
      icon: null,
      explanation: null
    },
    {
      title: "Expansión Maxilar SARPE",
      description: "Expansión ósea asistida quirúrgicamente para corregir la mordida.",
      piece: "",
      price: "3.068,70",
      discount: "-153,44",
      total: "2.915,26",
      icon: "assets/icon-sarpe.png",
      explanation: "explanations/sarpe.png"
    },
    {
      title: "Elevación de seno maxilar",
      description: "Aumento de hueso para permitir la colocación del implante.",
      piece: "",
      price: "1.811,03",
      discount: "-126,77",
      total: "1.684,26",
      icon: null,
      explanation: null
    },
    {
      title: "Implante unitario",
      description: "Raíz artificial de titanio para sustituir el diente perdido.",
      piece: "36",
      price: "1.356,29",
      discount: "-67,81",
      total: "1.288,48",
      icon: null,
      explanation: null
    },
    {
      title: "Corona sobre implante",
      description: "Corona de porcelana sobre el implante para restaurar la función y estética.",
      piece: "36",
      price: "1.014,53",
      discount: "-50,73",
      total: "963,80",
      icon: null,
      explanation: null
    },
    {
      title: "Ortodoncia metálica",
      description: "Corrección de la posición dental con brackets metálicos de alta precisión.",
      piece: "",
      price: "3.244,21",
      discount: "-227,09",
      total: "3.017,12",
      icon: null,
      explanation: null
    },
    {
      title: "Ortodoncia Invisalign™",
      description: "Alineadores transparentes para terminar de afinar tu sonrisa.",
      piece: "",
      price: "4.534,15",
      discount: "-226,71",
      total: "4.307,44",
      icon: "assets/icon-invisalign.png",
      explanation: "explanations/alineadores.png"
    },
    {
      title: "Reconstrucción estética",
      description: "Restauración del diente para recuperar forma, función y apariencia natural.",
      piece: "24",
      price: "268,88",
      discount: "-26,89",
      total: "241,99",
      icon: null,
      explanation: null
    },
    {
      title: "Carillas de porcelana premium",
      description: "Láminas de porcelana de alta calidad para una sonrisa natural y duradera.",
      piece: "11",
      price: "784,04",
      discount: "-23,52",
      total: "760,52",
      icon: "assets/icon-carillas.png",
      explanation: "explanations/carillas.png"
    },
    {
      title: "Férula de descarga",
      description: "Protector nocturno a medida para evitar el desgaste dental.",
      piece: "",
      price: "466,49",
      discount: "-46,65",
      total: "419,84",
      icon: "assets/icon-ferula.png",
      explanation: "explanations/ferula.png"
    },
    {
      title: "Ferulización post-ortodoncia",
      description: "Fija los dientes en su nueva posición para mantener el resultado a largo plazo.",
      piece: "",
      price: "295,17",
      discount: "-29,52",
      total: "265,65",
      icon: "assets/icon-retainer.png",
      explanation: "explanations/retainer.png"
    }
  ],

  timeline: {
    image: "assets/plan-tratamiento.png",
    crop: true,
    startDate: "1 de junio",
    intro: "este es el camino hacia tu nueva sonrisa.",
    phases: [
      {
        date: "junio – julio",
        title: "Salud y base",
        emotion: "Todo empieza por unas encías sanas. Es la base de todo lo que viene.",
        items: [
          "Tratamiento periodontal",
          "Limpieza profunda",
          "Gingivectomía"
        ],
        color: "#2a7c6f"
      },
      {
        date: "agosto – octubre",
        title: "Estructura",
        emotion: "Preparamos el terreno para que todo encaje perfectamente.",
        items: [
          "Expansión Maxilar SARPE",
          "Elevación de seno maxilar",
          "Implante unitario"
        ],
        color: "#e8934a"
      },
      {
        date: "noviembre – julio",
        title: "Alineación",
        emotion: "Aquí empieza el cambio que vas a notar cada vez que te mires al espejo.",
        items: [
          "Ortodoncia metálica",
          "Ortodoncia Invisalign™",
          "Ferulización post-ortodoncia"
        ],
        color: "#4a9eb5"
      },
      {
        date: "agosto – septiembre",
        title: "Estética final",
        emotion: "Los últimos detalles que transforman tu sonrisa en definitiva.",
        items: [
          "Carillas de porcelana premium",
          "Corona sobre implante",
          "Reconstrucción estética",
          "Férula de descarga"
        ],
        color: "#c0392b"
      }
    ]
  }
};
