import type { Metadata } from "next";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { projects } from "../_data/projects";
import { ProjectGrid } from "./project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected mechanical engineering projects: vehicle design, powertrain, aerospace structures and chassis systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={["Selected Engineering", "Work & Case Studies"]}
        body="Vehicle bodies, powertrains, landing gear and suspension — each project taken from requirements through CAD, analysis and a design ready to build."
      />

      <section className="mx-auto max-w-[1200px] px-5 pt-12 md:px-10">
        <Reveal>
          <ProjectGrid projects={projects} />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
