export type ProfileType = 'frontend' | 'fullstack';
export type Language = 'en' | 'es';

export interface Project {
  title: string;
  status?: 'completed' | 'in-progress';
  description: string;
  longDescription: string;
  timeline?: ProjectTimeline;
  techStack: string[];
  link: string;
  github: string;
  image: string;
  tags: ProfileType[];
}

export interface TimelineItem {
  label: string;
  done: boolean;
}

export interface TimelinePhase {
  title: string;
  items: TimelineItem[];
}

export interface ProjectTimeline {
  summary: string;
  marker: string;
  phases: TimelinePhase[];
}

export interface ProfileData {
  title: string;
  tagline: string;
  resumeLink: string;
  summary: string;
  philosophy: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  tags: ProfileType[];
}

export interface PortfolioContent {
  personal: {
    name: string;
    email: string;
    phone: string;
    location: string;
    socials: {
      github: string;
      linkedin: string;
    }
  };
  profiles: {
    fullstack: ProfileData;
    frontend: ProfileData;
  };
  experience: Experience[];
  projects: Project[];
  skills: {
    frontend: string[];
    backend: string[];
    devops: string[];
    soft: string[];
  };
  ui: {
    viewProjects: string;
    bookCall: string;
    viewResume: string;
    downloadResume: string;
    available: string;
    selectedProjects: string;
    selectedProjectsSubtitle: {
      fullstack: string;
      frontend: string;
    };
    viewCaseStudy: string;
    sourceCode: string;
    timelineLabel: string;
    timelineHint: string;
    hideTimeline: string;
    projectStatus: string;
    statusLabels: {
      completed: string;
      inProgress: string;
    };
    engineeringPhilosophy: string;
    yearsExperience: string;
    uptimeDelivered: string;
    currentFocus: string;
    technicalExpertise: string;
    technicalExpertiseSubtitle: {
      fullstack: string;
      frontend: string;
    };
    getInTouch: string;
    letsBuild: string;
    lookingForPartner: string;
    emailMe: string;
    hireMe: string;
    nav: {
      projects: string;
      about: string;
      skills: string;
      contact: string;
    };
    skillsCategories: {
      frontendCore: string;
      uiDesign: string;
      performance: string;
      tools: string;
      frontend: string;
      backend: string;
      aiMlData: string;
      coreSoft: string;
    };
    focusItems: {
      frontend: string[];
      fullstack: string[];
    };
  };
}

const commonData = {
  personal: {
    name: "Hector Leal",
    email: "leal.emiliano.hector@gmail.com",
    phone: "(811) 049-0681",
    location: "Monterrey, NL, Mexico",
    socials: {
      github: "https://github.com/no-c-123",
      linkedin: "https://www.linkedin.com/in/hector-leal-developer/",
    }
  },
  skills: {
    frontend: ["JavaScript", "TypeScript", "React", "Astro", "Tailwind CSS", "HTML/CSS"],
    backend: ["Node.js", "SQL", "NoSQL", "API Design", "Serverless"],
    devops: ["Git", "Docker", "AWS", "Azure", "GCP", "CI/CD", "Monitoring"],
    soft: ["Leadership", "Team Collaboration", "Problem-Solving", "Critical Thinking", "Communication", "Agile"]
  }
};

export const portfolioData: Record<Language, PortfolioContent> = {
  en: {
    ...commonData,
    ui: {
      viewProjects: "View Projects",
      bookCall: "Book a Call",
      viewResume: "View Resume",
      downloadResume: "Download PDF",
      available: "Available for select opportunities",
      selectedProjects: "Selected Projects",
      selectedProjectsSubtitle: {
        fullstack: "A selection of products spanning frontend systems, AI-assisted workflows, and native app exploration.",
        frontend: "A focused set of interfaces built for clarity, responsiveness, and production-ready polish."
      },
      viewCaseStudy: "Open Project",
      sourceCode: "Source Code",
      timelineLabel: "Release Path",
      timelineHint: "See Timeline",
      hideTimeline: "Hide Timeline",
      projectStatus: "Status",
      statusLabels: {
        completed: "Completed",
        inProgress: "In Progress"
      },
      engineeringPhilosophy: "Approach",
      yearsExperience: "Years Experience",
      uptimeDelivered: "Uptime Delivered",
      currentFocus: "Current Focus",
      technicalExpertise: "Capabilities",
      technicalExpertiseSubtitle: {
        fullstack: "A focused stack across product design, web engineering, and AI-enabled features.",
        frontend: "Interface systems centered on clarity, responsiveness, and durable implementation."
      },
      getInTouch: "Get in Touch",
      letsBuild: "Open to thoughtful product work.",
      lookingForPartner: "I design and build digital products end to end, with a strong focus on visual quality, performance, and execution.",
      emailMe: "Email Me",
      hireMe: "Hire Me",
      nav: {
        projects: "Projects",
        about: "About",
        skills: "Skills",
        contact: "Contact"
      },
      skillsCategories: {
        frontendCore: "Frontend Core",
        uiDesign: "UI & Design",
        performance: "Performance",
        tools: "Tools",
        frontend: "Frontend",
        backend: "Backend",
        aiMlData: "AI / ML & Data",
        coreSoft: "Core & Soft"
      },
      focusItems: {
        frontend: [
          "Designing clean interfaces with stronger visual hierarchy",
          "Refining motion so it supports usability without distraction",
          "Building responsive systems that remain fast under real content",
          "Keeping accessibility and semantics part of the implementation"
        ],
        fullstack: [
          "Shipping end-to-end products with careful frontend execution",
          "Designing backend flows that stay simple to operate",
          "Integrating AI features where they add practical product value",
          "Balancing performance, maintainability, and visual polish"
        ]
      }
    },
    profiles: {
      fullstack: {
        title: "Full-Stack Developer",
        tagline: "I build focused products with strong UX and dependable engineering.",
        resumeLink: "/resumes/Hector%20Leal%20CV.pdf",
        summary: "Software Engineering student building web and mobile products with a bias for clarity, performance, and thoughtful implementation.",
        philosophy: "I care about products that feel considered. The goal is to make complex functionality feel simple, fast, and reliable from the first interaction."
      },
      frontend: {
        title: "Frontend Developer",
        tagline: "I design and develop minimal interfaces with care for detail.",
        resumeLink: "/resumes/Hector%20Leal%20CV.pdf",
        summary: "Frontend developer focused on responsive interfaces, visual hierarchy, and fast experiences built with modern web tooling.",
        philosophy: "Good frontend work should feel effortless to use. I aim for restrained visuals, semantic structure, and interactions that support the content instead of competing with it."
      }
    },
    experience: [
      {
        company: "Mydilsa LG",
        role: "Frontend Developer",
        period: "May 2024 - Present",
        description: "Redesigned and developed the company website using Astro and Tailwind CSS, with an emphasis on responsiveness, clearer content structure, and faster page delivery across devices.",
        technologies: ["Astro", "Tailwind CSS", "Supabase", "Docker", "AWS"],
        tags: ["frontend", "fullstack"]
      }
    ],
    projects: [
      {
        title: "ResumeRoast",
        status: "completed",
        description: "AI resume review platform built to deliver clear, actionable feedback through a simple workflow.",
        longDescription: "Built a full-stack product that accepts resume uploads, processes them securely, and returns structured feedback in a clean interface. The platform combines a React frontend, Node.js services, Supabase, and AI integrations to keep the experience fast and easy to use.",
        timeline: {
          summary: "A full product cycle from foundation to a stable release, covering upload, auth, AI analysis, billing, builder features, and production hardening.",
          marker: "Completed",
          phases: [
            {
              title: "Phase 1 · Foundation & Marketing",
              items: [
                { label: "Astro, React, and Tailwind foundation was set up with the base project structure", done: true },
                { label: "Landing page, branding, shared layout, hero, pricing, and trust sections were built", done: true },
                { label: "Responsive polish, accessibility improvements, and navigation refinements were completed", done: true }
              ]
            },
            {
              title: "Phase 2 · Core Product MVP",
              items: [
                { label: "Resume upload flow was introduced in the main conversion path", done: true },
                { label: "Supabase authentication and account-aware navigation were integrated", done: true },
                { label: "Resume parsing and the first analysis workflows shipped as the MVP", done: true }
              ]
            },
            {
              title: "Phase 3 · Monetization & Builder",
              items: [
                { label: "Stripe checkout, subscription logic, and access controls were added", done: true },
                { label: "Resume builder v1 and version management were introduced", done: true },
                { label: "Builder interactions were expanded with sorting and AI-assisted editing tools", done: true }
              ]
            },
            {
              title: "Phase 4 · Reliability & Growth",
              items: [
                { label: "AI routing, error handling, and backend hardening were improved", done: true },
                { label: "Resume management, multilingual support, and optimization tooling were expanded", done: true },
                { label: "Password recovery, trial flows, and dashboard subscription controls were completed", done: true }
              ]
            },
            {
              title: "Phase 5 · Compliance & Release",
              items: [
                { label: "Legal pages, cookie consent, and broader PDF support were added", done: true },
                { label: "Billing fixes, validation, rate limiting, and launch offer cleanup were shipped", done: true },
                { label: "PDF generation improvements and final stabilization brought the product to a completed release state", done: true }
              ]
            }
          ]
        },
        techStack: ["React", "Node.js", "Supabase", "Tailwind CSS", "AI Integration"],
        link: "https://resumeroast.ai",
        github: "https://github.com/no-c-123/ResumeRoast",
        image: "/resumeroast.png",
        tags: ["fullstack", "frontend"]
      },
      {
        title: "Mydilsa LG PWA",
        status: "completed",
        description: "Responsive industrial website and PWA designed for speed, clarity, and mobile usability.",
        longDescription: "Designed and developed a mobile-first web presence for an industrial company with a stronger content hierarchy and a smoother browsing experience. The project uses Astro and Tailwind CSS, with progressive enhancement and performance-minded front-end decisions throughout.",
        timeline: {
          summary: "A focused public website rollout covering brand foundation, key pages, contact flow, production setup, and final navigation cleanup.",
          marker: "Completed",
          phases: [
            {
              title: "Phase 1 · Website Foundation",
              items: [
                { label: "Astro project foundation, shared layouts, and base configuration were established", done: true },
                { label: "Homepage, company positioning, social proof, and the primary contact CTA were created", done: true },
                { label: "Header, footer, and shared global styling were implemented for the public site", done: true }
              ]
            },
            {
              title: "Phase 2 · Frontend Rollout",
              items: [
                { label: "Responsive adaptation and UI refinements were completed across devices", done: true },
                { label: "A dedicated services page was launched with service listings and conversion-focused content", done: true },
                { label: "A products page was released to present offerings and guide visitors into inquiry flows", done: true }
              ]
            },
            {
              title: "Phase 3 · Lead Capture & Content",
              items: [
                { label: "The contact page and inquiry flow were added to support public lead capture", done: true },
                { label: "Deployment setup, dependency cleanup, and production fixes were completed", done: true },
                { label: "Media, renders, and supporting marketing content were expanded across the site", done: true }
              ]
            },
            {
              title: "Phase 4 · Final Refinements",
              items: [
                { label: "The contact form experience was refined with clearer handling and better submission states", done: true },
                { label: "The lead capture flow was simplified around direct email-based outreach", done: true },
                { label: "Navigation cleanup finalized the current public website experience", done: true }
              ]
            }
          ]
        },
        techStack: ["Astro", "Tailwind CSS", "PWA", "Accessibility", "Performance"],
        link: "https://www.mydilsa.com",
        github: "https://github.com/no-c-123/mydilsa-web",
        image: "/mydilsa.png",
        tags: ["frontend", "fullstack"]
      },
      {
        title: "GirokIQ",
        status: "in-progress",
        description: "In-progress iPad note-taking app with an infinite canvas for handwriting, text, and visual organization.",
        longDescription: "Building an iPad-native workspace that blends freeform ink with movable text and image blocks on a shared infinite canvas. The current implementation relies on SwiftUI, UIKit, PencilKit, Swift Concurrency, and Supabase for drawing, gesture-driven editing, authentication, and cloud-backed persistence.",
        timeline: {
          summary: "Compact release path focused on stabilization first, TestFlight next, and App Store submission after validation.",
          marker: "In Progress",
          phases: [
            {
              title: "Phase 1 · Core Product Locked",
              items: [
                { label: "Core note-taking, sync, auth, quota, and AI flows are in place", done: true },
                { label: "Apple-style iPad redesign and main navigation pass are complete", done: true },
                { label: "Packaging groundwork and signed build export are already working", done: true }
              ]
            },
            {
              title: "Phase 2 · Stabilization",
              items: [
                { label: "Canvas interactions and visual polish are being tightened", done: false },
                { label: "Cross-feature regression pass across sync, chat, settings, and editing is underway", done: false },
                { label: "Release scope needs to stay frozen to protect the launch window", done: false }
              ]
            },
            {
              title: "Phase 3 · TestFlight",
              items: [
                { label: "Run real-device QA for onboarding, offline flows, quota behavior, and AI chat", done: false },
                { label: "Validate multi-device sync behavior under current conflict rules", done: false },
                { label: "Ship an internal TestFlight build and clear blocking issues", done: false }
              ]
            },
            {
              title: "Phase 4 · App Store",
              items: [
                { label: "Finalize App Store Connect metadata, screenshots, and privacy answers", done: false },
                { label: "Confirm support links and submission details match the shipped app", done: false },
                { label: "Submit the release build and keep a review buffer for fast fixes", done: false }
              ]
            }
          ]
        },
        techStack: ["SwiftUI", "UIKit", "PencilKit", "Swift Concurrency", "Supabase", "Gesture System", "Infinite Canvas"],
        link: "https://girokiq.app",
        github: "#",
        image: "/GirokIQ.png",
        tags: ["fullstack", "frontend"]
      }
    ]
  },
  es: {
    ...commonData,
    ui: {
      viewProjects: "Ver Proyectos",
      bookCall: "Agendar Llamada",
      viewResume: "Ver Currículum",
      downloadResume: "Descargar PDF",
      available: "Disponible para oportunidades selectas",
      selectedProjects: "Proyectos Seleccionados",
      selectedProjectsSubtitle: {
        fullstack: "Una selección de productos entre sistemas frontend, flujos asistidos por IA y exploración nativa en iPad.",
        frontend: "Una selección de interfaces creadas con claridad, respuesta y acabado listo para producción."
      },
      viewCaseStudy: "Abrir Proyecto",
      sourceCode: "Código Fuente",
      timelineLabel: "Ruta de lanzamiento",
      timelineHint: "Ver timeline",
      hideTimeline: "Ocultar timeline",
      projectStatus: "Estado",
      statusLabels: {
        completed: "Completado",
        inProgress: "En progreso"
      },
      engineeringPhilosophy: "Enfoque",
      yearsExperience: "Años de Experiencia",
      uptimeDelivered: "Uptime Entregado",
      currentFocus: "Enfoque Actual",
      technicalExpertise: "Capacidades",
      technicalExpertiseSubtitle: {
        fullstack: "Un stack enfocado en producto, ingeniería web y funciones apoyadas por IA.",
        frontend: "Sistemas de interfaz centrados en claridad, respuesta y una implementación durable."
      },
      getInTouch: "Contáctame",
      letsBuild: "Disponible para producto digital bien ejecutado.",
      lookingForPartner: "Diseño y desarrollo productos digitales de punta a punta, con atención especial a la calidad visual, el rendimiento y la ejecución técnica.",
      emailMe: "Envíame un correo",
      hireMe: "Contrátame",
      nav: {
        projects: "Proyectos",
        about: "Sobre mí",
        skills: "Habilidades",
        contact: "Contacto"
      },
      skillsCategories: {
        frontendCore: "Frontend Core",
        uiDesign: "UI & Diseño",
        performance: "Rendimiento",
        tools: "Herramientas",
        frontend: "Frontend",
        backend: "Backend",
        aiMlData: "IA / ML & Datos",
        coreSoft: "Core & Habilidades Blandas"
      },
      focusItems: {
        frontend: [
          "Diseñando interfaces limpias con mejor jerarquía visual",
          "Refinando motion para que apoye la usabilidad sin distraer",
          "Construyendo sistemas responsivos que se mantengan rápidos con contenido real",
          "Manteniendo accesibilidad y semántica como parte de la implementación"
        ],
        fullstack: [
          "Lanzando productos end-to-end con atención al frontend",
          "Diseñando flujos backend simples de operar",
          "Integrando IA cuando aporta valor real al producto",
          "Equilibrando rendimiento, mantenibilidad y acabado visual"
        ]
      }
    },
    profiles: {
      fullstack: {
        title: "Desarrollador Full-Stack",
        tagline: "Construyo productos enfocados con buena UX e ingeniería sólida.",
        resumeLink: "/resumes/Hector%20Leal%20CV.pdf",
        summary: "Estudiante de Ingeniería de Software que construye productos web y móviles con énfasis en claridad, rendimiento y una implementación cuidada.",
        philosophy: "Me interesan los productos que se sienten bien pensados. El objetivo es hacer que la funcionalidad compleja se perciba simple, rápida y confiable desde la primera interacción."
      },
      frontend: {
        title: "Desarrollador Frontend",
        tagline: "Diseño y desarrollo interfaces minimalistas con atención al detalle.",
        resumeLink: "/resumes/Hector%20Leal%20CV.pdf",
        summary: "Desarrollador frontend enfocado en interfaces responsivas, buena jerarquía visual y experiencias rápidas con herramientas web modernas.",
        philosophy: "El buen frontend debe sentirse natural al usarlo. Busco un lenguaje visual sobrio, estructura semántica e interacciones que acompañen al contenido en lugar de competir con él."
      }
    },
    experience: [
      {
        company: "Mydilsa LG",
        role: "Desarrollador Frontend",
        period: "Mayo 2024 - Presente",
        description: "Rediseñé y desarrollé el sitio web de la empresa con Astro y Tailwind CSS, priorizando responsividad, mejor estructura de contenido y tiempos de carga más consistentes en distintos dispositivos.",
        technologies: ["Astro", "Tailwind CSS", "Supabase", "Docker", "AWS"],
        tags: ["frontend", "fullstack"]
      }
    ],
    projects: [
      {
        title: "ResumeRoast",
        status: "completed",
        description: "Plataforma de revisión de currículums con IA pensada para entregar feedback claro en un flujo simple.",
        longDescription: "Construí un producto full-stack que recibe currículums, los procesa de forma segura y devuelve feedback estructurado en una interfaz limpia. La plataforma combina un frontend en React, servicios en Node.js, Supabase e integraciones de IA para mantener la experiencia rápida y fácil de usar.",
        timeline: {
          summary: "Un ciclo completo de producto, desde la base y el marketing inicial hasta una versión estable con análisis, builder, billing y endurecimiento de producción.",
          marker: "Completado",
          phases: [
            {
              title: "Fase 1 · Base y marketing",
              items: [
                { label: "Se configuró la base con Astro, React y Tailwind junto con la estructura inicial del proyecto", done: true },
                { label: "Se construyó la landing con branding, hero, pricing, layout compartido y secciones de confianza", done: true },
                { label: "Se completó el polish responsivo, accesibilidad y mejoras de navegación", done: true }
              ]
            },
            {
              title: "Fase 2 · MVP del producto",
              items: [
                { label: "Se introdujo el flujo de upload del currículum en la ruta principal de conversión", done: true },
                { label: "Se integró autenticación con Supabase y navegación ligada al estado de cuenta", done: true },
                { label: "Se lanzó el parsing de currículum y el primer flujo de análisis como MVP", done: true }
              ]
            },
            {
              title: "Fase 3 · Monetización y builder",
              items: [
                { label: "Se agregaron Stripe, suscripciones y controles de acceso", done: true },
                { label: "Se introdujo el resume builder v1 junto con manejo de versiones", done: true },
                { label: "El builder creció con ordenamiento e interacciones asistidas por IA", done: true }
              ]
            },
            {
              title: "Fase 4 · Confiabilidad y crecimiento",
              items: [
                { label: "Se mejoró el enrutamiento de IA, el manejo de errores y el hardening del backend", done: true },
                { label: "Se expandieron la gestión de currículums, localización y herramientas de optimización", done: true },
                { label: "Se completaron recuperación de cuenta, trials y controles de suscripción en dashboard", done: true }
              ]
            },
            {
              title: "Fase 5 · Cumplimiento y release",
              items: [
                { label: "Se añadieron páginas legales, cookie consent y mejor soporte de PDFs", done: true },
                { label: "Se corrigieron temas de billing, validación, rate limiting y cleanup de ofertas", done: true },
                { label: "Las mejoras de PDF y la estabilización final dejaron el producto en estado completado", done: true }
              ]
            }
          ]
        },
        techStack: ["React", "Node.js", "Supabase", "Tailwind CSS", "Integración IA"],
        link: "https://resumeroast.ai",
        github: "https://github.com/no-c-123/ResumeRoast",
        image: "/resumeroast.png",
        tags: ["fullstack", "frontend"]
      },
      {
        title: "Mydilsa LG PWA",
        status: "completed",
        description: "Sitio industrial responsivo y PWA diseñado para velocidad, claridad y uso móvil.",
        longDescription: "Diseñé y desarrollé una presencia web mobile-first para una empresa industrial con mejor jerarquía de contenido y una experiencia de navegación más fluida. El proyecto utiliza Astro y Tailwind CSS, con mejora progresiva y decisiones de frontend orientadas al rendimiento.",
        timeline: {
          summary: "Un despliegue web público enfocado en base de marca, páginas clave, flujo de contacto, preparación de producción y cierre de navegación.",
          marker: "Completado",
          phases: [
            {
              title: "Fase 1 · Base del sitio",
              items: [
                { label: "Se estableció la base con Astro, layouts compartidos y configuración inicial", done: true },
                { label: "Se creó la home con posicionamiento de la empresa, prueba social y CTA principal de contacto", done: true },
                { label: "Se implementaron header, footer y estilos globales para el sitio público", done: true }
              ]
            },
            {
              title: "Fase 2 · Rollout frontend",
              items: [
                { label: "Se completó la adaptación responsiva y refinamiento visual en distintos dispositivos", done: true },
                { label: "Se lanzó la página de servicios con contenido orientado a conversión", done: true },
                { label: "Se publicó la página de productos para presentar la oferta y dirigir al flujo de contacto", done: true }
              ]
            },
            {
              title: "Fase 3 · Captura de leads y contenido",
              items: [
                { label: "Se añadió la página de contacto y el flujo público de inquiry", done: true },
                { label: "Se completó la preparación de despliegue, cleanup de dependencias y fixes de producción", done: true },
                { label: "Se expandieron renders, visuales y contenido de soporte para marketing", done: true }
              ]
            },
            {
              title: "Fase 4 · Refinamientos finales",
              items: [
                { label: "Se refinó la experiencia del formulario con mejores estados y manejo de envío", done: true },
                { label: "Se simplificó la captación de leads alrededor del contacto por email", done: true },
                { label: "La limpieza de navegación cerró el estado final del sitio público actual", done: true }
              ]
            }
          ]
        },
        techStack: ["Astro", "Tailwind CSS", "PWA", "Accesibilidad", "Rendimiento"],
        link: "https://www.mydilsa.com",
        github: "https://github.com/no-c-123/mydilsa-web",
        image: "/mydilsa.png",
        tags: ["frontend", "fullstack"]
      },
      {
        title: "GirokIQ",
        status: "in-progress",
        description: "App de notas para iPad en desarrollo con un canvas infinito para escritura, texto y organización visual.",
        longDescription: "Estoy construyendo un espacio de trabajo nativo para iPad que combina tinta libre con bloques movibles de texto e imagen sobre un canvas infinito compartido. La implementación actual usa SwiftUI, UIKit, PencilKit, Swift Concurrency y Supabase para dibujo, edición por gestos, autenticación y persistencia en la nube.",
        timeline: {
          summary: "Ruta de lanzamiento compacta, enfocada primero en estabilización, luego TestFlight y después envío al App Store.",
          marker: "En progreso",
          phases: [
            {
              title: "Fase 1 · Producto Base Cerrado",
              items: [
                { label: "La base del producto, sync, auth, cuota y flujos de IA ya está integrada", done: true },
                { label: "El rediseño estilo Apple para iPad y la navegación principal ya quedaron listos", done: true },
                { label: "La parte de empaquetado y exportación firmada ya funciona", done: true }
              ]
            },
            {
              title: "Fase 2 · Estabilización",
              items: [
                { label: "Se sigue afinando la interacción del canvas y el acabado visual", done: false },
                { label: "Está en marcha una pasada de regresión entre sync, chat, settings y edición", done: false },
                { label: "El alcance de la versión debe quedarse congelado para proteger la salida", done: false }
              ]
            },
            {
              title: "Fase 3 · TestFlight",
              items: [
                { label: "Falta correr QA en dispositivo real para onboarding, modo offline, cuota y chat con IA", done: false },
                { label: "Falta validar el comportamiento de sync entre dispositivos con la regla actual", done: false },
                { label: "Falta subir un build interno a TestFlight y limpiar issues bloqueantes", done: false }
              ]
            },
            {
              title: "Fase 4 · App Store",
              items: [
                { label: "Falta cerrar metadata, screenshots y respuestas de privacidad en App Store Connect", done: false },
                { label: "Falta confirmar links de soporte y detalles de envío contra la app final", done: false },
                { label: "Falta enviar el build y dejar margen para resolver feedback de review", done: false }
              ]
            }
          ]
        },
        techStack: ["SwiftUI", "UIKit", "PencilKit", "Swift Concurrency", "Supabase", "Sistema de gestos", "Canvas infinito"],
        link: "https://girokiq.app",
        github: "#",
        image: "/GirokIQ.png",
        tags: ["fullstack", "frontend"]
      }
    ]
  }
};
