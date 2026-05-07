"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useActiveTheme } from "./ThemeWatcher";
import DarkModeToggle from "./DarkModeToggle";

type NavItem = {
  href: string;
  label: string;
  sub?: { href: string; label: string }[];
  /* disable: true makes the top-level entry non-clickable. It still
     triggers its dropdown on hover but doesn't navigate. */
  disabled?: boolean;
};

const NAV: NavItem[] = [
  { href: "/", label: "Resort Overview" },
  {
    href: "/rooms",
    label: "Rooms & Booking",
    sub: [
      { href: "/services", label: "Amenities" },
      { href: "/rooms#book", label: "Book a Room" },
    ],
  },
  { href: "/pool", label: "Pool" },
  {
    href: "/spa",
    label: "Spa & Wellness",
    sub: [
      { href: "/spa", label: "Spa" },
      { href: "/gym", label: "Gym" },
    ],
  },
  {
    href: "/services",
    label: "Experiences",
    disabled: true,
    sub: [
      { href: "/tours", label: "Tours" },
      { href: "/transport", label: "Transport" },
      { href: "/events", label: "Events & Weddings" },
    ],
  },
  {
    href: "/about",
    label: "About Us",
    sub: [
      { href: "/location", label: "Location" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    href: "/blog",
    label: "Blog",
    sub: [
      { href: "/blog", label: "Articles" },
      { href: "/gallery", label: "Photo Gallery" },
    ],
  },
];

export default function Header() {
  const theme = useActiveTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (href: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenMenu(href);
  };
  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, 180);
  };

  useEffect(() => {
    let ticking = false;
    let last = false;
    const update = () => {
      const next = window.scrollY > 60;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onLight = theme === "cream" || theme === "light";

  return (
    <header
      data-theme-active={theme}
      data-scrolled={scrolled ? "true" : "false"}
      className="fixed inset-x-0 top-0 z-50 will-change-[padding,background,box-shadow] transition-[padding,background-color,border-color,box-shadow,backdrop-filter] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        paddingBlock: scrolled ? 14 : 22,
        background: scrolled
          ? "var(--theme-nav-bg)"
          : "var(--theme-nav-bg-top)",
        borderBottom: `1px solid ${
          scrolled ? "var(--theme-nav-border)" : "transparent"
        }`,
        backdropFilter: scrolled ? "saturate(160%) blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(160%) blur(10px)" : "none",
        color: "var(--theme-nav-fg)",
        boxShadow: scrolled ? "0 8px 24px -12px rgba(0,0,0,0.18)" : "none",
        transform: "translateZ(0)",
      }}
    >
      <div className="container-xl flex items-center justify-between gap-6">
        {/* Brand cluster: logo | divider | wordmark stacked over nav */}
        <div className="flex items-center gap-5">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="Raha Resort home"
            className="flex items-center"
          >
            <Image
              src="/raha-logo.png"
              alt="Raha Resort"
              width={120}
              height={120}
              priority
              unoptimized
              style={{
                width: scrolled ? 44 : 56,
                height: scrolled ? 44 : 56,
                objectFit: "contain",
                filter: onLight ? "none" : "brightness(0) invert(1)",
                transition:
                  "filter 0.35s ease, width 600ms cubic-bezier(0.16,1,0.3,1), height 600ms cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </Link>

          <span
            aria-hidden
            className="hidden lg:block"
            style={{
              width: 1,
              height: scrolled ? 44 : 56,
              background: "currentColor",
              opacity: 0.35,
              transition: "height 600ms cubic-bezier(0.16,1,0.3,1)",
            }}
          />

          <div className="hidden lg:flex flex-col gap-2">
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] font-normal uppercase leading-none"
              style={{
                color: "var(--theme-nav-fg)",
                fontSize: "1.25rem",
                letterSpacing: "0.22em",
                transformOrigin: "left center",
                transform: scrolled ? "scale(0.84)" : "scale(1)",
                transition:
                  "transform 600ms cubic-bezier(0.16,1,0.3,1), color 350ms ease",
                willChange: "transform",
              }}
            >
              Raha Resort
            </Link>
            <nav aria-label="Primary" className="flex items-center gap-7">
              {NAV.map((l) => {
                const active =
                  l.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(l.href);

                if (l.sub && l.sub.length) {
                  const isOpen = openMenu === l.href;
                  return (
                    <div
                      key={l.href}
                      className="relative"
                      onPointerEnter={() => openDropdown(l.href)}
                      onPointerLeave={scheduleClose}
                      onFocusCapture={() => openDropdown(l.href)}
                      onBlurCapture={(e) => {
                        if (
                          !e.currentTarget.contains(
                            e.relatedTarget as Node | null
                          )
                        ) {
                          scheduleClose();
                        }
                      }}
                    >
                      {l.disabled ? (
                        <span
                          className="text-[0.9rem] font-medium select-none"
                          style={{
                            fontFamily: "var(--font-sans)",
                            color: "var(--theme-nav-fg)",
                            cursor: "default",
                          }}
                        >
                          {l.label}
                        </span>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-[0.9rem] font-medium transition-opacity duration-300"
                          style={{
                            fontFamily: "var(--font-sans)",
                            color: active
                              ? "var(--color-accent)"
                              : "var(--theme-nav-fg)",
                            opacity: active ? 0.85 : 1,
                            textDecoration: active ? "none" : "underline",
                            textUnderlineOffset: "5px",
                            textDecorationThickness: "1px",
                          }}
                        >
                          {l.label}
                        </Link>
                      )}
                      <div
                        className="absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3"
                        style={{
                          display: isOpen ? "block" : "none",
                        }}
                      >
                        <ul
                          className="min-w-[200px] bg-white py-2"
                          style={{
                            border: "1px solid rgba(0,0,0,0.06)",
                            boxShadow: "0 18px 40px -16px rgba(20,14,8,0.35)",
                          }}
                        >
                          {l.sub.map((s) => (
                            <li key={s.href + s.label}>
                              <Link
                                href={s.href}
                                className="block px-5 py-2.5 text-[0.85rem] transition-colors hover:bg-[rgba(212,193,154,0.18)]"
                                style={{
                                  color: "var(--color-secondary)",
                                  fontFamily: "var(--font-sans)",
                                }}
                              >
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-[0.9rem] font-medium transition-opacity duration-300"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: active
                        ? "var(--color-accent)"
                        : "var(--theme-nav-fg)",
                      opacity: active ? 0.85 : 1,
                      textDecoration: active ? "none" : "underline",
                      textUnderlineOffset: "5px",
                      textDecorationThickness: "1px",
                    }}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile wordmark only (nav goes to overlay) */}
          <span
            className="lg:hidden font-[family-name:var(--font-heading)] font-normal uppercase tracking-[0.22em]"
            style={{
              color: "var(--theme-nav-fg)",
              fontSize: "1.1rem",
            }}
          >
            Raha Resort
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-none px-7 py-3 font-[family-name:var(--font-heading)] text-[0.9rem] font-normal tracking-[2.4px] uppercase transition-all duration-500 hover:-translate-y-0.5"
            style={{
              background: "var(--color-primary)",
              color: "#ffffff",
              boxShadow: "0 6px 20px rgba(139,115,85,0.25)",
            }}
          >
            Book Now
          </Link>

          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center"
            style={{ color: "var(--theme-nav-fg)" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className="relative block h-[2px] w-6 transition-all duration-300"
              style={{
                background: open ? "transparent" : "currentColor",
              }}
            >
              <span
                className="absolute left-0 h-[2px] w-6 transition-all duration-300"
                style={{
                  background: "currentColor",
                  top: open ? 0 : -8,
                  transform: open ? "rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute left-0 h-[2px] w-6 transition-all duration-300"
                style={{
                  background: "currentColor",
                  top: open ? 0 : 8,
                  transform: open ? "rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(20,16,12,0.98)",
          color: "#f5f1eb",
          height: "100dvh",
          top: 0,
          zIndex: 60,
          overflowY: "auto",
        }}
      >
        {/* Close button — pinned top-right of the overlay so it's always
            findable, regardless of header z-index. */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center"
          style={{ color: "#f5f1eb" }}
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        <nav
          aria-label="Mobile"
          className="flex flex-col gap-2 px-8 pb-12 pt-24"
        >
          {NAV.map((l, i) => (
            <div
              key={l.href + l.label}
              style={{
                transform: open ? "translateX(0)" : "translateX(-20px)",
                opacity: open ? 1 : 0,
                transition: "transform 500ms ease, opacity 500ms ease",
                transitionDelay: open ? `${120 + i * 50}ms` : "0ms",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {l.disabled ? (
                <span
                  className="block py-4 font-[family-name:var(--font-heading)]"
                  style={{
                    fontSize: "clamp(22px, 5vw, 30px)",
                    color: "rgba(245,241,235,0.8)",
                  }}
                >
                  {l.label}
                </span>
              ) : (
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-[family-name:var(--font-heading)]"
                  style={{
                    fontSize: "clamp(22px, 5vw, 30px)",
                    color: "#f5f1eb",
                  }}
                >
                  {l.label}
                </Link>
              )}

              {l.sub && l.sub.length ? (
                <ul className="flex flex-col gap-1 pb-4 pl-1">
                  {l.sub.map((s) => (
                    <li key={s.href + s.label}>
                      <Link
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center gap-3 py-2 text-[0.95rem]"
                        style={{
                          color: "rgba(245,241,235,0.7)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        <span
                          aria-hidden
                          style={{
                            width: 16,
                            height: 1,
                            background: "var(--color-accent)",
                          }}
                        />
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[2.5px] text-white"
            style={{
              background: "var(--color-primary)",
              boxShadow: "0 6px 20px rgba(139,115,85,0.25)",
            }}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
