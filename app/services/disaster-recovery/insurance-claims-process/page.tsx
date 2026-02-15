import type { Metadata } from "next";
import InsuranceClaimsClient from "./InsuranceClaimsClient";

export const metadata: Metadata = {
  title: "Insurance Claims Process Tampa | FCS",
  description: "Expert insurance claims support in Tampa Bay. Xactimate certified estimates, adjuster meetings, and supplement claims. 40+ years experience. Call (813) 420-7561.",
  alternates: { canonical: "https://floridaconstructionspecialists.com/services/disaster-recovery/insurance-claims-process/" },
};

export default function InsuranceClaimsPage() {
  return <InsuranceClaimsClient />;
}
