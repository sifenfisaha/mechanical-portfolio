import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "../../_components/cta-band";
import { Reveal } from "../../_components/reveal";
import { getProject, projects } from "../../_data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const meta = [
    { label: "Role", value: project.role },
    { label: "Duration", value: project.duration },
    { label: "Year", value: project.year },
    { label: "Tools", value: project.tools.join(", ") },
  ];

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-5 pt-12 md:px-10 md:pt-16">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-ink"
        >
          <svg
            viewBox="0 0 16 16"
            className="size-3.5 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M13 8H3M7 4L3 8l4 4" />
          </svg>
          All projects
        </Link>

        <Reveal className="mt-10">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 max-w-[760px] text-balance text-[36px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[52px]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-muted">
            {project.summary}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <figure className="relative overflow-hidden rounded-[12px] border border-line bg-panel">
            <div className="blueprint-grid pointer-events-none absolute inset-0" />
            <div className="drawing-glow relative flex min-h-[320px] items-center justify-center p-8 sm:p-14">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                preload
                sizes="(min-width: 1200px) 1000px, 100vw"
                className="drawing h-auto max-h-[560px] w-auto max-w-full object-contain opacity-90"
              />
            </div>
            <figcaption className="relative border-t border-line px-6 py-4 text-[12px] text-muted sm:px-8">
              {project.cover.caption}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-[10px] border border-line bg-line md:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label} className="bg-panel px-6 py-5">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {item.label}
                </dt>
                <dd className="mt-2 text-[14px] font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-12 px-5 pt-20 md:grid-cols-[1.3fr_1fr] md:gap-16 md:px-10 md:pt-28">
        <div>
          <Reveal>
            <h2 className="text-[26px] font-semibold tracking-[-0.02em] sm:text-[32px]">
              Challenge
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {project.challenge}
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <h2 className="text-[26px] font-semibold tracking-[-0.02em] sm:text-[32px]">
              Approach
            </h2>
            <ol className="mt-8 space-y-7">
              {project.approach.map((step, i) => (
                <li key={step} className="flex gap-6">
                  <span className="w-10 shrink-0 text-[26px] font-medium leading-none tracking-tight">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[14px] leading-relaxed text-muted">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={100} className="md:sticky md:top-24 md:self-start">
          <div className="rounded-[10px] border border-line bg-panel p-7 sm:p-8">
            <h2 className="text-[20px] font-semibold tracking-tight">
              Results
            </h2>
            <ul className="mt-6 divide-y divide-line">
              {project.results.map((result) => (
                <li key={result.label} className="py-5 first:pt-0 last:pb-0">
                  <p className="text-[34px] font-semibold leading-none tracking-[-0.02em]">
                    {result.value}
                  </p>
                  <p className="mt-2 text-[13px] text-muted">{result.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {project.gallery.length > 0 && (
        <section className="mx-auto max-w-[1200px] px-5 pt-20 md:px-10 md:pt-28">
          <Reveal>
            <h2 className="text-[26px] font-semibold tracking-[-0.02em] sm:text-[32px]">
              Drawings
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.gallery.map((figure, i) => (
              <Reveal key={figure.caption} delay={i * 100}>
                <figure className="flex h-full flex-col overflow-hidden rounded-[10px] border border-line bg-panel">
                  <div className="drawing-glow flex flex-1 items-center justify-center p-8">
                    <Image
                      src={figure.src}
                      alt={figure.alt}
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="drawing h-auto max-h-[340px] w-auto max-w-full object-contain opacity-85"
                    />
                  </div>
                  <figcaption className="border-t border-line px-6 py-4 text-[12px] text-muted">
                    {figure.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1200px] px-5 pt-20 md:px-10 md:pt-28">
        <Reveal>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-[10px] border border-line bg-panel px-6 py-7 transition-colors hover:border-ink/20 sm:px-8"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Next project
              </p>
              <p className="mt-2 text-[22px] font-semibold tracking-tight sm:text-[28px]">
                {next.title}
              </p>
            </div>
            <span
              aria-hidden="true"
              className="grid size-11 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:bg-ink group-hover:text-page"
            >
              <svg
                viewBox="0 0 16 16"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </span>
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
