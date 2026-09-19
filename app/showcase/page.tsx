import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { projects } from "../_data/projects";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "A gallery of technical drawings: rotorcraft, race cars, engines, landing gear and suspension.",
};

export default function ShowcasePage() {
  const featured = projects.find((p) => p.slug === "compound-helicopter")!;
  const figures = projects.flatMap((project) =>
    [project.cover, ...project.gallery].map((figure) => ({
      ...figure,
      project,
    })),
  );
  const gallery = figures.filter((f) => f.src !== featured.cover.src);

  return (
    <>
      <PageHeader
        eyebrow="Showcase"
        title={["Technical drawings", "from recent projects"]}
        body="All drawings from the portfolio in one place. Select a drawing to open the related case study."
      />

      <section className="mx-auto max-w-[1200px] px-5 pt-12 md:px-10">
        <Reveal>
          <Link
            href={`/projects/${featured.slug}`}
            className="group relative block overflow-hidden rounded-[12px] border border-line bg-panel"
          >
            <div className="blueprint-grid pointer-events-none absolute inset-0" />
            <div className="drawing-glow relative flex items-center justify-center p-8 sm:p-14">
              <Image
                src={featured.cover.src}
                alt={featured.cover.alt}
                preload
                sizes="(min-width: 1200px) 960px, 100vw"
                className="drawing h-auto w-full max-w-[900px] opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="relative flex items-center justify-between gap-6 border-t border-line px-6 py-5 sm:px-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {featured.category}
                </p>
                <p className="mt-1.5 text-[17px] font-semibold tracking-tight">
                  {featured.title}
                </p>
              </div>
              <span className="text-[13px] text-muted transition-colors group-hover:text-ink">
                View project →
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pt-4 md:px-10">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((figure, i) => (
            <Reveal
              key={figure.alt}
              delay={(i % 3) * 100}
              className="mb-4 break-inside-avoid"
            >
              <Link
                href={`/projects/${figure.project.slug}`}
                className="group block overflow-hidden rounded-[10px] border border-line bg-panel transition-colors hover:border-ink/20"
              >
                <div className="drawing-glow flex items-center justify-center p-6">
                  <Image
                    src={figure.src}
                    alt={figure.alt}
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="drawing h-auto w-full opacity-85 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="border-t border-line px-5 py-4">
                  <p className="text-[13px] font-semibold tracking-tight">
                    {figure.project.title}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted">
                    {figure.caption}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
