import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Users, ClipboardList, Target, Clock, Shield, Award, BarChart, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Skilled Project Managers in Commercial Construction Florida",
  description: "Looking for experienced project managers for your commercial construction projects in Florida? Our team of skilled project managers in Tampa has years of expertise delivering successful projects.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Skilled Project Managers for Florida Commercial Construction", href: "/skilled-project-managers-for-florida-commercial-construction/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Project management team for commercial construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            The Tampa Difference: Experienced Project Managers for Florida Commercial Construction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Looking for experienced project managers for your commercial construction projects in Florida? Our team of skilled project managers in Tampa has years of expertise delivering successful projects on time and on budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              The success of any commercial construction project ultimately comes down to leadership. While quality materials, skilled tradespeople, and adequate funding are essential, it's the project manager who orchestrates these elements into a successful outcome. At Florida Construction Specialists, serving Tampa, Lakeland, Sarasota, and the greater Tampa Bay area, we've built our reputation on the strength of our project management team—professionals who understand Florida's unique construction challenges and have the skills to navigate them successfully.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Critical Role of Project Managers in Commercial Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Commercial construction projects involve hundreds of decisions, thousands of details, and dozens of specialized contractors working toward a common goal. The project manager serves as the central hub of communication, coordination, and control that keeps everything moving in the right direction. Their responsibilities span the entire project lifecycle:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5" />
                  Pre-Construction Planning
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Developing detailed project schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Creating comprehensive budgets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Identifying potential risks and mitigation strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Coordinating permit applications</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Construction Execution
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Coordinating multiple trade contractors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Managing quality control inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Resolving conflicts and problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Maintaining safety compliance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <BarChart className="w-5 h-5" />
                  Budget Management
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Tracking costs against budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Processing change orders professionally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Identifying cost-saving opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Managing draw requests and payments</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Communication
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Regular progress updates to owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Coordinating with architects and engineers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Managing subcontractor relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                    <span>Documenting decisions and changes</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              What Makes an Exceptional Commercial Construction Project Manager
            </h2>
            <p className="text-gray-600 mb-6">
              Not all project managers are created equal. The best commercial construction PMs possess a unique combination of technical knowledge, leadership skills, and personal qualities that enable them to guide complex projects to successful completion:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Award className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Technical Construction Knowledge</h4>
                  <p className="text-gray-600">Deep understanding of construction methods, materials, building codes, and industry best practices. Our PMs understand not just what needs to happen, but why—enabling them to make informed decisions and evaluate alternatives when challenges arise.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Users className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Leadership and Team Management</h4>
                  <p className="text-gray-600">Ability to motivate, coordinate, and manage diverse teams including employees, subcontractors, and consultants. Great PMs create accountability while maintaining positive working relationships that get the best performance from everyone.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Target className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Problem-Solving Ability</h4>
                  <p className="text-gray-600">Construction never goes exactly as planned. The best project managers anticipate problems before they occur and have contingency plans ready. When unexpected issues arise, they quickly analyze options and implement effective solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <MessageSquare className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Communication Excellence</h4>
                  <p className="text-gray-600">Clear, proactive communication keeps all stakeholders informed and aligned. Our PMs provide regular updates, document decisions thoroughly, and ensure no one is surprised by developments on the project.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Florida Construction Specialists Project Management Approach
            </h2>
            <p className="text-gray-600 mb-6">
              Our project management methodology has been refined over decades of commercial construction in Tampa Bay. We've developed systems and practices that consistently deliver projects on time, on budget, and to our clients' satisfaction:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Phase</th>
                    <th className="px-6 py-3 text-left">PM Activities</th>
                    <th className="px-6 py-3 text-left">Client Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Pre-Construction</td>
                    <td className="px-6 py-4">Budget validation, schedule creation, risk analysis</td>
                    <td className="px-6 py-4">Accurate expectations, no surprises</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Weekly Planning</td>
                    <td className="px-6 py-4">Lookahead scheduling, resource coordination</td>
                    <td className="px-6 py-4">Efficient execution, minimal delays</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Daily Management</td>
                    <td className="px-6 py-4">Quality checks, safety oversight, coordination</td>
                    <td className="px-6 py-4">Consistent quality, safe worksite</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Client Updates</td>
                    <td className="px-6 py-4">Progress reports, budget tracking, photo logs</td>
                    <td className="px-6 py-4">Full visibility, informed decisions</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Issue Resolution</td>
                    <td className="px-6 py-4">RFI management, change order processing</td>
                    <td className="px-6 py-4">Fast answers, controlled costs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Closeout</td>
                    <td className="px-6 py-4">Punch list, commissioning, documentation</td>
                    <td className="px-6 py-4">Smooth handover, complete records</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida-Specific Project Management Expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Managing commercial construction in Florida requires specialized knowledge that out-of-state contractors often lack. Our project managers bring deep expertise in Florida-specific challenges:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Hurricane Season Management</h4>
                <p className="text-gray-600 text-sm">Our PMs develop hurricane contingency plans for every project, including site securing procedures, material protection, and recovery protocols. They monitor weather patterns and adjust schedules proactively during storm season (June-November).</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Local Permitting Navigation</h4>
                <p className="text-gray-600 text-sm">Tampa Bay's jurisdictions—Hillsborough County, Pinellas County, City of Tampa, St. Petersburg—each have unique processes. Our PMs know how to navigate these efficiently, avoiding delays that derail project schedules.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Climate-Adapted Scheduling</h4>
                <p className="text-gray-600 text-sm">Florida's rainy season and heat require thoughtful scheduling. We sequence work to protect weather-sensitive activities and schedule heavy labor during cooler morning hours for productivity and safety.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Florida Building Code Mastery</h4>
                <p className="text-gray-600 text-sm">The Florida Building Code is among the most stringent in the nation. Our PMs ensure compliance with hurricane protection, energy efficiency, and accessibility requirements from day one, preventing costly corrections.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Project Manager Qualifications at Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              We maintain high standards for our project management team. Every PM at Florida Construction Specialists brings:
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">10+</div>
                <div className="text-sm text-gray-600">Years Minimum</div>
                <div className="text-xs text-gray-500">Industry Experience</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">$25M+</div>
                <div className="text-sm text-gray-600">Project Volume</div>
                <div className="text-xs text-gray-500">Successfully Managed</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">PMP</div>
                <div className="text-sm text-gray-600">Certified</div>
                <div className="text-xs text-gray-500">Or Equivalent</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">OSHA</div>
                <div className="text-sm text-gray-600">30-Hour</div>
                <div className="text-xs text-gray-500">Certified</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Technology-Enabled Project Management
            </h2>
            <p className="text-gray-600 mb-6">
              Our project managers leverage modern construction management technology to enhance visibility, communication, and control:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Cloud-Based Project Management:</strong> Real-time access to schedules, documents, and communications from anywhere, keeping all stakeholders aligned.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Daily Photo Documentation:</strong> Comprehensive visual records of construction progress, valuable for monitoring and future reference.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Integrated Budget Tracking:</strong> Real-time cost monitoring that identifies variances early, enabling proactive management.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>BIM Coordination:</strong> For complex projects, Building Information Modeling helps identify conflicts before they occur in the field.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Client Portal Access:</strong> 24/7 access to project information, documents, and progress updates at your convenience.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Value of Experienced Project Management
            </h2>
            <p className="text-gray-600 mb-6">
              Studies consistently show that project management quality is the single biggest factor in construction project success. Poor project management leads to cost overruns averaging 20-40%, schedule delays, quality issues, and frustrated stakeholders. Conversely, skilled project managers deliver:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>Projects completed on or under budget 85%+ of the time</li>
              <li>Schedule performance within 5% of original projections</li>
              <li>Fewer change orders and claims</li>
              <li>Higher quality outcomes with fewer defects</li>
              <li>Better safety records and fewer incidents</li>
              <li>Satisfied clients who become repeat customers and referrals</li>
            </ul>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Project Management
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How often will the project manager communicate with me?
                  </h3>
                  <p className="text-gray-600">
                    Our standard practice includes weekly formal progress reports with photos and budget updates. However, your PM is available daily for questions or concerns. Most clients receive 2-3 informal updates per week in addition to the formal report. We tailor communication frequency to your preferences—some clients prefer daily briefings, others are comfortable with weekly summaries.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Will the same project manager handle my entire project?
                  </h3>
                  <p className="text-gray-600">
                    Yes. Continuity is crucial for project success. The PM assigned to your project at the start will be with you through completion. We intentionally manage our project portfolio to ensure PMs aren't stretched across too many simultaneous projects—typically 2-3 major projects per PM maximum.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do your project managers handle problems or delays?
                  </h3>
                  <p className="text-gray-600">
                    Transparency and proactive communication are core values. When issues arise, you'll hear about them immediately along with proposed solutions. Our PMs don't hide problems—they address them head-on with clear options and recommendations. We maintain schedule and cost contingencies to handle typical project challenges without derailing overall goals.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Can I meet the project manager before signing a contract?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We encourage clients to meet their proposed PM during the proposal phase. You're trusting this person with a significant investment and months of your business life—you should be confident in the relationship before committing. We'll introduce the PM who would actually manage your project, not a sales representative.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What happens if I'm not satisfied with my project manager's performance?
                  </h3>
                  <p className="text-gray-600">
                    Client satisfaction is paramount. If concerns arise about PM performance, raise them immediately with our operations team. We'll address issues directly and, if necessary, make personnel changes to ensure your project succeeds. This is rare because of our careful PM selection and training, but we stand behind your satisfaction.
                  </p>
                </div>
              </div>
            </div>

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

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Experience the Difference Skilled Project Management Makes
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today to discuss your commercial project and meet our experienced project management team.
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
