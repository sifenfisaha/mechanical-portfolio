import { about, intro } from "../_data/site";
import { ArrowLink } from "./arrow-link";
import { Reveal } from "./reveal";
import { Eyebrow } from "./section-heading";

export function Intro() {
  return (
    <section className="mx-auto grid max-w-[1200px] gap-10 px-5 pt-24 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-10 md:pt-32">
      <Reveal>
        <Eyebrow>Introduction</Eyebrow>
        <blockquote className="mt-5 text-[24px] font-semibold leading-[1.3] tracking-[-0.015em] sm:text-[30px]">
          “{intro.belief}”
        </blockquote>
      </Reveal>

      <Reveal delay={100} className="md:pt-10">
        {intro.paragraphs.map((p) => (
          <p
            key={p}
            className="mb-4 text-[15px] leading-relaxed text-muted last:mb-0"
          >
            {p}
          </p>
        ))}
        <p className="mt-8 border-l-2 border-accent pl-4 text-[15px] font-medium leading-relaxed text-ink/90">
          {about.statement}
        </p>
        <ArrowLink href="/about" className="mt-8">
          More about me
        </ArrowLink>
      </Reveal>
    </section>
  );
}
