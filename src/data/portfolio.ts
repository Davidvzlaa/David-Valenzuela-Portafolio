/**
 * ─────────────────────────────────────────────────────────────
 *  TODO EL CONTENIDO DEL SITIO VIVE AQUÍ, EN ESPAÑOL E INGLÉS.
 *
 *  - `shared`: datos que no se traducen (enlaces, imágenes, teléfono).
 *  - `projectBase`: datos de cada proyecto que no se traducen.
 *  - `es` y `en`: los textos. Tienen la misma forma; si cambias algo
 *    en uno, cámbialo también en el otro.
 *  - Las imágenes y los CV están en la carpeta /public.
 * ─────────────────────────────────────────────────────────────
 */

import type { TechKey } from '@/components/tech-logos'

export type Lang = 'es' | 'en'

export const SITE_URL = 'https://davidvalenzuelaportafolio.vercel.app'

/* ───────────── Datos compartidos (no se traducen) ───────────── */

export const shared = {
  fullName: 'Jesús David Valenzuela Arredondo',
  email: 'jesusdavidv2005@gmail.com',
  phone: '+52 668 195 0188',
  // WhatsApp en formato internacional, solo dígitos (52 = México)
  whatsapp: '526681950188',
  avatar: 'david.webp',
  cv: { es: 'cv-jesus-david-valenzuela.pdf', en: 'cv-jesus-david-valenzuela-en.pdf' },
  socials: {
    github: 'https://github.com/Davidvzlaa',
    linkedin: '', // pega aquí la URL de tu LinkedIn y el ícono aparece solo
  },
  /** Logos que aparecen en el inicio */
  heroStack: ['react', 'typescript', 'nodejs', 'python', 'fastapi', 'postgresql', 'supabase', 'docker', 'tailwind', 'figma'] as TechKey[],
  /** Stack tecnológico por grupo (los nombres de grupo se traducen en es/en.skillGroups) */
  skillGroups: [
    { id: 'frontend', techs: ['react', 'typescript', 'javascript', 'html', 'css', 'tailwind', 'shadcn', 'vite'] },
    { id: 'backend', techs: ['nodejs', 'express', 'python', 'fastapi', 'dotnet', 'postgresql', 'supabase'] },
    { id: 'cloud', techs: ['docker', 'vercel', 'render', 'git', 'github', 'figma'] },
    { id: 'ai', techs: ['gemini', 'streamlit', 'arduino', 'espressif', 'cplusplus'] },
  ] as { id: 'frontend' | 'backend' | 'cloud' | 'ai'; techs: TechKey[] }[],
  /** Cifras reales (las etiquetas se traducen en es/en.stats) */
  stats: [
    { id: 'gpa', value: '9.7' },
    { id: 'projects', value: '10+' },
    { id: 'users', value: '40+' },
    { id: 'award', value: '1.º' },
  ] as { id: 'gpa' | 'projects' | 'users' | 'award'; value: string }[],
}

export type ProjectCategory = 'web' | 'ux' | 'desktop' | 'ai' | 'robotics'

type ProjectBase = {
  /** Identificador para el enlace directo: …/#proyecto-<id> */
  id: string
  category: ProjectCategory
  tech: string[]
  images: string[] // rutas dentro de /public
  demo?: string
  repo?: string
  prototype?: string
  featured?: boolean
}

type ProjectText = {
  title: string
  subtitle: string
  summary: string
  note?: string
  caseStudy?: {
    problem: string
    role: string
    decisions: string[]
    results: string[]
  }
}

const projectBase: ProjectBase[] = [
  {
    id: 'juventudes-2030',
    category: 'web',
    tech: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Auth', 'Storage', 'Realtime', 'Edge Functions'],
    images: [], // [PENDIENTE] agrega capturas en public/proyectos/ y sus rutas aquí
    featured: true,
  },
  {
    id: 'yade-reposteria',
    category: 'web',
    tech: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'SOA'],
    images: [], // [PENDIENTE]
    featured: true,
  },
  {
    id: 'byarshop',
    category: 'web',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Zod'],
    images: ['proyectos/byarshop-1.webp', 'proyectos/byarshop-2.webp', 'proyectos/byarshop-3.webp'],
    demo: 'https://byar-shop.vercel.app/',
    featured: true,
  },
  {
    id: 'colectivo-uno-61',
    category: 'web',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Supabase'],
    images: ['proyectos/colectivo-1.webp', 'proyectos/colectivo-2.webp', 'proyectos/colectivo-3.webp'],
    demo: 'https://colectivouno61.vercel.app/',
    featured: true,
  },
  {
    id: 'lynxacademy',
    category: 'ux',
    tech: ['Figma', 'UX Research', 'Prototyping'],
    images: ['proyectos/lynx-1.webp', 'proyectos/lynx-2.webp', 'proyectos/lynx-3.webp'],
    prototype:
      'https://www.figma.com/proto/fFiJrrSrzpklaUro70vrXT/LYNX-ACADEMY?node-id=31-990&starting-point-node-id=10%3A41',
    featured: true,
  },
  {
    id: 'chatbot-ia',
    category: 'ai',
    tech: ['Python', 'Gemini API', 'Streamlit'],
    images: [], // [PENDIENTE]
  },
  {
    id: 'ecomtrack',
    category: 'web',
    tech: ['React', 'Vite', 'Tailwind CSS', 'ASP.NET Core', 'SQL Server'],
    images: ['proyectos/ecomtrack-1.webp'],
    demo: 'https://ecomtrack.vercel.app/',
  },
  {
    id: 'punto-de-venta',
    category: 'desktop',
    tech: ['C#', 'Windows Forms', 'SQL Server Express'],
    images: ['proyectos/pos-1.webp', 'proyectos/pos-2.webp'],
    repo: 'https://github.com/AldoHassiel/SistemaVenta',
  },
  {
    id: 'vehiculo-autonomo',
    category: 'robotics',
    tech: ['Arduino', 'C/C++', 'Wi-Fi / Bluetooth / IR', 'Ultrasonic sensors'],
    images: ['proyectos/robot-1.webp'],
  },
  {
    id: 'deysa-house',
    category: 'robotics',
    tech: ['ESP32', 'C/C++', 'Servo motors', 'Relays'],
    images: ['proyectos/deysa-1.webp', 'proyectos/deysa-2.webp', 'proyectos/deysa-3.webp'],
  },
  {
    id: 'brazo-robotico',
    category: 'robotics',
    tech: ['Arduino', 'PWM', 'Servo motors', 'C/C++'],
    images: [], // [PENDIENTE]
  },
  {
    id: 'despacho-automatizado',
    category: 'robotics',
    tech: ['Arduino', 'Relays', 'Actuators', 'C/C++'],
    images: [], // [PENDIENTE]
  },
]

/* ───────────────────────────── Español ───────────────────────────── */

const es = {
  meta: {
    title: 'Jesús David Valenzuela — Ingeniero de Software',
    description:
      'Portafolio y CV de Jesús David Valenzuela Arredondo, estudiante de Ingeniería de Software: desarrollo full stack, frontend, UX/UI y robótica.',
  },
  ui: {
    nav: { about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', contact: 'Contacto' },
    contactCta: 'Contactar',
    eyebrows: { about: 'Sobre mí', experience: 'Trayectoria', projects: 'Portafolio', stack: 'Stack tecnológico', contact: 'Trabajemos juntos' },
    hello: 'Hola, soy',
    techIWorkWith: 'Tecnologías con las que trabajo',
    findMe: 'Encuéntrame en',
    aboutHeading: 'Desarrollo software que resuelve problemas reales.',
    info: { name: 'Nombre', email: 'Correo', location: 'Ubicación', availability: 'Disponibilidad', gpa: 'Promedio', languages: 'Idiomas' },
    projectsHeading: 'Trabajo seleccionado',
    all: 'Todos',
    stackHeading: 'Tecnologías que domino',
    contactHeading: '¿Tienes una vacante o un proyecto?',
    phoneLabel: 'Teléfono y WhatsApp',
    footerTagline: 'Software full stack, del diseño al despliegue.',
    quickLinks: 'Navegación',
    followMe: 'Sígueme',
    resume: 'Currículum',
    madeWith: 'Hecho con React, Tailwind CSS y shadcn/ui.',
    viewProjects: 'Ver proyectos',
    downloadCv: 'Descargar CV',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    skipToContent: 'Saltar al contenido',
    langSwitch: 'EN',
    langSwitchLabel: 'View the site in English',
    themeToDark: 'Cambiar a modo oscuro',
    themeToLight: 'Cambiar a modo claro',
    facts: { gpa: 'Promedio', degree: 'Carrera', available: 'Disponible', location: 'Ubicación' },
    education: 'Educación',
    directContact: 'Contacto directo',
    aboutTitle: 'Sobre mí',
    experienceTitle: 'Experiencia',
    experienceIntro:
      'Proyectos para organizaciones reales en los que participo como desarrollador, del modelo de datos al despliegue.',
    viewCase: 'Ver el caso',
    projectsTitle: 'Proyectos técnicos',
    projectsIntro:
      'Plataformas web en producción, prototipos de producto y sistemas embebidos. Abre cualquier proyecto para ver el caso completo.',
    moreProjects: 'Más proyectos',
    viewDetails: 'Ver caso completo',
    images: (n: number) => `${n} ${n === 1 ? 'imagen' : 'imágenes'}`,
    imagesSoon: 'Capturas próximamente',
    openSite: 'Abrir sitio',
    openPrototype: 'Abrir prototipo en Figma',
    viewCode: 'Ver código',
    copyLink: 'Copiar enlace',
    linkCopied: 'Enlace copiado',
    close: 'Cerrar',
    prevImage: 'Imagen anterior',
    nextImage: 'Imagen siguiente',
    showImage: (n: number) => `Mostrar imagen ${n}`,
    caseProblem: 'El reto',
    caseRole: 'Mi papel',
    caseDecisions: 'Decisiones técnicas',
    caseResults: 'Resultados',
    caseSummary: 'Descripción',
    techTitle: 'Tecnologías',
    skillsTitle: 'Habilidades',
    skillsIntro: 'Las herramientas con las que construyo, de la interfaz a la base de datos.',
    howIWork: 'Cómo trabajo',
    languages: 'Idiomas',
    certifications: 'Certificaciones',
    contactTitle: ['Hablemos', 'de tu proyecto'],
    contactIntro:
      'Busco una estancia profesional a partir de enero de 2027. Escríbeme por WhatsApp o por correo y te respondo el mismo día.',
    whatsappCta: 'Escríbeme por WhatsApp',
    copy: 'Copiar',
    copied: 'Copiado',
    form: {
      title: 'Envíame un mensaje',
      name: 'Tu nombre',
      company: 'Empresa u organización (opcional)',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre la vacante o el proyecto…',
      sendEmail: 'Enviar por correo',
      sendWhatsapp: 'Enviar por WhatsApp',
      required: 'Escribe tu nombre y un mensaje para continuar.',
      subject: (name: string) => `Contacto desde tu portafolio: ${name}`,
      greeting: 'Hola David,',
      signature: (name: string, company: string) => `— ${name}${company ? `, ${company}` : ''}`,
    },
    whatsappMessage: 'Hola David, vi tu portafolio y me gustaría platicar contigo.',
    categories: {
      web: 'Web',
      ux: 'UX/UI',
      desktop: 'Escritorio',
      ai: 'IA',
      robotics: 'Robótica e IoT',
    } as Record<ProjectCategory, string>,
  },
  profile: {
    /** Roles que se escriben y borran en el inicio */
    roles: ['Full Stack Developer', 'Diseñador UX/UI', 'Desarrollador Frontend', 'Creador de soluciones IoT'],
    tagline: 'Frontend Development | UX/UI | Soluciones Tecnológicas',
    location: 'Los Mochis, Sinaloa, México',
    availability: 'Disponible para estancia profesional desde enero de 2027',
    headline:
      'Estudiante de Ingeniería de Software. Construyo plataformas web full stack para organizaciones reales, desde el diseño de la interfaz hasta el despliegue en producción.',
    about: [
      'Soy estudiante de 7.º semestre de Ingeniería de Software en la Universidad Autónoma de Occidente, con promedio de 9.7/10. Me enfoco en el desarrollo web full stack, las bases de datos y el diseño de interfaces.',
      'Trabajo con React, TypeScript, Node.js y FastAPI, bases de datos PostgreSQL y Supabase, arquitecturas orientadas a servicios con Docker e integración de IA generativa. También tengo experiencia en robótica e IoT con Arduino y ESP32.',
      'Busco una estancia profesional a partir de enero de 2027, con disponibilidad inmediata, para aportar soluciones de software de calidad dentro de un equipo de desarrollo.',
    ],
    facts: {
      gpa: '9.7 / 10',
      degree: 'Ingeniería de Software, 7.º semestre',
      available: 'Enero de 2027',
      location: 'Los Mochis, Sinaloa',
    },
  },
  achievement: {
    title: '1.er lugar en Innovación Tecnológica',
    detail: 'Encuentro Lince de Emprendimiento (UAdeO) con LynxAcademy.',
  },
  experience: [
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
      projectId: 'juventudes-2030',
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
      projectId: 'yade-reposteria',
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
      projectId: 'chatbot-ia',
    },
  ],
  projects: {
    'juventudes-2030': {
      title: 'Juventudes 2030 Sinaloa',
      subtitle: 'Plataforma de gestión de un programa estatal',
      summary:
        'Plataforma donde más de 40 embajadores del programa registran actividades, evidencias y proyectos sociales alineados a los 17 Objetivos de Desarrollo Sostenible, con revisión administrativa por periodos.',
      caseStudy: {
        problem:
          'El programa necesitaba un lugar único para que sus embajadores registraran actividades y evidencias, y para que el equipo administrativo las revisara por periodo sin perder el control de quién ve qué.',
        role: 'Desarrollador full stack en un equipo colaborativo: modelo de datos, seguridad, automatizaciones e interfaz.',
        decisions: [
          'Supabase como backend completo: PostgreSQL, autenticación, almacenamiento de evidencias, tiempo real y Edge Functions.',
          'Control de acceso por roles con seguridad a nivel de fila (RLS), para que cada usuario solo vea y edite lo que le corresponde.',
          'Notificaciones en tiempo real y procesos automáticos para el cierre de periodos y los recordatorios.',
        ],
        results: [
          'En uso por más de 40 embajadores del programa.',
          'Reportes por periodo con flujo de revisión administrativa.',
          'Sistema de insignias e importación masiva de embajadores.',
        ],
      },
    },
    'yade-reposteria': {
      title: 'Yade Repostería',
      subtitle: 'Catálogo digital y agenda de citas',
      summary:
        'Plataforma para un negocio de repostería con catálogo digital, agendamiento de citas y panel administrativo, construida con una arquitectura orientada a servicios.',
      caseStudy: {
        problem:
          'El negocio necesitaba mostrar su catálogo en línea y organizar las citas de sus clientes en un solo sistema que pudiera crecer por partes.',
        role: 'Desarrollador full stack: arquitectura, servicios backend y frontend.',
        decisions: [
          'Arquitectura orientada a servicios (SOA): catálogo, citas, contenido y usuarios como servicios independientes, cada uno con su propia API y base de datos.',
          'Servicios en FastAPI (Python) con PostgreSQL, contenerizados en Docker.',
          'Frontend en React que consume cada servicio por separado.',
        ],
        results: [
          'Catálogo digital, agenda de citas y panel administrativo funcionando como servicios separados.',
          'Cada parte se puede actualizar o escalar sin afectar a las demás.',
        ],
      },
    },
    byarshop: {
      title: 'ByarShop',
      subtitle: 'E-commerce full stack',
      summary:
        'Tienda en línea de artículos internacionales con catálogo dinámico, búsqueda y filtros, carrito, favoritos e historial de pedidos, más un panel administrativo con gráficas de ventas.',
      note: 'Acceso de demostración disponible mediante enlace de prueba.',
      caseStudy: {
        problem:
          'Un negocio de artículos internacionales necesitaba vender en línea y administrar su inventario, marcas y pedidos desde un solo lugar.',
        role: 'Desarrollador full stack en un proyecto colaborativo.',
        decisions: [
          'Frontend en React con TypeScript, Tailwind CSS y componentes shadcn/ui.',
          'API en Node.js y Express con autenticación JWT y validación de datos con Zod.',
          'Base de datos PostgreSQL; frontend desplegado en Vercel y backend en Render.',
        ],
        results: [
          'Experiencia de compra completa: catálogo, filtros, carrito, favoritos e historial de pedidos.',
          'Panel administrativo de productos, marcas y órdenes con gráficas de ventas.',
        ],
      },
    },
    'colectivo-uno-61': {
      title: 'Colectivo Uno 61',
      subtitle: 'Gestión académica para una casa de artes',
      summary:
        'Sistema web con cartelera pública de eventos, portal para que los alumnos consulten sus horarios y ensayos, y módulo administrativo para pase de lista y asistencia.',
      note: 'Acceso de demostración disponible mediante enlace de prueba.',
      caseStudy: {
        problem: 'La casa de artes difundía sus eventos y organizaba horarios y asistencia de forma manual y dispersa.',
        role: 'Desarrollador full stack.',
        decisions: [
          'Una sola plataforma con tres públicos: visitantes, alumnos e instructores.',
          'React, TypeScript y shadcn/ui en el frontend; Node.js y Supabase en el backend.',
        ],
        results: [
          'Cartelera digital pública de eventos y producciones.',
          'Los alumnos consultan sus horarios de clases y ensayos en línea.',
          'Los instructores pasan lista y dan seguimiento a la asistencia desde el sistema.',
        ],
      },
    },
    lynxacademy: {
      title: 'LynxAcademy',
      subtitle: 'Plataforma educativa, diseño UX/UI',
      summary:
        'Prototipo de alta fidelidad que conecta a estudiantes de la UAdeO con asesores académicos. Ganador del 1.er lugar en Innovación del Encuentro Lince de Emprendimiento.',
      caseStudy: {
        problem:
          'A los estudiantes de la UAdeO les costaba encontrar asesores académicos adecuados para sus dudas y agendar con ellos.',
        role: 'Diseñador UX/UI: investigación, flujos de navegación y prototipo de alta fidelidad en Figma.',
        decisions: [
          'Agendamiento personalizado según el perfil, el nivel de experiencia y la evaluación del tutor.',
          'Foro interactivo organizado por carreras para resolver dudas con el apoyo de la comunidad y los docentes.',
        ],
        results: [
          '1.er lugar en Innovación Tecnológica en el Encuentro Lince de Emprendimiento (UAdeO).',
          'Prototipo navegable con interfaces, navegación y flujos de interacción definidos.',
        ],
      },
    },
    'chatbot-ia': {
      title: 'Chatbot IA',
      subtitle: 'Asistente virtual con IA generativa',
      summary:
        'Asistente virtual que usa la API de Gemini para resolver dudas y guiar al usuario paso a paso en distintos procesos, con una interfaz web interactiva.',
      caseStudy: {
        problem: 'Los usuarios necesitaban orientación paso a paso en procesos que solían generar muchas dudas repetidas.',
        role: 'Desarrollador.',
        decisions: [
          'Integración con la API de Gemini.',
          'Comportamiento del modelo configurado con instrucciones personalizadas.',
          'Interfaz web interactiva construida con Streamlit.',
        ],
        results: ['Asistente que responde dudas y acompaña al usuario en cada paso del proceso.'],
      },
    },
    ecomtrack: {
      title: 'EcomTrack',
      subtitle: 'Administración de ventas full stack',
      summary:
        'Aplicación para la administración corporativa y la simulación del ciclo de ventas de una empresa de electrónica, con un backend en capas y base de datos relacional.',
    },
    'punto-de-venta': {
      title: 'Sistema de Punto de Venta',
      subtitle: 'Aplicación de escritorio en C#',
      summary:
        'Software para el control de operaciones comerciales: usuarios por roles, inventario, clientes y proveedores, flujo de ventas ágil y reportes exportables a PDF y Excel.',
      note: 'Proyecto colaborativo.',
    },
    'vehiculo-autonomo': {
      title: 'Vehículo Robótico Autónomo',
      subtitle: 'Navegación autónoma y telemetría',
      summary:
        'Robot móvil con teleoperación y conducción autónoma: evasión de obstáculos en tiempo real con sensores ultrasónicos y control remoto por Wi-Fi, Bluetooth e infrarrojo.',
    },
    'deysa-house': {
      title: 'DEYSA House',
      subtitle: 'Domótica y control IoT',
      summary:
        'Automatización residencial controlada desde una app móvil por Wi-Fi: iluminación regulable por habitación, portón inteligente con servomotores y temporizadores para una pared hidráulica, todo sobre un ESP32.',
    },
    'brazo-robotico': {
      title: 'Brazo Robótico Articulado',
      subtitle: 'Manipulación con varios grados de libertad',
      summary:
        'Diseño, ensamblaje y programación de un brazo robótico con control cinemático de precisión y secuencias de movimiento sincronizado de servomotores.',
    },
    'despacho-automatizado': {
      title: 'Sistema Automatizado de Despacho',
      subtitle: 'Simulación de máquina expendedora',
      summary:
        'Prototipo mecatrónico a escala: firmware y circuito de control que sincroniza sensores de estado con relés y actuadores para despachar productos de forma automática.',
    },
  } as Record<string, ProjectText>,
  servicesEyebrow: 'Qué hago',
  servicesTitle: 'Cómo puedo aportar a tu equipo',
  services: [
    { icon: 'code', title: 'Desarrollo web full stack', text: 'Aplicaciones con React y TypeScript conectadas a APIs en Node.js o FastAPI, del modelo de datos al despliegue.' },
    { icon: 'design', title: 'Diseño UX/UI', text: 'Prototipos en Figma, flujos de navegación e interfaces claras, accesibles y responsivas.' },
    { icon: 'database', title: 'Bases de datos y nube', text: 'PostgreSQL y Supabase con seguridad por roles (RLS), servicios en Docker y despliegue en Vercel y Render.' },
    { icon: 'ai', title: 'IA e IoT', text: 'Asistentes con IA generativa (Gemini) y prototipos con Arduino y ESP32 controlados por Wi-Fi.' },
  ] as { icon: 'code' | 'design' | 'database' | 'ai'; title: string; text: string }[],
  stats: { gpa: 'Promedio académico', projects: 'Proyectos realizados', users: 'Usuarios en Juventudes 2030', award: 'Lugar en Innovación UAdeO' },
  skillGroups: { frontend: 'Frontend', backend: 'Backend y bases de datos', cloud: 'Nube y herramientas', ai: 'IA e IoT' },
  skills: [
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
  ],
  softSkills: [
    'Comunicación asertiva',
    'Trabajo en equipo',
    'Liderazgo y coordinación',
    'Resolución de problemas',
    'Pensamiento analítico',
    'Aprendizaje autodidacta',
    'Adaptabilidad',
  ],
  languages: ['Español (nativo)', 'Inglés (B1, intermedio)'],
  education: [
    {
      degree: 'Ingeniería de Software',
      school: 'Universidad Autónoma de Occidente, Los Mochis',
      period: '2023 — Presente',
      detail: '7.º semestre, promedio 9.7/10. Egreso esperado en junio de 2027.',
    },
  ],
  certifications: [
    { name: 'Diplomado en Cómputo en la Nube', issuer: 'Capacítate para el Empleo, Fundación Carlos Slim', year: '2026', url: '' },
    {
      name: 'Administración de Bases de Datos: Relacionales y No Relacionales',
      issuer: 'Capacítate para el Empleo',
      year: '2025',
      url: '',
    },
  ],
}

export type Content = typeof es

/* ───────────────────────────── English ───────────────────────────── */

const en: Content = {
  meta: {
    title: 'Jesús David Valenzuela — Software Engineer',
    description:
      'Portfolio and résumé of Jesús David Valenzuela Arredondo, Software Engineering student: full stack web development, frontend, UX/UI and robotics.',
  },
  ui: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    contactCta: 'Contact',
    eyebrows: { about: 'About me', experience: 'Track record', projects: 'Portfolio', stack: 'Tech stack', contact: "Let's work together" },
    hello: "Hi, I'm",
    techIWorkWith: 'Technologies I work with',
    findMe: 'Find me on',
    aboutHeading: 'I build software that solves real problems.',
    info: { name: 'Name', email: 'Email', location: 'Location', availability: 'Availability', gpa: 'GPA', languages: 'Languages' },
    projectsHeading: 'Selected work',
    all: 'All',
    stackHeading: 'Technologies I master',
    contactHeading: 'Have a role or a project in mind?',
    phoneLabel: 'Phone & WhatsApp',
    footerTagline: 'Full stack software, from design to deployment.',
    quickLinks: 'Navigation',
    followMe: 'Follow me',
    resume: 'Résumé',
    madeWith: 'Built with React, Tailwind CSS and shadcn/ui.',
    viewProjects: 'View projects',
    downloadCv: 'Download résumé',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skipToContent: 'Skip to content',
    langSwitch: 'ES',
    langSwitchLabel: 'Ver el sitio en español',
    themeToDark: 'Switch to dark mode',
    themeToLight: 'Switch to light mode',
    facts: { gpa: 'GPA', degree: 'Degree', available: 'Available', location: 'Location' },
    education: 'Education',
    directContact: 'Direct contact',
    aboutTitle: 'About me',
    experienceTitle: 'Experience',
    experienceIntro: 'Projects for real organizations where I work as a developer, from the data model to deployment.',
    viewCase: 'View case study',
    projectsTitle: 'Technical projects',
    projectsIntro:
      'Production web platforms, product prototypes and embedded systems. Open any project to see the full case study.',
    moreProjects: 'More projects',
    viewDetails: 'View case study',
    images: (n: number) => `${n} ${n === 1 ? 'image' : 'images'}`,
    imagesSoon: 'Screenshots coming soon',
    openSite: 'Open site',
    openPrototype: 'Open Figma prototype',
    viewCode: 'View code',
    copyLink: 'Copy link',
    linkCopied: 'Link copied',
    close: 'Close',
    prevImage: 'Previous image',
    nextImage: 'Next image',
    showImage: (n: number) => `Show image ${n}`,
    caseProblem: 'The challenge',
    caseRole: 'My role',
    caseDecisions: 'Technical decisions',
    caseResults: 'Results',
    caseSummary: 'Overview',
    techTitle: 'Tech stack',
    skillsTitle: 'Skills',
    skillsIntro: 'The tools I build with, from the interface to the database.',
    howIWork: 'How I work',
    languages: 'Languages',
    certifications: 'Certifications',
    contactTitle: ["Let's talk", 'about your project'],
    contactIntro:
      "I'm looking for a professional internship starting January 2027. Message me on WhatsApp or by email and I'll reply the same day.",
    whatsappCta: 'Message me on WhatsApp',
    copy: 'Copy',
    copied: 'Copied',
    form: {
      title: 'Send me a message',
      name: 'Your name',
      company: 'Company or organization (optional)',
      message: 'Message',
      messagePlaceholder: 'Tell me about the role or the project…',
      sendEmail: 'Send by email',
      sendWhatsapp: 'Send on WhatsApp',
      required: 'Enter your name and a message to continue.',
      subject: (name: string) => `Contact from your portfolio: ${name}`,
      greeting: 'Hi David,',
      signature: (name: string, company: string) => `— ${name}${company ? `, ${company}` : ''}`,
    },
    whatsappMessage: "Hi David, I saw your portfolio and I'd like to talk with you.",
    categories: {
      web: 'Web',
      ux: 'UX/UI',
      desktop: 'Desktop',
      ai: 'AI',
      robotics: 'Robotics & IoT',
    },
  },
  profile: {
    roles: ['Full Stack Developer', 'UX/UI Designer', 'Frontend Developer', 'IoT Builder'],
    tagline: 'Frontend Development | UX/UI | Technology Solutions',
    location: 'Los Mochis, Sinaloa, Mexico',
    availability: 'Available for a professional internship from January 2027',
    headline:
      'Software Engineering student. I build full stack web platforms for real organizations, from interface design to production deployment.',
    about: [
      "I'm a 7th-semester Software Engineering student at Universidad Autónoma de Occidente with a 9.7/10 GPA. I focus on full stack web development, databases and interface design.",
      'I work with React, TypeScript, Node.js and FastAPI, PostgreSQL and Supabase databases, service-oriented architectures with Docker, and generative AI integrations. I also have experience in robotics and IoT with Arduino and ESP32.',
      "I'm looking for a professional internship starting January 2027, available immediately, to bring quality software solutions to a development team.",
    ],
    facts: {
      gpa: '9.7 / 10',
      degree: 'Software Engineering, 7th semester',
      available: 'January 2027',
      location: 'Los Mochis, Sinaloa',
    },
  },
  achievement: {
    title: '1st place in Technology Innovation',
    detail: 'Encuentro Lince de Emprendimiento (UAdeO) with LynxAcademy.',
  },
  experience: [
    {
      role: 'Full Stack Developer',
      company: 'Juventudes 2030 Sinaloa',
      period: 'Sep 2026 — Present',
      description: 'Management platform for a state program, used by more than 40 ambassadors.',
      highlights: [
        'Logging of activities, evidence and social projects aligned with the 17 SDGs.',
        'Period reports with administrative review, role-based access with row-level security (RLS) and real-time notifications.',
        'Automated period closing and reminders, a badge system and bulk import of ambassadors.',
      ],
      tech: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Edge Functions', 'Realtime'],
      projectId: 'juventudes-2030',
    },
    {
      role: 'Full Stack Developer',
      company: 'Yade Repostería',
      period: 'Oct 2026 — Present',
      description: 'Digital catalog and appointment booking platform.',
      highlights: [
        'Service-oriented architecture (SOA): catalog, appointments, content and users, each with its own API and database.',
        'Digital catalog, appointment booking and admin dashboard with services containerized in Docker.',
      ],
      tech: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Docker'],
      projectId: 'yade-reposteria',
    },
    {
      role: 'Developer',
      company: 'AI Chatbot',
      period: 'Oct 2026',
      description: 'Generative AI virtual assistant that guides users step by step.',
      highlights: [
        'Integration with the Gemini API to answer questions and guide users through processes.',
        'Model behavior configured with custom instructions and an interactive web interface.',
      ],
      tech: ['Python', 'Gemini API', 'Streamlit'],
      projectId: 'chatbot-ia',
    },
  ],
  projects: {
    'juventudes-2030': {
      title: 'Juventudes 2030 Sinaloa',
      subtitle: 'Management platform for a state program',
      summary:
        'Platform where more than 40 program ambassadors log activities, evidence and social projects aligned with the 17 Sustainable Development Goals, with administrative review by period.',
      caseStudy: {
        problem:
          'The program needed a single place for ambassadors to log activities and evidence, and for the admin team to review them by period while keeping control over who can see what.',
        role: 'Full stack developer on a collaborative team: data model, security, automations and interface.',
        decisions: [
          'Supabase as the full backend: PostgreSQL, authentication, evidence storage, real-time and Edge Functions.',
          'Role-based access with row-level security (RLS), so each user only sees and edits what belongs to them.',
          'Real-time notifications and automated processes for period closing and reminders.',
        ],
        results: [
          'Used by more than 40 program ambassadors.',
          'Period reports with an administrative review flow.',
          'Badge system and bulk import of ambassadors.',
        ],
      },
    },
    'yade-reposteria': {
      title: 'Yade Repostería',
      subtitle: 'Digital catalog and appointment booking',
      summary:
        'Platform for a bakery business with a digital catalog, appointment booking and an admin dashboard, built on a service-oriented architecture.',
      caseStudy: {
        problem:
          'The business needed to show its catalog online and organize customer appointments in a single system that could grow piece by piece.',
        role: 'Full stack developer: architecture, backend services and frontend.',
        decisions: [
          'Service-oriented architecture (SOA): catalog, appointments, content and users as independent services, each with its own API and database.',
          'Services built with FastAPI (Python) and PostgreSQL, containerized in Docker.',
          'React frontend that consumes each service separately.',
        ],
        results: [
          'Digital catalog, appointment booking and admin dashboard running as separate services.',
          'Each part can be updated or scaled without affecting the others.',
        ],
      },
    },
    byarshop: {
      title: 'ByarShop',
      subtitle: 'Full stack e-commerce',
      summary:
        'Online store for international products with a dynamic catalog, search and filters, cart, favorites and order history, plus an admin dashboard with sales charts.',
      note: 'Demo access available through a test link.',
      caseStudy: {
        problem:
          'A business selling international products needed to sell online and manage its inventory, brands and orders from one place.',
        role: 'Full stack developer on a collaborative project.',
        decisions: [
          'React frontend with TypeScript, Tailwind CSS and shadcn/ui components.',
          'Node.js and Express API with JWT authentication and data validation with Zod.',
          'PostgreSQL database; frontend deployed on Vercel and backend on Render.',
        ],
        results: [
          'Complete shopping experience: catalog, filters, cart, favorites and order history.',
          'Admin dashboard for products, brands and orders with sales charts.',
        ],
      },
    },
    'colectivo-uno-61': {
      title: 'Colectivo Uno 61',
      subtitle: 'Academic management for an arts school',
      summary:
        'Web system with a public events billboard, a portal where students check their class and rehearsal schedules, and an admin module for attendance.',
      note: 'Demo access available through a test link.',
      caseStudy: {
        problem: 'The arts school promoted its events and handled schedules and attendance manually and in scattered places.',
        role: 'Full stack developer.',
        decisions: [
          'A single platform for three audiences: visitors, students and instructors.',
          'React, TypeScript and shadcn/ui on the frontend; Node.js and Supabase on the backend.',
        ],
        results: [
          'Public digital billboard for events and productions.',
          'Students check their class and rehearsal schedules online.',
          'Instructors take attendance and track it from the system.',
        ],
      },
    },
    lynxacademy: {
      title: 'LynxAcademy',
      subtitle: 'Educational platform, UX/UI design',
      summary:
        'High-fidelity prototype that connects UAdeO students with academic tutors. Winner of 1st place in Innovation at the Encuentro Lince de Emprendimiento.',
      caseStudy: {
        problem:
          'UAdeO students had a hard time finding the right academic tutors for their questions and booking time with them.',
        role: 'UX/UI designer: research, navigation flows and a high-fidelity prototype in Figma.',
        decisions: [
          "Personalized booking based on the tutor's profile, experience level and rating.",
          'Interactive forum organized by degree program to solve questions with support from the community and faculty.',
        ],
        results: [
          '1st place in Technology Innovation at the Encuentro Lince de Emprendimiento (UAdeO).',
          'Clickable prototype with defined interfaces, navigation and interaction flows.',
        ],
      },
    },
    'chatbot-ia': {
      title: 'AI Chatbot',
      subtitle: 'Generative AI virtual assistant',
      summary:
        'Virtual assistant that uses the Gemini API to answer questions and guide users step by step through different processes, with an interactive web interface.',
      caseStudy: {
        problem: 'Users needed step-by-step guidance in processes that usually generated many repeated questions.',
        role: 'Developer.',
        decisions: [
          'Integration with the Gemini API.',
          'Model behavior configured with custom instructions.',
          'Interactive web interface built with Streamlit.',
        ],
        results: ['Assistant that answers questions and walks users through each step of the process.'],
      },
    },
    ecomtrack: {
      title: 'EcomTrack',
      subtitle: 'Full stack sales management',
      summary:
        'Application for corporate management and sales-cycle simulation for an electronics company, with a layered backend and a relational database.',
    },
    'punto-de-venta': {
      title: 'Point of Sale System',
      subtitle: 'C# desktop application',
      summary:
        'Software to run retail operations: role-based users, inventory, customers and suppliers, a fast sales flow and reports exportable to PDF and Excel.',
      note: 'Collaborative project.',
    },
    'vehiculo-autonomo': {
      title: 'Autonomous Robotic Vehicle',
      subtitle: 'Autonomous navigation and telemetry',
      summary:
        'Mobile robot with teleoperation and autonomous driving: real-time obstacle avoidance with ultrasonic sensors and remote control over Wi-Fi, Bluetooth and infrared.',
    },
    'deysa-house': {
      title: 'DEYSA House',
      subtitle: 'Home automation and IoT control',
      summary:
        'Home automation controlled from a mobile app over Wi-Fi: dimmable lighting per room, a smart gate with servo motors and timers for a water wall, all running on an ESP32.',
    },
    'brazo-robotico': {
      title: 'Articulated Robotic Arm',
      subtitle: 'Multi-degree-of-freedom manipulation',
      summary:
        'Design, assembly and programming of a robotic arm with precise kinematic control and synchronized servo motion sequences.',
    },
    'despacho-automatizado': {
      title: 'Automated Dispensing System',
      subtitle: 'Vending machine simulation',
      summary:
        'Scale mechatronic prototype: firmware and control circuit that sync status sensors with relays and actuators to dispense products automatically.',
    },
  },
  servicesEyebrow: 'What I do',
  servicesTitle: 'How I can help your team',
  services: [
    { icon: 'code', title: 'Full stack web development', text: 'React and TypeScript apps connected to Node.js or FastAPI APIs, from the data model to deployment.' },
    { icon: 'design', title: 'UX/UI design', text: 'Figma prototypes, navigation flows and clear, accessible, responsive interfaces.' },
    { icon: 'database', title: 'Databases & cloud', text: 'PostgreSQL and Supabase with role-based security (RLS), Docker services and deployment on Vercel and Render.' },
    { icon: 'ai', title: 'AI & IoT', text: 'Generative AI assistants (Gemini) and Arduino and ESP32 prototypes controlled over Wi-Fi.' },
  ],
  stats: { gpa: 'GPA', projects: 'Projects built', users: 'Users on Juventudes 2030', award: 'Place in Innovation, UAdeO' },
  skillGroups: { frontend: 'Frontend', backend: 'Backend & databases', cloud: 'Cloud & tools', ai: 'AI & IoT' },
  skills: [
    { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C#', 'SQL', 'HTML', 'CSS', 'C/C++'] },
    {
      group: 'Frameworks & libraries',
      items: ['React', 'Vite', 'Node.js / Express', 'FastAPI', 'ASP.NET Core', 'Tailwind CSS', 'shadcn/ui', 'Streamlit'],
    },
    {
      group: 'Databases & cloud',
      items: ['PostgreSQL', 'Supabase', 'SQL Server', 'Docker', 'Vercel', 'Render', 'REST APIs', 'SOA'],
    },
    {
      group: 'Tools & AI',
      items: ['Git / GitHub', 'VS Code', 'Figma', 'Illustrator', 'After Effects', 'Gemini API', 'GitHub Copilot'],
    },
  ],
  softSkills: [
    'Assertive communication',
    'Teamwork',
    'Leadership and coordination',
    'Problem solving',
    'Analytical thinking',
    'Self-directed learning',
    'Adaptability',
  ],
  languages: ['Spanish (native)', 'English (B1, intermediate)'],
  education: [
    {
      degree: 'Software Engineering',
      school: 'Universidad Autónoma de Occidente, Los Mochis',
      period: '2023 — Present',
      detail: '7th semester, 9.7/10 GPA. Expected graduation: June 2027.',
    },
  ],
  certifications: [
    { name: 'Cloud Computing Diploma', issuer: 'Capacítate para el Empleo, Fundación Carlos Slim', year: '2026', url: '' },
    {
      name: 'Database Administration: Relational and Non-Relational',
      issuer: 'Capacítate para el Empleo',
      year: '2025',
      url: '',
    },
  ],
}

export const content: Record<Lang, Content> = { es, en }

export type Project = ProjectBase & ProjectText

/** Proyectos ya combinados con los textos del idioma elegido. */
export function getProjects(lang: Lang): Project[] {
  return projectBase.map((p) => ({ ...p, ...content[lang].projects[p.id] }))
}
