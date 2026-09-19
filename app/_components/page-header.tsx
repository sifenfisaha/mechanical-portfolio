import type { ReactNode } from "react";
import { Reveal } from "./reveal";

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
        <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">
          <span className="h-px w-6 bg-muted/60" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-5 text-[36px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[52px]">
          {title.map((line) => (
            <span key={line} className="sm:block">
              {line}{" "}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-muted">
          {body}
        </p>
        {children}
      </Reveal>
    </section>
  );
}
