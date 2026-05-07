"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PHOTOS } from "@/app/lib/photos";
import BookingStrip from "@/app/components/BookingStrip";

const HERO_IMG = PHOTOS.pool[0];
const HERO_VIDEOS = ["/video/hero1.mp4", "/video/hero2.mp4", "/video/hero3.mp4"];

export default function Hero() {
  return (
    <header
      id="top"
      data-theme="dark"
      className="theme-dark relative flex items-center justify-center overflow-hidden text-center text-white"
      style={{
        isolation: "isolate",
        background: "#1a1410",
        height: "100vh",
        minHeight: 700,
      }}
    >
      <div aria-hidden className="absolute inset-0" style={{ zIndex: 0 }}>
        <HeroVideo />
        {/* Fallback poster image while video is loading or if it fails. */}
        <Image
          src={HERO_IMG}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ zIndex: -1 }}
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Subtle black band beneath the header for nav contrast */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0"
        style={{
          zIndex: 2,
          height: 180,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="relative z-10 mx-auto max-w-[900px] px-6"
        style={{ textAlign: "center", marginTop: "12vh" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 flex justify-center"
        >
          <Image
            src="/raha-logo.png"
            alt="Raha Resort logo"
            width={96}
            height={96}
            priority
            style={{
              width: "clamp(72px, 9vw, 110px)",
              height: "auto",
              filter: "brightness(0) invert(1)",
              opacity: 0.95,
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            fontWeight: 400,
            letterSpacing: "4px",
            textTransform: "uppercase",
            opacity: 0.9,
            marginBottom: "1rem",
          }}
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="m-0 font-[family-name:var(--font-heading)]"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            fontWeight: 400,
            color: "#fff",
            letterSpacing: "8px",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Raha Resort
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 80,
            height: 1,
            background: "var(--color-accent)",
            margin: "1.5rem auto",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-heading)]"
          style={{
            fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
            fontWeight: 400,
            fontStyle: "italic",
            marginBottom: "1rem",
            opacity: 0.95,
          }}
        >
          The place that feels premium to be in
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
            fontWeight: 300,
            maxWidth: "min(95vw, 1100px)",
            margin: "0 auto 1.5rem",
            opacity: 0.9,
            lineHeight: 1.8,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          All-inclusive luxury resort in Jericho. Refined amenities, breathtaking views, and a warm Raha welcome.
        </motion.p>

        <BookingStrip />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
        style={{ bottom: "1.5rem" }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Scroll
        </span>
        <span
          aria-hidden
          style={{
            width: 1,
            height: 60,
            background: "linear-gradient(to bottom, #fff, transparent)",
            display: "block",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </header>
  );
}

function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onEnded = () => setIdx((i) => (i + 1) % HERO_VIDEOS.length);
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.load();
    void v.play().catch(() => {});
  }, [idx]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      playsInline
      poster="/video/hero1-poster.jpg"
      className="absolute inset-0 h-full w-full object-cover"
      preload="auto"
    >
      <source src={HERO_VIDEOS[idx]} type="video/mp4" />
    </video>
  );
}
