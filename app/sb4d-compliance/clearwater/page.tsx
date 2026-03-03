import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, HardHat, Briefcase, AlertTriangle, Clock } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { AuthorByline } from "@/components/AuthorByline";
import { BackToHub } from "@/components/BackToHub";
import { CodeReference } from "@/components/CodeReference";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "https://floridaconstructionspecialists.com/sb4d-compliance/clearwater/" },
  title: "SB4-D Compliance Clearwater",
  description: "SB4-D compliance services for Clearwater condominiums. Milestone inspections, SIRS studies, and structural remediation for barrier island and beach condos.",
  openGraph: {
    title: "SB4-D Compliance Clearwater",
    description: "SB4-D compliance services for Clearwater condominiums. Milestone inspections, SIRS studies, and structural remediation for barrier island and beach condos.",
    url: "https://floridaconstructionspecialists.com/sb4d-compliance/clearwater/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Do Clearwater Beach condominiums face the 25-year or 30-year milestone inspection deadline?",
    answer: "Virtually every condominium building in Clearwater falls under the accelerated 25-year milestone inspection deadline. Senate Bill 4-D applies the 25-year threshold to buildings within three miles of the coastline. Since Clearwater is a barrier island community bounded by the Gulf of Mexico and the Intracoastal Waterway, even mainland Clearwater condominiums typically fall within this three-mile coastal zone. Buildings constructed in the 1980s and early 1990s are already past due for their initial milestone inspections. Florida Construction Specialists helps Clearwater associations understand their specific deadline and prepare for both Phase 1 and Phase 2 inspections."
  },
  {
    question: "How does Clearwater's salt spray environment affect SB4-D compliance findings?",
    answer: "Clearwater's barrier island location creates one of the most aggressive salt exposure environments in Tampa Bay. Gulf salt spray continuously deposits chloride ions on concrete surfaces, penetrating to reinforcing steel and initiating corrosion that accelerates structural deterioration. When licensed engineers conduct Phase 1 milestone inspections on Clearwater Beach condominiums, they frequently identify salt-driven concrete spalling, rebar exposure, balcony deterioration, and waterproofing failures at rates significantly higher than inland buildings of similar age. This means Clearwater beach condos are more likely to require Phase 2 inspections and subsequent structural remediation than comparable inland structures."
  },
  {
    question: "Can remediation work on Clearwater Beach condos be scheduled around tourist season?",
    answer: "Seasonal scheduling is a common request from Clearwater Beach condominium associations, many of which have significant seasonal resident populations and tourism-driven rental income. We work with association boards to develop phased remediation schedules that minimize disruption during peak season (November through April) when occupancy is highest. However, SB4-D compliance deadlines may limit the flexibility to defer all work to summer months, particularly if Phase 2 inspections identify safety-critical structural issues. We develop phasing plans that address urgent safety repairs immediately while scheduling less critical work during lower-occupancy periods."
  },
  {
    question: "What construction access challenges exist for Clearwater Beach condo remediation?",
    answer: "Clearwater Beach is a barrier island accessible primarily via Memorial Causeway and the Sand Key Bridge, creating unique logistics challenges for remediation projects. Large equipment and material deliveries must cross bridge infrastructure with weight and height restrictions. Limited staging areas on the beach mean construction materials cannot be stockpiled on-site the way they can at mainland projects. Parking constraints on Gulf Boulevard and Mandalay Avenue affect crew access and equipment placement. We plan logistics in advance, coordinating delivery schedules to avoid peak traffic hours, securing temporary staging permits from the City of Clearwater, and managing material deliveries in smaller, more frequent loads."
  },
  {
    question: "What is a Structural Integrity Reserve Study and does my Clearwater condo need one?",
    answer: "A Structural Integrity Reserve Study (SIRS) is required under SB4-D for all condominium associations with buildings three stories or higher. The SIRS evaluates the remaining useful life and replacement cost of major structural components including roofing, load-bearing walls, floors, foundations, plumbing, electrical systems, waterproofing, and exterior painting. Clearwater associations must maintain fully funded reserves based on their SIRS findings and can no longer vote to waive or reduce reserve funding for these structural components. Florida Construction Specialists provides the structural condition data and remediation cost projections that licensed engineers and reserve study specialists need to complete accurate SIRS reports for Clearwater condominium buildings."
  },
  {
    question: "How does FCS coordinate with licensed engineers for Clearwater milestone inspections?",
    answer: "Florida Construction Specialists maintains direct working relationships with licensed structural engineers experienced in coastal condominium assessment. We coordinate access to all building areas the engineer needs to inspect, provide historical maintenance records when available, and assist with non-destructive and destructive testing logistics during Phase 2 inspections. After the engineer delivers inspection findings, we develop detailed remediation plans and cost estimates that address every identified deficiency. Our role is to translate engineering findings into actionable construction plans that associations can budget for and schedule, bridging the gap between the inspection report and the physical remediation work."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "SB4-D Compliance", href: "/sb4d-compliance/" },
  { name: "Clearwater", href: "/sb4d-compliance/clearwater/" },
];

export default function SB4DComplianceClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="SB4-D Compliance" />
      <ServiceSchema
        serviceName="SB4-D Compliance"
        serviceDescription="SB4-D compliance services for Clearwater condominiums. Milestone structural inspections, SIRS studies, concrete remediation, and structural repair for barrier island and beach condo buildings. Licensed CBC1262722, 40+ years experience."
        city="Clearwater"
        minPrice="50000"
        serviceCategories={["SB4-D Compliance", "Milestone Inspections", "Structural Remediation", "SIRS Support", "Concrete Restoration"]}
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
              <span className="text-brand-gold font-semibold">Serving Clearwater, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              SB4-D Compliance for Clearwater Condominiums
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Clearwater's barrier island condominiums face the most urgent SB4-D compliance timeline in the Tampa Bay region. Buildings on Clearwater Beach, Sand Key, and Island Estates sit within the 25-year coastal inspection zone, and many constructed during the 1970s and 1980s tourism boom are already past due. Florida Construction Specialists provides the structural remediation expertise these buildings need to meet milestone inspection requirements and address the accelerated deterioration driven by constant Gulf salt spray.
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
              Beach Condo Concentration Creates Citywide SB4-D Urgency
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Clearwater contains one of the densest concentrations of waterfront condominium buildings in Florida. The barrier island stretching from Clearwater Beach through Sand Key and Island Estates hosts dozens of mid-rise and high-rise condominium towers, the majority built during the tourism development boom of the 1970s and 1980s. These buildings are now 40 to 55 years old, well past the 25-year milestone inspection threshold established by Senate Bill 4-D for coastal structures. Since virtually the entire City of Clearwater falls within three miles of the coastline, the accelerated 25-year deadline applies across the municipality, not just to barrier island buildings. With over four decades of experience in Florida construction, Florida Construction Specialists understands the urgency facing Clearwater's condominium associations.
              </p>
              <p className="mb-6">
                The consequences of Clearwater's coastal proximity extend beyond regulatory timelines. Gulf salt spray creates an aggressive corrosion environment that attacks reinforced concrete structures continuously. Chloride ions from salt air penetrate concrete surfaces, reach the embedded reinforcing steel, and initiate a corrosion process that generates expansive rust. This rust cracks the surrounding concrete from the inside out, producing the spalling, delamination, and exposed rebar visible on many aging Clearwater Beach condominiums. Buildings with direct Gulf frontage on Clearwater Beach experience the most severe exposure, while Sand Key and Island Estates properties face bidirectional salt attack from both the Gulf and the Intracoastal Waterway.
              </p>
              <p className="mb-6">
                Tourism-focused properties face a dual compliance pressure that mainland condominiums do not. Many Clearwater Beach units operate as short-term vacation rentals generating significant revenue for their owners. Remediation construction directly impacts this revenue stream through noise, scaffolding, restricted amenity access, and visual disruption. Association boards must balance SB4-D compliance urgency against the economic reality that their owners depend on seasonal rental income. This tension makes scheduling, phasing, and communication especially critical for Clearwater Beach remediation projects.
              </p>
              <p>
                Memorial Causeway, the primary access route connecting mainland Clearwater to Clearwater Beach, creates logistical constraints for construction projects. Equipment and material deliveries must cross this bridge, subject to weight restrictions and traffic congestion, particularly during tourist season. Staging areas on the barrier island are limited by dense development and narrow rights-of-way along Gulf Boulevard and Mandalay Avenue. These access constraints require advance logistics planning that goes beyond what mainland construction projects demand.
              </p>
            </div>

            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections for Condominium and Cooperative Buildings"
              description="Requires structural inspections of condominium buildings 3 stories or higher. Clearwater's barrier island condos on Sand Key, Island Estates, and Clearwater Beach fall within the 3-mile coastal zone, triggering the accelerated 25-year inspection timeline. Most 1970s-1980s beach condos are already past due."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/southwinds-condo-rear/southwinds-condo-rear-display.webp"
        alt="Clearwater Beach condominium requiring SB4-D milestone inspection and structural remediation"
        title="Clearwater's SB4-D Compliance Challenge"
        subtitle="Barrier island buildings face the most aggressive structural deterioration and the tightest compliance timelines"
        overlayOpacity={0.55}
      />

      {/* Clearwater Building Department */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Clearwater Building Department and Permitting
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-6">
                SB4-D compliance in Clearwater involves coordination with local building authorities for milestone inspection filings and remediation permits. The jurisdictional authority depends on the building's location within the city.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-l-4 border-brand-green shadow-sm">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">City of Clearwater Planning & Development</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Primary jurisdiction for buildings within Clearwater city limits, including Clearwater Beach, Sand Key, and Island Estates condominiums.
                </p>
                <a
                  href="https://www.clearwater-fl.com/gov/depts/pwa/ds/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green hover:underline text-sm font-medium"
                >
                  Visit Development Services &rarr;
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-brand-green shadow-sm">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">Pinellas County Building Services</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Jurisdiction for condominium buildings in unincorporated Pinellas County areas adjacent to Clearwater.
                </p>
                <a
                  href="https://www.pinellascounty.org/build/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green hover:underline text-sm font-medium"
                >
                  Visit Pinellas County Building &rarr;
                </a>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Remediation projects that alter structural elements, modify building envelopes, or affect fire-rated assemblies require engineering documentation and plan review through the applicable building department. Beach-area projects may also require temporary construction permits for scaffolding, staging areas, and material delivery zones on public rights-of-way. We manage the full permitting process for SB4-D remediation projects in Clearwater.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clearwater's Unique Compliance Challenges */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Clearwater's Unique SB4-D Compliance Challenges
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Barrier island geography, tourism economics, and aggressive salt exposure create compliance complexities specific to Clearwater.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Accelerated Salt Corrosion",
                description: "Direct Gulf exposure means Clearwater Beach condominiums experience chloride penetration rates far exceeding inland structures. Salt spray from wave action and wind-driven moisture continuously deposits corrosive chloride ions on concrete surfaces, accelerating reinforcement corrosion and structural deterioration years ahead of inland buildings."
              },
              {
                icon: Clock,
                title: "Past-Due Inspection Timelines",
                description: "Many Clearwater Beach condominiums built during the 1970s and 1980s tourism boom are 40 to 55 years old, well past the 25-year milestone inspection threshold. These buildings face immediate compliance deadlines and are more likely to require Phase 2 inspections due to decades of unaddressed salt-driven deterioration."
              },
              {
                icon: Building2,
                title: "Seasonal Occupancy Complications",
                description: "Clearwater's tourism-heavy condominium market means many unit owners are not present year-round. Seasonal occupancy patterns complicate board decision-making for special assessments, limit communication with owners, and create pressure to schedule major remediation work during lower-occupancy summer months."
              },
              {
                icon: HardHat,
                title: "Barrier Island Access Constraints",
                description: "Memorial Causeway and Sand Key Bridge are the primary access routes to Clearwater's barrier islands. Weight restrictions, traffic congestion, and limited staging areas on the densely developed islands require advance logistics planning for equipment delivery, material staging, and crew access throughout remediation projects."
              },
              {
                icon: Briefcase,
                title: "Tourism Revenue Impact",
                description: "Condominium units used as vacation rentals generate significant income for owners. Remediation construction affects rental desirability through noise, scaffolding, restricted pool and beach access, and visual disruption. Boards must navigate owner resistance to assessments and construction timing that impacts rental revenue."
              },
              {
                icon: Shield,
                title: "Balcony and Walkway Deterioration",
                description: "Exterior balconies and walkways on Clearwater Beach condominiums receive the most direct salt exposure and show deterioration earliest. Post-tension cable corrosion in parking structures, waterproofing failure on elevated pool decks, and concrete delamination on Gulf-facing elevations are the most common findings during milestone inspections."
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
              Common Structural Issues in Clearwater Condominiums
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Milestone inspections on Clearwater's coastal condominiums consistently reveal patterns of structural deterioration driven by the barrier island's extreme salt exposure environment.
              </p>
              <p className="mb-6">
                <strong>Accelerated concrete spalling from Gulf salt corrosion</strong> is the most prevalent finding. Clearwater Beach buildings with direct Gulf frontage experience chloride penetration at rates that can reach the reinforcing steel within 10 to 15 years, compared to 25 to 30 years for inland structures. Once corrosion initiates, the expansive rust cracks and displaces concrete cover, creating visible spalling on columns, beams, balcony soffits, and exterior walls. Buildings on Sand Key and Island Estates face similar exposure from both Gulf and Intracoastal sides.
              </p>
              <p className="mb-6">
                <strong>Balcony and exterior walkway deterioration</strong> represents the most safety-critical finding in many Clearwater milestone inspections. These horizontal elements collect water and salt deposits while being fully exposed to the elements. Waterproofing membrane failure allows moisture to penetrate the concrete slab, corrode embedded reinforcement, and compromise the structural connection between the balcony and the building frame. The Surfside collapse brought national attention to exactly this type of deterioration in coastal condominium buildings.
              </p>
              <p className="mb-6">
                <strong>Post-tension cable corrosion in parking structures</strong> is a growing concern in Clearwater condominiums built with post-tensioned concrete during the 1970s and 1980s. Early post-tension systems used grouted tendons with less effective corrosion protection than modern systems. Salt-laden moisture penetrating through concrete cracks and failed expansion joints reaches these tendons, initiating corrosion that can lead to sudden tendon failure if not identified and addressed.
              </p>
              <p>
                <strong>Waterproofing failure on elevated pool decks</strong> is common in Clearwater beach condominiums where the pool deck is located above occupied space or parking. These traffic-bearing membranes have a limited service life and fail from UV exposure, chemical exposure from pool water, thermal cycling, and foot traffic wear. Failed pool deck waterproofing allows water infiltration into the structural slab below, accelerating corrosion in an area that may be difficult to inspect without removing the pool deck surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FCS in Clearwater */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Florida Construction Specialists in Clearwater
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Florida Construction Specialists brings direct experience with barrier island construction logistics to every Clearwater SB4-D compliance project. We understand the access constraints of Memorial Causeway, the staging limitations on Gulf Boulevard, and the scheduling sensitivities of tourism-dependent associations. Our team plans every project around these realities before the first delivery truck crosses the causeway.
              </p>
              <p className="mb-6">
                We maintain direct working relationships with licensed structural engineers experienced in coastal condominium assessment. This coordination is essential for SB4-D compliance: the engineer conducts the milestone inspection and identifies structural deficiencies, and our team develops and executes the remediation plan that addresses those findings. This seamless handoff between inspection and remediation means associations are not left searching for a qualified contractor after receiving their engineering report.
              </p>
              <p>
                Our work in Clearwater extends beyond SB4-D compliance into comprehensive condominium remediation. We provide the same structural restoration expertise for associations pursuing proactive maintenance, insurance claim-related repairs, and building envelope improvements. For associations already familiar with our SB4-D compliance work, we also serve Clearwater through our <Link href="/condo-remediation-clearwater/" className="text-brand-green hover:underline font-medium">condo remediation services</Link>, <Link href="/balcony-reconstruction-clearwater/" className="text-brand-green hover:underline font-medium">balcony reconstruction</Link>, and <Link href="/exterior-waterproofing-clearwater/" className="text-brand-green hover:underline font-medium">exterior waterproofing</Link> capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Clearwater SB4-D Compliance FAQ"
        description="Common questions about SB4-D compliance, milestone inspections, and structural remediation for Clearwater condominiums."
      />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Clearwater Condo Boards: Address Your SB4-D Deadline
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Most Clearwater Beach condominiums are already past their 25-year milestone inspection deadline. Contact Florida Construction Specialists to discuss your building's compliance timeline, inspection coordination, and remediation planning.
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
    </>
  );
}
