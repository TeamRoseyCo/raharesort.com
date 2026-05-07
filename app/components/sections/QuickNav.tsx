"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  BedDouble,
  Image as ImageIcon,
  ConciergeBell,
  Utensils,
  Leaf,
} from "lucide-react";
import type { ComponentType } from "react";

type Item = {
  href: string;
  label: string;
  Icon: ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
    style?: React.CSSProperties;
  }>;
};

const ITEMS: Item[] = [
  { href: "/contact", label: "Location", Icon: MapPin },
  { href: "/rooms", label: "Accommodations", Icon: BedDouble },
  { href: "/gallery", label: "Gallery", Icon: ImageIcon },
  { href: "/services", label: "Amenities", Icon: ConciergeBell },
  { href: "/dining", label: "Dining", Icon: Utensils },
  { href: "/spa", label: "Spa", Icon: Leaf },
];

export default function QuickNav() {
  return (
    <section
      data-theme="light"
      className="theme-light relative bg-white"
      style={{ padding: "5rem 0 3rem" }}
    >
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex justify-center"
          aria-hidden
        >
          <Image
            src="/raha-logo.png"
            alt=""
            width={120}
            height={120}
            unoptimized
            className="section-flourish-logo"
          />
        </motion.div>

        <div className="grid grid-cols-2 justify-center gap-5 sm:grid-cols-3 md:grid-cols-6">
          {ITEMS.map(({ href, label, Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -3 }}
              className="group flex aspect-square flex-col items-center justify-center gap-4 border bg-white text-center transition-colors duration-300"
              style={{
                borderColor: "rgba(0,0,0,0.18)",
              }}
            >
              <Icon
                size={28}
                strokeWidth={1.3}
                className="transition-colors duration-300 group-hover:[color:var(--color-primary)]"
                style={{ color: "var(--color-secondary)" }}
              />
              <span
                className="text-[1rem] transition-colors duration-300 group-hover:[color:var(--color-primary)]"
                style={{
                  color: "var(--color-secondary)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
