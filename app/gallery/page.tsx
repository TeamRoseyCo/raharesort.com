"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import { ALL_PHOTOS, photo } from "../lib/photos";

export default function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

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
        style={{ background: "var(--color-off-white)", padding: "8rem 0" }}
      >
        <div className="container-xl">
          <div
            className="grid gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
          >
            {ALL_PHOTOS.map((src, i) => (
              <motion.figure
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(i)}
                className="relative h-[300px] cursor-pointer overflow-hidden"
                style={{
                  gridRow: i % 5 === 0 ? "span 2" : "span 1",
                  height: i % 5 === 0 ? 616 : 300,
                }}
              >
                <Image
                  src={src}
                  alt={`Raha Resort ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="img-zoom object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <span className="font-[family-name:var(--font-heading)] text-[1.25rem] italic text-white border border-white px-4 py-2">
                    View
                  </span>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          role="dialog"
          aria-label="Gallery lightbox"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-8"
          style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-6 top-6 text-[2.5rem] text-white"
            onClick={() => setActive(null)}
          >
            &times;
          </button>
          <Image
            src={ALL_PHOTOS[active]}
            alt="Raha Resort"
            width={1600}
            height={1067}
            sizes="90vw"
            className="max-h-[85vh] max-w-[90%] object-contain h-auto w-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </main>
  );
}
