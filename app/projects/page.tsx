import type { Metadata } from "next";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { projectsIntro } from "../_components/work";
import { projects } from "../_data/projects";
import { ProjectGrid } from "./project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering projects by Suhayl Hashim Mohammed: a fully automatic injera baking machine, a hydraulic hand lift design and selected mechanical CAD work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={projectsIntro.title}
        body={projectsIntro.body}
      >
        <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-muted">
          My project portfolio includes mechanical design, product
          development, automation, and engineering concepts.
        </p>
      </PageHeader>

      <section className="mx-auto max-w-[1200px] px-5 pt-12 md:px-10">
        <Reveal>
          <ProjectGrid projects={projects} />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
