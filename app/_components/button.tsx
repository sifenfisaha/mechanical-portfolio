import Link from "next/link";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-accent text-accent-ink hover:brightness-110 focus-visible:outline-accent",
  secondary:
    "border border-line text-ink/85 hover:border-ink/40 hover:text-ink",
  solid: "bg-ink text-page hover:bg-ink-hover",
};

export function Button({
  href,
  children,
  variant = "primary",
  download,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  download?: boolean;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[6px] px-5 py-2.5 text-[13px] font-semibold transition-[color,background-color,border-color,filter] focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`;

  // Files in /public (like the CV) are plain links, not app routes.
  if (download) {
    return (
      <a href={href} download className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
