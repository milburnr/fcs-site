import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "E.G. Simmons Regional Park: Nature&apos;s Playground in the Ruskin, FL - Florida Construction Specialists",
  description: "Nestled along the shores of Tampa Bay in Ruskin, Florida, E.G. Simmons Regional Park stands as a captivating natural haven, offering residents and visitors",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "E G Simmons Regional Park Natures Playground in...", href: "/e-g-simmons-regional-park-natures-playground-in-the-ruskin-fl/" },
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
            E.G. Simmons Regional Park: Nature&apos;s Playground in the Ruskin, FL
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Nestled along the shores of Tampa Bay in Ruskin, Florida, E.G. Simmons Regional Park stands as a captivating natural haven, offering residents and vis
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
                Nestled along the shores of Tampa Bay in Ruskin, Florida, E.G. Simmons Regional Park stands as a captivating natural haven, offering residents and visitors alike a wealth of outdoor experiences in a scenic waterfront setting. Spread across 469 acres, this regional park is a testament to the Sunshine State’s dedication to providing diverse recreational spaces. Information can be found here.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                E.G. Simmons Regional Park: Nature’s Playground in Ruskin, FL
              </h2>
              <p className="text-gray-600 mb-6">
                E.G. Simmons Regional Park caters to a wide range of outdoor enthusiasts with its amenities and natural attractions. The park features expansive picnic areas equipped with tables and grills, making it an ideal spot for family gatherings, picnics, and social outings amidst the lush surroundings. Discover facts about Poseidon Fishing Charters: Premier Angling Adventures in Ruskin, FL.
              </p>

              <p className="text-gray-600 mb-6">
                One of the park’s main attractions is the beach area, where visitors can enjoy the sun, sand, and gentle waves of Tampa Bay. The sandy shores provide a perfect setting for beachcombing, sunbathing, and cooling off in the bay’s inviting waters. The beach area is complemented by designated swimming areas, ensuring a safe and enjoyable experience for park-goers.
              </p>

              <p className="text-gray-600 mb-6">
                Fishing enthusiasts find E.G. Simmons Regional Park a prime destination, thanks to its fishing pier and ample shoreline access. The brackish waters of Tampa Bay offer opportunities to catch a variety of saltwater species, making it a favorite spot for both seasoned anglers and those trying their luck for the first time.
              </p>

              <p className="text-gray-600 mb-6">
                For nature lovers and birdwatchers, the park boasts an extensive network of trails that wind through coastal habitats, providing opportunities to observe native flora and fauna. The park’s diverse ecosystems support a variety of bird species, making it a designated site on the Great Florida Birding and Wildlife Trail.
              </p>

              <p className="text-gray-600 mb-6">
                E.G. Simmons Regional Park caters to boating enthusiasts as well, with a boat ramp allowing easy access to Tampa Bay for kayakers, canoers, and boaters. The park’s expansive waters provide a picturesque backdrop for water-based activities and exploration.
              </p>

              <p className="text-gray-600 mb-6">
                Managed by Hillsborough County Parks and Recreation, E.G. Simmons Regional Park exemplifies Florida’s commitment to preserving its natural beauty while providing recreational opportunities for residents and visitors. Whether seeking a tranquil beach day, a fishing adventure, or a nature walk, E.G. Simmons Regional Park invites all to revel in the beauty of Tampa Bay’s coastal charm.
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
