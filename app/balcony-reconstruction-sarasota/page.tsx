import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/balcony-reconstruction-sarasota/' },
  title: "Balcony Reconstruction Sarasota FL | SB4-D, Condo Balconies | FCS",
  description: "Balcony reconstruction in Sarasota by Florida Construction Specialists. SB4-D compliance, barrier island condo balconies, saltwater corrosion repair, structural restoration. Licensed CBC, 40+ years.",
};

const faqs = [
  {
    question: "Why are Sarasota barrier island condo balconies deteriorating faster than mainland structures?",
    answer: "Condo balconies on Siesta Key, Lido Key, Longboat Key, and Bird Key experience dramatically accelerated deterioration because of constant salt spray from the Gulf of Mexico. Salt-laden moisture penetrates concrete through micro-cracks and pores, reaching the reinforcing steel and initiating chloride-induced corrosion. This corrosion generates expansive iron oxide rust that cracks the surrounding concrete from within, causing visible spalling and delamination. The cycle is self-reinforcing because each crack allows more salt and moisture to reach deeper into the concrete. Barrier island balconies also face more intense UV exposure, higher humidity, and direct wind-driven rain during storms. Buildings constructed in the 1970s and 1980s, which make up a large portion of Sarasota's barrier island condo stock, were built with less concrete cover over rebar than current standards require, making them especially vulnerable."
  },
  {
    question: "How does SB4-D specifically affect balcony inspections and reconstruction in Sarasota?",
    answer: "Senate Bill 4-D requires milestone structural inspections for condominium buildings three stories or higher, and balconies are a primary focus area during these inspections. Inspectors evaluate balcony structural slabs, railings, waterproofing membranes, and the connection between the balcony and the building's main structural frame. For Sarasota barrier island condos within three miles of the coastline, initial milestone inspections are required by the time the building reaches 25 years of age. Many barrier island condo buildings in Sarasota have already exceeded this age threshold. When inspections reveal balcony deterioration, the findings trigger required repairs that must be completed within specific timeframes. We perform the balcony reconstruction work identified during milestone inspections and help associations prioritize repairs based on structural urgency."
  },
  {
    question: "What does a complete balcony reconstruction involve for a Sarasota condo building?",
    answer: "Complete balcony reconstruction typically includes removal of the existing waterproofing membrane and walking surface, concrete sounding and delamination mapping to identify all deteriorated areas, removal of cracked and spalled concrete to expose corroded reinforcing steel, treatment or replacement of corroded rebar with corrosion-inhibiting materials, application of new concrete repair material compatible with the existing structure, installation of a new traffic-bearing waterproofing membrane, new walking surface installation, and replacement of deteriorated railing systems. For Sarasota barrier island condos, we specify marine-grade repair materials with corrosion inhibitors and protective coating systems designed for the extreme salt exposure environment."
  },
  {
    question: "How does Hurricane Ian damage overlap with balcony deterioration in Sarasota condos?",
    answer: "Hurricane Ian in 2022 caused direct damage to many Sarasota condo balconies through wind forces and wind-driven debris, but the storm also worsened pre-existing deterioration by driving salt water deeper into already-compromised concrete and overwhelming aging waterproofing membranes. Buildings that had deferred balcony maintenance before Ian often found that the storm accelerated deterioration significantly, creating safety concerns that demanded immediate attention. The overlap between hurricane damage and pre-existing deterioration creates complex reconstruction projects where insurance coverage and association responsibility must be carefully separated. Our principal's insurance industry background helps associations navigate this allocation accurately."
  },
  {
    question: "How do residents use their units during balcony reconstruction at Sarasota condos?",
    answer: "Balcony reconstruction at occupied condos requires careful phasing to minimize disruption. We typically work building-by-building or elevation-by-elevation, completing all balconies on one section before moving to the next. During active work on a specific balcony, that unit's sliding door access to the balcony is blocked for safety. We provide advance notice to affected residents, typically two to four weeks before work begins on their section. Noise from concrete removal is the most disruptive aspect and is restricted to permitted hours. For Sarasota's seasonal condo buildings, we schedule the most disruptive phases during summer months when occupancy is lower, though SB4-D deadlines increasingly require year-round construction."
  },
  {
    question: "What railing systems does FCS recommend for Sarasota barrier island balcony reconstruction?",
    answer: "For barrier island condominiums in Sarasota, we recommend railing systems designed specifically for the salt spray environment. Aluminum railings with marine-grade powder coating provide excellent corrosion resistance and minimal maintenance. Cable rail systems with stainless steel cables and aluminum posts perform well in the coastal environment while preserving water views, which is a significant consideration for Sarasota barrier island properties. Glass panel railings with stainless steel or aluminum frames offer maximum view preservation but require regular cleaning in the salt environment. We avoid standard painted steel railings on barrier island projects because they cannot withstand the salt exposure regardless of the coating system. Each railing system must meet Florida Building Code guardrail height and load requirements."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction/" },
  { name: "Sarasota", href: "/balcony-reconstruction-sarasota/" },
];

export default function BalconyReconstructionSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction"
        serviceDescription="Balcony reconstruction in Sarasota, FL. SB4-D milestone compliance, barrier island condo balconies, concrete restoration, railing replacement, waterproofing. Licensed CBC1262722, 40+ years experience."
        city="Sarasota"
        minPrice="250000"
        serviceCategories={["Balcony Structural Repair", "SB4-D Compliance", "Railing System Replacement", "Waterproofing Membranes", "Concrete Spall Repair"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tampa-condo-balcony-restoration/tampa-condo-balcony-restoration-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Balcony Reconstruction in Sarasota, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Sarasota's barrier island condominiums contain hundreds of balconies deteriorating from decades of Gulf Coast salt exposure, and Senate Bill 4-D milestone inspections are revealing the full extent of the problem. Florida Construction Specialists reconstructs condominium balconies across Siesta Key, Lido Key, Longboat Key, Bird Key, and the downtown bayfront with the structural repair expertise and marine-grade materials these coastal environments demand.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Since 1983</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <AlertTriangle className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">SB4-D Specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Schedule Balcony Assessment
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
              Sarasota's Barrier Island Balconies: A Growing Structural Crisis
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Walk the streets of any barrier island condominium community in Sarasota and the evidence of balcony deterioration is visible from the ground. Cracked and spalled concrete on balcony soffits, rust stains streaking down building facades from corroding rebar, deteriorated railing systems with visible corrosion at post bases, and waterproofing membranes that have long since failed. These are not cosmetic issues. They are structural safety concerns that Senate Bill 4-D was designed to address, and they are concentrated in exactly the buildings that make up Sarasota's barrier island condo stock.
              </p>
              <p className="mb-6">
                The barrier islands of Siesta Key, Lido Key, Longboat Key, and Bird Key were developed heavily during the 1970s and 1980s when Sarasota's condo market boomed. The buildings constructed during this period used reinforcing steel with less concrete cover than current standards require, installed waterproofing membranes that had limited service life, and used railing systems made from standard carbon steel that was never designed for constant salt exposure. After 40 to 55 years of Gulf Coast weathering, these components have reached or exceeded their service life. The balconies that gave these condominiums their Gulf views and coastal lifestyle now represent their most pressing maintenance obligation.
              </p>
              <p className="mb-6">
                Hurricane Ian in September 2022 accelerated the deterioration timeline for many Sarasota balconies. Storm surge and wind-driven rain drove salt water into concrete that was already compromised by years of chloride intrusion. Balcony railings weakened by corrosion were damaged or destroyed by wind forces. Waterproofing membranes that were marginally functional before the storm were overwhelmed by the water intrusion. The combined effect of decades of deferred maintenance plus hurricane damage has made balcony reconstruction one of the most active construction markets in Sarasota County.
              </p>
              <p>
                Florida Construction Specialists reconstructs condo balconies with the structural engineering oversight, marine-grade materials, and occupied-building construction management that this work requires. Our principal's combined construction and insurance industry experience is particularly valuable for buildings where hurricane damage and pre-existing deterioration must be properly separated for insurance claims purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/southwinds-condo-front/southwinds-condo-front-display.webp"
        alt="Condominium balcony reconstruction on Sarasota barrier island"
        title="Restoring Sarasota's Coastal Balconies"
        subtitle="SB4-D compliance, structural repair, and marine-grade materials for barrier island condominiums"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Balcony Reconstruction Capabilities for Sarasota Condominiums
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every component of a deteriorated balcony requires specialized repair techniques and coastal-grade materials.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Structural Slab Repair",
                description: "Comprehensive repair of deteriorated balcony structural slabs. Concrete delamination removal, corroded rebar treatment or replacement, corrosion-inhibiting patch material application, and structural reinforcement where load capacity has been compromised. All repair materials specified for the barrier island salt environment."
              },
              {
                icon: Shield,
                title: "Waterproofing Systems",
                description: "Installation of traffic-bearing waterproofing membranes designed for Sarasota's coastal exposure. Hot-applied rubberized asphalt, cold-applied sheet membranes, and liquid-applied systems selected based on the specific balcony conditions, expected traffic, and the walking surface to be installed above."
              },
              {
                icon: HardHat,
                title: "Railing Replacement",
                description: "Complete removal and replacement of deteriorated railing systems with marine-grade alternatives. Aluminum, stainless steel cable, and glass panel systems that resist salt corrosion and meet Florida Building Code guardrail requirements. Post anchorage systems engineered for the specific balcony edge condition."
              },
              {
                icon: AlertTriangle,
                title: "SB4-D Inspection Support",
                description: "Support for Phase 1 and Phase 2 milestone inspections with particular focus on balcony structural elements. We provide access for inspection activities, coordinate with structural engineers on balcony evaluation, and execute repairs identified during milestone inspection findings within required timelines."
              },
              {
                icon: Briefcase,
                title: "Soffit and Drainage Repair",
                description: "Repair of balcony soffits, drip edges, and drainage systems that control water flow and prevent moisture intrusion into the unit below. Proper drainage design is critical on Sarasota's barrier islands where 55 inches of annual rainfall, often in intense downpours, challenges balcony drainage capacity."
              },
              {
                icon: FileCheck,
                title: "Corrosion Protection",
                description: "Installation of corrosion protection systems including galvanic cathodic protection anodes, corrosion-inhibiting concrete admixtures, penetrating sealers, and protective coating systems. These systems slow future deterioration and extend the service life of the reconstruction investment in Sarasota's demanding coastal environment."
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

      {/* Local Expertise */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Sarasota Balcony Reconstruction Requires Coastal Specialists
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Balcony reconstruction on Sarasota's barrier islands is not the same work as balcony repair in an inland market. The constant salt spray environment degrades standard construction materials rapidly. Repair materials that perform adequately in Tampa or Orlando may fail within years on Siesta Key or Longboat Key. Every material specification, from the concrete repair mix to the railing post anchors to the waterproofing membrane adhesive, must be selected for direct coastal exposure.
              </p>
              <p className="mb-6">
                The <a href="https://www.sarasotafl.gov/government/building-department" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Sarasota Building Department</a>, Sarasota County Building Services, and the Town of Longboat Key each handle balcony reconstruction permits in their respective jurisdictions. Permitting requirements for balcony work include structural engineering drawings, material specifications, and phasing plans that demonstrate continued safe occupancy during construction. We maintain relationships with all three jurisdictions and prepare complete permit packages that minimize review time.
              </p>
              <p>
                Working on occupied condo buildings in Sarasota's seasonal market requires careful scheduling and communication. Many barrier island condo associations prefer reconstruction work during the summer low-occupancy months, but SB4-D deadlines often require year-round construction. We develop phased plans that balance construction efficiency with resident disruption, schedule the noisiest work during permitted hours, and maintain clear communication with property management and individual owners throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota Balcony Reconstruction Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every balcony reconstruction follows a systematic process from assessment through completed repair and protection.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Condition Survey and Engineering",
                description: "Comprehensive evaluation of all balconies including concrete sounding, delamination mapping, rebar cover depth measurement, chloride content testing, and railing condition assessment. We coordinate with structural engineers to develop repair specifications based on the specific deterioration found in each building section.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Reconstruction Design and Budgeting",
                description: "Development of detailed reconstruction plans, material specifications, and phasing schedules. We present comprehensive budgets to the condo board that enable informed decisions on repair scope, material selections, and special assessment planning.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting and Resident Coordination",
                description: "We manage permits with the appropriate building department and develop resident communication plans. Advance notice schedules, construction hour restrictions, access modifications, and unit-specific impact information keep the board and residents informed throughout the project.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Phased Reconstruction",
                description: "Systematic balcony reconstruction moving through the building in planned phases. Each balcony receives concrete repair, waterproofing membrane installation, walking surface replacement, and railing installation. Quality control inspections verify each phase before the next begins.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Closeout and Maintenance Plan",
                description: "Final engineering inspection, warranty documentation, and a maintenance calendar for the new waterproofing and coating systems. Proper maintenance significantly extends the life of the reconstruction and helps the association budget for future protective maintenance cycles.",
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
        title="Sarasota Balcony Reconstruction FAQ"
        description="Common questions about balcony reconstruction and SB4-D compliance in Sarasota, Florida."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Sarasota" currentService="balcony-reconstruction" />
            <NearbyLocations currentCity="Sarasota" service="balcony-reconstruction" serviceName="Balcony Reconstruction" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Address Your Sarasota Balcony Reconstruction Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your condominium's balcony reconstruction requirements. Whether responding to SB4-D milestone findings, hurricane damage, or proactive maintenance, we provide the structural expertise and coastal construction knowledge Sarasota's barrier island condominiums need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Balcony Assessment
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
              <span>SB4-D Compliance Specialists</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
