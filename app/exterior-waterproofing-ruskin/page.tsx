import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, Building2, Shield, Award, HardHat, FileCheck, Home, Droplets } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/exterior-waterproofing-ruskin/' },
  title: "Exterior Waterproofing Ruskin FL | Coastal, Condo | FCS",
  description: "Exterior waterproofing in Ruskin FL by Florida Construction Specialists — headquartered locally. Apollo Beach coastal protection, Sun City Center condo waterproofing, Tampa Bay humidity defense. Licensed CBC.",
};

const faqs = [
  {
    question: "Why is exterior waterproofing particularly important for properties in the Ruskin area?",
    answer: "The Ruskin and SouthShore area faces a combination of waterproofing challenges. Apollo Beach and Tampa Bay waterfront properties endure salt air exposure that accelerates building envelope deterioration. The Little Manatee River corridor experiences periodic flooding. All of South Hillsborough County receives over fifty inches of annual rainfall concentrated in intense summer storms. Sun City Center's aging building stock from the 1970s through 1990s often has original waterproofing systems that have long exceeded their effective lifespan. These converging factors make professional waterproofing essential for building longevity."
  },
  {
    question: "Does FCS waterproof condominiums in Sun City Center?",
    answer: "Sun City Center's extensive condominium inventory is a primary market for our waterproofing services. Many of these buildings were constructed during the 1970s through 1990s with waterproofing technologies that have since been superseded by more effective systems. Common issues include failed exterior coatings, deteriorated expansion joints, compromised balcony waterproofing membranes, and inadequate flashing at wall-to-roof transitions. We work with condominium associations to assess building envelope conditions, develop phased waterproofing programs, and implement solutions that protect these buildings for decades."
  },
  {
    question: "How does coastal salt exposure affect waterproofing needs at Apollo Beach?",
    answer: "Apollo Beach's Tampa Bay waterfront location exposes buildings to airborne salt that penetrates concrete, corrodes reinforcing steel, and breaks down sealants and coatings at accelerated rates. Waterproofing systems for Apollo Beach properties must be specified for marine environments — including chloride-resistant coatings, stainless steel or galvanized fasteners, salt-resistant sealants, and elastomeric coatings that can withstand the thermal cycling and UV exposure typical of Gulf Coast waterfront conditions. Standard inland waterproofing products will not perform adequately in this environment."
  },
  {
    question: "What exterior waterproofing services does FCS provide from its Ruskin headquarters?",
    answer: "We provide comprehensive building envelope waterproofing including elastomeric wall coatings, below-grade foundation waterproofing, traffic-bearing deck coatings for balconies and parking structures, expansion joint treatment, window and door flashing systems, through-wall flashing, and roof-to-wall transition waterproofing. For commercial properties, we also address loading dock areas, mechanical equipment pads, and utility penetrations. Our Ruskin headquarters location means efficient mobilization and consistent project oversight for all South Hillsborough properties."
  },
  {
    question: "How does SB 4-D relate to exterior waterproofing for South Hillsborough condominiums?",
    answer: "SB 4-D milestone inspections frequently identify waterproofing failures as contributing factors to structural deterioration in condominium buildings. When water penetrates the building envelope, it initiates reinforcing steel corrosion that leads to the concrete spalling and structural deficiencies that inspections are designed to catch. Proactive waterproofing is both a standalone building protection measure and a critical component of SB 4-D compliance strategy. FCS coordinates waterproofing work with structural remediation when both are needed."
  },
  {
    question: "What is the typical lifespan of professional exterior waterproofing in the Ruskin climate?",
    answer: "In South Hillsborough County's subtropical climate, properly specified and applied exterior waterproofing systems typically last ten to twenty years depending on the product, application quality, and exposure conditions. Coastal Apollo Beach properties may see shorter lifecycles due to salt exposure, while inland Sun City Center buildings generally achieve the longer end of the range. We recommend waterproofing condition assessments every five years and maintenance recoating on a schedule appropriate to each building's specific exposure conditions."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/exterior-waterproofing/" },
  { name: "Ruskin", href: "/exterior-waterproofing-ruskin/" },
];

export default function ExteriorWaterproofingRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Exterior waterproofing contractor headquartered in Ruskin, Florida. Apollo Beach coastal protection, Sun City Center condo waterproofing, building envelope systems. Licensed CBC1262722."
        city="Ruskin"
        minPrice="50000"
        serviceCategories={["Elastomeric Coatings", "Below-Grade Waterproofing", "Deck Coatings", "Joint Sealants", "Building Envelope Protection"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <Home className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">FCS Headquarters — Ruskin, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">Exterior Waterproofing in Ruskin, Florida</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">Florida Construction Specialists is headquartered in Ruskin and provides professional exterior waterproofing for buildings throughout the SouthShore area. From Apollo Beach waterfront properties facing Tampa Bay salt exposure to Sun City Center condominiums with aging building envelopes, we protect structures against South Hillsborough County's demanding moisture environment.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Home className="w-4 h-4 text-brand-gold" /><span className="text-white text-sm font-medium">Ruskin Headquartered</span></div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Award className="w-4 h-4 text-brand-gold" /><span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span></div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"><Building2 className="w-4 h-4 text-brand-gold" /><span className="text-white text-sm font-medium">{BUSINESS_INFO.projectsCompleted}+ Projects</span></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">Schedule Waterproofing Assessment</Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2"><Phone className="w-5 h-5" />{BUSINESS_INFO.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">Protecting South County Buildings from Moisture Damage</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">South Hillsborough County's subtropical climate creates relentless moisture pressure on building envelopes. Over fifty inches of annual rainfall, intense summer thunderstorms, high year-round humidity, and — for waterfront properties — salt-laden Gulf air all work to penetrate, corrode, and degrade building materials. For Sun City Center's aging condominiums and Apollo Beach's coastal buildings, the original waterproofing systems installed during construction are often well past their effective lifespan.</p>
              <p className="mb-6">Apollo Beach properties face the most aggressive moisture environment in the Ruskin area. Tampa Bay's salt air penetrates concrete, corrodes reinforcing steel, and breaks down sealants at rates far exceeding inland deterioration. Without marine-grade waterproofing systems, these buildings experience accelerated structural damage that eventually requires far more expensive remediation. Proactive waterproofing is significantly less costly than the structural repairs that result from deferred envelope maintenance.</p>
              <p>Florida Construction Specialists is headquartered at 822 Bayview Dr in Ruskin, making us uniquely positioned to serve the SouthShore area's waterproofing needs. All permitting goes through <a href="https://www.hillsboroughcounty.org/en/residents/property-owners-and-renters/building-and-renovations/permits-and-inspections" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Hillsborough County Building Services</a>, and our established relationships with county staff ensure efficient project approvals.</p>
            </div>
          </div>
        </div>
      </section>

      <ContentParallax src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-display.webp" alt="Commercial exterior waterproofing in South Hillsborough County" title="Defending Buildings Against Gulf Coast Moisture" subtitle="Professional waterproofing for condominiums, commercial properties, and waterfront buildings" overlayOpacity={0.55} />

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">Waterproofing Services for the SouthShore Area</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">Comprehensive building envelope protection for every property type in Ruskin, Apollo Beach, Sun City Center, and surrounding communities.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: "Elastomeric Wall Coatings", description: "High-performance elastomeric coatings that bridge hairline cracks, repel water, and allow vapor transmission. We specify marine-grade products for Apollo Beach coastal properties and standard commercial-grade systems for inland Sun City Center buildings." },
              { icon: Building2, title: "Condominium Envelope Systems", description: "Complete building envelope waterproofing for Sun City Center's aging condo inventory. Exterior wall coatings, window and door flashing, expansion joint treatment, and roof-to-wall transition systems that address the full water intrusion risk." },
              { icon: HardHat, title: "Below-Grade Waterproofing", description: "Foundation and below-grade waterproofing for new construction and existing buildings. South Hillsborough's high water table and sandy soils make below-grade moisture control critical for parking structures, storage areas, and mechanical rooms." },
              { icon: Shield, title: "Deck and Balcony Coatings", description: "Traffic-bearing waterproofing membranes for balconies, walkways, and parking decks. These systems are particularly important for Sun City Center condominiums where balcony waterproofing failure is a common trigger for SB 4-D remediation requirements." },
              { icon: FileCheck, title: "Joint Sealant Programs", description: "Comprehensive joint sealant replacement for expansion joints, control joints, and perimeter sealants throughout the building envelope. Florida's thermal cycling causes sealant degradation that allows water infiltration if not maintained on appropriate schedules." },
              { icon: Award, title: "Waterproofing Assessments", description: "Building envelope condition assessments that identify current and potential water intrusion points. We recommend these every five years for inland properties and every three years for Apollo Beach coastal buildings to stay ahead of moisture damage." }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4"><service.icon className="w-7 h-7 text-brand-green-dark" /></div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQWithSchema items={faqs} title="Ruskin Exterior Waterproofing FAQ" description="Common questions about exterior waterproofing for Ruskin, Apollo Beach, and Sun City Center properties." />

      <section className="section bg-gray-50">
        <div className="container-custom"><div className="grid md:grid-cols-2 gap-8">
          <RelatedServices city="Ruskin" currentService="exterior-waterproofing" />
          <NearbyLocations currentCity="Ruskin" service="exterior-waterproofing" serviceName="Exterior Waterproofing" />
        </div></div>
      </section>

      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">Protect Your South County Property</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contact Florida Construction Specialists at our Ruskin headquarters for a waterproofing assessment. We will evaluate your building envelope and recommend protection systems appropriate for your property's specific exposure conditions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">Schedule Assessment</Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"><Phone className="w-5 h-5 mr-2" />Call {BUSINESS_INFO.phone}</a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span><span>Ruskin Headquartered</span><span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span><span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
