import type { Metadata } from "next";
import HistoricTaxCreditsClient from "./HistoricTaxCreditsClient";

export const metadata: Metadata = {
  title: "Historic Tax Credits Florida | FCS",
  description: "Federal and Florida Historic Tax Credit expertise. Up to 40% rehabilitation costs returned. SHPO coordination and application preparation. Tampa Bay specialists.",
  alternates: { canonical: "https://floridaconstructionspecialists.com/services/historic-restoration/historic-tax-credits/" },
};

export default function HistoricTaxCreditsPage() {
  return <HistoricTaxCreditsClient />;
}
