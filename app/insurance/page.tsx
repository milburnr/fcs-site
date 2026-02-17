import { Metadata } from "next";
import { InsurancePageClient } from "./InsurancePageClient";

export const metadata: Metadata = {
  title: "Insurance Restoration Contractor Tampa | Large Loss Specialists | FCS",
  description: "Tampa Bay's large loss insurance restoration contractor. Prime contractor for $250K-$25M+ claims with certified Xactimate estimating and direct carrier negotiation. Request a claims consultation.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/insurance/",
  },
};

export default function InsurancePage() {
  return <InsurancePageClient />;
}
