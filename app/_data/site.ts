// All portfolio copy lives here. Replace the placeholder name, links and
// testimonials with real details before publishing.

export const site = {
  name: "Your Name",
  role: "Mechanical Engineer",
  email: "hello@example.com",
  location: "City, Country",
  availability: "Open to full-time roles and freelance projects",
  description:
    "Mechanical engineer turning ideas into precise, manufacturable designs — from first sketch to tested prototype.",
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
    body: "Parametric part and assembly modeling, surfacing and production drawings.",
    items: [
      { name: "SolidWorks", level: 95 },
      { name: "Fusion 360", level: 85 },
      { name: "AutoCAD", level: 90 },
      { name: "CATIA V5", level: 70 },
    ],
  },
  {
    title: "Simulation & Analysis",
    body: "Structural, thermal and flow analysis to validate designs before they are built.",
    items: [
      { name: "ANSYS Mechanical", level: 85 },
      { name: "ANSYS Fluent", level: 70 },
      { name: "SolidWorks Simulation", level: 90 },
      { name: "Hand calculations", level: 95 },
    ],
  },
  {
    title: "Programming & Data",
    body: "Scripting calculations, processing test data and automating repetitive design work.",
    items: [
      { name: "MATLAB / Simulink", level: 85 },
      { name: "Python", level: 75 },
      { name: "Excel / VBA", level: 80 },
      { name: "Arduino / C", level: 65 },
    ],
  },
  {
    title: "Manufacturing",
    body: "Designing for the shop floor and getting hands-on with the first builds.",
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
  title: ["From Concept to Creation with", "Engineering Excellence"],
  body: "A selection of projects covering vehicle design, powertrain packaging and detailed mechanical assemblies.",
};

export const process = {
  title: ["Smart Engineering", "Solutions Built for You"],
  body: "Every project follows the same disciplined path, so designs arrive validated, documented and ready to build.",
  steps: [
    {
      number: "01",
      text: "Design & CAD modeling — parametric 3D models and production drawings with clear tolerances.",
    },
    {
      number: "02",
      text: "Simulation & analysis — FEA and CFD to prove strength, stiffness and thermal performance before cutting metal.",
    },
    {
      number: "03",
      text: "Prototyping & manufacturing — DFM reviews, supplier-ready files and hands-on testing of the first builds.",
    },
  ],
};

export const processPhases = [
  {
    number: "01",
    title: "Discovery & requirements",
    body: "Every project starts by understanding the problem: loads, operating environment, budget, volumes and the constraints that can't move. The output is a short requirements document everyone agrees on.",
    deliverables: ["Requirements brief", "Design constraints", "Success criteria"],
  },
  {
    number: "02",
    title: "Concept & CAD modeling",
    body: "Hand sketches become parametric 3D models. Several concepts are explored quickly, compared against the requirements, and the strongest one is developed into a full assembly.",
    deliverables: ["Concept sketches", "3D assembly model", "Trade-off matrix"],
  },
  {
    number: "03",
    title: "Simulation & analysis",
    body: "FEA, CFD and hand calculations check strength, stiffness, fatigue life and thermal behaviour. Weak points are found on screen, where fixing them is cheap.",
    deliverables: ["FEA / CFD reports", "Safety factors", "Design revisions"],
  },
  {
    number: "04",
    title: "Prototyping & testing",
    body: "Critical parts are 3D printed or machined and tested against the success criteria. Test data feeds straight back into the model.",
    deliverables: ["Prototype parts", "Test plan & results", "Updated model"],
  },
  {
    number: "05",
    title: "Manufacturing handoff",
    body: "The final design is released with fully dimensioned drawings, GD&T, a bill of materials and assembly instructions — everything a supplier needs to quote and build.",
    deliverables: ["Production drawings", "Bill of materials", "Assembly guide"],
  },
];

export const faqs = [
  {
    question: "What kind of projects do you take on?",
    answer:
      "Mechanical design, product development, vehicle and powertrain components, fixtures and tooling, and analysis work on existing designs.",
  },
  {
    question: "Which file formats can you deliver?",
    answer:
      "Native SolidWorks or Fusion 360 files, plus neutral formats like STEP, IGES and STL, and drawings as PDF or DWG.",
  },
  {
    question: "Can you work from an existing design?",
    answer:
      "Yes. Existing parts can be reverse-engineered from drawings, measurements or scans, then improved, re-analysed or prepared for manufacture.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Small parts and analysis jobs usually take one to two weeks. Full assemblies with prototyping typically run six to twelve weeks.",
  },
];

// Placeholder testimonials: swap in real quotes from supervisors, professors
// or clients. Do not publish these as-is.
export const testimonials = {
  title: ["Shaping Tomorrow with", "Smarter Engineering"],
  body: "What people I've worked with say about the process and the results.",
  items: [
    {
      quote:
        "The design reviews were thorough and the drawings came back clean. Parts fit on the first build, which almost never happens.",
      name: "Jordan Malik",
      role: "Project Lead",
    },
    {
      quote:
        "Clear thinking, careful analysis and a real feel for how things get manufactured. A dependable engineer to have on any team.",
      name: "Sara Bekele",
      role: "Engineering Manager",
    },
    {
      quote:
        "Took a rough idea and turned it into a tested prototype on schedule, with documentation the shop floor could actually use.",
      name: "Michael Tan",
      role: "Operations Director",
    },
    {
      quote:
        "The FEA work caught a fatigue problem we had missed for two design cycles. The fix was simple once the data made it obvious.",
      name: "Hana Girma",
      role: "Senior Design Engineer",
    },
    {
      quote:
        "Communicates as well as designs. Every update came with a clear summary of what changed and why.",
      name: "David Okoro",
      role: "Product Manager",
    },
    {
      quote:
        "One of the most capable students I have supervised — rigorous with the analysis and practical in the workshop.",
      name: "Dr. Elena Ruiz",
      role: "Faculty Advisor",
    },
  ],
};

export const showcase = {
  title: ["I Build Precise Designs for", "Real-World Challenges"],
  body: "From rotorcraft to race cars, the goal is the same: designs that are light, strong and ready to build.",
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
