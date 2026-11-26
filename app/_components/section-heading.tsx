import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-accent-text">
      <span className="h-px w-6 bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  className = "",
}: {
  eyebrow?: string;
  title: string[];
  body?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`text-[30px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[40px] ${
          eyebrow ? "mt-4" : ""
        }`}
      >
        {title.map((line) => (
          <span key={line} className="sm:block">
            {line}{" "}
          </span>
        ))}
      </h2>
      {body && (
        <p className="mt-4 max-w-[480px] text-[14px] leading-relaxed text-muted">
          {body}
        </p>
      )}
    </div>
  );
}
