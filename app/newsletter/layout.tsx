import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Raha Circle",
  description:
    "Subscribe for quiet seasonal updates and a 10% offer on your first stay at Raha Resort, Jericho.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    title: "The Raha Circle | Raha Resort",
    description:
      "Subscribe for quiet seasonal updates and a 10% offer on your first stay at Raha Resort.",
    url: "/newsletter",
  },
};

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
