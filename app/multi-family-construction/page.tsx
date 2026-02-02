import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, DollarSign, Users, Hammer, Droplets, MapPin, HelpCircle, FileCheck, Home, Building, Landmark, Waves, Sun, Wind, AlertTriangle } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceAreaLinks } from "@/components/InternalLinks";
import { ContentParallax } from "@/components/ContentImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Family Construction Tampa | Apartment & Condo Builder Florida | FCS",
  description: "Tampa Bay's premier multi-family construction contractor. 40+ years building condos, apartments, townhomes & mixed-use developments. Projects $1M-$50M+. Licensed, bonded, in-house engineering.",
  keywords: "multi-family construction Tampa, apartment construction Florida, condo construction Tampa Bay, multi-family general contractor, apartment building contractor Florida, condominium builder Tampa",
};

const comprehensiveFaqs = [
  {
    question: "How long does multi-family construction typically take in Tampa Bay?",
    answer: "Multi-family construction timelines in Tampa Bay vary based on project scope. Garden-style apartments (2-3 stories, 50-100 units) typically take 12-18 months. Mid-rise buildings (4-8 stories) require 18-24 months, while high-rise condominiums can take 24-36 months. These timelines include pre-construction, permitting (which can take 3-6 months in Florida), and construction. Our CPM scheduling ensures we hit milestones and minimize delays."
  },
  {
    question: "What permits are required for multi-family construction in Florida?",
    answer: "Multi-family construction in Florida requires numerous permits including: building permits from local jurisdiction, site development permits, environmental permits (especially in wetland areas), SWFWMD (Southwest Florida Water Management District) permits for stormwater, fire department approvals, health department permits for pools/kitchens, elevator permits, and utility connection permits. For projects in flood zones, FEMA elevation certificates are required. Our team manages all permitting to ensure compliance."
  },
  {
    question: "How do you coordinate with HOAs during condo construction or renovation?",
    answer: "For existing condo associations, we begin with thorough board and owner communication plans. We present detailed project scopes at board meetings, provide written schedules to all owners, establish dedicated project contacts, coordinate work hours around resident needs, implement noise and dust mitigation measures, provide regular progress updates, and maintain clean, safe access throughout the project. Our HOA coordination experience includes dozens of successful condo association projects."
  },
  {
    question: "Can you build multi-family projects in phases to maintain cash flow?",
    answer: "Yes, phased construction is common for multi-family developments. We can structure projects to complete and occupy buildings in phases, allowing rental income or unit sales to fund subsequent phases. This approach requires careful master planning to ensure infrastructure supports all phases, but it's an effective strategy for managing capital. We've successfully completed numerous phased developments throughout Tampa Bay."
  },
  {
    question: "What's the difference between Type I and Type V construction for apartments?",
    answer: "Type I construction uses non-combustible materials (steel and concrete) throughout, allowing unlimited height and area—ideal for high-rise condos. Type V construction uses wood framing and is limited to 3-4 stories in Florida, making it cost-effective for garden-style apartments. Type III (non-combustible exterior, wood interior) is a middle ground often used for mid-rise buildings. We help owners select the optimal construction type based on project goals, budget, and local requirements."
  },
  {
    question: "How do Florida's hurricane requirements affect multi-family construction costs?",
    answer: "Hurricane requirements add approximately 5-15% to construction costs compared to non-coastal states. This includes impact-resistant windows and doors, enhanced roof tie-downs, reinforced concrete construction, hurricane straps throughout the structure, and backup power systems. However, these investments significantly reduce insurance costs over time and provide crucial protection. We view hurricane resistance as essential, not optional, for Florida construction."
  },
  {
    question: "What amenities do you build for multi-family communities?",
    answer: "We construct comprehensive amenity packages including clubhouses, fitness centers, swimming pools and pool houses, outdoor kitchens and grilling areas, dog parks, playgrounds, business centers, package rooms, bike storage, electric vehicle charging stations, parking structures, and landscaped common areas. Amenity design is tailored to your target market—student housing needs different amenities than senior living or luxury condominiums."
  },
  {
    question: "Do you handle both new construction and renovation of existing multi-family buildings?",
    answer: "Yes, we provide both ground-up multi-family construction and renovation/restoration of existing buildings. Our renovation expertise includes complete building envelope restoration, balcony reconstruction, window replacement, roof replacement, MEP system upgrades, ADA compliance updates, and interior common area renovations. Many of our projects involve transforming older properties into modern, competitive communities."
  },
  {
    question: "What financing options are available for multi-family construction?",
    answer: "Multi-family construction typically uses construction loans that convert to permanent financing upon completion. FHA, Fannie Mae, and Freddie Mac offer programs for qualified projects. Our proven track record allows us to easily access construction financing, and we have heavy experience capturing preservation and restoration grants for qualifying historic or affordable housing projects. We can help connect you with lenders experienced in multi-family financing."
  },
  {
    question: "How do you ensure quality across hundreds of identical units?",
    answer: "Quality consistency requires systematic approaches: detailed specifications with approved product lists, model unit approval before mass production, rigorous QA/QC inspections at each phase, standardized checklists for every trade, dedicated quality control personnel, and third-party inspections at critical milestones. We use technology including digital inspection tracking and photo documentation to ensure every unit meets our standards."
  },
  {
    question: "What is the cost per unit for multi-family construction in Tampa Bay?",
    answer: "Multi-family construction costs in Tampa Bay typically range from $150-$250 per square foot, or $120,000-$200,000+ per unit depending on finishes and amenities. Garden-style apartments are most economical, mid-rise buildings cost moderately more, and high-rise condominiums with luxury finishes can exceed $300 per square foot. Land, parking requirements, and amenity packages significantly impact total per-unit costs. We provide detailed budgeting during pre-construction."
  },
  {
    question: "Do you have experience with AHCA requirements for assisted living construction?",
    answer: "Yes, we have experience navigating Agency for Health Care Administration (AHCA) requirements for assisted living and senior care facilities. These include specific life safety requirements, generator backup for medical equipment, nurse call systems, accessible design beyond standard ADA, commercial kitchen requirements, medication storage, and specialized fire suppression. Our team understands the licensing implications of construction decisions in healthcare settings."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Multi-Family Construction", href: "/multi-family-construction/" },
];

export default function MultiFamilyConstructionPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Multi-Family Construction"
        serviceDescription="Tampa Bay's premier multi-family construction contractor. 40+ years building condominiums, apartment complexes, townhomes, senior living facilities, and mixed-use developments. Projects from $1M to $50M+."
        minPrice="1000000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "Multi-Family Construction", href: "/multi-family-construction/" },
      ]} />

      {/* Enhanced Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Multi-family construction project in Tampa Bay Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/95 via-brand-green-forest/90 to-brand-green-dark/95" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">Projects $1M - $50M+ | 40+ Years Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Multi-Family Construction Tampa Bay
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl">
              Florida&apos;s Trusted Apartment &amp; Condominium Builder
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From luxury condominiums and garden-style apartments to senior living facilities and mixed-use developments, Florida Construction Specialists delivers multi-family projects that exceed expectations. As your prime general contractor, we bring in-house engineering, insurance restoration expertise, and four decades of Florida construction experience to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Schedule Project Consultation
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
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">300+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor Only</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">40+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Why Choose Florida Construction Specialists for Multi-Family Construction?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Florida Construction Specialists (FCS) stands apart in the Tampa Bay multi-family construction market through our unwavering commitment to serving as the prime contractor on every project. We never work as a subcontractor—this means you get direct accountability, streamlined communication, and a single point of responsibility from groundbreaking to ribbon cutting.
              </p>
              <p className="leading-relaxed mb-6">
                Our multi-family construction expertise spans the full spectrum of residential development: luxury high-rise condominiums overlooking Tampa Bay, garden-style apartment communities, townhome developments, senior living facilities licensed by AHCA, student housing near Florida&apos;s universities, and mixed-use projects integrating residential over retail. With projects ranging from $1 million to $50 million and beyond, we bring the resources, bonding capacity, and technical expertise that complex multi-family projects demand.
              </p>
              <p className="leading-relaxed mb-6">
                What truly distinguishes FCS is our in-house engineering capability and deep insurance restoration expertise. Many multi-family projects involve existing structures requiring assessment, remediation, or restoration—whether addressing hurricane damage, concrete deterioration, balcony failures, or building envelope issues. Our engineering team provides structural analysis, waterproofing design, and construction solutions under one roof, eliminating finger-pointing between consultants and contractors.
              </p>
              <p className="leading-relaxed">
                FCS is a merging of Florida Restoration Team and Shamblin Construction, large-scale general contractors that have operated in Florida since 1982. This heritage means we understand Florida&apos;s unique construction challenges: hurricane-resistant building requirements, flood zone construction, the corrosive coastal environment, and the regulatory landscape from local building departments to state agencies. When you choose FCS, you&apos;re partnering with a contractor that has successfully navigated every challenge Florida construction presents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <ContentParallax
        src="/images/tampa-multifamily-housing-construction/tampa-multifamily-housing-construction-small.webp"
        alt="Multi-family construction in Tampa Bay"
        title="Building Tampa Bay's Communities"
        subtitle="40+ years of multi-family construction excellence"
        overlayOpacity={0.6}
      />

      {/* Types of Multi-Family Construction */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Types of Multi-Family Construction We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From market-rate apartments to luxury condominiums, our experience spans every multi-family building type in Florida&apos;s diverse residential market.
            </p>
          </div>

          {/* Condominiums */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-brand-green" />
                  <h3 className="text-2xl font-bold text-brand-green-dark font-heading">Condominium Construction</h3>
                </div>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Condominium construction represents one of our core competencies, encompassing everything from boutique mid-rise buildings to towering high-rise developments along Florida&apos;s coastlines. Unlike apartment construction where a single owner retains all units, condominiums involve individual unit ownership with shared common elements—a structure that demands exceptional attention to quality since each unit must satisfy a distinct buyer.
                  </p>
                  <p>
                    Our condo construction expertise includes market-rate condominiums serving first-time buyers and young professionals, luxury condominiums with premium finishes, smart home technology, and resort-style amenities, mid-rise buildings (4-8 stories) utilizing Type III construction for cost efficiency, and high-rise towers utilizing reinforced concrete construction for the structural demands of 10+ story buildings.
                  </p>
                  <p>
                    Florida&apos;s condominium market has unique considerations, particularly in the post-Surfside regulatory environment. We construct with full awareness of the milestone inspection requirements, structural reserve obligations, and enhanced documentation standards now expected. Our in-house engineering capability is particularly valuable for condominium projects, providing structural design oversight and the documentation future milestone inspections will require.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-brand-green-dark mb-4">Condominium Construction Highlights:</h4>
                <ul className="space-y-3">
                  {["Individual ownership documentation requirements", "Premium finish standards for buyer satisfaction", "HOA common element construction", "Milestone inspection compliance", "Structural reserve documentation", "Luxury amenity integration"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Apartment Complexes */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-8 h-8 text-brand-green" />
                  <h3 className="text-2xl font-bold text-brand-green-dark font-heading">Apartment Complex Construction</h3>
                </div>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Apartment complex construction focuses on rental communities where a single ownership entity retains all units. This ownership structure allows different construction approaches than condominiums—durability and maintenance efficiency often take precedence over individual unit customization. Our apartment construction spans garden-style, mid-rise, and high-rise configurations throughout Tampa Bay.
                  </p>
                  <p>
                    Garden-style apartments (2-3 stories, typically Type V wood-frame construction) remain popular for suburban locations where land costs allow lower density development. These communities often feature abundant surface parking, extensive landscaping, and distributed amenity buildings. Mid-rise apartments (4-8 stories) maximize density on tighter sites while maintaining construction cost efficiency through Type III construction methods.
                  </p>
                  <p>
                    High-rise apartment towers serve urban infill locations where land values justify the premium construction costs of Type I concrete and steel buildings. These projects demand sophisticated systems integration, from parking structures to vertical transportation to life safety systems. Our experience with Tampa&apos;s urban apartment market gives us the technical expertise these complex projects require.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg lg:order-1">
                <h4 className="font-bold text-brand-green-dark mb-4">Apartment Construction Capabilities:</h4>
                <ul className="space-y-3">
                  {["Garden-style communities (2-3 stories)", "Mid-rise buildings (4-8 stories)", "High-rise towers (10+ stories)", "Single ownership optimization", "Maintenance-efficient design", "Amenity-rich communities"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Townhomes */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-brand-green" />
                  <h3 className="text-2xl font-bold text-brand-green-dark font-heading">Townhome Development Construction</h3>
                </div>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Townhome developments bridge the gap between single-family homes and traditional apartments, offering multi-story living with private entrances and often including small yards or patios. These attached-dwelling communities appeal to buyers seeking homeownership without the full maintenance responsibilities of detached homes, making them increasingly popular in Tampa Bay&apos;s active housing market.
                  </p>
                  <p>
                    Our townhome construction includes fee-simple developments where buyers own both the structure and underlying land, and condominium-structured townhomes where common elements are shared. Each structure has different construction documentation requirements, HOA implications, and buyer expectations. We help developers select the optimal ownership structure for their market and manage the construction accordingly.
                  </p>
                  <p>
                    Townhome construction in Florida must address fire separation requirements between units, sound transmission between attached dwellings, hurricane-resistant construction for each unit&apos;s individual roof system, and efficient site utilization for parking and common areas. Our experience encompasses traditional row-style townhomes, stacked flats, and hybrid configurations that maximize density while maintaining livability.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-brand-green-dark mb-4">Townhome Development Services:</h4>
                <ul className="space-y-3">
                  {["Fee-simple and condo-structured townhomes", "Fire separation and sound attenuation", "Individual hurricane-resistant systems", "Private entrance and garage construction", "Common area development", "HOA infrastructure installation"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Senior Living */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-brand-green" />
                  <h3 className="text-2xl font-bold text-brand-green-dark font-heading">Senior Living &amp; Assisted Living Construction</h3>
                </div>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Senior living construction encompasses a spectrum of care levels: independent living communities for active seniors, assisted living facilities providing daily living support, memory care units for residents with cognitive impairment, and skilled nursing facilities offering medical care. Each level has distinct construction requirements, with assisted living and higher care levels regulated by Florida&apos;s Agency for Health Care Administration (AHCA).
                  </p>
                  <p>
                    AHCA-licensed facilities must meet stringent construction standards beyond typical multi-family requirements. These include emergency generator systems with specific runtime capacities, nurse call systems throughout resident areas, medication storage and dispensing rooms meeting pharmaceutical standards, commercial kitchens meeting health department requirements, enhanced fire suppression and alarm systems, and accessibility features exceeding standard ADA requirements.
                  </p>
                  <p>
                    Our senior living construction experience includes independent living apartments and cottages, assisted living facilities with memory care wings, and renovation of existing structures to meet AHCA licensing requirements. We understand that construction decisions in these facilities directly impact licensing—the wrong door swing or insufficient corridor width can delay or prevent facility licensing. Our team navigates these requirements from design through final AHCA inspection.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg lg:order-1">
                <h4 className="font-bold text-brand-green-dark mb-4">Senior Living Expertise:</h4>
                <ul className="space-y-3">
                  {["AHCA compliance and licensing support", "Emergency generator systems", "Nurse call and alert systems", "Commercial kitchen construction", "Memory care security features", "Enhanced accessibility standards"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Student Housing */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Landmark className="w-8 h-8 text-brand-green" />
                  <h3 className="text-2xl font-bold text-brand-green-dark font-heading">Student Housing Construction</h3>
                </div>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Student housing construction serves a unique market with specific design and durability requirements. Properties near USF, UT, and other Tampa Bay institutions must accommodate the academic calendar&apos;s intense move-in/move-out cycles, study and social space needs, high-speed connectivity demands, and the wear patterns of student residents. Our construction approach addresses these realities.
                  </p>
                  <p>
                    Purpose-built student housing typically features bed-based leasing configurations (4-bedroom/4-bath units are common), durable finishes that withstand heavy use, robust technology infrastructure including fiber connectivity and WiFi throughout, study rooms, computer labs, and group study spaces, fitness centers, pools, and outdoor gathering areas designed for the student demographic, and package management systems for the e-commerce generation.
                  </p>
                  <p>
                    Construction timing is critical for student housing—the academic calendar creates hard deadlines that cannot be missed without significant financial consequences. Our CPM scheduling and project management expertise ensures student housing projects achieve certificate of occupancy in time for fall semester move-in, regardless of the challenges encountered during construction.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-brand-green-dark mb-4">Student Housing Features:</h4>
                <ul className="space-y-3">
                  {["Bed-based unit configurations", "High-durability finishes", "Advanced technology infrastructure", "Study and social spaces", "Academic calendar-driven scheduling", "Package management systems"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Mixed-Use */}
          <div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-brand-green" />
                  <h3 className="text-2xl font-bold text-brand-green-dark font-heading">Mixed-Use Residential Over Retail</h3>
                </div>
                <div className="prose prose-lg text-gray-600">
                  <p>
                    Mixed-use construction integrates residential units above ground-floor commercial space, creating walkable, amenity-rich communities increasingly demanded by renters and buyers. These projects present unique construction challenges: different occupancy classifications between commercial and residential floors, varying floor-to-floor heights, distinct MEP requirements, and the coordination of separate tenant interests.
                  </p>
                  <p>
                    Ground-floor retail/restaurant space requires different structural considerations than residential floors above—higher ceilings, greater floor loads for commercial equipment, grease interceptors for restaurants, separate HVAC zoning, and commercial-grade fire suppression. The residential floors above must be isolated from commercial noise and odors while sharing common elements like parking and building systems.
                  </p>
                  <p>
                    Our mixed-use construction experience includes podium-style developments with structured parking below residential and retail, urban infill projects on constrained sites requiring creative solutions, and the complex permitting process involving multiple use classifications. We understand that mixed-use success requires seamless integration—the restaurant patron and the resident above must both enjoy their experience.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg lg:order-1">
                <h4 className="font-bold text-brand-green-dark mb-4">Mixed-Use Capabilities:</h4>
                <ul className="space-y-3">
                  {["Multi-occupancy classification management", "Podium construction expertise", "Commercial/residential MEP integration", "Noise and odor separation", "Urban infill project experience", "Complex permitting navigation"].map((item) => (
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

      {/* Visual Break */}
      <ContentParallax
        src="/images/tampa-apartment-complex-construction/tampa-apartment-complex-construction-small.webp"
        alt="Apartment complex construction progress"
        title="From Blueprint to Move-In"
        subtitle="Proven processes for on-time, on-budget delivery"
        overlayOpacity={0.55}
      />

      {/* Multi-Family Construction Process */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              The Multi-Family Construction Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial feasibility through final turnover, our systematic approach ensures multi-family projects are delivered on time, within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="space-y-12">
            {/* Pre-Construction */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-2xl font-bold text-brand-green-dark">Pre-Construction: Feasibility, Design &amp; Permitting</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    Pre-construction is where multi-family projects succeed or fail. This phase encompasses feasibility analysis to validate that your project makes economic sense, site assessment including geotechnical investigation, environmental review, and utility availability, design development working with your architect or our design-build team, value engineering to optimize the balance of cost, quality, and schedule, and the extensive permitting process Florida multi-family projects require.
                  </p>
                  <p>
                    Our pre-construction services include detailed budgeting with transparent cost breakdowns, constructability reviews identifying potential issues before they become problems, and CPM schedule development establishing realistic timelines. We involve key subcontractors early to validate pricing and identify procurement lead times. For multi-family projects, we also coordinate with future property managers to incorporate operational considerations into the design.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Florida multi-family permitting involves multiple jurisdictions and agencies: local building departments for construction permits, planning departments for zoning compliance, fire departments for life safety review, water management districts for stormwater permits, environmental agencies for wetland and wildlife considerations, and utility providers for service commitments. Projects in flood zones add FEMA compliance requirements, while coastal projects may require DEP permits.
                  </p>
                  <p>
                    Our team manages this complex permitting landscape, maintaining relationships with permitting authorities throughout Tampa Bay. We know each jurisdiction&apos;s requirements, review processes, and timelines. This experience allows us to provide realistic permitting schedules and avoid the surprises that delay projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Site Work */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-2xl font-bold text-brand-green-dark">Site Work &amp; Foundations</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    Site work transforms raw land into a construction-ready platform. This phase includes clearing and demolition of existing improvements, earthwork to establish proper grades and drainage patterns, erosion control measures meeting SWFWMD requirements, installation of underground utilities (sanitary sewer, storm drainage, water, electric, gas, communications), and preparation for foundation systems.
                  </p>
                  <p>
                    Foundation design for Florida multi-family buildings must account for our challenging soil conditions. Much of Tampa Bay features sandy soils with varying bearing capacities, high water tables, and areas of organic material. Depending on geotechnical findings, foundations may utilize conventional spread footings, mat foundations for uniform load distribution, deep foundations (driven piles or drilled shafts) reaching competent bearing strata, or ground improvement techniques.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    For buildings in flood zones—common throughout Tampa Bay—foundation design must establish finished floors at or above Base Flood Elevation (BFE) plus any required freeboard. This may involve fill placement, elevated structural slabs, or building designs that allow flooding below living areas. Our team coordinates with surveyors, geotechnical engineers, and the National Flood Insurance Program to ensure compliance.
                  </p>
                  <p>
                    Site work also establishes the infrastructure supporting the entire community: access roads and fire lanes, parking areas or structure foundations, stormwater management ponds and systems, utility distribution throughout the site, and the landscaping rough grades that will define the finished community.
                  </p>
                </div>
              </div>
            </div>

            {/* Structural */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-2xl font-bold text-brand-green-dark">Structural Construction</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    Structural construction varies dramatically based on building type. Wood-frame construction (Type V) predominates for garden-style apartments—efficient and cost-effective for buildings under 4 stories. These structures utilize engineered wood products, metal plate connected trusses, and the enhanced tie-down systems Florida&apos;s wind requirements mandate.
                  </p>
                  <p>
                    Mid-rise buildings often use Type III construction: non-combustible exterior walls (typically concrete masonry units or light-gauge steel) with wood-frame interior construction. This hybrid approach allows 4-6 story buildings while managing costs. High-rise buildings (Type I) utilize reinforced concrete or structural steel—heavier, more expensive, but required for buildings exceeding Type III height and area limitations.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Florida&apos;s hurricane requirements influence every structural decision. The Florida Building Code mandates wind resistance design based on geographic risk zones—Tampa Bay&apos;s exposure to Gulf storms requires structures designed for sustained winds of 150+ mph in many areas. This means continuous load paths from roof to foundation, enhanced connections at every structural interface, and quality control processes documenting proper installation.
                  </p>
                  <p>
                    Our structural construction process includes rigorous inspection protocols beyond code minimums, coordination with our in-house engineer for any field conditions requiring evaluation, and documentation creating a permanent record of structural assembly. For concrete construction, we implement comprehensive quality control including concrete testing, rebar inspection, and post-pour verification.
                  </p>
                </div>
              </div>
            </div>

            {/* MEP */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center text-xl font-bold">4</div>
                <h3 className="text-2xl font-bold text-brand-green-dark">MEP Systems (Mechanical, Electrical, Plumbing)</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    MEP systems represent a substantial portion of multi-family construction cost and are critical to resident comfort and building performance. Mechanical systems include HVAC equipment for each unit (typically individual split systems or PTACs), common area conditioning, corridor ventilation, garage exhaust systems, and specialized systems for amenity spaces like fitness centers and pools.
                  </p>
                  <p>
                    Electrical systems encompass unit distribution panels and wiring, common area lighting and power, emergency lighting and exit signage, fire alarm systems with monitoring, building automation and access control, and increasingly, electric vehicle charging infrastructure. Florida&apos;s lightning exposure makes proper grounding and surge protection essential.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Plumbing systems include domestic water distribution (often requiring booster pumps in taller buildings), sanitary drainage and venting, gas distribution where applicable, and fire sprinkler systems required throughout. Florida buildings face specific plumbing challenges: high water tables affecting below-slab drainage, corrosive water requiring appropriate pipe materials, and sanitary systems that must perform during the heavy rains common in our climate.
                  </p>
                  <p>
                    MEP coordination is critical—these systems compete for limited space in walls, ceilings, and utility chases. We use 3D coordination to identify conflicts before installation, reducing costly field changes. Our MEP subcontractor relationships ensure quality installation and responsive service, while our in-house team provides coordination oversight maintaining the design intent.
                  </p>
                </div>
              </div>
            </div>

            {/* Interior Buildout */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center text-xl font-bold">5</div>
                <h3 className="text-2xl font-bold text-brand-green-dark">Interior Buildout</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    Interior buildout transforms structural shells into livable spaces. This phase includes insulation and air barrier installation, interior framing for room layouts, drywall hanging, taping, and finishing, interior door and trim installation, cabinet and countertop installation, flooring installation across multiple unit types, and finish painting throughout.
                  </p>
                  <p>
                    For multi-family construction, interior buildout demands systematic approaches to maintain quality across hundreds of identical operations. We establish model units for owner approval before proceeding to mass production. Standardized material packages, approved vendor lists, and inspection checklists ensure consistency from the first unit to the last.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Sound transmission between units is a critical consideration often overlooked. Florida Building Code requires specific Sound Transmission Class (STC) ratings between dwelling units—typically STC 50 for walls and IIC 50 for floor/ceiling assemblies. Achieving these ratings requires proper assembly design, correct material installation, and attention to flanking paths where sound can bypass rated assemblies. Our quality control includes sound transmission testing to verify performance.
                  </p>
                  <p>
                    Finish selections balance durability, aesthetics, and cost. Rental apartments emphasize durability and maintenance efficiency; luxury condominiums feature premium finishes justifying higher sales prices. We guide owners through finish selection, providing budget implications and maintenance considerations for each choice.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Areas */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center text-xl font-bold">6</div>
                <h3 className="text-2xl font-bold text-brand-green-dark">Common Areas &amp; Amenities</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    Common areas often sell or lease multi-family units—prospective residents evaluate lobbies, fitness centers, and pools alongside the units themselves. Our common area construction creates impressive first impressions while delivering functional spaces that perform over decades of heavy use.
                  </p>
                  <p>
                    Amenity construction encompasses clubhouses and leasing centers, fitness centers with equipment installation and specialized flooring, swimming pools with pool houses and mechanical rooms, outdoor kitchens, fire pits, and gathering spaces, business centers and conference rooms, package rooms and mail facilities, and dog parks and pet spas.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Each amenity type has specific construction requirements. Fitness centers need reinforced floors for heavy equipment, specialized HVAC for high occupancy loads, and acoustic treatments. Pools require permits from county health departments, sophisticated mechanical systems, and Florida-compliant barrier fencing. Commercial kitchens demand grease interceptors, commercial ventilation, and health department approvals.
                  </p>
                  <p>
                    We coordinate amenity construction timing to support marketing and lease-up. Model units and leasing offices often complete early to support pre-leasing, while remaining amenities complete with building turnover. This phased approach maximizes the project&apos;s revenue potential while maintaining construction efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Inspections */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-green text-white flex items-center justify-center text-xl font-bold">7</div>
                <h3 className="text-2xl font-bold text-brand-green-dark">Final Inspections &amp; Turnover</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    Project closeout involves multiple parallel tracks culminating in certificate of occupancy and owner turnover. Building department final inspections verify code compliance, fire department inspections confirm life safety systems function properly, health department inspections approve pools and commercial kitchens, and utility providers release permanent service.
                  </p>
                  <p>
                    Our punch list process begins before final inspections. We conduct internal quality walks identifying items requiring attention, address these items systematically, then conduct formal owner punch list walks. This proactive approach minimizes the punch list items owners identify and accelerates final project acceptance.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Turnover documentation for multi-family projects is extensive: as-built drawings reflecting actual construction, equipment manuals and warranty documentation, maintenance schedules and recommended service providers, spare parts and attic stock, security system access and training, and building automation system training and credentials.
                  </p>
                  <p>
                    For condominium projects, turnover includes developer-to-association transition documentation meeting Florida statutory requirements. We provide the construction documentation associations need for future milestone inspections and reserve studies. Our commitment extends beyond construction completion—we remain available to address warranty items and support your property&apos;s long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Area Construction */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Common Area Construction Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common areas define the resident experience. From grand lobbies to resort-style pools, we construct amenities that attract residents and build community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Building2 className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Lobbies &amp; Corridors</h3>
              <p className="text-gray-600">
                First impressions matter. Our lobby construction creates welcoming entry experiences with premium finishes, sophisticated lighting design, and security integration. Corridors receive durable, attractive finishes designed to withstand decades of traffic while maintaining their appearance. We incorporate wayfinding, emergency lighting, and code-compliant egress elements seamlessly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Hammer className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Fitness Centers &amp; Pools</h3>
              <p className="text-gray-600">
                Modern residents expect resort-quality fitness amenities. We construct fitness centers with reinforced floors, mirrors, specialized flooring, high-capacity HVAC, and equipment installation coordination. Pool construction includes the pool structure, deck, mechanical room, pool house, and all required safety features. Health department permitting and inspection coordination included.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Users className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Clubhouses &amp; Community Rooms</h3>
              <p className="text-gray-600">
                Clubhouses serve as community gathering spaces and often include leasing offices, business centers, and entertainment areas. We construct flexible spaces with appropriate technology infrastructure, commercial-grade kitchens where required, and ADA-compliant restroom facilities. Design emphasizes both grand events and daily use functionality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Building className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Parking Structures</h3>
              <p className="text-gray-600">
                Parking structure construction requires specialized expertise in post-tensioned concrete, waterproofing systems, ventilation, lighting, and life safety. We construct both above-grade and below-grade parking, including the increasingly important electric vehicle charging infrastructure. Our structures are designed for Florida&apos;s environment with appropriate drainage and corrosion protection.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Sun className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Landscaping &amp; Outdoor Amenities</h3>
              <p className="text-gray-600">
                Florida&apos;s climate allows year-round outdoor living. We construct outdoor kitchens, fire features, covered pavilions, walking trails, dog parks, and playground areas. Landscape installation includes irrigation systems, hardscape elements, and Florida-friendly plantings appropriate for our environment. Outdoor lighting extends amenity use into evening hours.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Shield className="w-10 h-10 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Package &amp; Security Facilities</h3>
              <p className="text-gray-600">
                Modern multi-family living demands sophisticated package management and security systems. We construct secure package rooms with temperature control, install access control systems throughout common areas, and integrate video surveillance infrastructure. These systems are designed for property management efficiency and resident convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Florida-Specific Considerations */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida-Specific Construction Considerations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building in Florida presents unique challenges. Our 40+ years of experience means we understand every aspect of constructing durable, safe multi-family buildings in our demanding environment.
            </p>
          </div>

          <div className="space-y-12">
            {/* Hurricane Resistant */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Wind className="w-8 h-8 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark">Hurricane-Resistant Construction Requirements</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    Florida&apos;s exposure to tropical storms and hurricanes shapes every construction decision. The Florida Building Code—one of the nation&apos;s most stringent—mandates wind resistance based on geographic risk zones. Tampa Bay&apos;s Gulf exposure places most projects in High-Velocity Hurricane Zones (HVHZ) or areas requiring design for wind speeds of 150 mph or higher.
                  </p>
                  <p>
                    Hurricane-resistant construction begins at the foundation and extends through every component: continuous load paths connecting roof to foundation, enhanced connections at every structural joint, roof systems designed for uplift forces (not just gravity loads), impact-resistant window and door systems, reinforced garage doors and entry systems, and secondary water barriers beneath roofing materials.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Beyond structural requirements, hurricane-resistant design considers operational resilience: emergency generator systems for critical loads, storm water management for extreme rainfall events, building orientation minimizing wind exposure where possible, protected entry points allowing secure ingress during storms, and communication systems maintaining connectivity during emergencies.
                  </p>
                  <p>
                    While hurricane requirements add to construction costs, the investment pays dividends through reduced insurance premiums, resident safety and confidence, and building durability. Properties built to current Florida standards have demonstrated remarkable performance in recent storms, validating the code&apos;s effectiveness.
                  </p>
                </div>
              </div>
            </div>

            {/* Florida Building Code */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="w-8 h-8 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark">Florida Building Code Compliance</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    The Florida Building Code (FBC) is a comprehensive, statewide code incorporating Florida-specific amendments to the International Building Code. Understanding FBC requirements—and the local amendments each jurisdiction adds—is essential for successful multi-family construction. Our team maintains current certifications and relationships with building departments throughout our service area.
                  </p>
                  <p>
                    Key FBC provisions affecting multi-family construction include: product approvals ensuring components meet Florida standards, energy code requirements (Florida Building Code Energy Conservation), accessibility requirements exceeding federal ADA minimums in some areas, fire and life safety provisions tailored to Florida conditions, and the structural requirements discussed above.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Florida&apos;s milestone inspection requirement (effective after the Champlain Towers collapse) now mandates structural inspections of buildings three stories or higher at 30 years (25 years within 3 miles of the coast) and every 10 years thereafter. New construction must be designed and documented with these future inspections in mind—another reason our in-house engineering capability provides value. We create documentation that will serve building owners decades into the future.
                  </p>
                  <p>
                    Our code compliance approach extends beyond minimum requirements. We design and build for durability, maintainability, and long-term performance. Meeting code is the floor, not the ceiling, of our quality standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Flood Zone */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Waves className="w-8 h-8 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark">Flood Zone Construction</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    Much of Tampa Bay lies within FEMA-designated flood zones, requiring construction approaches that protect residents and property from flooding while maintaining insurability under the National Flood Insurance Program (NFIP). Flood zone construction begins with understanding your site&apos;s flood designation and Base Flood Elevation (BFE).
                  </p>
                  <p>
                    In A-Zones (riverine flooding), lowest floor must be at or above BFE. In V-Zones (coastal flooding with wave action), additional requirements apply including construction on pilings, breakaway walls, and flood venting. Florida Building Code typically requires freeboard (additional elevation) above minimum federal requirements. Our designs incorporate appropriate elevation strategies while minimizing construction cost impacts.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Flood zone construction strategies include elevated structural slabs, fill placement to raise finished grades, parking structures below elevated living floors, and building designs allowing flooding of non-habitable spaces. Material selections below flood levels must be flood-resistant—we specify appropriate materials and systems for these exposures.
                  </p>
                  <p>
                    FEMA Elevation Certificates are required for flood insurance and must document as-built conditions. Our survey coordination ensures accurate certificates, and our construction documentation supports flood insurance applications. Proper flood zone construction significantly reduces flood insurance costs while providing essential protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Windows */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark">Impact Windows &amp; Doors</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    Fenestration (windows and doors) often represents the weakest point in a building&apos;s envelope during hurricanes. Once wind penetrates a structure, internal pressure can cause catastrophic failure. Florida&apos;s code requires opening protection throughout—either impact-resistant glazing or approved shutter systems. For multi-family residential, impact-resistant windows and doors are the standard approach.
                  </p>
                  <p>
                    Impact-resistant products undergo rigorous testing: large missile impact (simulating windborne debris), small missile impact, cyclic pressure testing, and water infiltration testing. Only products with current Florida Product Approvals may be installed. We specify products from established manufacturers with proven performance records.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Beyond hurricane protection, impact windows provide significant benefits: enhanced security against break-ins, sound attenuation reducing exterior noise, UV protection for interior finishes, and improved energy performance. The premium over standard windows is offset by insurance savings and these ancillary benefits.
                  </p>
                  <p>
                    Entry doors, sliding glass doors, and garage doors all require protection. We coordinate product selections providing consistent protection throughout, with attention to accessibility requirements, emergency egress, and daily usability. Proper installation is critical—we ensure installers are trained and installations are inspected to manufacturer requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Concrete Construction */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark">Concrete Construction Advantages in Florida</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="prose text-gray-600">
                  <p>
                    Florida&apos;s environment favors concrete construction for multi-family buildings. Concrete resists termites (a significant concern in Florida), hurricanes (mass and continuity provide inherent wind resistance), fire (concrete is non-combustible), and moisture (properly detailed concrete is inherently water-resistant). For buildings of 4 or more stories, concrete construction is often the optimal choice.
                  </p>
                  <p>
                    Our concrete construction capabilities include cast-in-place concrete for foundations, structural slabs, and elevated decks, concrete masonry unit (CMU) construction for exterior and party walls, post-tensioned concrete for parking structures and long-span conditions, and precast concrete elements where appropriate for schedule acceleration.
                  </p>
                </div>
                <div className="prose text-gray-600">
                  <p>
                    Florida&apos;s aggressive environment does challenge concrete: chloride exposure from salt air accelerates reinforcing steel corrosion, high humidity promotes mold growth on untreated surfaces, and the wet/dry cycles of our climate stress surface finishes. We address these challenges through proper concrete mix designs, adequate cover over reinforcement, appropriate coatings and sealers, and detailing that promotes drainage and drying.
                  </p>
                  <p>
                    Our in-house engineering capability is particularly valuable for concrete construction, providing structural oversight and the documentation that supports long-term building maintenance. Properly constructed and maintained, concrete buildings serve generations—many of Florida&apos;s oldest structures are concrete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Balcony Construction */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Droplets className="w-8 h-8 text-brand-green" />
                <h2 className="text-3xl font-bold text-brand-green-dark font-heading">Balcony Construction &amp; Waterproofing</h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Balconies are among the most failure-prone elements in Florida multi-family buildings. Exposed to weather, subject to thermal movement, and presenting complex waterproofing challenges, balconies require careful design and meticulous construction. The Surfside tragedy underscored what industry professionals have long known: balcony failures can have catastrophic consequences.
                </p>
                <p>
                  Florida Senate Bill 4-D, enacted in response to Surfside, establishes new requirements for existing buildings including structural inspections (milestone inspections) and reserve funding. While focused on existing buildings, these requirements inform our approach to new construction: build balconies that will pass inspection 30 years from now.
                </p>
                <p>
                  Our balcony construction addresses: structural design for Florida loads (including hurricane wind and rain), proper slope to drain (minimum 1/4&quot; per foot away from building), waterproofing systems appropriate for balcony conditions, flashing details at wall intersections, drainage provisions preventing water accumulation, and railing connections that don&apos;t compromise waterproofing.
                </p>
                <p>
                  Waterproofing systems for balconies typically include traffic-bearing membrane systems (we use products from Sika, BASF, and other premium manufacturers), proper surface preparation including moisture testing, attention to details at drains, walls, and penetrations, and protective coatings extending system life. Our specifications require manufacturer involvement in system selection and installation inspection.
                </p>
                <p>
                  For existing buildings requiring balcony reconstruction—a growing segment of our work—we provide structural assessment through our in-house engineer, waterproofing design addressing identified failure modes, construction that minimizes resident disruption, and documentation supporting future inspections. Our balcony reconstruction experience includes numerous successful HOA and condo association projects throughout Tampa Bay.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">Balcony Construction Standards:</h3>
              <ul className="space-y-4">
                {[
                  "Structural design exceeding code minimums",
                  "Proper slope-to-drain installation",
                  "Premium waterproofing membrane systems",
                  "Critical flashing and detail work",
                  "Drainage provisions preventing ponding",
                  "Railing connections protecting membrane",
                  "Quality control documentation",
                  "Manufacturer-backed warranties",
                  "Future inspection accessibility",
                  "Maintenance planning support"
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
      </section>

      {/* Case Studies */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Multi-Family Project Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects demonstrating our multi-family construction and restoration expertise throughout Florida.
            </p>
          </div>

          <div className="space-y-12">
            {/* Tiara */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Tiara Condominium Association</h3>
                  <p className="text-lg text-brand-green font-semibold mb-4">$4.9 Million Balcony Restoration &amp; Waterproofing</p>
                  <div className="prose text-gray-600">
                    <p>
                      The Tiara Condominium project exemplifies the complex balcony restoration work increasingly common in Florida&apos;s aging condo inventory. This substantial restoration addressed deteriorating balcony conditions across the property, implementing structural repairs and comprehensive waterproofing to extend building life and ensure resident safety.
                    </p>
                    <p>
                      Our scope included structural assessment and engineering of repair solutions, concrete repair addressing corrosion-induced spalling, complete waterproofing membrane installation across all balconies, railing replacement maintaining aesthetic consistency, and coordination with the condo association and individual unit owners throughout the multi-phase project.
                    </p>
                    <p>
                      The project required working within an occupied building, maintaining resident access and safety while completing construction. Our phased approach, clear communication protocols, and experienced supervision delivered a successful outcome that positions Tiara well for future milestone inspections.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-brand-green-dark mb-4">Project Details:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li><span className="font-semibold">Value:</span> $4.9 Million</li>
                    <li><span className="font-semibold">Scope:</span> Balcony Restoration</li>
                    <li><span className="font-semibold">Services:</span> Structural Repair, Waterproofing</li>
                    <li><span className="font-semibold">Challenge:</span> Occupied Building Work</li>
                    <li><span className="font-semibold">Result:</span> Extended Building Life</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Southwind */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Southwind Condominiums, Punta Gorda</h3>
                  <p className="text-lg text-brand-green font-semibold mb-4">$2.5 Million Comprehensive Building Envelope Restoration</p>
                  <div className="prose text-gray-600">
                    <p>
                      Southwind Condominiums required a comprehensive building envelope restoration addressing multiple systems simultaneously. This Southwest Florida property faced the combined challenges of hurricane exposure, salt air corrosion, and age-related deterioration common to coastal condominiums.
                    </p>
                    <p>
                      Our integrated approach included complete roof replacement with impact-resistant systems, building-wide waterproofing restoration, window replacement with impact-resistant units, and associated repairs identified during construction. By addressing these systems together, we provided a comprehensive solution more effective than piecemeal repairs.
                    </p>
                    <p>
                      Working in Punta Gorda—an area significantly impacted by hurricanes—reinforced the importance of storm-resistant construction. Our installation methods and material selections reflect lessons learned from major hurricane events, positioning Southwind to weather future storms with confidence.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-brand-green-dark mb-4">Project Details:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li><span className="font-semibold">Value:</span> $2.5 Million</li>
                    <li><span className="font-semibold">Location:</span> Punta Gorda, FL</li>
                    <li><span className="font-semibold">Scope:</span> Building Envelope</li>
                    <li><span className="font-semibold">Services:</span> Roof, Waterproofing, Windows</li>
                    <li><span className="font-semibold">Challenge:</span> Coastal Environment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Summary */}
            <div className="bg-brand-green-bg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Decades of Multi-Family Experience</h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Florida Construction Specialists&apos; multi-family experience extends beyond these highlighted projects. Our leadership team has been involved in multi-family construction and restoration since 1982, building and restoring apartments, condominiums, townhomes, and senior living facilities throughout Florida and beyond.
                </p>
                <p>
                  Frank Bragano, our principal, brings decades of hands-on experience in large-scale residential construction, insurance restoration, and the complex projects that require both technical expertise and experienced management. This depth of experience—understanding not just how to build, but how buildings age, fail, and can be restored—informs every project we undertake.
                </p>
                <p>
                  Whether you&apos;re developing a new multi-family community, restoring an aging property, or addressing damage from Florida&apos;s inevitable storms, we bring relevant experience to your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Multi-Family Construction Cost Factors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding multi-family construction costs enables better planning and decision-making. Here&apos;s what drives costs in Florida&apos;s market.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">Per-Unit Cost Ranges</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-700">Garden-Style Apartments</span>
                    <span className="text-brand-green font-semibold">$120K - $160K/unit</span>
                  </div>
                  <p className="text-sm text-gray-600">2-3 story wood frame, surface parking, standard finishes</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-700">Mid-Rise Apartments</span>
                    <span className="text-brand-green font-semibold">$150K - $200K/unit</span>
                  </div>
                  <p className="text-sm text-gray-600">4-8 stories, structured parking, elevated finishes</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-700">High-Rise Condos</span>
                    <span className="text-brand-green font-semibold">$200K - $350K+/unit</span>
                  </div>
                  <p className="text-sm text-gray-600">10+ stories, concrete construction, premium finishes</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-700">Senior Living</span>
                    <span className="text-brand-green font-semibold">$180K - $280K/unit</span>
                  </div>
                  <p className="text-sm text-gray-600">AHCA requirements, medical systems, specialized amenities</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">Key Cost Drivers</h3>
              <div className="prose text-gray-600">
                <p>
                  <strong>Construction Type:</strong> Type V wood-frame construction costs significantly less than Type I concrete. Building height and area requirements often dictate minimum construction types.
                </p>
                <p>
                  <strong>Site Conditions:</strong> Poor soils requiring deep foundations, high water tables, flood zone elevation requirements, and environmental mitigation can significantly impact costs.
                </p>
                <p>
                  <strong>Parking Requirements:</strong> Structured parking costs $15,000-$25,000+ per space versus $2,000-$5,000 for surface parking. Local zoning often dictates parking ratios.
                </p>
                <p>
                  <strong>Amenity Package:</strong> Resort-style amenities (pools, fitness centers, clubhouses) add $5,000-$15,000+ per unit to development costs but support higher rents/prices.
                </p>
                <p>
                  <strong>Finish Levels:</strong> Luxury finishes can add 30-50% to interior costs compared to standard apartment finishes. Unit size also significantly impacts per-unit costs.
                </p>
                <p>
                  <strong>Value Engineering:</strong> Our pre-construction services identify cost optimization opportunities without sacrificing quality or performance. Early involvement maximizes value engineering potential.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">Financing Considerations</h3>
            <div className="prose text-gray-600">
              <p>
                Multi-family construction typically utilizes construction loans that convert to permanent financing upon completion. Our proven track record allows us to easily access construction financing for commercial and residential projects. We have heavy experience capturing preservation and restoration grants for qualifying historic or affordable housing projects.
              </p>
              <p>
                Financing impacts construction in several ways: draw schedules must align with construction progress, lender inspections occur at key milestones, and completion timing affects interest carry. We coordinate with lenders to ensure smooth draw processes and provide documentation supporting construction loan requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema items={comprehensiveFaqs} title="Multi-Family Construction FAQs" />

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Multi-Family Construction Throughout Tampa Bay
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We construct multi-family projects throughout the greater Tampa Bay region. Select your area for location-specific information.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}/multi-family-construction/`}
                className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-brand-green-bg transition-colors group"
              >
                <MapPin className="w-5 h-5 text-brand-green group-hover:text-brand-green-dark" />
                <span className="font-semibold text-gray-700 group-hover:text-brand-green-dark">{location.name}, FL</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Service Links */}
      <ServiceAreaLinks service="multi-family-construction" serviceName="Multi-Family Construction" />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Build Your Multi-Family Project?
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            From initial feasibility through construction completion, Florida Construction Specialists delivers multi-family projects that exceed expectations.
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us for a project consultation. We specialize in projects $1 million and above throughout Tampa Bay and greater Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Project Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <p className="text-white/70 mt-6 text-sm">
            Licensed Florida General Contractor #{BUSINESS_INFO.licenseNumber} | Serving Florida Since {BUSINESS_INFO.foundingDate}
          </p>
        </div>
      </section>
    </>
  );
}
