// ═══════════════════════════════════════════════════════════
// PORTFOLIO DATA — Amir Beshir
// Edit this file to update all content across the website.
// ═══════════════════════════════════════════════════════════

export const personalInfo = {
  name: "Amir Beshir",
  title: "Software Engineer",
  titles: [
    "Software Engineer",
    "Computer Scientist",
    "Computer Science Student",
    "Problem Solver",
    "Full-Stack Developer",
  ],
  email: "amirbeshir78@gmail.com",
  phone: "+971 50 328 4651",
  location: "Abu Dhabi, UAE",
  github: "https://github.com/MrSxi",
  linkedin: "https://www.linkedin.com/in/amirbeshir",
  resumeUrl: "/resume.pdf",
  photo: "/amir-photo.jpg",
  tagline:
    "Crafting elegant software solutions through clean code, algorithmic thinking, and a passion for building impactful systems.",
  bio: `I'm a fourth-year Computer Science student at the American University of Ras Al Khaimah, driven by a deep curiosity for how systems work at every level — from hardware architecture to high-level applications.

My journey spans AI search algorithms, parallel processing systems, cybersecurity operations, and full-stack development. I thrive at the intersection of theory and practice, turning complex problems into well-documented, efficient solutions.

With hands-on experience in network operations, security analysis, and mobile network planning at industry leaders like e& (Etisalat) and Alpha Data, I bring both academic rigor and real-world perspective to every project I build.`,
  interests: [
    "Artificial Intelligence",
    "Parallel Computing",
    "Cybersecurity",
    "Software Architecture",
    "Data Science",
    "Cloud Infrastructure",
  ],
  stats: [
    { label: "Projects Built", value: 11 },
    { label: "Certifications", value: 14 },
    { label: "Dean's List Awards", value: 4 },
    { label: "CGPA", value: 3.8, suffix: "" },
  ],
};

export const education = {
  degree: "Bachelor of Science in Computer Science",
  university: "American University of Ras Al Khaimah",
  location: "Ras Al Khaimah, UAE",
  period: "August 2023 – Present",
  expectedGraduation: "2027",
  cgpa: "3.8",
  coursework: [
    "Software Engineering",
    "Artificial Intelligence",
    "Parallel Programming",
    "Operating Systems",
    "Computer Architecture",
    "Advanced Algorithms",
    "Database Systems",
    "Data Structures",
  ],
};

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C++", level: 75 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "HTML/CSS", level: 80 },
      { name: "VHDL/Verilog", level: 60 },
      { name: "LaTeX", level: 65 },
    ],
  },
  {
    title: "Frameworks & Web",
    icon: "🌐",
    skills: [
      { name: "React", level: 60 },
      { name: "Node.js", level: 55 },
      { name: "Next.js", level: 50 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "☁️",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 55 },
      { name: "AWS", level: 50 },
      { name: "Docker", level: 55 },
      { name: "Git", level: 85 },
      { name: "Database Design", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🔧",
    skills: [
      { name: "Linux/Unix CLI", level: 80 },
      { name: "Cybersecurity Tools", level: 70 },
      { name: "JUnit Testing", level: 65 },
      { name: "Microsoft Office", level: 90 },
      { name: "NI Multisim", level: 55 },
      { name: "Pygame", level: 60 },
    ],
  },
  {
    title: "Soft Skills",
    icon: "🧠",
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Problem Solving", level: 95 },
      { name: "Critical Thinking", level: 90 },
      { name: "Project Management", level: 80 },
      { name: "Presentation Skills", level: 85 },
      { name: "Creativity & Innovation", level: 80 },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  period: string;
  github?: string;
  liveUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "Parallel Processing & OS Simulation",
    description:
      "High-performance transaction processing system comparing serial, thread-based, and process-based architectures with automated benchmarking.",
    longDescription:
      "Engineered a comprehensive parallel processing simulation that benchmarks different concurrency models for financial transaction systems. The system evaluates serial, multi-threaded, and multi-process execution strategies, producing detailed speedup and efficiency metrics across varying processor counts. Includes race condition detection and fraud flag identification.",
    technologies: ["Python", "Threading", "Multiprocessing", "Matplotlib"],
    category: "Systems",
    period: "Mar 2026 – May 2026",
    highlights: [
      "Benchmarked serial vs. parallel execution with speedup analysis",
      "Detected race conditions in concurrent transaction processing",
      "Generated efficiency plots across multiple processor configurations",
      "Implemented fraud detection flags in transaction pipeline",
    ],
  },
  {
    title: "A* Search Recovery Planner",
    description:
      "AI-powered desktop dashboard that generates optimal academic recovery plans using custom heuristics and pathfinding algorithms.",
    longDescription:
      "Built an intelligent academic recovery planning tool leveraging the A* search algorithm with custom-designed heuristics and cost models. The application compares performance against Greedy Search and Uniform Cost Search, featuring interactive what-if simulations and visual analytics through a polished desktop GUI.",
    technologies: ["Python", "Tkinter", "PyQt", "A* Algorithm", "AI"],
    category: "AI",
    period: "Mar 2026 – May 2026",
    highlights: [
      "Implemented A* search from scratch with custom heuristic functions",
      "Comparative analysis with Greedy and Uniform Cost Search",
      "Interactive what-if simulation capabilities",
      "Visual analytics dashboard with recovery plan visualization",
    ],
  },
  {
    title: "Linux OS Deep Analysis",
    description:
      "Comprehensive analysis of Linux kernel internals including process management, scheduling algorithms, memory systems, and security architecture.",
    longDescription:
      "Conducted an in-depth technical analysis of Ubuntu Linux, examining process and thread lifecycle management, CPU scheduling policies, synchronization primitives, virtual memory management, and security frameworks. Utilized system monitoring tools for live behavioral tracing and documented ethical considerations in OS design.",
    technologies: ["Linux", "Ubuntu", "htop", "strace", "VirtualBox"],
    category: "Systems",
    period: "Mar 2026 – May 2026",
    highlights: [
      "Traced process lifecycle with ps, strace, and htop",
      "Analyzed scheduling algorithms and synchronization mechanisms",
      "Documented memory management and security architectures",
      "Explored ethical and legal aspects of OS design",
    ],
  },
  {
    title: "FSM Controller — Moore Machine",
    description:
      "Hardware-verified finite state machine controller designed in HDL, synthesized and tested on FPGA with real-time LED output.",
    longDescription:
      "Designed and implemented both memoryless and memory-based Moore Machine finite state machine controllers using hardware description languages. The project involved simulating state transitions, memory addressing protocols, and completion signaling, with successful FPGA synthesis producing real-time LED output verification.",
    technologies: ["VHDL", "Verilog", "FPGA", "Digital Logic"],
    category: "Hardware",
    period: "Oct 2025 – Dec 2025",
    highlights: [
      "Designed memoryless and memory-based FSM architectures",
      "Simulated state transitions and memory addressing",
      "Synthesized and verified on physical FPGA hardware",
      "Integrated multithreading concepts in hardware design",
    ],
  },
  {
    title: "Database Design & Implementation",
    description:
      "Full-lifecycle database system with ER modeling, normalization to 3NF, and GDPR-compliant access controls for real-world management scenarios.",
    longDescription:
      "Modeled and implemented a complete relational database system for a real-world management scenario. Applied database normalization from First Normal Form through Third Normal Form, designed comprehensive ER diagrams, and implemented complex SQL queries. Addressed data privacy regulations including GDPR compliance and ethical access control patterns.",
    technologies: ["MySQL", "SQL", "ER Diagrams", "Database Design"],
    category: "Backend",
    period: "Oct 2025 – Nov 2025",
    highlights: [
      "Applied normalization from 1NF to 3NF",
      "Designed comprehensive ER and relational models",
      "Implemented GDPR-compliant access control patterns",
      "Built complex SQL queries for data management",
    ],
  },
  {
    title: "Campus Event Management System",
    description:
      "Feature-rich GUI application for campus event registration with automated fee calculation, built using advanced OOP and design patterns.",
    longDescription:
      "Developed a comprehensive event management platform featuring participant registration, event creation, optional service management, and automated fee calculation. Built with Java Swing, the application demonstrates advanced object-oriented principles including inheritance, polymorphism, and the Builder design pattern for flexible registration workflows.",
    technologies: ["Java", "Swing", "OOP", "Builder Pattern"],
    category: "Full-Stack",
    period: "Jun 2025 – Aug 2025",
    highlights: [
      "Applied Builder pattern for flexible registration creation",
      "Implemented inheritance and polymorphism hierarchies",
      "Built automated fee calculation with optional services",
      "Designed intuitive GUI with Java Swing",
    ],
  },
  {
    title: "Protein Interaction Network Analysis",
    description:
      "Graph-theoretic analysis of human apoptosis protein-protein interaction networks with advanced centrality metrics and visualization.",
    longDescription:
      "Analyzed complex biological protein-protein interaction networks using graph theory and network science. Extracted comprehensive metrics including node/edge counts, network density, clustering coefficients, connected components, diameter, and multiple centrality measures. Created rich visualizations revealing structural and functional network properties.",
    technologies: ["Python", "NetworkX", "Graph Theory", "Data Visualization"],
    category: "Data Science",
    period: "Apr 2025 – May 2025",
    highlights: [
      "Computed network density, clustering, and centrality metrics",
      "Analyzed connected components and network diameter",
      "Created visualizations of structural network properties",
      "Applied graph theory to biological interaction data",
    ],
  },
  {
    title: "Java Supermarket System",
    description:
      "Comprehensive business management application handling customer data, product inventory, sales tracking, and stock management.",
    longDescription:
      "Developed a full-featured Java application for managing end-to-end supermarket operations. The system handles customer relationship management, product catalogue maintenance, sales transaction processing, and real-time stock level tracking, demonstrating strong command of Java and object-oriented design principles in a business-focused context.",
    technologies: ["Java", "OOP", "File I/O"],
    category: "Full-Stack",
    period: "Mar 2024 – May 2024",
    highlights: [
      "Managed customers, products, sales, and inventory",
      "Demonstrated OOP principles in a business scenario",
      "Implemented persistent data storage",
      "Built comprehensive CRUD operations",
    ],
  },
  {
    title: "Food Ordering System",
    description:
      "Multi-restaurant console application with cart management, VAT calculations, and delivery fee processing.",
    longDescription:
      "Built a console-based ordering platform supporting multiple restaurant menus with interactive menu display, shopping cart management, and automated cost calculation including VAT and delivery fees. Designed with clean architecture and user-friendly console interaction patterns.",
    technologies: ["C++", "OOP", "Console UI"],
    category: "Full-Stack",
    period: "Sep 2023 – Oct 2023",
    highlights: [
      "Supported multiple restaurant menus",
      "Implemented cart management with item tracking",
      "Calculated totals with VAT and delivery fees",
      "Designed intuitive console-based user interface",
    ],
  },
  {
    title: "Flappy Bird Game",
    description:
      "Recreation of the classic Flappy Bird game using Python and Pygame with polished graphics, collision detection, and score tracking.",
    longDescription:
      "Developed a fully functional version of the classic Flappy Bird game using Python and the Pygame library, addressing graphical and functional limitations to deliver a robust and engaging user experience. The game challenges players to navigate a bird through a series of moving pipes, aiming to achieve the highest score without colliding with obstacles. Features smooth animations, real-time collision detection, and a persistent high-score system.",
    technologies: ["Python", "Pygame", "Game Development"],
    category: "Full-Stack",
    period: "2024",
    highlights: [
      "Built real-time game loop with smooth frame-rate management",
      "Implemented pixel-perfect collision detection",
      "Created dynamic pipe generation and scrolling mechanics",
      "Designed score tracking and game-over state management",
    ],
  },
  {
    title: "Discrete Mathematics Network Analysis",
    description:
      "Python-based network interaction project applying discrete mathematics concepts to analyze graph structures and network properties.",
    longDescription:
      "Built a Python application that models and analyzes network interactions through the lens of discrete mathematics. Applied concepts from graph theory, set theory, and combinatorics to study network topologies, connectivity patterns, and structural properties. The project bridges theoretical discrete math with practical computational analysis.",
    technologies: ["Python", "NetworkX", "Discrete Mathematics", "Graph Theory"],
    category: "Data Science",
    period: "Mar 2025 – May 2025",
    highlights: [
      "Applied discrete mathematics to real-world network analysis",
      "Modeled graph structures and connectivity properties",
      "Computed network metrics using combinatorial techniques",
      "Visualized network topologies and interaction patterns",
    ],
  },
];

export const projectCategories = [
  "All",
  "AI",
  "Systems",
  "Full-Stack",
  "Backend",
  "Data Science",
  "Hardware",
];

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    title: "Mobile Planner Intern",
    company: "e& (Etisalat)",
    location: "Abu Dhabi, UAE",
    period: "May 2026 – Jul 2026",
    type: "Internship",
    description:
      "Completed an internship at e& (Etisalat) in the Mobile Planning Department, gaining hands-on exposure to mobile network planning and telecom infrastructure concepts including base stations, mobile site types, antenna arrangements, and deployment strategies across different environments.",
    responsibilities: [
      "Gained hands-on exposure to base station configurations, mobile site types, and antenna arrangement design",
      "Analyzed how deployment decisions vary across urban, suburban, and rural environments",
      "Strengthened technical analysis, documentation, and presentation skills through real-world telecom operations",
    ],
    technologies: [
      "Mobile Planning",
      "Wireless Technologies",
      "Coverage Analysis",
      "Technical Documentation",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company: "Alpha Data",
    location: "Abu Dhabi, UAE",
    period: "May 2025 – Jul 2025",
    type: "Internship",
    description:
      "Gained hands-on experience in enterprise IT operations across Network Operations Center (NOC) and Security Operations Center (SOC) environments at one of the Middle East's leading IT solutions providers.",
    responsibilities: [
      "Assisted senior engineers with hardware and software troubleshooting, enhancing technical support skills",
      "Participated in network configuration and security diagnostics, contributing to the integrity of IT systems",
      "Supported end-users and maintained IT infrastructure, ensuring seamless operations in a client-focused environment",
      "Operated NOC/SOC monitoring dashboards using OpManager, Log360, and LogRhythm SIEM",
    ],
    technologies: [
      "OpManager",
      "Log360",
      "Microsoft Defender",
      "LogRhythm SIEM",
      "Cybersecurity",
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    name: "Advanced Algorithms and Complexity",
    issuer: "UC San Diego (Coursera)",
    category: "Algorithms",
  },
  {
    name: "Operating Systems",
    issuer: "BITS Pilani (Coursera)",
    category: "Systems",
  },
  {
    name: "AI Technology and Applications",
    issuer: "Huawei ICT Academy",
    category: "AI",
  },
  {
    name: "Network HCIA-Security V4.0",
    issuer: "Huawei ICT Academy",
    category: "Security",
  },
  {
    name: "Python Programming Basics",
    issuer: "Huawei ICT Academy",
    category: "Programming",
  },
  {
    name: "Getting Started in Cybersecurity",
    issuer: "Fortinet",
    category: "Security",
  },
  {
    name: "Technical Introduction to Cybersecurity",
    issuer: "Fortinet",
    category: "Security",
  },
  {
    name: "Introduction to the Threat Landscape",
    issuer: "Fortinet",
    category: "Security",
  },
  {
    name: "FortiGate Operator",
    issuer: "Fortinet",
    category: "Security",
  },
  {
    name: "Sustainability Foundations: Core Concepts",
    issuer: "LinkedIn Learning",
    category: "Sustainability",
  },
  {
    name: "Employee Engagement: Making Sustainability Part of Everybody's Job",
    issuer: "LinkedIn Learning",
    category: "Sustainability",
  },
  {
    name: "ESG Fundamentals for Financial Decision-Making",
    issuer: "LinkedIn Learning",
    category: "Sustainability",
  },
  {
    name: "Green Jobs for Sustainable Careers",
    issuer: "LinkedIn Learning",
    category: "Sustainability",
  },
  {
    name: "Closing the Green Skills Gap",
    issuer: "LinkedIn Learning",
    category: "Sustainability",
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: "Dean's List — Fall 2023",
    description:
      "Recognized for outstanding academic performance during the first semester at AURAK.",
    icon: "🏆",
  },
  {
    title: "Dean's List — Fall 2024",
    description:
      "Maintained academic excellence with consistently high GPA throughout the second year.",
    icon: "🏆",
  },
  {
    title: "Dean's List — Spring 2025",
    description:
      "Continued record of distinction, demonstrating sustained commitment to academic rigor.",
    icon: "🏆",
  },
  {
    title: "Dean's List — Fall 2025",
    description:
      "Achieved top academic honors while balancing a full course load with industry internships.",
    icon: "🏆",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Arabic", level: "Native" },
];

export const seo = {
  title: "Amir Beshir — Software Engineer & CS Student",
  description:
    "Portfolio of Amir Beshir — Computer Science student specializing in software engineering, AI, parallel computing, and cybersecurity. Explore projects, certifications, and professional experience.",
  keywords: [
    "Amir Beshir",
    "Software Engineer",
    "Computer Science",
    "Portfolio",
    "AURAK",
    "Python Developer",
    "Java Developer",
    "UAE Developer",
    "Abu Dhabi",
    "AI",
    "Cybersecurity",
  ],
  url: "https://amirbeshir.me",
  ogImage: "/og-image.png",
};
