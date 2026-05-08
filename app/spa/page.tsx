import Image from "next/image";
import { Heart, Clock, Flower2, Check } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import Reveal from "../components/Reveal";
import { PHOTO_LIB } from "../lib/photos";

type Massage = {
  title: string;
  duration: string;
  body: string;
  image: string;
  outcomes: string[];
};

// Placeholder images from Unsplash. Swap with branded photography before launch.
const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const MASSAGES: Massage[] = [
  {
    title: "Swedish Massage",
    duration: "60 / 90 min",
    body: "Long, slow strokes that settle the breath. Warm oil, dim light, and a therapist who knows when to lean in and when to ease off. The first hour passes; you stop noticing time.",
    image: UNSPLASH("1540555700478-4be289fbecef"),
    outcomes: ["Stress release", "Improved circulation", "Deeper sleep tonight"],
  },
  {
    title: "Aromatherapy Massage",
    duration: "60 / 90 min",
    body: "Choose your scent at the door, lavender to soften, lemongrass to lift. Oils warm in the palm before they touch you. The room holds the smell long after you leave.",
    image: PHOTO_LIB.bathroomVanity, // resort photography
    outcomes: ["Calmed nervous system", "Mood reset", "Skin left soft"],
  },
  {
    title: "Deep Tissue Massage",
    duration: "60 / 90 min",
    body: "For the back you've been ignoring. Slow pressure into the layers under the surface, working through what's been knotted for weeks. You'll feel it the next morning, in the right way.",
    image: UNSPLASH("1600334129128-685c5582fd35"),
    outcomes: ["Chronic tension released", "Mobility back", "Posture rebooted"],
  },
  {
    title: "Thai Herbal Massage",
    duration: "90 min",
    body: "Warm herbal compresses against the spine, the shoulders, the soles of the feet. A treatment that smells like a garden and feels like being carried.",
    image: UNSPLASH("1583416750470-965b2707b355"),
    outcomes: ["Joint relief", "Muscle warmth", "A long, deep exhale"],
  },
  {
    title: "Hot Stone Therapy",
    duration: "75 min",
    body: "Smooth basalt stones, heated to body temperature, placed where you hold the most stress. The warmth pulls everything down and out. Quiet, motionless work, the kind your body answers to.",
    image: UNSPLASH("1544161515-4ab6ce6db874"),
    outcomes: ["Deep muscle release", "Slowed heart rate", "Real stillness"],
  },
];

const TREATMENTS = [
  {
    title: "Coffee Body Treatment",
    body: "Fresh-ground coffee whipped into a warm scrub, worked across the body, then rinsed off. A vitamin E oil massage closes it. Skin tighter, brighter, fresh.",
    image: UNSPLASH("1515377905703-c4788e51af15"),
    note: "All skin types",
  },
  {
    title: "Honey Treatment",
    body: "Pure honey, slowly massaged in, then a warm coconut oil finish. Antibacterial, deeply hydrating, the kind of softness that lasts past the shower.",
    image: UNSPLASH("1587049352846-4a222e784d38"),
    note: "Normal to dry skin",
  },
  {
    title: "Salt & Sugar Scrub",
    body: "Crushed sea salt and cane sugar with essential oils. Twenty minutes of warm-bath prep first, then twenty minutes of careful exfoliation. You'll feel it the moment you stand up.",
    image: UNSPLASH("1556228720-195a672e8a03"),
    note: "Exfoliating, detoxifying",
  },
];

export const metadata = {
  title: "Spa & Wellness",
  description:
    "Resort spa in Jericho, fifteen minutes from the Dead Sea. Massage, facials, and wellness rituals at Raha Resort.",
  alternates: { canonical: "/spa" },
  openGraph: {
    title: "Spa & Wellness | Raha Resort",
    description:
      "Resort spa in Jericho, fifteen minutes from the Dead Sea.",
    url: "/spa",
  },
};

export default function SpaPage() {
  return (
    <main>
      <PageHeader
        title="Relax Your Body & Mind"
        bg={PHOTO_LIB.spaIndoor}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Spa & Wellness" },
        ]}
      />

      {/* Lead block: italic subtitle + intro body. */}
      <section
        data-theme="light"
        className="theme-light relative bg-white"
        style={{ padding: "5rem 0 2rem" }}
      >
        <div className="container-xl">
          <Reveal>
            <div className="mb-6 flex justify-center" aria-hidden>
              <Image
                src="/raha-logo.png"
                alt=""
                width={120}
                height={120}
                unoptimized
                className="section-flourish-logo"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p
              className="mx-auto max-w-[760px] text-center"
              style={{
                fontFamily: "var(--font-heading), Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)",
                lineHeight: 1.5,
                color: "var(--color-secondary)",
              }}
            >
              An hour and a half from the lobby door to a quieter version of
              yourself.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-[680px] text-center t-body text-[var(--color-text-light)]">
              Warm wood, marble basins, candles low enough to feel the smell.
              Therapists who don't talk unless you want them to. Treatments
              you'll think about the next morning, the next week, on the
              flight home.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two-column intro: copy + photo of the spa interior */}
      <section
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "5rem 0",
        }}
      >
        <div className="container-xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Reveal>
                <span className="t-eyebrow">Wellness</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  className="text-[var(--color-secondary)]"
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    fontWeight: 600,
                    fontSize: "clamp(1.85rem, 3.6vw, 2.6rem)",
                    lineHeight: 1.1,
                  }}
                >
                  Sanctuary, Designed Around You
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="title-divider" />
              </Reveal>
              <Reveal delay={0.18}>
                <p className="t-body" style={{ color: "var(--color-secondary)" }}>
                  You arrive to a glass of cold tea, a robe folded the
                  night before, and slippers that fit. The hallway is hushed.
                  The air smells faintly of cedar. Your therapist meets you
                  by name and asks one question: pressure level today.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p className="mt-5 t-body" style={{ color: "var(--color-secondary)" }}>
                  Then the door closes, the music drops, and the next sixty
                  to ninety minutes belong only to you.
                </p>
              </Reveal>
            </div>

            <Reveal y={36} className="order-1 lg:order-2">
              <div
                className="relative h-[480px] w-full overflow-hidden"
                style={{
                  borderRadius: 24,
                  boxShadow: "0 24px 50px -22px rgba(20,14,8,0.35)",
                }}
              >
                <Image
                  src={PHOTO_LIB.saunaInterior}
                  alt="Wooden sauna interior softly lit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Massage menu — alternating photo + copy rows for each treatment. */}
      <section
        id="massages"
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "6rem 0" }}
      >
        <div className="container-xl">
          <div className="mx-auto mb-16 max-w-[760px] text-center">
            <Reveal>
              <span className="t-eyebrow">The Menu</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[var(--color-secondary)]">
                Massage Therapies
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Five treatments, each one chosen carefully. Pick the one that
                fits the kind of week you've had.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {MASSAGES.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 0.08} y={28}>
                <article
                  className="spa-card group flex h-full flex-col overflow-hidden bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
                  style={{
                    borderRadius: 24,
                    boxShadow: "0 10px 28px -16px rgba(20,14,8,0.18)",
                  }}
                >
                  <div className="relative h-[260px] w-full overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span
                      className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[2.3px]"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <Clock size={13} strokeWidth={1.6} />
                      {m.duration}
                    </span>
                    <h3
                      className="mb-3 mt-3 text-[var(--color-secondary)]"
                      style={{
                        fontSize: "1.4rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        fontWeight: 500,
                        lineHeight: 1.15,
                        fontFamily: "var(--font-heading), Georgia, serif",
                      }}
                    >
                      {m.title}
                    </h3>
                    <div className="title-divider" />
                    <p
                      className="t-body-sm"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {m.body}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2">
                      {m.outcomes.map((o) => (
                        <li
                          key={o}
                          className="flex items-start gap-2 text-[0.86rem]"
                          style={{ color: "var(--color-secondary)" }}
                        >
                          <Check
                            size={14}
                            strokeWidth={2}
                            style={{
                              color: "var(--color-accent)",
                              marginTop: 4,
                              flexShrink: 0,
                            }}
                          />
                          {o}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact?topic=spa"
                      className="mt-auto inline-flex w-fit items-center pt-7 text-[0.78rem] font-medium uppercase tracking-[2.5px]"
                      style={{
                        color: "var(--color-secondary)",
                        borderBottom: "1px solid var(--color-accent)",
                        paddingBottom: 4,
                        marginTop: 28,
                      }}
                    >
                      Book This Treatment
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Couples feature: full bleed photo background, romantic emotional pull. */}
      <section
        id="couples"
        data-theme="dark"
        className="theme-dark relative overflow-hidden text-center"
        style={{ padding: "8rem 0" }}
      >
        <Image
          aria-hidden
          src={PHOTO_LIB.spaHallway}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,16,12,0.6) 0%, rgba(8,6,4,0.78) 100%)",
          }}
        />
        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-[760px]">
            <Reveal>
              <span className="section-subtitle on-dark">For Two</span>
            </Reveal>
            <Reveal delay={0.06}>
              <Heart
                size={32}
                strokeWidth={1.4}
                className="mx-auto"
                style={{ color: "var(--color-accent)" }}
              />
            </Reveal>
            <Reveal delay={0.12}>
              <h2
                className="mt-4 text-white"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                }}
              >
                The Couple's Massage
              </h2>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="title-divider center on-dark" />
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mx-auto max-w-[620px] text-[1.05rem] leading-[1.85] text-white/85">
                Two therapists, one quiet room, ninety minutes side by side.
                The rest of the world stays outside the door. You'll leave
                lighter than you came in, the kind of evening you'll talk
                about long after.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <a
                href="/contact?topic=couples"
                className="mt-9 inline-flex items-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] text-[var(--color-secondary)]"
                style={{ background: "var(--color-accent)" }}
              >
                Plan A Couple's Visit
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body Treatments with cards that include their own image */}
      <section
        id="treatments"
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "6rem 0",
        }}
      >
        <div className="container-xl">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <Reveal>
              <span className="t-eyebrow">Body</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[var(--color-secondary)]">
                Body Treatments
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Three short rituals to leave the skin softer, the body
                lighter.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {TREATMENTS.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08} y={28}>
                <article
                  className="spa-card group flex h-full flex-col overflow-hidden bg-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
                  style={{
                    borderRadius: 24,
                    boxShadow: "0 10px 28px -16px rgba(20,14,8,0.18)",
                  }}
                >
                  <div className="relative h-[240px] w-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3
                      className="mb-3 text-[var(--color-secondary)]"
                      style={{
                        fontSize: "1.25rem",
                        fontFamily: "var(--font-heading), Georgia, serif",
                      }}
                    >
                      {t.title}
                    </h3>
                    <p className="t-body-sm text-[var(--color-text-light)]">
                      {t.body}
                    </p>
                    <p
                      className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[2px]"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <Flower2 size={14} strokeWidth={1.6} />
                      {t.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking microcommit row */}
      <section
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "5rem 0" }}
      >
        <div className="container-xl">
          <div className="mx-auto max-w-[760px] text-center">
            <Reveal>
              <span className="t-eyebrow">Reserve Your Visit</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="text-[var(--color-secondary)]"
                style={{
                  fontSize: "clamp(1.85rem, 4vw, 2.85rem)",
                }}
              >
                Treatments fill quickly on weekends.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Most enquiries are answered the same day. We will hold a slot
                while you decide. No deposit until confirmed.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
                <a
                  href="/contact?topic=spa"
                  className="inline-flex items-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] text-white hover:-translate-y-0.5"
                  style={{
                    background: "var(--color-primary)",
                    boxShadow: "0 6px 20px rgba(139,115,85,0.25)",
                  }}
                >
                  Reserve a Treatment
                </a>
                <a
                  href="tel:+97000000000"
                  className="inline-flex items-center text-[0.85rem] uppercase tracking-[2.5px]"
                  style={{
                    color: "var(--color-secondary)",
                    borderBottom: "1px solid var(--color-accent)",
                    paddingBottom: 4,
                  }}
                >
                  Or call the spa team
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}
