import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Building2,
  Home,
  ArrowRight,
  Filter,
  Landmark,
  Waves,
  Stethoscope,
  Factory,
  Palmtree,
  Shield,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Project Gallery | Commercial & Residential Portfolio | FCS Tampa",
  description:
    "Explore Florida Construction Specialists' portfolio of commercial construction, luxury custom homes, historic restorations, and insurance restoration projects throughout Tampa Bay.",
  keywords:
    "Tampa construction portfolio, commercial construction gallery, custom home photos, historic restoration projects, FCS portfolio",
};

// Commercial project categories
const commercialProjects = [
  {
    category: "Medical & Healthcare",
    icon: Stethoscope,
    description: "AHCA-compliant medical offices, clinics, and healthcare facilities",
    projects: [
      {
        title: "Medical Office Building Renovation",
        location: "Tampa",
        scope: "15,000 SF tenant improvement",
        highlights: ["AHCA compliance", "Medical gas systems", "ADA upgrades"],
        image: "/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp",
      },
      {
        title: "Outpatient Surgery Center",
        location: "Clearwater",
        scope: "8,500 SF new construction",
        highlights: ["Clean room standards", "Specialized HVAC", "Life safety systems"],
        image: "/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp",
      },
    ],
  },
  {
    category: "Industrial & Flex Space",
    icon: Factory,
    description: "Warehouses, distribution centers, and industrial flex buildings",
    projects: [
      {
        title: "Warehouse Distribution Center",
        location: "Tampa Bay",
        scope: "45,000 SF tilt-wall construction",
        highlights: ["Dock-high loading", "Climate controlled", "Office build-out"],
        image: "/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp",
      },
      {
        title: "Industrial Flex Space",
        location: "Brandon",
        scope: "22,000 SF multi-tenant",
        highlights: ["Flexible bay sizes", "Heavy power", "High bay lighting"],
        image: "/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp",
      },
    ],
  },
  {
    category: "Historic Restoration",
    icon: Landmark,
    description: "Tampa's historic social clubs and landmark buildings",
    projects: [
      {
        title: "Historic Social Club Restoration",
        location: "Ybor City",
        scope: "Full building restoration",
        highlights: ["SHPO compliance", "Tax credit qualified", "Period materials"],
        image: "/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp",
      },
      {
        title: "Civic Building Adaptive Reuse",
        location: "Downtown Tampa",
        scope: "Adaptive reuse conversion",
        highlights: ["Historic tax credits", "Modern systems", "ADA accessibility"],
        image: "/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp",
      },
    ],
  },
  {
    category: "Multi-Family & Condo",
    icon: Building2,
    description: "Condo remediation, common area renovation, and multi-family construction",
    projects: [
      {
        title: "Condo Common Area Renovation",
        location: "St. Petersburg",
        scope: "Lobby, pool deck, fitness center",
        highlights: ["SB4-D compliance", "Minimal disruption", "Phased construction"],
        image: "/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp",
      },
      {
        title: "Balcony Remediation Project",
        location: "Clearwater Beach",
        scope: "120+ balconies",
        highlights: ["Structural repair", "Waterproofing", "Code compliance"],
        image: "/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp",
      },
    ],
  },
  {
    category: "Insurance Restoration",
    icon: Shield,
    description: "Large loss commercial property restoration",
    projects: [
      {
        title: "Hurricane Damage Restoration",
        location: "Tampa",
        scope: "$2.5M commercial restoration",
        highlights: ["Emergency response", "Insurance coordination", "Full rebuild"],
        image: "/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp",
      },
      {
        title: "Water Damage Restoration",
        location: "Brandon",
        scope: "Multi-tenant office building",
        highlights: ["Mitigation", "Tenant coordination", "Business continuity"],
        image: "/images/downtown-tampa-over-the-bay-at-sunrise-1024x682-1/downtown-tampa-over-the-bay-at-sunrise-1024x682-1-large.webp",
      },
    ],
  },
];

// Residential project categories by architectural style
const residentialProjects = [
  {
    category: "Mediterranean Revival",
    icon: Palmtree,
    description: "Classic Florida architecture with Spanish and Italian influences",
    projects: [
      {
        title: "Davis Islands Mediterranean Estate",
        location: "Davis Islands",
        scope: "6,200 SF new construction",
        highlights: ["Barrel tile roof", "Courtyard design", "Custom millwork"],
        image: "/images/custom-home-construction-2/custom-home-construction-2-large.webp",
      },
      {
        title: "Hyde Park Mediterranean Renovation",
        location: "Hyde Park",
        scope: "Historic renovation + addition",
        highlights: ["ARC approved", "Period restoration", "Modern systems"],
        image: "/images/custom-home-2/custom-home-2-large.webp",
      },
    ],
  },
  {
    category: "Coastal Contemporary",
    icon: Waves,
    description: "Modern waterfront homes designed for Florida living",
    projects: [
      {
        title: "Bayshore Contemporary",
        location: "South Tampa",
        scope: "5,800 SF waterfront",
        highlights: ["Impact glass", "Elevated design", "Outdoor living"],
        image: "/images/custom-home-construction-2/custom-home-construction-2-large.webp",
      },
      {
        title: "Apollo Beach Waterfront",
        location: "Apollo Beach",
        scope: "4,500 SF new construction",
        highlights: ["Dock integration", "Hurricane rated", "Smart home"],
        image: "/images/custom-home-2/custom-home-2-large.webp",
      },
    ],
  },
  {
    category: "Historic Preservation",
    icon: Landmark,
    description: "Thoughtful restoration of Tampa Bay's historic homes",
    projects: [
      {
        title: "1920s Bungalow Restoration",
        location: "Hyde Park",
        scope: "Complete historic restoration",
        highlights: ["COA approved", "Original details preserved", "Modern efficiency"],
        image: "/images/custom-home-construction-2/custom-home-construction-2-large.webp",
      },
      {
        title: "Craftsman Home Revival",
        location: "Seminole Heights",
        scope: "Restoration + rear addition",
        highlights: ["Period-accurate materials", "Energy upgrades", "Guest suite"],
        image: "/images/custom-home-2/custom-home-2-large.webp",
      },
    ],
  },
  {
    category: "Modern Luxury",
    icon: Home,
    description: "Contemporary design with premium finishes",
    projects: [
      {
        title: "Harbour Island Modern",
        location: "Harbour Island",
        scope: "7,200 SF custom home",
        highlights: ["Clean lines", "Floor-to-ceiling glass", "Rooftop deck"],
        image: "/images/custom-home-construction-2/custom-home-construction-2-large.webp",
      },
      {
        title: "Beach Park Contemporary",
        location: "Beach Park",
        scope: "5,100 SF new construction",
        highlights: ["Minimalist design", "Indoor-outdoor flow", "Home theater"],
        image: "/images/custom-home-2/custom-home-2-large.webp",
      },
    ],
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery/" },
];

export default function GalleryPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={[{ name: "Project Gallery", href: "/gallery/" }]} />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            From large-scale commercial developments to custom luxury homes,
            explore our portfolio of projects across Tampa Bay.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#commercial"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-bold rounded-full hover:bg-brand-green-dark transition-all"
            >
              <Building2 className="w-5 h-5" />
              Commercial Projects
            </a>
            <a
              href="#residential"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
            >
              <Home className="w-5 h-5" />
              Residential Projects
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <p className="text-3xl font-bold text-brand-green">{BUSINESS_INFO.totalProjectValue}</p>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>
            <div className="h-10 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green">{BUSINESS_INFO.projectsCompleted}</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="h-10 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green">{BUSINESS_INFO.yearsInBusiness}</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="h-10 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green">Tampa Bay</p>
              <p className="text-sm text-gray-600">Service Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Projects */}
      <section id="commercial" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
              Commercial Portfolio
            </h2>
          </div>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Large-scale commercial construction, medical facilities, industrial buildings,
            historic restorations, and insurance restoration projects.
          </p>

          {commercialProjects.map((category) => (
            <div key={category.category} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-brand-green" />
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark">{category.category}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.projects.map((project) => (
                  <div
                    key={project.title}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} - Commercial construction project in ${project.location}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-xs bg-brand-green px-2 py-1 rounded font-medium">
                          {project.location}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-brand-green-dark mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{project.scope}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-xs bg-brand-green-light text-brand-green-dark px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 text-center">
            <Link
              href="/commercial/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-bold rounded-full hover:bg-brand-green-dark transition-all"
            >
              Explore Commercial Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Residential Projects */}
      <section id="residential" className="py-16 bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
              Residential Portfolio
            </h2>
          </div>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Luxury custom homes organized by architectural style—from Mediterranean Revival
            to Coastal Contemporary and Historic Preservation.
          </p>

          {residentialProjects.map((category) => (
            <div key={category.category} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-brand-gold" />
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark">{category.category}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.projects.map((project) => (
                  <div
                    key={project.title}
                    className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} - Luxury custom home in ${project.location}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-xs bg-brand-gold px-2 py-1 rounded font-medium">
                          {project.location}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-brand-green-dark mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{project.scope}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-xs bg-brand-gold-bg text-brand-gold-dark px-2 py-1 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 text-center">
            <Link
              href="/residential/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
            >
              Explore Residential Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Florida Construction Specialists can bring your
            vision to life with the same quality and attention to detail you see here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Consultation
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

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/commercial/","label":"Commercial Construction"},{"href":"/services/residential/","label":"Residential Construction"},{"href":"/services/disaster-recovery/","label":"Disaster Recovery"},{"href":"/services/historic-restoration/","label":"Historic Restoration"},{"href":"/locations/tampa/","label":"Tampa Construction Services"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
