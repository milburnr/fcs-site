import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle, ClipboardCheck } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/balcony-reconstruction-brandon/' },
  title: "Balcony Reconstruction Brandon | SB 4-D",
  description: "Balcony reconstruction and walkway repair in Brandon FL. SB 4-D compliance structural balcony repair waterproofing.",
  openGraph: {
    title: "Balcony Reconstruction Brandon | SB 4-D",
    description: "Balcony reconstruction and walkway repair in Brandon FL. SB 4-D compliance structural balcony repair waterproofing.",
    url: "https://floridaconstructionspecialists.com/balcony-reconstruction-brandon/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How does SB 4-D affect balcony inspections for Brandon condominium and apartment buildings?",
    answer: "SB 4-D requires milestone inspections of condominium buildings that include evaluation of exterior elevated elements such as balconies, walkways, and exterior stairways. For Brandon properties, these inspections are administered through Hillsborough County Building Services since the community is unincorporated. The inspection must be performed by a licensed engineer or architect who evaluates structural integrity, waterproofing condition, railing safety, and connection points where balconies attach to the main building structure. If deficiencies are found, the condo association must plan and execute repairs within the timeframes established by the engineering assessment."
  },
  {
    question: "What are the most common balcony problems found in Brandon's suburban condo buildings?",
    answer: "Brandon's suburban condominiums, typically two to four story garden-style buildings, experience several characteristic balcony issues. The most common are waterproofing membrane failure that allows moisture into the structural concrete or wood framing beneath the walking surface, deteriorated concrete at railing post anchorages where water collects around metal-to-concrete connections, wood rot in balcony framing members in buildings with wood-frame upper stories, and aging aluminum railing systems with corroded connections and loose posts. Unlike coastal buildings, Brandon balconies face less salt spray exposure but still endure over fifty inches of annual rainfall and high humidity that drives moisture-related deterioration."
  },
  {
    question: "How much does balcony reconstruction typically cost for Brandon condo associations?",
    answer: "Balcony reconstruction costs for Brandon suburban condominiums vary based on the extent of deterioration and the type of construction. Waterproofing membrane replacement on structurally sound balconies typically costs three thousand to eight thousand dollars per balcony. Structural concrete repair with waterproofing restoration ranges from eight thousand to twenty thousand dollars per balcony. Full balcony reconstruction including structural framing, new waterproofing, walking surface, and railing replacement can range from fifteen thousand to thirty-five thousand dollars per unit. We provide detailed per-unit estimates based on engineering assessments so associations can budget accurately for SB 4-D compliance."
  },
  {
    question: "Can residents continue using their balconies during reconstruction work?",
    answer: "This depends on the severity of structural issues found during inspection. If an engineer determines that a balcony has critical structural deficiencies, it must be closed to use until repairs are completed. For balconies with minor deterioration that does not pose immediate safety concerns, limited use may continue while reconstruction is scheduled. We work with the structural engineer and condo association to determine safe use parameters and develop construction phasing plans that complete the most critical repairs first while minimizing the time any individual unit's balcony is out of service."
  },
  {
    question: "Does FCS handle both concrete balconies and wood-frame balconies in Brandon buildings?",
    answer: "Yes, we repair and reconstruct both concrete and wood-frame balcony systems found in Brandon's suburban condo and apartment buildings. Many Brandon condominiums have concrete first floors with wood-frame upper stories, which means balconies on different floors may have different structural systems requiring different repair approaches. Concrete balcony repair involves removing deteriorated concrete, treating corroded reinforcing steel, and restoring the structural section with engineered repair materials. Wood-frame balcony reconstruction involves replacing deteriorated framing members, installing new waterproofing systems, and ensuring proper flashing at the building wall connection."
  },
  {
    question: "How does Brandon's weather exposure affect balcony deterioration compared to coastal areas?",
    answer: "Brandon's inland location eliminates the salt spray exposure that accelerates corrosion in coastal balcony systems, but the community's weather conditions still drive significant deterioration. Over fifty inches of annual rainfall, much of it falling in intense afternoon downpours during the summer months, saturates balcony surfaces and tests waterproofing systems repeatedly. High ambient humidity prevents complete drying between rain events, maintaining moisture levels that promote concrete carbonation, rebar corrosion, and wood decay. Temperature cycling between hot sun exposure and cooler evenings causes expansion and contraction that stresses waterproofing membranes and sealant joints. The net result is that Brandon balconies deteriorate at rates comparable to coastal buildings, just through different moisture mechanisms."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction/" },
  { name: "Brandon", href: "/balcony-reconstruction-brandon/" },
];

export default function BalconyReconstructionBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction"
        serviceDescription="Balcony reconstruction and walkway repair in Brandon, FL. SB 4-D compliance, structural repair, waterproofing, railing replacement for suburban condominiums and apartments. Licensed CBC1262722, 40+ years experience."
        city="Brandon"
        minPrice="25000"
        serviceCategories={["Balcony Structural Repair", "Walkway Reconstruction", "Waterproofing Systems", "Railing Replacement", "SB 4-D Compliance"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/fcs-tiles-on-balcony/fcs-tiles-on-balcony-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Brandon & Eastern Hillsborough County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Balcony Reconstruction in Brandon, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Brandon's suburban condominium and apartment communities face the same SB 4-D balcony inspection requirements as high-rise buildings on the coast. Florida Construction Specialists provides structural balcony repair, waterproofing restoration, walkway reconstruction, and railing replacement for multi-family properties across eastern Hillsborough County, with the engineering coordination and permitting experience that these safety-critical projects demand.
            </p>

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
                Schedule a Balcony Assessment
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Brandon's Suburban Balconies Need Professional Reconstruction
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Balconies on Brandon's suburban condominium and apartment buildings occupy a unique position in Florida's building safety landscape. These are not the dramatic cantilevered balconies of coastal high-rises, but they are exterior elevated structures subject to the same SB 4-D inspection requirements and the same structural deterioration forces. Garden-style condominiums built during Brandon's growth decades of the 1980s and 1990s often have balconies that have endured thirty to forty years of Florida weather with minimal structural maintenance, and many are approaching the point where professional assessment and reconstruction are necessary.
              </p>
              <p className="mb-6">
                The construction methods used in Brandon's suburban multi-family buildings create specific balcony repair challenges. Many communities have a combination of concrete ground-floor construction with wood-frame upper stories, meaning balconies at different levels may have entirely different structural systems. Second and third floor balconies in wood-frame construction rely on cantilevered joists, ledger board connections to the building wall, and waterproofing membranes to protect structural wood from moisture. When any of these components fail, the cascading effects threaten both the balcony structure and the building wall behind it.
              </p>
              <p className="mb-6">
                Brandon's open suburban landscape exposes balconies to more direct weather than buildings in dense urban environments where surrounding structures provide some shielding. Afternoon thunderstorms during the May through September rainy season deliver wind-driven rain directly onto balcony surfaces, and the community's over fifty inches of annual rainfall means these elements are wet frequently. Combined with Florida's high humidity that prevents thorough drying between rain events, this exposure creates persistent moisture conditions that accelerate waterproofing membrane breakdown, concrete spalling, wood rot, and metal corrosion in railing systems.
              </p>
              <p>
                Florida Construction Specialists understands the specific challenges of suburban balcony reconstruction. We work with structural engineers to develop repair scopes appropriate for each building's construction type, coordinate with condo associations and property management companies on phasing plans that minimize resident disruption, and execute repairs through Hillsborough County's permitting process with the documentation required for SB 4-D compliance records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/southwinds-condo-front/southwinds-condo-front-display.webp"
        alt="Condominium balcony and walkway reconstruction"
        title="Securing Brandon's Balconies and Walkways"
        subtitle="Structural repair, waterproofing, and SB 4-D compliance for suburban multi-family properties"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Balcony and Walkway Reconstruction Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Complete balcony reconstruction capabilities addressing the structural, waterproofing, and safety challenges found in Brandon's suburban multi-family buildings.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Structural Balcony Repair",
                description: "Repair of deteriorated structural elements in both concrete and wood-frame balcony systems. For concrete balconies, we remove spalled concrete, treat corroded reinforcing steel, and restore structural capacity with engineered repair materials. For wood-frame balconies, we replace deteriorated joists, ledger boards, and support members with pressure-treated or composite materials."
              },
              {
                icon: Shield,
                title: "Waterproofing System Replacement",
                description: "Complete removal and replacement of failed balcony waterproofing membranes with modern systems designed for Florida's rainfall exposure. We install traffic-rated waterproofing membranes, proper slope-to-drain configurations, through-wall flashing at building connections, and drainage systems that direct water away from structural elements."
              },
              {
                icon: Building2,
                title: "Elevated Walkway Reconstruction",
                description: "Structural repair and reconstruction of exterior elevated walkways and corridors common in garden-style condo communities. These shared access elements carry heavier traffic loads than individual balconies and require robust structural repair approaches, non-slip walking surfaces, and code-compliant railing systems."
              },
              {
                icon: HardHat,
                title: "Railing System Replacement",
                description: "Removal of deteriorated aluminum, steel, or wood railing systems and installation of new code-compliant railings. Current Florida Building Code requires specific height, spacing, and load capacity standards that many older railing systems do not meet. We install railing systems with proper anchorage details that prevent the moisture intrusion problems that deteriorated original installations."
              },
              {
                icon: FileCheck,
                title: "Exterior Stairway Repair",
                description: "Structural assessment and repair of exterior stairways in multi-family buildings. These high-traffic, weather-exposed elements are critical egress paths and subject to strict building code requirements for structural capacity, non-slip treads, handrail configuration, and lighting. We ensure repaired stairways meet all current code standards."
              },
              {
                icon: ClipboardCheck,
                title: "SB 4-D Documentation",
                description: "Complete documentation of balcony reconstruction work for SB 4-D compliance files. We coordinate with the structural engineer of record to verify that completed repairs satisfy the requirements identified in milestone inspections, and we provide the association with comprehensive records suitable for regulatory compliance and future inspection reference."
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
              Balcony Reconstruction Knowledge for Brandon's Multi-Family Properties
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Balcony reconstruction in Brandon requires permits through <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a> since the community is unincorporated. Structural repair permits for balcony work require engineered drawings showing the proposed repairs, material specifications, and connection details that demonstrate compliance with current Florida Building Code load and safety requirements. Our familiarity with the county's plan review process for structural repair permits helps minimize approval timelines.
              </p>
              <p className="mb-6">
                Working in occupied residential communities requires careful planning that standard commercial construction does not demand. Brandon's condo residents live in their units during balcony reconstruction, and the work generates noise, dust, and temporary loss of balcony access. We develop phasing plans that typically address one building or one section at a time, provide advance notice to affected residents, maintain safe pedestrian access around work areas, and schedule the most disruptive activities during standard working hours.
              </p>
              <p className="mb-6">
                The financial aspect of balcony reconstruction is often as challenging as the technical work for Brandon condo associations. Many associations have not maintained adequate reserves for major structural repairs, and SB 4-D compliance requirements can create urgent funding needs. We help associations by providing detailed, accurate cost estimates early in the planning process so boards can evaluate funding options, whether through existing reserves, special assessments, construction loans, or phased repair programs that spread costs over multiple budget years.
              </p>
              <p>
                Our Ruskin location provides efficient access to Brandon communities for the sustained daily presence that balcony reconstruction projects require. Unlike contractors traveling from distant offices, our project managers and superintendents are on-site regularly, maintaining quality control, coordinating with residents and property managers, and ensuring that each phase of reconstruction progresses on schedule. This proximity also enables rapid response when weather delays or unexpected conditions require schedule adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Brandon Balcony Reconstruction Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured process that addresses structural safety while respecting the needs of residents in occupied communities.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Engineering Assessment Review",
                description: "We review the structural engineer's inspection findings to understand the scope of balcony deterioration across the property. We meet with the association board and engineer to discuss repair priorities, phasing options, and preliminary cost ranges for each repair category.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Repair Design and Cost Estimation",
                description: "Working with the structural engineer, we develop detailed repair specifications for each balcony condition type found on the property. We prepare comprehensive cost estimates with per-unit breakdowns that enable the association to plan financially and communicate costs to unit owners.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting and Resident Communication",
                description: "We submit structural repair permits to Hillsborough County Building Services and coordinate with the association on resident notification. Clear communication about work schedules, access restrictions, and expected duration helps maintain resident cooperation throughout the project.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Phased Reconstruction",
                description: "We execute balcony repairs in planned phases, typically addressing one building or section at a time. Each balcony is inspected, repaired, waterproofed, and verified before moving to the next. Quality control inspections at each phase ensure repairs meet engineering specifications.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Engineering Verification and Closeout",
                description: "The structural engineer verifies completed repairs against the original assessment findings. Hillsborough County conducts final inspections. We provide the association with complete documentation including repair records, warranty information, and maintenance recommendations for ongoing balcony care.",
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
        title="Brandon Balcony Reconstruction FAQ"
        description="Common questions about balcony reconstruction and SB 4-D compliance in Brandon, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Brandon" currentService="balcony-reconstruction" currentServiceName="Balcony Reconstruction" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Address Your Brandon Property's Balcony Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss balcony reconstruction or SB 4-D compliance for your Brandon condominium or apartment community. We will review your engineering assessment, provide detailed cost estimates, and develop a repair plan that works for your association.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Board Consultation
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
    </>
  );
}
