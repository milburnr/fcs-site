import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, AlertTriangle, FileCheck, Search, Scale, Wrench, ClipboardCheck } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import { CodeReference } from "@/components/CodeReference";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/condo-remediation-tampa/' },
  title: "Condo Remediation Tampa | SB 4-D Compliance",
  description: "Condo remediation and SB 4-D milestone inspection compliance in Tampa. Structural repairs, concrete restoration, waterproofing for aging condos.",
  openGraph: {
    title: "Condo Remediation Tampa | SB 4-D Compliance",
    description: "Condo remediation and SB 4-D milestone inspection compliance in Tampa. Structural repairs, concrete restoration, waterproofing for aging condos.",
    url: "https://floridaconstructionspecialists.com/condo-remediation-tampa/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Which Tampa condominiums are subject to SB 4-D milestone inspection requirements?",
    answer: "Under Florida's SB 4-D legislation, condominium buildings three stories or higher must undergo milestone structural inspections. In Tampa, this affects a large number of properties along the Bayshore Boulevard corridor, in the Harbour Island and Davis Islands condo communities, throughout the Channelside district, and in the downtown high-rise condo towers. Buildings that reached 30 years of age by December 31, 2024 were required to have their initial milestone inspection completed. Buildings within three miles of the coastline, which includes most of Tampa's condo stock given the city's proximity to Tampa Bay, must complete their first inspection at 25 years. Associations that have not yet completed these inspections face increasing legal and insurance exposure."
  },
  {
    question: "What structural issues are most commonly found during Tampa condo milestone inspections?",
    answer: "Tampa's combination of salt air from Tampa Bay, heavy rainfall exceeding 50 inches annually, and high humidity creates aggressive conditions for concrete and steel structures. The most common findings in Tampa condo inspections include spalling concrete on balconies and exterior walkways where moisture has reached the reinforcing steel, corroded post-tension cables in parking structures and elevated slabs, deteriorated expansion joints that allow water intrusion into the building structure, compromised waterproofing membranes on flat roofs and elevated pool decks, and rusting embedded steel in load-bearing columns and beams. The severity varies by building age, original construction quality, and maintenance history. Buildings along the Bayshore corridor and on Harbour Island tend to show more salt-related corrosion due to their direct bay exposure."
  },
  {
    question: "How long does a typical condo remediation project take in Tampa?",
    answer: "The timeline depends on the scope of structural deficiencies identified during the milestone inspection. Minor remediation involving localized concrete repair and waterproofing on a single building might take 3 to 6 months. Moderate projects addressing widespread balcony deterioration, parking structure repairs, and building envelope issues across a mid-rise complex typically require 6 to 12 months. Major structural remediation involving post-tension cable replacement, column reinforcement, or extensive concrete restoration on a large Tampa high-rise can take 12 to 18 months or longer. We develop phased construction plans that allow continued building occupancy whenever possible, which is particularly important for Tampa condo associations whose residents live in the building year-round."
  },
  {
    question: "How does FCS help Tampa condo associations manage remediation costs?",
    answer: "Condo remediation costs are a significant concern for Tampa associations, many of which face special assessments to fund required repairs. We help associations manage costs through several approaches. First, we provide detailed repair scoping that distinguishes between immediately critical structural repairs and lower-priority maintenance items, allowing associations to phase work based on urgency and available funding. Second, our dedicated engineering partners identify the most cost-effective repair methods for each deficiency rather than defaulting to the most expensive option. Third, we develop construction phasing plans that spread costs over time when the structural engineer's findings support a phased approach. Fourth, we provide the detailed documentation that insurance carriers and reserve study professionals need to support claims or funding plans."
  },
  {
    question: "Does FCS work directly with the structural engineers conducting Tampa condo milestone inspections?",
    answer: "Yes, we regularly collaborate with licensed structural engineers who perform milestone inspections on Tampa condominiums. While FCS does not perform the inspections themselves, which must be conducted by a licensed engineer or architect under Florida law, we work alongside the inspection engineers during the assessment phase to understand their findings and begin developing remediation plans. This collaboration ensures that our construction approach directly addresses the specific deficiencies identified in the inspection report. We also coordinate with the engineer during and after remediation to obtain the threshold building certification that the association needs to demonstrate compliance with SB 4-D requirements."
  },
  {
    question: "What happens to a Tampa condo building if milestone inspection remediation is not completed?",
    answer: "The consequences of non-compliance with SB 4-D requirements are escalating for Tampa condo associations. Buildings that fail to complete required milestone inspections or necessary remediation face several risks: property insurance carriers may decline to renew coverage or significantly increase premiums, making the building effectively uninsurable. Mortgage lenders may refuse to finance unit purchases, which depresses property values across the entire building. The City of Tampa Building Services Department can issue code violations and ultimately pursue unsafe building proceedings. Association board members may face personal liability for failing to meet their fiduciary duty to maintain the building. The practical effect is that delay increases both the cost of remediation and the legal exposure for the association and its board members."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Condo Remediation", href: "/condo-remediation/" },
  { name: "Tampa", href: "/condo-remediation-tampa/" },
];

export default function CondoRemediationTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Condo Remediation" />
      <ServiceSchema
        serviceName="Condo Remediation"
        serviceDescription="Condo remediation and SB 4-D milestone inspection compliance in Tampa, FL. Structural concrete repair, balcony restoration, waterproofing, post-tension repair. Licensed CBC1262722."
        city="Tampa"
        serviceCategories={["Milestone Inspection Remediation", "Structural Concrete Repair", "Balcony Restoration", "Post-Tension Cable Repair", "Building Envelope Waterproofing"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tampa-condo-building-construction/tampa-condo-building-construction-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Tampa, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Condo Remediation in Tampa, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Tampa's aging condominium stock faces urgent structural assessment and remediation under Florida's SB 4-D legislation. Florida Construction Specialists provides comprehensive condo remediation services, from milestone inspection coordination to complete structural repair, for associations throughout Tampa and Hillsborough County.
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
                <span className="text-white text-sm font-medium">SB 4-D Compliance Experts</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Schedule a Remediation Assessment
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
              <strong>SB4-D Compliance Resource:</strong> For comprehensive compliance checklists, deadlines, cost guidance, and Tampa-specific requirements, visit our{' '}
              <Link href="/sb4d-compliance/tampa/" className="underline font-semibold hover:text-blue-600">SB4-D Compliance Guide for Tampa</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Tampa Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa's Condo Buildings Are Running Out of Time
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                The passage of Florida's SB 4-D legislation following the Champlain Towers collapse in Surfside created a structural inspection mandate that affects hundreds of condominium buildings across Tampa. Buildings three stories and above must now undergo milestone inspections at 30 years of age, or 25 years if located within three miles of the coastline. Given Tampa's geography, with Tampa Bay wrapping around the city's western and southern edges, the vast majority of Tampa's condo buildings fall under the more aggressive 25-year timeline.
              </p>
              <p className="mb-6">
                The scale of the challenge in Tampa is substantial. The Bayshore Boulevard corridor, one of the longest continuous waterfront sidewalks in the world, is lined with condominium towers built primarily in the 1970s, 1980s, and 1990s. Many of these buildings are now 30 to 50 years old and are confronting their first-ever comprehensive structural assessments. Harbour Island's condo community, built largely in the 1980s on a man-made island in the middle of Hillsborough Bay, faces particularly aggressive salt exposure conditions. Davis Islands condominiums, Channelside towers built during the mid-2000s development boom, and the scattered condo complexes throughout South Tampa neighborhoods like Beach Park and Palma Ceia all fall within the SB 4-D inspection mandate.
              </p>
              <p className="mb-6">
                What many Tampa condo associations are discovering during their milestone inspections is that decades of deferred maintenance, combined with Tampa's harsh subtropical environment, have produced structural deterioration that requires significant remediation. The combination of salt air from Tampa Bay, annual rainfall exceeding 50 inches, intense UV exposure, and hurricane-force wind events accelerates concrete deterioration and steel corrosion far beyond what the original builders anticipated. Balconies, parking structures, exterior walkways, and building envelope systems bear the brunt of this environmental assault.
              </p>
              <p>
                Florida Construction Specialists brings structural remediation expertise to Tampa condo associations navigating this unprecedented compliance challenge. With our licensed CBC contractor credentials, direct access to licensed structural engineers, and decades of experience with concrete and structural repair in the Tampa Bay environment, we help associations move from inspection findings to completed remediation efficiently and cost-effectively.
              </p>
            </div>

            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections for Condominium and Cooperative Buildings"
              description="Requires structural inspections of condominium buildings 3 stories or higher at 30 years of age (25 years within 3 miles of the coast). Tampa's proximity to Tampa Bay places most condo buildings under the accelerated 25-year timeline. Associations must complete required remediation or face insurance, financing, and code enforcement consequences."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/tampa-condo-building-construction/tampa-condo-building-construction-small.webp"
        alt="Condominium building in Tampa requiring structural assessment"
        title="Protecting Tampa's Condo Communities"
        subtitle="SB 4-D compliance, structural repair, and long-term building preservation"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Comprehensive Condo Remediation for Tampa's Building Stock
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From the initial milestone inspection findings to final structural certification, we address every aspect of condominium structural remediation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Milestone Inspection Coordination",
                description: "We work alongside the licensed structural engineer conducting your milestone inspection, providing construction expertise during the assessment and beginning remediation planning before the final report is complete. This parallel approach shortens the timeline from inspection to construction start."
              },
              {
                icon: Wrench,
                title: "Structural Concrete Repair",
                description: "Spalling concrete, corroded reinforcing steel, and deteriorated structural elements are addressed through engineered repair procedures. We remove damaged concrete, treat or replace corroded reinforcement, and apply structural repair mortars designed for Tampa's marine-influenced environment."
              },
              {
                icon: ClipboardCheck,
                title: "Balcony and Walkway Restoration",
                description: "Exterior balconies and elevated walkways are among the most vulnerable structural elements in Tampa condos. We perform complete balcony restoration including concrete repair, waterproofing membrane replacement, railing replacement, and drainage improvements to prevent future deterioration."
              },
              {
                icon: Scale,
                title: "Post-Tension Cable Repair",
                description: "Post-tensioned concrete structures, common in Tampa condo parking garages and elevated slabs, require specialized repair when cables corrode or lose tension. We perform cable testing, individual cable replacement, and structural reinforcement when post-tension systems show signs of distress."
              },
              {
                icon: Shield,
                title: "Building Envelope Waterproofing",
                description: "Tampa's rainfall and hurricane exposure demand effective building envelope waterproofing. We address failed sealant joints, deteriorated stucco systems, compromised window and door installations, and aging roof waterproofing membranes that allow moisture into the building structure."
              },
              {
                icon: FileCheck,
                title: "Parking Structure Remediation",
                description: "Multi-level parking structures in Tampa condos face severe exposure to vehicle chemicals, rainfall, and salt air. We perform comprehensive parking structure repairs including deck waterproofing, expansion joint replacement, structural column and beam repair, and traffic-bearing coating application."
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
              Understanding Tampa's Condo Environment
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Condo remediation in Tampa is shaped by the city's specific environmental conditions and building history. The <a href="https://www.tampa.gov/building-services" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Tampa Building Services Department</a> oversees permitting for remediation projects, and we maintain the working relationships with city inspectors and plan reviewers that keep remediation permits moving without unnecessary delays.
              </p>
              <p className="mb-6">
                Tampa's exposure to Tampa Bay creates a salt air environment that accelerates chloride-induced corrosion in reinforced concrete structures. Buildings along Bayshore Boulevard, on Harbour Island, on Davis Islands, and in the Channelside waterfront area experience the highest salt exposure. This corrosion mechanism is particularly insidious because it progresses inside the concrete, often invisible until spalling occurs on the exterior surface. By the time spalling is visible, the reinforcing steel underneath has typically lost significant cross-section. Our remediation approach includes chloride testing of surrounding concrete to determine the full extent of contamination beyond the visible damage.
              </p>
              <p className="mb-6">
                The seasonal weather patterns in Tampa affect both the deterioration of condo structures and the scheduling of remediation work. The intense afternoon thunderstorms from May through September deliver heavy rainfall that tests every joint, membrane, and seal on a building's exterior. Hurricane season brings the additional risk of wind-driven rain penetration that can deposit moisture deep into wall assemblies and structural cavities. We schedule exterior remediation work to take advantage of Tampa's drier months when possible, and we sequence work so that newly exposed structural surfaces are protected before the next rain event.
              </p>
              <p>
                Tampa condo associations also face the challenge of conducting major remediation work while residents continue to live in the building. Unlike new construction, condo remediation requires careful coordination with occupied units, management of noise and dust in residential environments, controlled access to common areas, and clear communication with hundreds of individual unit owners. We develop detailed phasing plans that minimize disruption to residents in the Bayshore high-rises, the mid-rise communities in South Tampa, and the smaller condo complexes in neighborhoods like Gandy, Westshore, and Seminole Heights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa Condo Remediation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From milestone inspection findings to structural re-certification, we guide Tampa condo associations through every step.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Inspection Review and Scope Development",
                description: "We review the structural engineer's milestone inspection report, conduct our own construction assessment of the identified deficiencies, and develop a detailed scope of work with cost estimates. We distinguish between critical structural repairs, important maintenance items, and optional improvements so the association can make informed decisions about priorities and phasing."
              },
              {
                step: "02",
                title: "Association Board Presentation and Planning",
                description: "We present remediation options, costs, and timelines to the association's board of directors. We help boards understand the urgency levels of different findings, the consequences of deferral, and the available approaches for funding the work. Our goal is to give boards the information they need to make sound decisions for their community."
              },
              {
                step: "03",
                title: "Permitting and Engineering Coordination",
                description: "We prepare permit applications for the City of Tampa Building Services Department, coordinate with the structural engineer on repair details and specifications, and manage the plan review process. For complex remediation involving structural modifications, we engage additional engineering disciplines as needed."
              },
              {
                step: "04",
                title: "Phased Remediation Construction",
                description: "Construction proceeds in phases designed to minimize disruption to Tampa condo residents. We sequence work by building elevation, floor level, or structural system to maintain safe building access and livability throughout the project. Dust control, noise management, and clear communication with residents are integral to our approach."
              },
              {
                step: "05",
                title: "Structural Certification and Documentation",
                description: "Upon completion of remediation, the structural engineer conducts verification inspections and provides the certification documentation required under SB 4-D. We compile complete project records including repair specifications, material certifications, quality control documentation, and warranty information for the association's permanent files."
              }
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
        title="Tampa Condo Remediation FAQ"
        description="Frequently asked questions about condo remediation and SB 4-D compliance in Tampa, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Tampa" currentService="condo-remediation" currentServiceName="Condo Remediation" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Your Tampa Condo Association Needs a Remediation Plan
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            SB 4-D deadlines are not flexible. Contact Florida Construction Specialists to discuss your milestone inspection findings and develop a remediation plan that protects your building, your residents, and your association's compliance standing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Remediation Consultation
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
              <span>SB 4-D Remediation Specialists</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
