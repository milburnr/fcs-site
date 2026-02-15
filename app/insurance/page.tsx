import { Metadata } from "next";
import { InsurancePageClient } from "./InsurancePageClient";

export const metadata: Metadata = {
  title: "Insurance Restoration Services Tampa | FCS",
  description: "Large loss insurance restoration in Tampa Bay. Prime contractor for commercial and residential claims $250K+. Certified estimates and direct carrier negotiation.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/insurance/",
  },
  keywords: [
    "insurance restoration Tampa",
    "large loss insurance claims",
    "Tampa insurance contractor",
    "commercial insurance restoration",
    "Xactimate estimating",
    "insurance claim contractor",
  ],
};

export default function InsurancePage() {
  return <InsurancePageClient />;
}
