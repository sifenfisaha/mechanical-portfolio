import Image from "next/image";
import Link from "next/link";
import engineSingle from "@/public/images/engine-single.webp";
import { site } from "../_data/site";
import { Reveal } from "./reveal";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-24 md:px-10 md:pt-32">
      <Reveal>
        <div className="relative grid items-center gap-8 overflow-hidden rounded-[12px] border border-line bg-panel p-8 sm:p-12 md:grid-cols-[1.4fr_1fr]">
          <div className="blueprint-grid pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 className="text-balance text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[38px]">
              Have a design challenge in mind?
            </h2>
            <p className="mt-4 max-w-[440px] text-[14px] leading-relaxed text-muted">
              {site.availability}. Tell me about the problem and I&apos;ll get
              back to you within two working days.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-[5px] bg-ink px-5 py-2.5 text-[13px] font-semibold text-page transition-colors hover:bg-ink-hover"
              >
                Start a Conversation
              </Link>
              <Link
                href="/projects"
                className="rounded-[5px] border border-line px-5 py-2.5 text-[13px] font-semibold text-ink/85 transition-colors hover:border-ink/40 hover:text-ink"
              >
                Browse Projects
              </Link>
            </div>
          </div>
          <Image
            src={engineSingle}
            alt=""
            sizes="(min-width: 768px) 360px, 80vw"
            className="drawing relative mx-auto h-auto max-h-[260px] w-auto opacity-70"
          />
        </div>
      </Reveal>
    </section>
  );
}
