import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  AlertTriangle,
  Building,
  Phone,
  HelpCircle,
  Wind,
  Thermometer,
  Droplets,
  Shield,
  Gauge,
  Layers,
  Settings,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import { InternalLinks } from "@/components/InternalLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Clean Room Construction Standards | Medical & Pharmaceutical | FCS Tampa",
  description:
    "Expert guide to clean room construction standards for medical facilities, pharmaceutical labs, and manufacturing in Tampa Bay. ISO classifications and HVAC requirements explained.",
  keywords:
    "clean room construction Tampa, ISO clean room standards, medical clean room Florida, pharmaceutical construction Tampa, controlled environment construction",
};

const isoClassifications = [
  {
    isoClass: "ISO 1",
    particles: "10 (0.1 µm)",
    usClass: "N/A",
    application: "Extreme semiconductor manufacturing",
    airChanges: "500-700+ ACH",
    typical: false,
  },
  {
    isoClass: "ISO 2",
    particles: "100 (0.1 µm)",
    usClass: "N/A",
    application: "Advanced semiconductor clean rooms",
    airChanges: "500-700+ ACH",
    typical: false,
  },
  {
    isoClass: "ISO 3",
    particles: "1,000 (0.1 µm)",
    usClass: "Class 1",
    application: "Semiconductor manufacturing, nanotechnology",
    airChanges: "500-600 ACH",
    typical: false,
  },
  {
    isoClass: "ISO 4",
    particles: "10,000 (0.1 µm)",
    usClass: "Class 10",
    application: "Microelectronics, some pharmaceuticals",
    airChanges: "400-500 ACH",
    typical: false,
  },
  {
    isoClass: "ISO 5",
    particles: "100,000 (0.1 µm)",
    usClass: "Class 100",
    application: "Aseptic pharmaceutical, hospital pharmacies, surgical suites",
    airChanges: "240-480 ACH",
    typical: true,
  },
  {
    isoClass: "ISO 6",
    particles: "1,000,000 (0.1 µm)",
    usClass: "Class 1,000",
    application: "Optical manufacturing, hospital isolation rooms",
    airChanges: "90-180 ACH",
    typical: true,
  },
  {
    isoClass: "ISO 7",
    particles: "352,000 (0.5 µm)",
    usClass: "Class 10,000",
    application: "General pharmaceutical, medical device assembly",
    airChanges: "30-60 ACH",
    typical: true,
  },
  {
    isoClass: "ISO 8",
    particles: "3,520,000 (0.5 µm)",
    usClass: "Class 100,000",
    application: "Medical packaging, general manufacturing",
    airChanges: "15-25 ACH",
    typical: true,
  },
];

const constructionElements = [
  {
    element: "Wall Systems",
    description: "Non-shedding, cleanable surfaces with minimal seams",
    options: "Pharmaceutical-grade panels, epoxy-coated gypsum, stainless steel",
    considerations: "Corner radii (coved transitions), penetration sealing, panel joint systems",
    icon: Layers,
  },
  {
    element: "Ceiling Systems",
    description: "Grid or flush systems supporting HEPA integration",
    options: "T-bar walkable ceilings, flush gypsum, modular panels",
    considerations: "HEPA filter locations, lighting integration, access requirements",
    icon: Building,
  },
  {
    element: "Flooring Systems",
    description: "Seamless, chemical-resistant, ESD-safe surfaces",
    options: "Epoxy, urethane, vinyl sheet, raised access flooring",
    considerations: "ESD requirements, chemical exposure, gowning room transitions",
    icon: Layers,
  },
  {
    element: "HVAC Systems",
    description: "Precise temperature, humidity, and pressure control",
    options: "Fan filter units (FFU), air handling units (AHU), laminar flow",
    considerations: "Air change rates, pressure cascades, redundancy requirements",
    icon: Wind,
  },
  {
    element: "Air Filtration",
    description: "HEPA/ULPA filters meeting classification requirements",
    options: "HEPA (99.97%), ULPA (99.9995%), pre-filters",
    considerations: "Filter coverage (%), replacement access, filter integrity testing",
    icon: Shield,
  },
  {
    element: "Pressure Control",
    description: "Maintain pressure differentials between zones",
    options: "Positive pressure (pharma), negative pressure (containment)",
    considerations: "Air locks, cascading pressures, monitoring systems",
    icon: Gauge,
  },
];

const hvacRequirements = [
  {
    classification: "ISO 5 (Aseptic)",
    tempRange: "68°F ± 2°F",
    humidityRange: "30-60% RH",
    pressureDiff: "+0.05\" WC min",
    airPattern: "Unidirectional (laminar)",
    note: "FDA requires 20 ft/min velocity at work surface",
  },
  {
    classification: "ISO 6 (Pharmaceutical)",
    tempRange: "68°F ± 4°F",
    humidityRange: "30-65% RH",
    pressureDiff: "+0.04\" WC min",
    airPattern: "Non-unidirectional",
    note: "Gowning room requires ISO 7 minimum",
  },
  {
    classification: "ISO 7 (General)",
    tempRange: "68°F ± 5°F",
    humidityRange: "30-70% RH",
    pressureDiff: "+0.03\" WC min",
    airPattern: "Non-unidirectional",
    note: "Common for compounding pharmacies",
  },
  {
    classification: "ISO 8 (Support)",
    tempRange: "68°F ± 5°F",
    humidityRange: "30-70% RH",
    pressureDiff: "+0.02\" WC min",
    airPattern: "Mixed",
    note: "Packaging and staging areas",
  },
];

const regulatoryFrameworks = [
  {
    framework: "FDA 21 CFR Parts 210/211",
    scope: "Pharmaceutical manufacturing",
    requirements: "cGMP for drug products; aseptic processing guidance",
    fcsRole: "Build to FDA inspection standards; documentation packages",
  },
  {
    framework: "USP <797>",
    scope: "Compounding sterile preparations",
    requirements: "ISO classifications for compounding areas; beyond-use dating",
    fcsRole: "Hospital pharmacy clean rooms; hood placement",
  },
  {
    framework: "USP <800>",
    scope: "Hazardous drug handling",
    requirements: "Negative pressure containment; decontamination",
    fcsRole: "Oncology pharmacies; chemotherapy compounding",
  },
  {
    framework: "ISO 14644",
    scope: "Clean room classification",
    requirements: "Particle count testing; classification verification",
    fcsRole: "Design to target classification; commissioning support",
  },
];

const faqs = [
  {
    question: "What ISO clean room classification does a hospital pharmacy need?",
    answer:
      "Hospital compounding pharmacies typically require ISO 7 (Class 10,000) for general preparation areas, with ISO 5 (Class 100) within the primary engineering control (laminar flow hood) for actual compounding. Under USP <797>, the immediate area around the hood must maintain ISO 7, while surrounding buffer rooms can be ISO 8. Hazardous drug compounding under USP <800> requires negative pressure rooms with additional containment.",
  },
  {
    question: "How much does clean room construction cost in Florida?",
    answer:
      "Clean room construction in Tampa Bay typically ranges from $250-$800+ per square foot depending on ISO classification, size, and complexity. ISO 8 rooms may cost $250-400/SF, while ISO 5 pharmaceutical clean rooms can exceed $600-800/SF. Key cost drivers include HVAC system complexity, wall panel quality, flooring systems, and monitoring equipment. Larger facilities benefit from economies of scale, and retrofit projects in existing buildings often cost more than new construction.",
  },
  {
    question: "How long does it take to build a clean room?",
    answer:
      "Clean room construction timelines in Tampa vary significantly by scope. A small ISO 7 compounding pharmacy (500-1,000 SF) typically requires 4-6 months from design through validation. Larger pharmaceutical manufacturing clean rooms (5,000+ SF) may require 12-18 months. Critical path items include HVAC equipment procurement (often 16-20 weeks), wall panel manufacturing, and the commissioning/validation process which can take 4-8 weeks alone.",
  },
  {
    question: "What is the difference between HEPA and ULPA filters?",
    answer:
      "HEPA (High Efficiency Particulate Air) filters capture 99.97% of particles 0.3 microns or larger and are standard for most clean rooms through ISO 5. ULPA (Ultra Low Penetration Air) filters capture 99.9995% of particles 0.12 microns or larger and are used for ISO 3-4 applications like semiconductor manufacturing. Most medical and pharmaceutical applications in Tampa Bay use HEPA filtration, as ULPA is typically overkill and significantly more expensive.",
  },
  {
    question: "Do clean rooms need backup power in Florida?",
    answer:
      "Yes, clean rooms in Florida should have emergency power provisions due to hurricane risk. For pharmaceutical clean rooms, FDA expects continuous environmental control, making generators essential for product protection. The generator must support full HVAC loads, monitoring systems, and lighting. Battery backup (UPS) for monitoring and controls ensures no data gaps during transfer. Florida Construction Specialists designs clean room power systems with automatic transfer switches for seamless generator transition.",
  },
  {
    question: "How do you validate a clean room after construction?",
    answer:
      "Clean room validation involves three phases: IQ (Installation Qualification) verifies equipment is installed per specifications; OQ (Operational Qualification) confirms systems perform correctly under empty conditions; PQ (Performance Qualification) demonstrates consistent performance with personnel and processes. Particle counting per ISO 14644-3, pressure differential verification, temperature/humidity mapping, HEPA filter integrity testing (DOP or PAO), and air velocity measurements are all required. FCS provides commissioning support and coordinates with validation contractors.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Clean Room Construction Standards", href: "/clean-room-construction-standards/" },
];


const internalLinks = [
  { href: "/services/", label: "Our Construction Services" },
  { href: "/services/commercial/", label: "Commercial Construction" },
  { href: "/services/residential/", label: "Residential Construction" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CleanRoomConstructionStandardsPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Clean Room Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Clean Room Construction Services"
        serviceDescription="Expert clean room construction for medical facilities, pharmaceutical labs, and controlled manufacturing environments in Tampa Bay. ISO-certified construction standards."
        city="Tampa"
        minPrice="250000"
      />
      <ArticleSchema
        headline="Clean Room Construction Standards | Medical & Pharmaceutical | FCS Tampa"
        description="Expert guide to clean room construction standards for medical facilities, pharmaceutical labs, and manufacturing in Tampa Bay. ISO classifications and HVAC requirements explained."
        datePublished="2024-06-15"
        dateModified="2025-01-15"
        slug="/clean-room-construction-standards/"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb
        items={[
          { name: "Commercial", href: "/commercial/" },
          { name: "Medical Construction", href: "/commercial/medical-construction/" },
          { name: "Clean Room Standards", href: "/clean-room-construction-standards/" },
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
              customHubTitle="Medical Construction"
              customHubHref="/commercial/medical-construction/"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Clean Room Construction Standards
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Building controlled environments for medical facilities, pharmaceutical
              manufacturing, and precision industries. ISO classifications, HVAC requirements,
              and regulatory compliance explained.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Discuss Your Clean Room Project
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

      {/* ISO Classifications */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            ISO Clean Room Classifications
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            ISO 14644-1 defines clean room classifications by maximum particle counts.
            Most Tampa Bay medical facilities require ISO 5-8 environments.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-3 py-3 text-left font-semibold">ISO Class</th>
                  <th className="px-3 py-3 text-left font-semibold">Max Particles/m³</th>
                  <th className="px-3 py-3 text-center font-semibold">US Fed Std</th>
                  <th className="px-3 py-3 text-left font-semibold">Typical Application</th>
                  <th className="px-3 py-3 text-center font-semibold">Air Changes</th>
                </tr>
              </thead>
              <tbody>
                {isoClassifications.map((iso, index) => (
                  <tr
                    key={iso.isoClass}
                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} ${iso.typical ? "border-l-4 border-brand-gold" : ""}`}
                  >
                    <td className="px-3 py-3 font-semibold text-brand-green-dark">
                      {iso.isoClass}
                      {iso.typical && <span className="ml-2 text-xs text-brand-gold">Common</span>}
                    </td>
                    <td className="px-3 py-3 text-gray-600">{iso.particles}</td>
                    <td className="px-3 py-3 text-center text-gray-500">{iso.usClass}</td>
                    <td className="px-3 py-3 text-gray-600">{iso.application}</td>
                    <td className="px-3 py-3 text-center">{iso.airChanges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Highlighted rows indicate classifications most common in Tampa Bay medical and pharmaceutical projects.
          </p>
        </div>
      </section>

      {/* Construction Elements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Critical Construction Elements
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Every component of a clean room must be designed for contamination control
            and cleanability.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionElements.map((item) => (
              <div key={item.element} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-brand-green-light/30 rounded-lg">
                    <item.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-green-dark">
                    {item.element}
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-brand-green-dark">Options: </span>
                    <span className="text-gray-600">{item.options}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-green-dark">Key Factors: </span>
                    <span className="text-gray-600">{item.considerations}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HVAC Requirements */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            HVAC Requirements by Classification
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Environmental control is the heart of clean room functionality. These are
            typical requirements for medical and pharmaceutical applications.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-brand-green text-white">
                  <th className="px-4 py-3 text-left font-semibold">Classification</th>
                  <th className="px-4 py-3 text-center font-semibold">Temperature</th>
                  <th className="px-4 py-3 text-center font-semibold">Humidity</th>
                  <th className="px-4 py-3 text-center font-semibold">Pressure</th>
                  <th className="px-4 py-3 text-left font-semibold">Air Pattern</th>
                </tr>
              </thead>
              <tbody>
                {hvacRequirements.map((req, index) => (
                  <tr
                    key={req.classification}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-green-dark">
                      {req.classification}
                    </td>
                    <td className="px-4 py-3 text-center">{req.tempRange}</td>
                    <td className="px-4 py-3 text-center">{req.humidityRange}</td>
                    <td className="px-4 py-3 text-center">{req.pressureDiff}</td>
                    <td className="px-4 py-3 text-gray-600">{req.airPattern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-brand-green-light/20 rounded-xl p-6">
            <h3 className="font-bold text-brand-green-dark mb-3 flex items-center gap-2">
              <Thermometer className="w-5 h-5" />
              Florida Climate Considerations
            </h3>
            <p className="text-gray-700">
              Tampa Bay&apos;s high humidity (often 80%+ outdoor) creates significant
              dehumidification loads for clean room HVAC systems. Systems must be sized
              for peak humidity conditions while maintaining precise indoor control.
              This often requires dedicated makeup air handling with desiccant or
              refrigerant dehumidification stages.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Frameworks */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Regulatory Frameworks
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Clean room construction must comply with industry-specific regulations.
            FCS builds to these standards for Tampa Bay medical and pharmaceutical clients.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {regulatoryFrameworks.map((reg) => (
              <div key={reg.framework} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                  {reg.framework}
                </h3>
                <p className="text-sm text-brand-gold font-semibold mb-3">
                  {reg.scope}
                </p>
                <p className="text-gray-600 mb-4">{reg.requirements}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <span className="text-xs text-gray-500 block mb-1">FCS Support</span>
                  <p className="text-gray-700 text-sm">{reg.fcsRole}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <div className="container-custom">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-yellow-800 mb-2">
                USP &lt;797&gt; 2023 Updates
              </h3>
              <p className="text-yellow-700">
                The revised USP General Chapter &lt;797&gt; takes effect November 1, 2023,
                with significant changes to beyond-use dating, air quality requirements,
                and personnel training. Hospital pharmacies planning clean room construction
                or renovation should design to the updated standards. FCS stays current
                with all regulatory changes affecting medical facility construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-gray-50 rounded-lg px-6"
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
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-brand-green-dark mb-6 text-center font-heading">
            Related Medical Construction Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/commercial/medical-construction/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Medical Construction Services
              </h3>
              <p className="text-gray-600 text-sm">
                Full-scope healthcare facility construction in Tampa Bay.
              </p>
            </Link>
            <Link
              href="/navigating-ahca-inspections/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                AHCA Inspection Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Florida healthcare facility licensing and inspection requirements.
              </p>
            </Link>
            <Link
              href="/medical-office-value-engineering/"
              className="card p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                Medical Office Value Engineering
              </h3>
              <p className="text-gray-600 text-sm">
                Cost optimization strategies for healthcare construction.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Build Your Clean Room?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists has built clean rooms for hospital pharmacies,
            medical device manufacturers, and research facilities throughout Tampa Bay.
            Let&apos;s discuss your project requirements.
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