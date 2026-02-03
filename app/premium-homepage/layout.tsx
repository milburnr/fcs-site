import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Homepage | Florida Construction Specialists",
  description: "Alternative homepage design for Florida Construction Specialists.",
  robots: "noindex, nofollow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
