import Image from "next/image";
import { HeartPulse, Dumbbell, Activity, Cog } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import Reveal from "../components/Reveal";
import { photo } from "../lib/photos";

type IconType = typeof Dumbbell;

const EQUIPMENT: { Icon: IconType; title: string; items: string[] }[] = [
  {
    Icon: HeartPulse,
    title: "Cardio Equipment",
    items: [
      "Treadmills",
      "Stationary bikes",
      "Elliptical trainers",
      "Rowing machines",
    ],
  },
  {
    Icon: Activity,
    title: "Flexibility & Recovery",
    items: [
      "Yoga mats",
      "Stretching area",
      "Foam rollers",
      "Resistance bands",
    ],
  },
  {
    Icon: Dumbbell,
    title: "Free Weights",
    items: [
      "Dumbbells (2 to 50 kg)",
      "Barbells & plates",
      "Kettlebells",
      "Weight benches",
    ],
  },
  {
    Icon: Cog,
    title: "Strength Machines",
    items: [
      "Cable machines",
      "Leg press",
      "Chest press",
      "Lat pulldown",
      "Sternocleidomastoid (yes, the neck one)",
    ],
  },
];

const DETAILS = [
  {
    title: "Opening Hours",
    body: "Daily, 6:00 AM to 10:00 PM.",
  },
  {
    title: "Access",
    body: "Complimentary for all hotel guests. Non-residents welcome!",
  },
  {
    title: "Personal Training",
    body: "Available upon request, contact concierge to arrange.",
  },
];

const GUIDELINES = [
  "Appropriate workout attire required.",
  "Please wipe equipment after use.",
  "ALWAYS return weights and dumbbells after use.",
  "Respect everyone and yourself.",
  "Breaking the guidelines results in termination / ban.",
];

export const metadata = {
  title: "Fitness Centre",
  description:
    "Air-conditioned gym at Raha Resort, Jericho. Cardio and resistance equipment, open daily for guests.",
  alternates: { canonical: "/gym" },
  openGraph: {
    title: "Fitness Centre | Raha Resort",
    description:
      "Air-conditioned gym at Raha Resort, Jericho. Open daily for guests.",
    url: "/gym",
  },
};

export default function GymPage() {
  return (
    <main>
      <PageHeader
        title="Raha Gym & Fitness"
        bg={photo(29)}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Gym & Fitness" },
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
                fontSize: "clamp(1.1rem, 1.6vw, 1.35rem)",
                lineHeight: 1.5,
                color: "var(--color-secondary)",
              }}
            >
              A fully equipped training space with a serene pool view, made
              for focused workouts during your stay.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-[680px] text-center t-body text-[var(--color-text-light)]">
              At Raha Resort, we understand that staying healthy and fit is
              essential to a fulfilling life, even while on vacation. Our
              state-of-the-art wellness center and gym offers everything you
              need to maintain your fitness routine or try something new.
              Whether you prefer a vigorous cardio workout, strength training,
              or a relaxing stretch session, our facility is equipped to meet
              all your fitness needs in a comfortable, climate-controlled
              environment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two-column visual intro: copy + gym photo */}
      <section
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "5rem 0" }}
      >
        <div className="container-xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal y={36} className="order-1">
              <div
                className="relative h-[440px] w-full overflow-hidden"
                style={{
                  boxShadow: "0 24px 50px -22px rgba(20,14,8,0.35)",
                }}
              >
                <Image
                  src={photo(30)}
                  alt="Gym floor with cardio and strength equipment"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                />
              </div>
            </Reveal>
            <div className="order-2">
              <Reveal>
                <span className="t-eyebrow">The Floor</span>
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
                  Built for a Real Session
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="title-divider" />
              </Reveal>
              <Reveal delay={0.18}>
                <p
                  className="t-body"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Open layout, mirrored walls, and equipment that's checked,
                  cleaned, and rotated. Cardio facing the pool, free weights
                  to one side, machines along the other, and a quiet stretch
                  corner with mats and rollers.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment grid */}
      <section
        id="equipment"
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
              <span className="t-eyebrow">Equipment</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[var(--color-secondary)]">
                What We Offer
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Our gym features a variety of professional-grade equipment
                to support all types of workouts.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EQUIPMENT.map(({ Icon, title, items }, i) => (
              <Reveal key={title} delay={i * 0.06} y={28}>
                <article
                  className="flex h-full flex-col bg-white p-7"
                  style={{
                    boxShadow: "0 6px 18px -10px rgba(20,14,8,0.12)",
                  }}
                >
                  <span
                    className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: "rgba(212,193,154,0.25)" }}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.4}
                      style={{ color: "var(--color-primary)" }}
                    />
                  </span>
                  <h3
                    className="mb-4 text-[var(--color-secondary)]"
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "var(--font-heading), Georgia, serif",
                    }}
                  >
                    {title}
                  </h3>
                  <ul
                    className="flex list-disc flex-col gap-1.5 pl-5 text-[0.95rem] leading-[1.7]"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed photo band: pool view from the gym */}
      <section
        data-theme="dark"
        className="theme-dark relative overflow-hidden text-center"
        style={{ padding: "0" }}
      >
        <div className="relative h-[55vh] min-h-[380px] w-full">
          <Image
            src={photo(31)}
            alt="View from the gym overlooking the pool"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,16,12,0.42) 0%, rgba(20,16,12,0.58) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="mx-auto max-w-[760px] text-center">
              <Reveal>
                <span className="section-subtitle on-dark">The View</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2
                  className="text-white"
                  style={{ fontSize: "clamp(1.85rem, 4vw, 2.85rem)" }}
                >
                  Train With the Pool in Sight
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="title-divider center on-dark" />
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mx-auto max-w-[560px] text-[1rem] leading-[1.85] text-white/85">
                  Floor-to-ceiling glass on the pool side. Earlier sessions
                  catch the morning light, later ones catch sunset.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Details + Guidelines */}
      <section
        id="info"
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "6rem 0" }}
      >
        <div className="container-xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="t-eyebrow">Information</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="text-[var(--color-secondary)]">
                  Gym Details
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="title-divider" />
              </Reveal>
              <Reveal delay={0.18}>
                <p className="t-body text-[var(--color-text-light)]">
                  Hours, access, training, and the house rules.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col">
              {DETAILS.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.06}>
                  <div
                    className="py-6"
                    style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
                  >
                    <h3
                      className="mb-2 text-[var(--color-secondary)]"
                      style={{
                        fontSize: "1.05rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-heading), Georgia, serif",
                      }}
                    >
                      {d.title}
                    </h3>
                    <p className="t-body-sm text-[var(--color-text-light)]">
                      {d.body}
                    </p>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={DETAILS.length * 0.06}>
                <div className="py-6">
                  <h3
                    className="mb-3 text-[var(--color-secondary)]"
                    style={{
                      fontSize: "1.05rem",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-heading), Georgia, serif",
                    }}
                  >
                    Guidelines
                  </h3>
                  <ul
                    className="flex list-disc flex-col gap-2 pl-5 text-[0.95rem] leading-[1.7]"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    {GUIDELINES.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}
