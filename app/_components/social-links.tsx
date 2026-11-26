import { site } from "../_data/site";

const links = [
  {
    label: "LinkedIn",
    href: site.socials.linkedin,
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.54h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.08c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V21h-4z" />
    ),
  },
  {
    label: "Instagram",
    href: site.socials.instagram,
    icon: (
      <path d="M12 2.2c3.2 0 3.58 0 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s0-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 2.16c-3.15 0-3.5 0-4.74.07-2.2.1-3.22 1.14-3.32 3.32-.06 1.24-.07 1.6-.07 4.74s0 3.5.07 4.74c.1 2.17 1.1 3.22 3.32 3.32 1.24.06 1.6.07 4.74.07s3.5 0 4.74-.07c2.2-.1 3.22-1.15 3.32-3.32.06-1.24.07-1.6.07-4.74s0-3.5-.07-4.74c-.1-2.17-1.13-3.22-3.32-3.32C15.5 4.37 15.15 4.36 12 4.36zm0 2.5a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28zm0 2.16a2.98 2.98 0 1 0 0 5.96 2.98 2.98 0 0 0 0-5.96zm5.34-3.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
    ),
  },
  {
    label: "TikTok",
    href: site.socials.tiktok,
    icon: (
      <path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.1a6.4 6.4 0 1 0 5.4 6.3V8.6a8 8 0 0 0 4.7 1.5V6.7a4.7 4.7 0 0 1-4.7-4.7z" />
    ),
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          title={link.label}
          className="grid size-9 place-items-center rounded-[6px] border border-line text-ink/80 transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
            {link.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}
