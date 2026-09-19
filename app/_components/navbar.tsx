"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav } from "../_data/site";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const mobileItems = [...nav, { label: "Contact", href: "/contact" }];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const lastY = useRef(0);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // Slide the highlight pill under a link, or fade it out.
  const movePill = useCallback((el: HTMLElement | null) => {
    const pill = pillRef.current;
    if (!pill) return;
    if (!el) {
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

  useEffect(() => {
    resetPill();
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

  // Close the mobile menu on Escape or a tap outside the bar.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:px-5 sm:pt-4 ${
          hidden && !open ? "-translate-y-[140%]" : "translate-y-0"
        }`}
      >
        <div
          className={`nav-enter relative mx-auto overflow-hidden rounded-[16px] border backdrop-blur-xl transition-[max-width,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            scrolled || open
              ? "max-w-[900px] border-nav-line bg-nav shadow-[var(--nav-shadow)]"
              : "max-w-[1200px] border-line bg-page/40 shadow-none"
          }`}
        >
          <div className="flex h-14 items-center justify-between gap-4 pl-4 pr-2 sm:pl-5">
            <Logo />

            <nav aria-label="Main" className="hidden md:block">
              <div
                ref={linksRef}
                onMouseLeave={resetPill}
                className="relative flex items-center gap-1"
              >
                <span
                  ref={pillRef}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-0 h-full rounded-full bg-ink/[0.08] opacity-0 transition-[transform,width,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={(e) => movePill(e.currentTarget)}
                    onFocus={(e) => movePill(e.currentTarget)}
                    onBlur={resetPill}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-300 hover:text-ink ${
                      isActive(item.href) ? "text-ink" : "text-ink/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-[10px] bg-ink px-4 py-2 text-[13px] font-semibold text-page transition-colors hover:bg-ink-hover"
              >
                Hire Me
                <svg
                  viewBox="0 0 16 16"
                  className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M5 11l6-6M6 5h5v5" />
                </svg>
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="relative grid size-9 place-items-center rounded-[10px] border border-line transition-colors hover:border-ink/25 md:hidden"
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
                    className={`absolute h-[1.5px] w-4 rounded-full bg-current transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${state}`}
                  />
                ))}
              </button>
            </div>
          </div>

          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <nav
                id="mobile-menu"
                aria-label="Mobile"
                inert={!open}
                className="border-t border-line px-2 pb-2 pt-2"
              >
                {mobileItems.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
                    className={`flex items-center justify-between rounded-[10px] px-3 py-3 text-[15px] transition-[opacity,transform,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
