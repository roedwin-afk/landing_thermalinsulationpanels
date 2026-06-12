import type { TranslationKeys } from "./en";

export const es: TranslationKeys = {
  meta: {
    title: "Paneles de Aislamiento Térmico | Guía Completa del Comprador 2026",
    description:
      "Aprende todo sobre los paneles sándwich térmicos: tipos, beneficios, calculadora de espesor y guías de compra. El recurso definitivo 2026 para arquitectos y constructores.",
  },
  nav: {
    whatIs: "¿Qué es un Panel?",
    benefits: "Beneficios Clave",
    calculator: "Calculadora de Espesor",
    blog: "Blog",
    cta: "Solicitar Presupuesto",
    panelTypes: "Tipos de Panel",
  },
  hero: {
    badge: "El Recurso Definitivo del Comprador para 2026",
    title1: "La Forma Más Inteligente de",
    title2: "Aislar y Construir",
    description:
      "¿Buscas optimizar la eficiencia energética, reducir costes de construcción o construir una cámara frigorífica impecable? Descubre por qué los paneles sándwich térmicos son la elección definitiva en construcción moderna.",
    ctaPrimary: "Calcular Espesor",
    ctaSecondary: "Explorar Guía",
    stats: {
      savings: "Hasta 60%",
      savingsLabel: "Ahorro en Calefacción/Refrigeración",
      recyclable: "100%",
      recyclableLabel: "Núcleo Reciclable",
      faster: "3x Más Rápido",
      fasterLabel: "Tiempos de Construcción",
    },
    anatomy: {
      badge: "Clic en Capa para Aprender",
      subtitle: "Anatomía Interactiva del Panel",
      hint: "Selecciona una capa para ver detalles",
      hintDesc:
        "Las distintas capas trabajan juntas para ofrecer eficiencia térmica extraordinaria, bloqueo acústico y capacidad estructural.",
      outer: {
        label: "1. Cara Exterior Protectora (Acero/Aluminio)",
        tag: "Exterior",
        desc: "Acero galvanizado prepintado que protege contra la intemperie, corrosión e impactos.",
      },
      core: {
        label: "2. Núcleo Aislante (PIR / PUR / Lana Mineral)",
        tag: "Aislamiento",
        desc: "Espuma celular de alta densidad que actúa como barrera principal térmica, acústica y de humedad.",
      },
      inner: {
        label: "3. Revestimiento Interior Perfilado",
        tag: "Interior",
        desc: "Capa de soporte estructural o higiénica fácil de limpiar, perfecta para interiores.",
      },
    },
  },
  whatIs: {
    eyebrow: "Fundamentos Educativos",
    title: "¿Qué es un Panel Sándwich?",
    description:
      "Material compuesto de construcción formado por un núcleo rígido de aislamiento térmico fijado entre dos chapas metálicas. Cumple múltiples funciones esenciales a la vez: aislamiento, estructura y acabado exterior.",
    types: {
      pir: {
        title: "PIR (Poliisocianurato)",
        desc: "El estándar actual de la industria. Valores de aislamiento térmico excepcionales y rendimiento mejorado contra el fuego respecto a las espumas PUR antiguas.",
      },
      pur: {
        title: "PUR (Poliuretano)",
        desc: "Opción de aislamiento muy rentable que ofrece una resistencia al agua sobresaliente y densidad robusta para proyectos de cadena de frío.",
      },
      mineral: {
        title: "Lana Mineral Rockwool",
        desc: "Núcleo no combustible diseñado específicamente para aplicaciones que exigen homologaciones de seguridad contra incendios y propiedades de insonorización premium.",
      },
      eps: {
        title: "EPS (Poliestireno)",
        desc: "Panel ultraligero y económico, ideal para divisiones estructurales, cobertizos y trabajos de techo sin cargas climáticas extremas.",
      },
    },
  },
  benefits: {
    eyebrow: "¿Por Qué Cambiar?",
    title: "Los Beneficios Absolutos del Aislamiento Térmico",
    description:
      "Invertir en paneles de aislamiento térmico de calidad genera grandes dividendos a lo largo del ciclo de vida de tu estructura.",
    items: {
      eco: {
        title: "Ecológico y Sostenible",
        desc: "Al maximizar la conservación energética, los paneles térmicos reducen drásticamente las emisiones de carbono. Los núcleos modernos evitan agentes de efecto invernadero y son totalmente reciclables.",
        tag: "Impacto Ambiental",
      },
      cost: {
        title: "Reducción Severa de Costes",
        desc: "Ahorra tanto en costes iniciales de construcción (mano de obra y velocidad) como en gastos operativos mensuales. Sin fugas de aire, se optimizan las cargas de climatización.",
        tag: "Rentabilidad",
      },
      weather: {
        title: "Resistente a la Intemperie y Hermético",
        desc: "Perfiles de juntas entrelazadas de ingeniería dinámica. El agua, la humedad y el polvo quedan sellados, eliminando el riesgo de moho y mejorando automáticamente la higiene interior.",
        tag: "Durabilidad y Salud",
      },
    },
  },
  calculator: {
    eyebrow: "Herramienta Educativa Pre-Venta",
    title: "Encuentra Tu Espesor Ideal al Instante",
    description:
      "Cada aplicación requiere valores R específicamente calibrados (Resistencia Térmica). Usa nuestra calculadora inteligente para evaluar las especificaciones de espesor recomendadas según tus parámetros.",
    checks: {
      sizing: {
        title: "Dimensionado Térmico Perfecto",
        desc: "Evita pagar de más por exceso de espesor o sufrir condensación por un dimensionado insuficiente.",
      },
      efficiency: {
        title: "Eficiencia de Construcción Objetivo",
        desc: "Se adapta a los códigos de edificación reales y a las demandas de carga HVAC profesionales.",
      },
    },
    wizard: {
      title: "Asistente de Dimensionado Inteligente",
      appLabel: "Selecciona tu Aplicación de Construcción",
      climateLabel: "Severidad del Clima Local",
      apps: {
        residential: "Muros / Cubierta Residencial",
        industrial: "Almacén Industrial / Planta",
        coldChill: "Cámara Frigorífica (0°C a 10°C)",
        coldFreeze: "Cámara de Congelación (-10°C a -25°C)",
      },
      climates: {
        mild: "Suave / Templado",
        hot: "Calor Extremo",
        cold: "Frío Extremo",
      },
      resultThickness: "Espesor Recomendado",
      resultRValue: "Valor R Est. (m²K/W)",
      mockupLabel: "Maqueta de Espesor Dinámica:",
      steelSkin: "Chapa de Acero",
      insulatingCore: "Núcleo Aislante",
      cta: "Obtener Presupuesto Personalizado",
    },
  },
  blog: {
    eyebrow: "Centro de Conocimiento",
    title: "Últimas Guías e Insights del Comprador",
    description:
      "Fórmate con guías en profundidad elaboradas por especialistas en aislamiento.",
    searchPlaceholder: "Buscar guías (ej. PIR, eficiencia)...",
    readArticle: "Leer Artículo",
    noResults: {
      title: "No se encontraron guías",
      desc: "Prueba con otros términos como \"espesor\", \"sostenibilidad\" o \"PIR\".",
    },
    articles: {
      panel: {
        category: "Guías",
        title: "¿Qué es un Panel Sándwich? La Guía Fundamental",
        date: "Junio 2026",
        readTime: "5 min de lectura",
        desc: "Conoce las capas, química, propiedades estructurales y configuraciones de los paneles sándwich. Introducción ideal para gestionar un nuevo proyecto arquitectónico.",
      },
      trends: {
        category: "Sostenibilidad",
        title: "Paneles Aislantes y Tendencias en Construcción Sostenible",
        date: "Mayo 2026",
        readTime: "7 min de lectura",
        desc: "Explora cómo las normativas de construcción verde dependen en gran medida de los paneles sándwich. Aprende sobre los estándares nZEB y el ahorro en créditos de carbono.",
      },
      thickness: {
        category: "Ingeniería",
        title: "Cómo Elegir el Espesor Correcto para Cámaras Frigoríficas",
        date: "Mayo 2026",
        readTime: "6 min de lectura",
        desc: "Refrigeración estándar vs logística de congelación profunda. Elegir el espesor va más allá del aislamiento: explora cargas de presión de viento y curvas de temperatura.",
      },
    },
  },
  download: {
    title: "Descarga la Guía Definitiva del Comprador de Paneles Sándwich Térmicos 2026",
    description:
      "Una guía PDF exhaustiva con especificaciones técnicas, comparativas de materiales, estrategias de ahorro de costes y listas de verificación de instalación. Completamente gratis, directo a tu bandeja de entrada.",
    placeholder: "Introduce tu email profesional",
    cta: "Enviar PDF",
    disclaimer: "Respetamos tu privacidad. Cancela la suscripción en cualquier momento. Sin spam garantizado.",
    toast: {
      title: "¡Guía enviada con éxito!",
      desc: "La Guía PDF del Comprador fue enviada a:",
    },
  },
  footer: {
    tagline:
      "Un hub educativo neutral y accesible que ofrece guías de aislamiento estructural, recomendaciones de espesor y análisis de ingeniería para compradores.",
    nav: "Navegación",
    network: "Nuestra Red Global de Guías",
    legal: "Legal y Aviso",
    disclaimer:
      "El contenido de este portal es exclusivamente para investigación inicial del comprador, exploración educativa y evaluación arquitectónica general. Para construcciones estructurales, consulta siempre con un ingeniero estructural certificado.",
    privacy: "Política de Privacidad",
    terms: "Términos de Uso",
    copyright: "© 2026 ThermalInsulationPanels. Todos los derechos reservados.",
  },
  modal: {
    footerNote: "Primero educamos para que construyas con seguridad.",
    cta: "Obtener Plano de Dimensionado",
  },
  faq: {
    eyebrow: "¿Tienes Dudas?",
    title: "Preguntas Frecuentes",
    description: "Todo lo que necesitas saber antes de comprar paneles de aislamiento térmico.",
    items: {
      q1: { question: "¿Cuál es la diferencia entre paneles PIR y PUR?", answer: "El PIR (Poliisocianurato) es la evolución moderna del PUR (Poliuretano). Los paneles PIR ofrecen mayor valor de aislamiento por milímetro y una resistencia al fuego significativamente mejor. Para la mayoría de nuevas construcciones, el PIR es la opción recomendada. El PUR sigue siendo una alternativa rentable para proyectos de cadena de frío donde las clasificaciones de fuego son menos críticas." },
      q2: { question: "¿Cómo sé qué espesor de panel necesito?", answer: "El espesor depende de dos factores: la aplicación (residencial, industrial, cámara frigorífica) y el clima local. Como referencia: muros residenciales suelen necesitar 50–80 mm, cubiertas industriales 80–120 mm, cámaras de refrigeración 100–140 mm y cámaras de congelación 150–200 mm. Usa nuestra Calculadora de Espesor para una recomendación precisa." },
      q3: { question: "¿Son aptos los paneles sándwich para fachadas exteriores?", answer: "Sí. Los paneles de fachada incorporan juntas machihembradas que sellan frente al viento, la lluvia y la humedad. La chapa exterior va prelacada con recubrimientos resistentes a la corrosión (poliéster o PVDF) diseñados para durar 25–40 años con mantenimiento mínimo." },
      q4: { question: "¿Se pueden reciclar los paneles sándwich?", answer: "Sí. Las chapas de acero son 100% reciclables al final de su vida útil. Los núcleos modernos de PIR y PUR se fabrican sin agentes expansores que dañen la capa de ozono. Además, los paneles son modulares y fáciles de desmontar, lo que los hace ideales para proyectos de construcción circular." },
      q5: { question: "¿Cuánto tiempo tarda la instalación frente a la construcción tradicional?", answer: "Los paneles sándwich pueden reducir el tiempo de construcción hasta 3 veces frente a la obra tradicional. Una nave industrial que tardaría 8 semanas en construirse de forma convencional puede quedar cerrada y aislada en menos de 3 semanas con paneles, ya que cada panel actúa a la vez como estructura, aislamiento y acabado." },
    },
  },
  contact: {
    meta: {
      title: "Contáctanos | Paneles de Aislamiento Térmico",
      description: "Ponte en contacto con nuestro equipo para cotizaciones, asesoría técnica y soporte de proyectos.",
    },
    label: "Contáctanos",
    title: "Solicita un Presupuesto",
    description: "¿Tienes un proyecto en mente? Nuestro equipo está listo para ayudarte a encontrar la especificación, espesor y configuración de panel correcta para tus necesidades.",
    phone_label: "Teléfono",
    phone: "+52 55 9990 3546",
    email_label: "Correo",
    email: "ventas@mequipo.com",
    address_label: "Dirección",
    address: "Masaryk 61, Int. 901, Polanco V, 11560, CDMX",
    form: {
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje",
      messagePlaceholder: "Describe los requerimientos de tu proyecto...",
      submit: "Enviar Consulta",
      required: "*",
    },
  },
  panelTypes: {
    meta: {
      title: "Tipos de Panel | Paneles de Aislamiento Térmico",
      description: "Compara paneles sándwich PIR, PUR, Lana Mineral y EPS. Encuentra el material de núcleo adecuado según rendimiento, resistencia al fuego y coste.",
    },
    hero: {
      eyebrow: "Guía Comparativa Completa",
      title: "¿Qué Tipo de Panel es el Adecuado para Ti?",
      description: "No todos los paneles de aislamiento son iguales. Cada material de núcleo tiene una fortaleza específica: rendimiento térmico, resistencia al fuego, aislamiento acústico o eficiencia de coste. Aquí tienes todo lo que necesitas para decidir.",
    },
    comparison: {
      title: "Comparativa Directa",
      description: "Indicadores clave de rendimiento para los cuatro tipos de núcleo.",
      headers: {
        feature: "Característica",
        pir: "PIR",
        pur: "PUR",
        mineral: "Lana Mineral",
        eps: "EPS",
      },
      rows: {
        thermal: { label: "Rendimiento Térmico", pir: "Excelente", pur: "Muy Bueno", mineral: "Bueno", eps: "Moderado" },
        fire: { label: "Resistencia al Fuego", pir: "Muy Bueno", pur: "Bueno", mineral: "Excelente", eps: "Bajo" },
        acoustic: { label: "Aislamiento Acústico", pir: "Moderado", pur: "Moderado", mineral: "Excelente", eps: "Bajo" },
        moisture: { label: "Resistencia a la Humedad", pir: "Excelente", pur: "Excelente", mineral: "Buena", eps: "Buena" },
        weight: { label: "Peso", pir: "Ligero", pur: "Ligero", mineral: "Pesado", eps: "Muy Ligero" },
        cost: { label: "Coste Relativo", pir: "Medio", pur: "Bajo–Medio", mineral: "Alto", eps: "Bajo" },
        bestFor: { label: "Ideal Para", pir: "Cubiertas y fachadas", pur: "Cámaras frigoríficas", mineral: "Obra con certificación de fuego", eps: "Divisorias y techos" },
      },
    },
    types: {
      pir: {
        tag: "Estándar del Sector",
        title: "PIR — Poliisocianurato",
        description: "El PIR es el núcleo de panel más especificado en la construcción moderna. Su estructura de celda cerrada ofrece la mayor resistencia térmica por milímetro disponible, lo que significa que paneles más delgados logran el mismo valor R que alternativas más gruesas. El PIR también tiene un mejor comportamiento ante el fuego en comparación con el poliuretano estándar.",
        strengths: ["Mayor eficiencia térmica por mm", "Comportamiento autoextinguible ante el fuego", "Excelente resistencia a la humedad", "Disponible en todos los espesores"],
        idealFor: "Cubiertas comerciales, fachadas industriales, instalaciones de cadena de frío",
      },
      pur: {
        tag: "Mejor Relación Calidad-Precio",
        title: "PUR — Poliuretano",
        description: "Los paneles PUR fueron la referencia del sector antes de que el PIR se impusiera. Siguen ofreciendo un excelente rendimiento de aislamiento a un coste menor, combinado con una resistencia excepcional a la entrada de agua. El PUR sigue siendo la opción preferida para proyectos de almacenamiento en frío donde el presupuesto es la principal restricción.",
        strengths: ["Aislamiento rentable", "Resistencia sobresaliente al agua", "Alta resistencia a la compresión", "Rendimiento probado en cadena de frío"],
        idealFor: "Cámaras frigoríficas, almacenes refrigerados, naves industriales económicas",
      },
      mineral: {
        tag: "Seguridad contra Incendios",
        title: "Lana Mineral — Rockwool",
        description: "La lana mineral es la única opción de núcleo no combustible disponible en la construcción con paneles sándwich. Alcanza las clasificaciones de resistencia al fuego más altas (hasta 240 minutos) y proporciona un amortiguamiento acústico excepcional. El inconveniente es un panel más pesado y un precio más alto, pero para proyectos que requieren compartimentación de fuego certificada, no hay sustituto.",
        strengths: ["No combustible — máximas clasificaciones de fuego", "Rendimiento acústico superior", "Químicamente inerte e imputrescible", "Requerido por muchos códigos de construcción"],
        idealFor: "Terminales de aeropuerto, hospitales, escuelas, edificios con compartimentación de fuego",
      },
      eps: {
        tag: "Ultraligero",
        title: "EPS — Poliestireno Expandido",
        description: "El EPS es el núcleo de panel más económico y ligero disponible. Aunque su rendimiento térmico y resistencia al fuego son menores que los del PIR o la lana mineral, destaca en aplicaciones donde las cargas estructurales son mínimas y el coste es el factor principal. Los paneles EPS se usan habitualmente en divisorias interiores, edificios agrícolas y estructuras temporales.",
        strengths: ["Opción de menor coste", "Extremadamente ligero", "Fácil de cortar y manipular en obra", "Buena resistencia a la humedad"],
        idealFor: "Divisorias interiores, naves agrícolas, edificios temporales, techos",
      },
    },
    cta: {
      title: "¿No Sabes Qué Panel Elegir?",
      description: "Usa nuestra Calculadora de Espesor para obtener una recomendación según tu aplicación y clima, o contacta directamente con nuestro equipo para un presupuesto personalizado.",
      primary: "Usar la Calculadora",
      secondary: "Solicitar Presupuesto",
    },
  },
};