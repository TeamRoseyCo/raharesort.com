"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { PHOTO_LIB } from "@/app/lib/photos";

/**
 * Quit-intent popup.
 *
 * MODE: while iterating on the design, this is forced open on every render.
 * Flip `ALWAYS_OPEN` to `false` to switch to real exit-intent (fires once
 * per session when the cursor leaves the top of the viewport, with a
 * sessionStorage guard).
 */
const ALWAYS_OPEN = false;
/* Once enabled (ALWAYS_OPEN=false) the popup fires once per browser session
   when the cursor leaves through the top edge of the viewport. Tweak below. */
const ENABLE_DELAY_MS = 4000; // grace window after page load before listening
const SESSION_KEY = "raha-exit-intent-shown";

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(ALWAYS_OPEN);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  useEffect(() => {
    if (ALWAYS_OPEN) return;
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, ENABLE_DELAY_MS);

    const onMouseOut = (e: MouseEvent) => {
      if (!armed) return;
      // Fire only when the cursor exits through the TOP of the viewport.
      if (e.relatedTarget) return;
      if (e.clientY > 0) return;
      sessionStorage.setItem(SESSION_KEY, "1");
      setOpen(true);
    };
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setEmail("");
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      close();
    }, 2200);
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
          aria-labelledby="exit-popup-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute inset-0 cursor-default"
            style={{ background: "rgba(20,12,10,0.78)" }}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[640px] overflow-hidden bg-white"
            style={{
              boxShadow: "0 40px 80px -20px rgba(20,14,8,0.55)",
            }}
          >
            <div className="grid md:grid-cols-[0.85fr_1fr]">
              {/* Image side */}
              <div
                aria-hidden
                className="relative hidden md:block"
                style={{ minHeight: 420 }}
              >
                <Image
                  src={PHOTO_LIB.exteriorPoolside}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 0px, 280px"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(40,24,18,0.25) 0%, rgba(20,12,10,0.55) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <Image
                    src="/raha-logo.png"
                    alt=""
                    width={120}
                    height={120}
                    unoptimized
                    style={{
                      width: 48,
                      height: "auto",
                      filter: "brightness(0) invert(1)",
                      opacity: 0.95,
                      display: "block",
                    }}
                  />
                  <span
                    className="text-[0.65rem] font-medium uppercase text-white"
                    style={{
                      letterSpacing: "0.22em",
                      marginTop: 1,
                      lineHeight: 1,
                    }}
                  >
                    Raha Resort
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="relative px-7 py-9 md:px-10 md:py-12">
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center"
                  style={{ color: "var(--color-secondary)" }}
                >
                  <X size={18} strokeWidth={1.6} />
                </button>

                <span
                  className="text-[0.72rem] font-medium uppercase"
                  style={{
                    color: "var(--color-accent)",
                    letterSpacing: "0.3em",
                  }}
                >
                  Wait
                </span>
                <h2
                  id="exit-popup-title"
                  className="mt-3 mb-3 text-[var(--color-secondary)]"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                    lineHeight: 1.15,
                    letterSpacing: "0.01em",
                  }}
                >
                  Don't leave empty handed.
                </h2>
                <div
                  className="mb-5 h-px"
                  style={{
                    width: 56,
                    background: "var(--color-accent)",
                  }}
                />
                <p
                  className="mb-7 text-[0.95rem] leading-[1.7]"
                  style={{ color: "var(--color-text-light)" }}
                >
                  Join the Raha Circle and we'll send you a quiet 10% off your
                  first stay, plus seasonal stories from the resort. No spam,
                  one click to unsubscribe.
                </p>

                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                  <label htmlFor="exit-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="exit-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full bg-transparent px-4 py-3 text-[0.95rem] outline-none"
                    style={{
                      border: "1px solid rgba(0,0,0,0.18)",
                      color: "var(--color-secondary)",
                    }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 text-[0.85rem] font-medium uppercase tracking-[2.5px] text-white"
                    style={{ background: "var(--color-secondary)" }}
                  >
                    Claim 10% Off
                  </button>
                </form>

                <div
                  aria-live="polite"
                  className="mt-3 text-[0.85rem]"
                  style={{
                    minHeight: "1.25rem",
                    color: "var(--color-primary)",
                  }}
                >
                  {status === "sent" ? "Thanks, check your inbox." : ""}
                </div>

                <button
                  type="button"
                  onClick={close}
                  className="mt-1 text-[0.78rem] underline underline-offset-4"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  No thanks, take me back
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
