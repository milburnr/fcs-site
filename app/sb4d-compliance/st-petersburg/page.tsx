import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Shield, Award, AlertTriangle, Building2, FileCheck, Waves, Wrench, ClipboardCheck, Clock, Scale } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";
import { AuthorByline } from "@/components/AuthorByline";
import { BackToHub } from "@/components/BackToHub";
import { CodeReference } from "@/components/CodeReference";

export const metadata: Metadata = {
  alternates: { canonical: "https://floridaconstructionspecialists.com/sb4d-compliance/st-petersburg/" },
  title: "SB4-D Compliance St. Pete | Condo Milestone Inspection",
  description: "SB4-D compliance for St. Petersburg condominiums. Peninsula-wide milestone inspection coverage structural remediation for waterfront towers.",
  openGraph: {
    title: "SB4-D Compliance St. Pete | Condo Milestone Inspection",
    description: "SB4-D compliance for St. Petersburg condominiums. Peninsula-wide milestone inspection coverage structural remediation for waterfront towers.",
    url: "https://floridaconstructionspecialists.com/sb4d-compliance/st-petersburg/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Why does SB 4-D affect every condominium building in St. Petersburg?",
    answer: "St. Petersburg's peninsula geography is the key factor. The city sits between Tampa Bay on the east and the Gulf of Mexico on the west, with no point in the city more than a few miles from the coastline. SB 4-D establishes a 25-year milestone inspection timeline for buildings within three miles of the coast, compared to 30 years for inland buildings. Because the entire city of St. Petersburg falls within this three-mile coastal zone, every condominium building three stories or taller in the city triggers the more aggressive 25-year inspection threshold. No building in St. Petersburg is inland enough to qualify for the longer timeline."
  },
  {
    question: "What is unique about structural deterioration in St. Petersburg condos?",
    answer: "St. Petersburg's peninsula location creates bidirectional salt exposure that is distinctly different from other coastal Florida markets. Buildings receive salt-laden moisture from Tampa Bay when east winds blow and from the Gulf of Mexico when west winds blow. This means all four elevations of a building experience corrosive conditions over time, not just the side facing the nearest body of water. The result is more uniform and often more advanced concrete deterioration across the entire structure. Buildings on Isla del Sol, Tierra Verde, and the barrier island communities of Treasure Island and St. Pete Beach face the most extreme exposure, but even buildings in inland neighborhoods like Shore Acres and Coquina Key are affected by the peninsula's pervasive salt air."
  },
  {
    question: "Which Pinellas County building authority handles SB 4-D compliance in St. Petersburg?",
    answer: "Jurisdiction depends on whether the condominium is located within St. Petersburg city limits or in unincorporated Pinellas County. Properties within the city fall under the City of St. Petersburg Development Services Department, which handles building permits and code enforcement. Properties in unincorporated areas or in the barrier island communities that are separate municipalities fall under Pinellas County Building Services, reachable at (727) 464-3888. Some associations are unsure of their jurisdictional status, particularly in areas near municipal boundaries. We help associations identify the correct authority and navigate the specific filing requirements for their jurisdiction."
  },
  {
    question: "How does the density of St. Petersburg's condo stock affect remediation timelines?",
    answer: "The sheer number of condominiums requiring simultaneous compliance creates a supply-and-demand challenge for qualified structural engineers and remediation contractors in the St. Petersburg market. Many buildings were constructed during the same 1970s through 1990s development booms, meaning hundreds of buildings are reaching their inspection and remediation deadlines in overlapping timeframes. Property management companies that oversee multiple buildings face portfolio-wide compliance burdens. Associations that delay engaging qualified contractors risk longer wait times as demand for remediation services intensifies. Early engagement allows better scheduling, more competitive pricing, and the ability to sequence remediation in phases that align with association funding."
  },
  {
    question: "Can FCS handle SB 4-D remediation for barrier island communities in St. Petersburg?",
    answer: "Yes. We have experience working in the barrier island communities of Treasure Island, St. Pete Beach, Madeira Beach, and the connected island communities accessible from St. Petersburg. These locations face the most extreme salt exposure in the Tampa Bay market, with Gulf-front buildings receiving direct salt spray during onshore winds. Construction logistics on barrier islands are more constrained than mainland projects due to limited road access, bridge weight restrictions for heavy equipment, and tight staging areas. We plan project logistics around these island-specific constraints, including scheduling material deliveries and equipment mobilization to minimize bridge traffic impacts."
  },
  {
    question: "What happens if a St. Petersburg condo association does not comply with SB 4-D?",
    answer: "The consequences are escalating. Property insurance carriers are increasingly requiring proof of milestone inspection compliance and may decline to renew coverage for non-compliant buildings. Without adequate insurance, mortgage lenders will not finance unit purchases, effectively freezing resale activity and depressing property values. The City of St. Petersburg or Pinellas County can issue code violations and pursue unsafe building proceedings. Individual board members may face personal liability for failing to meet their fiduciary duty. In the St. Petersburg market specifically, where condo property values are closely tied to insurance availability and lender confidence, non-compliance creates a cascading financial risk for unit owners."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "SB4-D Compliance", href: "/sb4d-compliance/" },
  { name: "St. Petersburg", href: "/sb4d-compliance/st-petersburg/" },
];

const internalLinks = [
  { href: "/sb4d-compliance/", label: "SB4-D Compliance Hub" },
  { href: "/condo-remediation-st-petersburg/", label: "Condo Remediation in St. Petersburg" },
  { href: "/balcony-reconstruction-st-petersburg/", label: "Balcony Reconstruction in St. Petersburg" },
  { href: "/exterior-waterproofing-st-petersburg/", label: "Exterior Waterproofing in St. Petersburg" },
  { href: "/sb4d-compliance/deadlines/", label: "SB4-D Compliance Deadlines" },
  { href: "/sb4d-compliance/inspection-process/", label: "Milestone Inspection Process" },
  { href: "/sb4d-compliance/checklist/", label: "SB4-D Compliance Checklist" },
  { href: "/sb4d-compliance/tampa/", label: "SB4-D Compliance in Tampa" },
];

export default function SB4DComplianceStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="SB4-D Compliance" />
      <ServiceSchema
        serviceName="SB4-D Compliance & Milestone Inspection Remediation"
        serviceDescription="SB4-D compliance services for St. Petersburg condominiums. Peninsula-wide milestone inspection support, structural remediation, concrete repair, and building recertification across Pinellas County. Licensed CBC1262722."
        city="St. Petersburg"
        serviceCategories={["Milestone Inspection Support", "Structural Remediation", "Waterfront Condo Restoration", "Post-Tension Repair", "Building Recertification"]}
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
              SB4-D Compliance for St. Petersburg Condominiums
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Every condominium building in St. Petersburg falls under SB 4-D's accelerated 25-year coastal inspection timeline. The peninsula's bidirectional salt exposure from Tampa Bay and the Gulf of Mexico makes structural compliance here uniquely urgent. Florida Construction Specialists provides milestone inspection coordination and structural remediation across Pinellas County.
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
                <Waves className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Peninsula Condo Specialists</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-cta flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact/" className="btn-secondary text-center">
                Request a Compliance Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BackToHub + Opening */}
      <section className="section bg-white">
        <div className="container-custom">
          <BackToHub silo="commercial" customHubTitle="SB4-D Compliance" customHubHref="/sb4d-compliance/" />

          <div className="max-w-4xl mx-auto mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Saltwater on Every Side: Why SB 4-D Hits St. Petersburg Harder Than Anywhere Else
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Florida Construction Specialists has been performing structural construction work in the Tampa Bay market since 1982. In that time, we have seen how St. Petersburg's unique peninsula geography creates deterioration patterns that differ fundamentally from other Florida coastal markets. The city sits between Tampa Bay to the east and the Gulf of Mexico to the west, with no point more than a few miles from salt water. This bidirectional exposure means that condo buildings in St. Petersburg absorb salt-laden moisture from shifting wind patterns -- Gulf air one day, bay air the next -- subjecting all four building elevations to corrosive conditions. There is no "protected side" of a St. Petersburg condo building.
              </p>
              <p className="mb-6">
                St. Petersburg has the highest condominium density in the Tampa Bay region. The city's waterfront towers, mid-rise complexes, and garden-style condo buildings were constructed in successive development booms from the 1970s through the 1990s. Buildings along the downtown bayfront, in Shore Acres, on Isla del Sol, at Coquina Key, and in Tierra Verde are now 30 to 50 years old -- squarely in the window where reinforcing steel corrosion, concrete spalling, and post-tension cable deterioration become serious structural concerns. The barrier island communities of Treasure Island, St. Pete Beach, and Madeira Beach face the most extreme salt exposure, with Gulf-front buildings receiving direct salt spray during onshore winds.
              </p>
              <p className="mb-6">
                SB 4-D's milestone inspection requirements hit St. Petersburg's condo market with particular force because of the peninsula's geography. The law requires structural inspections for buildings three stories or taller, with buildings within three miles of the coast facing a 25-year inspection threshold rather than 30 years. In St. Petersburg, there is no building far enough from the coastline to qualify for the longer 30-year timeline. The entire city falls within the three-mile coastal zone. This means every qualifying condominium in St. Petersburg is on the accelerated 25-year clock, and a large number of buildings are approaching or have already passed their inspection deadlines simultaneously.
              </p>
              <p>
                Property management companies managing multiple St. Petersburg buildings face a portfolio-wide compliance burden unlike any in the state. The dense concentration of aging condos on a relatively small peninsula, combined with the universal applicability of the 25-year coastal timeline, means that the supply of qualified structural engineers and remediation contractors is being stretched across hundreds of simultaneous projects. Associations that delay engaging contractors risk longer timelines and reduced scheduling flexibility.
              </p>
            </div>

            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections for Condominium and Cooperative Buildings"
              description="Requires structural inspections of condominium buildings 3 stories or higher at 30 years of age (25 years within 3 miles of the coast). St. Petersburg's entire peninsula falls within the 3-mile coastal zone, triggering the accelerated 25-year inspection timeline for every qualifying condo building in the city."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/southwinds-condo-rear/southwinds-condo-rear-display.webp"
        alt="St. Petersburg condominium building on the Pinellas County peninsula"
        title="Peninsula-Wide SB 4-D Compliance"
        subtitle="Every St. Petersburg condo building is on the accelerated 25-year coastal timeline"
        overlayOpacity={0.55}
      />

      {/* St. Pete's Unique Compliance Challenge */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg's Unique SB 4-D Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Geography, building density, and environmental exposure combine to make St. Petersburg's compliance situation unlike any other Florida market.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Waves,
                title: "Bidirectional Salt Exposure",
                description: "Unlike coastal cities with ocean exposure on one side, St. Petersburg's peninsula creates salt air infiltration from multiple directions. Tampa Bay to the east, the Gulf of Mexico to the west, and Boca Ciega Bay threading through the barrier islands ensure that no building orientation escapes corrosive conditions. All four elevations of every condo building experience salt-accelerated deterioration."
              },
              {
                icon: Building2,
                title: "Dense Simultaneous Compliance Demand",
                description: "St. Petersburg's 1970s-1990s condo construction booms produced a dense concentration of buildings that are now reaching their milestone inspection deadlines simultaneously. Hundreds of buildings need inspections and remediation within the same few-year window, creating competition for qualified structural engineers and experienced remediation contractors across Pinellas County."
              },
              {
                icon: AlertTriangle,
                title: "Barrier Island Vulnerability",
                description: "The barrier island communities accessible from St. Petersburg -- Treasure Island, St. Pete Beach, Madeira Beach -- face the most aggressive exposure in the Tampa Bay region. Storm surge risk during hurricanes, direct Gulf salt spray, and limited construction staging access create remediation challenges that require specialized logistics planning."
              },
              {
                icon: Scale,
                title: "Hurricane Stress on Aging Structures",
                description: "The 2004 and 2005 hurricane seasons subjected St. Petersburg's older condo buildings to stress that may have accelerated structural deterioration. Wind-driven rain penetrated building envelopes, depositing moisture in concrete that contributed to ongoing corrosion. Buildings that sustained storm damage and received inadequate repairs may show more advanced deterioration during milestone inspections."
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-green-dark" />
                </div>
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Structural Issues */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Structural Issues in St. Petersburg Peninsula Condos
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Milestone inspections in St. Petersburg consistently reveal deterioration patterns shaped by the peninsula's environmental conditions. Bidirectional salt exposure accelerates chloride-induced corrosion in reinforced concrete at rates that exceed typical single-coast models. The downtown bayfront towers, where salt spray from Tampa Bay is carried directly onto building facades, often show the most advanced spalling on their eastern elevations. But western elevations facing the Gulf develop similar damage from prevailing onshore winds, particularly during summer afternoon thunderstorms that drive salt-laden rain horizontally into building surfaces.
              </p>
              <p className="mb-6">
                Parking structure deterioration is a recurring finding in St. Petersburg condo inspections. Multi-level parking garages that were not originally designed with robust waterproofing systems suffer from a combination of vehicle-tracked chlorides, rainwater infiltration through cracked traffic surfaces, and atmospheric salt exposure on open-air levels. Post-tension cable corrosion in parking structures is particularly concerning because cable failures in stressed structural elements require immediate engineering assessment and may necessitate temporary load restrictions.
              </p>
              <p className="mb-6">
                Exterior corridors and walkways in older garden-style condominiums throughout St. Petersburg show characteristic spalling patterns where concrete cover over rebar is thinner than modern standards require. Many buildings constructed in the 1970s and early 1980s used concrete cover of less than one inch over reinforcing steel -- a depth that provides insufficient protection against chloride penetration in the peninsula's aggressive salt environment. By the time visible spalling appears, the rebar corrosion front has typically spread well beyond the visible damage area.
              </p>
              <p>
                Waterfront buildings on Isla del Sol and Tierra Verde face additional challenges from their low-lying elevations and direct water adjacency. Ground-level structural elements in these locations are subject to periodic saltwater contact during storm surge events and king tides, which deposits concentrated chlorides directly onto concrete surfaces. This accelerated exposure pattern is distinct from atmospheric salt exposure and requires different assessment and repair approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FCS in St. Petersburg */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              FCS: SB 4-D Compliance Across Pinellas County
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Florida Construction Specialists provides SB 4-D compliance services to condominium associations throughout St. Petersburg and the broader Pinellas County market. We coordinate directly with licensed structural engineers experienced with Pinellas County properties, translating their milestone inspection findings into detailed remediation scopes and phased construction plans. Our dedicated engineering partnerships bridge the technical gap between engineering reports and construction execution.
              </p>
              <p className="mb-6">
                Jurisdictional navigation is part of our service in the St. Petersburg market. The <a href="https://www.stpete.org/building_and_development_review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of St. Petersburg Development Services Department</a> handles permitting for properties within city limits, while <a href="https://www.pinellas.gov/department/building-and-development-review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Pinellas County Building Services</a> covers unincorporated areas and the separately incorporated barrier island municipalities. We know which authority has jurisdiction for each property and prepare permit applications that meet the specific requirements of the relevant department.
              </p>
              <p className="mb-6">
                Pinellas County is Florida's most densely populated county, which means condo remediation projects in St. Petersburg often contend with tight construction staging, adjacent building proximity, and limited street access for equipment and material delivery. Downtown tower projects may require city right-of-way permits for swing staging. Waterfront buildings have restricted landside access. Barrier island projects must account for bridge access limitations. We plan project logistics around these peninsula-specific constraints, including scheduling heavy equipment mobilization during off-peak hours to minimize traffic disruption.
              </p>
              <p>
                For detailed information about our condo remediation services in St. Petersburg, including structural concrete repair, waterfront tower restoration, and building envelope remediation, visit our <Link href="/condo-remediation-st-petersburg/" className="text-brand-green hover:underline">St. Petersburg Condo Remediation</Link> page.
              </p>
            </div>

            {/* Building Department Contact Cards */}
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                <p className="font-bold text-blue-900 text-sm mb-1">City of St. Petersburg</p>
                <p className="text-blue-800 text-sm mb-2">Development Services Department</p>
                <a
                  href="https://www.stpete.org/building_and_development_review/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm inline-block"
                >
                  St. Pete Development Services &rarr;
                </a>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                <p className="font-bold text-blue-900 text-sm mb-1">Pinellas County Building Services</p>
                <p className="text-blue-800 text-sm mb-2">Phone: (727) 464-3888</p>
                <a
                  href="https://www.pinellas.gov/department/building-and-development-review/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm inline-block"
                >
                  Pinellas County Building Services &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="St. Petersburg SB 4-D Compliance FAQ"
        description="Frequently asked questions about SB 4-D milestone inspections and compliance for St. Petersburg condominiums."
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
            Your St. Petersburg Condo Building Is on the 25-Year Clock
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every condominium in St. Petersburg falls under SB 4-D's accelerated coastal timeline. Contact Florida Construction Specialists to discuss your building's milestone inspection findings, compliance status, or remediation planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-cta flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              Schedule a Building Assessment
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>Engineering Coordination</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Peninsula Condo Specialists</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
