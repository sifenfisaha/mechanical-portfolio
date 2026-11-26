import Image from "next/image";
import engineV from "@/public/images/engine-v.webp";
import { hero, site } from "../_data/site";
import { Button } from "./button";

export function Hero() {
  const [primary, secondary, tertiary] = hero.ctas;

  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-14 pt-12 md:grid-cols-[1.1fr_1fr] md:px-10 md:pb-20 md:pt-20"
    >
      <div className="relative z-10">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
          <span className="text-accent-text">{site.brand}</span>
          <span aria-hidden="true">/</span>
          <span>{site.owner}</span>
        </p>

        <h1 className="mt-6 text-[36px] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] sm:text-[52px] lg:text-[60px]">
          {hero.title.map((line, i) => (
            <span
              key={line}
              className={`block ${i === hero.title.length - 1 ? "text-accent-text" : ""}`}
            >
              {line}
            </span>
          ))}
        </h1>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Disciplines">
          {hero.subheadline.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line px-3 py-1 text-[12px] font-medium text-ink/80"
            >
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-[460px] text-[15px] leading-relaxed text-muted">
          {hero.body}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={primary.href}>{primary.label}</Button>
          <Button href={secondary.href} variant="secondary">
            {secondary.label}
          </Button>
          <Button href={tertiary.href} variant="secondary">
            {tertiary.label}
          </Button>
        </div>

        <p className="mt-10 flex items-center gap-3 text-[13px] font-semibold tracking-tight text-ink/80">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {hero.tagline}
        </p>
      </div>

      <div className="relative">
        <div className="blueprint-grid pointer-events-none absolute -inset-10" />
        <div className="drawing-glow pointer-events-none absolute inset-0" />
        <Image
          src={engineV}
          alt=""
          preload
          sizes="(min-width: 768px) 560px, 100vw"
          className="drawing relative h-auto w-full opacity-80"
        />
      </div>
    </section>
  );
}
