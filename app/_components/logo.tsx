import Link from "next/link";
import { site } from "../_data/site";

export function Logo({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${site.brand} home`}
      className={`flex min-w-0 items-center gap-2.5 text-[16px] font-extrabold tracking-[0.06em] ${className}`}
    >
      {/* Gear-like mark in brand yellow. */}
      <svg
        viewBox="0 0 24 24"
        className="size-6 shrink-0"
        aria-hidden="true"
      >
        <rect width="24" height="24" rx="5" className="fill-accent" />
        <circle
          cx="12"
          cy="12"
          r="4.6"
          fill="none"
          strokeWidth="2.2"
          className="stroke-accent-ink"
        />
        <path
          d="M12 3.8v3M12 17.2v3M3.8 12h3M17.2 12h3"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="stroke-accent-ink"
        />
      </svg>
      <span className="truncate">{site.brand}</span>
    </Link>
  );
}
