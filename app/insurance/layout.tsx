import type { Metadata } from "next";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Insurance Restoration Contractor Tampa",
  description: "Tampa Bay's large loss insurance restoration contractor. Prime contractor for $250K-$25M+ claims with certified Xactimate estimating and direct carrier.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/insurance/",
  },
  openGraph: {
    title: "Insurance Restoration Contractor Tampa",
    description: "Tampa Bay's large loss insurance restoration contractor. Prime contractor for $250K-$25M+ claims with certified Xactimate estimating and direct carrier.",
    url: "https://floridaconstructionspecialists.com/insurance/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

export default function InsuranceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}