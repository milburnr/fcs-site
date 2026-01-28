import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building2, Users, Wifi, Leaf, HelpCircle, Briefcase, Palette, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Office Building Renovation in Tampa | Commercial Office Modernization",
  description: "Transform your Tampa office building with expert renovation services. Lobby upgrades, common area modernization, systems updates, and tenant improvements from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Office Building Renovation in Tampa", href: "/office-building-renovation-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/tampas-premier-commercial-remodeling-contractors/", label: "Commercial Remodeling Contractors" },
  { href: "/smooth-commercial-renovations-solution-in-tampa/", label: "Smooth Occupied Renovations" },
  { href: "/contact/", label: "Get Free Estimate" },
];

const officeRenovationTypes = [
  { title: "Lobby & Common Areas", description: "Create impressive first impressions that attract quality tenants", icon: Building2 },
  { title: "Workspace Modernization", description: "Flexible, collaborative environments for modern work styles", icon: Users },
  { title: "Technology Infrastructure", description: "High-speed connectivity and smart building systems", icon: Wifi },
  { title: "Sustainability Upgrades", description: "Energy efficiency improvements and green certifications", icon: Leaf },
];

const renovationFocusAreas = [
  {
    area: "Lobby & Reception",
    improvements: "Modern finishes, improved lighting, comfortable seating, digital displays, wayfinding",
    impact: "Creates first impression, signals building quality, attracts tenants",
    cost: "$100-250/SF"
  },
  {
    area: "Corridors & Common Areas",
    improvements: "Updated flooring, LED lighting, fresh paint, modern signage",
    impact: "Improves daily tenant experience, maintains building image",
    cost: "$40-80/SF"
  },
  {
    area: "Restrooms",
    improvements: "Modern fixtures, touchless technology, quality finishes, accessibility",
    impact: "Critical amenity expectation, ADA compliance, tenant satisfaction",
    cost: "$200-400/SF"
  },
  {
    area: "Elevator Modernization",
    improvements: "New cab interiors, controls upgrade, improved efficiency",
    impact: "Reliability, energy efficiency, aesthetic improvement",
    cost: "$75,000-200,000/cab"
  },
  {
    area: "HVAC Systems",
    improvements: "High-efficiency equipment, improved controls, better zoning",
    impact: "Tenant comfort, energy costs, environmental compliance",
    cost: "$15-35/SF building area"
  },
  {
    area: "Tenant Spaces",
    improvements: "Open layouts, collaboration areas, private offices, amenity spaces",
    impact: "Attracts tenants, supports higher rents, reduces vacancy",
    cost: "$75-200/SF"
  },
];

const faqs = [
  {
    question: "How do office building renovations affect tenant relationships?",
    answer: "Communication is key. We help property managers develop communication plans that inform tenants well in advance of construction activities, provide regular updates during work, and address concerns promptly. Most tenants appreciate building improvements—especially when they understand the benefits and know disruption will be minimized. We've maintained tenant satisfaction above 90% during major office renovations through careful planning and communication."
  },
  {
    question: "What's the ROI on office building renovation in Tampa?",
    answer: "ROI varies by scope and market conditions, but well-planned Tampa office renovations typically see strong returns. Lobby and common area updates often return $2-3 for every $1 invested through rent increases and vacancy reduction. Energy efficiency improvements pay back in 3-7 years through utility savings. Building repositioning (upgrading Class B to Class A) can increase rents 20-40%. We provide detailed ROI projections during project planning to help justify investment."
  },
  {
    question: "How long does office building renovation typically take?",
    answer: "Timeline depends on scope: Lobby renovation typically takes 6-10 weeks. Common area updates floor-by-floor run 2-4 weeks per floor. Complete building repositioning takes 6-12 months when done comprehensively. Many projects proceed in phases, completing high-impact areas first while planning later phases. We provide detailed schedules during preconstruction that account for tenant coordination and minimize disruption."
  },
  {
    question: "Can office building renovation happen while tenants remain in the building?",
    answer: "Yes—occupied office renovation is our specialty. We use phased construction to renovate one area while others remain operational. Common area work happens after hours or in sections with temporary barriers. Tenant space renovations are coordinated around occupancy. Most Tampa office building renovations maintain 80-90% normal building operations throughout construction. We plan extensively before construction to ensure minimal disruption."
  },
  {
    question: "What office building improvements attract modern tenants?",
    answer: "Today's tenants prioritize: flexible space configurations (open plans with privacy options), technology infrastructure (fiber connectivity, high-speed WiFi, smart building systems), amenities (fitness facilities, outdoor spaces, quality food options), sustainability features (energy efficiency, natural light, green certifications), and building services (responsive management, modern security, package handling). Renovations addressing these priorities command premium rents and attract quality tenants."
  },
  {
    question: "How do we renovate without displacing current tenants?",
    answer: "Strategic phasing is key. We analyze lease terms, identify upcoming vacancies, and schedule renovation to utilize naturally occurring opportunities. Common area work proceeds during low-traffic periods. We can renovate vacant spaces immediately upon turnover. Some tenants may accept temporary arrangements (swing space, schedule accommodations) for building-wide improvements. We develop comprehensive phasing plans that minimize any tenant displacement."
  },
  {
    question: "Should we pursue LEED or other green certification during renovation?",
    answer: "Green certifications can differentiate your building in Tampa's competitive office market, attract environmentally conscious tenants, and potentially command rent premiums. LEED certification costs vary—typically $30,000-100,000 for certification fees plus incremental construction costs—but often pays back through tenant attraction and operating savings. We help evaluate whether certification makes sense for your specific building and market position."
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
            alt="Office building renovation in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Office Building Renovation in Tampa: Modernize for Today's Market
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Tampa's office market demands modern, well-maintained buildings that attract quality tenants and command competitive rents. Florida Construction Specialists transforms aging office properties into market-leading assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Office Renovation Estimate
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

      {/* Renovation Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeRenovationTypes.map((type, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <type.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
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
              The Tampa Bay Office Market Reality
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's office market has transformed dramatically in recent years. Remote work has changed tenant expectations, flight-to-quality has intensified, and buildings must work harder than ever to attract and retain tenants. The winners in this market are buildings that offer modern amenities, efficient operations, and environments where people actually want to work. Older buildings that haven't adapted are struggling with vacancy and declining rents.
            </p>
            <p className="text-gray-600 mb-6">
              Strategic renovation addresses these market realities head-on. It repositions buildings to compete effectively, attracts quality tenants who pay premium rents, and creates spaces that support the hybrid work patterns now common across Tampa Bay businesses. Florida Construction Specialists has helped numerous Tampa office building owners navigate this transition, delivering renovations that transform market positioning and financial performance.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Lobby and Common Area Transformation
            </h2>
            <p className="text-gray-600 mb-6">
              Your lobby creates the first impression for every visitor, prospective tenant, and employee entering your building. Dated lobbies with worn finishes, poor lighting, and outdated aesthetics signal neglect throughout the building—even if tenant spaces are well-maintained. Modern lobbies create arrival experiences that reinforce building quality and tenant prestige.
            </p>
            <p className="text-gray-600 mb-6">
              Effective lobby renovation goes beyond surface finishes. Consider how people actually use lobby space: Is there comfortable seating for visitors? Can someone work productively while waiting? Is wayfinding clear and intuitive? Do digital displays provide useful information? Is the security desk positioned for both effectiveness and welcome? These functional considerations should drive design decisions alongside aesthetics.
            </p>
            <p className="text-gray-600 mb-6">
              Common areas beyond the lobby—corridors, elevator lobbies, restrooms, break areas—also shape tenant experience. Updating these spaces floor-by-floor, often during off-hours, improves tenant satisfaction while demonstrating ongoing building investment.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tenant Space Modernization
            </h2>
            <p className="text-gray-600 mb-6">
              Tenant expectations for office space have evolved dramatically. The pandemic accelerated changes already underway: rejection of dense cubicle farms, demand for collaboration spaces, need for technology integration, and emphasis on employee wellbeing. Buildings offering spec suites that meet these expectations attract tenants faster and at better rents.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Flexible Layouts:</strong> Modern office tenants want flexibility—the ability to reconfigure space as needs change. Demountable wall systems, raised access flooring, and modular furniture systems enable this flexibility. Open floor plates with well-designed private spaces balance collaboration with concentration needs.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Technology Infrastructure:</strong> Every modern office requires robust technology infrastructure: high-speed fiber connectivity, comprehensive WiFi coverage, video conferencing capability, and increasingly, smart building integration. Buildings without adequate technology infrastructure lose tenants to competitors who provide it.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Amenity Spaces:</strong> Building amenities have become competitive differentiators. Fitness facilities, outdoor terraces, quality food options, and collaborative lounges attract tenants and justify rent premiums. These amenities don't require massive investment—thoughtfully designed spaces can provide significant amenity value at reasonable cost.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Office Building Renovation Costs - Tampa Bay 2024</h3>
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Area</th>
                    <th className="px-6 py-3 text-left">Typical Improvements</th>
                    <th className="px-6 py-3 text-left">Cost Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {renovationFocusAreas.map((area, index) => (
                    <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                      <td className="px-6 py-4 font-medium">{area.area}</td>
                      <td className="px-6 py-4 text-sm">{area.improvements}</td>
                      <td className="px-6 py-4">{area.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Building Systems Modernization
            </h2>
            <p className="text-gray-600 mb-6">
              Behind-the-scenes systems—HVAC, electrical, plumbing, fire protection—may not be visible to tenants, but they dramatically affect tenant experience and building operating costs. Outdated systems create comfort complaints, reliability problems, and unnecessarily high utility bills.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>HVAC Modernization:</strong> Tampa's climate demands efficient, reliable HVAC. Systems over 15-20 years old typically operate far below modern efficiency standards. Upgrading to high-efficiency equipment with modern controls can reduce cooling costs 25-40% while improving tenant comfort. Variable refrigerant flow (VRF) systems offer excellent efficiency for office applications.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Lighting Systems:</strong> LED lighting with occupancy sensing and daylight harvesting reduces lighting energy use 50-70% compared to older fluorescent systems. Beyond energy savings, modern lighting improves visual comfort and supports circadian health—increasingly important to quality tenants.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Building Automation:</strong> Smart building systems integrate HVAC, lighting, security, and access control into unified platforms that improve efficiency and tenant experience. These systems enable predictive maintenance, optimize energy use, and provide the data needed for operational improvement.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Repositioning Strategies for Tampa Office Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              Some buildings require more than cosmetic renovation—they need strategic repositioning to compete effectively. Repositioning transforms building market position, moving from Class C to Class B or Class B to Class A through comprehensive improvements.
            </p>
            <p className="text-gray-600 mb-6">
              Successful repositioning requires honest assessment of current market position, clear vision of target position, and investment appropriate to the opportunity. A well-located Class C building might successfully reposition to Class B with lobby renovation, systems upgrades, and select amenity additions. Attempting Class A repositioning without the fundamentals (location, ceiling heights, floor plate efficiency) usually disappoints.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay's diverse submarkets offer different repositioning opportunities. Downtown Tampa's urban setting supports different amenity strategies than suburban Wesley Chapel. West Shore/Westshore offers proximity advantages worth preserving. Understanding submarket dynamics guides effective repositioning.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
            Office Building Renovation Planning Checklist
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {[
              "Assess current competitive position vs. market",
              "Survey tenants on satisfaction and needs",
              "Evaluate building systems condition and remaining life",
              "Analyze lease rollover schedule and occupancy trends",
              "Identify highest-impact improvement opportunities",
              "Develop preliminary budget and ROI projections",
              "Plan phasing to minimize tenant disruption",
              "Consider green certification opportunities",
              "Coordinate with property management on communications",
              "Engage experienced commercial renovation contractor"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
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
            title="Related Commercial Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Transform Your Tampa Office Building?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists helps Tampa Bay office building owners and managers compete effectively through strategic renovation. Contact us to discuss your building's potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Assessment
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
