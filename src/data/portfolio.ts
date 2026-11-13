/**
 * ─────────────────────────────────────────────────────────────
 *  TODO EL CONTENIDO DEL SITIO VIVE AQUÍ.
 *  Edita este archivo para actualizar textos, proyectos o enlaces;
 *  no necesitas tocar ningún componente.
 *  Las imágenes y el CV están en la carpeta /public.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Jesús David Valenzuela',
  fullName: 'Jesús David Valenzuela Arredondo',
  initials: 'DV',
  role: 'Estudiante de Ingeniería de Software, desarrollador full stack y diseñador UX/UI',
  location: 'Los Mochis, Sinaloa, México',
  availability: 'Disponible para estancia profesional desde enero de 2027',
  headline:
    'Estudiante de Ingeniería de Software. Construyo plataformas web full stack para organizaciones reales, desde el diseño de la interfaz hasta el despliegue en producción.',
  about: [
    'Soy estudiante de 7.º semestre de Ingeniería de Software en la Universidad Autónoma de Occidente, con promedio de 9.7/10. Me enfoco en el desarrollo web full stack, las bases de datos y el diseño de interfaces.',
    'Trabajo con React, TypeScript, Node.js y FastAPI, bases de datos PostgreSQL y Supabase, arquitecturas orientadas a servicios con Docker e integración de IA generativa. También tengo experiencia en robótica e IoT con Arduino y ESP32.',
    'Busco una estancia profesional a partir de enero de 2027, con disponibilidad inmediata, para aportar soluciones de software de calidad dentro de un equipo de desarrollo.',
  ],
  email: 'jesusdavidv2005@gmail.com',
  phone: '+52 668 195 0188',
  // Número de WhatsApp en formato internacional, solo dígitos (52 = México)
  whatsapp: '526681950188',
  whatsappMessage: 'Hola David, vi tu portafolio y me gustaría platicar contigo.',
  tagline: 'Frontend Development | UX/UI | Soluciones Tecnológicas',
  cvFile: 'cv-jesus-david-valenzuela.pdf',
  avatar: 'david.webp',
  socials: {
    github: 'https://github.com/Davidvzlaa',
    linkedin: '', // agrega tu URL de LinkedIn si tienes
  },
}

export const stats = [
  { value: '9.7', label: 'Promedio académico' },
  { value: '10+', label: 'Proyectos realizados' },
  { value: '1.er', label: 'Lugar en Innovación UAdeO' },
]

export const achievement = {
  title: '1.er lugar en Innovación Tecnológica',
  detail: 'Encuentro Lince de Emprendimiento (UAdeO) con LynxAcademy.',
}

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
}

/** Experiencia en proyectos reales (del más reciente al más antiguo) */
export const experience: Experience[] = [
  {
    role: 'Desarrollador Full Stack',
    company: 'Juventudes 2030 Sinaloa',
    period: 'Sep. 2026 — Actualidad',
    description: 'Plataforma web de gestión del programa estatal, usada por más de 40 embajadores.',
    highlights: [
      'Registro de actividades, evidencias y proyectos sociales alineados a los 17 ODS.',
      'Reportes por periodo con revisión administrativa, control de acceso por roles con seguridad a nivel de fila (RLS) y notificaciones en tiempo real.',
      'Automatización del cierre de periodos y recordatorios, sistema de insignias e importación masiva de embajadores.',
    ],
    tech: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Edge Functions', 'Realtime'],
  },
  {
    role: 'Desarrollador Full Stack',
    company: 'Yade Repostería',
    period: 'Oct. 2026 — Actualidad',
    description: 'Plataforma de catálogo digital y agendamiento de citas.',
    highlights: [
      'Arquitectura orientada a servicios (SOA): catálogo, citas, contenido y usuarios, cada uno con su propia API y base de datos.',
      'Catálogo digital, agenda de citas y panel administrativo con servicios contenerizados en Docker.',
    ],
    tech: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Desarrollador',
    company: 'Chatbot IA',
    period: 'Oct. 2026',
    description: 'Asistente virtual con IA generativa que guía al usuario paso a paso.',
    highlights: [
      'Integración con la API de Gemini para resolver dudas y acompañar procesos.',
      'Comportamiento del modelo configurado con instrucciones personalizadas e interfaz web interactiva.',
    ],
    tech: ['Python', 'Gemini API', 'Streamlit'],
  },
]

export type ProjectCategory = 'Web' | 'Escritorio' | 'UX/UI' | 'Robótica e IoT'

export type Project = {
  title: string
  subtitle: string
  description: string
  category: ProjectCategory
  tech: string[]
  images: string[] // rutas dentro de /public
  demo?: string
  repo?: string
  prototype?: string
  note?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'ByarShop',
    subtitle: 'E-commerce full stack',
    description:
      'Tienda en línea de artículos internacionales con catálogo dinámico, búsqueda y filtros, carrito, favoritos e historial de pedidos. Incluye panel administrativo de productos, marcas y órdenes con gráficas de ventas. Backend con autenticación JWT y validación con Zod.',
    category: 'Web',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express', 'PostgreSQL'],
    images: ['proyectos/byarshop-1.webp', 'proyectos/byarshop-2.webp', 'proyectos/byarshop-3.webp'],
    demo: 'https://byar-shop.vercel.app/',
    note: 'Acceso de demostración disponible mediante enlace de prueba.',
    featured: true,
  },
  {
    title: 'Colectivo Uno 61',
    subtitle: 'Gestión académica full stack',
    description:
      'Sistema web para una casa de artes: cartelera digital pública de eventos y producciones, portal para que los alumnos consulten horarios de clases y ensayos, y módulo administrativo para pase de lista y seguimiento de asistencia.',
    category: 'Web',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Supabase'],
    images: ['proyectos/colectivo-1.webp', 'proyectos/colectivo-2.webp', 'proyectos/colectivo-3.webp'],
    demo: 'https://colectivouno61.vercel.app/',
    note: 'Acceso de demostración disponible mediante enlace de prueba.',
    featured: true,
  },
  {
    title: 'EcomTrack',
    subtitle: 'Administración de ventas full stack',
    description:
      'Aplicación para la administración corporativa y simulación del ciclo de ventas de una empresa de electrónica. Interfaz fluida conectada a un backend en capas, con control de productos y transacciones sobre una base de datos relacional.',
    category: 'Web',
    tech: ['React', 'Vite', 'Tailwind CSS', 'ASP.NET Core', 'SQL Server'],
    images: ['proyectos/ecomtrack-1.webp'],
    demo: 'https://ecomtrack.vercel.app/',
  },
  {
    title: 'LynxAcademy',
    subtitle: 'Plataforma educativa, diseño UX/UI',
    description:
      'Prototipo de alta fidelidad que conecta a estudiantes de la UAdeO con asesores académicos: agendamiento según perfil, nivel y evaluación del tutor, más un foro por carreras. Ganador del 1.er lugar en Innovación del Encuentro Lince de Emprendimiento.',
    category: 'UX/UI',
    tech: ['Figma', 'UX Research', 'Prototipado'],
    images: ['proyectos/lynx-1.webp', 'proyectos/lynx-2.webp', 'proyectos/lynx-3.webp'],
    prototype:
      'https://www.figma.com/proto/fFiJrrSrzpklaUro70vrXT/LYNX-ACADEMY?node-id=31-990&starting-point-node-id=10%3A41',
    featured: true,
  },
  {
    title: 'Sistema de Punto de Venta',
    subtitle: 'Aplicación de escritorio en C#',
    description:
      'Software para el control de operaciones comerciales: usuarios por roles, inventario, clientes y proveedores, flujo de ventas ágil y módulo de analítica que exporta reportes a PDF y Excel.',
    category: 'Escritorio',
    tech: ['C#', 'Windows Forms', 'SQL Server Express'],
    images: ['proyectos/pos-1.webp', 'proyectos/pos-2.webp'],
    repo: 'https://github.com/AldoHassiel/SistemaVenta',
    note: 'Proyecto colaborativo.',
  },
  {
    title: 'Vehículo Robótico Autónomo',
    subtitle: 'Navegación autónoma y telemetría',
    description:
      'Robot móvil con teleoperación y conducción autónoma: evasión de obstáculos en tiempo real con sensores ultrasónicos y control remoto multiplataforma por Wi-Fi, Bluetooth e infrarrojo.',
    category: 'Robótica e IoT',
    tech: ['Arduino', 'C/C++', 'Wi-Fi / Bluetooth / IR', 'Sensores ultrasónicos'],
    images: ['proyectos/robot-1.webp'],
  },
  {
    title: 'DEYSA House',
    subtitle: 'Domótica y control IoT',
    description:
      'Automatización residencial controlada desde una app móvil por Wi-Fi: iluminación regulable por habitación, portón inteligente con servomotores y temporizadores para una pared hidráulica, todo sobre un ESP32.',
    category: 'Robótica e IoT',
    tech: ['ESP32', 'C/C++', 'Servomotores', 'Relés'],
    images: ['proyectos/deysa-1.webp', 'proyectos/deysa-2.webp', 'proyectos/deysa-3.webp'],
  },
  {
    title: 'Brazo Robótico Articulado',
    subtitle: 'Manipulación con múltiples grados de libertad',
    description:
      'Diseño, ensamblaje y programación de un brazo robótico con control cinemático de precisión y secuencias de movimiento sincronizado de servomotores.',
    category: 'Robótica e IoT',
    tech: ['Arduino', 'PWM', 'Servomotores', 'C/C++'],
    images: [],
  },
  {
    title: 'Sistema Automatizado de Despacho',
    subtitle: 'Simulación de máquina expendedora',
    description:
      'Prototipo mecatrónico a escala: firmware y circuito de control que sincroniza sensores de estado con relés y actuadores para despachar productos de forma automática.',
    category: 'Robótica e IoT',
    tech: ['Arduino', 'Relés', 'Actuadores', 'C/C++'],
    images: [],
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Lenguajes', items: ['JavaScript', 'TypeScript', 'Python', 'C#', 'SQL', 'HTML', 'CSS', 'C/C++'] },
  {
    group: 'Frameworks y librerías',
    items: ['React', 'Vite', 'Node.js / Express', 'FastAPI', 'ASP.NET Core', 'Tailwind CSS', 'shadcn/ui', 'Streamlit'],
  },
  {
    group: 'Bases de datos y nube',
    items: ['PostgreSQL', 'Supabase', 'SQL Server', 'Docker', 'Vercel', 'Render', 'APIs REST', 'Arquitectura SOA'],
  },
  {
    group: 'Herramientas e IA',
    items: ['Git / GitHub', 'VS Code', 'Figma', 'Illustrator', 'After Effects', 'Gemini API', 'GitHub Copilot'],
  },
]

export const softSkills = [
  'Comunicación asertiva',
  'Trabajo en equipo',
  'Liderazgo y coordinación',
  'Resolución de problemas',
  'Pensamiento analítico',
  'Aprendizaje autodidacta',
  'Adaptabilidad',
]

export const languages = ['Español (nativo)', 'Inglés (B1, intermedio)']

export const education = [
  {
    degree: 'Ingeniería de Software',
    school: 'Universidad Autónoma de Occidente, Los Mochis',
    period: '2023 — Presente',
    detail: '7.º semestre, promedio 9.7/10. Egreso esperado en junio de 2027.',
  },
]

export const certifications = [
  { name: 'Diplomado en Cómputo en la Nube', issuer: 'Capacítate para el Empleo, Fundación Carlos Slim', year: '2026', url: '' },
  {
    name: 'Administración de Bases de Datos: Relacionales y No Relacionales',
    issuer: 'Capacítate para el Empleo',
    year: '2025',
    url: '',
  },
]
