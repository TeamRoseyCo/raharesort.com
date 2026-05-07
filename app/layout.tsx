import type { Metadata } from "next";
import { Montserrat, Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import ThemeWatcher from "./components/ThemeWatcher";
import RouteScrollReset from "./components/RouteScrollReset";

const goudy = localFont({
  src: "./fonts/Goudy-Regular.otf",
  variable: "--font-goudy",
  weight: "400",
  style: "normal",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raharesort.com"),
  title: {
    default: "Raha Resort | A Premium Oasis in Jericho",
    template: "%s | Raha Resort",
  },
  description:
    "All-inclusive luxury resort in Jericho. Refined amenities, breathtaking views, and a warm Raha welcome.",
  applicationName: "Raha Resort",
  authors: [{ name: "Raha Resort" }],
  keywords: [
    "Raha Resort",
    "Jericho hotel",
    "luxury resort Jericho",
    "Dead Sea hotel",
    "Palestine resort",
    "Jericho spa",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Raha Resort | A Premium Oasis in Jericho",
    description:
      "All-inclusive luxury resort in Jericho. Refined amenities, breathtaking views, and a warm Raha welcome.",
    url: "https://raharesort.com",
    siteName: "Raha Resort",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raha Resort, Jericho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raha Resort | A Premium Oasis in Jericho",
    description:
      "All-inclusive luxury resort in Jericho. Refined amenities, breathtaking views, and a warm Raha welcome.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${goudy.variable} ${montserrat.variable} ${inter.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Resort",
              name: "Raha Resort",
              url: "https://raharesort.com",
              description:
                "All-inclusive luxury resort in Jericho. Refined amenities, breathtaking views, and a warm Raha welcome.",
              image: "https://raharesort.com/og-image.jpg",
              logo: "https://raharesort.com/icon.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jericho",
                addressRegion: "West Bank",
                addressCountry: "PS",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 31.857,
                longitude: 35.460,
              },
              priceRange: "$$$",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Heated outdoor pool", value: true },
                { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
                { "@type": "LocationFeatureSpecification", name: "Fitness centre", value: true },
                { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
                { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
                { "@type": "LocationFeatureSpecification", name: "Airport transfer", value: true },
                { "@type": "LocationFeatureSpecification", name: "24/7 reception", value: true },
              ],
              creator: {
                "@type": "Organization",
                name: "RoseyCo",
                url: "https://roseyco.com",
              },
            }),
          }}
        />
        <SmoothScroll>
          <ThemeWatcher>
            <RouteScrollReset />
            <Header />
            {children}
          </ThemeWatcher>
        </SmoothScroll>
      </body>
    </html>
  );
}
