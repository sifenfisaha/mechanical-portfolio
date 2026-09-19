import Image from "next/image";
import landingGear from "@/public/images/landing-gear.webp";
import { process } from "../_data/site";
import { ArrowLink } from "./arrow-link";
import { Reveal } from "./reveal";

export function Process() {
  return (
    <section
      id="process"
      className="mx-auto grid max-w-[1200px] scroll-mt-16 items-center gap-6 px-5 pt-24 md:grid-cols-[1.15fr_1fr] md:gap-4 md:px-10 md:pt-32"
    >
      <Reveal className="drawing-glow">
        <Image
          src={landingGear}
          alt="Technical drawing of an aircraft main landing gear with strut and wheel"
          sizes="(min-width: 768px) 620px, 100vw"
          className="drawing h-auto w-full opacity-85"
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="rounded-[10px] border border-line bg-panel p-7 sm:p-10">
          <h2 className="text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[34px]">
            {process.title.map((line) => (
              <span key={line} className="sm:block">
                {line}{" "}
              </span>
            ))}
          </h2>
          <p className="mt-4 max-w-[400px] text-[14px] leading-relaxed text-muted">
            {process.body}
          </p>

          <ol className="mt-10 space-y-8">
            {process.steps.map((step) => (
              <li key={step.number} className="flex gap-6">
                <span className="w-12 shrink-0 text-[32px] font-medium leading-none tracking-tight">
                  {step.number}
                </span>
                <p className="text-[13px] leading-relaxed text-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          <ArrowLink href="/process" className="mt-10">
            See the full process
          </ArrowLink>
        </div>
      </Reveal>
    </section>
  );
}
