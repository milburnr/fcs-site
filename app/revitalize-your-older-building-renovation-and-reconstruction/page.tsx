import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building2, History, TrendingUp, Wrench, HelpCircle, Leaf, Shield, DollarSign } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Revitalize Your Older Building: Renovation & Reconstruction in Tampa",
  description: "Transform aging commercial properties in Tampa Bay with expert renovation and reconstruction services. Adaptive reuse, building modernization, and historic preservation from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Revitalize Your Older Building", href: "/revitalize-your-older-building-renovation-and-reconstruction/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/commercial-buildings-facade-renovations/", label: "Facade Renovations" },
  { href: "/renovating-vs-new-construction-florida/", label: "Renovation vs. New Construction" },
  { href: "/contact/", label: "Schedule Consultation" },
];

const revitalizationApproaches = [
  { title: "Full Renovation", description: "Comprehensive update while maintaining structural framework", icon: Building2 },
  { title: "Adaptive Reuse", description: "Transform buildings to serve new purposes and markets", icon: TrendingUp },
  { title: "Systems Modernization", description: "Upgrade MEP systems while preserving building character", icon: Wrench },
  { title: "Historic Preservation", description: "Respect and restore period-appropriate features", icon: History },
];

const buildingAgeIssues = [
  {
    era: "Pre-1970s",
    issues: "Asbestos materials, lead paint, inadequate electrical, no hurricane protection, outdated plumbing",
    considerations: "Hazmat abatement, complete systems replacement, significant code upgrades required"
  },
  {
    era: "1970s-1980s",
    issues: "Early EIFS failures, flat roofs, single-pane glass, undersized electrical, R-22 HVAC",
    considerations: "Building envelope improvements, window replacement, electrical capacity expansion"
  },
  {
    era: "1990s",
    issues: "Pre-Hurricane Andrew construction standards, early electronic systems, dated finishes",
    considerations: "Hurricane hardening, technology infrastructure, aesthetic modernization"
  },
  {
    era: "2000s-2010s",
    issues: "Better built but aging systems, outdated floor plans, early sustainable features",
    considerations: "System maintenance/replacement, space optimization, sustainability upgrades"
  },
];

const faqs = [
  {
    question: "When does renovation make sense versus demolition and new construction?",
    answer: "Renovation typically makes sense when: the building is structurally sound, location is excellent, character elements are valuable, timeline is shorter than new construction would allow, zoning/permitting for new construction would be challenging, or demolition costs are high (especially with hazmat). New construction may be preferable when: structural issues are extensive, layout requirements differ dramatically from existing building, current building doesn't maximize site potential, or code compliance costs exceed new construction economics. We help clients evaluate both options with honest cost-benefit analysis."
  },
  {
    question: "What hidden issues commonly arise when renovating older buildings in Tampa?",
    answer: "Common discoveries include: asbestos in older buildings (insulation, flooring, ceiling tiles), lead paint on older surfaces, inadequate electrical service for modern loads, plumbing requiring replacement (galvanized steel, orangeburg), termite damage in wood elements, mold from moisture intrusion, structural issues masked by finishes, and code violations from previous unpermitted work. We recommend thorough pre-renovation assessment including destructive testing in critical areas. Budget 15-20% contingency specifically for unknown conditions."
  },
  {
    question: "How do you handle asbestos and other hazardous materials?",
    answer: "Licensed environmental consultants survey buildings before renovation to identify hazardous materials. When asbestos, lead paint, or other hazmat is found, licensed abatement contractors remove it following EPA/OSHA protocols before general renovation proceeds. Abatement costs vary based on material type and extent—minor asbestos encapsulation might cost $5,000-15,000; extensive abatement can run $50,000-200,000+. These costs should be identified early through survey, not discovered during construction."
  },
  {
    question: "Can older buildings achieve modern energy efficiency?",
    answer: "Absolutely—with investment in appropriate improvements. Key upgrades include: high-performance windows (reducing cooling loads 25-40%), continuous insulation added to walls, cool or reflective roofing (reducing heat gain), LED lighting with controls, modern HVAC with variable speed drives, and building automation systems. Older buildings can often match new construction efficiency, though the investment may be significant. Energy audits identify the highest-impact improvements for your specific building."
  },
  {
    question: "What are the benefits of adaptive reuse versus new construction?",
    answer: "Adaptive reuse offers several advantages: shorter timeline (existing structure accelerates construction), lower cost (typically 20-40% less than new construction), sustainability benefits (embodied energy preservation, reduced landfill), character and authenticity that new buildings can't replicate, and sometimes easier permitting (existing use rights, reduced impact fees). Challenges include design constraints from existing structure and potentially higher systems costs. Many Tampa Bay communities encourage adaptive reuse through incentive programs."
  },
  {
    question: "How do you preserve character while modernizing older buildings?",
    answer: "Successful character preservation begins with identifying what makes the building special—architectural features, materials, proportions, details. We develop renovation designs that protect these elements while integrating modern requirements. Mechanical and electrical systems can be routed discretely. Modern finishes can complement original materials. Technology can be integrated without visual impact. The key is intentional design that respects history while enabling contemporary function."
  },
  {
    question: "What permits and approvals are needed for older building renovation?",
    answer: "Standard commercial permits (building, electrical, mechanical, plumbing) apply to all renovations. Older buildings may face additional requirements: hazmat handling permits if asbestos/lead present, historic review if in designated districts or locally significant, structural engineering review if modifications affect load-bearing elements, and potentially zoning review if use changes. Buildings on historic registers may qualify for tax credits but face design review. We navigate all required approvals as part of project management."
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
            alt="Older building renovation and revitalization in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Revitalize Your Older Building: Expert Renovation & Reconstruction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Tampa Bay's older commercial buildings represent untapped potential. Florida Construction Specialists transforms aging properties into modern, valuable assets through expert renovation and adaptive reuse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Building Assessment
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

      {/* Approaches */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revitalizationApproaches.map((approach, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <approach.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{approach.title}</h3>
                <p className="text-gray-600 text-sm">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              The Case for Revitalizing Older Commercial Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's commercial landscape includes thousands of buildings constructed decades ago—mid-century industrial properties, 1970s office buildings, 1980s retail centers, and countless other structures that predate modern construction standards and contemporary expectations. These buildings often occupy excellent locations in established commercial districts where new construction is difficult or impossible. Yet they struggle to compete with newer properties that offer modern amenities, energy efficiency, and attractive finishes.
            </p>
            <p className="text-gray-600 mb-6">
              Revitalization offers a compelling alternative to demolition and replacement. Done well, it costs less than new construction, completes faster, preserves embodied energy and materials, and often retains architectural character that new buildings cannot replicate. It transforms liabilities into assets, converting struggling properties into competitive market participants.
            </p>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has revitalized hundreds of older Tampa Bay commercial buildings—from modest single-story industrial properties to multi-story office buildings. We understand the unique challenges older buildings present and the strategies that transform them successfully. Our approach balances ambition with pragmatism, delivering revitalized buildings that perform in today's market without unnecessary expense.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding Your Building's Potential
            </h2>
            <p className="text-gray-600 mb-6">
              Every revitalization project begins with honest assessment: What does the building have going for it? What challenges must be overcome? What investment is required, and what return can be expected? Answering these questions requires thorough evaluation of structural systems, building envelope, mechanical/electrical/plumbing infrastructure, and market positioning.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Structural Assessment:</strong> The building's structural system determines what's possible. Concrete and steel frame buildings often accommodate significant reconfiguration. Load-bearing masonry limits options. Structural deficiencies—settling foundations, corroded connections, inadequate load capacity—must be identified and addressed. A licensed structural engineer's evaluation is essential for meaningful revitalization planning.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Building Envelope Evaluation:</strong> Roof, walls, and windows determine energy performance, weather protection, and aesthetics. Older buildings typically have poor thermal performance—single-pane windows, minimal insulation, air infiltration—that drives high utility costs and tenant complaints. Evaluating current condition and upgrade options is central to revitalization planning.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>MEP Systems Evaluation:</strong> Mechanical, electrical, and plumbing systems in older buildings often require significant upgrade or replacement. HVAC systems over 15-20 years old typically operate inefficiently and face reliability concerns. Electrical systems designed for pre-computer era loads often can't support modern demands. Plumbing materials used in earlier decades (galvanized steel, orangeburg pipe) have limited remaining life.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Hazardous Materials Survey:</strong> Buildings constructed before 1980 may contain asbestos in insulation, flooring, ceiling tiles, and other materials. Lead paint is common in pre-1978 buildings. Identifying these materials before renovation begins is essential—discovery during construction creates expensive delays and health risks. Professional environmental surveys should precede renovation planning.
            </p>

            {/* Building Age Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Common Issues by Building Era</h3>
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Building Era</th>
                    <th className="px-6 py-3 text-left">Common Issues</th>
                    <th className="px-6 py-3 text-left">Key Considerations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {buildingAgeIssues.map((era, index) => (
                    <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                      <td className="px-6 py-4 font-medium">{era.era}</td>
                      <td className="px-6 py-4 text-sm">{era.issues}</td>
                      <td className="px-6 py-4 text-sm">{era.considerations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Adaptive Reuse: New Life for Older Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              Adaptive reuse transforms buildings to serve purposes different from their original design. Tampa Bay has seen remarkable adaptive reuse projects: warehouses becoming creative offices, banks becoming restaurants, industrial buildings becoming breweries and event venues. This approach often creates distinctive spaces that new construction cannot replicate.
            </p>
            <p className="text-gray-600 mb-6">
              Successful adaptive reuse requires matching building characteristics with appropriate new uses. High ceilings and open floor plates work well for creative offices and event spaces. Heavy floor loads accommodate restaurants and retail. Interesting architectural features create atmosphere for hospitality and entertainment. Understanding what a building does well guides appropriate new uses.
            </p>
            <p className="text-gray-600 mb-6">
              Zoning and code compliance present adaptive reuse challenges. Changing from industrial to retail, or from office to restaurant, triggers different code requirements for parking, exits, fire suppression, and accessibility. Some changes may require zoning variances or special exceptions. Experienced contractors identify these requirements early and plan accordingly.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Costs and Returns: The Revitalization Economics
            </h2>
            <p className="text-gray-600 mb-6">
              Revitalization costs vary dramatically based on building condition, scope of work, and finish level. Minor cosmetic renovation may cost $30-50 per square foot. Comprehensive revitalization with systems replacement and high-end finishes can exceed $150-200 per square foot. Understanding where your project falls on this spectrum requires detailed assessment and design.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Cost Categories:</strong> Revitalization budgets typically break down as follows: structural work (5-20% depending on condition), building envelope (15-30%), MEP systems (25-40%), interior finishes (20-35%), and soft costs including design, permits, and contingency (15-25%). Older buildings in poor condition skew toward higher structural and systems percentages; newer buildings in good condition allow more investment in finishes.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Return Considerations:</strong> Revitalized buildings typically command significantly higher rents than their pre-renovation state. Class C buildings repositioned to Class B can see rent increases of 30-50%. Buildings repositioned from Class B to Class A may double achievable rents. These increases, combined with reduced vacancy and longer lease terms, often produce strong returns on revitalization investment.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Comparison to New Construction:</strong> Revitalization typically costs 20-40% less than equivalent new construction when the existing structure is sound. It also completes faster—often 6-12 months versus 12-24 months for new construction. However, revitalization may not achieve the same flexibility or efficiency as purpose-built new construction. The right choice depends on specific building conditions, market requirements, and investor objectives.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Revitalization Process
            </h2>
            <p className="text-gray-600 mb-6">
              Successful revitalization follows a disciplined process that addresses older buildings' unique challenges.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Phase 1 - Assessment:</strong> Thorough evaluation of existing conditions including structural engineering, environmental survey, MEP systems analysis, and building envelope investigation. This phase identifies what the building has, what it needs, and what it will cost. Cost: $10,000-50,000 depending on building size and complexity.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Phase 2 - Concept Development:</strong> Based on assessment findings and owner objectives, develop renovation concepts that address identified issues while achieving program goals. Multiple options may be explored before committing to a direction. Cost: typically 2-4% of construction.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Phase 3 - Design and Permitting:</strong> Complete architectural and engineering design, obtain required permits and approvals. For older buildings, this phase often includes hazmat abatement planning and code compliance strategies. Cost: typically 5-10% of construction.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Phase 4 - Construction:</strong> Execute the renovation with attention to older building particularities—protecting existing elements, managing discoveries, coordinating phasing. Experienced contractors anticipate challenges that surprise less experienced teams.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
            Benefits of Building Revitalization
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {[
              "Lower cost than equivalent new construction",
              "Faster completion timeline",
              "Preserve embodied energy and materials",
              "Maintain established location advantages",
              "Retain architectural character",
              "Often easier permitting process",
              "Potential tax incentives for historic buildings",
              "Sustainable alternative to demolition"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
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
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Transform Your Older Building?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists helps Tampa Bay property owners unlock the potential in aging commercial buildings. Schedule a building assessment to explore your revitalization options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Building Assessment
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
