"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { PHOTOS } from "@/app/lib/photos";
const TESTIMONIAL_BG = PHOTOS.testimonialBg;

const PILLARS = [
  {
    label: "Privacy",
    body: "Quiet rooms, separated wings, and a layout that lets you forget the rest of the property exists when you want to.",
  },
  {
    label: "Comfort",
    body: "Bedding, lighting, and air all picked carefully and refreshed often. The basics, done correctly.",
  },
  {
    label: "Consistency",
    body: "Every room reset the same way before you arrive. The same standard on a quiet Tuesday as on a full weekend.",
  },
];

export default function Testimonial() {
  return (
    <section
      data-theme="primary"
      className="theme-primary section-screen relative overflow-hidden"
      style={{ padding: "6rem 0" }}
    >
      <Image
        aria-hidden
        src={TESTIMONIAL_BG}
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
            "linear-gradient(180deg, rgba(107,83,68,0.92) 0%, rgba(40,28,20,0.94) 100%)",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="section-subtitle on-dark">The Raha Way</span>
          <div className="title-divider on-dark center" />
          <p className="mx-auto max-w-[600px] text-[1rem] leading-[1.85] text-white/85">
            Three things shape every decision we make about the property: how
            quiet the room feels, how well it's been kept, and whether it
            stays that way every time you come back.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1000px] gap-10 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.85,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center"
            >
              <span
                className="block font-[family-name:var(--font-heading)] italic"
                style={{
                  color: "var(--color-accent)",
                  fontSize: "1.85rem",
                  marginBottom: "0.75rem",
                }}
              >
                {p.label}
              </span>
              <span
                aria-hidden
                className="mx-auto mb-5 block h-px w-8"
                style={{ background: "var(--color-accent)" }}
              />
              <p className="text-[0.95rem] leading-[1.75] text-white/85">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
