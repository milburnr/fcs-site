import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "E.G. Simmons Regional Park: Nature&apos;s Playground in Ruskin, FL - Florida Construction Specialists",
  description: "Nestled on the shores of Tampa Bay, E.G. Simmons Regional Park emerges as a picturesque retreat in Ruskin, Florida. Covering over 469 acres, this expansive",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "E G Simmons Regional Park Natures Playground in...", href: "/e-g-simmons-regional-park-natures-playground-in-ruskin-fl/" },
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
            E.G. Simmons Regional Park: Nature’s Playground in Ruskin, FL
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Nestled on the shores of Tampa Bay, E.G. Simmons Regional Park emerges as a picturesque retreat in Ruskin, Florida. Covering over 469 acres, this expa
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
                Nestled on the shores of Tampa Bay, E.G. Simmons Regional Park emerges as a picturesque retreat in Ruskin, Florida. Covering over 469 acres, this expansive park offers a diverse range of recreational activities and natural beauty for visitors of all ages. Visit this link for more information.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Waterfront Paradise
              </h2>
              <p className="text-gray-600 mb-6">
                One of the park’s highlights is its extensive waterfront, providing a serene backdrop for fishing, kayaking, and birdwatching. With its scenic vistas and abundant wildlife, E.G. Simmons Regional Park beckons nature enthusiasts seeking a tranquil escape from the hustle and bustle of daily life. See here for information about Cockroach Bay Aquatic Preserve: A Natural Oasis in Ruskin, FL.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Family-Friendly Amenities
              </h2>
              <p className="text-gray-600 mb-6">
                Catering to families, the park features playgrounds, picnic areas, and open spaces for sports and games. The well-maintained facilities make it an ideal spot for family gatherings, ensuring a perfect blend of outdoor fun and relaxation.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Camping Adventures
              </h2>
              <p className="text-gray-600 mb-6">
                For those looking to extend their stay, E.G. Simmons Regional Park offers camping facilities, allowing visitors to immerse themselves in the beauty of nature overnight. The camping areas provide a rustic experience with access to modern amenities, creating a unique outdoor getaway.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Environmental Education
              </h2>
              <p className="text-gray-600 mb-6">
                Beyond recreation, the park is an educational hub with nature trails and interpretive programs. Visitors can explore the diverse ecosystems, learning about the local flora and fauna while gaining a deeper appreciation for the natural wonders of Ruskin.
              </p>

              <p className="text-gray-600 mb-6">
                In summary, E.G. Simmons Regional Park stands as a multifaceted gem, offering a perfect blend of natural beauty, family-friendly activities, and educational experiences in the heart of Ruskin, Florida.
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
