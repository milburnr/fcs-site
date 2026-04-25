import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, ArrowRight, FileCheck, HardHat, Briefcase } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/commercial-construction-st-petersburg/' },
  title: "Commercial Construction St. Pete | Office",
  description: "Commercial construction in St. Petersburg by Florida Construction Specialists. Design-build waterfront development office buildouts.",
  openGraph: {
    title: "Commercial Construction St. Pete | Office",
    description: "Commercial construction in St. Petersburg by Florida Construction Specialists. Design-build waterfront development office buildouts.",
    url: "https://floridaconstructionspecialists.com/commercial-construction-st-petersburg/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How does St. Petersburg's peninsula geography affect commercial construction planning?",
    answer: "St. Petersburg sits on a narrow peninsula between Tampa Bay and the Gulf of Mexico, which means commercial projects face water exposure from multiple directions. This affects foundation design, wind load calculations, and material selection. Buildings in coastal high hazard areas along the bayfront and Gulf beaches require elevated construction, marine-grade fasteners, and enhanced waterproofing systems. We account for these peninsula-specific conditions from the earliest design phases, ensuring structural integrity against the salt air, driving rain, and storm surge potential that comes with building on a landmass surrounded by water on three sides."
  },
  {
    question: "What is the permitting process for commercial construction through the City of St. Petersburg?",
    answer: "Commercial construction permits go through the City of St. Petersburg Development Services Department. Standard commercial plan review typically takes 3 to 6 weeks for straightforward projects, though downtown developments or projects in overlay districts may require additional review cycles involving the Development Review Commission or Community Planning and Preservation Commission. We prepare complete permit packages that address all required disciplines simultaneously, reducing back-and-forth with the city. Projects in locally designated historic areas require a Certificate of Appropriateness before building permits are issued."
  },
  {
    question: "Which commercial districts in St. Petersburg have the most active construction markets?",
    answer: "The Gateway area anchored by Carillon business park remains the largest concentration of corporate office space and sees steady tenant improvement and new construction activity. Downtown St. Petersburg has experienced a building boom with projects like One St. Petersburg and 400 Central reshaping the skyline. The EDGE District and Warehouse Arts District attract adaptive reuse and creative office projects. The Grand Central District along Central Avenue sees ongoing retail and restaurant construction. Each district presents different construction requirements, from corporate build-to-suit standards in Gateway to historic sensitivity in the EDGE District's former industrial buildings."
  },
  {
    question: "Does FCS handle both new commercial construction and renovation projects in St. Petersburg?",
    answer: "We deliver both ground-up commercial construction and renovation work throughout St. Petersburg. Renovation and tenant improvement projects represent a significant portion of our Pinellas County work, particularly in the Gateway corridor where existing office buildings compete for tenants against newer downtown inventory. We also perform adaptive reuse in the EDGE and Warehouse Arts Districts, medical facility renovations near Johns Hopkins All Children's Hospital and Bayfront Health, and commercial interior buildouts in downtown office towers. Our renovation scope includes structural modifications, complete MEP system upgrades, ADA compliance improvements, and full commercial remodels."
  },
  {
    question: "How does Pinellas County's density affect commercial construction logistics in St. Petersburg?",
    answer: "Pinellas County is the most densely populated county in Florida, which directly impacts commercial construction logistics. Staging areas are limited, material deliveries must be carefully scheduled to avoid traffic disruption, and crane operations in downtown St. Petersburg require coordination with adjacent buildings and city right-of-way. We plan detailed logistics sequences for every St. Petersburg project, including haul routes, delivery windows, and staging strategies that account for the compact urban environment. Our experience working in dense Pinellas County conditions means fewer surprises and less impact on surrounding businesses and residents."
  },
  {
    question: "What types of commercial construction does FCS specialize in within St. Petersburg?",
    answer: "In St. Petersburg, we deliver design-build construction, medical and healthcare facilities, multi-family developments, office buildouts and tenant improvements, retail and restaurant construction, industrial and flex space in the Gateway area, and commercial renovations including adaptive reuse. Our St. Petersburg projects typically range from five hundred thousand to twenty-five million dollars. We have depth in waterfront commercial construction given St. Pete's extensive bayfront and Gulf exposure, and in projects requiring coordination with the city's community planning and historic preservation processes."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Commercial Construction", href: "/commercial/" },
  { name: "St. Petersburg", href: "/commercial-construction-st-petersburg/" },
];

export default function CommercialConstructionStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Full-service commercial construction in St. Petersburg, FL. Design-build, waterfront development, office buildings, medical facilities, tenant improvements. Licensed CBC1262722, 40+ years experience."
        city="St. Petersburg"
        minPrice="500000"
        serviceCategories={["Design-Build Construction", "Waterfront Commercial Development", "Office Building Construction", "Medical Facility Construction", "Tenant Improvements"]}
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
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Commercial Construction in St. Petersburg, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              From the corporate campuses lining the Gateway corridor to the waterfront towers transforming downtown St. Pete's skyline, Florida Construction Specialists delivers commercial construction across every sector of Pinellas County's largest city. As a prime general contractor with over four decades of experience, we bring the engineering depth, local permitting knowledge, and bonding capacity that St. Petersburg's peninsula environment demands.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Since 1982</span>
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

      {/* St. Petersburg Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              A Peninsula City Redefining Its Commercial Identity
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                St. Petersburg occupies a unique position in Florida's commercial construction landscape. Built on a peninsula bounded by Tampa Bay to the east and the Gulf of Mexico to the west, the city has evolved from a retirement destination into one of the state's most dynamic commercial markets. The downtown core has been reshaped by high-rise development, with One St. Petersburg rising as the tallest building on Florida's west coast and 400 Central adding luxury residential towers to a skyline that barely existed a decade ago. Sundial St. Pete anchors a retail and entertainment district that has attracted national tenants and local entrepreneurs alike.
              </p>
              <p className="mb-6">
                What makes St. Petersburg's commercial construction environment distinct from neighboring Tampa is the peninsula constraint. Land is finite. Pinellas County is the most densely populated county in Florida, and St. Petersburg is its largest city. This density means commercial development happens through vertical growth downtown, adaptive reuse in transitional districts like the EDGE and Warehouse Arts neighborhoods, and intensification of existing commercial corridors rather than greenfield expansion. Every commercial project requires careful site logistics, neighbor coordination, and creative use of limited staging space.
              </p>
              <p className="mb-6">
                The Gateway corridor, anchored by Carillon business park in the northern part of the city, remains the region's premier suburban office market. Major employers including Raymond James Financial and Jabil have their headquarters here, driving demand for corporate office construction, tenant improvements, and supporting commercial development. Meanwhile, the Grand Central District along Central Avenue and the emerging Deuces Live corridor are generating retail and restaurant construction activity rooted in neighborhood revitalization.
              </p>
              <p>
                Florida Construction Specialists operates as a prime general contractor throughout St. Petersburg and Pinellas County. We never subcontract our general contracting services, which means every project gets direct accountability and the full resources of our in-house engineering and construction teams. Our principal's 43 years of combined construction and insurance industry experience, including work as an Executive General Adjuster, brings risk management insight that is particularly valuable in a peninsula city where water exposure affects nearly every commercial structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/commercial-construction-in-tampa/commercial-construction-in-tampa-display.webp"
        alt="Commercial construction project in St. Petersburg's business district"
        title="Building St. Petersburg's Commercial Future"
        subtitle="Design-build, office, medical, and waterfront construction across Pinellas County"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Commercial Construction Capabilities for St. Petersburg's Evolving Market
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A peninsula city with limited land and maximum demand requires commercial construction expertise adapted to its specific conditions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Design-Build Construction",
                description: "Single-source commercial delivery for St. Petersburg projects. We combine architectural coordination, engineering, and construction management under one contract, particularly effective for the fast-moving downtown development market where speed to occupancy drives project value."
              },
              {
                icon: Shield,
                title: "Medical Facility Construction",
                description: "AHCA-compliant medical construction serving St. Petersburg's healthcare corridor. Johns Hopkins All Children's Hospital and Bayfront Health St. Petersburg anchor a medical district that requires specialized construction for surgical centers, specialty clinics, and medical office buildings with infection control and MEP systems designed for healthcare operations."
              },
              {
                icon: HardHat,
                title: "Waterfront Commercial Development",
                description: "St. Pete's bayfront and Gulf-adjacent commercial projects require marine-grade construction techniques, flood zone compliance, and coordination with SWFWMD and Army Corps of Engineers where applicable. We build commercial structures designed for the salt air, storm surge potential, and coastal wind exposure unique to peninsula construction."
              },
              {
                icon: Briefcase,
                title: "Office and Tenant Improvements",
                description: "Corporate office buildouts throughout St. Petersburg's diverse office markets. From Class A space in downtown towers and the Sundial mixed-use complex to suburban corporate campuses in the Gateway corridor and Carillon business park, we deliver tenant improvements that minimize disruption to building operations."
              },
              {
                icon: FileCheck,
                title: "Adaptive Reuse and Retail",
                description: "The EDGE District and Warehouse Arts District have become models for adaptive reuse, transforming former industrial buildings into breweries, creative offices, and retail spaces. We specialize in these conversions, maintaining structural character while meeting modern commercial code requirements and creating functional business environments."
              },
              {
                icon: Award,
                title: "Commercial Renovations",
                description: "Major renovations throughout St. Petersburg's commercial building stock, from Gateway office modernization projects competing with newer downtown inventory to historic commercial property updates in the Old Northeast and Grand Central Districts. Our renovation work includes structural modifications, complete MEP upgrades, and ADA compliance improvements."
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
              Navigating St. Petersburg's Commercial Construction Environment
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Commercial construction in St. Petersburg operates within a regulatory and physical environment that differs meaningfully from mainland communities. The city controls its own permitting process independent of Pinellas County government, and the peninsula's water-surrounded geography introduces construction considerations that inland contractors often underestimate.
              </p>
              <p className="mb-6">
                The <a href="https://www.stpete.org/building_and_development_review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of St. Petersburg Development Services Department</a> manages commercial building permits within city limits. We have established working relationships with the department and understand how plan review timelines differ between standard commercial projects and those requiring additional review from the Development Review Commission, the Community Planning and Preservation Commission, or the city's historic preservation staff for projects in locally designated districts.
              </p>
              <p className="mb-6">
                St. Petersburg's weather patterns reflect its peninsula position. The city receives approximately 52 inches of rainfall annually, but its exposure to both Tampa Bay and the Gulf of Mexico creates weather dynamics that mainland cities do not experience. Tropical systems can approach from the Gulf side with direct storm surge into the bayfront, or from the bay side driving water inland through low-lying areas like Shore Acres, Coquina Key, and Pinellas Point. Commercial buildings throughout the city must meet Florida Building Code wind speed requirements, and projects in flood zones, which cover significant portions of the city's commercial areas, require elevated construction or flood-resistant design features.
              </p>
              <p className="mb-6">
                Our familiarity with St. Petersburg's neighborhoods shapes project planning at every level. Downtown commercial projects near the Sundial complex or along Beach Drive require understanding of pedestrian traffic patterns, parking constraints, and coordination with ongoing development. Gateway corridor projects involve corporate tenant standards and coordination with property management companies overseeing multi-building campuses. The EDGE District and Warehouse Arts District present adaptive reuse challenges including older structural systems, environmental remediation, and maintaining neighborhood character while meeting commercial occupancy codes. The Tyrone area and 66th Street corridor see retail and medical office construction with different site logistics than the dense downtown core.
              </p>
              <p>
                Projects near St. Petersburg's historic neighborhoods, including the Old Northeast, Historic Kenwood, and Crescent Heights, require awareness of the city's historic preservation overlay requirements. Commercial construction adjacent to or within locally designated historic districts may trigger Certificate of Appropriateness review even when the project property itself is not individually designated. Our experience with these processes helps avoid permitting delays and design conflicts that catch less experienced contractors by surprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg Commercial Construction Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every commercial project in St. Petersburg follows a structured process designed for the peninsula's unique construction environment.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Site Assessment and Pre-Construction",
                description: "We evaluate your St. Petersburg site for flood zone classification, soil conditions, coastal setback requirements, and utility infrastructure. Peninsula sites in low-lying areas like Shore Acres, Isla del Sol, and Coquina Key require careful flood elevation analysis, while downtown sites need assessment of underground utility conflicts from decades of urban development.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Design Coordination and Value Engineering",
                description: "Whether providing design-build services or coordinating with your architect, we ensure constructability, code compliance, and cost efficiency for St. Petersburg conditions. This includes hurricane-resistant structural design for coastal wind zones, energy code compliance, stormwater management per SWFWMD and city requirements, and material selection that accounts for the peninsula's salt air exposure.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting Through City of St. Petersburg",
                description: "We prepare and submit complete permit packages to the City of St. Petersburg Development Services Department. For projects requiring Development Review Commission approval, Community Planning and Preservation review, or historic district compliance, we coordinate across all required city boards before construction begins.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Construction with Pinellas County Subcontractor Network",
                description: "Experienced superintendents manage daily construction using our established network of Pinellas County subcontractors who understand local conditions and code expectations. We schedule around Florida's rainy season, manage tight logistics in dense downtown and Gateway environments, and coordinate with adjacent property operations to minimize disruption.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Closeout and Certificate of Occupancy",
                description: "Thorough punch list resolution, final inspections, Certificate of Occupancy from the City of St. Petersburg, and complete warranty documentation. We provide as-built drawings, equipment manuals, and maintenance guides. For tenant improvement projects in multi-tenant buildings, we coordinate turnover with property management to ensure seamless occupancy.",
                icon: Award,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="St. Petersburg Commercial Construction FAQ"
        description="Common questions about commercial construction projects in St. Petersburg, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="St. Petersburg" currentService="commercial-construction" currentServiceName="Commercial Construction" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Start Your St. Petersburg Commercial Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on your commercial project in St. Petersburg. We will assess your site, discuss your vision, and outline a clear path to successful delivery on the peninsula.
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
              <span>In-House Engineering</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="commercial-construction-st-petersburg" />
    </>
  );
}
