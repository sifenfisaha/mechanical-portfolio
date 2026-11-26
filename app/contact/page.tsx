import type { Metadata } from "next";
import { Button } from "../_components/button";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { contact, site } from "../_data/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SUNEX LAB about mechanical design, CAD projects, product development, automation or robotics.",
};

const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

export default function ContactPage() {
  const details = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      label: "LinkedIn",
      value: strip(site.socials.linkedin),
      href: site.socials.linkedin,
    },
    {
      label: "Instagram",
      value: "@sunexlab",
      href: site.socials.instagram,
    },
    { label: "TikTok", value: "@sunexlab", href: site.socials.tiktok },
    { label: "Location", value: site.location },
  ];

  return (
    <>
      <PageHeader
        eyebrow={contact.eyebrow}
        title={contact.title}
        body={contact.paragraphs[0]}
      >
        <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-muted">
          {contact.paragraphs[1]}
        </p>
      </PageHeader>

      <section className="mx-auto grid max-w-[1200px] gap-4 px-5 pt-12 md:grid-cols-[1.5fr_1fr] md:px-10">
        <Reveal>
          <ContactForm email={site.email} />
        </Reveal>

        <Reveal delay={100}>
          <aside className="relative flex h-full flex-col overflow-hidden rounded-[10px] border border-line bg-panel p-7 sm:p-9">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-accent"
            />
            <dl className="space-y-6">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 break-words text-[15px] font-medium">
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.href.startsWith("http") && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto pt-10">
              <p className="text-[18px] font-semibold leading-snug tracking-tight">
                {contact.cta.title}
              </p>
              <p className="mt-2 text-[14px] text-accent-text">
                {contact.cta.body}
              </p>
              {site.cvUrl && (
                <Button href={site.cvUrl} download className="mt-6">
                  Download CV
                </Button>
              )}
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
