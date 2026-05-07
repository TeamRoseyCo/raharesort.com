"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "raha-color-scheme";

export default function DarkModeToggle() {
  const [mode, setMode] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as
      | "light"
      | "dark"
      | null;
    const initial =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setMode(initial);
    document.documentElement.dataset.scheme = initial;
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.dataset.scheme = next;
  };

  if (!mode) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      className="inline-flex h-10 w-10 items-center justify-center border border-current/20 bg-transparent"
      style={{ color: "var(--theme-nav-fg)" }}
    >
      {mode === "dark" ? (
        <Sun size={16} strokeWidth={1.6} />
      ) : (
        <Moon size={16} strokeWidth={1.6} />
      )}
    </button>
  );
}
