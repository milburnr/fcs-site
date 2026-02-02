import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, FileText, Shield, Clock, Users, AlertTriangle, Building2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Restoration Services | Large Loss Commercial Claims | Tampa Bay",
  description: "Expert insurance restoration contractor for commercial and industrial properties in Tampa Bay. We work directly with adjusters on large loss claims from hurricanes, storms, and disasters. 43+ years experience.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance Restoration", href: "/insurance-restoration/" },
];

const claimTypes = [
  {
    type: "Hurricane & Wind Damage",
    description: "Comprehensive restoration for properties damaged by Florida's hurricanes and tropical storms",
    commonIssues: [
      "Roof damage and complete roof replacement",
      "Window and door system failures",
      "Structural damage from wind uplift",
      "Water intrusion from compromised building envelope",
      "Exterior cladding and facade damage",
      "HVAC system damage from debris or water"
    ],
    fcsApproach: "Immediate emergency response with temporary protection, followed by detailed damage assessment and comprehensive restoration planning. Our team has restored hundreds of commercial properties following major hurricanes including Ian, Irma, and Charley."
  },
  {
    type: "Water & Flood Damage",
    description: "Complete water damage restoration from flooding, plumbing failures, and storm surge",
    commonIssues: [
      "Structural water damage and wood rot",
      "Mold remediation and prevention",
      "Flooring and wall system replacement",
      "Electrical system damage and replacement",
      "Foundation and slab damage",
      "Contents restoration coordination"
    ],
    fcsApproach: "Rapid water extraction and drying services to minimize secondary damage, followed by complete structural restoration. We coordinate with specialized remediation contractors for mold and contamination issues."
  },
  {
    type: "Fire & Smoke Damage",
    description: "Full restoration services for fire-damaged commercial properties",
    commonIssues: [
      "Structural fire damage assessment and repair",
      "Smoke and soot remediation",
      "Electrical and mechanical system replacement",
      "Air quality restoration",
      "Code compliance upgrades during reconstruction",
      "Demolition and debris removal"
    ],
    fcsApproach: "Comprehensive damage assessment including hidden damage investigation, followed by complete reconstruction. Fire damage often requires code compliance upgrades, and our team ensures all work meets current building standards."
  },
  {
    type: "Vandalism & Theft Damage",
    description: "Restoration and security improvements following criminal damage",
    commonIssues: [
      "Broken windows and doors",
      "Interior damage and graffiti removal",
      "Security system upgrades",
      "Structural damage from forced entry",
      "Electrical and plumbing system damage",
      "Building envelope repair"
    ],
    fcsApproach: "Rapid board-up and security services followed by complete restoration. We often incorporate security improvements into the restoration plan to prevent future incidents."
  },
  {
    type: "Vehicle Impact Damage",
    description: "Structural restoration following vehicle collisions with buildings",
    commonIssues: [
      "Structural column and wall damage",
      "Foundation and footing repairs",
      "Storefront and facade reconstruction",
      "Utility line repairs",
      "Interior damage from impact",
      "Code compliance during reconstruction"
    ],
    fcsApproach: "Immediate structural assessment to ensure building safety, followed by engineered repair solutions. Vehicle impacts often affect structural integrity beyond visible damage, requiring thorough investigation."
  }
];

const restorationProcess = [
  {
    phase: "Emergency Response",
    timeframe: "0-24 Hours",
    description: "Immediate stabilization to prevent further damage",
    activities: [
      "24/7 emergency response availability",
      "Emergency board-up and tarping services",
      "Water extraction and initial drying",
      "Temporary power and utilities coordination",
      "Site security and access control",
      "Initial damage documentation and photography"
    ],
    deliverables: "Emergency stabilization complete, initial loss documentation, temporary protection in place"
  },
  {
    phase: "Damage Assessment",
    timeframe: "1-5 Days",
    description: "Comprehensive evaluation of all damage for accurate claim documentation",
    activities: [
      "Detailed property inspection with photography",
      "Moisture mapping and thermal imaging",
      "Structural engineering assessment when needed",
      "Hidden damage investigation",
      "Scope of work development",
      "Preliminary cost estimation"
    ],
    deliverables: "Complete damage report, preliminary scope of work, initial cost estimate for carrier"
  },
  {
    phase: "Claim Documentation",
    timeframe: "5-14 Days",
    description: "Preparation of comprehensive documentation for insurance claim",
    activities: [
      "Line-item damage estimates using industry standards",
      "Supporting documentation compilation",
      "Code upgrade identification and documentation",
      "Adjuster meeting coordination and attendance",
      "Supplemental damage identification",
      "Estimate negotiation support"
    ],
    deliverables: "Complete claim package, detailed estimates, supporting documentation for carrier approval"
  },
  {
    phase: "Restoration Planning",
    timeframe: "2-4 Weeks",
    description: "Detailed planning for efficient restoration execution",
    activities: [
      "Final scope of work development",
      "Subcontractor selection and scheduling",
      "Material procurement and lead time management",
      "Permit applications and approvals",
      "Project schedule development",
      "Budget finalization with carrier approval"
    ],
    deliverables: "Approved restoration plan, project schedule, confirmed budget, permits secured"
  },
  {
    phase: "Restoration Execution",
    timeframe: "Varies by Scope",
    description: "Quality construction to restore property to pre-loss condition",
    activities: [
      "Demolition and debris removal",
      "Structural repairs and reconstruction",
      "Mechanical, electrical, and plumbing restoration",
      "Interior finish restoration",
      "Quality control inspections",
      "Progress documentation and reporting"
    ],
    deliverables: "Property restored to pre-loss condition, all work inspected and approved"
  },
  {
    phase: "Project Closeout",
    timeframe: "1-2 Weeks",
    description: "Final documentation and project completion",
    activities: [
      "Final inspections and certificate of occupancy",
      "Punch list completion",
      "Final documentation package",
      "Warranty documentation",
      "Final billing and carrier coordination",
      "Owner training and handover"
    ],
    deliverables: "Project complete, all documentation delivered, warranties in place"
  }
];

const documentationRequirements = [
  {
    category: "Initial Documentation",
    description: "Critical documentation needed immediately after loss",
    items: [
      "Date, time, and cause of loss",
      "Comprehensive photography of all damage",
      "Video documentation walkthrough",
      "List of damaged areas and systems",
      "Emergency services receipts",
      "Police or fire department reports if applicable"
    ]
  },
  {
    category: "Claim Support Documentation",
    description: "Documentation needed for claim processing",
    items: [
      "Original construction drawings if available",
      "Previous repair or renovation records",
      "Property maintenance records",
      "Equipment and contents inventory",
      "Business income documentation for BI claims",
      "Lease agreements for tenant improvements"
    ]
  },
  {
    category: "Restoration Documentation",
    description: "Documentation maintained throughout restoration",
    items: [
      "Daily progress photos and reports",
      "Change order documentation",
      "Material specifications and approvals",
      "Inspection records and approvals",
      "Subcontractor certifications and insurance",
      "Final as-built documentation"
    ]
  }
];

const adjusterRelationships = [
  {
    role: "Staff Adjusters",
    description: "Insurance company employees who handle claims directly",
    fcsApproach: "We provide clear, well-documented estimates that facilitate efficient claim processing. Our familiarity with carrier requirements and Xactimate estimating helps expedite approvals."
  },
  {
    role: "Independent Adjusters",
    description: "Third-party adjusters contracted by carriers for claim handling",
    fcsApproach: "We coordinate closely with independent adjusters, providing access to the property and detailed documentation. Our professional approach builds trust and facilitates fair claim settlements."
  },
  {
    role: "Executive General Adjusters",
    description: "Senior adjusters handling complex, large-loss claims",
    fcsApproach: "Our access to executive general adjusters provides additional expertise for complex claims. These relationships, developed over decades, help navigate challenging claim situations."
  },
  {
    role: "Public Adjusters",
    description: "Adjusters who represent policyholders in claim negotiations",
    fcsApproach: "When clients engage public adjusters, we provide detailed estimates and documentation to support their advocacy. We work collaboratively while maintaining our role as restoration contractor."
  }
];

const commercialSpecializations = [
  {
    sector: "Office Buildings",
    considerations: [
      "Tenant communication and coordination",
      "Business interruption minimization",
      "IT infrastructure protection and restoration",
      "HVAC system restoration",
      "Common area vs. tenant space responsibilities",
      "ADA compliance during restoration"
    ]
  },
  {
    sector: "Retail & Restaurants",
    considerations: [
      "Rapid restoration to minimize revenue loss",
      "Health department coordination for food service",
      "Customer experience during restoration",
      "Signage and storefront restoration",
      "Equipment and fixture replacement",
      "Inventory and contents coordination"
    ]
  },
  {
    sector: "Industrial & Warehouse",
    considerations: [
      "Large-scale structural repairs",
      "Specialized equipment protection",
      "Loading dock and logistics access",
      "Hazardous material considerations",
      "Fire suppression system restoration",
      "Production timeline impacts"
    ]
  },
  {
    sector: "Condominiums & HOAs",
    considerations: [
      "Common element vs. unit owner responsibilities",
      "Multiple unit coordination",
      "Association communication requirements",
      "Reserve fund considerations",
      "Milestone inspection compliance during repairs",
      "Resident safety and access"
    ]
  },
  {
    sector: "Healthcare Facilities",
    considerations: [
      "Patient safety and care continuity",
      "Infection control during construction",
      "HIPAA compliance for documentation",
      "Specialized system restoration (medical gas, etc.)",
      "Regulatory compliance requirements",
      "Equipment and pharmaceutical protection"
    ]
  }
];

const faqs = [
  {
    question: "How quickly can FCS respond to an emergency?",
    answer: "Florida Construction Specialists provides 24/7 emergency response for commercial properties. For large loss situations, we can typically have a team on-site within hours to begin stabilization, including emergency board-up, tarping, and water extraction to prevent further damage."
  },
  {
    question: "Do you work directly with insurance adjusters?",
    answer: "Yes, we have extensive experience working with insurance adjusters at all levels, including staff adjusters, independent adjusters, and executive general adjusters for complex large-loss claims. We provide detailed documentation and estimates that facilitate efficient claim processing and fair settlements."
  },
  {
    question: "What size insurance claims do you handle?",
    answer: "FCS specializes in large-loss commercial and industrial insurance claims, typically ranging from $500,000 to several million dollars. Our experience with complex claims and our relationships with executive general adjusters make us particularly effective for substantial commercial losses."
  },
  {
    question: "How long does the insurance restoration process take?",
    answer: "Timeline varies significantly based on damage extent and claim complexity. Emergency stabilization is immediate. Claim documentation typically takes 1-2 weeks. Restoration planning requires 2-4 weeks including permits. Construction duration depends on scope—from a few weeks for limited damage to several months for major restoration."
  },
  {
    question: "Can you help if my claim has been denied or underpaid?",
    answer: "While we cannot provide legal advice, our detailed documentation and professional estimates often support successful claim appeals. We can provide additional documentation, attend re-inspections with adjusters, and coordinate with public adjusters or attorneys that clients may engage."
  },
  {
    question: "Do you handle both structural and cosmetic restoration?",
    answer: "Yes, FCS provides complete restoration services from structural repairs to final finishes. We manage the entire restoration process, coordinating all trades and specialties to return your property to pre-loss condition, including any required code upgrades."
  },
  {
    question: "What if additional damage is discovered during restoration?",
    answer: "Hidden damage is common, especially with water intrusion. We document all supplemental damage with photos and detailed estimates, coordinate with the adjuster for approval, and proceed only after authorization. Our thorough initial assessment helps minimize surprises."
  },
  {
    question: "Will my building meet current codes after restoration?",
    answer: "Yes, all restoration work meets current Florida Building Code requirements. When damage triggers code upgrades beyond the original construction, we document these requirements for inclusion in the insurance claim. Code upgrades are often covered under 'Ordinance or Law' coverage."
  }
];

const internalLinks = [
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/services/disaster-recovery/hurricane-damage/", label: "Hurricane Damage Restoration" },
  { href: "/services/disaster-recovery/water-damage/", label: "Water Damage Restoration" },
  { href: "/services/disaster-recovery/fire-damage/", label: "Fire Damage Restoration" },
  { href: "/condo-milestone-inspection-remediation/", label: "Condo Milestone Inspections" },
  { href: "/commercial-construction/", label: "Commercial Construction" },
  { href: "/contact/", label: "Schedule Emergency Consultation" },
];

export default function InsuranceRestorationPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Insurance Restoration"
        serviceDescription="Expert insurance restoration contractor for commercial and industrial properties in Tampa Bay. We work directly with adjusters on large loss claims from hurricanes, storms, and disasters."
        minPrice="500000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "Insurance Restoration", href: "/insurance-restoration/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Hurricane damage restoration in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Large Loss Commercial Claims</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Insurance Restoration Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Expert restoration contractor for commercial and industrial insurance claims in Tampa Bay. We work directly with adjusters on large-loss claims, providing comprehensive documentation and quality restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Emergency Response
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                24/7: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">43+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">24/7 Emergency Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Adjuster Network Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Your Partner in Large-Loss Insurance Claims
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists stands at the forefront of insurance restoration in the wake of hurricanes and storms in Florida, backed by 43+ years of experience and a comprehensive network of professionals. Our access to executive general adjusters, public adjusters, and attorneys positions us uniquely in managing and assessing large-loss claims with unmatched expertise.
              </p>
              <p className="text-gray-600 mb-6">
                We have personally overseen numerous significant claims, providing us with a deep understanding of the complexities involved in commercial, industrial, and residential insurance restorations. Our process encompasses everything from meticulous inspections to precise damage estimation, ensuring every aspect of the restoration is thoroughly addressed.
              </p>
              <p className="text-gray-600 mb-6">
                Our team is adept in handling the intricate challenges that come with insurance restoration, especially in the aftermath of Florida&apos;s frequent hurricanes and storms. We work closely with clients to manage every step of the process, from the initial inspection to the detailed estimation of repairs needed.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Schedule Emergency Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div>
              <Image
                src="/wp-content/uploads/2024/01/e2.webp"
                alt="Severe wind damage to elevated home roof with workers inspecting destruction"
                width={800}
                height={500}
                className="rounded-lg w-full object-cover mb-6"
              />
              <div className="bg-brand-green-bg rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                  Our Insurance Restoration Expertise
                </h3>
                <ul className="space-y-3">
                  {[
                    "Large-loss commercial claim management",
                    "Direct adjuster coordination and negotiation",
                    "Comprehensive damage documentation",
                    "Emergency stabilization services",
                    "Complete restoration to pre-loss condition",
                    "Code compliance and upgrade documentation"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Types */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
            Types of Insurance Claims We Handle
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Florida Construction Specialists has extensive experience with all types of commercial property damage claims. Our team understands the unique documentation and restoration requirements for each damage type.
          </p>
          <div className="space-y-8">
            {claimTypes.map((claim, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                      <h3 className="text-2xl font-bold text-brand-green-dark">{claim.type}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{claim.description}</p>
                    <h4 className="font-bold text-gray-800 mb-3">Common Issues We Address</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {claim.commonIssues.map((issue, issueIndex) => (
                        <div key={issueIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{issue}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-brand-green-bg p-6 rounded-lg">
                    <h4 className="font-bold text-brand-green-dark mb-3">Our Approach</h4>
                    <p className="text-gray-600 text-sm">{claim.fcsApproach}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restoration Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
            Our Insurance Restoration Process
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            From emergency response to final completion, our proven process ensures thorough documentation, efficient claim processing, and quality restoration that returns your property to pre-loss condition.
          </p>
          <div className="space-y-6">
            {restorationProcess.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-brand-green text-white flex items-center justify-center text-lg font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-green-dark">{phase.phase}</h3>
                        <p className="text-sm text-gray-500">{phase.timeframe}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">{phase.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-bold text-gray-800 mb-3">Key Activities</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-1 bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-2">Deliverables</h4>
                    <p className="text-gray-600 text-sm">{phase.deliverables}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Requirements */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
            Documentation for Successful Claims
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Thorough documentation is critical for successful insurance claims. Our experienced team ensures comprehensive documentation at every stage, supporting fair claim settlements and efficient processing.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {documentationRequirements.map((doc, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <FileText className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{doc.category}</h3>
                <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                <ul className="space-y-2">
                  {doc.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adjuster Relationships */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
            Working with Insurance Adjusters
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our decades of experience have built strong working relationships with adjusters at all levels. This collaborative approach facilitates efficient claim processing and fair settlements for our clients.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {adjusterRelationships.map((adjuster, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-brand-green" />
                  <h3 className="text-xl font-bold text-brand-green-dark">{adjuster.role}</h3>
                </div>
                <p className="text-gray-600 mb-4">{adjuster.description}</p>
                <div className="bg-white p-4 rounded-lg border-l-4 border-brand-green">
                  <h4 className="font-bold text-gray-800 mb-2">Our Approach</h4>
                  <p className="text-gray-600 text-sm">{adjuster.fcsApproach}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Specializations */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
            Commercial Property Specializations
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Different commercial property types present unique restoration challenges. Our experience across multiple sectors ensures we understand the specific requirements and considerations for your property type.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialSpecializations.map((spec, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <Building2 className="w-8 h-8 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">{spec.sector}</h3>
                <ul className="space-y-2">
                  {spec.considerations.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Choose FCS for Insurance Restoration?
            </h2>
            <p className="text-gray-600">
              With over four decades of experience and a comprehensive network of industry professionals, Florida Construction Specialists provides unmatched expertise in large-loss commercial insurance claims.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">43+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Decades of Florida hurricane and storm restoration expertise.</p>
            </div>
            <div className="card text-center p-6">
              <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Adjuster Network</h3>
              <p className="text-gray-600 text-sm">Direct access to executive general adjusters for complex claims.</p>
            </div>
            <div className="card text-center p-6">
              <FileText className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Complete Documentation</h3>
              <p className="text-gray-600 text-sm">Thorough documentation that supports fair claim settlements.</p>
            </div>
            <div className="card text-center p-6">
              <Clock className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">24/7 Response</h3>
              <p className="text-gray-600 text-sm">Emergency response teams available around the clock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Insurance Restoration FAQs" />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Need Emergency Restoration Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for immediate emergency response. Our team is available 24/7 to help stabilize your property and begin the restoration process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Emergency Response
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 24/7: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
