import type { Metadata } from "next";
import { Inter, Archivo_Black, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import AppOverlays from "@/components/app-overlays";
import { Providers } from "@/components/providers";
import SmoothScroll from "@/components/smooth-scroll";

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author, url: config.site }],
  creator: config.author,
  alternates: { canonical: "/" },
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    siteName: config.author,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    creator: "@Sebasbecerrax",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        inter.variable,
        archivoBlack.variable,
        jetbrainsMono.variable,
        // Body copy is Inter. `font-display` is opt-in, per element. Applying it
        // here set every paragraph on the site in Archivo Black.
        "font-sans",
      ].join(" ")}
      suppressHydrationWarning
    >
      <head>
        {process.env.UMAMI_DOMAIN && (
          <Script
            defer
            src={process.env.UMAMI_DOMAIN}
            data-website-id={process.env.UMAMI_SITE_ID}
          />
        )}
      </head>
      <body>
        <Providers>
          {/* Lenis lives at the layout level, not inside the page, so the header
              and footer can resolve the instance via `useLenis()`. In-page nav
              links have to scroll through Lenis or they don't move at all. */}
          <SmoothScroll>
            <Header />
            {children}
            <Footer />
          </SmoothScroll>
          <AppOverlays />
        </Providers>
      </body>
    </html>
  );
}
