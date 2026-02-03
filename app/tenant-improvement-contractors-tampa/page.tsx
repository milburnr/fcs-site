import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building2, Clock, DollarSign, Users, HelpCircle, Briefcase, Ruler, Zap } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Tenant Improvement Contractors Tampa | TI | FCS",
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
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

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Budgeting and Cost Control for TI Projects
            </h2>
            <p className="text-gray-600 mb-6">
              Tenant improvement budget management requires understanding the interplay between TI allowances, tenant investment, and long-term lease obligations. Many tenants focus solely on staying within allowance without considering total occupancy costs or the value of strategic overages that improve productivity, energy efficiency, or employee satisfaction.
            </p>
            <p className="text-gray-600 mb-6">
              We help tenants evaluate TI investments holistically. Sometimes spending beyond allowance makes financial sense when improvements reduce operating costs, increase productivity, or enable higher revenue generation. Other times, maximizing allowance value through value engineering and strategic material selection achieves desired results within budget constraints.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
              <h3 className="text-xl font-bold text-green-800 mb-3">TI Budget Optimization Strategies</h3>
              <div className="grid md:grid-cols-2 gap-6 text-green-800">
                <div>
                  <h4 className="font-semibold mb-2">Maximize Allowance Value</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Prioritize high-impact improvements first</li>
                    <li>• Select materials with best cost-performance ratio</li>
                    <li>• Use value engineering to reduce costs without sacrificing quality</li>
                    <li>• Coordinate with landlord's preferred vendors for better pricing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Strategic Overage Investment</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Energy-efficient systems that reduce operating costs</li>
                    <li>• Technology infrastructure for future needs</li>
                    <li>• Higher-quality finishes that reduce maintenance</li>
                    <li>• Employee amenities that improve retention</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Technology Integration in Modern TI Projects
            </h2>
            <p className="text-gray-600 mb-6">
              Technology infrastructure has become as critical as traditional MEP systems in tenant improvements. Remote work, hybrid schedules, and digital collaboration require robust networking, appropriate power distribution, and flexible technology spaces. We design TI projects with current and future technology needs in mind.
            </p>
            <p className="text-gray-600 mb-6">
              Smart building integration allows tenants to control lighting, temperature, and security systems through centralized platforms. Energy monitoring systems provide real-time consumption data that helps manage utility costs. Access control systems integrate with company directories and time tracking. These technologies require proper planning during the TI design phase.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Sustainable Design and Green Building Certifications
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainability considerations increasingly influence tenant improvement decisions. LEED certification, ENERGY STAR requirements, and corporate sustainability goals drive material selection, energy efficiency measures, and indoor air quality improvements. These initiatives often align with long-term cost reduction and employee wellness objectives.
            </p>
            <p className="text-gray-600 mb-6">
              Green TI practices include low-VOC materials that improve indoor air quality, energy-efficient lighting and HVAC systems that reduce operating costs, water conservation measures, and waste reduction during construction. Many green improvements qualify for utility rebates that offset additional costs, making sustainability economically attractive.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Common TI Challenges and Solutions
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Permit Delays</h3>
                <p className="text-gray-600 mb-3">
                  Building permit approval timelines can disrupt carefully planned TI schedules, especially when lease commencement dates are fixed. We mitigate permit risks through early submission, pre-application meetings with building officials, and relationships with expediting services when necessary.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-brand-green">
                  <p className="text-sm font-semibold text-brand-green-dark mb-1">Solution:</p>
                  <p className="text-sm text-gray-600">Begin permit applications during design development rather than waiting for final drawings. Submit phased permits for demolition and rough work while finalizing finish plans. Build 2-3 weeks permit buffer into project schedules.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Existing Building Conditions</h3>
                <p className="text-gray-600 mb-3">
                  Hidden conditions—inadequate electrical capacity, asbestos in ceiling tiles, structural limitations—can derail TI projects after construction begins. Discovery often requires change orders that impact budgets and schedules significantly.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-brand-green">
                  <p className="text-sm font-semibold text-brand-green-dark mb-1">Solution:</p>
                  <p className="text-sm text-gray-600">Conduct thorough pre-design investigation including ceiling surveys, electrical capacity analysis, and structural assessment. Include contingency allowances for hidden conditions. Request landlord disclosure of known building issues.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Coordinating with Occupied Buildings</h3>
                <p className="text-gray-600 mb-3">
                  Most TI projects occur in occupied buildings where existing tenants continue operations. Noise restrictions, dust control, access limitations, and utility interruptions require careful coordination to prevent tenant complaints and building violations.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-brand-green">
                  <p className="text-sm font-semibold text-brand-green-dark mb-1">Solution:</p>
                  <p className="text-sm text-gray-600">Develop detailed construction phasing that minimizes disruptions. Schedule noisy work during appropriate hours. Use temporary barriers and negative pressure systems for dust control. Communicate regularly with building management and affected tenants.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Material Lead Times and Availability</h3>
                <p className="text-gray-600 mb-3">
                  Custom millwork, specialty finishes, and imported materials often require extended lead times that can delay TI completion. Material shortages or shipping delays compound schedule challenges, particularly for fast-track projects.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-brand-green">
                  <p className="text-sm font-semibold text-brand-green-dark mb-1">Solution:</p>
                  <p className="text-sm text-gray-600">Identify long-lead items early in design and place orders promptly. Specify readily available materials where possible. Maintain relationships with multiple suppliers. Include material delay contingencies in project schedules.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Post-Completion Support and Warranty Services
            </h2>
            <p className="text-gray-600 mb-6">
              Our relationship with tenants extends well beyond TI completion. We provide comprehensive warranty services, maintenance guidance, and support for future modifications as businesses evolve. Understanding how spaces are actually used helps us refine designs for future projects and address any performance issues that arise.
            </p>
            <p className="text-gray-600 mb-6">
              Many tenant improvements require adjustments during the first months of occupancy as teams adapt to new spaces. We remain available for minor modifications, equipment additions, and space reconfigurations that optimize functionality. This ongoing support ensures tenants achieve maximum value from their TI investment.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">TI Project Success Metrics</h3>
              <div className="grid md:grid-cols-3 gap-4 text-blue-800">
                <div>
                  <h4 className="font-semibold mb-2">Schedule Performance</h4>
                  <ul className="text-sm space-y-1">
                    <li>• On-time completion rate: 98%</li>
                    <li>• Average project duration: Within 5% of estimate</li>
                    <li>• Permit approval: First submission success 85%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Budget Management</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Projects within allowance: 78%</li>
                    <li>• Change orders under 5%: 92%</li>
                    <li>• Accurate initial estimates: ±3% average</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quality and Satisfaction</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Client satisfaction rating: 4.8/5.0</li>
                    <li>• Punch list items: &lt;10 per project</li>
                    <li>• Repeat client rate: 76%</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Regional TI Market Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's diverse commercial markets each present unique TI characteristics. Downtown Tampa's high-rise office buildings require coordination with building management, union labor considerations, and elevator scheduling. Suburban office parks offer more flexibility but may have older infrastructure requiring updates. Medical corridors have specialized requirements while retail centers focus on customer experience.
            </p>
            <p className="text-gray-600 mb-6">
              We maintain relationships with subcontractors throughout Tampa Bay who understand local requirements and can deliver quality work efficiently. Our familiarity with building officials in Tampa, St. Petersburg, Clearwater, and other jurisdictions helps expedite permit approvals. This local expertise translates to smoother projects and better outcomes for tenants.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Future-Proofing Your Tenant Improvement Investment
            </h2>
            <p className="text-gray-600 mb-6">
              Smart TI design considers not just immediate needs but future evolution of your business. Technology infrastructure should accommodate growth and changing requirements. Space layouts should allow reconfiguration without major reconstruction. Material selections should age well and support multiple uses over time.
            </p>
            <p className="text-gray-600 mb-6">
              We design flexibility into every TI project—moveable partitions that allow space reconfiguration, electrical systems with capacity for growth, and HVAC zoning that adapts to changing occupancy patterns. These investments cost little during initial construction but provide enormous value as businesses evolve and expand within their spaces.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Industry-Specific TI Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Different industries have unique tenant improvement requirements that affect design, construction methods, and regulatory compliance. Our experience across various industries allows us to guide clients toward TI solutions that support their specific operational needs and growth plans.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Legal and Professional Services</h3>
                <p className="text-gray-600 mb-3">
                  Law firms, accounting practices, and consulting companies require private offices for confidential meetings, sophisticated technology infrastructure, and prestigious finishes that reflect professional image. Conference room acoustics, security systems, and document storage are critical considerations.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1 text-brand-green-dark">Design Priorities:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Acoustic privacy for confidential conversations</li>
                      <li>• Professional appearance and high-end finishes</li>
                      <li>• Secure document storage and file systems</li>
                      <li>• Multiple conference rooms of varying sizes</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-brand-green-dark">Technical Requirements:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Robust networking for large file transfers</li>
                      <li>• Video conferencing capabilities</li>
                      <li>• Enhanced security and access control</li>
                      <li>• Backup power for critical systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Healthcare and Medical</h3>
                <p className="text-gray-600 mb-3">
                  Medical practices require specialized infrastructure including medical gas systems, enhanced ventilation, infection control measures, and accessibility compliance. Different medical specialties have unique requirements for equipment, privacy, and patient flow management.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1 text-brand-green-dark">Clinical Requirements:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Medical gas rough-ins (oxygen, nitrous, vacuum)</li>
                      <li>• Enhanced HVAC with appropriate filtration</li>
                      <li>• Specialized lighting for examination rooms</li>
                      <li>• Patient privacy and HIPAA compliance</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-brand-green-dark">Operational Considerations:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Patient flow and waiting room design</li>
                      <li>• Staff work areas and break rooms</li>
                      <li>• Medical equipment storage and organization</li>
                      <li>• Emergency power and communication systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Financial Services</h3>
                <p className="text-gray-600 mb-3">
                  Banks, credit unions, and financial advisors need secure environments with controlled access, vault spaces for sensitive documents, and customer-facing areas that convey trust and stability. Technology infrastructure must support financial systems and regulatory compliance requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1 text-brand-green-dark">Security Features:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Enhanced access control and monitoring</li>
                      <li>• Secure document storage areas</li>
                      <li>• Tamper-evident construction details</li>
                      <li>• Controlled customer and staff access zones</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-brand-green-dark">Customer Experience:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Professional lobby and waiting areas</li>
                      <li>• Private consultation rooms</li>
                      <li>• Clear sightlines for supervision</li>
                      <li>• Comfortable meeting spaces</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Technology and Startups</h3>
                <p className="text-gray-600 mb-3">
                  Tech companies prioritize collaborative workspaces, flexible layouts that can adapt quickly, robust networking infrastructure, and amenities that support long work hours. Open floor plans must balance collaboration with focus zones for deep work.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1 text-brand-green-dark">Workspace Design:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Open collaborative areas with breakout spaces</li>
                      <li>• Flexible furniture systems and moveable walls</li>
                      <li>• Multiple meeting room sizes and styles</li>
                      <li>• Quiet zones for focused individual work</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 text-brand-green-dark">Infrastructure Needs:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• High-density networking and WiFi coverage</li>
                      <li>• Multiple displays and presentation systems</li>
                      <li>• Kitchen facilities and informal meeting areas</li>
                      <li>• Scalable electrical and data systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Construction Safety and Risk Management in TI Projects
            </h2>
            <p className="text-gray-600 mb-6">
              Tenant improvement projects present unique safety challenges due to occupied building conditions, compressed schedules, and coordination with multiple trades in limited space. We maintain comprehensive safety protocols that protect our workers, building occupants, and the general public while ensuring project completion on schedule.
            </p>
            <p className="text-gray-600 mb-6">
              Our safety program includes daily safety briefings, hazard identification training, confined space protocols for ceiling work, and coordination with building emergency systems. We carry comprehensive insurance coverage and maintain excellent safety records that protect both our team and our clients from liability exposure.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-xl font-bold text-red-800 mb-3">Critical Safety Considerations in TI Work</h3>
              <div className="grid md:grid-cols-2 gap-4 text-red-800">
                <div>
                  <h4 className="font-semibold mb-2">Occupied Building Hazards</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Dust control and air quality management</li>
                    <li>• Noise restrictions during business hours</li>
                    <li>• Egress path maintenance during construction</li>
                    <li>• Fire alarm and suppression system coordination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Worker Protection</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Fall protection in ceiling and elevated work</li>
                    <li>• Electrical safety in live buildings</li>
                    <li>• Personal protective equipment requirements</li>
                    <li>• Hazardous material handling procedures</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The FCS Advantage in Tampa Bay Tenant Improvements
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings unique advantages to Tampa Bay tenant improvement projects through our combination of technical expertise, local relationships, and proven project management systems. We understand that TI success requires more than construction skills—it demands business acumen, scheduling expertise, and the ability to solve problems quickly and effectively.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Local Market Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 20+ years serving Tampa Bay commercial tenants</li>
                  <li>• Relationships with subcontractors who understand TI requirements</li>
                  <li>• Knowledge of local building codes and permit processes</li>
                  <li>• Understanding of Tampa Bay's unique climate considerations</li>
                  <li>• Experience with all major office building types in the region</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-green-dark mb-3">Project Management Excellence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Dedicated project managers for every TI project</li>
                  <li>• Real-time project tracking and communication systems</li>
                  <li>• Proven methodologies for schedule and budget control</li>
                  <li>• Emergency response capabilities for urgent issues</li>
                  <li>• Post-completion support and warranty services</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Starting Your Tenant Improvement Project
            </h2>
            <p className="text-gray-600 mb-6">
              Every successful tenant improvement begins with understanding your business needs, space requirements, budget parameters, and timeline constraints. Our initial consultation explores these factors in detail, helping us design TI solutions that support your business objectives while respecting financial realities.
            </p>
            <p className="text-gray-600 mb-6">
              We encourage early engagement in your space planning process—whether you're evaluating multiple locations, negotiating lease terms, or planning improvements to existing space. Our input during these early stages can save significant time and money while ensuring your final TI delivers maximum value for your business.
            </p>
            <p className="text-gray-600 mb-6">
              Contact Florida Construction Specialists today to discuss your tenant improvement needs. We'll help you create a workspace that supports your business success, meets your timeline requirements, and stays within your budget parameters.
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
