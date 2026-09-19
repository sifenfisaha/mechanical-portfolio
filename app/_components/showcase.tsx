import Image from "next/image";
import helicopter from "@/public/images/helicopter.webp";
import { showcase } from "../_data/site";
import { ArrowLink } from "./arrow-link";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Showcase() {
  return (
    <section
      id="showcase"
      className="mx-auto max-w-[1200px] scroll-mt-16 px-5 pt-24 md:px-10 md:pt-32"
    >
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading title={showcase.title} body={showcase.body} />
        <ArrowLink href="/showcase">View all drawings</ArrowLink>
      </Reveal>

      <Reveal className="relative mt-10">
        <div className="blueprint-grid pointer-events-none absolute inset-0" />
        <div className="drawing-glow pointer-events-none absolute inset-0" />
        <Image
          src={helicopter}
          alt="Perspective line drawing of a compound coaxial-rotor helicopter"
          sizes="(min-width: 1200px) 960px, 100vw"
          className="drawing relative mx-auto h-auto w-full max-w-[960px] opacity-90"
        />
      </Reveal>
    </section>
  );
}
