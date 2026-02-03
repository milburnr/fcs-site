import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHPO Compliance Tampa | Historic Preservation Standards",
  description: "Expert guidance on State Historic Preservation Office compliance. Secretary of Interior Standards, documentation requirements, and approval processes for Tampa Bay historic projects.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
