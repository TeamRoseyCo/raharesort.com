"use client";

/* Lenis smooth-scroll was disabled because, combined with the header's
   backdrop-filter and Hero's scroll-tied transforms, it caused noticeable
   jank on Windows/Chromium. Native scroll + CSS `scroll-behavior: smooth`
   is plenty fluid here. Keeping this file as a passthrough so the layout
   import still works. */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
