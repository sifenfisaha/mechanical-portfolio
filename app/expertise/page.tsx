import type { Metadata } from "next";
import { Capabilities } from "../_components/capabilities";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { SectionHeading } from "../_components/section-heading";
import {
  proficiencyLevel,
  software,
  type Proficiency,
  type Software,
} from "../_data/site";

export const metadata: Metadata = {
  title: "Expertise & Software",
  description:
    "Engineering capabilities and software skills: SolidWorks and CATIA V5 for mechanical design, plus AutoCAD, Fusion 360, Arduino and PLC automation.",
};

const levels: Proficiency[] = [
  "Proficient",
  "Working Knowledge",
  "Currently Learning",
];

function ProficiencyMeter({ level }: { level: Proficiency }) {
  const filled = proficiencyLevel[level];
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex gap-1" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`h-1.5 w-5 rounded-full ${
              n <= filled ? "bg-accent" : "bg-ink/12"
            }`}
          />
        ))}
      </span>
      <span className="text-[12px] font-semibold text-ink/80">{level}</span>
    </div>
  );
}

function SoftwareCard({ item }: { item: Software }) {
  return (
    <article
      className={`flex h-full flex-col rounded-[10px] border bg-panel p-7 sm:p-8 ${
        item.primary ? "border-accent/50" : "border-line"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-[22px] font-semibold tracking-[-0.015em]">
          {item.name}
        </h3>
        {item.primary && (
          <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-accent-ink">
            Primary CAD
          </span>
        )}
      </div>
      <div className="mt-3">
        <ProficiencyMeter level={item.proficiency} />
      </div>
      <p className="mt-4 text-[13px] leading-relaxed text-muted">{item.body}</p>
      {item.capabilities && (
        <>
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            Key capabilities
          </p>
          <ul className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
            {item.capabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-start gap-2.5 text-[13px] text-ink/85"
              >
                <span
                  aria-hidden="true"
                  className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent"
                />
                {cap}
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}

function TagList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="h-full rounded-[10px] border border-line bg-panel p-7 sm:p-8">
      <h3 className="text-[18px] font-semibold tracking-tight">{title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-line px-3 py-1.5 text-[13px] text-ink/85"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExpertisePage() {
  return (
    <>
      <PageHeader
        eyebrow="Expertise"
        title={["Mechanical design to", "intelligent systems."]}
        body="The engineering areas I work in, and the software and tools I use to design, model, document and explore mechanical and automated systems."
      />

      <Capabilities showLink={false} />

      <section
        id="software"
        className="mx-auto max-w-[1200px] scroll-mt-24 px-5 pt-24 md:px-10 md:pt-32"
      >
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionHeading
              eyebrow={software.eyebrow}
              title={software.title}
              body={software.body}
            />
            <p className="mt-3 max-w-[480px] text-[14px] leading-relaxed text-muted">
              {software.bodyMore}
            </p>
          </div>
          <div className="rounded-[10px] border border-line bg-panel px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Proficiency key
            </p>
            <ul className="mt-3 space-y-2">
              {levels.map((level) => (
                <li key={level}>
                  <ProficiencyMeter level={level} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {software.groups.map((group) => (
          <div key={group.title} className="mt-14">
            <Reveal>
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/70">
                {group.title}
              </h3>
            </Reveal>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {group.items.map((item, i) => (
                <Reveal key={item.name} delay={(i % 2) * 100}>
                  <SoftwareCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal>
            <TagList title="Programming" items={software.programming} />
          </Reveal>
          <Reveal delay={100}>
            <TagList
              title="Digital & Productivity Tools"
              items={software.productivity}
            />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
