import { projects } from "../_data/projects";
import { work } from "../_data/site";
import { ArrowLink } from "./arrow-link";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Work() {
  const [feature, engine, exploded] = projects;

  return (
    <section
      id="work"
      className="mx-auto max-w-[1200px] scroll-mt-16 px-5 pt-24 md:px-10 md:pt-32"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading title={work.title} body={work.body} />
        <ArrowLink href="/projects">View all projects</ArrowLink>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Reveal>
            <ProjectCard project={feature} />
          </Reveal>
          <Reveal delay={100}>
            <ProjectCard project={engine} />
          </Reveal>
        </div>
        <Reveal delay={150} className="h-full">
          <ProjectCard project={exploded} tall />
        </Reveal>
      </div>
    </section>
  );
}
