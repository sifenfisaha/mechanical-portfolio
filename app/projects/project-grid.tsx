"use client";

import { useState } from "react";
import type { Project } from "../_data/projects";
import { ProjectCard } from "../_components/project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];
  const [active, setActive] = useState("All");
  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);
  const [featured, ...rest] = visible;

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {categories.map((category) => {
          const count =
            category === "All"
              ? projects.length
              : projects.filter((p) => p.category === category).length;
          const selected = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={selected}
              className={`rounded-full border px-4 py-2 text-[12px] font-semibold transition-colors ${
                selected
                  ? "border-ink bg-ink text-page"
                  : "border-line text-ink/70 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {category}
              <span className={selected ? "ml-1.5 text-page/60" : "ml-1.5 text-muted"}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {featured && (
          <div className="md:col-span-2">
            <ProjectCard project={featured} large />
          </div>
        )}
        {rest.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
