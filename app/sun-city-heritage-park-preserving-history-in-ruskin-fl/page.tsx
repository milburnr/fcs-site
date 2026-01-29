import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Sun City Heritage Park: Preserving History in Ruskin, FL - Florida Construction Specialists",
  description: "Nestled in the heart of Ruskin, Florida, Sun City Heritage Park stands as a testament to the rich history of the region. This hidden gem offers visitors a",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Sun City Heritage Park Preserving History in Ru...", href: "/sun-city-heritage-park-preserving-history-in-ruskin-fl/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
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
            src="/images/historic-preservation/historic-preservation-large.webp"
            alt="Historic building restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Sun City Heritage Park: Preserving History in Ruskin, FL
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Nestled in the heart of Ruskin, Florida, Sun City Heritage Park stands as a testament to the rich history of the region. This hidden gem offers visito
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
                Nestled in the heart of Ruskin, Florida, Sun City Heritage Park stands as a testament to the rich history of the region. This hidden gem offers visitors a unique opportunity to explore and appreciate the cultural heritage that has shaped the community. Learn more here.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Historical Significance
              </h2>
              <p className="text-gray-600 mb-6">
                Established in the early 20th century, Sun City Heritage Park showcases artifacts and structures that tell the story of Ruskin’s evolution. From the influence of pioneering families to the impact of agricultural development, the park serves as a living museum, connecting visitors to the past. Learn more about E.G. Simmons Regional Park: Nature’s Playground in Ruskin, FL.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Architectural Marvels
              </h2>
              <p className="text-gray-600 mb-6">
                The park boasts well-preserved historic buildings, including the iconic Bean Depot and the Ruskin Women’s Clubhouse. These architectural marvels provide a glimpse into the architectural styles of yesteryears, offering a visual feast for history enthusiasts and architecture lovers alike.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Educational Experiences
              </h2>
              <p className="text-gray-600 mb-6">
                Sun City Heritage Park goes beyond static displays, offering educational programs and guided tours. School groups and curious individuals can delve into interactive experiences that bring the history of Ruskin to life, fostering a deeper appreciation for the community’s roots.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Community Engagement
              </h2>
              <p className="text-gray-600 mb-6">
                With its lush greenery and serene ambiance, the park serves as a community hub, hosting events, festivals, and gatherings. It not only preserves the past but actively engages the present community, fostering a sense of pride and connection among residents.
              </p>

              <p className="text-gray-600 mb-6">
                In conclusion, Sun City Heritage Park stands as a living tribute to Ruskin’s past, inviting visitors to step back in time and immerse themselves in the vibrant history of this charming Florida town.
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
