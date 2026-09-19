import type { Metadata } from "next";
import Image from "next/image";
import suspension from "@/public/images/suspension.webp";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { Tools } from "../_components/tools";
import { methods, toolGroups } from "../_data/site";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "CAD, simulation, programming and manufacturing tools used across mechanical design projects.",
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title={["Software, skills and", "engineering standards"]}
        body="The software I use for design and analysis, my manufacturing experience, and the standards I work to."
      />

      <div className="pt-12">
        <Tools />
      </div>

      <section className="mx-auto grid max-w-[1200px] gap-4 px-5 pt-16 sm:grid-cols-2 md:px-10 md:pt-20">
        {toolGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 2) * 100}>
            <article className="h-full rounded-[10px] border border-line bg-panel p-7 sm:p-8">
              <p className="text-[12px] font-semibold text-muted">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.015em]">
                {group.title}
              </h2>
              <p className="mt-2 max-w-[380px] text-[13px] leading-relaxed text-muted">
                {group.body}
              </p>
              <ul className="mt-7 space-y-5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between text-[13px]">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-muted">{item.level}%</span>
                    </div>
                    <div
                      className="mt-2 h-[3px] overflow-hidden rounded-full bg-panel-2"
                      role="meter"
                      aria-label={`${item.name} proficiency`}
                      aria-valuenow={item.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-ink/85"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1200px] items-center gap-6 px-5 pt-24 md:grid-cols-[1.15fr_1fr] md:gap-4 md:px-10 md:pt-32">
        <Reveal className="drawing-glow">
          <Image
            src={suspension}
            alt="Exploded view drawing of a front suspension with coil spring and wishbones"
            sizes="(min-width: 768px) 620px, 100vw"
            className="drawing h-auto w-full opacity-85"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-[10px] border border-line bg-panel p-7 sm:p-10">
            <h2 className="text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[34px]">
              <span className="sm:block">Methods and </span>
              <span className="sm:block">standards</span>
            </h2>
            <p className="mt-4 max-w-[400px] text-[14px] leading-relaxed text-muted">
              Engineering methods and standards I apply across my projects.
            </p>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {methods.map((method) => (
                <li key={method} className="flex items-start gap-3 text-[13px] text-ink/85">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] size-1.5 shrink-0 rounded-full bg-ink/70"
                  />
                  {method}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
