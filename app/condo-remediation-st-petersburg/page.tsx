import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, ArrowRight, FileCheck, HardHat, Briefcase, AlertTriangle } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import { CodeReference } from "@/components/CodeReference";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/condo-remediation-st-petersburg/' },
  title: "Condo Remediation St. Pete | SB 4-D",
  description: "Condo remediation in St. Petersburg by Florida Construction Specialists. SB 4-D milestone inspections structural concrete repair.",
  openGraph: {
    title: "Condo Remediation St. Pete | SB 4-D",
    description: "Condo remediation in St. Petersburg by Florida Construction Specialists. SB 4-D milestone inspections structural concrete repair.",
    url: "https://floridaconstructionspecialists.com/condo-remediation-st-petersburg/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How does SB 4-D affect condominium buildings in St. Petersburg specifically?",
    answer: "SB 4-D, Florida's building safety law enacted after the Champlain Towers collapse, requires milestone structural inspections for condominium buildings three stories or taller. In St. Petersburg, where many waterfront condo towers exceed three stories and a large number were built in the 1970s through 1990s, the law affects a substantial portion of the city's condo building stock. Buildings within three miles of the coast must have their first milestone inspection by the time they reach 25 years of age, and St. Petersburg's extensive bayfront and Gulf exposure means virtually every condo tower in the city falls within this coastal zone. We help associations navigate the inspection process and perform the remediation work identified in milestone reports."
  },
  {
    question: "What are the most common structural issues found in St. Petersburg waterfront condos?",
    answer: "The most frequent issues we encounter in St. Petersburg's waterfront condominiums are concrete spalling and rebar corrosion caused by saltwater intrusion, deteriorated post-tension cables in parking structures and elevated slabs, compromised waterproofing membranes on balconies and elevated walkways, and corrosion of embedded steel connectors in balcony-to-building attachments. The peninsula's dual water exposure from Tampa Bay and the Gulf of Mexico accelerates these deterioration patterns compared to inland buildings. Older buildings constructed before modern concrete cover requirements are particularly susceptible, as the protective concrete layer over reinforcing steel is often thinner than current standards require."
  },
  {
    question: "How long does a typical condo remediation project take in St. Petersburg?",
    answer: "Project duration depends on the scope of remediation identified in the structural engineering assessment. Minor concrete repair and waterproofing work on a single building elevation might take 8 to 12 weeks. Comprehensive structural remediation involving multiple elevations, parking structures, balconies, and common areas typically runs 6 to 12 months. Large-scale projects on waterfront towers with extensive saltwater damage can take 12 to 18 months. We develop phased construction schedules that allow residents to remain in their units during most remediation work, focusing on one building section at a time to minimize disruption to daily life."
  },
  {
    question: "Can residents stay in their condos during remediation work?",
    answer: "In most cases, yes. We design remediation construction sequences that allow continued occupancy. Work on exterior concrete, balconies, and building envelope systems typically proceeds one elevation or section at a time, with temporary protective barriers and access modifications. Parking structure remediation is phased to maintain partial parking availability throughout the project. The exceptions are situations where structural engineers identify immediate life-safety concerns that require evacuation of specific units. Our experience with occupied building construction in St. Petersburg means we plan work hours, noise management, and resident communication into every project schedule."
  },
  {
    question: "How do St. Petersburg condo associations typically fund remediation work?",
    answer: "Florida law now requires condominium associations to maintain reserve funding for structural maintenance, but many St. Petersburg associations are still building reserves to meet the new requirements. Common funding approaches include special assessments, reserve fund draws, association loans, and in some cases insurance proceeds when deterioration is linked to a covered event. We work with associations and their financial advisors to structure remediation projects in phases that align with available funding, delivering the most critical structural repairs first while planning subsequent phases as funding becomes available. Our detailed scope documentation supports association loan applications and special assessment justifications."
  },
  {
    question: "What distinguishes FCS's approach to condo remediation from other St. Petersburg contractors?",
    answer: "Three factors differentiate our approach in the St. Petersburg market. First, our principal's 43 years of combined construction and insurance industry experience, including work as an Executive General Adjuster, provides understanding of both the structural engineering and the financial complexity of condo remediation projects. Second, we operate exclusively as a prime general contractor and never subcontract our general contracting services, ensuring direct accountability to the association board throughout the project. Third, our engineering coordination capability through dedicated partners means we work effectively with the structural engineers conducting milestone inspections, translating their findings into actionable construction scopes without the communication gaps that occur when contractors lack technical engineering understanding."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Condo Remediation", href: "/condo-remediation/" },
  { name: "St. Petersburg", href: "/condo-remediation-st-petersburg/" },
];

export default function CondoRemediationStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Condo Remediation" />
      <ServiceSchema
        serviceName="Condo Remediation"
        serviceDescription="Condominium remediation and structural repair in St. Petersburg, FL. SB 4-D milestone inspection support, concrete restoration, waterfront tower repair, balcony reconstruction. Licensed CBC1262722, 40+ years experience."
        city="St. Petersburg"
        minPrice="100000"
        serviceCategories={["Structural Concrete Repair", "SB 4-D Compliance", "Waterfront Condo Restoration", "Post-Tension Repair", "Building Envelope Remediation"]}
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
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Condo Remediation in St. Petersburg, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              St. Petersburg's waterfront condo towers face accelerated deterioration from the peninsula's dual saltwater exposure. Florida Construction Specialists performs structural remediation, SB 4-D compliance work, and comprehensive condo restoration for associations across Pinellas County, with the engineering depth to translate milestone inspection findings into effective repair programs.
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
                Schedule a Structural Assessment
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
              <strong>SB4-D Compliance Resource:</strong> For comprehensive compliance checklists, deadlines, cost guidance, and St. Petersburg-specific requirements, visit our{' '}
              <Link href="/sb4d-compliance/st-petersburg/" className="underline font-semibold hover:text-blue-600">SB4-D Compliance Guide for St. Petersburg</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* St. Petersburg Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Saltwater on Three Sides: The Condo Remediation Challenge Unique to St. Petersburg
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                St. Petersburg's condominium building stock faces a structural maintenance reckoning. The city sits on a peninsula with Tampa Bay on the east and the Gulf of Mexico on the west, creating salt air exposure from multiple directions that accelerates concrete deterioration in ways that even experienced Florida contractors may not fully appreciate. Unlike coastal cities with exposure on a single side, St. Petersburg's condo towers absorb salt-laden moisture from shifting wind patterns that bring Gulf air one day and bay air the next. This omnidirectional exposure means all building elevations experience corrosive conditions, not just the waterfront-facing side.
              </p>
              <p className="mb-6">
                The aging profile of St. Petersburg's condo inventory compounds this exposure. Many of the city's waterfront condo buildings were constructed in the 1970s and 1980s during early development booms, placing them at 40 to 50 years of age with original concrete, rebar, and waterproofing systems. Buildings along the downtown bayfront, in Shore Acres, on Isla del Sol, at Coquina Key, and in Tierra Verde are reaching the age where reinforcing steel corrosion, concrete spalling, and post-tension cable deterioration become serious structural concerns. The Champlain Towers collapse in Surfside and the subsequent passage of SB 4-D have forced associations that deferred maintenance for decades to confront the condition of their buildings.
              </p>
              <p className="mb-6">
                SB 4-D's milestone inspection requirements hit St. Petersburg's condo market particularly hard. The law requires structural inspections for buildings three stories or taller, with buildings within three miles of the coast facing inspection at 25 years of age rather than 30. Given St. Petersburg's peninsula geography, essentially every condo building in the city falls within the three-mile coastal zone. This means a large number of buildings have already passed their inspection deadlines, creating urgent demand for qualified contractors who can perform the remediation work that milestone inspections reveal.
              </p>
              <p>
                Florida Construction Specialists brings a combination of structural construction expertise and insurance industry understanding to condo remediation in St. Petersburg. Our principal's background as an Executive General Adjuster provides insight into the intersection of structural repair and insurance claims that many contractors lack. When remediation costs are significant, understanding how to document work for insurance and reserve fund purposes directly benefits association boards navigating expensive repair programs.
              </p>
            </div>

            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections for Condominium and Cooperative Buildings"
              description="Requires structural inspections of condominium buildings 3 stories or higher. St. Petersburg's entire peninsula falls within the 3-mile coastal zone, triggering the accelerated 25-year inspection timeline for virtually every condo building in the city. Associations must complete remediation of identified deficiencies."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/southwinds-condo-front/southwinds-condo-front-display.webp"
        alt="Condominium building remediation in St. Petersburg"
        title="Protecting St. Petersburg's Condo Buildings"
        subtitle="SB 4-D compliance, structural repair, and waterfront condo restoration across Pinellas County"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Condo Remediation Services for St. Petersburg's Waterfront Building Stock
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Comprehensive remediation capabilities addressing the specific deterioration patterns found in peninsula condo buildings.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "SB 4-D Milestone Support",
                description: "We work directly with structural engineers conducting milestone inspections on St. Petersburg condo buildings, translating their findings into detailed remediation scopes and construction plans. Our technical understanding bridges the gap between engineering reports and actionable repair programs, helping associations move from inspection to remediation without delay."
              },
              {
                icon: Building2,
                title: "Structural Concrete Repair",
                description: "Comprehensive concrete restoration for spalling, delamination, and rebar corrosion damage in St. Petersburg's waterfront condo buildings. We remove deteriorated concrete to sound substrate, treat exposed reinforcing steel, and apply engineered repair mortars and protective coatings designed for the peninsula's aggressive saltwater environment."
              },
              {
                icon: Shield,
                title: "Post-Tension System Repair",
                description: "Assessment and repair of post-tension cable systems in condo parking structures, elevated walkways, and floor slabs. Corroded or damaged tendons in St. Petersburg's coastal buildings require specialized repair techniques and careful structural monitoring during the repair process to maintain slab integrity."
              },
              {
                icon: HardHat,
                title: "Balcony Remediation",
                description: "Structural repair and waterproofing of condo balconies exposed to St. Petersburg's salt air. This includes concrete slab repair, railing system replacement, waterproof membrane installation, and restoration of balcony-to-building structural connections that have deteriorated from decades of coastal exposure."
              },
              {
                icon: FileCheck,
                title: "Building Envelope Restoration",
                description: "Exterior wall system repair, window and door seal replacement, and protective coating application for condo buildings experiencing water intrusion or envelope degradation. St. Petersburg's peninsula exposure means building envelopes must resist driving rain from multiple directions, not just the prevailing weather side."
              },
              {
                icon: Award,
                title: "Parking Structure Remediation",
                description: "Structural repair of condo parking garages experiencing concrete deterioration, expansion joint failure, and waterproofing membrane breakdown. Coastal parking structures in St. Petersburg face accelerated corrosion from salt-laden air and vehicle-tracked chlorides, requiring specialized repair materials and drainage system improvements."
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
              Understanding St. Petersburg's Condo Remediation Landscape
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The condo remediation market in St. Petersburg is shaped by geography, building age, and regulatory urgency in ways that distinguish it from other Florida markets. Contractors who lack specific experience with peninsula condo buildings often underestimate the scope and complexity of remediation work in this environment.
              </p>
              <p className="mb-6">
                The <a href="https://www.stpete.org/building_and_development_review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of St. Petersburg Development Services Department</a> handles building permits for condo remediation projects. Structural repair work that affects load-bearing elements or building envelope systems requires engineering-stamped plans and city permits. We coordinate the permitting process with the association's structural engineer to ensure construction documents align with both the milestone inspection findings and the city's plan review requirements.
              </p>
              <p className="mb-6">
                St. Petersburg's condo buildings cluster in distinct geographic areas, each with characteristic construction types and deterioration patterns. The downtown bayfront towers are typically newer concrete high-rises with exposed balconies and elevated parking structures subject to salt spray from Tampa Bay. Isla del Sol and Tierra Verde buildings face the most aggressive saltwater exposure from both the bay and Gulf, with some buildings showing visible concrete distress on all four elevations. Shore Acres waterfront condos, many built in the 1970s, often have thinner concrete cover over rebar than current standards require. Coquina Key buildings sit in low-lying flood zone areas where groundwater contributes to foundation and ground-level slab deterioration in addition to atmospheric salt exposure.
              </p>
              <p className="mb-6">
                Working in occupied condo buildings throughout St. Petersburg requires construction management approaches that differ from standard commercial work. Residents are present during construction. Association boards need regular progress reporting. Common areas must remain functional. Noise and dust control affect daily schedules. Parking must be maintained even when parking structures are under repair. We have developed phased construction approaches specific to occupied condo remediation that address all of these concerns while maintaining efficient construction progress.
              </p>
              <p>
                Pinellas County's status as Florida's most densely populated county means adjacent buildings, public roadways, and neighboring properties often constrain construction staging and equipment placement for condo remediation projects. Downtown St. Petersburg tower projects require coordination with city right-of-way for swing staging and material hoisting. Waterfront buildings may have limited landside access for construction equipment. We plan project logistics around these peninsula-specific constraints rather than discovering them mid-construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg Condo Remediation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured approach to condo remediation that addresses peninsula-specific deterioration while maintaining resident occupancy.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Engineering Assessment Review",
                description: "We review the structural engineer's milestone inspection report or condition assessment, walk the building to verify field conditions, and develop a comprehensive understanding of the remediation scope. For St. Petersburg waterfront buildings, this includes assessing all elevations for salt-related deterioration, not just the most visible damage areas.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Remediation Scope and Phasing",
                description: "We develop a detailed construction scope that translates engineering findings into specific repair methods, material specifications, and phased construction sequences. Phasing accounts for resident occupancy patterns, association funding availability, and the structural priority of identified repairs. Critical life-safety issues are addressed in the first phase.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting and Association Coordination",
                description: "We secure building permits through the City of St. Petersburg Development Services Department and coordinate construction logistics with the association's management company and board. This includes establishing resident communication protocols, construction hour agreements, parking management plans, and common area access schedules.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Remediation Construction",
                description: "Experienced crews perform structural repairs using methods and materials specified for the peninsula's saltwater environment. We maintain daily communication with building management, minimize noise and dust impacts on residents, and conduct quality control testing on concrete repairs to ensure long-term durability in St. Petersburg's corrosive conditions.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Documentation and Closeout",
                description: "We provide comprehensive remediation documentation including repair location maps, material certifications, quality control test results, and photographic records. This documentation supports the association's compliance files for SB 4-D requirements, future milestone inspections, and reserve study updates that reflect the completed remediation work.",
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
        title="St. Petersburg Condo Remediation FAQ"
        description="Common questions about condominium remediation and SB 4-D compliance in St. Petersburg, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="St. Petersburg" currentService="condo-remediation" currentServiceName="Condo Remediation" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Address Your St. Petersburg Condo's Remediation Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your condominium's structural condition, SB 4-D compliance requirements, or remediation planning. We work directly with association boards and their engineers to develop effective repair programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Building Assessment
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
    <RelatedArticles pageSlug="condo-remediation-st-petersburg" />
    </>
  );
}
