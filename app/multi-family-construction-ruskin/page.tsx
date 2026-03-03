import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, Building2, Shield, Award, HardHat, Users, FileCheck, Home } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/multi-family-construction-ruskin/' },
  title: "Multi-Family Construction Ruskin | Condos, Apartments",
  description: "Multi-family construction in Ruskin FL by Florida Construction Specialists — headquartered locally. Sun City Center senior living Apollo Beach condos.",
  openGraph: {
    title: "Multi-Family Construction Ruskin | Condos, Apartments",
    description: "Multi-family construction in Ruskin FL by Florida Construction Specialists — headquartered locally. Sun City Center senior living Apollo Beach condos.",
    url: "https://floridaconstructionspecialists.com/multi-family-construction-ruskin/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What types of multi-family projects does FCS build in Ruskin and the SouthShore area?",
    answer: "From our Ruskin headquarters, we build the full range of multi-family residential: workforce housing apartments serving the growing logistics and distribution workforce along the I-75 corridor, senior living and assisted living facilities near Sun City Center, waterfront condominiums in Apollo Beach, townhome communities on former agricultural land, and mixed-use residential along the US 41 corridor. Projects range from one million to twenty-five million dollars depending on scale and complexity."
  },
  {
    question: "How does Sun City Center's retirement population drive multi-family construction demand?",
    answer: "Sun City Center is one of Florida's largest active adult communities, and its population creates steady demand for new independent living developments, assisted living facilities, memory care buildings, and age-restricted condominium construction. As the community's original buildings from the 1970s and 1980s age, there is also demand for major renovation and reconstruction of existing multi-family properties. FCS understands the specific requirements of senior living construction including ADA compliance, medical-grade systems, and accessibility standards."
  },
  {
    question: "What are the advantages of building multi-family housing in the Ruskin area versus Tampa?",
    answer: "The Ruskin and SouthShore area offers several advantages for multi-family development. Land costs are significantly lower than urban Tampa, allowing developers to build more units at lower per-unit costs. The growing residential population creates strong rental demand, particularly from workers at nearby distribution centers and logistics facilities. Hillsborough County's permitting process for unincorporated areas can move more efficiently than Tampa's urban development review. And with FCS headquartered here, developers get a local general contractor who knows the area intimately."
  },
  {
    question: "Does FCS build waterfront condominiums in Apollo Beach?",
    answer: "Yes, Apollo Beach waterfront condominium construction is well within our capabilities, and our Ruskin headquarters puts us minutes from any Apollo Beach project site. Waterfront multi-family construction requires FEMA flood zone compliance for properties in VE and AE zones, marine-grade materials and finishes resistant to salt air corrosion, enhanced wind resistance design, and coordination with both Hillsborough County and the Southwest Florida Water Management District for environmental permitting."
  },
  {
    question: "How does Ruskin's agricultural land conversion affect multi-family site development?",
    answer: "Much of the developable land in the Ruskin and SouthShore area was historically agricultural — primarily tomato farming. These sites offer advantages for multi-family development: flat terrain, no demolition costs, and generally straightforward site access. However, environmental assessments may be required to confirm no soil contamination from agricultural chemicals, and wetland areas are common and may require mitigation. The sandy soils typical of South Hillsborough generally provide adequate foundation support for garden-style and mid-rise construction."
  },
  {
    question: "What is the permitting process for multi-family construction in unincorporated Ruskin?",
    answer: "Ruskin is unincorporated Hillsborough County, so multi-family construction permits go through Hillsborough County Building Services. Larger developments may require Development Review Committee approval, rezoning, or planned development designation. We have extensive experience with the county permitting process and maintain working relationships with plan reviewers and development services staff. For projects requiring SB 4-D milestone inspection compliance, we coordinate structural engineering requirements from the design phase forward."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
  { name: "Ruskin", href: "/multi-family-construction-ruskin/" },
];

export default function MultiFamilyConstructionRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Multi-Family Construction" />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Multi-family construction contractor headquartered in Ruskin, Florida. Senior living, workforce housing, waterfront condos, townhomes in Sun City Center, Apollo Beach, SouthShore area. Licensed CBC1262722."
        city="Ruskin"
        minPrice="1000000"
        serviceCategories={["Condominiums", "Apartment Complexes", "Townhomes", "Senior Living Facilities", "Mixed-Use Developments"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/southwinds-condo-front/southwinds-condo-front-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <Home className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">FCS Headquarters — Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Multi-Family Construction in Ruskin, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Florida Construction Specialists is headquartered in Ruskin, and we build multi-family housing across the SouthShore area — from senior living facilities near Sun City Center to waterfront condominiums in Apollo Beach and workforce housing serving South Hillsborough County's growing population. As a prime general contractor, we deliver projects from one million to twenty-five million dollars with full accountability.
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
              Multi-Family Housing for a Growing Residential Community
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                South Hillsborough County is one of the fastest-growing residential corridors in the Tampa Bay region. Ruskin, Apollo Beach, Sun City Center, and the surrounding SouthShore communities are adding population at rates that outpace existing housing inventory, creating strong demand for multi-family construction across multiple market segments.
              </p>
              <p className="mb-6">
                Sun City Center, one of Florida's largest active adult retirement communities, continues to expand with new independent living and assisted living developments. The original buildings constructed during the community's growth in the 1970s and 1980s are reaching ages where major renovation or replacement becomes necessary. Apollo Beach attracts waterfront condominium development at price points well below South Tampa or the barrier islands. And the growing logistics and distribution workforce along the I-75 corridor needs workforce housing options closer to employment centers.
              </p>
              <p>
                Florida Construction Specialists is headquartered at 822 Bayview Dr in Ruskin — the only prime general contractor based in this part of Hillsborough County. All multi-family permitting goes through <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a>, and our established relationships with county development review staff help navigate the approval process efficiently for projects of every scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/tampa-multifamily-housing-construction/tampa-multifamily-housing-construction-display.webp"
        alt="Multi-family housing construction in South Hillsborough County"
        title="Building Communities Across the SouthShore Area"
        subtitle="Senior living, workforce housing, and waterfront condominiums from our Ruskin headquarters"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Multi-Family Construction Serving Every SouthShore Market Segment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            The Ruskin area's diverse residential market demands multi-family construction across multiple product types and price points. We deliver them all from our local headquarters.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Senior Living and Assisted Living",
                description: "Sun City Center's expanding retirement community drives demand for independent living, assisted living, and memory care construction. We build senior facilities with full ADA compliance, specialized MEP systems, and the accessibility features that serve aging populations effectively."
              },
              {
                icon: HardHat,
                title: "Workforce Housing",
                description: "Garden-style and mid-rise apartment communities serving the growing logistics, distribution, and healthcare workforce in South Hillsborough County. These projects prioritize efficient unit layouts, durable construction, and amenity packages that attract and retain working residents."
              },
              {
                icon: Building2,
                title: "Waterfront Condominiums",
                description: "Apollo Beach and the Tampa Bay waterfront support condominium development with bay views and boating access at price points below South Tampa. We build to coastal construction standards including FEMA flood zone compliance and marine-grade materials for salt air environments."
              },
              {
                icon: Shield,
                title: "Townhome Communities",
                description: "Attainable ownership townhome developments on converted agricultural land throughout the SouthShore area. These projects serve first-time buyers and downsizers seeking new construction at accessible price points in a growing residential market."
              },
              {
                icon: FileCheck,
                title: "Mixed-Use Residential",
                description: "Residential components of mixed-use developments along the US 41 corridor, where ground-floor retail and upper-floor residential serve the area's growing population. These projects require careful coordination between commercial and residential construction requirements."
              },
              {
                icon: Award,
                title: "Multi-Family Renovation",
                description: "Major renovation and reconstruction of existing multi-family properties, particularly aging condominium buildings in Sun City Center and Apollo Beach. We handle structural upgrades, building envelope restoration, interior modernization, and SB 4-D compliance work."
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
        title="Ruskin Multi-Family Construction FAQ"
        description="Common questions about multi-family construction projects in Ruskin and the SouthShore area."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Ruskin" currentService="multi-family-construction" />
            <NearbyLocations currentCity="Ruskin" service="multi-family-construction" serviceName="Multi-Family Construction" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Start Your SouthShore Multi-Family Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists at our Ruskin headquarters to discuss your multi-family development in Sun City Center, Apollo Beach, or anywhere in the SouthShore area. We bring local knowledge and four decades of experience to every project.
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
