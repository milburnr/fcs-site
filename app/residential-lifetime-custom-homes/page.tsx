import Link from "next/link";
import Image from "next/image";
import { Phone, Home, Shield, Hammer, Sparkles, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata = {
  title: "Custom Home Builder Tampa FL",
  description:
    "We build custom homes that last a lifetime. Tampa custom builder specializing in multi-million dollar luxury homes. Work with top architects and craftsmen.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Residential Lifetime Custom Homes", href: "/residential-lifetime-custom-homes/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Tampa's Custom Family Home Builders",
    "href": "/tampas-custom-family-home-builders/",
    "description": "What to look for when selecting a builder for your Tampa Bay dream home."
  },
  {
    "title": "Hurricane Resistant Luxury Home Design",
    "href": "/hurricane-resistant-luxury-home-design/",
    "description": "Building beautiful homes that withstand Florida's severe weather."
  },
  {
    "title": "Smart Home Integration in Tampa Custom Homes",
    "href": "/smart-home-integration-in-tampa-custom-homes-2/",
    "description": "Incorporating technology seamlessly into luxury home construction."
  },
  {
    "title": "Climate Resilient Custom Homes in Tampa",
    "href": "/climate-resilient-custom-homes-in-tampa/",
    "description": "Design strategies for homes that perform in Florida's challenging environment."
  }
];

export default function ResidentialCustomHomesPage() {
  const features = [
    {
      icon: Shield,
      title: "Quality Structure",
      description:
        "You'll never see the framing and masonry underneath, but this forms the core structure of your home. This can make the difference in outlasting Tampa, Florida weather.",
    },
    {
      icon: Home,
      title: "Exterior Protection",
      description:
        "We are experts in all types of exterior waterproofing, and carry that over to our custom home building. Built to the latest standards and advances in efficiency and strength, you can be assured your home will be protected from the elements.",
    },
    {
      icon: Hammer,
      title: "Finishing",
      description:
        "Craftsmanship and quality distinguishes our custom built homes from those of other builders in Tampa. You're paying for high end quality, and that's what you'll get when you select us as your Tampa home builder.",
    },
    {
      icon: Sparkles,
      title: "Custom Designed Homes",
      description:
        "If you want a basic, sturdy, well built traditional home, we can certainly build that. However, if you also want it to be a unique masterpiece that you admire every time you pull up the driveway, then you've found the right Tampa builder.",
    },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
          <div className="absolute inset-0 bg-[url('/images/custom-home-construction-2/custom-home-construction-2-display.webp')] bg-cover bg-center opacity-30" />
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
              Tampa, FL Custom Home Builder
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              We build custom homes that last a lifetime. If you&apos;re looking
              to make this your long term residence, we&apos;re the Tampa custom
              builder you&apos;re looking for.
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
              Custom Homes - Florida Construction Specialists
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We build custom homes that last a lifetime. If you&apos;re looking
              to make this your long term residence, we&apos;re the Tampa custom
              builder you&apos;re looking for. We specialize in multi-million
              dollar luxury homes. We work with Tampa area architects,
              engineers, and craftsmen to materialize your dream home. Call us
              or message for more info.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
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

      {/* Why Choose Us */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">
              Why Choose Florida Construction Specialists?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              At Florida Construction Specialists, we understand that your home
              is more than just a place to live—it&apos;s a place where you can
              create memories, celebrate milestones, and enjoy life. That&apos;s
              why we are dedicated to building custom homes that are designed to
              last a lifetime.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Decades of Experience
                </h4>
                <p className="text-gray-300">
                  Combined decades of experience in construction and custom home
                  building in the Tampa Bay area.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Full Service Builder
                </h4>
                <p className="text-gray-300">
                  From finding the ideal site to choosing the best design and
                  materials, we manage the entire process.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  Attention to Detail
                </h4>
                <p className="text-gray-300">
                  We pay attention to every detail, ensuring your home meets
                  your needs and exceeds your expectations.
                </p>
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
                Expert balcony repair and waterproofing for lasting protection.
              </p>
              <span className="inline-flex items-center text-brand-green group-hover:text-white mt-4 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/exterior-waterproofing/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-green hover:text-white transition-all"
            >
              <h3 className="text-lg font-bold text-brand-green-dark group-hover:text-white mb-2">
                Exterior Waterproofing
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-sm">
                Protect your home from Florida&apos;s harsh weather conditions.
              </p>
              <span className="inline-flex items-center text-brand-green group-hover:text-white mt-4 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/residential/waterfront-homes/"
              className="group bg-gray-50 rounded-xl p-6 hover:bg-brand-green hover:text-white transition-all"
            >
              <h3 className="text-lg font-bold text-brand-green-dark group-hover:text-white mb-2">
                Waterfront Homes
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 text-sm">
                Specialized construction for waterfront estates and coastal living.
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
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today and let us help you
            walk down the path to build the home you want to spend a lifetime
            in.
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      
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