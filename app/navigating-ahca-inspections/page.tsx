import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  CheckCircle,
  AlertTriangle,
  FileText,
  ClipboardCheck,
  ArrowRight,
  Phone,
  HelpCircle,
  Shield,
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
  title: "Navigating AHCA Inspections | Medical Facility Construction Tampa | FCS",
  description:
    "Expert guide to AHCA compliance for medical facility construction in Tampa Bay. CON requirements, licensure inspections, and healthcare building codes.",
  keywords:
    "AHCA inspection Tampa, medical facility construction Florida, healthcare building compliance, CON requirements, medical office construction Tampa",
};

const ahcaRequirements = [
  {
    category: "Certificate of Need (CON)",
    items: [
      "Required for hospitals, nursing homes, hospices",
      "Ambulatory surgery centers in some cases",
      "Application review takes 90-180 days",
      "Public hearing may be required",
    ],
  },
  {
    category: "Licensure Requirements",
    items: [
      "Initial licensure application",
      "Life safety code compliance",
      "Background screening for owners",
      "Policies and procedures review",
    ],
  },
  {
    category: "Construction Standards",
    items: [
      "FBC Healthcare occupancy requirements",
      "NFPA 101 Life Safety Code",
      "ADA accessibility standards",
      "Medical gas and electrical codes",
    ],
  },
];

const facilityTypes = [
  {
    type: "Ambulatory Surgery Centers (ASC)",
    requirements: "Class III office space, AHCA licensure, AAAHC/CMS certification available",
    inspections: "Initial construction inspection, annual licensure survey",
    timeline: "6-12 months for full licensure",
  },
  {
    type: "Medical Office Buildings",
    requirements: "Business occupancy or ambulatory healthcare based on procedures",
    inspections: "Local building dept. for most; AHCA if procedures require licensure",
    timeline: "3-6 months typical construction",
  },
  {
    type: "Urgent Care Centers",
    requirements: "May require AHCA licensure depending on services; imaging licensure separate",
    inspections: "Local building inspection; AHCA if performing licensed activities",
    timeline: "4-8 months typical",
  },
  {
    type: "Imaging/Diagnostic Centers",
    requirements: "Radiation machine registration; AHCA licensure for some modalities",
    inspections: "Dept. of Health radiation inspection; AHCA survey",
    timeline: "6-10 months including equipment certification",
  },
  {
    type: "Dialysis Centers",
    requirements: "AHCA licensure required; CMS certification for Medicare",
    inspections: "Initial AHCA survey; ongoing CMS surveys",
    timeline: "9-15 months for full Medicare certification",
  },
];

const commonViolations = [
  {
    violation: "Inadequate Emergency Power",
    description: "Generator capacity insufficient for critical systems; transfer switch issues",
    prevention: "Early MEP coordination; load calculations verified by engineer",
  },
  {
    violation: "Medical Gas System Deficiencies",
    description: "Improper manifold location; inadequate alarm systems; incorrect piping materials",
    prevention: "NFPA 99 compliance review; third-party verification testing",
  },
  {
    violation: "Life Safety Code Violations",
    description: "Inadequate corridor width; improper fire barrier penetrations; exit signage",
    prevention: "NFPA 101 checklist during design; fire marshal pre-inspection",
  },
  {
    violation: "ADA Accessibility Issues",
    description: "Restroom clearances; door hardware; accessible routes",
    prevention: "CASp or accessibility consultant review; mock inspections",
  },
  {
    violation: "HVAC/Air Quality Problems",
    description: "Insufficient air changes; pressure relationships incorrect; filtration inadequate",
    prevention: "ASHRAE 170 compliance; commissioning protocol; TAB certification",
  },
];

const faqs = [
  {
    question: "What is AHCA and what does it regulate?",
    answer:
      "AHCA (Agency for Health Care Administration) is Florida's healthcare regulatory agency. It licenses and regulates healthcare facilities including hospitals, nursing homes, ambulatory surgery centers, clinical laboratories, and certain medical practices. AHCA ensures facilities meet state standards for patient safety and quality of care.",
  },
  {
    question: "Do I need a Certificate of Need (CON) for my medical facility?",
    answer:
      "CON requirements apply to specific facility types in Florida, including new hospitals, nursing homes with more than a certain number of beds, hospices, and some ambulatory surgery centers. Many medical office buildings, urgent care centers, and physician practices do not require CON. We can help determine your specific requirements.",
  },
  {
    question: "How long does the AHCA licensure process take?",
    answer:
      "Timeline varies by facility type. Simple medical offices with no licensure requirements can open in 3-6 months. Ambulatory surgery centers typically require 6-12 months including construction and licensure. Complex facilities like dialysis centers may take 12-18 months when including CMS certification.",
  },
  {
    question: "What construction standards apply to medical facilities in Florida?",
    answer:
      "Florida medical facilities must comply with the Florida Building Code (Healthcare occupancy where applicable), NFPA 101 Life Safety Code, NFPA 99 Healthcare Facilities Code, ADA Accessibility Standards, and specific AHCA rules for licensed facilities. Additional standards apply for specialized areas like surgery, imaging, and sterile processing.",
  },
  {
    question: "Can an existing building be converted to a medical facility?",
    answer:
      "Yes, but significant modifications are often required. Key considerations include HVAC system upgrades for proper air changes, electrical capacity for medical equipment, structural capacity for heavy imaging equipment, accessibility compliance, and life safety upgrades. A feasibility study before lease/purchase is strongly recommended.",
  },
  {
    question: "What happens if we fail an AHCA inspection?",
    answer:
      "AHCA will issue a Statement of Deficiencies listing violations. You'll have a specific timeframe to submit a Plan of Correction and complete remediation. Serious violations may result in conditional licensure, fines, or denial of licensure. Working with an experienced healthcare construction contractor minimizes this risk.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Navigating Ahca Inspections", href: "/navigating-ahca-inspections/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function AHCAInspectionsPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
    { name: "Medical Construction", href: "/commercial/medical-construction/" },
    { name: "AHCA Inspections Guide", href: "/navigating-ahca-inspections/" },
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
        schemaType="GeneralContractor"
        service="Medical Facility Construction"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="AHCA Compliant Medical Construction"
        serviceDescription="Medical facility construction with AHCA compliance expertise in Tampa Bay - ambulatory surgery centers, medical offices, imaging centers"
        minPrice="250000"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      
      <ArticleSchema
        headline="Navigating AHCA Inspections | Medical Facility Construction Tampa | FCS"
        description="Expert guide to AHCA compliance for medical facility construction in Tampa Bay. CON requirements, licensure inspections, and healthcare building codes."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/navigating-ahca-inspections/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb items={breadcrumbItems} />

      <div className="container-custom py-8">
        <BackToHub silo="commercial" />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-10 h-10 text-brand-gold" />
              <span className="bg-brand-green/30 text-white px-3 py-1 rounded-full text-sm font-bold">
                MEDICAL CONSTRUCTION GUIDE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Navigating AHCA Inspections: Medical Facility Construction in Tampa
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Building a medical facility in Florida requires navigating complex
              AHCA regulations, licensure requirements, and healthcare-specific
              building codes. This guide explains what you need to know before
              breaking ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Discuss Your Medical Project
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

      {/* What is AHCA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
              Understanding AHCA Regulations
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                The <strong>Agency for Health Care Administration (AHCA)</strong>{" "}
                is Florida&apos;s primary healthcare regulatory body. If
                you&apos;re building or renovating a medical facility, AHCA
                requirements will likely impact your project—from initial
                planning through final licensure.
              </p>
              <div className="bg-brand-green-bg border-l-4 border-brand-green p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-brand-green-dark mb-2">
                  AHCA&apos;s Role in Construction:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>
                      Issues Certificates of Need (CON) for certain facility
                      types
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>
                      Licenses healthcare facilities and ensures compliance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>
                      Conducts inspections before facility opening and ongoing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>
                      Enforces healthcare-specific building and safety standards
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            AHCA Compliance Requirements
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ahcaRequirements.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-brand-green-dark mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Medical Facility Types & Requirements
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {facilityTypes.map((facility, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-brand-green-dark mb-4 text-lg">
                  {facility.type}
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-500">
                      Requirements:
                    </span>
                    <p className="text-gray-700 mt-1">{facility.requirements}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">
                      Inspections:
                    </span>
                    <p className="text-gray-700 mt-1">{facility.inspections}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">
                      Typical Timeline:
                    </span>
                    <p className="text-gray-700 mt-1">{facility.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Violations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Common AHCA Inspection Violations
              </h2>
            </div>
            <p className="text-gray-600 text-center mb-8">
              Understanding common violations helps avoid costly delays and
              remediation. FCS has learned these lessons across dozens of
              medical facility projects.
            </p>
            <div className="space-y-4">
              {commonViolations.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-400"
                >
                  <h3 className="font-bold text-brand-green-dark mb-2">
                    {item.violation}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex items-start gap-2 bg-green-50 p-3 rounded-lg">
                    <Shield className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-green-800 text-sm">
                        Prevention:
                      </span>
                      <p className="text-green-700 text-sm">{item.prevention}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FCS Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6">
                FCS Medical Facility Construction Process
              </h2>
              <p className="text-gray-600 mb-6">
                Our team understands the unique challenges of healthcare
                construction. We coordinate with AHCA, local building officials,
                and your licensure consultants to ensure a smooth path to
                opening.
              </p>
              <div className="space-y-4">
                {[
                  "Pre-construction regulatory assessment",
                  "Coordination with AHCA and local authorities",
                  "Design review for code compliance",
                  "Medical gas system installation and certification",
                  "HVAC commissioning per ASHRAE standards",
                  "Pre-inspection walkthroughs",
                  "Support through licensure survey process",
                  "Punch list resolution and final certification",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ClipboardCheck className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-green-bg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Planning a Medical Facility?
              </h3>
              <p className="text-gray-600 mb-6">
                Start with a regulatory assessment. We&apos;ll help you
                understand AHCA requirements, timeline, and budget
                considerations before you commit to a location or design.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact/"
                  className="block w-full py-3 bg-brand-green text-white font-bold rounded-lg text-center hover:bg-brand-green-dark transition-colors"
                >
                  Request Regulatory Assessment
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
              <HelpCircle className="w-8 h-8 text-brand-green" />
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
            Related Commercial Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/commercial/medical-construction/"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <Stethoscope className="w-8 h-8 text-brand-green mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                Medical Construction Services
              </h3>
              <p className="text-sm text-gray-600">
                Full-service medical facility construction
              </p>
            </Link>
            <Link
              href="/commercial/cpm-scheduling/"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <FileText className="w-8 h-8 text-brand-green mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                CPM Scheduling
              </h3>
              <p className="text-sm text-gray-600">
                Keep your medical project on schedule
              </p>
            </Link>
            <Link
              href="/commercial/"
              className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <FileText className="w-8 h-8 text-brand-green mb-3" />
              <h3 className="font-bold text-brand-green-dark mb-2">
                All Commercial Services
              </h3>
              <p className="text-sm text-gray-600">
                Explore our commercial construction capabilities
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Build Your Medical Facility Right the First Time
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            AHCA compliance requires expertise. FCS has built ambulatory surgery
            centers, medical offices, and specialty clinics throughout Tampa Bay
            with zero licensure delays.
          </p>
          <Link href="/contact/" className="btn-cta">
            Start Your Medical Project
          </Link>
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