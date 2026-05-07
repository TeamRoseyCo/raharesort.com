import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import { Section, SectionHead, TwoCol } from "../components/ContentSection";
import Reveal from "../components/Reveal";
import { photo } from "../lib/photos";

const DIRECTIONS = [
  { title: "From Jericho City Center", time: "≈ 10 min", copy: "Head east from downtown Jericho towards the Dead Sea Highway. Raha Resort is located just off the main road with clear signage." },
  { title: "From Jerusalem", time: "≈ 40 min", copy: "Take Highway 1 east towards Jericho. Continue through the scenic desert landscape, descending to sea level. Follow signs to Jericho and the Dead Sea area." },
  { title: "From Ramallah", time: "≈ 50 min", copy: "Take the main road southeast through the Palestinian highlands, then descend towards Jericho. Follow the Dead Sea Highway signs." },
  { title: "Private Transfer", time: "Hassle-free", copy: "Book our private transfer service from Jerusalem, Tel Aviv, or Amman for a comfortable, direct journey. Contact our concierge." },
];

const NEARBY = [
  { title: "Ancient Jericho", distance: "5, 15 min", copy: "Explore Tel es-Sultan, the ancient city walls, and Hisham's Palace, remnants of one of the world's oldest continuously inhabited cities." },
  { title: "The Dead Sea", distance: "15 min", copy: "The lowest point on Earth. Float in the mineral-rich waters and enjoy therapeutic mud treatments at nearby beaches." },
  { title: "Mount of Temptation", distance: "10 min", copy: "Take the cable car to the Greek Orthodox monastery perched on the cliffside with stunning views of Jericho and the Jordan Valley." },
  { title: "Qasr al-Yahud", distance: "20 min", copy: "Visit the traditional baptism site of Jesus Christ on the Jordan River, a significant pilgrimage destination." },
  { title: "Jerusalem Old City", distance: "40 min", copy: "Explore the holy sites including Al-Aqsa Mosque, Church of the Holy Sepulchre, and the Western Wall." },
  { title: "Bethlehem", distance: "1 hr", copy: "Visit the Church of the Nativity and explore the vibrant markets and Palestinian culture." },
];

export default function LocationPage() {
  return (
    <main>
      <PageHeader
        title="Location"
        bg={photo(3)}
        crumbs={[{ href: "/", label: "Home" }, { label: "Location" }]}
      />

      <Section theme="light">
        <SectionHead
          eyebrow="Where We Are"
          title="Our Location"
          description="Nestled in the historic city of Jericho, the oldest city in the world, with stunning views of the surrounding landscape."
        />
      </Section>

      <Section theme="cream">
        <TwoCol
          eyebrow="Welcome"
          title="Visit Raha Resort"
          body={[
            "Located in the heart of historic Jericho, Palestine, our resort offers a perfect blend of ancient heritage and modern luxury.",
            "Easily accessible from major cities and landmarks, we are the perfect base for exploring the Dead Sea, Jerusalem, and the Jordan Valley.",
          ]}
          img={photo(3)}
          imgAlt="Raha Resort location"
          cta={{ href: "/contact", label: "Get in touch" }}
        />
      </Section>

      <Section theme="light">
        <SectionHead
          eyebrow="Getting Here"
          title="Directions"
          description="Multiple convenient routes to reach Raha Resort from major cities and airports."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {DIRECTIONS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.05}>
              <div className="border-t border-[var(--color-accent)] bg-white p-6" style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
                <h3 className="mb-1 text-[1.15rem] text-[var(--color-secondary)]">{d.title}</h3>
                <p className="mb-3 text-[0.85rem] font-semibold uppercase tracking-[1px] text-[var(--color-primary)]">
                  {d.time}
                </p>
                <p className="text-[0.95rem] leading-[1.7] text-[var(--color-text-light)]">{d.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section theme="cream">
        <SectionHead eyebrow="Explore" title="Nearby Attractions" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEARBY.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.05}>
              <div className="bg-white p-8" style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.04)" }}>
                <h3 className="mb-1 text-[1.2rem] text-[var(--color-secondary)]">{n.title}</h3>
                <p className="mb-3 text-[0.85rem] font-semibold uppercase tracking-[1px] text-[var(--color-primary)]">
                  {n.distance}
                </p>
                <p className="text-[0.9rem] leading-[1.7] text-[var(--color-text-light)]">{n.copy}</p>
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
