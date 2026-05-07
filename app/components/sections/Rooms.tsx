"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PHOTOS } from "@/app/lib/photos";

/* Slimmer portrait cards. Tweak here to change everything downstream. */
const CARD_W = 320;
const GAP = 28;

type Room = {
  name: string;
  copy: string;
  price: string;
  img: string;
  alt: string;
  featured?: boolean;
};

const ROOMS: Room[] = [
  {
    name: "Mountain View Room",
    copy: "Wake up to stunning panoramic views of majestic mountains.",
    price: "From $180 / night",
    img: PHOTOS.room1,
    alt: "Mountain View Room",
  },
  {
    name: "Pool View Suite",
    copy: "Indulge in luxury with direct views of our stunning pool.",
    price: "From $240 / night",
    img: PHOTOS.room2,
    alt: "Pool View Suite",
    featured: true,
  },
  {
    name: "Dead Sea View Suite",
    copy: "Experience the extraordinary with views of the legendary Dead Sea.",
    price: "From $260 / night",
    img: PHOTOS.room3,
    alt: "Dead Sea View Suite",
  },
  {
    name: "Garden Terrace Room",
    copy: "Step out onto a private terrace surrounded by lush greenery.",
    price: "From $200 / night",
    img: PHOTOS.roomExtra,
    alt: "Garden Terrace Room",
  },
  {
    name: "Family Loft Suite",
    copy: "Spacious two-level loft designed for families and longer stays.",
    price: "From $310 / night",
    img: PHOTOS.welcome2,
    alt: "Family Loft Suite",
  },
  {
    name: "Signature Spa Suite",
    copy: "An indulgent retreat with a private soaking tub and spa amenities.",
    price: "From $360 / night",
    img: PHOTOS.welcome1,
    alt: "Signature Spa Suite",
    featured: true,
  },
];

export default function Rooms() {
  const reduce = useReducedMotion();
  return <RoomsScrollPin disabled={!!reduce} />;
}

/* ---------------- Desktop: Apple-style scroll-pinned card switcher ---------------- */

function RoomsScrollPin({ disabled }: { disabled: boolean }) {
  const wrapperRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  /* Spring smooths chunky native wheel deltas so the slide feels fluid even
     without smooth-scroll. Tuned soft enough to avoid overshoot. */
  const smooth = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.4,
  });
  const trackX = useTransform(
    smooth,
    [0, 1],
    [0, -(ROOMS.length - 1) * (CARD_W + GAP)]
  );

  const [activeIdx, setActiveIdx] = useState(0);
  useMotionValueEvent(smooth, "change", (v) => {
    const idx = Math.round(v * (ROOMS.length - 1));
    setActiveIdx(Math.max(0, Math.min(ROOMS.length - 1, idx)));
  });

  const scrollToIndex = useCallback((target: number) => {
    const el = wrapperRef.current;
    if (!el) return;
    const t = Math.max(0, Math.min(ROOMS.length - 1, target));
    const progress = t / (ROOMS.length - 1);
    const rect = el.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const distance = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + progress * distance, behavior: "smooth" });
  }, []);


  if (disabled) return <RoomsMobile forceShow />;

  return (
    <section
      id="rooms"
      ref={wrapperRef}
      data-theme="cream"
      className="theme-cream relative block"
      style={{
        background: "var(--color-off-white)",
        /* 32vh per room, short enough that a quick flick scrolls past the
           whole pinned section in a single momentum gesture. */
        height: `${ROOMS.length * 32}vh`,
        paddingBottom: "8rem",
      }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pt-20 pb-4">

        <div className="container-xl">
          <div className="section-header" style={{ marginBottom: "0.5rem" }}>
            <span className="section-subtitle" style={{ marginBottom: "0.4rem" }}>Accommodations</span>
            <h2
              className="text-[var(--color-secondary)]"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                margin: "0.25rem 0 0.25rem",
                lineHeight: 1.15,
              }}
            >
              Rooms & Suites
            </h2>
            <div className="title-divider center" style={{ margin: "0.6rem auto" }} />
            <p className="section-description" style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>
              Every room features refined amenities designed for your ultimate
              comfort and relaxation.
            </p>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <motion.div
            style={{
              x: trackX,
              paddingInline: `calc(50% - ${CARD_W / 2}px)`,
              willChange: "transform",
            }}
            className="flex h-full items-center"
          >
            {ROOMS.map((r, i) => (
              <PinCard key={r.name} room={r} index={i} progress={smooth} />
            ))}
          </motion.div>
        </div>

        {/* Controls + counter */}
        <div className="container-xl mt-2 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous room"
            onClick={() => scrollToIndex(activeIdx - 1)}
            disabled={activeIdx === 0}
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-primary)] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--color-primary)]"
          >
            <ChevronLeft size={18} strokeWidth={1.6} />
          </button>

          <div className="flex items-center gap-3">
            {ROOMS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Room ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className="h-2 w-2 transition-all duration-300"
                style={{
                  background:
                    i === activeIdx
                      ? "var(--color-primary)"
                      : "rgba(139,115,85,0.25)",
                  width: i === activeIdx ? 28 : 8,
                }}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next room"
            onClick={() => scrollToIndex(activeIdx + 1)}
            disabled={activeIdx === ROOMS.length - 1}
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--color-primary)] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--color-primary)]"
          >
            <ChevronRight size={18} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  );
}

function PinCard({
  room,
  index,
  progress,
}: {
  room: Room;
  index: number;
  progress: MotionValue<number>;
}) {
  /* Each card's "stop", 0..1 along the wrapper's scroll progress. The
     active card sits at full opacity/scale; neighbors fade and shrink so
     the eye stays anchored on the centered card. */
  const stop = ROOMS.length === 1 ? 0 : index / (ROOMS.length - 1);
  const span = 1 / (ROOMS.length - 1);
  const opacity = useTransform(
    progress,
    [stop - span, stop, stop + span],
    [0.35, 1, 0.35]
  );
  const scale = useTransform(
    progress,
    [stop - span, stop, stop + span],
    [0.9, 1, 0.9]
  );

  return (
    <motion.article
      style={{
        flex: `0 0 ${CARD_W}px`,
        marginRight: GAP,
        opacity,
        scale,
        willChange: "opacity, transform",
        boxShadow: "0 14px 40px -10px rgba(20,14,8,0.18)",
      }}
      className="group relative bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2"
    >
      {room.featured && (
        <span
          className="absolute left-4 top-4 z-10 px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[1px] text-white"
          style={{ background: "var(--color-accent)" }}
        >
          Most Popular
        </span>
      )}
      <div
        className="zoom-host relative overflow-hidden"
        style={{ height: 280 }}
      >
        <Image
          src={room.img}
          alt={room.alt}
          fill
          sizes="320px"
          className="img-zoom object-cover"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <a
            href="/booking-unavailable"
            className="btn btn-primary pointer-events-auto"
          >
            View Details
          </a>
        </div>
      </div>
      <div className="px-6 py-5">
        <h3 className="mb-2 text-[1.5rem] leading-tight">{room.name}</h3>
        <p className="text-[0.95rem] leading-[1.55] text-[var(--color-text-light)]">
          {room.copy}
        </p>
      </div>
    </motion.article>
  );
}

/* ---------------- Mobile: horizontal swipe slider (no scroll-jacking) ---------------- */

function RoomsMobile({ forceShow = false }: { forceShow?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card
      ? card.getBoundingClientRect().width + GAP
      : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id={forceShow ? "rooms" : undefined}
      data-theme="cream"
      className={`theme-cream section-screen relative ${forceShow ? "block" : "block md:hidden"}`}
      style={{ padding: "4rem 0", background: "var(--color-off-white)" }}
    >
      <div className="container-xl">
        <div className="section-header">
          <span className="section-subtitle">Accommodations</span>
          <div className="title-divider center" />
          <p className="section-description">
            Every room features refined amenities designed for your ultimate
            comfort and relaxation.
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex overflow-x-auto pb-6 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
          style={{
            gap: GAP,
            paddingInline: "max(calc((100vw - 1400px) / 2 + 20px), 20px)",
            scrollPaddingInline:
              "max(calc((100vw - 1400px) / 2 + 20px), 20px)",
          }}
        >
          {ROOMS.map((r) => (
            <article
              key={r.name}
              data-card
              className="group relative flex-none snap-start overflow-hidden bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2"
              style={{
                width: `min(${CARD_W}px, 78vw)`,
                boxShadow: "0 8px 30px rgba(20,14,8,0.1)",
              }}
            >
              {r.featured && (
                <span
                  className="absolute left-4 top-4 z-10 px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[1px] text-white"
                  style={{ background: "var(--color-accent)" }}
                >
                  Most Popular
                </span>
              )}
              <div className="zoom-host relative h-[280px] overflow-hidden">
                <Image
                  src={r.img}
                  alt={r.alt}
                  fill
                  sizes="(max-width: 640px) 78vw, 320px"
                  className="img-zoom object-cover"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <a href="/booking-unavailable" className="btn btn-primary pointer-events-auto">
                    View Details
                  </a>
                </div>
              </div>
              <div className="px-6 py-5">
                <h3 className="mb-2 text-[1.5rem] leading-tight">{r.name}</h3>
                <p className="text-[0.95rem] leading-[1.55] text-[var(--color-text-light)]">
                  {r.copy}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="container-xl mt-8 flex items-center justify-end gap-3">
          <button
            type="button"
            aria-label="Previous rooms"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            className="inline-flex h-12 w-12 items-center justify-center border border-[var(--color-primary)] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--color-primary)]"
          >
            <ChevronLeft size={20} strokeWidth={1.6} />
          </button>
          <button
            type="button"
            aria-label="Next rooms"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            className="inline-flex h-12 w-12 items-center justify-center border border-[var(--color-primary)] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--color-primary)]"
          >
            <ChevronRight size={20} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  );
}
