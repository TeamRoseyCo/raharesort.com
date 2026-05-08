"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, Clock, MapPin, Users } from "lucide-react";
import Reveal from "../components/Reveal";

export type Tour = {
  title: string;
  duration: string;
  copy: string;
  img: string;
  highlights: string[];
  includes: string[];
  departure: string;
  groupSize: string;
};

export default function TourCards({ tours }: { tours: Tour[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex !== null ? tours[openIndex] : null;

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpenIndex(null);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {tours.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.08}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View details for ${t.title}`}
              className="group block w-full overflow-hidden bg-white text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
              style={{
                borderRadius: 20,
                boxShadow: "0 10px 28px -16px rgba(20,14,8,0.18)",
              }}
            >
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                />
                <span className="absolute left-6 top-6 bg-[var(--color-accent)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[1px] text-[#1a1a1a]">
                  {t.duration}
                </span>
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-[1.5rem] text-[var(--color-secondary)]">
                  {t.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.7] text-[var(--color-text-light)]">
                  {t.copy}
                </p>
                <span
                  className="mt-5 inline-flex items-center text-[0.78rem] font-medium uppercase tracking-[2.5px]"
                  style={{
                    color: "var(--color-secondary)",
                    borderBottom: "1px solid var(--color-accent)",
                    paddingBottom: 4,
                  }}
                >
                  View Details
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          style={{
            background: "rgba(20,14,8,0.6)",
            backdropFilter: "blur(8px)",
            animation: "tour-modal-fade 220ms ease-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-[860px] overflow-y-auto bg-white"
            style={{
              borderRadius: 20,
              boxShadow: "0 30px 80px -20px rgba(0,0,0,0.5)",
              animation: "tour-modal-rise 320ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center bg-white/90 text-[var(--color-secondary)] backdrop-blur transition hover:bg-white"
              style={{ borderRadius: 999 }}
            >
              <X size={18} strokeWidth={1.8} />
            </button>

            <div className="relative h-[280px] w-full overflow-hidden sm:h-[340px]">
              <Image
                src={open.img}
                alt={open.title}
                fill
                sizes="(max-width: 860px) 100vw, 860px"
                className="object-cover"
              />
            </div>

            <div className="p-7 sm:p-10">
              <span
                className="text-[0.7rem] font-semibold uppercase tracking-[2.5px]"
                style={{ color: "var(--color-accent)" }}
              >
                {open.duration}
              </span>
              <h2
                className="mt-3 text-[var(--color-secondary)]"
                style={{
                  fontSize: "clamp(1.75rem, 3.6vw, 2.4rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  lineHeight: 1.15,
                  fontFamily: "var(--font-heading), Georgia, serif",
                }}
              >
                {open.title}
              </h2>
              <div className="title-divider" />
              <p
                className="t-body"
                style={{ color: "var(--color-secondary)" }}
              >
                {open.copy}
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <DetailMeta icon={<Clock size={14} strokeWidth={1.6} />} label="Departs" value={open.departure} />
                <DetailMeta icon={<Users size={14} strokeWidth={1.6} />} label="Group" value={open.groupSize} />
                <DetailMeta icon={<MapPin size={14} strokeWidth={1.6} />} label="Pickup" value="Resort lobby" />
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h4
                    className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[2.5px]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Highlights
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {open.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[0.92rem]"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        <Check
                          size={14}
                          strokeWidth={2}
                          style={{
                            color: "var(--color-accent)",
                            marginTop: 5,
                            flexShrink: 0,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4
                    className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[2.5px]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Included
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {open.includes.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[0.92rem]"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        <Check
                          size={14}
                          strokeWidth={2}
                          style={{
                            color: "var(--color-accent)",
                            marginTop: 5,
                            flexShrink: 0,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href={`/contact?topic=tour&tour=${encodeURIComponent(open.title)}`}
                  className="inline-flex items-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] text-white"
                  style={{
                    background: "var(--color-primary)",
                    boxShadow: "0 6px 20px rgba(139,115,85,0.25)",
                  }}
                >
                  Book This Tour
                </a>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="inline-flex items-center text-[0.82rem] uppercase tracking-[2.5px]"
                  style={{
                    color: "var(--color-secondary)",
                    borderBottom: "1px solid var(--color-accent)",
                    paddingBottom: 4,
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes tour-modal-fade {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        @keyframes tour-modal-rise {
          from { opacity: 0; transform: translateY(24px) scale(0.98) }
          to { opacity: 1; transform: translateY(0) scale(1) }
        }
      `}</style>
    </>
  );
}

function DetailMeta({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="flex flex-col gap-1.5 p-4"
      style={{
        background: "var(--color-bg-soft, #f5f1eb)",
        borderRadius: 14,
      }}
    >
      <span
        className="inline-flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[1.8px]"
        style={{ color: "var(--color-accent)" }}
      >
        {icon}
        {label}
      </span>
      <span
        className="text-[0.95rem]"
        style={{ color: "var(--color-secondary)" }}
      >
        {value}
      </span>
    </div>
  );
}
