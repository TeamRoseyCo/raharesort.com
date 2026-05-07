"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Forces an instant scroll-to-top on every route change, refresh, and
 * back/forward (bfcache) restore. Without this, the browser would land
 * on the previous scroll position or hash and fire every in-view
 * animation while scrolling up.
 */
export default function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) window.scrollTo(0, 0);
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  return null;
}
