"use client";

import { motion } from "framer-motion";
import { CalendarDays, Users, BedDouble, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

/* Inline hero booking strip, replaces the descriptive paragraph + CTA
   buttons inside the hero. Kept as a client component because the date
   inputs need a today-based `min` attribute set after hydration to avoid
   SSR/CSR mismatch. */
export default function BookingStrip() {
  const [today, setToday] = useState<string>("");
  const [checkIn, setCheckIn] = useState<string>("");

  useEffect(() => {
    const d = new Date();
    const iso = d.toISOString().slice(0, 10);
    setToday(iso);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 w-full max-w-[1100px]"
    >
      <form
        action="/booking-unavailable"
        method="get"
        aria-label="Check availability"
        className="grid grid-cols-1 gap-px overflow-hidden bg-white/80 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]"
        style={{
          backdropFilter: "saturate(160%) blur(14px)",
          WebkitBackdropFilter: "saturate(160%) blur(14px)",
          boxShadow: "0 30px 60px -20px rgba(20,14,8,0.35)",
          border: "1px solid rgba(139,115,85,0.18)",
        }}
      >
        <Field
          icon={<CalendarDays size={16} strokeWidth={1.6} />}
          label="Check-in"
        >
          <input
            type="date"
            name="checkIn"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent text-[0.95rem] text-[var(--color-text)] outline-none sm:text-[1.05rem]"
          />
        </Field>

        <Field
          icon={<CalendarDays size={16} strokeWidth={1.6} />}
          label="Check-out"
        >
          <input
            type="date"
            name="checkOut"
            min={checkIn || today}
            className="w-full bg-transparent text-[0.95rem] text-[var(--color-text)] outline-none sm:text-[1.05rem]"
          />
        </Field>

        <Field
          icon={<Users size={16} strokeWidth={1.6} />}
          label="Guests"
        >
          <select
            name="guests"
            defaultValue="2"
            className="w-full appearance-none bg-transparent text-[0.95rem] text-[var(--color-text)] outline-none sm:text-[1.05rem]"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5+ Guests</option>
          </select>
        </Field>

        <Field
          icon={<BedDouble size={16} strokeWidth={1.6} />}
          label="Room type"
        >
          <select
            name="roomType"
            defaultValue=""
            className="w-full appearance-none bg-transparent text-[0.95rem] text-[var(--color-text)] outline-none sm:text-[1.05rem]"
          >
            <option value="">Any room</option>
            <option value="mountain">Mountain View Room</option>
            <option value="pool">Pool View Suite</option>
            <option value="deadsea">Dead Sea View Suite</option>
            <option value="garden">Garden Terrace Room</option>
            <option value="family">Family Loft Suite</option>
            <option value="spa">Signature Spa Suite</option>
          </select>
        </Field>

        <button
          type="submit"
          className="group flex items-center justify-center gap-3 px-10 py-5 text-[0.85rem] font-normal uppercase tracking-[2.4px] text-white transition-colors duration-300 sm:col-span-2 lg:col-span-1"
          style={{ background: "var(--color-primary)" }}
        >
          <span>Check Availability</span>
          <ArrowRight
            size={16}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </form>
    </motion.div>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1 bg-white/95 px-4 py-3 transition-colors duration-300 hover:bg-white sm:gap-1.5 sm:px-6 sm:py-4">
      <span className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[1.6px] text-[var(--color-primary)] sm:text-[0.65rem] sm:tracking-[1.8px]">
        <span aria-hidden>{icon}</span>
        {label}
      </span>
      {children}
    </label>
  );
}
