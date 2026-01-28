import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  AlertTriangle,
  Building,
  Phone,
  HelpCircle,
  DollarSign,
  FileText,
  Clock,
  Calculator,
  Award,
  TrendingUp,
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
  title: "Historic Tax Credits for Commercial Buildings | Tampa Bay | FCS",
  description:
    "Complete guide to federal and Florida historic tax credits for commercial building rehabilitation. Eligibility, application process, and maximizing returns on Tampa Bay historic properties.",
  keywords:
    "historic tax credit Florida, federal rehabilitation tax credit, commercial historic preservation Tampa, NPS tax credit application, historic building investment",
};

const taxCreditOverview = [
  {
    credit: "Federal Historic Tax Credit (HTC)",
    percentage: "20%",
    basis: "Qualified Rehabilitation Expenditures (QREs)",
    eligibility: "Certified historic structures; income-producing use",
    administrator: "National Park Service / IRS",
    keyBenefit: "Dollar-for-dollar reduction in federal tax liability",
  },
  {
    credit: "Florida Historic Tax Credit",
    percentage: "Up to 20%",
    basis: "Qualified expenses per Florida standards",
    eligibility: "State-recognized historic properties",
    administrator: "Florida Division of Historical Resources",
    keyBenefit: "Can be combined with federal credit for up to 40% total",
  },
  {
    credit: "Ad Valorem Tax Exemption",
    percentage: "Up to 100%",
    basis: "Assessed value of improvements (10-year term)",
    eligibility: "Properties in participating jurisdictions",
    administrator: "Local Property Appraiser",
    keyBenefit: "Significant property tax savings during payback period",
  },
];

const eligibilityRequirements = [
  {
    requirement: "Certified Historic Structure",
    description: "Building must be listed on National Register of Historic Places individually or as a contributing building in a registered historic district",
    verification: "NPS Part 1 application confirms historic status",
    tampaBay: "Ybor City, Hyde Park, parts of downtown Tampa, various individual listings",
  },
  {
    requirement: "Substantial Rehabilitation",
    description: "Qualified expenditures must exceed the greater of $5,000 or the adjusted basis of the building",
    verification: "Adjusted basis = purchase price minus land value, plus prior improvements, minus depreciation",
    tampaBay: "Most significant rehabilitations easily meet this threshold",
  },
  {
    requirement: "Income-Producing Use",
    description: "Building must be used for income-producing purposes (not owner-occupied residential)",
    verification: "Commercial, rental residential, mixed-use all qualify",
    tampaBay: "Offices, retail, apartments, hotels, restaurants all eligible",
  },
  {
    requirement: "Secretary of Interior Standards",
    description: "Work must comply with Secretary of Interior&apos;s Standards for Rehabilitation",
    verification: "NPS Part 2 review ensures compliance before construction",
    tampaBay: "FCS works with preservation architects familiar with these standards",
  },
  {
    requirement: "5-Year Hold Period",
    description: "Property must be held for at least 5 years after placed in service",
    verification: "Sale or change of use triggers credit recapture",
    tampaBay: "Plan ownership structure accordingly; partnerships common",
  },
];

const applicationProcess = [
  {
    part: "Part 1: Historic Significance",
    timing: "Before acquisition or early planning",
    purpose: "Confirms building qualifies as certified historic structure",
    submittedTo: "State Historic Preservation Office (SHPO) then NPS",
    timeline: "30 days SHPO review + 30 days NPS review",
    outcome: "Approval confirms eligibility; denial can sometimes be appealed",
  },
  {
    part: "Part 2: Description of Rehabilitation",
    timing: "Before construction begins (strongly recommended)",
    purpose: "Reviews proposed work for compliance with Secretary&apos;s Standards",
    submittedTo: "SHPO then NPS",
    timeline: "30 days SHPO + 45-60 days NPS",
    outcome: "Approval is conditional on work being completed as proposed",
  },
  {
    part: "Part 3: Certification of Completed Work",
    timing: "After construction complete, before claiming credit",
    purpose: "Confirms completed work matches approved Part 2",
    submittedTo: "SHPO then NPS",
    timeline: "30 days SHPO + 90 days NPS",
    outcome: "Approval allows credit to be claimed; IRS Form 3468",
  },
];

const qualifiedExpenditures = [
  {
    category: "Structural Work",
    examples: "Foundation repairs, structural steel, load-bearing walls, roof structure",
    qualifies: true,
    notes: "Core structural work typically qualifies if building is retained",
  },
  {
    category: "Building Systems",
    examples: "HVAC, plumbing, electrical, fire suppression, elevators",
    qualifies: true,
    notes: "New systems in historic building shell qualify",
  },
  {
    category: "Interior Finishes",
    examples: "Walls, ceilings, flooring, millwork, built-ins",
    qualifies: true,
    notes: "Both restoration of historic and compatible new work",
  },
  {
    category: "Exterior Restoration",
    examples: "Windows, doors, facade repair, masonry restoration, roofing",
    qualifies: true,
    notes: "Character-defining features especially important",
  },
  {
    category: "Architectural/Engineering Fees",
    examples: "Design fees directly related to rehabilitation",
    qualifies: true,
    notes: "Must be clearly allocated to rehabilitation work",
  },
  {
    category: "Site Work",
    examples: "Parking lots, landscaping, fencing, site utilities",
    qualifies: false,
    notes: "Site improvements outside building footprint do not qualify",
  },
  {
    category: "New Construction/Additions",
    examples: "Building additions, new structures on site",
    qualifies: false,
    notes: "Only work on existing historic structure qualifies",
  },
  {
    category: "Furniture and Equipment",
    examples: "FF&E, moveable equipment, appliances",
    qualifies: false,
    notes: "Only permanently attached building components qualify",
  },
  {
    category: "Acquisition Costs",
    examples: "Building purchase price, closing costs",
    qualifies: false,
    notes: "Only rehabilitation expenditures, not acquisition",
  },
];

const commonMistakes = [
  {
    mistake: "Starting Work Before Part 2 Approval",
    consequence: "Work may not qualify; must be redone or credit denied",
    prevention: "Submit Part 2 early; wait for approval before construction",
    note: "Preliminary work (stabilization) may proceed with documentation",
  },
  {
    mistake: "Removing Character-Defining Features",
    consequence: "Violates Standards; Part 3 denial; credit lost",
    prevention: "Identify and protect all character-defining features in planning",
    note: "Windows, cornices, and interior details are common problem areas",
  },
  {
    mistake: "Incompatible New Work",
    consequence: "Standards violation; rework required; delays",
    prevention: "Work with experienced preservation architect; coordinate early with SHPO",
    note: "New work must be distinguishable but compatible",
  },
  {
    mistake: "Inadequate Documentation",
    consequence: "Cannot prove expenses; reduced credit",
    prevention: "Maintain detailed records; photograph before/during/after",
    note: "Allocate costs clearly between qualified and non-qualified",
  },
  {
    mistake: "Ownership Structure Issues",
    consequence: "Credit may be unusable or lost",
    prevention: "Structure ownership for tax credit utilization; consult tax attorney",
    note: "Syndication common when owner lacks tax liability",
  },
];

const financialExample = {
  projectCost: 5000000,
  landValue: 500000,
  acquisitionPrice: 1200000,
  adjustedBasis: 700000, // acquisition minus land
  rehabilitationCost: 3800000,
  qualifiedExpenses: 3200000, // 84% of rehab cost typical
  federalCredit: 640000, // 20% of QRE
  floridaCredit: 480000, // 15% assumption
  totalCredits: 1120000,
  effectiveCostReduction: "22.4%",
};

const faqs = [
  {
    question: "How much can I save with historic tax credits in Tampa Bay?",
    answer:
      "The federal historic tax credit provides 20% of Qualified Rehabilitation Expenditures (QREs) as a dollar-for-dollar tax credit. Florida offers additional credits up to 20% depending on the program. For a typical Tampa Bay commercial rehabilitation with $3 million in qualified expenses, you could receive $600,000 in federal credits plus up to $450,000-$600,000 in state credits - potentially offsetting over 30% of rehabilitation costs. The actual benefit depends on your tax situation and project specifics.",
  },
  {
    question: "Does my building qualify for historic tax credits?",
    answer:
      "Your building likely qualifies if it is: (1) listed individually on the National Register of Historic Places, or (2) a contributing building in a National Register historic district. Tampa Bay has several historic districts including Ybor City National Historic Landmark District, Hyde Park, and parts of downtown. Individual listings include many pre-1970 commercial buildings. The NPS Part 1 application formally confirms eligibility. Even if not currently listed, significant buildings can sometimes be nominated.",
  },
  {
    question: "Can I use historic tax credits for apartment building rehabilitation?",
    answer:
      "Yes. Rental residential properties (apartments, condos as rentals) are considered income-producing and qualify for the federal historic tax credit. The rehabilitation must still meet the substantial rehabilitation test and comply with Secretary&apos;s Standards. Many historic buildings in Tampa Bay have been successfully converted to apartments using tax credits. Owner-occupied single-family homes do not qualify for the federal credit, though some state programs may apply.",
  },
  {
    question: "What happens if I sell the building before 5 years?",
    answer:
      "The federal historic tax credit has a 5-year recapture period. If you sell or change the building&apos;s use within 5 years of placing it in service, you must recapture (repay) a portion of the credit. The recapture decreases by 20% each year: 100% if sold in year 1, 80% in year 2, and so on, reaching 0% after year 5. Proper ownership structuring with tax counsel can help manage recapture risk in certain situations.",
  },
  {
    question: "How long does the historic tax credit process take?",
    answer:
      "The NPS application process typically takes 4-8 months from Part 1 submission through Part 2 approval. Part 1 (historic significance) takes about 60 days. Part 2 (proposed work) takes 75-90 days. Plan to submit Part 2 at least 3-4 months before you want to begin construction. Part 3 (completed work) takes about 120 days after construction completion. The credit is claimed on your tax return for the year the building is placed in service.",
  },
  {
    question: "Can I combine federal and Florida historic tax credits?",
    answer:
      "Yes, federal and Florida historic tax credits can generally be combined, potentially providing 35-40% total credit on qualified expenditures. However, the Florida credit may be reduced by the amount of federal credit received, depending on the specific program. Additionally, local ad valorem tax exemptions can provide further savings. Work with a tax professional experienced in historic tax credits to optimize the structure for your specific situation.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historic Tax Credits Commercial Buildings", href: "/historic-tax-credits-commercial-buildings/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function HistoricTaxCreditsCommercialBuildingsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Tax Credit Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Historic Building Rehabilitation"
        serviceDescription="Expert commercial historic building rehabilitation in Tampa Bay. Maximizing historic tax credits through compliant restoration and NPS coordination."
        city="Tampa"
        minPrice="500000"
      />
      <ArticleSchema
        headline="Historic Tax Credits for Commercial Buildings | Tampa Bay | FCS"
        description="Complete guide to federal and Florida historic tax credits for commercial building rehabilitation. Eligibility, application process, and maximizing returns on Tampa Bay historic properties."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/historic-tax-credits-commercial-buildings/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Historic Restoration", href: "/commercial/historic-restoration/" },
          { name: "Historic Tax Credits", href: "/historic-tax-credits-commercial-buildings/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="Historic Restoration"
              customHubHref="/commercial/historic-restoration/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Historic Tax Credits for Commercial Buildings
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Maximize your return on historic property investment with federal and
              Florida tax credits. Understanding eligibility, application process, and
              compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Historic Project
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

      {/* Value Proposition */}
      <section className="py-6 bg-brand-gold/20 border-y border-brand-gold/30">
        <div className="container-custom">
          <div className="flex items-center gap-4 text-brand-green-dark">
            <DollarSign className="w-8 h-8 flex-shrink-0" />
            <p className="font-medium">
              <strong>Up to 40% Cost Offset:</strong> Combined federal (20%) and Florida
              (up to 20%) historic tax credits can offset a significant portion of
              rehabilitation costs, making challenging projects financially viable.
            </p>
          </div>
        </div>
      </section>

      {/* Credit Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Available Historic Tax Credits
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Multiple programs can be combined to maximize your tax credit benefit.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {taxCreditOverview.map((credit) => (
              <div key={credit.credit} className="bg-gray-50 rounded-xl p-6">
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-brand-gold">{credit.percentage}</span>
                  <p className="text-sm text-gray-500">of qualified expenses</p>
                </div>
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 text-center">
                  {credit.credit}
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Basis:</span>
                    <p className="text-gray-700">{credit.basis}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Eligibility:</span>
                    <p className="text-gray-700">{credit.eligibility}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Administrator:</span>
                    <p className="text-gray-700">{credit.administrator}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="bg-brand-green-light/20 rounded-lg p-3">
                    <span className="text-xs text-brand-green-dark font-semibold">Key Benefit</span>
                    <p className="text-gray-700 text-sm">{credit.keyBenefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Eligibility Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            All five requirements must be met to claim the federal historic tax credit.
          </p>
          <div className="space-y-4">
            {eligibilityRequirements.map((req, index) => (
              <div key={req.requirement} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                      {req.requirement}
                    </h3>
                    <p className="text-gray-600 mb-3">{req.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <span className="text-xs text-gray-500 block">Verification</span>
                        <p className="text-gray-700 text-sm">{req.verification}</p>
                      </div>
                      <div className="bg-brand-gold/10 rounded-lg p-3">
                        <span className="text-xs text-brand-gold-dark block">Tampa Bay</span>
                        <p className="text-gray-700 text-sm">{req.tampaBay}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            NPS Application Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The three-part NPS application process must be followed in sequence
            for credit certification.
          </p>
          <div className="max-w-4xl mx-auto">
            {applicationProcess.map((part, index) => (
              <div key={part.part} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  {index < applicationProcess.length - 1 && (
                    <div className="w-0.5 h-full bg-brand-gold/30 mx-auto mt-2" />
                  )}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-brand-green-dark">
                      {part.part}
                    </h3>
                    <span className="text-xs bg-brand-gold/20 text-brand-gold-dark px-2 py-1 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {part.timeline}
                    </span>
                  </div>
                  <p className="text-sm text-brand-gold-dark mb-3">{part.timing}</p>
                  <p className="text-gray-600 mb-4">{part.purpose}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-gray-500 block">Submitted To</span>
                      <p className="text-gray-700 text-sm">{part.submittedTo}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <span className="text-xs text-green-600 block">Outcome</span>
                      <p className="text-green-700 text-sm">{part.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualified Expenditures */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Qualified vs Non-Qualified Expenditures
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Only certain costs count toward the tax credit. Understanding what qualifies
            is essential for project planning.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Category</th>
                  <th className="px-4 py-3 text-center font-semibold">Qualifies?</th>
                  <th className="px-4 py-3 text-left font-semibold">Examples</th>
                  <th className="px-4 py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {qualifiedExpenditures.map((exp, index) => (
                  <tr
                    key={exp.category}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {exp.category}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {exp.qualifies ? (
                        <span className="inline-flex items-center gap-1 text-green-600">
                          <CheckCircle className="w-5 h-5" />
                          Yes
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-red-600">
                          <AlertTriangle className="w-5 h-5" />
                          No
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{exp.examples}</td>
                    <td className="px-4 py-3 text-gray-500 text-sm">{exp.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Financial Example */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Sample Tax Credit Calculation
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Hypothetical Tampa Bay historic rehabilitation project demonstrating
            potential tax credit benefits.
          </p>
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Total Project Cost</span>
                <span className="font-bold text-brand-green-dark">
                  ${financialExample.projectCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Rehabilitation Cost (construction)</span>
                <span className="font-medium">
                  ${financialExample.rehabilitationCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Qualified Rehabilitation Expenditures</span>
                <span className="font-medium">
                  ${financialExample.qualifiedExpenses.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b bg-green-50 px-4 -mx-4 rounded">
                <span className="text-green-700 font-medium">Federal Credit (20%)</span>
                <span className="font-bold text-green-700">
                  ${financialExample.federalCredit.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b bg-green-50 px-4 -mx-4 rounded">
                <span className="text-green-700 font-medium">Florida Credit (est. 15%)</span>
                <span className="font-bold text-green-700">
                  ${financialExample.floridaCredit.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-4 bg-brand-gold/20 px-4 -mx-4 rounded">
                <span className="text-brand-green-dark font-bold">Total Tax Credits</span>
                <span className="text-2xl font-bold text-brand-gold-dark">
                  ${financialExample.totalCredits.toLocaleString()}
                </span>
              </div>
              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  Effective cost reduction: <strong>{financialExample.effectiveCostReduction}</strong> of total project
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            Example for illustration only. Actual credits depend on project specifics, tax situation, and program availability.
          </p>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common Mistakes to Avoid
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            These errors frequently result in lost or reduced tax credits. Planning
            ahead prevents costly problems.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonMistakes.map((mistake) => (
              <div key={mistake.mistake} className="bg-white rounded-xl p-6 shadow-md border-t-4 border-red-500">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">
                  {mistake.mistake}
                </h3>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded-lg p-3">
                    <span className="text-xs text-red-600 font-semibold">Consequence</span>
                    <p className="text-red-700 text-sm">{mistake.consequence}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <span className="text-xs text-green-600 font-semibold">Prevention</span>
                    <p className="text-green-700 text-sm">{mistake.prevention}</p>
                  </div>
                  <p className="text-xs text-gray-500 italic">{mistake.note}</p>
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
            Related Historic Restoration Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/commercial/historic-restoration/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Historic Restoration Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full-scope commercial historic preservation in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/tampa-historic-social-clubs-restoration/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Tampa Social Clubs
              </h3>
              <p className="text-gray-600 text-sm">
                Restoring Ybor City&apos;s historic mutual aid society buildings.
              </p>
            </Link>
            <Link
              href="/adaptive-reuse-of-historic-buildings-in-tampa/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Adaptive Reuse
              </h3>
              <p className="text-gray-600 text-sm">
                Converting historic buildings for modern commercial use.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Maximize Your Historic Tax Credit Return
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists has completed tax credit projects
            throughout Tampa Bay. We coordinate with preservation architects and
            SHPO to ensure your project qualifies for maximum credits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Historic Project
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