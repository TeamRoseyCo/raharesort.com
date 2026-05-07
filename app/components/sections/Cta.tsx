"use client";

import Image from "next/image";
import Reveal from "../Reveal";

import { PHOTOS } from "@/app/lib/photos";
const CTA_BG = PHOTOS.ctaBg;

export default function Cta() {
  return (
    <section
      id="book"
      data-theme="slate"
      className="theme-slate relative overflow-hidden text-center"
      style={{ padding: "5.5rem 0" }}
    >
      <Image
        aria-hidden
        src={CTA_BG}
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
            "linear-gradient(180deg, rgba(18,28,42,0.92) 0%, rgba(10,18,30,0.96) 100%)",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="mx-auto max-w-[700px]">
          <Reveal>
            <span className="section-subtitle on-dark">Reservations</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mb-2 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Stay With Us in Jericho
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="title-divider on-dark center" />
          </Reveal>
          <Reveal delay={0.18}>
            <p
              className="mb-8 text-[1.05rem] leading-[1.8]"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Reserve your room, plan a long weekend, or settle in for the season. Our reservations team is ready when you are.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="/booking-unavailable"
              className="inline-flex items-center justify-center px-8 py-3 text-[0.85rem] font-medium uppercase tracking-[2.5px] transition-opacity hover:opacity-90"
              style={{
                background: "var(--color-accent)",
                color: "#0a121e",
              }}
            >
              Book Your Stay
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
