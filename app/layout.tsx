import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/Schema";
import { PhoneTrackingProvider } from "@/components/PhoneTrackingProvider";
import { ChatWidget } from "@/components/ChatWidget";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export const metadata: Metadata = {
  title: {
    default: `Tampa Commercial Construction | ${BUSINESS_INFO.name}`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    "With decades of experience in construction and insurance restoration, both residential and commercial, you can count on Florida Construction Specialists.",
  keywords: [
    "Tampa commercial construction",
    "Florida construction",
    "balcony reconstruction",
    "historic restoration",
    "exterior waterproofing",
    "Tampa contractor",
  ],
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload LCP hero image for faster rendering */}
        <link
          rel="preload"
          as="image"
          href="/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp"
          type="image/webp"
        />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SF1MH0NQ35"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SF1MH0NQ35');
          `}
        </Script>

        {/* Preconnect to third-party domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://widgets.leadconnectorhq.com" />
        <link rel="preconnect" href="https://link.trustbasedseo.com" />

        {/* Google Fonts - loaded with display=swap for non-blocking */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&family=Roboto+Slab:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <LocalBusinessSchema />
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
