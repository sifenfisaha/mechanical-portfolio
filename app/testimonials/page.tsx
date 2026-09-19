import type { Metadata } from "next";
import racecarFront from "@/public/images/racecar-front.webp";
import engineSingle from "@/public/images/engine-single.webp";
import motorcycle2 from "@/public/images/motorcycle-2.webp";
import { CtaBand } from "../_components/cta-band";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { ImageCard, QuoteCard } from "../_components/testimonial-cards";
import { testimonials } from "../_data/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What managers, clients and advisors say about working together on engineering projects.",
};

export default function TestimonialsPage() {
  const [q1, q2, q3, q4, q5, q6] = testimonials.items;

  // Checkerboard of drawings and quotes, echoing the homepage section.
  const cells = [
    <ImageCard
      key="racecar"
      image={racecarFront}
      alt="Front view line drawing of a prototype race car"
    />,
    <QuoteCard key="q1" item={q1} />,
    <QuoteCard key="q2" item={q2} />,
    <QuoteCard key="q3" item={q3} />,
    <ImageCard
      key="engine"
      image={engineSingle}
      alt="Side view line drawing of a single-cylinder engine and gearbox"
    />,
    <QuoteCard key="q4" item={q4} />,
    <QuoteCard key="q5" item={q5} />,
    <QuoteCard key="q6" item={q6} />,
    <ImageCard
      key="motorcycle"
      image={motorcycle2}
      alt="Side view line drawing of a cruiser motorcycle"
    />,
  ];

  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title={["Kind Words from People", "I've Worked With"]}
        body="Managers, clients and advisors on what it's like to work together — from the first requirements meeting to the final drawing release."
      />

      <section className="mx-auto max-w-[1200px] px-5 pt-12 md:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cells.map((cell, i) => (
            <Reveal key={cell.key} delay={(i % 3) * 100}>
              {cell}
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
