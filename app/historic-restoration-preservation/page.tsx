import Link from "next/link";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, Building2, History, Shield, Award, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata = {
  title: "Historic Restoration & Preservation Tampa FL",
  description:
    "Distinguished leaders in historic restoration and preservation in Florida. We blend traditional craftsmanship with modern techniques to preserve Florida's architectural heritage.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historic Restoration Preservation", href: "/historic-restoration-preservation/" },
];


const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function HistoricRestorationPage() {
  const features = [
    {
      icon: History,
      title: "Authentic Restoration",
      description:
        "We source authentic materials and employ specialized restoration methods to ensure your project respects the original character and integrity of the building.",
    },
    {
      icon: Building2,
      title: "All Property Types",
      description:
        "From historic homes to commercial landmarks, condos to unique commercial buildings, we have the expertise to handle any historic restoration project.",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description:
        "We ensure every project complies with local, state, and federal standards and regulations, working closely with historians, architects, and conservation experts.",
    },
    {
      icon: Award,
      title: "Grant Assistance",
      description:
        "We provide all necessary documentation to secure grants and historic assistance programs, interfacing with all city, county, and state regulatory bodies.",
    },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
          <div className="absolute inset-0 bg-[url('/images/historic-preservation/historic-preservation-display.webp')] bg-cover bg-center opacity-30" />
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 2600 131" className="w-full h-16 fill-white">
            <path d="M0 0L2600 0 2600 69.1 0 0z" opacity="1" />
            <path d="M0 0L2600 0 2600 69.1 0 69.1z" opacity="0.5" />
            <path d="M2600 0L0 0 0 130.1 2600 69.1z" opacity="0.25" />
          </svg>
        </div>

        <div className="container-custom relative z-10 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Tampa, FL Historic Restoration and Preservation
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Distinguished leaders in preserving and restoring Florida&apos;s
              rich architectural heritage with meticulous attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Get Free Consultation
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Historic Restoration and Preservation - Florida Construction Specialists
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Florida Construction Specialists are distinguished leaders in the
              field of historic restoration and preservation, a testament to our
              deep commitment to maintaining Florida&apos;s rich architectural
              heritage. Our team possesses extensive experience in restoring and
              preserving historic properties, understanding the unique
              challenges and requirements that come with working on such
              significant structures.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We are adept at blending traditional craftsmanship with modern
              techniques, ensuring that every restoration respects the original
              character and integrity of the building. Our approach to historic
              preservation involves meticulous attention to detail, from
              sourcing authentic materials to employing specialized restoration
              methods.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This dedication makes us a trusted partner in preserving
              Florida&apos;s historic landmarks and buildings, ensuring they
              endure for future generations to appreciate.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading text-center">
              Our Historic Restoration Expertise
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              In the realm of historic restoration, Florida Construction
              Specialists stand out for our thorough understanding of the
              historical significance and architectural nuances of each project.
              We collaborate closely with historians, architects, and
              conservation experts to ensure that every aspect of the
              restoration process is in line with historical accuracy and
              preservation standards.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our team is skilled in restoring and replicating architectural
              details, ensuring that each project retains its historical essence
              while benefiting from modern safety and comfort upgrades. We take
              pride in our ability to breathe new life into historic structures,
              all while preserving their storied past. Whether it&apos;s a
              historic home, a landmark building, or a culturally significant
              site, Florida Construction Specialists are dedicated to preserving
              the historical integrity and beauty of Florida&apos;s treasured
              past.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-feature"
              >
                <feature.icon className="w-12 h-12 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8 font-heading">
              Types of Historic Properties We Restore
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white">
                  Condos & Apartments
                </h4>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white">
                  Office Buildings
                </h4>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white">
                  Commercial Buildings
                </h4>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white">
                  Retail Spaces
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/balcony-reconstruction/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-green hover:text-white transition-all"
            >
              <h3 className="text-lg font-bold text-brand-green-dark group-hover:text-white mb-2">
                Balcony Reconstruction
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-sm">
                Commercial balcony restoration and exterior waterproofing.
              </p>
              <span className="inline-flex items-center text-brand-green group-hover:text-white mt-4 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/commercial-construction/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-green hover:text-white transition-all"
            >
              <h3 className="text-lg font-bold text-brand-green-dark group-hover:text-white mb-2">
                Commercial Construction
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-sm">
                Full-service commercial construction for all project types.
              </p>
              <span className="inline-flex items-center text-brand-green group-hover:text-white mt-4 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/disaster-recovery/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-green hover:text-white transition-all"
            >
              <h3 className="text-lg font-bold text-brand-green-dark group-hover:text-white mb-2">
                Disaster Recovery
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-sm">
                Fast and reliable disaster recovery and restoration services.
              </p>
              <span className="inline-flex items-center text-brand-green group-hover:text-white mt-4 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Preserve Your Historic Property
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today to discuss your
            historic restoration and preservation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}