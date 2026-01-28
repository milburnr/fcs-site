import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Cockroach Bay Aquatic Preserve: A Natural Oasis in Ruskin, FL - Florida Construction Specialists",
  description: "Situated in the scenic town of Ruskin, Florida, the Cockroach Bay Aquatic Preserve stands as a testament to the region&apos;s commitment to environmental",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Cockroach Bay Aquatic Preserve a Natural Oasis ...", href: "/cockroach-bay-aquatic-preserve-a-natural-oasis-in-ruskin-fl/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
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
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Construction services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Cockroach Bay Aquatic Preserve: A Natural Oasis in Ruskin, FL
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Situated in the scenic town of Ruskin, Florida, the Cockroach Bay Aquatic Preserve stands as a testament to the region&apos;s commitment to environmental
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
                Situated in the scenic town of Ruskin, Florida, the Cockroach Bay Aquatic Preserve stands as a testament to the region’s commitment to environmental conservation. This aquatic haven, spanning over 6,000 acres, is a prime destination for eco-tourism, drawing nature enthusiasts and researchers alike. Information can be found here.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Biodiversity Hotspot
              </h2>
              <p className="text-gray-600 mb-6">
                Cockroach Bay is renowned for its diverse ecosystems, including seagrass beds, mangrove islands, and pristine waterways. The preserve provides a vital habitat for a myriad of marine species, making it a hotspot for birdwatching, fishing, and kayaking enthusiasts seeking an up-close encounter with Florida’s coastal biodiversity. Discover facts about Sun City Heritage Park: Preserving History in Ruskin, FL.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Conservation Efforts
              </h2>
              <p className="text-gray-600 mb-6">
                The aquatic preserve plays a crucial role in the conservation of endangered species and the overall health of Tampa Bay. With ongoing efforts to protect seagrasses and restore natural habitats, Cockroach Bay exemplifies a successful collaboration between environmentalists, researchers, and the local community.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Recreational Opportunities
              </h2>
              <p className="text-gray-600 mb-6">
                Beyond its ecological significance, Cockroach Bay invites visitors to enjoy recreational activities such as boating, hiking, and wildlife photography. The preserve’s well-maintained trails and scenic vistas offer a unique blend of education and leisure for those looking to immerse themselves in the natural beauty of Ruskin.
              </p>

              <p className="text-gray-600 mb-6">
                In essence, Cockroach Bay Aquatic Preserve stands as a beacon of environmental stewardship, showcasing the delicate balance between conservation and recreation in the heart of Ruskin, Florida.
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
