import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, AlertTriangle, Building2, TrendingDown, Wrench, Zap, HelpCircle, ThermometerSun, Users } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Key Signs Your Commercial Building Needs a Remodel | Tampa Renovation Guide",
  description: "Discover the warning signs that indicate your Tampa commercial building needs remodeling. Expert guidance on when to renovate office buildings, retail spaces, and commercial properties from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Key Signs Your Commercial Remodel Needs", href: "/key-signs-your-commercial-remodel-needs/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/is-your-commercial-building-remodel-ready/", label: "Remodel Readiness Assessment" },
  { href: "/tampas-premier-commercial-remodeling-contractors/", label: "Commercial Remodeling Contractors" },
  { href: "/maximize-savings-on-commercial-renovation/", label: "Maximize Renovation Savings" },
  { href: "/contact/", label: "Schedule Consultation" },
];

const warningSignCategories = [
  {
    title: "Physical Deterioration",
    icon: Building2,
    signs: [
      "Cracking or settling in foundation and walls",
      "Roof leaks or visible wear on roofing materials",
      "Water stains on ceilings or walls",
      "Deteriorating exterior finishes (EIFS, stucco, siding)",
      "Corroded or failing storefront systems"
    ]
  },
  {
    title: "System Failures",
    icon: Wrench,
    signs: [
      "HVAC system over 15 years old or requiring frequent repairs",
      "Electrical system unable to meet current demands",
      "Plumbing problems including slow drains or low pressure",
      "Outdated fire suppression or alarm systems",
      "Elevator requiring frequent service calls"
    ]
  },
  {
    title: "Energy Inefficiency",
    icon: ThermometerSun,
    signs: [
      "Utility costs significantly higher than comparable buildings",
      "Hot/cold spots throughout the building",
      "Single-pane windows or inadequate insulation",
      "Outdated lighting systems (T12 fluorescent)",
      "HVAC running constantly without maintaining comfort"
    ]
  },
  {
    title: "Market/Business Signs",
    icon: TrendingDown,
    signs: [
      "Higher vacancy rates than competing properties",
      "Difficulty attracting quality tenants",
      "Rent rates below market average",
      "Negative feedback on building appearance",
      "Loss of business to more modern competitors"
    ]
  },
];

const faqs = [
  {
    question: "How often should commercial buildings be remodeled or renovated?",
    answer: "Most commercial buildings benefit from some level of renovation every 10-15 years, with major remodels every 20-30 years. However, this varies by building type and use intensity. High-traffic retail spaces may need updates every 5-7 years to stay competitive. Office buildings typically refresh common areas every 10 years and undergo major renovations at 20-25 years. Industrial buildings have longer cycles but may need system upgrades more frequently. The key is monitoring your building's condition and market position rather than following arbitrary schedules."
  },
  {
    question: "What ROI can I expect from a commercial building remodel in Tampa?",
    answer: "ROI varies significantly based on project scope and market conditions, but well-planned commercial remodels in Tampa typically achieve strong returns. Building repositioning projects that improve class rating (from Class B to Class A, for example) often see rent increases of 20-40%. Energy efficiency improvements typically pay back in 3-7 years through utility savings. Tenant improvement allowances that attract quality tenants reduce vacancy losses worth $15-50 per square foot annually. Overall, studies suggest commercial renovations return 15-25% more in property value than project costs."
  },
  {
    question: "Should I renovate or sell my aging commercial building?",
    answer: "This depends on several factors: your investment timeline, the building's fundamental condition, location quality, and local market trends. If the building is well-located and structurally sound, renovation typically creates more value than selling as-is. Tampa Bay's growing population and commercial demand favor renovation in most areas. However, if the building has major structural issues, poor location, or you need liquidity soon, selling might be appropriate. We help clients analyze both options with honest assessments of renovation costs and potential returns."
  },
  {
    question: "How do I prioritize which improvements to make first?",
    answer: "We recommend prioritizing based on three factors: safety/code compliance first (fire systems, structural issues, ADA compliance), then revenue impact (improvements that reduce vacancy or increase rents), then operational efficiency (energy savings, maintenance reduction). Life safety issues and code violations should always be addressed immediately. After those, focus on improvements visible to tenants and customers—lobbies, common areas, building exteriors—as these drive revenue. System upgrades can often be phased over time as equipment reaches end-of-life."
  },
  {
    question: "What's the difference between renovation, remodeling, and restoration?",
    answer: "These terms are often used interchangeably but have distinct meanings. Renovation involves updating or modernizing an existing space while maintaining its current use and basic structure—new finishes, fixtures, and systems. Remodeling involves changing the structure, layout, or function of a space—moving walls, changing floor plans, repurposing rooms. Restoration means returning a building to its original condition, typically for historic preservation. Most commercial projects combine elements of renovation and remodeling."
  },
  {
    question: "How do I know if my building has code compliance issues?",
    answer: "Several indicators suggest potential code compliance issues: the building was constructed before current codes (pre-1994 for Florida Building Code, pre-1990 for ADA), you've received notices from the fire marshal or building department, insurance inspections have identified concerns, or the building has never been significantly renovated. We recommend a professional code compliance assessment that reviews fire/life safety, ADA accessibility, structural systems, and building envelope against current requirements. This assessment typically costs $2,000-10,000 depending on building size but prevents costly surprises."
  },
  {
    question: "Can commercial remodeling be done in phases to spread costs?",
    answer: "Absolutely, and we recommend phased approaches for many projects. Phasing allows you to spread capital expenditure over multiple budget cycles, complete highest-priority work first, learn from early phases before committing to later work, and maintain cash flow from operational areas. Common phasing approaches include floor-by-floor renovation, system-by-system upgrades (HVAC year one, electrical year two), or front-of-house then back-of-house sequencing. We help clients develop phasing plans that balance financial constraints with operational needs."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial building showing signs of needed renovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Key Signs Your Commercial Building Needs a Remodel
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Is your Tampa Bay commercial property sending warning signals? Learn to recognize the indicators that it's time to invest in renovation—before small problems become major expenses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Assessment
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8">
              Commercial buildings communicate their needs constantly—through rising utility bills, tenant complaints, maintenance calls, and visible deterioration. The challenge for Tampa Bay property owners and managers is learning to read these signals and responding appropriately. Acting too soon wastes capital on unnecessary improvements. Waiting too long allows small problems to compound into expensive emergencies and lost revenue. Florida Construction Specialists helps commercial property owners find the right balance with expert assessments and honest guidance.
            </p>
            
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Timing Matters for Commercial Renovation
            </h2>
            <p className="text-gray-600 mb-6">
              In Tampa Bay's competitive commercial real estate market, the timing of your renovation investment significantly impacts returns. Renovate too early, and you've committed capital that could have worked elsewhere. Wait too long, and you've lost tenants, rental income, and property value that renovation could have preserved. You've also allowed physical problems to worsen, increasing eventual repair costs.
            </p>
            <p className="text-gray-600 mb-6">
              The "right time" depends on your specific situation—building condition, market position, financial capacity, and business goals. However, certain warning signs universally indicate that renovation should move higher on your priority list. Recognizing these signs early gives you time to plan, budget, and execute renovations strategically rather than reacting to emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Signs Grid */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
            Warning Signs Your Building Is Communicating
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {warningSignCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-10 h-10 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.signs.map((sign, sIndex) => (
                    <li key={sIndex} className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Physical Warning Signs: What Your Building Is Telling You
            </h2>
            <p className="text-gray-600 mb-6">
              Physical deterioration is the most visible indicator that renovation is needed, but by the time problems become obvious, they've often progressed significantly. Learning to spot early signs allows intervention before damage compounds. Tampa Bay's climate—with intense UV exposure, high humidity, salt air, and hurricane threats—accelerates building deterioration compared to more temperate regions.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Roof Issues:</strong> Commercial roofs in Tampa typically last 15-25 years depending on material and maintenance. Warning signs include ponding water after rain, visible membrane degradation, rusted or loose flashing, and interior water stains. Roof problems never improve on their own—water intrusion damages insulation, creates mold conditions, and can compromise structural elements. If your roof is over 15 years old, schedule a professional inspection even if no problems are visible.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Building Envelope:</strong> Your building's "skin"—walls, windows, and weatherproofing—protects everything inside. Tampa's humidity creates particular challenges: EIFS (synthetic stucco) systems without proper drainage trap moisture leading to hidden damage. Single-pane windows allow condensation that rots frames. Deteriorating caulking and sealants admit water. Regular inspection of the building envelope, particularly after storms, can catch problems early.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Structural Concerns:</strong> Cracking in concrete, settling foundations, and corroded reinforcement are serious issues that require immediate professional evaluation. Tampa Bay's sandy soils and high water tables create settling risks. Salt air accelerates rebar corrosion in concrete structures. While not every crack indicates structural problems, patterns of cracking, separation at joints, and uneven floors warrant engineering assessment.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              System Performance Warning Signs
            </h2>
            <p className="text-gray-600 mb-6">
              Building systems—HVAC, electrical, plumbing, fire protection—have finite lifespans. As they age, they become less efficient, more prone to failure, and more expensive to maintain. At some point, replacement becomes more economical than continued repair. Understanding typical system lifespans helps anticipate renovation needs.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>HVAC Systems:</strong> Commercial HVAC systems in Tampa's demanding climate typically last 15-20 years. Warning signs include frequent repairs (more than two major repairs annually), uneven temperatures throughout the building, excessive humidity despite running systems, and utility costs significantly higher than similar buildings. R-22 refrigerant systems face additional pressure as refrigerant becomes increasingly expensive and eventually unavailable.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Electrical Systems:</strong> Buildings constructed before 1990 often have electrical systems inadequate for modern demands—insufficient outlets, outdated panels, and wiring unable to support current technology loads. Warning signs include frequently tripping breakers, flickering lights, warm outlets or switch plates, and inability to add circuits for new equipment. Electrical modernization often accompanies other renovation work since walls are already open.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Typical System Lifespans and Replacement Costs - Tampa Bay 2024</h3>
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Building System</th>
                    <th className="px-6 py-3 text-left">Expected Lifespan</th>
                    <th className="px-6 py-3 text-left">Replacement Cost Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Commercial Roof (TPO/EPDM)</td>
                    <td className="px-6 py-4">15-25 years</td>
                    <td className="px-6 py-4">$8-15/SF</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Commercial HVAC</td>
                    <td className="px-6 py-4">15-20 years</td>
                    <td className="px-6 py-4">$15-30/SF (building area)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Electrical Service/Distribution</td>
                    <td className="px-6 py-4">30-40 years</td>
                    <td className="px-6 py-4">$8-20/SF</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Plumbing Systems</td>
                    <td className="px-6 py-4">40-50 years</td>
                    <td className="px-6 py-4">$10-25/SF</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Fire Sprinkler System</td>
                    <td className="px-6 py-4">40-50 years</td>
                    <td className="px-6 py-4">$5-12/SF</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Elevator Modernization</td>
                    <td className="px-6 py-4">20-25 years</td>
                    <td className="px-6 py-4">$100,000-350,000/cab</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Parking Lot/Structure</td>
                    <td className="px-6 py-4">15-25 years</td>
                    <td className="px-6 py-4">$3-8/SF</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-2">*Costs vary based on building type, system complexity, and current market conditions.</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Market and Business Warning Signs
            </h2>
            <p className="text-gray-600 mb-6">
              Sometimes the most urgent renovation signals come not from the building itself but from the market around it. In Tampa Bay's dynamic commercial real estate market, what was acceptable five years ago may now be competitively disadvantaged. Understanding your building's market position helps determine when renovation becomes strategically necessary.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Vacancy and Rent Performance:</strong> If your building consistently runs higher vacancy or lower rents than comparable properties, market perception may be the issue. Potential tenants form impressions quickly—dated lobbies, worn finishes, and tired common areas suggest deferred maintenance throughout the building. Even structurally sound buildings with excellent systems can underperform if they look outdated.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Tenant Feedback:</strong> Pay attention to tenant complaints and requests. Multiple tenants reporting comfort issues suggest HVAC problems. Complaints about parking lot conditions, restroom appearances, or common area maintenance indicate renovation opportunities. Exit interviews with departing tenants provide valuable insight into why they're leaving—often the reasons relate to building condition.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Competitive Analysis:</strong> How does your building compare to recent renovations or new construction in your market? If competitors are investing in their properties and attracting tenants you've lost, renovation may be necessary to remain competitive. Tampa Bay's strong construction activity means buildings that don't keep pace can quickly fall behind.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Code Compliance and Regulatory Warning Signs
            </h2>
            <p className="text-gray-600 mb-6">
              Building codes evolve continuously, and older buildings may not meet current requirements. While existing buildings generally aren't required to upgrade to current codes retroactively, certain triggers mandate compliance—and code violations can affect insurance, financing, and marketability.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>ADA Accessibility:</strong> The Americans with Disabilities Act requires ongoing "barrier removal" in existing buildings. If your building has accessible entrance, restroom, or path-of-travel deficiencies, you're obligated to address them when "readily achievable." Building renovations often trigger additional ADA requirements for affected areas.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Fire and Life Safety:</strong> Fire codes are non-negotiable. If your fire marshal has issued notices, your fire suppression or alarm systems are inadequate, or your building doesn't meet current egress requirements, these issues must be addressed regardless of other renovation plans. Insurance underwriters increasingly require fire system upgrades in older buildings.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-brand-green" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Commercial Remodeling Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Not Sure If Your Building Needs Renovation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free building assessment with Florida Construction Specialists. We'll evaluate your commercial property's condition and provide honest recommendations—with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Free Assessment
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
