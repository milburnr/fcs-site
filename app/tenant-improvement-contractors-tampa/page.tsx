import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building2, Clock, DollarSign, Users, HelpCircle, Briefcase, Ruler, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tenant Improvement Contractors Tampa | Commercial TI Build-Out Experts",
  description: "Expert tenant improvement contractors in Tampa Bay. Office, retail, and medical TI build-outs with fast-track delivery and budget management from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Tenant Improvement Contractors Tampa", href: "/tenant-improvement-contractors-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvement Services" },
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/smooth-commercial-renovations-solution-in-tampa/", label: "Smooth Commercial Renovations" },
  { href: "/office-building-renovation-in-tampa/", label: "Office Building Renovation" },
  { href: "/contact/", label: "Get Free Estimate" },
];

const tiCapabilities = [
  { title: "Fast-Track Delivery", description: "Accelerated schedules to meet lease dates and business deadlines", icon: Clock },
  { title: "Budget Management", description: "Maximize TI allowances and control costs effectively", icon: DollarSign },
  { title: "Design-Build TI", description: "Integrated design and construction for faster, simpler delivery", icon: Ruler },
  { title: "Multi-Site Programs", description: "Consistent quality across multiple locations", icon: Building2 },
];

const tiTypes = [
  {
    type: "Office TI",
    scope: "Private offices, open workstations, conference rooms, break areas",
    timeline: "4-10 weeks typical",
    cost: "$45-150/SF"
  },
  {
    type: "Medical TI",
    scope: "Exam rooms, procedure rooms, reception, specialized MEP",
    timeline: "8-16 weeks typical",
    cost: "$125-350/SF"
  },
  {
    type: "Retail TI",
    scope: "Sales floors, fitting rooms, stock rooms, POS areas",
    timeline: "4-8 weeks typical",
    cost: "$50-175/SF"
  },
  {
    type: "Restaurant TI",
    scope: "Dining areas, commercial kitchens, bars, restrooms",
    timeline: "10-18 weeks typical",
    cost: "$150-400/SF"
  },
  {
    type: "Industrial TI",
    scope: "Office within warehouse, climate-controlled areas, loading",
    timeline: "4-12 weeks typical",
    cost: "$35-100/SF"
  },
];

const faqs = [
  {
    question: "What is a tenant improvement allowance and how does it work?",
    answer: "A tenant improvement (TI) allowance is a contribution from the landlord toward the cost of customizing leased space for the tenant's use. It's typically expressed as dollars per square foot (e.g., $40/SF TI allowance for 5,000 SF = $200,000 allowance). Tenants can use this allowance for design, construction, and sometimes furniture and equipment. Any costs exceeding the allowance are the tenant's responsibility. We help tenants maximize the value of their TI allowance through efficient design and construction."
  },
  {
    question: "How long does a typical tenant improvement project take?",
    answer: "Timeline varies by scope and space type. Simple office TI (paint, carpet, minor partitions) can complete in 4-6 weeks. Moderate office buildouts with new construction run 6-10 weeks. Complex TI with significant MEP work takes 10-16 weeks. Medical and restaurant TI typically require 10-18 weeks due to specialized requirements. We develop detailed schedules during preconstruction and have completed projects on aggressive fast-track timelines when required to meet lease commencement dates."
  },
  {
    question: "Who manages the TI process—landlord or tenant?",
    answer: "It varies by lease structure. In some leases, the landlord manages construction using their contractors (turnkey delivery). In others, tenants manage construction directly using their own contractors (TI allowance delivery). Some leases allow either approach. We work both ways—as landlord's contractor delivering turnkey spaces, or as tenant's contractor managing TI allowance projects. Understanding your lease terms is essential to planning your TI project correctly."
  },
  {
    question: "What permits are required for tenant improvements in Tampa?",
    answer: "Most TI projects require building permits. Work affecting electrical, plumbing, or mechanical systems requires respective trade permits. Change of occupancy type may require additional reviews. The City of Tampa and Hillsborough County have similar but distinct permit processes. Permit timelines typically run 2-4 weeks for straightforward TI, longer for complex projects or change of use. We include permit management in every TI contract and build realistic approval timelines into schedules."
  },
  {
    question: "Can you work with our interior designer or architect?",
    answer: "Absolutely. We collaborate seamlessly with outside design professionals, coordinating closely to ensure designs are buildable and within budget. Many TI projects work best with the tenant's design team handling space planning and finish selections while we provide construction expertise and cost feedback. Alternatively, our design-build capability can handle everything from space planning through construction with a single point of responsibility."
  },
  {
    question: "What happens if we need to be open by a specific date?",
    answer: "Deadline-driven delivery is a specialty. We develop construction schedules that work backward from your must-open date, identify the critical path, and build appropriate buffers. Fast-track techniques—overlapping design and construction, after-hours work, dedicated crews—can compress timelines when needed. We've delivered TI projects under seemingly impossible deadlines by applying resources and expertise appropriately. The key is involving us early enough to plan properly."
  },
  {
    question: "How do we ensure TI costs stay within our allowance?",
    answer: "Budget management begins in design. We provide early cost feedback so design decisions consider budget implications. Value engineering identifies ways to achieve design intent at lower cost. Detailed estimates ensure no surprises at bid time. During construction, we manage scope carefully, requiring formal approval for any changes. Many of our TI projects complete within original TI allowances; those that exceed do so with advance notice and tenant approval."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Tenant improvement contractors in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Tampa's Expert Tenant Improvement Contractors
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            From corporate offices to medical practices to retail storefronts, Florida Construction Specialists delivers tenant improvements that meet deadlines, respect budgets, and create spaces where businesses thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get TI Estimate
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
      </section>

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiCapabilities.map((capability, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <capability.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tenant Improvement Excellence in Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Tenant improvement (TI) projects operate under unique pressures: fixed allowances require careful budget management, lease commencement dates create immovable deadlines, and business operations can't wait for leisurely construction schedules. Success requires contractors who understand these dynamics and deliver accordingly.
            </p>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists has completed hundreds of tenant improvement projects across Tampa Bay—corporate offices in downtown Tampa, medical practices in Brandon, retail shops in St. Petersburg, restaurants in Clearwater, and professional services throughout the region. We understand that TI success is measured in budget adherence, schedule performance, and quality that supports your business objectives.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Understanding the TI Process
            </h2>
            <p className="text-gray-600 mb-6">
              Tenant improvement projects follow a predictable process, but execution quality varies dramatically among contractors. Understanding this process helps tenants and landlords select contractors and manage expectations.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Lease Negotiation Phase:</strong> TI planning should begin during lease negotiation. Understanding probable buildout costs helps negotiate appropriate TI allowances. Space condition, desired improvements, and specialized requirements all affect TI cost. We provide preliminary budgets to help tenants negotiate effectively—sometimes saving tens of thousands in TI allowance negotiations.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Design Phase:</strong> Once lease terms are set, space planning and design proceed. This may involve the tenant's designer, the landlord's architect, or our design-build team. We recommend involving construction expertise during design to ensure plans are buildable within budget. Design typically takes 2-6 weeks depending on complexity.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Permitting Phase:</strong> Building permits are required for most TI work. Tampa-area permit timelines typically run 2-4 weeks for standard projects. Change of occupancy, complex MEP, or specialized uses may extend this timeline. We prepare permit applications concurrently with design completion to minimize schedule impact.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Construction Phase:</strong> With permits in hand, construction begins. TI construction timelines vary from 4-6 weeks for simple buildouts to 16+ weeks for complex medical or restaurant projects. Experienced TI contractors manage multiple trades efficiently, maintain clean/safe sites, and communicate proactively about progress and issues.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Occupancy Phase:</strong> Project completion includes final inspections, punch list resolution, and turnover. We coordinate certificate of occupancy issuance, provide operation documentation, and ensure spaces are move-in ready on schedule.
            </p>

            {/* TI Types Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Tenant Improvement Types & Costs - Tampa Bay 2024</h3>
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">TI Type</th>
                    <th className="px-6 py-3 text-left">Typical Scope</th>
                    <th className="px-6 py-3 text-left">Timeline</th>
                    <th className="px-6 py-3 text-left">Cost Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tiTypes.map((type, index) => (
                    <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                      <td className="px-6 py-4 font-medium">{type.type}</td>
                      <td className="px-6 py-4 text-sm">{type.scope}</td>
                      <td className="px-6 py-4">{type.timeline}</td>
                      <td className="px-6 py-4">{type.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-2">*Costs vary based on finish level, MEP complexity, and specific requirements.</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Office Tenant Improvements
            </h2>
            <p className="text-gray-600 mb-6">
              Office TI remains our largest volume category. Tampa Bay's diverse office market—from downtown high-rises to suburban office parks—presents varied requirements, but certain themes recur: flexible layouts that support hybrid work, robust technology infrastructure, and environments that attract talent.
            </p>
            <p className="text-gray-600 mb-6">
              We've built out spaces for law firms requiring traditional private offices with high-end finishes, tech companies wanting open collaborative environments, financial services firms needing secure trading floors, and everything in between. Understanding how different businesses use space allows us to guide design decisions that support actual work patterns.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Medical Tenant Improvements
            </h2>
            <p className="text-gray-600 mb-6">
              Medical TI requires specialized knowledge of healthcare regulations, infection control, and clinical workflows. AHCA requirements govern certain facility types. Medical gas, specialized electrical, and enhanced HVAC are common requirements. We've completed medical TI for primary care practices, specialty clinics, dental offices, urgent care facilities, and surgical centers across Tampa Bay.
            </p>
            <p className="text-gray-600 mb-6">
              Medical projects typically cost more and take longer than standard office TI due to these specialized requirements. Understanding the specific regulatory framework for your practice type—and building to appropriate standards—prevents costly compliance problems after opening.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Retail and Restaurant Tenant Improvements
            </h2>
            <p className="text-gray-600 mb-6">
              Retail success depends on customer experience, and TI plays a central role. Storefront visibility, traffic flow, merchandise presentation, and fitting room design all affect sales. We've built out spaces for national retailers (meeting exacting brand standards), local boutiques (expressing unique character), and service retailers (balancing customer areas with back-of-house efficiency).
            </p>
            <p className="text-gray-600 mb-6">
              Restaurant TI presents Tampa Bay's most complex—and highest cost—TI projects. Commercial kitchens require extensive mechanical, electrical, and plumbing work. Hood systems must meet fire code and environmental requirements. Health department compliance is non-negotiable. Front-of-house must create atmosphere while supporting service efficiency. Our restaurant experience helps navigate these complexities successfully.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Fast-Track and Deadline-Driven Delivery
            </h2>
            <p className="text-gray-600 mb-6">
              Many TI projects face aggressive deadlines—lease commencement dates, grand opening commitments, or business-driven must-open dates. We've developed expertise in fast-track delivery that compresses timelines without sacrificing quality.
            </p>
            <p className="text-gray-600 mb-6">
              Fast-track techniques include: overlapping design and construction (beginning demolition while design finalizes), parallel permitting (submitting for review while completing details), pre-ordering long-lead materials, deploying larger crews for concurrent work, and after-hours/weekend work to accelerate schedule. These techniques add cost but enable seemingly impossible deadlines when business requirements demand it.
            </p>
            <p className="text-gray-600 mb-6">
              The key to successful fast-track is early involvement. The earlier we engage, the more schedule options exist. Calling two weeks before a must-open date leaves limited options; engaging two months ahead allows proper planning and execution.
            </p>
          </div>
        </div>
      </section>

      {/* Why FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
            Why Choose FCS for Tenant Improvements
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {[
              "Hundreds of completed TI projects in Tampa Bay",
              "Experience with all major building types and uses",
              "Fast-track capability for deadline-driven projects",
              "Budget expertise that maximizes TI allowances",
              "Strong relationships with Tampa-area subcontractors",
              "Permit expertise across all Tampa Bay jurisdictions",
              "Design-build option for integrated delivery",
              "Ongoing maintenance and future modification support"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-brand-green" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Planning a Tenant Improvement Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists delivers tenant improvements that meet deadlines, respect budgets, and create spaces where Tampa Bay businesses succeed. Contact us to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
