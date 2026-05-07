import Image from "next/image";
import {
  Check,
  Sparkles,
  UserRound,
  UtensilsCrossed,
  Music,
  Flower,
  Users,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import Reveal from "../components/Reveal";
import { PHOTO_LIB, photo } from "../lib/photos";

const WEDDING_FEATURES = [
  "Dedicated wedding coordinator",
  "Accommodation packages for guests",
  "Customizable ceremony locations",
  "Honeymoon suite for newlyweds",
  "Personalized catering menus",
];

const POOL_PARTY_FEATURES = [
  "Exclusive pool access",
  "Custom lighting and decorations",
  "Poolside bar service",
  "DJ and entertainment options",
];

const EVENT_TYPES: { title: string; body: string }[] = [
  {
    title: "Birthday Celebrations",
    body: "Celebrate another year in style with a memorable party at Raha Resort. From intimate dinners to grand celebrations.",
  },
  {
    title: "Gala Events",
    body: "Host elegant gala events with fine dining, entertainment, and sophisticated ambiance for special occasions.",
  },
  {
    title: "Corporate Events",
    body: "Impress clients and motivate teams with corporate retreats, meetings, and team-building events in a stunning setting.",
  },
  {
    title: "Business Events",
    body: "Annual conferences, product launches, off-sites, and quarterly reviews. We handle the AV, the room, and the breaks so your team stays focused on the agenda.",
  },
  {
    title: "Graduation",
    body: "Host graduation events at a venue that will forever keep that memory alive, with fine dining and stunning views.",
  },
  {
    title: "Engagement Parties",
    body: "Announce your love with a beautiful engagement celebration surrounded by stunning views and loved ones.",
  },
];

const VENUES: {
  title: string;
  capacity: string;
  body: string;
  image: string;
}[] = [
  {
    title: "Poolside Terrace",
    capacity: "Up to 450 guests",
    body: "Our signature outdoor venue featuring our stunning pool as a backdrop. Perfect for cocktail receptions and evening celebrations.",
    image: PHOTO_LIB.poolFacadeEvening,
  },
  {
    title: "Private Dining Room",
    capacity: "Up to 30 guests",
    body: "An intimate space for smaller gatherings, featuring elegant décor and personalized service for a memorable dining experience.",
    image: PHOTO_LIB.lobbyBarDoorway,
  },
  {
    title: "Grand Ballroom",
    capacity: "Up to 200 guests",
    body: "An elegant indoor space with high ceilings and sophisticated décor. Ideal for formal dinners, weddings, and corporate events.",
    image: photo(32),
  },
  {
    title: "Rooftop Restaurant",
    capacity: "Up to 80 guests",
    body: "A stunning rooftop space offering panoramic views of the surrounding landscape. Perfect for sunset ceremonies and intimate gatherings.",
    image: PHOTO_LIB.poolRooftop,
  },
];

const SERVICES = [
  {
    Icon: UserRound,
    title: "Dedicated Event Manager",
    body: "Your personal coordinator from planning to execution.",
  },
  {
    Icon: UtensilsCrossed,
    title: "Custom Catering",
    body: "Personalized menus crafted by our culinary team.",
  },
  {
    Icon: Flower,
    title: "Décor & Styling",
    body: "Professional setup and decoration services.",
  },
  {
    Icon: Music,
    title: "Entertainment",
    body: "DJ, live music, and entertainment coordination.",
  },
];

export const metadata = {
  title: "Events & Weddings",
  description:
    "Weddings, private dinners, and corporate retreats at Raha Resort, Jericho. Quiet venue, full-service hosting.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events & Weddings | Raha Resort",
    description:
      "Weddings, private dinners, and corporate retreats at Raha Resort, Jericho.",
    url: "/events",
  },
};

export default function EventsPage() {
  return (
    <main>
      <PageHeader
        title="Events & Weddings"
        bg={PHOTO_LIB.poolFacadeEvening}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Events & Weddings" },
        ]}
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
              For your special moments.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-[680px] text-center t-body text-[var(--color-text-light)]">
              From intimate gatherings to grand celebrations, Raha Resort
              provides the perfect backdrop for your most memorable
              occasions. Our stunning venues, exceptional service, and
              breathtaking views create unforgettable experiences.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Weddings: two-col with bullet features and CTA */}
      <section
        id="weddings"
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "6rem 0",
        }}
      >
        <div className="container-xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="t-eyebrow">Weddings</span>
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
                  Celebrate Your Wedding
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
                  Celebrate against a backdrop of stunning mountain views or
                  under a canopy of stars by our beautiful pool. Our
                  dedicated wedding team will work with you to create a
                  celebration that reflects your unique love story.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {WEDDING_FEATURES.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[0.98rem]"
                      style={{ color: "var(--color-secondary)" }}
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
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.34}>
                <a
                  href="/contact?topic=wedding"
                  className="mt-9 inline-flex items-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  Plan Your Wedding
                </a>
              </Reveal>
            </div>

            <Reveal y={36}>
              <div
                className="relative h-[480px] w-full overflow-hidden"
                style={{
                  boxShadow: "0 24px 50px -22px rgba(20,14,8,0.35)",
                }}
              >
                <Image
                  src={photo(32)}
                  alt="Wedding venue at Raha Resort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pool Parties: reversed two-col */}
      <section
        id="pool-parties"
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "6rem 0" }}
      >
        <div className="container-xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal y={36} className="order-2 lg:order-1">
              <div
                className="relative h-[480px] w-full overflow-hidden"
                style={{
                  boxShadow: "0 24px 50px -22px rgba(20,14,8,0.35)",
                }}
              >
                <Image
                  src={PHOTO_LIB.poolFacadeEvening}
                  alt="Pool party at Raha Resort"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="t-eyebrow">Pool Parties</span>
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
                  Poolside Celebrations
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
                  Transform our stunning pool area into your personal
                  paradise for celebrations. Whether it's a birthday bash,
                  engagement party, or a stylish cocktail reception, our
                  poolside venue offers a unique and unforgettable setting.
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {POOL_PARTY_FEATURES.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[0.98rem]"
                      style={{ color: "var(--color-secondary)" }}
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
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.34}>
                <a
                  href="/contact?topic=pool-party"
                  className="mt-9 inline-flex items-center px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] text-white"
                  style={{ background: "var(--color-primary)" }}
                >
                  Inquire Now
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Events We Host */}
      <section
        id="events-we-host"
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
              <span className="t-eyebrow">Occasions</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[var(--color-secondary)]">
                Events We Host
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EVENT_TYPES.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06} y={28}>
                <article
                  className="flex h-full flex-col bg-white p-8"
                  style={{
                    boxShadow: "0 6px 18px -10px rgba(20,14,8,0.12)",
                  }}
                >
                  <h3
                    className="mb-3 text-[var(--color-secondary)]"
                    style={{
                      fontSize: "1.35rem",
                      fontFamily: "var(--font-heading), Georgia, serif",
                    }}
                  >
                    {e.title}
                  </h3>
                  <p className="t-body-sm text-[var(--color-text-light)]">
                    {e.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section
        id="venues"
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "6rem 0" }}
      >
        <div className="container-xl">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <Reveal>
              <span className="t-eyebrow">Venues</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[var(--color-secondary)]">Our Venues</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Choose from a variety of stunning venues, each offering its
                own unique charm and atmosphere.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {VENUES.map((v, i) => (
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
                      src={v.image}
                      alt={v.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                    <span
                      className="absolute left-5 top-5 inline-flex items-center gap-2 px-4 py-1.5 text-[0.7rem] font-medium uppercase tracking-[2px] text-[var(--color-secondary)]"
                      style={{ background: "rgba(255,255,255,0.94)" }}
                    >
                      <Users size={13} strokeWidth={1.6} />
                      {v.capacity}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3
                      className="mb-3 text-[var(--color-secondary)]"
                      style={{
                        fontSize: "1.4rem",
                        fontFamily: "var(--font-heading), Georgia, serif",
                      }}
                    >
                      {v.title}
                    </h3>
                    <p className="t-body-sm text-[var(--color-text-light)]">
                      {v.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we provide */}
      <section
        id="services"
        data-theme="dark"
        className="theme-dark relative overflow-hidden"
        style={{ padding: "7rem 0" }}
      >
        <Image
          aria-hidden
          src={PHOTO_LIB.lobbyStaircasePalms}
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
              "linear-gradient(180deg, rgba(20,16,12,0.78) 0%, rgba(8,6,4,0.88) 100%)",
          }}
        />
        <div className="container-xl relative z-10">
          <div className="mx-auto mb-14 max-w-[760px] text-center">
            <Reveal>
              <span className="section-subtitle on-dark">Services</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-white">What We Provide</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center on-dark" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto max-w-[600px] text-[1rem] leading-[1.85] text-white/85">
                Our experienced events team is dedicated to making your
                celebration flawless from start to finish. We offer
                comprehensive planning and coordination services to ensure
                every detail is perfect.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06} y={28}>
                <article
                  className="flex h-full flex-col items-center p-7 text-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span
                    className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full"
                    style={{
                      border: "1px solid var(--color-accent)",
                      background: "rgba(201,162,90,0.08)",
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      style={{ color: "var(--color-accent)" }}
                    />
                  </span>
                  <h3
                    className="mb-3 text-white"
                    style={{
                      fontSize: "1.1rem",
                      fontFamily: "var(--font-heading), Georgia, serif",
                    }}
                  >
                    {title}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.65] text-white/85">
                    {body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final reservation row */}
      <section
        id="plan"
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
              <span className="t-eyebrow">Reservation</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="text-[var(--color-secondary)]"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                }}
              >
                Let's Plan Your Event
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                Contact our events team to start planning your perfect
                celebration at Raha Resort. Most enquiries are answered the
                same day. No commitment until you decide.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
                <a
                  href="/contact?topic=events"
                  className="inline-flex items-center justify-center gap-3 px-9 py-4 text-[0.85rem] font-medium uppercase tracking-[3px] text-white hover:-translate-y-0.5"
                  style={{
                    background: "var(--color-primary)",
                    color: "#ffffff",
                    boxShadow: "0 6px 20px rgba(139,115,85,0.25)",
                    lineHeight: 1,
                  }}
                >
                  <Sparkles
                    size={16}
                    strokeWidth={1.6}
                    style={{ color: "#ffffff" }}
                  />
                  <span>Get In Touch</span>
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
                  Or call our events team
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
