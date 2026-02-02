import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Smartphone,
  CheckCircle,
  Home,
  Lightbulb,
  Shield,
  ArrowRight,
  Phone,
  HelpCircle,
  Wifi,
  Thermometer,
  Music,
  Video,
  Lock,
  Zap,
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
  title: "Smart Home Integration for Luxury Estates | Tampa Custom Homes | FCS",
  description:
    "Premium smart home technology integration for luxury custom homes in Tampa Bay. Lighting, climate, security, AV, and whole-home automation systems.",
  keywords:
    "smart home luxury estates Tampa, home automation Tampa Bay, Crestron Savant Control4 Tampa, luxury home technology, whole house automation Florida",
};

const smartHomeSystems = [
  {
    system: "Lighting Control",
    icon: Lightbulb,
    description: "Automated lighting scenes, circadian tuning, landscape lighting control",
    premiumBrands: ["Lutron RadioRA 3", "Lutron HomeWorks", "Ketra"],
    features: [
      "One-touch scenes for any occasion",
      "Automated schedules and astronomical timers",
      "Circadian rhythm lighting for wellness",
      "Integration with shades and AV",
      "Elegant keypads and touchscreens",
    ],
    investmentRange: "$30,000 - $150,000+",
  },
  {
    system: "Climate Control",
    icon: Thermometer,
    description: "Zoned HVAC, radiant floor heating, pool/spa temperature management",
    premiumBrands: ["Savant", "Crestron", "Control4"],
    features: [
      "Room-by-room temperature control",
      "Occupancy-based automation",
      "Humidity management",
      "Integration with window treatments",
      "Energy optimization algorithms",
    ],
    investmentRange: "$15,000 - $75,000+",
  },
  {
    system: "Audio/Video",
    icon: Music,
    description: "Distributed audio, dedicated theaters, outdoor entertainment systems",
    premiumBrands: ["Sonance", "Triad", "James Loudspeaker", "Sony", "JVC"],
    features: [
      "Invisible speakers and subwoofers",
      "4K/8K video distribution",
      "Dedicated home theaters",
      "Outdoor entertainment zones",
      "Multi-room streaming",
    ],
    investmentRange: "$50,000 - $500,000+",
  },
  {
    system: "Security & Access",
    icon: Lock,
    description: "Surveillance, access control, alarm monitoring, video intercom",
    premiumBrands: ["Verkada", "IC Realtime", "2N", "DoorBird"],
    features: [
      "HD surveillance with AI analytics",
      "Biometric and mobile access",
      "Video doorbell and intercom",
      "Perimeter detection",
      "Professional monitoring integration",
    ],
    investmentRange: "$25,000 - $200,000+",
  },
  {
    system: "Motorized Shades",
    icon: Home,
    description: "Automated window treatments, exterior screens, privacy control",
    premiumBrands: ["Lutron Palladiom", "Hunter Douglas PowerView", "Crestron"],
    features: [
      "Silent motors and tracks",
      "Astronomical scheduling",
      "Sun tracking for glare control",
      "Privacy scenes",
      "Hurricane shutter integration",
    ],
    investmentRange: "$40,000 - $200,000+",
  },
  {
    system: "Network Infrastructure",
    icon: Wifi,
    description: "Enterprise-grade networking, whole-home WiFi, equipment rooms",
    premiumBrands: ["Cisco Meraki", "Ubiquiti", "Ruckus", "Access Networks"],
    features: [
      "Commercial-grade routers and switches",
      "Seamless WiFi coverage",
      "Dedicated VLANs for IoT",
      "Remote management capability",
      "Fiber backbone throughout",
    ],
    investmentRange: "$20,000 - $100,000+",
  },
];

const controlPlatforms = [
  {
    platform: "Crestron Home",
    positioning: "Ultra-premium, bespoke systems",
    strengths: "Unlimited customization, commercial-grade reliability, enterprise support",
    considerations: "Highest cost, requires certified dealer/programmer",
    idealFor: "Large estates, clients wanting ultimate performance",
    costRange: "$100,000 - $500,000+",
  },
  {
    platform: "Savant",
    positioning: "Luxury with Apple-like experience",
    strengths: "Elegant interface, strong AV heritage, excellent reliability",
    considerations: "Premium pricing, dealer-only installation",
    idealFor: "Design-conscious clients, entertainment-focused homes",
    costRange: "$75,000 - $350,000+",
  },
  {
    platform: "Control4",
    positioning: "Premium smart home, accessible luxury",
    strengths: "Wide product compatibility, strong dealer network, good value",
    considerations: "Less customizable than Crestron/Savant",
    idealFor: "New construction, clients wanting proven platform",
    costRange: "$50,000 - $200,000+",
  },
  {
    platform: "Lutron RadioRA 3",
    positioning: "Lighting-centric control",
    strengths: "Best-in-class lighting, excellent reliability, simpler integration",
    considerations: "Limited to lighting/shades; needs partner for full automation",
    idealFor: "Lighting-focused projects, retrofit applications",
    costRange: "$30,000 - $150,000",
  },
];

const infrastructureRequirements = [
  {
    requirement: "Dedicated Equipment Room",
    description: "Climate-controlled space for network, AV, and automation equipment",
    specs: "100-300 SF, dedicated HVAC, proper ventilation, secure access",
    whyImportant: "Equipment reliability, service access, noise isolation",
  },
  {
    requirement: "Structured Wiring",
    description: "CAT6A/fiber to every room, dedicated AV pathways",
    specs: "Home runs to rack, 2+ data drops per room, separate AV conduit",
    whyImportant: "Future-proofing, system performance, expansion capability",
  },
  {
    requirement: "Electrical Planning",
    description: "Dedicated circuits for AV, proper outlet placement, dimmer compatibility",
    specs: "Isolated ground circuits, sufficient breaker capacity, UPS provisions",
    whyImportant: "Clean power, equipment protection, code compliance",
  },
  {
    requirement: "Conduit & Pathways",
    description: "Routes for current and future cabling needs",
    specs: "1.5\" minimum conduit, junction boxes at key points, outdoor rated where needed",
    whyImportant: "Retrofit capability, clean installation, maintenance access",
  },
  {
    requirement: "Wireless Access Point Locations",
    description: "Pre-planned WiFi coverage with ceiling-mounted APs",
    specs: "AP every 1,500 SF, ceiling mounting preferred, PoE power",
    whyImportant: "Seamless coverage, aesthetic installation, expandability",
  },
];

const planningTimeline = [
  {
    phase: "Technology Discovery",
    timing: "Before/During Schematic Design",
    activities: [
      "Client lifestyle assessment",
      "System scope definition",
      "Budget development",
      "Integrator selection",
    ],
    deliverable: "Technology scope document",
  },
  {
    phase: "Infrastructure Design",
    timing: "Design Development",
    activities: [
      "Equipment room planning",
      "Structured wiring design",
      "Conduit routing",
      "Electrical coordination",
    ],
    deliverable: "Technology construction drawings",
  },
  {
    phase: "Rough-In",
    timing: "Framing/Pre-Drywall",
    activities: [
      "Conduit installation",
      "Low-voltage wiring",
      "Speaker rough-in",
      "Back box placement",
    ],
    deliverable: "Wiring inspection",
  },
  {
    phase: "Trim-Out",
    timing: "After Paint/Before Flooring",
    activities: [
      "Device installation",
      "Speaker/display mounting",
      "Equipment rack buildout",
      "Initial programming",
    ],
    deliverable: "System functionality",
  },
  {
    phase: "Commissioning",
    timing: "Final Weeks",
    activities: [
      "Scene programming",
      "Client training",
      "Documentation",
      "Punch list completion",
    ],
    deliverable: "Client sign-off",
  },
];

const faqs = [
  {
    question: "How much does a luxury smart home system cost?",
    answer:
      "Luxury smart home systems typically range from $100,000 to $500,000+ for comprehensive whole-home automation. A 5,000 SF luxury home might invest $150,000-$250,000 for lighting, climate, AV, security, and shades with a premium control platform. Larger estates with dedicated theaters, extensive outdoor systems, and commercial-grade infrastructure can exceed $500,000. Budget 3-7% of construction cost as a starting point.",
  },
  {
    question: "When should smart home planning begin in the construction process?",
    answer:
      "Smart home planning should begin during schematic design, ideally before walls are placed. The integrator needs to coordinate equipment room location, wiring pathways, electrical requirements, and device placement with the architect and builder. Waiting until construction starts means compromised installation quality, costly retrofits, and potentially missing opportunities for seamless integration.",
  },
  {
    question: "What's the difference between Crestron, Savant, and Control4?",
    answer:
      "All three are professional-grade platforms, but they differ in approach. Crestron offers unlimited customization and commercial reliability—ideal for complex estates but highest cost. Savant provides a luxury Apple-like experience with excellent AV integration. Control4 offers proven reliability and value—still premium but more accessible. Your integrator can recommend based on your specific priorities.",
  },
  {
    question: "Will my smart home system become obsolete?",
    answer:
      "Quality systems are designed for longevity. Crestron, Savant, and Control4 equipment typically lasts 15-20+ years with proper infrastructure. The key is robust wiring infrastructure—CAT6A and fiber can support technologies not yet invented. Software updates extend system life. Budget for occasional equipment upgrades (every 7-10 years for processors) to maintain peak performance.",
  },
  {
    question: "Do I need a dedicated integrator, or can my builder handle this?",
    answer:
      "For luxury-level systems, a dedicated technology integrator is essential. While builders coordinate low-voltage wiring, programming Crestron/Savant/Control4 systems requires specialized expertise. Look for integrators who are factory-certified, have experience with homes of similar scope, and maintain ongoing service capabilities. The integrator should coordinate closely with your builder throughout construction.",
  },
  {
    question: "What about ongoing service and support?",
    answer:
      "Luxury smart home systems require ongoing support—software updates, programming adjustments, and occasional equipment service. Expect to budget $2,000-$10,000 annually for service agreements, depending on system complexity. Your integrator should offer remote monitoring and support, with local technicians available for on-site service. Discuss support models before selecting your integrator.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Smart Home Integration Luxury Estates", href: "/smart-home-integration-luxury-estates/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function SmartHomeIntegrationLuxuryEstatesPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Smart Home Integration" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Luxury Smart Home Construction"
        serviceDescription="Premium smart home technology integration for luxury custom homes in Tampa Bay. Coordinated infrastructure, equipment rooms, and whole-home automation systems built into new construction."
        city="Tampa"
        minPrice="1000000"
      />
      <ArticleSchema
        headline="Smart Home Integration for Luxury Estates | Tampa Custom Homes | FCS"
        description="Premium smart home technology integration for luxury custom homes in Tampa Bay. Lighting, climate, security, AV, and whole-home automation systems."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/smart-home-integration-luxury-estates/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Luxury Custom Homes", href: "/luxury-custom-homes/" },
          { name: "Smart Home Integration", href: "/smart-home-integration-luxury-estates/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Luxury custom home construction"
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
              customHubTitle="Luxury Custom Homes"
              customHubHref="/luxury-custom-homes/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Smart Home Integration for Luxury Estates
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Building tomorrow&apos;s technology into today&apos;s luxury home.
              Premium automation systems seamlessly integrated during construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Project
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

      {/* Smart Home Systems */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Core Smart Home Systems
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The building blocks of a comprehensive luxury smart home, integrated
            during construction for seamless operation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smartHomeSystems.map((system) => {
              const IconComponent = system.icon;
              return (
                <div key={system.system} className="card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand-green-light rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-green-dark">
                      {system.system}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{system.description}</p>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-gray-500 font-semibold block mb-1">
                        Premium Brands:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {system.premiumBrands.map((brand) => (
                          <span
                            key={brand}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {system.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t">
                      <span className="text-xs text-gray-500">Investment Range:</span>
                      <p className="font-semibold text-brand-green-dark">
                        {system.investmentRange}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Control Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Premium Control Platforms
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The central brain of your smart home. Choosing the right platform is
            a critical decision.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {controlPlatforms.map((platform) => (
              <div key={platform.platform} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-brand-green-dark">
                    {platform.platform}
                  </h3>
                  <span className="text-sm bg-brand-green-light text-brand-green-dark px-3 py-1 rounded-full">
                    {platform.positioning}
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 font-medium">Strengths:</span>
                    <p className="text-gray-700">{platform.strengths}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Considerations:</span>
                    <p className="text-gray-700">{platform.considerations}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 font-medium">Ideal For:</span>
                    <p className="text-brand-green-dark font-medium">{platform.idealFor}</p>
                  </div>
                  <div className="pt-3 border-t">
                    <span className="text-gray-500">Typical Investment:</span>
                    <p className="font-bold text-brand-green-dark">{platform.costRange}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Requirements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Infrastructure Built During Construction
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The foundation of any great smart home is proper infrastructure installed
            during construction—not added later.
          </p>
          <div className="space-y-6">
            {infrastructureRequirements.map((item) => (
              <div
                key={item.requirement}
                className="bg-gray-50 rounded-xl p-6 grid md:grid-cols-4 gap-6"
              >
                <div>
                  <h3 className="font-bold text-brand-green-dark mb-2">
                    {item.requirement}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-xs text-gray-500 font-semibold block mb-1">
                    Specifications:
                  </span>
                  <p className="text-gray-700">{item.specs}</p>
                </div>
                <div className="bg-brand-green-light/30 rounded-lg p-3">
                  <span className="text-xs text-brand-green-dark font-semibold block mb-1">
                    Why It Matters:
                  </span>
                  <p className="text-sm text-gray-700">{item.whyImportant}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Integration Timeline
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            When smart home work happens during the construction process.
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {planningTimeline.map((phase, index) => (
              <div key={phase.phase} className="relative">
                <div className="bg-white rounded-xl p-5 shadow-md h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-brand-green-dark text-sm">
                      {phase.phase}
                    </h3>
                  </div>
                  <p className="text-xs text-brand-gold mb-3">{phase.timing}</p>
                  <ul className="space-y-1 mb-3">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                        <CheckCircle className="w-3 h-3 text-brand-green mt-0.5 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t">
                    <span className="text-xs text-gray-500">Deliverable:</span>
                    <p className="text-xs font-semibold text-brand-green-dark">
                      {phase.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
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

      {/* Related Links */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Luxury Home Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/luxury-custom-homes/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Luxury Custom Homes
              </h3>
              <p className="text-gray-600 text-sm">
                High-end custom home construction in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/residential/waterfront-homes/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Waterfront Homes
              </h3>
              <p className="text-gray-600 text-sm">
                Specialized construction for waterfront estates.
              </p>
            </Link>
            <Link
              href="/residential/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Residential Services
              </h3>
              <p className="text-gray-600 text-sm">
                Complete residential construction services.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Building a Luxury Home with Smart Technology?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS coordinates with leading technology integrators to ensure your
            smart home infrastructure is properly designed and built into your new
            custom home from the start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Discuss Your Project
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