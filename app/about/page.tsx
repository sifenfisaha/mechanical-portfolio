import type { Metadata } from "next";
import Image from "next/image";
import suspension from "@/public/images/suspension.webp";
import { Button } from "../_components/button";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { Eyebrow } from "../_components/section-heading";
import { about, site } from "../_data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Suhayl Hashim Mohammed: a mechanical designer working in CAD, product development, automation and robotics.",
};

export default function AboutPage() {
  const [lead, ...rest] = about.paragraphs;

  return (
    <>
      <PageHeader
        eyebrow={about.eyebrow}
        title={about.title}
        body={about.subheadline}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          {site.cvUrl && (
            <Button href={site.cvUrl} download>
              Download CV
            </Button>
          )}
          <Button href="/contact" variant={site.cvUrl ? "secondary" : "primary"}>
            Let&apos;s Connect
          </Button>
        </div>
      </PageHeader>

      <section className="mx-auto grid max-w-[1200px] gap-12 px-5 pt-16 md:grid-cols-[1.4fr_1fr] md:gap-16 md:px-10 md:pt-20">
        <Reveal>
          <p className="text-[20px] font-medium leading-[1.5] tracking-[-0.01em] text-ink sm:text-[22px]">
            {lead}
          </p>
          {rest.map((p) => (
            <p key={p} className="mt-5 text-[15px] leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="md:sticky md:top-24 md:self-start">
          <dl className="divide-y divide-line rounded-[10px] border border-line bg-panel">
            {about.facts.map((fact) => (
              <div key={fact.label} className="px-6 py-5">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-[14px] font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1200px] items-center gap-6 px-5 pt-24 md:grid-cols-[1fr_1.15fr] md:gap-4 md:px-10 md:pt-32">
        <Reveal>
          <div className="rounded-[10px] border border-line bg-panel p-7 sm:p-10">
            <Eyebrow>My Engineering Philosophy</Eyebrow>
            <ol className="mt-8 space-y-5">
              {about.philosophy.map((line, i) => (
                <li key={line} className="flex items-baseline gap-5">
                  <span className="w-8 shrink-0 text-[14px] font-bold text-accent-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[22px] font-semibold tracking-[-0.015em] sm:text-[26px]">
                    {line}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={100} className="drawing-glow">
          <Image
            src={suspension}
            alt=""
            sizes="(min-width: 768px) 620px, 100vw"
            className="drawing h-auto w-full opacity-70"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pt-24 md:px-10 md:pt-32">
        <Reveal>
          <figure className="border-l-4 border-accent pl-6 sm:pl-10">
            <Eyebrow>Personal Statement</Eyebrow>
            <blockquote className="mt-5 max-w-[900px] text-balance text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[42px]">
              {about.statement}
            </blockquote>
            <figcaption className="mt-5 text-[14px] text-muted">
              {site.owner}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
