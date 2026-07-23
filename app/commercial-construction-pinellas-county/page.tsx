import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, ArrowRight, FileCheck, HardHat, Briefcase } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/commercial-construction-pinellas-county/' },
  title: "Commercial Contractor Pinellas County, FL | FCS",
  description: "Commercial contractor and construction across Pinellas County — St. Petersburg, Clearwater, Largo, Dunedin, and the beaches. Coastal code, SB4-D, and permitting expertise. Certified Building Contractor CBC1262722.",
  openGraph: {
    title: "Commercial Contractor Pinellas County | FCS",
    description: "Commercial construction across Pinellas County by Florida Construction Specialists. St. Petersburg, Clearwater, Largo, and the Gulf beaches. 40+ years, prime contractor only.",
    url: "https://floridaconstructionspecialists.com/commercial-construction-pinellas-county/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Pinellas County Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Which Pinellas County cities does FCS build commercial projects in?",
    answer: "Florida Construction Specialists delivers commercial construction across Pinellas County, including St. Petersburg, Clearwater, Largo, Pinellas Park, Dunedin, Palm Harbor, Tarpon Springs, Seminole, and the Gulf beach communities from Belleair down through St. Pete Beach. We handle projects in both incorporated municipalities and unincorporated Pinellas County, coordinating permitting with the appropriate building authority for each jurisdiction."
  },
  {
    question: "How does building on Pinellas County's barrier islands differ from mainland work?",
    answer: "Pinellas is a peninsula ringed by barrier islands, and the Gulf-facing islands sit in FEMA VE flood zones with design wind speeds of 150 mph or greater. Barrier island commercial construction requires elevated structures, breakaway walls below base flood elevation, flood-resistant materials, and marine-grade fasteners and connectors to resist salt-spray corrosion. Mainland Pinellas projects face more conventional conditions but still contend with sandy soils, a high water table, and the county's dense, built-out development pattern that complicates site logistics."
  },
  {
    question: "Who issues commercial building permits in Pinellas County?",
    answer: "Permitting depends on jurisdiction. Incorporated cities such as St. Petersburg, Clearwater, and Largo run their own development services departments, while projects in unincorporated areas go through Pinellas County Building and Development Review Services. Coastal projects frequently require concurrent review by FEMA for flood-zone compliance, the Southwest Florida Water Management District (SWFWMD) for stormwater, and the Florida Department of Environmental Protection for coastal construction control line setbacks. We manage the full multi-agency permitting process for every Pinellas project."
  },
  {
    question: "Does FCS handle SB4-D milestone and condo work in Pinellas County?",
    answer: "Yes. Pinellas County has one of the highest concentrations of aging coastal condominiums in Florida, and many now fall under the milestone inspection and Structural Integrity Reserve Study (SIRS) requirements of Florida's SB4-D law. Buildings three stories or taller must undergo milestone inspection at 25 years within three miles of the coast, which covers much of Pinellas. We perform the balcony, concrete, and waterproofing remediation that these inspections commonly require, working directly with association boards and inspecting engineers."
  },
  {
    question: "What kinds of commercial projects are active across Pinellas County?",
    answer: "Pinellas commercial demand spans hospitality and resort construction on the beaches, medical facility work around the Morton Plant and Bayfront healthcare corridors, retail and mixed-use redevelopment along US 19 and downtown St. Petersburg, professional office buildouts, and adaptive reuse of older commercial buildings in built-out neighborhoods. As Florida's most densely populated county, Pinellas favors renovation, tenant improvement, and infill construction over greenfield development."
  },
  {
    question: "Is Florida Construction Specialists licensed to build in Pinellas County?",
    answer: "Yes. FCS holds Florida Certified Building Contractor license CBC1262722 and has served the greater Tampa Bay region, including all of Pinellas County, since 1982. We are always the prime contractor, never a subcontractor, maintaining direct accountability to the owner from assessment through closeout on every commercial project."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/commercial/" },
  { name: "Commercial Construction", href: "/commercial/" },
  { name: "Pinellas County", href: "/commercial-construction-pinellas-county/" },
];

const cityLinks = [
  { name: "St. Petersburg", href: "/commercial-construction-st-petersburg/" },
  { name: "Clearwater", href: "/commercial-construction-clearwater/" },
];

export default function CommercialConstructionPinellasCountyPage() {
  return (
    <>
      <LocalBusinessSchema city="Pinellas County" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Full-service commercial construction across Pinellas County, FL. Resort hotels, medical facilities, retail, office buildings, tenant improvements, and SB4-D condo remediation. Certified Building Contractor CBC1262722, 40+ years experience."
        city="Pinellas County"
        minPrice="500000"
        serviceCategories={["Design-Build Construction", "Hotel & Resort Construction", "Medical Facility Construction", "Retail Construction", "Tenant Improvements", "SB4-D Remediation"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/commercial-construction-in-tampa/commercial-construction-in-tampa-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving All of Pinellas County, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Commercial Contractor for Pinellas County, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              From the beachfront resorts of Clearwater and St. Pete Beach to the medical corridors, downtown redevelopment, and US 19 retail of Florida's most densely populated county, Florida Construction Specialists delivers commercial construction across every Pinellas market. As a prime general contractor with over four decades of coastal building experience and in-house engineering, we bring the flood-zone expertise, bonding capacity, and multi-jurisdiction permitting knowledge that Pinellas commercial projects demand.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Since 1982</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Certified Building Contractor {BUSINESS_INFO.licenseNumber}</span>
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

      {/* County Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              A County Built on Coastline, Density, and Redevelopment
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Pinellas County occupies a peninsula between the Gulf of Mexico and Tampa Bay, and that geography defines its commercial construction market. It is the most densely populated county in Florida, nearly built out, with almost a million residents packed into a footprint far smaller than neighboring Hillsborough. For commercial builders, that density means the work skews toward renovation, tenant improvement, adaptive reuse, and infill construction rather than the greenfield development common in faster-growing inland counties.
              </p>
              <p className="mb-6">
                The county's Gulf-facing barrier islands, from Clearwater Beach and Sand Key south through Indian Rocks, Madeira, Treasure Island, and St. Pete Beach, carry an enormous hospitality construction load. Resort hotels, beachfront restaurants, and mixed-use tourism properties require continuous renovation and redevelopment to stay competitive, and every barrier island project must contend with VE flood zones, elevated wind loads, salt-spray corrosion, and the tight logistics of building on a narrow island.
              </p>
              <p className="mb-6">
                On the mainland, downtown St. Petersburg has become one of Tampa Bay's most active urban commercial markets, with waterfront redevelopment, office and residential mixed-use towers, and a thriving arts and restaurant district. US Highway 19 runs the length of the county as a dense retail and medical corridor, and healthcare construction clusters around Bayfront Health in St. Petersburg and Morton Plant in Clearwater. Largo, Pinellas Park, and Seminole anchor the county's central commercial and light-industrial base.
              </p>
              <p>
                Pinellas also carries one of Florida's largest inventories of aging coastal condominiums, which places a growing share of the county's buildings squarely under SB4-D milestone inspection and reserve study requirements. Florida Construction Specialists brings the coastal construction knowledge, healthcare and hospitality experience, and structural remediation expertise that this uniquely coastal, uniquely dense county requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/commercial-construction-design/commercial-construction-design-display.webp"
        alt="Commercial construction project in Pinellas County"
        title="Building Across Pinellas County"
        subtitle="From Gulf-beach resorts to downtown St. Petersburg and the US 19 corridor"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Commercial Construction Expertise Across Pinellas County
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Beach hospitality, coastal condos, mainland healthcare, and corridor retail — we deliver specialized capability across every Pinellas sector.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Hotel and Resort Construction",
                description: "New resort development and major hotel renovations across the Pinellas Gulf beaches, from Clearwater Beach and Sand Key to Treasure Island and St. Pete Beach. We navigate barrier island VE flood zones, enhanced wind loads, and salt-exposure material specifications on every coastal project."
              },
              {
                icon: Shield,
                title: "SB4-D and Condo Remediation",
                description: "Milestone inspection remediation, Structural Integrity Reserve Study repairs, balcony reconstruction, and concrete restoration for Pinellas County's large inventory of aging coastal condominiums. We coordinate directly with association boards and inspecting engineers."
              },
              {
                icon: HardHat,
                title: "Medical Facility Construction",
                description: "AHCA-compliant healthcare construction serving the Bayfront, Morton Plant, and Largo medical corridors. Surgical centers, specialty clinics, imaging facilities, and medical office buildouts with infection control protocols and specialized MEP systems."
              },
              {
                icon: Briefcase,
                title: "Retail and Office Buildouts",
                description: "Retail center construction, restaurant buildouts, and office tenant improvements along US 19, downtown St. Petersburg, and Largo's commercial districts. In a built-out county, precise buildout and renovation work is the core of commercial demand."
              },
              {
                icon: FileCheck,
                title: "Design-Build and Adaptive Reuse",
                description: "Single-source design-build delivery and adaptive reuse of aging commercial buildings across Pinellas. Converting older retail, office, and industrial structures to current use while meeting today's Florida Building Code and flood-zone requirements."
              },
              {
                icon: Award,
                title: "Exterior Waterproofing and Restoration",
                description: "Building envelope waterproofing, facade restoration, and concrete repair for Pinellas commercial and multi-family properties. Essential protection against the county's aggressive coastal moisture and salt-air environment."
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

      {/* Local Expertise Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Multi-Jurisdiction Permitting and Coastal Code Knowledge
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Building across Pinellas County means working with many different building authorities. Incorporated cities such as St. Petersburg, Clearwater, and Largo operate their own development services departments with distinct submittal requirements and review timelines, while projects in unincorporated Pinellas go through the county's Building and Development Review Services. A contractor working countywide has to know the expectations of each jurisdiction rather than assuming one process fits all.
              </p>
              <p className="mb-6">
                Coastal exposure shapes nearly every Pinellas project. The Gulf-facing barrier islands sit in some of the highest wind-speed zones in Tampa Bay, with design wind speeds of 150 mph or greater and FEMA VE flood-zone requirements that mandate elevated structures, breakaway walls, and flood-resistant materials below base flood elevation. Salt-laden air accelerates corrosion throughout the county, so we specify marine-grade fasteners, stainless connectors, and protective coatings on exposed structural elements well beyond the immediate waterfront.
              </p>
              <p className="mb-6">
                Beach-area and waterfront projects frequently require concurrent approvals from FEMA for flood compliance, the Southwest Florida Water Management District for stormwater, and the Florida Department of Environmental Protection for coastal construction control line setbacks. Managing these overlapping reviews without stalling the schedule takes established relationships and experience across all of them, which we have built over four decades of Tampa Bay work.
              </p>
              <p>
                Pinellas density also drives the character of construction. With little vacant land, commercial work concentrates on renovating, expanding, and repurposing existing buildings on tight sites hemmed in by neighbors, traffic, and infrastructure. From the redevelopment of downtown St. Petersburg to the aging condominiums of the beach communities and the retail corridors of US 19, Florida Construction Specialists delivers the infill, restoration, and remediation expertise that a built-out coastal county requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Commercial Construction in Pinellas County Cities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Explore our dedicated commercial construction pages for the major Pinellas County markets.
          </p>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {cityLinks.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-brand-green hover:shadow-md transition-all group"
              >
                <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="text-gray-700 group-hover:text-brand-green-dark font-medium">
                  Commercial Construction in {city.name}
                </span>
              </Link>
            ))}
            <Link
              href="/sb4d-compliance/"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-brand-green hover:shadow-md transition-all group"
            >
              <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              <span className="text-gray-700 group-hover:text-brand-green-dark font-medium">
                SB4-D Compliance & Milestone Remediation
              </span>
            </Link>
            <Link
              href="/balcony-reconstruction/"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-brand-green hover:shadow-md transition-all group"
            >
              <ArrowRight className="w-4 h-4 text-brand-gold flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              <span className="text-gray-700 group-hover:text-brand-green-dark font-medium">
                Balcony Repair & Reconstruction
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Pinellas County Commercial Construction FAQ"
        description="Common questions about commercial construction projects across Pinellas County, Florida."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Start Your Pinellas County Commercial Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on your commercial project anywhere in Pinellas County. From a Gulf-beach resort renovation to a downtown St. Petersburg buildout or a condo milestone remediation, we will outline a clear path to delivery.
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
              <span>Certified Building Contractor {BUSINESS_INFO.licenseNumber}</span>
              <span>In-House Engineering</span>
              <span>{BUSINESS_INFO.yearsInBusiness} Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="commercial-construction-pinellas-county" />
    </>
  );
}
