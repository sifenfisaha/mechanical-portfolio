import type { Metadata } from "next";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { projects } from "../_data/projects";
import { ProjectGrid } from "./project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies in vehicle design, powertrains, aerospace structures and chassis systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={["Case studies in mechanical", "design and analysis"]}
        body="Each case study covers the requirements, the design approach and the measured results, from vehicle bodies and powertrains to landing gear and suspension."
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
