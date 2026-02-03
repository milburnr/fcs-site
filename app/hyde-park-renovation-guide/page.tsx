import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  CheckCircle,
  AlertTriangle,
  FileText,
  Home,
  ArrowRight,
  Phone,
  HelpCircle,
  Calendar,
  MapPin,
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
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Hyde Park Renovation Guide Tampa | ARC | FCS",
  description:
    "Complete guide to renovating in Hyde Park Tampa. ARC approval process, Certificate of Appropriateness, historic district requirements, and period-accurate restoration.",
  keywords:
    "Hyde Park renovation Tampa, ARC guidelines Tampa, Certificate of Appropriateness, historic district renovation, South Tampa historic homes",
};

const arcProcess = [
  {
    step: 1,
    title: "Pre-Application Meeting",
    description: "Meet with ARC staff to discuss your project scope and receive preliminary feedback",
    timeline: "Schedule 2-3 weeks in advance",
    tip: "Bring preliminary sketches or photos of your vision",
  },
  {
    step: 2,
    title: "Application Submission",
    description: "Submit complete application with architectural drawings, material samples, and project description",
    timeline: "Applications due 3 weeks before hearing",
    tip: "Include photos of neighboring properties for context",
  },
  {
    step: 3,
    title: "Staff Review",
    description: "ARC staff reviews application against design guidelines and may request additional information",
    timeline: "1-2 weeks",
    tip: "Be responsive to information requests to avoid delays",
  },
  {
    step: 4,
    title: "ARC Hearing",
    description: "Present your project to the Architectural Review Committee at monthly meeting",
    timeline: "Hearings typically monthly",
    tip: "Attend in person; be prepared to answer questions",
  },
  {
    step: 5,
    title: "Certificate of Appropriateness",
    description: "If approved, receive your COA. Some projects may receive conditional approval.",
    timeline: "Issued within days of approval",
    tip: "COA must be obtained before building permit",
  },
];

const requiresApproval = [
  "Any exterior alteration visible from a public street",
  "Window and door replacements (material, style, size)",
  "Roof replacement (if changing material or color)",
  "Additions to existing structures",
  "New construction including accessory structures",
  "Demolition (even partial)",
  "Fencing and walls over 3 feet",
  "Exterior paint colors (some districts)",
  "Deck and patio additions",
  "Driveway and walkway changes",
];

const doesNotRequireApproval = [
  "Interior renovations (no exterior impact)",
  "In-kind repairs with matching materials",
  "Routine maintenance (cleaning, caulking)",
  "HVAC equipment not visible from street",
  "Landscaping (except in some districts)",
  "Temporary structures under 30 days",
];

const architecturalStyles = [
  {
    style: "Craftsman Bungalow",
    era: "1910-1930",
    features: "Low-pitched roof, exposed rafters, tapered columns, front porch",
    considerations: "Maintain original wood elements; column proportions critical",
  },
  {
    style: "Mediterranean Revival",
    era: "1920s-1940s",
    features: "Red barrel tile roof, stucco walls, arched openings, courtyards",
    considerations: "Tile color matching essential; stucco texture must match original",
  },
  {
    style: "Colonial Revival",
    era: "1920s-1950s",
    features: "Symmetrical facade, multi-pane windows, shutters, columned entry",
    considerations: "Window muntins often original; shutter proportions matter",
  },
  {
    style: "Spanish Colonial",
    era: "1920s-1930s",
    features: "Asymmetrical facade, towers, wrought iron, decorative tile",
    considerations: "Ornamental details often handcrafted; replacement challenging",
  },
  {
    style: "Frame Vernacular",
    era: "1890s-1920s",
    features: "Wood siding, front porch, simple detailing, pitched roof",
    considerations: "Original wood siding should be preserved when possible",
  },
];

const faqs = [
  {
    question: "Do I need ARC approval for a kitchen remodel in Hyde Park?",
    answer:
      "If your kitchen remodel is entirely interior and doesn't affect exterior windows, doors, or the roofline, you typically don't need ARC approval. However, if you're adding windows, changing door locations, or making any changes visible from the street, you'll need a Certificate of Appropriateness.",
  },
  {
    question: "Can I use vinyl windows in a Hyde Park historic home?",
    answer:
      "The ARC generally does not approve vinyl windows for primary facades visible from the street. Wood or aluminum-clad wood windows that match the original style are typically required. Secondary facades or non-visible areas may have more flexibility. Impact-rated wood windows are available that meet both historic and hurricane code requirements.",
  },
  {
    question: "How long does the Certificate of Appropriateness process take?",
    answer:
      "Plan for 6-10 weeks minimum from application to approval. This includes application submission (3 weeks before hearing), staff review, and the monthly ARC hearing. Complex projects or those requiring revisions may take longer. Starting the COA process before finalizing construction timelines is strongly recommended.",
  },
  {
    question: "What happens if I do work without ARC approval?",
    answer:
      "Unpermitted work in Hyde Park's historic district can result in stop-work orders, fines, and required removal or modification of non-compliant work at the owner's expense. The ARC can require restoration to original condition. This applies even if you have a building permit—the COA is a separate requirement.",
  },
  {
    question: "Can I add a second story to my Hyde Park bungalow?",
    answer:
      "Second-story additions are possible but challenging in Hyde Park. The ARC will evaluate the addition's compatibility with the original architecture, impact on neighboring properties, and precedent within the district. Additions are typically required to be subordinate to the original structure and set back from primary facades.",
  },
  {
    question: "Are there tax incentives for historic renovation in Hyde Park?",
    answer:
      "Florida offers property tax exemptions for qualified historic renovations. You may be eligible for a 10-year exemption on the increased assessed value resulting from restoration. Federal tax credits are also available for income-producing properties. Contact the Tampa Historic Preservation Office for current programs.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Hyde Park Renovation Guide", href: "/hyde-park-renovation-guide/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Tampa Historic Restoration Permits and Regulations",
    "href": "/tampa-historic-restoration-permits-and-regulations/",
    "description": "Navigate Tampa's historic restoration permit process including COA requirements and SHPO review."
  },
  {
    "title": "Preserving Tampa's Cultural Heritage",
    "href": "/preserving-tampas-cultural-heritage-through-restoration/",
    "description": "How thoughtful restoration projects maintain Tampa Bay's architectural legacy."
  },
  {
    "title": "Architectural Styles in Tampa's Historic Restoration",
    "href": "/architectural-styles-in-tampas-historic-restoration/",
    "description": "Understanding the diverse architectural heritage of Tampa's historic districts."
  },
  {
    "title": "Historic Tax Credits for Commercial Buildings",
    "href": "/historic-tax-credits-commercial-buildings/",
    "description": "Maximize ROI with federal and state historic preservation tax incentives."
  }
];

export default function HydeParkRenovationGuidePage() {
  const breadcrumbItems = [
    { name: "Residential Services", href: "/residential/" },
    { name: "Historic Preservation", href: "/residential/historic-preservation/" },
    { name: "Hyde Park Guide", href: "/hyde-park-renovation-guide/" },
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <LocalBusinessSchema
        schemaType="HomeAndConstructionBusiness"
        service="Hyde Park Historic Renovation"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Hyde Park Historic Home Renovation"
        serviceDescription="Expert historic renovation services for Hyde Park Tampa homes with ARC compliance and Certificate of Appropriateness coordination"
        minPrice="100000"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      
      <ArticleSchema
        headline="Hyde Park Renovation Guide | ARC Guidelines & Historic Tampa | FCS"
        description="Complete guide to renovating in Hyde Park Tampa. ARC approval process, Certificate of Appropriateness, historic district requirements, and period-accurate restoration."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/hyde-park-renovation-guide/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb items={breadcrumbItems} />

      <div className="container-custom py-8">
        <BackToHub silo="residential" />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-gold via-brand-gold-dark to-brand-gold">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Landmark className="w-10 h-10 text-white" />
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold">
                HISTORIC PRESERVATION GUIDE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              The Hyde Park Renovation Guide: ARC Approval & Historic Standards
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Renovating a home in Tampa&apos;s most prestigious historic
              district requires navigating the Architectural Review Committee.
              This guide explains the COA process, design guidelines, and how to
              preserve your home&apos;s character while adding modern comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
              >
                Schedule Historic Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Hyde Park */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                About Hyde Park Historic District
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Hyde Park</strong> is Tampa&apos;s premier historic
                neighborhood, established in the 1880s and listed on the
                National Register of Historic Places. The district encompasses
                approximately 150 contributing structures ranging from Victorian
                cottages to Mediterranean Revival mansions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-brand-gold-bg rounded-xl p-6 text-center">
                  <span className="text-3xl font-bold text-brand-green-dark">
                    1886
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    Neighborhood Founded
                  </p>
                </div>
                <div className="bg-brand-gold-bg rounded-xl p-6 text-center">
                  <span className="text-3xl font-bold text-brand-green-dark">
                    1985
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    National Register Listed
                  </p>
                </div>
                <div className="bg-brand-gold-bg rounded-xl p-6 text-center">
                  <span className="text-3xl font-bold text-brand-green-dark">
                    150+
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    Contributing Structures
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                The <strong>Hyde Park Architectural Review Committee (ARC)</strong>{" "}
                reviews all exterior modifications to ensure changes are
                compatible with the district&apos;s historic character. A{" "}
                <strong>Certificate of Appropriateness (COA)</strong> is
                required before any exterior work begins—and before a building
                permit is issued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COA Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Certificate of Appropriateness Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {arcProcess.map((step) => (
                <div key={step.step} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold text-white font-bold shrink-0">
                      {step.step}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold text-brand-green-dark mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-brand-gold" />
                          <span className="text-gray-500">{step.timeline}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-green-700">{step.tip}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Requires Approval */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            What Requires ARC Approval?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-800">
                  Requires COA
                </h3>
              </div>
              <ul className="space-y-2">
                {requiresApproval.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-800">
                  Typically No COA Required
                </h3>
              </div>
              <ul className="space-y-2">
                {doesNotRequireApproval.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                Note: When in doubt, contact the Tampa Historic Preservation
                Office for guidance before starting work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Styles */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Hyde Park Architectural Styles
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Understanding your home&apos;s architectural style is essential for
            a successful renovation. The ARC evaluates projects based on
            compatibility with the original design.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {architecturalStyles.map((style, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Home className="w-6 h-6 text-brand-gold" />
                  <h3 className="font-bold text-brand-green-dark">
                    {style.style}
                  </h3>
                </div>
                <p className="text-sm text-brand-gold font-medium mb-2">
                  {style.era}
                </p>
                <p className="text-gray-600 text-sm mb-3">{style.features}</p>
                <div className="bg-brand-gold-bg rounded-lg p-3">
                  <span className="text-xs font-medium text-brand-green-dark">
                    Key Consideration:
                  </span>
                  <p className="text-xs text-gray-700 mt-1">
                    {style.considerations}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FCS Expertise */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
                Why Work with FCS in Hyde Park
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists has renovated dozens of Hyde
                Park homes, navigating the ARC process successfully while
                preserving historic character and adding modern amenities.
              </p>
              <div className="space-y-4">
                {[
                  "Deep familiarity with ARC design guidelines and precedents",
                  "Relationships with historic preservation consultants",
                  "Access to period-appropriate materials and craftsmen",
                  "Experience integrating modern systems sensitively",
                  "Track record of first-time COA approvals",
                  "Understanding of Secretary of Interior's Standards",
                  "Expertise in impact-resistant historic window solutions",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-gold-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Planning a Hyde Park Renovation?
              </h3>
              <p className="text-gray-600 mb-6">
                Start with a historic preservation consultation. We&apos;ll
                assess your home&apos;s character-defining features, discuss
                your goals, and outline the ARC approval pathway.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact/"
                  className="block w-full py-3 bg-brand-gold text-white font-bold rounded-lg text-center hover:bg-brand-gold-dark transition-colors"
                >
                  Schedule Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="block w-full py-3 bg-white text-brand-green-dark font-bold rounded-lg text-center hover:bg-gray-100 transition-colors"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <HelpCircle className="w-8 h-8 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-bold text-brand-green-dark hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Related Residential Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/residential/historic-preservation/"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <Landmark className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                Historic Preservation Services
              </h3>
              <p className="text-sm text-gray-600">
                Full-service historic home renovation
              </p>
            </Link>
            <Link
              href="/residential/fema-compliance/"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <FileText className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                FEMA Compliance
              </h3>
              <p className="text-sm text-gray-600">
                Flood zone compliance for historic homes
              </p>
            </Link>
            <Link
              href="/residential/"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <Home className="w-8 h-8 text-brand-gold mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                All Residential Services
              </h3>
              <p className="text-sm text-gray-600">
                Explore our luxury home services
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gold">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Preserve Your Hyde Park Home&apos;s Legacy
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From ARC approval through final restoration, FCS helps Hyde Park
            homeowners navigate historic renovation with expertise and care.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-all"
          >
            Start Your Hyde Park Project
          </Link>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      
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