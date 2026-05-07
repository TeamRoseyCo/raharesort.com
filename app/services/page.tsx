import Image from "next/image";
import {
  Building2,
  Heart,
  Coffee,
  UserRound,
  Star,
} from "lucide-react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/sections/Footer";
import Cta from "../components/sections/Cta";
import Reveal from "../components/Reveal";
import { PHOTO_LIB } from "../lib/photos";

type IconType = typeof Building2;

const FACILITIES: { Icon: IconType; title: string; items: string[] }[] = [
  {
    Icon: Building2,
    title: "Resort & Views",
    items: [
      "Mountain View",
      "Pool View",
      "Dead Sea View",
      "Breakfast Area",
      "Working Room and Lounge Area",
    ],
  },
  {
    Icon: Coffee,
    title: "Room Comfort",
    items: [
      "Room Safe",
      "Minibar",
      "Tea & Coffee Maker",
      "Flat Screen",
      "Premium Bathroom",
      "Free WiFi, and list goes on!",
    ],
  },
  {
    Icon: Heart,
    title: "Relaxation & Leisure",
    items: [
      "Spa & Massage Center",
      "Outdoor Pool",
      "Fitness Center / Gym",
      "Dining",
    ],
  },
  {
    Icon: UserRound,
    title: "Guest Service",
    items: [
      "24-hour Reception",
      "Daily Housekeeping",
      "Room Service",
      "Concierge Assistance",
      "Laundry & Ironing on Request",
    ],
  },
  {
    Icon: Star,
    title: "Experience",
    items: [
      "Airport & City Transfers",
      "Private Tours",
      "Private Events & Celebrations",
    ],
  },
];

const GUEST_SERVICES = [
  {
    n: "01",
    title: "24-Hour Reception",
    body: "Our dedicated team is available around the clock to assist with all your needs, ensuring a seamless experience from check-in to check-out.",
  },
  {
    n: "02",
    title: "Daily Housekeeping",
    body: "Enjoy a pristine room every day with our professional housekeeping service, maintaining the highest standards of cleanliness and comfort.",
  },
  {
    n: "03",
    title: "Concierge Assistance",
    body: "From restaurant reservations to private tours, our concierge team is on hand to plan, book, and adjust the details around your stay.",
  },
  {
    n: "04",
    title: "Room Service",
    body: "Order off the kitchen menu without leaving your room. Plates arrive plated, drinks arrive cold, and the team checks in once before fully closing the loop.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Amenities & Services"
        bg={PHOTO_LIB.lobbyStaircasePalms}
        crumbs={[
          { href: "/", label: "Home" },
          { label: "Amenities" },
        ]}
      />

      {/* Lead block: white background, flourish + body. */}
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
              Everything around the property has been thought through, from the
              first cup of coffee in the morning to the last cabana drink at
              night. The list below is what you can expect.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WORLD-CLASS FACILITIES — bright cream theme with white cards and
          gold-tinted medallion icons. */}
      <section
        id="facilities"
        data-theme="cream"
        className="theme-cream"
        style={{
          background: "var(--color-bg-soft, #f5f1eb)",
          padding: "6rem 0 7rem",
        }}
      >
        <div className="container-xl">
          <div className="mx-auto mb-14 max-w-[820px] text-center">
            <Reveal>
              <span className="t-eyebrow">At Your Service</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="text-[var(--color-secondary)]"
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  fontWeight: 500,
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  lineHeight: 1.05,
                }}
              >
                World-Class Facilities
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto max-w-[600px] text-[1rem] leading-[1.85] text-[var(--color-text-light)]">
                Raha Resort combines natural beauty with modern comfort. From
                breathtaking mountain and pool views to refined in-room
                amenities, every space is designed for relaxation and ease.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map(({ Icon, title, items }, i) => (
              <Reveal key={title} delay={i * 0.06} y={28}>
                <article
                  className="flex h-full flex-col bg-white p-8"
                  style={{
                    boxShadow: "0 6px 18px -10px rgba(20,14,8,0.12)",
                  }}
                >
                  <span
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(212,193,154,0.25)",
                    }}
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.4}
                      style={{ color: "var(--color-primary)" }}
                    />
                  </span>
                  <h3
                    className="mb-5 text-[var(--color-secondary)]"
                    style={{
                      fontSize: "1.35rem",
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

      {/* AT YOUR SERVICE, sky-blue photo backdrop, big serif heading,
          numbered cards in a 2-column grid. */}
      <section
        id="guest-service"
        data-theme="dark"
        className="theme-dark relative overflow-hidden"
        style={{ padding: "7rem 0" }}
      >
        <Image
          aria-hidden
          src={PHOTO_LIB.poolFacadeBackdrop}
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
              "linear-gradient(180deg, rgba(28,40,68,0.52) 0%, rgba(16,22,38,0.72) 100%)",
          }}
        />

        <div className="container-xl relative z-10">
          <div className="mx-auto mb-14 max-w-[820px] text-center">
            <Reveal>
              <span className="section-subtitle on-dark">Guest Service</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2
                className="text-white"
                style={{
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  fontWeight: 500,
                  fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                  lineHeight: 1.05,
                }}
              >
                At Your Service
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="title-divider on-dark center" />
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mx-auto max-w-[600px] text-[1rem] leading-[1.85] text-white/85">
                Every detail of your stay is taken care of with our
                comprehensive guest services.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {GUEST_SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06} y={28}>
                <article
                  className="flex h-full items-start gap-6 p-8"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <span
                    className="flex-shrink-0"
                    style={{
                      color: "var(--color-accent)",
                      fontFamily: "var(--font-heading), Georgia, serif",
                      fontSize: "2.2rem",
                      lineHeight: 1,
                    }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3
                      className="mb-3 text-white"
                      style={{
                        fontSize: "1.25rem",
                        fontFamily: "var(--font-heading), Georgia, serif",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-[0.95rem] leading-[1.7] text-white/85">
                      {s.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </main>
  );
}
