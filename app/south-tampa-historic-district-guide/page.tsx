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
  MapPin,
  Calendar,
  Shield,
  Ruler,
  TreeDeciduous,
  Compass,
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
  title: "South Tampa Historic Districts Guide | Hyde Park & More | FCS",
  description:
    "Comprehensive guide to South Tampa's historic districts including Hyde Park, Palma Ceia, and Beach Park. Renovation requirements, architectural styles, and preservation guidelines.",
  keywords:
    "South Tampa historic district, Hyde Park renovation, Palma Ceia historic, Beach Park Tampa, historic home renovation Tampa, South Tampa architecture, preservation guidelines",
};

const southTampaDistricts = [
  {
    name: "Hyde Park Historic District",
    established: "1985 (Local), 1985 (National Register)",
    boundaries: "Roughly Bayshore to Rome, Kennedy to Bay-to-Bay",
    homes: "~850 contributing structures",
    predominantStyles: [
      "Colonial Revival",
      "Mediterranean Revival",
      "Craftsman Bungalow",
      "Queen Anne",
      "Prairie School",
    ],
    era: "1886-1941 (Period of Significance)",
    characteristics: [
      "Tree-lined brick streets",
      "Consistent setbacks",
      "Mix of grand homes and cottages",
      "Historic street lighting",
    ],
    reviewLevel: "Strictest - Full ARC review required",
  },
  {
    name: "Beach Park Historic District",
    established: "1998 (Local)",
    boundaries: "West of Bayshore near Gandy area",
    homes: "~120 contributing structures",
    predominantStyles: [
      "Mediterranean Revival",
      "Minimal Traditional",
      "Frame Vernacular",
    ],
    era: "1920s-1940s",
    characteristics: [
      "Modest scale homes",
      "Waterfront proximity",
      "Original platting intact",
      "Narrow lots typical",
    ],
    reviewLevel: "Moderate - Staff approval possible for minor work",
  },
  {
    name: "Palma Ceia",
    established: "Not locally designated (but National Register eligible)",
    boundaries: "Along Bayshore south of Swann",
    homes: "Varies",
    predominantStyles: [
      "Mediterranean Revival",
      "Colonial Revival",
      "Spanish Eclectic",
    ],
    era: "1920s-1930s",
    characteristics: [
      "Larger estate lots",
      "Golf course proximity",
      "High-end construction",
      "Mature landscaping",
    ],
    reviewLevel: "Standard permits - No COA required (unless individually designated)",
  },
  {
    name: "Virginia Park",
    established: "Partial historic designation",
    boundaries: "Near Henderson/Swann",
    homes: "~100 in designated area",
    predominantStyles: [
      "Craftsman Bungalow",
      "Frame Vernacular",
      "Colonial Revival",
    ],
    era: "1910s-1930s",
    characteristics: [
      "Working class origins",
      "Modest bungalows",
      "Original lot sizes intact",
      "Mix of renovated and original",
    ],
    reviewLevel: "Moderate - Varies by specific location",
  },
];

const architecturalStyles = [
  {
    style: "Mediterranean Revival",
    period: "1915-1940",
    keyFeatures: [
      "Stucco exterior walls",
      "Red clay barrel tile roof",
      "Arched windows and doorways",
      "Wrought iron balconies/details",
      "Courtyards and loggias",
    ],
    renovationNotes: "Original stucco texture must be matched; barrel tile roof replacement requires same profile; window replacements must maintain arch proportions",
  },
  {
    style: "Colonial Revival",
    period: "1890-1940",
    keyFeatures: [
      "Symmetrical facade",
      "Columned entry portico",
      "Double-hung sash windows",
      "Side gabled or hipped roof",
      "Dentil molding and classical details",
    ],
    renovationNotes: "Window proportions critical; columns must match original style; additions typically at rear to preserve symmetry",
  },
  {
    style: "Craftsman Bungalow",
    period: "1905-1930",
    keyFeatures: [
      "Low-pitched roof with wide eaves",
      "Exposed rafter tails",
      "Tapered porch columns",
      "Built-in cabinetry interior",
      "Natural wood elements",
    ],
    renovationNotes: "Porch columns and brackets character-defining; wood siding restoration preferred; exposed rafter tails must be maintained",
  },
  {
    style: "Queen Anne",
    period: "1880-1910",
    keyFeatures: [
      "Asymmetrical facade",
      "Wraparound porch",
      "Decorative shingles",
      "Bay windows and turrets",
      "Spindle work details",
    ],
    renovationNotes: "Complex woodwork requires skilled craftsmen; paint colors should reference Victorian palettes; porch restoration highest priority",
  },
  {
    style: "Frame Vernacular",
    period: "1890-1940",
    keyFeatures: [
      "Simple rectangular form",
      "Wood lap siding",
      "Full-width front porch",
      "Double-hung windows",
      "Metal or shingle roof",
    ],
    renovationNotes: "Original siding should be repaired not replaced; porch proportions important; additions should be subordinate to original",
  },
];

const renovationGuidelines = [
  {
    element: "Windows",
    requirements: [
      "Repair original windows when possible",
      "Replacement must match original material, design, proportion",
      "Wood preferred; aluminum clad acceptable in some cases",
      "Vinyl windows typically not approved",
      "Storm windows must not obscure historic character",
    ],
    tips: "Document window condition thoroughly; specify exact replacement specs",
  },
  {
    element: "Roofing",
    requirements: [
      "Match original material and profile",
      "Barrel tile must match existing pattern",
      "Architectural shingles may substitute for original 3-tab",
      "Metal roofs require specific approval",
      "No skylights on primary facades",
    ],
    tips: "Save samples of original roofing for matching; consider salvage tile",
  },
  {
    element: "Siding & Stucco",
    requirements: [
      "Repair original materials when feasible",
      "Replacement siding must match profile exactly",
      "Stucco texture must be matched",
      "Synthetic stucco (EIFS) typically not approved",
      "Painting historic masonry not recommended",
    ],
    tips: "Create mockup samples for approval; document original textures photographically",
  },
  {
    element: "Additions",
    requirements: [
      "Must be subordinate to original structure",
      "Set back from primary facade",
      "Compatible but distinguishable materials",
      "Preserve significant rear elements",
      "Cannot obscure character-defining features",
    ],
    tips: "Place additions at rear; connect with hyphen/link element when possible",
  },
  {
    element: "Porches",
    requirements: [
      "Critical character-defining feature",
      "Original columns, railings, flooring preserved",
      "Enclosure generally not permitted",
      "Screen enclosure may be approved if recessed",
      "Ceiling material and height maintained",
    ],
    tips: "Porches are often the most scrutinized element; restoration preferred over replacement",
  },
  {
    element: "HVAC & Mechanical",
    requirements: [
      "Equipment not visible from street",
      "Condenser screening required if visible",
      "Window units not permitted on primary facades",
      "Ductless mini-split heads require concealment plan",
      "Preserve original wall/ceiling integrity",
    ],
    tips: "Plan mechanical locations early in design; rear or side placement preferred",
  },
];

const designReviewProcess = [
  {
    step: "Pre-Design Research",
    actions: [
      "Verify historic district boundaries and designation",
      "Obtain district design guidelines",
      "Research original construction documents if available",
      "Photograph existing conditions thoroughly",
    ],
    timeline: "1-2 weeks",
  },
  {
    step: "Pre-Application Consultation",
    actions: [
      "Schedule meeting with Historic Preservation staff",
      "Present preliminary concepts",
      "Identify potential concerns early",
      "Understand submission requirements",
    ],
    timeline: "1-2 weeks",
  },
  {
    step: "Application Preparation",
    actions: [
      "Complete COA application form",
      "Prepare architectural drawings",
      "Compile material specifications",
      "Gather supporting documentation",
    ],
    timeline: "2-4 weeks (depends on project complexity)",
  },
  {
    step: "Staff Review",
    actions: [
      "Submit complete application package",
      "Staff reviews for completeness",
      "May request additional information",
      "Staff determines review level needed",
    ],
    timeline: "2-4 weeks",
  },
  {
    step: "ARC Hearing (if required)",
    actions: [
      "Application scheduled for monthly meeting",
      "Applicant presentation recommended",
      "Board discussion and questions",
      "Decision: approve, deny, or continue",
    ],
    timeline: "Next available meeting (monthly)",
  },
  {
    step: "Post-Approval",
    actions: [
      "Receive COA certificate",
      "Apply for building permit",
      "Proceed with construction",
      "Final inspection verifies compliance",
    ],
    timeline: "Building permit timeline varies",
  },
];

const faqs = [
  {
    question: "Is all of South Tampa historic?",
    answer:
      "No, only specific designated areas are historic districts requiring Certificate of Appropriateness (COA) review. Hyde Park is the largest and most well-known historic district in South Tampa, with strict preservation requirements. Beach Park and portions of Virginia Park are also locally designated. Many desirable South Tampa neighborhoods like Palma Ceia, Sunset Park, and portions of Davis Islands are not locally designated historic districts, though some may be eligible for or listed on the National Register. Before purchasing or renovating, verify whether your specific property is within a locally designated district by checking with Tampa's Historic Preservation Office or reviewing the official district maps.",
  },
  {
    question: "Can I add onto my historic home in Hyde Park?",
    answer:
      "Yes, additions are possible in Hyde Park and other historic districts when designed appropriately. Key requirements include: the addition must be subordinate to the original structure in scale and prominence, it should be located at the rear or least visible side of the property, materials should be compatible with but distinguishable from the original, and no character-defining features can be removed. The most successful additions use a 'link' element (like a small connector section) to separate new from old. Large additions that double or triple the home's size face greater scrutiny than modest expansions. Working with an architect experienced in historic properties significantly improves approval chances.",
  },
  {
    question: "What colors can I paint my historic home?",
    answer:
      "Color selection in historic districts must be appropriate to the architectural style and era. Hyde Park provides an approved color palette as guidance, though exact colors aren't mandated. General principles: Victorian-era homes can use more vibrant, multi-color schemes; Mediterranean Revival typically uses earth tones, white, or cream; Craftsman bungalows favor natural, muted colors; Colonial Revival is typically white, cream, or soft traditional colors. Staff-level approval is often possible for painting in appropriate colors, while unusual color choices may require ARC review. Never paint previously unpainted masonry (brick, stone), as this is generally prohibited. When in doubt, research historic color schemes for your specific architectural style.",
  },
  {
    question: "Can I replace my windows with impact-resistant glass?",
    answer:
      "Window replacement in historic districts requires careful consideration. The preferred approach is repairing original windows and adding interior storm windows with impact-resistant glass. If replacement is necessary, new windows must match the original in: material (wood strongly preferred; aluminum-clad may be acceptable), design and profile, proportions and pane configuration, operation type (double-hung, casement, etc.). Full vinyl replacement windows are typically not approved. Impact-resistant glass can be installed in approved replacement windows. Documenting window deterioration thoroughly helps justify replacement over repair. Some districts now accept high-quality fiberglass windows that replicate wood profiles.",
  },
  {
    question: "How do historic requirements affect home values in South Tampa?",
    answer:
      "Historic district designation generally has a positive effect on property values in South Tampa. Hyde Park properties typically command premiums of 10-20% compared to similar non-designated properties. Benefits include: architectural character protection that maintains neighborhood appeal, prevented mansionization that could overwhelm modest neighbors, maintained streetscape consistency, and prestige associated with historic designation. The requirements can add renovation costs due to material specifications and approval processes, but most owners find the investment worthwhile. The key is factoring COA requirements into your renovation budget and timeline from the start. Working with contractors experienced in historic properties helps manage both costs and expectations.",
  },
  {
    question: "What happens to non-contributing structures in historic districts?",
    answer:
      "Non-contributing structures are buildings within historic districts that don't contribute to the district's historic character—typically due to age (built after the period of significance), extensive alterations, or incompatible design. These structures still require COA review for exterior changes, but the standards are different: there's more flexibility for alterations since the building doesn't have historic character to protect, demolition may be approved more readily, and new construction is expected to be compatible with district character even if the existing structure isn't. If you're purchasing a non-contributing property, you have more renovation flexibility than with contributing structures, but you're still subject to design review for any exterior changes visible from public ways.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "South Tampa Historic District Guide", href: "/south-tampa-historic-district-guide/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function SouthTampaHistoricDistrictGuidePage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="South Tampa Historic Renovation" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Historic District Renovation Services"
        serviceDescription="Expert renovation services for South Tampa's historic districts including Hyde Park, Beach Park, and Virginia Park. Sensitive restoration meeting preservation guidelines."
        city="Tampa"
        minPrice="50000"
      />

      
      <ArticleSchema
        headline="South Tampa Historic Districts Guide | Hyde Park & More | FCS"
        description="Comprehensive guide to South Tampa"
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/south-tampa-historic-district-guide/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Residential", href: "/residential/" },
          { name: "Historic Preservation", href: "/residential/luxury-home-building/" },
          { name: "South Tampa Districts", href: "/south-tampa-historic-district-guide/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-large.webp"
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
              South Tampa Historic Districts Guide
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Your comprehensive guide to renovating in Hyde Park, Beach Park,
              and South Tampa's other historic neighborhoods. Understand the
              requirements, architectural styles, and approval process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta-gold">
                Discuss Your Project
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

      {/* South Tampa Districts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            South Tampa Historic Districts
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each district has unique characteristics and review requirements.
          </p>
          <div className="space-y-8">
            {southTampaDistricts.map((district) => (
              <div key={district.name} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-green-dark mb-2">
                      {district.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Est. {district.established}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {district.boundaries}
                      </span>
                      <span className="flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        {district.homes}
                      </span>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    district.reviewLevel.includes("Strictest")
                      ? "bg-red-100 text-red-700"
                      : district.reviewLevel.includes("Moderate")
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {district.reviewLevel}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">Architectural Styles</h4>
                    <div className="flex flex-wrap gap-2">
                      {district.predominantStyles.map((style) => (
                        <span key={style} className="bg-brand-gold-light text-brand-gold-dark px-3 py-1 rounded-full text-sm">
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green-dark mb-2">District Characteristics</h4>
                    <ul className="space-y-1">
                      {district.characteristics.map((char) => (
                        <li key={char} className="text-gray-600 text-sm flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Styles */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            South Tampa Architectural Styles
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Understanding your home's style is essential for appropriate renovation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architecturalStyles.map((style) => (
              <div key={style.style} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-1">
                  {style.style}
                </h3>
                <p className="text-sm text-brand-gold-dark mb-4">{style.period}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">Key Features</h4>
                  <ul className="space-y-1">
                    {style.keyFeatures.map((feature) => (
                      <li key={feature} className="text-gray-600 text-sm flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-brand-gold mt-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-brand-gold-light/30 rounded-lg p-3">
                  <h4 className="font-semibold text-brand-gold-dark text-sm mb-1">Renovation Notes</h4>
                  <p className="text-gray-600 text-sm">{style.renovationNotes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renovation Guidelines */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Element-by-Element Guidelines
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Specific requirements for common renovation elements in historic districts.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {renovationGuidelines.map((guide) => (
              <div key={guide.element} className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                  {guide.element}
                </h3>
                <ul className="space-y-2 mb-4">
                  {guide.requirements.map((req, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
                <div className="bg-brand-gold-light/30 rounded-lg p-3">
                  <p className="text-sm text-brand-gold-dark">
                    <strong>Tip:</strong> {guide.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Review Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Design Review Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Navigate the approval process step by step.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {designReviewProcess.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-gold"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-brand-green-dark">
                        {step.step}
                      </h3>
                      <span className="text-sm font-medium text-brand-gold bg-brand-gold-light/30 px-3 py-1 rounded-full">
                        {step.timeline}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {step.actions.map((action, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{action}</span>
                        </div>
                      ))}
                    </div>
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
            Related Historic Renovation Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/hyde-park-renovation-guide/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Hyde Park Detailed Guide
              </h3>
              <p className="text-gray-600 text-sm">
                In-depth requirements for Hyde Park Historic District.
              </p>
            </Link>
            <Link
              href="/tampa-certificate-of-appropriateness/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                COA Application Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Step-by-step Certificate of Appropriateness process.
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
                Where to find period-appropriate materials.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Planning a South Tampa Historic Renovation?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS specializes in historic renovations throughout South Tampa. From
            Hyde Park to Beach Park, we understand the requirements and work with
            you to create beautiful, compliant improvements.
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