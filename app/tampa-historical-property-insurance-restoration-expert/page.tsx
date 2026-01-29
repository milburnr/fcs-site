import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tampa Historical Property Insurance Restoration Expert - Florida Construction Specialists",
  description: "Restore Tampa&apos;s landmarks with expert insurance restoration services tailored for historical properties. Trust our skilled team for property insurance restor...",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Historical Property Insurance Restoration...", href: "/tampa-historical-property-insurance-restoration-expert/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
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
            src="/images/hurricane-ian/hurricane-ian-large.webp"
            alt="Hurricane damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa’s Historical Property Insurance Restoration
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Restore Tampa&apos;s landmarks with expert insurance restoration services tailored for historical properties. Trust our skilled team for property insurance
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
                Managing commercial construction delays is crucial for successfully completing a project. As Florida’s top commercial contractor in Tampa, Florida Construction Specialists understands the significance of
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Understanding the Importance of Historical Preservation in Tampa
              </h2>
              <p className="text-gray-600 mb-6">
                When hiring a commercial contractor in Tampa, it is important to consider several key factors. One of the first and most important things to evaluate
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Restoring Tampas Heritage Buildings with Insurance Claims
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists, the top commercial contractor in Tampa, is a master in commercial construction. With expertise in commercial building, industrial construction, office construction, retail
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Exploring the Restoration Process for Property Owners
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists is leading the way in sustainable commercial construction in Tampa. As the demand for eco-friendly construction continues to grow, their expertise and
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
