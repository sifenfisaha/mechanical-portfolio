import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { Eyebrow } from "./section-heading";

export function PageHeader({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string[];
  body: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-5 pb-4 pt-16 md:px-10 md:pt-24">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 text-[36px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[52px]">
          {title.map((line) => (
            <span key={line} className="sm:block">
              {line}{" "}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-muted">
          {body}
        </p>
        {children}
      </Reveal>
    </section>
  );
}
