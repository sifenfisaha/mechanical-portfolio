import Image from "next/image";
import helicopter from "@/public/images/helicopter.webp";
import { vision } from "../_data/site";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Vision() {
  return (
    <section
      id="vision"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-5 pt-24 md:px-10 md:pt-32"
    >
      <div className="relative overflow-hidden rounded-[12px] border border-line bg-panel">
        <div className="blueprint-grid pointer-events-none absolute inset-0" />
        <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <Reveal>
            <SectionHeading eyebrow={vision.eyebrow} title={vision.title} />
            {vision.paragraphs.map((p) => (
              <p
                key={p}
                className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted"
              >
                {p}
              </p>
            ))}
            <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-muted">
              {vision.commitment}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
              {vision.interestsLabel}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {vision.interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-line bg-page/60 px-3.5 py-2 text-[13px] font-medium text-ink/90"
                >
                  {interest}
                </li>
              ))}
            </ul>
            <div className="drawing-glow mt-8">
              <Image
                src={helicopter}
                alt=""
                sizes="(min-width: 1024px) 480px, 100vw"
                className="drawing mx-auto h-auto w-full max-w-[460px] opacity-60"
              />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="relative border-t border-line px-7 py-8 text-balance text-[22px] font-semibold leading-[1.3] tracking-[-0.015em] sm:px-12 sm:text-[28px]">
            <span className="text-accent-text">“</span>
            {vision.closing}
            <span className="text-accent-text">”</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
