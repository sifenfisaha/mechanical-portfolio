import type { Metadata } from "next";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { SectionHeading } from "../_components/section-heading";
import { education, leadership } from "../_data/site";

export const metadata: Metadata = {
  title: "Leadership & Education",
  description:
    "Leadership and community work, mechanical engineering education at ASTU, and certifications including Certified SolidWorks Professional (CSWP).",
};

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[13px] text-ink/85">
          <span
            aria-hidden="true"
            className="mt-[6px] size-1.5 shrink-0 rounded-full bg-accent"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow={leadership.eyebrow}
        title={leadership.title}
        body={leadership.body}
      >
        <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-muted">
          {leadership.bodyMore}
        </p>
      </PageHeader>

      <section className="mx-auto grid max-w-[1200px] gap-4 px-5 pt-12 md:px-10 lg:grid-cols-3">
        {leadership.items.map((item, i) => (
          <Reveal key={item.organization} delay={i * 100} className="h-full">
            <article className="flex h-full flex-col rounded-[12px] border border-line bg-panel p-7 sm:p-8">
              {item.period && (
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-text">
                  {item.period}
                </p>
              )}
              <h2 className="mt-3 text-[22px] font-semibold leading-[1.2] tracking-[-0.015em]">
                {item.role}
              </h2>
              <p className="mt-1.5 text-[14px] font-medium text-ink/75">
                {item.organization}
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-muted">
                {item.description}
              </p>

              {item.stats.length > 0 && (
                <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-[8px] border border-line bg-line">
                  {item.stats.map((stat) => (
                    <div key={stat.label} className="bg-page/60 px-3 py-4 text-center">
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span className="block text-[22px] font-bold tracking-tight text-accent-text">
                          {stat.value}
                        </span>
                        <span className="mt-1 block text-[11px] text-muted">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {item.list.length > 0 && (
                <div className="mt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {item.listLabel}
                  </p>
                  <Bullets items={item.list} />
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </section>

      <section
        id="education"
        className="mx-auto max-w-[1200px] scroll-mt-24 px-5 pt-24 md:px-10 md:pt-32"
      >
        <Reveal>
          <SectionHeading eyebrow={education.eyebrow} title={education.title} />
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <article className="relative h-full overflow-hidden rounded-[12px] border border-line bg-panel p-7 sm:p-10">
              <div className="blueprint-grid pointer-events-none absolute inset-0" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Education
                </p>
                <h3 className="mt-4 text-[24px] font-semibold leading-[1.2] tracking-[-0.015em] sm:text-[30px]">
                  {education.degree.title}
                </h3>
                <p className="mt-3 text-[15px] font-medium text-ink/85">
                  {education.degree.institution}
                </p>
                <p className="mt-1 text-[14px] text-muted">
                  {education.degree.location}
                </p>
                <p className="mt-6 inline-flex rounded-full border border-accent px-3 py-1 text-[12px] font-semibold text-accent-text">
                  {education.degree.status}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-4">
            {education.certifications.map((cert, i) => (
              <Reveal key={cert.title} delay={100 + i * 80}>
                <article className="flex h-full gap-5 rounded-[12px] border border-line bg-panel p-7">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-ink"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M3 8.5l3 3 7-7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Certification
                    </p>
                    <h3 className="mt-1.5 text-[17px] font-semibold tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">
                      {cert.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-4">
          <div className="rounded-[12px] border border-line bg-panel p-7 sm:p-10">
            <h3 className="text-[18px] font-semibold tracking-tight">
              Professional Development
            </h3>
            <div className="sm:columns-2">
              <Bullets items={education.development} />
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
