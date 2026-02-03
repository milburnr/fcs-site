import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Shield, Droplets, Building2, ClipboardCheck, Wrench, HardHat } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Specialty Construction Services Tampa Bay | FCS",
  description: "Specialized construction services in Tampa Bay including balcony reconstruction, exterior waterproofing, condo assessments, building envelope repairs, and structural remediation. Expert contractors with 43+ years experience.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Specialty Services", href: "/other-services/" },
];

const specialtyServices = [
  {
    id: "balcony-reconstruction",
    title: "Balcony Reconstruction",
    icon: Building2,
    description: "Complete balcony reconstruction and repair services ensuring safety, structural integrity, and compliance with Florida building codes",
    overview: "Florida Construction Specialists are recognized experts in balcony reconstruction, a critical service for maintaining the safety and aesthetic appeal of properties in Florida. Our team brings extensive experience in reconstructing balconies, ensuring they are not only visually pleasing but also structurally sound and compliant with all safety regulations.",
    services: [
      "Complete balcony demolition and reconstruction",
      "Structural concrete repair and replacement",
      "Waterproofing membrane installation",
      "Railing system replacement and upgrades",
      "Tile and surface finish installation",
      "Drainage system improvements",
      "Code compliance upgrades",
      "Decorative element restoration"
    ],
    considerations: [
      "Florida's harsh coastal environment accelerates balcony deterioration",
      "Post-Surfside collapse regulations require rigorous structural standards",
      "Proper waterproofing prevents costly water intrusion damage",
      "Modern railing codes require specific height and spacing requirements",
      "Balcony reconstruction often triggers milestone inspection requirements"
    ],
    whyFcs: "With 43+ years of Florida construction experience, we understand the unique challenges coastal balconies face. Our work meets or exceeds current Florida Building Code requirements, and we coordinate closely with structural engineers to ensure lasting results."
  },
  {
    id: "exterior-waterproofing",
    title: "Exterior Waterproofing",
    icon: Droplets,
    description: "Comprehensive building envelope waterproofing to protect structures from Florida's intense rain, humidity, and storm conditions",
    overview: "Florida's climate presents unique challenges for building envelopes. Heavy rainfall, high humidity, hurricane-driven rain, and constant sun exposure demand robust waterproofing systems. Florida Construction Specialists provides comprehensive exterior waterproofing services that protect your investment from water intrusion damage.",
    services: [
      "Building envelope assessment and testing",
      "Elastomeric coating systems",
      "Joint sealant replacement and upgrades",
      "Stucco repair and waterproof coatings",
      "Window and door flashing repairs",
      "Below-grade waterproofing",
      "Deck and plaza waterproofing",
      "Parking garage waterproofing membranes"
    ],
    considerations: [
      "Water intrusion is the leading cause of building deterioration in Florida",
      "Proper waterproofing extends building lifespan significantly",
      "Failed waterproofing often leads to mold, structural damage, and costly repairs",
      "Hurricane-resistant waterproofing requires specific detailing at penetrations",
      "Regular maintenance extends waterproofing system life"
    ],
    whyFcs: "Our waterproofing approach addresses Florida's specific challenges—wind-driven rain, UV exposure, and thermal cycling. We use proven systems from leading manufacturers and ensure proper surface preparation for lasting adhesion."
  },
  {
    id: "condo-assessments",
    title: "Condo Building Assessments",
    icon: ClipboardCheck,
    description: "Comprehensive building condition assessments for condominium associations, supporting reserve studies and capital planning",
    overview: "Condominium associations face increasing pressure to understand and address building condition issues. Florida's milestone inspection requirements, reserve study mandates, and post-Surfside regulations demand thorough building assessments. Florida Construction Specialists provides comprehensive assessment services that help associations plan and budget for necessary repairs.",
    services: [
      "Visual building condition assessments",
      "Structural element inspection coordination",
      "Building envelope evaluation",
      "Common element inventory and condition rating",
      "Repair cost estimation for reserve planning",
      "Priority ranking for maintenance and repairs",
      "Milestone inspection preparation support",
      "Capital improvement planning assistance"
    ],
    considerations: [
      "Florida law now requires milestone inspections at 30 years (25 near coast)",
      "Structural Integrity Reserve Studies (SIRS) require funded reserves",
      "Deferred maintenance compounds repair costs significantly",
      "Early identification of issues prevents emergency assessments",
      "Thorough documentation supports insurance claims and legal protection"
    ],
    whyFcs: "We've assessed and repaired hundreds of Florida condominium buildings. Our assessments go beyond simple inspection—we provide actionable repair scopes, realistic cost estimates, and priority recommendations that help boards make informed decisions."
  },
  {
    id: "structural-remediation",
    title: "Structural Remediation",
    icon: HardHat,
    description: "Expert repair of structural deficiencies including concrete spalling, reinforcement corrosion, and foundation issues",
    overview: "Structural deterioration is a serious concern for Florida buildings, particularly those exposed to coastal salt air. Concrete spalling, reinforcement corrosion, and foundation issues can compromise building safety if not addressed properly. Florida Construction Specialists provides expert structural remediation services that restore structural integrity and extend building life.",
    services: [
      "Concrete spall repair and restoration",
      "Reinforcement corrosion treatment",
      "Carbon fiber strengthening systems",
      "Foundation crack repair and underpinning",
      "Post-tension cable repair and replacement",
      "Structural steel repair and protection",
      "Load-bearing wall modifications",
      "Seismic and wind retrofit upgrades"
    ],
    considerations: [
      "Florida's salt air environment accelerates reinforcement corrosion",
      "Spalling concrete often indicates deeper structural issues",
      "Proper corrosion treatment prevents recurring damage",
      "Carbon fiber strengthening can restore capacity without adding weight",
      "Some repairs require temporary shoring and occupancy considerations"
    ],
    whyFcs: "Our in-house engineering capabilities allow us to assess structural issues and develop repair solutions efficiently. We've completed structural remediation projects from minor spall repairs to major strengthening programs, always prioritizing safety and long-term durability."
  },
  {
    id: "building-envelope",
    title: "Building Envelope Repairs",
    icon: Shield,
    description: "Comprehensive repairs to building exteriors including stucco, EIFS, windows, and facade systems",
    overview: "The building envelope—everything that separates interior from exterior—is critical to building performance and occupant comfort. Florida Construction Specialists repairs and restores building envelope systems, addressing both functional performance and aesthetic appearance.",
    services: [
      "Stucco crack repair and re-coating",
      "EIFS repair and restoration",
      "Window replacement and re-glazing",
      "Curtain wall system repairs",
      "Caulk and sealant replacement",
      "Expansion joint restoration",
      "Brick and masonry restoration",
      "Aluminum panel system repairs"
    ],
    considerations: [
      "Building envelope failures are often symptoms of underlying issues",
      "Proper diagnosis prevents treating symptoms while ignoring causes",
      "Aesthetic restoration should not compromise functional performance",
      "Color matching on aged surfaces requires expertise",
      "Hurricane impact requirements affect window and door specifications"
    ],
    whyFcs: "We approach building envelope repairs systematically, identifying root causes before developing repair strategies. Our work addresses both functional performance and appearance, ensuring repairs last while maintaining building aesthetics."
  },
  {
    id: "specialty-coatings",
    title: "Specialty Coatings & Finishes",
    icon: Wrench,
    description: "High-performance coatings for commercial and industrial applications including anti-corrosion, non-slip, and protective finishes",
    overview: "Specialty coatings protect surfaces and extend service life in demanding environments. From anti-corrosion coatings in industrial settings to non-slip finishes in commercial kitchens, Florida Construction Specialists applies high-performance coating systems that meet specific functional requirements.",
    services: [
      "Epoxy floor coating systems",
      "Anti-corrosion coating applications",
      "Non-slip surface treatments",
      "Chemical-resistant coatings",
      "High-temperature coatings",
      "Elastomeric wall coatings",
      "Traffic-bearing membrane coatings",
      "Intumescent fireproofing coatings"
    ],
    considerations: [
      "Surface preparation is critical to coating performance",
      "Coating selection must match specific exposure conditions",
      "Application conditions affect cure and final performance",
      "Proper thickness and coverage ensure warranty compliance",
      "Some coatings require periodic reapplication or maintenance"
    ],
    whyFcs: "We're certified applicators for multiple coating manufacturers, ensuring proper application technique and warranty coverage. Our surface preparation protocols meet manufacturer specifications for optimal adhesion and performance."
  }
];

const projectTypes = [
  {
    type: "Condominium Associations",
    description: "Comprehensive services for condo buildings and HOAs",
    services: [
      "Balcony reconstruction programs",
      "Building envelope restoration",
      "Milestone inspection remediation",
      "Reserve study support",
      "Common element repairs",
      "Parking structure restoration"
    ]
  },
  {
    type: "Commercial Properties",
    description: "Specialty services for office, retail, and industrial buildings",
    services: [
      "Exterior waterproofing systems",
      "Building envelope repairs",
      "Structural remediation",
      "Specialty coating applications",
      "Facade restoration",
      "Parking lot and deck repairs"
    ]
  },
  {
    type: "Healthcare Facilities",
    description: "Specialized services meeting healthcare environment requirements",
    services: [
      "Infection control compliant construction",
      "Waterproofing for sensitive areas",
      "Structural upgrades for equipment",
      "Non-slip flooring systems",
      "Building envelope improvements",
      "Code compliance upgrades"
    ]
  },
  {
    type: "Hospitality Properties",
    description: "Services that minimize guest disruption while maintaining quality",
    services: [
      "Phased balcony reconstruction",
      "Pool deck waterproofing",
      "Exterior aesthetic restoration",
      "Common area upgrades",
      "Guest room renovations",
      "Facade improvements"
    ]
  }
];

const floridaChallenges = [
  {
    challenge: "Salt Air Corrosion",
    description: "Coastal Florida's salt-laden air accelerates corrosion of reinforcing steel, metal components, and fasteners, requiring specialized protection strategies.",
    solutions: [
      "Corrosion-inhibiting coatings and treatments",
      "Stainless steel or galvanized fasteners",
      "Proper concrete cover and quality",
      "Regular inspection and maintenance programs"
    ]
  },
  {
    challenge: "Hurricane Wind & Rain",
    description: "Hurricane-force winds drive rain into building assemblies through gaps that would be watertight under normal conditions, requiring specialized detailing.",
    solutions: [
      "Hurricane-rated waterproofing systems",
      "Proper flashing and counter-flashing details",
      "Pressure-equalized rain screen assemblies",
      "Impact-resistant glazing systems"
    ]
  },
  {
    challenge: "UV Degradation",
    description: "Florida's intense sunlight breaks down sealants, coatings, and roofing materials faster than in northern climates, requiring UV-stable materials.",
    solutions: [
      "UV-stable coating formulations",
      "Elastomeric materials that accommodate movement",
      "Reflective coatings to reduce heat buildup",
      "Planned maintenance and recoating schedules"
    ]
  },
  {
    challenge: "Thermal Cycling",
    description: "Daily temperature swings cause expansion and contraction that stresses joints and connections, requiring materials that accommodate movement.",
    solutions: [
      "Proper expansion joint design and spacing",
      "Flexible sealants rated for movement",
      "Slip sheets and isolation details",
      "Material selection for thermal stability"
    ]
  }
];

const processOverview = [
  {
    phase: "Assessment",
    description: "Comprehensive evaluation of existing conditions and identification of issues requiring attention.",
    activities: [
      "Site inspection and documentation",
      "Testing and investigation as needed",
      "Engineering consultation if required",
      "Condition report and recommendations"
    ]
  },
  {
    phase: "Planning",
    description: "Development of repair approach, specifications, and project logistics.",
    activities: [
      "Repair scope development",
      "Material and system selection",
      "Phasing and access planning",
      "Budget and schedule development"
    ]
  },
  {
    phase: "Execution",
    description: "Quality construction with minimal disruption to building operations.",
    activities: [
      "Mobilization and site protection",
      "Surface preparation and repairs",
      "Quality control inspections",
      "Progress documentation"
    ]
  },
  {
    phase: "Completion",
    description: "Final inspection, documentation, and warranty implementation.",
    activities: [
      "Final quality inspection",
      "Warranty documentation",
      "Maintenance recommendations",
      "Project closeout"
    ]
  }
];

const faqs = [
  {
    question: "What specialty services does FCS provide?",
    answer: "Florida Construction Specialists provides a range of specialty construction services including balcony reconstruction, exterior waterproofing, building envelope repairs, structural remediation, condo building assessments, and specialty coating applications. These services complement our core commercial construction and renovation capabilities."
  },
  {
    question: "Do you work with condominium associations?",
    answer: "Yes, we have extensive experience working with condominium associations throughout Tampa Bay. We understand the unique challenges of condo work, including board approval processes, reserve fund considerations, milestone inspection requirements, and the need to minimize disruption to residents while maintaining quality and safety."
  },
  {
    question: "Can you help prepare for milestone inspections?",
    answer: "Absolutely. We provide building condition assessments that can identify potential issues before milestone inspections, help associations understand and prioritize needed repairs, and perform remediation work required to address inspection findings. Our experience with Florida's new inspection requirements helps associations navigate this process efficiently."
  },
  {
    question: "What waterproofing systems do you install?",
    answer: "We install a variety of waterproofing systems depending on the application, including elastomeric coatings, fluid-applied membranes, sheet membranes, joint sealants, and specialty systems for below-grade and plaza deck applications. We select systems based on exposure conditions, performance requirements, and building-specific factors."
  },
  {
    question: "How do you handle balcony reconstruction in occupied buildings?",
    answer: "We develop phased approaches that minimize disruption while maintaining safety. This typically involves working on a limited number of units at a time, providing clear communication to residents about schedules and access restrictions, implementing safety barriers and monitoring, and coordinating closely with building management."
  },
  {
    question: "Do you provide engineering services for structural repairs?",
    answer: "We have in-house engineering capabilities and work with structural engineers for complex repairs. For structural remediation, we typically coordinate engineering assessment, develop repair recommendations, and execute approved repair designs. This integrated approach ensures efficient project delivery while maintaining appropriate professional oversight."
  },
  {
    question: "What's the typical timeline for specialty projects?",
    answer: "Timelines vary significantly based on scope. A single balcony reconstruction might take 2-3 weeks, while a building-wide balcony program could span several months. Waterproofing projects depend on building size and access conditions. We provide detailed schedules during project planning that account for weather, access, and phasing requirements."
  },
  {
    question: "Can you work on buildings of any height?",
    answer: "Yes, we have experience working on buildings from single-story to high-rise. For elevated work, we utilize appropriate access equipment including scaffolding, swing stages, aerial lifts, and rope access techniques depending on building configuration and project requirements. Safety planning is a critical component of all elevated work."
  }
];

const internalLinks = [
  { href: "/condo-milestone-inspection-remediation/", label: "Condo Milestone Inspections" },
  { href: "/commercial-construction/", label: "Commercial Construction" },
  { href: "/services/commercial/tenant-improvement/", label: "Tenant Improvements" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/insurance-restoration/", label: "Insurance Restoration" },
  { href: "/about/", label: "About Florida Construction Specialists" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function SpecialtyServicesPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Specialty Construction Services"
        serviceDescription="Specialized construction services in Tampa Bay including balcony reconstruction, exterior waterproofing, condo assessments, and building envelope repairs."
        minPrice="50000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "Specialty Services", href: "/other-services/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Specialty construction services in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Specialized Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Specialty Construction Services
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Expert specialty services including balcony reconstruction, exterior waterproofing, building assessments, and structural remediation. 43+ years of Florida construction experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request Assessment
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

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">43+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <ClipboardCheck className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Certified Applicators</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Specialized Solutions for Complex Challenges
            </h2>
            <p className="text-gray-600 text-lg">
              Beyond our core commercial construction services, Florida Construction Specialists offers specialized expertise in building restoration, waterproofing, and structural remediation. These services address the unique challenges Florida buildings face from coastal exposure, intense weather, and aging infrastructure.
            </p>
          </div>
          
          {/* Quick Links to Services */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {specialtyServices.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-brand-green-bg transition-colors"
                >
                  <Icon className="w-8 h-8 text-brand-green mx-auto mb-2" />
                  <span className="text-sm font-semibold text-gray-700">{service.title}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {specialtyServices.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`section ${isEven ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-10 h-10 text-brand-green" />
                    <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6">{service.overview}</p>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Our Services Include:</h3>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {service.services.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/contact/"
                    className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
                  >
                    Request a Consultation <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                
                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Key Considerations</h3>
                    <ul className="space-y-3">
                      {service.considerations.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-brand-green-bg rounded-xl p-6">
                    <h3 className="text-lg font-bold text-brand-green-dark mb-3">Why Choose FCS</h3>
                    <p className="text-gray-600 text-sm">{service.whyFcs}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Florida Challenges */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
            Understanding Florida&apos;s Building Challenges
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Florida&apos;s climate presents unique challenges that require specialized knowledge and proven solutions. Our 43+ years of experience has taught us how to address these challenges effectively.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {floridaChallenges.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.challenge}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <h4 className="font-bold text-gray-800 mb-3">Our Solutions:</h4>
                <ul className="space-y-2">
                  {item.solutions.map((solution, solIndex) => (
                    <li key={solIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
            Property Types We Serve
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our specialty services address the unique needs of different property types. We understand the specific requirements, constraints, and priorities for each sector.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-2">{type.type}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-12 text-center font-heading">
            Our Approach to Specialty Projects
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processOverview.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{phase.phase}</h3>
                <p className="text-gray-600 text-sm mb-4">{phase.description}</p>
                <ul className="text-left space-y-2">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{activity}</span>
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
              Why Choose FCS for Specialty Services?
            </h2>
            <p className="text-gray-600">
              Our specialty services combine decades of Florida construction experience with specialized expertise in building restoration and protection.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">43+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Decades of specialty construction experience in Florida&apos;s demanding environment.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">In-House Engineering</h3>
              <p className="text-gray-600 text-sm">Engineering capabilities for assessment and repair design of complex issues.</p>
            </div>
            <div className="card text-center p-6">
              <ClipboardCheck className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Certified Applicators</h3>
              <p className="text-gray-600 text-sm">Factory-certified applicators for waterproofing and coating systems.</p>
            </div>
            <div className="card text-center p-6">
              <HardHat className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Quality Focus</h3>
              <p className="text-gray-600 text-sm">Rigorous quality control ensures lasting results and warranty compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Specialty Services FAQs" />

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Need Specialty Construction Services?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on your specialty construction needs. From assessments to complete restoration, we have the expertise to address your building challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Consultation
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
