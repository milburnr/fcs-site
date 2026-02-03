import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Phone, CheckCircle, Shield, Lock, Eye, Users, Camera, Fingerprint, HelpCircle, AlertTriangle, Building2, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Office Building Security Tampa | Commercial",
  description: "Expert guide to office building security construction in Tampa Bay. Access control, surveillance, secure entries, and integrated security systems for commercial buildings.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Enhanced Office Building Security", href: "/expert-insights-on-ways-t0-enhanced-office-building-security/" },
];

const internalLinks = [
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/employee-communication-with-office-layout/", label: "Office Layout Design" },
  { href: "/boosting-performance-in-florida-offices-windows/", label: "Office Windows" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Mastering Commercial Construction Design in Florida",
    "href": "/mastering-commercial-construction-design-in-florida/",
    "description": "Learn the ins and outs of architectural design and commercial building design with our comprehensive guide for Florida projects."
  },
  {
    "title": "Benefits of Design-Build for Commercial Projects",
    "href": "/benefits-of-design-build-construction-for-commercial-project/",
    "description": "Discover how design-build delivery streamlines commercial construction with single-source accountability."
  },
  {
    "title": "Commercial Construction Budgeting Tips",
    "href": "/commercial-construction-budgeting-tips-for-florida-specialists/",
    "description": "Expert strategies for developing and managing budgets for commercial construction in Florida."
  },
  {
    "title": "Tips for Commercial Renovation in Florida",
    "href": "/tips-for-commercial-renovation-in-florida/",
    "description": "Key considerations for successful commercial renovation projects in the Sunshine State."
  }
];

const securityLayers = [
  {
    layer: "Perimeter Security",
    description: "First line of defense at property boundaries",
    components: [
      "Controlled vehicle access gates",
      "Perimeter fencing with anti-climb features",
      "Bollards protecting entrances",
      "Landscaping designed for visibility (CPTED)",
      "Exterior lighting coverage",
      "Perimeter cameras",
    ],
    investmentRange: "$50,000 - $500,000+",
  },
  {
    layer: "Building Exterior",
    description: "Protection at the building envelope",
    components: [
      "Secure entry vestibules (man-traps)",
      "High-security door and frame assemblies",
      "Impact/forced-entry resistant glazing",
      "Loading dock security",
      "Emergency exit monitoring",
      "Exterior camera coverage",
    ],
    investmentRange: "$100,000 - $750,000+",
  },
  {
    layer: "Building Interior - Public",
    description: "Control of common areas and circulation",
    components: [
      "Lobby reception and visitor management",
      "Elevator access control",
      "Stairwell door monitoring",
      "Parking garage security",
      "Common area cameras",
      "Intercom and communication systems",
    ],
    investmentRange: "$75,000 - $400,000+",
  },
  {
    layer: "Tenant/Floor Security",
    description: "Access control at the tenant demising line",
    components: [
      "Suite entry access control",
      "After-hours intrusion detection",
      "Internal surveillance",
      "Server room security",
      "Executive area protection",
      "Integration with building systems",
    ],
    investmentRange: "$25,000 - $200,000+ per floor",
  },
];

const accessControlSystems = [
  {
    system: "Card/Fob Access",
    description: "Traditional proximity or smart card readers",
    pros: "Cost-effective, widely understood, easy to manage",
    cons: "Cards can be lost, shared, or cloned",
    cost: "$1,500-3,500/door",
    bestFor: "Standard office applications, budget-conscious projects",
  },
  {
    system: "Mobile Credentials",
    description: "Smartphone-based access using Bluetooth/NFC",
    pros: "Hard to share, always with user, easy remote management",
    cons: "Phone battery dependency, technology learning curve",
    cost: "$2,000-4,500/door",
    bestFor: "Tech-forward companies, high turnover environments",
  },
  {
    system: "Biometric - Fingerprint",
    description: "Fingerprint recognition for positive ID",
    pros: "Can't be shared or forgotten, positive identification",
    cons: "Enrollment required, hygiene concerns post-COVID",
    cost: "$3,000-6,000/door",
    bestFor: "High-security areas, time-attendance integration",
  },
  {
    system: "Biometric - Facial Recognition",
    description: "Camera-based facial identification",
    pros: "Touchless, fast, high accuracy, fraud-resistant",
    cons: "Higher cost, privacy concerns, lighting sensitivity",
    cost: "$5,000-15,000/door",
    bestFor: "Premium applications, high-security requirements",
  },
  {
    system: "Multi-Factor Authentication",
    description: "Combines two or more credential types",
    pros: "Highest security, regulatory compliance",
    cons: "User convenience impact, higher cost",
    cost: "$4,000-10,000/door",
    bestFor: "Data centers, financial institutions, government",
  },
];

const surveillanceSystems = [
  {
    type: "IP Camera Systems",
    description: "Network-based digital cameras with high resolution",
    resolution: "2MP-12MP+ typical",
    storage: "Network Video Recorder (NVR) or cloud",
    features: "Analytics, remote viewing, integration capable",
    cost: "$500-3,000/camera installed",
  },
  {
    type: "Analytics/AI Cameras",
    description: "Cameras with built-in intelligence for threat detection",
    resolution: "4MP-8MP typical",
    storage: "NVR with analytics processing",
    features: "Object detection, facial recognition, behavior analysis",
    cost: "$1,500-5,000/camera installed",
  },
  {
    type: "License Plate Recognition",
    description: "Specialized cameras for vehicle identification",
    resolution: "Optimized for plate capture",
    storage: "Integrated database",
    features: "Vehicle tracking, access integration, watchlists",
    cost: "$3,000-8,000/lane installed",
  },
  {
    type: "Thermal Cameras",
    description: "Heat-sensing cameras for perimeter and low-light",
    resolution: "Lower visible resolution",
    storage: "Standard NVR",
    features: "Night vision, temperature detection, perimeter protection",
    cost: "$2,000-10,000/camera installed",
  },
];

const integrationPoints = [
  {
    system: "Fire Alarm",
    integration: "Unlock doors on alarm, camera review of alarm location",
    benefit: "Life safety compliance, incident documentation",
  },
  {
    system: "HVAC/BAS",
    integration: "Occupancy-based climate control, air handling during lockdown",
    benefit: "Energy savings, shelter-in-place capability",
  },
  {
    system: "Elevator",
    integration: "Floor access control, emergency recall, lockdown",
    benefit: "Vertical access control, emergency response",
  },
  {
    system: "Visitor Management",
    integration: "Credential issuance, host notification, badge printing",
    benefit: "Visitor tracking, security policy enforcement",
  },
  {
    system: "HR/Directory",
    integration: "Automatic provisioning/deprovisioning, org-based access",
    benefit: "Reduced admin, immediate termination access removal",
  },
  {
    system: "Mass Notification",
    integration: "Emergency alerts, lockdown commands, two-way communication",
    benefit: "Coordinated emergency response, accountability",
  },
];

const costEstimates = [
  { category: "Access Control Infrastructure", range: "$50,000-200,000", notes: "Panels, wiring, doors, hardware for typical office building" },
  { category: "Card Readers (per door)", range: "$1,500-4,000", notes: "Reader, controller, door hardware, installation" },
  { category: "Surveillance System", range: "$75,000-300,000", notes: "Cameras, NVR, infrastructure for typical building" },
  { category: "Secure Vestibule (Man-Trap)", range: "$50,000-150,000", notes: "Two-door interlock with associated controls" },
  { category: "Guard Station/Lobby Desk", range: "$25,000-75,000", notes: "Millwork, monitoring equipment, communication" },
  { category: "Server Room Security", range: "$15,000-50,000", notes: "Biometric access, camera, environmental monitoring" },
  { category: "Integration & Software", range: "$25,000-100,000", notes: "Management platform, system integration, licensing" },
  { category: "Annual Maintenance", range: "8-15% of system cost", notes: "Monitoring, updates, preventive maintenance" },
];

const faqs = [
  {
    question: "What security measures provide the best ROI for office buildings?",
    answer: "For most Tampa Bay office buildings, the highest-ROI security investments are: 1) Quality access control at building perimeter and elevator lobbies—prevents unauthorized access and provides audit trail; 2) Visible camera coverage at entries and parking—deters crime and supports incident investigation; 3) Secure visitor management system—controls and tracks non-tenant access; 4) Adequate exterior lighting—one of the most cost-effective crime deterrents. These basics address 80% of security concerns. Advanced systems (biometrics, analytics) add value for specific high-security requirements.",
  },
  {
    question: "How do you balance security with tenant/employee convenience?",
    answer: "The key is layered security that increases with sensitivity. Standard office access should be simple—single card tap at building entry and suite door. Higher-security areas (server rooms, executive suites) warrant additional authentication. Mobile credentials reduce friction further—no cards to carry or forget. Visitor management systems should streamline check-in while capturing required information. The goal is 'appropriate security'—enough to address real risks without creating daily frustration that leads to workarounds.",
  },
  {
    question: "What's the difference between access control and security cameras?",
    answer: "Access control is preventive—it stops unauthorized people from entering. Cameras are detective—they document what happens for investigation and deterrence. Most buildings need both: access control at doors to manage who enters; cameras to monitor common areas, entries, and sensitive locations. They work together: cameras can verify someone at a door before remote unlock; access events can trigger camera recording. Modern platforms integrate both into unified security management.",
  },
  {
    question: "How do building security systems integrate with tenant systems?",
    answer: "Several integration approaches exist: Unified system where building owner provides access control to the tenant demise line and tenants use the same system internally; Separate systems where tenants install their own access control for suite interiors; Federated systems where tenant systems integrate with building systems at defined points (elevator access, after-hours building entry). The approach depends on tenant security requirements, lease terms, and building ownership model. We help owners develop security standards that accommodate various tenant needs.",
  },
  {
    question: "What security considerations apply specifically to Tampa Bay?",
    answer: "Tampa Bay security planning should address: Hurricane preparedness—backup power for security systems, remote monitoring capability, post-storm access management; High-profile tenant protection—Tampa's growing corporate presence attracts attention; Parking structure security—common crime location requiring adequate lighting, cameras, and emergency phones; Visitor volume—tourism and conventions mean higher transient traffic in downtown/Westshore areas. Also consider integration with Tampa PD's network for enhanced response coordination.",
  },
  {
    question: "How much does a comprehensive office building security system cost?",
    answer: "Total security system cost varies widely based on building size and requirements. For a typical 100,000 SF Class A office building: Basic security (card access at entries, modest camera coverage): $150,000-300,000; Moderate security (floor-level access, comprehensive cameras, visitor management): $300,000-600,000; High security (biometrics, analytics, 24/7 monitoring integration): $600,000-1,200,000+. Annual operating costs (monitoring, maintenance, licensing) typically run 10-15% of installed cost. Design security during construction—retrofit installation costs 30-50% more.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Enhanced Office Building Security: Expert Insights"
        description="Expert guide to office building security construction in Tampa Bay. Access control, surveillance, secure entries, and integrated security systems."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Office building security in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Expert Insights on Enhanced Office Building Security
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Protect your Tampa Bay office building with integrated security systems. From access control to surveillance, we design and construct security solutions that protect assets and people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Security Assessment
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
              Office building security has evolved far beyond locks and guards. Today's commercial buildings require integrated systems that control access, monitor activity, respond to incidents, and provide documentation—all while maintaining the welcoming environment tenants and visitors expect.
            </p>
            <p className="text-gray-600 mb-6">
              Tampa Bay's growing office market, with its mix of corporate headquarters, financial services, healthcare, and technology tenants, presents diverse security requirements. Some tenants handle sensitive data requiring strict access controls. Others need visitor-friendly environments for client meetings. Most need both.
            </p>
            <p className="text-gray-600 mb-8">
              This guide covers office building security from a construction perspective: what systems are available, how they integrate, construction considerations, and realistic budgets. Whether you're building new, renovating, or upgrading an existing building's security, understanding these elements helps you make informed decisions that balance protection, convenience, and cost.
            </p>
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Layered Security Approach
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Effective security uses multiple layers, each providing protection and buying time for response.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {securityLayers.map((layer, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-brand-green-dark">{layer.layer}</h3>
                  </div>
                  <span className="text-xs font-semibold text-brand-green bg-brand-green-light/50 px-2 py-1 rounded">
                    {layer.investmentRange}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{layer.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {layer.components.map((component, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {component}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Control Systems */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Access Control Technologies
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the right access control technology based on security requirements, user experience, and budget.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-heading">System Type</th>
                  <th className="px-4 py-4 text-left font-heading">Pros</th>
                  <th className="px-4 py-4 text-left font-heading">Cons</th>
                  <th className="px-4 py-4 text-center font-heading">Cost/Door</th>
                  <th className="px-4 py-4 text-left font-heading">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {accessControlSystems.map((system, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-4">
                      <span className="font-semibold text-brand-green-dark block">{system.system}</span>
                      <span className="text-xs text-gray-500">{system.description}</span>
                    </td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{system.pros}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{system.cons}</td>
                    <td className="px-4 py-4 text-center text-brand-green font-semibold">{system.cost}</td>
                    <td className="px-4 py-4 text-gray-600 text-sm">{system.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Surveillance Systems */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Video Surveillance Options
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Modern surveillance systems provide far more than passive recording.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {surveillanceSystems.map((system, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-8 h-8 text-brand-green" />
                  <h3 className="text-lg font-bold text-brand-green-dark">{system.type}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{system.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Resolution:</span>
                    <span className="font-medium text-gray-700">{system.resolution}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Storage:</span>
                    <span className="font-medium text-gray-700">{system.storage}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Cost:</span>
                    <span className="font-medium text-brand-green">{system.cost}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600"><strong>Features:</strong> {system.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Integration */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-4 font-heading">
            Security System Integration
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
            True building security comes from integrated systems that work together, not siloed technologies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationPoints.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">{item.system}</h3>
                <p className="text-white/80 text-sm mb-3"><strong>Integration:</strong> {item.integration}</p>
                <div className="bg-brand-gold/20 rounded-lg p-3">
                  <p className="text-sm"><strong>Benefit:</strong> {item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Estimates */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Security System Cost Estimates
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Budget guidance for Tampa Bay office building security installations.
          </p>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-brand-green-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Category</th>
                  <th className="px-6 py-4 text-center font-heading">Typical Range</th>
                  <th className="px-6 py-4 text-left font-heading">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costEstimates.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-700">{item.category}</td>
                    <td className="px-6 py-4 text-center text-brand-green font-semibold">{item.range}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Construction Considerations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Security Construction Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-brand-green" />
                  <h3 className="font-bold text-brand-green-dark">New Construction</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Design security early—integrate with architectural plans
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Rough-in conduit and backboxes during construction
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Coordinate door hardware and frame prep
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Plan IT/security room locations for equipment
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Consider future expansion capacity
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-brand-gold" />
                  <h3 className="font-bold text-brand-green-dark">Retrofit/Upgrade</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Survey existing infrastructure and conditions
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Consider wireless options to minimize disruption
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Plan phased implementation for occupied buildings
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Evaluate door and frame condition for hardware
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    Budget 30-50% premium vs. new construction
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-gray-50 rounded-lg px-6"
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
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-gray-50">
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
            Ready to Enhance Your Building's Security?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists designs and installs integrated security systems for Tampa Bay office buildings. Let us assess your needs and develop a solution that protects your assets and people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Security Assessment
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
