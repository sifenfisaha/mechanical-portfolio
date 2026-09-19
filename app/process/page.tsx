import type { Metadata } from "next";
import Image from "next/image";
import landingGear3 from "@/public/images/landing-gear-3.webp";
import landingGear from "@/public/images/landing-gear.webp";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { faqs, processPhases } from "../_data/site";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How projects move from requirements to production release: concept, CAD, simulation, prototyping and manufacturing handoff.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title={["From First Sketch", "to Production Release"]}
        body="A clear, repeatable engineering process means fewer surprises. Each phase ends with something concrete you can review, test or hand to a supplier."
      />

      <section className="mx-auto max-w-[1200px] px-5 pt-12 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[12px] border border-line bg-panel">
            <div className="blueprint-grid pointer-events-none absolute inset-0" />
            <div className="drawing-glow relative flex items-center justify-center px-6 py-10 sm:px-16">
              <Image
                src={landingGear3}
                alt="Technical drawing of a landing gear leg with fairing, trailing arm and wheel"
                preload
                sizes="(min-width: 1200px) 900px, 100vw"
                className="drawing h-auto max-h-[420px] w-auto max-w-full opacity-85"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-12 px-5 pt-20 md:grid-cols-[1.4fr_1fr] md:gap-16 md:px-10 md:pt-28">
        <ol className="relative">
          {processPhases.map((phase, i) => (
            <li key={phase.number} className="relative flex gap-6 pb-14 last:pb-0 sm:gap-10">
              {i < processPhases.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-[27px] top-16 w-px bg-line"
                />
              )}
              <span className="grid size-14 shrink-0 place-items-center rounded-full border border-line bg-panel text-[18px] font-semibold tracking-tight">
                {phase.number}
              </span>
              <Reveal className="pt-2.5">
                <h2 className="text-[22px] font-semibold tracking-[-0.015em] sm:text-[26px]">
                  {phase.title}
                </h2>
                <p className="mt-3 max-w-[520px] text-[14px] leading-relaxed text-muted">
                  {phase.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {phase.deliverables.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-panel px-3 py-1.5 text-[12px] text-ink/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={100} className="md:sticky md:top-24 md:self-start">
          <div className="rounded-[10px] border border-line bg-panel p-7 sm:p-8">
            <div className="drawing-glow">
              <Image
                src={landingGear}
                alt="Technical drawing of an aircraft main landing gear with strut and wheel"
                sizes="(min-width: 768px) 400px, 100vw"
                className="drawing mx-auto h-auto max-h-[260px] w-auto opacity-80"
              />
            </div>
            <h2 className="mt-6 text-[20px] font-semibold tracking-tight">
              What every project includes
            </h2>
            <ul className="mt-5 space-y-3 text-[13px] text-muted">
              {[
                "Weekly progress updates with screenshots and notes",
                "Native CAD files plus STEP / PDF exports",
                "Calculation and simulation reports",
                "Revision-controlled drawings",
                "A handover call to walk through the design",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <svg
                    viewBox="0 0 16 16"
                    className="mt-0.5 size-4 shrink-0 text-ink"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path d="M3 8.5l3 3 7-7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-10 px-5 pt-24 md:grid-cols-[1fr_1.4fr] md:px-10 md:pt-32">
        <Reveal>
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[40px]">
            Common Questions
          </h2>
          <p className="mt-4 max-w-[360px] text-[14px] leading-relaxed text-muted">
            Anything else? Send a message and I&apos;ll answer directly.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="divide-y divide-line rounded-[10px] border border-line bg-panel">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-5 sm:px-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-ink/70 transition-transform group-open:rotate-45"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="size-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-[560px] text-[14px] leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
