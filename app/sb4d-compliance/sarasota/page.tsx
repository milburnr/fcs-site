import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle, Scale } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { AuthorByline } from "@/components/AuthorByline";
import { BackToHub } from "@/components/BackToHub";
import { CodeReference } from "@/components/CodeReference";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://floridaconstructionspecialists.com/sb4d-compliance/sarasota/" },
  title: "SB4-D Compliance Sarasota | Condo Milestone Inspection",
  description: "SB4-D compliance for Sarasota condominiums. Milestone inspections, SIRS studies, and structural remediation for barrier island luxury condos.",
  openGraph: {
    title: "SB4-D Compliance Sarasota | Condo Milestone Inspection",
    description: "SB4-D compliance for Sarasota condominiums. Milestone inspections, SIRS studies, and structural remediation for barrier island luxury condos.",
    url: "https://floridaconstructionspecialists.com/sb4d-compliance/sarasota/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How does Hurricane Ian affect SB4-D compliance for Sarasota condominiums?",
    answer: "Hurricane Ian made landfall near Sarasota in September 2022, causing significant structural damage to barrier island condominiums through storm surge, wind loads, and water intrusion. Many buildings that sustained hurricane damage also had pre-existing structural deterioration from decades of salt exposure. This creates overlapping compliance challenges: associations must address hurricane-related damage (often covered by insurance) alongside pre-existing structural deficiencies identified during milestone inspections (funded by association reserves or special assessments). Florida Construction Specialists has experience separating hurricane damage from pre-existing deterioration during remediation, which is critical for accurate insurance claims and proper cost allocation."
  },
  {
    question: "Which Sarasota condominiums fall under the 25-year milestone inspection deadline?",
    answer: "Nearly every condominium building on Sarasota's barrier islands falls under the accelerated 25-year milestone inspection deadline because SB4-D applies this threshold to buildings within three miles of the coastline. This includes all condos on Siesta Key, Lido Key, Longboat Key, Bird Key, and the downtown Sarasota bayfront. Many mainland condominiums within Sarasota city limits also fall within the three-mile coastal zone. Buildings located further inland, such as those in the eastern portions of Sarasota County, may qualify for the 30-year timeline. We help associations determine their specific deadline based on their Certificate of Occupancy date and proximity to the coast."
  },
  {
    question: "What makes barrier island condo remediation more expensive in Sarasota?",
    answer: "Sarasota's barrier island condominiums face cost premiums for several reasons. Salt-resistant materials and marine-grade concrete mixes cost more than standard construction materials used inland. Equipment and material deliveries must cross bridge infrastructure to reach Siesta Key, Lido Key, and Longboat Key, adding logistics costs. Limited staging areas on the densely developed islands increase project duration. Luxury finishes common in Sarasota's affluent market add restoration complexity when remediation affects unit interiors or common areas. Additionally, Sarasota's high property values mean the stakes of non-compliance or deferred maintenance are proportionally higher, as structural deficiencies can significantly impact unit values in this market."
  },
  {
    question: "Does Longboat Key fall under Sarasota County or Manatee County for SB4-D purposes?",
    answer: "Longboat Key straddles the Sarasota-Manatee county line, which creates a jurisdictional nuance for condominium associations. Buildings on the southern portion of Longboat Key fall under the Town of Longboat Key's building department, which operates within Sarasota County's jurisdiction. Buildings on the northern portion fall under Manatee County. The SB4-D requirements are the same regardless of county, but permit applications and milestone inspection filings must go to the correct jurisdictional authority. We work with all three relevant jurisdictions for Longboat Key projects and ensure filings are submitted correctly."
  },
  {
    question: "Can affluent Sarasota associations fund SB4-D remediation without special assessments?",
    answer: "Some Sarasota associations with well-funded reserves may be able to absorb milestone inspection costs and minor remediation without special assessments. However, SB4-D's reserve funding requirements mean that associations can no longer waive or reduce reserves for structural components identified in their Structural Integrity Reserve Study. For associations facing significant remediation scopes, which is common in older barrier island buildings, the costs typically exceed existing reserves even in affluent communities. Multi-million dollar remediation projects on luxury Sarasota condominiums regularly require special assessments, and the amounts can be substantial. We provide detailed remediation budgets during pre-construction so boards can plan assessments and financing accurately."
  },
  {
    question: "How does FCS coordinate milestone inspections with Sarasota County Building Services?",
    answer: "Florida Construction Specialists coordinates with the Sarasota County Building and Development Services department and the City of Sarasota Building Department for all SB4-D compliance activities. We manage permit applications for remediation work, coordinate access for licensed structural engineers conducting milestone inspections, and submit required documentation for compliance verification. For buildings on Longboat Key, we work with the Town of Longboat Key's building department as well. Our familiarity with each jurisdiction's specific requirements and processes helps associations navigate the compliance timeline efficiently without administrative delays."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "SB4-D Compliance", href: "/sb4d-compliance/" },
  { name: "Sarasota", href: "/sb4d-compliance/sarasota/" },
];

export default function SB4DComplianceSarasotaPage() {
  return (
    <>
      <LocalBusinessSchema city="Sarasota" service="SB4-D Compliance" />
      <ServiceSchema
        serviceName="SB4-D Compliance"
        serviceDescription="SB4-D compliance services for Sarasota condominiums. Milestone structural inspections, SIRS studies, structural remediation, and post-Hurricane Ian restoration for barrier island luxury condos. Licensed CBC1262722, 40+ years experience."
        city="Sarasota"
        minPrice="50000"
        serviceCategories={["SB4-D Compliance", "Milestone Inspections", "Structural Remediation", "SIRS Support", "Post-Hurricane Restoration"]}
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
              SB4-D Compliance for Sarasota Condominiums
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Sarasota's luxury barrier island condominiums face a convergence of SB4-D compliance deadlines, post-Hurricane Ian structural needs, and decades of Gulf salt exposure. Properties on Siesta Key, Lido Key, Longboat Key, and Bird Key require specialized compliance expertise that accounts for the unique jurisdictional, environmental, and financial complexities of this affluent coastal market. Florida Construction Specialists delivers that expertise with over four decades of Florida construction experience.
            </p>
            <AuthorByline publishDate="2026-02-18" variant="light" />

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
                <AlertTriangle className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">SB4-D Specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-cta flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact/" className="btn-secondary text-center">
                Request Compliance Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Hub + Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <BackToHub silo="commercial" customHubTitle="SB4-D Compliance Hub" customHubHref="/sb4d-compliance/" />

            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Affluent Barrier Island Market Faces High-Stakes Compliance Deadlines
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Sarasota County contains one of Florida's highest concentrations of luxury barrier island condominiums. Siesta Key, Lido Key, Longboat Key, and Bird Key were developed heavily during the 1970s and 1980s, producing hundreds of Gulf-front and bayfront condominium towers now 40 to 55 years old. These buildings represent some of the most valuable residential real estate on Florida's Gulf Coast, with unit values often ranging from $500,000 to several million dollars. The financial stakes of SB4-D non-compliance in this market are proportionally severe. With over four decades of experience in Florida construction, including our principal's background as an Executive General Adjuster, Florida Construction Specialists understands both the structural and financial dimensions of compliance for Sarasota's luxury condominium associations.
              </p>
              <p className="mb-6">
                Senate Bill 4-D's 25-year milestone inspection deadline applies to virtually every condominium building on Sarasota's barrier islands, all of which sit within three miles of the coastline. Buildings constructed during the 1970s and 1980s development boom have already exceeded this threshold by 15 to 30 years. The law requires both milestone structural inspections and fully funded Structural Integrity Reserve Studies, eliminating the previous option for associations to waive reserve funding for structural components. For associations that deferred maintenance during decades of optional reserve funding, the combined cost of inspections, newly mandated reserves, and remediation for identified deficiencies represents a significant financial event.
              </p>
              <p className="mb-6">
                Hurricane Ian compounded Sarasota's compliance landscape when it struck in September 2022, pushing destructive storm surge across the barrier islands and causing structural damage to buildings that were already deteriorating from decades of salt exposure. Many condominium associations now face the intersection of hurricane damage restoration and SB4-D compliance remediation, creating complex projects where insurance-funded storm repairs and association-funded structural maintenance must be carefully separated and coordinated. Buildings on Siesta Key and Lido Key sustained particularly significant damage, with some still completing hurricane restoration while simultaneously facing milestone inspection deadlines.
              </p>
              <p>
                The jurisdictional landscape in Sarasota adds another layer of complexity. Condominium buildings may fall under the City of Sarasota Building Department, Sarasota County Building and Development Services, or the Town of Longboat Key depending on their location. Longboat Key itself straddles the Sarasota-Manatee county line, meaning buildings on the same island may file with different jurisdictions. We navigate these jurisdictional boundaries for every Sarasota-area compliance project.
              </p>
            </div>

            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections for Condominium and Cooperative Buildings"
              description="Requires structural inspections of condominium buildings 3 stories or higher. Sarasota's barrier island condos on Siesta Key, Lido Key, Longboat Key, and Bird Key fall within the 3-mile coastal zone, triggering the accelerated 25-year inspection timeline. Post-Hurricane Ian, many buildings face overlapping insurance restoration and compliance remediation."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/railing-replacement-best-practices-condos/railing-replacement-best-practices-condos-display.webp"
        alt="Sarasota barrier island condominium requiring SB4-D milestone inspection and structural remediation"
        title="Sarasota's SB4-D Compliance Challenge"
        subtitle="Luxury barrier island condominiums face the convergence of aging infrastructure, hurricane damage, and mandatory compliance"
        overlayOpacity={0.55}
      />

      {/* Sarasota Building Department */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Sarasota County Jurisdictions and Permitting
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-6">
                SB4-D compliance in the Sarasota area involves multiple jurisdictional authorities depending on the building's location. Unlike Pinellas or Hillsborough counties where most condominiums fall under a single jurisdiction, Sarasota-area associations must file with the correct authority for their specific building.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-l-4 border-brand-green shadow-sm">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">Sarasota County Building and Development Services</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Jurisdiction for condominiums in unincorporated Sarasota County, including portions of Siesta Key and areas outside city limits.
                </p>
                <a
                  href="https://www.scgov.net/government/building-and-development-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green hover:underline text-sm font-medium"
                >
                  Visit Sarasota County Building &rarr;
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-brand-green shadow-sm">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">City of Sarasota Building Department</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Jurisdiction for condominiums within Sarasota city limits, including downtown bayfront, Lido Key, Bird Key, and St. Armands Circle area.
                </p>
                <a
                  href="https://www.sarasotafl.gov/government/building-department"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green hover:underline text-sm font-medium"
                >
                  Visit City of Sarasota Building &rarr;
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-l-4 border-amber-500 shadow-sm mb-8">
              <h3 className="text-lg font-bold text-brand-green-dark mb-2">Longboat Key Jurisdictional Note</h3>
              <p className="text-gray-600 text-sm">
                Longboat Key straddles the Sarasota-Manatee county line. Buildings on the southern portion file with the Town of Longboat Key under Sarasota County jurisdiction. Buildings on the northern portion fall under Manatee County Building and Development Services. We determine the correct jurisdiction for each building and manage filings accordingly.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Remediation permits in Sarasota County require structural engineering drawings, material specifications for corrosion-resistant products, and phasing plans that demonstrate continued building safety during construction. For hurricane-damaged buildings, permits may also require documentation showing the distinction between storm damage repairs and pre-existing structural remediation. We manage the full permitting process across all Sarasota-area jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sarasota's Unique Compliance Landscape */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sarasota's Unique SB4-D Compliance Landscape
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Luxury property values, hurricane aftermath, and multi-jurisdictional complexity define the compliance challenge for Sarasota's condominium associations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "High-Stakes Property Values",
                description: "Sarasota's barrier island condominiums represent some of the most valuable residential real estate on Florida's Gulf Coast. Non-compliance with SB4-D can affect property values, insurance availability, and the ability to close real estate transactions. The financial consequences of deferred compliance are proportionally higher in this luxury market."
              },
              {
                icon: AlertTriangle,
                title: "Post-Hurricane Ian Complexity",
                description: "Hurricane Ian in 2022 damaged buildings that were already deteriorating from decades of salt exposure. Associations now face overlapping hurricane restoration and SB4-D compliance remediation, requiring careful separation of insurance-funded storm repairs from association-funded structural maintenance to ensure proper cost allocation."
              },
              {
                icon: Building2,
                title: "Multi-Jurisdiction Navigation",
                description: "Sarasota-area condominiums may fall under the City of Sarasota, Sarasota County, or the Town of Longboat Key. Longboat Key itself straddles two counties. Each jurisdiction has specific filing requirements for milestone inspections and remediation permits. Incorrect filing delays compliance timelines unnecessarily."
              },
              {
                icon: Shield,
                title: "Luxury Finishes Masking Deterioration",
                description: "Affluent Sarasota associations have historically invested in cosmetic renovations, new lobbies, updated amenities, and interior upgrades while deferring structural maintenance. Beautiful interiors can mask deteriorating concrete, corroding reinforcement, and failing waterproofing that milestone inspections are designed to uncover."
              },
              {
                icon: HardHat,
                title: "Complex Remediation Scopes",
                description: "Sarasota's affluent associations may be better positioned financially for large remediation projects, but the scopes are proportionally complex. Multi-million dollar remediation plans involving structural concrete repair, post-tension system restoration, building envelope replacement, and parking structure overhaul require sophisticated project management."
              },
              {
                icon: Briefcase,
                title: "Aging Gulf-Front Tower Stock",
                description: "The 1970s and 1980s produced Sarasota's most iconic Gulf-front condo towers, built under earlier code editions with less rigorous corrosion protection standards. These buildings represent the highest-risk structures for milestone inspection findings and the most likely to require comprehensive remediation programs spanning multiple years."
              }
            ].map((challenge) => (
              <div key={challenge.title} className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <challenge.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Structural Issues */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Common Structural Issues in Sarasota Condominiums
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Milestone inspections on Sarasota's coastal condominiums reveal structural deterioration patterns shaped by the combination of barrier island salt exposure, hurricane impacts, and decades of deferred structural maintenance.
              </p>
              <p className="mb-6">
                <strong>Hurricane damage compounding pre-existing deterioration</strong> is the defining issue for many Sarasota condominiums in the post-Ian era. Buildings that had existing concrete spalling, waterproofing failures, and corrosion-weakened structural elements sustained disproportionate damage during the hurricane because compromised structural systems could not resist storm forces as effectively as sound structures. Milestone inspections on these buildings reveal both hurricane-inflicted damage and the underlying pre-existing deterioration that made the building vulnerable, creating complex remediation scopes that require careful forensic separation.
              </p>
              <p className="mb-6">
                <strong>Salt exposure on barrier islands creating aggressive corrosion</strong> follows the same mechanism as other Gulf Coast communities but is amplified by Sarasota's geography. Siesta Key, Lido Key, and Bird Key condominiums face Gulf exposure on their western elevations and bay exposure on their eastern elevations, creating bidirectional salt attack. Longboat Key's narrow width means no building orientation provides protection from salt air. Chloride penetration testing during Phase 2 inspections frequently reveals contamination levels far exceeding the threshold for corrosion initiation, even in buildings that appear sound on the surface.
              </p>
              <p className="mb-6">
                <strong>Luxury finishes masking underlying structural issues</strong> is a pattern seen repeatedly in Sarasota's affluent condominium market. Associations invest in lobby renovations, hallway upgrades, new landscaping, and amenity improvements that create an impression of a well-maintained building. Meanwhile, the concrete structure, waterproofing systems, and exterior coatings that protect structural integrity may have been neglected for decades. Milestone inspections often surprise boards that believed their building was in good condition based on visible cosmetic improvements.
              </p>
              <p>
                <strong>Elevated pool deck and parking structure deterioration</strong> affects nearly every Sarasota barrier island condominium of significant age. Pool decks positioned above occupied space or parking rely on traffic-bearing waterproofing membranes that have limited service lives. When these membranes fail, water infiltration accelerates corrosion in the structural slab below. Parking structures face similar waterproofing challenges compounded by vehicle traffic wear, expansion joint failure, and direct salt air exposure on open decks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FCS in Sarasota */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Construction Specialists in Sarasota
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Florida Construction Specialists brings direct experience with Sarasota County's jurisdictional landscape to every SB4-D compliance project. We understand which buildings file with the City of Sarasota, which with Sarasota County, and the nuances of the Longboat Key jurisdictional boundary. This familiarity prevents the administrative delays that can push associations past compliance deadlines.
              </p>
              <p className="mb-6">
                Our post-Hurricane Ian remediation experience is particularly relevant for Sarasota's condominium market. Our principal's background as an Executive General Adjuster provides unique perspective on projects where hurricane damage and pre-existing structural deterioration overlap. We help associations and their insurance professionals distinguish between storm-related damage that belongs in an insurance claim and pre-existing deterioration that is the association's maintenance responsibility. This separation is critical for accurate insurance recovery and fair allocation of remediation costs among unit owners.
              </p>
              <p className="mb-6">
                We maintain direct working relationships with licensed structural engineers experienced in Sarasota's coastal condominium buildings. This coordination ensures seamless handoff between milestone inspection findings and remediation execution, so associations move efficiently from inspection report to construction plan without searching for a qualified contractor.
              </p>
              <p>
                Beyond SB4-D compliance, we serve Sarasota condominium associations through our full range of structural services. Associations working with us on compliance may also benefit from our <Link href="/condo-remediation-sarasota/" className="text-brand-green hover:underline font-medium">condo remediation services</Link>, <Link href="/balcony-reconstruction-sarasota/" className="text-brand-green hover:underline font-medium">balcony reconstruction</Link>, and <Link href="/exterior-waterproofing-sarasota/" className="text-brand-green hover:underline font-medium">exterior waterproofing</Link> expertise for comprehensive building restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Sarasota SB4-D Compliance FAQ"
        description="Common questions about SB4-D compliance, milestone inspections, and structural remediation for Sarasota condominiums."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Sarasota Condo Boards: Address Your SB4-D Compliance Requirements
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether facing post-Hurricane Ian complexities, aging barrier island infrastructure, or approaching milestone inspection deadlines, Florida Construction Specialists provides the structural expertise Sarasota's luxury condominium market demands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-cta flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              Request Compliance Consultation
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Licensed Engineering Partners</span>
              <span>{BUSINESS_INFO.yearsInBusiness} Years Experience</span>
              <span>SB4-D Compliance Specialists</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="sb4d-compliance-sarasota" />
    </>
  );
}
