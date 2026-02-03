import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historic Material Sourcing Tampa | Period-Accurate Materials",
  description: "Expert sourcing of period-accurate materials for historic restoration. Salvage networks, custom millwork, and authentic reproductions. Preserving Tampa Bay's architectural heritage.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
