import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  AlertTriangle,
  FileCheck,
  ArrowRight,
  Phone,
  HelpCircle,
  Clock,
  MapPin,
  Shield,
  Ruler,
  Home,
  Calendar,
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
  title: "Certificate of Appropriateness Tampa | Historic Review Process | FCS",
  description:
    "Navigate Tampa's Certificate of Appropriateness (COA) process for historic properties. Expert guidance on application requirements, review criteria, and approval strategies for historic renovations.",
  keywords:
    "certificate of appropriateness Tampa, COA historic review, Tampa historic preservation, ARC approval Tampa, historic renovation permit, Hyde Park historic review",
};

const coaTypes = [
  {
    type: "Administrative Review (Staff Level)",
    scope: "Minor work, routine maintenance, in-kind repairs",
    timeline: "1-2 weeks",
    examples: "Paint in approved colors, window repairs, roof replacement in-kind",
    approval: "Historic Preservation staff",
    tips: "Most common for maintenance work; requires photos and specifications",
  },
  {
    type: "Architectural Review Commission (ARC)",
    scope: "Significant alterations, additions, new construction",
    timeline: "4-8 weeks",
    examples: "Additions, new windows, exterior alterations, demolition",
    approval: "ARC board (monthly meetings)",
    tips: "Requires detailed plans; present in person for best results",
  },
  {
    type: "Economic Hardship Review",
    scope: "When compliance creates unreasonable financial burden",
    timeline: "8-12 weeks",
    examples: "Request for alternative materials, reduced requirements",
    approval: "ARC after financial documentation",
    tips: "Rarely granted; requires extensive documentation",
  },
  {
    type: "Demolition Review",
    scope: "Full or partial demolition of contributing structures",
    timeline: "3-6 months minimum",
    examples: "Building demolition, removing significant features",
    approval: "ARC + City Council in some cases",
    tips: "Most scrutinized; often requires mitigation measures",
  },
];

const reviewCriteria = [
  {
    standard: "Secretary of Interior Standards",
    description: "Federal guidelines for historic preservation",
    keyPoints: [
      "Preserve historic character",
      "Distinguish new from old",
      "Repair rather than replace",
      "Reversibility preferred",
    ],
  },
  {
    standard: "District Design Guidelines",
    description: "Specific requirements for each historic district",
    keyPoints: [
      "Materials and finishes",
      "Window and door specifications",
      "Addition placement and scale",
      "Color palettes",
    ],
  },
  {
    standard: "Period Appropriateness",
    description: "Compatibility with original construction era",
    keyPoints: [
      "Architectural style consistency",
      "Material authenticity",
      "Proportions and scale",
      "Detail accuracy",
    ],
  },
  {
    standard: "Neighborhood Context",
    description: "Compatibility with surrounding structures",
    keyPoints: [
      "Setbacks and massing",
      "Height relationships",
      "Visual continuity",
      "Streetscape impact",
    ],
  },
];

const applicationRequirements = [
  {
    item: "Application Form",
    description: "City of Tampa COA application with project details",
    tips: "Complete all sections; incomplete applications delay review",
  },
  {
    item: "Property Photos",
    description: "Current photos of all affected areas and overall property",
    tips: "Include context shots showing relationship to neighbors",
  },
  {
    item: "Site Plan",
    description: "Showing property boundaries, existing structures, proposed work",
    tips: "For additions, show setbacks and relationship to main structure",
  },
  {
    item: "Architectural Drawings",
    description: "Plans, elevations, and details for proposed work",
    tips: "Scale drawings; show existing vs. proposed conditions",
  },
  {
    item: "Material Specifications",
    description: "Detailed specs for all proposed materials",
    tips: "Include manufacturer cut sheets, samples if possible",
  },
  {
    item: "Historic Documentation",
    description: "Research on original construction if requesting changes",
    tips: "Sanborn maps, historic photos help justify restoration",
  },
  {
    item: "Contractor Information",
    description: "Licensed contractor with historic preservation experience",
    tips: "Experience matters; provide relevant project list",
  },
];

const tampaHistoricDistricts = [
  {
    district: "Hyde Park Historic District",
    established: "1985",
    period: "1880s-1930s",
    styles: "Queen Anne, Craftsman, Colonial Revival, Mediterranean Revival",
    strictness: "High - Detailed design guidelines",
    notes: "Tampa's largest residential historic district",
  },
  {
    district: "Tampa Heights Historic District",
    established: "2007",
    period: "1890s-1940s",
    styles: "Vernacular, Craftsman, Frame Vernacular",
    strictness: "Moderate - Focus on character-defining features",
    notes: "Working-class historic neighborhood",
  },
  {
    district: "Ybor City Historic District",
    established: "1974 (National)",
    period: "1880s-1920s",
    styles: "Mediterranean, Commercial, Casitas, Cigar factories",
    strictness: "Very High - Both local and National Register",
    notes: "Commercial and residential; strict signage requirements",
  },
  {
    district: "Seminole Heights Historic District",
    established: "2000s (multiple districts)",
    period: "1910s-1940s",
    styles: "Craftsman Bungalow, Mediterranean, Minimal Traditional",
    strictness: "Moderate - Emphasis on preservation",
    notes: "Several smaller districts with varying guidelines",
  },
  {
    district: "West Tampa Historic District",
    established: "2003",
    period: "1890s-1930s",
    styles: "Vernacular, Craftsman, Shotgun, Commercial",
    strictness: "Moderate - Focus on affordability",
    notes: "Mix of residential and commercial; cigar industry heritage",
  },
];

const commonMistakes = [
  {
    mistake: "Starting Work Without COA",
    consequence: "Stop work order, fines, required removal of work",
    prevention: "Always verify COA requirement before any exterior work",
  },
  {
    mistake: "Using Inappropriate Materials",
    consequence: "Denial, required removal, replacement costs",
    prevention: "Specify exact materials; get pre-approval on substitutes",
  },
  {
    mistake: "Incomplete Applications",
    consequence: "Delays, multiple resubmissions, missed meetings",
    prevention: "Use checklist; consult staff before submission",
  },
  {
    mistake: "Ignoring Design Guidelines",
    consequence: "Denial, extensive redesign required",
    prevention: "Read district guidelines before designing",
  },
  {
    mistake: "Changing Plans After Approval",
    consequence: "Additional review, potential revocation",
    prevention: "Get amendments approved before implementation",
  },
  {
    mistake: "Demolition by Neglect",
    consequence: "Code enforcement, required restoration, fines",
    prevention: "Maintain property; document existing conditions",
  },
];

const approvalStrategies = [
  {
    strategy: "Pre-Application Conference",
    benefit: "Get feedback before investing in full plans",
    how: "Request informal meeting with historic preservation staff",
    when: "Early in planning phase, before hiring architect",
  },
  {
    strategy: "Research District Guidelines",
    benefit: "Design compliant projects from the start",
    how: "Obtain and study specific guidelines for your district",
    when: "Before any design work begins",
  },
  {
    strategy: "Document Existing Conditions",
    benefit: "Justify repairs vs. replacement; support change requests",
    how: "Detailed photos, structural reports, material analysis",
    when: "During initial property evaluation",
  },
  {
    strategy: "Attend ARC Meetings",
    benefit: "Understand review process and commissioner concerns",
    how: "Observe meetings before your application",
    when: "Month before your anticipated submission",
  },
  {
    strategy: "Present In Person",
    benefit: "Answer questions, demonstrate expertise and commitment",
    how: "Prepare presentation; bring samples if helpful",
    when: "At ARC hearing for significant projects",
  },
  {
    strategy: "Use Qualified Professionals",
    benefit: "Better applications, stronger credibility",
    how: "Hire architect and contractor with historic experience",
    when: "From project inception",
  },
];

const faqs = [
  {
    question: "What work requires a Certificate of Appropriateness in Tampa?",
    answer:
      "In Tampa's local historic districts, a Certificate of Appropriateness (COA) is required for most exterior work visible from the public right-of-way. This includes: alterations to facades, windows, doors, or roofing; new construction or additions; demolition of any portion of a structure; changes to landscaping in some districts; fences, walls, and site features; and signage. Interior work generally does not require COA unless it affects the exterior appearance (like a new HVAC system that requires exterior units). Routine maintenance using identical materials (in-kind repairs) may qualify for administrative approval rather than full ARC review. When in doubt, contact Tampa Historic Preservation Office before starting any work.",
  },
  {
    question: "How long does the COA approval process take?",
    answer:
      "Timeline varies by scope of work. Administrative review (staff level) for minor work takes 1-2 weeks. ARC review for significant projects requires appearing at a monthly meeting—applications are typically due 3-4 weeks before the meeting, with decisions made at the meeting itself. Total timeline is usually 4-8 weeks from complete application. Complex projects or those requiring revisions may take longer. Demolition requests have the longest timeline, often 3-6 months minimum due to additional review requirements. To expedite: submit complete applications, address staff comments promptly, and avoid peak permit seasons (spring/summer).",
  },
  {
    question: "What happens if I do work without a COA?",
    answer:
      "Working without required COA approval can result in serious consequences. The City can issue a stop work order immediately upon discovering unpermitted work. You may be required to remove or modify the unauthorized work at your expense. Fines can be assessed for violation of the historic preservation ordinance. Future permits and COA requests may face additional scrutiny. In severe cases, you could be required to restore the property to its previous condition. Even if the work would have been approved, doing it without COA is a violation. If you've already completed work without approval, contact the Historic Preservation Office immediately—voluntary disclosure often results in more favorable resolution than discovery through complaint.",
  },
  {
    question: "Can I appeal a COA denial?",
    answer:
      "Yes, COA denials can be appealed. First, understand why the application was denied—staff and ARC typically provide specific reasons and may suggest modifications that would gain approval. For staff denials, you can request ARC review. For ARC denials, you can: revise the application to address concerns and resubmit, request a variance through the Board of Adjustment (requires demonstrating hardship), or appeal to the Tampa City Council. Economic hardship applications are a separate process for cases where compliance creates unreasonable financial burden—these require extensive financial documentation. Most successful 'appeals' are actually revised applications that address the original concerns rather than formal appeals processes.",
  },
  {
    question: "Do I need COA if my house is old but not in a historic district?",
    answer:
      "If your property is not within a locally designated historic district, you generally do not need a COA for exterior work—standard building permits apply. However, some properties are individually designated as Tampa Historic Landmarks and require COA even if not in a district. Also, if your property is listed on or eligible for the National Register of Historic Places (but not locally designated), you don't need COA but may want to follow preservation guidelines to maintain any tax credit eligibility. To verify your status: check the City of Tampa Historic Preservation website, contact the Historic Preservation Office, or search the Florida Master Site File. If you're considering buying an older home, understanding its designation status is important due diligence.",
  },
  {
    question: "How strict are Tampa's historic district guidelines?",
    answer:
      "Strictness varies by district and type of work. Hyde Park has the most detailed design guidelines with specific requirements for materials, colors, and architectural elements. Ybor City is very strict due to dual local and National Register designation, especially for commercial signage. Tampa Heights and West Tampa tend to be more moderate, focusing on preserving character-defining features while allowing some flexibility for affordable maintenance. All districts follow the Secretary of Interior's Standards for Rehabilitation. Generally, in-kind repairs using original materials face minimal resistance, while changes to significant features or modern additions receive more scrutiny. Working with experienced professionals and having early conversations with staff leads to smoother approvals.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tampa Certificate of Appropriateness", href: "/tampa-certificate-of-appropriateness/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CertificateOfAppropriatenessPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Historic Preservation Consulting" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Certificate of Appropriateness Services"
        serviceDescription="Expert guidance through Tampa's Certificate of Appropriateness process for historic properties. Application preparation, ARC representation, and compliant renovation design."
        city="Tampa"
        minPrice="500"
      />
      <ArticleSchema
        headline="Certificate of Appropriateness Tampa | Historic Review Process | FCS"
        description="Navigate Tampa"
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/tampa-certificate-of-appropriateness/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Historic Preservation", href: "/residential/luxury-home-building/" },
          { name: "Certificate of Appropriateness", href: "/tampa-certificate-of-appropriateness/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
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
              customHubTitle="Historic Home Renovation"
              customHubHref="/residential/luxury-home-building/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Certificate of Appropriateness Guide
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Navigate Tampa's historic review process with confidence.
              Expert guidance on COA applications, ARC hearings, and
              approval strategies for your historic property renovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Get COA Guidance
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

      {/* COA Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Types of COA Review
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Different levels of review based on scope and impact of proposed work.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {coaTypes.map((type) => (
              <div key={type.type} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-brand-green-dark">
                    {type.type}
                  </h3>
                  <span className="text-sm bg-brand-gold-light text-brand-gold-dark px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {type.timeline}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{type.scope}</p>
                <p className="text-sm text-gray-500 mb-3">
                  <strong>Examples:</strong> {type.examples}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  <strong>Approved by:</strong> {type.approval}
                </p>
                <p className="text-sm text-brand-green bg-brand-green-light/20 rounded p-2">
                  <strong>Tip:</strong> {type.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tampa Historic Districts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa Historic Districts
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each district has unique characteristics and review requirements.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">District</th>
                  <th className="px-4 py-3 text-center font-semibold">Established</th>
                  <th className="px-4 py-3 text-left font-semibold">Period</th>
                  <th className="px-4 py-3 text-left font-semibold">Architectural Styles</th>
                  <th className="px-4 py-3 text-center font-semibold">Strictness</th>
                </tr>
              </thead>
              <tbody>
                {tampaHistoricDistricts.map((district, index) => (
                  <tr
                    key={district.district}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <span className="font-semibold text-brand-green-dark">{district.district}</span>
                      <p className="text-xs text-gray-500 mt-1">{district.notes}</p>
                    </td>
                    <td className="px-4 py-3 text-center text-sm">{district.established}</td>
                    <td className="px-4 py-3 text-sm">{district.period}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{district.styles}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        district.strictness.includes("Very High")
                          ? "bg-red-100 text-red-700"
                          : district.strictness.includes("High")
                          ? "bg-orange-100 text-orange-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {district.strictness.split(" - ")[0]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Application Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete applications lead to faster approvals.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {applicationRequirements.map((req, index) => (
              <div key={req.item} className="bg-gray-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </span>
                  <h3 className="font-bold text-brand-green-dark">{req.item}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">{req.description}</p>
                <p className="text-xs text-brand-gold-dark bg-brand-gold-light/30 rounded p-2">
                  <strong>Tip:</strong> {req.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Common COA Mistakes to Avoid
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Learn from others' errors to ensure smooth approval.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonMistakes.map((mistake) => (
              <div key={mistake.mistake} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold text-red-700">{mistake.mistake}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>Consequence:</strong> {mistake.consequence}
                </p>
                <p className="text-sm text-green-700 bg-green-50 rounded p-2">
                  <strong>Prevention:</strong> {mistake.prevention}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approval Strategies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Strategies for COA Approval
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Proven approaches for successful historic review applications.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {approvalStrategies.map((strategy) => (
              <div
                key={strategy.strategy}
                className="card p-6 border-l-4 border-brand-gold"
              >
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {strategy.strategy}
                </h3>
                <p className="text-brand-gold-dark font-medium text-sm mb-3">
                  {strategy.benefit}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <strong>How:</strong> {strategy.how}
                  </p>
                  <p className="text-gray-500">
                    <strong>When:</strong> {strategy.when}
                  </p>
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
            Related Historic Preservation Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/hyde-park-renovation-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Hyde Park Renovation Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Specific guidelines for Tampa's largest historic district.
              </p>
            </Link>
            <Link
              href="/florida-shpo-requirements/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Florida SHPO Requirements
              </h3>
              <p className="text-gray-600 text-sm">
                State-level historic preservation requirements.
              </p>
            </Link>
            <Link
              href="/sourcing-historic-materials-tampa-bay/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Sourcing Historic Materials
              </h3>
              <p className="text-gray-600 text-sm">
                Find appropriate materials for COA compliance.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Need Help with Your COA Application?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS has guided hundreds of homeowners through Tampa's historic review process.
            From application preparation to ARC presentations, we help you get approval
            for your historic renovation project.
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