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
  alternates: { canonical: 'https://floridaconstructionspecialists.com/balcony-reconstruction-st-petersburg/' },
  title: "Balcony Reconstruction St. Pete | SB 4-D Compliance",
  description: "Balcony reconstruction in St. Petersburg by Florida Construction Specialists. Downtown high-rise condos Isla del Sol waterfront towers.",
  openGraph: {
    title: "Balcony Reconstruction St. Pete | SB 4-D Compliance",
    description: "Balcony reconstruction in St. Petersburg by Florida Construction Specialists. Downtown high-rise condos Isla del Sol waterfront towers.",
    url: "https://floridaconstructionspecialists.com/balcony-reconstruction-st-petersburg/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "Why does SB 4-D apply to virtually every multi-story building in St. Petersburg?",
    answer: "St. Petersburg's narrow peninsula geography means the entire city falls within three miles of a coastline, whether that is Tampa Bay to the east, Boca Ciega Bay to the west, or the Gulf of Mexico to the southwest. Under SB 4-D, buildings within three miles of the coast must complete their first milestone structural inspection at 25 years rather than the 30-year standard that applies to inland buildings. Because no point in St. Petersburg exceeds this three-mile threshold, every building three stories or taller in the city is subject to the accelerated 25-year timeline. This affects a substantial number of properties, particularly the condominium buildings constructed during the downtown building booms of the 1980s and early 2000s."
  },
  {
    question: "Which St. Petersburg neighborhoods have the highest concentration of buildings needing balcony reconstruction?",
    answer: "Downtown St. Petersburg has the densest concentration of affected buildings, with high-rise condominium towers lining Beach Drive, the Pier District, and the Central Avenue corridor. These buildings, many constructed during the 2003 to 2008 development cycle, are now approaching or have passed their 25-year milestone. Isla del Sol and the barrier island communities of St. Pete Beach and Treasure Island contain waterfront towers with severe salt exposure that accelerates balcony deterioration. Shore Acres and Coquina Key feature mid-rise condominiums from the 1970s and 1980s that have long exceeded their inspection deadlines. The Gateway and Carillon corridor contains newer commercial and residential towers that will reach their milestones in the coming decade."
  },
  {
    question: "How does bidirectional water exposure affect balcony deterioration differently in St. Petersburg compared to mainland cities?",
    answer: "Most Florida coastal cities have salt air exposure from one direction. St. Petersburg receives it from multiple directions simultaneously because the peninsula is flanked by Tampa Bay, Boca Ciega Bay, and the Gulf of Mexico. This means that no building orientation provides natural protection. A balcony facing east receives Tampa Bay salt spray, while a balcony facing west receives Gulf-side exposure. Even interior-facing balconies on courtyard buildings experience salt deposition from prevailing winds that carry moisture across the narrow peninsula. The result is that reinforcing steel in balcony concrete corrodes more uniformly and more rapidly than in mainland coastal locations, and waterproofing membranes degrade from salt exposure regardless of which direction the balcony faces."
  },
  {
    question: "What is the typical cost range for balcony reconstruction on a St. Petersburg high-rise condominium?",
    answer: "Individual balcony reconstruction on St. Petersburg high-rise condominiums typically ranges from twenty thousand to forty-five thousand dollars per unit for comprehensive restoration including structural concrete repair, rebar treatment, new waterproofing membrane, and railing replacement. The per-unit cost is influenced by floor height, access logistics, and the extent of structural deterioration. Building-wide programs that address all balconies in a phased approach achieve better economics at twelve thousand to twenty-eight thousand per unit because mobilization, scaffolding, and engineering costs are spread across more units. Complete building programs for towers with fifty or more units commonly range from six hundred thousand to six million dollars. FCS develops detailed unit-by-unit assessments so associations can budget accurately for special assessments."
  },
  {
    question: "How does FCS manage balcony reconstruction in occupied condominium buildings?",
    answer: "Occupied building reconstruction requires a fundamentally different approach than working on vacant structures. FCS develops phased work plans that limit the number of units affected at any one time, typically working on one building face or one floor section at a time. We coordinate with property management on resident notifications, establish designated access routes for materials and equipment that avoid lobby and common areas during peak hours, and contain noise-generating work within specific time windows. For downtown St. Petersburg condominiums with ground-floor retail, we coordinate with commercial tenants separately. Balcony furniture and personal property removal and replacement is handled on a unit-by-unit schedule with advance notice. Our project managers maintain direct communication with HOA boards through regular progress updates and address resident concerns through a single point of contact."
  },
  {
    question: "Can balcony reconstruction address both structural deficiencies and aesthetic upgrades simultaneously?",
    answer: "Yes, and we recommend this approach whenever possible because it reduces total disruption and cost compared to performing the work in separate phases. When a building is already mobilized for structural balcony repair with scaffolding or swing stages in place, adding railing upgrades, surface finish improvements, or waterproofing enhancements is far more efficient than returning later for aesthetic work. Many St. Petersburg HOAs use the SB 4-D compliance requirement as an opportunity to update railing systems from deteriorating aluminum picket designs to modern glass, cable, or horizontal rail systems that enhance property values. FCS presents options during the assessment phase so boards can evaluate the full scope of possibilities and make informed decisions about combining structural and aesthetic improvements."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/commercial/" },
  { name: "Balcony Reconstruction", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" },
  { name: "St. Petersburg", href: "/balcony-reconstruction-st-petersburg/" },
];

export default function BalconyReconstructionStPetersburgPage() {
  return (
    <>
      <LocalBusinessSchema city="St. Petersburg" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction"
        serviceDescription="Balcony reconstruction and SB 4-D compliance in St. Petersburg, FL. Downtown high-rise condos, Isla del Sol waterfront towers, Shore Acres mid-rises, HOA project management, structural restoration. Licensed CBC1262722, 40+ years experience."
        city="St. Petersburg"
        minPrice="100000"
        serviceCategories={["Structural Balcony Repair", "SB 4-D Compliance", "Waterproofing Membranes", "Railing Replacement", "HOA Project Management"]}
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
              <span className="text-brand-gold font-semibold">Serving St. Petersburg, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Balcony Reconstruction in St. Petersburg, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              St. Petersburg's peninsula location places every multi-story building under SB 4-D's accelerated 25-year inspection timeline. Florida Construction Specialists provides comprehensive balcony reconstruction for downtown high-rises, waterfront condominium towers, and mid-rise buildings across Pinellas County, managing the full process from structural assessment through HOA coordination and final inspection.
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

      {/* St. Petersburg Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              The Peninsula Problem: Why Every St. Petersburg Building Faces the 25-Year Deadline
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                SB 4-D's milestone inspection requirement divides Florida into two zones: buildings within three miles of a coastline must be inspected at 25 years, while inland buildings receive an additional five years at the 30-year mark. St. Petersburg is the rare city where this distinction is irrelevant. The narrow peninsula that defines the city's geography means no point within the municipal boundary exceeds the three-mile coastal threshold. Every condominium, apartment building, and commercial structure three stories or taller falls under the accelerated timeline, creating an inspection and repair demand that is proportionally greater than almost any other Florida municipality.
              </p>
              <p className="mb-6">
                The scale of the challenge becomes apparent when you consider the building inventory. Downtown St. Petersburg experienced two major condominium construction cycles -- the first in the late 1970s through mid-1980s and the second during the 2003 to 2008 development boom. Buildings from the earlier cycle are now 40 to 50 years old and many have already exceeded their reinspection intervals. Buildings from the later cycle are approaching or have recently crossed the 25-year threshold. Meanwhile, established waterfront communities like Isla del Sol, Shore Acres, and Coquina Key contain mid-rise condominium buildings from the 1970s and 1980s that have been subject to decades of direct bay exposure without the structural maintenance that current standards demand.
              </p>
              <p className="mb-6">
                The bidirectional salt exposure that characterizes the peninsula compounds the structural urgency. Most coastal Florida cities have a clearly defined ocean side and a protected inland side. St. Petersburg has neither. Tampa Bay lies to the east, Boca Ciega Bay to the west, and the Gulf of Mexico to the southwest. Salt-laden air reaches balconies from every direction, and prevailing winds shift seasonally, meaning no building orientation provides consistent protection. Reinforcing steel in balcony concrete corrodes uniformly rather than preferentially on one face, and waterproofing membranes degrade under constant salt deposition regardless of which direction the balcony faces. This pattern of deterioration is measurably more aggressive than what we encounter in mainland coastal cities.
              </p>
              <p>
                Florida Construction Specialists has reconstructed balconies at condominium buildings throughout St. Petersburg, from the glass towers along Beach Drive to the established communities of Isla del Sol and the mid-rises of Shore Acres. We function as the prime contractor on every project, managing structural engineering coordination, the City of St. Petersburg permitting process, HOA board presentations, and the phased construction approach that occupied buildings require. Our principal's background as an Executive General Adjuster provides additional depth in evaluating structural conditions and developing repair scopes that address the root causes of deterioration rather than just the visible symptoms.
              </p>
            </div>

            <CodeReference
              code="Florida Statute 553.899"
              section="Milestone Inspections — Balcony Structural Elements"
              description="SB 4-D milestone inspections evaluate balcony structural connections, reinforcing steel condition, and waterproofing integrity. St. Petersburg's peninsula geography places every condo building within the 3-mile coastal zone, requiring inspection at 25 years rather than 30. Balconies subject to bidirectional salt exposure deteriorate faster than single-coast properties."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/fcs-tiles-on-balcony/fcs-tiles-on-balcony-display.webp"
        alt="Balcony tile restoration on a St. Petersburg condominium"
        title="Restoring St. Petersburg's Condominium Balconies"
        subtitle="Structural repair, waterproofing, and railing systems for peninsula properties under SB 4-D"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Balcony Reconstruction Services for St. Petersburg Condominiums
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Comprehensive structural and waterproofing capabilities for the peninsula's unique exposure conditions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Structural Concrete Restoration",
                description: "Assessment and repair of deteriorated balcony concrete including spall repair, rebar exposure treatment, carbon fiber reinforcement, and complete slab replacement when deterioration exceeds repair thresholds. We address the chloride contamination from salt air that accelerates rebar corrosion in peninsula buildings, using corrosion inhibitors and cathodic protection where conditions warrant."
              },
              {
                icon: Shield,
                title: "Marine-Grade Waterproofing",
                description: "Multi-layer waterproofing systems designed for bidirectional salt exposure including penetrating sealers for concrete substrate protection, elastomeric polyurethane traffic membranes with enhanced salt resistance, and UV-stable topcoats rated for St. Petersburg's intense solar exposure. Proper slope correction addresses ponding water that causes accelerated membrane failure during the peninsula's heavy afternoon rainstorms."
              },
              {
                icon: HardHat,
                title: "Railing System Replacement",
                description: "Removal of corroded railing systems and installation of code-compliant replacements using marine-grade aluminum, tempered glass, stainless steel cable, or composite materials. We help HOA boards evaluate options that balance durability in the salt air environment with aesthetic preferences and budget constraints, providing samples and mock-ups for board review before full installation."
              },
              {
                icon: FileCheck,
                title: "SB 4-D Milestone Compliance",
                description: "Coordination with licensed structural engineers for milestone inspections, Phase 2 assessment support when Phase 1 identifies concerns, and execution of repair plans that bring buildings into full compliance. We help associations understand their obligations, develop realistic timelines and budgets, and navigate the relationship between inspection findings and the repair scope required to achieve compliance."
              },
              {
                icon: Briefcase,
                title: "HOA and Board Management",
                description: "FCS understands condominium governance. We prepare and deliver detailed presentations for board meetings and owner votes, develop phased payment structures aligned with special assessment schedules, and maintain transparent communication throughout the project. Our proposals include the level of documentation that boards need for fiduciary decision-making and that lenders require for unit financing."
              },
              {
                icon: AlertTriangle,
                title: "Emergency Stabilization",
                description: "When milestone inspections reveal unsafe conditions requiring immediate attention, FCS provides emergency stabilization including temporary shoring, barrier installation, load restriction implementation, and expedited permanent repairs. Our response capabilities allow us to secure dangerous conditions quickly while developing the comprehensive repair plan that the building ultimately requires."
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
              Balcony Conditions Across St. Petersburg's Distinct Building Communities
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Petersburg's condominium inventory spans multiple decades of construction and occupies dramatically different environments across the peninsula. Understanding the specific conditions that affect each building community is essential to developing appropriate repair scopes and realistic budgets.
              </p>
              <p className="mb-6">
                The <a href="https://www.stpete.org/building_and_development_review/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of St. Petersburg Development Services Department</a> processes building permits for balcony reconstruction projects. We manage the permit application process, coordinate required inspections during construction, and ensure that completed work meets both the Florida Building Code and the structural engineer's specifications. For buildings in the city's five historic districts, additional coordination with the Community Planning and Preservation Commission may be required when balcony work affects exterior appearance.
              </p>
              <p className="mb-6">
                Downtown St. Petersburg's high-rise towers present the most logistically complex balcony projects. Buildings along Beach Drive, the Pier District, and Central Avenue typically range from ten to thirty stories, requiring specialized access equipment including swing stages, mast climbers, or suspended scaffolding systems. Street-level staging must be coordinated with city right-of-way permits, and work schedules must account for pedestrian traffic in St. Petersburg's increasingly active downtown core. Many of these towers were built during the 2003 to 2008 construction cycle using post-tensioned concrete systems, which requires specialized expertise when performing structural repairs that intersect with tensioning cables.
              </p>
              <p className="mb-6">
                Isla del Sol, the residential island community accessible from the Pinellas Bayway, contains condominium towers directly on the bay with the most severe salt exposure conditions in the St. Petersburg market. Buildings here face open water on multiple sides, and the combination of wind-driven salt spray and reflected UV from the water surface creates deterioration rates that exceed even downtown waterfront properties. Balcony railings on Isla del Sol towers frequently show advanced corrosion within fifteen to twenty years, and concrete spalling from rebar corrosion is common on buildings that did not receive adequate waterproofing treatment during original construction.
              </p>
              <p>
                Shore Acres, Coquina Key, and the neighborhoods surrounding Coffee Pot Bayou contain older mid-rise condominium buildings from the 1970s and 1980s that present a different set of challenges. These buildings typically have smaller footprints, lower height profiles, and simpler structural systems compared to downtown towers, but they have endured decades more exposure to the salt environment. Many were built before modern waterproofing standards and corrosion protection requirements, and deferred maintenance during the decades before SB 4-D created enforcement mechanisms means that deterioration is often more advanced than owners expect. FCS frequently encounters conditions in these older buildings where what appears to be cosmetic surface damage actually extends to structural reinforcing steel requiring more comprehensive repair than originally anticipated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            St. Petersburg Balcony Reconstruction Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            A structured approach from initial assessment through warranty completion, designed for the complexities of occupied condominium buildings.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Structural Assessment and Testing",
                description: "Licensed structural engineers evaluate balcony conditions through visual inspection, concrete core sampling, chloride content testing, and delamination surveys. We document conditions on a unit-by-unit basis to identify the full scope of deterioration and develop repair specifications tailored to the building's specific structural system and exposure conditions.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "HOA Board Presentation and Budgeting",
                description: "We present assessment findings and repair options to the HOA board with detailed cost projections, phasing alternatives, and timeline estimates. Our proposals include the documentation boards need for owner vote packages and lender communications, including unit-by-unit scope breakdowns that support equitable special assessment allocation.",
                icon: Briefcase,
              },
              {
                step: "03",
                title: "Engineering and Permitting",
                description: "Structural engineering drawings are prepared for the specific repair methods at each unit. We submit permit applications to the City of St. Petersburg Development Services Department, coordinate plan review responses, and secure approvals before mobilization. For buildings in historic districts, we manage the Certificate of Appropriateness process concurrently.",
                icon: Building2,
              },
              {
                step: "04",
                title: "Phased Construction",
                description: "Work proceeds in phases designed to minimize resident disruption, typically addressing one building face or floor section at a time. Concrete repair, rebar treatment, waterproofing installation, and railing replacement follow a sequenced workflow that maintains quality control at each stage. Daily cleanup and noise management protocols protect the occupied building environment.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Inspection, Documentation, and Warranty",
                description: "City building inspections verify code compliance at required milestones. We compile comprehensive documentation including structural engineer certifications, material test reports, photographs of concealed conditions and repairs, and warranty certificates. This documentation package supports the building's SB 4-D compliance record and provides a baseline for the 10-year reinspection cycle.",
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
        title="St. Petersburg Balcony Reconstruction FAQ"
        description="Common questions about balcony reconstruction and SB 4-D compliance for condominium buildings in St. Petersburg, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="St. Petersburg" currentService="balcony-reconstruction" currentServiceName="Balcony Reconstruction" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Schedule Your Balcony Assessment
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to assess your St. Petersburg condominium's balcony conditions and develop a compliance plan that addresses SB 4-D requirements while protecting your building's structural integrity and property values.
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
              <span>SB 4-D Specialists</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="balcony-reconstruction-st-petersburg" />
    </>
  );
}
