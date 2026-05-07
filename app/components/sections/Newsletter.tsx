"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "../Reveal";
import { PHOTO_LIB } from "@/app/lib/photos";

export default function Newsletter() {
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setFirst("");
    setEmail("");
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section
      data-theme="dark"
      className="theme-dark relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        aria-hidden
        src={PHOTO_LIB.jerichoMountainsSunset}
        alt=""
        fill
        sizes="100vw"
        priority={false}
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(40,24,18,0.32) 0%, rgba(20,12,10,0.6) 100%)",
        }}
      />

      <div className="container-xl relative z-10 w-full">
        <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
          <Reveal>
            <Star />
          </Reveal>
          <Reveal delay={0.06}>
            <span
              className="mt-5 block text-[0.78rem] font-medium uppercase"
              style={{
                color: "var(--color-accent)",
                letterSpacing: "0.35em",
              }}
            >
              Mailing List
            </span>
          </Reveal>
          <Reveal delay={0.12}>
            <h2
              className="mt-5 text-white"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Experience Jericho
              <br />
              Like Never Before
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className="mt-7 h-px"
              style={{
                width: 110,
                background: "var(--color-accent)",
                opacity: 0.7,
              }}
            />
          </Reveal>
          <Reveal delay={0.26}>
            <p className="mt-6 max-w-[520px] text-[1rem] leading-[1.7] text-white/85">
              Subscribe for amazing stories & exclusive offers.
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <form
              onSubmit={onSubmit}
              className="mt-10 w-full max-w-[640px]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              <div
                className="flex w-full flex-col gap-0 overflow-hidden bg-white/95 sm:flex-row sm:items-stretch"
                style={{
                  boxShadow: "0 24px 50px -16px rgba(20,14,8,0.45)",
                }}
              >
                <input
                  id="newsletter-first"
                  type="text"
                  required
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  placeholder="First name"
                  aria-label="First name"
                  className="min-w-0 flex-1 bg-transparent px-5 py-4 text-[0.95rem] text-[var(--color-secondary)] outline-none placeholder:text-[var(--color-text-muted)]"
                />
                <span
                  aria-hidden
                  className="hidden self-center sm:block"
                  style={{
                    width: 1,
                    height: 28,
                    background: "rgba(0,0,0,0.12)",
                  }}
                />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  aria-label="Email address"
                  className="min-w-0 flex-[1.4] bg-transparent px-5 py-4 text-[0.95rem] text-[var(--color-secondary)] outline-none placeholder:text-[var(--color-text-muted)]"
                />
                <button
                  type="submit"
                  className="shrink-0 px-8 py-4 text-[0.85rem] font-medium uppercase tracking-[2.5px] text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  Subscribe
                </button>
              </div>
              <div
                aria-live="polite"
                className="mt-4 text-[0.85rem]"
                style={{
                  minHeight: "1.25rem",
                  color: "var(--color-accent)",
                }}
              >
                {status === "sent"
                  ? "Thanks for subscribing."
                  : ""}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      aria-hidden
      viewBox="56.558 27.595 86.884 137.566"
      preserveAspectRatio="xMidYMid meet"
      width={56}
      height={88}
      className="mx-auto"
    >
      <path
        fill="#ffffff"
        d="M94.708 72.742 100 27.595l5.292 45.147 20.306-12.823-12.823 20.307 30.667 5.291-30.667 5.292 12.823 20.307-20.306-12.823L100 165.161l-5.292-66.868-20.306 12.823 12.823-20.307-30.667-5.292 30.667-5.291-12.823-20.307 20.306 12.823z"
      />
    </svg>
  );
}
