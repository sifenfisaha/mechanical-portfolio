import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { CtaBand } from "../../_components/cta-band";
import { PhotoSlot } from "../../_components/photo-slot";
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

function Block({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal className="border-t border-line pt-10">
      <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
        <h2 className="flex items-baseline gap-3 text-[20px] font-semibold tracking-[-0.015em] sm:text-[22px]">
          <span className="text-[13px] font-bold text-accent-text">{number}</span>
          {title}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </Reveal>
  );
}

const prose = "text-[15px] leading-relaxed text-muted";

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const [cover, ...gallery] = project.gallery;

  const meta = [
    { label: "Role", value: project.role },
    { label: "Project type", value: project.type },
    ...(project.institution
      ? [{ label: "Institution", value: project.institution }]
      : []),
    ...(project.period ? [{ label: "Period", value: project.period }] : []),
  ];

  let n = 0;
  const num = () => String(++n).padStart(2, "0");

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
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent-text">
            {project.categories.join(" · ")}
          </p>
          <h1 className="mt-4 max-w-[860px] text-balance text-[36px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[52px]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-[620px] text-[16px] leading-relaxed text-muted">
            {project.highlight}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <figure className="overflow-hidden rounded-[12px] border border-line bg-panel">
            <PhotoSlot
              item={cover}
              priority
              sizes="(min-width: 1200px) 1120px, 100vw"
              className="aspect-[16/9] md:aspect-[21/9]"
            />
            <figcaption className="border-t border-line px-6 py-4 text-[12px] text-muted sm:px-8">
              {cover.title}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <dl
            className={`mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 ${
              meta.length > 2 ? "lg:grid-cols-4" : ""
            }`}
          >
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

      <div className="mx-auto max-w-[1200px] space-y-14 px-5 pt-20 md:px-10 md:pt-24">
        <Block number={num()} title="Overview">
          {project.overview.map((p) => (
            <p key={p} className={`${prose} mb-4 last:mb-0`}>
              {p}
            </p>
          ))}
        </Block>

        <Block number={num()} title="Design objective">
          <p className="text-[18px] font-medium leading-relaxed text-ink/90">
            {project.objective}
          </p>
        </Block>

        <Block number={num()} title="My role">
          <p className="text-[15px] font-semibold">{project.role}</p>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            {project.contributionsLabel ?? "My contributions"}
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[8px] border border-line bg-panel px-4 py-3 text-[13px] text-ink/90"
              >
                <span
                  aria-hidden="true"
                  className="mt-[6px] size-1.5 shrink-0 rounded-full bg-accent"
                />
                {item}
              </li>
            ))}
          </ul>
        </Block>

        <Block number={num()} title="Design methodology">
          <ol className="space-y-5">
            {project.methodology.map((step, i) => (
              <li key={step} className="flex gap-5">
                <span className="w-8 shrink-0 text-[20px] font-semibold leading-tight tracking-tight text-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className={prose}>{step}</p>
              </li>
            ))}
          </ol>
        </Block>

        <Block number={num()} title="Software & tools">
          <ul className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-line bg-panel px-3.5 py-2 text-[13px] font-medium"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Block>

        <Block number={num()} title="Engineering details">
          <div className="grid gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2">
            {project.details.map((detail) => (
              <div key={detail.title} className="bg-panel p-6">
                <h3 className="text-[15px] font-semibold tracking-tight">
                  {detail.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {detail.text}
                </p>
              </div>
            ))}
          </div>
        </Block>

        <Block number={num()} title="Final design">
          <p className={prose}>{project.finalDesign}</p>
        </Block>

        {gallery.length > 0 && (
          <Block number={num()} title="Gallery">
            <div className="grid gap-4 sm:grid-cols-2">
              {gallery.map((item) => (
                <figure
                  key={item.title}
                  className="overflow-hidden rounded-[10px] border border-line bg-panel"
                >
                  <PhotoSlot
                    item={item}
                    sizes="(min-width: 768px) 420px, 100vw"
                    className="aspect-[4/3]"
                  />
                  {item.src && (
                    <figcaption className="border-t border-line px-5 py-3 text-[12px] text-muted">
                      {item.title}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Block>
        )}

        <Block number={num()} title="Results & limitations">
          {project.results.length > 0 && (
            <ul className="mb-8 grid gap-4 sm:grid-cols-2">
              {project.results.map((result) => (
                <li
                  key={result.label}
                  className="rounded-[10px] border border-line bg-panel p-6"
                >
                  <p className="text-[34px] font-semibold leading-none tracking-[-0.02em] text-accent-text">
                    {result.value}
                  </p>
                  <p className="mt-2 text-[13px] text-muted">{result.label}</p>
                </li>
              ))}
            </ul>
          )}
          <ul className="space-y-3">
            {project.limitations.map((item) => (
              <li key={item} className={`flex gap-3 ${prose}`}>
                <span aria-hidden="true" className="text-accent-text">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <section className="mx-auto max-w-[1200px] px-5 pt-20 md:px-10 md:pt-28">
        <Reveal>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-[10px] border border-line bg-panel px-6 py-7 transition-colors hover:border-accent/60 sm:px-8"
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
              className="grid size-11 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink"
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
