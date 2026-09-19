import racecarFront from "@/public/images/racecar-front.webp";
import motorcycle from "@/public/images/motorcycle.webp";
import engineSingle from "@/public/images/engine-single.webp";
import { testimonials } from "../_data/site";
import { ArrowLink } from "./arrow-link";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { ImageCard, QuoteCard } from "./testimonial-cards";

export function Testimonials() {
  const [first, second, third] = testimonials.items;

  const cells = [
    <ImageCard
      key="racecar"
      image={racecarFront}
      alt="Front view line drawing of a prototype race car"
    />,
    <QuoteCard key="q1" item={first} />,
    <ImageCard
      key="motorcycle"
      image={motorcycle}
      alt="Side view line drawing of a cruiser motorcycle"
    />,
    <QuoteCard key="q2" item={second} />,
    <ImageCard
      key="engine"
      image={engineSingle}
      alt="Side view line drawing of a single-cylinder engine and gearbox"
    />,
    <QuoteCard key="q3" item={third} />,
  ];

  return (
    <section
      id="testimonials"
      className="mx-auto max-w-[1200px] scroll-mt-16 px-5 pt-24 md:px-10 md:pt-32"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading title={testimonials.title} body={testimonials.body} />
        <ArrowLink href="/testimonials">Read all testimonials</ArrowLink>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cells.map((cell, i) => (
          <Reveal key={cell.key} delay={(i % 3) * 100}>
            {cell}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
