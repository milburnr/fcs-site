import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import {
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Building2,
  Shield,
  Award,
  AlertTriangle,
  FileText,
  Wrench,
  Clock,
  Calendar,
  DollarSign,
  Users,
  Droplets,
  Scale,
  ClipboardCheck,
  Gauge,
  Home,
  TreeDeciduous,
  Car,
  Landmark,
  Timer,
  HardHat,
  Search,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import {
  LocalBusinessSchema,
  ServiceSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks, RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Condo Remediation Brandon | SB4-D | FCS",
  description:
    "Brandon condo remediation & SB4-D compliance experts. Milestone inspections, SIRS, structural repairs for condos 3+ stories. Serving Valrico, Riverview, FishHawk. Near FCS headquarters. Call (813) 420-7561.",
  keywords:
    "condo remediation Brandon FL, SB4-D compliance Hillsborough, milestone inspection Brandon, SIRS Brandon condos, condo repair Brandon, structural inspection Brandon FL, condo association contractor Hillsborough, FishHawk condo repair, Valrico condo remediation, Riverview condo contractor",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
  { name: "Brandon", href: "/condo-remediation-brandon/" },
];

const trustBadges = [
  { icon: FileText, label: "SB4-D Compliance" },
  { icon: ClipboardCheck, label: "Milestone Inspections" },
  { icon: Shield, label: "Licensed CBC1262722" },
  { icon: MapPin, label: "Near Our Ruskin HQ" },
];

const services = [
  {
    icon: Search,
    title: "Milestone Inspection Coordination",
    description:
      "Complete Phase 1 and Phase 2 milestone inspection coordination with licensed structural engineers for Brandon condominiums approaching their 30-year inspection deadline.",
  },
  {
    icon: FileText,
    title: "SIRS Compliance Support",
    description:
      "Structural Integrity Reserve Study support including repair cost estimates, reserve fund planning, and phased remediation programs for Hillsborough County condo associations.",
  },
  {
    icon: Building2,
    title: "Structural Concrete Repair",
    description:
      "Expert concrete restoration including spall repair, rebar treatment, crack injection, and protective coatings for aging Brandon condo buildings built during the 1980s-2000s development boom.",
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    description:
      "Comprehensive waterproofing solutions addressing water intrusion, failed membranes, drainage issues, and moisture damage common in Brandon's subtropical climate.",
  },
  {
    icon: Scale,
    title: "Balcony & Walkway Repair",
    description:
      "Structural reconstruction of balconies, breezeways, and elevated walkways including code-compliant railing systems meeting current Florida Building Code requirements.",
  },
  {
    icon: Wrench,
    title: "Building Envelope Restoration",
    description:
      "Complete exterior rehabilitation including stucco repair, expansion joint replacement, window and door frame restoration, and protective coating systems.",
  },
];

const brandonNeighborhoods = [
  "Brandon Town Center",
  "Valrico",
  "Riverview",
  "FishHawk Ranch",
  "Bloomingdale",
  "Providence",
  "Durant",
  "Lithia",
  "Keystone",
  "Mango",
  "Seffner",
  "Dover",
];

const processSteps = [
  {
    step: 1,
    title: "Initial Assessment",
    description:
      "Comprehensive structural evaluation of your Brandon condominium including concrete condition analysis, moisture assessment, and scope development aligned with SB4-D requirements.",
  },
  {
    step: 2,
    title: "Engineering Coordination",
    description:
      "Collaboration with licensed structural engineers for milestone inspections, detailed repair specifications, and permit coordination with Hillsborough County Building Department.",
  },
  {
    step: 3,
    title: "Board Presentation",
    description:
      "Professional proposals and presentations for your condo association board including phased options, cost analysis, and timeline projections that fit your reserve planning.",
  },
  {
    step: 4,
    title: "Funding Strategy Support",
    description:
      "Assistance developing funding strategies including reserve analysis, special assessment planning, and phased construction approaches that manage cash flow for Brandon associations.",
  },
  {
    step: 5,
    title: "Phased Construction",
    description:
      "Strategic project execution designed to maintain building occupancy, minimize disruption to residents, and coordinate with seasonal population patterns in Brandon communities.",
  },
  {
    step: 6,
    title: "Documentation & Certification",
    description:
      "Complete documentation package for engineering sign-off, SB4-D compliance certification, and ongoing maintenance planning to protect your association's investment.",
  },
];

const brandonFaqs = [
  {
    question: "What is Florida SB4-D and how does it affect Brandon condominiums?",
    answer:
      "Florida Senate Bill 4-D, enacted following the 2021 Surfside tragedy, mandates milestone structural inspections and Structural Integrity Reserve Studies (SIRS) for condominium buildings three stories or taller. For Brandon properties, which are located more than three miles from the coastline, buildings 30 years or older must complete their initial milestone inspection by December 31, 2025. Many Brandon condominiums built during the 1980s-2000s development boom are now approaching or have passed this critical 30-year threshold, requiring immediate attention to maintain compliance and protect unit owner investments.",
  },
  {
    question: "Why are 1980s-2000s era Brandon condos facing particular challenges?",
    answer:
      "Brandon experienced significant condominium development during the 1980s through early 2000s as Tampa's suburban expansion accelerated. Many of these buildings are now 25-40+ years old and approaching their SB4-D milestone inspection deadlines. Common issues in this era's construction include: foundation settling in Brandon's sandy soils, water management problems from aging drainage systems, concrete deterioration from decades of Florida's humid subtropical climate, outdated waterproofing systems that have exceeded their service life, and deferred maintenance that accumulated before SB4-D's mandatory reserve requirements. These buildings represent the heart of Brandon's condo market and require proactive attention now.",
  },
  {
    question: "How much does condo remediation typically cost for Brandon associations?",
    answer:
      "Condo remediation costs in Brandon vary significantly based on building size, extent of deterioration, and scope of required repairs. Milestone inspections typically range from $3,000-$15,000 for Phase 1, with Phase 2 (if triggered) adding $15,000-$75,000 depending on complexity. SIRS studies cost $5,000-$30,000 based on building size. Remediation work ranges widely: concrete spalling repair runs $15-50 per square foot, balcony reconstruction $300-600 per square foot, and comprehensive building envelope rehabilitation $50-150 per square foot of wall area. FCS provides detailed estimates after engineering assessment, with phased options to help associations manage costs within reserve fund capacities.",
  },
  {
    question: "What are the most common structural issues found in Brandon condominiums?",
    answer:
      "Brandon condominiums commonly experience issues related to their inland location and age: foundation settling due to Florida's sandy soils causing structural cracking; water intrusion from failed flat roof systems, stucco cracks, and aging window seals; concrete deterioration including spalling and rebar corrosion accelerated by humidity; balcony and walkway deterioration from decades of weather exposure; drainage failures causing water pooling and moisture damage; and expansion joint deterioration allowing water penetration. While Brandon buildings avoid direct salt exposure, the subtropical humidity and heavy seasonal rains create their own challenges for concrete structures.",
  },
  {
    question: "Does Brandon's inland location mean different SB4-D deadlines than coastal areas?",
    answer:
      "Yes, significantly. Brandon's location more than three miles from Florida's coastline means buildings have until their 30th birthday (rather than 25th for coastal properties) to complete initial milestone inspections. For existing buildings already past 30 years, the deadline is December 31, 2025—one year later than the December 31, 2024 deadline for coastal buildings. However, this extra time shouldn't encourage delay. Many Brandon buildings are already past 30 years old, and the engineering and remediation work that inspections may reveal takes months to complete. Starting the compliance process now ensures adequate time for thorough work.",
  },
  {
    question: "How does FCS's proximity to Brandon benefit local condo associations?",
    answer:
      "Florida Construction Specialists is headquartered in nearby Ruskin, just 20-25 minutes from most Brandon locations. This proximity provides significant advantages for Brandon condo associations: faster response times for assessments and emergency situations, reduced mobilization costs without long-distance travel expenses, established relationships with Hillsborough County Building Department, familiarity with local subcontractors and material suppliers, and the ability to efficiently manage multiple Brandon projects. Our team regularly serves the Brandon, Valrico, Riverview, and FishHawk communities, understanding the specific characteristics of suburban Hillsborough County construction.",
  },
  {
    question: "Can Brandon condo residents stay in their units during remediation work?",
    answer:
      "In the vast majority of cases, yes. FCS develops phased remediation plans specifically designed to maintain building occupancy. Our approach includes working floor-by-floor or building-by-building for multi-structure associations, creating temporary weather barriers during exterior work, scheduling noisy operations during reasonable daytime hours, maintaining all life safety systems throughout construction, and providing advance notice to affected residents. Only in rare cases of severe structural deficiency requiring immediate shoring would temporary relocation be recommended. We prioritize both safety and minimal disruption to residents' daily lives.",
  },
  {
    question: "What funding options exist for Brandon condo associations facing SB4-D compliance?",
    answer:
      "Brandon associations have several funding approaches available: existing reserve funds (if adequately funded, which SB4-D now requires); special assessments spread over one or multiple years; bank loans secured by future assessments, typically repaid over 5-15 years; phased construction spreading work across multiple budget cycles to align with reserve accumulation; and combinations of these approaches. Many associations use reserve loans to begin immediate work while collecting special assessments. FCS helps Brandon boards understand options and develop strategies that balance compliance urgency with unit owner financial capacity.",
  },
  {
    question: "What is a SIRS and why is it now mandatory for Brandon condos?",
    answer:
      "A Structural Integrity Reserve Study (SIRS) is a specialized reserve analysis focused specifically on structural components, now required by SB4-D for all condominium buildings three stories or taller. Unlike traditional reserve studies, SIRS cannot use pooled funding approaches, and associations cannot vote to waive or reduce structural reserve contributions. Required components include: roof structure and covering, load-bearing walls and primary structural members, floor structures, foundation, fireproofing systems, main plumbing and electrical, waterproofing and exterior painting, and any item with deferred maintenance exceeding $10,000. All affected Brandon associations must complete their initial SIRS by December 31, 2024, with reserve funding requirements beginning January 1, 2025.",
  },
  {
    question: "How long does the complete SB4-D compliance and remediation process take?",
    answer:
      "The timeline from starting compliance efforts to completed remediation typically spans 12-24 months depending on scope. Phase 1 milestone inspections take 2-4 weeks to schedule and complete. If Phase 2 is triggered, add 4-8 weeks for detailed investigation. SIRS studies require 4-8 weeks. Engineering and bid development for remediation work takes 6-12 weeks. Construction duration varies dramatically by scope—individual component repairs may take weeks while comprehensive building remediation spans 6-18 months. For Brandon buildings approaching their 30-year deadline in 2025, starting now provides adequate time for thorough compliance work.",
  },
  {
    question: "What happens if our Brandon association fails to comply with SB4-D?",
    answer:
      "Non-compliance carries serious consequences that escalate over time. Hillsborough County building officials can issue notices of non-compliance that become public record. Board members may face personal liability for breach of fiduciary duty in failing to protect the association. Insurance carriers may decline coverage or charge significantly higher premiums. Unit sales become difficult as buyers and lenders increasingly require SB4-D compliance documentation before closing. In extreme cases, buildings can be declared unsafe for occupancy. Given Brandon's competitive real estate market and substantial property values, non-compliance creates significant financial risk for unit owners.",
  },
  {
    question: "Does FCS work directly with Brandon condo boards and property managers?",
    answer:
      "Absolutely. Florida Construction Specialists has extensive experience working with Hillsborough County condo associations and property management companies throughout the Brandon area. We understand condominium governance dynamics, the challenges of reaching consensus among unit owners, and the importance of clear communication with all stakeholders. Our team provides detailed proposals suitable for board presentations, attends association meetings when requested, offers flexible payment terms aligned with special assessment schedules, and maintains regular progress updates throughout construction. We're familiar with Hillsborough County permitting requirements and have established relationships that help streamline the approval process.",
  },
];

const internalLinks = [
  { href: "/commercial/condo-remediation/", label: "Condo Remediation & SB4-D Compliance" },
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/services/residential/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/condo-remediation-tampa/", label: "Condo Remediation Tampa" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoRemediationBrandonPage() {
  return (
    <>
      <LocalBusinessSchema city="Brandon" service="Condo Remediation & SB4-D Compliance" />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="Expert condo remediation and SB4-D compliance services for Brandon condominiums, including milestone inspections, SIRS support, structural repairs, and waterproofing. Serving Valrico, Riverview, FishHawk, and Hillsborough County. Projects from $100,000 to $5 million+."
        city="Brandon"
        minPrice="100000"
      />
      <FAQSchema faqs={brandonFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/FCS-Exterior-Waterproofing/fcs-exterior-waterproofing-display.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green font-semibold">Serving Brandon & East Hillsborough County</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Remediation & SB4-D Compliance in Brandon
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Tampa Bay's trusted contractor for Brandon condominium milestone inspections,
              structural repairs, and SB4-D compliance. Headquartered nearby in Ruskin, we're
              your local experts for buildings three stories and higher throughout Hillsborough
              County. Projects from $100K to $5M+.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <badge.icon className="w-5 h-5 text-brand-green" />
                  <span className="text-white font-medium">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request Compliance Assessment
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

      {/* SB4-D Alert Banner */}
      <section className="py-4 bg-amber-50 border-y border-amber-200">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-amber-800">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold text-center">
              <strong>SB4-D Compliance Alert:</strong> Brandon buildings 30+ years old must complete
              milestone inspections by December 31, 2025. Many 1980s-90s era condos are now past
              deadline. Contact FCS for immediate assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Brandon's Trusted Condo Remediation Contractor
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists is the Tampa Bay area's premier contractor for
                condo remediation and SB4-D compliance, serving Brandon and eastern Hillsborough
                County from our nearby Ruskin headquarters. With over 40 years of construction
                experience and more than $7.4 million in completed condominium remediation projects,
                we understand the unique challenges facing Brandon's aging condo communities—and
                we're positioned just 20 minutes away to respond quickly to your association's needs.
              </p>

              <p className="text-gray-600 mb-6">
                Brandon experienced tremendous growth during the 1980s through early 2000s, establishing
                itself as one of Tampa Bay's premier suburban communities. That development boom created
                a significant inventory of condominium buildings—many in the Valrico, Riverview, FishHawk,
                and Bloomingdale areas—that are now reaching their 30-year milestone inspection deadlines
                under Florida's SB4-D legislation. These buildings represent substantial investments for
                unit owners, and protecting those investments requires proactive compliance with the state's
                new structural safety requirements.
              </p>

              <p className="text-gray-600 mb-8">
                Unlike coastal communities facing the 25-year inspection deadline, Brandon's inland location
                provides the 30-year threshold—offering slightly more time but no less urgency. Buildings
                constructed in the 1990s are now entering their compliance window, and the engineering,
                planning, and remediation work that milestone inspections may reveal takes months to complete
                properly. FCS helps Brandon associations navigate this process from initial inspection
                through completed repairs, ensuring full compliance while managing costs and minimizing
                disruption to residents.
              </p>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/FCS-Exterior-Waterproofing/fcs-exterior-waterproofing-display.webp"
                    alt="Exterior waterproofing restoration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Building Envelope</p>
                    <p className="text-xs text-gray-200">Waterproofing Systems</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                    alt="Balcony reconstruction"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Balcony Repair</p>
                    <p className="text-xs text-gray-200">Structural Restoration</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/custom-home-construction-2/custom-home-construction-2-display.webp"
                    alt="Completed condo project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Quality Results</p>
                    <p className="text-xs text-gray-200">Completed Projects</p>
                  </div>
                </div>
              </div>

              {/* Target Audience Section */}
              <div className="bg-brand-green-bg rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-green" />
                  Who We Serve in Brandon
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Condo Associations</span>
                      <p className="text-sm text-gray-600">
                        Board members navigating SB4-D compliance for 1980s-2000s era buildings
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Property Managers</span>
                      <p className="text-sm text-gray-600">
                        Managing milestone inspection repairs throughout Hillsborough County
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Multi-Family Owners</span>
                      <p className="text-sm text-gray-600">
                        Apartment and multi-family building structural maintenance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">HOA Boards</span>
                      <p className="text-sm text-gray-600">
                        Decision-makers seeking qualified contractors for $100K+ projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proximity Callout */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      Your Neighbor in Ruskin
                    </h4>
                    <p className="text-blue-800">
                      FCS is headquartered in Ruskin, just 20-25 minutes from most Brandon locations.
                      This proximity means faster response times, lower mobilization costs, and a team
                      that truly understands Hillsborough County's building stock, permitting processes,
                      and the specific challenges of suburban Florida construction. When you call, we're
                      close enough to be on site the same day for urgent situations.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Need a Compliance Assessment for Your Brandon Building?
                    </h4>
                    <p className="text-gray-600">
                      We provide complimentary consultations for qualified projects.
                    </p>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-dark transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">HOA & Property Managers</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary assessment and proposal for your Brandon condominium's
                  SB4-D compliance and remediation needs.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-brand-green-forest transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* SB4-D Info Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  SB4-D Quick Facts for Brandon
                </h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Applies to:</span> Buildings 3+ stories
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Inland deadline:</span> 30 years old
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Existing 30+:</span> By Dec 31, 2025
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">SIRS deadline:</span> Dec 31, 2024
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Penalties:</span> Liability, insurance, sales
                  </li>
                </ul>
                <Link
                  href="/commercial/condo-remediation/"
                  className="text-amber-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Read Full SB4-D Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Services */}
              <RelatedServices city="Brandon" currentService="condo-remediation" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="Brandon"
                service="condo-remediation"
                serviceName="Condo Remediation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Condo Remediation Services in Brandon
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive SB4-D compliance and structural remediation solutions for Brandon
              condominiums, from milestone inspections through completed repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-brand-green-bg rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Visual Break */}
      <ContentParallax
        src="/images/fcs-concrete-restoration/fcs-concrete-restoration-large.webp"
        alt="Condo structural remediation"
        title="SB 4-D Compliance Experts"
        subtitle="Trusted by HOAs and property managers throughout Tampa Bay"
        overlayOpacity={0.55}
      />

      {/* Brandon-Specific Challenges Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Brandon's Suburban Condo Challenges
              </h2>

              <p className="text-gray-600 mb-6">
                While Brandon avoids the extreme salt exposure that accelerates deterioration in
                coastal condominiums, the area's suburban building stock faces its own distinctive
                challenges. Understanding these issues helps associations anticipate what milestone
                inspections may reveal and what remediation work may be required for buildings
                constructed during the 1980s-2000s development boom.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Home className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Foundation Settling</h4>
                    <p className="text-gray-600 text-sm">
                      Brandon's sandy Florida soils can cause foundation movement over decades,
                      leading to structural cracks, door and window misalignment, and uneven
                      floors. Buildings 30+ years old frequently show settling-related issues.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Water Management Issues</h4>
                    <p className="text-gray-600 text-sm">
                      Aging drainage systems, failed flat roofs, and deteriorated stucco allow
                      water intrusion that damages structural elements. Heavy summer rains
                      overwhelm aging infrastructure in many 1980s-era buildings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Age-Related Deterioration</h4>
                    <p className="text-gray-600 text-sm">
                      Decades of Florida's subtropical humidity, temperature cycling, and UV
                      exposure degrade waterproofing systems, concrete surfaces, and expansion
                      joints regardless of coastal proximity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Timer className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Deferred Maintenance</h4>
                    <p className="text-gray-600 text-sm">
                      Before SB4-D's mandatory reserve requirements, many associations deferred
                      structural maintenance to avoid special assessments. Those deferred issues
                      now require attention for compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Brandon Areas We Serve
              </h3>
              <p className="text-gray-600 mb-6">
                FCS provides condo remediation services throughout Brandon and eastern Hillsborough
                County. Our team is familiar with local building departments, permit processes,
                and the specific characteristics of each community's condominium inventory.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {brandonNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-700 text-sm">{neighborhood}</span>
                  </div>
                ))}
              </div>

              {/* Era Callout */}
              <div className="mt-8 p-6 bg-brand-green-bg rounded-xl">
                <h4 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  1980s-2000s Building Era
                </h4>
                <p className="text-gray-700 text-sm">
                  Brandon's major condo development occurred during the suburban boom from the
                  1980s through early 2000s. Buildings from this era share common characteristics:
                  stucco-over-block construction, flat or low-slope roofs, breezeway-style layouts,
                  and waterproofing technologies that have reached end-of-life after 30+ years.
                  Understanding these construction patterns helps FCS efficiently assess and
                  remediate Brandon buildings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SB4-D Compliance Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                SB4-D Compliance for Brandon Condominiums
              </h2>

              <p className="text-gray-200 mb-6">
                Florida Senate Bill 4-D, enacted in response to the 2021 Surfside condominium
                collapse, establishes mandatory milestone inspections and Structural Integrity
                Reserve Studies for buildings three stories or taller. Brandon's inland location
                provides the 30-year inspection threshold—one year longer than coastal properties—but
                many Brandon buildings have already passed their deadline, requiring immediate action.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>30-Year Milestone:</strong> Brandon buildings (inland location) must
                    complete inspections at 30 years old, then every 10 years thereafter.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>December 31, 2025 Deadline:</strong> Buildings already 30+ years old
                    must complete milestone inspections by this date to avoid non-compliance.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>SIRS Required Now:</strong> Structural Integrity Reserve Studies must
                    be completed by December 31, 2024, with mandatory reserve funding beginning January 1, 2025.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Hillsborough County:</strong> FCS coordinates with Hillsborough County
                    Building Department for all permits and inspections throughout the Brandon area.
                  </span>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
              >
                Discuss SB4-D Compliance <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$7.4M+</div>
                <div className="text-gray-300 text-sm">Condo Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <HardHat className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">40+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Car className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">20 min</div>
                <div className="text-gray-300 text-sm">From Our Ruskin HQ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Shield className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$10M+</div>
                <div className="text-gray-300 text-sm">Bonding Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Inspection Detail Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Understanding Milestone Inspections for Brandon Buildings
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The milestone inspection process established by SB4-D involves two potential phases,
                each designed to identify and address structural deficiencies before they become
                safety hazards. For Brandon's 30-year-old buildings, this process often reveals
                issues accumulated over decades of deferred maintenance.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                Phase 1: Visual Inspection
              </h3>
              <p className="mb-6">
                Phase 1 is a comprehensive visual examination performed by a Florida-licensed
                engineer or architect. The inspector examines primary structural systems including
                load-bearing walls, foundation elements, floor and roof structures, and the
                building envelope. For Brandon condominiums, particular attention focuses on
                areas prone to water intrusion, foundation settling, and age-related concrete
                deterioration common in 1980s-2000s era construction.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                Phase 2: Detailed Investigation
              </h3>
              <p className="mb-6">
                If Phase 1 reveals substantial structural deterioration, Phase 2 becomes mandatory.
                This involves more extensive investigation including destructive testing (concrete
                cores, rebar exposure), laboratory analysis, and development of a comprehensive
                repair plan with cost estimates and timelines. FCS coordinates closely with engineers
                during Phase 2 to ensure repair recommendations are practical and accurately priced.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">
                From Inspection to Remediation
              </h3>
              <p className="mb-6">
                Receiving a Phase 2 report identifying structural issues can be concerning for
                Brandon condo boards, but it's the first step toward protecting residents and
                property values. FCS helps associations move from inspection findings to completed
                repairs through careful project planning, board presentations with clear cost and
                timeline information, funding strategy development, and phased construction that
                maintains building occupancy. Our proximity in Ruskin allows us to respond quickly
                throughout this process, keeping projects on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Brandon Remediation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FCS manages every aspect of condo remediation from initial assessment through
              completed construction, with special attention to association governance and
              Hillsborough County requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-brand-green-dark to-brand-green-forest rounded-2xl p-8 md:p-12 text-white">
              <div className="flex items-start gap-4 mb-6">
                <Award className="w-12 h-12 text-brand-gold flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Proven Condo Remediation Experience</h3>
                  <p className="text-gray-200">
                    FCS completed the $4.9 million Tiara Condominium Association project—one of the
                    largest condo remediation projects in Tampa Bay history—involving reconstruction
                    of over 180 balconies while maintaining building occupancy throughout construction.
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-1">$4.9M</div>
                  <div className="text-gray-300 text-sm">Project Value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-1">180+</div>
                  <div className="text-gray-300 text-sm">Balconies Reconstructed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold mb-1">100%</div>
                  <div className="text-gray-300 text-sm">Occupancy Maintained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FCS Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Brandon Associations Choose Florida Construction Specialists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Local to Brandon
              </h3>
              <p className="text-gray-600">
                Headquartered in Ruskin, just 20-25 minutes away. This proximity means faster
                response, lower costs, and a team that understands Hillsborough County construction
                inside and out. We're your neighbor, not a distant contractor.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Prime Contractor Only
              </h3>
              <p className="text-gray-600">
                FCS always serves as the prime contractor, never a subcontractor. Your Brandon
                association gets direct accountability, single-point responsibility, and our
                full $10M+ bonding protection on every project.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                SB4-D Expertise
              </h3>
              <p className="text-gray-600">
                We understand the unique requirements for inland Hillsborough County properties,
                work seamlessly with structural engineers, and provide complete documentation
                for compliance certification with Hillsborough County Building Department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Request Your Brandon Compliance Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're approaching your 30-year milestone, responding to inspection
                findings, or planning proactive structural maintenance, FCS provides expert
                assessment and remediation solutions for Brandon condominiums and multi-family
                buildings throughout Hillsborough County.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Complimentary consultation for qualified projects ($100K+)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Detailed proposals suitable for board presentations
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Phased approaches to accommodate reserve fund planning
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Hillsborough County permit coordination included
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Speak with Our Team</h3>
                <p className="text-gray-200 mb-4">
                  For immediate assistance with your Brandon condo remediation project:
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Assessment</h3>
              <HighLevelForm height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={brandonFaqs}
        title="Brandon Condo Remediation FAQs"
        description="Common questions about SB4-D compliance, milestone inspections, condo remediation, and HOA projects in Brandon, Florida and Hillsborough County."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Brandon and Eastern Hillsborough County
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides condo remediation services throughout
              Brandon, Valrico, Riverview, FishHawk, Bloomingdale, and surrounding Hillsborough
              County communities from our nearby Ruskin headquarters.
            </p>
          </div>
          <GoogleMap city="Brandon" height={400} />
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks title="Related Services & Resources" links={internalLinks} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Brandon's Local Condo Remediation Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From SB4-D compliance assessments to full structural remediation, Florida Construction
            Specialists is Brandon's trusted contractor for condominium restoration—and we're
            just 20 minutes away in Ruskin. Contact us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
