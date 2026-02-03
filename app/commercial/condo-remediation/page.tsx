import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  CheckCircle,
  ClipboardCheck,
  AlertTriangle,
  ArrowRight,
  Phone,
  HelpCircle,
  Shield,
  Clock,
  DollarSign,
  Users,
  FileText,
  Wrench,
  Calendar,
  Target,
  Award,
  MapPin,
  Search,
  Hammer,
} from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "SB4-D Compliance Tampa | Condo Milestone | FCS",
  description:
    "Florida SB4-D compliance specialists serving Tampa Bay. Milestone inspections, SIRS structural reserve studies, balcony reconstruction, and condo remediation. Deadlines approaching - act now.",
  keywords:
    "SB4-D compliance Tampa, condo milestone inspection Florida, SIRS structural reserve study, condo balcony repair Tampa Bay, condo remediation contractor, structural integrity reserve study, condo association compliance, Florida condo safety law",
};

const features = [
  {
    title: "SB4-D Compliance",
    description: "Full compliance with Florida's condo safety legislation including milestone inspections and SIRS requirements",
    icon: ClipboardCheck,
  },
  {
    title: "Milestone Inspections",
    description: "Coordination of Phase 1 and Phase 2 structural inspections for buildings 25+ years old",
    icon: Search,
  },
  {
    title: "SIRS Assessments",
    description: "Structural Integrity Reserve Studies to plan and fund necessary structural repairs",
    icon: FileText,
  },
  {
    title: "Structural Remediation",
    description: "Expert repair of structural deficiencies identified in inspections—balconies, concrete, waterproofing",
    icon: Hammer,
  },
  {
    title: "Board Coordination",
    description: "Experience working with condo boards, HOAs, and property managers on complex projects",
    icon: Users,
  },
  {
    title: "Phased Construction",
    description: "Strategic project phasing to manage costs and minimize disruption to residents",
    icon: Calendar,
  },
];

const complianceTimeline = [
  {
    milestone: "Buildings 30+ years old (within 3 miles of coast)",
    deadline: "December 31, 2024",
    status: "urgent",
  },
  {
    milestone: "Buildings 25-29 years old (within 3 miles of coast)", 
    deadline: "By building's 30th anniversary",
    status: "upcoming",
  },
  {
    milestone: "Buildings 30+ years old (more than 3 miles from coast)",
    deadline: "December 31, 2025",
    status: "upcoming",
  },
  {
    milestone: "SIRS must be completed for all applicable buildings",
    deadline: "December 31, 2024",
    status: "urgent",
  },
  {
    milestone: "Reserve funding must begin (no more waiving structural reserves)",
    deadline: "January 1, 2025",
    status: "upcoming",
  },
  {
    milestone: "Subsequent milestone inspections",
    deadline: "Every 10 years after initial",
    status: "ongoing",
  },
];

const commonIssues = [
  {
    issue: "Balcony Deterioration",
    description: "Spalling concrete, corroded rebar, waterproofing failures, and structural cracking in balcony slabs and railings",
    severity: "High",
  },
  {
    issue: "Concrete Spalling",
    description: "Delamination and flaking of concrete surfaces exposing reinforcing steel to corrosion",
    severity: "High",
  },
  {
    issue: "Rebar Corrosion",
    description: "Rust expansion causing concrete cracking and structural capacity reduction",
    severity: "Critical",
  },
  {
    issue: "Post-Tension Cable Issues",
    description: "Corrosion, broken strands, or inadequate grouting in post-tensioned concrete systems",
    severity: "Critical",
  },
  {
    issue: "Waterproofing Failures",
    description: "Failed deck coatings, membrane deterioration, and inadequate drainage causing water intrusion",
    severity: "Medium",
  },
  {
    issue: "Parking Structure Deterioration",
    description: "Corrosion damage, expansion joint failures, and traffic surface wear in parking decks",
    severity: "High",
  },
];

const remediationProcess = [
  {
    step: 1,
    title: "Engineering Assessment",
    description: "Licensed engineer inspects and documents all structural deficiencies with detailed repair recommendations",
  },
  {
    step: 2,
    title: "Scope Development",
    description: "Work with engineer to develop detailed repair specifications and prioritize work based on severity",
  },
  {
    step: 3,
    title: "Board Presentation",
    description: "Present findings and options to board with clear cost estimates and timeline projections",
  },
  {
    step: 4,
    title: "Funding Strategy",
    description: "Help board evaluate reserves, special assessments, financing, and phasing options",
  },
  {
    step: 5,
    title: "Phased Construction",
    description: "Execute repairs strategically to maintain building occupancy and manage cash flow",
  },
  {
    step: 6,
    title: "Documentation & Compliance",
    description: "Provide complete documentation for engineering sign-off and regulatory compliance",
  },
];

const faqs = [
  {
    question: "What is Florida SB4-D and how does it affect my condo association?",
    answer: "Florida SB4-D is the comprehensive condo safety legislation passed in response to the 2021 Surfside collapse. It requires condominium buildings 3+ stories tall to complete milestone structural inspections (at 30 years old, or 25 years if within 3 miles of the coast) and Structural Integrity Reserve Studies (SIRS). The law eliminates the ability of associations to waive reserves for structural components. Non-compliance can result in building closure orders, personal liability for board members, and significant fines. The first major deadlines arrive December 31, 2024."
  },
  {
    question: "What's the difference between Phase 1 and Phase 2 milestone inspections?",
    answer: "Phase 1 is a visual inspection by a licensed engineer or architect to identify any substantial structural deterioration. This initial inspection examines load-bearing walls, the primary structural system, and the overall structural condition of the building. If substantial deterioration is found during Phase 1, a Phase 2 inspection is triggered. Phase 2 requires more extensive investigation including destructive testing, detailed structural analysis, and development of a comprehensive repair plan with cost estimates and timelines. FCS coordinates with qualified engineers for both phases and implements required remediation."
  },
  {
    question: "What is a SIRS (Structural Integrity Reserve Study) and who needs one?",
    answer: "A Structural Integrity Reserve Study is a detailed 30-year reserve analysis specifically for structural components: roof, waterproofing and exterior paint, foundation, load-bearing walls, floor structures, fireproofing/fire protection, plumbing, electrical, and any item with deferred maintenance or replacement cost exceeding $10,000. Unlike traditional reserve studies, SIRS cannot include pooling with non-structural items, and associations cannot vote to waive or reduce funding. All condominium associations with buildings 3+ stories must complete a SIRS by December 31, 2024."
  },
  {
    question: "How much does SB4-D compliance and condo remediation typically cost?",
    answer: "Costs vary significantly based on building size, age, condition, and deficiency severity. Milestone inspections typically cost $3,000-$15,000 for Phase 1, with Phase 2 (if triggered) adding $15,000-$75,000 or more depending on complexity. SIRS studies range from $5,000-$30,000 depending on building size. Remediation costs depend entirely on deficiencies found—concrete spalling repair runs $15-50/SF, balcony reconstruction $300-600/SF, and full building envelope rehabilitation $50-150/SF of wall area. FCS provides detailed estimates after engineering assessment."
  },
  {
    question: "Can residents stay in the building during remediation work?",
    answer: "In most cases, yes. FCS develops phased remediation plans specifically designed to maintain building occupancy. Our approach includes working floor-by-floor or section-by-section, creating temporary weather barriers, scheduling noisy work during reasonable hours, maintaining all life safety systems, and providing advance notice to affected residents. For severe structural issues where safety is compromised, temporary evacuation of affected areas may be necessary—but this is relatively rare. We prioritize both safety and minimal disruption."
  },
  {
    question: "What funding options exist for SB4-D compliance and remediation work?",
    answer: "Common funding approaches include: existing reserves (if adequately funded through prior SIRS compliance), special assessments (one-time or multi-year charges to unit owners), bank loans secured by future assessments (repaid over 5-15 years), phased construction (spreading work across multiple budget cycles), and combinations thereof. Many associations use reserve loans to begin immediate work while collecting special assessments. FCS helps boards understand options and develop strategies that balance urgency with owner financial capacity."
  },
  {
    question: "What happens if our association misses SB4-D deadlines?",
    answer: "Non-compliance with SB4-D carries serious consequences. Local building officials can issue building closure orders for non-compliant structures. Board members may face personal liability for failure to fulfill fiduciary duties. The association may face significant fines. Additionally, unit sales can become difficult as buyers and lenders increasingly require SB4-D compliance documentation. The December 31, 2024 deadline is firm for many buildings—if you haven't started, contact us immediately."
  },
  {
    question: "How do you coordinate with engineers during remediation projects?",
    answer: "FCS maintains relationships with licensed structural engineers experienced in condo remediation. We can recommend engineers or work with your association's existing engineer. During remediation, we coordinate closely: the engineer develops repair specifications, we provide constructability input and detailed pricing, the engineer reviews our work for specification compliance, and the engineer provides final sign-off documentation. This collaborative approach ensures repairs meet structural requirements while being practically implementable."
  },
  {
    question: "How long does the remediation process take from start to finish?",
    answer: "Timeline depends heavily on scope. Milestone inspections take 2-4 weeks. SIRS studies take 4-8 weeks. Once deficiencies are identified, engineering and bid development typically requires 6-12 weeks. Remediation construction varies by scope—individual balcony repairs may take 1-2 weeks per unit, while building-wide projects span 6-18 months depending on size and complexity. We develop detailed schedules during pre-construction and work with boards to establish realistic timelines."
  },
  {
    question: "Do you have experience with large condo remediation projects?",
    answer: "Yes. FCS completed the $4.9 million Tiara Condominium Association balcony reconstruction and waterproofing project—one of the largest condo remediation projects in the Tampa Bay area. We also completed the $2.5 million Southwind Condominiums roof and waterproofing restoration. Our team has decades of experience in multi-family construction and restoration, working with condo boards, and managing complex phased construction in occupied buildings."
  },
  {
    question: "What areas do you serve for condo remediation?",
    answer: "FCS provides SB4-D compliance and condo remediation services throughout the Tampa Bay region including Tampa, St. Petersburg, Clearwater, Sarasota, Bradenton, Lakeland, and surrounding communities. We focus on projects where we can deliver hands-on project management and quality control. For large projects, we'll consider locations throughout Florida."
  },
  {
    question: "How do we get started with SB4-D compliance?",
    answer: "Contact FCS for an initial consultation. We'll review your building's age, location (coastal proximity), and current compliance status. If you need milestone inspections or SIRS, we can recommend qualified engineers. If you've already received inspection reports identifying deficiencies, we'll review them with you, develop remediation plans, and provide detailed cost estimates. With deadlines approaching, the time to start is now."
  },
];

const caseStudies = [
  {
    name: "Tiara Condominium Association",
    location: "St. Petersburg, FL",
    value: "$4.9 Million",
    scope: "Balcony Reconstruction & Waterproofing",
    description: "Complete reconstruction of 180+ balconies including structural repairs, new waterproofing systems, railings, and finishes. Project completed in phases to maintain building occupancy throughout construction.",
    highlights: ["180+ balconies reconstructed", "Structural concrete repairs", "Traffic-bearing waterproofing", "Phased to maintain occupancy"],
  },
  {
    name: "Southwind Condominiums", 
    location: "Tampa Bay Area",
    value: "$2.5 Million",
    scope: "Roof & Waterproofing Restoration",
    description: "Complete roof replacement and building envelope waterproofing including wall coating systems, expansion joint repairs, and drainage improvements. Work coordinated with ongoing occupancy.",
    highlights: ["Complete roof replacement", "Building envelope waterproofing", "Expansion joint rehabilitation", "Drainage system improvements"],
  },
];

const internalLinks = [
  { href: "/services/balcony-reconstruction/", label: "Balcony Reconstruction Services" },
  { href: "/services/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/commercial/", label: "Commercial Construction Services" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoRemediationPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
    { name: "Condo Remediation & SB4-D", href: "/commercial/condo-remediation/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" service="Condo Remediation & SB4-D Compliance" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="Florida SB4-D compliance services including milestone inspections, SIRS assessments, balcony reconstruction, and structural remediation for condominiums throughout Tampa Bay"
        minPrice="100000"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb items={breadcrumbItems} />

      <div className="container-custom py-8">
        <BackToHub silo="commercial" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-10 h-10 text-brand-gold" />
              <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                DEADLINE: DECEMBER 31, 2024
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              SB4-D Compliance & Condo Remediation Tampa Bay
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Florida&apos;s new condo safety law requires milestone inspections and structural integrity reserve studies. <strong>Deadlines are approaching fast.</strong>
            </p>
            <p className="text-lg text-white/80 mb-8">
              FCS helps Tampa Bay condo associations navigate SB4-D compliance, complete required inspections, and execute remediation work. With $4.9M+ in completed condo projects, we understand the urgency and complexity of this work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all text-lg"
              >
                Request Compliance Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="py-6 bg-red-600">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center md:text-left">
            <AlertTriangle className="w-8 h-8 flex-shrink-0" />
            <div>
              <span className="font-bold text-lg block md:inline">
                SB4-D Deadlines Are Here: 
              </span>
              <span className="ml-0 md:ml-2">
                Buildings 30+ years old within 3 miles of coast must complete milestone inspections by December 31, 2024. Don&apos;t risk building closure orders.
              </span>
            </div>
            <Link href="/contact/" className="flex-shrink-0 bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Act Now
            </Link>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8 text-center">
              Tampa Bay&apos;s Condo Remediation Specialists
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                <strong>Florida Construction Specialists (FCS)</strong> provides comprehensive SB4-D compliance and structural remediation services for condominium associations throughout Tampa Bay. With over 40 years of construction experience and more than $7.4 million in completed condo remediation projects, we understand the unique challenges facing Florida&apos;s condo communities.
              </p>
              <p className="mb-6">
                The tragic 2021 Surfside condominium collapse revealed critical gaps in Florida&apos;s condo safety oversight. In response, the Florida Legislature passed SB4-D, requiring milestone structural inspections and Structural Integrity Reserve Studies (SIRS) for condominium buildings three stories or taller. These requirements carry firm deadlines and serious consequences for non-compliance—including potential building closure orders and personal liability for board members.
              </p>
              <p className="mb-6">
                FCS specializes in the complete SB4-D compliance cycle: coordinating milestone inspections with licensed engineers, helping boards understand SIRS requirements and funding implications, and executing the structural remediation work that inspections reveal. Our expertise spans balcony reconstruction, concrete restoration, waterproofing systems, and comprehensive building envelope rehabilitation.
              </p>
              <p>
                Our landmark $4.9 million Tiara Condominium project—involving reconstruction of over 180 balconies while maintaining building occupancy—demonstrates our capability to handle the largest and most complex condo remediation projects in the region. We bring this same expertise and professionalism to every association we serve, regardless of project size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-4 text-center">
            Comprehensive Condo Compliance Services
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From initial milestone inspections through completed remediation, FCS provides end-to-end support for SB4-D compliance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <Icon className="w-12 h-12 text-brand-green mb-4" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Understanding SB4-D Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8">
              Understanding Florida SB4-D: What Condo Associations Must Know
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">The Surfside Tragedy and Legislative Response</h3>
              <p className="mb-6">
                On June 24, 2021, Champlain Towers South in Surfside, Florida collapsed without warning, killing 98 people in one of the deadliest structural failures in American history. Subsequent investigations revealed years of deferred maintenance, inadequate reserve funding, and missed warning signs about deteriorating structural conditions. The tragedy exposed critical gaps in how Florida oversees condominium building safety.
              </p>
              <p className="mb-6">
                In response, the Florida Legislature passed Senate Bill 4-D (SB4-D) in May 2022, creating the most comprehensive condo safety requirements in the state&apos;s history. The law mandates periodic structural inspections, requires associations to maintain adequate reserves for structural repairs, and eliminates the ability of unit owners to vote to waive or reduce reserve funding for critical structural components. These requirements apply to nearly every multi-story condominium in Florida.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Which Buildings Are Affected by SB4-D?</h3>
              <p className="mb-4">
                SB4-D applies to condominium and cooperative buildings that are three stories or taller. The law does not distinguish between residential, commercial, or mixed-use condominiums—if your building is three or more stories and operates as a condominium or cooperative, these requirements apply. Key factors that determine your compliance timeline include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Building age:</strong> Milestone inspections are required when buildings reach 30 years old (25 years if within 3 miles of the coast)</li>
                <li><strong>Coastal proximity:</strong> Buildings within 3 miles of the coastline face earlier deadlines due to salt air exposure accelerating structural deterioration</li>
                <li><strong>Building height:</strong> Only buildings 3+ stories are subject to milestone inspection requirements</li>
                <li><strong>Association type:</strong> Both condominium and cooperative associations must comply</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Milestone Inspection Requirements</h3>
              <p className="mb-6">
                The centerpiece of SB4-D is the mandatory milestone structural inspection. This inspection must be performed by a licensed architect or engineer and consists of two potential phases. Phase 1 is a visual examination of the building&apos;s structural components. If Phase 1 reveals substantial structural deterioration, Phase 2 triggers more extensive investigation including destructive testing and development of a detailed repair plan.
              </p>
              <p className="mb-6">
                For existing buildings already past their 30-year (or 25-year coastal) anniversary, the initial milestone inspection must be completed by December 31, 2024 for buildings within 3 miles of the coast, or December 31, 2025 for buildings more than 3 miles inland. Buildings approaching their milestone age must complete inspection within their applicable timeframe. After the initial inspection, subsequent milestone inspections are required every 10 years.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">SIRS Requirements</h3>
              <p className="mb-6">
                In addition to milestone inspections, SB4-D requires all affected associations to complete a Structural Integrity Reserve Study (SIRS). This is distinct from traditional reserve studies—SIRS focuses specifically on structural components and follows stricter requirements. The initial SIRS must be completed by December 31, 2024, with updates required every 10 years or whenever the previous study is materially impacted by events.
              </p>
              <p className="mb-6">
                Critically, SB4-D eliminates the option for associations to vote to waive or reduce reserve funding for structural components identified in the SIRS. This means associations can no longer defer structural maintenance indefinitely. Beginning January 1, 2025, associations must fund structural reserves according to their SIRS findings, even if this requires significant increases to regular assessments.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Penalties for Non-Compliance</h3>
              <p className="mb-6">
                The consequences of failing to comply with SB4-D are severe and designed to be impossible to ignore. Local building officials have authority to issue notices of non-compliance, which can escalate to building closure orders for structures that pose safety risks. Board members who fail to ensure compliance may face personal liability for breach of fiduciary duty. Additionally, the Florida Department of Business and Professional Regulation maintains records of association compliance status.
              </p>
              <p className="mb-6">
                Beyond regulatory penalties, non-compliance creates practical problems. Prospective buyers and their lenders increasingly require proof of SB4-D compliance before closing transactions. Insurance carriers may decline coverage or charge significant premiums for non-compliant buildings. Property values in non-compliant buildings typically suffer as these issues become more widely understood by the market.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Timeline Summary: Key Deadlines</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Timeline */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-green-dark font-heading mb-6 text-center">
              SB4-D Compliance Timeline & Deadlines
            </h3>
            <div className="space-y-4">
              {complianceTimeline.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between shadow-sm ${
                    item.status === 'urgent' ? 'border-l-4 border-red-500' : 'border-l-4 border-brand-gold'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3 md:mb-0">
                    {item.status === 'urgent' ? (
                      <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Clock className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                    )}
                    <span className="font-medium text-gray-700">{item.milestone}</span>
                  </div>
                  <span className={`px-4 py-2 rounded-full font-bold text-sm ${
                    item.status === 'urgent' 
                      ? 'bg-red-600 text-white' 
                      : item.status === 'upcoming'
                      ? 'bg-brand-gold text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {item.deadline}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Deadline Warning</h4>
                  <p className="text-red-700">
                    Many Tampa Bay condos have already missed the recommended start dates for compliance. Milestone inspections and SIRS studies take time to schedule and complete. If your building hasn&apos;t started the compliance process, contact us immediately—there may still be time, but every week matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Inspections Explained */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8">
              Milestone Inspections Explained: What to Expect
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Phase 1 Inspection: Visual Assessment</h3>
              <p className="mb-6">
                The Phase 1 milestone inspection is a comprehensive visual examination of the building&apos;s structural components. This inspection must be performed by a Florida-licensed architect or engineer with appropriate qualifications. During Phase 1, the inspector examines the building&apos;s primary structural systems to identify any substantial structural deterioration—deterioration that approaches or exceeds the safe design limits for the building.
              </p>
              <p className="mb-4">
                Key areas examined during Phase 1 include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Foundation systems:</strong> Visual inspection of accessible foundation elements for cracking, settlement, or water damage</li>
                <li><strong>Load-bearing walls:</strong> Examination of structural walls for cracks, deflection, or deterioration</li>
                <li><strong>Floor and roof structures:</strong> Assessment of slabs, beams, and structural decking for damage or deterioration</li>
                <li><strong>Primary structural members:</strong> Columns, beams, slabs, and other elements that support the building</li>
                <li><strong>Fireproofing and fire protection:</strong> Condition of fire-rated assemblies and protection systems</li>
                <li><strong>Building envelope:</strong> Exterior walls, windows, and waterproofing that protect structural elements</li>
              </ul>
              <p className="mb-6">
                If the Phase 1 inspection finds no substantial structural deterioration, the inspector issues a report documenting this finding, and the building&apos;s milestone inspection obligation is satisfied until the next 10-year cycle. However, the inspector may still note minor deterioration requiring monitoring or repair—these findings should inform the association&apos;s maintenance planning even if they don&apos;t trigger Phase 2.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Phase 2 Inspection: In-Depth Investigation</h3>
              <p className="mb-6">
                If Phase 1 reveals substantial structural deterioration, a Phase 2 inspection becomes mandatory. Phase 2 involves more extensive investigation to fully characterize the deterioration and develop a repair plan. This typically includes destructive testing—such as concrete cores, rebar exposure, and laboratory analysis—to determine the extent and cause of deterioration.
              </p>
              <p className="mb-4">
                Phase 2 requirements include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Testing and analysis:</strong> Destructive and non-destructive testing to evaluate material conditions</li>
                <li><strong>Detailed assessment:</strong> Complete documentation of deterioration extent, location, and severity</li>
                <li><strong>Repair recommendations:</strong> Specific repair methods and specifications to address identified issues</li>
                <li><strong>Cost estimates:</strong> Detailed estimates for recommended repairs</li>
                <li><strong>Timeline:</strong> Recommended timeframes for completing repairs based on urgency</li>
                <li><strong>Certification:</strong> Engineer&apos;s certification that recommended repairs will restore structural integrity</li>
              </ul>
              <p className="mb-6">
                Phase 2 reports become critical documents for the association. They establish the scope of required remediation work, provide basis for budgeting and special assessments, and create a record of the association&apos;s compliance with structural safety requirements. FCS works closely with engineers during Phase 2 to ensure repair recommendations are practical, constructible, and accurately priced.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Common Issues Found in Milestone Inspections</h3>
              <p className="mb-6">
                Florida&apos;s climate creates unique challenges for concrete structures. High humidity, salt air (especially near the coast), frequent rain, and temperature cycling all contribute to structural deterioration. Based on our experience with Tampa Bay condominiums, the most common issues found during milestone inspections include concrete spalling and delamination, reinforcing steel corrosion, waterproofing failures, and deteriorated expansion joints. Balconies are particularly vulnerable due to their exposure to weather and the difficulty of maintaining waterproofing on horizontal surfaces.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">From Inspection to Remediation</h3>
              <p className="mb-6">
                Receiving a Phase 2 report with identified structural deficiencies can be alarming for condo boards and unit owners. However, it&apos;s important to understand that identification of problems is the first step toward solving them. The timeline from inspection to completed remediation depends on several factors: the urgency of identified issues (immediate safety concerns require emergency action), funding availability, contractor selection, and construction duration.
              </p>
              <p className="mb-6">
                For most buildings, the process from Phase 2 report to remediation completion spans 12-24 months. This includes time for the board to understand the report, develop funding strategies, select qualified contractors, and complete the work. FCS helps associations compress this timeline where possible while ensuring all steps receive appropriate attention. For urgent safety issues, we can mobilize emergency stabilization work while longer-term solutions are developed.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Working with Licensed Engineers</h3>
              <p className="mb-6">
                Success in SB4-D compliance requires close collaboration between the condo association, the inspecting engineer, and the remediation contractor. FCS maintains relationships with several licensed structural engineers experienced in condo inspections and remediation. We can recommend qualified engineers for associations that don&apos;t have existing relationships, or we can work seamlessly with your association&apos;s chosen engineer.
              </p>
              <p className="mb-6">
                During the remediation process, the engineer&apos;s role includes developing repair specifications, reviewing contractor proposals for technical adequacy, inspecting work in progress to verify specification compliance, and providing final certification that repairs meet structural requirements. FCS coordinates closely with engineers throughout this process, ensuring our work meets their specifications while keeping projects on schedule and budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIRS Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8">
              Structural Integrity Reserve Studies (SIRS): Funding the Future
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">What is a SIRS?</h3>
              <p className="mb-6">
                A Structural Integrity Reserve Study is a specialized type of reserve study mandated by SB4-D. Unlike traditional reserve studies that could include all association common elements with flexible funding approaches, SIRS focuses specifically on structural components and follows strict requirements for how reserves must be calculated and funded. The goal is to ensure associations maintain adequate reserves to address structural maintenance and replacement needs without the option to defer or underfund.
              </p>
              <p className="mb-6">
                SIRS must be prepared by a licensed engineer, and must include a visual inspection of the building&apos;s structural components (though this can be coordinated with milestone inspections to avoid duplication). The study establishes a 30-year funding schedule for structural reserves, determining how much the association must collect annually to meet projected structural maintenance and replacement costs.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Required Reserve Components</h3>
              <p className="mb-4">
                SB4-D specifies which building components must be included in the SIRS. These structural and weatherproofing components include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Roof:</strong> Structure and covering, including waterproofing membranes</li>
                <li><strong>Load-bearing walls and primary structural members:</strong> Columns, beams, and structural slabs</li>
                <li><strong>Floor structures:</strong> Structural floor slabs and supporting elements</li>
                <li><strong>Foundation:</strong> All foundation components</li>
                <li><strong>Fireproofing and fire protection:</strong> Fire-rated assemblies and protection systems</li>
                <li><strong>Plumbing:</strong> Main plumbing systems serving the building</li>
                <li><strong>Electrical systems:</strong> Main electrical distribution</li>
                <li><strong>Waterproofing and exterior painting:</strong> Building envelope protection</li>
                <li><strong>Windows and doors:</strong> Exterior windows and doors (common elements)</li>
                <li><strong>Any item with deferred maintenance exceeding $10,000:</strong> Other structural items requiring attention</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">No More Reserve Waivers</h3>
              <p className="mb-6">
                Perhaps the most significant change under SB4-D is the elimination of reserve waivers for structural components. Prior to SB4-D, Florida condo associations could vote annually to waive or reduce reserve funding—a practice that contributed to the deferred maintenance crisis revealed by Surfside. Under the new law, associations cannot vote to reduce funding for SIRS components below the amount required by the study.
              </p>
              <p className="mb-6">
                This means many associations face significant increases in regular assessments starting January 1, 2025, when the no-waiver provisions take full effect. Associations that have historically underfunded reserves may face particularly challenging transitions. However, proper planning can help manage this transition—early completion of SIRS allows associations to understand their funding requirements and begin adjusting assessments gradually rather than facing sudden increases.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">How SIRS Differs from Traditional Reserve Studies</h3>
              <p className="mb-6">
                Traditional reserve studies often used pooled funding approaches, allowing associations to maintain a single reserve fund used for multiple components. They also permitted various funding methods including &ldquo;threshold&rdquo; or &ldquo;baseline&rdquo; approaches that could result in underfunding. SIRS requirements are stricter: structural reserves cannot be pooled with non-structural items, funding must follow a &ldquo;straight-line&rdquo; method projecting full replacement costs, and the resulting funding requirements cannot be waived.
              </p>
              <p className="mb-6">
                This doesn&apos;t mean associations can&apos;t have other reserve funds—they can still maintain separate reserves for non-structural common elements like landscaping, amenities, or furniture. But structural reserves must be segregated and funded according to SIRS requirements.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Implementation Timeline</h3>
              <p className="mb-6">
                All affected associations must complete their initial SIRS by December 31, 2024. The reserve funding requirements (no waivers) take effect January 1, 2025. SIRS must be updated every 10 years or whenever material changes occur (such as completion of major repairs, discovery of new issues, or significant changes in cost projections). This ongoing requirement ensures reserve funding stays aligned with actual building conditions over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Structural Issues */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8">
              Common Condo Structural Issues in Florida
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="mb-6">
                Florida&apos;s unique climate creates particular challenges for concrete structures. Understanding these common issues helps condo boards anticipate what milestone inspections may reveal and what remediation work may be required. Based on our extensive experience with Tampa Bay condominiums, these are the structural issues we encounter most frequently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {commonIssues.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-xl p-6 border-l-4 ${
                    item.severity === 'Critical' ? 'border-red-500' :
                    item.severity === 'High' ? 'border-orange-500' :
                    'border-yellow-500'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-brand-green-dark">{item.issue}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      item.severity === 'Critical' ? 'bg-red-100 text-red-700' :
                      item.severity === 'High' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.severity}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Balcony Deterioration</h3>
              <p className="mb-6">
                Balconies are among the most vulnerable structural elements in Florida condominiums. They&apos;re exposed to weather on all sides, collect standing water, and experience thermal cycling that stresses waterproofing and concrete. Common balcony problems include spalling concrete (where the surface delaminates, often exposing rusted rebar), failed waterproofing membranes allowing water intrusion, corroded or damaged railings, and structural cracking that compromises load-carrying capacity.
              </p>
              <p className="mb-6">
                Balcony failures can create immediate life-safety hazards. Spalling concrete can fall on people below. Deteriorated railings may not support required loads. In extreme cases, structural failure of balcony slabs can occur. For these reasons, balcony conditions are carefully scrutinized during milestone inspections, and identified deficiencies often require priority remediation.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Concrete Spalling and Rebar Corrosion</h3>
              <p className="mb-6">
                Concrete spalling and rebar corrosion are related problems that frequently occur together. When moisture penetrates concrete and reaches the embedded reinforcing steel, the steel begins to corrode. As rust forms, it expands—occupying significantly more volume than the original steel. This expansion creates internal pressure that cracks and eventually dislodges the concrete cover, creating visible spalling.
              </p>
              <p className="mb-6">
                Once spalling begins, the process accelerates. Exposed steel corrodes faster, more concrete delaminates, and structural capacity degrades. If left unaddressed, corrosion can reduce rebar cross-sections to the point where structural elements no longer have adequate strength. Repair typically involves removing deteriorated concrete, cleaning or replacing corroded steel, and placing new concrete with appropriate corrosion protection.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Post-Tension Cable Issues</h3>
              <p className="mb-6">
                Many Florida condominiums built since the 1970s use post-tensioned concrete construction, where high-strength steel cables (tendons) are tensioned after concrete placement to create compressive stress that increases structural capacity. While post-tensioned systems offer excellent performance when properly constructed and maintained, they can develop serious problems if water reaches the tendons.
              </p>
              <p className="mb-6">
                Post-tension cable corrosion is particularly concerning because it can occur inside the concrete where it&apos;s not visible until significant damage has occurred. When tendons corrode and lose cross-section, they can fail suddenly, sometimes with dramatic visible effects as the released tension causes concrete movement. Inspection and repair of post-tensioned systems requires specialized expertise that FCS and our engineering partners provide.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Waterproofing Failures</h3>
              <p className="mb-6">
                Waterproofing systems protect concrete structures from water intrusion that causes most structural deterioration. When waterproofing fails—due to age, improper installation, or physical damage—water begins penetrating the structure. Common waterproofing failures occur at balcony surfaces, plaza decks, parking structures, below-grade walls, expansion joints, and roof interfaces.
              </p>
              <p className="mb-6">
                Identifying and addressing waterproofing failures early can prevent or minimize structural damage. However, by the time water intrusion becomes visually apparent (staining, efflorescence, active leaks), damage to concrete and reinforcing may already be significant. Remediation often involves removing and replacing failed waterproofing systems while repairing underlying structural damage.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Parking Structure Deterioration</h3>
              <p className="mb-6">
                Multi-level parking structures face particularly harsh conditions. Vehicle traffic wears surfaces and damages waterproofing. Cars drip fluids and road chemicals that attack concrete. Open structures experience temperature extremes and weather exposure. As a result, parking structures often deteriorate faster than other building elements and can represent major repair costs.
              </p>
              <p className="mb-6">
                Common parking structure issues include traffic surface wear, failed expansion joints, beam and column deterioration, drainage problems, and lighting and safety system degradation. Comprehensive parking structure restoration may involve traffic coating replacement, structural concrete repair, expansion joint rehabilitation, and drainage system improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remediation Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8 text-center">
              The Remediation Process: From Assessment to Completion
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p className="text-center mb-8">
                Successful condo remediation requires systematic planning, clear communication, and expert execution. Here&apos;s how FCS approaches each project to ensure results that satisfy engineering requirements, board expectations, and resident needs.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {remediationProcess.map((phase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Assessment and Scoping</h3>
              <p className="mb-6">
                Every remediation project begins with thorough assessment. If the association has already completed milestone inspections, we review the Phase 2 report in detail to understand identified deficiencies and recommended repairs. We then conduct our own evaluation to verify scope, identify any items the engineering report may not have fully addressed, and develop detailed construction plans.
              </p>
              <p className="mb-6">
                For associations that haven&apos;t yet completed inspections, we can coordinate engineering services and participate in the inspection process to gain early understanding of building conditions. This integrated approach helps ensure smooth transition from inspection to remediation.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Engineering Coordination</h3>
              <p className="mb-6">
                Close coordination with the project engineer is essential throughout remediation. Engineers develop repair specifications that define exactly how deficiencies must be addressed. FCS provides constructability input during specification development to ensure repairs can be executed efficiently and cost-effectively. During construction, the engineer inspects work to verify specification compliance, and provides final certification that repairs meet structural requirements.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Bid Development and Board Presentation</h3>
              <p className="mb-6">
                We develop detailed project proposals that clearly explain scope, methodology, schedule, and cost. For condo associations, we understand the importance of presenting information in ways that help boards make informed decisions and communicate effectively with unit owners. Our proposals include clear explanations of what work is required and why, options for phasing or prioritization if budget constraints exist, and realistic timelines that account for the realities of working in occupied buildings.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Phased Construction Approach</h3>
              <p className="mb-6">
                Most condo remediation projects are executed in phases. Phasing serves multiple purposes: it allows residents to remain in the building during construction, helps manage cash flow by spreading costs over time, and enables the association to address highest-priority items first. We work with boards to develop phasing plans that balance urgency with practical constraints.
              </p>
              <p className="mb-6">
                Typical phasing approaches include floor-by-floor progression for balcony work, building-section approaches for facade work, and priority-based scheduling that addresses safety-critical items first. We maintain clear communication with property management about upcoming work affecting specific areas, helping minimize disruption while maintaining construction efficiency.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Minimizing Disruption to Residents</h3>
              <p className="mb-6">
                We understand that condo residents are living in their homes during remediation work. Our approach prioritizes minimizing disruption through careful scheduling, clear communication, and professional site management. We maintain clean, safe work areas; schedule noisy work during reasonable hours; provide advance notice of work affecting specific units; and coordinate with property management to address resident concerns promptly.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Final Documentation</h3>
              <p className="mb-6">
                Completed remediation projects include comprehensive documentation: as-built drawings showing actual work performed, warranty information for materials and workmanship, engineer&apos;s certification of repair adequacy, and maintenance recommendations for preserving repairs. This documentation satisfies SB4-D compliance requirements and provides valuable records for future maintenance planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Balcony Reconstruction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8">
              Balcony Reconstruction: Protecting Residents and Property
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Balconies represent one of the most challenging and critical elements in Florida condo remediation. Their exposure to weather, the complexity of waterproofing horizontal surfaces, and the life-safety implications of balcony failures make them a priority in most remediation projects. FCS brings extensive balcony reconstruction experience to every project, including our landmark $4.9 million Tiara Condominium project involving 180+ balconies.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Florida&apos;s Unique Balcony Challenges</h3>
              <p className="mb-6">
                Florida&apos;s climate creates particularly harsh conditions for balconies. High humidity maintains elevated moisture levels in concrete. Frequent afternoon rain delivers water to horizontal surfaces. Coastal locations add salt exposure that accelerates steel corrosion. Temperature cycling between hot days and cooler nights creates thermal stress. And Florida&apos;s UV exposure degrades many coating and membrane systems faster than in other climates.
              </p>
              <p className="mb-6">
                Many Florida condos built before modern waterproofing standards have balconies that were never adequately protected from these conditions. Original construction may have relied on concrete density alone for moisture protection—an approach that ultimately fails as concrete ages and develops micro-cracks that allow moisture intrusion.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Structural vs. Cosmetic Repairs</h3>
              <p className="mb-6">
                Not all balcony repairs are equal. Cosmetic repairs address surface appearance but may not resolve underlying structural issues. Structural repairs address load-carrying capacity, reinforcing steel condition, and long-term durability. SB4-D compliance typically requires structural repairs when milestone inspections identify substantial deterioration.
              </p>
              <p className="mb-6">
                FCS focuses on structural solutions that address root causes rather than just symptoms. This often means removing deteriorated concrete to sound material, treating or replacing corroded reinforcing, placing new structural concrete, and installing traffic-bearing waterproofing systems designed for Florida conditions. While these repairs cost more initially than surface treatments, they provide lasting solutions that satisfy engineering requirements and protect the association&apos;s investment.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Waterproofing Systems</h3>
              <p className="mb-6">
                Proper waterproofing is essential for balcony longevity. We use multi-layer traffic-bearing membrane systems from manufacturers like Sika, BASF, and Tremco—systems specifically designed for pedestrian deck applications in harsh environments. These systems include primers for concrete adhesion, reinforced membrane layers for crack-bridging capability, wear surfaces that protect the membrane while providing safe walking surfaces, and proper detailing at edges, drains, and penetrations.
              </p>
              <p className="mb-6">
                Equally important is establishing proper drainage. Balconies must slope to drains or edges to prevent water ponding. Drains must connect to building drainage systems. Flashing at wall interfaces must prevent water from entering behind membranes. Getting these details right is the difference between waterproofing that lasts 15-20 years and systems that fail within a few years.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">FCS Balcony Experience: Tiara Condominium</h3>
              <p className="mb-6">
                Our $4.9 million Tiara Condominium Association project demonstrates FCS&apos;s capability for large-scale balcony reconstruction. The project involved complete reconstruction of over 180 balconies in a high-rise condominium, including structural concrete repairs, new waterproofing systems, railing replacement, and finish work. We executed the project in phases to maintain building occupancy throughout construction, coordinating closely with property management to minimize resident disruption.
              </p>
              <p className="mb-6">
                The Tiara project required solving complex logistics: working at height on an occupied building, maintaining weather protection during work, coordinating multiple trade sequences, and meeting exacting quality standards. The experience and systems we developed on this project inform our approach to all balcony work, regardless of scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working with Condo Boards */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8">
              Working with Condo Boards and HOAs
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Condo remediation involves more than construction expertise—it requires understanding how condo associations operate and helping boards navigate complex decisions. FCS brings decades of experience working with condo boards, HOAs, and property management companies on major projects. We understand the governance, communication, and financial challenges associations face.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Board Education and Presentations</h3>
              <p className="mb-6">
                Board members are typically volunteers who may have limited construction or engineering background. When facing complex remediation requirements, boards need information presented clearly and accessibly. FCS provides detailed but understandable presentations explaining what work is required, why it&apos;s necessary, what options exist, and what each option costs. We help boards ask the right questions and understand the implications of different choices.
              </p>
              <p className="mb-6">
                We also recognize that boards often need to explain decisions to unit owners who may question why expensive work is necessary. We provide boards with information and materials that help communicate effectively with owners, building understanding and support for necessary investments.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Reserve Fund Coordination</h3>
              <p className="mb-6">
                Many associations approach SB4-D compliance with inadequate reserves after years of deferrals and waivers. SIRS requirements will change this going forward, but associations still need to fund current remediation needs. We help boards understand how proposed work interacts with reserve status, what funding options exist, and how to develop realistic financial plans.
              </p>
              <p className="mb-6">
                For associations with limited reserves, we can help structure projects to align with available funding while still addressing safety-critical items promptly. Phasing, prioritization, and careful scope definition can help associations begin necessary work without creating impossible financial burdens.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Special Assessment Considerations</h3>
              <p className="mb-6">
                Major remediation projects often require special assessments when reserves are insufficient. Special assessments can create financial hardship for some owners and generate significant community tension. We help boards understand assessment options including multi-year special assessments that spread costs over time, bank financing that converts large assessments into monthly payments, and creative phasing that reduces immediate funding requirements.
              </p>
              <p className="mb-6">
                The key is developing funding strategies before finalizing project scope, so cost and funding considerations can inform planning rather than becoming obstacles after decisions are made.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Owner Communication</h3>
              <p className="mb-6">
                Successful remediation projects require owner buy-in and cooperation. Owners need to understand why work is necessary, how it will affect them during construction, and what benefits they&apos;ll receive. We support board communication efforts by providing clear project information, answering owner questions at meetings when requested, and maintaining professional conduct that reflects well on the association throughout construction.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Phasing to Manage Cash Flow</h3>
              <p className="mb-6">
                Strategic phasing can help associations manage major remediation programs within financial constraints. By carefully sequencing work, associations can address priority items immediately while spreading remaining work across multiple budget years. This approach requires careful coordination to ensure interim conditions don&apos;t create problems, but when properly planned, phasing makes otherwise overwhelming projects manageable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8 text-center">
              Case Studies: Proven Results
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              FCS has completed over $7.4 million in condo remediation projects throughout Tampa Bay. Here are examples demonstrating our capability and approach.
            </p>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-green-dark mb-1">{study.name}</h3>
                      <p className="text-gray-600 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {study.location}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <span className="text-3xl font-bold text-brand-gold">{study.value}</span>
                      <p className="text-sm text-gray-600">{study.scope}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{study.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {study.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Additional Multi-Family Experience</h3>
              <p className="mb-6">
                Beyond these featured projects, FCS has extensive experience in multi-family construction and restoration dating back over 40 years. Our predecessor companies—Florida Restoration Team and Shamblin Construction—completed numerous condominium, apartment, and multi-family projects throughout Florida. This depth of experience informs our understanding of multi-family building systems, association dynamics, and the particular challenges of working in occupied buildings.
              </p>
              <p className="mb-6">
                Our team includes professionals who have managed condominium construction from initial development through restoration and remediation. We understand how these buildings are built, how they age, what systems typically require attention, and how to execute repairs efficiently while maintaining building operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Common questions about SB4-D compliance, milestone inspections, SIRS, and condo remediation.
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-lg px-6 shadow-sm"
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

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-4 text-center">
            Condo Remediation Service Areas
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            FCS provides SB4-D compliance and condo remediation services throughout the Tampa Bay region. Our focus allows us to deliver hands-on project management and consistent quality.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {LOCATIONS.map((location) => (
              <div
                key={location.slug}
                className="bg-gray-50 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <MapPin className="w-5 h-5 text-brand-green mx-auto mb-2" />
                <span className="font-semibold text-brand-green-dark">
                  {location.name}, FL
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-green-dark">
        <div className="container-custom text-center">
          <AlertTriangle className="w-16 h-16 text-brand-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            SB4-D Deadlines Won&apos;t Wait. Neither Should You.
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            The December 31, 2024 deadline is fast approaching for many Tampa Bay condominiums. If your association hasn&apos;t started the SB4-D compliance process, every week matters.
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Contact FCS today for a compliance assessment. We&apos;ll review your building&apos;s status, explain your requirements, and help you develop a plan to meet deadlines and protect your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all text-lg"
            >
              Request SB4-D Compliance Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2">{BUSINESS_INFO.yearsInBusiness}</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2">$7.4M+</div>
              <div className="text-gray-600">Condo Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2">180+</div>
              <div className="text-gray-600">Balconies Reconstructed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green mb-2">{BUSINESS_INFO.licenseNumber}</div>
              <div className="text-gray-600">FL License</div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>
    </>
  );
}
