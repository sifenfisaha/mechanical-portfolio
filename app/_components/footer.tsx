import Link from "next/link";
import { footerLinks, site } from "../_data/site";
import { Logo } from "./logo";
import { SocialLinks } from "./social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line bg-panel md:mt-32">
      <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[300px] text-[13px] leading-relaxed text-muted">
              {site.disciplines}
            </p>
            <p className="mt-3 text-[14px] font-semibold text-accent-text">
              {site.tagline}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-[13px] font-semibold underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            >
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-[14px] font-semibold">{column.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("/") ? (
                        <Link
                          href={link.href}
                          className="text-[13px] text-muted transition-colors hover:text-ink"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          {...(link.href.startsWith("http") && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                          className="text-[13px] text-muted transition-colors hover:text-ink"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-[12px] text-muted">
            © {year} {site.brand}. All Rights Reserved.
          </p>
          <SocialLinks />
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-muted/70">
          Decorative line illustrations adapted from public-domain U.S. patent
          drawings and L&apos;Aérophile (1936) technical plates.
        </p>
      </div>
    </footer>
  );
}
