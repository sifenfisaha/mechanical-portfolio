"use client";

import { useEffect, useSyncExternalStore, type MouseEvent } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

// The inline script in the root layout sets data-theme before paint; this
// component just reads and updates that attribute.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");
  const next: Theme = theme === "dark" ? "light" : "dark";

  // The system setting always wins when it changes, replacing any manual pick.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {}
      applyTheme(media.matches ? "light" : "dark");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const commit = () => {
      applyTheme(next);
      try {
        sessionStorage.setItem(STORAGE_KEY, next);
      } catch {}
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!document.startViewTransition || reduceMotion) {
      commit();
      return;
    }

    // Reveal the new theme as a circle growing out of the button.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(commit);
    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 700,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {});
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-[10px] border border-line text-ink/80 transition-colors hover:border-ink/25 hover:text-ink"
    >
      {/* Sun: shown in light mode. */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute size-[17px] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          theme === "light"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-50 opacity-0"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
      </svg>
      {/* Moon: shown in dark mode. */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute size-[16px] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-50 opacity-0"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
      </svg>
    </button>
  );
}
