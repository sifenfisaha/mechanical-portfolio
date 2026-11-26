// All SUNEX LAB copy lives here. Content rules for this site:
// - Do not describe the owner as a student outside the Education section.
// - Do not invent clients, employment, results or certifications.
// - Label conceptual designs and learning projects as such.

export const site = {
  brand: "SUNEX LAB",
  owner: "Suhayl Hashim Mohammed",
  tagline: "From Machines to Intelligence.",
  role: "Mechanical Designer",
  positioning: [
    "Mechanical Designer",
    "CAD & Product Design",
    "Automation & Robotics Enthusiast",
  ],
  disciplines:
    "Mechanical Design | CAD | Product Development | Automation | Robotics",
  description:
    "SUNEX LAB is the engineering portfolio of Suhayl Hashim Mohammed, a mechanical designer working in CAD, product design, automation and robotics.",
  email: "suhaylhashim@gmail.com",
  location: "Ethiopia",
  // Put the CV PDF in /public (e.g. /public/cv/Suhayl-Hashim-Mohammed-CV.pdf)
  // and set its path here. The "Download CV" buttons stay hidden until then.
  cvUrl: "",
  socials: {
    linkedin: "https://www.linkedin.com/in/suhayl-hashim",
    instagram: "https://www.instagram.com/sunexlab",
    tiktok: "https://www.tiktok.com/@sunexlab",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Leadership", href: "/leadership" },
];

/* ---------------------------------------------------------------- Home */

export const hero = {
  title: ["Engineering ideas.", "Designing possibilities.", "Building the future."],
  subheadline: [
    "Mechanical Design",
    "CAD & Product Development",
    "Automation",
    "Robotics",
  ],
  body: "I transform engineering ideas into practical design concepts through mechanical design, computer-aided design, and innovative problem-solving.",
  tagline: "Designing today. Engineering tomorrow.",
  ctas: [
    { label: "Explore My Projects", href: "/projects" },
    { label: "Discover My Expertise", href: "/expertise" },
    { label: "Let's Connect", href: "/contact" },
  ],
};

export const intro = {
  paragraphs: [
    "My work combines mechanical engineering knowledge, 3D modeling, product development, and an interest in intelligent systems.",
    "From designing mechanical components and complex assemblies to exploring automation and robotics, I am driven by the challenge of turning ideas into engineering solutions.",
  ],
  belief:
    "I believe every great machine begins with an idea, develops through thoughtful design, and becomes meaningful through practical application.",
};

export const vision = {
  eyebrow: "My Vision",
  title: ["From mechanical design", "to intelligent systems."],
  paragraphs: [
    "I believe the future of engineering will be shaped by the integration of mechanical systems, artificial intelligence, automation, and robotics.",
    "My ambition is to contribute to the development of intelligent machines and advanced engineering technologies.",
  ],
  interestsLabel: "I am particularly interested in",
  interests: [
    "Humanoid Robotics",
    "Autonomous Machines",
    "Intelligent Manufacturing",
    "Automotive Engineering",
    "Aerospace Systems",
    "Advanced Mechanical Design",
    "Robotics and AI Integration",
  ],
  commitment:
    "I am committed to continuous learning, practical experimentation, and developing the technical capabilities required to contribute to the next generation of engineering.",
  closing:
    "The future is not only something we imagine. It is something we design, engineer, and build.",
};

/* ---------------------------------------------------------------- About */

export const about = {
  eyebrow: "About",
  title: ["The mind behind", "the designs."],
  subheadline:
    "Curiosity drives innovation. Engineering turns ideas into reality.",
  paragraphs: [
    "I am Suhayl Hashim Mohammed, a mechanical design enthusiast passionate about engineering innovation, product development, automation, and robotics.",
    "My journey is driven by a deep interest in understanding how machines work, how mechanical systems interact, and how engineering can solve real-world problems.",
    "I work with professional CAD software to develop 3D models, mechanical components, assemblies, and engineering concepts. My experience also includes practical engineering projects, automotive workshop environments, and exposure to automation and control systems.",
    "I enjoy exploring the connection between mechanical engineering and emerging technologies. My interests extend beyond traditional machine design into robotics, intelligent machines, and advanced engineering systems.",
    "Alongside technical development, I value leadership, creativity, collaboration, and continuous learning.",
    "I believe engineering is more than designing machines. It is about understanding problems, developing solutions, and creating technologies that improve the way people live and work.",
  ],
  philosophy: [
    "Think critically.",
    "Design purposefully.",
    "Build practically.",
    "Learn continuously.",
    "Innovate responsibly.",
  ],
  statement:
    "I don't just want to understand how machines work. I want to help design what comes next.",
  facts: [
    { label: "Based in", value: "Ethiopia" },
    { label: "Primary CAD", value: "SolidWorks · CATIA V5" },
    { label: "Certification", value: "Certified SolidWorks Professional (CSWP)" },
    { label: "Focus", value: "Mechanical design, automation & robotics" },
  ],
};

/* ------------------------------------------------------------ Expertise */

export const capabilities = {
  eyebrow: "What I Do",
  title: ["Engineering capabilities"],
  body: "My work and technical interests cover several interconnected areas of engineering, from mechanical design to intelligent systems.",
  items: [
    {
      number: "01",
      title: "Mechanical Design",
      text: "Developing mechanical components, assemblies, mechanisms, and engineering concepts with attention to functionality, structural considerations, and practical application.",
    },
    {
      number: "02",
      title: "Computer-Aided Design",
      text: "Creating detailed 3D models, mechanical assemblies, technical drawings, and engineering visualizations using professional CAD software.",
    },
    {
      number: "03",
      title: "Product Development",
      text: "Exploring engineering ideas from initial concepts to detailed designs through modeling, design iteration, and problem-solving.",
    },
    {
      number: "04",
      title: "Engineering Analysis",
      text: "Applying engineering calculations and developing simulation skills to understand mechanical behavior and evaluate design concepts.",
    },
    {
      number: "05",
      title: "Automation & Control",
      text: "Exploring the integration of mechanical systems, electrical components, sensors, controllers, and programming to develop automated solutions.",
    },
    {
      number: "06",
      title: "Robotics & Intelligent Systems",
      text: "Developing knowledge in robotics, intelligent machines, and the integration of mechanical engineering with programming and artificial intelligence.",
    },
  ],
};

export type Proficiency = "Proficient" | "Working Knowledge" | "Currently Learning";

// Filled segments out of three for the proficiency indicator.
export const proficiencyLevel: Record<Proficiency, number> = {
  Proficient: 3,
  "Working Knowledge": 2,
  "Currently Learning": 1,
};

export type Software = {
  name: string;
  proficiency: Proficiency;
  primary?: boolean;
  body: string;
  capabilities?: string[];
};

export const software = {
  eyebrow: "Software & Technical Skills",
  title: ["Engineering tools.", "Digital capabilities."],
  body: "I use engineering software and digital tools to design, model, document, and explore mechanical and automated systems.",
  bodyMore:
    "My technical toolkit includes professional CAD platforms, engineering drafting tools, simulation software, and automation technologies.",
  groups: [
    {
      title: "Mechanical CAD & Product Design",
      items: [
        {
          name: "SolidWorks",
          proficiency: "Proficient",
          primary: true,
          body: "My primary mechanical design tool for developing 3D parts, assemblies, technical drawings, and mechanical product concepts.",
          capabilities: [
            "3D Part Modeling",
            "Assembly Design",
            "Engineering Drawings",
            "Mechanical Component Design",
            "Exploded Views",
            "Design Visualization",
            "Motion Study Workflows",
            "Basic Simulation Workflows",
          ],
        },
        {
          name: "CATIA V5",
          proficiency: "Proficient",
          primary: true,
          body: "A professional CAD platform used for mechanical modeling, product design, and assembly development.",
          capabilities: [
            "Part Design",
            "Assembly Design",
            "Generative Shape Design",
            "Sketch-Based Modeling",
            "Mechanical Component Development",
            "3D Product Modeling",
          ],
        },
        {
          name: "Autodesk Fusion 360",
          proficiency: "Working Knowledge",
          body: "Experience with 3D modeling and integrated product design workflows.",
        },
        {
          name: "AutoCAD",
          proficiency: "Working Knowledge",
          body: "Experience with engineering drafting, technical drawings, dimensioning, and 2D layouts.",
        },
      ],
    },
    {
      title: "Engineering Simulation & Advanced Design",
      items: [
        {
          name: "Siemens NX",
          proficiency: "Currently Learning",
          body: "Developing knowledge of advanced CAD modeling and integrated product engineering workflows.",
        },
        {
          name: "ANSYS",
          proficiency: "Currently Learning",
          body: "Exploring finite element analysis, structural simulation, stress distribution, and deformation analysis.",
        },
      ],
    },
    {
      title: "Automation & Control",
      items: [
        {
          name: "Arduino",
          proficiency: "Working Knowledge",
          body: "Working knowledge of microcontrollers, basic programming, sensors, and electronic system integration.",
        },
        {
          name: "Siemens PLC & Zelio Logic",
          proficiency: "Working Knowledge",
          body: "Working knowledge of PLC fundamentals, ladder logic, control concepts, and basic automation systems.",
        },
      ],
    },
  ] satisfies { title: string; items: Software[] }[],
  programming: ["C/C++", "Python Fundamentals"],
  productivity: [
    "Google Workspace",
    "Canva",
    "Technical Documentation",
    "Engineering Presentations",
    "Project Coordination",
  ],
};

// Logo strip on the homepage; SolidWorks and CATIA V5 lead as primary tools.
export const toolStrip = [
  "SolidWorks",
  "CATIA V5",
  "Fusion 360",
  "AutoCAD",
  "Arduino",
  "Siemens PLC",
];

/* ----------------------------------------------------------- Experience */

export const experience = {
  eyebrow: "Professional Experience",
  title: ["Practical experience.", "Engineering exposure."],
  body: "Hands-on time in automotive workshops, working on vehicle systems, mechanical components and maintenance processes.",
  items: [
    {
      role: "Mechanical Engineering Intern",
      organization: "Tamrin Motors",
      period: "July–September 2025",
      description:
        "Completed a 45-day practical internship gaining exposure to automotive maintenance, inspection, and repair processes.",
      areas: [
        "Vehicle inspection and maintenance",
        "Suspension systems",
        "Transmission systems",
        "Vehicle body dent repair",
        "Painting and finishing processes",
        "Chassis inspection and repair processes",
      ],
      summary:
        "Gained practical exposure to automotive systems, mechanical components, workshop procedures, and vehicle maintenance practices.",
    },
    {
      role: "Automotive Workshop Trainee",
      organization: "Delil Garage",
      period: "June–September 2024",
      description:
        "Gained practical exposure to automotive workshop operations, particularly transmission systems and vehicle maintenance.",
      areas: [
        "Transmission systems",
        "Automotive components",
        "Workshop practices",
        "Mechanical troubleshooting",
        "Vehicle maintenance processes",
      ],
      summary:
        "Developed practical familiarity with automotive components, workshop environments, and mechanical maintenance activities.",
    },
  ],
};

/* ---------------------------------------------- Leadership & Education */

export const leadership = {
  eyebrow: "Leadership & Community",
  title: ["Beyond engineering:", "leadership & impact."],
  body: "Engineering is strengthened by communication, teamwork, responsibility, and the ability to work toward shared goals.",
  bodyMore:
    "My leadership experience has helped me develop organizational, coordination, and community engagement skills.",
  items: [
    {
      role: "President",
      organization: "Hira Muslim Students Association",
      period: "Since 2019",
      description:
        "Contributing to student leadership, educational development, community engagement, and organizational activities.",
      listLabel: "Responsibilities",
      list: [
        "Coordinating organizational activities",
        "Supporting educational initiatives",
        "Organizing student programs and events",
        "Encouraging teamwork and participation",
        "Supporting leadership and community development",
      ],
      stats: [],
    },
    {
      role: "Program Organizer / Volunteer",
      organization: "AI & Computer Literacy Initiative",
      period: "10-week program",
      description:
        "Contributed to organizing a 10-week AI and computer-literacy initiative for 25 children. The program recorded more than 90% attendance.",
      listLabel: "Contributions",
      list: [
        "Supporting program organization",
        "Coordinating learning activities",
        "Encouraging digital literacy",
        "Introducing young learners to AI and technology concepts",
      ],
      stats: [
        { value: "10", label: "Weeks" },
        { value: "25", label: "Children" },
        { value: "90%+", label: "Attendance" },
      ],
    },
    {
      role: "Group Leadership & Collaboration",
      organization: "ALX Pathway",
      period: "",
      description:
        "Contributed to group coordination, peer engagement, and collaborative learning throughout the ALX Pathway learning journey.",
      listLabel: "",
      list: [],
      stats: [],
    },
  ],
};

export const education = {
  eyebrow: "Education & Certifications",
  title: ["A foundation for", "continuous growth."],
  degree: {
    title: "Bachelor's Degree in Mechanical Engineering",
    institution: "Adama Science and Technology University (ASTU)",
    location: "Ethiopia",
    status: "In Progress",
  },
  certifications: [
    {
      title: "Certified SolidWorks Professional (CSWP)",
      body: "Professional certification demonstrating knowledge and proficiency in SolidWorks.",
    },
    {
      title: "ALX Pathway Foundations",
      body: "Graduate of the ALX Pathway Foundations program.",
    },
  ],
  development: [
    "Data Engineering learning through ALX",
    "Ongoing development in mechanical design",
    "Continuous learning in programming and automation",
    "Developing knowledge in robotics and intelligent systems",
    "Exploring advanced engineering simulation",
  ],
};

/* -------------------------------------------------------------- Contact */

export const contact = {
  eyebrow: "Contact",
  title: ["Let's build something", "meaningful."],
  paragraphs: [
    "I welcome opportunities to connect with engineering professionals, researchers, organizations, innovators, and potential collaborators.",
    "Whether it involves mechanical design, CAD projects, product development, engineering innovation, automation, or robotics, I am always interested in meaningful opportunities to learn, collaborate, and create.",
  ],
  cta: {
    title: "Have an engineering idea, project, or opportunity?",
    body: "Let's turn ideas into engineering solutions.",
    button: "Let's Connect",
  },
};

export const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Expertise", href: "/expertise" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Background",
    links: [
      { label: "Experience", href: "/experience" },
      { label: "Leadership", href: "/leadership" },
      { label: "Education", href: "/leadership#education" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: site.socials.linkedin },
      { label: "Instagram", href: site.socials.instagram },
      { label: "TikTok", href: site.socials.tiktok },
      { label: "Email", href: `mailto:${site.email}` },
    ],
  },
];
