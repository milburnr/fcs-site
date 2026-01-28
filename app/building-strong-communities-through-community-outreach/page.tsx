import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Heart, Users, Building2, Award, Handshake } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Building Strong Communities Through Community Outreach | Florida Construction Specialists",
  description: "Florida Construction Specialists' commitment to Tampa Bay communities through charitable initiatives, local partnerships, workforce development, and social engagement.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Building Strong Communities Through Community Outreach", href: "/building-strong-communities-through-community-outreach/" },
];

const internalLinks = [
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/contact/", label: "Contact Us" },
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
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Florida Construction Specialists community outreach"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Building Strong Communities Through Community Outreach
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            At Florida Construction Specialists, we believe construction companies have responsibility beyond buildings. Our community outreach programs strengthen Tampa Bay neighborhoods, support local organizations, and develop the next generation of construction professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Partner With Us
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
              Construction shapes communities physically, but our impact extends far beyond the buildings we create. Florida Construction Specialists has served Tampa Bay for decades, and we recognize that our success depends on healthy, thriving communities. Our outreach initiatives address housing needs, support local nonprofits, develop workforce skills, and engage our employees in meaningful service. We believe companies that benefit from communities have obligation to give back, and we take that obligation seriously.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Community Philosophy
            </h2>
            <p className="text-gray-600 mb-6">
              Community engagement isn't a marketing program at Florida Construction Specialists—it's embedded in our company values and daily operations. We ask: How can construction expertise help address community needs? Where can our resources make meaningful difference? How do we develop the workforce that will build Tampa Bay's future? These questions drive strategic community investment rather than scattered charitable giving.
            </p>
            <p className="text-gray-600 mb-6">
              We focus our efforts where construction expertise provides unique value. While writing checks to worthy causes helps, contributing actual construction skills, materials, and labor often delivers more impact per dollar invested. Building a Habitat home, renovating a community center, or teaching construction skills to disadvantaged youth leverages what we do best for community benefit.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Our Community Focus Areas
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Building & Housing</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Habitat for Humanity partnerships</li>
                    <li>• Nonprofit facility improvements</li>
                    <li>• Emergency disaster repairs</li>
                    <li>• Accessibility modifications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Workforce & Education</h4>
                  <ul className="space-y-1 text-blue-900">
                    <li>• Apprenticeship programs</li>
                    <li>• Technical school partnerships</li>
                    <li>• Career day participation</li>
                    <li>• Scholarship programs</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Habitat for Humanity Partnership
            </h2>
            <p className="text-gray-600 mb-6">
              Our longest-standing community partnership is with Habitat for Humanity of Hillsborough County and Habitat Pinellas and West Pasco. Each year, Florida Construction Specialists sponsors one or more Habitat builds, providing financial support, construction expertise, volunteer labor, and often donated materials. Our employees look forward to these build days as opportunities to use their skills directly helping families achieve homeownership.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond basic sponsorship, our construction professionals provide technical guidance that helps Habitat optimize their building programs. We've consulted on construction efficiency, material specifications, and building techniques that reduce costs while maintaining quality. This knowledge transfer multiplies the impact of our involvement—every efficiency improvement helps more families into homes.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Nonprofit Facility Support
            </h2>
            <p className="text-gray-600 mb-6">
              Many Tampa Bay nonprofits operate from aging facilities that need repairs, improvements, or expansion they struggle to afford. Florida Construction Specialists provides pro bono or reduced-cost construction services to selected community organizations each year. Recent projects have included food bank warehouse improvements, youth center renovations, and accessibility upgrades for disability services organizations.
            </p>
            <p className="text-gray-600 mb-6">
              We evaluate nonprofit projects based on community impact, organization sustainability, and our ability to deliver meaningful results. Selected projects receive the same quality attention we provide paying clients—professional project management, quality materials, and skilled execution. These aren't token efforts but genuine construction projects that transform organizational capabilities.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Workforce Development Initiatives
            </h2>
            <p className="text-gray-600 mb-6">
              The construction industry faces persistent skilled labor shortages, and addressing this challenge benefits both our company and our community. Florida Construction Specialists partners with technical schools, apprenticeship programs, and workforce development organizations to create pathways into construction careers. We provide internships, apprentice positions, and mentorship for individuals entering the trades.
            </p>
            <p className="text-gray-600 mb-6">
              Our apprenticeship program offers structured training combining classroom education with on-the-job experience across carpentry, electrical, plumbing, and project management disciplines. Apprentices earn while they learn, developing skills that lead to sustainable careers with family-supporting wages. Many current supervisors and project managers began their careers in our apprentice program, demonstrating clear advancement pathways.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Disaster Response and Recovery
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's hurricane vulnerability means disaster response is an ongoing community need. When storms strike, Florida Construction Specialists mobilizes quickly to help communities recover. We've provided emergency repairs for critical facilities, removed debris from impassable roads, and coordinated materials donations for affected families. Our construction equipment, materials inventory, and skilled personnel represent community assets during emergencies.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond immediate response, we participate in long-term recovery efforts. Post-hurricane rebuilding creates construction demand that exceeds normal workforce capacity—we work with recovery organizations to ensure fair pricing and quality standards during these vulnerable periods. We've also contributed to community resilience planning, sharing construction expertise to help communities better prepare for future storms.
            </p>

            {/* Impact Stats */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Community Impact
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-brand-green/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-brand-green mb-2">25+</div>
                  <div className="text-gray-600">Years of Community Service</div>
                </div>
                <div className="bg-brand-green/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-brand-green mb-2">50+</div>
                  <div className="text-gray-600">Habitat Homes Supported</div>
                </div>
                <div className="bg-brand-green/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-brand-green mb-2">100+</div>
                  <div className="text-gray-600">Apprentices Trained</div>
                </div>
                <div className="bg-brand-green/5 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-brand-green mb-2">$1M+</div>
                  <div className="text-gray-600">Annual Community Investment</div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Our Community Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Construction Partnerships</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Habitat for Humanity builds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Nonprofit facility upgrades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Community center renovations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Disaster recovery support</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Workforce Programs</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Apprenticeship training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Technical school partnerships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Career mentorship</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Student scholarships</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Handshake className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Local Engagement</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Chamber of Commerce leadership</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Industry association service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Civic board participation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Local event sponsorship</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Employee Volunteerism</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Paid volunteer time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Team build days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Matching gift programs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Skills-based volunteering</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Employee Engagement
            </h2>
            <p className="text-gray-600 mb-6">
              Community involvement strengthens our team while serving our neighbors. Florida Construction Specialists provides paid time for employees to participate in company-sponsored volunteer activities. Our team-based volunteer events—like Habitat build days—build camaraderie while accomplishing meaningful work. Employees consistently report that community service opportunities increase job satisfaction and company pride.
            </p>
            <p className="text-gray-600 mb-6">
              We also support individual employee volunteerism through matching gift programs and flexible scheduling for personal community involvement. When employees serve on nonprofit boards, coach youth sports, or contribute to causes they care about, they bring that engagement energy back to work. Building a culture of community mindedness makes us better neighbors and better builders.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Industry Leadership
            </h2>
            <p className="text-gray-600 mb-6">
              Community extends to our industry colleagues as well. Florida Construction Specialists actively participates in construction industry associations, sharing knowledge and advocating for policies that benefit the industry and our region. Our leaders serve on boards, committees, and working groups addressing workforce development, safety standards, building codes, and sustainable construction practices.
            </p>
            <p className="text-gray-600 mb-6">
              We believe rising tides lift all boats—when Tampa Bay's construction industry thrives, everyone benefits. This perspective drives collaboration with competitors on industry-wide challenges while competing fairly on individual projects. A healthy, ethical industry serves clients better and attracts the talented professionals our region needs.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How can my nonprofit organization request support?
                  </h3>
                  <p className="text-gray-600">
                    We review community support requests quarterly. Submit requests via our website contact form with information about your organization, the proposed project, estimated scope, and timeline. We prioritize projects where construction expertise provides unique value, organizations serving Tampa Bay communities, and initiatives aligned with our focus areas. Response time is typically 4-6 weeks from submission.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How can I join Florida Construction Specialists' apprenticeship program?
                  </h3>
                  <p className="text-gray-600">
                    Apprenticeship openings are posted on our careers page and with local workforce development agencies. Requirements include high school diploma or GED, valid driver's license, ability to pass background check and drug screening, and genuine interest in construction careers. We especially welcome applicants from underrepresented groups in construction including women, veterans, and returning citizens.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Does Florida Construction Specialists offer scholarships?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we fund scholarships through Hillsborough Education Foundation and Pinellas Education Foundation supporting students pursuing construction-related education, including construction management, architecture, engineering, and skilled trades programs. Scholarship applications are handled through these foundations—visit their websites for eligibility requirements and application deadlines.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can I volunteer with Florida Construction Specialists on community projects?
                  </h3>
                  <p className="text-gray-600">
                    Most volunteer opportunities are available to our employees and their families. However, community members can volunteer alongside us through our partner organizations—particularly Habitat for Humanity, which welcomes community volunteers on all build days. Contact local Habitat chapters for volunteer registration. We occasionally sponsor community build events with broader volunteer participation.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How does community engagement benefit your construction clients?
                  </h3>
                  <p className="text-gray-600">
                    Clients benefit in several ways: our workforce development programs help address labor shortages that could affect project timelines; community relationships provide insights into local needs and conditions; employee engagement improves retention and quality; and our reputation for community investment attracts similarly values-driven clients. Companies increasingly want to work with contractors who share their commitment to social responsibility.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build Community With Us
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists is committed to Tampa Bay's prosperity—not just through the buildings we construct, but through the communities we help strengthen. Whether through charitable construction, workforce development, disaster response, or industry leadership, we work to ensure that our success contributes to regional wellbeing.
            </p>
            <p className="text-gray-600 mb-6">
              We welcome partnership opportunities with organizations aligned with our community focus areas. Contact us to discuss how we might work together to build a stronger Tampa Bay.
            </p>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Learn More About Us"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to discuss community partnership opportunities in Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Contact Us
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
