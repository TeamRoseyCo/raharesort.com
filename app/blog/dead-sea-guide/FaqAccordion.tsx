"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

type Item = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            style={{
              background: "var(--color-bg-soft, #f5f1eb)",
              borderLeft: `2px solid ${
                isOpen ? "var(--color-accent)" : "rgba(201,162,90,0.35)"
              }`,
              transition: "border-color 350ms ease",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              style={{ background: "transparent", border: 0 }}
            >
              <span
                style={{
                  fontSize: "1.05rem",
                  fontFamily: "var(--font-heading), Georgia, serif",
                  color: "var(--color-secondary)",
                }}
              >
                {f.q}
              </span>
              <motion.span
                aria-hidden
                initial={false}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "inline-flex",
                  flexShrink: 0,
                  color: "var(--color-accent)",
                }}
              >
                <Plus size={20} strokeWidth={1.6} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    opacity: {
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                      delay: isOpen ? 0.05 : 0,
                    },
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    className="px-6 pb-6 text-[0.95rem] leading-[1.7]"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    {f.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
