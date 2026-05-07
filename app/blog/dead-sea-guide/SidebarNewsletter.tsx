"use client";

import { useState } from "react";

export default function SidebarNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setEmail("");
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3500);
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <label htmlFor="sidebar-newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="sidebar-newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full px-4 py-3 text-[0.9rem] outline-none"
        style={{ border: "1px solid rgba(0,0,0,0.15)" }}
      />
      <button
        type="submit"
        className="w-full px-4 py-3 text-[0.78rem] font-medium uppercase tracking-[2.5px]"
        style={{
          border: "1px solid var(--color-secondary)",
          color: "var(--color-secondary)",
          background: "transparent",
        }}
      >
        Subscribe
      </button>
      <p
        aria-live="polite"
        className="text-[0.78rem]"
        style={{
          minHeight: "1rem",
          color: "var(--color-primary)",
        }}
      >
        {status === "sent" ? "Thanks, check your inbox." : ""}
      </p>
    </form>
  );
}
