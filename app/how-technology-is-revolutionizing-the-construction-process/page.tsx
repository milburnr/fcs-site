import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Cpu, Camera, Smartphone, Cloud, BarChart3, Shield, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "How Technology Is Revolutionizing the Construction Process | Tampa Bay",
  description: "Discover how technology is revolutionizing construction in Tampa Bay. BIM, drones, project management software, and more. Florida Construction Specialists embraces innovation.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "How Technology Is Revolutionizing the Construction Process", href: "/how-technology-is-revolutionizing-the-construction-process/" },
];

const faqs = [
  {
    question: "How does BIM (Building Information Modeling) benefit construction projects?",
    answer: "BIM creates intelligent 3D models that contain detailed information about every building element. Benefits include clash detection (finding conflicts before construction), accurate quantity takeoffs, improved coordination among trades, better visualization for clients, and a permanent digital record of the building. For complex projects, BIM can prevent costly field conflicts and rework."
  },
  {
    question: "Do you use drones on construction projects?",
    answer: "Yes, we use drones for site documentation, progress monitoring, topographic surveys, roof inspections, and marketing photography. Drone imagery provides perspectives impossible from ground level, helps monitor large sites efficiently, and creates compelling documentation for clients and stakeholders. All operations comply with FAA regulations."
  },
  {
    question: "What project management software do you use?",
    answer: "We use industry-leading project management platforms (Procore, BuilderTrend, and similar tools) that provide real-time project visibility, document management, RFI and submittal tracking, daily logs, and mobile access for field teams. Clients receive access to view their project status, documents, and progress photos at any time."
  },
  {
    question: "How does technology improve construction quality?",
    answer: "Technology improves quality through better design visualization (catching issues before construction), automated quality checklists with photo documentation, real-time tracking of inspections and punch items, laser scanning for precise measurements, and detailed as-built documentation. Digital records also help with warranty service and future modifications."
  },
  {
    question: "Does using construction technology increase project costs?",
    answer: "While technology requires investment, it typically reduces overall project costs by preventing errors, improving coordination, reducing rework, and accelerating schedules. For most projects, technology investment pays for itself multiple times over through prevented problems. We incorporate appropriate technology without passing unusual costs to clients."
  }
];

const internalLinks = [
  { href: "/services/commercial/design-build/", label: "Design-Build Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/top-commercial-modular-construction-in-tampa/", label: "Modular Construction" },
  { href: "/the-essential-role-of-florida-construction-specialists/", label: "About Our Approach" },
  { href: "/contact/", label: "Discuss Your Project" },
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
            alt="Construction technology in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            How Technology Is Revolutionizing the Construction Process
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            From BIM and drones to project management platforms and prefabrication, technology transforms how we build. Florida Construction Specialists embraces innovation to deliver better projects—faster, more efficiently, and with higher quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              See Technology in Action
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Construction has historically been one of the least digitized industries—but that's changing rapidly. Technology is revolutionizing how buildings are designed, planned, and built. From 3D modeling that catches conflicts before construction to drones that monitor progress from above, from mobile apps that put project information in every worker's hand to prefabrication that moves construction into controlled factory environments—technology enables better buildings delivered more efficiently.
            </p>

            <p className="text-gray-600 mb-6">
              Florida Construction Specialists embraces construction technology strategically, adopting innovations that genuinely improve project outcomes for our clients. We're not chasing technology for its own sake—we're leveraging tools that reduce costs, accelerate schedules, improve quality, and enhance communication. Here's how technology is transforming Tampa Bay construction.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Construction Technology We Use
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Cpu className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Building Information Modeling (BIM)</h3>
                <p className="text-gray-600 mb-4">
                  BIM creates intelligent 3D models containing detailed information about every building component. Beyond visualization, BIM enables clash detection (finding conflicts between systems before construction), accurate quantity takeoffs, improved trade coordination, and permanent digital building records.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Clash detection prevents field conflicts</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Accurate material quantities</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Enhanced visualization for clients</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Digital as-built documentation</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Camera className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Drone Technology</h3>
                <p className="text-gray-600 mb-4">
                  Drones provide perspectives impossible from ground level. We use drone technology for site surveys and topographic mapping, progress documentation and monitoring, roof and elevated structure inspections, marketing photography and video, and volumetric measurements for earthwork.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Aerial progress monitoring</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Safe roof inspections</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Accurate site surveys</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Compelling project documentation</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Cloud className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Project Management Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Cloud-based project management provides real-time visibility into every project aspect. All stakeholders—owners, architects, subcontractors—access current information from any device. Document management, RFI tracking, daily logs, and scheduling integrate in one platform.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Real-time project visibility</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Centralized document management</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Mobile access for field teams</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Client portal access</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Smartphone className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Mobile Field Technology</h3>
                <p className="text-gray-600 mb-4">
                  Tablets and smartphones in the field put project information where work happens. Superintendents access drawings, submit daily reports, document issues with photos, and communicate instantly—all from the job site. Paper-based processes that delayed decisions become real-time digital workflows.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Digital daily logs with photos</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Mobile drawing access</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Instant issue documentation</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-green" /> Real-time communication</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              How Technology Improves Project Outcomes
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Better Cost Control</h3>
                    <p className="text-gray-600">Technology improves budgeting accuracy and cost tracking. BIM enables precise quantity takeoffs. Estimating software maintains current pricing data. Project management platforms track costs against budget in real-time, flagging variances before they become problems. Historical data improves future estimating accuracy.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Cpu className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Faster Schedules</h3>
                    <p className="text-gray-600">Technology accelerates projects in multiple ways. Clash detection prevents field rework. Digital workflows eliminate paper-based delays. Prefabrication moves work off the critical path. Real-time communication resolves issues quickly. Better coordination among trades reduces waiting. Mobile technology keeps decisions moving even when people aren't in the same location.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Shield className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Higher Quality</h3>
                    <p className="text-gray-600">Digital tools enhance quality control. BIM visualization catches design issues before construction. Photo documentation creates permanent quality records. Digital checklists ensure nothing is missed. Laser scanning verifies dimensional accuracy. Quality issues are documented, tracked, and resolved systematically rather than falling through cracks.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Building2 className="w-10 h-10 text-brand-green flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-2">Enhanced Communication</h3>
                    <p className="text-gray-600">Technology connects all project stakeholders. Clients access project status and documentation anytime. Subcontractors receive information instantly. Architects and engineers review submittals digitally. RFIs are tracked and resolved efficiently. Everyone works from the same current information—no more outdated paper sets causing confusion.</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Emerging Technologies Shaping Construction's Future
            </h2>

            <p className="text-gray-600 mb-6">
              Construction technology continues to evolve rapidly. Technologies that seemed futuristic a few years ago are becoming practical realities. We monitor emerging technologies and adopt those that provide genuine benefits:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-brand-green-dark mb-2">Modular & Prefabrication</h3>
                <p className="text-gray-600 text-sm">Factory fabrication of building components—from bathroom pods to entire building modules—moves construction into controlled environments with better quality control, weather independence, and labor efficiency. We're actively using prefabrication on appropriate projects.</p>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-brand-green-dark mb-2">Robotics & Automation</h3>
                <p className="text-gray-600 text-sm">Robotic systems for tasks like bricklaying, concrete finishing, and material handling are emerging. While not yet widespread, these technologies promise to address labor shortages and improve precision for repetitive tasks.</p>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-brand-green-dark mb-2">Augmented & Virtual Reality</h3>
                <p className="text-gray-600 text-sm">AR/VR enables clients to "walk through" buildings before construction, helps workers visualize complex installations, and supports remote collaboration. We use VR for design visualization on select projects.</p>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-brand-green-dark mb-2">AI & Machine Learning</h3>
                <p className="text-gray-600 text-sm">Artificial intelligence is beginning to assist with scheduling optimization, risk prediction, design assistance, and quality analysis. These tools are rapidly improving and will likely become standard within years.</p>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-brand-green-dark mb-2">IoT & Sensors</h3>
                <p className="text-gray-600 text-sm">Connected sensors monitor concrete curing, track equipment and materials, measure environmental conditions, and enable smart building systems. Data from these sensors improves construction decisions and building operations.</p>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-brand-green-dark mb-2">Advanced Materials</h3>
                <p className="text-gray-600 text-sm">New materials like self-healing concrete, transparent wood, and advanced composites offer performance improvements. As costs decrease and availability improves, these materials will become more common in construction.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Technology with Tampa Bay Expertise
            </h2>

            <p className="text-gray-600 mb-6">
              Technology doesn't replace experience—it amplifies it. The best construction technology in inexperienced hands still produces mediocre results. We combine cutting-edge tools with decades of Tampa Bay construction expertise: understanding local conditions, codes, and challenges that technology alone can't address. Hurricane-resistant construction, flood zone considerations, and Florida Building Code compliance require human expertise informed by technology—not technology alone.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="font-bold text-blue-800 mb-2">Technology Investment That Benefits Clients</h3>
              <p className="text-blue-700">
                We invest in construction technology because it produces better outcomes for clients—not to impress with gadgets. Every technology we adopt must demonstrate clear benefits: preventing problems, improving communication, accelerating schedules, or enhancing quality. We incorporate technology costs into our overall operations, not as line-item charges to clients.
              </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Experience Technology-Enhanced Construction</h3>
              <p className="mb-6 text-gray-200">
                Contact Florida Construction Specialists to discuss how construction technology can benefit your project. We'll show you how BIM, drones, digital project management, and other tools deliver better outcomes—combined with the Tampa Bay expertise that makes technology truly effective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Discuss Your Project
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Building Smarter with Technology
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists combines construction technology with decades of Tampa Bay expertise for better project outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Consultation
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
