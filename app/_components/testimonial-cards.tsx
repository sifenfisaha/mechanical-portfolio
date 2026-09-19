import Image, { type StaticImageData } from "next/image";
import type { testimonials } from "../_data/site";

export type Testimonial = (typeof testimonials.items)[number];

export function QuoteCard({ item }: { item: Testimonial }) {
  const initials = item.name
    .replace("Dr. ", "")
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <figure className="flex h-full flex-col justify-between gap-8 rounded-[10px] border border-line bg-panel p-6 sm:p-7">
      <blockquote className="text-[14px] leading-relaxed text-ink/85">
        “{item.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#f59e3b] to-[#b4541a] text-[12px] font-bold text-page"
        >
          {initials}
        </span>
        <span>
          <span className="block text-[13px] font-semibold">{item.name}</span>
          <span className="block text-[12px] text-muted">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function ImageCard({
  image,
  alt,
}: {
  image: StaticImageData;
  alt: string;
}) {
  return (
    <div className="drawing-glow group flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-[10px] border border-line bg-panel p-6">
      <Image
        src={image}
        alt={alt}
        sizes="(min-width: 768px) 380px, 100vw"
        className="drawing h-auto max-h-[200px] w-auto max-w-full object-contain opacity-85 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    </div>
  );
}
