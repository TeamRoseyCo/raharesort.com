import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import Reveal from "../components/Reveal";
import { PHOTO_LIB } from "../lib/photos";

const STATS = [
  { figure: "Jericho", label: "On the road, 15 minutes from the Dead Sea" },
  { figure: "All year", label: "Heated pool, climate-controlled rooms" },
  { figure: "24 / 7", label: "Reception and on-call concierge" },
  { figure: "Local", label: "Family run, Palestinian owned" },
];

const VIEWS = [
  {
    title: "Mountain Views",
    copy: "The Jericho hills shift colour through the day, gold at sunrise, copper at dusk. The west-facing rooms catch the best of it.",
    img: PHOTO_LIB.jerichoMountainsSunset,
  },
  {
    title: "Pool Views",
    copy: "Twenty-five metres of clear water, palm trees and cabanas around the deck. A view that holds all day.",
    img: PHOTO_LIB.poolLoungersBonsai,
  },
  {
    title: "Resort Views",
    copy: "Wake up to a balcony that overlooks the property. Pool below, palms beyond, hills in the distance.",
    img: PHOTO_LIB.roomBalconyResort,
  },
];

const VALUES = [
  {
    title: "Quiet by Design",
    copy: "Rooms separated, hallways carpeted, music kept low. The property is built so you actually hear yourself think.",
  },
  {
    title: "Same Standard, Always",
    copy: "Tuesday afternoon or full Saturday, the bed is made the same way and the room smells the same when you open the door.",
  },
  {
    title: "Local, Not Generic",
    copy: "Stone, palm, and sand from this side of the river. Cooks, gardeners, and front desk who grew up in Jericho.",
  },
  {
    title: "Ask, We'll Sort It",
    copy: "Late check-out, an extra pillow, a private driver to the Dead Sea at 6 AM. Real answers, not policy lines.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Raha"
        bg={PHOTO_LIB.lobbyStaircasePalms}
        crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
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
                fontSize: "clamp(1.15rem, 1.7vw, 1.45rem)",
                lineHeight: 1.5,
                color: "var(--color-secondary)",
              }}
            >
              A small resort in Jericho, built around the idea that a stay
              should feel like exhale.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-[680px] text-center t-body text-[var(--color-text-light)]">
              Raha means comfort and tranquillity. The name shows up on the
              wall, the bedding, the way the staff move through the
              hallways. It's the standard the whole place is built around.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story (two-column) */}
      <section
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "6rem 0",
        }}
      >
        <div className="container-xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal y={36}>
              <div
                className="relative h-[480px] w-full overflow-hidden"
                style={{
                  boxShadow: "0 24px 50px -22px rgba(20,14,8,0.35)",
                }}
              >
                <Image
                  src={PHOTO_LIB.exteriorPoolside}
                  alt="Raha Resort exterior, daylight"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="t-eyebrow">Our Story</span>
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
                  Built in Jericho, for Jericho
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="title-divider" />
              </Reveal>
              <Reveal delay={0.18}>
                <p className="t-body" style={{ color: "var(--color-secondary)" }}>
                  We grew up here. The hills, the desert light, the slow
                  pace of an afternoon by the water. The resort is our
                  attempt to put all of that, the parts of Jericho we love,
                  into a place you can actually stay in.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <p
                  className="mt-5 t-body"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Every choice we made started with one question: would we
                  want to spend a week here? The bedding answers yes. The
                  pool answers yes. The morning coffee answers yes. The
                  rest of the place follows the same rule.
                </p>
              </Reveal>
              <Reveal delay={0.34}>
                <p
                  className="mt-5 t-body"
                  style={{ color: "var(--color-secondary)" }}
                >
                  We're family run, Palestinian owned, and small enough
                  that the front desk knows your name by the second
                  morning. That's the part we won't outgrow.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "5rem 0" }}
      >
        <div className="container-xl">
          <div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              padding: "3rem 0",
            }}
          >
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} y={20}>
                <div className="text-center">
                  <span
                    className="block"
                    style={{
                      fontFamily: "var(--font-heading), Georgia, serif",
                      fontSize: "clamp(1.85rem, 3.5vw, 2.8rem)",
                      color: "var(--color-secondary)",
                      lineHeight: 1.05,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {s.figure}
                  </span>
                  <span
                    className="mt-3 block text-[0.78rem] font-medium uppercase"
                    style={{
                      color: "var(--color-accent)",
                      letterSpacing: "0.22em",
                    }}
                  >
                    ·
                  </span>
                  <p
                    className="mt-2 text-[0.95rem] leading-[1.6]"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        id="values"
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
              <span className="t-eyebrow">What We Stand For</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[var(--color-secondary)]">Four things, kept simple</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Not a brand manifesto, just the rules we run the property
                by. Hold us to them.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} y={28}>
                <article
                  className="flex h-full flex-col bg-white p-7"
                  style={{
                    boxShadow: "0 6px 18px -10px rgba(20,14,8,0.12)",
                  }}
                >
                  <span
                    className="mb-4 block text-[0.72rem] font-medium uppercase"
                    style={{
                      color: "var(--color-accent)",
                      letterSpacing: "0.32em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="mb-3 text-[var(--color-secondary)]"
                    style={{
                      fontSize: "1.2rem",
                      fontFamily: "var(--font-heading), Georgia, serif",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-[0.95rem] leading-[1.7]"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {v.copy}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote band */}
      <section
        data-theme="dark"
        className="theme-dark relative overflow-hidden text-center"
        style={{ padding: "7rem 0" }}
      >
        <Image
          aria-hidden
          src={PHOTO_LIB.jerichoMountainsSunset}
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
              "linear-gradient(180deg, rgba(20,16,12,0.62) 0%, rgba(8,6,4,0.78) 100%)",
          }}
        />
        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <span className="section-subtitle on-dark">In Our Words</span>
            </Reveal>
            <Reveal delay={0.08}>
              <p
                className="mt-4 text-white"
                style={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1.5rem, 3.6vw, 2.5rem)",
                  lineHeight: 1.35,
                }}
              >
                We didn't build a resort to be impressive. We built a place
                where you can put your phone down and actually be somewhere
                for a few days.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="title-divider center on-dark" />
            </Reveal>
            <Reveal delay={0.24}>
              <span
                className="text-[0.78rem] font-medium uppercase tracking-[2.5px]"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                The Raha Team
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Views grid */}
      <section
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "6rem 0" }}
      >
        <div className="container-xl">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <Reveal>
              <span className="t-eyebrow">Perspectives</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[var(--color-secondary)]">From Your Window</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Three things you'll see, depending on which way the room
                faces.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {VIEWS.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} y={28}>
                <article
                  className="group flex h-full flex-col overflow-hidden bg-white"
                  style={{
                    boxShadow: "0 6px 18px -10px rgba(20,14,8,0.12)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="relative h-[280px] w-full overflow-hidden">
                    <Image
                      src={v.img}
                      alt={v.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3
                      className="mb-3 text-[var(--color-secondary)]"
                      style={{
                        fontSize: "1.3rem",
                        fontFamily: "var(--font-heading), Georgia, serif",
                      }}
                    >
                      {v.title}
                    </h3>
                    <p
                      className="text-[0.95rem] leading-[1.7]"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {v.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "6rem 0",
        }}
      >
        <div className="container-xl">
          <div className="mx-auto max-w-[760px] text-center">
            <Reveal>
              <span className="t-eyebrow">Come Stay</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="text-[var(--color-secondary)]"
                style={{ fontSize: "clamp(1.85rem, 4vw, 2.85rem)" }}
              >
                Best way to know us is to come.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Pick a room, take the drive, and we'll do the rest. We
                tend to make a strong first impression.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
                <Link
                  href="/rooms"
                  className="inline-flex items-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] text-white hover:-translate-y-0.5"
                  style={{
                    background: "var(--color-primary)",
                    boxShadow: "0 6px 20px rgba(139,115,85,0.25)",
                  }}
                >
                  Explore Rooms
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[0.85rem] uppercase tracking-[2.5px]"
                  style={{
                    color: "var(--color-secondary)",
                    borderBottom: "1px solid var(--color-accent)",
                    paddingBottom: 4,
                  }}
                >
                  Or talk to us
                </Link>
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
