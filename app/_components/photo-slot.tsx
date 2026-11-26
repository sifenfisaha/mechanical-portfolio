import Image from "next/image";
import type { GalleryItem } from "../_data/projects";

// Shows a project image, or a labelled blueprint placeholder while the real
// render, drawing or photograph has not been added yet.
export function PhotoSlot({
  item,
  sizes,
  priority = false,
  className = "",
}: {
  item: GalleryItem;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  if (item.src) {
    return (
      <div className={`relative overflow-hidden bg-panel-2 ${className}`}>
        <Image
          src={item.src}
          alt={item.alt ?? item.title}
          sizes={sizes}
          preload={priority}
          placeholder="blur"
          className="size-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-panel-2/60 p-6 text-center ${className}`}
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0" />
      <svg
        viewBox="0 0 48 48"
        className="relative size-10 text-accent-text/80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="9" />
        <circle cx="24" cy="24" r="3" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11.3 11.3l4.2 4.2M32.5 32.5l4.2 4.2M11.3 36.7l4.2-4.2M32.5 15.5l4.2-4.2" />
      </svg>
      <p className="relative text-[13px] font-semibold tracking-tight text-ink/85">
        {item.title}
      </p>
      <p className="relative text-[11px] uppercase tracking-[0.14em] text-muted">
        Image coming soon
      </p>
    </div>
  );
}
