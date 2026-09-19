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
      className={`flex min-w-0 items-center gap-2 text-[17px] font-bold tracking-tight ${className}`}
    >
      <svg
        viewBox="0 0 20 20"
        className="size-5 shrink-0"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="16" height="3" rx="0.5" />
        <rect x="2" y="8.5" width="16" height="3" rx="0.5" />
        <rect x="2" y="14" width="10" height="3" rx="0.5" />
      </svg>
      <span className="truncate">{site.name}</span>
    </Link>
  );
}
