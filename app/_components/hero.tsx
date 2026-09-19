import Image from "next/image";
import Link from "next/link";
import engineV from "@/public/images/engine-v.webp";
import { hero } from "../_data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-14 pt-14 md:grid-cols-[1fr_1.1fr] md:px-10 md:pb-20 md:pt-20"
    >
      <div className="relative z-10">
        <h1 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[50px]">
          {hero.title.map((line) => (
            <span key={line} className="sm:block">
              {line}{" "}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-[380px] text-[14px] leading-relaxed text-muted">
          {hero.body}
        </p>
        <Link
          href={hero.cta.href}
          className="mt-8 inline-flex items-center gap-2 rounded-[5px] bg-soft px-5 py-2.5 text-[13px] font-semibold text-page transition-colors hover:bg-ink"
        >
          {hero.cta.label}
        </Link>
      </div>

      <div className="relative">
        <div className="blueprint-grid pointer-events-none absolute -inset-10" />
        <div className="drawing-glow pointer-events-none absolute inset-0" />
        <Image
          src={engineV}
          alt="Perspective line drawing of a V-twin engine with numbered components"
          preload
          sizes="(min-width: 768px) 600px, 100vw"
          className="drawing relative h-auto w-full opacity-90"
        />
      </div>
    </section>
  );
}
