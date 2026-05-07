import Image from "next/image";
import {
  Sun,
  Wind,
  GlassWater,
  Mountain,
  ShieldCheck,
  Plus,
  Clock,
  Waves,
  Heart,
  Sparkles,
  Check,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import Reveal from "../components/Reveal";
import { PHOTO_LIB } from "../lib/photos";

const AMENITIES = [
  {
    Icon: Sun,
    title: "Sun Loungers",
    body: "Comfortable padded loungers with plush towels provided for your relaxation throughout the day.",
  },
  {
    Icon: Mountain,
    title: "Panoramic Views",
    body: "Enjoy stunning mountain and landscape views while you swim or relax by the pool.",
  },
  {
    Icon: Wind,
    title: "Private Cabanas",
    body: "Shaded cabanas available for those seeking extra privacy and comfort, with dedicated service.",
  },
  {
    Icon: ShieldCheck,
    title: "Outdoor Showers",
    body: "Outdoor showers available for your after you swim.",
  },
  {
    Icon: GlassWater,
    title: "Poolside Bar",
    body: "Refreshing cocktails, and cold beverages served directly to your lounger.",
  },
  {
    Icon: Plus,
    title: "Lifeguard On Duty",
    body: "Professional lifeguard on duty during pool hours for your safety and peace of mind.",
  },
];

const DETAILS: { Icon: typeof Clock; title: string; lines: string[] }[] = [
  {
    Icon: Clock,
    title: "Opening Hours",
    lines: ["Daily: 7:00 AM to 8:00 PM", "Poolside Bar: 10:00 AM to 7:00 PM"],
  },
  {
    Icon: Waves,
    title: "Pool Details",
    lines: ["Length: 25 meters"],
  },
  {
    Icon: Sun,
    title: "Entry",
    lines: ["Pool access for all guests", "Non-residents need a day pass"],
  },
];

const EVENT_INCLUSIONS = [
  "Full pool deck reserved exclusively for your guests",
  "Dedicated event manager from first call to last guest",
  "Bar package, plated dinners, or canapés. We tailor it",
  "Lighting, sound, and styling handled by our team",
  "Cabanas reset and restocked through the evening",
  "Rooms held at preferred rates for your guests",
];

export default function PoolPage() {
  return (
    <main>
      <PageHeader
        title="Elite Pool & Lounge in Jericho"
        bg={PHOTO_LIB.poolRooftop}
        crumbs={[{ href: "/", label: "Home" }, { label: "Pool" }]}
      />

      {/* Lead block */}
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
              Well-run space to breathe and relax, with a pool bar that lets
              you stay as long as you want.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-[680px] text-center t-body text-[var(--color-text-light)]">
              Surrounded by comfortable sun loungers and shaded cabanas, our
              pool area is designed for ultimate comfort. Our attentive
              poolside staff ensures your every need is met.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two-column intro: copy + photo */}
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
                <span className="t-eyebrow">Outdoor Pool</span>
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
                  Your Private Oasis
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
                  Escape to our stunning outdoor pool, where crystal-clear
                  waters meet breathtaking panoramic views. Whether you're
                  looking to swim laps, lounge in the sun, or simply float
                  while gazing at the mountains, our pool provides the
                  perfect setting for relaxation.
                </p>
              </Reveal>
            </div>

            <Reveal y={36} className="order-1 lg:order-2">
              <div
                className="relative h-[440px] w-full overflow-hidden"
                style={{
                  boxShadow: "0 24px 50px -22px rgba(20,14,8,0.35)",
                }}
              >
                <Image
                  src={PHOTO_LIB.poolLoungersPalms}
                  alt="Outdoor pool with loungers and palm trees"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pool Amenities, cream-section, white cards with circular gold-tinted
          medallion icon, centered title + body. */}
      <section
        id="amenities"
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "7rem 0",
        }}
      >
        <div className="container-xl">
          <div className="mx-auto mb-16 max-w-[760px] text-center">
            <Reveal>
              <span className="t-eyebrow">Features</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="text-[var(--color-secondary)]"
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.01em",
                  fontWeight: 500,
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  lineHeight: 1.1,
                }}
              >
                Pool Amenities
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06} y={28}>
                <div
                  className="flex h-full flex-col items-center bg-white px-7 py-12 text-center"
                  style={{
                    boxShadow: "0 6px 18px -10px rgba(20,14,8,0.12)",
                  }}
                >
                  <span
                    className="mb-7 inline-flex h-20 w-20 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(212,193,154,0.25)",
                    }}
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.3}
                      style={{ color: "var(--color-primary)" }}
                    />
                  </span>
                  <h3
                    className="mb-3 text-[var(--color-secondary)]"
                    style={{
                      fontSize: "1.25rem",
                      fontFamily: "var(--font-heading), Georgia, serif",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[0.95rem] leading-[1.6]"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo band, wide pool image at full bleed with overlay caption */}
      <section
        data-theme="dark"
        className="theme-dark relative overflow-hidden text-center text-white"
        style={{ padding: "0" }}
      >
        <div className="relative h-[60vh] min-h-[420px] w-full">
          <Image
            src={PHOTO_LIB.poolDusk}
            alt="Pool at dusk with palm trees"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(20,16,12,0.45) 0%, rgba(20,16,12,0.6) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="mx-auto max-w-[760px] text-center">
              <Reveal>
                <span className="section-subtitle on-dark">Pool Views</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2
                  className="text-white"
                  style={{
                    fontSize: "clamp(1.85rem, 4vw, 2.85rem)",
                  }}
                >
                  Enjoy a Quiet Evening Swim
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="title-divider center on-dark" />
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mx-auto max-w-[560px] text-[1rem] leading-[1.85] text-white/85">
                  As the light goes warm and the deck cools off, the pool
                  reflects the Jericho hills. A perfect setting to round
                  off your day.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Details: 3 horizontal cards with circular icons, mirroring the live
          raharesort.com/pool layout. */}
      <section
        id="info"
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "5rem 0",
        }}
      >
        <div className="container-xl">
          <div className="grid gap-5 md:grid-cols-3">
            {DETAILS.map(({ Icon, title, lines }, i) => (
              <Reveal key={title} delay={i * 0.06} y={28}>
                <div
                  className="flex h-full flex-col items-center bg-[var(--color-off-white,#f8f6f3)] px-6 py-10 text-center"
                  style={{ background: "rgba(255,255,255,0.55)" }}
                >
                  <span
                    className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full"
                    style={{ background: "rgba(255,255,255,0.85)" }}
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.4}
                      style={{ color: "var(--color-primary)" }}
                    />
                  </span>
                  <h3
                    className="mb-3 text-[var(--color-secondary)]"
                    style={{
                      fontSize: "1.15rem",
                      fontFamily: "var(--font-heading), Georgia, serif",
                    }}
                  >
                    {title}
                  </h3>
                  {lines.map((l) => (
                    <p
                      key={l}
                      className="t-body-sm text-[var(--color-text-light)]"
                    >
                      {l}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kid's Area: two-column with image on the right and copy + heart on
          the left. */}
      <section
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "6rem 0" }}
      >
        <div className="container-xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "rgba(201,162,90,0.12)" }}
                >
                  <Heart
                    size={22}
                    strokeWidth={1.5}
                    style={{ color: "var(--color-accent)" }}
                  />
                </span>
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
                  Kid's Area
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
                  The kids area is designed to be safe, comfortable, and
                  easy to supervise, so everyone can enjoy the pool without
                  stress. It gives children space to play while keeping the
                  main pool calm and relaxed.
                </p>
              </Reveal>
            </div>

            <Reveal y={36}>
              <div
                className="relative h-[420px] w-full overflow-hidden"
                style={{
                  boxShadow: "0 24px 50px -22px rgba(20,14,8,0.35)",
                }}
              >
                <Image
                  src={PHOTO_LIB.courtyardFountain}
                  alt="Kids area fountain"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Private Events at the Pool, sales section. Photo background, big
          headline, problem-to-promise body, inclusions list, CTA. */}
      <section
        id="events"
        data-theme="dark"
        className="theme-dark relative overflow-hidden"
        style={{ padding: "7rem 0" }}
      >
        <Image
          aria-hidden
          src={PHOTO_LIB.poolFacadeEvening}
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
              "linear-gradient(180deg, rgba(18,22,30,0.78) 0%, rgba(10,14,22,0.92) 100%)",
          }}
        />

        <div className="container-xl relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <span className="section-subtitle on-dark">
                  Private Events
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  className="text-white"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                    lineHeight: 1.05,
                    letterSpacing: "0.005em",
                  }}
                >
                  Book the Pool
                  <br />
                  for the Night.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="title-divider on-dark" />
              </Reveal>
              <Reveal delay={0.18}>
                <p
                  className="text-[1.05rem] leading-[1.8] text-white/85"
                  style={{ maxWidth: 560 }}
                >
                  Some celebrations deserve more than a function room. Hand
                  us your guest list and we will hand you back the pool
                  deck, lit, staffed, and ready, so you can spend the
                  evening with your people instead of running around fixing
                  things.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p
                  className="mt-5 text-[1rem] leading-[1.85] text-white/75"
                  style={{ maxWidth: 560 }}
                >
                  Engagements, birthdays, anniversaries, corporate dinners,
                  and the occasional very-good Tuesday. We have hosted
                  every shape of evening at the water's edge.
                </p>
              </Reveal>
              <Reveal delay={0.34}>
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <a
                    href="/contact?topic=events"
                    className="inline-flex items-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] text-[var(--color-secondary)]"
                    style={{ background: "var(--color-accent)" }}
                  >
                    Plan Your Event
                  </a>
                  <a
                    href="tel:+97000000000"
                    className="inline-flex items-center text-[0.85rem] uppercase tracking-[2.5px] text-white/85"
                    style={{
                      borderBottom: "1px solid var(--color-accent)",
                      paddingBottom: 4,
                    }}
                  >
                    Or call our events team
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.44}>
                <p
                  className="mt-6 text-[0.82rem] text-white/55"
                  style={{ letterSpacing: "0.02em" }}
                >
                  Most enquiries are answered the same day. No commitment
                  until you decide.
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <span
                  className="block text-[0.72rem] font-medium uppercase"
                  style={{
                    color: "var(--color-accent)",
                    letterSpacing: "0.3em",
                    marginBottom: 18,
                  }}
                >
                  <Sparkles
                    size={14}
                    strokeWidth={1.5}
                    className="mr-2 inline align-[-2px]"
                  />
                  What You Get
                </span>
              </Reveal>
              <ul className="flex flex-col gap-4">
                {EVENT_INCLUSIONS.map((item, i) => (
                  <Reveal
                    key={item}
                    as="li"
                    delay={i * 0.06}
                    y={20}
                    className="flex items-start gap-4"
                  >
                    <Check
                      size={18}
                      strokeWidth={2}
                      style={{
                        color: "var(--color-accent)",
                        marginTop: 4,
                        flexShrink: 0,
                      }}
                    />
                    <span className="text-[0.98rem] leading-[1.65] text-white/85">
                      {item}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}
