import { Metadata } from "next";
import { InsurancePageClient } from "./InsurancePageClient";

export const metadata: Metadata = {
  title: "Insurance Restoration Services Tampa | FCS",
  description: "Large loss insurance restoration in Tampa Bay. Prime contractor for commercial and residential claims $250K+. Certified estimates and direct carrier negotiation.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/insurance/",
  },
};

export default function InsurancePage() {
  return <InsurancePageClient />;
}
