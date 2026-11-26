import Image from "next/image";
import sunexMachine from "@/public/images/sunex/sunex-machine.webp";
import { hero, site } from "../_data/site";
import { Button } from "./button";

export function Hero() {
  const [primary, secondary, tertiary] = hero.ctas;

  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-14 pt-[clamp(16px,4vh,48px)] md:min-h-[calc(100svh-72px)] md:grid-cols-[1.1fr_1fr] md:px-10 md:py-[clamp(16px,4vh,48px)]"
    >
      <div className="relative z-10">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
          <span className="text-accent-text">{site.brand}</span>
          <span aria-hidden="true">/</span>
          <span>{site.owner}</span>
        </p>

        <h1 className="mt-[clamp(12px,2.6vh,24px)] text-[length:clamp(28px,min(9vw,5.4vh),52px)] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] md:text-[length:clamp(30px,min(5.4vw,6.2vh),60px)]">
          {hero.title.map((line, i) => (
            <span
              key={line}
              className={`block ${i === hero.title.length - 1 ? "text-accent-text" : ""}`}
            >
              {line}
            </span>
          ))}
        </h1>

        <ul className="mt-[clamp(12px,2.6vh,24px)] flex flex-wrap gap-2" aria-label="Disciplines">
          {hero.subheadline.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line px-3 py-1 text-[12px] font-medium text-ink/80"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-[clamp(12px,2.6vh,24px)] max-w-[460px] text-[15px] leading-relaxed text-muted">
          {hero.body}
        </p>

        <div className="mt-[clamp(16px,3.2vh,32px)] flex flex-wrap gap-3">
          <Button href={primary.href}>{primary.label}</Button>
          <Button href={secondary.href} variant="secondary">
            {secondary.label}
          </Button>
          <Button href={tertiary.href} variant="secondary">
            {tertiary.label}
          </Button>
        </div>

        <p className="mt-[clamp(16px,3.6vh,40px)] flex items-center gap-3 text-[13px] font-semibold tracking-tight text-ink/80">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {hero.tagline}
        </p>
      </div>

      <div className="relative">
        <div className="blueprint-grid pointer-events-none absolute -inset-10" />
        <div className="relative overflow-hidden rounded-[12px] border border-line bg-panel-2">
          <Image
            src={sunexMachine}
            alt="A yellow and black SUNEX LAB mechanical system with linkages, gears and an electric drive in a workshop"
            preload
            placeholder="blur"
            sizes="(min-width: 1200px) 540px, (min-width: 768px) 45vw, 100vw"
            className="aspect-[4/3] h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
