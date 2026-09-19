import Link from "next/link";

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[13px] font-semibold text-ink/85 transition-colors hover:text-ink ${className}`}
    >
      {children}
      <svg
        viewBox="0 0 16 16"
        className="size-3.5 transition-transform group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </Link>
  );
}
