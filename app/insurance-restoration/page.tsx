import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Insurance Restoration",
  description: "Some stuff about this",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance Restoration", href: "/insurance-restoration/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/condo-milestone-inspection-remediation/", label: "Condo Milestone Inspections" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
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
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Insurance Restoration - Florida Construction Specialists
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Some stuff about this
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
            
              <div className="mb-8">
                <Image
                  src="/wp-content/uploads/2024/01/e2.webp"
                  alt="Severe wind damage to elevated home roof with workers inspecting destruction"
                  width={800}
                  height={500}
                  className="rounded-lg w-full object-cover"
                />
              </div>
            
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists stand at the forefront of insurance restoration in the wake of hurricanes and storms in Florida, backed by a wealth of experience and a comprehensive network of professionals. Our access to an executive general adjuster, public adjusters, and attorneys positions us uniquely in managing and assessing large loss claims with unmatched expertise. We have personally overseen numerous significant claims, providing us with a deep understanding of the complexities involved in commercial, industrial, and residential insurance restorations. Our process encompasses everything from meticulous inspections to precise damage estimation, ensuring every aspect of the restoration is thoroughly addressed. This extensive experience allows us to efficiently navigate the insurance restoration process, restoring properties to their pre-loss conditions with precision and care. Our team at Florida Construction Specialists is adept in handling the intricate challenges that come with insurance restoration, especially in the aftermath of Florida&apos;s frequent hurricanes and storms. We work closely with clients to manage every step of the process, from the initial inspection to the detailed estimation of repairs needed. Our approach is not just about restoration; it&apos;s about providing peace of mind and reliability in times of distress. With our hands-on experience in managing countless large loss claims, we bring a level of understanding and capability that is unparalleled in the industry. Trust us to be your guide and ally in navigating the complexities of insurance restoration, ensuring your property is returned to its pre-loss state with expertise and efficiency.
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
