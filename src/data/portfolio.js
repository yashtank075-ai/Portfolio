export const portfolioData = {
  personal: {
    name: "Yash Tank",
    monogram: "YT",
    role: "MERN Stack Developer & Website Developer",
    statusBadge: "Available for engineering roles & select web projects",
    tagline:
      "Architecting thoughtful web applications and bespoke digital experiences with engineering discipline and editorial restraint.",
    bio: "Full Stack Developer Intern at Ora Infotech with hands-on experience developing backend workflows, booking systems, and responsive web interfaces. Skilled in JavaScript, React.js, Next.js, Node.js, Express.js, REST APIs, and database technologies including MongoDB and PostgreSQL.",
    email: "yashtank075@gmail.com",
    phone: "7359129382",
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
      { name: "PostgreSQL", detail: "Relational Queries & Schema Design" },
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
    cardSummary:
      "Corporate web platform redesign coded with Next.js and Tailwind CSS, presenting technology services, case studies, and responsive marketing layouts.",
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
      id: "flowdesk-ai",
      index: "02",
      title: "FlowDesk AI — Multi-Tenant CRM Platform",
      category: "Full-Stack CRM & Business Operations",
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Supabase",
        "Prisma ORM",
        "TanStack Query",
        "Tailwind CSS",
        "Zod",
      ],
      cardSummary:
        "Full-stack multi-tenant CRM platform featuring sales pipelines, recurring revenue metrics, RBAC workspace isolation, and an explainable AI business insights engine.",
      summary:
        "Full-stack multi-tenant CRM and operations platform empowering businesses to manage pipelines, track recurring revenue, and drive customer retention through a unified dashboard.",
      contribution:
        "Architected full-stack multi-tenant architecture with 5-tier role-based access control (RBAC), JWT rotating refresh token authentication, PostgreSQL/Supabase database schemas with Prisma ORM, and explainable AI Business Insights.",
      features: [
        "Lead management with seven-stage sales pipeline tracking and status updates",
        "Customer management with subscription tiers and recurring revenue tracking",
        "Enquiry and support ticket management with activity logging",
        "Follow-up scheduling and unified activity tracking",
        "Dashboard analytics with PostgreSQL-backed metrics and reporting",
        "AI Business Insights with explainable strategic recommendations",
        "Global search across CRM modules and CSV/PDF report exports",
        "Multi-tenant workspaces with five-level role-based access control (RBAC)",
      ],
      liveUrl: "https://flowdesk-flax.vercel.app",
      liveLabel: "View Live Website",
      image: "/flowdesk-preview.png",
      caseStudyNotes: {
        headline: "Multi-Tenant Enterprise Architecture & Real-Time CRM",
        architecture:
          "React + TypeScript → Express.js REST API → PostgreSQL & Supabase via Prisma ORM",
        technicalSolution:
          "Engineered multi-tenant workspace isolation with 5-level RBAC, robust JWT refresh-token rotation, and AI-driven insights engine over relational metrics.",
      },
    },
    {
      id: "reelflow",
      index: "03",
      title: "ReelFlow — Social Media Suite",
      category: "Full-Stack Web Application",
      stack: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "yt-dlp",
        "FFmpeg",
        "Vite",
        "REST APIs",
      ],
      cardSummary:
        "Full-stack media utility facilitating public video downloads from Instagram Reels and Facebook, with YouTube link previewing and tokenized streaming pipelines.",
      summary:
        "Full-stack media utility application enabling public video downloads from Instagram Reels and Facebook, paired with YouTube link previewing, cryptographic token delivery, and analytics logging.",
      contribution:
        "Engineered the complete application end-to-end: built a modern responsive React SPA, implemented Express REST APIs with child-process yt-dlp & FFmpeg pipeline integration, token-based streaming downloads, in-memory rate limiting, and a PostgreSQL analytics audit log.",
      features: [
        "Public Instagram Reels and Facebook video extraction via dedicated yt-dlp child processes",
        "YouTube link verification and metadata previewing without unverified downloads",
        "Quality selector (Best available, 1080p, 720p, 480p, 360p) with graceful format fallback",
        "Cryptographically signed, short-lived download tokens (15-min TTL) preventing link abuse",
        "In-process sliding-window rate limiting, request validation, and safe process cleanup",
        "PostgreSQL event logging pipeline with resilient in-memory ring-buffer fallback",
        "Client-side search history with localStorage state persistence and clear controls",
      ],
      liveUrl: "https://reelflow-fq7d.onrender.com/",
      liveLabel: "View Live Website",
      image: "/reelflow-preview.png",
      caseStudyNotes: {
        headline:
          "Media Extraction Pipeline & Tokenized Streaming Architecture",
        architecture:
          "React (Vite) → Node.js / Express REST API → yt-dlp & FFmpeg + PostgreSQL Analytics",
        technicalSolution:
          "Engineered secure, non-shell child process execution with strict host whitelisting, ephemeral download token validation, memory-managed streaming, and PostgreSQL analytics fallback.",
      },
    },
    {
      id: "milliard-agarbatti",
      index: "04",
      title: "Milliard Agarbatti – Tirth Agarbatti",
      category: "Premium E-commerce / Brand Website",
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Responsive Design",
      ],
      cardSummary:
        "Cinematic brand website built with Next.js 16 and React 19, featuring an interactive olfactory fragrance experience and wholesale distributor inquiry portal.",
      summary:
        "Designed and developed a premium cinematic brand website for Milliard Agarbatti (Tirth Agarbatti), celebrating traditional Indian heritage, craftsmanship, and luxury incense presentation.",
      contribution:
        "Architected the modern Next.js 16 and React 19 web application featuring a cinematic hero section, interactive fragrance experience, artisanal heritage storytelling, curated product catalog, and multi-channel distributor and wholesale inquiry workflows.",
      features: [
        "Cinematic hero and immersive brand heritage storytelling with editorial typography",
        "Curated product catalog & fragrance detail pages for Sandalwood, Mogra, Rose, and Sambrani",
        "Interactive fragrance olfactory profile experience and high-resolution photo gallery",
        "Wholesale distributor inquiry portal and custom contact workflows",
        "Responsive, mobile-first layouts styled with Tailwind CSS v4 in luxury navy & champagne gold",
      ],
      liveUrl: "https://milliard-agarbatti.vercel.app/",
      liveLabel: "View Live Website",
      image: "/milliard-preview.png",
      caseStudyNotes: {
        headline: "Heritage Brand Experience & Next.js Architecture",
        architecture:
          "Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4",
        technicalSolution:
          "Engineered a responsive, high-fidelity luxury digital showcase balancing artisanal brand aesthetics with modern performance, clean semantic structure, and frictionless customer enquiry pathways.",
      },
    },
    {
      id: "dwarkadhish-car-rent",
      index: "05",
      title: "Dwarkadhish Car Rent",
      category: "Business Website / Car Rental Website",
      stack: ["React.js", "Tailwind CSS", "React Router", "Vite"],
      cardSummary:
        "Commercial car rental web platform featuring vehicle fleet catalog browsing, 12h and 24h rental pricing packages, and direct WhatsApp booking dispatch.",
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
      liveUrl: "https://dwarkadhish-car-rent.vercel.app/",
      liveLabel: "View Live Website",
      image: "/dwarkadhish-preview.png",
      caseStudyNotes: {
        headline: "Business Architecture & Direct Inquiry Integration",
        architecture: "React 19 SPA Architecture with Tailwind CSS Styling",
        technicalSolution:
          "Engineered a frictionless inquiry pipeline transforming chosen fleet packages into structured WhatsApp bookings directly connecting drivers to the business host.",
      },
    },
    {
      id: "food-ordering",
      index: "06",
      title: "Online Food Ordering Platform",
      category: "Full-Stack Application",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      cardSummary:
        "Full-stack culinary application featuring real-time menu categorization, synchronized client shopping cart state, and an Express/MongoDB order processing API.",
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
      image: "/food-del-preview.png",
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
      period: "August 2026 – Present",
      role: "Full Stack Developer Intern",
      organization: "Ora Infotech",
      location: "Surat, Gujarat",
      summary:
        "Full Stack Developer Intern at Ora Infotech contributing to production systems including Antim Ritual (agent workflow & advance kit booking system) and Ora Infotech corporate website redesign.",
      contributions: [
        "Antim Ritual — Agent Workflow & Advance Kit Booking System: Developed an agent workflow to support service-request management and processing.",
        "Built an advance kit booking system to support reservations and booking operations.",
        "Implemented backend functionality and booking-related API flows using Node.js and Express.js with PostgreSQL.",
        "Worked on application data handling to support coordination between users and service agents.",
        "Ora Infotech Corporate Website Redesign: Contributed to the corporate website redesign using React.js, Next.js, and Tailwind CSS, improving interface consistency and page styling.",
        "Developed reusable UI components and responsive layouts for desktop, tablet, and mobile devices.",
      ],
      stack: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Git & GitHub",
      ],
      type: "internship",
    },
    {
      period: "Completed, 2026",
      role: "Bachelor of Computer Applications (BCA)",
      organization: "Shree Shambhubhai V. Patel College of CS & BM, VNSGU",
      location: "Surat, Gujarat",
      summary:
        "Graduated with formal academic training in computer science, software engineering methodologies, data structures, and database systems.",
      contributions: [
        "Relational (SQL) and document (NoSQL) database design and optimization",
        "Object-Oriented Programming paradigms, data structures, and modern JavaScript",
        "Software development lifecycle (SDLC), system analysis, and API architecture fundamentals",
      ],
      stack: [
        "Computer Science Fundamentals",
        "DBMS & SQL",
        "Data Structures",
        "Web Technologies",
      ],
      type: "education",
    },
  ],

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shree Shambhubhai V. Patel College of CS & BM, VNSGU",
    location: "Surat, Gujarat, India",
    status: "Completed, 2026",
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
