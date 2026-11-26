import type { Metadata } from "next";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { experience } from "../_data/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Practical engineering experience at Tamrin Motors and Delil Garage: vehicle inspection, maintenance, suspension, transmission and chassis systems.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow={experience.eyebrow}
        title={experience.title}
        body={experience.body}
      />

      <section className="mx-auto max-w-[1200px] px-5 pt-12 md:px-10">
        <ol className="relative space-y-4">
          {experience.items.map((item, i) => (
            <li key={item.organization}>
              <Reveal delay={i * 80}>
                <article className="grid gap-8 rounded-[12px] border border-line bg-panel p-7 sm:p-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
                  <div>
                    <p className="inline-flex rounded-full bg-accent px-3 py-1 text-[12px] font-bold text-accent-ink">
                      {item.period}
                    </p>
                    <h2 className="mt-5 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[32px]">
                      {item.role}
                    </h2>
                    <p className="mt-2 text-[16px] font-medium text-accent-text">
                      {item.organization}
                    </p>
                    <p className="mt-5 text-[14px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Areas of experience
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {item.areas.map((area) => (
                        <li
                          key={area}
                          className="flex items-start gap-3 rounded-[8px] border border-line bg-page/50 px-4 py-3 text-[13px] text-ink/90"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[6px] size-1.5 shrink-0 rounded-full bg-accent"
                          />
                          {area}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 border-l-2 border-accent pl-4 text-[14px] leading-relaxed text-ink/85">
                      {item.summary}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  );
}
