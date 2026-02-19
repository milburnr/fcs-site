import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export const SILO_CTA_DEFAULTS = {
  commercial: {
    heading: "Ready to Start Your Commercial Project?",
    description:
      "Contact Florida Construction Specialists for expert commercial construction services across Tampa Bay. From design-build to tenant improvements, our team delivers quality results on time and on budget.",
    ctaText: "Request Commercial Consultation",
  },
  residential: {
    heading: "Ready to Build Your Dream Home?",
    description:
      "Our custom home building team creates distinctive residences tailored to your lifestyle. From luxury finishes to hurricane-resistant construction, we build homes that last.",
    ctaText: "Schedule Design Consultation",
  },
  insurance: {
    heading: "Need Insurance Restoration Help?",
    description:
      "Our certified estimators and licensed contractors handle the entire restoration process, from emergency response through final inspection. We work directly with your insurance company.",
    ctaText: "Request Claims Consultation",
  },
  sb4d: {
    heading: "Get Your SB 4-D Compliance Assessment",
    description:
      "Florida's milestone inspection and structural integrity reserve study deadlines are approaching. Our engineering team provides comprehensive assessments and remediation plans.",
    ctaText: "Request SB 4-D Consultation",
  },
} as const;

interface GuideCTAProps {
  silo: "commercial" | "residential" | "insurance" | "sb4d";
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function GuideCTA({
  silo,
  heading,
  description,
  ctaText,
  ctaHref = "/contact/",
}: GuideCTAProps) {
  const defaults = SILO_CTA_DEFAULTS[silo];
  const displayHeading = heading || defaults.heading;
  const displayDescription = description || defaults.description;
  const displayCtaText = ctaText || defaults.ctaText;

  return (
    <section className="section bg-brand-green">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-heading">
          {displayHeading}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {displayDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={ctaHref} className="btn-cta">
            {displayCtaText}
          </Link>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
          >
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
