import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Award, Shield, Users, Building2, Clock, CheckCircle, GraduationCap, BadgeCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { HighLevelForm } from "@/components/HighLevelForm";

export const metadata: Metadata = {
  title: "Our Team | Florida Construction Specialists Leadership",
  description:
    "Meet the experienced leadership team at Florida Construction Specialists. 28+ years serving Tampa Bay with licensed, bonded, and insured commercial and residential construction expertise.",
  keywords:
    "FCS team, construction company leadership Tampa, licensed general contractor Florida, commercial builder team, construction management Tampa Bay",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Our Team", href: "/team-members/" },
];

const certifications = [
  { name: "Florida Certified General Contractor (CGC)", icon: BadgeCheck },
  { name: "OSHA 30-Hour Safety Certified", icon: Shield },
  { name: "EPA Lead-Safe Certified", icon: CheckCircle },
  { name: "LEED Accredited Professionals", icon: Award },
  { name: "Florida Building Code Administrator", icon: GraduationCap },
  { name: "Bonded & Fully Insured", icon: Shield },
];

const departments = [
  {
    name: "Executive Leadership",
    description: "Strategic vision and company direction",
    members: [
      {
        name: "Leadership Team",
        title: "Executive Management",
        bio: "Florida Construction Specialists is led by an experienced executive team with deep roots in Tampa Bay's construction industry. Our leadership brings together decades of expertise in commercial development, residential construction, and project management. This combination of strategic vision and hands-on experience guides every project we undertake.",
        focus: ["Strategic Planning", "Client Relations", "Business Development", "Quality Assurance"]
      }
    ]
  },
  {
    name: "Project Management",
    description: "On-site leadership and execution",
    members: [
      {
        name: "Project Management Team",
        title: "Senior Project Managers",
        bio: "Our project managers are the backbone of successful construction delivery. Each brings 10-25+ years of experience managing complex commercial and residential projects throughout Tampa Bay. They coordinate subcontractors, manage schedules and budgets, ensure quality standards, and maintain constant communication with clients. Their expertise spans office buildings, retail centers, hospitality, healthcare, and custom homes.",
        focus: ["Schedule Management", "Budget Control", "Subcontractor Coordination", "Client Communication"]
      }
    ]
  },
  {
    name: "Estimating & Pre-Construction",
    description: "Accurate budgets and thorough planning",
    members: [
      {
        name: "Estimating Team",
        title: "Chief Estimators & Pre-Construction Specialists",
        bio: "Accurate estimating is fundamental to project success. Our estimating team combines sophisticated technology with decades of local market knowledge to develop competitive, comprehensive proposals. During pre-construction, they work closely with architects and engineers to identify value engineering opportunities and potential challenges before ground is broken.",
        focus: ["Detailed Cost Analysis", "Value Engineering", "Risk Assessment", "Bid Management"]
      }
    ]
  },
  {
    name: "Field Operations",
    description: "Skilled craftsmen and superintendents",
    members: [
      {
        name: "Field Operations Team",
        title: "Superintendents & Skilled Tradespeople",
        bio: "Quality construction requires skilled hands. Our field teams include superintendents who oversee daily operations and coordinate multiple trades working simultaneously. Many of our key tradespeople have worked with FCS for over a decade, creating consistency and institutional knowledge that ensures every project meets our exacting standards.",
        focus: ["Site Management", "Quality Control", "Safety Compliance", "Trade Coordination"]
      }
    ]
  },
  {
    name: "Administration & Support",
    description: "Ensuring smooth operations",
    members: [
      {
        name: "Administrative Team",
        title: "Operations & Client Support",
        bio: "Behind every successful project is a support team handling permits, documentation, accounting, and client coordination. Our administrative professionals ensure nothing falls through the cracks—from initial permit applications to final lien releases. They're often your first point of contact and work tirelessly to ensure responsive, helpful service.",
        focus: ["Permitting", "Contract Administration", "Accounts Management", "Client Coordination"]
      }
    ]
  }
];

export default function TeamMembersPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 0%, rgba(34, 87, 60, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 80%, rgba(34, 87, 60, 0.05) 0%, transparent 50%),
              #f8faf8
            `
          }}
        />
      </div>

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Florida Construction Specialists team at work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        
        <div className="container-custom text-center text-white relative z-10">
          <p className="text-brand-green-light uppercase tracking-widest text-sm mb-4">
            Meet Our Team
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            The People Behind <br className="hidden md:block" />
            <span className="text-brand-green-light">Every Successful Project</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200 mb-8">
            {BUSINESS_INFO.yearsInBusiness}+ years of combined expertise. Licensed professionals. 
            Dedicated craftsmen. One shared commitment: building excellence throughout Tampa Bay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Work With Our Team
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

      {/* Company Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Built on Experience, Driven by Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Florida Construction Specialists has served the Tampa Bay region for over {BUSINESS_INFO.yearsInBusiness} years, 
                growing from a local contractor to one of the area's most trusted names in commercial and 
                residential construction. Our success is built on the expertise, dedication, and integrity 
                of every team member who wears the FCS name.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { number: `${BUSINESS_INFO.yearsInBusiness}+`, label: "Years in Business", icon: Clock },
                { number: "500+", label: "Projects Completed", icon: Building2 },
                { number: "50+", label: "Team Members", icon: Users },
                { number: "100%", label: "Licensed & Insured", icon: Shield }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 text-brand-green mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description: "We do what we say we'll do. Transparent communication, honest estimates, and ethical business practices are non-negotiable.",
                icon: Shield
              },
              {
                title: "Excellence",
                description: "Good enough never is. We pursue the highest standards of craftsmanship and continuously improve our processes and skills.",
                icon: Award
              },
              {
                title: "Safety",
                description: "Every worker goes home safe, every day. Comprehensive safety programs protect our team, our clients, and the public.",
                icon: CheckCircle
              },
              {
                title: "Partnership",
                description: "We succeed when our clients succeed. We approach every relationship as a long-term partnership, not a transaction.",
                icon: Users
              }
            ].map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <value.icon className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every successful project requires seamless collaboration across specialized teams. 
              Here's how we're organized to deliver excellence.
            </p>
          </div>

          <div className="space-y-12">
            {departments.map((dept, deptIndex) => (
              <div 
                key={dept.name}
                className={`p-8 rounded-2xl ${deptIndex % 2 === 0 ? 'bg-gray-50' : 'bg-brand-green-dark/5'}`}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-brand-green-dark mb-2 font-heading">
                    {dept.name}
                  </h3>
                  <p className="text-gray-600">{dept.description}</p>
                </div>
                
                {dept.members.map((member) => (
                  <div key={member.name} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4">
                        <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-brand-green-dark rounded-full flex items-center justify-center mb-4">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-brand-green-dark">
                          {member.name}
                        </h4>
                        <p className="text-sm text-brand-green">{member.title}</p>
                      </div>
                      <div className="md:w-3/4">
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {member.bio}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {member.focus.map((item) => (
                            <span 
                              key={item}
                              className="px-3 py-1 bg-brand-green/10 text-brand-green-dark text-sm rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Licenses & Certifications
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our credentials reflect our commitment to professional standards and continuous education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.name}
                className="flex items-center gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <cert.icon className="w-8 h-8 text-brand-green-light flex-shrink-0" />
                <span className="text-white font-medium">{cert.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Florida Construction Specialists maintains all required state and local licenses 
              for commercial and residential construction throughout Florida.
            </p>
            <p className="text-brand-green-light font-semibold">
              State License #CGC1532648
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Team Matters */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Why Our Team Makes the Difference
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Construction is ultimately a people business. The quality of your project depends 
                  on the skill, dedication, and problem-solving ability of the individuals who plan, 
                  manage, and build it. At Florida Construction Specialists, we've assembled a team 
                  that consistently delivers exceptional results.
                </p>
                <p className="leading-relaxed">
                  Our low turnover rate means you benefit from institutional knowledge and established 
                  relationships. Many of our project managers, superintendents, and key tradespeople 
                  have been with FCS for over a decade. They know our standards, our processes, and 
                  Tampa Bay's unique construction challenges inside and out.
                </p>
                <p className="leading-relaxed">
                  We invest in ongoing training and professional development because the construction 
                  industry evolves constantly. New materials, updated codes, innovative techniques—our 
                  team stays current so your project benefits from the latest best practices.
                </p>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/about/"
                  className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
                >
                  Learn more about our company
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/commercial-construction-tampa-2/commercial-construction-tampa-2-display.jpg"
                alt="FCS team collaboration"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-green text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">{BUSINESS_INFO.yearsInBusiness}+</div>
                <div className="text-sm text-brand-green-light">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-brand-green-dark to-brand-green rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Interested in Joining Our Team?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Florida Construction Specialists is always looking for talented professionals who share 
              our commitment to quality and client satisfaction. If you're interested in career 
              opportunities, we'd love to hear from you.
            </p>
            <Link 
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              Contact Us About Careers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Ready to Work With Our Team?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're planning a commercial development, retail build-out, or custom home, 
                our experienced team is ready to bring your vision to life. Contact us today for a 
                free consultation and discover why Tampa Bay trusts Florida Construction Specialists.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green" />
                  <span className="text-gray-700">Free project consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green" />
                  <span className="text-gray-700">Detailed estimates with no obligation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green" />
                  <span className="text-gray-700">Responsive communication throughout</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-full hover:bg-brand-green-dark transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link 
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-green text-brand-green font-semibold rounded-full hover:bg-brand-green hover:text-white transition-colors"
                >
                  Request Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6 font-heading">
                Get in Touch
              </h3>
              <HighLevelForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "About FCS", href: "/about/" },
              { name: "Our Services", href: "/services/" },
              { name: "Project Gallery", href: "/gallery/" },
              { name: "Contact Us", href: "/contact/" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 hover:text-brand-green transition-colors uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
