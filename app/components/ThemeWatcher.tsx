"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "slate" | "primary" | "cream" | "light";

const ThemeContext = createContext<Theme>("dark");

export const useActiveTheme = () => useContext(ThemeContext);

export default function ThemeWatcher({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let cancelled = false;

    /* On route change, the new page's sections may not be in the DOM on the
       very next tick. Wait one rAF for hydration and then re-query. */
    let sections: HTMLElement[] = [];
    const requery = () => {
      sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-theme]")
      );
    };

    let ticking = false;
    let lastTheme: Theme | null = null;

    const pickActive = () => {
      if (sections.length === 0) requery();
      if (sections.length === 0) {
        ticking = false;
        return;
      }
      const probeY = window.innerHeight * 0.18;
      let best: { el: HTMLElement; y: number } | null = null;
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          if (!best || rect.top > best.y) best = { el, y: rect.top };
        }
      }
      if (best) {
        const t = best.el.getAttribute("data-theme") as Theme | null;
        if (t && t !== lastTheme) {
          lastTheme = t;
          setTheme(t);
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(pickActive);
    };

    requestAnimationFrame(() => {
      if (cancelled) return;
      requery();
      pickActive();
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  const value = useMemo(() => theme, [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
