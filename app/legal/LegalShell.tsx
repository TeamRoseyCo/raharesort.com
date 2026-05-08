import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "../components/Reveal";

type Props = {
  title: string;
  intro?: string;
  children: ReactNode;
  lastUpdated?: string;
};

export default function LegalShell({
  title,
  intro,
  children,
  lastUpdated = "2026-05-07",
}: Props) {
  return (
    <main
      data-theme="cream"
      className="theme-cream min-h-screen"
      style={{ background: "var(--color-bg-soft, #f5f1eb)" }}
    >
      <section className="container-xl py-32">
        <Reveal>
          <Link
            href="/"
            className="t-caption inline-block hover:opacity-70"
            style={{ color: "var(--color-primary)" }}
          >
            ← Back to Home
          </Link>
        </Reveal>
        <Reveal delay={0.06}>
          <h1
            className="mt-6 text-[var(--color-secondary)]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="title-divider" />
        </Reveal>
        {intro ? (
          <Reveal delay={0.18}>
            <p className="t-lead max-w-[680px] text-[var(--color-text-light)]">
              {intro}
            </p>
          </Reveal>
        ) : null}

        <article
          className="mx-auto mt-12 max-w-[760px] text-[var(--color-text)]"
          style={{ lineHeight: 1.85 }}
        >
          {children}
        </article>

        {/* Placeholder copy until real legal text is in place — stamp kept short on the front end. */}
        <Reveal delay={0.1}>
          <p
            className="t-caption mt-16 text-[var(--color-text-muted)]"
            style={{ letterSpacing: "0.18em" }}
          >
            Last updated · {lastUpdated}
          </p>
        </Reveal>
      </section>
    </main>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal as="section" y={24} className="mb-10">
      <h2
        className="mb-3 text-[var(--color-secondary)]"
        style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.65rem)" }}
      >
        {title}
      </h2>
      <div className="text-[var(--color-text-light)]">{children}</div>
    </Reveal>
  );
}
