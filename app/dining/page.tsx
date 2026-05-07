import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import { Section, SectionHead, TwoCol } from "../components/ContentSection";
import Reveal from "../components/Reveal";
import { photo } from "../lib/photos";

const HOURS = [
  { label: "Breakfast", time: "7:00 AM, 10:30 AM", note: "Buffet & à la carte" },
  { label: "Lunch", time: "12:00 PM, 3:00 PM", note: "Light fare & full meals" },
  { label: "Dinner", time: "6:30 PM, 10:30 PM", note: "Fine dining experience" },
];

const DIET = [
  { title: "Vegetarian & Vegan", copy: "Extensive plant-based options available at every meal." },
  { title: "Gluten-Free", copy: "Dedicated gluten-free options clearly marked on menus." },
  { title: "Fully Halal", copy: "All meat served at Raha Resort is halal. No special request needed." },
  { title: "Allergy Aware", copy: "Our chefs can adapt dishes for common food allergies." },
];

export const metadata = {
  title: "Dining",
  description:
    "Local Palestinian cooking and resort dining at Raha Resort, Jericho. Breakfast, lunch, and dinner in a calm, family-run setting.",
  alternates: { canonical: "/dining" },
  openGraph: {
    title: "Dining | Raha Resort",
    description:
      "Local Palestinian cooking and resort dining at Raha Resort, Jericho.",
    url: "/dining",
  },
};

export default function DiningPage() {
  return (
    <main>
      <PageHeader
        title="Dining"
        bg={photo(25)}
        crumbs={[{ href: "/", label: "Home" }, { label: "Dining" }]}
      />

      <Section theme="light">
        <SectionHead
          eyebrow="The Kitchen"
          title="Three meals a day, made here."
          description="The bread comes out of our oven. The meat is halal. Most of what's on the plate started its day on a farm within an hour of Jericho. No tasting menus, no theatre, no over-explained dishes. Just food that tastes like the place you're in."
        />
      </Section>

      <Section theme="cream">
        <TwoCol
          eyebrow="Main Restaurant"
          title="All-Day Dining"
          body={[
            "Our main restaurant offers an elegant yet relaxed atmosphere where guests can enjoy breakfast, lunch, and dinner.",
            "The menu features a blend of international cuisine and local specialties, prepared with the finest ingredients.",
          ]}
          img={photo(25)}
          imgAlt="Main restaurant"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {HOURS.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.08}>
              <div className="bg-white p-8 text-center" style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
                <h4 className="mb-2 font-[family-name:var(--font-heading)] text-[1.35rem] text-[var(--color-secondary)]">
                  {h.label}
                </h4>
                <p className="mb-1 text-[0.95rem] font-semibold text-[var(--color-primary)]">{h.time}</p>
                <p className="text-[0.9rem] text-[var(--color-text-light)]">{h.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section theme="light">
        <TwoCol
          eyebrow="Rooftop"
          title="Sunset Terrace"
          body={[
            "Elevate your dining experience at our rooftop terrace, where breathtaking panoramic views meet exceptional cuisine.",
            "Watch the sun set over the mountains while enjoying handcrafted cocktails and gourmet tapas.",
          ]}
          bullets={["Open daily: 5:00 PM, 12:00 AM", "Cocktails & tapas", "Panoramic views", "Live music on select nights"]}
          img={photo(27)}
          imgAlt="Rooftop terrace"
          reverse
        />
      </Section>

      <Section theme="cream">
        <TwoCol
          eyebrow="Breakfast"
          title="Start Your Day Right"
          body={[
            "Begin each morning with our lavish breakfast buffet featuring freshly baked pastries, local cheeses, seasonal fruits, and hot dishes made to order.",
            "Whether you prefer a hearty traditional breakfast or a light continental start, we have something to satisfy every palate.",
          ]}
          img={photo(28)}
          imgAlt="Breakfast area"
        />
      </Section>

      <Section theme="light">
        <SectionHead
          eyebrow="Dietary"
          title="Dietary Accommodations"
          description="We are committed to accommodating all dietary needs. Please inform our staff of any allergies or special requirements."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIET.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <div className="border-t border-[var(--color-accent)] pt-5">
                <h4 className="mb-2 text-[1.15rem] text-[var(--color-secondary)]">{d.title}</h4>
                <p className="text-[0.9rem] leading-[1.7] text-[var(--color-text-light)]">{d.copy}</p>
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
