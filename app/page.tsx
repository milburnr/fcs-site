import { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "Tampa Commercial Construction | Florida Construction Specialists",
  description: "Tampa Bay's premier large-scale construction specialists. Commercial, residential, and insurance restoration projects from $500K to $25M+. Call (813) 420-7561.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
