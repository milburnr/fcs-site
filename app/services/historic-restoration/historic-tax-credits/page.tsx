"use client";

import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/AnimatedElements";
import {
  CheckCircle,
  Shield,
  Award,
  Phone,
  Calculator,
  FileText,
  Landmark,
  Building2,
  DollarSign,
  ClipboardCheck
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/services/historic-restoration/" },
  { name: "Historic Tax Credits", href: "/services/historic-restoration/historic-tax-credits/" },
];

const faqs = [
  {
    question: "What is the Federal Historic Tax Credit?",
    answer: "The Federal Historic Tax Credit (HTC) provides a 20% tax credit for the certified rehabilitation of National Register-listed historic buildings used for income-producing purposes. The credit applies to qualified rehabilitation expenditures (QREs)—essentially the cost of rehabilitation work, excluding land acquisition and new additions. A $1 million rehabilitation generates a $200,000 federal tax credit.",
  },
  {
    question: "What properties qualify for federal historic tax credits?",
    answer: "Properties must be: 1) Listed in the National Register of Historic Places, or contributing to a National Register historic district, 2) Depreciable (income-producing)—commercial, rental residential, or mixed-use, 3) Substantially rehabilitated (rehabilitation costs exceed the greater of $5,000 or the adjusted basis of the building). Owner-occupied personal residences don't qualify for federal credits.",
  },
  {
    question: "Does Florida have a state historic tax credit?",
    answer: "Yes, Florida's Historic Preservation Tax Credit (FHPTC) provides an additional 20% state credit for certified rehabilitations. Combined with the 20% federal credit, qualifying projects can receive 40% of rehabilitation costs back in tax credits. The state credit has an annual cap of $30 million statewide, with individual project caps based on project size.",
  },
  {
    question: "What work qualifies for historic tax credits?",
    answer: "Qualified rehabilitation expenditures (QREs) include: structural work, mechanical/electrical/plumbing upgrades, interior finishes, exterior restoration, and architectural/engineering fees. Costs that don't qualify include: land acquisition, building acquisition, new additions (though they can be part of the project), furniture and equipment, and landscaping. Work must meet Secretary of Interior Standards.",
  },
  {
    question: "How does the tax credit application process work?",
    answer: "The process has three parts: Part 1 certifies the building is historic (unless already individually listed). Part 2 describes proposed work and must be approved before construction begins. Part 3 documents completed work and requests credit certification. All three parts are submitted through Florida SHPO to the National Park Service.",
  },
  {
    question: "Can I start work before Part 2 approval?",
    answer: "Technically yes, but it's risky. Work completed before Part 2 approval that doesn't meet the Standards may not qualify for credits, and required corrections can be expensive. We strongly recommend waiting for Part 2 approval before beginning rehabilitation work. Emergency stabilization can usually proceed with documentation.",
  },
  {
    question: "What if my building isn't individually listed in the National Register?",
    answer: "If your building is in a National Register historic district, it may qualify as a 'contributing' resource—Part 1 of the application establishes this. If it's not in a district, you can pursue individual National Register nomination, which typically takes 12-18 months. We can help determine the best path for your property.",
  },
  {
    question: "How do tax credit projects differ from regular construction?",
    answer: "Tax credit projects require extensive documentation at every stage—before, during, and after construction. Material choices, methods, and changes must align with approved Part 2 submissions. Any deviation requires amendment approval before implementation. We build these requirements into project management from the start.",
  },
  {
    question: "What's the timeline for a typical tax credit project?",
    answer: "Add 4-6 months for Part 2 review and approval before construction. Part 3 review takes 2-4 months after construction completion. Plan for 18-24 months total from project initiation to credit certification for substantial rehabilitations. We coordinate schedules to minimize delays while ensuring compliance.",
  },
  {
    question: "Can nonprofits use historic tax credits?",
    answer: "Nonprofits don't pay taxes, so they can't directly use tax credits. However, they can benefit through syndication—partnering with investors who can use the credits in exchange for equity investment or project financing. This is complex but can make historic projects financially viable for nonprofit owners.",
  },
];

const taxCreditServices = [
  {
    icon: Calculator,
    title: "Eligibility Assessment",
    description: "Evaluate whether your property and project qualify for federal and state historic tax credits, and estimate potential credit value.",
  },
  {
    icon: FileText,
    title: "Application Preparation",
    description: "Prepare and submit Part 1, Part 2, and Part 3 applications with all required documentation, photos, and narratives.",
  },
  {
    icon: Landmark,
    title: "SHPO Coordination",
    description: "Manage ongoing communication with Florida SHPO and National Park Service throughout the review and approval process.",
  },
  {
    icon: ClipboardCheck,
    title: "Standards Compliance",
    description: "Design and execute rehabilitation work meeting Secretary of Interior Standards while achieving project objectives.",
  },
  {
    icon: Building2,
    title: "Construction Documentation",
    description: "Comprehensive photo documentation throughout construction supporting Part 3 certification and credit approval.",
  },
  {
    icon: DollarSign,
    title: "QRE Tracking",
    description: "Track qualified rehabilitation expenditures throughout the project to maximize credit value and ensure compliance.",
  },
];

const relatedLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/historic-restoration-tampa/", label: "Historic Restoration Tampa" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
];

export default function HistoricTaxCreditsPage() {
  return (
    <>
      <LocalBusinessSchema service="Historic Tax Credit Services" />
      <ServiceSchema
        serviceName="Historic Tax Credit Consulting Services"
        serviceDescription="Expert guidance on Federal and Florida Historic Tax Credits for Tampa Bay rehabilitation projects. Eligibility assessment, application preparation, SHPO coordination, and Standards-compliant construction with 43+ years experience."
        minPrice="10000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Historic Tax Credits
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Maximize the financial benefits of historic rehabilitation with expert
                guidance on Federal and Florida Historic Tax Credits. Up to 40% of
                qualified rehabilitation costs returned as tax credits.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>43+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span>Licensed: {BUSINESS_INFO.licenseNumber}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span>Tax Credit Project Experience</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-colors border border-white/30"
                >
                  Discuss Your Project
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Tax Credits into Project Savings
              </h2>
            </FadeIn>

            <div className="prose prose-lg max-w-none">
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Historic tax credits are among the most powerful incentives for rehabilitation
                  projects. The Federal Historic Tax Credit provides a 20% credit on qualified
                  rehabilitation expenditures for National Register-listed properties. Florida's
                  Historic Preservation Tax Credit adds another 20% for qualifying projects.
                  Combined, these programs can return 40 cents of every rehabilitation dollar
                  as tax credits.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  For a substantial rehabilitation project—say, $2 million in qualified
                  expenditures—the combined credits total $800,000. This transforms the
                  economics of historic rehabilitation, making projects financially viable
                  that would otherwise be impractical. It's why you see so many successful
                  adaptive reuse projects in historic districts.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Understanding Qualifying Projects
                </h3>
                <p className="text-gray-700 mb-6">
                  Not every historic building project qualifies for tax credits. The property
                  must be listed in the National Register of Historic Places (individually or
                  as a contributing resource in a historic district). It must be income-producing—
                  commercial, rental residential, or mixed-use. Owner-occupied personal residences
                  don't qualify, though they may be eligible for other incentives.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-gray-700 mb-6">
                  The rehabilitation must be substantial—costs must exceed the greater of
                  $5,000 or the building's adjusted basis. And the work must meet the
                  Secretary of the Interior's Standards for Rehabilitation. This is where
                  experience matters: work that doesn't meet the Standards won't qualify,
                  and corrections can be expensive.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  The Application Process
                </h3>
                <p className="text-gray-700 mb-6">
                  Tax credit applications proceed in three parts. Part 1 establishes that
                  the building is historic—either confirming individual listing or certifying
                  it contributes to a historic district. Part 2 describes the proposed
                  rehabilitation and must be approved before construction begins. Part 3
                  documents completed work and requests certification for credit issuance.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p className="text-gray-700 mb-6">
                  Each part requires detailed documentation—photos, drawings, specifications,
                  and narratives explaining how work meets the Standards. Applications are
                  submitted through Florida SHPO to the National Park Service. Review takes
                  30-90 days per submission, though complex projects may require multiple
                  rounds of review.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Comparison */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Federal & Florida Historic Tax Credits
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Federal Historic Tax Credit</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>20%</strong> of qualified rehabilitation expenditures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">National Register-listed properties only</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Income-producing properties (depreciable)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">No per-project or annual cap</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Credits taken over 5 years</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Florida Historic Tax Credit</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>20%</strong> of qualified rehabilitation expenditures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Same property requirements as federal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">$30 million annual statewide cap</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Transferable tax credits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Can be combined with federal credits</span>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-800 mb-2">Combined Credit Example</h4>
                <p className="text-green-700">
                  A $2 million qualified rehabilitation generates $400,000 Federal HTC + $400,000 Florida HPTC =
                  <strong className="text-green-900"> $800,000 total tax credits</strong>—40% of rehabilitation costs returned.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Historic Tax Credit Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive support from eligibility assessment through credit certification.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxCreditServices.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Historic Tax Credit FAQs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about Federal and Florida Historic Tax Credits
                and the application process.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <InternalLinks
              title="Related Services"
              links={relatedLinks}
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Unlock Tax Credit Savings for Your Project
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Historic tax credits can transform project economics, returning up to
                  40% of rehabilitation costs. Contact FCS to assess eligibility and
                  maximize tax credit benefits for your historic property.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
                <p className="text-gray-400 mt-4">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Discuss Your Project</h3>
                <HighLevelForm height={450} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
