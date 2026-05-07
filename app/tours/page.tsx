import Image from "next/image";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import { Section, SectionHead } from "../components/ContentSection";
import Reveal from "../components/Reveal";
import { photo } from "../lib/photos";

const TOURS = [
  { title: "Dead Sea Swim & Desert Hike", duration: "Full Day", copy: "Immerse yourself in the legendary Dead Sea, the lowest point on Earth, and continue with an exhilarating desert hike through stunning Judean Desert landscapes.", img: photo(34) },
  { title: "Jerusalem Old City Experience", duration: "Full Day", copy: "Walk through 3,000 years of history. Visit the Western Wall, Church of the Holy Sepulchre, Dome of the Rock, and wander the vibrant markets.", img: photo(35) },
  { title: "Tour Around Jericho", duration: "Full Day", copy: "Discover the world's oldest continuously inhabited city. Explore ancient ruins, take the cable car to the Mount of Temptation, and experience the vibrant culture.", img: photo(36) },
  { title: "Half Day Desert Experience", duration: "Half Day", copy: "Perfect for limited time. Experience dramatic canyons, ancient monasteries, and breathtaking viewpoints in the Judean Desert.", img: photo(2) },
];

const INFO = [
  { title: "How to Book", copy: "Tours can be booked through our concierge desk or in advance via our contact form. We recommend booking at least 24 hours in advance." },
  { title: "Duration", copy: "Full day tours typically run 8, 10 hours. Half day tours are approximately 4, 5 hours. Departure times vary by tour." },
  { title: "Group Size", copy: "Our tours accommodate small groups for a personalized experience. Private tours are available upon request." },
  { title: "Transportation", copy: "All tours include complimentary pick-up and drop-off at Raha Resort. Be ready at the lobby at the scheduled time." },
];

export default function ToursPage() {
  return (
    <main>
      <PageHeader
        title="Tours & Experiences"
        bg={photo(34)}
        crumbs={[{ href: "/", label: "Home" }, { label: "Tours" }]}
      />

      <Section theme="light">
        <SectionHead
          eyebrow="Curated"
          title="Explore the Region"
          description="Let us take you on unforgettable journeys through the most breathtaking destinations in the region. From the healing waters of the Dead Sea to the ancient streets of Jerusalem."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {TOURS.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <article className="group overflow-hidden bg-white" style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
                <div className="zoom-host relative h-[260px] overflow-hidden">
                  <Image src={t.img} alt={t.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="img-zoom object-cover" />
                  <span className="absolute left-6 top-6 bg-[var(--color-accent)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[1px] text-[#1a1a1a]">
                    {t.duration}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="mb-3 text-[1.5rem] text-[var(--color-secondary)]">{t.title}</h3>
                  <p className="text-[0.95rem] leading-[1.7] text-[var(--color-text-light)]">{t.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section theme="cream">
        <SectionHead eyebrow="Good to Know" title="Tour Information" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="border-t border-[var(--color-accent)] bg-white p-6" style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
                <h4 className="mb-2 font-[family-name:var(--font-sans)] text-[1rem] font-semibold text-[var(--color-secondary)]">{v.title}</h4>
                <p className="text-[0.9rem] leading-[1.7] text-[var(--color-text-light)]">{v.copy}</p>
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
