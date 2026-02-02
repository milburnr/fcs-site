import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, CheckCircle, Award, Building, Clock, Shield, Users, Star, MapPin, Briefcase } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Your Top Choice for Commercial Construction in Tampa",
  description: "We specialize in top-notch commercial construction in Tampa. Trust Florida Construction Specialists, a full-service construction company serving Tampa Bay.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Your Top Choice for Commercial Construction in Tampa", href: "/your-top-choice-for-commercial-construction-in-tampa/" },
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
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Florida Construction Specialists: Your Top Choice for Commercial Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            We specialize in delivering exceptional commercial construction projects throughout Tampa Bay. Trust Florida Construction Specialists, a full-service construction company with decades of local expertise.
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
              When Tampa Bay business owners seek a commercial construction partner they can trust, they turn to Florida Construction Specialists. With decades of experience building across Hillsborough, Pinellas, Polk, and Manatee counties, we've established ourselves as the region's premier commercial contractor. Our commitment to quality craftsmanship, transparent communication, and client satisfaction has made us the top choice for businesses throughout Tampa, Lakeland, Sarasota, and the surrounding communities.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Why Tampa Businesses Choose Florida Construction Specialists
            </h2>
            <p className="text-gray-600 mb-6">
              Selecting a commercial contractor is one of the most important business decisions you'll make. Your construction partner will shape your facility's quality, your project timeline, and ultimately your business operations. Tampa Bay businesses consistently choose Florida Construction Specialists because we deliver exceptional results while providing a seamless construction experience from concept to completion.
            </p>
            <p className="text-gray-600 mb-6">
              Our reputation is built on successfully completed projects spanning every commercial sector: from medical facilities requiring specialized infrastructure to retail spaces demanding aesthetic precision, from industrial warehouses needing functional efficiency to office buildings reflecting corporate culture. Whatever your commercial construction need, we have the expertise, resources, and local knowledge to deliver outstanding results.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Full-Service Commercial Construction Capabilities
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Ground-Up Construction
                </h3>
                <p className="text-gray-600">
                  From site selection analysis through final occupancy, we manage complete new construction projects. Our pre-construction services help optimize your design for budget, schedule, and functionality while our construction teams deliver quality execution.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Tenant Improvements
                </h3>
                <p className="text-gray-600">
                  We specialize in transforming commercial spaces for new tenants or evolving business needs. Our tenant improvement projects minimize disruption to surrounding businesses while delivering move-in ready spaces on aggressive timelines.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Design-Build Services
                </h3>
                <p className="text-gray-600">
                  Our design-build approach streamlines project delivery by providing single-source accountability for both design and construction. This method typically reduces project timelines by 15-20% while improving cost control and communication.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Renovations & Additions
                </h3>
                <p className="text-gray-600">
                  Expanding or updating your existing facility requires careful planning to maintain operations during construction. We excel at phased renovation projects that keep your business running while we transform your space.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Industries We Serve Throughout Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists brings specialized expertise to every commercial sector. Our diverse portfolio demonstrates our ability to understand unique industry requirements and deliver tailored solutions:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Industry</th>
                    <th className="px-6 py-3 text-left">Project Types</th>
                    <th className="px-6 py-3 text-left">Special Considerations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Healthcare</td>
                    <td className="px-6 py-4">Medical offices, urgent care, surgical centers</td>
                    <td className="px-6 py-4">AHCA compliance, infection control</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Retail</td>
                    <td className="px-6 py-4">Storefronts, restaurants, shopping centers</td>
                    <td className="px-6 py-4">Customer experience, ADA accessibility</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Office</td>
                    <td className="px-6 py-4">Corporate offices, professional buildings</td>
                    <td className="px-6 py-4">Technology infrastructure, flexible layouts</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Industrial</td>
                    <td className="px-6 py-4">Warehouses, distribution centers, manufacturing</td>
                    <td className="px-6 py-4">Heavy equipment, loading requirements</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Hospitality</td>
                    <td className="px-6 py-4">Hotels, restaurants, entertainment venues</td>
                    <td className="px-6 py-4">Guest experience, brand standards</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Education</td>
                    <td className="px-6 py-4">Private schools, training facilities</td>
                    <td className="px-6 py-4">Safety codes, acoustic requirements</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              The Florida Construction Specialists Difference
            </h2>
            <p className="text-gray-600 mb-6">
              What sets us apart from other commercial contractors in Tampa Bay isn't just our construction capabilities—it's our approach to client relationships and project delivery. We've built our reputation on core principles that guide every project:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Star className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Transparent Communication</h4>
                  <p className="text-gray-600">We believe informed clients are satisfied clients. Our project management approach keeps you updated on progress, challenges, and solutions through regular reports, online project portals, and accessible project managers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Clock className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Schedule Commitment</h4>
                  <p className="text-gray-600">We understand that construction delays impact your business operations and bottom line. Our detailed scheduling, proactive issue resolution, and strong subcontractor relationships help us consistently deliver projects on time.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Shield className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Budget Integrity</h4>
                  <p className="text-gray-600">Cost control begins in pre-construction with thorough value engineering and continues throughout the project with disciplined change order management. We identify potential issues early and present solutions before they impact your budget.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-lg">
                <Users className="w-8 h-8 text-brand-green shrink-0" />
                <div>
                  <h4 className="font-bold text-brand-green-dark mb-1">Local Expertise</h4>
                  <p className="text-gray-600">Decades in Tampa Bay have given us unmatched knowledge of local conditions, permitting processes, and reliable subcontractors. This expertise translates to smoother projects and better outcomes for our clients.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Service Area Throughout Central Florida
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists proudly serves commercial clients throughout the greater Tampa Bay region and Central Florida:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Hillsborough County
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Tampa</li>
                  <li>Brandon</li>
                  <li>Plant City</li>
                  <li>Temple Terrace</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Pinellas County
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>St. Petersburg</li>
                  <li>Clearwater</li>
                  <li>Largo</li>
                  <li>Pinellas Park</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Polk County
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Lakeland</li>
                  <li>Winter Haven</li>
                  <li>Bartow</li>
                  <li>Auburndale</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Manatee County
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Bradenton</li>
                  <li>Palmetto</li>
                  <li>Ellenton</li>
                  <li>Parrish</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Sarasota County
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>Sarasota</li>
                  <li>Venice</li>
                  <li>North Port</li>
                  <li>Englewood</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Pasco County
                </h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>New Port Richey</li>
                  <li>Wesley Chapel</li>
                  <li>Land O' Lakes</li>
                  <li>Dade City</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Project Delivery Methods We Offer
            </h2>
            <p className="text-gray-600 mb-6">
              We tailor our project delivery approach to match your specific needs, timeline, and budget requirements:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Delivery Method</th>
                    <th className="px-6 py-3 text-left">Best For</th>
                    <th className="px-6 py-3 text-left">Key Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Design-Build</td>
                    <td className="px-6 py-4">Projects needing fast track delivery</td>
                    <td className="px-6 py-4">Single point accountability, faster schedule</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Construction Management</td>
                    <td className="px-6 py-4">Complex projects with evolving scope</td>
                    <td className="px-6 py-4">Maximum flexibility, cost transparency</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">General Contracting</td>
                    <td className="px-6 py-4">Projects with complete design documents</td>
                    <td className="px-6 py-4">Fixed pricing, clear scope definition</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Pre-Construction Services</td>
                    <td className="px-6 py-4">Early planning stages</td>
                    <td className="px-6 py-4">Budget validation, constructability review</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Commitment to Quality and Safety
            </h2>
            <p className="text-gray-600 mb-6">
              Quality and safety aren't just priorities at Florida Construction Specialists—they're non-negotiable standards that guide every aspect of our operations. Our quality assurance program includes regular inspections, detailed documentation, and clear accountability at every project phase. Our safety record speaks for itself, with an Experience Modification Rate (EMR) consistently below industry averages.
            </p>
            <p className="text-gray-600 mb-6">
              Every project team member holds appropriate safety certifications, and our comprehensive safety program exceeds OSHA requirements. We conduct daily safety briefings, weekly safety audits, and maintain zero tolerance for unsafe practices. This commitment protects our workers, your project, and your liability exposure.
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">0.75</div>
                <div className="text-sm text-gray-600">EMR Rating</div>
                <div className="text-xs text-gray-500">(Below 1.0 is excellent)</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">100%</div>
                <div className="text-sm text-gray-600">OSHA Certified</div>
                <div className="text-xs text-gray-500">Supervisors</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">Daily</div>
                <div className="text-sm text-gray-600">Safety Briefings</div>
                <div className="text-xs text-gray-500">Every project</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-brand-green">Zero</div>
                <div className="text-sm text-gray-600">Tolerance Policy</div>
                <div className="text-xs text-gray-500">For violations</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Start Your Commercial Project Today
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you're planning a new commercial development, expanding your existing facility, or renovating your space for new purposes, Florida Construction Specialists is ready to deliver exceptional results. Our experienced team will guide you through every phase, from initial concept and budgeting through construction and final occupancy.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us today for a complimentary consultation. We'll discuss your project goals, timeline, and budget, and show you how Florida Construction Specialists can make your commercial construction vision a reality.
            </p>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What size commercial projects does Florida Construction Specialists handle?
                  </h3>
                  <p className="text-gray-600">
                    We handle commercial projects ranging from small tenant improvements (1,000+ square feet) to large ground-up construction projects exceeding 100,000 square feet. Our diverse capabilities allow us to right-size our approach for your specific project needs, whether it's a $100,000 renovation or a multi-million dollar new construction.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How early in the process should I contact Florida Construction Specialists?
                  </h3>
                  <p className="text-gray-600">
                    The earlier, the better. Our pre-construction services can provide valuable input during the planning and design phases, helping optimize your project for budget, schedule, and constructability. Engaging us before design is complete allows us to identify cost-saving opportunities and potential challenges before they become expensive problems.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do you handle projects during hurricane season?
                  </h3>
                  <p className="text-gray-600">
                    We've developed comprehensive hurricane preparedness protocols refined over decades of Tampa Bay construction. Our plans include site securing procedures, material protection strategies, and contingency scheduling. We monitor weather closely during June through November and take proactive measures when storms threaten. Our hurricane experience means we minimize weather-related delays while protecting work in progress.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What is your typical project timeline?
                  </h3>
                  <p className="text-gray-600">
                    Timelines vary significantly based on project scope. A typical tenant improvement might take 8-16 weeks, while a ground-up commercial building could require 12-18 months. During our initial consultation, we'll provide a preliminary schedule based on your specific project requirements. We're known for meeting or beating our committed schedules.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Do you offer financing assistance for commercial construction projects?
                  </h3>
                  <p className="text-gray-600">
                    While we don't provide direct financing, we work closely with many Tampa Bay commercial lenders and can provide referrals to institutions experienced in construction financing. Our detailed cost estimates and professional documentation support your financing applications. We also structure payment schedules that align with typical construction loan draw procedures.
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
            Ready to Build with Tampa's Top Commercial Contractor?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a free consultation and discover why we're the top choice for commercial construction in Tampa Bay.
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
