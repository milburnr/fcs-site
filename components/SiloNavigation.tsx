"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SiloLink {
  title: string;
  href: string;
  isActive?: boolean;
}

interface SiloNavigationProps {
  silo: "commercial" | "residential";
  currentPage?: string;
  links: SiloLink[];
  hubTitle?: string;
  hubHref?: string;
}

export function SiloNavigation({
  silo,
  currentPage,
  links,
  hubTitle,
  hubHref,
}: SiloNavigationProps) {
  const isCommercial = silo === "commercial";

  const defaultHub = isCommercial
    ? { title: "Commercial Services", href: "/commercial/" }
    : { title: "Residential Services", href: "/residential/" };

  const hub = hubTitle && hubHref ? { title: hubTitle, href: hubHref } : defaultHub;

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div
        className={`rounded-xl border p-6 ${
          isCommercial
            ? "border-brand-green/20 bg-brand-green-bg"
            : "border-brand-gold/20 bg-brand-gold-bg"
        }`}
      >
        {/* Hub link */}
        <Link
          href={hub.href}
          className={`mb-4 flex items-center gap-2 text-sm font-bold transition-colors ${
            isCommercial
              ? "text-brand-green-dark hover:text-brand-green"
              : "text-brand-gold-dark hover:text-brand-gold"
          }`}
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
          {hub.title}
        </Link>

        {/* Silo heading */}
        <h4
          className={`mb-4 text-xs font-bold uppercase tracking-wider ${
            isCommercial ? "text-brand-green-dark/60" : "text-brand-gold-dark/60"
          }`}
        >
          Related in {isCommercial ? "Commercial" : "Residential"}
        </h4>

        {/* Links */}
        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = link.isActive || link.href === currentPage;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-lg px-3 py-2 text-sm transition-all ${
                  isActive
                    ? isCommercial
                      ? "bg-brand-green text-white font-semibold"
                      : "bg-brand-gold text-white font-semibold"
                    : isCommercial
                    ? "text-gray-700 hover:bg-brand-green/10 hover:text-brand-green-dark"
                    : "text-gray-700 hover:bg-brand-gold/10 hover:text-brand-gold-dark"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default SiloNavigation;
