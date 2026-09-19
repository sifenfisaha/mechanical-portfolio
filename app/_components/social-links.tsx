import { site } from "../_data/site";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <a
        href={site.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="grid size-7 place-items-center rounded-[4px] bg-ink text-page transition-colors hover:bg-ink-hover"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.54h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.08c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V21h-4z" />
        </svg>
      </a>
      <a
        href={site.socials.x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="grid size-7 place-items-center rounded-[4px] text-ink transition-colors hover:bg-panel-2"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
          <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.46 21H2.38l7.17-8.2L2 3h6.33l4.37 5.77zm-1.08 16.18h1.7L7.4 4.73H5.58z" />
        </svg>
      </a>
    </div>
  );
}
