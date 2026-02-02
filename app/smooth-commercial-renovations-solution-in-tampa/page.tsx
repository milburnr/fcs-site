import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building2, Clock, Users, ShieldCheck, HelpCircle, Briefcase, Calendar, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Smooth Commercial Renovations in Tampa | Stay Open During Construction",
  description: "Keep your Tampa business running during commercial renovation. Phased construction, after-hours work, and business continuity strategies from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Smooth Commercial Renovations Solution in Tampa", href: "/smooth-commercial-renovations-solution-in-tampa/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/tampas-premier-commercial-remodeling-contractors/", label: "Commercial Remodeling Contractors" },
  { href: "/maximize-savings-on-commercial-renovation/", label: "Maximize Renovation Savings" },
  { href: "/contact/", label: "Schedule Consultation" },
];

const smoothStrategies = [
  { title: "Phased Construction", description: "Renovate in sections while maintaining operations in completed areas", icon: Calendar },
  { title: "After-Hours Work", description: "Schedule disruptive tasks during evenings, nights, and weekends", icon: Clock },
  { title: "Dust & Noise Control", description: "Professional barriers and mitigation protect occupied spaces", icon: ShieldCheck },
  { title: "Clear Communication", description: "Daily updates and advance notice of impactful activities", icon: MessageSquare },
];

const businessTypes = [
  {
    type: "Retail Stores",
    challenges: "Customer experience, visual merchandising, point-of-sale operations",
    solutions: "Night work for noisy tasks, temporary fixture relocations, maintained entrances"
  },
  {
    type: "Medical Offices",
    challenges: "Patient comfort, sterile environments, equipment sensitivity",
    solutions: "HEPA filtration, strict infection control, weekend equipment relocations"
  },
  {
    type: "Office Buildings",
    challenges: "Employee productivity, client meetings, technology continuity",
    solutions: "Floor-by-floor phasing, weekend moves, temporary conference spaces"
  },
  {
    type: "Restaurants",
    challenges: "Health department compliance, service continuity, kitchen operations",
    solutions: "Closed-day construction, section-by-section renovation, temp kitchen setups"
  },
];

const faqs = [
  {
    question: "Can my business really stay open during a major renovation?",
    answer: "In most cases, yes—with proper planning. We've helped medical practices maintain patient care, retail stores stay open through holiday seasons, and office buildings keep tenants comfortable during major renovations. The key is thorough advance planning: identifying which tasks are disruptive, scheduling them for minimal impact, creating physical barriers between work and occupied areas, and maintaining clear communication throughout. Some businesses maintain 70-80% normal operations; others may need temporary modifications. We assess your specific situation and develop realistic continuity plans."
  },
  {
    question: "How do you control dust and noise during occupied renovations?",
    answer: "We deploy comprehensive containment strategies: temporary walls with sealed joints separate work areas from occupied spaces; negative air pressure keeps dust flowing toward work areas rather than escaping; HEPA air scrubbers filter particles from work zone air; walk-off mats and boot covers prevent tracking into clean areas. For noise, we schedule demolition and loud work during low-occupancy periods, use noise-dampening equipment where available, and provide advance notice of unavoidable noisy activities. Most occupants report minimal awareness of construction with proper containment."
  },
  {
    question: "What additional costs should I expect for occupied renovation?",
    answer: "Occupied renovation typically adds 10-20% to project costs compared to vacated construction. This premium covers: temporary barriers and containment systems, after-hours labor premiums (typically 15-30% above standard rates), phased mobilization/demobilization, additional supervision for occupant protection, and extended schedules from work restrictions. However, this premium is often less than lost revenue from business closure, temporary relocation costs, and customer/tenant disruption. We provide detailed cost comparisons during planning."
  },
  {
    question: "How do you handle IT and technology during renovation?",
    answer: "Technology continuity requires careful coordination. We identify all technology infrastructure early: servers, network equipment, phone systems, security cameras, and specialty equipment. Critical systems are protected in place or relocated before work begins. Electrical modifications are scheduled to minimize downtime—often weekend cutovers allow reconfiguration without business impact. We coordinate with your IT team or vendors to ensure smooth transitions. Temporary connectivity maintains operations during permanent infrastructure changes."
  },
  {
    question: "What happens if renovation takes longer than planned?",
    answer: "Schedule extensions happen occasionally despite careful planning—hidden conditions, weather delays, or supply chain issues can affect any project. We build realistic buffers into schedules and maintain contingency plans for critical milestone protection. When delays occur, we provide immediate notification and recovery options: accelerated schedules, additional crews, overtime work, or adjusted phasing. Our contract structures typically protect clients from schedule-related losses through clear accountability and delay mitigation commitments."
  },
  {
    question: "How do employees/tenants communicate concerns during construction?",
    answer: "We establish clear communication channels before construction begins. A dedicated project manager serves as primary contact for questions and concerns. Daily briefings (email or brief meetings) preview upcoming work. Signage directs questions appropriately. For multi-tenant buildings, we coordinate with property management to maintain consistent communication. Concerns are addressed within 24 hours—usually same day. Regular satisfaction check-ins ensure issues are identified and resolved quickly."
  },
  {
    question: "Can you work nights and weekends for our renovation?",
    answer: "Yes, after-hours work is a core capability. We maintain crews available for evening (6pm-midnight), night (midnight-6am), and weekend shifts. After-hours work carries labor premiums (typically 15-30% above standard rates) but eliminates business disruption for many tasks. We balance cost against disruption, recommending after-hours work for demolition, noisy installation, and utility connections while completing quieter work during business hours. Night work may require special permits in some areas and neighbor notification in mixed-use buildings."
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
            alt="Smooth commercial renovation while business operates in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Stay Open for Business: Smooth Commercial Renovations in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Don't let renovation shut down your Tampa business. Florida Construction Specialists delivers smooth, minimally-disruptive commercial renovations that keep you operational throughout construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Plan Your Occupied Renovation
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

      {/* Strategies */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {smoothStrategies.map((strategy, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <strategy.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{strategy.title}</h3>
                <p className="text-gray-600 text-sm">{strategy.description}</p>
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
              The Challenge: Renovation Without Business Disruption
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial renovation presents a fundamental challenge: your building needs improvement, but your business can't afford to close. Every day of closure means lost revenue, disrupted customer relationships, employee inconvenience, and competitive vulnerability. Tampa Bay's business environment is too competitive to hand customers to rivals while you renovate.
            </p>
            <p className="text-gray-600 mb-6">
              Yet renovation brings inherently disruptive activities—demolition noise, construction dust, utility interruptions, and spaces blocked by work crews. Reconciling these realities requires specialized expertise, careful planning, and execution discipline that distinguishes commercial contractors from residential ones. Florida Construction Specialists has refined our approach through hundreds of occupied renovation projects across Tampa Bay, developing systems that protect business operations while delivering quality construction.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Phased Construction: The Foundation of Business Continuity
            </h2>
            <p className="text-gray-600 mb-6">
              Phased construction divides renovation into logical sections that proceed sequentially while other areas remain operational. Rather than renovating your entire facility simultaneously, we complete one zone, return it to service, then move to the next. This approach requires more planning than single-phase construction but enables continuous operations throughout.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Phase Planning:</strong> Effective phasing begins during design. We analyze your operations to identify natural boundaries—separate departments, different floors, distinct functional zones. We map utility systems to understand what can be isolated without affecting adjacent areas. We develop schedules that align construction phases with your operational patterns, prioritizing work in areas during their low-activity periods.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Temporary Accommodations:</strong> Phasing often requires temporary arrangements—relocated workstations, shared conference rooms, modified workflows. We help plan these accommodations as part of project development, ensuring people and functions have appropriate space throughout construction. For some clients, we construct temporary facilities that serve during renovation and convert to permanent use afterward.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Phase Transitions:</strong> Moving from one phase to the next requires careful coordination. Completed areas must be thoroughly cleaned and inspected before occupancy. Furniture and equipment must be relocated efficiently. Systems must be tested and commissioned. We schedule phase transitions during low-impact periods—weekends for office buildings, early mornings for retail, closed days for restaurants.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Dust and Debris Control: Professional Containment
            </h2>
            <p className="text-gray-600 mb-6">
              Construction dust is more than annoying—it poses health concerns, damages equipment, triggers sensitive employees, and creates cleaning burdens. Professional containment is non-negotiable for occupied renovation. Our approach goes far beyond plastic sheeting taped to door frames.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Physical Barriers:</strong> We construct temporary walls with proper framing, drywall or rigid panels, and sealed joints that create true separation between work and occupied zones. These barriers include sealed doors for access control and are designed to maintain building fire/life safety separations. For highly sensitive environments like medical facilities, we use ICRA (Infection Control Risk Assessment) protocols with negative air pressure to prevent contamination migration.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Air Management:</strong> Negative air pressure in work zones ensures air flows from clean areas to work areas—not the reverse. Industrial air scrubbers with HEPA filtration remove particles before air is exhausted. We seal HVAC registers in work zones and install filtration on adjacent zone returns. For extended projects, duct cleaning before occupancy removes accumulated dust.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Access Control:</strong> Defined entry/exit points with walk-off mats capture debris before it leaves work zones. Workers wear booties when transitioning through occupied areas. Tool carts and material transport use designated routes. Staging areas keep materials organized rather than scattered throughout the building.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Noise Management: Strategic Scheduling
            </h2>
            <p className="text-gray-600 mb-6">
              Some construction activities are simply loud—demolition, concrete cutting, pipe fitting, and certain installations generate noise that can't be contained. Effective noise management accepts this reality and schedules noisy work for minimal impact.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>After-Hours Work:</strong> We maintain crews available for evening, night, and weekend shifts specifically for disruptive tasks. Demolition completed overnight is cleared before morning arrivals. Weekend work allows extended noisy activities without occupant impact. After-hours labor carries cost premiums (typically 15-30%), but eliminating business disruption often justifies the investment.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Activity Coordination:</strong> When after-hours work isn't feasible, we coordinate with your operations to schedule noisy activities during inherently loud periods (lunch rushes, equipment cycling), employee meetings or off-site events, or brief announced windows with advance notice. Most occupants tolerate predictable, time-limited noise better than unexpected disruptions.
            </p>

            {/* Cost Table */}
            <div className="my-8 overflow-x-auto">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Occupied vs. Vacated Renovation Comparison</h3>
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Factor</th>
                    <th className="px-6 py-3 text-left">Occupied Renovation</th>
                    <th className="px-6 py-3 text-left">Vacated Renovation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Construction Cost</td>
                    <td className="px-6 py-4">+10-20% premium</td>
                    <td className="px-6 py-4">Base cost</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Business Revenue</td>
                    <td className="px-6 py-4">Maintained (70-90%)</td>
                    <td className="px-6 py-4">Lost during closure</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Customer Relationships</td>
                    <td className="px-6 py-4">Maintained</td>
                    <td className="px-6 py-4">At risk</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Employee Impact</td>
                    <td className="px-6 py-4">Some disruption</td>
                    <td className="px-6 py-4">Relocation or leave</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Timeline</td>
                    <td className="px-6 py-4">+15-25% longer</td>
                    <td className="px-6 py-4">Shortest possible</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Planning Complexity</td>
                    <td className="px-6 py-4">High</td>
                    <td className="px-6 py-4">Standard</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Relocation Costs</td>
                    <td className="px-6 py-4">None or minimal</td>
                    <td className="px-6 py-4">Potentially significant</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Communication: The Secret Ingredient
            </h2>
            <p className="text-gray-600 mb-6">
              Even with perfect containment and scheduling, occupied renovation creates anxiety. People worry about what's happening, whether it's safe, and when disruptions will end. Proactive communication transforms worried occupants into informed, cooperative partners.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Advance Notice:</strong> Before construction begins, we explain the project scope, timeline, and what occupants should expect. For multi-tenant buildings, we meet with each tenant to address specific concerns. This introduction establishes expectations and opens communication channels.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Daily Updates:</strong> Brief daily communications preview upcoming work, highlight any activities that may cause disruption, and note any schedule changes. For complex projects, we provide weekly look-ahead schedules showing planned activities by area. These updates arrive before the start of business so people can plan accordingly.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Responsive Issue Resolution:</strong> Concerns and complaints receive immediate attention. Our project managers are accessible throughout the day and respond to issues within hours—often minutes. Problems identified early are resolved before they escalate. We track and trend concerns to identify patterns requiring systemic solutions.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Special Considerations by Business Type
            </h2>
            <p className="text-gray-600 mb-6">
              Different businesses have different sensitivities. We adapt our approach based on your specific operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
            Tailored Solutions by Business Type
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {businessTypes.map((business, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{business.type}</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-semibold text-gray-500">Key Challenges:</span>
                    <p className="text-gray-600">{business.challenges}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-brand-green">Our Solutions:</span>
                    <p className="text-gray-700">{business.solutions}</p>
                  </div>
                </div>
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
            title="Commercial Renovation Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready for a Renovation That Doesn't Disrupt Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists specializes in occupied commercial renovations throughout Tampa Bay. Contact us to discuss how we can transform your space while keeping you open for business.
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
