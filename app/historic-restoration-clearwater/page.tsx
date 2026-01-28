import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, Users, FileCheck, BookOpen, Landmark, Hammer, Scale, Waves, Sun } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, ArticleSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historic Restoration Clearwater FL | Harbor Oaks, Downtown & Coastal | FCS",
  description: "Expert historic restoration contractor in Clearwater, Florida. Downtown Cleveland Street, Harbor Oaks neighborhood, coastal preservation. Secretary of Interior Standards, SHPO coordination, tax credit projects. $500K-$50M+. Call (813) 420-7561.",
  keywords: "historic restoration clearwater, harbor oaks restoration, downtown clearwater historic, cleveland street restoration, coastal preservation florida, SHPO clearwater, historic tax credits pinellas",
};

const serviceTypes = [
  {
    title: "Historic Building Restoration",
    description: "Complete restoration of historic structures to period-accurate condition, addressing structural issues, deteriorated materials, and code compliance while preserving architectural character unique to Clearwater's Gulf Coast heritage."
  },
  {
    title: "Coastal Historic Preservation",
    description: "Specialized restoration addressing the unique challenges of Clearwater's coastal environment—salt air corrosion, hurricane damage, and beachfront preservation requirements."
  },
  {
    title: "Facade Restoration",
    description: "Exterior restoration of historic building facades including masonry repair, stucco restoration, window preservation, and historically appropriate paint systems designed for coastal conditions."
  },
  {
    title: "Adaptive Reuse Projects",
    description: "Sensitively converting historic buildings to new uses—commercial buildings to restaurants, historic homes to bed-and-breakfasts—while maintaining Clearwater's architectural heritage."
  },
  {
    title: "Structural Stabilization",
    description: "Addressing foundation issues, structural deterioration, and load-bearing concerns in historic buildings using minimally invasive methods that preserve original fabric while meeting current hurricane codes."
  },
  {
    title: "SHPO Coordination",
    description: "Full coordination with Florida State Historic Preservation Office for tax credit projects, ensuring rehabilitation work meets Secretary of Interior Standards for Clearwater properties."
  }
];

// Clearwater-specific historic restoration FAQs
const clearwaterFaqs = [
  {
    question: "What historic areas does FCS serve in Clearwater?",
    answer: "Florida Construction Specialists serves all of Clearwater's historic areas including Downtown Clearwater's Cleveland Street Historic District, the Harbor Oaks neighborhood (one of Clearwater's original planned communities from the 1920s), and individual historic landmarks throughout the city. We also work on historic properties in nearby Safety Harbor and Dunedin. Our team understands Clearwater's unique position as both a beach resort town and a community with significant early 20th-century architecture that deserves preservation."
  },
  {
    question: "How does coastal location affect historic restoration in Clearwater?",
    answer: "Clearwater's Gulf Coast location creates unique preservation challenges including salt air corrosion that accelerates deterioration of metals, masonry, and wood; hurricane exposure requiring structures to meet current wind codes while maintaining historic character; beach erosion and flooding concerns for properties near the water; and intense UV exposure that degrades exterior finishes faster than inland locations. We specify marine-grade materials and coastal-appropriate restoration methods that extend the life of historic buildings while preserving their character."
  },
  {
    question: "Can I get tax credits for historic restoration in Clearwater?",
    answer: "Yes, qualifying projects in Clearwater may be eligible for the Federal Historic Preservation Tax Credit (20% for income-producing properties), Florida's ad valorem tax exemption for historic properties, and local incentive programs. To qualify for federal tax credits, buildings must be listed on the National Register of Historic Places or be contributing structures in a registered historic district. We can assist with National Register nominations and coordinate SHPO applications to ensure rehabilitation work meets certification requirements."
  },
  {
    question: "What's involved in restoring Harbor Oaks historic homes?",
    answer: "Harbor Oaks, developed in the 1920s as one of Clearwater's first planned neighborhoods, features Mediterranean Revival, Colonial Revival, and Spanish Eclectic homes with distinctive architectural details. Restoration involves preserving character-defining features like decorative stucco work, clay tile roofs, arched windows and doorways, and period-appropriate landscaping. The neighborhood's special area plan includes design guidelines we navigate on every project. We restore these homes to period-accurate condition while sensitively integrating modern systems."
  },
  {
    question: "How do you handle hurricane requirements in historic buildings?",
    answer: "Florida Building Code requires historic buildings undergoing substantial renovation to meet current wind and flood standards. We design solutions that satisfy structural requirements while preserving historic character—concealed structural reinforcement, historically appropriate impact-resistant windows and shutters, elevated mechanical systems, and improved envelope performance. For buildings seeking tax credits, we ensure modifications meet Secretary of Interior Standards for compatibility with historic character."
  },
  {
    question: "What's the process for historic preservation approval in Clearwater?",
    answer: "Clearwater has local historic landmark designation with design guidelines administered by the Planning Department. Projects affecting designated properties require staff review and potentially Development Review Committee approval. For Harbor Oaks, the special area plan includes specific standards. We prepare comprehensive applications with historic documentation, proposed work descriptions, and material specifications. Approval typically takes 3-6 weeks. For tax credit projects, we also coordinate SHPO review."
  },
  {
    question: "What are typical costs for historic restoration in Clearwater?",
    answer: "Historic restoration in Clearwater typically costs more than conventional renovation due to specialized craftsmanship, period materials, and coastal construction requirements. Budget ranges are: facade restoration $60-175 per square foot of facade (higher due to coastal conditions); full building restoration $225-425+ per square foot; interior restoration $175-325 per square foot. These vary based on building condition, level of restoration, and coastal exposure. Federal tax credits (20%) can substantially offset costs for income-producing properties."
  },
  {
    question: "How long does historic restoration take in Clearwater?",
    answer: "Historic restoration timelines in Clearwater depend on project scope, approval requirements, and seasonal considerations. Minor exterior work might take 3-5 months; significant building restoration 14-26 months; complex adaptive reuse projects 20-36 months. Tourism season (December-April) can affect construction logistics, particularly for downtown and beach-area projects. Additional time is needed for local approvals (1-2 months) and SHPO review for tax credit projects (4-6 months). We build these factors into realistic project schedules."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/historic-restoration/" },
  { name: "Clearwater", href: "/historic-restoration-clearwater/" },
];

export default function HistoricRestorationClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Expert historic restoration contractor serving Clearwater, Florida. Downtown Cleveland Street, Harbor Oaks neighborhood, coastal historic preservation. Secretary of Interior Standards compliance, SHPO coordination, tax credit projects. Projects from $500K to $50M+."
        city="Clearwater"
        minPrice="500000"
      />

      <ArticleSchema
        headline="Historic Restoration Clearwater FL | Harbor Oaks, Downtown & Coastal | FCS"
        description="Expert historic restoration contractor in Clearwater, Florida. Downtown Cleveland Street, Harbor Oaks neighborhood, coastal preservation. Secretary of Interior Standards, SHPO coordination."
        datePublished="2024-06-01"
        dateModified="2025-01-18"
        slug="/historic-restoration-clearwater/"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems.slice(1)} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/historic-preservation.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Clearwater, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Historic Restoration in Clearwater, FL
            </h1>
            <p className="text-xl text-gray-200 mb-4 max-w-3xl">
              Florida Construction Specialists delivers expert historic restoration throughout Clearwater—from the early 20th-century commercial buildings of Downtown Cleveland Street to the Mediterranean Revival mansions of Harbor Oaks and historic beachfront properties requiring specialized coastal preservation.
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              As Clearwater's trusted historic preservation contractor, we restore buildings to Secretary of Interior Standards, coordinate SHPO approvals for tax credit projects, and address the unique challenges of coastal historic preservation—always with full accountability as the prime contractor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Project Consultation
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
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Waves className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Coastal Preservation Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$10M+ Bonding Capacity</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Tax Credit Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Historic Restoration Services in Clearwater
              </h2>
              <p className="text-gray-600 mb-6">
                Clearwater's architectural heritage reflects its development as an early 20th-century Gulf Coast resort town, with distinctive historic buildings concentrated in the downtown Cleveland Street district and the planned Harbor Oaks neighborhood. While smaller than Tampa's or St. Petersburg's historic inventory, Clearwater's historic buildings represent important examples of Mediterranean Revival, Colonial Revival, and early Florida commercial architecture deserving preservation.
              </p>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists brings specialized expertise to Clearwater's historic buildings, including deep understanding of coastal preservation challenges. Salt air corrosion, hurricane exposure, and beach erosion create conditions not found in inland markets. Our restoration projects address these factors while maintaining historic character and meeting Secretary of Interior Standards for tax credit qualification.
              </p>
              <p className="text-gray-600 mb-8">
                As a prime general contractor—never a subcontractor—we maintain full control and accountability on every Clearwater historic project. Our relationships with preservation craftspeople, specialty trades, and local officials ensure smooth execution from documentation through final restoration, whether you're restoring a Harbor Oaks mansion or adapting a downtown commercial building for contemporary use.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Our Historic Restoration Capabilities
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {serviceTypes.map((service) => (
                  <div key={service.title} className="border border-gray-200 rounded-lg p-5 hover:border-brand-green transition-colors">
                    <h4 className="font-bold text-brand-green-dark mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Clearwater Historic Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RelatedServices city="Clearwater" currentService="historic-restoration" />
              <NearbyLocations currentCity="Clearwater" service="historic-restoration" serviceName="Historic Restoration" />

              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark rounded-lg p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Start Your Clearwater Project</h3>
                <p className="text-gray-200 mb-4 text-sm">
                  Contact us for a project consultation. Historic restoration in Clearwater starting at $500,000.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-green-dark font-bold py-3 px-4 rounded-full hover:bg-brand-gold-light transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clearwater Historic Areas Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Clearwater's Historic Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Downtown Cleveland Street District</h3>
              <p className="text-gray-600 text-sm">
                Clearwater's historic commercial core contains early 20th-century buildings now being restored as downtown revitalization continues. Mediterranean Revival, Mission, and Vernacular commercial buildings line Cleveland Street, offering adaptive reuse opportunities for restaurants, retail, and creative offices. Several buildings have been extensively restored, setting a high standard for preservation efforts.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Harbor Oaks Neighborhood</h3>
              <p className="text-gray-600 text-sm">
                One of Clearwater's original planned communities, Harbor Oaks was developed in the 1920s with Mediterranean Revival, Colonial Revival, and Spanish Eclectic homes. The neighborhood features mature oak canopy, period streetscaping, and distinctive architectural details including decorative stucco, clay tile roofs, and arched openings. The special area plan ensures preservation of neighborhood character.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Historic Beachfront Properties</h3>
              <p className="text-gray-600 text-sm">
                Clearwater Beach and Sand Key contain historic hospitality and residential structures from the area's early resort development. These coastal properties face intense preservation challenges from salt air, storm exposure, and flooding. Restoration requires marine-grade materials, hurricane-resistant modifications, and specialized coastal construction techniques while maintaining historic character.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Historic Landmarks</h3>
              <p className="text-gray-600 text-sm">
                Clearwater's individually designated historic landmarks include significant public buildings, churches, and notable residences throughout the city. These properties, whether listed on the National Register or designated locally, may qualify for tax incentives and require preservation-sensitive treatment for alterations. We work with owners to maximize both historic integrity and available incentives.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Safety Harbor and Dunedin Historic Districts</h3>
              <p className="text-gray-600 text-sm">
                Adjacent to Clearwater, Safety Harbor and Dunedin maintain charming historic downtown districts with early 20th-century commercial and residential architecture. These communities have active preservation programs and historic resources that complement Clearwater's inventory. We serve property owners throughout the greater Clearwater area seeking preservation expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Preservation Challenges */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Coastal Historic Preservation Challenges
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-8 text-center">
              Clearwater's Gulf Coast location creates unique challenges for historic preservation not found in inland markets. Our restoration approach addresses these factors while maintaining historic character.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Waves className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Salt Air Corrosion</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Clearwater's salt-laden air accelerates deterioration of metals, masonry, and wood far faster than inland locations. Historic buildings suffer from corroding hardware, spalling masonry, and deteriorating wood at accelerated rates. We specify marine-grade replacement materials and protective coatings that extend restoration longevity in the coastal environment.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Sun className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">UV Exposure</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Florida's intense UV radiation degrades paint, sealants, and roofing materials faster than northern climates. Historic buildings in Clearwater require more frequent maintenance and restoration of exterior finishes. We specify UV-resistant coatings and finishes that provide extended protection while maintaining period-appropriate appearance.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Hurricane Requirements</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Clearwater's direct Gulf exposure increases hurricane risk, and Florida Building Code requires substantial renovations to meet current wind standards. We design structural reinforcement, impact protection, and envelope improvements that satisfy code requirements while preserving historic character—a balance essential for tax credit certification.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Flood Zone Compliance</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Beach areas and barrier islands fall within VE and AE flood zones with strict FEMA requirements. Historic buildings undergoing substantial improvement may need elevation or flood-proofing modifications. We design flood-resistant solutions that protect historic buildings while meeting regulatory requirements and maintaining architectural integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Timeline Comparison Table */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Clearwater Historic Restoration: Costs & Timelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-green-dark text-white">
                    <th className="text-left p-4 font-semibold">Project Type</th>
                    <th className="text-left p-4 font-semibold">Cost Range</th>
                    <th className="text-left p-4 font-semibold">Typical Timeline</th>
                    <th className="text-left p-4 font-semibold">Tax Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Facade Restoration</td>
                    <td className="p-4">$60-175/SF (facade)</td>
                    <td className="p-4">4-10 months</td>
                    <td className="p-4">Potentially eligible</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Full Building Restoration</td>
                    <td className="p-4">$225-425+/SF</td>
                    <td className="p-4">14-26 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Interior Historic Restoration</td>
                    <td className="p-4">$175-325/SF</td>
                    <td className="p-4">8-16 months</td>
                    <td className="p-4">Part of whole-building</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Adaptive Reuse</td>
                    <td className="p-4">$200-375/SF</td>
                    <td className="p-4">16-32 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Coastal/Beachfront Restoration</td>
                    <td className="p-4">$275-500/SF</td>
                    <td className="p-4">18-36 months</td>
                    <td className="p-4">Case-by-case evaluation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs are higher than inland markets due to coastal construction requirements and marine-grade materials. Federal Historic Tax Credits (20%) available for qualifying income-producing properties.
            </p>
          </div>
        </div>
      </section>

      {/* Preservation Standards Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Meeting Clearwater's Preservation Standards
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Secretary of Interior Standards</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Federal tax credit projects must meet the Secretary of Interior's Standards for Rehabilitation—10 principles that guide preservation work. We ensure all restoration decisions align with these standards, from material selection to treatment approaches. This framework also guides best practices for non-tax-credit projects seeking preservation quality.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">SHPO Coordination</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Projects seeking state or federal historic tax credits require Florida State Historic Preservation Office approval. We coordinate Part 1 (significance), Part 2 (proposed work), and Part 3 (completed work) applications, ensuring rehabilitation plans are approved before construction begins and certified upon completion for Clearwater properties.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Clearwater Planning Review</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Clearwater's Planning Department reviews alterations to locally designated historic properties and structures in protected areas like Harbor Oaks. We prepare thorough applications with historic documentation, proposed work descriptions, and material specifications. Our understanding of Clearwater's guidelines helps streamline the approval process.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Hammer className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-brand-green-dark">Coastal Preservation Craftsmanship</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Clearwater's coastal historic restoration requires specialized craftsmanship in marine-grade materials and methods. We work with preservation masons experienced in coastal masonry repair, wood specialists who understand salt-resistant treatments, and trades familiar with period-appropriate coastal construction techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Our Clearwater Historic Restoration Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Historic Documentation & Coastal Assessment",
                  description: "We begin with thorough documentation of existing conditions—photographs, measured drawings, and materials analysis. For Clearwater properties, we also assess coastal exposure, previous storm damage, and salt air deterioration. We research building history, original construction methods, and previous alterations to inform restoration planning."
                },
                {
                  step: "2",
                  title: "Preservation Planning",
                  description: "Based on assessment findings, we develop restoration approaches addressing deterioration while preserving character-defining features. For Clearwater's coastal properties, this includes specifying marine-grade materials and methods. For tax credit projects, we prepare SHPO Part 2 applications with detailed scope of work."
                },
                {
                  step: "3",
                  title: "Regulatory Approvals",
                  description: "We navigate Clearwater's planning review process, coordinate SHPO reviews for tax credit projects, and obtain building permits. For Harbor Oaks properties, we address special area plan requirements. For coastal properties, we coordinate flood zone compliance. We maintain communication with all reviewing agencies throughout approval."
                },
                {
                  step: "4",
                  title: "Restoration Execution",
                  description: "Experienced project managers oversee restoration work with strict adherence to approved plans and preservation specifications. For Clearwater projects, we schedule around tourism season impacts and coordinate coastal construction logistics. Regular communication with regulatory agencies ensures continued compliance."
                },
                {
                  step: "5",
                  title: "Completion & Certification",
                  description: "We complete all inspections and provide comprehensive documentation of completed work. For tax credit projects, we prepare SHPO Part 3 certification applications with final photographs and project narrative. We ensure all regulatory requirements are satisfied and buildings are ready for occupancy or continued use."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-lg p-6">
                  <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Clearwater Chooses FCS for Historic Restoration
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Always Prime Contractor</h3>
              <p className="text-gray-600">
                We never work as a subcontractor on Clearwater historic projects. You get direct accountability, single-point contact, and our full commitment to your project's success throughout the restoration process.
              </p>
            </div>
            <div className="card text-center p-6">
              <Waves className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Coastal Preservation Expertise</h3>
              <p className="text-gray-600">
                We understand the unique challenges of coastal historic preservation—salt air corrosion, hurricane requirements, and flood zone compliance. Our restoration methods extend building longevity in Clearwater's demanding environment.
              </p>
            </div>
            <div className="card text-center p-6">
              <FileCheck className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-3">Tax Credit Success</h3>
              <p className="text-gray-600">
                We navigate federal and state historic tax credit programs, coordinating SHPO applications and ensuring work meets certification requirements. Tax credits can offset 20% of qualified rehabilitation costs for income-producing properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={clearwaterFaqs} title="Historic Restoration in Clearwater - Frequently Asked Questions" />

      {/* Internal Links Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Services & Locations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Related Services in Clearwater</h3>
              <ul className="space-y-2">
                <li><Link href="/commercial-construction-clearwater/" className="text-brand-green hover:underline">Commercial Construction Clearwater</Link></li>
                <li><Link href="/disaster-recovery-clearwater/" className="text-brand-green hover:underline">Disaster Recovery Clearwater</Link></li>
                <li><Link href="/balcony-reconstruction-clearwater/" className="text-brand-green hover:underline">Balcony Reconstruction Clearwater</Link></li>
                <li><Link href="/exterior-waterproofing-clearwater/" className="text-brand-green hover:underline">Exterior Waterproofing Clearwater</Link></li>
                <li><Link href="/multi-family-construction-clearwater/" className="text-brand-green hover:underline">Multi-Family Construction Clearwater</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Historic Restoration Nearby</h3>
              <ul className="space-y-2">
                <li><Link href="/historic-restoration-tampa/" className="text-brand-green hover:underline">Historic Restoration Tampa</Link></li>
                <li><Link href="/historic-restoration-st-petersburg/" className="text-brand-green hover:underline">Historic Restoration St. Petersburg</Link></li>
                <li><Link href="/historic-restoration-lakeland/" className="text-brand-green hover:underline">Historic Restoration Lakeland</Link></li>
                <li><Link href="/historic-restoration-sarasota/" className="text-brand-green hover:underline">Historic Restoration Sarasota</Link></li>
                <li><Link href="/historic-restoration-bradenton/" className="text-brand-green hover:underline">Historic Restoration Bradenton</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-green-dark mb-3">Learn More</h3>
              <ul className="space-y-2">
                <li><Link href="/historic-restoration/" className="text-brand-green hover:underline">Historic Restoration Services</Link></li>
                <li><Link href="/commercial/historic-restoration/" className="text-brand-green hover:underline">Commercial Historic Restoration</Link></li>
                <li><Link href="/about/" className="text-brand-green hover:underline">About FCS</Link></li>
                <li><Link href="/portfolio/" className="text-brand-green hover:underline">Project Portfolio</Link></li>
                <li><Link href="/contact/" className="text-brand-green hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Start Your Clearwater Historic Restoration Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a project consultation. We deliver historic restoration excellence in Clearwater, from Downtown Cleveland Street to Harbor Oaks and coastal properties throughout Pinellas County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
