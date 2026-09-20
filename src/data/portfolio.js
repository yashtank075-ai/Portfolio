export const portfolioData = {
  personal: {
    name: "Yash Tank",
    logo: "YASH",
    role: "MERN Stack Developer",
    statusBadge: "AVAILABLE FOR OPPORTUNITIES",
    greeting: "Hi I'm Yash Tank",
    headline: "MERN Stack Developer",
    supportingText: "I build modern, responsive and scalable web applications using React, Node.js, Express and MongoDB.",
    bio: "I am a passionate MERN Stack Developer with a solid foundation in computer applications (BCA). I enjoy turning complex ideas into clean, functional, user-centric full-stack web applications. Dedicated to continuous learning, clean architecture, and modern development standards.",
    email: "yash.dev.contact26@gmail.com",
    location: "India",
    githubUrl: "https://github.com/yashtank075-ai",
    linkedinUrl: "https://www.linkedin.com/in/yash-tank-abab5b308",
    resumeUrl: "/yash_tank_resume.pdf",
  },

  stats: [
    { label: "Education", value: "BCA", detail: "Bachelor of Computer Applications" },
    { label: "Primary Stack", value: "MERN", detail: "Mongo, Express, React, Node" },
    { label: "Featured Projects", value: "4+", detail: "Full Stack & Web Apps" },
    { label: "Development Focus", value: "Full Stack", detail: "End-to-End Applications" }
  ],

  highlights: [
    { title: "BCA Degree", description: "Computer Applications foundation", tag: "Education" },
    { title: "MERN Stack", description: "React, Node, Express, MongoDB", tag: "Primary Stack" },
    { title: "Full-Stack Dev", description: "End-to-end web applications", tag: "Focus" },
    { title: "REST APIs", description: "Custom backend endpoints", tag: "Architecture" }
  ],

  journey: [
    {
      step: "01",
      title: "Learning",
      description: "Building a strong foundation in core web technologies, computer application fundamentals, algorithms, and responsive UI design."
    },
    {
      step: "02",
      title: "Building",
      description: "Creating practical full-stack web applications using React.js, Node.js, Express.js, and MongoDB."
    },
    {
      step: "03",
      title: "Improving",
      description: "Mastering RESTful API architecture, state management, database schema design, and clean code principles."
    },
    {
      step: "04",
      title: "Growing",
      description: "Actively seeking opportunities, internships, and collaborative projects to deliver impact as a software developer."
    }
  ],

  skills: {
    frontend: [
      { name: "HTML5", level: "Advanced", icon: "Code2" },
      { name: "CSS3", level: "Advanced", icon: "Palette" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode2" },
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "Tailwind CSS", level: "Proficient", icon: "Sparkles" }
    ],
    backend: [
      { name: "Node.js", level: "Proficient", icon: "Server" },
      { name: "Express.js", level: "Proficient", icon: "Cpu" },
      { name: "REST APIs", level: "Proficient", icon: "Network" }
    ],
    database: [
      { name: "MongoDB", level: "Proficient", icon: "Database" },
      { name: "Mongoose ODM", level: "Proficient", icon: "Layers" }
    ],
    tools: [
      { name: "Git", level: "Proficient", icon: "GitBranch" },
      { name: "GitHub", level: "Proficient", icon: "Github" },
      { name: "VS Code", level: "Advanced", icon: "Terminal" },
      { name: "Postman", level: "Proficient", icon: "Send" }
    ]
  },

  techFlow: [
    { name: "React.js", category: "Frontend UI", color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", category: "Runtime", color: "from-emerald-500 to-green-600" },
    { name: "Express.js", category: "Backend Framework", color: "from-gray-400 to-slate-600" },
    { name: "MongoDB", category: "NoSQL Database", color: "from-green-500 to-teal-600" }
  ],

  services: [
    {
      title: "Frontend Development",
      description: "Crafting fast, intuitive, and highly responsive user interfaces using React.js, JavaScript, modern CSS, and clean component systems.",
      icon: "Layout",
      tag: "UI / UX"
    },
    {
      title: "Backend Development",
      description: "Designing structured, secure, and scalable RESTful APIs and server-side logic using Node.js and Express.js framework.",
      icon: "Server",
      tag: "API Services"
    },
    {
      title: "Database Integration",
      description: "Structuring flexible NoSQL database schemas, managing collections, and creating reliable database models with MongoDB & Mongoose.",
      icon: "Database",
      tag: "Data Architecture"
    },
    {
      title: "Full-Stack Applications",
      description: "Building complete end-to-end web software connecting frontend interactions seamlessly with backend business logic and databases.",
      icon: "Layers",
      tag: "End-to-End"
    }
  ],

  projects: [
    {
      id: "food-ordering",
      title: "Online Food Ordering System",
      category: "Full Stack",
      type: "fullstack",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "A full-stack food ordering application where users can browse food items, manage their cart, and place orders with real-time order summaries.",
      features: [
        "Dynamic food menu & category filtering",
        "Interactive shopping cart with quantity controls",
        "Order management & checkout flow",
        "Delivery details & address collection",
        "MongoDB schema integration for dishes & orders",
        "REST API endpoints for cart and food items"
      ],
      githubUrl: "https://github.com/yash/food-ordering-system",
      liveUrl: "#",
      accentColor: "from-amber-500 to-orange-600",
      theme: "amber"
    },
    {
      id: "library-management",
      title: "Library Management System",
      category: "Full Stack",
      type: "fullstack",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "A full-stack library management application designed for managing books, student records, issue/return workflows, and tracking borrowed books.",
      features: [
        "User & admin authentication system",
        "Comprehensive catalog & book management",
        "Student profile & borrowing history",
        "Issue & return book transaction tracking",
        "Real-time availability status indicators",
        "Admin dashboard overview"
      ],
      githubUrl: "https://github.com/yash/library-management-system",
      liveUrl: "#",
      accentColor: "from-blue-500 to-indigo-600",
      theme: "blue"
    },
    {
      id: "ecommerce-clothing",
      title: "E-Commerce Clothing Website",
      category: "Full Stack",
      type: "fullstack",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      description: "A modern clothing e-commerce application for browsing products, filtering by categories, and managing persistent shopping carts.",
      features: [
        "Product catalog with high-res previews",
        "Men's & Women's clothing category filters",
        "Seamless cart state & quantity adjustment",
        "Guest cart persistence",
        "Responsive, mobile-optimized checkout layout",
        "MongoDB product inventory management"
      ],
      githubUrl: "https://github.com/yash/ecommerce-clothing",
      liveUrl: "#",
      accentColor: "from-purple-500 to-pink-600",
      theme: "purple"
    }
  ],

  experience: [
    {
      role: "MERN Stack Development",
      period: "Hands-on Practical Focus",
      type: "Projects & Applications",
      description: "Hands-on development through building personal, academic, and full-stack projects using React, Node.js, Express, and MongoDB.",
      highlights: [
        "Architected modular React frontend components with dynamic state management",
        "Created custom Node.js/Express REST API endpoints and middleware handlers",
        "Designed MongoDB schemas and Mongoose database relationships"
      ]
    },
    {
      role: "Full-Stack Project Development",
      period: "End-to-End Workflows",
      type: "Software Engineering",
      description: "Building production-style applications incorporating frontend interfaces, backend services, database storage, and external API integrations.",
      highlights: [
        "Implemented cart systems, library tracking tools, and catalog platforms",
        "Applied clean folder architecture and separation of concerns",
        "Optimized client-side rendering speed and server response times"
      ]
    },
    {
      role: "Continuous Learning & Modern Stack",
      period: "Ongoing Growth",
      type: "Skill Expansion",
      description: "Constantly enhancing knowledge of modern web practices, Git version control, UI animations, API security, and code optimization.",
      highlights: [
        "Practicing git feature branching and clean commit etiquette",
        "Studying responsive design systems and accessible HTML/CSS standards",
        "Exploring scalable backend practices and backend authentication"
      ]
    }
  ],

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Veer Narmad South Gujarat University",
    location: "Surat",
    status: "Graduated",
    summary: "Comprehensive academic foundation in computer science principles, web application development, database management systems (DBMS), data structures, and software engineering concepts.",
    coreSubjects: [
      "Web Technologies & Frontend Development",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming & JavaScript",
      "Software Engineering & System Analysis",
      "Computer Networks & Data Structures"
    ]
  },

  currentlyBuilding: [
    {
      topic: "Scalable Backend Architecture",
      description: "Deepening knowledge of microservices patterns, Express middleware optimization, and modular controller routing."
    },
    {
      topic: "Advanced React State Patterns",
      description: "Refining custom hooks, performance memoization, and component library architectures."
    },
    {
      topic: "MongoDB Query Optimization",
      description: "Indexing strategies, aggregation pipelines, and schema relationships with Mongoose."
    }
  ],

  github: {
    username: "yash-dev",
    profileUrl: "https://github.com",
    tagline: "Building open source projects, refining full-stack apps, and committing clean code daily.",
    pinnedRepos: [
      { name: "food-ordering-system", stars: 12, forks: 4, language: "JavaScript", description: "Full-stack food ordering app with MERN stack." },
      { name: "library-management-system", stars: 9, forks: 2, language: "JavaScript", description: "Library tracking and book issue/return system." },
      { name: "ecommerce-clothing", stars: 15, forks: 5, language: "JavaScript", description: "Modern React & Node e-commerce platform." }
    ]
  }
};
