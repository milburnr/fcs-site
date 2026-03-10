import { Metadata } from "next";
import { Shield, Award, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { HeroSlideshow } from "./HeroSlideshow";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "Tampa Commercial Construction",
  description: "Tampa Bay's premier large-scale construction specialists. Commercial, residential, and insurance restoration projects from $500K to $25M+.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/",
  },
  openGraph: {
    title: "Tampa Commercial Construction",
    description: "Tampa Bay's premier large-scale construction specialists. Commercial, residential, and insurance restoration projects from $500K to $25M+.",
    url: "https://floridaconstructionspecialists.com/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

// Hero images served from git (public/hero/) for same-origin Netlify CDN delivery
const heroSmall = "/hero/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-small.webp";
const heroMedium = "/hero/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-medium.webp";
const heroLarge = "/hero/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp";
const heroXl = "/hero/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-xl.webp";

export default function HomePage() {
  return (
    <>
      {/* Trust Bar - Server-rendered for instant paint */}
      <section className="bg-brand-green-dark py-3">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-brand-gold" />
              <span>Licensed: {BUSINESS_INFO.licenseNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-brand-gold" />
              <span>Financing & Grant Assistance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-gold" />
              <span>{BUSINESS_INFO.yearsInBusiness} Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-gold" />
              <span>{BUSINESS_INFO.projectsCompleted} Projects Completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Server-rendered for LCP (no hydration wait) */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Slide 1: server-rendered for instant LCP */}
        <div className="absolute inset-0" id="hero-slide-0" style={{ opacity: 1, transition: "opacity 1s" }}>
          <div className="absolute inset-0 animate-ken-burns">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroMedium}
              srcSet={`${heroSmall} 640w, ${heroMedium} 960w, ${heroLarge} 1280w, ${heroXl} 1920w`}
              sizes="100vw"
              alt="Florida Construction Specialists - Tampa Bay commercial construction"
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
        {/* Slides 2-3: client component, deferred */}
        <HeroSlideshow />

        {/* Content overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <div className="container-custom relative z-10 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading max-w-4xl">
            Tampa Bay&apos;s Premier Large-Scale Construction Specialists
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2 max-w-3xl">
            From $500K commercial projects to $25M+ developments
          </p>
          <p className="text-lg text-brand-gold font-semibold">
            Choose Your Pathway Below
          </p>
        </div>
      </section>

      {/* Rest of homepage (interactive, needs client-side JS) */}
      <HomePageClient />
    </>
  );
}
