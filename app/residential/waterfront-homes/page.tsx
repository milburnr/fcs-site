import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Waves, CheckCircle, Anchor, Shield, Phone, HelpCircle, Clock, DollarSign, FileText, Ship } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Waterfront Home Construction Tampa | Seawall & Coastal Resilience | FCS",
  description:
    "Luxury waterfront home construction in Tampa Bay. Seawall coordination, marine-grade materials, flood zone compliance. Davis Islands, Harbour Island specialists.",
  keywords:
    "waterfront home construction Tampa, seawall construction, coastal home builder, Davis Islands builder, flood zone construction, marine-grade materials",
};

const features = [
  {
    title: "Seawall Coordination",
    description: "Expert coordination with seawall contractors for new construction and repairs",
    icon: Anchor,
  },
  {
    title: "Marine-Grade Materials",
    description: "Salt-resistant finishes, stainless hardware, and materials built for coastal exposure",
    icon: Shield,
  },
  {
    title: "Flood Zone Expertise",
    description: "FEMA compliance, elevation certificates, and breakaway wall construction",
    icon: Waves,
  },
  {
    title: "Hurricane Resilience",
    description: "Impact windows, reinforced construction, and wind-resistant design",
    icon: CheckCircle,
  },
];

const premiumLocations = [
  { name: "Davis Islands", description: "Tampa's most exclusive island community" },
  { name: "Harbour Island", description: "Downtown waterfront living" },
  { name: "Beach Park", description: "Bayshore Boulevard prestige" },
  { name: "Culbreath Isles", description: "Private waterfront enclave" },
  { name: "Apollo Beach", description: "Growing waterfront community" },
  { name: "Clearwater Beach", description: "Gulf Coast luxury" },
];

const seawallServices = [
  "Assessment of existing seawall condition",
  "Coordination with marine contractors for repairs or new installation",
  "Proper setbacks and foundation design",
  "Drainage and stormwater management",
  "Living shoreline alternatives where appropriate",
  "Permitting through SWFWMD and Army Corps",
];

const marineMaterials = [
  "316 stainless steel hardware",
  "Fiber cement and PVC trim",
  "Epoxy-coated rebar",
  "Impact-rated windows and doors",
  "Salt-resistant exterior finishes",
  "Elevated HVAC equipment",
];

const buildTimeline = [
  {
    phase: "Pre-Construction & Permitting",
    duration: "3-5 months",
    description: "Site survey, environmental assessment, seawall inspection, FEMA elevation determination, City of Tampa permits, SWFWMD permits, Army Corps review if applicable",
  },
  {
    phase: "Site Preparation",
    duration: "3-4 weeks",
    description: "Demolition of existing structure (if applicable), seawall repair or replacement coordination, temporary erosion control, site grading and fill",
  },
  {
    phase: "Foundation & Structure",
    duration: "8-12 weeks",
    description: "Elevated foundation construction (piles or stem walls), concrete block or steel frame, second-floor framing, roof structure installation",
  },
  {
    phase: "Exterior Envelope",
    duration: "6-8 weeks",
    description: "Impact windows and doors, roofing with enhanced wind ratings, stucco or fiber cement siding, waterproofing and flashing",
  },
  {
    phase: "MEP & Interior Rough-In",
    duration: "6-8 weeks",
    description: "Elevated electrical panels, corrosion-resistant plumbing, high-efficiency HVAC with elevated condensers, low-voltage wiring",
  },
  {
    phase: "Interior Finishes",
    duration: "8-10 weeks",
    description: "Luxury finishes, custom millwork, moisture-resistant materials in lower levels, marine-grade hardware throughout",
  },
  {
    phase: "Exterior & Landscaping",
    duration: "4-6 weeks",
    description: "Pool and outdoor living areas, dock construction (separate permit), seawall cap and finishes, salt-tolerant landscaping",
  },
];

const permitInfo = [
  {
    permit: "City of Tampa Building Permit",
    timeline: "4-8 weeks",
    description: "Standard building permit with waterfront-specific requirements",
  },
  {
    permit: "SWFWMD Environmental Resource Permit",
    timeline: "6-12 weeks",
    description: "Required for work near water, stormwater management, and wetland impacts",
  },
  {
    permit: "Army Corps Section 10 Permit",
    timeline: "3-6 months",
    description: "Required for any work in navigable waters (seawalls, docks, boat lifts)",
  },
  {
    permit: "FEMA Elevation Certificate",
    timeline: "2-4 weeks",
    description: "Documents finished floor elevation relative to Base Flood Elevation",
  },
  {
    permit: "Dock/Boat Lift Permit",
    timeline: "8-16 weeks",
    description: "Separate permit for docks, requiring submerged land lease from state",
  },
];

const faqs = [
  {
    question: "How much does it cost to build a waterfront home in Tampa Bay?",
    answer: "Waterfront construction in Tampa Bay typically starts at $450-500 per square foot for quality construction with marine-grade materials. Premium finishes, complex sites, or extensive outdoor living can push costs to $600-800+ per square foot. The additional costs over inland construction include: elevated foundations ($50-100K+), impact windows throughout ($80-150K), marine-grade materials (15-20% premium), and enhanced permitting requirements. A 4,000 SF waterfront home typically ranges from $2M-3.5M depending on lot conditions and finishes."
  },
  {
    question: "What's involved in seawall coordination for new construction?",
    answer: "Before building, we assess your existing seawall's condition and remaining lifespan. If repairs are needed, we coordinate with licensed marine contractors to complete the work before home construction begins. For new seawalls, we manage the permitting process through SWFWMD and Army Corps (3-6 months), oversee installation, and ensure proper setbacks for your new foundation. Building behind a failing seawall risks foundation damage and flooding—we address this upfront."
  },
  {
    question: "How long does it take to build a waterfront home?",
    answer: "Plan for 14-20 months from design start to move-in. The permitting phase alone takes 3-5 months due to multiple agency reviews (City, SWFWMD, Army Corps). Construction runs 10-14 months depending on home size and site complexity. Seawall work, if needed, adds 2-3 months. Dock and boat lift permits run on a separate timeline and can take 4-6 months. We recommend starting the design/permit process while closing on your waterfront lot."
  },
  {
    question: "What flood zone requirements affect waterfront construction?",
    answer: "Most Tampa Bay waterfront is in AE or VE flood zones, requiring the lowest habitable floor to be above Base Flood Elevation (BFE). In VE zones (velocity/wave action), the structure must be on piles or columns with breakaway walls below BFE. We design to exceed minimum FEMA requirements—typically 1-2 feet above BFE—for better insurance rates and future-proofing against sea level rise. Post-construction, we provide the Elevation Certificate required for flood insurance."
  },
  {
    question: "Can I build a dock and boat lift with my new home?",
    answer: "Yes, but docks require separate permits from the home. You'll need: a City of Tampa dock permit, SWFWMD Environmental Resource Permit, Army Corps Section 10 permit, and a submerged land lease from Florida DEP if extending beyond your riparian rights. The process takes 4-6 months and limits dock size based on waterway width and adjacent property lines. We coordinate dock construction timing with the home build but recommend starting dock permits early."
  },
  {
    question: "What makes marine-grade construction different?",
    answer: "Salt air corrodes standard materials quickly. Marine-grade construction uses: 316 stainless steel (not 304) for all exterior hardware, hot-dip galvanized structural connectors, fiber cement or PVC trim instead of wood, epoxy-coated rebar in concrete, aluminum or fiberglass dock hardware, and salt-resistant exterior paints and finishes. The initial cost premium of 15-20% pays for itself in reduced maintenance and longer lifespan. Standard materials fail within 5-10 years on the waterfront."
  },
  {
    question: "How do you handle hurricanes and storm surge?",
    answer: "Beyond meeting Florida Building Code wind requirements (150+ mph in Tampa Bay), we build to exceed code: impact windows and doors throughout (not just shutters), reinforced roof-to-wall connections, elevated HVAC and electrical equipment, flood vents in lower enclosed areas, backup generator provisions, and concrete block or steel construction. For storm surge, elevated construction keeps living space above predicted surge levels. We also consult with clients on evacuation-vs-shelter planning based on their specific site."
  },
];

const investmentGuidance = [
  {
    title: "Land Acquisition",
    description: "Waterfront lots in premium Tampa Bay locations range from $500K to $3M+. Key factors: seawall condition, water depth/access, flood zone, lot dimensions, and view. Always get a seawall inspection before purchasing—repairs can cost $500-1,500 per linear foot.",
  },
  {
    title: "Construction Financing",
    description: "Most lenders require 20-25% down for construction loans on waterfront properties due to higher risk. Interest-only payments during construction, then convert to permanent mortgage. Shop lenders familiar with Tampa Bay waterfront—they understand the timeline and permit complexity.",
  },
  {
    title: "Insurance Considerations",
    description: "Flood insurance is required (and expensive) on the waterfront. Building above BFE significantly reduces premiums. Windstorm insurance is separate from homeowners in many cases. Budget $15,000-40,000 annually for waterfront home insurance depending on elevation, construction type, and coverage limits.",
  },
  {
    title: "ROI & Resale",
    description: "Waterfront homes in Tampa Bay appreciate faster than inland properties and are more recession-resistant. Quality construction with marine-grade materials commands premium resale prices. Boat access, dock, and water depth are major value drivers—open bay access is worth more than canal-only properties.",
  },
];

export default function WaterfrontHomesPage() {
  const breadcrumbItems = [
    { name: "Residential", href: "/residential/" },
    { name: "Waterfront Resilience", href: "/residential/waterfront-homes/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" service="Waterfront Home Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Waterfront Home Construction"
        serviceDescription="Luxury waterfront home construction with seawall coordination and coastal resilience in Tampa Bay"
        minPrice="1000000"
      />
      <FAQSchema faqs={faqs} />

      {/* Luxury Background Gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 0%, rgba(201, 169, 110, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 80%, rgba(201, 169, 110, 0.05) 0%, transparent 50%),
              #0c0c0c
            `
          }}
        />
      </div>

      <Breadcrumb items={breadcrumbItems} className="!bg-transparent !border-none [&_*]:!text-[#888888] [&_a:hover]:!text-[#c9a96e]" />

      {/* Hero Section */}
      <section className="min-h-[70vh] relative flex items-center py-20">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/wp-content/uploads/2024/01/Custom-home-2-rotated-1.jpg"
            alt="Luxury waterfront estate at sunset"
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, 
                rgba(12,12,12,1) 0%, 
                rgba(12,12,12,0.85) 30%,
                rgba(12,12,12,0.4) 60%,
                rgba(12,12,12,0.3) 100%
              )`
            }}
          />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="flex items-center gap-4 mb-8">
            <Waves className="w-8 h-8" style={{ color: '#c9a96e' }} />
            <span 
              className="text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full"
              style={{ backgroundColor: 'rgba(201, 169, 110, 0.15)', color: '#c9a96e' }}
            >
              Waterfront Living
            </span>
          </div>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 max-w-4xl leading-[1.1]"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Waterfront Homes Built for <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Generations</em>
          </h1>
          <p 
            className="text-lg mb-10 max-w-2xl leading-relaxed"
            style={{ color: '#888888' }}
          >
            Build your waterfront dream home with experts who understand Tampa Bay's unique coastal challenges. 
            From seawall coordination to hurricane resilience, we build homes that stand the test of time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-400 hover:-translate-y-0.5"
              style={{ 
                backgroundColor: '#c9a96e',
                color: '#0c0c0c'
              }}
            >
              Schedule Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-300 border hover:border-[#c9a96e] hover:text-[#c9a96e]"
              style={{ 
                backgroundColor: 'transparent',
                color: '#f5f5f5',
                borderColor: 'rgba(255,255,255,0.2)'
              }}
            >
              <Phone className="w-4 h-4" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl mb-16 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Waterfront Construction <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Expertise</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title} 
                  className="p-8 rounded-sm transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    backgroundColor: 'rgba(201, 169, 110, 0.05)',
                    border: '1px solid rgba(201, 169, 110, 0.1)'
                  }}
                >
                  <Icon className="w-10 h-10 mb-6" style={{ color: '#c9a96e' }} />
                  <h3 
                    className="text-lg font-medium mb-3"
                    style={{ color: '#f5f5f5' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seawall Section */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: '#c9a96e' }}
            >
              Coastal Infrastructure
            </p>
            <h2 
              className="text-3xl md:text-4xl mb-8"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em'
              }}
            >
              Seawall Coordination for <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>New Construction</em>
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#888888' }}>
              Building on Tampa Bay's waterfront requires careful coordination with seawall infrastructure. 
              Whether you're building behind an existing seawall or need new construction, we manage the entire process.
            </p>
            <div className="space-y-4">
              {seawallServices.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#c9a96e' }} />
                  <span style={{ color: '#c0c0c0' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div 
            className="p-10 rounded-sm"
            style={{ 
              backgroundColor: 'rgba(201, 169, 110, 0.05)',
              border: '1px solid rgba(201, 169, 110, 0.15)'
            }}
          >
            <h3 
              className="text-xl mb-6"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5'
              }}
            >
              Marine-Grade Construction
            </h3>
            <p className="mb-6" style={{ color: '#888888' }}>
              Salt air, humidity, and storm exposure demand materials built for coastal environments:
            </p>
            <ul className="space-y-3">
              {marineMaterials.map((item, index) => (
                <li key={index} className="flex items-center gap-3" style={{ color: '#c0c0c0' }}>
                  <Anchor className="w-4 h-4" style={{ color: '#c9a96e' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Build Timeline Section */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Construction Process
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-6 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Waterfront Build <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Timeline</em>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            Waterfront construction requires more time than inland builds due to permitting complexity
            and specialized construction techniques. Here's what to expect:
          </p>
          
          <div className="space-y-6">
            {buildTimeline.map((phase, index) => (
              <div 
                key={index}
                className="p-6 rounded-sm flex flex-col md:flex-row md:items-start gap-4"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <div className="flex items-center gap-4 md:w-64 shrink-0">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: '#c9a96e', color: '#0c0c0c' }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium" style={{ color: '#f5f5f5' }}>{phase.phase}</h3>
                    <p className="text-sm" style={{ color: '#c9a96e' }}>{phase.duration}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#888888' }}>
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          <div 
            className="mt-12 p-8 rounded-sm text-center"
            style={{ 
              backgroundColor: 'rgba(201, 169, 110, 0.08)',
              border: '1px solid rgba(201, 169, 110, 0.2)'
            }}
          >
            <Clock className="w-8 h-8 mx-auto mb-4" style={{ color: '#c9a96e' }} />
            <h3 
              className="text-xl mb-2"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5'
              }}
            >
              Total Timeline: 14-20 Months
            </h3>
            <p style={{ color: '#888888' }}>
              From initial design through move-in, including permitting and construction
            </p>
          </div>
        </div>
      </section>

      {/* Permits & Regulatory Section */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Regulatory Navigation
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-6 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Permits & <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Approvals</em>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            Waterfront construction involves multiple agencies. We navigate this complexity so you don't have to.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {permitInfo.map((permit, index) => (
              <div 
                key={index}
                className="p-6 rounded-sm"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <FileText className="w-8 h-8 mb-4" style={{ color: '#c9a96e' }} />
                <h3 className="font-medium mb-2" style={{ color: '#f5f5f5' }}>{permit.permit}</h3>
                <p className="text-sm mb-3" style={{ color: '#c9a96e' }}>Timeline: {permit.timeline}</p>
                <p className="text-sm" style={{ color: '#888888' }}>{permit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Guidance Section */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Financial Planning
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-6 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Investment <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Guidance</em>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            Waterfront homes are significant investments. Understanding the financial landscape helps you plan effectively.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentGuidance.map((item, index) => (
              <div 
                key={index}
                className="p-8 rounded-sm"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.05)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <DollarSign className="w-8 h-8 mb-4" style={{ color: '#c9a96e' }} />
                <h3 
                  className="text-xl mb-4"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5'
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Locations */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Where We Build
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-16 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Tampa Bay's Premier <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Waterfront Communities</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumLocations.map((location) => (
              <div
                key={location.name}
                className="p-8 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <Waves className="w-8 h-8 mx-auto mb-4" style={{ color: '#c9a96e' }} />
                <h3 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5'
                  }}
                >
                  {location.name}
                </h3>
                <p className="text-sm" style={{ color: '#888888' }}>{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-4xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Common Questions
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-16 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Waterfront Construction <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>FAQs</em>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-sm px-6"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <AccordionTrigger 
                  className="text-left font-medium hover:no-underline py-6"
                  style={{ color: '#f5f5f5' }}
                >
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#c9a96e' }} />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-8" style={{ color: '#888888' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-24 px-8 relative"
        style={{ 
          background: 'linear-gradient(135deg, rgba(201, 169, 110, 0.15) 0%, rgba(201, 169, 110, 0.05) 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl mb-6"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Build Your Waterfront <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Legacy</em>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            From Davis Islands to Clearwater Beach, FCS builds waterfront homes designed to 
            withstand Tampa Bay's unique coastal environment.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-400 hover:-translate-y-0.5"
            style={{ 
              backgroundColor: '#c9a96e',
              color: '#0c0c0c'
            }}
          >
            Schedule Waterfront Consultation
          </Link>
        </div>
      </section>

      {/* Back to Residential */}
      <section className="py-12 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/residential/"
            className="inline-flex items-center gap-2 text-sm tracking-wide transition-colors hover:text-[#c9a96e]"
            style={{ color: '#888888' }}
          >
            ← Back to Lifetime Custom Homes
          </Link>
        </div>
      </section>
    </>
  );
}
