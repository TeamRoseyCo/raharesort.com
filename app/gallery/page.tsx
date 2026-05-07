"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import { PHOTO_LIB, photo } from "../lib/photos";

type Tile = {
  src: string;
  category: Category;
  alt: string;
};

const CATEGORIES = [
  "All",
  "Pool",
  "Suites",
  "Spa",
  "Dining",
  "Lobby",
  "Exterior",
] as const;
type Category = (typeof CATEGORIES)[number];

const TILES: Tile[] = [
  // Pool
  { src: PHOTO_LIB.poolFacadeBackdrop, category: "Pool", alt: "Pool with hotel facade" },
  { src: PHOTO_LIB.poolLoungersPalms, category: "Pool", alt: "Pool with palm trees" },
  { src: PHOTO_LIB.poolLoungersBonsai, category: "Pool", alt: "Pool deck with bonsai" },
  { src: PHOTO_LIB.poolDusk, category: "Pool", alt: "Pool at dusk" },
  { src: PHOTO_LIB.poolRooftop, category: "Pool", alt: "Rooftop pool view" },
  { src: PHOTO_LIB.poolSign, category: "Pool", alt: "Pool with Raha Resort sign" },
  { src: PHOTO_LIB.poolFacadeEvening, category: "Pool", alt: "Pool at evening" },
  { src: PHOTO_LIB.poolCabana, category: "Pool", alt: "Pool view from cabana" },

  // Suites
  { src: PHOTO_LIB.roomKingCurtain, category: "Suites", alt: "King bed with curtain" },
  { src: PHOTO_LIB.roomBalconyPool, category: "Suites", alt: "Suite balcony pool view" },
  { src: PHOTO_LIB.roomReadingChair, category: "Suites", alt: "Suite reading corner" },
  { src: PHOTO_LIB.roomBalconyResort, category: "Suites", alt: "Suite balcony resort view" },
  { src: PHOTO_LIB.twinSunburst, category: "Suites", alt: "Twin bedroom" },
  { src: PHOTO_LIB.bathroomVanity, category: "Suites", alt: "Marble bathroom vanity" },
  { src: PHOTO_LIB.bathroomShower, category: "Suites", alt: "Rainfall shower" },

  // Spa
  { src: PHOTO_LIB.spaIndoor, category: "Spa", alt: "Indoor spa pool" },
  { src: PHOTO_LIB.saunaInterior, category: "Spa", alt: "Wooden sauna" },
  { src: PHOTO_LIB.saunaStones, category: "Spa", alt: "Sauna heater stones" },
  { src: PHOTO_LIB.spaHallway, category: "Spa", alt: "Spa hallway" },
  { src: PHOTO_LIB.spaMarbleNiche, category: "Spa", alt: "Spa marble niche" },

  // Dining
  { src: PHOTO_LIB.diningCoffeeBar, category: "Dining", alt: "Coffee bar" },
  { src: PHOTO_LIB.diningOpenKitchen, category: "Dining", alt: "Open kitchen" },
  { src: PHOTO_LIB.diningTerrace, category: "Dining", alt: "Outdoor dining terrace" },

  // Lobby
  { src: PHOTO_LIB.lobbyLeather, category: "Lobby", alt: "Lobby lounge" },
  { src: PHOTO_LIB.lobbyStaircasePalms, category: "Lobby", alt: "Lobby staircase" },
  { src: PHOTO_LIB.lobbySculpturalChairs, category: "Lobby", alt: "Sculptural lobby chairs" },
  { src: PHOTO_LIB.lobbyBarDoorway, category: "Lobby", alt: "Lobby bar through doorway" },
  { src: PHOTO_LIB.receptionOnyx, category: "Lobby", alt: "Reception desk" },
  { src: PHOTO_LIB.loungeMountainView, category: "Lobby", alt: "Mountain view lounge" },

  // Exterior
  { src: PHOTO_LIB.exteriorPoolside, category: "Exterior", alt: "Hotel exterior poolside" },
  { src: PHOTO_LIB.facadeLitDusk, category: "Exterior", alt: "Facade at dusk" },
  { src: PHOTO_LIB.facadeLogoNight, category: "Exterior", alt: "Lit facade logo at night" },
  { src: PHOTO_LIB.facadePoolNightSign, category: "Exterior", alt: "Pool sign at night" },
  { src: PHOTO_LIB.facadePoolsideNight, category: "Exterior", alt: "Poolside at night" },
  { src: PHOTO_LIB.courtyardFountain, category: "Exterior", alt: "Courtyard fountain" },
  { src: PHOTO_LIB.entranceSignEvening, category: "Exterior", alt: "Entrance sign evening" },
  { src: PHOTO_LIB.jerichoMountainsSunset, category: "Exterior", alt: "Jericho mountains sunset" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? TILES : TILES.filter((t) => t.category === filter)),
    [filter]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? 0 : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? 0 : (i - 1 + filtered.length) % filtered.length
        );
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, filtered.length]);

  return (
    <main>
      <PageHeader
        title="Gallery"
        bg={photo(11)}
        crumbs={[{ href: "/", label: "Home" }, { label: "Gallery" }]}
      />

      <section
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-off-white)",
          padding: "5rem 0 8rem",
        }}
      >
        <div className="container-xl">
          {/* Filter row */}
          <div
            className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            role="tablist"
            aria-label="Gallery categories"
          >
            {CATEGORIES.map((cat) => {
              const isActive = filter === cat;
              const count =
                cat === "All"
                  ? TILES.length
                  : TILES.filter((t) => t.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(cat)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[2px] transition-all"
                  style={{
                    background: isActive ? "var(--color-secondary)" : "transparent",
                    color: isActive ? "#ffffff" : "var(--color-secondary)",
                    border: `1px solid ${
                      isActive ? "var(--color-secondary)" : "rgba(0,0,0,0.15)"
                    }`,
                  }}
                >
                  <span>{cat}</span>
                  <span
                    className="text-[0.68rem] font-normal"
                    style={{
                      opacity: 0.6,
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid. Filter swaps the list; we keep a stable key so React reuses
              DOM nodes and the browser keeps already-decoded images. */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              contain: "layout paint",
            }}
          >
            {filtered.map((t, i) => (
              <figure
                key={t.src}
                onClick={() => setActive(i)}
                className="group relative cursor-pointer overflow-hidden"
                style={{
                  height: i % 7 === 0 ? 460 : 300,
                  boxShadow: "0 12px 28px -16px rgba(20,14,8,0.25)",
                  contain: "layout paint",
                  willChange: "transform",
                }}
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading={i < 6 ? "eager" : "lazy"}
                  priority={i < 4}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.55) 100%)",
                  }}
                />
                <span className="pointer-events-none absolute left-4 bottom-4 text-[0.7rem] font-medium uppercase tracking-[2px] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {t.category}
                </span>
              </figure>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p
              className="mt-10 text-center text-[0.95rem]"
              style={{ color: "var(--color-text-light)" }}
            >
              No photos in this category yet.
            </p>
          ) : null}
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && filtered[active] ? (
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
            className="absolute left-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/85 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) =>
                i === null ? 0 : (i - 1 + filtered.length) % filtered.length
              );
            }}
          >
            <ChevronLeft size={28} strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/85 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) =>
                i === null ? 0 : (i + 1) % filtered.length
              );
            }}
          >
            <ChevronRight size={28} strokeWidth={1.4} />
          </button>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-h-[85vh] w-full max-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[active].src}
              alt={filtered[active].alt}
              width={1600}
              height={1067}
              sizes="90vw"
              className="mx-auto block max-h-[85vh] w-auto max-w-full object-contain"
            />
            <div className="mt-3 text-center text-[0.78rem] uppercase tracking-[0.28em] text-white/85">
              {filtered[active].category} · {active + 1} of {filtered.length}
            </div>
          </motion.div>
        </div>
      ) : null}

      <Footer />
    </main>
  );
}
