export type ProfileType = 'frontend' | 'fullstack';
export type Language = 'en' | 'es';

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  link: string;
  github: string;
  image: string;
  tags: ProfileType[];
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
    keyImpact: string;
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
      available: "Available for new projects",
      selectedProjects: "Selected Projects",
      selectedProjectsSubtitle: {
        fullstack: "A collection of high-performance applications and AI-driven solutions built for scale.",
        frontend: "Showcasing pixel-perfect interfaces and responsive web experiences."
      },
      viewCaseStudy: "View Case Study",
      sourceCode: "Source Code",
      keyImpact: "Key Impact: High performance & scalability",
      engineeringPhilosophy: "Engineering Philosophy",
      yearsExperience: "Years Experience",
      uptimeDelivered: "Uptime Delivered",
      currentFocus: "Current Focus",
      technicalExpertise: "Technical Expertise",
      technicalExpertiseSubtitle: {
        fullstack: "Mastering the modern web and AI stack.",
        frontend: "Creating exceptional user interfaces with modern tools."
      },
      getInTouch: "Get in Touch",
      letsBuild: "Let's build something exceptional.",
      lookingForPartner: "Looking for a partner to bring your vision to life? I'm currently available for new opportunities.",
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
          "Mastering advanced React patterns and performance",
          "Exploring WebGL and 3D web experiences",
          "Contributing to open-source UI libraries",
          "Advocating for web accessibility standards"
        ],
        fullstack: [
          "Building scalable AI-driven applications",
          "Optimizing frontend performance (Core Web Vitals)",
          "Architecting serverless backend solutions",
          "Exploring Large Language Model integrations"
        ]
      }
    },
    profiles: {
      fullstack: {
        title: "Full-Stack Developer & ML Engineer",
        tagline: "I build intelligent systems and scalable products.",
        resumeLink: "/resumes/Hector%20Leal%20Fullstack%20CV.pdf",
        summary: "Software Engineering student with 3+ years of experience building scalable web applications and production systems with React and TypeScript.",
        philosophy: "I focus on performance, UX, and scalability. My approach combines rigorous engineering principles with modern design aesthetics to create products that not only work flawlessly but also delight users."
      },
      frontend: {
        title: "Frontend Developer",
        tagline: "I craft pixel-perfect, high-performance user experiences.",
        resumeLink: "/resumes/Hector%20Leal%20Fullstack%20CV.pdf",
        summary: "Frontend Developer specialized in building accessible, responsive, and performant web interfaces using the React ecosystem and modern CSS.",
        philosophy: "User experience is paramount. I believe in writing semantic, accessible code that provides the best possible experience for all users, regardless of their device or capabilities."
      }
    },
    experience: [
      {
        company: "Mydilsa LG",
        role: "Frontend Developer",
        period: "May 2024 - Present",
        description: "Spearheaded complete website redesign for industrial manufacturing firm, leading cross-functional collaboration with design and backend teams. Architected responsive web solution using Astro framework and Tailwind CSS, resulting in 30% increase in client engagement. Optimized site performance through code splitting and lazy loading techniques, improving page load speeds by 25%. Mentored junior developers on modern frontend practices and established code review processes.",
        technologies: ["Astro", "Tailwind CSS", "Supabase", "Docker", "AWS"],
        tags: ["frontend", "fullstack"]
      }
    ],
    projects: [
      {
        title: "ResumeRoast",
        description: "AI-Powered Resume Review Platform providing AI-driven resume analysis for job seekers.",
        longDescription: "Led development of full-stack web application providing AI-driven resume analysis for job seekers. Architected scalable backend using Node.js and Supabase, implementing secure user authentication and real-time file processing. Coordinated team of 3 developers to deliver community-driven features including peer reviews and interview preparation tools. Achieved 100+ active users with 40% monthly growth rate through data-driven feature optimization.",
        techStack: ["Node.js", "Supabase", "Auth", "AI Integration"],
        link: "https://resumeroast.ai",
        github: "https://github.com/no-c-123/ResumeRoast",
        image: "/resumeroast.png",
        tags: ["fullstack", "frontend"]
      },
      {
        title: "SnapLink",
        description: "High-performance URL management system with advanced analytics capabilities.",
        longDescription: "Engineered high-performance URL management system with advanced analytics capabilities. Implemented Redis caching mechanisms and database query optimization, achieving 60% latency reduction. Designed scalable architecture supporting bulk URL processing for 1000+ concurrent operations. Collaborated with UX team to create intuitive analytics dashboard with real-time performance metrics.",
        techStack: ["Redis", "Database Optimization", "Scalable Architecture", "Analytics"],
        link: "https://link-shortener-rouge-omega.vercel.app/",
        github: "https://github.com/no-c-123/link-shortener",
        image: "/snaplink.png",
        tags: ["fullstack"]
      },
      {
        title: "Mydilsa LG PWA",
        description: "Mobile-Compatible Website emphasizing accessibility and user engagement.",
        longDescription: "Developed mobile-first responsive platform emphasizing accessibility and user engagement. Led implementation of Progressive Web App features including offline functionality and push notifications. Optimized loading performance through image compression and lazy loading, reducing initial load time by 40%. Achieved 35% improvement in user engagement through enhanced UI/UX design and A/B testing.",
        techStack: ["PWA", "Accessibility", "Performance Optimization", "A/B Testing"],
        link: "https://www.mydilsa.com",
        github: "https://github.com/no-c-123/mydilsa-web",
        image: "/mydilsa.png",
        tags: ["frontend", "fullstack"]
      },
      {
        title: "ML Prediction Model",
        description: "Developed a machine learning model to predict flight delays with 90% accuracy, reducing flight cancellations by 20%.",
        longDescription: "Led the development of a flight delay prediction model using historical flight data. Implemented feature engineering and selection to improve model performance. Utilized scikit-learn for model training and evaluation, achieving 90% accuracy in predicting flight delays. Collaborated with data scientists to fine-tune model parameters and optimize performance.",
        techStack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "React", "Javascript", "Tailwind CSS"],
        link: "#",
        github: "https://github.com/no-c-123/AeroPredict",
        image: "/AeroPredict.png",
        tags: ["fullstack"]
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
      available: "Disponible para nuevos proyectos",
      selectedProjects: "Proyectos Seleccionados",
      selectedProjectsSubtitle: {
        fullstack: "Una colección de aplicaciones de alto rendimiento y soluciones impulsadas por IA construidas para escalar.",
        frontend: "Mostrando interfaces perfectas y experiencias web responsivas."
      },
      viewCaseStudy: "Ver Caso de Estudio",
      sourceCode: "Código Fuente",
      keyImpact: "Impacto Clave: Alto rendimiento y escalabilidad",
      engineeringPhilosophy: "Filosofía de Ingeniería",
      yearsExperience: "Años de Experiencia",
      uptimeDelivered: "Uptime Entregado",
      currentFocus: "Enfoque Actual",
      technicalExpertise: "Experiencia Técnica",
      technicalExpertiseSubtitle: {
        fullstack: "Dominando la web moderna y el stack de IA.",
        frontend: "Creando interfaces de usuario excepcionales con herramientas modernas."
      },
      getInTouch: "Contáctame",
      letsBuild: "Construyamos algo excepcional.",
      lookingForPartner: "¿Buscas un socio para dar vida a tu visión? Actualmente estoy disponible para nuevas oportunidades.",
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
          "Dominando patrones avanzados de React y rendimiento",
          "Explorando WebGL y experiencias web 3D",
          "Contribuyendo a librerías de UI open-source",
          "Abogando por estándares de accesibilidad web"
        ],
        fullstack: [
          "Construyendo aplicaciones escalables impulsadas por IA",
          "Optimizando el rendimiento frontend (Core Web Vitals)",
          "Arquitectando soluciones backend serverless",
          "Explorando integraciones con Modelos de Lenguaje Grande (LLM)"
        ]
      }
    },
    profiles: {
      fullstack: {
        title: "Desarrollador Full-Stack & Ing. ML",
        tagline: "Construyo sistemas inteligentes y productos escalables.",
        resumeLink: "/resumes/Hector%20Leal%20Fullstack%20CV.pdf",
        summary: "Estudiante de Ingeniería de Software con más de 3 años de experiencia creando aplicaciones web escalables y sistemas de producción con React y TypeScript.",
        philosophy: "Me enfoco en el rendimiento, UX y escalabilidad. Mi enfoque combina principios rigurosos de ingeniería con estética de diseño moderno para crear productos que no solo funcionan impecablemente sino que también deleitan a los usuarios."
      },
      frontend: {
        title: "Desarrollador Frontend",
        tagline: "Creo experiencias de usuario de alto rendimiento y píxel-perfectas.",
        resumeLink: "/resumes/Hector%20Leal%20Fullstack%20CV.pdf",
        summary: "Desarrollador Frontend especializado en la creación de interfaces web accesibles, responsivas y de alto rendimiento utilizando el ecosistema React y CSS moderno.",
        philosophy: "La experiencia del usuario es primordial. Creo en escribir código semántico y accesible que proporcione la mejor experiencia posible para todos los usuarios, independientemente de su dispositivo o capacidades."
      }
    },
    experience: [
      {
        company: "Mydilsa LG",
        role: "Desarrollador Frontend",
        period: "Mayo 2024 - Presente",
        description: "Lideré el rediseño completo del sitio web para una firma de manufactura industrial, liderando la colaboración interfuncional con equipos de diseño y backend. Arquitecté una solución web responsiva utilizando Astro y Tailwind CSS, resultando en un aumento del 30% en la participación del cliente. Optimicé el rendimiento del sitio mediante técnicas de code splitting y lazy loading, mejorando la velocidad de carga en un 25%. Mentoré a desarrolladores junior en prácticas modernas de frontend y establecí procesos de revisión de código.",
        technologies: ["Astro", "Tailwind CSS", "Supabase", "Docker", "AWS"],
        tags: ["frontend", "fullstack"]
      }
    ],
    projects: [
      {
        title: "ResumeRoast",
        description: "Plataforma de Revisión de Currículums impulsada por IA para buscadores de empleo.",
        longDescription: "Lideré el desarrollo de una aplicación web full-stack que proporciona análisis de currículums impulsado por IA. Arquitecté un backend escalable usando Node.js y Supabase, implementando autenticación segura de usuarios y procesamiento de archivos en tiempo real. Coordiné un equipo de 3 desarrolladores para entregar características impulsadas por la comunidad. Logré 100+ usuarios activos con una tasa de crecimiento mensual del 40% a través de la optimización de características basada en datos.",
        techStack: ["Node.js", "Supabase", "Auth", "Integración IA"],
        link: "https://resumeroast.ai",
        github: "https://github.com/no-c-123/ResumeRoast",
        image: "/resumeroast.png",
        tags: ["fullstack", "frontend"]
      },
      {
        title: "SnapLink",
        description: "Sistema de gestión de URLs de alto rendimiento con capacidades avanzadas de análisis.",
        longDescription: "Ingenié un sistema de gestión de URLs de alto rendimiento con capacidades analíticas avanzadas. Implementé mecanismos de caché Redis y optimización de consultas a base de datos, logrando una reducción de latencia del 60%. Diseñé una arquitectura escalable soportando procesamiento masivo de URLs para 1000+ operaciones concurrentes. Colaboré con el equipo de UX para crear un dashboard analítico intuitivo.",
        techStack: ["Redis", "Optimización BD", "Arquitectura Escalable", "Analytics"],
        link: "https://link-shortener-rouge-omega.vercel.app/",
        github: "https://github.com/no-c-123/link-shortener",
        image: "/snaplink.png",
        tags: ["fullstack"]
      },
      {
        title: "Mydilsa LG PWA",
        description: "Sitio web compatible con móviles enfatizando accesibilidad y compromiso del usuario.",
        longDescription: "Desarrollé una plataforma responsiva mobile-first enfatizando accesibilidad. Lideré la implementación de características PWA incluyendo funcionalidad offline y notificaciones push. Optimicé el rendimiento de carga mediante compresión de imágenes y lazy loading, reduciendo el tiempo de carga inicial en un 40%. Logré una mejora del 35% en el compromiso del usuario mediante diseño UI/UX mejorado.",
        techStack: ["PWA", "Accesibilidad", "Optimización Rendimiento", "A/B Testing"],
        link: "https://www.mydilsa.com",
        github: "https://github.com/no-c-123/mydilsa-web",
        image: "/mydilsa.png",
        tags: ["frontend", "fullstack"]
      },
      {
        title: "Modelo de Predicción ML",
        description: "Desarrollé un modelo de ML para predecir retrasos de vuelos con 90% de precisión.",
        longDescription: "Lideré el desarrollo de un modelo de predicción de retrasos de vuelos utilizando datos históricos. Implementé ingeniería y selección de características para mejorar el rendimiento del modelo. Utilicé scikit-learn para entrenamiento y evaluación, logrando 90% de precisión. Colaboré con científicos de datos para ajustar parámetros y optimizar el rendimiento.",
        techStack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "React", "Javascript", "Tailwind CSS"],
        link: "#",
        github: "https://github.com/no-c-123/AeroPredict",
        image: "/AeroPredict.png",
        tags: ["fullstack"]
      }
    ]
  }
};
