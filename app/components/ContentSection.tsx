"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Theme = "light" | "cream" | "slate" | "primary" | "dark";

const BG: Record<Theme, { dataTheme: string; bg: string; onDark: boolean }> = {
  light: { dataTheme: "light", bg: "#ffffff", onDark: false },
  cream: { dataTheme: "cream", bg: "var(--color-off-white)", onDark: false },
  slate: { dataTheme: "slate", bg: "var(--color-secondary)", onDark: true },
  primary: { dataTheme: "primary", bg: "var(--color-primary)", onDark: true },
  dark: { dataTheme: "dark", bg: "var(--color-ink)", onDark: true },
};

export function Section({
  id,
  theme = "light",
  children,
}: {
  id?: string;
  theme?: Theme;
  children: ReactNode;
}) {
  const cfg = BG[theme];
  return (
    <section
      id={id}
      data-theme={cfg.dataTheme}
      className={`theme-${cfg.dataTheme} relative`}
      style={{ background: cfg.bg, padding: "6rem 0" }}
    >
      <div className="container-xl">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  description,
  center = true,
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <div
      className={center ? "section-header" : "mb-16"}
      style={{ textAlign: center ? "center" : "left" }}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={`section-subtitle ${onDark ? "on-dark" : ""}`.trim()}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 style={{ color: onDark ? "#fff" : "var(--color-secondary)" }}>
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.14}>
        <div className={`title-divider ${onDark ? "on-dark" : ""} ${center ? "center" : ""}`.trim()} />
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p
            className="section-description"
            style={{
              color: onDark ? "rgba(255,255,255,0.85)" : "var(--color-text-light)",
              marginInline: center ? "auto" : 0,
            }}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function TwoCol({
  eyebrow,
  title,
  body,
  bullets,
  img,
  imgAlt,
  reverse,
  cta,
}: {
  eyebrow?: string;
  title: string;
  body: string[];
  bullets?: string[];
  img: string;
  imgAlt: string;
  reverse?: boolean;
  cta?: { href: string; label: string };
}) {
  return (
    <div
      className="grid items-center gap-16 lg:grid-cols-2"
      style={reverse ? { direction: "rtl" } : {}}
    >
      <div style={reverse ? { direction: "ltr" } : {}}>
        {eyebrow && (
          <Reveal>
            <span className="section-subtitle">{eyebrow}</span>
          </Reveal>
        )}
        <Reveal delay={0.08}>
          <h2 className="mb-4">{title}</h2>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="title-divider" />
        </Reveal>
        {body.map((p, i) => (
          <Reveal key={i} delay={0.2 + i * 0.06}>
            <p className="mb-6 text-[1.05rem] leading-[1.8] text-[var(--color-text)]">
              {p}
            </p>
          </Reveal>
        ))}
        {bullets && (
          <Reveal delay={0.4}>
            <ul className="mb-8 grid gap-3">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[1rem] text-[var(--color-text)]"
                >
                  <span
                    aria-hidden
                    className="mt-3 inline-block h-px w-4 flex-shrink-0"
                    style={{ background: "var(--color-accent)" }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        {cta && (
          <Reveal delay={0.5}>
            <a href={cta.href} className="btn btn-primary">
              {cta.label}
            </a>
          </Reveal>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="zoom-host relative h-[500px] overflow-hidden"
        style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
      >
        <Image
          src={img}
          alt={imgAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="img-zoom object-cover"
        />
      </motion.div>
    </div>
  );
}
