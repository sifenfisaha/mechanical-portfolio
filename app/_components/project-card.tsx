import Image from "next/image";
import Link from "next/link";
import type { Project } from "../_data/projects";

export function ProjectCard({
  project,
  tall = false,
  large = false,
}: {
  project: Project;
  tall?: boolean;
  large?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-line bg-panel transition-colors hover:border-ink/20"
    >
      <div
        className={`drawing-glow relative flex items-center justify-center p-6 sm:p-8 ${
          tall ? "flex-1" : ""
        } ${large ? "md:min-h-[420px]" : ""}`}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          sizes={large ? "(min-width: 1200px) 1100px, 100vw" : "(min-width: 768px) 560px, 100vw"}
          className={`drawing h-auto w-auto max-w-full object-contain opacity-85 transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
            tall ? "max-h-[640px]" : large ? "max-h-[380px]" : "max-h-[300px]"
          }`}
        />
      </div>
      <div className="flex items-end justify-between gap-6 border-t border-line bg-panel-2/60 px-6 py-5 sm:px-7">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            {project.category} · {project.year}
          </p>
          <h3 className="mt-2 text-[17px] font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1.5 max-w-[440px] text-[13px] leading-relaxed text-muted">
            {project.summary}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-ink/70 transition-colors group-hover:border-ink/40 group-hover:bg-ink group-hover:text-page"
        >
          <svg
            viewBox="0 0 16 16"
            className="size-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M5 11l6-6M6 5h5v5" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
