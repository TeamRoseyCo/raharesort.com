"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import { Section, SectionHead } from "../components/ContentSection";
import Reveal from "../components/Reveal";
import { photo } from "../lib/photos";

type InfoLine = string | { label: string; href: string };

const INFO: { icon: typeof MapPin; title: string; lines: InfoLine[] }[] = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["Raha Resort", "Jericho, Palestine"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [{ label: "02-2313333", href: "tel:0222313333" }],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      { label: "info@raharesort.com", href: "mailto:info@raharesort.com" },
    ],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["24 Hours / 7 Days a Week"],
  },
];

const FAQ = [
  { q: "What is your check-in and check-out time?", a: "Check-in time is from 3:00 PM and check-out time is until 11:00 AM. Early check-in and late check-out may be available upon request." },
  { q: "Do you offer airport transfer?", a: "Yes, we offer airport and city transfer services. Please contact our concierge team to arrange transportation for your arrival and departure." },
  { q: "What dining options are available?", a: "We have a full-service restaurant offering both local and international cuisine, rooftop dining, room service, and a breakfast area. Dietary requirements can be accommodated with advance notice." },
  { q: "Is Wi-Fi available?", a: "Yes, complimentary high-speed Wi-Fi is available throughout the resort, including all rooms and public areas." },
  { q: "What is your cancellation policy?", a: "Cancellation policies vary depending on the rate and room type booked. Please review the specific terms at the time of booking." },
  { q: "Are pets allowed?", a: "Please contact us directly to inquire about our pet policy. We want to ensure the comfort of all our guests." },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main>
      <PageHeader
        title="Contact Us"
        bg={photo(4)}
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />

      <Section theme="light">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="section-subtitle">Get in Touch</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mb-4">Book Your Stay</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="title-divider" />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mb-8 text-[1.1rem] leading-[1.8] text-[var(--color-text-light)]">
                Ready to experience a warm Raha welcome? Contact us to reserve your perfect getaway. Our team is available to assist you with reservations, special requests, and any questions you may have.
              </p>
            </Reveal>

            <ul className="flex flex-col gap-6">
              {INFO.map((it, i) => (
                <Reveal key={it.title} delay={0.3 + i * 0.06}>
                  <li className="flex gap-5 items-start">
                    <span
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: "var(--color-cream)", color: "var(--color-primary)" }}
                    >
                      <it.icon size={22} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h4 className="mb-1 font-[family-name:var(--font-sans)] text-[1rem] font-semibold text-[var(--color-secondary)]">{it.title}</h4>
                      {it.lines.map((l, idx) =>
                        typeof l === "string" ? (
                          <p
                            key={idx}
                            className="text-[0.95rem] text-[var(--color-text-light)]"
                          >
                            {l}
                          </p>
                        ) : (
                          <p
                            key={idx}
                            className="text-[0.95rem] text-[var(--color-text-light)]"
                          >
                            <a
                              href={l.href}
                              className="transition-colors hover:text-[var(--color-primary)]"
                              style={{
                                borderBottom:
                                  "1px solid rgba(139,115,85,0.4)",
                                paddingBottom: 1,
                              }}
                            >
                              {l.label}
                            </a>
                          </p>
                        )
                      )}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div style={{ background: "var(--color-off-white)", padding: "3rem" }}>
              <h3 className="mb-6 text-[1.75rem] text-[var(--color-secondary)]">Reservation Inquiry</h3>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-10 text-center"
                >
                  <h4 className="mb-3 text-[1.5rem] text-[var(--color-secondary)]">Thank You!</h4>
                  <p className="text-[var(--color-text-light)]">
                    Your inquiry has been submitted. We&apos;ll respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="flex flex-col gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="First Name" name="firstName" required />
                    <Field label="Last Name" name="lastName" required />
                  </div>
                  <Field type="email" label="Email" name="email" required />
                  <Field label="Phone" name="phone" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field type="date" label="Check in" name="checkIn" required />
                    <Field type="date" label="Check out" name="checkOut" required />
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.875rem] font-medium text-[var(--color-secondary)]">Guests</span>
                    <select
                      name="guests"
                      defaultValue="2"
                      className="border border-[#ddd] bg-white px-4 py-3 text-[1rem] outline-none transition-colors focus:border-[var(--color-primary)]"
                    >
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[0.875rem] font-medium text-[var(--color-secondary)]">Message</span>
                    <textarea
                      name="message"
                      rows={4}
                      className="border border-[#ddd] bg-white px-4 py-3 text-[1rem] outline-none transition-colors focus:border-[var(--color-primary)]"
                      placeholder="Any special requests?"
                    />
                  </label>
                  <p className="text-[0.8rem] text-[var(--color-text-muted)]">* Required fields. We&apos;ll respond within 24 hours.</p>
                  <button type="submit" className="btn btn-primary mt-2">
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section theme="cream">
        <SectionHead eyebrow="Help" title="Frequently Asked" />
        <div className="mx-auto max-w-3xl">
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-[1.05rem] font-semibold text-[var(--color-secondary)]">{f.q}</span>
                  <span
                    aria-hidden
                    className="text-[1.5rem] text-[var(--color-primary)] transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "none" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: openFaq === i ? 220 : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  <p className="pb-6 text-[0.95rem] leading-[1.8] text-[var(--color-text-light)]">
                    {f.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[0.875rem] font-medium text-[var(--color-secondary)]">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="border border-[#ddd] bg-white px-4 py-3 text-[1rem] outline-none transition-colors focus:border-[var(--color-primary)]"
      />
    </label>
  );
}
