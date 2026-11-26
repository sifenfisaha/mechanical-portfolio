import { projects } from "../_data/projects";
import { ArrowLink } from "./arrow-link";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export const projectsIntro = {
  eyebrow: "Featured Projects",
  title: ["From concept to", "engineering solution."],
  body: "Every project represents an opportunity to understand a challenge, explore possible solutions, and apply engineering knowledge through design and development.",
};

export function Work() {
  const [feature, ...rest] = projects;

  return (
    <section
      id="work"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-5 pt-24 md:px-10 md:pt-32"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading {...projectsIntro} />
        <ArrowLink href="/projects">Explore all projects</ArrowLink>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <Reveal className="md:col-span-2">
          <ProjectCard project={feature} large />
        </Reveal>
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 100}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
