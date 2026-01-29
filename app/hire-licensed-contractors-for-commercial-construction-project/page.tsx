import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Shield, FileText, Scale, Search, BadgeCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Why Hire Licensed Contractors for Commercial Construction | Florida Guide",
  description: "Learn why hiring a licensed contractor is essential for commercial construction in Florida. Understand licensing requirements, risks of unlicensed work, and how to verify credentials.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Hire Licensed Contractors for Commercial Construction", href: "/hire-licensed-contractors-for-commercial-construction-project/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/key-questions-for-floridas-top-commercial-contractor/", label: "Questions to Ask Contractors" },
  { href: "/commercial-construction-stages-in-florida/", label: "Construction Stages Guide" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const licenseTypes = [
  {
    type: "Certified General Contractor (CGC)",
    scope: "Can build any structure in Florida",
    requirements: "State exam, 4 years experience, financial responsibility",
    verify: "Florida DBPR License Search",
  },
  {
    type: "Certified Building Contractor (CBC)",
    scope: "Buildings up to 3 stories, limited scope",
    requirements: "State exam, 4 years experience",
    verify: "Florida DBPR License Search",
  },
  {
    type: "Registered Contractor",
    scope: "Limited to specific county/jurisdiction",
    requirements: "Local exam, varies by county",
    verify: "County licensing board",
  },
];

const risksOfUnlicensed = [
  {
    icon: AlertTriangle,
    risk: "No Legal Recourse",
    description: "Contracts with unlicensed contractors are unenforceable in Florida. If they don't complete the work or do it poorly, you may have no legal remedy to recover your money.",
  },
  {
    icon: Scale,
    risk: "No Insurance Coverage",
    description: "Unlicensed contractors typically lack proper insurance. If a worker is injured on your property or damage occurs, you could be personally liable.",
  },
  {
    icon: FileText,
    risk: "Permit Problems",
    description: "Only licensed contractors can pull permits for commercial work. Unpermitted construction can result in fines, required demolition, and problems selling the property.",
  },
  {
    icon: Shield,
    risk: "No Bond Protection",
    description: "Licensed contractors must be bonded, providing financial protection if they abandon the project. Unlicensed contractors offer no such protection.",
  },
];

const whatToVerify = [
  {
    item: "State License",
    how: "Search DBPR's online license verification at myfloridalicense.com",
    why: "Confirms they passed state exams and meet financial requirements",
  },
  {
    item: "Insurance Coverage",
    how: "Request certificates of insurance directly from their insurer",
    why: "General liability should be $1M+ for commercial work; also verify workers' comp",
  },
  {
    item: "Bonding",
    how: "Verify bond is current and adequate for your project size",
    why: "Protects you if contractor abandons project or fails to pay subcontractors",
  },
  {
    item: "License Status",
    how: "Check for any disciplinary actions or complaints",
    why: "Pattern of complaints indicates potential problems",
  },
  {
    item: "Qualifying Agent",
    how: "Verify the person pulling permits is on the license",
    why: "Some companies illegally use others' licenses",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Why Hire Licensed Contractors for Commercial Construction in Florida"
        description="Learn why hiring a licensed contractor is essential for commercial construction in Florida."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-large.webp"
            alt="Licensed commercial construction in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Why You Must Hire Licensed Contractors for Commercial Construction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            In Florida, hiring an unlicensed contractor for commercial work isn't just risky—it's illegal and can void your insurance, create permit issues, and leave you with no legal recourse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Work With Licensed Pros
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

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              Florida law requires contractors performing commercial construction work over $1,000 to hold a valid state or local license. This isn't bureaucratic red tape—it's a protection mechanism that ensures contractors have demonstrated competence, financial responsibility, and proper insurance.
            </p>
            <p className="text-gray-600 mb-6">
              Despite these requirements, unlicensed contracting remains one of Florida's most common consumer complaints. The Department of Business and Professional Regulation (DBPR) investigates thousands of cases annually, but many property owners only discover they've hired an unlicensed contractor when problems arise.
            </p>
            <p className="text-gray-600 mb-8">
              For commercial property owners, the stakes are even higher. Commercial projects involve larger sums, more complex regulations, and greater liability exposure. Understanding contractor licensing—and how to verify it—is essential for protecting your investment.
            </p>
          </div>
        </div>
      </section>

      {/* License Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-12 font-heading">
            Types of Florida Contractor Licenses
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {licenseTypes.map((license, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <BadgeCheck className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{license.type}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Scope: </span>
                    <span className="text-gray-600">{license.scope}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Requirements: </span>
                    <span className="text-gray-600">{license.requirements}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Verify: </span>
                    <span className="text-gray-600">{license.verify}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
            For most commercial construction projects, you'll want a <strong>Certified General Contractor (CGC)</strong>—this license allows construction of any building type anywhere in Florida.
          </p>
        </div>
      </section>

      {/* Risks */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-4 font-heading">
            Risks of Hiring Unlicensed Contractors
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The low bid from an unlicensed contractor often becomes the most expensive mistake you'll ever make.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {risksOfUnlicensed.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2 font-heading">{item.risk}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida Law Box */}
      <section className="section bg-red-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex gap-6 items-start">
            <Scale className="w-12 h-12 text-red-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-2">Florida Law: Contracts Unenforceable</h3>
              <p className="text-gray-700 mb-4">
                Under Florida Statute 489.128, any contract with an unlicensed contractor is <strong>unenforceable by law</strong>. This means:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You cannot sue to recover damages for defective work</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You cannot sue to recover deposits or progress payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>You cannot enforce completion deadlines or warranties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Checklist */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Search className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">How to Verify a Contractor's License</h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">What to Verify</th>
                    <th className="px-6 py-4 text-left font-heading">How to Verify</th>
                    <th className="px-6 py-4 text-left font-heading">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {whatToVerify.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.item}</td>
                      <td className="px-6 py-4 text-gray-600">{row.how}</td>
                      <td className="px-6 py-4 text-gray-600">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-brand-green-light/20 rounded-lg">
              <p className="text-gray-700">
                <strong>Pro Tip:</strong> Verify licenses yourself—don't just trust the contractor's claims. Visit <a href="https://www.myfloridalicense.com" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">myfloridalicense.com</a> and search by license number or business name.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Licensed Contractors Provide */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              What a Licensed Contractor Provides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Demonstrated Competence</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Passed rigorous state examinations on construction knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Minimum 4 years documented experience in the field</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Continuing education requirements to maintain license</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Financial Responsibility</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Required general liability insurance coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Workers' compensation for employee injuries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Surety bond to protect against non-completion</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Legal Accountability</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Subject to DBPR disciplinary oversight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Contracts are legally enforceable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Can be held liable for code violations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Proper Permitting</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Authorized to pull building permits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Work subject to building department inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Certificate of Occupancy upon completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Work With a Licensed, Bonded, Insured Contractor
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists holds a Certified General Contractor license (CGC#XXXXXX), $X million in liability coverage, and full bonding. Your project is protected.
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
