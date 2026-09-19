import type { StaticImageData } from "next/image";
import racecar from "@/public/images/racecar.webp";
import racecarFront from "@/public/images/racecar-front.webp";
import engineV from "@/public/images/engine-v.webp";
import engineVtwin from "@/public/images/engine-vtwin.webp";
import engineExploded from "@/public/images/engine-exploded.webp";
import engineSingle from "@/public/images/engine-single.webp";
import landingGear from "@/public/images/landing-gear.webp";
import landingGear2 from "@/public/images/landing-gear-2.webp";
import landingGear3 from "@/public/images/landing-gear-3.webp";
import helicopter from "@/public/images/helicopter.webp";
import motorcycle from "@/public/images/motorcycle.webp";
import motorcycle2 from "@/public/images/motorcycle-2.webp";
import suspension from "@/public/images/suspension.webp";

// Sample case studies that show how the project pages work. Replace each one
// with a real project, its own images and real results before publishing.

export type Figure = { src: StaticImageData; alt: string; caption: string };

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  duration: string;
  summary: string;
  challenge: string;
  approach: string[];
  results: { value: string; label: string }[];
  tools: string[];
  cover: Figure;
  gallery: Figure[];
};

export const projects: Project[] = [
  {
    slug: "aero-race-car-concept",
    title: "Aero Race Car Concept",
    category: "Vehicle Design",
    year: "2025",
    role: "Lead designer",
    duration: "14 weeks",
    summary:
      "Concept body study for an open-wheel race car — surfacing, packaging and aero-driven iteration.",
    challenge:
      "Package a driver, powertrain and cooling into a narrow-track body while keeping frontal area and drag as low as possible, without sacrificing stability at speed.",
    approach: [
      "Built a skeleton layout around driver ergonomics and wheelbase targets before any surfacing.",
      "Modeled the body with continuous-curvature surfaces so it could be milled as a single foam buck.",
      "Ran CFD sweeps across ride heights and yaw angles to tune the nose and rear deck.",
      "Checked every panel for draft and tool access ahead of composite lay-up.",
    ],
    results: [
      { value: "−18%", label: "Drag vs. baseline" },
      { value: "42 / 58", label: "Front / rear balance" },
      { value: "6", label: "Design iterations" },
    ],
    tools: ["SolidWorks", "ANSYS Fluent", "Rhino"],
    cover: {
      src: racecar,
      alt: "Perspective line drawing of an aerodynamic open-wheel race car",
      caption: "Three-quarter view of the final body surfaces.",
    },
    gallery: [
      {
        src: racecarFront,
        alt: "Front view line drawing of a prototype race car",
        caption: "Front elevation showing the narrow nose and wheel pods.",
      },
    ],
  },
  {
    slug: "v-twin-powertrain",
    title: "V-Twin Powertrain Layout",
    category: "Powertrain",
    year: "2025",
    role: "Design engineer",
    duration: "10 weeks",
    summary:
      "V-twin powertrain layout with cooling fins, crankcase and front cover modeled for assembly.",
    challenge:
      "Fit a 45° V-twin, its primary drive and cooling fins inside a fixed frame envelope while keeping service access to the heads and cam cover.",
    approach: [
      "Reverse-engineered the frame hard points into a master layout sketch.",
      "Modeled the crankcase halves with realistic draft, bosses and parting lines.",
      "Ran a thermal study on fin spacing to balance cooling against weight.",
      "Produced an interference-free assembly with a full bill of materials.",
    ],
    results: [
      { value: "0", label: "Interferences at release" },
      { value: "140+", label: "Parts modeled" },
      { value: "−9%", label: "Cylinder head mass" },
    ],
    tools: ["SolidWorks", "SolidWorks Simulation", "AutoCAD"],
    cover: {
      src: engineVtwin,
      alt: "Front view line drawing of a V-twin engine",
      caption: "Front elevation of the finished engine assembly.",
    },
    gallery: [
      {
        src: engineV,
        alt: "Perspective line drawing of a V-twin engine with numbered components",
        caption: "Ballooned perspective used for the assembly manual.",
      },
    ],
  },
  {
    slug: "cylinder-head-assembly",
    title: "Cylinder Head & Valvetrain",
    category: "Powertrain",
    year: "2024",
    role: "Design & analysis",
    duration: "8 weeks",
    summary:
      "Exploded top-end assembly documenting every part, fastener and fit for manufacture.",
    challenge:
      "Document a complete top-end rebuild so it could be serviced by technicians with no access to the original CAD.",
    approach: [
      "Created a fully constrained assembly with correct fastener stacks and torque data.",
      "Checked valve-to-piston clearance through the full cam cycle with motion analysis.",
      "Built exploded views and step-by-step assembly sequences.",
      "Released drawings with GD&T on all critical sealing faces.",
    ],
    results: [
      { value: "38", label: "Drawing sheets" },
      { value: "1.2 mm", label: "Min. valve clearance" },
      { value: "100%", label: "Parts with drawings" },
    ],
    tools: ["SolidWorks", "SolidWorks Motion", "AutoCAD"],
    cover: {
      src: engineExploded,
      alt: "Exploded view drawing of an engine top-end assembly",
      caption: "Exploded view of the top-end assembly.",
    },
    gallery: [
      {
        src: engineSingle,
        alt: "Side view line drawing of a single-cylinder engine and gearbox",
        caption: "Side view of the assembled engine and gearbox.",
      },
    ],
  },
  {
    slug: "main-landing-gear",
    title: "Main Landing Gear Study",
    category: "Aerospace",
    year: "2024",
    role: "Structural analyst",
    duration: "12 weeks",
    summary:
      "Oleo strut and retraction linkage sized for landing loads, drop tests and a compact stowed envelope.",
    challenge:
      "Size a cantilever main gear to absorb landing energy within the stroke limit, then retract it into a wing bay with tight clearances.",
    approach: [
      "Derived landing load cases from certification-style sink rates.",
      "Sized the oleo-pneumatic strut and checked stroke, efficiency and rebound.",
      "Ran nonlinear FEA on the trunnion and side-brace fittings.",
      "Simulated the retraction linkage to verify clearances through the full swing.",
    ],
    results: [
      { value: "1.5", label: "Min. safety factor" },
      { value: "82%", label: "Shock absorber efficiency" },
      { value: "4", label: "Load cases analysed" },
    ],
    tools: ["CATIA V5", "ANSYS Mechanical", "MATLAB"],
    cover: {
      src: landingGear,
      alt: "Technical drawing of an aircraft main landing gear with strut and wheel",
      caption: "Main gear leg with oleo strut and side brace.",
    },
    gallery: [
      {
        src: landingGear2,
        alt: "Technical drawing of a landing gear retracting into a wing bay",
        caption: "Alternative trailing-link arrangement studied early on.",
      },
      {
        src: landingGear3,
        alt: "Technical drawing of a faired landing gear with a wheel spat",
        caption: "Faired fixed-gear option used as a baseline.",
      },
    ],
  },
  {
    slug: "compound-helicopter",
    title: "Compound Helicopter Airframe",
    category: "Aerospace",
    year: "2023",
    role: "Concept designer",
    duration: "16 weeks",
    summary:
      "Coaxial-rotor compound helicopter concept with a pusher propeller and streamlined fuselage.",
    challenge:
      "Explore a high-speed rotorcraft layout that keeps the rotor unloaded in cruise while fitting a six-seat cabin.",
    approach: [
      "Sized the rotor and pusher propeller from mission requirements in MATLAB.",
      "Built the fuselage outer mould line around the cabin and drive-shaft routing.",
      "Estimated drag build-up and trimmed the concept for level cruise.",
      "Presented the concept with layout drawings and a weight breakdown.",
    ],
    results: [
      { value: "250 kt", label: "Target cruise speed" },
      { value: "6", label: "Seats" },
      { value: "3", label: "Configurations compared" },
    ],
    tools: ["Fusion 360", "MATLAB", "Excel"],
    cover: {
      src: helicopter,
      alt: "Perspective line drawing of a compound coaxial-rotor helicopter",
      caption: "Three-quarter view of the concept airframe.",
    },
    gallery: [],
  },
  {
    slug: "cruiser-motorcycle",
    title: "Cruiser Motorcycle Chassis",
    category: "Vehicle Design",
    year: "2023",
    role: "Chassis designer",
    duration: "10 weeks",
    summary:
      "Low-slung cruiser chassis with a stressed engine mount, long wheelbase and relaxed steering geometry.",
    challenge:
      "Design a frame that keeps the seat low and the steering stable at highway speed, while carrying the engine as a stressed member.",
    approach: [
      "Defined rake, trail and wheelbase from benchmark bikes and rider ergonomics.",
      "Modeled the tubular frame with weldment profiles and gusseted joints.",
      "Ran torsional and bending stiffness studies on the frame.",
      "Detailed brackets and mounts for laser cutting and bending.",
    ],
    results: [
      { value: "34°", label: "Rake angle" },
      { value: "+22%", label: "Torsional stiffness" },
      { value: "680 mm", label: "Seat height" },
    ],
    tools: ["SolidWorks", "SolidWorks Simulation"],
    cover: {
      src: motorcycle,
      alt: "Side view line drawing of a cruiser motorcycle",
      caption: "Left-side elevation of the complete motorcycle.",
    },
    gallery: [
      {
        src: motorcycle2,
        alt: "Right side line drawing of a cruiser motorcycle",
        caption: "Right-side elevation showing the exhaust and drive side.",
      },
    ],
  },
  {
    slug: "front-suspension",
    title: "Front Suspension Assembly",
    category: "Chassis",
    year: "2022",
    role: "Suspension designer",
    duration: "9 weeks",
    summary:
      "Double-wishbone front suspension with coil-over damper, tuned kinematics and serviceable mounts.",
    challenge:
      "Improve camber control and ride comfort on an existing subframe without changing its mounting points.",
    approach: [
      "Mapped the existing hard points and built a kinematic model of the corner.",
      "Iterated wishbone lengths and pivot positions for camber and bump-steer targets.",
      "Selected spring and damper rates from the target ride frequency.",
      "Detailed the wishbones and knuckle, then checked them against braking and cornering loads.",
    ],
    results: [
      { value: "−1.1°", label: "Camber gain at bump" },
      { value: "1.4 Hz", label: "Ride frequency" },
      { value: "<0.1°", label: "Bump steer" },
    ],
    tools: ["SolidWorks", "MATLAB", "ANSYS Mechanical"],
    cover: {
      src: suspension,
      alt: "Exploded view drawing of a front suspension with coil spring and wishbones",
      caption: "Exploded view of the front corner assembly.",
    },
    gallery: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
