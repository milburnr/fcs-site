import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, Droplets, Layers, Factory, Home, CloudRain, Wrench, FileCheck, MapPin } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceAreaLinks } from "@/components/InternalLinks";
import { ContentImage, ContentParallax } from "@/components/ContentImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior Waterproofing Tampa | Florida | FCS",
  description: "Expert exterior waterproofing Tampa services for commercial and residential buildings. Premium building waterproofing Florida solutions. Foundation, plaza deck, parking structure waterproofing. Call today!",
  keywords: "exterior waterproofing Tampa, building waterproofing Florida, commercial waterproofing contractor, foundation waterproofing Tampa Bay, below-grade waterproofing, plaza deck waterproofing",
};

const features = [
  "Building envelope waterproofing",
  "Foundation waterproofing",
  "Below-grade waterproofing",
  "Deck and plaza waterproofing",
  "Parking structure waterproofing",
  "Caulking and sealants",
  "Drainage systems",
  "Moisture barrier installation",
  "Balcony waterproofing",
  "Expansion joint treatment"
];

const waterproofingTypes = [
  {
    title: "Below-Grade Waterproofing",
    description: "Protection for foundations and basement walls against hydrostatic pressure and groundwater infiltration.",
    icon: Layers
  },
  {
    title: "Above-Grade Wall Systems",
    description: "Weather-resistant barriers for exterior walls preventing wind-driven rain penetration.",
    icon: Building2
  },
  {
    title: "Plaza & Deck Waterproofing",
    description: "Heavy-duty membrane systems for pedestrian and vehicular traffic areas over occupied spaces.",
    icon: Layers
  },
  {
    title: "Foundation Waterproofing",
    description: "Comprehensive foundation protection including positive-side and negative-side applications.",
    icon: Home
  },
  {
    title: "Balcony Waterproofing",
    description: "Specialized systems for balconies and terraces with proper drainage and membrane protection.",
    icon: Droplets
  },
  {
    title: "Parking Structure Waterproofing",
    description: "Traffic-bearing membrane systems designed for vehicular loads and chemical exposure.",
    icon: Factory
  }
];

const faqs = [
  {
    question: "What is exterior waterproofing and why is it important in Tampa?",
    answer: "Exterior waterproofing encompasses all protective systems applied to building surfaces to prevent water infiltration. In Tampa's subtropical climate with over 50 inches of annual rainfall, hurricane-driven rains, and high humidity, waterproofing is essential for protecting structures from moisture damage, mold growth, structural deterioration, and costly repairs. Proper exterior waterproofing extends building lifespan and maintains property values."
  },
  {
    question: "What types of buildings need professional waterproofing in Florida?",
    answer: "All building types in Florida benefit from professional waterproofing, including commercial high-rises, parking structures, condominiums, hotels, hospitals, retail centers, and single-family homes. Florida's unique climate conditions—high water tables, intense UV exposure, salt air near coasts, and frequent storms—make waterproofing particularly critical for any structure. Buildings with below-grade spaces, plaza decks, balconies, or parking garages require specialized waterproofing systems."
  },
  {
    question: "How long does commercial waterproofing last?",
    answer: "Quality commercial waterproofing systems typically last 15-25 years or more when properly installed and maintained. Premium sheet membranes and liquid-applied systems from manufacturers like Sika, BASF, and Tremco often carry 20-year warranties. Longevity depends on system selection, installation quality, environmental exposure, and maintenance. Regular inspections and prompt repairs of minor issues can extend waterproofing system life significantly."
  },
  {
    question: "What is below-grade waterproofing?",
    answer: "Below-grade waterproofing protects building components that are below ground level, including foundations, basement walls, and underground parking structures. These areas face hydrostatic pressure from groundwater and require robust waterproofing systems. Common below-grade waterproofing methods include bentonite clay systems, sheet membranes, liquid-applied membranes, and drainage boards. In Florida's high water table conditions, below-grade waterproofing is critical for any structure with underground components."
  },
  {
    question: "What is the difference between waterproofing and damp-proofing?",
    answer: "Waterproofing creates a complete barrier against water under hydrostatic pressure, while damp-proofing only resists moisture in the absence of pressure. Waterproofing uses flexible membranes that bridge cracks and remain effective under water pressure. Damp-proofing typically uses asphalt-based coatings that can crack and degrade over time. In Florida, where high water tables create hydrostatic pressure, true waterproofing is almost always necessary rather than simple damp-proofing."
  },
  {
    question: "How much does commercial waterproofing cost in Tampa?",
    answer: "Commercial waterproofing costs vary significantly based on project scope, system selection, surface preparation requirements, and accessibility. Projects typically range from $50,000 to several million dollars for large commercial buildings. Florida Construction Specialists specializes in projects $50,000 and above, providing detailed cost breakdowns during the pre-construction phase. We work with property owners to develop waterproofing solutions that balance performance requirements with budget constraints."
  },
  {
    question: "Do you provide warranties on waterproofing work?",
    answer: "Yes, all our waterproofing projects include comprehensive warranty coverage. This includes manufacturer warranties on materials (typically 10-20 years depending on the system) plus our workmanship warranty. We only use premium products from manufacturers like Sika, BASF, Tremco, and Carlisle that stand behind their systems. Complete warranty documentation is provided at project completion, and we offer maintenance programs to help preserve warranty coverage."
  },
  {
    question: "What areas in Florida do you service for waterproofing projects?",
    answer: "Florida Construction Specialists provides exterior waterproofing services throughout the Tampa Bay region, including Tampa, St. Petersburg, Clearwater, Sarasota, Lakeland, and surrounding areas. We handle commercial and residential waterproofing projects across Hillsborough, Pinellas, Pasco, Manatee, and Polk counties. Our team regularly completes projects throughout Central Florida and can accommodate larger projects statewide."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Exterior Waterproofing", href: "/exterior-waterproofing/" },
];

const manufacturers = [
  { name: "Sika", specialty: "Liquid-applied membranes, sealants, concrete repair" },
  { name: "BASF", specialty: "Below-grade systems, crystalline waterproofing" },
  { name: "Tremco", specialty: "Air barriers, traffic coatings, sealants" },
  { name: "Carlisle", specialty: "Sheet membranes, plaza deck systems" },
  { name: "Henry", specialty: "Building envelope solutions, vapor barriers" },
  { name: "GCP Applied Technologies", specialty: "Below-grade waterproofing, drainage" }
];

export default function ExteriorWaterproofingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Exterior Waterproofing Tampa"
        serviceDescription="Comprehensive exterior waterproofing services for commercial and residential buildings throughout Tampa Bay. Premium building waterproofing Florida solutions including foundation, plaza deck, and parking structure waterproofing from experienced commercial waterproofing contractors."
        minPrice="50000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "Exterior Waterproofing", href: "/exterior-waterproofing/" },
      ]} />

      {/* Hero Section - Targeting "exterior waterproofing Tampa", "building waterproofing Florida" */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
            alt="Exterior waterproofing Tampa - Balcony reconstruction and waterproofing services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Commercial & Residential Waterproofing Contractor</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Exterior Waterproofing Tampa &amp; Building Waterproofing Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Florida Construction Specialists delivers comprehensive exterior waterproofing solutions for commercial and residential buildings throughout Tampa Bay. As your trusted commercial waterproofing contractor, we protect properties from Florida's demanding climate with premium waterproofing systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Waterproofing Consultation
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
              <span className="font-semibold text-gray-700">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$25M+ Completed Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Premium Waterproofing Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary Section - 300 words */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading text-center">
              Tampa Bay's Trusted Waterproofing Experts
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Florida Construction Specialists has established itself as the Tampa Bay region's premier commercial waterproofing contractor, delivering comprehensive building waterproofing Florida solutions for over two decades. Our expertise spans the full spectrum of exterior waterproofing applications, from high-rise building envelopes to below-grade foundation systems, parking structure waterproofing, and residential property protection.
              </p>
              <p>
                As a prime general contractor—never a subcontractor—we maintain complete project accountability from initial consultation through final completion. This direct control ensures quality waterproofing installations that meet the demanding requirements of Florida's subtropical climate. Our in-house engineering capabilities, OSHA-certified safety associates, and partnerships with premium manufacturers like Sika, BASF, Tremco, and Carlisle, enable us to design and install waterproofing systems tailored to each project's specific requirements.
              </p>
              <p>
                With over $25 million in completed projects throughout the Tampa Bay area, our portfolio demonstrates proven success across diverse applications including condominium restoration, commercial building envelope waterproofing, parking structure rehabilitation, plaza deck systems, and comprehensive foundation waterproofing. We specialize in projects ranging from $50,000 to $25 million or more, bringing the resources, expertise, and financial stability required for successful waterproofing installations.
              </p>
              <p>
                Our commitment to excellence extends beyond installation. We provide detailed waterproofing assessments, thorough surface preparation, quality-controlled application processes, and complete warranty documentation. Whether protecting a new construction project or rehabilitating an existing structure, Florida Construction Specialists delivers waterproofing solutions that provide lasting protection against water infiltration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-large.webp"
        alt="Professional waterproofing application in Tampa Bay"
        title="Complete Building Protection"
        subtitle="From foundation to rooftop, we defend your investment against moisture"
      />

      {/* Understanding Building Envelope Waterproofing - 800 words */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Understanding Building Envelope Waterproofing
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">What Is the Building Envelope?</h3>
                <p className="text-gray-600 mb-4">
                  The building envelope represents the physical separation between a structure's interior conditioned space and the exterior environment. This critical system includes all components that form the barrier against water, air, heat, light, and noise: exterior walls, windows, doors, roofing systems, foundations, and below-grade elements. Every joint, penetration, and transition point within this envelope represents a potential vulnerability to water infiltration.
                </p>
                <p className="text-gray-600 mb-4">
                  A properly designed and constructed building envelope must perform multiple functions simultaneously. It must prevent liquid water penetration from rain, groundwater, and surface runoff. It must control water vapor transmission to prevent condensation within wall assemblies. It must resist air infiltration that can carry moisture-laden air into building cavities. And it must accommodate thermal movement and building settling without compromising its protective function.
                </p>
                <p className="text-gray-600">
                  In Florida's demanding climate, the building envelope faces extreme challenges. Intense UV radiation degrades materials over time. Hurricane-force winds drive rain horizontally against vertical surfaces. High humidity levels maintain constant moisture exposure. And coastal salt air accelerates corrosion and material breakdown. Understanding these demands is essential for designing effective waterproofing systems.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Why Waterproofing Matters in Florida</h3>
                <p className="text-gray-600 mb-4">
                  Florida's unique climate creates waterproofing challenges found nowhere else in the continental United States. The state receives over 50 inches of rainfall annually, much of it delivered in intense afternoon thunderstorms that dump several inches within hours. This rainfall, combined with the peninsula's high water table, creates constant hydrostatic pressure against below-grade building components.
                </p>
                <p className="text-gray-600 mb-4">
                  Beyond routine rainfall, Florida buildings must withstand tropical storms and hurricanes that generate sustained winds exceeding 100 mph. These extreme events drive rain horizontally, forcing water into joints, around windows, and through any imperfection in the building envelope. Standard waterproofing approaches designed for typical weather conditions often fail dramatically during these high-stress events.
                </p>
                <p className="text-gray-600 mb-4">
                  The consequences of waterproofing failure extend far beyond nuisance leaks. Water infiltration promotes mold growth, creating health hazards and triggering expensive remediation requirements. Moisture penetrating reinforced concrete initiates rebar corrosion, leading to concrete spalling and structural compromise. Water damage to interior finishes, contents, and building systems generates costly repairs and business interruptions.
                </p>
                <p className="text-gray-600">
                  For commercial properties, waterproofing failures create liability exposure, code compliance issues, and negative impacts on property values and tenant satisfaction. The cost of proper waterproofing during construction or timely rehabilitation is invariably less than the cumulative costs of repeated water damage repairs.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Common Failure Points</h3>
                <p className="text-gray-600 mb-4">
                  Understanding where waterproofing systems typically fail enables more effective prevention strategies. Transitions between different materials and building components represent the most common failure locations. Where horizontal surfaces meet vertical walls, where windows and doors meet surrounding walls, and where dissimilar materials join, differential movement and installation complexities increase failure risk.
                </p>
                <p className="text-gray-600 mb-4">
                  Expansion joints and control joints present particular challenges. These intentional gaps accommodate building movement but must be properly sealed to prevent water entry. Many expansion joint failures result from improper sealant selection, inadequate joint preparation, or failure to account for expected movement ranges.
                </p>
                <p className="text-gray-600 mb-4">
                  Penetrations through the building envelope—including mechanical, electrical, and plumbing systems—create waterproofing vulnerabilities. Pipes, conduits, vents, and equipment supports that pass through waterproofed surfaces require careful detailing with compatible flashing and sealant systems.
                </p>
                <p className="text-gray-600">
                  Below-grade waterproofing frequently fails at footing-to-wall transitions, changes in foundation elevation, and locations where utilities penetrate foundation walls. Inadequate drainage systems that fail to relieve hydrostatic pressure can overwhelm otherwise adequate waterproofing membranes.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Prevention vs. Remediation</h3>
                <p className="text-gray-600 mb-4">
                  The most cost-effective waterproofing strategy is always prevention—installing appropriate systems during original construction before problems develop. Positive-side waterproofing applied to exterior surfaces before backfilling provides superior protection compared to negative-side treatments applied after problems occur.
                </p>
                <p className="text-gray-600 mb-4">
                  However, many buildings require waterproofing remediation due to original construction deficiencies, system deterioration over time, or changes in site conditions. Remediation projects require thorough investigation to identify all water entry points and understand the complete water path from entry to visible damage.
                </p>
                <p className="text-gray-600 mb-4">
                  Successful remediation often requires more extensive intervention than property owners anticipate. Surface treatments and cosmetic repairs may temporarily reduce water infiltration but rarely provide lasting solutions. Effective remediation typically requires removing finishes to expose substrates, addressing underlying conditions, and installing comprehensive waterproofing systems.
                </p>
                <p className="text-gray-600">
                  Florida Construction Specialists approaches each project—whether new construction or remediation—with comprehensive assessment, appropriate system selection, and meticulous installation. Our experience with both prevention and remediation projects provides valuable perspective on designing waterproofing systems that perform over the long term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Waterproofing Systems - 1,000 words */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading text-center">
            Types of Waterproofing Systems
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Florida Construction Specialists installs comprehensive waterproofing systems for every building application. Our expertise spans below-grade to above-grade systems, from foundations to rooftop plaza decks.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {waterproofingTypes.map((type, index) => (
              <div key={index} className="card p-6">
                <type.icon className="w-12 h-12 text-brand-green mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-brand-green-bg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Below-Grade Waterproofing</h3>
              <p className="text-gray-600 mb-4">
                Below-grade waterproofing protects all building components installed below ground level, where hydrostatic pressure from groundwater creates demanding conditions. In Florida's high water table environment, below-grade waterproofing is essential for foundations, basement walls, below-grade parking structures, and underground mechanical spaces.
              </p>
              <p className="text-gray-600 mb-4">
                Effective below-grade waterproofing systems must withstand continuous water pressure from groundwater while accommodating concrete curing, shrinkage, and thermal movement. System selection depends on water table conditions, soil characteristics, structural design, and long-term performance requirements. Common approaches include sheet membrane systems, liquid-applied membranes, bentonite clay systems, and cementitious waterproofing.
              </p>
              <p className="text-gray-600">
                Drainage systems work in conjunction with waterproofing membranes to relieve hydrostatic pressure and channel water away from building components. Drainage boards, perimeter drains, and sump pump systems reduce the water load on waterproofing systems and extend their service life.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Above-Grade Wall Systems</h3>
              <p className="text-gray-600 mb-4">
                Above-grade wall waterproofing protects building exteriors from wind-driven rain, air infiltration, and moisture vapor transmission. Florida's severe weather events require wall systems capable of resisting hurricane-force wind pressures while maintaining their waterproofing integrity.
              </p>
              <p className="text-gray-600 mb-4">
                Fluid-applied air and water barrier systems provide seamless protection across wall substrates, around penetrations, and at transitions. These systems bond directly to sheathing materials and form continuous barriers without joints or seams that could fail under wind pressure.
              </p>
              <p className="text-gray-600">
                Integration with window and door flashings, through-wall flashings at floor lines, and connections to below-grade waterproofing creates complete envelope protection. Proper detailing at these transitions often determines overall system performance during severe weather events.
              </p>
            </div>

            <div className="bg-brand-green-bg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Plaza and Deck Waterproofing</h3>
              <p className="text-gray-600 mb-4">
                Plaza deck waterproofing protects structural concrete decks that support pedestrian traffic, landscaping, or vehicular use over occupied spaces below. These demanding applications require waterproofing systems that resist traffic wear, accommodate thermal movement, and provide reliable protection for spaces beneath the deck.
              </p>
              <p className="text-gray-600 mb-4">
                Hot-applied rubberized asphalt systems, cold-applied sheet membranes, and liquid-applied traffic coatings each offer advantages for specific applications. System selection considers traffic type and intensity, aesthetic requirements, maintenance access, and long-term performance expectations.
              </p>
              <p className="text-gray-600">
                Proper drainage design is critical for plaza deck performance. Ponding water accelerates membrane deterioration and increases leak risk. Drainage systems including area drains, perimeter drains, and properly sloped surfaces ensure water moves efficiently off the waterproofing membrane.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Foundation Waterproofing</h3>
              <p className="text-gray-600 mb-4">
                Foundation waterproofing protects the most critical structural elements of any building. Foundation systems support the entire structure and are typically inaccessible for repair after construction completion. This makes proper original waterproofing essential—foundation waterproofing failures often require extensive excavation to access and repair.
              </p>
              <p className="text-gray-600 mb-4">
                Positive-side waterproofing applied to the exterior face of foundation walls before backfilling provides superior protection by intercepting water before it contacts the foundation concrete. Negative-side waterproofing applied to interior surfaces can address water infiltration in existing structures but does not prevent water from contacting and potentially degrading the concrete.
              </p>
              <p className="text-gray-600">
                Foundation waterproofing Tampa Bay projects must account for the region's high water table, frequent heavy rainfall, and sandy soils that conduct water readily to foundation surfaces. Comprehensive systems include membrane waterproofing, drainage boards, perimeter drain systems, and interior drainage provisions for belt-and-suspenders protection.
              </p>
            </div>

            <div className="bg-brand-green-bg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Balcony Waterproofing</h3>
              <p className="text-gray-600 mb-4">
                Balcony waterproofing presents unique challenges in Florida's climate. These small horizontal surfaces collect significant rainfall, experience extreme temperature variations from sun exposure, and often cantilever over building exteriors where water infiltration can cause visible damage and structural concerns.
              </p>
              <p className="text-gray-600 mb-4">
                Effective balcony waterproofing requires proper slope to drains or edges, durable waterproof membranes, and careful flashing integration with adjacent wall systems. Traffic coatings or protected membrane systems with appropriate walking surfaces must accommodate foot traffic while maintaining waterproof integrity.
              </p>
              <p className="text-gray-600">
                Balcony-to-wall transitions are particularly critical. Improper flashing at these locations allows water entry that damages interior spaces and can cause structural corrosion where reinforcing steel connects to the main building structure. Our balcony restoration projects consistently find original construction deficiencies at these critical details.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Parking Structure Waterproofing</h3>
              <p className="text-gray-600 mb-4">
                Parking structure waterproofing requires systems capable of resisting vehicular traffic loads, chemical exposure from vehicle fluids and deicing salts, and the thermal stresses of open or partially enclosed structures. Waterproofing failures in parking structures typically lead to reinforcing steel corrosion and concrete spalling—expensive problems that interrupt parking operations.
              </p>
              <p className="text-gray-600 mb-4">
                Traffic-bearing membrane systems for parking structures include polyurethane traffic coatings, epoxy systems, and sheet membrane systems with protective wearing courses. System selection depends on traffic volume, slope conditions, aesthetic requirements, and maintenance capabilities.
              </p>
              <p className="text-gray-600">
                Expansion joint treatment in parking structures requires particular attention. Joint systems must accommodate significant thermal movement while resisting traffic loads and maintaining watertight seals. Premature joint sealant failure is among the most common parking structure waterproofing problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/fcs-commercial-exterior-waterproofing/fcs-commercial-exterior-waterproofing-large.webp"
        alt="Commercial waterproofing membrane system"
        title="Premium Waterproofing Materials"
        subtitle="We use only manufacturer-approved systems with proven performance in Florida's climate"
        overlayOpacity={0.55}
      />

      {/* Waterproofing Materials and Methods - 800 words */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading text-center">
              Waterproofing Materials and Methods
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Modern waterproofing technology offers diverse material options for every application. Florida Construction Specialists selects and installs premium systems matched to specific project requirements.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Sheet Membranes</h3>
                <p className="text-gray-600 mb-4">
                  Sheet membrane waterproofing systems provide consistent thickness and reliable performance across large surface areas. Self-adhered modified bitumen sheets, thermoplastic membranes (TPO, PVC), and EPDM rubber membranes each offer specific advantages for different applications.
                </p>
                <p className="text-gray-600 mb-4">
                  Self-adhered sheets bond directly to properly prepared substrates, creating immediate water resistance without requiring cure time. Their factory-controlled thickness ensures consistent coverage, and their flexibility accommodates minor substrate movement.
                </p>
                <p className="text-gray-600">
                  Hot-applied rubberized asphalt sheets provide superior waterproofing for below-grade and plaza deck applications. The heat-welded seams create monolithic bonds stronger than the sheet material itself. These systems are particularly effective where hydrostatic pressure demands maximum reliability.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Liquid-Applied Membranes</h3>
                <p className="text-gray-600 mb-4">
                  Liquid-applied waterproofing membranes cure in place to form seamless, continuous barriers. These systems excel at complex geometries, numerous penetrations, and situations where sheet material application would be difficult or impossible.
                </p>
                <p className="text-gray-600 mb-4">
                  Polyurethane liquid membranes provide excellent flexibility and durability for both below-grade and above-grade applications. They self-level into surface irregularities, bridge hairline cracks, and bond tenaciously to concrete and masonry substrates.
                </p>
                <p className="text-gray-600">
                  Fluid-applied air and water barriers combine waterproofing with air barrier functions in single-application systems. These products are increasingly specified for wall applications where controlling both water and air infiltration is critical for building performance.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Cementitious Coatings</h3>
                <p className="text-gray-600 mb-4">
                  Cementitious waterproofing coatings are portland cement-based products that bond permanently to concrete and masonry substrates. Their cement chemistry makes them highly compatible with concrete surfaces, creating durable bonds that resist delamination.
                </p>
                <p className="text-gray-600 mb-4">
                  These rigid coatings work well on negative-side (interior) applications where flexibility is not required. They effectively seal concrete pores and can handle significant hydrostatic pressure. However, their rigidity limits their effectiveness where crack-bridging capability is needed.
                </p>
                <p className="text-gray-600">
                  Modified cementitious coatings incorporating polymers offer improved flexibility while maintaining the substrate compatibility advantages of cement-based products. These enhanced formulations expand the applications suitable for cementitious waterproofing.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Crystalline Waterproofing</h3>
                <p className="text-gray-600 mb-4">
                  Crystalline waterproofing technology uses reactive chemicals that penetrate concrete and form insoluble crystals within the capillary pores and micro-cracks. This unique mechanism provides "self-healing" capability—the crystals continue forming in the presence of moisture, sealing new cracks as they develop.
                </p>
                <p className="text-gray-600 mb-4">
                  Crystalline products can be applied as surface coatings or mixed directly into fresh concrete. Once activated, the crystalline growth becomes a permanent part of the concrete matrix, providing waterproofing protection that doesn't rely on surface membranes.
                </p>
                <p className="text-gray-600">
                  These systems are particularly valuable for water-retaining structures and applications where membrane damage is likely. Their ability to seal cracks up to 0.4mm provides ongoing protection against concrete shrinkage and minor structural cracking.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Drainage Systems</h3>
                <p className="text-gray-600 mb-4">
                  Drainage systems work in conjunction with waterproofing membranes to relieve hydrostatic pressure and protect membrane surfaces from damage during backfilling. Drainage boards, geocomposite drains, and perimeter drain systems channel water to collection points for removal.
                </p>
                <p className="text-gray-600 mb-4">
                  Dimple board drainage sheets create air gaps against waterproofing membranes, protecting them from puncture during backfilling while providing drainage paths for groundwater. These inexpensive products significantly extend waterproofing membrane service life.
                </p>
                <p className="text-gray-600">
                  Proper drainage design considers soil permeability, anticipated water volumes, and discharge requirements. Undersized drainage systems that cannot handle peak water loads allow pressure buildup that can overwhelm waterproofing membranes.
                </p>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Sealants and Caulking</h3>
                <p className="text-gray-600 mb-4">
                  Joint sealants and caulking compounds fill gaps between building components that cannot be covered with continuous membranes. These flexible materials must accommodate movement while maintaining watertight seals through temperature cycling and building settlement.
                </p>
                <p className="text-gray-600 mb-4">
                  High-performance polyurethane and silicone sealants provide the flexibility and durability required for demanding exterior applications. Proper joint design—including appropriate width-to-depth ratios and backer rod installation—is as important as sealant selection.
                </p>
                <p className="text-gray-600">
                  Traffic-grade sealants for parking structures and plaza decks must resist vehicular wear while maintaining flexibility. These specialized products bridge the gap between standard sealants and traffic-bearing membranes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Waterproofing - 600 words */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-block px-4 py-2 bg-brand-green-bg rounded-full mb-4">
                <span className="text-brand-green font-semibold flex items-center gap-2">
                  <Factory className="w-5 h-5" />
                  Commercial Properties
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Commercial Waterproofing Contractor Services
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists provides comprehensive commercial waterproofing services for the Tampa Bay region's diverse commercial building inventory. Our experience spans high-rise office towers, medical facilities, hospitality properties, retail centers, educational buildings, and industrial facilities—each with unique waterproofing requirements demanding specialized expertise.
              </p>
              <p className="text-gray-600 mb-6">
                As a prime general contractor specializing in projects from $50,000 to $25 million, we bring the resources and financial stability commercial property owners require. Our bonding capacity, comprehensive insurance coverage, and established relationships with premium material suppliers enable us to handle complex commercial waterproofing projects efficiently.
              </p>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">High-Rise Building Waterproofing</h3>
              <p className="text-gray-600 mb-6">
                High-rise buildings present unique waterproofing challenges including extreme wind exposure, significant thermal movement, and complex building envelope systems. Waterproofing these structures requires understanding how different envelope components interact and ensuring continuous protection from foundation to roof.
              </p>
              <p className="text-gray-600 mb-6">
                Our high-rise waterproofing projects address curtain wall systems, window installations, through-wall flashings, and the critical transitions between different envelope components. We coordinate with building engineers to understand structural movement expectations and select waterproofing systems capable of accommodating that movement.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-brand-green-bg rounded-2xl p-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Parking Structure Waterproofing</h3>
                <p className="text-gray-600 mb-4">
                  Parking structure waterproofing protects these essential commercial assets from the moisture damage that leads to structural deterioration. Vehicle traffic, chemical exposure, and weather combine to create demanding conditions for waterproofing systems.
                </p>
                <p className="text-gray-600">
                  Our parking structure waterproofing services include traffic-bearing membrane systems, expansion joint treatment, deck coatings, and comprehensive drainage solutions. We work with property managers to schedule projects that minimize disruption to parking operations while ensuring thorough application.
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Plaza Decks Over Occupied Space</h3>
                <p className="text-gray-600 mb-4">
                  Plaza decks over retail spaces, lobbies, or mechanical areas require fail-safe waterproofing. Leaks damage the spaces below and can interrupt business operations, creating significant liability exposure for property owners.
                </p>
                <p className="text-gray-600">
                  We install premium plaza deck waterproofing systems with proper drainage, protection boards, and wearing surfaces. Our attention to detail at drains, penetrations, and perimeter conditions ensures reliable long-term performance.
                </p>
              </div>

              <div className="bg-brand-green-bg rounded-2xl p-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Expansion Joint Treatment</h3>
                <p className="text-gray-600 mb-4">
                  Expansion joints accommodate building movement but represent significant waterproofing vulnerabilities. Proper expansion joint treatment requires understanding expected movement ranges and selecting appropriate joint systems.
                </p>
                <p className="text-gray-600">
                  Our commercial waterproofing projects include comprehensive expansion joint treatment using compression seals, pourable sealants, or manufactured joint systems as appropriate for each application. We ensure joint systems are compatible with adjacent waterproofing membranes and designed for the specific movement requirements of each joint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/waterproofing/waterproofing-large.webp"
        alt="Waterproofing installation for residential property"
        title="Residential & Commercial Solutions"
        subtitle="Tailored waterproofing systems for every property type"
        overlayOpacity={0.5}
      />

      {/* Residential Waterproofing - 600 words */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Foundation Protection</h3>
                <p className="text-gray-600 mb-4">
                  Residential foundation waterproofing protects homeowners' most significant investment from moisture damage that can compromise structural integrity and create health hazards. Florida's sandy soils and high water table make foundation waterproofing particularly important.
                </p>
                <p className="text-gray-600">
                  Our foundation waterproofing services include exterior membrane application, drainage board installation, perimeter drain systems, and interior drainage solutions when exterior access is limited. We evaluate each property's specific conditions to recommend appropriate protection levels.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Below-Grade Walls</h3>
                <p className="text-gray-600 mb-4">
                  Below-grade living spaces—including basements and lower-level living areas built into slopes—require comprehensive waterproofing to remain dry and comfortable. These spaces face constant moisture exposure from surrounding soils.
                </p>
                <p className="text-gray-600">
                  Effective below-grade wall waterproofing combines exterior membranes with interior drainage systems and dehumidification for complete moisture control. Our approach addresses both liquid water infiltration and water vapor transmission through concrete walls.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Crawl Space Moisture Control</h3>
                <p className="text-gray-600 mb-4">
                  Florida crawl spaces face significant moisture challenges from ground moisture, humidity, and occasional flooding. Uncontrolled moisture promotes mold growth, wood rot, and pest infestations that damage structures and affect indoor air quality.
                </p>
                <p className="text-gray-600">
                  Our crawl space waterproofing solutions include vapor barriers, perimeter drainage, sump pump systems, and encapsulation approaches that transform damp crawl spaces into dry, conditioned areas. We evaluate ventilation strategies and recommend solutions appropriate for each situation.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-brand-green-bg rounded-full mb-4">
                <span className="text-brand-green font-semibold flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Residential Properties
                </span>
              </div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Residential Waterproofing Services
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists extends our waterproofing expertise to residential properties requiring professional-grade solutions. While we specialize in projects $50,000 and above, many residential waterproofing needs—particularly multi-family properties and substantial single-family projects—fall within this range.
              </p>
              <p className="text-gray-600 mb-6">
                Residential waterproofing in Florida addresses unique challenges including high humidity, frequent heavy rainfall, and building designs that often incorporate features like pools, decks, and screened enclosures that complicate waterproofing details.
              </p>

              <div className="bg-brand-green-bg rounded-2xl p-8 mt-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Deck and Balcony Waterproofing</h3>
                <p className="text-gray-600 mb-4">
                  Residential decks and balconies require waterproofing systems that protect structures while accommodating foot traffic and outdoor furniture. Improper waterproofing at these locations causes staining on surfaces below and can lead to structural corrosion.
                </p>
                <p className="text-gray-600 mb-4">
                  Our residential deck waterproofing includes membrane systems with appropriate walking surfaces, proper flashing integration with adjacent walls, and drainage provisions that move water away from the structure. We pay particular attention to deck-to-door thresholds, a common failure point.
                </p>
                <h4 className="font-bold text-brand-green-dark mb-2">Pool Deck Waterproofing</h4>
                <p className="text-gray-600">
                  Pool decks face unique challenges from chemical exposure, frequent wetting, and the waterproofing requirements where decks connect to pool structures. Our pool deck waterproofing ensures proper drainage away from homes while protecting underlying structures from moisture damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Waterproofing Challenges - 600 words */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <CloudRain className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Florida Waterproofing Challenges
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Building waterproofing Florida projects must address environmental conditions found nowhere else in the continental United States. Understanding these unique challenges enables selection of appropriate waterproofing systems and installation methods.
              </p>
            </div>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-brand-green-bg rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-4">High Water Tables</h3>
                  <p className="text-gray-600 mb-4">
                    Florida's water table often lies just a few feet below ground surface, creating constant hydrostatic pressure against below-grade building components. During wet seasons, water tables rise further, increasing pressure on foundation systems.
                  </p>
                  <p className="text-gray-600">
                    This persistent water pressure demands robust waterproofing systems designed specifically for hydrostatic conditions. Simple damp-proofing approaches that work in other regions are typically inadequate for Florida's below-grade applications. Comprehensive drainage systems are essential to relieve pressure and extend waterproofing system life.
                  </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-brand-green-dark mb-4">Hurricane-Driven Rain</h3>
                  <p className="text-gray-600 mb-4">
                    Florida buildings must withstand tropical storms and hurricanes that generate sustained winds exceeding 100 mph combined with torrential rainfall. These extreme events drive rain horizontally, penetrating building envelopes at locations that remain dry during normal weather.
                  </p>
                  <p className="text-gray-600">
                    Waterproofing systems must resist wind-driven rain pressure significantly higher than gravity loads alone. Window flashings, wall penetrations, and wall-to-roof transitions require particular attention to resist infiltration during hurricane conditions. Testing protocols that simulate wind-driven rain help verify system performance.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-brand-green-bg rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">Coastal Salt Exposure</h3>
                  <p className="text-gray-600 mb-3">
                    Salt-laden air from the Gulf of Mexico and Atlantic Ocean accelerates corrosion of metal components and degradation of many waterproofing materials. Coastal properties face particularly aggressive deterioration that shortens waterproofing system service life.
                  </p>
                  <p className="text-gray-600">
                    Material selection for coastal waterproofing applications must account for salt exposure. Non-metallic fasteners, salt-resistant membranes, and corrosion-protective treatments extend system longevity. Regular maintenance including salt washing preserves waterproofing integrity.
                  </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">UV Degradation</h3>
                  <p className="text-gray-600 mb-3">
                    Florida's intense sunlight degrades many waterproofing materials through ultraviolet radiation. Exposed membranes, sealants, and coatings experience accelerated aging that reduces flexibility and causes cracking, checking, and eventual failure.
                  </p>
                  <p className="text-gray-600">
                    UV-resistant formulations and protective coverings extend waterproofing system life in Florida's solar exposure conditions. Light-colored materials that reflect solar radiation run cooler and last longer than dark-colored alternatives in similar exposure conditions.
                  </p>
                </div>

                <div className="bg-brand-green-bg rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">Temperature Cycling</h3>
                  <p className="text-gray-600 mb-3">
                    Daily temperature swings in Florida create thermal cycling stress on waterproofing systems. Dark roof and deck surfaces can reach temperatures exceeding 150°F during summer afternoons, then cool substantially overnight.
                  </p>
                  <p className="text-gray-600">
                    This repeated thermal cycling causes expansion and contraction that stresses waterproofing materials and their bonds to substrates. Joint sealants and membrane flashings are particularly vulnerable to thermal cycling damage. Flexible materials and proper movement accommodation details are essential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Waterproofing Process - 600 words */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Wrench className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                The Waterproofing Process
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Florida Construction Specialists follows a systematic waterproofing process that ensures reliable results. From initial assessment through warranty documentation, each phase builds on the previous to deliver lasting protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { step: "1", title: "Assessment & Testing", desc: "Comprehensive evaluation of existing conditions, moisture testing, and identification of all water entry points and pathways." },
                { step: "2", title: "System Selection", desc: "Engineering analysis to match waterproofing systems to specific project conditions, performance requirements, and budget constraints." },
                { step: "3", title: "Surface Preparation", desc: "Thorough substrate preparation including cleaning, repairs, and priming to ensure proper adhesion and system performance." },
                { step: "4", title: "Application", desc: "Quality-controlled installation by trained applicators following manufacturer specifications and industry best practices." },
                { step: "5", title: "Quality Control", desc: "Inspection, testing, and documentation throughout installation to verify system integrity and specification compliance." },
                { step: "6", title: "Warranty Documentation", desc: "Complete warranty registration, maintenance guidance, and project documentation for long-term protection." }
              ].map((phase) => (
                <div key={phase.step} className="card p-6">
                  <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Assessment and Testing</h3>
                <p className="text-gray-600 mb-4">
                  Effective waterproofing begins with thorough assessment of existing conditions. For remediation projects, this includes identifying all water entry points, understanding water pathways through the building assembly, and evaluating the condition of existing waterproofing components.
                </p>
                <p className="text-gray-600">
                  Our assessment process may include moisture meter testing, flood testing of horizontal surfaces, water spray testing of vertical surfaces, and infrared thermography to identify moisture patterns. For below-grade assessments, we evaluate groundwater conditions and drainage system function. This information guides system selection and scope development.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Surface Preparation</h3>
                <p className="text-gray-600 mb-4">
                  Proper surface preparation is essential for waterproofing system performance. Many waterproofing failures trace back to inadequate substrate preparation rather than material or application deficiencies. Substrates must be clean, sound, and properly profiled for membrane adhesion.
                </p>
                <p className="text-gray-600">
                  Preparation methods vary by substrate type and waterproofing system requirements. Concrete surfaces may require mechanical preparation to remove laitance, contamination, and achieve specified surface profiles. Structural repairs must be completed before waterproofing application. Primers and conditioners appropriate to specific substrates and membrane systems ensure proper adhesion.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">Quality Control and Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Our quality control process includes pre-installation verification of surface preparation, ongoing inspection during application, and post-installation testing as appropriate. We document material lot numbers, application conditions, and coverage rates to support warranty claims if needed.
                </p>
                <p className="text-gray-600">
                  Project completion includes manufacturer warranty registration, as-built documentation showing waterproofing system extents, and maintenance recommendations. This documentation protects property owners and provides guidance for preserving waterproofing system performance over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Manufacturers - 400 words */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <FileCheck className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Premium Waterproofing Manufacturers
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Florida Construction Specialists partners with industry-leading waterproofing manufacturers to deliver systems backed by comprehensive warranties and technical support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {manufacturers.map((mfr, index) => (
                <div key={index} className="card p-6 text-center">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">{mfr.name}</h3>
                  <p className="text-gray-600 text-sm">{mfr.specialty}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-green-bg rounded-2xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">Why Manufacturer Partnerships Matter</h3>
              <p className="text-gray-600 mb-4">
                Our relationships with premium manufacturers like Sika, BASF, Tremco, and Carlisle provide access to advanced waterproofing technologies, technical support resources, and comprehensive warranty programs. These partnerships benefit property owners through system reliability and long-term protection.
              </p>
              <p className="text-gray-600 mb-4">
                Sika offers a complete range of liquid-applied membranes, sealants, and concrete repair products with global technical support. Their systems are specified for demanding commercial applications worldwide. BASF provides innovative below-grade waterproofing solutions and crystalline waterproofing technology.
              </p>
              <p className="text-gray-600 mb-4">
                Tremco leads in air barrier systems and traffic coatings for parking structures and plaza decks. Carlisle offers premium sheet membrane systems with extensive warranty programs. We select from these manufacturers based on specific project requirements.
              </p>
              <p className="text-gray-600">
                Manufacturer warranty programs typically include material warranties of 10-20 years depending on the system. Extended warranties and labor-inclusive warranties are available for qualifying projects. We assist property owners with warranty registration and documentation to ensure coverage is properly established.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Complete Exterior Waterproofing Services
              </h2>
              <p className="text-gray-600 mb-6">
                Florida Construction Specialists delivers comprehensive exterior waterproofing services throughout the Tampa Bay region. As a prime general contractor, we maintain full project control and accountability from pre-construction through final completion.
              </p>
              <p className="text-gray-600 mb-6">
                Our experienced team has completed over $25 million in projects, bringing the expertise and resources needed for projects ranging from $50,000 to $25 million or more.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Our Exterior Waterproofing Services Include:
              </h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Choose FCS for Exterior Waterproofing?
            </h2>
            <p className="text-gray-600">
              Florida Construction Specialists is always the prime contractor—never a subcontractor. We bring 20+ years of experience and $25M+ in completed projects to every waterproofing job.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center p-6">
              <Shield className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Prime Contractor</h3>
              <p className="text-gray-600">Direct accountability and project control on every waterproofing job.</p>
            </div>
            <div className="card text-center p-6">
              <Award className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Proven Track Record</h3>
              <p className="text-gray-600">$25M+ in completed projects throughout Tampa Bay.</p>
            </div>
            <div className="card text-center p-6">
              <Building2 className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Large-Scale Expertise</h3>
              <p className="text-gray-600">Specializing in projects from $50,000 to $25M+.</p>
            </div>
            <div className="card text-center p-6">
              <Droplets className="w-12 h-12 text-brand-green mx-auto mb-4" />
              <h3 className="font-bold text-brand-green-dark text-lg mb-2">Premium Systems</h3>
              <p className="text-gray-600">Partnered with Sika, BASF, Tremco, and Carlisle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <MapPin className="w-16 h-16 text-brand-green mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Exterior Waterproofing Service Areas
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Florida Construction Specialists provides exterior waterproofing services throughout the greater Tampa Bay region and Central Florida. Our service area includes:
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
            {["Tampa", "St. Petersburg", "Clearwater", "Sarasota", "Lakeland", "Brandon", "Palm Harbor", "Bradenton", "Winter Haven", "Plant City"].map((city) => (
              <div key={city} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-semibold text-brand-green-dark">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600">
            Serving Hillsborough, Pinellas, Pasco, Manatee, and Polk Counties
          </p>
        </div>
      </section>

      <ServiceAreaLinks service="exterior-waterproofing" serviceName="Exterior Waterproofing" />

      {/* FAQ */}
      <FAQWithSchema items={faqs} title="Exterior Waterproofing FAQs" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Start Your Exterior Waterproofing Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a comprehensive waterproofing consultation. As your trusted commercial waterproofing contractor in Tampa Bay, we specialize in projects $50,000 and above.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
