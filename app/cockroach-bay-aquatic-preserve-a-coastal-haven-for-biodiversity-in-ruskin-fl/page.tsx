import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Cockroach Bay Aquatic Preserve: A Coastal Haven for Biodiversity in Ruskin, FL - Florida Construction Specialists",
  description: "Nestled along the Gulf Coast of Florida, Cockroach Bay Aquatic Preserve in Ruskin is a testament to the state&apos;s commitment to preserving its coastal",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Cockroach Bay Aquatic Preserve a Coastal Haven ...", href: "/cockroach-bay-aquatic-preserve-a-coastal-haven-for-biodiversity-in-ruskin-fl/" },
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Construction services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Cockroach Bay Aquatic Preserve: A Coastal Haven for Biodiversity in Ruskin, FL
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Nestled along the Gulf Coast of Florida, Cockroach Bay Aquatic Preserve in Ruskin is a testament to the state&apos;s commitment to preserving its coastal
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
                Nestled along the Gulf Coast of Florida, Cockroach Bay Aquatic Preserve in Ruskin is a testament to the state’s commitment to preserving its coastal ecosystems. Spanning over 6,000 acres, this pristine preserve is a haven for biodiversity, offering a glimpse into the delicate balance of Florida’s coastal habitats. Visit this link for more information.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Cockroach Bay Aquatic Preserve: A Coastal Haven for Biodiversity in Ruskin, FL
              </h2>
              <p className="text-gray-600 mb-6">
                Cockroach Bay Aquatic Preserve boasts a unique blend of marine and terrestrial environments, making it a crucial refuge for a diverse array of flora and fauna. The preserve encompasses mangrove forests, seagrass beds, salt marshes, and tidal flats, providing a dynamic and interconnected ecosystem that supports an abundance of marine life. See here for information about E.G. Simmons Regional Park: Nature’s Playground in the Ruskin, FL.
              </p>

              <p className="text-gray-600 mb-6">
                Mangroves, with their intricate root systems, play a vital role in stabilizing the coastline and providing nursery grounds for numerous marine species. Visitors to Cockroach Bay can witness the stunning labyrinth of red, black, and white mangroves, serving as a natural nursery for fish, crabs, and shrimp.
              </p>

              <p className="text-gray-600 mb-6">
                The seagrass beds within the preserve serve as crucial feeding grounds for manatees, sea turtles, and various fish species. The interconnectedness of these habitats makes Cockroach Bay a hotspot for birdwatching, with numerous shorebirds and wading birds finding refuge in the preserve.
              </p>

              <p className="text-gray-600 mb-6">
                Cockroach Bay Aquatic Preserve is not only a haven for wildlife but also a recreational paradise for nature enthusiasts. Kayakers and boaters can explore the meandering waterways, witnessing the beauty of the preserve from a unique perspective. Educational programs and guided tours offered by local organizations provide visitors with insights into the delicate balance of coastal ecosystems and the importance of conservation efforts.
              </p>

              <p className="text-gray-600 mb-6">
                The Florida Department of Environmental Protection, in collaboration with local conservation groups, works diligently to ensure the protection and sustainability of Cockroach Bay Aquatic Preserve. Through research, habitat restoration, and public outreach, the preserve remains a shining example of the state’s commitment to preserving its natural treasures for future generations to appreciate and enjoy.
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
