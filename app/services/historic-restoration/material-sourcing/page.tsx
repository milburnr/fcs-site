import type { Metadata } from "next";
import MaterialSourcingClient from "./MaterialSourcingClient";

export const metadata: Metadata = {
  title: "Historic Material Sourcing Tampa | FCS",
  description: "Authentic historic building materials in Tampa Bay. Period brick, heart pine, lime mortars, and architectural hardware. 40+ years restoration expertise.",
  alternates: { canonical: "https://floridaconstructionspecialists.com/services/historic-restoration/material-sourcing/" },
};

export default function MaterialSourcingPage() {
  return <MaterialSourcingClient />;
}
