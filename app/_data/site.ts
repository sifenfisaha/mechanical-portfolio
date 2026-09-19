// All portfolio copy lives here. Replace the placeholder name, links and
// testimonials with real details before publishing.

export const site = {
  name: "Your Name",
  role: "Mechanical Engineer",
  email: "hello@example.com",
  location: "City, Country",
  availability: "Available for full-time roles and contract work",
  description:
    "Mechanical engineer specializing in CAD, FEA and design for manufacture.",
  socials: {
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
  },
};

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "Tools", href: "/tools" },
  { label: "Showcase", href: "/showcase" },
  { label: "Testimonials", href: "/testimonials" },
];

export const hero = {
  title: ["Mechanical design", "built for production."],
  body: "I'm a mechanical engineer specializing in CAD, FEA and design for manufacture. I take parts and assemblies from first sketch to tested prototype and production-ready drawings.",
  cta: { label: "View Projects", href: "/projects" },
};

export const tools = ["SolidWorks", "AutoCAD", "ANSYS", "Fusion 360", "MATLAB"];

export const toolGroups = [
  {
    title: "CAD & Drafting",
    body: "Part and assembly modeling, surfacing and detailed drawings to ASME Y14.5.",
    items: [
      { name: "SolidWorks", level: 95 },
      { name: "Fusion 360", level: 85 },
      { name: "AutoCAD", level: 90 },
      { name: "CATIA V5", level: 70 },
    ],
  },
  {
    title: "Simulation & Analysis",
    body: "Structural, thermal and flow analysis to verify designs before anything is made.",
    items: [
      { name: "ANSYS Mechanical", level: 85 },
      { name: "ANSYS Fluent", level: 70 },
      { name: "SolidWorks Simulation", level: 90 },
      { name: "Hand calculations", level: 95 },
    ],
  },
  {
    title: "Programming & Data",
    body: "Scripts for engineering calculations, test data processing and design automation.",
    items: [
      { name: "MATLAB / Simulink", level: 85 },
      { name: "Python", level: 75 },
      { name: "Excel / VBA", level: 80 },
      { name: "Arduino / C", level: 65 },
    ],
  },
  {
    title: "Manufacturing",
    body: "Hands-on experience with machining, additive manufacturing and fabrication.",
    items: [
      { name: "CNC machining & CAM", level: 75 },
      { name: "3D printing (FDM / SLA)", level: 90 },
      { name: "Sheet metal & welding", level: 70 },
      { name: "Inspection & metrology", level: 75 },
    ],
  },
];

export const methods = [
  "GD&T (ASME Y14.5)",
  "Design for manufacture & assembly",
  "FMEA",
  "Tolerance stack-up analysis",
  "Material selection",
  "Fatigue & fracture analysis",
  "Bill of materials management",
  "Technical documentation",
];

export const work = {
  title: ["Selected projects"],
  body: "Recent work in vehicle design, powertrains and aerospace structures. Each project has a full case study.",
};

export const process = {
  title: ["How I work"],
  body: "Each design is modeled, analyzed and tested before drawings are released for manufacture.",
  steps: [
    {
      number: "01",
      title: "Design and CAD",
      text: "Parametric 3D models and fully dimensioned drawings with clear tolerances.",
    },
    {
      number: "02",
      title: "Analysis",
      text: "FEA, CFD and hand calculations to confirm strength, stiffness and thermal performance.",
    },
    {
      number: "03",
      title: "Prototyping and manufacture",
      text: "Design-for-manufacture reviews, supplier-ready files and testing of first articles.",
    },
  ],
};

export const processPhases = [
  {
    number: "01",
    title: "Requirements",
    body: "Define the problem before designing anything: loads, operating conditions, cost targets, production volume and fixed constraints. The result is a short requirements document agreed with the client.",
    deliverables: ["Requirements brief", "Design constraints", "Success criteria"],
  },
  {
    number: "02",
    title: "Concept and CAD",
    body: "Sketch several concepts, compare them against the requirements, and develop the strongest one into a complete parametric assembly.",
    deliverables: ["Concept sketches", "3D assembly model", "Trade-off matrix"],
  },
  {
    number: "03",
    title: "Analysis",
    body: "Check strength, stiffness, fatigue life and thermal behavior with FEA, CFD and hand calculations. Problems found at this stage are the cheapest to fix.",
    deliverables: ["FEA / CFD reports", "Safety factors", "Design revisions"],
  },
  {
    number: "04",
    title: "Prototyping and testing",
    body: "Make critical parts by 3D printing or machining and test them against the requirements. Test results are fed back into the model.",
    deliverables: ["Prototype parts", "Test plan & results", "Updated model"],
  },
  {
    number: "05",
    title: "Release for manufacture",
    body: "Release fully dimensioned drawings with GD&T, a bill of materials and assembly instructions, so a supplier can quote and build without follow-up questions.",
    deliverables: ["Production drawings", "Bill of materials", "Assembly guide"],
  },
];

export const faqs = [
  {
    question: "What types of projects do you work on?",
    answer:
      "Mechanical design and product development, vehicle and powertrain components, fixtures and tooling, and analysis of existing designs.",
  },
  {
    question: "Which file formats do you deliver?",
    answer:
      "Native SolidWorks or Fusion 360 files, neutral formats such as STEP, IGES and STL, and drawings in PDF or DWG.",
  },
  {
    question: "Can you work from an existing design?",
    answer:
      "Yes. I can rebuild parts from drawings, measurements or 3D scans, then modify them, re-analyze them or prepare them for manufacture.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Single parts and analysis jobs usually take one to two weeks. Complete assemblies with prototyping typically take six to twelve weeks.",
  },
];

// Placeholder testimonials: swap in real quotes from supervisors, professors
// or clients. Do not publish these as-is.
export const testimonials = {
  title: ["What clients and", "colleagues say"],
  body: "Feedback from managers, clients and academic advisors.",
  items: [
    {
      quote:
        "Design reviews were thorough and the drawings were clean. The parts fit correctly on the first build.",
      name: "Jordan Malik",
      role: "Project Lead",
    },
    {
      quote:
        "Careful analysis combined with a practical understanding of manufacturing. A dependable engineer on any team.",
      name: "Sara Bekele",
      role: "Engineering Manager",
    },
    {
      quote:
        "Turned an early concept into a tested prototype on schedule, with documentation our workshop could use directly.",
      name: "Michael Tan",
      role: "Operations Director",
    },
    {
      quote:
        "The FEA work identified a fatigue issue we had missed across two design revisions. The data made the fix straightforward.",
      name: "Hana Girma",
      role: "Senior Design Engineer",
    },
    {
      quote:
        "Clear, regular communication throughout. Every update explained what had changed and why.",
      name: "David Okoro",
      role: "Product Manager",
    },
    {
      quote:
        "One of the most capable students I have supervised: rigorous in analysis and practical in the workshop.",
      name: "Dr. Elena Ruiz",
      role: "Faculty Advisor",
    },
  ],
};

export const showcase = {
  title: ["Technical drawings"],
  body: "Line drawings from recent projects in rotorcraft, vehicle and powertrain design.",
};

export const footerLinks = [
  {
    title: "Work",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Process", href: "/process" },
      { label: "Tools", href: "/tools" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Testimonials", href: "/testimonials" },
      { label: "Showcase", href: "/showcase" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: site.socials.linkedin },
      { label: "X / Twitter", href: site.socials.x },
      { label: "Email", href: `mailto:${site.email}` },
    ],
  },
];
