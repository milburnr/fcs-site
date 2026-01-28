import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";
import { PhoneClickTracker } from "./PhoneClickTracker";

interface InContentCTAProps {
  variant?: "default" | "consultation" | "estimate" | "emergency";
  heading?: string;
  text?: string;
  ctaText?: string;
  ctaHref?: string;
  showPhone?: boolean;
}

export function InContentCTA({
  variant = "default",
  heading,
  text,
  ctaText,
  ctaHref = "/contact/",
  showPhone = true,
}: InContentCTAProps) {
  const variants = {
    default: {
      heading: "Ready to Discuss Your Project?",
      text: "Our team is ready to help you plan and execute your construction project with expertise and precision.",
      ctaText: "Get Free Consultation",
      bgClass: "bg-brand-green/10 border-brand-green/20",
    },
    consultation: {
      heading: "Schedule a Project Consultation",
      text: "Let's discuss your construction needs and create a plan that fits your timeline and budget.",
      ctaText: "Schedule Consultation",
      bgClass: "bg-blue-50 border-blue-200",
    },
    estimate: {
      heading: "Get a Detailed Project Estimate",
      text: "Our certified estimators provide accurate, transparent pricing for your construction project.",
      ctaText: "Request Estimate",
      bgClass: "bg-amber-50 border-amber-200",
    },
    emergency: {
      heading: "Need Immediate Assistance?",
      text: "For urgent construction or restoration needs, contact us directly for rapid response.",
      ctaText: "Contact Us Now",
      bgClass: "bg-red-50 border-red-200",
    },
  };

  const config = variants[variant];
  const displayHeading = heading || config.heading;
  const displayText = text || config.text;
  const displayCtaText = ctaText || config.ctaText;

  return (
    <div className={`${config.bgClass} border rounded-xl p-6 my-8`}>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        {displayHeading}
      </h4>
      <p className="text-gray-600 mb-4">{displayText}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green-dark transition-colors"
        >
          {displayCtaText}
        </Link>
        {showPhone && (
          <PhoneClickTracker
            className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            elementLabel="In-Content CTA Phone"
          >
            Call {BUSINESS_INFO.phone}
          </PhoneClickTracker>
        )}
      </div>
    </div>
  );
}
