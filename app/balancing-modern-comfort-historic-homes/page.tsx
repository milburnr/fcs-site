import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  Home,
  ArrowRight,
  Phone,
  HelpCircle,
  Thermometer,
  Wifi,
  Lightbulb,
  Shield,
  Zap,
  Wind,
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
  title: "Balancing Modern Comfort in Historic Homes Tampa | FCS Construction",
  description:
    "Add modern amenities to Tampa Bay historic homes without sacrificing character. Expert integration of HVAC, smart home technology, updated kitchens and baths while preserving period authenticity.",
  keywords:
    "modern amenities historic home Tampa, smart home historic house, HVAC historic home Florida, updated kitchen historic house, modern bathroom vintage home, Tampa historic home modernization",
};

const modernizationAreas = [
  {
    area: "Climate Control",
    challenge: "Historic homes lack central HVAC; adding ductwork destroys historic fabric",
    solutions: [
      "Ductless mini-splits with concealed line sets",
      "High-velocity systems with small ductwork",
      "Geothermal for invisible exterior",
      "Radiant floor heating in renovated areas",
    ],
    preservationTips: "Conceal outdoor units; minimize visible interior equipment; use existing chases",
    costRange: "$15,000-$50,000",
  },
  {
    area: "Kitchen Updates",
    challenge: "Original kitchens often small, poorly laid out, with outdated utilities",
    solutions: [
      "Period-inspired cabinetry with modern function",
      "Concealed appliances behind cabinet panels",
      "Upgraded electrical and plumbing within walls",
      "Stone or butcher block counters (period appropriate)",
    ],
    preservationTips: "Maintain original footprint; use unfitted furniture look; preserve butler's pantry",
    costRange: "$50,000-$150,000+",
  },
  {
    area: "Bathroom Modernization",
    challenge: "Single bathroom, inadequate plumbing, outdated fixtures",
    solutions: [
      "Period reproduction fixtures with modern performance",
      "Radiant floor heating under tile",
      "Updated plumbing with minimal wall impact",
      "Additional bathrooms in converted spaces",
    ],
    preservationTips: "Clawfoot tubs and pedestal sinks read historically; conceal modern toilets",
    costRange: "$25,000-$75,000+ per bath",
  },
  {
    area: "Smart Home Technology",
    challenge: "Wiring historic homes for automation without visible alterations",
    solutions: [
      "Wireless smart systems (no new wiring needed)",
      "Smart switches in original switch locations",
      "Concealed speakers and sensors",
      "Integrated security with hidden cameras",
    ],
    preservationTips: "Choose devices that fit period aesthetic; wireless reduces wall penetration",
    costRange: "$5,000-$30,000",
  },
  {
    area: "Lighting",
    challenge: "Inadequate lighting; original fixtures may be gas or minimal electric",
    solutions: [
      "Period reproduction fixtures with LED",
      "Recessed lighting in renovated ceilings only",
      "Under-cabinet and cove lighting",
      "Dimming systems for ambiance",
    ],
    preservationTips: "Rewire original fixtures for safety; avoid recessed in plaster ceilings",
    costRange: "$10,000-$40,000",
  },
  {
    area: "Storage & Organization",
    challenge: "Historic homes often lack closets and storage",
    solutions: [
      "Armoires and furniture storage (period appropriate)",
      "Convert unused space to closets",
      "Built-ins matching original millwork",
      "Attic and basement finishing for storage",
    ],
    preservationTips: "Furniture solutions are reversible; built-ins should match original style",
    costRange: "$5,000-$30,000",
  },
];

const integrationStrategies = [
  {
    strategy: "Invisible Infrastructure",
    description: "Run modern systems through non-visible areas",
    applications: [
      "HVAC in attics and crawl spaces",
      "Wiring through existing conduit and chases",
      "Plumbing behind service walls",
      "Structured wiring in closets and utility areas",
    ],
    benefits: "Zero impact on visible historic fabric",
  },
  {
    strategy: "Period-Appropriate Concealment",
    description: "Hide modern elements behind period-style casework",
    applications: [
      "TV in period cabinet or mirror",
      "Appliances behind cabinet panels",
      "HVAC returns in furniture pieces",
      "Sound systems in built-in cabinetry",
    ],
    benefits: "Modern function with authentic appearance",
  },
  {
    strategy: "Honest Expression",
    description: "Clearly distinguish new from old (Secretary's Standards approach)",
    applications: [
      "Contemporary kitchen in historic shell",
      "Modern addition with compatible but distinct design",
      "New systems visible but well-designed",
      "Glass connections between old and new",
    ],
    benefits: "Future historians can read building evolution",
  },
  {
    strategy: "Reversible Changes",
    description: "Modifications that can be undone without damage",
    applications: [
      "Wireless technology vs. hardwired",
      "Furniture solutions vs. built-ins",
      "Surface-mounted vs. embedded",
      "Mechanical attachments vs. adhesive/permanent",
    ],
    benefits: "Protects options for future owners",
  },
];

const roomByRoomGuide = [
  {
    room: "Living/Parlor",
    preserve: "Fireplace, millwork, plaster details, hardwood floors",
    modernize: "Lighting (period fixtures with LED), climate control (mini-split or high-velocity), outlets (added in baseboards)",
    avoid: "Recessed lighting in plaster ceilings, removing mantels, carpet over hardwood",
  },
  {
    room: "Kitchen",
    preserve: "Original cabinetry if present, butler's pantry, pass-throughs",
    modernize: "Appliances, counters, plumbing/electrical, ventilation, lighting",
    avoid: "Removing walls without structural analysis, oversized appliances, granite in Craftsman",
  },
  {
    room: "Bathroom",
    preserve: "Original tile, clawfoot tub, pedestal sink if in good condition",
    modernize: "Toilet, shower/tub function, plumbing, ventilation, radiant heat",
    avoid: "Removing original tile, jetted tubs in period baths, vessel sinks in traditional homes",
  },
  {
    room: "Bedroom",
    preserve: "Closet configuration (often minimal), ceiling height, windows",
    modernize: "Armoire storage, lighting, outlets, ceiling fan with period style",
    avoid: "Stealing space from other rooms for closets, lowering ceilings for HVAC",
  },
  {
    room: "Dining Room",
    preserve: "Built-in china cabinets, plate rails, wainscoting, light fixtures",
    modernize: "Outlets in floor for table, dimming capability, climate control",
    avoid: "Combining with kitchen (open concept destroys room relationships)",
  },
  {
    room: "Porch",
    preserve: "Columns, railings, ceiling, flooring pattern, swing hooks",
    modernize: "Ceiling fans (period appropriate), lighting, outlets, screening if approved",
    avoid: "Enclosing original porches, vinyl railings, removing original elements",
  },
];

const technologyOptions = [
  {
    category: "Climate",
    options: [
      {
        tech: "Smart Thermostat",
        integration: "Replaces existing thermostat location",
        preservation: "Choose design that fits era; white or wood tones",
        cost: "$200-$500",
      },
      {
        tech: "Zoned Mini-Splits",
        integration: "Individual control per room; concealed lines",
        preservation: "Minimal impact; outdoor unit hidden by landscaping",
        cost: "$3,000-$8,000 per zone",
      },
    ],
  },
  {
    category: "Lighting",
    options: [
      {
        tech: "Smart Switches",
        integration: "Replace in existing switch locations",
        preservation: "Choose styles matching period switch plates",
        cost: "$50-$100 per switch",
      },
      {
        tech: "LED Retrofit Bulbs",
        integration: "Drop into original fixtures",
        preservation: "Zero change to fixtures; improved efficiency",
        cost: "$10-$50 per bulb",
      },
    ],
  },
  {
    category: "Security",
    options: [
      {
        tech: "Wireless Sensors",
        integration: "Adhesive mount on windows/doors",
        preservation: "Reversible; no drilling or wiring",
        cost: "$500-$2,000 for basic system",
      },
      {
        tech: "Video Doorbell",
        integration: "Replaces doorbell button",
        preservation: "Available in period-appropriate finishes",
        cost: "$150-$500",
      },
    ],
  },
  {
    category: "Entertainment",
    options: [
      {
        tech: "Hidden TV",
        integration: "Behind mirror, art, or in cabinet",
        preservation: "Invisible when not in use",
        cost: "$2,000-$10,000 including millwork",
      },
      {
        tech: "Whole-House Audio",
        integration: "Wireless speakers; in-ceiling where appropriate",
        preservation: "Wireless = zero impact; ceiling speakers in renovated areas only",
        cost: "$1,000-$10,000",
      },
    ],
  },
];

const faqs = [
  {
    question: "Can I add central air to my historic home?",
    answer:
      "Yes, but the approach matters. Traditional ducted systems require large ductwork that typically damages historic fabric—chases cut through plaster, soffits covering original ceilings. Better options for historic homes include: ductless mini-splits (small line sets run through inconspicuous locations, individual zones per room), high-velocity systems (2\" flexible ducts fit in wall cavities, small registers nearly invisible), and for larger homes, geothermal systems with small duct distribution. The key is planning routing before installation to minimize visible impact. An experienced HVAC contractor will work with your preservation goals, not against them.",
  },
  {
    question: "How do I add outlets without damaging plaster walls?",
    answer:
      "Adding outlets to plaster walls requires careful technique. Options include: baseboard outlets (mounted in or just above baseboards, wired through wall cavity below), floor outlets (useful for center-of-room furniture), surface raceway (visible but can be painted to match—last resort), and fishing wire through existing wall cavities (an experienced electrician can often run wire without major cutting). Avoid cutting outlet boxes directly into plaster—the vibration can crack surrounding areas. Consider USB outlets to reduce the number of locations needed. Plan outlet locations before any renovation work when walls are open.",
  },
  {
    question: "What kitchen style works in a historic home?",
    answer:
      "Kitchen style should reflect the home's era while accommodating modern function. For Craftsman homes (1900-1930): Shaker or mission-style cabinets, soapstone or butcher block counters, apron-front sinks, visible hardware. For Mediterranean/Spanish (1920s-1930s): arched details, decorative tile, wrought iron hardware. For Colonial Revival: raised panel cabinets, traditional moldings, formal symmetry. For Victorian: unfitted look with furniture-like pieces, open shelving, plate racks. Avoid: frameless European cabinets, waterfall counters, industrial elements (unless the home warrants it). Consider maintaining original footprint rather than blowing out walls—historic room relationships have value.",
  },
  {
    question: "Should I update original bathrooms or preserve them?",
    answer:
      "It depends on condition and your needs. Original bathrooms with intact hex tile floors, subway tile walls, and period fixtures (pedestal sinks, clawfoot tubs) are increasingly valued—consider repair over replacement. For updates: period reproduction fixtures perform like modern ones while looking historic, radiant floor heating can be added under new tile, ventilation and plumbing can be updated within walls, and you can add bathrooms in converted spaces rather than destroying originals. If the original bathroom is deteriorated or you need to add function (shower, better layout), sensitive renovation using appropriate materials maintains character while improving function.",
  },
  {
    question: "Can I make my historic home smart without visible technology?",
    answer:
      "Yes, wireless smart home technology makes invisible integration easier than ever. Strategies include: smart switches that fit in original switch locations (choose simple designs without screens), wireless sensors requiring no wiring (door/window sensors, motion detectors), voice assistants placed discreetly (in cabinets, closets), smart plugs for lamp control (no visible change), and retrofit smart thermostats. The key is choosing systems that don't require display screens or obvious modern devices in visible locations. Some homeowners create a 'tech closet' where all hubs and controllers live, with only wireless signals extending throughout the home.",
  },
  {
    question: "How do I add storage to a historic home with no closets?",
    answer:
      "Historic homes were built when people owned less and used furniture for storage. Approaches include: armoires and wardrobes (period-appropriate, reversible, often beautiful), converting unused space (a small bedroom becomes a walk-in, unused attic becomes seasonal storage), built-in cabinetry matching original millwork (new but appears original when done well), utilizing vertical space (high shelving in closets, attic pull-down stairs), and basement/garage organization systems. Avoid: stealing closet space from significant rooms, cutting into original built-ins, and solutions that change the home's character. Furniture solutions are preferred because they're reversible and appropriate to the era.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Balancing Modern Comfort Historic Homes", href: "/balancing-modern-comfort-historic-homes/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function BalancingModernComfortHistoricHomesPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Home Modernization" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Historic Home Modern Amenities"
        serviceDescription="Integrate modern comfort into Tampa Bay historic homes without sacrificing character. Expert HVAC, smart home, and kitchen/bath updates that respect period authenticity."
        city="Tampa"
        minPrice="10000"
      />

      
      <ArticleSchema
        headline="Balancing Modern Comfort in Historic Homes Tampa | FCS Construction"
        description="Add modern amenities to Tampa Bay historic homes without sacrificing character. Expert integration of HVAC, smart home technology, updated kitchens and baths while preserving period authenticity."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/balancing-modern-comfort-historic-homes/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Historic Preservation", href: "/residential/luxury-home-building/" },
          { name: "Modern Comfort", href: "/balancing-modern-comfort-historic-homes/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-display.webp"
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
              Balancing Modern Comfort in Historic Homes
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Enjoy 21st-century comfort in your Tampa Bay historic home without
              sacrificing the character that makes it special. Expert integration
              of modern systems while preserving period authenticity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Discuss Your Home
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

      {/* Modernization Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Key Modernization Areas
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Where historic homes typically need updates and how to approach them.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {modernizationAreas.map((area) => (
              <div key={area.area} className="card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-brand-green-dark">{area.area}</h3>
                  <span className="text-sm bg-brand-gold-light text-brand-gold-dark px-3 py-1 rounded-full">
                    {area.costRange}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>Challenge:</strong> {area.challenge}
                </p>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-700 text-sm mb-2">Solutions</h4>
                  <ul className="space-y-1">
                    {area.solutions.map((solution, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-brand-gold-dark bg-brand-gold-light/20 rounded p-2">
                  <strong>Preservation:</strong> {area.preservationTips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Integration Strategies
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Four approaches to blending modern and historic.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {integrationStrategies.map((strategy) => (
              <div key={strategy.strategy} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {strategy.strategy}
                </h3>
                <p className="text-gray-600 mb-3">{strategy.description}</p>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-600 text-sm mb-2">Applications</h4>
                  <ul className="space-y-1">
                    {strategy.applications.map((app, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-medium text-brand-gold-dark">
                  Benefit: {strategy.benefits}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room by Room Guide */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Room-by-Room Guide
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            What to preserve, what to modernize, and what to avoid in each space.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-gold text-white">
                  <th className="px-4 py-3 text-left font-semibold">Room</th>
                  <th className="px-4 py-3 text-left font-semibold">Preserve</th>
                  <th className="px-4 py-3 text-left font-semibold">Modernize</th>
                  <th className="px-4 py-3 text-left font-semibold">Avoid</th>
                </tr>
              </thead>
              <tbody>
                {roomByRoomGuide.map((room, index) => (
                  <tr
                    key={room.room}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-4 font-semibold text-brand-green-dark">
                      {room.room}
                    </td>
                    <td className="px-4 py-4 text-green-700 text-sm">{room.preserve}</td>
                    <td className="px-4 py-4 text-brand-gold-dark text-sm">{room.modernize}</td>
                    <td className="px-4 py-4 text-red-700 text-sm">{room.avoid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technology Options */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Smart Technology for Historic Homes
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Modern technology that integrates sensitively with period character.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {technologyOptions.map((cat) => (
              <div key={cat.category} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  {cat.category === "Climate" && <Thermometer className="w-5 h-5" />}
                  {cat.category === "Lighting" && <Lightbulb className="w-5 h-5" />}
                  {cat.category === "Security" && <Shield className="w-5 h-5" />}
                  {cat.category === "Entertainment" && <Wifi className="w-5 h-5" />}
                  {cat.category}
                </h3>
                <div className="space-y-4">
                  {cat.options.map((option) => (
                    <div key={option.tech} className="border-l-2 border-brand-gold pl-3">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-700">{option.tech}</h4>
                        <span className="text-xs text-brand-gold-dark">{option.cost}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{option.integration}</p>
                      <p className="text-xs text-gray-500">{option.preservation}</p>
                    </div>
                  ))}
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
            Related Historic Home Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/renovating-historic-homes-tampa/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Renovating Historic Homes
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive guide to historic renovation.
              </p>
            </Link>
            <Link
              href="/historic-home-energy-efficiency/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Energy Efficiency
              </h3>
              <p className="text-gray-600 text-sm">
                Preservation-friendly energy improvements.
              </p>
            </Link>
            <Link
              href="/tampa-certificate-of-appropriateness/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                COA Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Navigate historic district approvals.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready for Modern Comfort in Your Historic Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS helps Tampa Bay homeowners enjoy every modern convenience while
            preserving the character that makes their historic home special.
            From HVAC to smart home integration, we find solutions that work.
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