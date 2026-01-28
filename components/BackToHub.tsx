"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackToHubProps {
  silo: "commercial" | "residential";
  customHubTitle?: string;
  customHubHref?: string;
}

export function BackToHub({ silo, customHubTitle, customHubHref }: BackToHubProps) {
  const isCommercial = silo === "commercial";

  const hubConfig = {
    commercial: {
      title: "Commercial Services",
      href: "/commercial/",
    },
    residential: {
      title: "Residential Services",
      href: "/residential/",
    },
  };

  const hub = {
    title: customHubTitle || hubConfig[silo].title,
    href: customHubHref || hubConfig[silo].href,
  };

  return (
    <Link
      href={hub.href}
      className={`group mb-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
        isCommercial
          ? "text-brand-green hover:text-brand-green-dark"
          : "text-brand-gold hover:text-brand-gold-dark"
      }`}
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      Back to {hub.title}
    </Link>
  );
}

export default BackToHub;
