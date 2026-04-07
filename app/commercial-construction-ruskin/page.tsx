import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, HardHat, Briefcase, FileCheck, Home } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/commercial-construction-ruskin/' },
  title: "Commercial Construction Ruskin | FCS Home Base",
  description: "Commercial construction in Ruskin FL by Florida Construction Specialists — headquartered right here at 822 Bayview Dr.",
  openGraph: {
    title: "Commercial Construction Ruskin | FCS Home Base",
    description: "Commercial construction in Ruskin FL by Florida Construction Specialists — headquartered right here at 822 Bayview Dr.",
    url: "https://floridaconstructionspecialists.com/commercial-construction-ruskin/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Why does being headquartered in Ruskin matter for my commercial project?",
    answer: "Florida Construction Specialists is headquartered at 822 Bayview Dr in Ruskin, which means your commercial project gets same-day site visits, immediate response to construction issues, and a contractor who is genuinely invested in the South Hillsborough County community. We are not driving an hour across the bay — we are already here. Our proximity also means lower mobilization costs and faster superintendent response when unexpected conditions arise during construction."
  },
  {
    question: "What types of commercial construction does FCS handle along the US 41 corridor?",
    answer: "The US 41 corridor through Ruskin supports a mix of retail strip centers, convenience retail, restaurant pads, medical offices, and agricultural-adjacent commercial buildings. While Ruskin is primarily residential, commercial activity along US 41 from Gibsonton south through Ruskin to Sun City Center continues to expand as the residential population grows. We handle both ground-up commercial construction and renovations of existing commercial properties along this corridor."
  },
  {
    question: "Does FCS build commercial projects in Sun City Center?",
    answer: "Yes, Sun City Center generates steady commercial construction demand despite being a retirement community. Medical offices, urgent care facilities, assisted living expansions, retail centers serving the senior population, and community-serving commercial buildings all require experienced general contracting. We have built healthcare facilities, commercial renovations, and institutional projects in and around Sun City Center, and our Ruskin headquarters puts us minutes away from any Sun City Center project site."
  },
  {
    question: "How does permitting work for commercial construction in Ruskin?",
    answer: "Ruskin is unincorporated Hillsborough County, so all commercial construction permits go through Hillsborough County Building Services rather than a municipal building department. This means county-level plan review, development review committee approval for larger projects, and Hillsborough County inspectors. We have extensive experience navigating the county permitting process and maintain strong working relationships with plan reviewers and inspectors at the South County office."
  },
  {
    question: "Can FCS handle waterfront commercial projects in Apollo Beach?",
    answer: "Apollo Beach waterfront commercial construction is a specialty for us given our Ruskin headquarters location. Waterfront projects require FEMA flood zone compliance, marine-grade materials resistant to salt air corrosion, enhanced wind resistance design, and coordination with both Hillsborough County and the Southwest Florida Water Management District. We understand the specific requirements of building in VE and AE flood zones along the Tampa Bay shoreline."
  },
  {
    question: "What is the commercial construction outlook for the Ruskin area?",
    answer: "South Hillsborough County is one of the fastest-growing areas in the Tampa Bay region, and residential growth drives commercial construction demand. New neighborhoods in Ruskin, Apollo Beach, Wimauma, and the SouthShore area need supporting commercial infrastructure including retail, medical offices, restaurants, and service businesses. The US 41 corridor continues to add commercial development, and Sun City Center's population supports ongoing healthcare and retail construction investment."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/commercial/" },
  { name: "Ruskin", href: "/commercial-construction-ruskin/" },
];

export default function CommercialConstructionRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Commercial construction contractor headquartered in Ruskin, Florida. US 41 corridor retail, Sun City Center commercial, Apollo Beach waterfront projects. Licensed CBC1262722, 40+ years experience."
        city="Ruskin"
        minPrice="500000"
        serviceCategories={["Design-Build Construction", "Retail Center Construction", "Medical Facility Construction", "Waterfront Commercial Construction", "Senior Living Construction"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/commercial-construction-in-tampa/commercial-construction-in-tampa-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <Home className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">FCS Headquarters — Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Commercial Construction in Ruskin, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Florida Construction Specialists is headquartered right here in Ruskin at 822 Bayview Dr. When you build with us in South Hillsborough County, you are working with your neighbors — a prime general contractor with over four decades of experience, in-house engineering, and the bonding capacity to handle projects from half a million to twenty-five million dollars.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Home className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Ruskin Headquartered</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Building2 className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">{BUSINESS_INFO.projectsCompleted}+ Projects</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Schedule Project Consultation
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ruskin Market Context */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Commercial Construction Where We Live and Work
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Ruskin is a primarily residential community in unincorporated South Hillsborough County, situated along Tampa Bay and the Little Manatee River. It is not a commercial hub on the scale of Tampa or St. Petersburg — and we are honest about that. What Ruskin does have is a growing residential population that drives demand for supporting commercial construction: medical offices, retail centers, restaurants, and service businesses along the US 41 corridor.
              </p>
              <p className="mb-6">
                Sun City Center, the large retirement community just south of Ruskin, generates consistent demand for healthcare facilities, assisted living construction, and senior-serving commercial buildings. Apollo Beach, the waterfront community to the north, supports marina-related commercial development and neighborhood retail. Together with the SouthShore area communities of Wimauma and Gibsonton, the greater Ruskin area represents a growing market for commercial construction that serves residential needs.
              </p>
              <p>
                As the only prime general contractor headquartered in this part of Hillsborough County, Florida Construction Specialists brings a level of local investment that contractors commuting from Tampa or Sarasota cannot match. All commercial permitting goes through <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a>, and our long-standing relationships with county staff at the South County office help keep projects moving through plan review and inspection efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/commercial-construction-design/commercial-construction-design-display.webp"
        alt="Commercial construction project in South Hillsborough County, Florida"
        title="Building for South County's Growing Communities"
        subtitle="Retail, medical, and commercial construction serving Ruskin, Apollo Beach, and Sun City Center"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Commercial Construction for Ruskin and the SouthShore Area
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From healthcare facilities in Sun City Center to waterfront commercial projects in Apollo Beach, we deliver the full range of commercial construction services from our Ruskin headquarters.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Medical and Healthcare Facilities",
                description: "Sun City Center's retirement population drives steady demand for medical offices, urgent care centers, specialty clinics, and assisted living facility construction. We build healthcare spaces with AHCA compliance and specialized MEP systems designed for the medical environment."
              },
              {
                icon: HardHat,
                title: "Retail and Restaurant Construction",
                description: "The US 41 corridor from Gibsonton through Ruskin to Sun City Center continues to add retail and restaurant development as the residential population grows. We build strip centers, restaurant pads, and neighborhood-serving commercial buildings along this expanding commercial spine."
              },
              {
                icon: Briefcase,
                title: "Waterfront Commercial Projects",
                description: "Apollo Beach and the Tampa Bay shoreline support marina facilities, waterfront retail, and commercial buildings that require flood zone construction, marine-grade materials, and enhanced wind resistance. Our Ruskin location means we understand these coastal construction requirements firsthand."
              },
              {
                icon: Shield,
                title: "Senior Living and Institutional",
                description: "Independent living expansions, memory care facilities, community centers, and institutional buildings serving the Sun City Center area. We understand the specific accessibility, safety, and regulatory requirements of construction for senior populations."
              },
              {
                icon: FileCheck,
                title: "Office and Professional Buildings",
                description: "Professional office construction and tenant improvements serving the growing SouthShore area. Medical professional buildings near South Bay Hospital, professional services offices, and commercial spaces that support the residential community."
              },
              {
                icon: Award,
                title: "Commercial Renovations",
                description: "Renovation and repositioning of existing commercial properties along US 41 and in Sun City Center. As the area's commercial stock ages, we help property owners modernize facilities, improve energy efficiency, and adapt spaces for changing tenant needs."
              }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Ruskin Commercial Construction FAQ"
        description="Common questions about commercial construction projects in Ruskin and South Hillsborough County."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Ruskin" currentService="commercial-construction" currentServiceName="Commercial Construction" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Build with Your Ruskin Neighbors
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists at our Ruskin headquarters to discuss your commercial project in South Hillsborough County. We bring four decades of experience and genuine local investment to every project we build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Project Consultation
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Ruskin Headquartered</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
