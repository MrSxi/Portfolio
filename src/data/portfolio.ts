// ═══════════════════════════════════════════════════════════
// PORTFOLIO DATA — Amir Beshir
// Edit this file to update all content across the website.
// ═══════════════════════════════════════════════════════════

export const personalInfo = {
  name: "Amir Beshir",
  title: "Software Engineer",
  titles: [
    "Software Engineer",
    "Computer Science Student",
    "Researcher",
    "Full-Stack Developer",
    "Machine Learning Enthusiast",
  ],
  email: "amirbeshir78@gmail.com",
  phone: "+971 50 328 4651",
  location: "Abu Dhabi, UAE",
  github: "https://github.com/MrSxi",
  linkedin: "https://www.linkedin.com/in/amirbeshir",
  resumeUrl: "/resume.pdf",
  photo: "/amir-photo.jpg",
  tagline:
    "Dean's List CS student building production-ready systems — from AI search algorithms to enterprise cybersecurity operations.",
  bio: `I'm a Computer Science student at the American University of Ras Al Khaimah with a 3.8 CGPA, four Dean's List honors, and President's List recognition in Spring 2026. I build systems that work — from AI-powered planners using A* search to parallel transaction processors benchmarked across concurrency models.

My industry experience spans cybersecurity operations at Alpha Data, where I worked across NOC/SOC environments with tools like LogRhythm SIEM and Microsoft Defender, and mobile network planning at e& (Etisalat), where I analyzed deployment strategies across urban, suburban, and rural environments.

I'm fluent in Python, Java, and C++, with hands-on experience in database design, Linux system administration, and hardware-level FPGA programming. I approach every project with the same mindset: understand the problem deeply, design a clean solution, and document it thoroughly.`,
  interests: [
    "Artificial Intelligence",
    "Cybersecurity",
    "Parallel Computing",
    "Software Architecture",
    "Cloud Infrastructure",
    "Data Science",
  ],
  stats: [
    { label: "Projects Built", value: 11 },
    { label: "Certifications", value: 21 },
    { label: "Academic Awards", value: 5 },
    { label: "CGPA", value: 3.8, suffix: "" },
  ],
};

export const socialLinks = [
  { platform: "GitHub" as const, href: personalInfo.github },
  { platform: "LinkedIn" as const, href: personalInfo.linkedin },
  { platform: "Email" as const, href: `mailto:${personalInfo.email}` },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  university: "American University of Ras Al Khaimah",
  location: "Ras Al Khaimah, UAE",
  period: "August 2023 – May 2027",
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
      { name: "TypeScript", level: 65 },
      { name: "HTML/CSS", level: 80 },
      { name: "VHDL/Verilog", level: 60 },
    ],
  },
  {
    title: "Frameworks & Web",
    icon: "🌐",
    skills: [
      { name: "React", level: 60 },
      { name: "Next.js", level: 55 },
      { name: "Node.js", level: 55 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Pygame", level: 65 },
      { name: "Java Swing", level: 60 },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: "☁️",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "Database Design", level: 80 },
      { name: "PostgreSQL", level: 55 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 55 },
      { name: "AWS", level: 50 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🔧",
    skills: [
      { name: "Linux/Unix CLI", level: 80 },
      { name: "Cybersecurity Tools", level: 70 },
      { name: "LogRhythm SIEM", level: 60 },
      { name: "JUnit Testing", level: 65 },
      { name: "Microsoft Office", level: 90 },
      { name: "NI Multisim", level: 55 },
    ],
  },
  {
    title: "Soft Skills",
    icon: "🧠",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Leadership", level: 90 },
      { name: "Critical Thinking", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Presentation Skills", level: 85 },
      { name: "Project Management", level: 80 },
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
  downloadUrl?: string;
  downloadType?: "pdf" | "zip";
  highlights: string[];
}

// Ordered chronologically — newest first.
export const projects: Project[] = [
  {
    title: "Parallel Bank Transactions & Fraud Flags",
    description:
      "High-performance transaction processing system comparing serial, thread-based, and process-based architectures with automated benchmarking.",
    longDescription:
      "Engineered a comprehensive parallel processing simulation that benchmarks different concurrency models for financial transaction systems. The system evaluates serial, multi-threaded, and multi-process execution strategies, producing detailed speedup and efficiency metrics across varying processor counts. Includes race condition detection and fraud flag identification through controlled simulations.",
    technologies: ["Python", "Threading", "Multiprocessing", "Matplotlib"],
    category: "Systems",
    period: "Mar 2026 – May 2026",
    downloadUrl: "/projects/parallel-bank-transactions-fraud-flags.pdf",
    downloadType: "pdf",
    highlights: [
      "Benchmarked serial vs. parallel execution with speedup analysis",
      "Detected race conditions in concurrent transaction processing",
      "Generated efficiency plots across multiple processor configurations",
      "Implemented fraud detection flags in transaction pipeline",
    ],
  },
  {
    title: "Student At-Risk Recovery Planner",
    description:
      "AI-powered dashboard that generates optimal academic recovery plans using A* search with custom heuristics and pathfinding algorithms.",
    longDescription:
      "Built an intelligent academic recovery planning tool leveraging the A* search algorithm with custom-designed heuristics and cost models. The application compares performance against Greedy Best-First Search and Uniform Cost Search, featuring interactive what-if simulations and visual analytics through a polished Streamlit dashboard.",
    technologies: ["Python", "Streamlit", "A* Algorithm", "AI"],
    category: "AI",
    period: "Mar 2026 – May 2026",
    downloadUrl: "/projects/student-at-risk-recovery-planner.pdf",
    downloadType: "pdf",
    highlights: [
      "Implemented A* search from scratch with custom heuristic functions",
      "Comparative analysis with Greedy and Uniform Cost Search",
      "Interactive what-if simulation capabilities",
      "Visual analytics dashboard with recovery plan visualization",
    ],
  },
  {
    title: "Linux Ubuntu OS Deep Analysis",
    description:
      "Comprehensive analysis of Linux kernel internals including process management, scheduling algorithms, memory systems, and security architecture.",
    longDescription:
      "Conducted an in-depth technical analysis of Ubuntu Linux, examining process and thread lifecycle management, CPU scheduling policies, synchronization primitives, virtual memory management, and security frameworks. Utilized system monitoring tools for live behavioral tracing and documented ethical considerations in OS design.",
    technologies: ["Linux", "Ubuntu", "htop", "strace", "VirtualBox"],
    category: "Systems",
    period: "Mar 2026 – May 2026",
    downloadUrl: "/projects/linux-ubuntu-os-deep-analysis.pdf",
    downloadType: "pdf",
    highlights: [
      "Traced process lifecycle with ps, strace, and htop",
      "Analyzed scheduling algorithms and synchronization mechanisms",
      "Documented memory management and security architectures",
      "Explored ethical and legal aspects of OS design",
    ],
  },
  {
    title: "FSM Controller — Moore Machine FPGA",
    description:
      "Hardware-verified finite state machine controller designed in HDL, synthesized and tested on FPGA with real-time LED output.",
    longDescription:
      "Designed and implemented both memoryless and memory-based Moore Machine finite state machine controllers using hardware description languages. The project involved simulating state transitions, memory addressing protocols, and completion signaling, with successful FPGA synthesis producing real-time LED output verification.",
    technologies: ["VHDL", "Verilog", "FPGA", "Digital Logic"],
    category: "Hardware",
    period: "Oct 2025 – Dec 2025",
    downloadUrl: "/projects/fsm-controller-moore-machine-fpga.pdf",
    downloadType: "pdf",
    highlights: [
      "Designed memoryless and memory-based FSM architectures",
      "Simulated state transitions and memory addressing",
      "Synthesized and verified on physical FPGA hardware",
      "Integrated multithreading concepts in hardware design",
    ],
  },
  {
    title: "4-bit Array Multiplier on FPGA",
    description:
      "Combinational 4-bit array multiplier built from full-adder modules in VHDL, synthesized on FPGA with 7-segment display output.",
    longDescription:
      "Designed and implemented a 4-bit array multiplier for the Computer Architecture Lab (CENG 336) using structural VHDL. The design composes reusable full-adder modules into a partial-product array, decodes the 8-bit result to on-board 7-segment displays, and maps switch inputs to operands. Verified through simulation testbenches and live synthesis on FPGA hardware.",
    technologies: ["VHDL", "FPGA", "Digital Logic", "Computer Architecture"],
    category: "Hardware",
    period: "Sep 2025 – Nov 2025",
    downloadUrl: "/projects/4-bit-array-multiplier-fpga.pdf",
    downloadType: "pdf",
    highlights: [
      "Built the multiplier structurally from reusable full-adder modules",
      "Decoded the 8-bit product to on-board 7-segment displays",
      "Verified functionality with simulation testbenches",
      "Synthesized and demonstrated on physical FPGA hardware",
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
    downloadUrl: "/projects/database-design-implementation.pdf",
    downloadType: "pdf",
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
      "Feature-rich GUI application with role-based authentication, group registration discounts, and UML-documented architecture.",
    longDescription:
      "Developed a comprehensive Java Swing event management platform with a secure, role-based login system. Students register for events while staff manage events and view detailed participant information. Features group registration with dynamic input field generation and a 10% discount for groups of two or more. Architecture follows OOP principles with inheritance, polymorphism, and encapsulation, with data persistence via Java serialization. Documented with UML class and sequence diagrams.",
    technologies: ["Java", "Swing", "OOP", "PlantUML", "Serialization"],
    category: "Full-Stack",
    period: "May 2025 – Jun 2025",
    downloadUrl: "/projects/campus-event-management-system.zip",
    downloadType: "zip",
    highlights: [
      "Implemented secure role-based authentication (Student/Staff)",
      "Built group registration with dynamic input fields and 10% discount",
      "Designed class and sequence UML diagrams for documentation",
      "Applied Builder pattern for flexible registration workflows",
    ],
  },
  {
    title: "Network Analysis of Human Apoptosis Protein Interaction",
    description:
      "Graph-theoretic analysis of human apoptosis protein-protein interaction networks with advanced centrality metrics and visualization.",
    longDescription:
      "Analyzed complex biological protein-protein interaction networks using graph theory and network science. Extracted comprehensive metrics including node/edge counts, network density, clustering coefficients, connected components, diameter, and multiple centrality measures. Created rich visualizations revealing structural and functional network properties.",
    technologies: ["Python", "NetworkX", "Graph Theory", "Data Visualization"],
    category: "Data Science",
    period: "Apr 2025 – May 2025",
    downloadUrl:
      "/projects/network-analysis-human-apoptosis-protein-interaction.pdf",
    downloadType: "pdf",
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
    downloadUrl: "/projects/java-supermarket-system.pdf",
    downloadType: "pdf",
    highlights: [
      "Managed customers, products, sales, and inventory",
      "Demonstrated OOP principles in a business scenario",
      "Implemented persistent data storage",
      "Built comprehensive CRUD operations",
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
    downloadUrl: "/projects/flappy-bird-game.zip",
    downloadType: "zip",
    highlights: [
      "Built real-time game loop with smooth frame-rate management",
      "Implemented pixel-perfect collision detection",
      "Created dynamic pipe generation and scrolling mechanics",
      "Designed score tracking and game-over state management",
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
    downloadUrl: "/projects/food-ordering-system.zip",
    downloadType: "zip",
    highlights: [
      "Supported multiple restaurant menus",
      "Implemented cart management with item tracking",
      "Calculated totals with VAT and delivery fees",
      "Designed intuitive console-based user interface",
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
    title: "Research Assistant",
    company: "American University of Ras Al Khaimah — Computer Science & Engineering",
    location: "Ras Al Khaimah, UAE",
    period: "August 2026 – Present",
    type: "Research",
    description:
      "Conducting undergraduate research under Dr. Khouloud Salameh across two projects: a predictive model for student academic performance, and a continuation of the SSG framework for knowledge graph-based semantic annotation of SVG images.",
    responsibilities: [
      "Building a machine learning model to predict student grades and flag at-risk academic performance",
      "Extending SSG — an unsupervised framework that converts SVG images into RDF semantic graphs — by replacing its manually configured shape, area, position, and color similarity weights with automatic optimization",
      "Benchmarking optimized against baseline feature weighting on a labelled dataset of SVG objects derived from panoramic dental X-ray images, measured on precision, recall, and F1-score",
      "Reviewing literature on similarity learning and feature-weight optimization to select and justify a suitable optimization method",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "Knowledge Graphs",
      "RDF / Semantic Web",
      "Clustering",
      "Optimization",
    ],
  },
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
  /** Human-readable issue date, e.g. "August 2026". Rendered when present. */
  issueDate?: string;
  /** Credential ID from the issuer. Rendered as a mono chip when present. */
  credentialId?: string;
  /** Skills covered by the credential. Rendered as tags when present. */
  skills?: string[];
  /** External verification link (e.g. Coursera credential URL). */
  credentialUrl?: string;
  downloadUrl?: string;
}

export const certifications: Certification[] = [
  // ── Coursera coursework ──
  // ⚠️ issueDate / credentialId / credentialUrl are omitted below because they
  // are specific to your account — paste them in from Coursera and the card
  // will render them automatically. Skills tags are derived from the syllabi.
  {
    name: "An Intuitive Introduction to Probability",
    issuer: "University of Zurich",
    category: "Mathematics",
    skills: ["Probability", "Statistics", "Random Variables"],
  },
  {
    name: "Mathematics for Machine Learning: Linear Algebra",
    issuer: "Imperial College London",
    category: "Mathematics",
    skills: ["Linear Algebra", "Vectors & Matrices", "Eigenvectors", "Python"],
  },
  {
    name: "Python Data Structures",
    issuer: "University of Michigan",
    category: "Programming",
    skills: ["Python", "Data Structures", "Dictionaries", "File I/O"],
  },
  {
    name: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    category: "Programming",
    skills: ["Python", "Programming Fundamentals", "Control Flow"],
  },
  {
    name: "Generative AI Foundations Exam 1",
    issuer: "GMetrix",
    category: "AI",
    downloadUrl: "/certifications/generative-ai-foundations-exam-1.pdf",
  },
  {
    name: "Generative AI Foundations Exam 2",
    issuer: "GMetrix",
    category: "AI",
    downloadUrl: "/certifications/generative-ai-foundations-exam-2.pdf",
  },
  {
    name: "Accenture AI & Generative AI Program",
    issuer: "Accenture",
    category: "AI",
    downloadUrl: "/certifications/accenture-ai-gen-ai-program.pdf",
  },
  {
    name: "Advanced Algorithms and Complexity",
    issuer: "UC San Diego (Coursera)",
    category: "Algorithms",
    downloadUrl: "/certifications/advanced-algorithms-and-complexity.pdf",
  },
  {
    name: "Operating Systems",
    issuer: "BITS Pilani (Coursera)",
    category: "Systems",
    downloadUrl: "/certifications/operating-systems.pdf",
  },
  {
    name: "AI Technology and Applications",
    issuer: "Huawei ICT Academy",
    category: "AI",
    downloadUrl: "/certifications/ai-technology-and-applications.pdf",
  },
  {
    name: "Network HCIA-Security V4.0",
    issuer: "Huawei ICT Academy",
    category: "Security",
    downloadUrl: "/certifications/network-hcia-security-v4.pdf",
  },
  {
    name: "Python Programming Basics",
    issuer: "Huawei ICT Academy",
    category: "Programming",
    downloadUrl: "/certifications/python-programming-basics.pdf",
  },
  {
    name: "Getting Started in Cybersecurity",
    issuer: "Fortinet",
    category: "Security",
    downloadUrl: "/certifications/getting-started-in-cybersecurity.jfif",
  },
  {
    name: "Technical Introduction to Cybersecurity",
    issuer: "Fortinet",
    category: "Security",
    downloadUrl: "/certifications/technical-introduction-to-cybersecurity.jfif",
  },
  {
    name: "Introduction to the Threat Landscape",
    issuer: "Fortinet",
    category: "Security",
    downloadUrl: "/certifications/introduction-to-the-threat-landscape.jfif",
  },
  {
    name: "FortiGate Operator",
    issuer: "Fortinet",
    category: "Security",
    downloadUrl: "/certifications/fortigate-operator.jfif",
  },
  {
    name: "Sustainability Foundations: Core Concepts",
    issuer: "LinkedIn Learning",
    category: "Sustainability",
    downloadUrl:
      "/certifications/sustainability-foundations-core-concepts.jfif",
  },
  {
    name: "Employee Engagement: Making Sustainability Part of Everybody's Job",
    issuer: "LinkedIn Learning",
    category: "Sustainability",
    downloadUrl: "/certifications/employee-engagement-sustainability.jfif",
  },
  {
    name: "ESG Fundamentals for Financial Decision-Making",
    issuer: "LinkedIn Learning",
    category: "Sustainability",
    downloadUrl: "/certifications/esg-fundamentals.jfif",
  },
  {
    name: "Green Jobs for Sustainable Careers",
    issuer: "LinkedIn Learning",
    category: "Sustainability",
    downloadUrl: "/certifications/green-jobs-for-sustainable-careers.jfif",
  },
  {
    name: "Closing the Green Skills Gap",
    issuer: "LinkedIn Learning",
    category: "Sustainability",
    downloadUrl: "/certifications/closing-the-green-skills-gap.jfif",
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  downloadUrl?: string;
  featured?: boolean;
}

export const achievements: Achievement[] = [
  {
    title: "President's List — Spring 2026",
    description:
      "Awarded the university's highest academic honor for exceptional performance during the Spring 2026 semester at AURAK.",
    icon: "👑",
    downloadUrl: "/awards/presidents-list-spring-2026.pdf",
    featured: true,
  },
  {
    title: "Dean's List — Fall 2023",
    description:
      "Recognized for outstanding academic performance during the first semester at AURAK.",
    icon: "🏆",
    downloadUrl: "/awards/deans-list-fall-2023.pdf",
  },
  {
    title: "Dean's List — Fall 2024",
    description:
      "Maintained academic excellence with consistently high GPA throughout the second year.",
    icon: "🏆",
    downloadUrl: "/awards/deans-list-fall-2024.pdf",
  },
  {
    title: "Dean's List — Spring 2025",
    description:
      "Continued record of distinction, demonstrating sustained commitment to academic rigor.",
    icon: "🏆",
    downloadUrl: "/awards/deans-list-spring-2025.pdf",
  },
  {
    title: "Dean's List — Fall 2025",
    description:
      "Achieved top academic honors while balancing a full course load with industry internships.",
    icon: "🏆",
    downloadUrl: "/awards/deans-list-fall-2025.pdf",
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Arabic", level: "Native" },
];

export const seo = {
  // Rendered verbatim as the <title> tag.
  title: "Amir Besher - CS Student",
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
  url: "https://amirbeshir.tech",
  ogImage: "/og-image.png",
};
