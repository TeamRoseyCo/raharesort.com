"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Waves, Flower2, UtensilsCrossed, Dumbbell } from "lucide-react";
import Reveal from "../Reveal";

import { PHOTOS } from "@/app/lib/photos";
const AMENITY_BG = PHOTOS.amenitiesBg;

const AMENITIES = [
  {
    icon: Waves,
    title: "Outdoor Pool",
    copy: "Relax in our stunning outdoor pool with breathtaking views.",
  },
  {
    icon: Flower2,
    title: "Spa & Massage",
    copy: "Rejuvenate your body and mind with professional treatments.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant & Dining",
    copy: "Savour exquisite cuisine at our restaurant or rooftop.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    copy: "Stay active with our fully-equipped modern gym.",
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      data-theme="slate"
      className="theme-slate section-screen relative overflow-hidden"
      style={{ padding: "4rem 0" }}
    >
      <Image
        aria-hidden
        src={AMENITY_BG}
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
            "linear-gradient(180deg, rgba(30,42,54,0.94) 0%, rgba(18,26,34,0.96) 100%)",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="section-header">
          <Reveal>
            <span className="section-subtitle on-dark">Facilities</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-white">Resort Amenities</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="title-divider on-dark center" />
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="section-description"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              Experience world-class facilities designed for your comfort and
              enjoyment.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITIES.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col items-center border border-white/10 px-10 py-14 text-center transition-all duration-300 hover:-translate-y-2"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border transition-transform duration-500 group-hover:scale-110"
                style={{
                  borderColor: "var(--color-accent)",
                  color: "var(--color-accent)",
                }}
              >
                <a.icon size={32} strokeWidth={1.4} />
              </div>
              <h3 className="mb-4 text-[1.5rem] text-white">{a.title}</h3>
              <p
                className="text-[0.95rem] leading-[1.7]"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                {a.copy}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} className="section-cta">
          <a href="#amenities" className="btn btn-secondary">
            Explore All Amenities
          </a>
        </Reveal>
      </div>
    </section>
  );
}
