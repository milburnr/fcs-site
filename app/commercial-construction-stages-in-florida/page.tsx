import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle, FileText, HardHat, Ruler, Building2, ClipboardCheck, Key } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Commercial Construction Stages in Florida | Complete Guide 2024",
  description: "Learn the 7 essential stages of commercial construction in Florida—from pre-construction planning through final walkthrough. Expert insights from Tampa Bay's premier general contractor.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Construction Stages in Florida", href: "/commercial-construction-stages-in-florida/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const stages = [
  {
    icon: FileText,
    number: "01",
    title: "Pre-Construction & Planning",
    duration: "4-12 weeks",
    description: "The foundation of every successful commercial project starts long before breaking ground.",
    details: [
      "Feasibility studies and site analysis",
      "Budget development and value engineering",
      "Permit applications with local municipalities",
      "Contractor selection and bid evaluation",
      "Project schedule development using CPM methods",
    ],
  },
  {
    icon: Ruler,
    number: "02",
    title: "Design Development",
    duration: "6-16 weeks",
    description: "Transforming your vision into detailed construction documents.",
    details: [
      "Architectural drawings and specifications",
      "Structural engineering calculations",
      "MEP (mechanical, electrical, plumbing) design",
      "Florida Building Code compliance review",
      "Hurricane-resistant design integration",
    ],
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Permitting & Approvals",
    duration: "4-8 weeks",
    description: "Navigating Florida's permitting process requires local expertise and established relationships.",
    details: [
      "Building permit applications",
      "Environmental permits (SWFWMD, DEP)",
      "Fire marshal review and approval",
      "ADA compliance verification",
      "Impact fee calculations and payment",
    ],
  },
  {
    icon: HardHat,
    number: "04",
    title: "Site Preparation",
    duration: "2-6 weeks",
    description: "Preparing the land for construction while managing Florida's unique soil and weather conditions.",
    details: [
      "Land clearing and demolition",
      "Erosion control and stormwater management",
      "Utility connections and relocations",
      "Soil testing and ground improvement",
      "Foundation layout and excavation",
    ],
  },
  {
    icon: Building2,
    number: "05",
    title: "Vertical Construction",
    duration: "12-52 weeks",
    description: "The most visible phase where your building takes shape.",
    details: [
      "Foundation and structural concrete work",
      "Steel or wood framing installation",
      "Roofing and exterior envelope",
      "Rough-in for electrical, plumbing, HVAC",
      "Window and door installation",
    ],
  },
  {
    icon: CheckCircle,
    number: "06",
    title: "Interior Finish-Out",
    duration: "8-20 weeks",
    description: "Bringing the interior spaces to life with finishes and fixtures.",
    details: [
      "Drywall installation and finishing",
      "Flooring, paint, and trim work",
      "Cabinetry and millwork installation",
      "Fixture and equipment installation",
      "Final MEP connections and testing",
    ],
  },
  {
    icon: Key,
    number: "07",
    title: "Closeout & Occupancy",
    duration: "2-4 weeks",
    description: "Final inspections, documentation, and handing over the keys.",
    details: [
      "Final inspections and punch list completion",
      "Certificate of Occupancy (CO) issuance",
      "Owner training on building systems",
      "Warranty documentation and O&M manuals",
      "Post-construction support and follow-up",
    ],
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema
        headline="Commercial Construction Stages in Florida: A Complete Guide"
        description="Learn the 7 essential stages of commercial construction in Florida—from pre-construction planning through final walkthrough."
        datePublished="2024-01-15"
        dateModified="2024-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Commercial Construction Stages in Florida
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            From initial planning to final walkthrough—understand every phase of commercial construction and what to expect when building in Tampa Bay and throughout Florida.
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

      {/* Intro Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-xl text-gray-600 mb-6">
              Commercial construction in Florida follows a structured process that typically spans 6 to 24 months depending on project scope. Understanding each stage helps owners make informed decisions, avoid costly delays, and ensure their project meets both budget and timeline expectations.
            </p>
            <p className="text-gray-600 mb-6">
              Unlike residential construction, commercial projects in Florida must navigate additional complexities: stricter building codes designed for hurricane resistance, ADA accessibility requirements, fire safety regulations, and often multi-jurisdictional permitting processes. Working with an experienced Florida general contractor who understands these nuances can mean the difference between a smooth project and one plagued by delays.
            </p>
            <p className="text-gray-600 mb-8">
              At Florida Construction Specialists, we've guided hundreds of commercial projects through this process across Tampa, St. Petersburg, Clearwater, and throughout the greater Tampa Bay region. Here's what you can expect at each stage.
            </p>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-12 font-heading">
            The 7 Stages of Commercial Construction
          </h2>
          <div className="space-y-12">
            {stages.map((stage, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-brand-green-dark p-8 text-white flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <stage.icon className="w-12 h-12 text-brand-gold" />
                      <span className="text-5xl font-bold text-brand-gold/30">{stage.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 font-heading">{stage.title}</h3>
                    <p className="text-brand-gold font-semibold">Typical Duration: {stage.duration}</p>
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <p className="text-lg text-gray-600 mb-6">{stage.description}</p>
                    <h4 className="font-bold text-brand-green-dark mb-4">Key Activities:</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {stage.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida-Specific Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Florida-Specific Considerations
            </h2>
            <div className="prose prose-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Hurricane-Resistant Construction</h3>
              <p className="text-gray-600 mb-6">
                Florida's building codes are among the strictest in the nation for wind resistance. Commercial buildings in Tampa Bay must be designed to withstand wind speeds of 150+ mph in many areas. This affects everything from structural design to window specifications, roofing materials, and exterior cladding. Impact-resistant glazing, reinforced concrete construction, and hurricane straps are standard requirements that add both time and cost to projects but provide essential protection.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Permitting Timelines</h3>
              <p className="text-gray-600 mb-6">
                Commercial permitting in Florida varies significantly by jurisdiction. Hillsborough County typically processes permits in 4-6 weeks, while Pinellas County often moves faster at 2-4 weeks. Projects in multiple jurisdictions or those requiring environmental permits from SWFWMD (Southwest Florida Water Management District) can take considerably longer. Our team's established relationships with local building departments help expedite approvals.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Soil Conditions</h3>
              <p className="text-gray-600 mb-6">
                Florida's sandy soil and high water table create unique foundation challenges. Many commercial buildings require deep foundations, soil stabilization, or specialized drainage systems. Geotechnical testing early in the process identifies these conditions and allows engineers to design appropriate solutions before construction begins.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Seasonal Considerations</h3>
              <p className="text-gray-600 mb-6">
                Florida's rainy season (June through September) can significantly impact construction schedules. Concrete work, roofing, and exterior finishes are particularly weather-sensitive. Experienced contractors build weather delays into their schedules and sequence work to minimize impact—scheduling foundation and framing during drier months when possible, and planning interior finish work during the rainy season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Expectations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Typical Project Timelines
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">Small Tenant Buildout</h3>
                <p className="text-3xl font-bold text-brand-gold mb-2">8-16 weeks</p>
                <p className="text-gray-600">Office buildouts, retail spaces under 5,000 SF</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">Mid-Size Commercial</h3>
                <p className="text-3xl font-bold text-brand-gold mb-2">6-12 months</p>
                <p className="text-gray-600">Medical facilities, restaurants, retail 5,000-20,000 SF</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">Large Commercial</h3>
                <p className="text-3xl font-bold text-brand-gold mb-2">12-24 months</p>
                <p className="text-gray-600">Multi-story buildings, warehouses, large retail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Start Your Commercial Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a detailed timeline and budget estimate for your specific project. Our team will walk you through each stage and answer all your questions.
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
