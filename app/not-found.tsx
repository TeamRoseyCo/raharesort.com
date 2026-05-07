import Link from "next/link";
import type { Metadata } from "next";
import Footer from "./components/sections/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <section
        className="relative flex items-center justify-center"
        style={{
          minHeight: "70vh",
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "6rem 1.5rem",
        }}
      >
        <div className="container-xl text-center">
          <span
            className="text-[0.78rem] font-medium uppercase"
            style={{
              color: "var(--color-accent)",
              letterSpacing: "0.3em",
            }}
          >
            404
          </span>
          <h1
            className="mt-4 text-[var(--color-secondary)]"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              lineHeight: 1.1,
              letterSpacing: "0.01em",
            }}
          >
            This page wandered off.
          </h1>
          <p
            className="mx-auto mt-5 max-w-[560px] t-body"
            style={{ color: "var(--color-text-light)" }}
          >
            The link may be old or the page may have moved. Try one of the
            paths below, or head back to the resort overview.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/"
              className="inline-flex items-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] text-white"
              style={{
                background: "var(--color-primary)",
                boxShadow: "0 6px 20px rgba(139,115,85,0.25)",
              }}
            >
              Resort Overview
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-[0.85rem] uppercase tracking-[2.5px]"
              style={{
                color: "var(--color-secondary)",
                borderBottom: "1px solid var(--color-accent)",
                paddingBottom: 4,
              }}
            >
              Or talk to us
            </Link>
          </div>
          <ul className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[0.85rem] text-[var(--color-text-light)]">
            <li><Link href="/rooms" className="underline underline-offset-4 hover:text-[var(--color-secondary)]">Rooms</Link></li>
            <li><Link href="/dining" className="underline underline-offset-4 hover:text-[var(--color-secondary)]">Dining</Link></li>
            <li><Link href="/spa" className="underline underline-offset-4 hover:text-[var(--color-secondary)]">Spa</Link></li>
            <li><Link href="/gallery" className="underline underline-offset-4 hover:text-[var(--color-secondary)]">Gallery</Link></li>
            <li><Link href="/blog" className="underline underline-offset-4 hover:text-[var(--color-secondary)]">Journal</Link></li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
