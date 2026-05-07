import Image from "next/image";
import Link from "next/link";
import { Lightbulb, ShieldAlert, Share2, Link2, Mail } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/sections/Footer";
import Cta from "../../components/sections/Cta";
import Reveal from "../../components/Reveal";
import SidebarNewsletter from "./SidebarNewsletter";
import FaqAccordion from "./FaqAccordion";
import { PHOTO_LIB, photo } from "../../lib/photos";

const RELATED = [
  { title: "10,000 Years of History", img: photo(36), readTime: "5 min read", href: "#" },
  { title: "Dead Sea Minerals", img: PHOTO_LIB.spaIndoor, readTime: "6 min read", href: "#" },
  { title: "5 Must-Do Adventures", img: photo(35), readTime: "5 min read", href: "#" },
];

const TAGS = ["Dead Sea", "Jericho", "Palestine Travel", "Wellness", "Travel Guide", "Middle East"];

const FAQ = [
  { q: "Can you sink in the Dead Sea?", a: "No, the extremely high salt content (about 34 percent) makes the water so dense that you naturally float on the surface. It's nearly impossible to sink." },
  { q: "Is the Dead Sea safe for children?", a: "Yes, but with close supervision. Keep children from splashing or putting their faces in the water. Limit their time to 5 to 10 minutes and ensure they rinse off thoroughly." },
  { q: "Can I visit the Dead Sea if I have sensitive skin?", a: "Generally yes, but start with shorter visits (5 to 10 minutes). The minerals can be beneficial, but listen to your body. Avoid if you have open wounds or recent sunburn." },
  { q: "How long should I float in the Dead Sea?", a: "Recommended time is 10 to 15 minutes per session. You can re-enter after rinsing and resting, but don't stay in continuously for extended periods." },
  { q: "What happens if water gets in my eyes?", a: "It will sting intensely. Exit the water immediately and rinse with fresh water from your bottle. Most beaches have emergency rinse stations. The stinging subsides after thorough rinsing." },
  { q: "Is there an entrance fee to the Dead Sea?", a: "It depends on the beach. Some public beaches are free, while private beaches and resort areas charge entrance fees that typically include facilities like showers, changing rooms, and loungers." },
];

export default function DeadSeaGuide() {
  return (
    <main>
      <PageHeader
        title="The Ultimate Guide to Visiting the Dead Sea: Everything You Need to Know"
        bg={photo(34)}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { label: "Dead Sea Guide" },
        ]}
      />

      <section
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "5rem 0 4rem" }}
      >
        <div className="container-xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
            {/* Article body */}
            <article className="min-w-0">
              <Reveal>
                <div
                  className="mb-3 flex flex-wrap items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[2px]"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <span
                    className="px-3 py-1 text-[var(--color-secondary)]"
                    style={{ background: "var(--color-accent)" }}
                  >
                    Travel Guide
                  </span>
                  <span>By Raha Resort Team</span>
                  <span aria-hidden style={{ color: "var(--color-accent)" }}>·</span>
                  <span>January 10, 2026</span>
                  <span aria-hidden style={{ color: "var(--color-accent)" }}>·</span>
                  <span>8 min read</span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <p
                  className="mb-12 mt-8 text-[1.2rem] italic leading-[1.7]"
                  style={{
                    color: "var(--color-secondary)",
                    borderLeft: "3px solid var(--color-accent)",
                    paddingLeft: "1.25rem",
                  }}
                >
                  The Dead Sea is one of the most unique natural wonders on
                  Earth. Located at the lowest point on the planet's surface,
                  more than 430 metres below sea level, this salt lake offers
                  an experience unlike any other. From floating effortlessly
                  on its mineral-rich waters to enjoying therapeutic mud
                  treatments, a visit to the Dead Sea is a must-do when
                  staying in Jericho.
                </p>
              </Reveal>

              <ArticleSection title="Why visit the Dead Sea?">
                <p>
                  The Dead Sea has attracted visitors for thousands of years,
                  from ancient civilizations to modern wellness seekers.
                  Here's what makes it so special.
                </p>
                <BulletList
                  items={[
                    ["Unique floating experience", "With salt content 10 times higher than the ocean (around 34 percent salinity), you'll float effortlessly on the surface, no swimming skills required."],
                    ["Therapeutic minerals", "The water contains 21 minerals, including magnesium, calcium, and potassium, known for their healing properties."],
                    ["Skin benefits", "Dead Sea mud and minerals have been used for centuries to treat skin conditions like psoriasis, eczema, and acne."],
                    ["Natural spa", "The high atmospheric pressure and mineral-rich air create a natural spa environment beneficial for respiratory health."],
                    ["Historical significance", "Biblical references and ancient beauty treatments used by Cleopatra make it a place of cultural heritage."],
                  ]}
                />
              </ArticleSection>

              <ArticleImage
                src={PHOTO_LIB.jerichoMountainsSunset}
                alt="The Jericho hills at golden hour, near the Dead Sea"
                caption="The effortless floating experience at the Dead Sea is unlike anywhere else on Earth"
              />

              <ArticleSection title="Best time to visit the Dead Sea">
                <p>
                  While the Dead Sea can be visited year-round, timing your
                  visit can enhance your experience.
                </p>
                <SubHeading>Spring (March to May)</SubHeading>
                <p>Ideal weather with temperatures ranging from 20 to 30°C (68 to 86°F). Pleasant for both beach activities and exploring nearby sites. This is peak season, so beaches may be busier.</p>
                <SubHeading>Autumn (September to November)</SubHeading>
                <p>Similar to spring with comfortable temperatures and fewer crowds. Perfect for extended stays and combining beach time with cultural tours.</p>
                <SubHeading>Winter (December to February)</SubHeading>
                <p>Mild temperatures around 15 to 20°C (59 to 68°F). Great for avoiding summer heat, though water may feel cooler. Fewer tourists mean more peaceful experiences.</p>
                <SubHeading>Summer (June to August)</SubHeading>
                <p>Very hot with temperatures exceeding 40°C (104°F). If visiting in summer, go early morning or late afternoon. Stay hydrated and seek shade frequently.</p>
              </ArticleSection>

              <Reveal y={28}>
                <aside
                  className="my-10 flex gap-4 p-7"
                  style={{
                    background: "var(--color-bg-soft, #f5f1eb)",
                    borderLeft: "3px solid var(--color-accent)",
                  }}
                >
                  <Lightbulb size={26} strokeWidth={1.5} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                  <div>
                    <h4 className="mb-2 text-[var(--color-secondary)]" style={{ fontSize: "1.1rem", fontFamily: "var(--font-heading), Georgia, serif" }}>
                      Insider Tip from Raha Resort
                    </h4>
                    <p className="text-[0.98rem] leading-[1.7]" style={{ color: "var(--color-secondary)" }}>
                      The best time to visit is early morning (7 to 9 AM) or late afternoon (4 to 6 PM) when the sun is less intense and the beaches are quieter. Sunset at the Dead Sea is particularly spectacular.
                    </p>
                  </div>
                </aside>
              </Reveal>

              <ArticleSection title="What to bring">
                <p>Pack smart for your Dead Sea adventure.</p>
                <SubHeading>Essentials</SubHeading>
                <SimpleList items={["Old swimsuit (salt can damage fabric)", "Waterproof sandals or flip-flops", "Plenty of fresh water for drinking and rinsing", "High SPF sunscreen (50+ recommended)", "Large towel", "Sunglasses and wide-brimmed hat", "Waterproof bag for valuables", "Change of clothes"]} />
                <SubHeading>Optional but recommended</SubHeading>
                <SimpleList items={["Underwater camera or waterproof phone case", "Snacks (beach facilities may be limited)", "Book or magazine for beach reading", "Aloe vera gel for after-sun care"]} />
              </ArticleSection>

              <Reveal y={28}>
                <aside className="my-10 p-7" style={{ background: "rgba(193, 70, 70, 0.06)", border: "1px solid rgba(193, 70, 70, 0.18)" }}>
                  <div className="mb-4 flex items-center gap-3">
                    <ShieldAlert size={24} strokeWidth={1.5} style={{ color: "#a23a3a" }} />
                    <h4 className="text-[var(--color-secondary)]" style={{ fontSize: "1.15rem", fontFamily: "var(--font-heading), Georgia, serif" }}>Safety First</h4>
                  </div>
                  <ul className="flex flex-col gap-3 text-[0.98rem] leading-[1.7]" style={{ color: "var(--color-secondary)" }}>
                    {[
                      ["Don't get water in your eyes or mouth.", "The high salt content causes severe stinging. Keep your head above water and avoid splashing."],
                      ["Avoid shaving before visiting.", "Wait at least 24 hours after shaving. The salt will sting any small cuts or irritated skin."],
                      ["Limit time in water.", "Stay no more than 10 to 15 minutes at a time. The mineral concentration can be overwhelming."],
                      ["Don't dive or swim.", "The dense water makes swimming difficult and diving dangerous. Float on your back."],
                      ["Rinse immediately.", "Shower thoroughly after leaving to remove salt and minerals."],
                      ["Stay hydrated.", "The heat and salt exposure dehydrate. Drink water throughout your visit."],
                      ["Mind your jewelry.", "Remove jewelry before entering. Salt can tarnish and damage metals."],
                    ].map(([t, b]) => (
                      <li key={t} className="flex gap-3">
                        <span aria-hidden className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: "#a23a3a" }} />
                        <span><strong>{t}</strong> {b}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </Reveal>

              <ArticleImage src={PHOTO_LIB.spaMarbleNiche} alt="Dead Sea mud treatment" caption="Dead Sea mud treatments are famous for their skin benefits" />

              <ArticleSection title="The famous Dead Sea mud experience">
                <p>No visit to the Dead Sea is complete without covering yourself in its legendary black mud.</p>
                <SubHeading>Benefits of Dead Sea mud</SubHeading>
                <SimpleList items={["Deep cleanses and detoxifies skin", "Improves blood circulation", "Reduces inflammation and joint pain", "Exfoliates dead skin cells", "Tightens pores and smooths skin texture", "Relieves muscle tension"]} />
                <SubHeading>How to apply</SubHeading>
                <ol className="my-3 flex flex-col gap-2 pl-5" style={{ listStyleType: "decimal" }}>
                  {[
                    "Apply a generous layer of mud all over your body (available at most beaches).",
                    "Let it dry in the sun for 15 to 20 minutes.",
                    "Rinse off completely in the Dead Sea or shower facilities.",
                    "Follow with moisturizer, as mud can be drying.",
                  ].map((s) => <li key={s}>{s}</li>)}
                </ol>
              </ArticleSection>

              <ArticleSection title="Nearby attractions from Raha Resort">
                <p>Combine your Dead Sea visit with these nearby experiences.</p>
                <SubHeading>Ancient Jericho sites (5 to 15 minutes)</SubHeading>
                <p>Explore Tel es-Sultan, Hisham's Palace, and other archaeological wonders in the world's oldest city.</p>
                <SubHeading>Mount of Temptation (10 minutes)</SubHeading>
                <p>Take the cable car to this historic monastery with breathtaking views of Jericho and the Dead Sea.</p>
                <SubHeading>Qasr al-Yahud baptism site (20 minutes)</SubHeading>
                <p>Visit the traditional baptism site of Jesus Christ on the Jordan River.</p>
                <SubHeading>Jerusalem (40 minutes)</SubHeading>
                <p>Explore the Old City's holy sites and vibrant markets on a day trip.</p>
              </ArticleSection>

              {/* Inline article CTA */}
              <Reveal y={28}>
                <div
                  className="my-12 px-8 py-10 text-center"
                  style={{
                    background: "var(--color-secondary)",
                    color: "#ffffff",
                  }}
                >
                  <h3 className="mb-3" style={{ fontSize: "1.6rem", fontFamily: "var(--font-heading), Georgia, serif", color: "#ffffff" }}>
                    Ready to Experience the Dead Sea?
                  </h3>
                  <p className="mx-auto mb-6 max-w-[520px] text-[0.98rem] leading-[1.7]" style={{ color: "rgba(255,255,255,0.85)" }}>
                    Book your stay at Raha Resort and let us help you plan the perfect Dead Sea experience. Our team knows all the best beaches, optimal visiting times, and hidden gems.
                  </p>
                  <Link
                    href="/contact?topic=dead-sea"
                    className="inline-flex items-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px]"
                    style={{ background: "var(--color-accent)", color: "var(--color-secondary)" }}
                  >
                    Book Your Stay
                  </Link>
                </div>
              </Reveal>

              <ArticleSection title="Frequently asked questions">
                <FaqAccordion items={FAQ} />
              </ArticleSection>

              <ArticleSection title="Final thoughts">
                <p>Visiting the Dead Sea is a truly unique experience that combines natural wonder, wellness benefits, and historical significance. Whether you're seeking therapeutic healing, a one-of-a-kind photo opportunity, or simply want to check off a bucket list item, the Dead Sea delivers.</p>
                <p>From Raha Resort in Jericho, you're perfectly positioned to experience the Dead Sea at its best while exploring the rich history and culture of the region. Our team is here to ensure your visit is safe, comfortable, and unforgettable.</p>
              </ArticleSection>

              {/* Tags */}
              <Reveal>
                <div className="mt-10 flex flex-wrap gap-2">
                  {TAGS.map((t) => (
                    <span
                      key={t}
                      className="text-[0.72rem] font-medium uppercase tracking-[2px]"
                      style={{
                        background: "var(--color-bg-soft, #f5f1eb)",
                        color: "var(--color-secondary)",
                        padding: "6px 12px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>

              {/* Share row */}
              <Reveal delay={0.1}>
                <div
                  className="mt-10 flex flex-wrap items-center gap-5 border-t pt-8"
                  style={{ borderColor: "rgba(0,0,0,0.08)" }}
                >
                  <h4
                    className="text-[0.78rem] font-medium uppercase tracking-[2px]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Share this article
                  </h4>
                  {[
                    { Icon: Share2, label: "Share" },
                    { Icon: Link2, label: "Copy Link" },
                    { Icon: Mail, label: "Email" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={`Share on ${label}`}
                      className="inline-flex h-9 w-9 items-center justify-center"
                      style={{
                        border: "1px solid rgba(0,0,0,0.12)",
                        color: "var(--color-secondary)",
                      }}
                    >
                      <Icon size={16} strokeWidth={1.6} />
                    </a>
                  ))}
                </div>
              </Reveal>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-6">
                <SidebarWidget title="Related Articles">
                  <div className="flex flex-col gap-4">
                    {RELATED.map((r) => (
                      <Link
                        key={r.title}
                        href={r.href}
                        className="group flex items-center gap-3"
                      >
                        <div className="relative h-[64px] w-[80px] flex-shrink-0 overflow-hidden">
                          <Image
                            src={r.img}
                            alt=""
                            fill
                            sizes="80px"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4
                            className="text-[0.92rem] leading-[1.3] text-[var(--color-secondary)]"
                            style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
                          >
                            {r.title}
                          </h4>
                          <span
                            className="text-[0.7rem] font-medium uppercase tracking-[1.5px]"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            {r.readTime}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </SidebarWidget>

                <SidebarWidget
                  title="Plan Your Visit"
                  variant="cta"
                >
                  <p className="mb-5 text-[0.95rem] leading-[1.65] text-white">
                    Ready to experience the Dead Sea? Book your stay at Raha Resort.
                  </p>
                  <Link
                    href="/contact?topic=dead-sea"
                    className="block w-full px-6 py-3 text-center text-[0.78rem] font-semibold uppercase tracking-[2.5px]"
                    style={{
                      background: "var(--color-accent)",
                      color: "#1a1410",
                    }}
                  >
                    Book Now
                  </Link>
                </SidebarWidget>

                <SidebarWidget title="Subscribe to Our Newsletter">
                  <p className="mb-4 text-[0.9rem] leading-[1.6]" style={{ color: "var(--color-text-light)" }}>
                    Get travel tips and exclusive offers.
                  </p>
                  <SidebarNewsletter />
                </SidebarWidget>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}

/* ---------- helpers ---------- */

function ArticleSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal y={24}>
      <section className="mb-10 mt-12">
        <h2
          className="mb-4 text-[var(--color-secondary)]"
          style={{
            fontSize: "clamp(1.5rem, 2.6vw, 1.85rem)",
            fontFamily: "var(--font-heading), Georgia, serif",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h2>
        <div className="flex flex-col gap-4 text-[1rem] leading-[1.85]" style={{ color: "var(--color-text)" }}>
          {children}
        </div>
      </section>
    </Reveal>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mb-2 mt-4"
      style={{
        fontSize: "1.15rem",
        color: "var(--color-secondary)",
        fontFamily: "var(--font-heading), Georgia, serif",
      }}
    >
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: [string, string][] }) {
  return (
    <ul className="my-3 flex flex-col gap-3">
      {items.map(([t, b]) => (
        <li key={t} className="flex gap-3">
          <span aria-hidden className="mt-3 inline-block h-px w-4 flex-shrink-0" style={{ background: "var(--color-accent)" }} />
          <span><strong>{t}:</strong> {b}</span>
        </li>
      ))}
    </ul>
  );
}

function SimpleList({ items }: { items: string[] }) {
  return (
    <ul className="my-3 flex flex-col gap-2 pl-5" style={{ listStyleType: "disc" }}>
      {items.map((it) => <li key={it}>{it}</li>)}
    </ul>
  );
}

function ArticleImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <Reveal y={36}>
      <figure className="my-12">
        <div className="relative h-[420px] w-full overflow-hidden" style={{ boxShadow: "0 24px 50px -22px rgba(20,14,8,0.3)" }}>
          <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover" />
        </div>
        <figcaption className="mt-3 text-center text-[0.85rem] italic" style={{ color: "var(--color-text-muted)" }}>{caption}</figcaption>
      </figure>
    </Reveal>
  );
}

function SidebarWidget({
  title,
  variant = "default",
  children,
}: {
  title: string;
  variant?: "default" | "cta";
  children: React.ReactNode;
}) {
  const isCta = variant === "cta";
  return (
    <div
      className="p-6"
      style={{
        background: isCta ? "var(--color-secondary)" : "#ffffff",
        border: isCta ? "none" : "1px solid rgba(0,0,0,0.06)",
        boxShadow: isCta ? "0 18px 36px -22px rgba(20,14,8,0.35)" : "0 6px 18px -12px rgba(20,14,8,0.1)",
      }}
    >
      <h3
        className="mb-4 pb-3"
        style={{
          fontSize: "1.05rem",
          fontFamily: "var(--font-heading), Georgia, serif",
          color: isCta ? "#ffffff" : "var(--color-secondary)",
          borderBottom: `1px solid ${isCta ? "var(--color-accent)" : "rgba(0,0,0,0.08)"}`,
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}
