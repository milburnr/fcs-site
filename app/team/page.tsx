import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Award,
  Shield,
  CheckCircle,
  Building2,
  HardHat,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Our Team | Leadership & Expertise | Florida Construction Specialists",
  description:
    "Meet the experienced leadership team at Florida Construction Specialists. Decades of combined expertise in commercial construction, historic restoration, and luxury custom homes in Tampa Bay.",
  keywords:
    "FCS team, Tampa construction leadership, commercial construction experts, historic restoration specialists",
};

const leadershipTeam = [
  {
    name: "Executive Leadership",
    role: "Ownership & Strategic Direction",
    focus: "Business Development & Client Relations",
    experience: "30+ years in Tampa Bay construction",
    philosophy:
      "We believe in being the prime contractor on every project—never a subcontractor. This ensures our clients receive our full attention, direct accountability, and complete quality control from start to finish.",
    expertise: [
      "Large-scale commercial project oversight",
      "Client relationship management",
      "Strategic growth and market positioning",
      "Insurance restoration program development",
    ],
    credentials: [
      "Florida State Certified General Contractor",
      `${BUSINESS_INFO.yearsInBusiness} experience`,
      "BBB Accredited Business",
    ],
  },
];

const technicalTeam = [
  {
    name: "Steve Podraza",
    role: "Principal Architect",
    phone: "727-433-1559",
    focus: "Design Integration & Code Compliance",
    experience: "25+ years architectural practice",
    philosophy:
      "Great construction starts with great design. I work directly with our construction team to ensure designs are not only beautiful but buildable, code-compliant, and optimized for Florida's unique climate challenges.",
    expertise: [
      "Historic preservation and ARC compliance",
      "FEMA flood zone design optimization",
      "Commercial tenant improvement design",
      "Custom residential architecture",
    ],
    credentials: [
      "Licensed Architect - State of Florida",
      "NCARB Certified",
      "Historic Preservation Specialist",
    ],
  },
  {
    name: "David Hancock",
    role: "Principal Engineer",
    focus: "Structural Engineering & Analysis",
    experience: "20+ years structural engineering",
    philosophy:
      "Every structure tells a story of forces and materials working together. My job is to ensure that story has a safe, lasting ending—whether we're reinforcing a 100-year-old historic building or designing a new hurricane-resistant custom home.",
    expertise: [
      "Structural assessment and remediation",
      "Hurricane-resistant design",
      "Foundation engineering for coastal sites",
      "Historic structure stabilization",
    ],
    credentials: [
      "Licensed Professional Engineer - Florida",
      "Structural Engineering Specialist",
      "Wind Load Analysis Certified",
    ],
  },
  {
    name: "Gabriel de la Salas",
    role: "Insurance Mitigation Specialist",
    phone: "305-495-5709",
    focus: "Insurance Claims & Restoration Coordination",
    experience: "15+ years insurance restoration",
    philosophy:
      "Insurance claims are stressful enough without construction complications. I bridge the gap between adjusters and contractors, ensuring our clients receive fair settlements and quality restoration work.",
    expertise: [
      "Large loss commercial claims coordination",
      "Public adjuster liaison",
      "Scope documentation and Xactimate",
      "Supplemental claim negotiation",
    ],
    credentials: [
      "Certified Insurance Restoration Specialist",
      "Xactimate Level 3 Certified",
      "IICRC Water Damage Restoration",
    ],
  },
];

const projectManagement = [
  {
    title: "Commercial Project Management",
    description:
      "Our commercial PM team brings expertise in CPM scheduling, value engineering, and multi-stakeholder coordination for projects ranging from medical facilities to industrial flex space.",
    capabilities: [
      "Critical Path Method (CPM) scheduling",
      "Primavera P6 and MS Project proficiency",
      "OSHA 30-hour certified supervisors",
      "Quality control documentation",
    ],
  },
  {
    title: "Residential Project Management",
    description:
      "Our residential team specializes in luxury custom homes, historic renovations, and FEMA-compliant construction with a focus on client communication and design integrity.",
    capabilities: [
      "Design-build coordination",
      "Historic preservation compliance",
      "FEMA 50% rule navigation",
      "Luxury finish coordination",
    ],
  },
];

const companyValues = [
  {
    icon: Shield,
    title: "Always Prime Contractor",
    description:
      "We never work as a subcontractor. Your project gets our full attention and direct accountability.",
  },
  {
    icon: Award,
    title: "Quality Over Shortcuts",
    description:
      "We build relationships that last decades by delivering work we're proud to stand behind.",
  },
  {
    icon: Users,
    title: "Team Continuity",
    description:
      "Our core team has worked together for years, ensuring seamless coordination on every project.",
  },
  {
    icon: Building2,
    title: "Local Expertise",
    description:
      "Deep knowledge of Tampa Bay regulations, from historic districts to flood zones.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team/" },
];

export default function TeamPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb
        items={[{ name: "Our Team", href: "/team/" }]}
      />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              The Team Behind Tampa Bay&apos;s Premier Construction
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Decades of combined experience in commercial construction, historic restoration,
              and luxury custom homes. Meet the leadership team that delivers excellence
              on every project.
            </p>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                <span>{BUSINESS_INFO.yearsInBusiness} Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                <span>{BUSINESS_INFO.projectsCompleted} Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-gold" />
                <span>{BUSINESS_INFO.yearsInBusiness} Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {companyValues.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <value.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="font-bold text-brand-green-dark mb-1">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Executive Leadership
          </h2>
          {leadershipTeam.map((leader) => (
            <div
              key={leader.name}
              className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-brand-green-light rounded-xl p-6 text-center">
                    <Briefcase className="w-16 h-16 text-brand-green-dark mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-brand-green-dark mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-brand-green font-medium mb-2">{leader.role}</p>
                    <p className="text-sm text-gray-600">{leader.experience}</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-2">
                    Our Philosophy
                  </h4>
                  <p className="text-gray-600 mb-6 italic">&ldquo;{leader.philosophy}&rdquo;</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-brand-green-dark mb-2 flex items-center gap-2">
                        <HardHat className="w-4 h-4" /> Core Expertise
                      </h5>
                      <ul className="space-y-1">
                        {leader.expertise.map((item) => (
                          <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-brand-gold mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-brand-green-dark mb-2 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" /> Credentials
                      </h5>
                      <ul className="space-y-1">
                        {leader.credentials.map((item) => (
                          <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                            <Award className="w-3 h-3 text-brand-gold mt-1 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Technical Leadership
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our in-house technical team provides architectural, engineering, and insurance
            expertise that sets us apart from typical general contractors.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {technicalTeam.map((member) => (
              <div
                key={member.name}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-green-dark">{member.name}</h3>
                  <p className="text-brand-green font-medium">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.experience}</p>
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/-/g, "")}`}
                      className="inline-flex items-center gap-1 text-sm text-brand-gold hover:text-brand-gold-dark mt-2"
                    >
                      <Phone className="w-3 h-3" />
                      {member.phone}
                    </a>
                  )}
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 italic">&ldquo;{member.philosophy}&rdquo;</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-brand-green-dark mb-2">
                    Expertise
                  </h4>
                  <ul className="space-y-1">
                    {member.expertise.map((item) => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-brand-gold mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-brand-green-dark mb-2">
                    Credentials
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="text-xs bg-brand-green-light text-brand-green-dark px-2 py-1 rounded"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Project Management Excellence
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projectManagement.map((pm) => (
              <div key={pm.title} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{pm.title}</h3>
                <p className="text-gray-600 mb-4">{pm.description}</p>
                <h4 className="text-sm font-semibold text-brand-green mb-2">Capabilities</h4>
                <ul className="space-y-2">
                  {pm.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re planning a commercial development or a custom home,
            our experienced team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Consultation
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

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/commercial/","label":"Commercial Construction"},{"href":"/services/residential/","label":"Residential Construction"},{"href":"/services/disaster-recovery/","label":"Disaster Recovery"},{"href":"/services/historic-restoration/","label":"Historic Restoration"},{"href":"/locations/tampa/","label":"Tampa Construction Services"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
