"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Reveal from "../Reveal";

import { PHOTO_LIB } from "@/app/lib/photos";

type Tile = {
  src: string;
  label: string;
  span: string; // tailwind grid-area shortcut via inline classNames
};

/* Bento mosaic, 12-col grid, varying tile sizes, category label on hover. */
const TILES: Tile[] = [
  {
    src: PHOTO_LIB.poolFacadeBackdrop,
    label: "Pool",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    src: PHOTO_LIB.lobbySculpturalChairs,
    label: "Lobby",
    span: "md:col-span-5 md:row-span-1",
  },
  {
    src: PHOTO_LIB.spaIndoor,
    label: "Spa",
    span: "md:col-span-5 md:row-span-1",
  },
  {
    src: PHOTO_LIB.roomBalconyPool,
    label: "Suites",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    src: PHOTO_LIB.diningCoffeeBar,
    label: "Dining",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    src: PHOTO_LIB.facadeLogoNight,
    label: "Exterior",
    span: "md:col-span-4 md:row-span-1",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? 0 : (i + 1) % TILES.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? 0 : (i - 1 + TILES.length) % TILES.length
        );
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section
      id="gallery"
      data-theme="cream"
      className="theme-cream relative"
      style={{ padding: "6rem 0", background: "var(--color-off-white)" }}
    >
      <div className="container-xl">
        <div className="section-header">
          <Reveal>
            <span className="section-subtitle">Visual Journey</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2>Gallery</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="title-divider center" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="section-description text-[var(--color-text-light)]">
              Six rooms of the property, six different moods. Click any tile
              to open it full-screen.
            </p>
          </Reveal>
        </div>

        <div
          className="mt-10 grid gap-3 md:grid-cols-12 md:auto-rows-[clamp(200px,22vw,300px)]"
        >
          {TILES.map((t, i) => (
            <motion.figure
              key={t.src}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.95,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setActive(i)}
              className={`group relative h-[260px] cursor-pointer overflow-hidden md:h-auto ${t.span}`}
              style={{
                boxShadow: "0 18px 36px -22px rgba(20,14,8,0.35)",
              }}
            >
              <Image
                src={t.src}
                alt={t.label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />

              {/* Soft bottom-up gradient that strengthens on hover */}
              <div
                aria-hidden
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 100%)",
                }}
              />

              {/* Category chip, slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                <span
                  className="text-[0.7rem] font-medium uppercase"
                  style={{
                    letterSpacing: "0.28em",
                    transform: "translateY(0)",
                  }}
                >
                  {t.label}
                </span>
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/60 opacity-0 transition-all duration-500 group-hover:opacity-100"
                >
                  <ArrowUpRight size={16} strokeWidth={1.6} />
                </span>
              </div>

              {/* Subtle gold corner accent */}
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-0 transition-all duration-700 group-hover:w-full"
                style={{ background: "var(--color-accent)" }}
              />
              <span
                aria-hidden
                className="absolute left-0 top-0 h-0 w-px transition-all duration-700 group-hover:h-full"
                style={{ background: "var(--color-accent)" }}
              />
            </motion.figure>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-3 px-9 py-3.5 text-[0.85rem] font-medium uppercase tracking-[2.5px]"
              style={{
                color: "var(--color-secondary)",
                border: "1px solid var(--color-secondary)",
              }}
            >
              View Full Gallery
              <ArrowUpRight size={16} strokeWidth={1.6} />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {active !== null ? (
        <div
          role="dialog"
          aria-label="Gallery lightbox"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
          style={{ background: "rgba(10,8,6,0.94)" }}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
          >
            <X size={22} strokeWidth={1.6} />
          </button>

          <button
            type="button"
            aria-label="Previous"
            className="absolute left-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-[1.5rem] text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActive(
                (i) => (i === null ? 0 : (i - 1 + TILES.length) % TILES.length)
              );
            }}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-[1.5rem] text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? 0 : (i + 1) % TILES.length));
            }}
          >
            ›
          </button>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[85vh] w-full max-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={TILES[active].src}
              alt={TILES[active].label}
              width={1600}
              height={1067}
              sizes="90vw"
              className="mx-auto block max-h-[85vh] w-auto max-w-full object-contain"
            />
            <div
              className="mt-4 text-center text-[0.78rem] uppercase tracking-[0.28em] text-white/85"
            >
              {TILES[active].label} · {active + 1} of {TILES.length}
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
