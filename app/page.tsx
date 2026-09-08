import { Metadata } from "next";
import { Shield, Award, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { HeroSlideshow } from "./HeroSlideshow";
import { HomePageClient } from "./HomePageClient";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Bay Commercial Construction | FCS",
  description: "Tampa Bay's premier large-scale construction specialists. Commercial, residential, and insurance restoration projects from $500K to $25M+.",
  alternates: {
    canonical: "https://floridaconstructionspecialists.com/",
  },
  openGraph: {
    title: "Tampa Bay Commercial Construction | FCS",
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

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Featured Guide"
            links={[
              { label: "Multigenerational Home Builder in Tampa", href: "/resources/multigenerational-home-builder-tampa/" },
            ]}
          />
        </div>
      </section>
      {/* core30-spine:start */}
      <section className="core30-spine px-6 lg:px-12 py-16 sm:py-20">
        <div className="max-w-[880px] mx-auto">
          <h2 className="font-serif text-[clamp(1.75rem,2.5vw,2.5rem)] font-light mb-4">Our Services in Tampa</h2>
          {/* core30-child:cat__building_envelope_waterproofing */}
          <h3 className="font-serif font-light text-xl mt-8 mb-3">
            <a href="/building-envelope-waterproofing/">Building Envelope Waterproofing Tampa</a>
          </h3>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">Water rarely enters a Tampa Bay building at the spot where the stain shows up. Our building envelope waterproofing page explains how we investigate intrusion first, then treat the whole assembly: exterior wall coatings, balcony membranes and traffic coatings, expansion joint and sealant replacement, and envelope repair on commercial, condominium, and multi-family properties across Hillsborough County. With two to three tropical systems a season and summer humidity that keeps walls wet, sealing the symptom alone does not hold. Read it to see how our in-house engineer and architectural draftsman turn findings into buildable details.</p>
          {/* core30-child:cat__commercial_construction_renovation */}
          <h3 className="font-serif font-light text-xl mt-8 mb-3">
            <a href="/commercial-construction-tampa/">Commercial Construction Tampa</a>
          </h3>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">Our commercial construction page covers ground-up and renovation work across Hillsborough County, from the Westshore corridor to downtown Tampa: design-build delivery, medical facilities, office buildings, industrial and warehouse projects, and retail and hospitality space. It walks through how we handle site assessment and pre-construction, design coordination and value engineering, permitting through the City of Tampa, and closeout to certificate of occupancy as the prime contractor on every job. Since 1982 we have built for owners who want one accountable party rather than a chain of subcontractors. Click through for the Tampa-specific FAQ on wind zone requirements and permitting.</p>
          {/* core30-child:cat__condo_multi_family_structural_restoration */}
          <h3 className="font-serif font-light text-xl mt-8 mb-3">
            <a href="/condo-multi-family-structural/">Condo & Multi-Family Structural Restoration Tampa</a>
          </h3>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">Condominium boards facing milestone inspection findings need a contractor who can turn a report into a program. This page covers balcony reconstruction, concrete spalling and structural slab repair, post-tension repair, railing replacement, common-area remediation, and repair estimating for Structural Integrity Reserve Studies under Florida Statute 718.112(2)(g). Florida Statute 553.899 requires milestone structural inspections for condominium and cooperative buildings three stories or higher, and our in-house engineer and architectural draftsman turn those findings into buildable details. Read it to understand how we assess once, scope once, and mobilize once on occupied Tampa Bay buildings.</p>
          {/* core30-child:cat__facade_stucco */}
          <h3 className="font-serif font-light text-xl mt-8 mb-3">
            <a href="/facade-stucco/">Stucco Contractor Tampa</a>
          </h3>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">A cracked stucco wall in this climate is an active water entry path, not a cosmetic issue. Our facade and stucco page separates three different problems: repair of a defined defect on an otherwise sound wall, whole-elevation restoration and recoating when deterioration is general, and EIFS repair, which is a synthetic finish over foam that behaves nothing like cement render. We also explain why historic facades in Hyde Park, Ybor, and Seminole Heights route to restoration rather than patching. Read it to learn the simple tap test that tells traditional stucco from EIFS before you hire the wrong trade.</p>
          {/* core30-child:cat__multi_family_historic_restoration */}
          <h3 className="font-serif font-light text-xl mt-8 mb-3">
            <a href="/historic-restoration/">Historic Restoration & Preservation</a>
          </h3>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">Older buildings in Tampa Bay carry masonry, woodwork, metalwork, and decorative details that modern construction methods can damage in a single afternoon. Our historic restoration and preservation page explains how we work to the Secretary of the Interior standards, coordinate with the State Historic Preservation Office and local preservation boards, and prioritize preserving original elements over replacing them. It also covers how we integrate modern HVAC, electrical, and plumbing systems without stripping a building of its character, and walks through our process from consultation through pre-construction, construction, and completion. Click through to browse the portfolio and the historic restoration FAQs.</p>
          {/* core30-child:cat__insurance_storm_reconstruction */}
          <h3 className="font-serif font-light text-xl mt-8 mb-3">
            <a href="/insurance-storm-reconstruction/">Storm Damage Reconstruction Tampa</a>
          </h3>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">Between June and November, Tampa Bay typically sees two to three tropical systems, and Ian and Idalia showed how much depends on what is documented before demolition starts. Our storm damage reconstruction page explains why we document first and then rebuild: a recorded damage assessment an adjuster and a condominium board can both evaluate, insurance restoration construction, and hurricane reconstruction brought up to current Florida Building Code. Florida sets a one-year window from the date of loss to file a hurricane claim. Read it to see how our envelope experience tells us where wind-driven water actually went.</p>
        </div>
      </section>
      {/* core30-spine:end */}
    </>
  );
}
