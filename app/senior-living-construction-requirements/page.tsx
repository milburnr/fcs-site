import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  CheckCircle,
  AlertTriangle,
  Building,
  ArrowRight,
  Phone,
  HelpCircle,
  Shield,
  Users,
  Accessibility,
  Bed,
  FileText,
  Clock,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Senior Living Construction Requirements Florida | AHCA Compliance | FCS",
  description:
    "Complete guide to senior living facility construction in Florida. AHCA licensing requirements, accessibility standards, memory care design, and assisted living construction specifications.",
  keywords:
    "senior living construction Florida, AHCA licensed facility construction, assisted living building requirements, memory care facility design Tampa, independent living construction, skilled nursing facility construction",
};

const facilityTypes = [
  {
    type: "Independent Living",
    license: "Generally not AHCA-licensed",
    description: "Age-restricted communities with minimal services",
    beds: "Varies widely",
    keyFeatures: "Residential design, common areas, amenities focus",
    constructionFocus: "Residential feel, accessibility options, community spaces",
  },
  {
    type: "Assisted Living Facility (ALF)",
    license: "AHCA License Required",
    description: "Personal care services in residential setting",
    beds: "Typically 16-120+",
    keyFeatures: "24/7 staff, medication management, ADL assistance",
    constructionFocus: "Private rooms, grab bars, emergency call systems, nursing stations",
  },
  {
    type: "Memory Care",
    license: "ALF with Extended Congregate Care (ECC) License",
    description: "Specialized dementia and Alzheimer's care",
    beds: "Typically 16-60",
    keyFeatures: "Secured entries, wandering paths, sensory gardens",
    constructionFocus: "Secured perimeter, circular layouts, visual cues, reduced stimulation",
  },
  {
    type: "Skilled Nursing Facility (SNF)",
    license: "AHCA Nursing Home License",
    description: "24/7 skilled nursing care",
    beds: "Typically 60-150+",
    keyFeatures: "Medical equipment, rehabilitation, clinical care",
    constructionFocus: "Hospital-grade systems, therapy rooms, clinical infrastructure",
  },
  {
    type: "Continuing Care Retirement Community (CCRC)",
    license: "Multiple licenses by level",
    description: "Full continuum from independent to skilled nursing",
    beds: "200-500+ residents",
    keyFeatures: "Campus setting, multiple care levels on-site",
    constructionFocus: "Phased construction, campus planning, transitions between levels",
  },
];

const ahcaRequirements = [
  {
    category: "Physical Plant Standards",
    requirements: [
      "Minimum 80 sq ft per resident in sleeping rooms",
      "Minimum 35 sq ft per resident in dining/activity areas",
      "One toilet and lavatory per 6 residents",
      "One bathtub or shower per 10 residents",
      "Emergency lighting and generator backup",
      "Fire alarm and sprinkler systems throughout",
    ],
  },
  {
    category: "Accessibility Requirements",
    requirements: [
      "ADA-compliant doorways minimum 32\" clear width",
      "Corridors minimum 60\" wide for two wheelchairs",
      "Grab bars in all bathrooms (1.25-1.5\" diameter)",
      "Non-slip flooring throughout facility",
      "Lever-style door handles (no round knobs)",
      "Accessible routes to all common areas",
    ],
  },
  {
    category: "Safety Systems",
    requirements: [
      "Emergency call system in every resident room and bathroom",
      "Smoke detectors in all rooms (interconnected)",
      "Fire sprinkler system per NFPA 13",
      "Emergency generator for life safety systems",
      "Secured medication storage areas",
      "Proper ventilation for laundry and food service",
    ],
  },
  {
    category: "Staff and Operational Areas",
    requirements: [
      "Nursing station with visual oversight of corridors",
      "Clean and soiled utility rooms (separate)",
      "Adequate food preparation and storage",
      "Laundry facilities (commercial grade)",
      "Staff break room and locker area",
      "Administrative office space",
    ],
  },
];

const memoryCareDesign = [
  {
    element: "Secured Perimeter",
    purpose: "Prevent elopement while maintaining dignity",
    specification: "Delayed egress doors, fence/wall minimum 6 ft, alarm systems on all exits",
    designTip: "Use disguised doors, murals on exit doors to reduce exit-seeking behavior",
  },
  {
    element: "Circular Walking Paths",
    purpose: "Allow safe wandering, reduce agitation",
    specification: "Continuous loop design, no dead ends, interesting waypoints",
    designTip: "Include seating alcoves, themed areas, and gardens along path",
  },
  {
    element: "Visual Cue System",
    purpose: "Aid wayfinding for cognitively impaired residents",
    specification: "Distinct colors per neighborhood, shadow boxes at room doors, clear signage",
    designTip: "Use resident photos and personal items at doorways for recognition",
  },
  {
    element: "Sensory Gardens",
    purpose: "Therapeutic outdoor space with controlled access",
    specification: "Enclosed courtyard, non-toxic plants, textured surfaces, water features",
    designTip: "Include raised beds for gardening therapy, shaded seating areas",
  },
  {
    element: "Reduced Stimulation Zones",
    purpose: "Calm spaces for agitated residents",
    specification: "Quiet room with dimmable lights, soft furnishings, minimal patterns",
    designTip: "Include sensory items like weighted blankets, fidget tools",
  },
  {
    element: "Open Kitchen Concept",
    purpose: "Familiar smells trigger positive memories",
    specification: "Visible food prep area, locked sharp items, familiar appliance appearance",
    designTip: "Baking activities create calming aromas and engagement",
  },
];

const constructionConsiderations = [
  {
    phase: "Pre-Construction Planning",
    items: [
      "AHCA pre-application meeting (recommended)",
      "Market study and bed need analysis",
      "Zoning verification for healthcare use",
      "Traffic impact study if required",
      "Environmental assessments",
      "Community opposition strategy",
    ],
  },
  {
    phase: "Design Development",
    items: [
      "AHCA Plan Review submission ($2,500+ fee)",
      "Life Safety Code compliance (NFPA 101)",
      "Florida Building Code Chapter 4 (healthcare)",
      "ADA accessibility throughout",
      "Local fire marshal approval",
      "Florida DOH well/septic if applicable",
    ],
  },
  {
    phase: "Construction Phase",
    items: [
      "Licensed healthcare construction contractor",
      "AHCA construction inspections",
      "Local building inspections",
      "Fire marshal inspections",
      "Infection control during construction",
      "Phased occupancy planning",
    ],
  },
  {
    phase: "Pre-Opening Requirements",
    items: [
      "Certificate of Occupancy",
      "AHCA final inspection",
      "Fire marshal final approval",
      "Staffing and training documentation",
      "Emergency preparedness plan",
      "Initial licensing survey",
    ],
  },
];

const faqs = [
  {
    question: "What licenses are needed to build a senior living facility in Florida?",
    answer:
      "The license requirements depend on the care level. Independent living communities generally don't require AHCA licensing. Assisted Living Facilities (ALFs) require an AHCA license, with additional endorsements for Extended Congregate Care (ECC) if providing memory care. Skilled Nursing Facilities require a separate nursing home license. During construction, AHCA must review and approve plans before building permits are issued. The facility cannot operate until AHCA conducts a final inspection and issues the license.",
  },
  {
    question: "How long does the AHCA plan review process take?",
    answer:
      "AHCA plan review typically takes 30-60 days for initial review, though complex projects may take longer. The process involves submission of architectural plans, life safety documentation, and operational plans. AHCA may request corrections or additional information, which extends the timeline. We recommend starting the AHCA process early in design development—ideally 4-6 months before you need construction permits. Pre-application meetings with AHCA can help identify issues early.",
  },
  {
    question: "What are the minimum room sizes for assisted living in Florida?",
    answer:
      "Florida requires minimum 80 square feet per resident in sleeping rooms. A private room for one resident must be at least 80 sq ft; a semi-private room for two residents must be at least 160 sq ft. These are minimums—market expectations typically require 150-200+ sq ft for private rooms to be competitive. Bathrooms must include grab bars, and there must be at least one toilet and sink per 6 residents, and one tub/shower per 10 residents.",
  },
  {
    question: "What special construction features do memory care facilities need?",
    answer:
      "Memory care facilities require several specialized features: secured perimeter with delayed egress doors and alarmed exits to prevent elopement; circular walking paths with no dead ends; visual cue systems including color coding, shadow boxes, and clear wayfinding; sensory gardens within secured outdoor areas; reduced stimulation quiet rooms; and open kitchen concepts. The design should balance security with dignity—avoiding an institutional feel while ensuring resident safety.",
  },
  {
    question: "How do we handle construction in an occupied senior living facility?",
    answer:
      "Construction in occupied senior facilities requires extensive infection control, noise management, and safety protocols. Key requirements include: ICRA (Infection Control Risk Assessment) compliance, barrier construction to separate residents from work areas, HEPA filtration for dust control, restricted work hours to minimize disruption, secured work areas to prevent resident access, and clear communication with staff and families. Phased construction that temporarily relocates residents is often necessary for major renovations.",
  },
  {
    question: "What are the emergency generator requirements for senior living?",
    answer:
      "Emergency generators are required for all licensed senior living facilities. At minimum, generators must power life safety systems (emergency lighting, fire alarms, exit signs), emergency call systems, and refrigeration for medications. Skilled nursing facilities have additional requirements for medical equipment. Generators must be tested regularly and have sufficient fuel for 96 hours of operation (or access to priority fuel delivery agreements). Transfer switches must be automatic with minimal delay.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Senior Living Construction Requirements", href: "/senior-living-construction-requirements/" },
];


const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/services/residential/waterfront-homes/", label: "Waterfront Home Construction" },
  { href: "/services/residential/home-additions/", label: "Home Additions" },
  { href: "/services/residential/hurricane-resistant-construction/", label: "Hurricane-Resistant Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function SeniorLivingConstructionRequirementsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Senior Living Facility Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Senior Living Construction Services"
        serviceDescription="Specialized construction services for senior living facilities in Florida including assisted living, memory care, and skilled nursing facilities. AHCA-compliant construction from design through licensure."
        city="Tampa"
        minPrice="2000000"
      />

      
      <ArticleSchema
        headline="Senior Living Construction Requirements Florida | AHCA Compliance | FCS"
        description="Complete guide to senior living facility construction in Florida. AHCA licensing requirements, accessibility standards, memory care design, and assisted living construction specifications."
        datePublished="2024-06-01"
        dateModified="2025-01-15"
        slug="/senior-living-construction-requirements/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Multi-Family Construction", href: "/commercial/" },
          { name: "Senior Living Construction", href: "/senior-living-construction-requirements/" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Construction services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <BackToHub
              silo="commercial"
              customHubTitle="Commercial Construction"
              customHubHref="/commercial/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Senior Living Construction Requirements
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Complete guide to building assisted living, memory care, and skilled nursing
              facilities in Florida. From AHCA licensing to specialized design requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Senior Living Project
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
        </div>
      </section>

      {/* Facility Types */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Types of Senior Living Facilities
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Each facility type has different licensing, construction, and operational requirements.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Facility Type</th>
                  <th className="px-4 py-3 text-left font-semibold">Licensing</th>
                  <th className="px-4 py-3 text-center font-semibold">Typical Size</th>
                  <th className="px-4 py-3 text-left font-semibold">Construction Focus</th>
                </tr>
              </thead>
              <tbody>
                {facilityTypes.map((facility, index) => (
                  <tr
                    key={facility.type}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3">
                      <span className="font-semibold text-brand-green-dark">{facility.type}</span>
                      <p className="text-sm text-gray-600">{facility.description}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{facility.license}</td>
                    <td className="px-4 py-3 text-center text-sm">{facility.beds}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{facility.constructionFocus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AHCA Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            AHCA Physical Plant Requirements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Florida Agency for Health Care Administration (AHCA) sets minimum standards
            for licensed senior living facilities.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {ahcaRequirements.map((category) => (
              <div key={category.category} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                      <span className="text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Care Design */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Memory Care Design Elements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Specialized design features for dementia and Alzheimer&apos;s care facilities that
            balance safety with quality of life.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memoryCareDesign.map((element) => (
              <div key={element.element} className="card p-6">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                  {element.element}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Purpose:</strong> {element.purpose}
                </p>
                <div className="bg-brand-green-light/30 rounded-lg p-3 mb-3">
                  <span className="text-xs text-brand-green-dark font-semibold block mb-1">
                    Specification
                  </span>
                  <p className="text-gray-700 text-sm">{element.specification}</p>
                </div>
                <p className="text-xs text-gray-500 italic">
                  <strong>Tip:</strong> {element.designTip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Senior Living Construction Process
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Critical steps and approvals required for licensed facility construction in Florida.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            {constructionConsiderations.map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-brand-green"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-green-dark mb-3">
                      {phase.phase}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Critical Construction Considerations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Accessibility className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                Universal Accessibility
              </h3>
              <p className="text-gray-600">
                Beyond ADA minimums, design for aging in place. Wide corridors, zero-threshold
                showers, and wheelchair-accessible common areas are essential.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                Homelike Atmosphere
              </h3>
              <p className="text-gray-600">
                Avoid institutional design. Residential-scale spaces, warm finishes, and
                personalization options improve resident satisfaction and outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-green-dark" />
              </div>
              <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                Staff Efficiency
              </h3>
              <p className="text-gray-600">
                Layout affects staffing costs. Design nursing stations with corridor visibility,
                efficient medication routes, and centralized support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-green-dark hover:no-underline py-4">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Commercial Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/navigating-ahca-inspections/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Navigating AHCA Inspections
              </h3>
              <p className="text-gray-600 text-sm">
                Construction requirements to pass AHCA facility inspections.
              </p>
            </Link>
            <Link
              href="/medical-gas-piping-requirements/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Medical Gas Piping Requirements
              </h3>
              <p className="text-gray-600 text-sm">
                Infrastructure for skilled nursing and medical facilities.
              </p>
            </Link>
            <Link
              href="/commercial/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Commercial Construction Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full range of commercial construction capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Planning a Senior Living Facility?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            FCS has experience building AHCA-licensed facilities throughout Tampa Bay.
            From initial planning through licensing inspections, we guide your project
            to successful completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Start Your Project
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
      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

    </>
  );
}