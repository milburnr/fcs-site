import type { Metadata } from "next";
import Script from "next/script";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/constants";
import { OrganizationSchema } from "@/components/Schema";
import { PhoneTrackingProvider } from "@/components/PhoneTrackingProvider";
import { ChatWidget } from "@/components/ChatWidget";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

// Load fonts via next/font for automatic optimization (self-hosted, no render-blocking)
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Tampa Commercial Construction | ${BUSINESS_INFO.name}`,
    template: `%s | ${BUSINESS_INFO.shortName}`,
  },
  description:
    "With decades of experience in construction and insurance restoration, both residential and commercial, you can count on Florida Construction Specialists.",
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS_INFO.name,
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <head>
        {/* Hero preload removed — React auto-generates one from fetchPriority="high" on the <img> */}

        {/* Google Analytics 4 — use lazyOnload to avoid preload link that steals hero bandwidth
            afterInteractive generates <link rel="preload"> for GTM (149KB), killing LCP on mobile */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SF1MH0NQ35"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SF1MH0NQ35');
          `}
        </Script>

        <OrganizationSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <PhoneTrackingProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          {/* Sticky mobile CTA - shows after scrolling on mobile devices */}
          <StickyMobileCTA />
        </PhoneTrackingProvider>
        {/* Chat widget - loads after user interaction or 5s delay to preserve TTI */}
        <ChatWidget />
      </body>
    </html>
  );
}
