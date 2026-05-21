import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, Wrench, AlertTriangle, Layers, ClipboardCheck } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import { CodeReference } from "@/components/CodeReference";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/balcony-reconstruction-bradenton/' },
  title: "Balcony Reconstruction Bradenton | SB 4-D",
  description: "Balcony reconstruction in Bradenton by Florida Construction Specialists. SB 4-D milestone inspections Anna Maria Island condos riverfront balcony repair.",
  openGraph: {
    title: "Balcony Reconstruction Bradenton | SB 4-D",
    description: "Balcony reconstruction in Bradenton by Florida Construction Specialists. SB 4-D milestone inspections Anna Maria Island condos riverfront balcony repair.",
    url: "https://floridaconstructionspecialists.com/balcony-reconstruction-bradenton/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How do SB 4-D milestone inspection timelines differ across Bradenton's various communities?",
    answer: "SB 4-D timelines in Bradenton depend on a property's proximity to the coastline, which creates two distinct deadline categories across Manatee County. Anna Maria Island, Holmes Beach, Bradenton Beach, and mainland properties within three miles of the coast require their first milestone inspection at 25 years from the certificate of occupancy. Properties farther inland, including most of Lakewood Ranch and eastern Bradenton, follow the 30-year timeline. Buildings that had already reached their milestone age before the law took effect on July 1, 2022 were required to complete inspections by December 31, 2024. Many Anna Maria Island condos built during the tourism development boom of the 1980s and 1990s have passed or are approaching these deadlines, creating urgent demand for both inspections and the remediation work that follows when structural deficiencies are identified."
  },
  {
    question: "What specific environmental conditions make Bradenton condo balconies deteriorate differently than inland locations?",
    answer: "Bradenton sits at the confluence of the Manatee River, Tampa Bay, and the Gulf of Mexico, creating a multi-directional salt exposure environment that is more complex than a simple coastal location. Anna Maria Island balconies face direct Gulf weather from the west, while riverfront condos along the Manatee River experience salt air carried inland from Tampa Bay to the north. Even properties in downtown Bradenton that are not directly waterfront receive salt-laden moisture from multiple water bodies within a few miles. This multi-directional salt exposure, combined with over 50 inches of annual rainfall, year-round high humidity, and intense UV that degrades waterproofing membranes, means that balcony deterioration in Bradenton is driven by chloride-induced rebar corrosion from salt exposure, moisture infiltration through failed waterproofing, and thermal cycling that opens cracks and joints. The deterioration is typically more advanced on the side of the building facing the nearest water body."
  },
  {
    question: "What challenges does Anna Maria Island present for balcony reconstruction logistics?",
    answer: "Anna Maria Island creates logistical challenges that significantly affect balcony reconstruction project planning. The island is accessed primarily via the Manatee Avenue bridge from Bradenton or the Cortez Road bridge from the south. Both routes experience heavy traffic during tourist season from December through April, and the bridges themselves can be temporarily closed during severe weather events. Staging space on the island is extremely limited because condo sites typically have small footprints with minimal open area. Parking restrictions in Holmes Beach and Bradenton Beach further complicate material deliveries and crew access. Construction noise ordinances on the island restrict work hours. Our approach to island balcony projects includes off-island material staging with coordinated deliveries during off-peak hours, compact equipment selections that fit in constrained work areas, and scheduling that accounts for both bridge traffic patterns and seasonal occupancy."
  },
  {
    question: "How does FCS work with Bradenton condo HOA boards on balcony reconstruction special assessments?",
    answer: "Balcony reconstruction is one of the most significant capital expenditures a Bradenton condo association will face, and the special assessment process requires careful preparation. We support boards through the entire process, beginning with detailed condition assessments that provide the factual basis for the scope of work. We develop multiple scope and budget options so the board can present alternatives to the membership. Our project proposals include detailed breakdowns that show cost per unit, which is typically what drives unit owner discussion. We present directly to boards and membership meetings when requested, answering technical questions about the scope, timeline, and alternatives. For phasing, we can structure multi-year programs that spread assessments over time for associations where a single large assessment would be financially impractical. We also assist associations in evaluating financing options, including reserve funding, bank loans, and FHA reserve study coordination."
  },
  {
    question: "What waterproofing approach does FCS use for Bradenton balcony reconstruction?",
    answer: "Bradenton's Gulf Coast location demands waterproofing systems that perform under conditions more demanding than what manufacturer standard specifications assume. Our standard specification for Bradenton balcony waterproofing includes multi-layer systems starting with a penetrating concrete sealer to reduce chloride migration into the new concrete slab, followed by a traffic-rated reinforced waterproofing membrane applied to the prepared substrate. We detail critical transitions at wall-to-slab connections with reinforced flashing, install through-slab drains with secondary overflow provisions to handle the intensity of Gulf Coast thunderstorms, and specify compatible sealants at all joints and penetrations. For Anna Maria Island and Gulf-front properties, we upgrade to marine-grade membrane systems with enhanced UV resistance and salt spray performance. All waterproofing installations are flood-tested before finish materials are applied."
  },
  {
    question: "Can balcony reconstruction work on Bradenton condos be scheduled around snowbird and tourist seasons?",
    answer: "Seasonal scheduling is one of the most important planning considerations for Bradenton balcony reconstruction, especially for Anna Maria Island properties where seasonal occupancy swings are dramatic. Peak occupancy runs from December through April when snowbird residents and winter tourists fill the island and coastal condos. Many association boards prefer to schedule major exterior work during the May through November period when seasonal residents are away, occupancy is lower, and construction access is easier. However, this period coincides with hurricane season and the heaviest afternoon thunderstorm activity. We develop schedules that account for both seasonal occupancy patterns and weather constraints, typically performing the most weather-sensitive exterior work during the drier windows within the summer months. For associations that cannot avoid winter construction, we implement enhanced noise management, parking coordination, and resident communication protocols."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/commercial/" },
  { name: "Balcony Reconstruction", href: "/balcony-reconstruction/" },
  { name: "Bradenton", href: "/balcony-reconstruction-bradenton/" },
];

export default function BalconyReconstructionBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction"
        serviceDescription="Balcony reconstruction and SB 4-D compliance for Bradenton condominiums. Anna Maria Island, riverfront, and mainland condo balcony repair, concrete restoration, waterproofing. Licensed CBC1262722, 40+ years experience."
        city="Bradenton"
        minPrice="100000"
        serviceCategories={["Balcony Structural Repair", "SB 4-D Compliance", "Concrete Restoration", "Waterproofing Systems", "Railing Replacement"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/fcs-tiles-on-balcony/fcs-tiles-on-balcony-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Bradenton & Manatee County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Balcony Reconstruction in Bradenton, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Bradenton's condo balconies face a unique convergence of Gulf, bay, and river salt exposure that accelerates structural deterioration faster than typical coastal locations. From Anna Maria Island's Gulf-front towers to riverfront communities along the Manatee River, Florida Construction Specialists delivers SB 4-D compliant balcony reconstruction with the marine-grade systems and island logistics expertise that Bradenton's most demanding projects require.
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
                Request Balcony Assessment
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bradenton Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Three Exposure Zones Shape Bradenton's Balcony Reconstruction Needs
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Bradenton's geography creates three distinct exposure zones for condo balcony deterioration, each producing different patterns of structural damage and requiring different reconstruction approaches. Understanding which zone a building occupies determines everything from material specifications to the urgency of the reconstruction timeline under SB 4-D.
              </p>
              <p className="mb-6">
                Anna Maria Island represents the most aggressive exposure zone. Gulf-front condominiums from Anna Maria to Bradenton Beach receive direct salt spray, unobstructed wind loads, and the full force of Gulf weather events. These buildings experience the highest rates of chloride-induced rebar corrosion and waterproofing membrane degradation. Many were built during the island's condo development boom of the 1970s through 1990s and are now 30 to 50 years old, placing them squarely within SB 4-D milestone inspection requirements. The island's three municipalities, Anna Maria, Holmes Beach, and Bradenton Beach, each maintain their own building departments and height restrictions, adding regulatory complexity to reconstruction projects. Staging constraints, bridge access limitations, and seasonal occupancy patterns further distinguish island balcony work from mainland projects.
              </p>
              <p className="mb-6">
                The Manatee River corridor forms the second exposure zone. Condominiums along the river from downtown Bradenton through Palmetto face brackish water conditions where the freshwater river meets the saltwater bay. These buildings experience a unique form of exposure that combines tidal humidity fluctuations with salt air carried up the river from Tampa Bay. While less intense than direct Gulf exposure, the river corridor environment is more corrosive than typical inland locations. Mid-rise condominiums along Riverview Boulevard, near the Bradenton Riverwalk, and in the Palmetto waterfront area fall into this zone. Most of these buildings meet the three-mile coastal proximity threshold that triggers the shorter 25-year SB 4-D inspection timeline.
              </p>
              <p>
                Inland Bradenton, including areas like Lakewood Ranch, the SR-64 corridor, and eastern Manatee County, constitutes the third zone. While still subject to Florida's humidity and rainfall, these buildings experience significantly less salt exposure. The 30-year SB 4-D timeline applies to most properties in this zone. Balcony deterioration here tends to be driven more by waterproofing failure and moisture infiltration than by salt-induced corrosion, and the reconstruction approach can often use standard rather than marine-grade materials. However, newer condo and apartment developments in Lakewood Ranch's Town Center and mixed-use areas will eventually require the same SB 4-D attention that older coastal buildings face today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/fcs-tiles-on-balcony/fcs-tiles-on-balcony-display.webp"
        alt="Balcony reconstruction tile work on a Bradenton condominium"
        title="Restoring Bradenton's Condo Balconies"
        subtitle="SB 4-D compliant reconstruction from Anna Maria Island to the Manatee River"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Balcony Reconstruction Services for Bradenton's Condo Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Each Bradenton condo building presents unique balcony conditions. Our services address the full spectrum from milestone inspection response to comprehensive building-wide reconstruction programs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardCheck,
                title: "SB 4-D Inspection Response",
                description: "When milestone inspections identify balcony deficiencies, the clock starts on required remediation. We work with the structural engineer who performed the inspection to develop repair scopes that address every finding, then execute the work within the timelines mandated by the building department. For Anna Maria Island condos where multiple buildings may be facing simultaneous deadlines, we can manage parallel projects across the island."
              },
              {
                icon: Layers,
                title: "Structural Concrete Restoration",
                description: "Full structural restoration of deteriorated balcony slabs including removal of delaminated concrete, treatment or replacement of corroded reinforcing steel, application of corrosion inhibitors, and placement of new structural concrete with mix designs specified for Bradenton's salt exposure environment. We evaluate each balcony slab individually because deterioration patterns vary based on the building's orientation, floor level, and specific exposure conditions."
              },
              {
                icon: Shield,
                title: "Marine-Grade Waterproofing",
                description: "Multi-layer waterproofing systems designed for the specific exposure conditions at each Bradenton property. Gulf-front Anna Maria Island buildings receive our most robust marine-grade specifications with enhanced UV resistance and salt spray performance. Riverfront properties receive brackish-water-rated systems. Inland condos receive standard coastal-grade waterproofing. All installations are flood-tested before finish materials are applied."
              },
              {
                icon: Wrench,
                title: "Railing Systems and Connections",
                description: "Replacement of deteriorated railing systems with code-compliant assemblies anchored to structurally sound substrate. For Bradenton's coastal condos, we specify marine-grade aluminum or stainless steel systems that resist salt corrosion. Railing connections are detailed for structural adequacy under the wind loads specified for the building's location, which are higher for Anna Maria Island properties than for mainland buildings."
              },
              {
                icon: AlertTriangle,
                title: "Emergency Balcony Stabilization",
                description: "When an inspection reveals conditions that require immediate action, such as severely corroded structural connections or spalled concrete exposing reinforcing steel, we provide emergency stabilization services. This may include temporary shoring, access restrictions, and expedited repair of the most critical deficiencies while the comprehensive reconstruction scope is developed. Time-sensitive response is particularly important for occupied Bradenton condos."
              },
              {
                icon: FileCheck,
                title: "Building-Wide Programs",
                description: "Comprehensive balcony reconstruction for entire condominium buildings, managed from initial assessment through warranty completion. Building-wide programs for Bradenton's larger condominiums typically involve phased construction sequenced by building elevation or floor level. We develop the phasing plan in coordination with the association board to minimize disruption, manage seasonal scheduling, and distribute construction impacts across the building systematically."
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
              Navigating Bradenton's Multi-Jurisdiction Balcony Reconstruction Landscape
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Balcony reconstruction permitting in Bradenton involves navigating multiple jurisdictions depending on the property's location. The <a href="https://www.bradentonfl.gov/217/Building" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Bradenton Building Division</a> handles permits for properties within the city limits, including downtown riverfront condos and much of the mainland. The <a href="https://www.mymanatee.org/departments/building_and_development_services" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Manatee County Building and Development Services</a> covers unincorporated areas including Lakewood Ranch. Anna Maria Island adds another layer with three separate municipal building departments for Anna Maria, Holmes Beach, and Bradenton Beach. Each jurisdiction has its own permitting process, inspection scheduling, and documentation requirements.
              </p>
              <p className="mb-6">
                The SB 4-D milestone inspection program has created a concentrated wave of assessment and remediation needs among Bradenton's coastal condominium buildings. Buildings constructed during Manatee County's condo development period of the 1970s through early 2000s are now reaching their first milestone inspection deadlines. When these inspections identify balcony structural deficiencies, which is common given the age and exposure conditions, associations face mandatory remediation with specific compliance timelines. The engineering reports that drive these projects require careful interpretation because the scope of the recommended work directly affects the association's financial obligation through special assessments. We help boards understand exactly what the engineering findings mean for their building and develop reconstruction scopes that address every deficiency without unnecessary overreach.
              </p>
              <p className="mb-6">
                Anna Maria Island balcony reconstruction requires a specialized approach that mainland contractors may not anticipate. Beyond the permitting complexity of three separate island municipalities, the physical constraints of island construction affect every aspect of the project. Material staging areas are limited by small lot sizes. Equipment access is constrained by narrow streets and parking limitations. Construction deliveries must account for bridge traffic, particularly during the December through April tourist season when both the Manatee Avenue and Cortez Road bridges carry heavy traffic. Work hour restrictions vary by municipality and may be more restrictive during peak season. Our experience with island projects means we plan for these constraints from the initial project setup rather than discovering them during construction.
              </p>
              <p>
                <CodeReference
                  code="Florida Statute 553.899"
                  section="Milestone Inspections — Balcony Structural Elements"
                  description="Senate Bill 4-D codified milestone structural inspections that specifically evaluate balcony slabs, railings, waterproofing, and balcony-to-building connections. Coastal buildings within three miles of the shoreline, including all Anna Maria Island and most Bradenton-area condos, must complete initial inspections at 25 years with subsequent inspections every 10 years."
                  link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0553/0553.899"
                  linkText="View F.S. 553.899"
                />
                Condo association governance adds a layer of complexity to every Bradenton balcony reconstruction project that goes beyond the technical construction work. Boards must navigate the fiduciary responsibility of approving major capital expenditures, manage the special assessment process with unit owners who may resist the cost, coordinate construction timing with seasonal residents who may be away for months, and maintain adequate reserves throughout the project. We have worked with enough Bradenton condo associations to understand these dynamics and support boards through the process with clear project information, multiple scope options, and transparent financial reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Bradenton Balcony Reconstruction Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Our process addresses both the technical requirements of structural balcony reconstruction and the governance requirements of working with condominium associations.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Engineering Review and Scope Development",
                description: "We review the milestone inspection report with the structural engineer to understand every finding. For buildings where balcony deficiencies have been identified, we conduct supplemental investigation as needed to fully define the scope. This may include concrete coring, chloride testing, and rebar cover surveys. The result is a detailed scope document with quantities, specifications, and cost estimates suitable for board decision-making.",
                icon: ClipboardCheck,
              },
              {
                step: "02",
                title: "Board Presentation and Assessment Planning",
                description: "We present findings, scope options, and costs to the association board and, when requested, to the unit ownership at a membership meeting. Our presentations translate technical engineering language into practical terms that help boards make informed decisions. We develop phasing options and payment schedules that align with the association's financial capacity.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Permitting and Preconstruction",
                description: "We manage permit applications through the appropriate Bradenton jurisdiction, coordinate with the structural engineer on final construction documents, and develop the construction schedule. For Anna Maria Island projects, this phase includes island logistics planning, material staging coordination, and seasonal scheduling decisions. For all projects, we finalize the resident communication plan with the property manager.",
                icon: Building2,
              },
              {
                step: "04",
                title: "Phased Reconstruction",
                description: "Experienced crews execute balcony reconstruction in the approved sequence, typically working one elevation or floor at a time. Each balcony receives demolition to sound substrate, structural concrete repair, rebar treatment or replacement, new waterproofing membrane installation, railing installation, and finish application. The structural engineer inspects at key milestones. We maintain the phasing schedule to minimize the duration each unit is without balcony access.",
                icon: Wrench,
              },
              {
                step: "05",
                title: "Testing, Closeout, and Documentation",
                description: "Every reconstructed balcony is flood-tested to verify waterproofing integrity before final finishes. Building department final inspections confirm code compliance. We compile complete project documentation including as-built conditions, material certifications, warranty information, and maintenance recommendations tailored to the building's specific Bradenton exposure zone. This documentation supports future milestone inspection compliance.",
                icon: Shield,
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
        title="Bradenton Balcony Reconstruction FAQ"
        description="Common questions about balcony reconstruction, SB 4-D compliance, and HOA projects in Bradenton and Anna Maria Island, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Bradenton" currentService="balcony-reconstruction" currentServiceName="Balcony Reconstruction" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Bradenton Balcony Reconstruction Specialists
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your condo balcony reconstruction project in Bradenton. Whether your building is on Anna Maria Island, along the Manatee River, or in the growing communities of eastern Manatee County, we will assess the conditions and develop a reconstruction approach that meets SB 4-D requirements and protects your building long-term.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Balcony Assessment
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
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="balcony-reconstruction-bradenton" />
    </>
  );
}
