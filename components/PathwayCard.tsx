"use client";

import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";

interface PathwayCardProps {
  type: "commercial" | "residential";
  title: string;
  subtitle: string;
  projectRange: string;
  features: string[];
  href: string;
  ctaText: string;
  backgroundImage?: string;
}

export function PathwayCard({
  type,
  title,
  subtitle,
  projectRange,
  features,
  href,
  ctaText,
  backgroundImage,
}: PathwayCardProps) {
  const isCommercial = type === "commercial";
  const Icon = isCommercial ? Building2 : Home;

  return (
    <Link
      href={href}
      className="group block relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] text-white"
    >
      {/* Background image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Color overlay */}
      <div className={`absolute inset-0 ${
        isCommercial
          ? "bg-gradient-to-br from-brand-green-dark/85 via-brand-green-forest/80 to-brand-green-dark/90"
          : "bg-gradient-to-br from-brand-gold/85 via-brand-gold-dark/80 to-brand-gold/90"
      }`} />

      <div className="relative z-10">
        {/* Icon and badge */}
        <div className="mb-6 flex items-center gap-3">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-xl ${
              isCommercial ? "bg-white/20" : "bg-white/25"
            }`}
          >
            <Icon className="h-7 w-7" />
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
              isCommercial ? "bg-brand-green/50" : "bg-white/25"
            }`}
          >
            {isCommercial ? "B2B" : "B2C"}
          </span>
        </div>

        {/* Title and subtitle */}
        <h3 className="mb-2 text-2xl font-bold font-heading md:text-3xl">
          {title}
        </h3>
        <p className="mb-4 text-lg opacity-90">{subtitle}</p>

        {/* Project range */}
        <div className="mb-6 inline-block rounded-lg bg-white/15 px-4 py-2">
          <span className="text-sm font-medium">Projects: </span>
          <span className="font-bold">{projectRange}</span>
        </div>

        {/* Features list */}
        <ul className="mb-8 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm opacity-90">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA button - styled as button since parent is already a link */}
        <span
          className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition-all duration-300 ${
            isCommercial
              ? "bg-white text-brand-green-dark group-hover:bg-brand-gold group-hover:text-white"
              : "bg-brand-green-dark text-white group-hover:bg-brand-green"
          }`}
        >
          {ctaText}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default PathwayCard;
