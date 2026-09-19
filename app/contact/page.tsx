import type { Metadata } from "next";
import Image from "next/image";
import engineV from "@/public/images/engine-v.webp";
import { PageHeader } from "../_components/page-header";
import { Reveal } from "../_components/reveal";
import { SocialLinks } from "../_components/social-links";
import { site } from "../_data/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about mechanical design projects or roles.`,
};

export default function ContactPage() {
  const details = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Location", value: site.location },
    { label: "Availability", value: site.availability },
    { label: "Response time", value: "Within two working days" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={["Get in touch"]}
        body="For project inquiries, job opportunities or technical questions, use the form below or email me directly."
      />

      <section className="mx-auto grid max-w-[1200px] gap-4 px-5 pt-12 md:grid-cols-[1.5fr_1fr] md:px-10">
        <Reveal>
          <ContactForm email={site.email} />
        </Reveal>

        <Reveal delay={100}>
          <aside className="flex h-full flex-col rounded-[10px] border border-line bg-panel p-7 sm:p-9">
            <dl className="space-y-6">
              {details.map((item) => (
                <div key={item.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-[15px] font-medium">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
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

            <div className="mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Profiles
              </p>
              <div className="mt-3">
                <SocialLinks />
              </div>
            </div>

            <div className="drawing-glow mt-auto pt-10">
              <Image
                src={engineV}
                alt=""
                sizes="(min-width: 768px) 360px, 80vw"
                className="drawing mx-auto h-auto max-h-[220px] w-auto opacity-60"
              />
            </div>
          </aside>
        </Reveal>
      </section>
    </>
  );
}
