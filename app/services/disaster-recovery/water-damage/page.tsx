"use client";

import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/AnimatedElements";
import {
  CheckCircle,
  Shield,
  Award,
  Phone,
  Droplets,
  AlertTriangle,
  Home,
  Building2,
  Wind,
  ThermometerSun
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Disaster Recovery", href: "/services/disaster-recovery/" },
  { name: "Water Damage", href: "/services/disaster-recovery/water-damage/" },
];

const faqs = [
  {
    question: "How quickly should water damage be addressed?",
    answer: "Water damage should be addressed within 24-48 hours to prevent mold growth. In Florida's warm, humid climate, mold can begin developing within 24 hours of water intrusion. The faster water is extracted and drying begins, the more salvageable materials will be and the lower your restoration costs.",
  },
  {
    question: "What are the categories of water damage?",
    answer: "Category 1 (Clean Water) comes from sanitary sources like broken supply lines. Category 2 (Gray Water) contains contaminants from dishwashers, washing machines, or toilet overflow without feces. Category 3 (Black Water) is highly contaminated from sewage, flooding, or standing water that has developed bacteria. Category affects restoration approach and PPE requirements.",
  },
  {
    question: "What is the water damage restoration process?",
    answer: "Our process includes: 1) Emergency response and inspection, 2) Water extraction using truck-mounted and portable equipment, 3) Structural drying with commercial dehumidifiers and air movers, 4) Moisture monitoring throughout the drying process, 5) Cleaning and sanitization, 6) Restoration of damaged materials including drywall, flooring, and finishes.",
  },
  {
    question: "Does homeowner's insurance cover water damage?",
    answer: "Coverage depends on the water source. Sudden and accidental water damage (burst pipes, appliance failures) is typically covered. Flood damage from rising water requires separate flood insurance. Gradual damage from leaks or maintenance issues is often excluded. We help document damage properly and work with your carrier on covered claims.",
  },
  {
    question: "How do you detect hidden water damage?",
    answer: "We use professional moisture meters, thermal imaging cameras, and hygrometers to detect hidden moisture. These tools identify water behind walls, under flooring, and in ceiling cavities. Proper detection ensures we address all affected areas, preventing future mold growth and structural issues.",
  },
  {
    question: "What materials can be saved after water damage?",
    answer: "Solid wood furniture, hardwood flooring, and structural framing can often be dried and saved. Drywall below the flood line typically requires replacement. Carpet may be salvageable if cleaned and dried within 24-48 hours (Category 1 only). Insulation and particle board products generally require replacement.",
  },
  {
    question: "How long does water damage restoration take?",
    answer: "Timeline depends on damage extent and category. Structural drying alone typically takes 3-5 days with professional equipment. Minor restoration (single room) may complete in 1-2 weeks. Major restoration involving multiple rooms, mold remediation, or structural repairs can take 4-8 weeks. We provide detailed timelines during assessment.",
  },
  {
    question: "Do you handle mold remediation from water damage?",
    answer: "Yes, mold remediation is integral to water damage restoration. If mold is present, we contain affected areas, remove contaminated materials, treat surfaces with antimicrobial agents, and ensure proper drying before reconstruction. We follow IICRC S520 guidelines for professional mold remediation.",
  },
  {
    question: "What causes most water damage in Tampa Bay?",
    answer: "Common causes include: hurricane and storm damage to roofs and windows, plumbing failures (supply line bursts, water heater failures), appliance malfunctions (washing machines, dishwashers), HVAC condensate line clogs, and flooding from heavy rainfall or storm surge. Tampa Bay's aging housing stock also experiences more pipe failures.",
  },
  {
    question: "How do I prevent water damage to my property?",
    answer: "Prevention includes: regular plumbing inspections, replacing washing machine hoses every 5 years, maintaining HVAC condensate lines, installing water leak sensors, maintaining proper roof and gutter systems, and knowing your water main shutoff location. For Florida properties, impact windows and proper hurricane preparation also reduce storm-related water damage.",
  },
];

const waterDamageTypes = [
  {
    icon: Droplets,
    title: "Plumbing Failures",
    description: "Burst pipes, supply line failures, water heater ruptures, and fixture malfunctions requiring immediate extraction and restoration.",
  },
  {
    icon: Wind,
    title: "Storm Water Intrusion",
    description: "Hurricane and storm damage allowing rain infiltration through roofs, windows, and compromised building envelope.",
  },
  {
    icon: Building2,
    title: "Commercial Water Loss",
    description: "Large-scale water damage in office buildings, retail spaces, and multi-family properties requiring industrial extraction equipment.",
  },
  {
    icon: ThermometerSun,
    title: "HVAC Related Damage",
    description: "Condensate line failures, drain pan overflows, and system malfunctions causing water damage to ceilings and walls.",
  },
  {
    icon: Home,
    title: "Appliance Failures",
    description: "Washing machine hose bursts, dishwasher failures, refrigerator line breaks, and water softener malfunctions.",
  },
  {
    icon: AlertTriangle,
    title: "Sewage Backup",
    description: "Category 3 water damage requiring specialized contamination protocols, removal, and sanitization procedures.",
  },
];

const relatedLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/services/disaster-recovery/insurance-claims-process/", label: "Insurance Claims Process" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/disaster-recovery-tampa/", label: "Disaster Recovery Tampa" },
];

export default function WaterDamagePage() {
  return (
    <>
      <LocalBusinessSchema service="Water Damage Restoration" />
      <ServiceSchema
        serviceName="Water Damage Restoration Services"
        serviceDescription="Professional water damage restoration for Tampa Bay properties. Emergency water extraction, structural drying, mold prevention, and complete restoration with 43+ years experience."
        minPrice="3000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
                <AlertTriangle className="w-5 h-5 text-blue-400" />
                <span className="text-blue-200 font-medium">24/7 Emergency Response</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Water Damage Restoration
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Fast response water damage restoration for Tampa Bay homes and businesses.
                From emergency extraction to complete reconstruction, we restore your
                property and protect against mold and structural damage.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>IICRC Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span>Licensed: {BUSINESS_INFO.licenseNumber}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span>Insurance Claim Support</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Emergency: {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-colors border border-white/30"
                >
                  Request Assessment
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Water Damage Restoration in Tampa Bay
              </h2>
            </FadeIn>

            <div className="prose prose-lg max-w-none">
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-6">
                  Water damage doesn't wait, and neither should restoration. Florida Construction
                  Specialists provides rapid-response water damage services throughout Tampa Bay,
                  with the equipment, expertise, and insurance knowledge to restore your property
                  quickly and completely. Whether you're facing a burst pipe at 2 AM or storm
                  damage affecting your commercial building, we're ready to respond.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-6">
                  In Florida's warm, humid climate, the window for effective water damage
                  mitigation is narrow. Mold can begin growing within 24-48 hours of water
                  intrusion. Structural materials continue absorbing moisture. What starts as
                  a manageable situation can quickly become a major restoration project.
                  That's why we maintain 24/7 emergency response capability.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our Water Damage Restoration Process
                </h3>
                <p className="text-gray-700 mb-6">
                  Every water damage situation is different, but our systematic approach ensures
                  thorough restoration. We begin with rapid response and assessment, identifying
                  the water source, water category, and extent of damage. If water is still
                  flowing, we stop it. If the source was a covered loss, we begin documentation
                  for your insurance claim.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-gray-700 mb-6">
                  Water extraction removes standing water using truck-mounted and portable
                  extraction equipment. For large losses, we deploy multiple extraction units
                  simultaneously. Submersible pumps handle deep water situations. Every gallon
                  extracted is a gallon that doesn't need to be evaporated during drying.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <p className="text-gray-700 mb-6">
                  Structural drying uses commercial dehumidifiers and air movers to remove
                  moisture from building materials. We monitor moisture levels throughout
                  the process, documenting progress with readings until materials reach
                  acceptable dry standards. This documentation supports your insurance claim
                  and ensures mold prevention.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <p className="text-gray-700 mb-6">
                  Once dry, restoration begins—replacing damaged drywall, flooring, insulation,
                  and finishes. As a full-service general contractor, we handle everything from
                  minor repairs to complete reconstruction. You deal with one company from
                  emergency response through final paint.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Water Damage Types Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Water Damage Restoration Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive restoration for all types of water damage, from minor leaks
                to major flooding events.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {waterDamageTypes.map((type, index) => (
              <FadeIn key={type.title} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Water Damage Response Process
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Emergency Response & Assessment",
                  description: "24/7 response to stop water source, assess damage extent and category, and begin documentation for insurance claims.",
                },
                {
                  step: "2",
                  title: "Water Extraction",
                  description: "Rapid removal of standing water using truck-mounted extractors, portable units, and submersible pumps as needed.",
                },
                {
                  step: "3",
                  title: "Structural Drying",
                  description: "Commercial dehumidifiers and air movers positioned for optimal drying with daily moisture monitoring and documentation.",
                },
                {
                  step: "4",
                  title: "Cleaning & Sanitization",
                  description: "Antimicrobial treatment, content cleaning, and deodorization to restore sanitary conditions.",
                },
                {
                  step: "5",
                  title: "Restoration & Reconstruction",
                  description: "Replace damaged materials, restore finishes, and return property to pre-loss condition with insurance-approved repairs.",
                },
              ].map((item, index) => (
                <FadeIn key={item.step} delay={index * 0.1}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Water Damage FAQs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about water damage restoration, insurance coverage,
                and our restoration process.
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <InternalLinks
              title="Related Services"
              links={relatedLinks}
            />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 px-4 py-2 rounded-full mb-6">
                  <AlertTriangle className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-200 font-medium">24/7 Emergency Response</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Water Damage Emergency? Call Now
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Every hour counts with water damage. Contact FCS for immediate
                  emergency response, professional extraction and drying, and
                  complete restoration services. We work directly with your insurance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Emergency: {BUSINESS_INFO.phone}
                  </a>
                </div>
                <p className="text-gray-400 mt-4">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Emergency Service</h3>
                <HighLevelForm height={450} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
