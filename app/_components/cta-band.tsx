import Image from "next/image";
import roboticJoint from "@/public/images/sunex/robotic-joint-exploded.webp";
import { contact } from "../_data/site";
import { Button } from "./button";
import { Reveal } from "./reveal";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-24 md:px-10 md:pt-32">
      <Reveal>
        <div className="relative grid items-center gap-8 overflow-hidden rounded-[12px] border border-line bg-panel p-8 sm:p-12 md:grid-cols-[1.4fr_1fr]">
          <div className="blueprint-grid pointer-events-none absolute inset-0" />
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-1 bg-accent"
          />
          <div className="relative">
            <h2 className="text-balance text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[38px]">
              {contact.cta.title}
            </h2>
            <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed text-muted">
              {contact.cta.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">{contact.cta.button}</Button>
              <Button href="/projects" variant="secondary">
                Explore My Projects
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[10px] border border-line">
            <Image
              src={roboticJoint}
              alt=""
              placeholder="blur"
              sizes="(min-width: 1200px) 420px, (min-width: 768px) 38vw, 100vw"
              className="aspect-[16/10] h-auto w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
