import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Zap,
  ArrowRight,
  Phone,
  HelpCircle,
  Thermometer,
  Wind,
  Sun,
  DollarSign,
  Leaf,
  Home,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Historic Home Energy Efficiency Tampa | Preservation-Friendly Upgrades | FCS",
  description:
    "Improve energy efficiency in Tampa Bay historic homes without compromising character. Preservation-approved insulation, windows, HVAC, and weatherization solutions for period properties.",
  keywords:
    "historic home energy efficiency Tampa, old house insulation Florida, vintage home HVAC, period house weatherization, Tampa historic district energy upgrades, preservation energy improvements",
};

const energyChallenges = [
  {
    challenge: "Single-Pane Windows",
    issue: "Original windows lose significant energy through glass",
    preservationConcern: "Replacement may violate historic guidelines",
    solution: "Interior storm windows with low-e glass; selective restoration",
    impact: "15-20% heating/cooling savings",
  },
  {
    challenge: "No Wall Insulation",
    issue: "Balloon-frame or plaster walls have no thermal barrier",
    preservationConcern: "Adding insulation may damage historic fabric",
    solution: "Minimally invasive blown-in insulation; attic insulation priority",
    impact: "20-30% HVAC efficiency improvement",
  },
  {
    challenge: "Air Infiltration",
    issue: "Gaps around windows, doors, and penetrations leak conditioned air",
    preservationConcern: "Sealing may trap moisture in walls",
    solution: "Weatherstripping; targeted caulking; breathable air sealing",
    impact: "10-15% energy savings",
  },
  {
    challenge: "Inadequate Attic Insulation",
    issue: "Florida heat radiates through poorly insulated attics",
    preservationConcern: "Adding insulation affects ventilation balance",
    solution: "Blown cellulose or radiant barriers without visible impact",
    impact: "25-35% cooling cost reduction",
  },
  {
    challenge: "Outdated HVAC",
    issue: "Older systems inefficient; may lack zoning for historic layout",
    preservationConcern: "Equipment placement affects exterior appearance",
    solution: "High-efficiency mini-splits; concealed ductwork; strategic placement",
    impact: "30-50% HVAC energy savings",
  },
];

const approvedUpgrades = [
  {
    upgrade: "Interior Storm Windows",
    description: "Secondary glazing inside original windows",
    preservation: "Approved - Reversible, preserves original windows",
    cost: "$150-$400 per window",
    roi: "5-8 year payback",
    diy: "Possible for handy homeowners",
  },
  {
    upgrade: "Attic Insulation",
    description: "Blown cellulose or fiberglass in attic floor",
    preservation: "Approved - Not visible from exterior",
    cost: "$1.50-$3.00/SF installed",
    roi: "2-4 year payback",
    diy: "Yes with rental equipment",
  },
  {
    upgrade: "Weatherstripping",
    description: "Seal gaps around doors and windows",
    preservation: "Approved - Reversible, invisible",
    cost: "$100-$500 per door/window",
    roi: "1-2 year payback",
    diy: "Yes - straightforward DIY",
  },
  {
    upgrade: "Ductless Mini-Splits",
    description: "Zoned heating/cooling without ductwork",
    preservation: "Often approved - Minimal interior impact",
    cost: "$3,000-$8,000 per zone",
    roi: "5-10 year payback vs. window units",
    diy: "No - professional installation required",
  },
  {
    upgrade: "Radiant Barrier",
    description: "Reflective material in attic to block heat",
    preservation: "Approved - Invisible from exterior",
    cost: "$0.50-$1.50/SF installed",
    roi: "3-5 year payback in Florida",
    diy: "Yes - staples to rafters",
  },
  {
    upgrade: "LED Lighting",
    description: "Replace incandescent with period-appropriate LEDs",
    preservation: "Approved - Reversible, reduces heat load",
    cost: "$5-$50 per fixture",
    roi: "1-2 year payback",
    diy: "Yes - simple bulb replacement",
  },
];

const hvacOptions = [
  {
    system: "Ductless Mini-Split",
    bestFor: "Homes without ductwork; zoned comfort",
    efficiency: "SEER 20-30+",
    installation: "Minimal interior impact; outdoor unit concealment key",
    preservationNotes: "May need concealed outdoor unit; interior heads visible",
    cost: "$3,000-$8,000 per zone",
  },
  {
    system: "High-Velocity System",
    bestFor: "Whole-house with minimal ductwork impact",
    efficiency: "SEER 15-20",
    installation: "Small ducts fit in wall cavities and closets",
    preservationNotes: "2\" ducts fit in historic walls; registers nearly invisible",
    cost: "$15,000-$30,000 whole house",
  },
  {
    system: "Geothermal Heat Pump",
    bestFor: "Larger properties with yard space",
    efficiency: "COP 3.5-5.0 (equivalent to SEER 40+)",
    installation: "Ground loop requires excavation or drilling",
    preservationNotes: "No exterior equipment; loop invisible after install",
    cost: "$25,000-$50,000+ installed",
  },
  {
    system: "Upgraded Central AC",
    bestFor: "Homes with existing ductwork",
    efficiency: "SEER 15-26",
    installation: "Replace existing equipment",
    preservationNotes: "Ensure outdoor unit placement follows guidelines",
    cost: "$8,000-$20,000 installed",
  },
];

const windowStrategies = [
  {
    strategy: "Interior Storm Windows",
    description: "Low-profile interior panels with low-e glass",
    pros: ["Preserves original windows", "Reversible", "Good energy savings", "Moderate cost"],
    cons: ["Visible from interior", "Cleaning between layers", "May affect operability"],
    bestFor: "Most historic homes; required in strict districts",
  },
  {
    strategy: "Exterior Storm Windows",
    description: "Traditional storm windows over originals",
    pros: ["Protects original windows", "Reversible", "Traditional appearance possible"],
    cons: ["May not be approved in all districts", "Changes exterior appearance"],
    bestFor: "Vernacular/folk houses; less strict districts",
  },
  {
    strategy: "Window Restoration + Weatherstripping",
    description: "Restore original windows and add weatherstripping",
    pros: ["Maintains authenticity", "Improves operation", "No visual change"],
    cons: ["Limited energy improvement", "Ongoing maintenance needed"],
    bestFor: "Highest-integrity restorations; when storm windows not feasible",
  },
  {
    strategy: "Approved Replacement Windows",
    description: "New windows matching original design with modern efficiency",
    pros: ["Best energy performance", "Reduced maintenance", "Can match original closely"],
    cons: ["Higher cost", "Requires COA approval", "Loss of original fabric"],
    bestFor: "Windows beyond repair; major renovation projects",
  },
];

const insulationApproaches = [
  {
    location: "Attic Floor",
    method: "Blown cellulose or fiberglass",
    rValue: "R-30 to R-60 recommended for Florida",
    considerations: "Don't block soffit vents; maintain air flow",
    preservation: "No impact - not visible",
  },
  {
    location: "Wall Cavities",
    method: "Blown-in dense-pack cellulose",
    rValue: "R-13 to R-15 typical for 2x4 walls",
    considerations: "Small holes drilled from interior or exterior; patch required",
    preservation: "Minimal impact if done carefully",
  },
  {
    location: "Under Floor",
    method: "Batts or spray foam between joists",
    rValue: "R-19 to R-25 recommended",
    considerations: "Access from crawl space; address moisture first",
    preservation: "No impact - not visible",
  },
  {
    location: "Roof Rafters",
    method: "Spray foam for conditioned attic",
    rValue: "R-20 to R-38 depending on depth",
    considerations: "Creates conditioned attic; affects ventilation",
    preservation: "May affect historic attic character",
  },
];

const incentivesPrograms = [
  {
    program: "Federal Historic Tax Credit",
    benefit: "20% of qualified rehabilitation costs",
    requirement: "Income-producing property on National Register",
    notes: "Energy upgrades must meet Secretary's Standards",
  },
  {
    program: "Federal Energy Efficiency Tax Credits",
    benefit: "30% of cost up to $1,200 for certain improvements",
    requirement: "Principal residence; qualifying products",
    notes: "Includes windows, insulation, HVAC, heat pumps",
  },
  {
    program: "TECO Energy Audit",
    benefit: "Free or low-cost professional energy assessment",
    requirement: "TECO customer",
    notes: "Identifies highest-impact improvements",
  },
  {
    program: "TECO Rebates",
    benefit: "$50-$1,400 for qualifying equipment",
    requirement: "TECO customer; qualifying equipment",
    notes: "Heat pumps, smart thermostats, duct sealing",
  },
  {
    program: "Property Assessed Clean Energy (PACE)",
    benefit: "Financing repaid through property taxes",
    requirement: "Property in participating county",
    notes: "Covers energy improvements including HVAC and windows",
  },
];

const faqs = [
  {
    question: "Can I replace windows in a historic home?",
    answer:
      "In most Tampa Bay historic districts, original windows must be repaired rather than replaced if reasonably possible. Replacement requires Certificate of Appropriateness (COA) approval and new windows must match the original in design, proportions, and materials. However, energy improvements are achievable without replacement: interior storm windows (the most commonly approved solution), weatherstripping and restoration of original windows, and exterior storm windows in some districts. If windows are beyond repair, approved replacements must match original profiles, materials (wood strongly preferred), and operation type. Vinyl replacement windows are typically not approved in historic districts. The energy benefit of interior storms approaches that of replacement windows while preserving the historic character.",
  },
  {
    question: "What's the most cost-effective energy upgrade for historic homes?",
    answer:
      "For Tampa Bay's climate, attic insulation and air sealing provide the best return on investment. Florida's intense heat radiates through poorly insulated attics—adding insulation to R-38 or higher can reduce cooling costs 25-35%. Air sealing around doors, windows, and penetrations is low-cost with immediate payback. Combined, these upgrades might cost $2,000-$5,000 and save $500-$800 annually in a typical older home. Radiant barriers are another Florida-specific solution, reflecting heat before it enters the attic. These improvements are invisible from the exterior and don't require COA approval, making them ideal starting points for historic home efficiency.",
  },
  {
    question: "How do I cool a historic home without visible equipment?",
    answer:
      "Several HVAC options minimize visual impact. Ductless mini-splits require small interior heads and can have outdoor units concealed with landscaping or architectural screening. High-velocity systems use 2\" flexible ducts that fit in historic wall cavities with nearly invisible registers. Geothermal heat pumps have no outdoor equipment—the ground loop is buried and invisible after installation. If central AC exists, upgrading to high-efficiency equipment reduces energy use without changing appearance. For outdoor unit placement in historic districts, work with your design professional to identify locations that comply with guidelines while providing adequate equipment access and airflow.",
  },
  {
    question: "Should I insulate the walls of my historic home?",
    answer:
      "Wall insulation is beneficial but requires careful consideration. Dense-pack cellulose blown into wall cavities provides R-13-15 insulation with minimal impact—small holes are drilled and later patched. However: ensure adequate moisture management (historic walls are often designed to breathe), verify that wall cavities are actually empty (some may have debris or original insulation), and use experienced installers who understand historic construction. For homes with irreplaceable interior finishes like original plaster, wall insulation may not be worth the risk. Often, attic and floor insulation combined with air sealing achieves significant improvement without touching walls.",
  },
  {
    question: "Are there tax incentives for energy upgrades to historic homes?",
    answer:
      "Yes, several programs apply. Federal energy efficiency tax credits (Inflation Reduction Act) provide up to 30% credit for qualifying windows, insulation, and HVAC equipment—applicable to any principal residence regardless of historic status. For income-producing historic properties (rentals, offices), the 20% Federal Historic Rehabilitation Tax Credit may cover energy improvements if they meet Secretary of Interior's Standards. TECO offers rebates for heat pumps, smart thermostats, and duct sealing. PACE financing allows energy improvements to be financed through property taxes. Get a professional energy audit (TECO offers free/low-cost audits) to identify which improvements qualify for which incentives.",
  },
  {
    question: "How do I balance energy efficiency with historic authenticity?",
    answer:
      "The key is prioritizing invisible improvements first: attic insulation, air sealing, floor insulation, duct sealing, and equipment efficiency. These provide significant energy savings without affecting historic character. For visible elements like windows, choose reversible solutions (interior storms) over replacement. Use the Secretary of Interior's Standards principle that changes should be reversible when possible. In strict historic districts, work with preservation staff early—they often have experience with energy improvements and can guide compliant solutions. Document existing conditions before any work. Remember that well-maintained historic buildings often performed better than their age suggests due to thoughtful original design—proper maintenance of features like operable windows, shade trees, and porch overhangs contributes to comfort.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historic Home Energy Efficiency", href: "/historic-home-energy-efficiency/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function HistoricHomeEnergyEfficiencyPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Home Energy Efficiency" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Historic Home Energy Upgrades"
        serviceDescription="Improve energy efficiency in Tampa Bay historic homes while preserving character. Preservation-approved insulation, windows, HVAC, and weatherization solutions."
        city="Tampa"
        minPrice="1000"
      />
      <ArticleSchema
        headline="Historic Home Energy Efficiency Tampa | Preservation-Friendly Upgrades | FCS"
        description="Improve energy efficiency in Tampa Bay historic homes without compromising character. Preservation-approved insulation, windows, HVAC, and weatherization solutions for period properties."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/historic-home-energy-efficiency/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Historic Preservation", href: "/residential/luxury-home-building/" },
          { name: "Energy Efficiency", href: "/historic-home-energy-efficiency/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/historic-preservation.jpg"
            alt="Historic building restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="residential"
              customHubTitle="Historic Home Renovation"
              customHubHref="/residential/luxury-home-building/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Historic Home Energy Efficiency
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Improve comfort and reduce energy costs in your Tampa Bay historic
              home without compromising character. Preservation-approved solutions
              that work with your home's historic features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Get Energy Assessment
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary-gold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Challenges */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Energy Challenges in Historic Homes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Common issues and preservation-sensitive solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {energyChallenges.map((item) => (
              <div key={item.challenge} className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-brand-green-dark">{item.challenge}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">{item.issue}</p>
                <p className="text-sm text-yellow-700 bg-yellow-50 rounded p-2 mb-2">
                  <strong>Preservation:</strong> {item.preservationConcern}
                </p>
                <p className="text-sm text-green-700 bg-green-50 rounded p-2 mb-2">
                  <strong>Solution:</strong> {item.solution}
                </p>
                <p className="text-sm font-medium text-brand-gold-dark">
                  Impact: {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approved Upgrades */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Preservation-Approved Upgrades
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Energy improvements that work within historic guidelines.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-gold text-white">
                  <th className="px-4 py-3 text-left font-semibold">Upgrade</th>
                  <th className="px-4 py-3 text-left font-semibold">Description</th>
                  <th className="px-4 py-3 text-center font-semibold">Preservation</th>
                  <th className="px-4 py-3 text-center font-semibold">Cost</th>
                  <th className="px-4 py-3 text-center font-semibold">ROI</th>
                </tr>
              </thead>
              <tbody>
                {approvedUpgrades.map((upgrade, index) => (
                  <tr
                    key={upgrade.upgrade}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">
                      {upgrade.upgrade}
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{upgrade.description}</td>
                    <td className="px-4 py-4 text-center">
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        {upgrade.preservation.split(" - ")[0]}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center text-sm">{upgrade.cost}</td>
                    <td className="px-4 py-4 text-center text-brand-gold-dark font-medium text-sm">
                      {upgrade.roi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HVAC Options */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            HVAC Options for Historic Homes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Efficient heating and cooling with minimal visual impact.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {hvacOptions.map((option) => (
              <div key={option.system} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-brand-green-dark">{option.system}</h3>
                  <span className="text-sm bg-brand-green-light/50 text-brand-green-dark px-3 py-1 rounded-full">
                    {option.efficiency}
                  </span>
                </div>
                <p className="text-brand-gold-dark font-medium text-sm mb-2">
                  Best For: {option.bestFor}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Installation:</strong> {option.installation}
                </p>
                <p className="text-sm text-yellow-700 bg-yellow-50 rounded p-2 mb-2">
                  <strong>Preservation:</strong> {option.preservationNotes}
                </p>
                <p className="text-sm font-medium text-brand-gold-dark">
                  Cost: {option.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Window Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Window Energy Strategies
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Improving window efficiency while preserving historic character.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {windowStrategies.map((strategy) => (
              <div key={strategy.strategy} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {strategy.strategy}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{strategy.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-green-600 block mb-2">Pros</span>
                    <ul className="space-y-1">
                      {strategy.pros.map((pro, i) => (
                        <li key={i} className="text-gray-600 text-xs flex items-start gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <span className="text-xs font-semibold text-yellow-600 block mb-2">Cons</span>
                    <ul className="space-y-1">
                      {strategy.cons.map((con, i) => (
                        <li key={i} className="text-gray-600 text-xs flex items-start gap-1">
                          <AlertTriangle className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-brand-gold-dark bg-brand-gold-light/20 rounded p-2">
                  <strong>Best For:</strong> {strategy.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incentives */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Incentives & Rebate Programs
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Financial assistance for energy improvements.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {incentivesPrograms.map((program) => (
              <div key={program.program} className="card p-6 border-l-4 border-brand-gold">
                <h3 className="font-bold text-brand-green-dark mb-2">{program.program}</h3>
                <p className="text-brand-gold-dark font-medium mb-2">{program.benefit}</p>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Requirement:</strong> {program.requirement}
                </p>
                <p className="text-xs text-gray-500 bg-gray-50 rounded p-2">
                  {program.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-green-dark hover:no-underline py-4">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Historic Home Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/tampa-certificate-of-appropriateness/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                COA Application Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Navigate historic review for energy upgrades.
              </p>
            </Link>
            <Link
              href="/sourcing-historic-materials-tampa-bay/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Sourcing Historic Materials
              </h3>
              <p className="text-gray-600 text-sm">
                Find appropriate materials for your historic home.
              </p>
            </Link>
            <Link
              href="/hyde-park-renovation-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Hyde Park Renovation Guide
              </h3>
              <p className="text-gray-600 text-sm">
                District-specific guidelines for Tampa's historic neighborhoods.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Improve Your Historic Home's Efficiency
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS helps Tampa Bay historic homeowners achieve modern comfort
            without sacrificing character. From energy assessments to
            preservation-approved upgrades, we balance efficiency with authenticity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-gold-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}