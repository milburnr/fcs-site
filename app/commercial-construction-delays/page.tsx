import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Managing Commercial Construction Delays - Florida Construction Specialists",
  description: "Discover valuable insights on managing commercial construction delays from one of Florida&apos;s leading commercial contractors in Tampa. Gain expert Guides!",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Construction Delays", href: "/commercial-construction-delays/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Managing Construction Delays Insights from Florida Top Commercial Contractor in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Discover valuable insights on managing commercial construction delays from one of Florida&apos;s leading commercial contractors in Tampa. Gain expert Guide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
              <p className="text-gray-600 mb-6">
                When hiring a commercial contractor in Tampa, it is important to consider several key factors. One of the first and most important things to evaluate
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                The Importance of Project Scheduling in Commercial Construction
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists, the top commercial contractor in Tampa, is a master in commercial construction. With expertise in commercial building, industrial construction, office construction, retail
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Effective Timeline Management for Florida Construction Projects
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is leading the way in sustainable commercial construction in Tampa. As the demand for eco-friendly construction continues to grow, their expertise and
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Key Strategies for Construction Scheduling in the Tampa Area
              </h2>
              <p className="text-gray-600 mb-6">
                Invoices and estimates for commercial construction play a crucial role, especially in the thriving Tampa area. As a leading contractor in the field, Florida Construction
              </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

<section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
</>
  );
}
