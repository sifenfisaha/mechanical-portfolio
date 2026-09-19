"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav } from "../_data/site";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

// Tailwind's `lg` breakpoint: the full link row replaces the menu from here up.
const DESKTOP_QUERY = "(min-width: 1024px)";
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const lastY = useRef(0);

  // Close the menu after any navigation, including the browser back button.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // Slide the highlight pill under a link, or fade it out.
  const movePill = useCallback((el: HTMLElement | null) => {
    const pill = pillRef.current;
    if (!pill) return;
    if (!el || el.offsetWidth === 0) {
      pill.style.opacity = "0";
      return;
    }
    pill.style.opacity = "1";
    pill.style.width = `${el.offsetWidth}px`;
    pill.style.transform = `translateX(${el.offsetLeft}px)`;
  }, []);

  const resetPill = useCallback(() => {
    movePill(
      linksRef.current?.querySelector<HTMLElement>('[aria-current="page"]') ??
        null,
    );
  }, [movePill]);

  // Re-measure when the page changes, the link row resizes or appears
  // (e.g. rotating a tablet), and once the web font has loaded.
  useEffect(() => {
    resetPill();
    const links = linksRef.current;
    if (!links) return;
    const observer = new ResizeObserver(() => resetPill());
    observer.observe(links);
    document.fonts?.ready.then(resetPill);
    return () => observer.disconnect();
  }, [pathname, resetPill]);

  // Compact the bar once the page scrolls; hide it while scrolling down.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 24);
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 160);
        lastY.current = y;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // While the menu is open: lock page scroll, and close on Escape, a tap
  // outside the bar, or when the screen becomes wide enough for the link row.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      burgerRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-page/60 backdrop-blur-[2px] transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ${EASE} motion-reduce:transition-none sm:px-5 sm:pt-4 ${
          hidden && !open ? "-translate-y-[140%]" : "translate-y-0"
        }`}
      >
        <div
          className={`nav-enter relative mx-auto overflow-hidden rounded-[16px] border backdrop-blur-xl transition-[max-width,background-color,border-color,box-shadow] duration-500 ${EASE} motion-reduce:transition-none ${
            scrolled || open
              ? "max-w-[900px] border-nav-line bg-nav shadow-[var(--nav-shadow)]"
              : "max-w-[1200px] border-line bg-page/40 shadow-none"
          }`}
        >
          <div className="flex h-14 items-center justify-between gap-3 pl-4 pr-2 sm:pl-5">
            <Logo onClick={close} className="py-2" />

            <nav aria-label="Main" className="hidden shrink-0 lg:block">
              <div
                ref={linksRef}
                onMouseLeave={resetPill}
                className="relative flex items-center gap-1"
              >
                <span
                  ref={pillRef}
                  aria-hidden="true"
                  className={`pointer-events-none absolute left-0 top-0 h-full rounded-full bg-ink/[0.08] opacity-0 transition-[transform,width,opacity] duration-300 ${EASE}`}
                />
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={(e) => movePill(e.currentTarget)}
                    onFocus={(e) => movePill(e.currentTarget)}
                    onBlur={resetPill}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-300 hover:text-ink ${
                      isActive(item.href) ? "text-ink" : "text-ink/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className="group hidden h-10 items-center gap-1.5 whitespace-nowrap rounded-[10px] bg-ink px-4 text-[13px] font-semibold text-page transition-colors hover:bg-ink-hover sm:inline-flex"
              >
                Hire Me
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <button
                ref={burgerRef}
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="relative grid size-10 place-items-center rounded-[10px] border border-line transition-colors hover:border-ink/25 lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {[
                  open ? "rotate-45" : "-translate-y-[5px]",
                  open ? "scale-x-0 opacity-0" : "",
                  open ? "-rotate-45" : "translate-y-[5px]",
                ].map((state, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className={`absolute h-[1.5px] w-4 rounded-full bg-current transition-[transform,opacity] duration-300 ${EASE} ${state}`}
                  />
                ))}
              </button>
            </div>
          </div>

          <div
            className={`grid transition-[grid-template-rows] duration-500 ${EASE} lg:hidden ${
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <nav
                id="mobile-menu"
                aria-label="Mobile"
                inert={!open}
                className="max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain border-t border-line p-2"
              >
                {nav.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
                    className={`flex items-center justify-between rounded-[10px] px-3 py-3 text-[15px] transition-[opacity,transform,background-color] duration-500 ${EASE} ${
                      open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                    } ${
                      isActive(item.href)
                        ? "bg-ink/[0.07] text-ink"
                        : "text-ink/75 active:bg-ink/[0.05]"
                    }`}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 16 16"
                      className="size-3.5 text-muted"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                ))}

                <Link
                  href="/contact"
                  onClick={close}
                  style={{
                    transitionDelay: open ? `${60 + nav.length * 45}ms` : "0ms",
                  }}
                  className={`mt-2 flex h-12 items-center justify-center gap-1.5 rounded-[10px] bg-ink text-[14px] font-semibold text-page transition-[opacity,transform,background-color] duration-500 ${EASE} hover:bg-ink-hover ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                  }`}
                >
                  Hire Me
                  <ArrowUpRight />
                </Link>
              </nav>
            </div>
          </div>

          <span aria-hidden="true" className="nav-progress" />
        </div>
      </header>

      {/* Keeps page content clear of the fixed bar. */}
      <div aria-hidden="true" className="h-[68px] sm:h-[72px]" />
    </>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`size-3 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 11l6-6M6 5h5v5" />
    </svg>
  );
}
