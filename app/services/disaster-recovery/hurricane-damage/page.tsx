import type { Metadata } from "next";
import HurricaneDamageClient from "./HurricaneDamageClient";

export const metadata: Metadata = {
  title: "Hurricane Damage Restoration Tampa | FCS",
  description: "Professional hurricane damage restoration in Tampa Bay. Emergency storm response, structural repairs, and insurance claims support. Call (813) 420-7561.",
  alternates: { canonical: "https://floridaconstructionspecialists.com/services/disaster-recovery/hurricane-damage/" },
};

export default function HurricaneDamagePage() {
  return <HurricaneDamageClient />;
}
