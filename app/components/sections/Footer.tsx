"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import ChameleonEasterEgg from "../ChameleonEasterEgg";

const NAVIGATION = [
  { href: "/", label: "Resort Overview" },
  { href: "/rooms", label: "Rooms & Booking" },
  { href: "/dining", label: "Dining" },
  { href: "/spa", label: "Spa & Wellness" },
  { href: "/services", label: "Experiences" },
  { href: "/blog", label: "Blog" },
];

const ABOUT = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const SOCIALS = [
  {
    label: "Facebook",
    path: "M13 7h3V4h-3a4 4 0 0 0-4 4v2H7v3h2v7h3v-7h2.5l.5-3H12V8a1 1 0 0 1 1-1z",
  },
  {
    label: "Instagram",
    path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-1.2a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6z",
  },
  {
    label: "X",
    path: "M18.244 2H21l-6.52 7.45L22 22h-6.77l-4.72-6.18L5.1 22H2.34l6.98-7.98L2 2h6.9l4.27 5.65L18.244 2z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.74 0h4.37v1.91h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.26c0-1.49-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.29V22H7.96V8z",
  },
  {
    label: "TikTok",
    path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.79a8.16 8.16 0 0 0 4.77 1.52V6.85a4.85 4.85 0 0 1-1.84-.16z",
  },
];

const LEGAL: { label: string; href: string }[] = [
  { label: "Legal Notice", href: "/legal/notice" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Accessibility Statement", href: "/legal/accessibility" },
  { label: "Cookie Preferences", href: "/legal/cookies" },
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Do Not Sell My Info", href: "/legal/do-not-sell" },
  { label: "Refund Policy", href: "/legal/refund" },
];

const scriptHeader: React.CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontStyle: "italic",
  fontWeight: 400,
  fontSize: "2.1rem",
  letterSpacing: "0.01em",
  color: "rgba(255,255,255,0.95)",
};

export default function Footer() {
  return (
    <footer
      data-theme="slate"
      className="theme-slate text-white"
      style={{ background: "var(--color-secondary)", padding: "5rem 0 2rem" }}
    >
      <div className="container-xl">
        {/* Centered brand block */}
        <Reveal>
        <div className="mb-12 flex flex-col items-center text-center">
          <Image
            src="/raha-logo.png"
            alt=""
            width={120}
            height={120}
            style={{
              width: "clamp(72px, 8vw, 110px)",
              height: "auto",
              filter: "brightness(0) invert(1)",
              opacity: 0.95,
            }}
          />
          <span
            className="mt-5 font-[family-name:var(--font-heading)] text-white"
            style={{
              fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            Raha Resort
          </span>
          <a
            href="/booking-unavailable"
            className="mt-7 inline-flex items-center justify-center bg-white px-9 py-3.5 text-[0.9rem] font-medium uppercase tracking-[3px] transition-opacity hover:opacity-90"
            style={{ color: "var(--color-secondary)" }}
          >
            Book Now!
          </a>
        </div>
        </Reveal>

        {/* Three-column lower area. Each column is centered in its grid cell,
            but its inner content is left-aligned so the title and items share
            the same left edge. */}
        <div className="mx-auto grid max-w-[860px] gap-6 pb-12 md:grid-cols-3 md:gap-8">
          <Reveal className="flex justify-center">
            <div className="text-left">
              <h4 style={scriptHeader} className="mb-20">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3">
                {NAVIGATION.map((l, i) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={`text-[0.95rem] transition-colors duration-300 hover:text-white ${
                        i === 0 ? "text-white/55" : "text-white"
                      }`}
                      style={{
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="flex justify-center" delay={0.08}>
            <div className="text-left">
              <h4 style={scriptHeader} className="mb-20">
                About
              </h4>
              <ul className="flex flex-col gap-3">
                {ABOUT.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[0.95rem] text-white transition-colors duration-300 hover:text-white/80"
                      style={{
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="flex justify-center" delay={0.16}>
            <div className="text-left">
              <h4 style={scriptHeader} className="mb-20">
                More
              </h4>
              <p
                className="mb-4 max-w-[260px] text-[0.95rem] text-white/85"
              style={{
                fontFamily: "var(--font-sans)",
              }}
            >
              Subscribe for exclusive offers and updates.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = (
                  e.currentTarget as HTMLFormElement
                ).querySelector("input") as HTMLInputElement;
                input.value = "";
                input.placeholder = "Thanks for subscribing!";
                setTimeout(() => {
                  input.placeholder = "Enter your email";
                }, 3000);
              }}
              className="flex w-full max-w-[300px]"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 border-0 bg-white/15 px-4 py-3 text-[0.9rem] text-white placeholder:text-white/55 outline-none transition-colors focus:bg-white/20"
                style={{
                  fontFamily: "var(--font-sans)",
                }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-auto w-[52px] items-center justify-center border-0 transition-opacity hover:opacity-90"
                style={{ background: "var(--color-accent)" }}
              >
                <ArrowRight size={18} color="white" />
              </button>
            </form>
            </div>
          </Reveal>
        </div>

        {/* Social row + language picker */}
        <Reveal>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="inline-flex text-white/80 transition-all duration-300 hover:scale-125 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width={20}
                height={20}
                fill="currentColor"
                aria-hidden
              >
                <path d={s.path} />
              </svg>
            </a>
          ))}

          {/* Language picker */}
          <div className="ml-2 flex items-center">
            <label htmlFor="footer-language" className="sr-only">
              Language
            </label>
            <select
              id="footer-language"
              defaultValue="en"
              className="cursor-pointer border-0 bg-transparent pr-1 text-[0.85rem] text-white/70 outline-none transition-colors hover:text-white"
              style={{
                fontFamily: "var(--font-sans)",
              }}
            >
              <option value="en" style={{ color: "#1f1d1a" }}>
                English
              </option>
              <option value="ar" style={{ color: "#1f1d1a" }}>
                العربية
              </option>
              <option value="he" style={{ color: "#1f1d1a" }}>
                עברית
              </option>
              <option value="fr" style={{ color: "#1f1d1a" }}>
                Français
              </option>
              <option value="es" style={{ color: "#1f1d1a" }}>
                Español
              </option>
              <option value="ru" style={{ color: "#1f1d1a" }}>
                Русский
              </option>
            </select>
          </div>
        </div>
        </Reveal>

        {/* Legal + credit, centered block with copyright aligned to its left edge */}
        <Reveal delay={0.08}>
        <div className="border-t border-white/10 pt-7">
          <div className="mx-auto inline-block w-full text-center">
            <div className="inline-block text-left">
              <ul
                className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-2 text-[0.85rem] text-white/80"
                style={{
                  fontFamily: "var(--font-sans)",
                }}
              >
                {LEGAL.map((item, i, arr) => (
                  <li key={item.label} className="flex items-center gap-2">
                    <a
                      href={item.href}
                      className="legal-link transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                    {i < arr.length - 1 ? (
                      <span aria-hidden className="text-white/40">
                        ·
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
              <div
                className="text-[0.78rem] text-white/45"
                style={{
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "0",
                }}
              >
                © {new Date().getFullYear()} by Raha Resort. Built by{" "}
                <a
                  href="https://roseyco.com"
                  target="_blank"
                  rel="noopener"
                  className="text-white/40 transition-colors hover:text-white/70"
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    textDecorationThickness: "1px",
                  }}
                >
                  RoseyCo
                </a>
                <span style={{ position: "relative", display: "inline-block" }}>
                  .
                  <ChameleonEasterEgg
                    left="calc(100% + 2px)"
                    top="50%"
                    imageSize={14}
                    tooltipSide="top"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </footer>
  );
}
