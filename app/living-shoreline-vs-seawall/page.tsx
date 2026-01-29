import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Waves,
  CheckCircle,
  AlertTriangle,
  TreePine,
  ArrowRight,
  Phone,
  HelpCircle,
  Shield,
  Leaf,
  DollarSign,
  Fish,
  Clock,
  Scale,
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
  title: "Living Shoreline vs Traditional Seawall | Tampa Bay Waterfront | FCS",
  description:
    "Compare living shorelines and traditional seawalls for Tampa Bay waterfront properties. Environmental benefits, costs, permits, and which approach suits your property.",
  keywords:
    "living shoreline Tampa Bay, seawall vs living shoreline, natural shoreline stabilization, oyster reef restoration, mangrove planting Tampa, waterfront erosion control Florida",
};

const comparisonTable = [
  {
    factor: "Upfront Cost",
    seawall: "$500-1,500/linear foot",
    livingshore: "$400-1,000/linear foot",
    winner: "Living Shoreline",
    notes: "Living shorelines often less expensive initially; varies by site",
  },
  {
    factor: "Long-term Maintenance",
    seawall: "Repointing, cap repair every 5-10 years; replacement at 30-50 years",
    livingshore: "Plant replacement, debris removal; self-maintaining once established",
    winner: "Living Shoreline",
    notes: "Seawalls require ongoing structural maintenance; living shorelines mature",
  },
  {
    factor: "Storm Protection",
    seawall: "Immediate hard barrier; reflects wave energy",
    livingshore: "Absorbs wave energy; reduces surge; improves over time",
    winner: "Depends",
    notes: "High-energy sites may need hybrid; living shorelines reduce flooding behind",
  },
  {
    factor: "Permitting",
    seawall: "Standard permits; relatively straightforward",
    livingshore: "May qualify for streamlined permits; agency support",
    winner: "Living Shoreline",
    notes: "SWFWMD encourages living shorelines; may have expedited review",
  },
  {
    factor: "Property Value Impact",
    seawall: "Standard waterfront value",
    livingshore: "Increasingly attractive to buyers; eco-friendly premium",
    winner: "Living Shoreline",
    notes: "Market shifting toward sustainable features; varies by buyer pool",
  },
  {
    factor: "Environmental Impact",
    seawall: "Habitat loss; reflected waves can erode neighboring properties",
    livingshore: "Creates habitat; improves water quality; benefits neighbors",
    winner: "Living Shoreline",
    notes: "Living shorelines provide ecosystem services; seawalls disrupt natural processes",
  },
  {
    factor: "Dock Compatibility",
    seawall: "Easy dock integration; consistent edge",
    livingshore: "May need dock modifications; boardwalk access common",
    winner: "Seawall",
    notes: "Active boaters may prefer seawall; living shoreline docks require planning",
  },
  {
    factor: "Sea Level Rise Adaptation",
    seawall: "Fixed height; expensive to raise; eventual failure",
    livingshore: "Adapts naturally; vegetation migrates; builds elevation",
    winner: "Living Shoreline",
    notes: "Living shorelines can grow with rising seas; seawalls become overwhelmed",
  },
];

const livingShorlineTypes = [
  {
    type: "Mangrove Restoration",
    description: "Planting red, black, and white mangroves along shoreline",
    bestFor: "Low to moderate energy shorelines; natural Tampa Bay settings",
    pros: ["Strong storm protection", "Nursery habitat for fish", "Self-propagating", "Legal protection adds permanence"],
    cons: ["3-5 years to full establishment", "View obstruction (red mangroves)", "Trimming restrictions", "Not for high-energy sites"],
    cost: "$50-150/linear foot for planting; higher for site prep",
  },
  {
    type: "Oyster Reef",
    description: "Constructed reef structures that attract oyster colonization",
    bestFor: "Moderate energy; areas with existing oyster populations nearby",
    pros: ["Excellent wave break", "Water filtration", "Attracts fish and crabs", "Grows stronger over time"],
    cons: ["Requires specific water quality", "May need 2-3 years to establish", "Navigation hazard if exposed", "Not for freshwater-influenced areas"],
    cost: "$300-600/linear foot for reef structure and materials",
  },
  {
    type: "Marsh Grass Planting",
    description: "Smooth cordgrass (Spartina) and similar salt marsh plants",
    bestFor: "Low energy; protected bays and canals; transition zones",
    pros: ["Quick establishment", "Filters runoff", "Wildlife habitat", "Soft natural appearance"],
    cons: ["Limited wave energy tolerance", "May need containment structure", "Maintenance trimming", "Debris accumulation"],
    cost: "$40-100/linear foot for planting; add $200+ for containment",
  },
  {
    type: "Hybrid Living Shoreline",
    description: "Combines hard structure (riprap, reef) with vegetation",
    bestFor: "Moderate to high energy sites; properties needing dock access",
    pros: ["Immediate protection from structure", "Long-term benefits from vegetation", "Flexible design", "Best of both approaches"],
    cons: ["Higher cost than either alone", "More complex permitting", "Requires integrated design", "Longer construction timeline"],
    cost: "$600-1,200/linear foot depending on components",
  },
];

const seawallTypes = [
  {
    type: "Concrete Seawall",
    description: "Poured or precast concrete panels with cap",
    bestFor: "High-energy sites; active boating use; narrow lots",
    lifespan: "30-50 years with maintenance",
    pros: ["Strong and durable", "Clean dock edge", "Proven technology", "Repairable"],
    cons: ["Reflects wave energy", "No habitat value", "Requires tiebacks in soft soil", "Expensive to replace"],
    cost: "$500-1,000/linear foot installed",
  },
  {
    type: "Vinyl Sheet Pile",
    description: "Interlocking vinyl panels driven into soil",
    bestFor: "Moderate energy; residential applications; cost-conscious",
    lifespan: "20-30 years",
    pros: ["Lower cost", "Faster installation", "No rust", "Light weight"],
    cons: ["Less strong than concrete", "Can be damaged by impact", "UV degradation over time", "Limited height"],
    cost: "$400-700/linear foot installed",
  },
  {
    type: "Steel Sheet Pile",
    description: "Interlocking steel panels, often vinyl-coated",
    bestFor: "High-energy commercial; deep water; heavy boat traffic",
    lifespan: "40-75 years (coated); 25-40 years (uncoated)",
    pros: ["Very strong", "Deep water capability", "Long lasting with coating", "Reusable in some cases"],
    cons: ["Expensive", "Rust without coating", "Requires heavy equipment", "Potential for galvanic corrosion"],
    cost: "$800-1,500/linear foot installed",
  },
  {
    type: "Riprap Revetment",
    description: "Sloped stone or concrete rubble along shoreline",
    bestFor: "Moderate energy; larger lots; naturalized appearance desired",
    lifespan: "50+ years with proper sizing",
    pros: ["Lower cost", "Dissipates wave energy", "Some habitat value", "Easy to repair"],
    cons: ["Takes more space (sloped)", "Less clean edge for docks", "Debris can accumulate", "May need filter fabric"],
    cost: "$300-600/linear foot depending on stone size",
  },
];

const permitConsiderations = [
  {
    permit: "SWFWMD Environmental Resource Permit",
    seawall: "Standard review; may require mitigation for wetland impacts",
    livingshore: "Often streamlined; may qualify for General Permit",
    timeline: "30-90 days depending on complexity",
  },
  {
    permit: "USACE Section 404/10 Permit",
    seawall: "May require Individual Permit for large projects",
    livingshore: "Often qualifies for Nationwide Permit (faster)",
    timeline: "45-120 days; longer for Individual Permit",
  },
  {
    permit: "City/County Building Permit",
    seawall: "Required for structural seawall",
    livingshore: "May not require building permit (check local rules)",
    timeline: "2-4 weeks typically",
  },
  {
    permit: "Florida DEP Coastal Construction",
    seawall: "Required if seaward of CCCL",
    livingshore: "May be exempt or expedited for restoration",
    timeline: "60-90 days if required",
  },
];

const siteAssessment = [
  {
    factor: "Wave Energy",
    lowEnergy: "Living shoreline ideal",
    moderateEnergy: "Hybrid or enhanced living shoreline",
    highEnergy: "Seawall or substantial hybrid",
    howToAssess: "Observe during storms and high winds; check fetch distance",
  },
  {
    factor: "Boat Wake Exposure",
    lowEnergy: "Living shoreline works well",
    moderateEnergy: "Consider oyster reef or riprap component",
    highEnergy: "Seawall likely necessary",
    howToAssess: "Monitor during peak boating hours; check channel proximity",
  },
  {
    factor: "Existing Conditions",
    lowEnergy: "Natural vegetation present; good for restoration",
    moderateEnergy: "Some erosion; may need stabilization first",
    highEnergy: "Active erosion; immediate protection needed",
    howToAssess: "Compare aerial photos over time; measure erosion rate",
  },
  {
    factor: "Dock/Boat Needs",
    lowEnergy: "Boardwalk or floating dock compatible",
    moderateEnergy: "Fixed dock with setback may work",
    highEnergy: "Seawall edge preferred for active boating",
    howToAssess: "Consider boat size, frequency of use, loading needs",
  },
];

const faqs = [
  {
    question: "What is a living shoreline?",
    answer:
      "A living shoreline is a shoreline stabilization approach that uses natural elements—plants, oyster shells, sand, and sometimes rock structures—to protect against erosion while preserving natural coastal processes. Unlike vertical seawalls that reflect wave energy, living shorelines absorb and dissipate wave energy naturally. In Tampa Bay, common living shoreline components include mangroves, oyster reefs, salt marsh grasses, and hybrid designs that combine natural elements with low-profile structures. Living shorelines provide erosion control while also creating habitat, filtering water, and adapting to sea level rise.",
  },
  {
    question: "Is a living shoreline right for my Tampa Bay property?",
    answer:
      "Living shorelines work best in low to moderate wave energy environments—protected bays, canals, and areas without heavy boat wake. Key factors include: wave fetch (distance wind can generate waves), boat traffic exposure, your dock/boating needs, and existing shoreline conditions. Properties on open Tampa Bay with significant wave action may need hybrid approaches or traditional seawalls. A site assessment can determine the right solution. Many properties that seem too exposed can actually use living shorelines with added wave-break structures like oyster reefs.",
  },
  {
    question: "How much does a living shoreline cost compared to a seawall?",
    answer:
      "Living shorelines typically cost $400-1,000 per linear foot, while seawalls range from $500-1,500+ per linear foot. However, the comparison isn't straightforward. Living shorelines often require less maintenance over time and may qualify for grants or tax incentives. Seawalls need repointing and cap repair every 5-10 years and eventual replacement. When considering 30-year lifecycle costs, living shorelines are often more economical. The biggest cost variable is site preparation—severely eroded shorelines may need stabilization before planting.",
  },
  {
    question: "How long does it take for a living shoreline to provide protection?",
    answer:
      "Living shorelines provide immediate partial protection, with full establishment typically taking 2-5 years. Oyster reefs begin attracting oysters within 6-12 months and provide significant wave reduction within 2 years. Mangroves take 3-5 years to reach functional height but begin stabilizing sediment immediately. Marsh grasses establish quickest, often within one growing season. Hybrid designs with rock or reef structures provide immediate protection while vegetation matures. We design living shorelines to provide protection during establishment, not just after.",
  },
  {
    question: "Can I still have a dock with a living shoreline?",
    answer:
      "Yes, docks are compatible with living shorelines but may require different design approaches. Options include: boardwalks over vegetation to reach water, floating docks anchored beyond the living shoreline, or hybrid designs with a seawall section at the dock and living shoreline elsewhere. The key is planning dock access during the initial design. For active boaters with larger vessels, we often recommend a hybrid approach—living shoreline for most of the property with a hardened section for dock access and boat maneuvering.",
  },
  {
    question: "Are there grants or incentives for living shorelines in Florida?",
    answer:
      "Yes, several programs support living shoreline installation in Tampa Bay. SWFWMD occasionally offers cost-share programs for shoreline restoration. Tampa Bay Estuary Program coordinates regional living shoreline initiatives with potential funding. Some municipalities offer permit fee waivers for living shorelines. NOAA has provided grants through the Coastal Resilience program. Additionally, living shoreline projects may qualify for conservation easements with tax benefits. We help property owners identify applicable programs during project planning. Available funding varies year to year—contact us for current opportunities.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Living Shoreline Vs Seawall", href: "/living-shoreline-vs-seawall/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function LivingShorelineVsSeawallPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Living Shoreline and Seawall Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Waterfront Shoreline Solutions"
        serviceDescription="Expert installation of living shorelines and seawalls for Tampa Bay waterfront properties. Site assessment, design, permitting, and construction for erosion control solutions."
        city="Tampa"
        minPrice="40000"
      />

      
      <ArticleSchema
        headline="Living Shoreline vs Traditional Seawall | Tampa Bay Waterfront | FCS"
        description="Compare living shorelines and traditional seawalls for Tampa Bay waterfront properties. Environmental benefits, costs, permits, and which approach suits your property."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/living-shoreline-vs-seawall/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Waterfront Construction", href: "/residential/" },
          { name: "Living Shoreline vs Seawall", href: "/living-shoreline-vs-seawall/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Construction services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="residential"
              customHubTitle="Waterfront Construction"
              customHubHref="/residential/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Living Shoreline vs Traditional Seawall
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Choosing the right shoreline protection for your Tampa Bay waterfront property.
              Compare costs, environmental impact, and long-term value of each approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Get Shoreline Assessment
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
        </div>
      </section>

      {/* Head-to-Head Comparison */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Head-to-Head Comparison
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How living shorelines and seawalls compare across key factors.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-left font-semibold">Traditional Seawall</th>
                  <th className="px-4 py-3 text-left font-semibold">Living Shoreline</th>
                  <th className="px-4 py-3 text-center font-semibold">Advantage</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr
                    key={row.factor}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {row.factor}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.seawall}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.livingshore}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        row.winner === "Living Shoreline"
                          ? "bg-green-100 text-green-700"
                          : row.winner === "Seawall"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}>
                        {row.winner}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Living Shoreline Types */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Living Shoreline Approaches
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different living shoreline techniques for Tampa Bay conditions.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {livingShorlineTypes.map((type) => (
              <div key={type.type} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold text-brand-green-dark">{type.type}</h3>
                </div>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <p className="text-sm text-brand-gold-dark font-medium mb-3">
                  <strong>Best for:</strong> {type.bestFor}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-xs text-green-600 font-semibold block mb-1">Advantages</span>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs text-yellow-600 font-semibold block mb-1">Considerations</span>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <AlertTriangle className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm font-semibold text-brand-green-dark bg-brand-green-light/30 rounded-lg px-3 py-2">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  {type.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seawall Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Traditional Seawall Options
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            When a seawall is the right choice, here are the common types.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {seawallTypes.map((type) => (
              <div key={type.type} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-brand-green-dark">{type.type}</h3>
                </div>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <p className="text-sm text-gray-500 mb-3">
                  <strong>Best for:</strong> {type.bestFor} | <strong>Lifespan:</strong> {type.lifespan}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-xs text-green-600 font-semibold block mb-1">Advantages</span>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs text-yellow-600 font-semibold block mb-1">Considerations</span>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <AlertTriangle className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-sm font-semibold text-blue-700 bg-blue-50 rounded-lg px-3 py-2">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  {type.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Assessment */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Which Is Right for Your Property?
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Key site factors that determine the best shoreline solution.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-gold text-white">
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-center font-semibold">Low Energy</th>
                  <th className="px-4 py-3 text-center font-semibold">Moderate</th>
                  <th className="px-4 py-3 text-center font-semibold">High Energy</th>
                  <th className="px-4 py-3 text-left font-semibold">How to Assess</th>
                </tr>
              </thead>
              <tbody>
                {siteAssessment.map((item, index) => (
                  <tr
                    key={item.factor}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {item.factor}
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-green-600">{item.lowEnergy}</td>
                    <td className="px-4 py-3 text-center text-sm text-yellow-600">{item.moderateEnergy}</td>
                    <td className="px-4 py-3 text-center text-sm text-red-600">{item.highEnergy}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{item.howToAssess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Permitting Comparison */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Permitting Considerations
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Living shorelines often have permitting advantages in Tampa Bay.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {permitConsiderations.map((permit) => (
              <div key={permit.permit} className="card p-6">
                <h3 className="font-bold text-brand-green-dark mb-3">{permit.permit}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-blue-600 font-semibold block mb-1">Seawall</span>
                    <p className="text-gray-600 text-sm">{permit.seawall}</p>
                  </div>
                  <div>
                    <span className="text-xs text-green-600 font-semibold block mb-1">Living Shoreline</span>
                    <p className="text-gray-600 text-sm">{permit.livingshore}</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {permit.timeline}
                    </p>
                  </div>
                </div>
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
            Related Waterfront Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/seawall-coordination-new-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Seawall Coordination
              </h3>
              <p className="text-gray-600 text-sm">
                Timing seawall work with new home construction.
              </p>
            </Link>
            <Link
              href="/marine-grade-building-materials-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Marine-Grade Materials
              </h3>
              <p className="text-gray-600 text-sm">
                Materials that withstand waterfront environments.
              </p>
            </Link>
            <Link
              href="/davis-islands-custom-home-building/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-gold">
                Davis Islands Building
              </h3>
              <p className="text-gray-600 text-sm">
                Custom home construction on Tampa Bay islands.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Need Help Choosing Your Shoreline Solution?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS provides objective shoreline assessments to help you choose the right
            approach for your property. We install both living shorelines and seawalls—
            our recommendation is based on what works best for your site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Site Assessment
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