import type { Metadata } from "next";
import ShpoComplianceClient from "./ShpoComplianceClient";

export const metadata: Metadata = {
  title: "SHPO Compliance Services Tampa | FCS",
  description: "Florida SHPO compliance for historic projects in Tampa Bay. Secretary of Interior Standards, National Register coordination. Expert consultation available.",
  alternates: { canonical: "https://floridaconstructionspecialists.com/services/historic-restoration/shpo-compliance/" },
};

export default function ShpoCompliancePage() {
  return <ShpoComplianceClient />;
}
