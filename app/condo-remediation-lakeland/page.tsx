import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle, ClipboardCheck } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/condo-remediation-lakeland/' },
  title: "Condo Remediation Lakeland | SB4-D",
  description: "Condo remediation in Lakeland by Florida Construction Specialists. SB4-D milestone inspections structural repair.",
  openGraph: {
    title: "Condo Remediation Lakeland | SB4-D",
    description: "Condo remediation in Lakeland by Florida Construction Specialists. SB4-D milestone inspections structural repair.",
    url: "https://floridaconstructionspecialists.com/condo-remediation-lakeland/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How does SB 4-D (the Surfside law) affect condominium buildings in Lakeland?",
    answer: "Florida Senate Bill 4-D requires structural milestone inspections for condominium buildings three stories or taller when they reach 30 years of age, with follow-up inspections every 10 years thereafter. While the law was prompted by the Surfside coastal collapse, it applies equally to inland cities like Lakeland. Many of Lakeland's older condominium buildings near Lake Hollingsworth, Lake Morton, and downtown have already reached or will soon reach the 30-year milestone. Associations must engage a licensed engineer or architect to perform the inspection, and if structural deficiencies are identified, remediation work must be completed within a prescribed timeframe. We work directly with the inspecting engineers and association boards to develop remediation plans and execute repairs efficiently."
  },
  {
    question: "What types of structural issues are most common in Lakeland condominiums?",
    answer: "Lakeland's inland location means condo buildings do not face saltwater corrosion like coastal properties, but they have their own set of structural challenges. The most common issues we encounter are water intrusion damage from heavy rainfall penetrating building envelopes, concrete spalling caused by moisture migration through aging waterproofing membranes, reinforcing steel corrosion from prolonged moisture exposure in humid conditions, foundation settlement in Lakeland's sandy soils, and deterioration of balcony and walkway structures from decades of rain exposure. Lightning strikes, which are extremely frequent in Lakeland's Lightning Alley location, can also cause hidden structural damage to rooftop equipment supports and parapet walls."
  },
  {
    question: "How do Lakeland's lake-front condominiums differ from coastal condo buildings in terms of remediation needs?",
    answer: "Lake-front condominiums in Lakeland face different deterioration patterns than coastal buildings. They do not have chloride-laden salt spray attacking the concrete and reinforcing steel, which is the primary driver of structural distress in coastal condos. Instead, Lakeland's lake-front buildings contend with freshwater moisture from high humidity and lake proximity, groundwater pressure on foundations due to elevated water tables near lake shorelines, intense UV exposure on south and west facing elevations, and biological growth including mold and algae that can penetrate building envelope systems. Remediation approaches must address these inland-specific conditions rather than defaulting to coastal repair specifications that may not address the actual causes of deterioration."
  },
  {
    question: "What is the typical cost range for condo remediation projects in Lakeland?",
    answer: "Condo remediation costs in Lakeland vary significantly based on building size, the scope of structural deficiencies, and the systems requiring repair. Minor concrete restoration and waterproofing membrane replacement on a small condominium building might run two hundred thousand to five hundred thousand dollars. Major structural remediation involving steel reinforcement repair, foundation stabilization, and complete building envelope restoration on a larger complex can range from one million to five million dollars or more. We provide detailed cost estimates after completing a thorough building assessment and reviewing any existing milestone inspection reports. Special assessments are a major concern for associations, and we work to phase remediation work when possible to distribute costs over time."
  },
  {
    question: "Does FCS coordinate with the milestone inspection engineers for Lakeland condo projects?",
    answer: "Yes, coordination with the inspecting engineer or architect is a critical part of our condo remediation process. When a milestone inspection identifies structural deficiencies, the engineer's report becomes the basis for the remediation scope. We review the inspection findings in detail, meet with the engineer to clarify repair specifications, and develop a remediation plan that addresses every identified item. Throughout construction, we maintain open communication with the inspecting engineer so they can verify that repairs meet their specifications. Upon completion, we coordinate the final inspection to confirm that all deficiencies have been properly remediated, which is required before the building can receive its compliance documentation from the City of Lakeland or Polk County."
  },
  {
    question: "How does FCS minimize disruption to residents during condo remediation in Lakeland?",
    answer: "Condominium residents in Lakeland are often retirees or long-term owners who are particularly sensitive to construction disruption. We develop detailed phasing plans that minimize the number of units affected at any given time. Exterior work is sequenced by building elevation so that scaffolding and work platforms move systematically around the structure. Interior work in individual units is scheduled with advance notice to residents, and we designate specific work hours that respect the community's daily routine. For lake-front condominiums where outdoor living areas are a major amenity, we phase work to keep pool decks, walkways, and lake-view common areas accessible whenever possible. Noise-intensive work like concrete removal and drilling is limited to daytime hours specified in the community's construction rules."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Condo Remediation", href: "/condo-remediation/" },
  { name: "Lakeland", href: "/condo-remediation-lakeland/" },
];

export default function CondoRemediationLakelandPage() {
  return (
    <>
      <LocalBusinessSchema city="Lakeland" service="Condo Remediation" />
      <ServiceSchema
        serviceName="Condo Remediation"
        serviceDescription="Condominium remediation and structural repair in Lakeland, FL. SB4-D milestone inspection compliance, concrete restoration, building envelope repair, foundation stabilization for lake-front and downtown condominiums. Licensed CBC1262722, 40+ years experience."
        city="Lakeland"
        minPrice="200000"
        serviceCategories={["Structural Remediation", "Concrete Restoration", "Building Envelope Repair", "SB4-D Compliance", "Foundation Stabilization"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/southwinds-condo-front/southwinds-condo-front-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Lakeland, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Condo Remediation in Lakeland, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Lakeland's condominium buildings around Lake Hollingsworth, Lake Morton, and downtown are reaching the age where SB 4-D milestone inspections reveal structural issues that demand professional remediation. Florida Construction Specialists delivers the engineering expertise and construction capability to restore aging condominium structures, address inspection findings, and bring buildings into compliance with Florida's structural safety requirements.
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
                Schedule Building Assessment
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SB4-D Hub Callout */}
      <section className="py-4 bg-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex items-center gap-3 text-sm">
            <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-blue-800">
              <strong>SB4-D Compliance Resource:</strong> For comprehensive compliance checklists, deadlines, and cost guidance, visit our{' '}
              <Link href="/sb4d-compliance/" className="underline font-semibold hover:text-blue-600">SB4-D Compliance Hub</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Lakeland Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Lakeland's Aging Condominiums Need Attention Now
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Lakeland's condominium inventory tells a story common across Central Florida. Many of the city's multi-story condominium buildings were constructed during building booms in the 1980s and 1990s, concentrated around the scenic lakes that make Lakeland a desirable place to live. Buildings near Lake Hollingsworth, Lake Morton, Lake Hunter, and Lake Bonny are now 30 to 45 years old, putting them squarely in the window where Florida Senate Bill 4-D requires structural milestone inspections. These inspections are revealing the accumulated effects of decades of Florida weather on buildings that, while well-constructed for their era, were not designed for the durability standards required by today's codes.
              </p>
              <p className="mb-6">
                The structural challenges facing Lakeland condominiums are distinctly different from coastal properties. There is no salt spray corroding reinforcing steel or hurricane-driven wave action undermining foundations. Instead, Lakeland's condominium buildings face deterioration from years of heavy inland rainfall, the extreme humidity of Central Florida summers, lightning strikes that can damage rooftop structures and electrical systems, and the gradual effects of building in sandy Polk County soils where foundation movement can introduce stresses into the structural frame. Water intrusion through aging building envelopes is the single most common structural issue we encounter in Lakeland condominiums, because even small envelope failures allow moisture to reach reinforcing steel in concrete structures over time.
              </p>
              <p className="mb-6">
                For condominium associations in Lakeland, the SB 4-D requirements create both urgency and financial pressure. Milestone inspections must be completed on schedule, and any structural deficiencies identified must be remediated. Reserve studies conducted under the new law are revealing funding gaps in many associations that deferred maintenance spending for years. The result is a wave of condo remediation projects throughout Lakeland as associations face mandatory repairs they can no longer postpone. Some buildings near the downtown lakes are discovering that decades-old waterproofing has failed, allowing moisture into concrete structural elements that now require extensive repair.
              </p>
              <p>
                Florida Construction Specialists brings specialized experience in condominium structural remediation to the Lakeland market. Our principal's background combining construction expertise with insurance industry experience as an Executive General Adjuster gives us unique insight into building failure analysis and repair methodology. We work with association boards, property managers, and inspecting engineers to develop remediation plans that address every identified deficiency while respecting the financial constraints that associations face. As a prime general contractor, we maintain direct control over every aspect of the remediation work, from concrete testing and structural repair to building envelope restoration and finish work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/southwinds-condo-front/southwinds-condo-front-display.webp"
        alt="Condominium building remediation in Lakeland"
        title="Restoring Lakeland's Condominium Buildings"
        subtitle="SB4-D compliance, structural repair, and building envelope restoration for lake-front and downtown condos"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Condo Remediation Services for Lakeland's Building Stock
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From milestone inspection response to complete structural restoration, we deliver every aspect of condominium remediation in Lakeland.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "SB 4-D Milestone Compliance",
                description: "Complete response to milestone inspection findings for Lakeland condominiums. We review engineer reports, develop remediation scopes, execute structural repairs, and coordinate final inspections to achieve compliance documentation. Our experience with SB 4-D requirements ensures nothing is missed in the remediation process."
              },
              {
                icon: Building2,
                title: "Concrete Restoration",
                description: "Repair of spalled, delaminated, and deteriorated concrete in structural elements including columns, beams, floor slabs, and balcony structures. We remove damaged concrete, clean and treat exposed reinforcing steel, apply corrosion-inhibiting treatments, and restore sections with engineered repair mortars designed for Lakeland's humid inland climate."
              },
              {
                icon: Shield,
                title: "Building Envelope Repair",
                description: "Restoration of waterproofing membranes, sealant systems, stucco and exterior finishes, window and door flashing, and roof-to-wall transitions. Water intrusion through failed building envelopes is the primary cause of structural deterioration in Lakeland condominiums, and comprehensive envelope repair is essential to preventing future damage after structural repairs are completed."
              },
              {
                icon: HardHat,
                title: "Foundation Stabilization",
                description: "Assessment and repair of foundation systems affected by settlement in Lakeland's sandy soils. We work with geotechnical engineers to evaluate foundation conditions, install supplemental support systems when needed, and repair structural elements stressed by differential settlement. Lake-adjacent properties often require special attention due to variable water table conditions."
              },
              {
                icon: ClipboardCheck,
                title: "Structural Integrity Reserve Studies",
                description: "Support for condominium associations conducting the structural integrity reserve studies now required by Florida law. We provide construction cost data, remaining useful life assessments for building components, and repair cost projections that help associations develop accurate reserve funding plans for future maintenance and remediation work."
              },
              {
                icon: FileCheck,
                title: "Preventive Maintenance Programs",
                description: "Ongoing maintenance programs for Lakeland condominiums that have completed remediation work. Regular inspections, sealant replacement, waterproofing maintenance, and minor repair work extend the life of remediation investments and help associations avoid the cycle of deferred maintenance that leads to expensive emergency repairs."
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
              Understanding Lakeland's Condominium Landscape
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Lakeland's condominium stock is concentrated in several distinct areas, each with its own building characteristics and remediation considerations. The Lake Hollingsworth area features condominium buildings that enjoy premium views of the lake and proximity to Florida Southern College's Frank Lloyd Wright campus. Many of these buildings date to the 1980s and early 1990s and are now entering the SB 4-D inspection window. The Lake Morton and Lake Mirror areas in downtown Lakeland have a mix of condominium and converted apartment buildings, some occupying structures with additional historic significance.
              </p>
              <p className="mb-6">
                The <a href="https://www.lakelandgov.net/departments/community-development/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Lakeland Community Development Department</a> oversees building permits for remediation work within city limits, and we maintain established working relationships with their inspection staff. For condominiums in unincorporated Polk County, permits go through the county building division. Remediation projects often require structural engineering plans reviewed and sealed by a Florida-licensed professional engineer, which we coordinate as part of our pre-construction process.
              </p>
              <p className="mb-6">
                Weather considerations affect remediation scheduling in Lakeland. Concrete repair work requires dry conditions for proper bonding, and Lakeland's summer thunderstorms demand careful scheduling of exterior concrete restoration. We plan exterior remediation work for the October through May dry season when possible, reserving interior structural work and planning activities for the wetter summer months. The intense UV exposure on south and west facing building elevations in Lakeland also affects material selection for coatings and waterproofing membranes, which must withstand both moisture and solar degradation.
              </p>
              <p>
                Working with condominium associations requires communication skills that go beyond technical construction expertise. Board members are often unit owners serving in a volunteer capacity, and they need clear explanations of what repairs are necessary, why they are necessary, and what the costs will be. We attend board meetings to present remediation plans, provide detailed cost breakdowns, and answer questions from concerned unit owners. Our experience with condominium projects throughout Central Florida means we understand the governance dynamics, the special assessment process, and the communication expectations that make these projects run smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Lakeland Condo Remediation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured approach to condominium remediation that addresses structural deficiencies while respecting association governance and resident needs.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Inspection Review and Assessment",
                description: "We review the milestone inspection report with the inspecting engineer, conduct our own supplemental assessment to evaluate construction scope, and identify any additional investigation needed. For Lakeland condominiums, we pay particular attention to water intrusion pathways, foundation conditions in sandy soils, and areas of the building envelope exposed to prevailing storm directions.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Remediation Plan and Budget",
                description: "We develop a detailed remediation plan with prioritized repair sequences, material specifications appropriate for Lakeland's inland climate, and a comprehensive budget that the association can use for special assessment planning. We present the plan to the board and attend owner meetings to explain the scope and costs.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting and Mobilization",
                description: "We submit structural repair plans to the City of Lakeland Community Development Department or Polk County for permit review, coordinate with the association on construction access and resident notification, and mobilize equipment and materials. Scaffolding and work platforms are installed with minimal disruption to building access and parking.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Structural Repair and Envelope Restoration",
                description: "Systematic execution of concrete restoration, steel treatment, building envelope repair, and all identified structural repairs. Our superintendents manage daily work with strict quality control and regular documentation. Progress updates are provided to the association board and property manager throughout construction.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Final Inspection and Compliance",
                description: "Coordination with the inspecting engineer for final verification that all identified deficiencies have been remediated per specifications. We obtain all required inspection approvals, provide complete documentation of repairs performed, and deliver maintenance recommendations to help the association protect the investment in remediation work.",
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
        title="Lakeland Condo Remediation FAQ"
        description="Common questions about condominium remediation and SB4-D compliance in Lakeland, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Lakeland" currentService="condo-remediation" currentServiceName="Condo Remediation" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Address Your Lakeland Condo's Structural Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your condominium's remediation needs. Whether responding to a milestone inspection or planning preventive maintenance, we provide the expertise and direct accountability your association needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Building Assessment
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Engineering Coordination</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="condo-remediation-lakeland" />
    </>
  );
}
