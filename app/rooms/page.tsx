import Image from "next/image";
import {
  Lock,
  Coffee,
  Wind,
  Wifi,
  ShowerHead,
  BedDouble,
  Tv,
  Snowflake,
  Clock,
  CreditCard,
  Plane,
  CigaretteOff,
  Check,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import Reveal from "../components/Reveal";
import { PHOTO_LIB } from "../lib/photos";

type Room = {
  eyebrow: string;
  title: string;
  body: string;
  features: string[];
  hero: string;
  thumbs: [string, string];
  reverse?: boolean;
  badge?: string;
};

const ROOMS: Room[] = [
  {
    eyebrow: "Mountain View",
    title: "Mountain View Room",
    body:
      "A calm, well-lit room facing the hills. Wake up to soft morning light, sleep through quiet evenings, and step out onto a balcony that's actually built for sitting.",
    features: [
      "Mountain View",
      "King Size Bed",
      "Private Balcony",
      "En-suite Bathroom",
      "Free WiFi",
      "Flat Screen TV",
    ],
    hero: PHOTO_LIB.roomKingCurtain,
    thumbs: [PHOTO_LIB.roomBalconyResort, PHOTO_LIB.poolLoungersPalms],
  },
  {
    eyebrow: "Pool View",
    title: "Pool View Suite",
    body:
      "Our most-requested layout. A separate sitting area, direct sightlines to the pool deck, and a bathroom you'll want to take pictures of (please don't, but you can).",
    features: [
      "Pool View",
      "King Size Bed",
      "Separate Living Area",
      "Luxury Bathroom",
      "Premium Minibar",
      "Room Service",
    ],
    hero: PHOTO_LIB.roomBalconyPool,
    thumbs: [PHOTO_LIB.poolLoungersBonsai, PHOTO_LIB.poolDusk],
    reverse: true,
    badge: "Most Popular",
  },
  {
    eyebrow: "Resort View",
    title: "Resort View Suite",
    body:
      "Our larger suite, with a separate living room and a panoramic balcony view across the property. Built for longer stays and slow mornings.",
    features: [
      "Resort & Pool View",
      "Separate Living Room",
      "King Size Bed",
      "Marble Bathroom",
      "Bespoke Service",
      "Premium Bedding",
    ],
    hero: PHOTO_LIB.roomReadingChair,
    thumbs: [PHOTO_LIB.bathroomVanity, PHOTO_LIB.lobbyLeather],
  },
];

const QUICK_LINKS = [
  { href: "/booking-unavailable", label: "Book your spot" },
  { href: "#amenities", label: "Amenities" },
  { href: "#policies", label: "Policies" },
  { href: "/services", label: "Experiences" },
];

const AMENITY_ICONS = [
  { Icon: Lock, label: "In-Room Safe" },
  { Icon: Coffee, label: "Tea & Coffee" },
  { Icon: Wind, label: "Hair Dryer" },
  { Icon: Tv, label: "Flat-Screen TV" },
  { Icon: BedDouble, label: "Premium Bedding" },
  { Icon: Snowflake, label: "Air Conditioning" },
  { Icon: Wifi, label: "Free WiFi" },
  { Icon: ShowerHead, label: "Rainfall Shower" },
];

const POLICIES = [
  {
    Icon: Clock,
    title: "Check-in from 3pm · Check-out by 12pm",
    body:
      "Early check-in or late checkout when you need it most. Our team will do their best to accommodate based on availability.",
  },
  {
    Icon: CreditCard,
    title: "Credit Cards",
    body:
      "We accept all major credit cards. Your reservation is securely guaranteed at the time of booking.",
  },
  {
    Icon: Plane,
    title: "Family Plan",
    body:
      "Children are welcome. Families are welcome. If you're traveling with someone whose comfort matters to you, let us know ahead so we can prepare the room.",
  },
  {
    Icon: CigaretteOff,
    title: "Smoking",
    body: "All rooms are non-smoking.",
  },
];

export default function RoomsPage() {
  return (
    <main>
      <PageHeader
        title="Your Room at Raha"
        bg={PHOTO_LIB.roomKingCurtain}
        crumbs={[{ href: "/", label: "Home" }, { label: "Rooms" }]}
      />

      {/* Lead block: flourish + tight body line. */}
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
            <p className="mx-auto max-w-[680px] text-center t-body text-[var(--color-text-light)]">
              Quiet rooms, soft linens, and a balcony you actually want to
              sit on. Each one is private, well-kept, and ready before you
              arrive, so the first thing you do at Raha is exhale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Section intro: standard four-part header, then a clean centered row
          of anchor links separated by hairline dots. One elegant block, no
          sticky-bar feel. */}
      <section
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "5.5rem 0",
        }}
      >
        <div className="container-xl">
          <div className="mx-auto max-w-[760px] text-center">
            <Reveal>
              <span className="t-eyebrow">Accommodation</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-[var(--color-secondary)]">
                Your Perfect Retreat
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="t-body text-[var(--color-text-light)]">
                A small selection of rooms and suites, each one quiet,
                private, and put together with care. Pick the view that fits
                the trip and the room that matches the kind of week you're
                hoping to have.
              </p>
            </Reveal>
            <Reveal delay={0.26} style={{ marginTop: "2rem" }}>
              <ul
                className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3"
              >
                {QUICK_LINKS.map((l, i) => (
                  <Reveal
                    key={l.label}
                    as="li"
                    delay={0.34 + i * 0.06}
                    y={14}
                    className="flex items-center gap-3"
                  >
                    <a
                      href={l.href}
                      className="text-[0.78rem] font-semibold uppercase tracking-[2.5px]"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {l.label}
                    </a>
                    {i < QUICK_LINKS.length - 1 ? (
                      <span
                        aria-hidden
                        className="block h-1 w-1 rounded-full"
                        style={{ background: "var(--color-accent)" }}
                      />
                    ) : null}
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Room tiles, image triptych on one side, copy + features on the other.
          Alternates sides; second tile carries the "Most Popular" badge. */}
      {ROOMS.map((room, i) => (
        <RoomTile
          key={room.title}
          room={room}
          theme={i % 2 === 0 ? "light" : "cream"}
        />
      ))}

      {/* Quote band: dark photo background, big serif headline, divider, body. */}
      <section
        id="experience"
        data-theme="dark"
        className="theme-dark relative overflow-hidden text-center text-white"
        style={{ padding: "7rem 0" }}
      >
        <Image
          aria-hidden
          src={PHOTO_LIB.roomBalconyPool}
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
              "linear-gradient(180deg, rgba(20,16,12,0.72) 0%, rgba(20,16,12,0.78) 100%)",
          }}
        />
        <div className="container-xl relative z-10">
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <h2
                className="text-white"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  letterSpacing: "0.005em",
                }}
              >
                What Makes a Room Feel Like Yours.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="title-divider center on-dark" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto max-w-[680px] text-[1.05rem] leading-[1.85] text-white/85">
                The cool air when you open the door. Sheets that smell clean.
                A room quiet enough to hear yourself think. The little things
                we get right so the rest of your stay feels easy.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mx-auto mt-5 max-w-[600px] text-[1rem] text-white/75">
                A space built for privacy, comfort, and consistency. Every
                single stay.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* In-room amenities: dark photo background, eyebrow + heading + divider
          + body, then a 2-row icon grid, then an outline CTA. */}
      <section
        id="amenities"
        data-theme="dark"
        className="theme-dark relative overflow-hidden text-center text-white"
        style={{ padding: "6rem 0" }}
      >
        <Image
          aria-hidden
          src={PHOTO_LIB.roomReadingChair}
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
              "linear-gradient(180deg, rgba(18,22,30,0.85) 0%, rgba(12,16,22,0.92) 100%)",
          }}
        />
        <div className="container-xl relative z-10">
          <Reveal>
            <span className="section-subtitle on-dark">Comfort & Luxury</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-white">In-Room Amenities</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="title-divider center on-dark" />
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mx-auto max-w-[520px] t-body text-white/85">
              Everything you'd expect, picked carefully and replaced often.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-[920px] grid-cols-2 gap-y-12 sm:grid-cols-4">
            {AMENITY_ICONS.map(({ Icon, label }, idx) => (
              <Reveal key={label} delay={idx * 0.04}>
                <div className="flex flex-col items-center gap-3">
                  <Icon
                    size={34}
                    strokeWidth={1.2}
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span className="text-[0.95rem] text-white/90">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <a
              href="/services"
              className="mt-12 inline-flex items-center justify-center border border-white/60 px-9 py-3.5 text-[0.85rem] font-medium uppercase tracking-[3px] text-white hover:border-white"
            >
              Explore All Amenities
            </a>
          </Reveal>
        </div>
      </section>

      {/* Policies: two-column section. Left has eyebrow/heading/divider/body;
          right has icon-headed items separated by hairline rules. */}
      <section
        id="policies"
        data-theme="light"
        className="theme-light bg-white"
        style={{ padding: "6rem 0" }}
      >
        <div className="container-xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Reveal>
                <span className="t-eyebrow">Information</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="text-[var(--color-secondary)]">Policies</h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="title-divider" />
              </Reveal>
              <Reveal delay={0.18}>
                <p className="t-body text-[var(--color-text-light)]">
                  The small details that make arrival, stay, and check-out
                  feel calm.
                </p>
              </Reveal>
            </div>

            <ul className="flex flex-col">
              {POLICIES.map(({ Icon, title, body }, idx) => (
                <Reveal key={title} delay={idx * 0.06}>
                  <li
                    className="flex items-start gap-5 py-7"
                    style={{
                      borderBottom: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.4}
                      style={{
                        color: "var(--color-secondary)",
                        marginTop: 4,
                      }}
                    />
                    <div>
                      <h3
                        className="mb-2 text-[var(--color-secondary)]"
                        style={{
                          fontSize: "1.1rem",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          fontFamily:
                            "var(--font-heading), Georgia, serif",
                        }}
                      >
                        {title}
                      </h3>
                      <p className="t-body-sm text-[var(--color-text-light)]">
                        {body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}

function RoomTile({
  room,
  theme,
}: {
  room: Room;
  theme: "light" | "cream";
}) {
  const bg =
    theme === "cream"
      ? "var(--color-bg-soft, #f5f1eb)"
      : "#ffffff";
  return (
    <section
      data-theme={theme}
      className={`theme-${theme}`}
      style={{ background: bg, padding: "5rem 0" }}
    >
      <div className="container-xl">
        <div
          className={`grid items-start gap-10 lg:gap-16 ${
            room.reverse ? "lg:grid-cols-[1fr_1fr]" : "lg:grid-cols-[1fr_1fr]"
          }`}
        >
          <div
            className={`order-2 flex flex-col gap-4 ${
              room.reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <Reveal y={36}>
              <div className="relative h-[420px] w-full overflow-hidden">
                <Image
                  src={room.hero}
                  alt={room.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]"
                />
                {room.badge ? (
                  <Reveal delay={0.3} y={12}>
                    <span
                      className="absolute right-6 top-6 px-5 py-2 text-[0.78rem] font-medium uppercase tracking-[2.5px] text-white"
                      style={{ background: "var(--color-accent)" }}
                    >
                      {room.badge}
                    </span>
                  </Reveal>
                ) : null}
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {room.thumbs.map((src, idx) => (
                <Reveal key={idx} delay={0.12 + idx * 0.08} y={28}>
                  <div className="relative h-[180px] w-full overflow-hidden">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.05]"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div
            className={`order-1 flex flex-col justify-center ${
              room.reverse ? "lg:order-2" : "lg:order-1"
            } lg:pl-2`}
          >
            <Reveal>
              <span className="t-eyebrow">{room.eyebrow}</span>
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
                {room.title}
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
                {room.body}
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-10">
                <p
                  className="mb-5 text-[1rem] font-bold"
                  style={{ color: "var(--color-secondary)" }}
                >
                  Room Features
                </p>
                <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-10">
                  {room.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-4 text-[1rem]"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      <Check
                        size={20}
                        strokeWidth={2}
                        style={{ color: "var(--color-accent)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.34}>
              <a
                href="/booking-unavailable"
                className="mt-10 inline-flex w-fit items-center justify-center px-7 py-3 text-[0.9rem] font-normal uppercase tracking-[2.4px] hover:-translate-y-0.5"
                style={{
                  background: "var(--color-primary)",
                  color: "#ffffff",
                  fontFamily: "var(--font-heading), Georgia, serif",
                  boxShadow: "0 6px 20px rgba(139,115,85,0.25)",
                }}
              >
                Book This Room
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
