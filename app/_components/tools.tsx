import { tools } from "../_data/site";

// Simple geometric marks so each tool reads like a logo in the strip.
const marks = [
  <path key="a" d="M4 4h7l-3 6h8l-9 10 3-8H4z" />,
  <path key="b" d="M12 3l9 16H3z" />,
  <g key="c">
    <circle cx="8" cy="12" r="5" />
    <circle cx="16" cy="12" r="5" fillOpacity="0.55" />
  </g>,
  <path key="d" d="M3 12a9 9 0 0 1 18 0h-5a4 4 0 0 0-8 0z" />,
  <path key="e" d="M4 20V4l8 8 8-8v16h-4v-7l-4 4-4-4v7z" />,
];

export function Tools() {
  return (
    <section
      id="tools"
      aria-label="Tools I work with"
      className="mx-auto max-w-[1200px] px-5 md:px-10"
    >
      <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 border-y border-line py-9 sm:grid-cols-3 md:flex md:justify-between">
        {tools.map((tool, i) => (
          <li
            key={tool}
            className="flex items-center justify-center gap-2 text-ink/75 transition-colors hover:text-ink"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-6"
              fill="currentColor"
              aria-hidden="true"
            >
              {marks[i % marks.length]}
            </svg>
            <span
              className={`text-[17px] tracking-tight ${
                i % 2 ? "font-extrabold italic" : "font-bold"
              }`}
            >
              {tool}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
