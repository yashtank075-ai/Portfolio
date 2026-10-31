export const portfolioData = {
  personal: {
    name: "Yash Tank",
    monogram: "YT",
    role: "MERN Stack Developer & Website Developer",
    statusBadge: "Available for engineering roles & select web projects",
    tagline:
      "Architecting thoughtful web applications and bespoke digital experiences with engineering discipline and editorial restraint.",
    bio: "I am a full-stack developer based in India with a formal degree in Computer Applications (BCA). My work bridges frontend craftsmanship with backend architectural discipline — translating real-world requirements into modular React interfaces, secure Express REST APIs, and reliable MongoDB data layers.",
    email: "yash.dev.contact26@gmail.com",
    location: "Surat, Gujarat, India",
    githubUrl: "https://github.com/yashtank075-ai",
    linkedinUrl: "https://www.linkedin.com/in/yash-tank-abab5b308",
    resumeUrl: "/yash_tank_resume.pdf",
    liveUrl: "https://yash-tank-dev.vercel.app/",
  },

  skills: {
    frontend: [
      { name: "React.js", detail: "Component Architecture & Hooks" },
      { name: "Next.js", detail: "Server Components & File Routing" },
      { name: "JavaScript (ES6+)", detail: "Core Language & Async Patterns" },
      {
        name: "HTML5 & Semantic Markup",
        detail: "Accessible Document Structure",
      },
      {
        name: "CSS3 & Modern Layouts",
        detail: "Flexbox, Grid & Responsive Systems",
      },
      { name: "Tailwind CSS", detail: "Design Tokens & Modular Styling" },
    ],
    backend: [
      { name: "Node.js", detail: "Server-side Runtime & Event Loop" },
      { name: "Express.js", detail: "REST APIs & Middleware Routing" },
      {
        name: "RESTful Architecture",
        detail: "Endpoint Design & Status Codes",
      },
      { name: "Authentication Flow", detail: "Token & Session Management" },
    ],
    database: [
      { name: "MongoDB", detail: "Document Storage & Aggregation" },
      { name: "Mongoose ODM", detail: "Schema Design & Validation" },
      { name: "Data Modeling", detail: "Normalized & Embedded Structures" },
    ],
    tools: [
      { name: "Git & GitHub", detail: "Branching, PRs & Version Control" },
      { name: "Postman", detail: "API Testing & Request Inspection" },
      { name: "VS Code", detail: "Development Environment" },
      { name: "Vite & npm", detail: "Modern Build Tooling" },
    ],
  },

  featuredProject: {
    id: "orainfotech",
    index: "01",
    title: "Orainfotech Corporate Website",
    category: "Full-Stack Development Internship",
    company: "Orainfotech",
    stack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "Responsive Design",
    ],
    summary:
      "Redesign of selected key pages for the official corporate website of Orainfotech, an IT services and product engineering firm. The project presents company capabilities, offshore development services, and portfolio case studies in a modern, responsive layout.",
    contribution:
      "Contributed as a full-stack development intern under the guidance of senior engineering leads. My specific scope involved coding assigned page templates in Next.js, styling responsive interface sections using Tailwind CSS, and ensuring visual consistency with established UI mockups.",
    features: [
      "Coded assigned marketing and service page layouts using Next.js components",
      "Implemented responsive, mobile-first layouts with Tailwind CSS",
      "Validated cross-browser layout consistency across mobile, tablet, and desktop viewports",
      "Collaborated within an engineering sprint team following agile development routines",
    ],
    liveUrl: "https://www.orainfotech.com/",
    liveLabel: "View Live Website",
    image: "/orainfotech-preview.png",
    caseStudyNotes: {
      headline: "Internship Scope & Technical Framework",
      architecture:
        "Next.js Component Hierarchy & Tailwind CSS Utility Styling",
      technicalSolution:
        "Implemented assigned page templates strictly according to team design specifications and mobile responsiveness criteria.",
    },
  },

  projects: [
    {
      id: "dwarkadhish-car-rent",
      index: "02",
      title: "Dwarkadhish Car Rent",
      category: "Business Website / Car Rental Website",
      stack: ["React.js", "Tailwind CSS", "React Router", "Vite"],
      summary:
        "Developed a modern car rental website for Dwarkadhish Car Rent, a car rental business based in Surat, Gujarat. The website presents the rental business and its services through a professional web experience.",
      contribution:
        "Engineered the responsive frontend web application featuring vehicle catalog browsing, package rate presentations, multi-step rental process flows, and direct WhatsApp enquiry message generation for customer bookings.",
      features: [
        "Curated fleet showcase with detailed vehicle specifications and rental options",
        "12-hour and 24-hour rental pricing tiers customized for local and outstation travel",
        "One-click WhatsApp booking workflow with prefilled vehicle and schedule details",
        "Responsive, mobile-optimized interface with tailored touch targets and smooth navigation",
      ],
      githubUrl: "https://github.com/yashtank075-ai/CarRent",
      liveUrl: "https://dwarkadhish-car-rent.vercel.app/",
      caseStudyNotes: {
        headline: "Business Architecture & Direct Inquiry Integration",
        architecture: "React 19 SPA Architecture with Tailwind CSS Styling",
        technicalSolution:
          "Engineered a frictionless inquiry pipeline transforming chosen fleet packages into structured WhatsApp bookings directly connecting drivers to the business host.",
      },
    },
    {
      id: "food-ordering",
      index: "03",
      title: "Online Food Ordering Platform",
      category: "Full-Stack Application",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      summary:
        "An end-to-end ordering application featuring dynamic menu categorization, synchronized cart state management, and an Express/MongoDB order processing pipeline.",
      contribution:
        "Architected the full system end-to-end: built the modular React interface with quantity state handlers, configured Express REST endpoints for item retrieval, and designed MongoDB schemas for dish catalogs and customer orders.",
      features: [
        "Dynamic culinary menu with real-time category filtering",
        "Synchronized shopping cart with quantity adjustments and state persistence",
        "Structured checkout flow with customer delivery address capture",
        "Custom REST API routes for catalog retrieval, cart updates, and order creation",
        "MongoDB document collections structured for items, categories, and order history",
      ],
      githubUrl: "https://github.com/yashtank075-ai/food-del",
      liveUrl: "https://github.com/yashtank075-ai/food-del",
      caseStudyNotes: {
        architecture: "React Client → Express REST Gateway → MongoDB Storage",
        primaryChallenge:
          "Synchronizing cart state across navigation changes while maintaining responsive quantity mutation and order summary calculations.",
        technicalSolution:
          "Centralized state management with custom React hooks connected to transactional REST endpoints.",
      },
    },
  ],

  services: [
    {
      num: "01",
      title: "Full-Stack Web Applications",
      tag: "MERN & Next.js",
      forWho: "Businesses & Teams needing custom web software",
      description:
        "Custom web applications engineered from database to interface. Fast, reliable, and tailored to business operations or SaaS product goals.",
      deliverables: [
        "Custom React & Next.js interfaces",
        "Reliable Node.js & Express backends",
        "Secure database architecture",
        "Authentication & state management",
      ],
    },
    {
      num: "02",
      title: "RESTful API & Backend Services",
      tag: "Backend & Systems",
      forWho: "Teams requiring structured, scalable data services",
      description:
        "Structured, reliable backend APIs that connect your web app, mobile client, and third-party tools seamlessly.",
      deliverables: [
        "Clean CRUD API endpoints",
        "Data validation & security checks",
        "Database queries & optimization",
        "Third-party service integrations",
      ],
    },
    {
      num: "03",
      title: "Commercial Websites & Landing Pages",
      tag: "Website Development",
      forWho: "Companies seeking a high-converting digital presence",
      description:
        "High-performing, bespoke websites designed to convert visitors into clients. Fully responsive from mobile screens to large desktop displays.",
      deliverables: [
        "Custom mobile-first layouts",
        "Search engine (SEO) optimization",
        "Fast load speeds & zero visual jitter",
        "Clear calls-to-action & contact forms",
      ],
    },
    {
      num: "04",
      title: "Frontend Engineering & UI Redesign",
      tag: "Frontend Craft",
      forWho: "Products needing polished UX and accessible implementation",
      description:
        "Transforming design mockups into polished, responsive web code with modern typography, accessible controls, and smooth interactions.",
      deliverables: [
        "Modern design system tokens",
        "Accessible WCAG-compliant UI",
        "Interactive forms & feedback states",
        "Fluid responsiveness on all devices",
      ],
    },
  ],

  process: [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "Clarifying project objectives, user flows, and technical requirements before writing a line of code.",
    },
    {
      step: "02",
      title: "Interface Design & Structure",
      description:
        "Structuring responsive, accessible layouts with clear typographic hierarchy and intuitive user flows.",
    },
    {
      step: "03",
      title: "Development & Data Flow",
      description:
        "Building clean React/Next.js interfaces connected to reliable backend APIs and databases.",
    },
    {
      step: "04",
      title: "Testing & Cross-Device Polish",
      description:
        "Testing across mobile, tablet, and desktop devices to verify speed, usability, and form validation.",
    },
    {
      step: "05",
      title: "Launch & Delivery",
      description:
        "Deploying to production hosting, configuring domain/SSL, and delivering clean, maintainable code.",
    },
  ],

  experience: [
    {
      period: "Recent Internship",
      role: "Full Stack Developer Intern",
      organization: "Ora Infotech",
      location: "Surat, India",
      summary:
        "Contributed to core development initiatives at Ora Infotech, focusing on modular full-stack web engineering, workflow orchestration systems, and booking logic implementation.",
      contributions: [
        "Worked on an agent workflow system, developing component flows and backend services for automated agent pipeline execution.",
        "Worked on an advanced kit booking system, handling scheduling flows, booking status management, and data persistence.",
        "Participated in full-stack web development activities across both client-side React interfaces and backend service APIs.",
      ],
      stack: ["React.js", "Node.js", "Express.js", "PostgreSQL / MySQL", "Git & GitHub"],
      type: "internship",
    },
    {
      period: "Academic Tenure",
      role: "Bachelor of Computer Applications (BCA)",
      organization: "Veer Narmad South Gujarat University",
      location: "Surat, India",
      summary:
        "Graduated with formal academic training in computer science, software engineering methodologies, data structures, and database systems.",
      contributions: [
        "Relational (SQL) and document (NoSQL) database design and optimization",
        "Object-Oriented Programming paradigms, data structures, and modern JavaScript",
        "Software development lifecycle (SDLC), system analysis, and API architecture fundamentals",
      ],
      stack: ["Computer Science Fundamentals", "DBMS & SQL", "Data Structures", "Web Technologies"],
      type: "education",
    },
  ],

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Veer Narmad South Gujarat University",
    location: "Surat, Gujarat, India",
    status: "Graduated",
    summary:
      "Rigorous academic grounding in computer science fundamentals, data structures, software engineering, database management systems, and modern web application development.",
    coreSubjects: [
      "Web Technologies & Frontend Development",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming & JavaScript",
      "Software Engineering & System Analysis",
      "Data Structures & Computer Networks",
    ],
  },
};
