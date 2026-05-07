"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Check } from "lucide-react";
import Reveal from "../Reveal";
import { PHOTO_LIB } from "@/app/lib/photos";

const HIGHLIGHTS = [
  "Pool deck reserved exclusively for your guests",
  "Dedicated event manager from first call to last guest",
  "Bar package, plated dinner, or canapés. We tailor it",
  "Lighting, sound, and styling handled in-house",
];

export default function EventsTeaser() {
  return (
    <section
      id="events"
      data-theme="dark"
      className="theme-dark relative overflow-hidden"
      style={{ padding: "6rem 0" }}
    >
      <Image
        aria-hidden
        src={PHOTO_LIB.poolFacadeEvening}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,22,30,0.78) 0%, rgba(10,14,22,0.92) 100%)",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="section-subtitle on-dark">
                Private Events
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="text-white"
                style={{
                  fontSize: "clamp(1.85rem, 4.2vw, 3rem)",
                  lineHeight: 1.1,
                  letterSpacing: "0.005em",
                }}
              >
                Hand us your guest list,
                <br />
                we'll hand you back the night.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider on-dark" />
            </Reveal>
            <Reveal delay={0.18}>
              <p
                className="t-body text-white/85"
                style={{ maxWidth: 540 }}
              >
                Engagements, birthdays, anniversaries, corporate dinners,
                and the occasional very-good Tuesday. The pool deck, lit
                and staffed, is yours for the evening.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="/events"
                  className="inline-flex items-center gap-3 px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] text-white"
                  style={{
                    background: "var(--color-primary)",
                    boxShadow: "0 6px 20px rgba(139,115,85,0.25)",
                  }}
                >
                  <Sparkles size={16} strokeWidth={1.6} />
                  Plan an Event
                </Link>
                <Link
                  href="/contact?topic=events"
                  className="inline-flex items-center text-[0.85rem] uppercase tracking-[2.5px] text-white/85"
                  style={{
                    borderBottom: "1px solid var(--color-accent)",
                    paddingBottom: 4,
                  }}
                >
                  Or talk to our team
                </Link>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <span
                className="block text-[0.72rem] font-medium uppercase"
                style={{
                  color: "var(--color-accent)",
                  letterSpacing: "0.3em",
                  marginBottom: 16,
                }}
              >
                What's Included
              </span>
            </Reveal>
            <ul className="flex flex-col gap-3.5">
              {HIGHLIGHTS.map((h, i) => (
                <Reveal
                  key={h}
                  as="li"
                  delay={i * 0.06}
                  y={20}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={18}
                    strokeWidth={2}
                    style={{
                      color: "var(--color-accent)",
                      marginTop: 4,
                      flexShrink: 0,
                    }}
                  />
                  <span className="text-[0.98rem] leading-[1.65] text-white/85">
                    {h}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
