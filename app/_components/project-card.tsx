import Link from "next/link";
import type { Project } from "../_data/projects";
import { PhotoSlot } from "./photo-slot";

export function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const software = project.tools.filter((tool) =>
    ["SolidWorks", "CATIA V5", "Autodesk Fusion 360", "AutoCAD"].includes(tool),
  );

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[10px] border border-line bg-panel transition-colors hover:border-accent/60">
      <PhotoSlot
        item={project.gallery[0]}
        sizes={large ? "(min-width: 1200px) 1100px, 100vw" : "(min-width: 768px) 560px, 100vw"}
        className={`aspect-[16/9] ${large ? "md:aspect-[21/9]" : ""}`}
      />
      <div className="flex flex-1 flex-col border-t border-line px-6 py-6 sm:px-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-accent-ink">
            {project.type}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            {project.categories.join(" · ")}
          </span>
        </div>
        <h3 className="mt-4 text-[19px] font-semibold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 max-w-[520px] text-[13px] leading-relaxed text-muted">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
          <p className="text-[12px] text-ink/75">
            <span className="text-muted">Software: </span>
            {software.join(", ")}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-text">
            View Project
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
          </span>
        </div>
      </div>
    </article>
  );
}
