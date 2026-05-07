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
  title: "Raha Resort | A Premium Oasis in Jericho",
  description:
    "An oasis in Jericho, the place where you feel premium in.",
  openGraph: {
    title: "Raha Resort | A Premium Oasis in Jericho",
    description:
      "An oasis in Jericho, the place where you feel premium in.",
    type: "website",
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
