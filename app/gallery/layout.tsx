import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of Raha Resort, Jericho. Rooms, pool, dining, spa, and the surrounding desert light.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Raha Resort",
    description:
      "Photographs of Raha Resort, Jericho. Rooms, pool, dining, spa, and the surrounding desert light.",
    url: "/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
