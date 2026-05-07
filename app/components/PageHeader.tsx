"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PageHeader({
  title,
  bg,
  crumbs,
}: {
  title: string;
  bg: string;
  crumbs: { href?: string; label: string }[];
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://raharesort.com${c.href}` } : {}),
    })),
  };

  return (
    <section
      data-theme="dark"
      className="theme-dark relative flex items-center justify-center overflow-hidden text-center text-white"
      style={{ height: "50vh", minHeight: 400 }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Image
        aria-hidden
        src={bg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div className="container-xl relative z-10 flex w-full justify-center">
        <div className="flex max-w-[1100px] flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 font-[family-name:var(--font-heading)] text-white"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.25rem)",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            {title}
          </motion.h1>
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[0.875rem] uppercase tracking-[2px]"
            style={{ textAlign: "center" }}
          >
            {crumbs.map((c, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2 text-white/70">/</span>}
                {c.href ? (
                  <Link
                    href={c.href}
                    className="text-white/90 transition-colors hover:text-[var(--color-accent-soft)]"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-white">{c.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        </div>
      </div>
    </section>
  );
}
