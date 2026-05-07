"use client";

import { useState } from "react";
import { Gift, Tag, Compass, Sparkles } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import { Section, SectionHead } from "../components/ContentSection";
import Reveal from "../components/Reveal";
import { photo } from "../lib/photos";

const BENEFITS = [
  { icon: Gift, title: "Early Access", copy: "Be the first to know about special promotions, seasonal packages, and exclusive resort events." },
  { icon: Tag, title: "Subscriber-Only Deals", copy: "Unlock special discounts and offers exclusively available to our newsletter subscribers." },
  { icon: Compass, title: "Travel Insights", copy: "Expert tips on exploring Jericho, the Dead Sea, and surrounding historical sites from our local team." },
  { icon: Sparkles, title: "Resort Updates", copy: "Stay informed about new amenities, services, dining options, and improvements at Raha Resort." },
];

export default function NewsletterPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHeader
        title="Newsletter"
        bg={photo(9)}
        crumbs={[{ href: "/", label: "Home" }, { label: "Newsletter" }]}
      />

      <Section theme="light">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <span className="section-subtitle">Stay Connected</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mb-4">Join Our Newsletter</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="title-divider center" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mb-10 text-[1.1rem] leading-[1.8] text-[var(--color-text-light)]">
              Get exclusive offers, insider travel tips, and the latest updates about Raha Resort and the beautiful Jericho region delivered straight to your inbox.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            {sent ? (
              <div className="bg-white p-10" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                <h3 className="mb-3 text-[1.5rem] text-[var(--color-secondary)]">Thank You for Subscribing!</h3>
                <p className="text-[var(--color-text-light)]">
                  You&apos;ve been successfully added to our newsletter. Check your email for a confirmation message.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-4 sm:grid-cols-2"
              >
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="First name"
                  className="border border-[#ddd] bg-white px-4 py-4 text-[1rem] outline-none transition-colors focus:border-[var(--color-primary)]"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name (optional)"
                  className="border border-[#ddd] bg-white px-4 py-4 text-[1rem] outline-none transition-colors focus:border-[var(--color-primary)]"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="border border-[#ddd] bg-white px-4 py-4 text-[1rem] outline-none transition-colors focus:border-[var(--color-primary)] sm:col-span-2"
                />
                <button type="submit" className="btn btn-primary sm:col-span-2">
                  Subscribe Now
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </Section>

      <Section theme="cream">
        <SectionHead eyebrow="Benefits" title="What You'll Receive" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="flex flex-col items-start gap-4 bg-white p-7" style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: "var(--color-cream)", color: "var(--color-primary)" }}
                >
                  <b.icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className="text-[1.15rem] text-[var(--color-secondary)]">{b.title}</h3>
                <p className="text-[0.9rem] leading-[1.7] text-[var(--color-text-light)]">{b.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Cta />
      <Footer />
    </main>
  );
}
