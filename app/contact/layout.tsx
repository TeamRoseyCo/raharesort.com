import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Raha Resort, Jericho. Reservations, concierge, group inquiries, and general questions.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Raha Resort",
    description:
      "Get in touch with Raha Resort, Jericho. Reservations, concierge, group inquiries, and general questions.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
