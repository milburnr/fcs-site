import { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "Tampa Commercial Construction",
  description: "Tampa Bay's premier large-scale construction specialists. Commercial, residential, and insurance restoration projects from $500K to $25M+.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/",
  },
  openGraph: {
    title: "Tampa Commercial Construction",
    description: "Tampa Bay's premier large-scale construction specialists. Commercial, residential, and insurance restoration projects from $500K to $25M+.",
    url: "https://floridaconstructionspecialists.com/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
