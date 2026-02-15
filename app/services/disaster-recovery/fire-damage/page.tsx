import type { Metadata } from "next";
import FireDamageClient from "./FireDamageClient";

export const metadata: Metadata = {
  title: "Fire Damage Restoration Tampa Bay | FCS",
  description: "Complete fire damage restoration in Tampa Bay. Smoke remediation, structural repairs, content cleaning, and full reconstruction. Call (813) 420-7561.",
  alternates: { canonical: "https://floridaconstructionspecialists.com/services/disaster-recovery/fire-damage/" },
};

export default function FireDamagePage() {
  return <FireDamageClient />;
}
