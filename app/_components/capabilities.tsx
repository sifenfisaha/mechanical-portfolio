import { capabilities } from "../_data/site";
import { ArrowLink } from "./arrow-link";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Capabilities({ showLink = true }: { showLink?: boolean }) {
  return (
    <section
      id="capabilities"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-5 pt-24 md:px-10 md:pt-32"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow={capabilities.eyebrow}
          title={capabilities.title}
          body={capabilities.body}
        />
        {showLink && (
          <ArrowLink href="/expertise">Discover my expertise</ArrowLink>
        )}
      </Reveal>

      <Reveal className="mt-12 grid gap-px overflow-hidden rounded-[12px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.items.map((item) => (
            <article key={item.title} className="group h-full bg-panel p-7 transition-colors hover:bg-panel-2 sm:p-8">
              <p className="text-[13px] font-bold text-accent-text">
                {item.number}
              </p>
              <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted">
                {item.text}
              </p>
            </article>
        ))}
      </Reveal>
    </section>
  );
}
