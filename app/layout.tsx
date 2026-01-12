import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";

import CookieBanner from "./components/cookies/cookiebanner";
import CookieButton from "./components/cookies/cookiebutton";
import AnalyticsLoader from "./components/cookies/analyticsloader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export const viewport = {
  themeColor: "#1B123A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gasamare.es"),
  title: "GASAMARE GESTIÓN | La gestión de tu empresa en las mejores manos",
  description:
    "Gestoría profesional para autónomos y empresas. Fiscal, contable y laboral con un trato cercano y soluciones claras.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://gasamare.es",
    siteName: "Gasamare Gestión",
    title: "GASAMARE GESTIÓN | La gestión de tu empresa en las mejores manos",
    description:
      "Gestoría profesional para autónomos y empresas. Fiscal, contable y laboral con un trato cercano y soluciones claras.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gasamare Gestión",
      },
    ],
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "GASAMARE GESTIÓN | La gestión de tu empresa en las mejores manos",
    description:
      "Gestoría profesional para autónomos y empresas. Fiscal, contable y laboral con un trato cercano y soluciones claras.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${openSans.variable}`}>
      <body className="font-body overflow-x-hidden">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />

        <CookieBanner />
        <CookieButton />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
