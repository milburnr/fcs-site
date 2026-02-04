import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Landmark, CheckCircle, FileText, Home, Phone, HelpCircle, Clock, Award, DollarSign, Hammer } from "lucide-react";
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
  title: "Historic Home Preservation Tampa | Hyde Park",
  description:
    "Residential historic preservation in Tampa Bay. Hyde Park ARC compliance, South Tampa historic districts, period-accurate restoration. Certificate of appropriateness specialists.",
  keywords:
    "historic home preservation Tampa, Hyde Park renovation, South Tampa historic homes, certificate of appropriateness, ARC guidelines Tampa",
};

const features = [
  {
    title: "ARC Compliance",
    description: "Navigate Hyde Park and South Tampa Architectural Review Committee requirements",
    icon: FileText,
  },
  {
    title: "Period Restoration",
    description: "Authentic restoration using traditional materials and techniques",
    icon: Landmark,
  },
  {
    title: "Modern Integration",
    description: "Sensitively integrate modern systems while preserving historic character",
    icon: Home,
  },
  {
    title: "Material Sourcing",
    description: "Access to period-appropriate materials for authentic restoration",
    icon: CheckCircle,
  },
];

const historicDistricts = [
  { name: "Hyde Park", period: "1880s-1930s", style: "Bungalow, Mediterranean Revival, Colonial Revival" },
  { name: "Seminole Heights", period: "1910s-1940s", style: "Craftsman, Colonial Revival, Mediterranean" },
  { name: "Palma Ceia", period: "1920s-1940s", style: "Mediterranean Revival, Spanish Colonial" },
  { name: "Beach Park", period: "1920s-1950s", style: "Mediterranean, Ranch, Mid-Century Modern" },
  { name: "Tampa Heights", period: "1880s-1920s", style: "Victorian, Craftsman, Colonial" },
];

const arcServices = [
  "Pre-application consultation with ARC staff",
  "Historical research and documentation",
  "Design that respects the Secretary of Interior's Standards",
  "Material specifications and samples",
  "Presentation at ARC hearings",
  "Coordination with city historic preservation office",
];

const arcApprovalItems = [
  "Exterior alterations visible from the street",
  "Window and door replacements",
  "Roof material changes",
  "Additions and new construction",
  "Demolition (even partial)",
  "Fence and landscape changes",
  "Paint color changes (some districts)",
];

const restorationTimeline = [
  {
    phase: "Assessment & Documentation",
    duration: "2-4 weeks",
    description: "Comprehensive condition assessment, historical research, photographic documentation, and identification of character-defining features to preserve.",
  },
  {
    phase: "Design & ARC Approval",
    duration: "6-12 weeks",
    description: "Develop restoration plans respecting Secretary of Interior Standards, prepare ARC application, attend hearings, and obtain Certificate of Appropriateness.",
  },
  {
    phase: "Permitting",
    duration: "4-8 weeks",
    description: "Building permits, structural engineering if needed, and coordination with historic preservation officer for any variances.",
  },
  {
    phase: "Structural Restoration",
    duration: "4-8 weeks",
    description: "Foundation repairs, structural timber replacement, termite damage remediation, and load-bearing wall restoration using period-appropriate techniques.",
  },
  {
    phase: "Systems Modernization",
    duration: "6-10 weeks",
    description: "Electrical rewiring, plumbing updates, HVAC installation—all designed to minimize visible impact on historic character.",
  },
  {
    phase: "Exterior Restoration",
    duration: "6-12 weeks",
    description: "Window restoration or period-appropriate replacement, siding repair, porch restoration, roof replacement with approved materials.",
  },
  {
    phase: "Interior Finishes",
    duration: "8-12 weeks",
    description: "Plaster repair, wood floor refinishing, millwork restoration, period-appropriate fixtures, and paint in historically accurate colors.",
  },
  {
    phase: "Final Details",
    duration: "2-4 weeks",
    description: "Hardware installation, lighting fixtures, final ARC inspection, and documentation for tax credit applications if applicable.",
  },
];

const secretaryStandards = [
  {
    principle: "Preserve Character-Defining Features",
    description: "Identify and retain the architectural elements that make the building historic—original windows, decorative trim, spatial relationships, and materials.",
  },
  {
    principle: "Repair Rather Than Replace",
    description: "When historic materials are damaged, repair them using recognized preservation methods. Replace only when repair is not feasible.",
  },
  {
    principle: "Match Materials and Techniques",
    description: "When replacement is necessary, use materials that match the original in design, color, texture, and material composition.",
  },
  {
    principle: "Distinguish New from Old",
    description: "New additions should be compatible with the historic building but differentiated enough to avoid creating a false sense of history.",
  },
  {
    principle: "Reversibility",
    description: "Undertake changes in a way that, if removed in the future, would not impair the essential form and integrity of the historic property.",
  },
  {
    principle: "Protect Archaeological Resources",
    description: "Protect and preserve archaeological resources affected by the project, following state and federal guidelines.",
  },
];

const beforeAfterExamples = [
  {
    title: "1920s Hyde Park Bungalow",
    before: "Original wood windows replaced with vinyl in 1990s, aluminum awnings added, asbestos siding over original clapboard, enclosed front porch.",
    after: "Wood windows restored or replicated, awnings removed, original clapboard siding exposed and repaired, front porch reopened with period-appropriate screening and columns.",
  },
  {
    title: "Seminole Heights Craftsman",
    before: "Roof replaced with architectural shingles (wrong profile), original columns removed and replaced with wrought iron, interior plaster covered with drywall.",
    after: "Three-tab shingles matching original profile, tapered columns rebuilt from historic photos, plaster repaired and restored where possible.",
  },
  {
    title: "Mediterranean Revival in Palma Ceia",
    before: "Barrel tile roof in poor condition, stucco covered with modern paint, decorative iron removed, windows replaced with single-pane aluminum.",
    after: "Barrel tile restored/matched, stucco repaired with lime-based plaster, decorative iron fabricated from historic documentation, wood or aluminum-clad windows with authentic profiles.",
  },
];

const taxCreditInfo = [
  {
    program: "Federal Historic Tax Credit",
    benefit: "20% of qualified rehabilitation expenditures",
    requirements: "Property must be listed on the National Register (individually or as contributing to a district), project must follow Secretary of Interior Standards, and property must be income-producing (rental, commercial, mixed-use).",
  },
  {
    program: "Florida Historic Preservation Tax Credit",
    benefit: "Up to $100,000 per project",
    requirements: "Must be a certified historic structure, follow Secretary of Interior Standards, and receive Florida Division of Historical Resources approval.",
  },
  {
    program: "Local Property Tax Exemption",
    benefit: "Ad valorem tax exemption for qualifying improvements",
    requirements: "Varies by municipality. Tampa offers exemptions for qualifying historic properties. Contact the Historic Preservation Commission for current programs.",
  },
];

const faqs = [
  {
    question: "Do I need ARC approval for interior work on my historic home?",
    answer: "Generally no—ARC review focuses on exterior changes visible from public rights-of-way. Interior modifications, even significant ones like kitchen remodels or bathroom updates, don't require ARC approval. However, if you're seeking historic tax credits, interior work must also follow the Secretary of Interior Standards. We help clients distinguish between ARC requirements and tax credit requirements to plan projects effectively."
  },
  {
    question: "Can I replace my historic windows with modern energy-efficient ones?",
    answer: "It depends on the district requirements and window condition. Many ARCs prefer restoration of original windows with storm windows added for energy efficiency. If replacement is approved, you'll typically need wood or aluminum-clad windows matching the original profile, dimensions, and sight lines. Vinyl windows are almost never approved. We assess each situation and present options that satisfy both preservation goals and your comfort needs."
  },
  {
    question: "How long does the Certificate of Appropriateness process take?",
    answer: "Plan for 6-12 weeks from application to approval. The process includes: staff review (2-3 weeks), possible revisions, hearing scheduling (monthly meetings in most districts), and the hearing itself. Simple projects like paint color changes may get staff approval without a hearing. Complex projects may require multiple hearings. We attend all hearings with you and advocate for your project."
  },
  {
    question: "My historic home has serious structural issues. Can I still preserve it?",
    answer: "Yes, and structural restoration is often more cost-effective than people assume. Common issues—foundation settlement, termite damage, rotted structural members—have well-established repair techniques. We work with structural engineers experienced in historic buildings to develop repair strategies that preserve character while ensuring safety. Complete demolition is rarely the answer, and ARCs will scrutinize requests to demolish contributing structures."
  },
  {
    question: "Can I add onto my historic home?",
    answer: "Additions are possible but must be designed sensitively. The Secretary of Interior Standards require additions to be compatible in scale, materials, and character—but also distinguishable from the original building. Typically, additions are placed at the rear or set back from the primary facade. ARCs will require detailed plans showing how the addition relates to the historic structure. We design additions that expand your living space while respecting your home's heritage."
  },
  {
    question: "How much does historic home restoration cost compared to regular renovation?",
    answer: "Budget 10-30% more than comparable non-historic renovation, depending on preservation requirements. The premium covers: ARC compliance and hearings, period-appropriate materials (wood windows vs. vinyl, specialty roofing), skilled craftsmen for restoration work, and potentially longer timelines. However, tax credits can offset 20% or more of costs for qualifying projects, and historic homes in Tampa's desirable districts command premium resale values that typically exceed the investment."
  },
  {
    question: "What tax benefits are available for historic home restoration?",
    answer: "For income-producing properties (rentals, mixed-use), the Federal Historic Tax Credit provides 20% of qualified rehabilitation costs. Florida offers additional state credits up to $100,000. For owner-occupied homes, local property tax exemptions may be available in Tampa. We coordinate with historic tax credit consultants to ensure your project qualifies and documentation meets IRS requirements. The key: plan for tax credits before starting work, not after."
  },
];

export default function HistoricPreservationPage() {
  const breadcrumbItems = [
    { name: "Residential", href: "/residential/" },
    { name: "Historic Preservation", href: "/residential/historic-preservation/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="HomeAndConstructionBusiness" service="Historic Home Preservation" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Residential Historic Preservation"
        serviceDescription="Hyde Park and South Tampa historic home preservation with ARC compliance"
        minPrice="500000"
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
            src="/images/custom-home-2-rotated-1/custom-home-2-rotated-1-display.webp"
            alt="Historic Tampa home restoration"
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
            <Landmark className="w-8 h-8" style={{ color: '#c9a96e' }} />
            <span 
              className="text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full"
              style={{ backgroundColor: 'rgba(201, 169, 110, 0.15)', color: '#c9a96e' }}
            >
              Historic Preservation
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
            Preserving Tampa's <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Architectural Heritage</em>
          </h1>
          <p 
            className="text-lg mb-10 max-w-2xl leading-relaxed"
            style={{ color: '#888888' }}
          >
            Preserve the character of Tampa's most cherished historic homes while adding modern comfort. 
            From Hyde Park bungalows to Seminole Heights craftsmans, we restore homes to their original glory.
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
            Historic Preservation <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Expertise</em>
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

      {/* Certificate of Appropriateness */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p 
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: '#c9a96e' }}
            >
              Regulatory Navigation
            </p>
            <h2 
              className="text-3xl md:text-4xl mb-8"
              style={{ 
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#f5f5f5',
                letterSpacing: '0.02em'
              }}
            >
              Navigating the <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Certificate of Appropriateness</em>
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: '#888888' }}>
              Work in Tampa's historic districts requires approval from Architectural Review Committees. 
              A Certificate of Appropriateness ensures your project preserves the neighborhood's historic character.
            </p>
            <div className="space-y-4">
              {arcServices.map((item, index) => (
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
              What Requires ARC Approval?
            </h3>
            <ul className="space-y-3">
              {arcApprovalItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3" style={{ color: '#c0c0c0' }}>
                  <FileText className="w-4 h-4" style={{ color: '#c9a96e' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Restoration Timeline */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Restoration Process
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-6 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Historic Restoration <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Timeline</em>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            Historic restoration requires patience and precision. Here's what to expect from 
            a comprehensive restoration project:
          </p>
          
          <div className="space-y-6">
            {restorationTimeline.map((phase, index) => (
              <div 
                key={index}
                className="p-6 rounded-sm flex flex-col md:flex-row md:items-start gap-4"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <div className="flex items-center gap-4 md:w-72 shrink-0">
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
              Total Timeline: 12-18 Months
            </h3>
            <p style={{ color: '#888888' }}>
              From assessment through completion, depending on scope and ARC requirements
            </p>
          </div>
        </div>
      </section>

      {/* Secretary of Interior Standards */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Guiding Principles
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-6 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Secretary of Interior <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Standards</em>
          </h2>
          <p className="text-center mb-16 max-w-3xl mx-auto" style={{ color: '#888888' }}>
            The Secretary of the Interior's Standards for Rehabilitation guide all historic preservation work. 
            These principles ensure your project maintains the historic integrity that makes your home valuable.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secretaryStandards.map((standard, index) => (
              <div 
                key={index}
                className="p-6 rounded-sm"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <Award className="w-8 h-8 mb-4" style={{ color: '#c9a96e' }} />
                <h3 className="font-medium mb-3" style={{ color: '#f5f5f5' }}>{standard.principle}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Examples */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Restoration Examples
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-6 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Typical <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Transformations</em>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            See how we reverse decades of inappropriate alterations to reveal the historic character beneath.
          </p>

          <div className="space-y-8">
            {beforeAfterExamples.map((example, index) => (
              <div 
                key={index}
                className="p-8 rounded-sm"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.05)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <h3 
                  className="text-xl mb-6"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5'
                  }}
                >
                  {example.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Hammer className="w-5 h-5" style={{ color: '#888888' }} />
                      <span className="text-sm font-medium uppercase tracking-wide" style={{ color: '#888888' }}>
                        Condition Found
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#c0c0c0' }}>
                      {example.before}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="w-5 h-5" style={{ color: '#c9a96e' }} />
                      <span className="text-sm font-medium uppercase tracking-wide" style={{ color: '#c9a96e' }}>
                        After Restoration
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#c0c0c0' }}>
                      {example.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Credits Section */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Financial Incentives
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-6 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Historic Preservation <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Tax Credits</em>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            Significant tax incentives exist for qualifying historic restoration projects. 
            We help you navigate these programs to maximize your return.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {taxCreditInfo.map((credit, index) => (
              <div 
                key={index}
                className="p-8 rounded-sm"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <DollarSign className="w-8 h-8 mb-4" style={{ color: '#c9a96e' }} />
                <h3 className="font-medium mb-2" style={{ color: '#f5f5f5' }}>{credit.program}</h3>
                <p className="text-lg font-semibold mb-4" style={{ color: '#c9a96e' }}>{credit.benefit}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>{credit.requirements}</p>
              </div>
            ))}
          </div>

          <div 
            className="mt-12 p-8 rounded-sm"
            style={{ 
              backgroundColor: 'rgba(201, 169, 110, 0.08)',
              border: '1px solid rgba(201, 169, 110, 0.2)'
            }}
          >
            <p className="text-center" style={{ color: '#c0c0c0' }}>
              <strong style={{ color: '#f5f5f5' }}>Important:</strong> Tax credit applications must be submitted and approved 
              <em> before</em> construction begins. We coordinate with certified historic tax credit consultants 
              to ensure your project qualifies and documentation meets all requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Historic Districts */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <p 
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: '#c9a96e' }}
          >
            Where We Work
          </p>
          <h2 
            className="text-3xl md:text-4xl mb-16 text-center"
            style={{ 
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              color: '#f5f5f5',
              letterSpacing: '0.02em'
            }}
          >
            Tampa's <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Historic Districts</em>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicDistricts.map((district) => (
              <div
                key={district.name}
                className="p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(201, 169, 110, 0.03)',
                  border: '1px solid rgba(201, 169, 110, 0.1)'
                }}
              >
                <Landmark className="w-8 h-8 mb-4" style={{ color: '#c9a96e' }} />
                <h3 
                  className="text-lg mb-2"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color: '#f5f5f5'
                  }}
                >
                  {district.name}
                </h3>
                <p className="text-sm mb-2" style={{ color: '#c9a96e' }}>{district.period}</p>
                <p className="text-sm" style={{ color: '#888888' }}>{district.style}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-8" style={{ backgroundColor: '#0a0a0a' }}>
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
            Historic Preservation <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>FAQs</em>
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
            Preserve Your Historic Home's <em style={{ color: '#c9a96e', fontStyle: 'italic' }}>Legacy</em>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: '#888888' }}>
            From Hyde Park to Seminole Heights, FCS helps homeowners navigate historic preservation 
            requirements while creating modern, livable spaces.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-3 px-10 py-5 text-sm font-medium tracking-[0.1em] uppercase transition-all duration-400 hover:-translate-y-0.5"
            style={{ 
              backgroundColor: '#c9a96e',
              color: '#0c0c0c'
            }}
          >
            Schedule Historic Preservation Consultation
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
