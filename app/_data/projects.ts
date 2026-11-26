import type { StaticImageData } from "next/image";

// Real SUNEX LAB projects. No project images have been supplied yet, so every
// gallery item is a titled slot: add `src` (an imported image from
// /public/images/...) and `alt` to a slot and it renders the picture instead
// of the placeholder. The first gallery item is used as the project cover.
//
// Only record facts the owner has confirmed. Targets stay labelled as
// targets; do not add measured results until they are documented.

export type GalleryItem = {
  title: string;
  src?: StaticImageData;
  alt?: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Short tag used for filtering, e.g. "Automation". */
  category: string;
  /** Full category line from the brief. */
  categories: string[];
  /** Honest label for what kind of project this is. */
  type: string;
  role: string;
  institution?: string;
  period?: string;
  summary: string;
  overview: string[];
  objective: string;
  contributions: string[];
  /** Heading for the contributions list; defaults to "My contributions". */
  contributionsLabel?: string;
  methodology: string[];
  tools: string[];
  details: { title: string; text: string }[];
  finalDesign: string;
  highlight: string;
  results: { value: string; label: string }[];
  limitations: string[];
  gallery: GalleryItem[];
};

export const projects: Project[] = [
  {
    slug: "automatic-injera-baking-machine",
    title: "Fully Automatic Injera Baking Machine",
    category: "Automation",
    categories: ["Mechanical Design", "Automation", "Product Development"],
    type: "University engineering project",
    role: "Lead Mechanical Designer & Automation Programmer",
    institution: "Adama Science and Technology University",
    period: "July–September 2025",
    summary:
      "An automated solution for traditional injera production, designed to improve efficiency and reduce manual operations.",
    overview: [
      "The Fully Automatic Injera Baking Machine is an engineering project focused on developing an automated solution for traditional injera production.",
      "As the lead mechanical designer and automation programmer, I contributed to the development of the machine's mechanical structure, component layout, batter tank, spreading mechanism, and automation concept.",
    ],
    objective:
      "Improve production efficiency, reduce manual operations, and develop a more systematic baking process, with a design target of approximately 80 injera per hour.",
    contributions: [
      "Mechanical design and 3D modeling using SolidWorks",
      "Development of the batter tank",
      "Design of the batter spreading mechanism",
      "Machine frame and component arrangement",
      "Automation programming and control-system integration",
      "Engineering design documentation and presentation",
    ],
    methodology: [
      "Defined the design objective around production efficiency, reduced manual handling and a target output of about 80 injera per hour.",
      "Modeled the machine's mechanical structure and components in SolidWorks.",
      "Developed the batter tank and the batter spreading mechanism as the core process subsystems.",
      "Arranged the machine frame and component layout around those subsystems.",
      "Developed the automation concept, programmed the control logic and integrated the control system.",
      "Documented the engineering design and presented it.",
    ],
    tools: ["SolidWorks", "Mechanical Design", "Automation", "Control Systems"],
    details: [
      {
        title: "Batter tank",
        text: "Batter storage for the automated baking process, developed as part of the machine's mechanical design.",
      },
      {
        title: "Spreading mechanism",
        text: "The mechanism that spreads batter for baking, replacing a step that is traditionally done by hand.",
      },
      {
        title: "Frame & component layout",
        text: "The machine frame and the arrangement of components that carries the process subsystems.",
      },
      {
        title: "Automation & control",
        text: "The automation concept, control programming and control-system integration that coordinate the baking process.",
      },
    ],
    finalDesign:
      "A complete machine assembly combining the frame, batter tank, spreading mechanism and automation system into a single production unit.",
    highlight:
      "A multidisciplinary engineering project combining mechanical design, automation, and practical product development.",
    results: [
      { value: "≈80", label: "Injera per hour (design target)" },
      { value: "3", label: "Disciplines: mechanical, automation, product" },
    ],
    limitations: [
      "The production rate shown is the design target, not a measured result.",
      "Test data and performance measurements will be added here once documented.",
    ],
    gallery: [
      { title: "Complete machine assembly" },
      { title: "Exploded assembly view" },
      { title: "Batter tank design" },
      { title: "Spreading mechanism" },
      { title: "Machine frame" },
      { title: "Technical drawings" },
      { title: "Machine photographs" },
      { title: "Motion study / design animation" },
    ],
  },
  {
    slug: "hydraulic-hand-lift",
    title: "Hydraulic Hand Lift Design",
    category: "Hydraulic Systems",
    categories: ["Mechanical Design", "Hydraulic Systems", "Engineering Analysis"],
    type: "Design project",
    role: "Mechanical Design & Engineering Analysis",
    summary:
      "A hydraulic lifting concept intended to reduce manual lifting effort and improve material-handling practices.",
    overview: [
      "This project focused on developing a hydraulic lifting solution intended to reduce manual lifting effort and improve material-handling practices.",
      "The design explored the application of hydraulic mechanisms, structural components, and mechanical principles to develop a practical lifting concept.",
      "My contribution focused on the SolidWorks design, component arrangement, engineering calculations, and technical presentation.",
    ],
    objective:
      "Develop a practical lifting concept that reduces manual lifting effort and improves material-handling practices, with ergonomic and workplace safety in mind.",
    contributions: [
      "3D mechanical modeling using SolidWorks",
      "Assembly development",
      "Hydraulic component arrangement",
      "Engineering calculations",
      "Design evaluation",
      "Ergonomic and workplace safety considerations",
      "Technical presentation",
    ],
    methodology: [
      "Framed the problem around manual lifting effort and material-handling practices.",
      "Modeled the lift components and developed the assembly in SolidWorks.",
      "Arranged the hydraulic components within the structure.",
      "Carried out engineering calculations and evaluated the design.",
      "Reviewed the design for ergonomics and workplace safety.",
      "Prepared the technical presentation.",
    ],
    tools: ["SolidWorks", "Hydraulic Systems", "Engineering Mechanics"],
    details: [
      {
        title: "Hydraulic cylinder",
        text: "The hydraulic actuator that provides the lifting force.",
      },
      {
        title: "Lifting mechanism",
        text: "The mechanism that transfers the hydraulic force to the load.",
      },
      {
        title: "Structural frame",
        text: "The frame that supports the load and carries the hydraulic components.",
      },
      {
        title: "Ergonomics & safety",
        text: "Design considerations for safer, lower-effort lifting in the workplace.",
      },
    ],
    finalDesign:
      "A complete hydraulic lift assembly with its cylinder, lifting mechanism and structural frame modeled in SolidWorks.",
    highlight:
      "Applying mechanical engineering principles to develop a solution for practical material-handling challenges.",
    results: [],
    limitations: [
      "This is a design concept developed through CAD modeling and engineering calculations.",
      "Calculation results and dimensioned drawings will be added here once published.",
    ],
    gallery: [
      { title: "Complete hydraulic lift assembly" },
      { title: "Hydraulic cylinder" },
      { title: "Lifting mechanism" },
      { title: "Structural frame" },
      { title: "Exploded view" },
      { title: "Dimensioned technical drawings" },
      { title: "Engineering calculations" },
      { title: "Design presentation" },
    ],
  },
  {
    slug: "selected-mechanical-cad-designs",
    title: "Selected Mechanical CAD Designs",
    category: "CAD",
    categories: ["Mechanical Design", "CAD", "3D Modeling"],
    type: "Design exercises & learning projects",
    role: "Designer",
    contributionsLabel: "Design categories",
    summary:
      "A collection of mechanical models and design exercises showing my CAD workflow, from components to full assemblies.",
    overview: [
      "A collection of mechanical models and engineering design exercises demonstrating my interest in mechanical components, 3D modeling, assemblies, and product development.",
      "The collection showcases my CAD workflow and ability to develop mechanical concepts using professional design software.",
    ],
    objective:
      "Build and demonstrate CAD skill across a range of mechanical components, assemblies and drawings.",
    contributions: [
      "Mechanical Components",
      "Gear Systems",
      "Shafts and Couplings",
      "Bearings and Housings",
      "Mechanical Assemblies",
      "Brackets and Supports",
      "Product Concepts",
      "Technical Drawings",
    ],
    methodology: [
      "Model individual mechanical components as parametric parts.",
      "Combine parts into mechanical assemblies.",
      "Produce exploded views and renders to explain each design.",
      "Document designs with engineering drawings.",
    ],
    tools: ["SolidWorks", "CATIA V5", "Autodesk Fusion 360"],
    details: [
      {
        title: "Components",
        text: "Gears, shafts, couplings, bearings, housings, brackets and supports.",
      },
      {
        title: "Assemblies",
        text: "Mechanical assemblies that bring components together into working arrangements.",
      },
      {
        title: "Product concepts",
        text: "Early-stage product ideas developed as 3D models.",
      },
      {
        title: "Drawings",
        text: "Technical drawings that document individual parts and assemblies.",
      },
    ],
    finalDesign:
      "An ongoing collection of individual models, assembly renders, exploded views and engineering drawings.",
    highlight:
      "A working record of my CAD practice across SolidWorks, CATIA V5 and Fusion 360.",
    results: [],
    limitations: [
      "These are design exercises and learning projects, not commissioned work.",
    ],
    gallery: [
      { title: "Individual models" },
      { title: "Assembly renders" },
      { title: "Exploded views" },
      { title: "Engineering drawings" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
