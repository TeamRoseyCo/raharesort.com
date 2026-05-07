"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Forces an INSTANT scroll-to-top on every route change, bypassing the
 * page-wide `html { scroll-behavior: smooth }` rule. Without this, navigating
 * between pages animates a long upward scroll, which fires every in-view
 * animation as the viewport passes through them.
 */
export default function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    // restore on next frame so subsequent in-page anchor jumps stay smooth
    requestAnimationFrame(() => {
      html.style.scrollBehavior = prev;
    });
  }, [pathname]);

  return null;
}
