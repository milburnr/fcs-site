import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, Building2, Shield, Award, FileCheck, AlertTriangle, ClipboardCheck, Wrench } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";
import { CodeReference } from "@/components/CodeReference";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/condo-remediation-bradenton/' },
  title: "Condo Remediation Bradenton | SB 4-D",
  description: "Condo remediation in Bradenton by Florida Construction Specialists. SB 4-D milestone inspections Anna Maria Island condos riverfront buildings.",
  openGraph: {
    title: "Condo Remediation Bradenton | SB 4-D",
    description: "Condo remediation in Bradenton by Florida Construction Specialists. SB 4-D milestone inspections Anna Maria Island condos riverfront buildings.",
    url: "https://floridaconstructionspecialists.com/condo-remediation-bradenton/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Which Bradenton-area condo buildings are most affected by SB 4-D milestone inspection requirements?",
    answer: "SB 4-D requires milestone structural inspections for condominium buildings three stories or taller that are 30 years old, or 25 years old if located within three miles of the coastline. In Bradenton, the coastline proximity provision captures a large portion of the condo inventory because much of Manatee County's developed area falls within three miles of Tampa Bay, the Manatee River, or the Gulf Coast. Anna Maria Island condos, riverfront condos in downtown Bradenton, condos in West Bradenton near Palma Sola Bay, and even properties along the Braden River may trigger the 25-year threshold. The initial milestone inspection is a Phase 1 visual assessment by a licensed engineer, and if structural deterioration is found, a Phase 2 inspection with testing follows. We work with condo associations throughout this process, from inspection support through remediation construction."
  },
  {
    question: "What makes Anna Maria Island condo buildings particularly vulnerable to structural deterioration?",
    answer: "Anna Maria Island condos face the most aggressive environmental exposure in the Bradenton area. The barrier island sits directly on the Gulf of Mexico with no buffer from salt spray, wind-driven rain, and storm surge. Salt-laden air accelerates corrosion of reinforcing steel within concrete structural elements, which is the primary driver of concrete spalling, cracking, and structural deterioration in coastal condos. Many Anna Maria Island condos were built in the 1970s and 1980s before modern concrete cover and corrosion protection standards were adopted. The combination of age, direct Gulf exposure, and pre-modern construction practices creates conditions where structural remediation is not a question of if, but when. Holmes Beach and Bradenton Beach condos face similar exposure levels."
  },
  {
    question: "How does condo remediation near the Manatee River differ from Gulf-facing properties?",
    answer: "Manatee River-adjacent condos in downtown Bradenton and Palmetto face a different but equally challenging exposure profile. River water, while less saline than direct Gulf water, still contains salt content that drives chloride-induced rebar corrosion over time. River-facing condos also contend with periodic flooding during tropical weather events when storm surge pushes river levels above normal. The flooding introduces moisture into lower-floor structural elements that can remain trapped behind wall finishes, creating hidden deterioration that only becomes apparent during milestone inspections or when visible damage appears. Our remediation approach for riverfront Bradenton condos accounts for this moisture intrusion history alongside the standard corrosion assessment."
  },
  {
    question: "What is the typical scope and cost range for condo remediation projects in Bradenton?",
    answer: "Condo remediation scope in Bradenton varies significantly based on building age, location, original construction quality, and maintenance history. Minor remediation addressing localized concrete spalling and rebar corrosion on balconies and exterior elements may cost fifty thousand to two hundred thousand dollars for a typical mid-size building. Major structural remediation involving post-tensioned cable repairs, column or beam restoration, foundation issues, or extensive balcony reconstruction can range from five hundred thousand to several million dollars. Anna Maria Island condos and older riverfront buildings in Bradenton typically fall toward the higher end of this range due to their aggressive exposure conditions. We provide detailed scope assessments before construction begins so condo associations can plan assessments and financing appropriately."
  },
  {
    question: "Can FCS coordinate condo remediation with ongoing building occupancy?",
    answer: "Yes, and this is a critical capability for Bradenton condo remediation. Most condo associations cannot vacate their buildings during remediation work. We develop phased remediation plans that allow continued occupancy while construction proceeds, sequencing work to minimize disruption to residents. This includes temporary weatherproofing between work phases, noise and dust containment measures, controlled access around active work zones, and scheduling of the most disruptive activities during hours when the fewest residents are present. For Anna Maria Island seasonal condos, we often schedule major exterior work during the off-season months from May through October when unit occupancy is lower, though this coincides with the rainy and hurricane seasons which requires careful weather contingency planning."
  },
  {
    question: "How does FCS handle the engineering and permitting requirements for Bradenton condo remediation?",
    answer: "Condo remediation in Bradenton requires coordination between the structural engineer who performed the milestone inspection, our dedicated engineering partners, and the permitting jurisdiction. Remediation plans must be prepared by a licensed structural engineer and specify repair methods, materials, and acceptance criteria for each structural element. Permits go through the City of Bradenton Building Division for properties within city limits, or Manatee County Building Department for unincorporated areas. Anna Maria Island properties go through the respective city governments of Anna Maria, Holmes Beach, or Bradenton Beach, each of which has its own building department. We manage the complete engineering and permitting process so the condo association has a single point of coordination rather than juggling multiple consultants and jurisdictions."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Condo Remediation", href: "/condo-remediation/" },
  { name: "Bradenton", href: "/condo-remediation-bradenton/" },
];

export default function CondoRemediationBradentonPage() {
  return (
    <>
      <LocalBusinessSchema city="Bradenton" service="Condo Remediation" />
      <ServiceSchema
        serviceName="Condo Remediation"
        serviceDescription="Condo remediation and structural restoration in Bradenton, FL. SB 4-D milestone inspections, Anna Maria Island condos, riverfront buildings, concrete restoration, balcony repairs. Licensed CBC1262722, 40+ years experience."
        city="Bradenton"
        minPrice="100000"
        serviceCategories={["Structural Remediation", "Concrete Restoration", "SB 4-D Compliance", "Balcony Repairs", "Building Envelope Restoration"]}
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
              <span className="text-brand-gold font-semibold">Serving Bradenton & Manatee County</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Condo Remediation in Bradenton, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              From the aging oceanfront condos on Anna Maria Island to the riverfront buildings along the Manatee River in downtown Bradenton, condominium structures across Manatee County face the relentless effects of Gulf Coast salt air, humidity, and storm exposure. Florida Construction Specialists provides comprehensive condo remediation services, from SB 4-D milestone inspection support through full structural restoration, for associations navigating the reality of building aging in one of Florida's most corrosive coastal environments.
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
              <strong>SB4-D Compliance Resource:</strong> For comprehensive compliance checklists, deadlines, and cost guidance, visit our{' '}
              <Link href="/sb4d-compliance/" className="underline font-semibold hover:text-blue-600">SB4-D Compliance Hub</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Bradenton Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Bradenton's Condo Buildings Face Urgent Remediation Needs
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Bradenton and Manatee County's condominium inventory tells a story of three distinct exposure zones, each creating different remediation challenges. The most aggressive environment belongs to Anna Maria Island, where barrier island condos built in the 1970s and 1980s sit directly on the Gulf of Mexico with unobstructed exposure to salt spray, hurricane-force winds, and storm surge. Holmes Beach and Bradenton Beach condos share this Gulf-front vulnerability. These buildings were constructed before modern corrosion protection standards and many are now reaching or exceeding the 25-year coastal milestone inspection threshold under SB 4-D.
              </p>
              <p className="mb-6">
                The second exposure zone encompasses the Manatee River corridor through downtown Bradenton and across to Palmetto. Riverfront condo buildings here face brackish water exposure, periodic flooding during tropical weather, and the persistent high humidity that characterizes the river corridor. These buildings may not experience the same intensity of salt spray as Gulf-front condos, but the combination of moisture, humidity, and age creates a different but equally serious deterioration pattern. Rebar corrosion progresses more slowly but over decades produces the same structural concerns: concrete spalling, delamination, and loss of structural capacity in columns, beams, slabs, and balcony elements.
              </p>
              <p className="mb-6">
                The third zone includes inland Bradenton condos in areas like West Bradenton near Palma Sola Bay, condos along the SR-64 corridor, and properties in the Braden River area. While these buildings have less direct salt exposure than coastal or riverfront properties, Bradenton's overall Gulf Coast climate still delivers salt-laden air, intense UV radiation, and over 50 inches of annual rainfall that test building envelope integrity year after year. Older condos in these areas often show deterioration in parking structures, stairwells, walkways, and balconies where water intrusion has gone unaddressed for years.
              </p>
              <p>
                SB 4-D has accelerated the timeline for addressing these conditions across all three zones. Condo associations that previously deferred maintenance and reserve funding now face mandatory engineering inspections with legal deadlines. When those inspections reveal structural issues, associations must act, and the remediation construction that follows requires a contractor who understands both the engineering complexity of structural restoration and the practical challenges of working on occupied condominium buildings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/southwinds-condo-front/southwinds-condo-front-display.webp"
        alt="Condominium building in Bradenton area requiring structural remediation"
        title="Restoring Bradenton's Condominium Buildings"
        subtitle="SB 4-D compliance, structural restoration, and long-term building preservation across Manatee County"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Condo Remediation Services for Bradenton's Coastal Buildings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            From Anna Maria Island Gulf-front condos to downtown riverfront buildings, we deliver structural remediation tailored to each building's exposure conditions and deterioration patterns.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardCheck,
                title: "SB 4-D Milestone Inspection Support",
                description: "We assist condo associations through the SB 4-D milestone inspection process, coordinating with structural engineers during Phase 1 visual inspections and Phase 2 detailed assessments. When inspections reveal structural deficiencies, we translate engineering findings into actionable remediation plans with realistic budgets and timelines, helping associations understand their options and prioritize repairs."
              },
              {
                icon: Building2,
                title: "Structural Concrete Restoration",
                description: "Repair of deteriorated concrete structural elements including columns, beams, slabs, shear walls, and parking structures. Bradenton's coastal exposure drives chloride-induced rebar corrosion that causes concrete spalling and delamination. We remove deteriorated concrete, treat or replace corroded reinforcing steel, apply corrosion inhibitors, and place engineered repair mortars that restore structural capacity and extend service life."
              },
              {
                icon: Wrench,
                title: "Balcony and Walkway Restoration",
                description: "Comprehensive repair of balcony slabs, railings, waterproofing membranes, and drainage systems. Balconies on Bradenton condos are among the first elements to show deterioration because they are fully exposed to weather on three sides. We restore structural integrity, install modern waterproofing systems, and replace deteriorated railings with code-compliant assemblies that resist the salt air and UV exposure unique to the Gulf Coast."
              },
              {
                icon: Shield,
                title: "Building Envelope Remediation",
                description: "Restoration of exterior wall systems, window assemblies, sealant joints, and stucco finishes that protect the building structure from moisture intrusion. Anna Maria Island and riverfront condos in Bradenton experience accelerated exterior deterioration from salt, humidity, and storm-driven rain. We address the root causes of moisture intrusion rather than applying cosmetic repairs that mask ongoing deterioration."
              },
              {
                icon: AlertTriangle,
                title: "Post-Tensioned Cable Assessment",
                description: "Evaluation and repair of post-tensioned concrete systems found in many Bradenton-area condos from the 1970s through 1990s. Post-tensioned cables under stress are vulnerable to corrosion-induced failure, which can cause sudden and dangerous structural capacity loss. We work with structural engineers to assess cable condition, perform selective exploratory openings, and execute repairs that preserve the post-tensioning system's integrity."
              },
              {
                icon: FileCheck,
                title: "Reserve Study Support",
                description: "We help Bradenton condo associations develop accurate remediation cost estimates for reserve study planning. SB 4-D's reserve funding requirements mean associations must budget realistically for structural maintenance. Our experience with Manatee County condo buildings allows us to provide cost projections based on actual construction costs rather than generic estimating databases that understate Gulf Coast remediation expenses."
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
              Understanding Bradenton's Condo Building Challenges
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Condo remediation in Bradenton requires understanding how the local environment interacts with building materials over decades. Manatee County's climate is not simply "hot and humid." The specific combination of Gulf of Mexico salt spray, Manatee River estuary moisture, afternoon thunderstorms that dump inches of rain in under an hour, and UV intensity that degrades sealants and coatings faster than manufacturer specifications assume, creates a deterioration environment that generic remediation approaches fail to address adequately.
              </p>
              <p className="mb-6">
                Permitting for condo remediation in Bradenton involves multiple potential jurisdictions. The <a href="https://www.bradentonfl.gov/217/Building" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Bradenton Building Division</a> handles permits within city limits. The <a href="https://www.mymanatee.org/departments/building_and_development_services" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">Manatee County Building and Development Services</a> covers unincorporated areas. Anna Maria Island condos go through the building departments of Anna Maria, Holmes Beach, or Bradenton Beach depending on location. Each municipality has slightly different processes and review timelines. We navigate all of these jurisdictions and ensure remediation permits are obtained efficiently regardless of building location.
              </p>
              <p className="mb-6">
                The occupied nature of condo buildings adds complexity that other construction types do not face. Residents live in the building during remediation. Noise, dust, vibration, temporary loss of balcony access, and scaffolding adjacent to windows all affect daily life. In Bradenton's tourism-influenced market, particularly on Anna Maria Island, unit owners may rely on rental income from seasonal tenants. Extended remediation that prevents rental use creates direct financial pressure on the association and individual owners. We develop remediation schedules that minimize disruption duration while maintaining construction quality and safety standards.
              </p>
              <p>
                <CodeReference
                  code="Florida Statute 553.899"
                  section="Milestone Inspections for Condominiums and Cooperative Buildings"
                  description="Requires structural milestone inspections for buildings three stories or taller. Coastal buildings within three miles of the shoreline, including Anna Maria Island and most of Bradenton, must complete initial inspections at 25 years; inland buildings at 30 years. Phase 1 is a visual assessment; Phase 2 involves destructive and non-destructive testing if substantial deterioration is found."
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
                Our experience with Manatee County condo buildings gives us insight into the construction methods and material choices that were common during different building eras. 1970s condos in the Bradenton area often used different concrete mix designs, rebar cover depths, and waterproofing approaches than 1990s buildings. Understanding these era-specific construction characteristics helps us anticipate what we will find once demolition begins and plan remediation approaches that address the root causes of deterioration specific to each building's construction vintage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Bradenton Condo Remediation Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Condo remediation follows a structured process from initial assessment through construction closeout, with resident communication at every stage.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Assessment and Scope Development",
                description: "We review the structural engineer's milestone inspection report, conduct our own construction assessment, and develop a detailed remediation scope. For Bradenton condos, this includes evaluating the building's specific exposure conditions, reviewing maintenance history, and identifying both the deficiencies noted in the engineering report and any additional construction concerns we observe. We present the scope and estimated budget to the condo association board.",
                icon: ClipboardCheck,
              },
              {
                step: "02",
                title: "Engineering and Permitting",
                description: "Working with the structural engineer of record, we develop construction-level remediation plans that specify repair methods, materials, and acceptance criteria for each element. We submit permit applications to the appropriate jurisdiction, whether City of Bradenton, Manatee County, or one of the Anna Maria Island municipalities, and coordinate plan review to ensure approvals are obtained on schedule.",
                icon: FileCheck,
              },
              {
                step: "03",
                title: "Resident Communication and Phasing",
                description: "Before construction begins, we present the remediation plan to the association and residents, explaining the work sequence, anticipated duration, access restrictions, and noise expectations. We develop a phasing plan that minimizes impact on occupied units, schedules the most disruptive work strategically, and provides clear communication channels for resident questions throughout the project.",
                icon: Building2,
              },
              {
                step: "04",
                title: "Remediation Construction",
                description: "Experienced crews execute the remediation work following the engineered plans. Concrete removal, rebar treatment, structural repairs, waterproofing installation, and finish restoration proceed in the planned sequence. Our superintendents manage quality control at each repair location, documenting conditions found and work completed for the structural engineer's review and the association's records.",
                icon: Wrench,
              },
              {
                step: "05",
                title: "Engineering Verification and Closeout",
                description: "The structural engineer inspects completed remediation work and provides written verification that the building meets the required structural standards. We coordinate final building inspections, provide complete documentation of all work performed, deliver warranty information, and present the association with a maintenance plan to protect the remediation investment in Bradenton's demanding coastal environment.",
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
        title="Bradenton Condo Remediation FAQ"
        description="Common questions about condominium remediation and SB 4-D compliance in Bradenton and Manatee County, Florida."
      />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <RelatedServices city="Bradenton" currentService="condo-remediation" />
            <NearbyLocations currentCity="Bradenton" service="condo-remediation" serviceName="Condo Remediation" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Address Your Bradenton Condo's Remediation Needs
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss your condo association's remediation requirements. Whether you are responding to a milestone inspection finding or proactively addressing building deterioration, we will assess your building and develop a realistic remediation plan.
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
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
