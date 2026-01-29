import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Sun, Thermometer, DollarSign, Eye, Building2, HelpCircle, Zap, Wind, Shield } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Office Windows & Performance in Florida | Energy-Efficient Commercial Glazing",
  description: "Boost office productivity and energy efficiency with the right windows for Florida's climate. Guide to commercial glazing, solar heat gain, natural light, and hurricane impact requirements.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Office Windows & Performance", href: "/boosting-performance-in-florida-offices-windows/" },
];

const internalLinks = [
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/employee-communication-with-office-layout/", label: "Office Layout Design" },
  { href: "/expert-insights-on-ways-t0-enhanced-office-building-security/", label: "Office Building Security" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const windowPerformanceMetrics = [
  {
    metric: "Solar Heat Gain Coefficient (SHGC)",
    idealRange: "0.22-0.35",
    description: "Measures how much solar heat passes through. Lower is better for Florida's cooling-dominated climate.",
    floridaImpact: "Critical metric—reducing SHGC from 0.40 to 0.25 can cut cooling loads 15-25%",
  },
  {
    metric: "U-Factor",
    idealRange: "0.28-0.40",
    description: "Measures heat transfer rate. Lower values indicate better insulation.",
    floridaImpact: "Less critical than SHGC in Florida but affects comfort near windows",
  },
  {
    metric: "Visible Light Transmittance (VLT)",
    idealRange: "50-70%",
    description: "Percentage of visible light that passes through. Higher means more daylight.",
    floridaImpact: "Balance against SHGC—high VLT often means higher heat gain",
  },
  {
    metric: "Light-to-Solar Gain Ratio (LSG)",
    idealRange: "1.5-2.0+",
    description: "VLT divided by SHGC. Higher ratio means more light with less heat.",
    floridaImpact: "Key metric for Florida—seek glazing that maximizes light while blocking heat",
  },
];

const glazingTypes = [
  {
    type: "Low-E Coated Glass",
    description: "Microscopic metallic coating that reflects infrared heat while allowing visible light",
    shgc: "0.25-0.40",
    vlt: "50-70%",
    cost: "$35-55/SF installed",
    bestFor: "Standard commercial applications; excellent value",
    floridaNotes: "Specify solar-control Low-E (not just heating-climate Low-E)",
  },
  {
    type: "Spectrally Selective",
    description: "Advanced coatings that precisely filter wavelengths, maximizing light while minimizing heat",
    shgc: "0.22-0.30",
    vlt: "55-70%",
    cost: "$45-75/SF installed",
    bestFor: "High-performance buildings; LEED projects; premium offices",
    floridaNotes: "Ideal for Florida—best LSG ratios available",
  },
  {
    type: "Tinted Glass",
    description: "Color added during manufacturing to absorb solar energy",
    shgc: "0.35-0.55",
    vlt: "30-60%",
    cost: "$25-40/SF installed",
    bestFor: "Budget projects; where natural light is less critical",
    floridaNotes: "Being replaced by Low-E for most applications; absorbs heat into glass",
  },
  {
    type: "Electrochromic (Smart Glass)",
    description: "Electronically tintable glass that adjusts based on conditions or controls",
    shgc: "0.09-0.41",
    vlt: "3-60%",
    cost: "$100-200/SF installed",
    bestFor: "Premium applications; glare-sensitive uses; showcase projects",
    floridaNotes: "Highest performance but significant cost premium; ROI improving",
  },
  {
    type: "Triple-Pane IGU",
    description: "Three glass layers with two insulating air spaces",
    shgc: "0.20-0.30",
    vlt: "50-65%",
    cost: "$55-85/SF installed",
    bestFor: "Ultra-high performance; extreme comfort requirements",
    floridaNotes: "Diminishing returns in Florida vs. double-pane with good Low-E",
  },
];

const productivityBenefits = [
  {
    benefit: "Increased Natural Light",
    impact: "Studies show workers near windows are 15% more productive",
    implementation: "Optimize window-to-wall ratio; use high-VLT glazing; position workstations to share daylight",
  },
  {
    benefit: "Reduced Glare",
    impact: "Screen glare causes eye strain, headaches, and reduced focus",
    implementation: "Spectrally selective glass; interior shading systems; proper workstation orientation",
  },
  {
    benefit: "Thermal Comfort",
    impact: "Employees near drafty or hot windows are distracted and uncomfortable",
    implementation: "High-performance glazing eliminates cold/hot spots near perimeter",
  },
  {
    benefit: "Connection to Outdoors",
    impact: "Views to nature reduce stress and increase satisfaction",
    implementation: "Maximize views with larger windows; avoid excessive tinting that dulls views",
  },
  {
    benefit: "Reduced HVAC Noise",
    impact: "Quieter space improves concentration",
    implementation: "Laminated glass provides sound attenuation; better seals reduce air infiltration noise",
  },
];

const hurricaneRequirements = [
  {
    requirement: "High-Velocity Hurricane Zone (HVHZ)",
    area: "Miami-Dade, Broward counties",
    standard: "Large Missile Impact (9 lb 2x4 at 50 fps) + cyclic pressure",
    notes: "Most stringent requirements; Tampa not in HVHZ but close",
  },
  {
    requirement: "Wind-Borne Debris Region",
    area: "Tampa Bay and most of coastal Florida",
    standard: "Small Missile Impact (2g steel balls at 50 fps) or Large Missile",
    notes: "Impact glazing or approved shutters required within 1 mile of coast",
  },
  {
    requirement: "Basic Wind Zone",
    area: "Interior Florida",
    standard: "Wind pressure resistance per building code",
    notes: "No impact requirement but many owners specify impact anyway",
  },
];

const costAnalysis = [
  { scenario: "Standard Code-Minimum", glazingCost: "$30-40/SF", annualEnergy: "High", tenYearTCO: "$$$", notes: "Meets code but higher operating costs" },
  { scenario: "Good Low-E (SHGC 0.30)", glazingCost: "$40-55/SF", annualEnergy: "Medium", tenYearTCO: "$$", notes: "Best value for most Tampa offices" },
  { scenario: "Premium Spectrally Selective", glazingCost: "$55-75/SF", annualEnergy: "Low", tenYearTCO: "$$", notes: "ROI in 5-8 years vs. standard" },
  { scenario: "Smart/Electrochromic", glazingCost: "$100-200/SF", annualEnergy: "Lowest", tenYearTCO: "$$$$", notes: "Premium applications; ROI 10+ years" },
];

const retrofitOptions = [
  {
    option: "Window Film",
    description: "Applied to existing glass to improve solar performance",
    cost: "$8-15/SF",
    effectiveness: "Can reduce SHGC 10-40%",
    considerations: "May void glass warranty; can cause thermal stress; must be compatible",
  },
  {
    option: "Interior Storm Windows",
    description: "Secondary glazing installed on interior",
    cost: "$15-30/SF",
    effectiveness: "Improves both thermal and acoustic performance",
    considerations: "Maintains existing appearance; requires access for cleaning",
  },
  {
    option: "Full Window Replacement",
    description: "Complete replacement with high-performance units",
    cost: "$40-80/SF",
    effectiveness: "Best performance; meets current codes",
    considerations: "Most disruptive; highest cost; may require structural modifications",
  },
  {
    option: "Exterior Shading",
    description: "Architectural shading devices (fins, louvers, overhangs)",
    cost: "$20-60/SF of glazing",
    effectiveness: "Most effective solar control; blocks heat before it reaches glass",
    considerations: "Changes building appearance; requires structural support; maintenance",
  },
];

const faqs = [
  {
    question: "What is the most important window specification for Florida offices?",
    answer: "Solar Heat Gain Coefficient (SHGC) is the most critical metric for Florida commercial glazing. SHGC measures how much solar heat passes through the window—lower is better for our cooling-dominated climate. Aim for SHGC of 0.25-0.30 for optimal performance. While U-Factor matters for heating climates, in Florida reducing solar heat gain has 3-4x more impact on energy costs than improving insulation. Look for 'solar control' Low-E glass specifically designed for cooling climates.",
  },
  {
    question: "Are impact windows required for Tampa Bay commercial buildings?",
    answer: "It depends on location. Tampa Bay is in Florida's 'Wind-Borne Debris Region' but not the High-Velocity Hurricane Zone (Miami-Dade/Broward). Buildings within 1 mile of the coast or in wind-borne debris areas require impact-resistant glazing OR approved protective systems (shutters). Many Tampa commercial buildings install impact glass regardless of code requirements for insurance benefits, storm protection, and marketing advantages. Check with your local building department for specific requirements.",
  },
  {
    question: "How much can energy-efficient windows save on cooling costs?",
    answer: "High-performance glazing typically reduces cooling-related energy costs by 15-30% compared to code-minimum windows. For a 50,000 SF Tampa office, this can translate to $15,000-30,000 annual savings. The investment typically pays back in 5-8 years through energy savings alone, plus improved comfort, reduced HVAC sizing, and potential incentives. Buildings with high window-to-wall ratios see the greatest savings—some achieving 40%+ cooling cost reductions.",
  },
  {
    question: "Should I specify tinted or Low-E glass for Tampa office buildings?",
    answer: "Low-E (low-emissivity) glass is almost always the better choice for Tampa. While tinted glass is cheaper and blocks some solar heat, it works by absorbing energy—which heats the glass and radiates heat inward. Low-E coatings reflect solar energy before it enters, maintaining cooler glass and better comfort. Low-E also allows higher visible light transmission for the same SHGC, meaning brighter interiors with less heat. Spectrally selective Low-E provides the best performance for Florida's climate.",
  },
  {
    question: "What's the optimal window-to-wall ratio for Florida offices?",
    answer: "Research suggests 30-40% window-to-wall ratio (WWR) optimizes the balance between daylight, views, and energy performance for Florida commercial buildings. Higher ratios increase cooling loads exponentially—a building with 60% WWR may use 40% more cooling energy than one with 40% WWR. However, with high-performance glazing, higher ratios become more feasible. The trend toward more glass is manageable with spectrally selective glazing, but each project should model energy impacts of different WWR options.",
  },
  {
    question: "Can window upgrades help with LEED certification?",
    answer: "Yes, high-performance glazing contributes to multiple LEED credits: Energy and Atmosphere (reduced cooling loads), Indoor Environmental Quality (daylight and views), and potentially Materials and Resources (local sourcing, recycled content). Spectrally selective glazing is particularly valuable because it maximizes daylight while minimizing heat gain—helping achieve both the Daylight credit and energy performance requirements. An energy model can quantify the contribution of different glazing options to your LEED goals.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Boosting Office Performance with Windows in Florida"
        description="Complete guide to commercial window performance in Florida. Learn about glazing types, solar heat gain, energy efficiency, and hurricane requirements for Tampa Bay offices."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Modern office windows in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Boosting Office Performance with Windows in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            The right windows transform your office—reducing energy costs, improving employee productivity, and meeting Florida's hurricane requirements. Here's everything you need to know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              Windows are the most thermally vulnerable component of any building envelope—and in Florida's intense sunshine, they can make or break your energy budget and employee comfort. But properly specified glazing does far more than control heat: it brings in natural light that boosts productivity, provides views that reduce stress, and protects against hurricanes.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay offices face unique challenges. We have some of the highest solar radiation in the country, a long cooling season, and hurricane exposure that requires impact-resistant glazing in many locations. Choosing the right windows requires balancing multiple factors: solar control, daylight quality, views, hurricane protection, and cost.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers everything you need to know about commercial window performance in Florida: key metrics and what they mean, glazing options and their trade-offs, hurricane requirements specific to Tampa Bay, cost analysis showing payback periods, and retrofit options for existing buildings. Whether you're building new or upgrading an older office, understanding window performance helps you make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Window Performance Metrics Explained
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Understanding these metrics helps you specify the right glazing for Florida's climate.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {windowPerformanceMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-brand-green-dark">{metric.metric}</h3>
                  <span className="text-sm font-semibold text-brand-green bg-brand-green-light/50 px-3 py-1 rounded-full">
                    Ideal: {metric.idealRange}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{metric.description}</p>
                <div className="bg-amber-50 rounded-lg p-3">
                  <p className="text-sm text-amber-800"><strong>Florida Impact:</strong> {metric.floridaImpact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glazing Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Glazing Types for Florida Offices
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Compare commercial glazing options with their performance characteristics and costs.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Glazing Type</th>
                  <th className="px-4 py-4 text-center font-heading">SHGC</th>
                  <th className="px-4 py-4 text-center font-heading">VLT</th>
                  <th className="px-4 py-4 text-center font-heading">Cost</th>
                  <th className="px-4 py-4 text-left font-heading">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {glazingTypes.map((type, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-brand-green-dark block">{type.type}</span>
                      <span className="text-xs text-gray-500">{type.description}</span>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-600">{type.shgc}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{type.vlt}</td>
                    <td className="px-4 py-4 text-center text-brand-green font-semibold">{type.cost}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{type.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Productivity Benefits */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            How Windows Impact Employee Productivity
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            Research consistently shows that well-designed windows significantly improve worker performance and satisfaction.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productivityBenefits.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">{item.benefit}</h3>
                <p className="text-brand-gold text-sm mb-3">{item.impact}</p>
                <p className="text-white/80 text-sm"><strong>How:</strong> {item.implementation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hurricane Requirements */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Florida Hurricane Window Requirements
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Understanding wind-borne debris requirements for Tampa Bay commercial construction.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Requirement Zone</th>
                    <th className="px-6 py-4 text-left font-heading">Area</th>
                    <th className="px-6 py-4 text-left font-heading">Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {hurricaneRequirements.map((req, index) => (
                    <tr key={index} className="bg-white">
                      <td className="px-6 py-4 font-semibold text-brand-green-dark">{req.requirement}</td>
                      <td className="px-6 py-4 text-gray-600">{req.area}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        <p>{req.standard}</p>
                        <p className="text-xs text-gray-500 mt-1">{req.notes}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-amber-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">Tampa Bay Impact Glazing Recommendations</h3>
                  <p className="text-gray-700">While not all Tampa Bay locations require impact glazing by code, we recommend it for most commercial applications. Benefits include: insurance premium reductions (often 10-20%), 24/7 protection without deployment, enhanced security against break-ins, and superior sound attenuation. The premium over standard glazing (typically $15-25/SF) often pays back through insurance savings alone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Cost vs. Performance Analysis
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Understanding total cost of ownership helps justify higher-performance glazing investments.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">Scenario</th>
                  <th className="px-4 py-4 text-center font-heading">Glazing Cost</th>
                  <th className="px-4 py-4 text-center font-heading">Annual Energy</th>
                  <th className="px-4 py-4 text-center font-heading">10-Year TCO</th>
                  <th className="px-4 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costAnalysis.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">{item.scenario}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{item.glazingCost}</td>
                    <td className="px-4 py-4 text-center text-gray-600">{item.annualEnergy}</td>
                    <td className="px-4 py-4 text-center text-brand-green font-semibold">{item.tenYearTCO}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Retrofit Options */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Retrofit Options for Existing Buildings
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Improve window performance without full replacement—options for existing Tampa Bay offices.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {retrofitOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{option.option}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Cost</p>
                    <p className="font-semibold text-brand-green">{option.cost}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Effectiveness</p>
                    <p className="font-semibold text-gray-700">{option.effectiveness}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-600"><strong>Considerations:</strong> {option.considerations}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-gray-50">
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

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Office Construction Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Upgrade Your Office Windows?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists helps Tampa Bay businesses select and install high-performance glazing that reduces costs, improves comfort, and meets hurricane requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
