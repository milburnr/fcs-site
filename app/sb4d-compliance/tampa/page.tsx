import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Shield, Award, AlertTriangle, Building2, FileCheck, Search, Wrench, ClipboardCheck, Clock, Scale } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";
import { AuthorByline } from "@/components/AuthorByline";
import { BackToHub } from "@/components/BackToHub";
import { CodeReference } from "@/components/CodeReference";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://floridaconstructionspecialists.com/sb4d-compliance/tampa/" },
  title: "SB4-D Compliance Tampa | Condo Milestone Inspection",
  description: "SB4-D compliance services for Tampa condominiums. Milestone inspection coordination structural remediation and condo repair along Bayshore Boulevard.",
  openGraph: {
    title: "SB4-D Compliance Tampa | Condo Milestone Inspection",
    description: "SB4-D compliance services for Tampa condominiums. Milestone inspection coordination structural remediation and condo repair along Bayshore Boulevard.",
    url: "https://floridaconstructionspecialists.com/sb4d-compliance/tampa/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Which Tampa neighborhoods have the most condominiums affected by SB 4-D?",
    answer: "The Bayshore Boulevard corridor contains some of Tampa's oldest and tallest condominium towers, many with certificates of occupancy from the late 1970s through early 1990s. Harbour Island's condo community, built largely in the 1980s on a man-made island in Hillsborough Bay, faces aggressive salt exposure from surrounding water on all sides. Davis Islands condominiums, the Channelside district towers, and scattered condo complexes throughout South Tampa neighborhoods like Beach Park and Palma Ceia all have buildings subject to SB 4-D milestone inspection requirements. Downtown Tampa's high-rise condo towers built during the mid-2000s development boom are approaching the 25-year coastal milestone threshold."
  },
  {
    question: "How does Tampa City Code 5-110.9 relate to the state SB 4-D requirements?",
    answer: "Tampa City Code Section 5-110.9 is the local codification of Florida's statewide SB 4-D milestone inspection mandate. The city adopted this ordinance to establish local administration and enforcement of the inspection requirements. Under the local code, condominium associations submit inspection reports through Tampa's Accela permitting system using the RCT (Recertification) record type. The Tampa Construction Services Department oversees compliance and can be contacted at CSDLSP@tampagov.net or (813) 274-3100 for questions about filing requirements and deadlines."
  },
  {
    question: "What is the deadline timeline for Tampa condo milestone inspections?",
    answer: "Tampa condominiums with certificates of occupancy issued before December 31, 1992 were required to complete their initial milestone inspection by December 31, 2024. Buildings with COs from 1993 through 1999 face a December 31, 2025 deadline. Beginning December 31, 2026, the coordinated rolling deadline takes effect, meaning all buildings reaching 25 years of age (for coastal buildings within 3 miles of the shoreline) must complete inspections. Given Tampa's proximity to Tampa Bay, the vast majority of Tampa condos fall under the 25-year coastal timeline rather than the 30-year inland timeline."
  },
  {
    question: "What structural issues does FCS most commonly find in Tampa condo buildings?",
    answer: "Salt air from Tampa Bay creates particularly aggressive corrosion conditions for reinforced concrete structures. The most common findings in Tampa condo inspections include spalling concrete on balconies and exterior walkways where chloride-laden moisture has reached the reinforcing steel, corroded post-tension cables in parking structures and elevated slabs, deteriorated expansion joints allowing water intrusion into structural elements, and compromised waterproofing membranes on flat roofs and elevated pool decks. Tampa's annual rainfall exceeding 50 inches accelerates these deterioration patterns. Buildings along the Bayshore corridor and on Harbour Island tend to show the most severe salt-related corrosion."
  },
  {
    question: "Can Tampa condo residents stay in the building during remediation work?",
    answer: "In most cases, yes. We develop phased construction plans that allow continued building occupancy, which is essential for Tampa condo associations whose residents live in the building year-round. Work is sequenced by building elevation, floor level, or structural system to maintain safe access and livability. The exceptions are rare situations where the structural engineer identifies immediate life-safety concerns requiring temporary evacuation of specific units. We communicate construction schedules, noise expectations, and access modifications to all residents through the association's management."
  },
  {
    question: "How does FCS coordinate with Tampa's building department on SB 4-D remediation?",
    answer: "We maintain working relationships with the Tampa Construction Services Department and are familiar with the city's specific permitting requirements for structural remediation. Remediation projects that involve structural repairs to load-bearing elements require engineering-stamped plans and city permits. We prepare permit applications, coordinate with the structural engineer on repair specifications, and manage the plan review process. Tampa uses the Accela system for permit tracking, and we ensure all required documentation is submitted through the correct RCT record type for condo recertification compliance."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "SB4-D Compliance", href: "/sb4d-compliance/" },
  { name: "Tampa", href: "/sb4d-compliance/tampa/" },
];

const internalLinks = [
  { href: "/sb4d-compliance/", label: "SB4-D Compliance Hub" },
  { href: "/condo-remediation-tampa/", label: "Condo Remediation in Tampa" },
  { href: "/balcony-reconstruction-tampa/", label: "Balcony Reconstruction in Tampa" },
  { href: "/exterior-waterproofing-tampa/", label: "Exterior Waterproofing in Tampa" },
  { href: "/sb4d-compliance/deadlines/", label: "SB4-D Compliance Deadlines" },
  { href: "/sb4d-compliance/inspection-process/", label: "Milestone Inspection Process" },
  { href: "/sb4d-compliance/checklist/", label: "SB4-D Compliance Checklist" },
  { href: "/sb4d-compliance/st-petersburg/", label: "SB4-D Compliance in St. Petersburg" },
];

export default function SB4DComplianceTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="SB4-D Compliance" />
      <ServiceSchema
        serviceName="SB4-D Compliance & Milestone Inspection Remediation"
        serviceDescription="SB4-D compliance services for Tampa condominiums. Milestone inspection coordination, structural remediation, concrete repair, and building recertification. Licensed CBC1262722."
        city="Tampa"
        serviceCategories={["Milestone Inspection Coordination", "Structural Remediation", "Concrete Restoration", "Post-Tension Repair", "Building Recertification"]}
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
              SB4-D Compliance for Tampa Condominiums
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Tampa's condominium towers along Bayshore Boulevard, Harbour Island, and Davis Islands face urgent SB 4-D milestone inspection and remediation deadlines. Florida Construction Specialists coordinates the path from inspection findings to completed structural repairs for associations throughout Tampa and Hillsborough County.
            </p>
            <AuthorByline variant="light" publishDate="2026-02-18" />

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
                <span className="text-white text-sm font-medium">SB 4-D Compliance Specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-cta flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact/" className="btn-secondary text-center">
                Request a Compliance Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BackToHub */}
      <section className="section bg-white">
        <div className="container-custom">
          <BackToHub silo="commercial" customHubTitle="SB4-D Compliance" customHubHref="/sb4d-compliance/" />

          <div className="max-w-4xl mx-auto mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa's Aging Condo Towers Face an SB 4-D Reckoning
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Florida Construction Specialists has provided structural construction services across Tampa Bay since 1982, and we bring that depth of experience to the SB 4-D compliance challenge now confronting Tampa's condominium associations. The scale of the problem in Tampa is substantial. The Bayshore Boulevard corridor -- one of the longest continuous waterfront sidewalks in the world -- is lined with condominium towers built primarily in the 1970s, 1980s, and 1990s. Many of these buildings are now 30 to 50 years old and are confronting their first comprehensive structural assessments under the milestone inspection mandate.
              </p>
              <p className="mb-6">
                Harbour Island's condominium community, constructed largely in the 1980s on a man-made island surrounded by Hillsborough Bay, faces some of the most aggressive salt exposure conditions in the Tampa market. Davis Islands condominiums, the high-rise towers in the Channelside district, and the scattered condo complexes throughout South Tampa neighborhoods like Beach Park, Palma Ceia, and Gandy all fall within the SB 4-D inspection window. These buildings share a common challenge: decades of salt air exposure from Tampa Bay, annual rainfall exceeding 50 inches, intense UV degradation, and periodic hurricane-force wind events have accelerated concrete deterioration and steel corrosion well beyond what original construction anticipated.
              </p>
              <p className="mb-6">
                The passage of SB 4-D following the Champlain Towers collapse in Surfside created a structural inspection mandate that affects hundreds of buildings across Tampa. Buildings three stories and above must undergo milestone inspections at 30 years of age, or at 25 years if located within three miles of the coastline. Given Tampa's geography -- with Tampa Bay wrapping around the city's western and southern edges -- the vast majority of Tampa's condominium stock falls under the more aggressive 25-year coastal timeline. Associations that have deferred maintenance for decades are now confronting the condition of their buildings under regulatory and insurance pressure that did not previously exist.
              </p>
              <p>
                Florida Construction Specialists works alongside the licensed structural engineers conducting milestone inspections, providing construction expertise during the assessment phase and beginning remediation planning before the final report is issued. Our direct access to licensed structural engineers allows us to translate inspection findings into actionable construction scopes efficiently, helping Tampa associations move from findings to completed repairs without the communication gaps that occur when contractors lack technical engineering understanding.
              </p>
            </div>

            <CodeReference
              code="Tampa City Code Section 5-110.9"
              section="Condominium Recertification -- Local SB 4-D Implementation"
              description="Tampa codified the statewide SB 4-D milestone inspection requirements through City Code 5-110.9. Reports are submitted via the Accela permitting system using the RCT (Recertification) record type. The Tampa Construction Services Department administers compliance."
              link="https://www.tampa.gov/construction-services/condo-recert"
              linkText="Tampa Condo Recertification Page"
            />
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/tampa-condo-balcony-restoration/tampa-condo-balcony-restoration-display.webp"
        alt="Tampa condominium balcony requiring structural assessment under SB 4-D"
        title="SB 4-D Compliance for Tampa's Condo Towers"
        subtitle="Milestone inspections, structural remediation, and building recertification"
        overlayOpacity={0.55}
      />

      {/* Tampa Compliance Timeline */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa SB 4-D Compliance Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Understanding which Tampa buildings face which deadlines is the first step toward compliance.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                icon: AlertTriangle,
                deadline: "December 31, 2024 -- PAST DUE",
                title: "Buildings with CO Before 1992",
                description: "Tampa condominiums that received their certificate of occupancy before December 31, 1992 were required to have completed their initial milestone inspection by this date. This captures many Bayshore Boulevard towers from the 1970s and 1980s building boom, older Harbour Island condominiums, and mid-rise complexes in South Tampa neighborhoods. Associations that missed this deadline face escalating insurance, financing, and code enforcement consequences.",
                urgent: true,
              },
              {
                icon: Clock,
                deadline: "December 31, 2025",
                title: "Buildings with CO from 1993-1999",
                description: "Condominiums with certificates of occupancy from 1993 through 1999 must complete initial milestone inspections by the end of 2025. This group includes later-phase Harbour Island buildings, Davis Islands condominiums from the 1990s, and many mid-rise complexes across South Tampa and the Westshore district. Associations in this window have limited time to engage a qualified structural engineer and begin the inspection process.",
                urgent: false,
              },
              {
                icon: FileCheck,
                deadline: "December 31, 2026 and Rolling",
                title: "Coordinated Rolling Deadline",
                description: "Beginning December 31, 2026, all Tampa condominiums three stories or higher must complete their initial milestone inspection upon reaching 25 years of age (for buildings within 3 miles of the coastline) or 30 years of age (for inland buildings). This coordinated deadline captures Channelside-era towers and other buildings constructed during Tampa's early-2000s development period. Given that virtually all of Tampa's condo stock is within the 3-mile coastal zone, the 25-year threshold applies to most buildings.",
                urgent: false,
              },
            ].map((item) => (
              <div key={item.deadline} className={`flex gap-6 rounded-xl p-6 shadow-sm ${item.urgent ? "bg-red-50 border border-red-200" : "bg-white"}`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${item.urgent ? "bg-red-600" : "bg-brand-green"}`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className={`text-sm font-bold mb-1 ${item.urgent ? "text-red-700" : "text-brand-green"}`}>{item.deadline}</p>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Findings in Tampa Condo Inspections */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Findings in Tampa Condo Milestone Inspections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Tampa's proximity to Tampa Bay creates environmental conditions that produce characteristic deterioration patterns in aging condominium structures.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Concrete Spalling on Balconies and Walkways",
                description: "Salt air from Tampa Bay penetrates concrete over decades, reaching the reinforcing steel and triggering corrosion that causes the concrete cover to crack and delaminate. Bayshore Boulevard towers and Harbour Island buildings show the most advanced spalling damage due to direct bay exposure. By the time spalling is visible on the surface, the rebar underneath has typically lost significant cross-section."
              },
              {
                icon: Scale,
                title: "Post-Tension Cable Corrosion",
                description: "Post-tensioned concrete structures, common in Tampa condo parking garages and elevated slabs built in the 1980s and 1990s, develop cable corrosion when moisture breaches the protective grout or sheathing. Cable testing during milestone inspections frequently reveals individual tendon failures that require specialized repair techniques and careful structural monitoring."
              },
              {
                icon: Wrench,
                title: "Waterproofing Membrane Deterioration",
                description: "Tampa's annual rainfall exceeding 50 inches, combined with intense UV exposure and thermal cycling, degrades waterproofing membranes on flat roofs, elevated pool decks, and parking structure traffic surfaces. Failed membranes allow moisture into the structural concrete below, accelerating the corrosion cycle that produces spalling and delamination."
              },
              {
                icon: Search,
                title: "Expansion Joint and Sealant Failures",
                description: "Expansion joints in Tampa condo buildings endure significant thermal movement from Florida's heat cycles along with exposure to wind-driven rain during summer thunderstorms and hurricane events. Joint sealant that has hardened, cracked, or debonded allows water intrusion into the building structure at precisely the locations where structural movement creates the greatest vulnerability."
              },
            ].map((finding) => (
              <div key={finding.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <finding.icon className="w-6 h-6 text-brand-green-dark" />
                </div>
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">{finding.title}</h3>
                <p className="text-gray-600">{finding.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FCS in Tampa */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              FCS: Tampa's SB 4-D Compliance Partner
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Florida Construction Specialists approaches SB 4-D compliance in Tampa with the structural construction expertise that only comes from decades of work in the Tampa Bay market. We coordinate directly with licensed structural engineers familiar with Tampa's building stock, ensuring that our construction approach addresses the specific deficiencies identified in each milestone inspection report. Our team understands the difference between a Bayshore Boulevard high-rise built on deep foundations in bay-adjacent fill and a South Tampa garden-style condo built on slab-on-grade -- and those differences affect how remediation is scoped, sequenced, and executed.
              </p>
              <p className="mb-6">
                We maintain working relationships with the <a href="https://www.tampa.gov/construction-services" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Tampa Construction Services Department</a> and are familiar with the city's Accela-based permitting system and RCT record type requirements for condo recertification. This matters because permitting delays can push remediation timelines past compliance deadlines. We prepare permit applications that align with Tampa's plan review expectations, reducing revision cycles and keeping projects on schedule.
              </p>
              <p className="mb-6">
                Tampa condo associations also face the practical challenge of performing major structural work while hundreds of residents continue to live in the building. We develop phased construction sequences that maintain building access, limit noise and dust impacts, and preserve parking availability even when parking structures themselves are under repair. For Bayshore high-rises, this often means working one building elevation at a time with swing staging. For Harbour Island and Davis Islands condos, it means coordinating construction access through narrow island roadways shared with residents and visitors.
              </p>
              <p>
                For detailed information about our condo remediation capabilities in Tampa, including our structural repair, balcony restoration, and waterproofing services, visit our <Link href="/condo-remediation-tampa/" className="text-brand-green hover:underline">Tampa Condo Remediation</Link> page.
              </p>
            </div>

            {/* Building Department Contact Card */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg">
              <p className="font-bold text-blue-900 text-sm mb-1">Tampa Construction Services Department</p>
              <p className="text-blue-800 text-sm mb-1">Condo Recertification Administration</p>
              <p className="text-blue-800 text-sm mb-1">Email: CSDLSP@tampagov.net | Phone: (813) 274-3100</p>
              <a
                href="https://www.tampa.gov/construction-services/condo-recert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm mt-2 inline-block"
              >
                Tampa Condo Recertification Page &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Tampa SB 4-D Compliance FAQ"
        description="Frequently asked questions about SB 4-D milestone inspections and compliance for Tampa condominiums."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks title="Related SB4-D & Condo Services" links={internalLinks} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Your Tampa Condo Association Needs an SB 4-D Plan
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            SB 4-D deadlines are not flexible. Contact Florida Construction Specialists to discuss your milestone inspection findings and develop a remediation plan that protects your building, your residents, and your association's compliance standing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-cta flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              Request a Compliance Consultation
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Engineering Coordination</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>SB 4-D Compliance Specialists</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="sb4d-compliance-tampa" />
    </>
  );
}
