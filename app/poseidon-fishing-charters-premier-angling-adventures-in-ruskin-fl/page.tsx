import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Poseidon Fishing Charters: Premier Angling Adventures in Ruskin, FL - Florida Construction Specialists",
  description: "Ruskin, Florida, boasts not only scenic coastal beauty but also the opportunity for thrilling deep-sea fishing adventures, thanks to Poseidon Fishing",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Poseidon Fishing Charters Premier Angling Adven...", href: "/poseidon-fishing-charters-premier-angling-adventures-in-ruskin-fl/" },
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
            Poseidon Fishing Charters: Premier Angling Adventures in Ruskin, FL
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Ruskin, Florida, boasts not only scenic coastal beauty but also the opportunity for thrilling deep-sea fishing adventures, thanks to Poseidon Fishing
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
                Ruskin, Florida, boasts not only scenic coastal beauty but also the opportunity for thrilling deep-sea fishing adventures, thanks to Poseidon Fishing Charters. Nestled along the Gulf of Mexico, Poseidon Fishing Charters offers anglers a premier experience, combining the expertise of seasoned captains with the rich biodiversity of the Gulf’s waters. Learn more here.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Poseidon Fishing Charters: Premier Angling Adventures in Ruskin, FL
              </h2>
              <p className="text-gray-600 mb-6">
                Embarking from the Ruskin area, Poseidon Fishing Charters takes fishing enthusiasts on a journey into the deep blue, where the Gulf’s warm waters teem with a variety of prized sportfish. The experienced captains, well-versed in the intricacies of Gulf fishing, provide both novices and seasoned anglers with a memorable and rewarding day on the water. Learn more about Cockroach Bay Aquatic Preserve: A Coastal Haven for Biodiversity in Ruskin, FL.
              </p>

              <p className="text-gray-600 mb-6">
                Poseidon Fishing Charters caters to a diverse range of fishing preferences, offering customizable trips that include inshore, nearshore, and offshore excursions. Inshore trips target species like snook, redfish, and trout, providing anglers with the chance to explore the shallower waters of Tampa Bay and the surrounding estuaries.
              </p>

              <p className="text-gray-600 mb-6">
                For those seeking a more offshore adventure, Poseidon Fishing Charters ventures into the deeper Gulf waters, where opportunities abound to hook into impressive gamefish like grouper, snapper, and even the elusive kingfish. The Gulf’s rich ecosystem ensures that each expedition holds the potential for an exciting and diverse catch.
              </p>

              <p className="text-gray-600 mb-6">
                The charter company prides itself not only on the quality of the fishing experience but also on its commitment to conservation. Following ethical angling practices, Poseidon Fishing Charters emphasizes catch-and-release techniques for certain species to promote sustainability and ensure the longevity of the Gulf’s marine populations.
              </p>

              <p className="text-gray-600 mb-6">
                Poseidon Fishing Charters provides all the necessary equipment for a successful day of fishing, from top-tier rods and reels to bait and tackle. The vessels, designed for comfort and safety, allow anglers to focus on the thrill of the catch while enjoying the scenic beauty of the Gulf.
              </p>

              <p className="text-gray-600 mb-6">
                For those seeking an unforgettable angling adventure in Ruskin, Poseidon Fishing Charters stands as a premier choice, blending local expertise with the Gulf’s bountiful waters to create lasting memories for fishing enthusiasts of all skill levels.
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
