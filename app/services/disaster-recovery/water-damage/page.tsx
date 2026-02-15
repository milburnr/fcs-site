import type { Metadata } from "next";
import WaterDamageClient from "./WaterDamageClient";

export const metadata: Metadata = {
  title: "Water Damage Restoration Tampa | FCS",
  description: "Fast water damage restoration in Tampa Bay. Emergency extraction, structural drying, mold prevention, and insurance claims assistance. Call (813) 420-7561.",
  alternates: { canonical: "https://floridaconstructionspecialists.com/services/disaster-recovery/water-damage/" },
};

export default function WaterDamagePage() {
  return <WaterDamageClient />;
}
