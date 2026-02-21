export const portfolioData = {
  personal: {
    name: "Hector Leal",
    title: "Full-Stack Developer & ML Engineer",
    tagline: "I build intelligent systems and scalable products.",
    email: "leal.emiliano.hector@gmail.com",
    phone: "(811) 049-0681",
    location: "Monterrey, NL, Mexico",
    socials: {
      github: "https://github.com/no-c-123",
      linkedin: "https://www.linkedin.com/in/hector-leal-developer/",
    }
  },
  about: {
    summary: "Results-driven Software Engineering student with 3+ years of full-stack development experience building scalable web applications. Delivered production systems with 99.9% uptime and achieved 40% month-over-month user growth through React/TypeScript implementations. Proven track record in performance optimization, responsive design, and collaborative project leadership.",
    philosophy: "I focus on performance, UX, and scalability. My approach combines rigorous engineering principles with modern design aesthetics to create products that not only work flawlessly but also delight users."
  },
  experience: [
    {
      company: "Mydilsa LG",
      role: "Frontend Developer",
      period: "May 2024 - Present",
      description: "Spearheaded complete website redesign for industrial manufacturing firm, leading cross-functional collaboration with design and backend teams. Architected responsive web solution using Astro framework and Tailwind CSS, resulting in 30% increase in client engagement. Optimized site performance through code splitting and lazy loading techniques, improving page load speeds by 25%. Mentored junior developers on modern frontend practices and established code review processes.",
      technologies: ["Astro", "Tailwind CSS", "Supabase", "Docker", "AWS"]
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
      image: "/resumeroast.png"
    },
    {
      title: "SnapLink",
      description: "High-performance URL management system with advanced analytics capabilities.",
      longDescription: "Engineered high-performance URL management system with advanced analytics capabilities. Implemented Redis caching mechanisms and database query optimization, achieving 60% latency reduction. Designed scalable architecture supporting bulk URL processing for 1000+ concurrent operations. Collaborated with UX team to create intuitive analytics dashboard with real-time performance metrics.",
      techStack: ["Redis", "Database Optimization", "Scalable Architecture", "Analytics"],
      link: "https://link-shortener-rouge-omega.vercel.app/",
      github: "https://github.com/no-c-123/link-shortener",
      image: "/snaplink.png"
    },
    {
      title: "Mydilsa LG PWA",
      description: "Mobile-Compatible Website emphasizing accessibility and user engagement.",
      longDescription: "Developed mobile-first responsive platform emphasizing accessibility and user engagement. Led implementation of Progressive Web App features including offline functionality and push notifications. Optimized loading performance through image compression and lazy loading, reducing initial load time by 40%. Achieved 35% improvement in user engagement through enhanced UI/UX design and A/B testing.",
      techStack: ["PWA", "Accessibility", "Performance Optimization", "A/B Testing"],
      link: "https://www.mydilsa.com",
      github: "https://github.com/no-c-123/mydilsa-web",
      image: "/mydilsa.png"
    },
    {
      title: "ML Prediction Model",
      description: "Developed a machine learning model to predict flight delays with 90% accuracy, reducing flight cancellations by 20%.",
      longDescription: "Led the development of a flight delay prediction model using historical flight data. Implemented feature engineering and selection to improve model performance. Utilized scikit-learn for model training and evaluation, achieving 90% accuracy in predicting flight delays. Collaborated with data scientists to fine-tune model parameters and optimize performance.",
      techStack: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "React", "Javascript", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/no-c-123/AeroPredictAI",
      image: "/AeroPredict.png"
    }
  ],
  skills: {
    frontend: ["JavaScript", "TypeScript", "React", "Astro", "Tailwind CSS", "HTML/CSS"],
    backend: ["Node.js", "SQL", "NoSQL", "API Design", "Serverless"],
    devops: ["Git", "Docker", "AWS", "Azure", "GCP", "CI/CD", "Monitoring"],
    soft: ["Leadership", "Team Collaboration", "Problem-Solving", "Critical Thinking", "Communication", "Agile"]
  }
};
