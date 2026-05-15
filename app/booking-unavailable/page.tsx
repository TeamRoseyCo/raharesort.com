import Link from "next/link";
import { Phone } from "lucide-react";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Reservations | Raha Resort",
  description: "Please call our reservations team to book your stay.",
};

const RESERVATION_PHONE_DISPLAY = "02-2313333";
const RESERVATION_PHONE_TEL = "0222313333";

const ROOM_LABEL: Record<string, string> = {
  mountain: "Mountain View Room",
  pool: "Pool View Suite",
  deadsea: "Dead Sea View Suite",
  garden: "Garden Terrace Room",
  family: "Family Loft Suite",
  spa: "Signature Spa Suite",
};

function formatDate(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

type SearchParams = Promise<{
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  roomType?: string;
}>;

export default async function BookingUnavailablePage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const params = (await searchParams) ?? {};
  const checkIn = formatDate(params.checkIn);
  const checkOut = formatDate(params.checkOut);
  const guests = params.guests
    ? `${params.guests} ${params.guests === "1" ? "guest" : "guests"}`
    : "";
  const roomType = params.roomType ? ROOM_LABEL[params.roomType] : "";
  const summary = [
    checkIn && `From ${checkIn}`,
    checkOut && `to ${checkOut}`,
    guests,
    roomType,
  ].filter(Boolean) as string[];
  return (
    <main
      data-theme="cream"
      className="theme-cream flex min-h-screen items-center justify-center"
      style={{ background: "var(--color-bg-soft, #f5f1eb)" }}
    >
      <section className="container-xl py-32 text-center">
        <Reveal>
          <span className="section-subtitle">Reservations</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1
            className="mb-3 mt-2 text-[var(--color-secondary)]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
          >
            Online Booking is Not Yet Available
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="title-divider center" />
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-2 max-w-[560px] text-[1.05rem] leading-[1.8] text-[var(--color-text-light)]">
            Our online availability system is currently being prepared. To
            reserve a room or ask about rates, please call our reservations
            team. We are happy to help.
          </p>
        </Reveal>

        {summary.length > 0 ? (
          <Reveal delay={0.22}>
            <div
              className="mx-auto mt-8 max-w-[560px] px-6 py-4 text-[0.92rem]"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <span
                className="block text-[0.7rem] font-medium uppercase"
                style={{
                  color: "var(--color-accent)",
                  letterSpacing: "0.28em",
                  marginBottom: 6,
                }}
              >
                Your Request
              </span>
              <span style={{ color: "var(--color-secondary)" }}>
                {summary.join(" · ")}
              </span>
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={0.26} y={36}>
          <div
            className="mx-auto mt-10 flex max-w-[480px] flex-col items-center gap-3 px-8 py-8"
            style={{
              background: "white",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <Phone
              size={28}
              strokeWidth={1.4}
              style={{ color: "var(--color-primary)" }}
            />
            <span
              className="text-[0.7rem] font-medium uppercase tracking-[2.5px]"
              style={{ color: "var(--color-text-light)" }}
            >
              Reservations
            </span>
            <a
              href={`tel:${RESERVATION_PHONE_TEL}`}
              className="font-[family-name:var(--font-heading)] text-[var(--color-secondary)] hover:opacity-80"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)",
                letterSpacing: "0.02em",
              }}
            >
              {RESERVATION_PHONE_DISPLAY}
            </a>
            <span
              className="mt-1 text-[0.85rem]"
              style={{ color: "var(--color-text-light)" }}
            >
              Daily, 8:00 to 22:00
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="text-[0.9rem] font-medium uppercase tracking-[2px] text-[var(--color-primary)] underline underline-offset-4 hover:opacity-80"
            >
              Contact Page
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
