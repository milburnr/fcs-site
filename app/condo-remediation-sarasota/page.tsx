import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import { CodeReference } from "@/components/CodeReference";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/condo-remediation-sarasota/' },
  title: "Condo Remediation Sarasota | SB4-D, Structural Repair",
  description: "Condo remediation in Sarasota by Florida Construction Specialists. SB4-D milestone inspections concrete restoration structural repair.",
  openGraph: {
    title: "Condo Remediation Sarasota | SB4-D, Structural Repair",
    description: "Condo remediation in Sarasota by Florida Construction Specialists. SB4-D milestone inspections concrete restoration structural repair.",
    url: "https://floridaconstructionspecialists.com/condo-remediation-sarasota/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How does Senate Bill 4-D affect condominium buildings in Sarasota?",
    answer: "Senate Bill 4-D requires condominium buildings three stories or higher to complete milestone structural inspections by specific deadlines based on building age. Buildings within three miles of the coastline, which includes nearly every condo building on Sarasota's barrier islands and most of the downtown bayfront, must complete their initial milestone inspection by the time the building reaches 25 years of age. Buildings further inland have until 30 years. After the initial inspection, subsequent inspections are required every 10 years. These inspections evaluate structural integrity of load-bearing elements, and any deficiencies identified must be remediated. Florida Construction Specialists performs both the remediation work and the structural repairs identified during milestone inspections."
  },
  {
    question: "What types of structural deterioration are most common in Sarasota barrier island condominiums?",
    answer: "Sarasota's barrier island condominiums, particularly on Siesta Key, Lido Key, Longboat Key, and Bird Key, experience accelerated deterioration from constant salt spray exposure and Gulf Coast humidity. The most common issues include concrete spalling where rebar corrosion causes concrete to crack and delaminate from balconies, parking structures, and exterior walls. Rebar corrosion is driven by chloride intrusion from salt air penetrating inadequate concrete cover. Post-tension cable deterioration in slabs and beams is another critical concern in buildings constructed during the 1970s and 1980s when corrosion protection standards were less rigorous. Waterproofing membrane failures on balconies, walkways, and plaza decks allow water infiltration that accelerates all of these deterioration mechanisms."
  },
  {
    question: "How long does a typical condo remediation project take in Sarasota?",
    answer: "Condo remediation timelines in Sarasota vary significantly based on the scope of deterioration and the building's location. A focused balcony and walkway remediation on a mid-rise building may take three to six months. Comprehensive structural remediation involving parking garage repair, exterior concrete restoration, and waterproofing system replacement on a larger barrier island condominium can take twelve to eighteen months. Sarasota's seasonal population adds scheduling complexity because boards and residents prefer major construction to occur during the summer months when seasonal occupancy is lower. We develop phased remediation plans that minimize disruption during peak season while maintaining construction momentum year-round."
  },
  {
    question: "What is the difference between a Phase 1 and Phase 2 milestone inspection under SB4-D?",
    answer: "A Phase 1 milestone inspection under SB4-D is a visual examination of the building's structural components by a licensed engineer or architect. The inspector evaluates load-bearing walls, floors, foundations, columns, beams, and connections for visible signs of structural deterioration. If the Phase 1 inspection identifies substantial structural deterioration, a Phase 2 inspection is required. Phase 2 involves destructive and non-destructive testing, including concrete core sampling, rebar condition assessment, ground-penetrating radar for post-tension cables, and detailed structural analysis. Florida Construction Specialists works with licensed structural engineers to support both phases and performs the remediation work identified in Phase 2 findings."
  },
  {
    question: "How does Hurricane Ian damage overlap with SB4-D remediation needs in Sarasota condominiums?",
    answer: "Hurricane Ian in September 2022 caused significant damage to condominium buildings throughout Sarasota County, particularly on the barrier islands and along the bayfront. Many buildings that sustained hurricane damage already had pre-existing structural deterioration that was worsened by storm forces, water intrusion, and storm surge. This overlap creates complex remediation projects where hurricane damage repair and long-term structural remediation must be coordinated. Insurance claims may cover hurricane-related damage while pre-existing deterioration is the association's responsibility. We have experience separating hurricane damage from pre-existing conditions during remediation, which is critical for accurate insurance claims and proper allocation of repair costs."
  },
  {
    question: "What should a Sarasota condo board expect to budget for structural remediation?",
    answer: "Condo remediation costs in Sarasota depend heavily on building size, age, construction type, and the extent of deterioration. Focused remediation addressing specific balcony or walkway deterioration may range from five hundred thousand to two million dollars. Comprehensive structural remediation of a larger barrier island condominium including concrete restoration, waterproofing, railing replacement, and parking structure repair can range from three million to fifteen million dollars or more. Sarasota's barrier island locations add cost premiums for salt-resistant materials, elevated work platforms, and logistics coordination over bridge access. We provide detailed remediation budgets during pre-construction so boards can plan special assessments and financing accurately."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/commercial/" },
  { name: "Condo Remediation", href: "/condo-remediation-tampa/" },
  { name: "Sarasota", href: "/condo-remediation-sarasota/" },
];

export default function CondoRemediationSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="Condo Remediation" />
      <ServiceSchema
        serviceName="Condo Remediation"
        serviceDescription="Condominium structural remediation in Sarasota, FL. SB4-D milestone inspections, concrete restoration, rebar repair, waterproofing, barrier island condo repair. Licensed CBC1262722, 40+ years experience."
        city="Sarasota"
        minPrice="500000"
        serviceCategories={["Structural Concrete Repair", "SB4-D Compliance", "Balcony Restoration", "Parking Garage Repair", "Waterproofing Systems"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/railing-replacement-best-practices-condos/railing-replacement-best-practices-condos-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Sarasota, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Condo Remediation in Sarasota, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Sarasota's barrier island condominiums face an urgent convergence of aging structural systems, post-Hurricane Ian damage, and Senate Bill 4-D compliance deadlines. Florida Construction Specialists delivers the structural remediation expertise that Sarasota's condominium associations need, from milestone inspection support through comprehensive concrete restoration and waterproofing across buildings on Siesta Key, Lido Key, Longboat Key, Bird Key, and the downtown bayfront.
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
                <AlertTriangle className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">SB4-D Specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Schedule Remediation Assessment
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
              <strong>SB4-D Compliance Resource:</strong> For comprehensive compliance checklists, deadlines, cost guidance, and Sarasota-specific requirements, visit our{' '}
              <Link href="/sb4d-compliance/sarasota/" className="underline font-semibold hover:text-blue-600">SB4-D Compliance Guide for Sarasota</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Sarasota Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Sarasota's Barrier Island Condominiums Face Critical Remediation Needs
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Sarasota County has one of the highest concentrations of aging coastal condominiums in Florida. The barrier islands of Siesta Key, Lido Key, Longboat Key, and Bird Key were developed heavily during the 1970s and 1980s building boom, producing hundreds of condominium buildings that are now 40 to 55 years old. These structures were built under earlier editions of the Florida Building Code with less stringent requirements for hurricane resistance, concrete cover over reinforcing steel, and waterproofing systems. After decades of exposure to Gulf Coast salt air, intense sun, driving rain, and periodic hurricane impacts, many of these buildings have reached a point where significant structural remediation is not optional but essential for continued safe occupancy.
              </p>
              <p className="mb-6">
                Senate Bill 4-D has added legislative urgency to what was already an engineering necessity. Passed in the aftermath of the Champlain Towers South collapse in Surfside, SB4-D requires milestone structural inspections for all condominium buildings three stories or higher. Buildings within three miles of the coastline, which encompasses virtually every condominium on Sarasota's barrier islands, downtown bayfront, and much of the mainland within Sarasota city limits, must complete initial inspections by the time the building reaches 25 years of age. The practical result is that hundreds of Sarasota condominiums either face immediate inspection deadlines or have already completed inspections that identified structural deficiencies requiring remediation.
              </p>
              <p className="mb-6">
                Hurricane Ian compounded these challenges in September 2022 when the storm made landfall south of Sarasota and pushed destructive storm surge across the barrier islands. Condominiums on Siesta Key and Lido Key sustained water intrusion, structural damage from wave action, and damage to exterior systems that were already deteriorating. Many buildings now face the dual burden of hurricane damage repair and pre-existing structural remediation, creating complex projects that require careful separation between insured storm damage and association-funded deferred maintenance.
              </p>
              <p>
                Florida Construction Specialists brings decades of structural remediation experience to Sarasota's condo market. Our principal's combined construction and insurance industry background, including work as an Executive General Adjuster, provides unique insight into projects where hurricane damage and pre-existing deterioration overlap. We work with structural engineers, association boards, property managers, and insurance adjusters to develop remediation plans that address both immediate safety concerns and long-term structural integrity while properly allocating costs between insurance recovery and association funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/southwinds-condo-rear/southwinds-condo-rear-display.webp"
        alt="Condominium building on Sarasota barrier island requiring structural remediation"
        title="Protecting Sarasota's Coastal Condominiums"
        subtitle="Structural remediation, SB4-D compliance, and concrete restoration for barrier island buildings"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Condo Remediation Capabilities for Sarasota's Coastal Buildings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every type of structural deterioration found in Sarasota condominiums requires specialized repair techniques and materials.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "SB4-D Milestone Compliance",
                description: "Support for Phase 1 and Phase 2 milestone inspections under Senate Bill 4-D. We coordinate with licensed structural engineers, provide access for inspection activities, and execute remediation work identified during inspection findings. Our team understands SB4-D timelines and helps boards meet compliance deadlines."
              },
              {
                icon: Building2,
                title: "Structural Concrete Restoration",
                description: "Comprehensive concrete repair for barrier island and bayfront condominiums. Spall repair, rebar exposure treatment, chloride-contaminated concrete removal, replacement with corrosion-inhibiting concrete, and cathodic protection installation for buildings with advanced reinforcement corrosion."
              },
              {
                icon: Shield,
                title: "Post-Tension System Repair",
                description: "Assessment and repair of post-tension cable systems in Sarasota condominiums built during the 1970s and 1980s. Cable tendon replacement, anchorage repair, and corrosion protection upgrades for post-tension systems that were installed before current corrosion protection standards were established."
              },
              {
                icon: HardHat,
                title: "Balcony and Walkway Remediation",
                description: "Structural repair of balconies, walkways, and breezeways that represent the most visible deterioration in Sarasota's aging condos. Concrete deck repair, waterproofing membrane replacement, railing system upgrades, and drainage improvements that prevent future water infiltration and structural damage."
              },
              {
                icon: Briefcase,
                title: "Parking Structure Remediation",
                description: "Comprehensive repair of condo parking garages and ground-level parking structures. Elevated parking decks on barrier island condominiums experience accelerated deterioration from salt exposure and vehicle traffic. We address concrete delamination, joint sealant failure, waterproofing membrane deterioration, and structural cracking."
              },
              {
                icon: FileCheck,
                title: "Building Envelope Waterproofing",
                description: "Exterior waterproofing system replacement and upgrades for condominiums that have outgrown their original moisture protection. New elastomeric coatings, traffic-bearing waterproofing membranes, expansion joint systems, and drainage improvements designed specifically for Sarasota's salt-air coastal environment."
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
              Why Sarasota Condominiums Require Specialized Remediation Contractors
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Condo remediation in Sarasota is not routine construction work. The combination of barrier island environments, aging building stock, hurricane damage, and SB4-D compliance creates remediation projects that demand specialized knowledge in structural engineering coordination, coastal construction materials, and occupied building work management.
              </p>
              <p className="mb-6">
                The <a href="https://www.sarasotafl.gov/government/building-department" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Sarasota Building Department</a> and Sarasota County Building Services both process remediation permits, and the jurisdictional boundary matters because buildings on Longboat Key fall under the Town of Longboat Key's own building department. Remediation permits often require structural engineering drawings, material specifications for corrosion-resistant products, and phasing plans that demonstrate continued building safety during construction.
              </p>
              <p className="mb-6">
                Salt air corrosion is the primary driver of structural deterioration in Sarasota's barrier island condominiums. The constant salt spray from Gulf of Mexico exposure penetrates concrete through micro-cracks and pores, reaching the reinforcing steel and initiating a corrosion cycle that generates expansive rust, which in turn cracks and spalls the surrounding concrete. This process is continuous and accelerates over time. Remediation must not only repair existing damage but install corrosion protection systems that slow future deterioration. We specify marine-grade repair materials, corrosion-inhibiting admixtures, galvanic cathodic protection where appropriate, and protective coating systems designed for the extreme exposure conditions on Sarasota's keys.
              </p>
              <p>
                <CodeReference
                  code="Florida Statute 553.899"
                  section="Milestone Inspections for Condominiums and Cooperative Buildings"
                  description="Requires structural milestone inspections for buildings three stories or taller. Coastal buildings within three miles of the shoreline must complete initial inspections at 25 years; inland buildings at 30 years. Phase 1 is a visual assessment; Phase 2 involves destructive and non-destructive testing if substantial deterioration is found."
                  link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0553/0553.899"
                  linkText="View F.S. 553.899"
                />
                <CodeReference
                  code="Florida Statute 718.112"
                  section="Condominium Association Reserve Funding Requirements"
                  description="Requires condominium associations to maintain adequate reserves for structural maintenance and repair, including funding for remediation identified through milestone inspections. Associations may no longer waive or reduce reserves for items identified in structural integrity reserve studies."
                  link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0718/0718.112"
                  linkText="View F.S. 718.112"
                />
                Working in occupied condominium buildings requires careful management of resident communication, noise control, access coordination, and safety protocols. Sarasota's seasonal population pattern creates a natural construction window during the summer months when many units are vacant, but boards increasingly cannot wait for seasonal timing when SB4-D deadlines loom. We develop phased remediation plans that allow construction to proceed year-round while maintaining safe occupancy, providing advance notice to residents, and minimizing disruption to building operations including elevators, parking, and common areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota Condo Remediation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every remediation project follows a structured process from assessment through completed repair and long-term protection.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Condition Assessment and Engineering",
                description: "We coordinate with licensed structural engineers to assess the building's condition, support milestone inspections if required under SB4-D, and develop a detailed scope of deterioration. This includes concrete sounding surveys, rebar cover depth testing, chloride content analysis, and post-tension cable evaluation. For buildings with hurricane damage, we separate storm-related damage from pre-existing deterioration.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Remediation Design and Budgeting",
                description: "Based on engineering findings, we develop comprehensive remediation plans with detailed specifications, phasing schedules, and accurate budgets. We present these to the condo board with clear explanations of priority items, optional improvements, and cost-saving alternatives where available. This enables boards to plan special assessments and secure financing before construction begins.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting and Resident Communication",
                description: "We manage permit applications with the appropriate jurisdiction (City of Sarasota, Sarasota County, or Town of Longboat Key). Simultaneously, we develop resident communication plans including construction schedules, access changes, noise expectations, and unit-specific impacts. Clear communication reduces board stress and resident complaints throughout the project.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Phased Remediation Construction",
                description: "Experienced project managers execute the remediation in phases designed to maintain building occupancy and minimize disruption. We schedule noisy work during approved hours, coordinate parking and access changes, protect landscaping and common areas, and maintain daily communication with property management. Barrier island logistics including material delivery over bridges are planned in advance.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Closeout and Maintenance Planning",
                description: "Thorough final inspections, engineering sign-off on structural repairs, updated reserve study documentation, and long-term maintenance recommendations. We provide the board with a maintenance calendar for protective coatings, sealants, and waterproofing systems so the association can budget for ongoing protection and extend the life of the remediation investment.",
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
        title="Sarasota Condo Remediation FAQ"
        description="Common questions about condominium remediation and SB4-D compliance in Sarasota, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Sarasota" currentService="condo-remediation" currentServiceName="Condo Remediation" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Address Your Sarasota Condo Remediation Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your condominium's remediation requirements. Whether facing SB4-D milestone deadlines, hurricane damage, or aging structural systems, we provide the assessment and remediation expertise Sarasota's coastal condominiums need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Remediation Assessment
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
              <span>SB4-D Compliance Specialists</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="condo-remediation-sarasota" />
    </>
  );
}
