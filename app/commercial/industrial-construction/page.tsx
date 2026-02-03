import type { Metadata } from "next";
import Link from "next/link";
import {
  Factory,
  CheckCircle,
  Warehouse,
  HardHat,
  ArrowRight,
  Phone,
  HelpCircle,
  Building2,
  Truck,
  Thermometer,
  Server,
  Shield,
  Clock,
  DollarSign,
  MapPin,
  Wrench,
  Layers,
  Wind,
  Droplets,
  Zap,
  FileCheck,
  Ruler,
  Container,
} from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Industrial Construction Tampa | Tilt-Wall | FCS",
  description:
    "Industrial and warehouse construction in Tampa Bay. Tilt-wall construction, steel buildings, flex space, and distribution centers. $500K-$25M+ projects. 40+ years experience.",
  keywords:
    "industrial construction Tampa, warehouse construction Florida, tilt-wall construction Tampa Bay, flex space construction, distribution center construction, manufacturing facility construction",
};

const features = [
  {
    title: "Tilt-Wall Construction",
    description: "Cost-effective concrete tilt-wall panels for rapid industrial facility construction with superior durability",
    icon: Factory,
  },
  {
    title: "Steel Building Construction",
    description: "Pre-engineered metal buildings and structural steel for large-span industrial facilities",
    icon: HardHat,
  },
  {
    title: "Warehouse & Distribution",
    description: "High-bay warehouses, distribution centers, and logistics facilities with modern dock systems",
    icon: Warehouse,
  },
  {
    title: "Flex Space Development",
    description: "Multi-tenant industrial flex buildings combining office and warehouse space for maximum versatility",
    icon: Building2,
  },
];

const industrialTypes = [
  {
    title: "Warehouses & Distribution Centers",
    description: "Modern logistics facilities with high-bay storage, automated systems, and efficient dock configurations",
    icon: Warehouse,
  },
  {
    title: "Manufacturing Facilities",
    description: "Production spaces with specialized utilities, overhead crane systems, and process-specific infrastructure",
    icon: Factory,
  },
  {
    title: "Flex Industrial Buildings",
    description: "Versatile multi-tenant buildings combining office, showroom, and warehouse space",
    icon: Building2,
  },
  {
    title: "Cold Storage Facilities",
    description: "Refrigerated and freezer warehouses with specialized insulation and climate systems",
    icon: Thermometer,
  },
  {
    title: "Data Centers",
    description: "Mission-critical facilities with redundant power, cooling, and security systems",
    icon: Server,
  },
  {
    title: "Industrial Parks",
    description: "Multi-building developments with shared infrastructure and master-planned amenities",
    icon: MapPin,
  },
];

const faqs = [
  {
    question: "What is tilt-wall construction and when is it the best choice?",
    answer:
      "Tilt-wall (or tilt-up) construction involves pouring concrete wall panels horizontally on-site, then tilting them into position with cranes. It's ideal for buildings over 20,000 SF where durability, fire resistance, and low maintenance matter. Tilt-wall excels for climate-controlled facilities, high-value inventory storage, and buildings requiring superior thermal performance. While the upfront cost is higher than metal buildings, tilt-wall delivers lower lifecycle costs through reduced maintenance and energy expenses over 30+ years of building life.",
  },
  {
    question: "How much does industrial warehouse construction cost in Tampa Bay?",
    answer:
      "Industrial construction costs in Tampa Bay range from $75-150/SF for basic shell buildings to $150-300+/SF for finished facilities. Key cost factors include foundation type (slab vs. piles), clear height requirements, fire suppression systems, climate control, and office finish level. A typical 50,000 SF distribution warehouse shell runs $4-6M, while a finished manufacturing facility of the same size might cost $8-12M. Specialized facilities like cold storage or data centers command premium pricing due to their technical requirements. We provide detailed estimates based on your specific operational needs.",
  },
  {
    question: "How long does warehouse construction take?",
    answer:
      "Typical industrial construction timelines vary by building type: Pre-engineered metal buildings take 4-6 months, tilt-wall warehouses require 8-12 months, and complex manufacturing facilities may need 12-18 months. Permitting in Tampa Bay typically takes 8-16 weeks depending on jurisdiction and site complexity. We use CPM scheduling to optimize timelines and identify opportunities for fast-tracking without sacrificing quality. Design-build delivery can compress schedules by overlapping design and construction phases.",
  },
  {
    question: "Should I choose tilt-wall or metal building construction?",
    answer:
      "The choice depends on your priorities. Choose tilt-wall construction for superior durability, fire resistance, and energy efficiency—ideal for climate-controlled spaces, high-value inventory, or buildings requiring excellent thermal mass. Choose pre-engineered metal buildings when speed and initial cost are priorities, or when you need very large clear spans (100+ feet) or anticipate future expansion. Many projects use hybrid approaches—metal structural systems with tilt-wall exterior panels—to optimize both cost and performance.",
  },
  {
    question: "Can you help with site selection for industrial development?",
    answer:
      "Yes, we provide comprehensive pre-construction services including site evaluation. Key factors we assess include zoning compatibility, utility availability (especially electrical capacity for manufacturing), soil conditions, flood zone status, traffic access for trucks, and permitting timeline by jurisdiction. We work with commercial real estate brokers and civil engineers to evaluate potential sites before you commit to purchase, helping you avoid costly surprises during development.",
  },
  {
    question: "What clear heights are available for warehouse construction?",
    answer:
      "Modern warehouses typically feature 28-36 foot clear heights to maximize cube utilization and accommodate modern racking systems. E-commerce fulfillment centers often require 36-40+ foot clears for automated storage and retrieval systems. Tilt-wall construction can achieve 40+ foot clear heights with proper structural design. Pre-engineered metal buildings are most economical up to 30-35 foot clears. We design to your operational requirements while planning for future flexibility as your business grows.",
  },
  {
    question: "What specialized systems can you install in industrial buildings?",
    answer:
      "We install comprehensive industrial systems including overhead bridge cranes (up to 50+ ton capacity), loading docks with levelers and seals, fire suppression (ESFR sprinklers for high-piled storage), climate control systems, high-capacity electrical services, compressed air systems, and specialized flooring for heavy equipment. We coordinate with equipment suppliers to ensure proper structural support, utilities, and clearances for your specific operational needs.",
  },
  {
    question: "Do you build EV charging infrastructure for industrial facilities?",
    answer:
      "Yes, EV infrastructure is increasingly important for industrial projects. We install charging stations for fleet vehicles, employee parking, and future tenant needs. This includes electrical infrastructure sizing for future EV expansion, trenching and conduit installation, and coordination with utility companies for service upgrades. Many industrial tenants and building owners now require EV readiness as a standard feature for new construction.",
  },
  {
    question: "How do you handle hurricane requirements for large industrial buildings?",
    answer:
      "Florida industrial buildings must meet stringent wind load requirements per Florida Building Code. For tilt-wall construction, this means reinforced panels with proper embedment connections. For metal buildings, we specify upgraded framing, enhanced roof attachments, and impact-resistant cladding in coastal areas. Large industrial buildings also require careful attention to rolling door wind ratings, roof deck attachments, and HVAC equipment anchorage. We engineer all buildings to current code requirements plus any additional owner specifications.",
  },
  {
    question: "What is the industrial construction process from start to finish?",
    answer:
      "Our industrial construction process follows these phases: Pre-construction (site evaluation, budgeting, permitting strategy), Design Development (architectural and engineering plans, equipment coordination), Permitting (building permits, environmental approvals, utility coordination), Site Work (clearing, grading, utilities, foundations), Building Construction (structure, shell, MEP rough-in), Interior Build-Out (finishes, equipment installation, final MEP), and Closeout (inspections, commissioning, training, warranty). We use design-build delivery to compress timelines and maintain budget control throughout.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Industrial Construction", href: "/commercial/industrial-construction/" },
];

const internalLinks = [
  { href: "/commercial/", label: "Commercial Construction Services" },
  { href: "/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/commercial/metal-buildings/", label: "Metal Building Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function IndustrialConstructionPage() {
  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" service="Industrial Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Industrial & Warehouse Construction"
        serviceDescription="Tilt-wall, steel erection, and industrial flex space construction in Tampa Bay. From distribution centers to manufacturing facilities, we deliver turnkey industrial construction projects."
        minPrice="500000"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb items={breadcrumbItems} />

      <div className="container-custom py-8">
        <BackToHub silo="commercial" />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Factory className="w-10 h-10 text-brand-gold" />
              <span className="bg-brand-green/30 text-white px-3 py-1 rounded-full text-sm font-bold">
                COMMERCIAL CONSTRUCTION
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Industrial Construction Tampa | Warehouse Construction Florida
            </h1>
            <p className="text-xl text-white/90 mb-8">
              FCS Construction delivers large-scale industrial and warehouse construction 
              throughout Tampa Bay and Central Florida. From tilt-wall distribution centers 
              to steel manufacturing facilities, we bring 40+ years of experience to projects 
              ranging from $500K to $25M+. Our design-build approach ensures your industrial 
              facility is delivered on time, on budget, and built to perform for decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Request Industrial Construction Bid
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6 text-center">
              Tampa Bay's Trusted Industrial Construction Partner
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                FCS Construction has been building industrial facilities across Florida for over four decades. 
                Our industrial construction division specializes in the warehouses, distribution centers, 
                manufacturing plants, and flex buildings that drive Tampa Bay's growing economy. We understand 
                that industrial buildings aren't just structures—they're the operational backbone of businesses 
                that depend on efficient, durable, and functional facilities to serve their customers.
              </p>
              <p>
                Our experience spans the full spectrum of industrial construction, from 20,000 square foot 
                flex buildings to 500,000+ square foot distribution centers. We've built facilities for 
                logistics companies, manufacturers, food processors, technology firms, and real estate 
                developers throughout Hillsborough, Pinellas, Pasco, Polk, and surrounding counties. This 
                diverse portfolio has given us deep expertise in the specialized requirements of different 
                industrial applications.
              </p>
              <p>
                What sets FCS apart in industrial construction is our integrated approach. We don't just 
                build shells—we deliver complete, functional facilities ready for operations. This includes 
                everything from site development and building construction to specialized systems like 
                overhead cranes, climate control, and fire suppression. Our pre-construction services help 
                clients evaluate sites, optimize designs for their operations, and establish realistic budgets 
                before breaking ground. When you work with FCS, you get a true partner invested in your 
                project's success from concept through completion and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Industrial Construction Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm">
                  <Icon className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types of Industrial Construction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6 text-center">
              Types of Industrial Construction
            </h2>
            <p className="text-lg text-gray-700 text-center">
              Industrial construction encompasses a diverse range of facility types, each with unique 
              requirements for structure, systems, and site development. FCS brings specialized expertise 
              to every category of industrial building.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {industrialTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.title} className="bg-gray-50 rounded-xl p-6">
                  <Icon className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <h3 className="text-2xl font-bold text-brand-green-dark">Warehouses and Distribution Centers</h3>
            <p>
              The backbone of modern logistics, warehouse and distribution center construction requires 
              careful attention to operational efficiency. These facilities must accommodate high-volume 
              throughput with optimal truck circulation, loading dock configurations, and interior layouts 
              that support picking, packing, and shipping operations. Modern distribution centers increasingly 
              incorporate automation, requiring structural provisions for conveyor systems, sortation equipment, 
              and automated storage and retrieval systems (AS/RS).
            </p>
            <p>
              Key design considerations include clear heights of 32-40 feet to maximize cubic storage capacity, 
              column spacing that accommodates modern racking systems (typically 50-60 foot bays), and floor 
              specifications that support heavy forklift traffic and high rack loads. We design and build 
              distribution facilities that meet the demanding requirements of e-commerce fulfillment, 
              third-party logistics (3PL) operations, and traditional wholesale distribution.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark">Manufacturing Facilities</h3>
            <p>
              Manufacturing construction presents unique challenges beyond typical warehouse requirements. 
              These facilities must support production processes that may include heavy equipment, overhead 
              cranes, specialized utilities, and process-specific infrastructure. From food and beverage 
              production to aerospace manufacturing, each industry has distinct regulatory requirements, 
              utility demands, and operational workflows that must be accommodated in the building design.
            </p>
            <p>
              FCS works closely with manufacturing clients and their equipment suppliers during pre-construction 
              to ensure buildings are designed around actual production requirements. This includes structural 
              provisions for overhead crane systems, adequate electrical capacity for production equipment, 
              process piping and compressed air systems, and specialized flooring that can handle heavy 
              equipment loads and chemical exposure. We also address regulatory requirements including FDA 
              compliance for food facilities, EPA requirements for manufacturing with emissions, and OSHA 
              safety standards throughout.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark">Flex Space Buildings</h3>
            <p>
              Flex industrial space has emerged as one of the most popular building types for both developers 
              and owner-occupants. These versatile buildings combine office, showroom, and warehouse functions 
              in adaptable configurations that can serve multiple tenants or evolve with a single user's 
              changing needs. Typical flex buildings feature front office space with street presence, rear 
              warehouse areas with loading access, and the ability to adjust the ratio between uses.
            </p>
            <p>
              Construction of flex space requires attention to both office and industrial building standards. 
              This includes adequate HVAC zoning for different use areas, electrical systems that can support 
              both office equipment and warehouse operations, and architectural treatments that create 
              professional appearances while maintaining practical functionality. Multi-tenant flex buildings 
              also require fire separation between units, individual utility metering, and flexible demising 
              wall systems.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark">Cold Storage and Refrigerated Facilities</h3>
            <p>
              Cold storage construction is highly specialized, requiring expertise in thermal envelope design, 
              refrigeration systems, and the unique structural considerations of buildings that must maintain 
              temperatures from 35°F for coolers down to -20°F or colder for freezers. These facilities serve 
              the food distribution, pharmaceutical, and specialty chemical industries with stringent 
              temperature control requirements.
            </p>
            <p>
              Critical elements include insulated metal panel systems with proper vapor barriers, floor heating 
              systems to prevent frost heave under freezer areas, specialized dock designs that minimize 
              temperature infiltration during loading, and redundant refrigeration systems for product 
              protection. The structural design must also account for the significant loads imposed by 
              refrigeration equipment and the moisture-related challenges of maintaining cold environments 
              in Florida's humid climate.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark">Data Centers</h3>
            <p>
              Data center construction represents the intersection of industrial building and mission-critical 
              infrastructure. These facilities house the computer systems and networking equipment that power 
              modern business operations, cloud computing, and digital services. Construction requirements 
              focus on redundancy, reliability, and the massive power and cooling demands of high-density 
              computing equipment.
            </p>
            <p>
              FCS constructs data centers with N+1 or 2N redundancy in critical systems, raised floor 
              environments with precision cooling, UPS battery systems and emergency generator backup, 
              and the robust physical security these facilities require. Electrical infrastructure often 
              rivals the building construction cost, with substations and distribution systems delivering 
              megawatts of power to server halls. Our experience with complex MEP systems positions us 
              well for these demanding projects.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark">Industrial Parks</h3>
            <p>
              Industrial park development involves master planning and constructing multiple buildings 
              with shared infrastructure and coordinated site development. These projects require a 
              developer's perspective combined with construction expertise to deliver efficient, 
              attractive industrial communities that appeal to tenants while maximizing land utilization.
            </p>
            <p>
              FCS supports industrial park developers with phased construction programs that allow 
              buildings to come online as tenant demand materializes. We handle shared infrastructure 
              including roads, stormwater systems, utilities, and common areas, as well as the individual 
              building construction. Our experience with multi-building programs helps developers maintain 
              quality consistency while meeting the varied requirements of different tenants and use types 
              within a single park.
            </p>
          </div>
        </div>
      </section>

      {/* Tilt-Wall Construction */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Tilt-Wall Construction for Industrial Buildings
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Tilt-wall construction (also called tilt-up construction) has become the dominant method 
                for building industrial facilities in Florida and across the Sun Belt. This technique 
                involves casting concrete wall panels horizontally on the building's floor slab, then 
                tilting them into vertical position using large cranes. The result is a durable, 
                fire-resistant structure with excellent thermal performance and minimal long-term 
                maintenance requirements.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">What is Tilt-Wall Construction?</h3>
              <p>
                The tilt-wall process begins after site work and foundations are complete. The building's 
                concrete floor slab is poured first, then used as a casting surface for the wall panels. 
                Workers install forms on the slab, place reinforcing steel and embedded items (door frames, 
                window frames, electrical boxes, connection hardware), then pour concrete into the forms. 
                After the concrete cures—typically 7-14 days depending on panel size and mix design—cranes 
                lift the panels from horizontal to vertical and set them on foundation brackets.
              </p>
              <p>
                Panels are temporarily braced while workers make structural connections at the roof and 
                between adjacent panels. Once the roof structure is installed and connections are complete, 
                the braces are removed and the building envelope is essentially complete. Interior build-out, 
                MEP systems, and finishes follow. The entire shell construction phase is remarkably fast 
                compared to traditional construction methods.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Advantages for Industrial Buildings</h3>
              <p>
                Tilt-wall construction offers compelling advantages for industrial applications:
              </p>
              <ul>
                <li><strong>Durability:</strong> Concrete panels resist impacts from forklifts and trucks, 
                handle Florida's harsh weather, and last 50+ years with minimal maintenance.</li>
                <li><strong>Fire Resistance:</strong> Concrete walls provide inherent fire resistance, often 
                eliminating the need for additional fire-rated assemblies and potentially reducing 
                insurance costs.</li>
                <li><strong>Thermal Mass:</strong> The mass of concrete panels moderates temperature swings, 
                improving energy efficiency for climate-controlled buildings and reducing HVAC loads.</li>
                <li><strong>Design Flexibility:</strong> Panels can be cast in virtually any shape, allowing 
                for reveals, recesses, and architectural treatments without significant cost premium.</li>
                <li><strong>Speed of Construction:</strong> Once casting begins, the shell phase proceeds 
                quickly. A 100,000 SF building's walls can be erected in just a few weeks.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark">Design Considerations</h3>
              <p>
                Successful tilt-wall construction requires early coordination between the architect, 
                structural engineer, and contractor. Panel sizes are limited by crane capacity and 
                site access—typical panels range from 20 to 50 feet wide and up to 50+ feet tall, 
                weighing 50-150 tons each. The casting layout must be planned to allow crane access 
                and efficient erection sequencing.
              </p>
              <p>
                Architectural features like recessed window openings, reveals, and decorative patterns 
                must be designed into the formwork. These elements add visual interest at minimal 
                additional cost when incorporated early in design. Paint, stucco, or other finishes 
                can be applied after erection to achieve the desired appearance for office areas or 
                public-facing elevations.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">The Construction Process</h3>
              <p>
                A typical tilt-wall industrial project follows this sequence: Site preparation and 
                earthwork (4-8 weeks), foundation construction (3-4 weeks), floor slab and panel 
                casting bed (2-3 weeks), panel casting and curing (4-6 weeks with multiple pour cycles), 
                panel erection (2-4 weeks depending on building size), roof structure installation 
                (3-4 weeks), and building envelope completion (2-3 weeks). This shell phase of 
                approximately 5-6 months is followed by MEP rough-in, interior build-out, and 
                finishes based on tenant requirements.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Cost Benefits</h3>
              <p>
                While tilt-wall construction typically costs 10-20% more than pre-engineered metal 
                buildings for the initial shell, the lifecycle cost advantages are substantial. 
                Reduced maintenance (no repainting, no panel replacement), lower energy costs from 
                thermal mass, and superior durability translate to better long-term value. For 
                owner-occupied facilities and institutional investors holding properties long-term, 
                tilt-wall construction is often the economically superior choice despite higher 
                upfront investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steel Building Construction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <HardHat className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Steel Building Construction
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Steel construction remains a popular choice for industrial buildings, offering 
                advantages in speed, cost, and clear-span capabilities. FCS builds both pre-engineered 
                metal buildings (PEMB) and conventional structural steel frame buildings, selecting 
                the appropriate system based on project requirements, budget, and long-term objectives.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Pre-Engineered Metal Buildings</h3>
              <p>
                Pre-engineered metal buildings (also called metal building systems or MBS) are designed 
                and fabricated by specialized manufacturers, then erected on site by certified contractors. 
                These buildings use tapered rigid frame construction—the structural members are deeper 
                at connections where moments are highest and shallower at midspan where loading is lower. 
                This optimization results in efficient use of steel and competitive pricing.
              </p>
              <p>
                The pre-engineering process means the manufacturer handles structural calculations, 
                shop drawings, and fabrication. Components arrive at site ready for erection with 
                pre-punched holes and matching connection hardware. This streamlined process reduces 
                field labor and accelerates construction schedules. A 50,000 SF metal building can 
                typically be erected in 6-8 weeks once foundations are complete.
              </p>
              <p>
                Pre-engineered buildings excel for clear-span applications up to 150+ feet without 
                interior columns, making them ideal for warehouses, manufacturing facilities, and 
                aircraft hangars where unobstructed floor space is paramount. The systems also accommodate 
                mezzanines, overhead cranes, and various door configurations with standard solutions 
                from manufacturers.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Conventional Structural Steel</h3>
              <p>
                Conventional structural steel frame construction uses standard wide-flange beams and 
                columns designed for each specific project. This approach offers maximum flexibility 
                for complex configurations, heavy loads, and integration with other structural systems. 
                Multi-story industrial buildings, heavy manufacturing facilities with large overhead 
                cranes, and projects requiring specific aesthetic treatments often utilize conventional 
                steel framing.
              </p>
              <p>
                Conventional steel construction typically costs more than pre-engineered buildings due 
                to custom fabrication and more intensive engineering. However, it provides solutions 
                for requirements that exceed pre-engineered system capabilities—crane capacities over 
                20-30 tons, unusual geometries, and hybrid structures combining steel with other 
                materials like concrete or masonry.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Advantages and Applications</h3>
              <p>
                Steel building construction offers several advantages for industrial applications:
              </p>
              <ul>
                <li><strong>Speed:</strong> Pre-fabricated components and efficient erection procedures 
                deliver faster construction than cast-in-place concrete methods.</li>
                <li><strong>Cost-Effective:</strong> For basic shell buildings and clear-span applications, 
                pre-engineered steel typically offers the lowest initial construction cost.</li>
                <li><strong>Clear Spans:</strong> Steel frames achieve spans exceeding 150 feet without 
                interior columns, maximizing usable floor space.</li>
                <li><strong>Expansion Flexibility:</strong> Steel buildings can be expanded relatively 
                easily by removing end walls and extending the frame system.</li>
                <li><strong>Lightweight:</strong> Steel structures impose lower loads on foundations, 
                potentially reducing site work costs, especially on poor soils.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark">Clear Span Capabilities</h3>
              <p>
                For operations requiring maximum unobstructed floor space—distribution centers with 
                high-density racking, manufacturing with large equipment footprints, or warehouse 
                operations using reach trucks that need wide aisles—clear span construction eliminates 
                interior columns that would interfere with operations. Pre-engineered metal buildings 
                routinely achieve 100-foot clear spans economically, with wider spans available at 
                additional cost. This compares favorably to tilt-wall construction, which typically 
                requires interior columns at 50-60 foot spacing for economical design.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Expansion Flexibility</h3>
              <p>
                One of steel construction's underappreciated advantages is expansion flexibility. 
                Businesses that anticipate growth can build steel facilities designed for future 
                expansion. Endwall frames can be designed as future interior frames, foundations 
                can extend to anticipated building limits, and utility infrastructure can be sized 
                for expanded capacity. When expansion is needed, removing the endwall and extending 
                the frame system is straightforward compared to expanding concrete buildings. For 
                companies in growth mode, this flexibility can significantly reduce long-term 
                facility costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tilt-Wall vs Metal Buildings Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-6 text-center">
              Tilt-Wall vs Metal Buildings: Choosing the Right System
            </h2>
            <p className="text-lg text-gray-700 text-center">
              Both tilt-wall and metal building construction deliver excellent industrial facilities. 
              The right choice depends on your priorities, budget, and long-term plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-brand-gold" />
                Tilt-Wall Construction
              </h3>
              <ul className="space-y-3">
                {[
                  "Superior durability and impact resistance",
                  "Excellent fire resistance (often unrated walls)",
                  "Better thermal mass for energy efficiency",
                  "Lower long-term maintenance costs",
                  "Premium appearance for Class A industrial",
                  "Ideal for climate-controlled facilities",
                  "Higher initial construction cost",
                  "Longer construction timeline (8-12 months)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <HardHat className="w-6 h-6 text-brand-gold" />
                Pre-Engineered Metal
              </h3>
              <ul className="space-y-3">
                {[
                  "Fastest construction timeline (4-6 months)",
                  "Lower initial construction cost",
                  "Exceptional clear-span capabilities (150+ feet)",
                  "Easy future expansion",
                  "Lighter foundation requirements",
                  "Good for speculative development",
                  "Higher maintenance over building life",
                  "Less thermal mass (higher energy use)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
            <h3 className="text-2xl font-bold text-brand-green-dark">When to Choose Each System</h3>
            <p>
              <strong>Choose tilt-wall construction when:</strong> You're building for long-term ownership, 
              need climate-controlled space (refrigeration, food processing, pharmaceuticals), want Class A 
              industrial appearance, require fire-resistant construction, or prioritize lower lifecycle costs 
              over initial savings. Institutional investors and owner-occupants typically favor tilt-wall 
              for its durability and long-term value.
            </p>
            <p>
              <strong>Choose metal building construction when:</strong> Speed to occupancy is critical, 
              you need very large clear spans without interior columns, future expansion is likely, initial 
              budget is constrained, or you're developing speculative space where time-to-market matters 
              more than long-term ownership costs. Developers building for merchant sale or short-term 
              hold often prefer metal buildings.
            </p>
            <p>
              <strong>Consider hybrid approaches:</strong> Many projects benefit from combining systems—metal 
              structural frames with tilt-wall exterior panels, or tilt-wall warehouse with metal building 
              canopies and additions. These hybrid designs optimize cost, performance, and appearance for 
              specific project requirements.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark">Cost and Timeline Comparison</h3>
            <p>
              For a typical 50,000 SF warehouse shell, pre-engineered metal construction runs approximately 
              $40-60/SF ($2-3M total) and takes 4-6 months after permitting. Tilt-wall construction for the 
              same building runs approximately $50-75/SF ($2.5-3.75M total) and takes 8-12 months. However, 
              over a 30-year building life, the tilt-wall building's lower maintenance and energy costs often 
              recover the premium and then some.
            </p>

            <h3 className="text-2xl font-bold text-brand-green-dark">Long-Term Maintenance Considerations</h3>
            <p>
              Metal buildings require periodic maintenance including repainting every 15-20 years, 
              sealant replacement at panel joints, and eventual panel replacement in high-wear areas. 
              Tilt-wall buildings need minimal maintenance—occasional joint sealant replacement and 
              paint touch-up for aesthetic areas. Over a typical 30-year ownership period, tilt-wall 
              maintenance costs are typically 50-70% lower than metal buildings, partially or fully 
              offsetting the higher initial investment.
            </p>
          </div>
        </div>
      </section>

      {/* Industrial Site Development */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Industrial Site Development
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Successful industrial construction begins long before vertical construction starts. 
                Site selection, due diligence, and site development fundamentally impact project success, 
                schedule, and budget. FCS provides comprehensive pre-construction support to help clients 
                evaluate sites and develop them efficiently.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Site Selection Considerations</h3>
              <p>
                Industrial site selection involves balancing multiple factors: location for labor and 
                customers, site characteristics, utility availability, zoning, and cost. The ideal 
                site offers flat topography with good soils, adequate utilities, proper zoning, good 
                transportation access, and room for future expansion—all at a competitive price. 
                Reality usually involves trade-offs.
              </p>
              <p>
                Key evaluation criteria include:
              </p>
              <ul>
                <li><strong>Zoning and entitlements:</strong> Verify industrial use is permitted and 
                understand any conditional use requirements, height limits, or setback restrictions.</li>
                <li><strong>Transportation access:</strong> Evaluate truck routes, interstate access, 
                turning movements for semis, and any bridge weight limits that could affect operations.</li>
                <li><strong>Labor availability:</strong> Consider workforce demographics, commute times, 
                and proximity to workforce housing.</li>
                <li><strong>Utility capacity:</strong> Manufacturing needs significant electrical capacity. 
                Verify available power without costly utility extensions.</li>
                <li><strong>Soil conditions:</strong> Poor soils (common in Florida) significantly impact 
                foundation costs. Geotechnical investigation before purchase is essential.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark">Environmental Assessments</h3>
              <p>
                Environmental due diligence is critical for industrial sites. Phase I Environmental Site 
                Assessments review historical uses and identify potential contamination. Phase II 
                assessments involve sampling to confirm or rule out contamination. For sites with 
                environmental issues, cleanup costs and liability allocation must be addressed before 
                development proceeds.
              </p>
              <p>
                Florida sites may also require wetland delineation, endangered species surveys, and 
                cultural resource assessments depending on location and previous development history. 
                These studies take time—factor 2-4 months for thorough environmental due diligence.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Utility Requirements</h3>
              <p>
                Industrial buildings have significant utility demands that must be confirmed during site 
                selection. Electrical service for manufacturing can range from hundreds of kilowatts to 
                multiple megawatts—verify utility capacity and extension costs. Water supply must support 
                fire protection (large industrial buildings need substantial fire flows) plus process 
                needs. Sanitary sewer must have capacity for employees and any process discharge. Natural 
                gas may be needed for heating or process applications.
              </p>
              <p>
                Sites requiring significant utility extensions face both direct costs (the construction) 
                and timeline impacts. Working with utility companies on capacity agreements, extension 
                designs, and construction schedules is a key pre-construction activity that FCS manages 
                for our clients.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Access and Transportation</h3>
              <p>
                Industrial operations depend on efficient truck access. Site planning must accommodate 
                tractor-trailer turning movements at driveways and within the site. Dock configurations 
                need adequate apron depth (typically 120+ feet) for trailer maneuvering. Internal 
                circulation should separate truck and passenger vehicle traffic for safety.
              </p>
              <p>
                Transportation network connections matter significantly for distribution and logistics 
                facilities. Interstate access, traffic congestion on last-mile routes, and weight 
                restrictions on local roads all affect operational efficiency. For manufacturing 
                receiving raw materials or shipping finished goods, rail access may be valuable.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Stormwater Management</h3>
              <p>
                Florida's flat terrain and intense rainfall require substantial stormwater management 
                systems. Industrial sites with large building footprints and extensive truck courts 
                generate significant runoff that must be captured, treated, and released in compliance 
                with water management district permits. Retention ponds, detention systems, and 
                treatment facilities typically consume 15-25% of total site area.
              </p>
              <p>
                Stormwater design must begin early in project planning—pond sizing affects available 
                building area, and permit processing takes 2-4 months. Underground detention systems 
                can preserve buildable area but at significant cost premium. FCS works with civil 
                engineers to optimize stormwater solutions that meet permit requirements while 
                maximizing usable site area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Industrial Features */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Specialized Industrial Building Features
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Beyond the building shell, industrial facilities require specialized systems that support 
                their operational functions. FCS coordinates the design and installation of these 
                specialized features, working with equipment suppliers and specialty subcontractors to 
                deliver fully functional facilities.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Loading Docks and Dock Equipment</h3>
              <p>
                Loading docks are the interface between warehouses and the transportation network. 
                Proper dock design significantly impacts operational efficiency. Key decisions include 
                dock height (typically 48-52 inches to match trailer beds), door sizing (9x10 feet 
                standard, larger for specialized equipment), and spacing (12-14 feet on center for 
                standard operations, wider for high-volume facilities).
              </p>
              <p>
                Dock equipment transforms basic openings into efficient loading positions:
              </p>
              <ul>
                <li><strong>Dock levelers:</strong> Bridge the gap between dock and trailer, 
                accommodating different trailer heights and movement during loading. Mechanical, 
                hydraulic, and air-powered options serve different duty levels.</li>
                <li><strong>Dock seals and shelters:</strong> Weather protection around dock openings 
                maintains interior climate and prevents energy loss during loading operations.</li>
                <li><strong>Vehicle restraints:</strong> Safety systems that secure trailers to docks, 
                preventing premature departure during loading—required by OSHA for most operations.</li>
                <li><strong>Dock lights and communication:</strong> Interior and exterior lights 
                signal dock status, while communication systems coordinate with drivers.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark">Overhead Crane Systems</h3>
              <p>
                Manufacturing and heavy industrial facilities often require overhead crane systems for 
                material handling. These systems range from light-duty jib cranes and workstation 
                bridge cranes (under 5 tons) to heavy-duty overhead bridge cranes serving entire 
                manufacturing bays (up to 50+ tons).
              </p>
              <p>
                Crane installation requires careful structural coordination. The building frame must 
                be designed for crane loads—both the static weight of crane and payload, and the 
                dynamic forces from crane motion. Runway beams, crane rails, and support structures 
                must be precisely aligned. Electrical systems supply crane motors, and control systems 
                (pendant, cab, or wireless) must be selected and installed.
              </p>
              <p>
                FCS coordinates crane requirements during pre-construction, working with crane 
                suppliers to establish loads, clearances, and utility requirements that inform 
                building design. This early coordination prevents costly structural modifications 
                after construction begins.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Clear Heights and Column Spacing</h3>
              <p>
                Modern warehouses maximize cubic storage capacity through increased clear heights—the 
                distance from finished floor to the lowest overhead obstruction (typically the bottom 
                of roof structure or overhead utilities). Standard clear heights have increased 
                dramatically: buildings from 20 years ago featured 24-28 foot clears, while today's 
                distribution facilities commonly specify 32-36 feet, with e-commerce fulfillment 
                centers reaching 40+ feet.
              </p>
              <p>
                Column spacing determines racking layouts and operational flexibility. Standard 
                structural bays of 50x50 feet or 50x60 feet accommodate most racking configurations, 
                while some operations specify 50x75 feet or larger bays for wide aisle applications. 
                Clear-span construction eliminates interior columns entirely but at significant 
                structural cost. The optimal balance depends on specific operational requirements 
                and cost constraints.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Industrial Floor Specifications</h3>
              <p>
                Industrial floors must meet demanding requirements for flatness, levelness, and load 
                capacity. Forklift traffic, high-bay racking, and heavy equipment all stress floor 
                systems. Poorly designed or constructed floors lead to operational problems, equipment 
                damage, and costly repairs.
              </p>
              <p>
                Key floor specifications include:
              </p>
              <ul>
                <li><strong>Flatness (FF) and Levelness (FL):</strong> Measured using F-number 
                system, with higher numbers indicating flatter/more level surfaces. Standard 
                warehouse floors: FF25/FL20. High-tolerance for VNA turret trucks: FF50/FL50 or higher.</li>
                <li><strong>Load capacity:</strong> Design for rack leg loads (typically 4,000-8,000 
                lbs per leg) and forklift wheel loads. Heavy manufacturing may require significantly 
                higher capacities.</li>
                <li><strong>Joint treatment:</strong> Control joints manage cracking but must be 
                filled or armored in high-traffic areas to prevent damage from forklift wheels.</li>
                <li><strong>Surface treatment:</strong> Densifiers, hardeners, and coatings protect 
                concrete from wear, dusting, and chemical exposure.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark">Fire Suppression Systems</h3>
              <p>
                Industrial fire suppression protects buildings, inventory, and operations. System 
                requirements depend on building size, contents, storage configurations, and local 
                fire code requirements. Modern high-bay warehouses typically require Early Suppression 
                Fast Response (ESFR) sprinkler systems that deliver large volumes of water quickly 
                to suppress fires in high-piled storage.
              </p>
              <p>
                ESFR systems require significant water supply—often 1,500+ gallons per minute at 
                substantial pressure. Many sites require fire pumps, storage tanks, or utility 
                upgrades to meet these demands. Fire suppression costs are significant (often 
                $2-4/SF for sprinkler systems alone) and must be budgeted early in project planning.
              </p>
              <p>
                Specialized storage—flammable liquids, aerosols, high-hazard commodities—may require 
                foam systems, in-rack sprinklers, or other enhanced protection. FCS works with fire 
                protection engineers to design compliant systems that meet insurance requirements 
                while optimizing cost.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Climate Control Systems</h3>
              <p>
                Climate control requirements vary dramatically across industrial applications. Basic 
                warehouses may need only ventilation, while manufacturing facilities require heating 
                and cooling for worker comfort and process requirements. Climate-controlled storage 
                demands precise temperature and humidity control year-round.
              </p>
              <p>
                System options for large industrial buildings include rooftop units (RTUs) for 
                modular cooling/heating, make-up air units for facilities requiring high ventilation 
                rates, radiant heating for high-bay spaces, and big ass fans (HVLS fans) to improve 
                air circulation and perceived comfort. Energy efficiency is critical given the 
                large volumes being conditioned—building envelope quality, equipment efficiency, 
                and controls optimization all impact operating costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Industrial Construction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
                Industrial Construction in Florida
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Building industrial facilities in Florida presents unique challenges and opportunities. 
                The state's climate, regulatory environment, and geographic considerations require 
                specialized knowledge that out-of-state contractors often lack. FCS brings decades 
                of Florida-specific experience to every industrial project.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Hurricane Resistance for Large Structures</h3>
              <p>
                Florida Building Code requires all structures to withstand hurricane-force winds, but 
                large industrial buildings face particular challenges. The large, flat roofs of 
                warehouses and manufacturing facilities experience significant uplift forces during 
                hurricanes. Wall panels must resist both positive and negative pressures, with 
                connections engineered to transfer loads to foundations.
              </p>
              <p>
                For tilt-wall construction, this means reinforced panels with properly designed 
                embedments and connections. Panel-to-panel and panel-to-roof connections must be 
                detailed for wind loads, not just gravity. For metal buildings, primary and secondary 
                framing must be upgraded from standard, roof deck attachments enhanced, and wall 
                panels specified for appropriate wind pressures. Large roll-up doors and dock doors 
                require wind-rated specifications—these are often weak points in industrial building 
                envelopes during hurricanes.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Flood Zone Considerations</h3>
              <p>
                Much of Florida lies in FEMA flood zones, and industrial sites are no exception. 
                Flood zone designation affects both construction requirements and insurance costs. 
                Buildings in A or V zones require elevated construction or flood-proofing measures 
                that significantly impact cost and design.
              </p>
              <p>
                Site selection should prioritize sites outside high-risk flood zones when possible. 
                For sites in flood zones, strategies include fill placement to elevate buildings 
                above base flood elevation, flood-resistant construction materials and methods, 
                and operational planning for flood events. FCS helps clients understand flood 
                zone implications during site selection and designs appropriate mitigation measures.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark">Energy Efficiency in Florida Climate</h3>
              <p>
                Florida's hot, humid climate makes energy efficiency critical for industrial buildings, 
                particularly those requiring climate control. Key strategies include:
              </p>
              <ul>
                <li><strong>Building envelope:</strong> Insulated roof systems (R-19 minimum, R-30+ 
                for climate-controlled), insulated wall panels, and cool roof membranes that reflect 
                solar heat.</li>
                <li><strong>HVAC efficiency:</strong> High-efficiency equipment, variable frequency 
                drives on large motors, demand-controlled ventilation, and energy recovery systems.</li>
                <li><strong>Lighting:</strong> LED fixtures with occupancy and daylight sensors, 
                skylights and clerestories for daylighting (with proper UV and heat control).</li>
                <li><strong>Building orientation:</strong> When site permits, orienting long axis 
                east-west reduces solar heat gain through walls.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark">Permitting in Tampa Bay</h3>
              <p>
                Industrial construction permitting in Tampa Bay involves multiple jurisdictions and 
                agencies. Building permits from city or county building departments address structural, 
                mechanical, electrical, and plumbing code compliance. Water management district permits 
                (SWFWMD for most Tampa Bay projects) govern stormwater management. Environmental permits 
                may be required for wetland impacts, air emissions, or other environmental issues.
              </p>
              <p>
                Permitting timelines vary significantly by jurisdiction. Simple projects in 
                contractor-friendly municipalities may permit in 6-8 weeks; complex projects in 
                demanding jurisdictions can take 4-6 months or longer. FCS maintains relationships 
                with permitting officials throughout the Tampa Bay region and understands the specific 
                requirements and timing for each jurisdiction—critical knowledge for realistic 
                project scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
              Industrial Construction Experience
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                FCS has delivered industrial construction projects across Florida for over 40 years. 
                Our portfolio includes warehouses, manufacturing facilities, specialized industrial 
                buildings, and complex infrastructure projects. A sampling of our industrial experience 
                demonstrates our capabilities across project types and scales.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                Coronado Phosphate Mine - Overhead Railway Restoration
              </h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-brand-green-light/20 text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
                  $5 Million Project
                </span>
                <span className="bg-brand-green-light/20 text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
                  Heavy Industrial
                </span>
                <span className="bg-brand-green-light/20 text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
                  Emergency Response
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                When the overhead railway system at Coronado Phosphate Mine collapsed—a critical piece 
                of infrastructure for mining operations—FCS mobilized for emergency reconstruction. 
                This complex project involved heavy structural steel work, coordination with ongoing 
                mining operations, and demanding safety requirements in an active industrial environment.
              </p>
              <p className="text-gray-700">
                The project required structural engineering assessment of the collapsed system, design 
                and fabrication of replacement steel components, crane operations for heavy lifts in 
                confined spaces, and phased construction to minimize disruption to mine operations. 
                FCS delivered the reconstructed railway system on an accelerated schedule, restoring 
                the mine's full operational capacity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                Distribution Center Construction
              </h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-brand-green-light/20 text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
                  Tilt-Wall Construction
                </span>
                <span className="bg-brand-green-light/20 text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
                  High-Bay Storage
                </span>
                <span className="bg-brand-green-light/20 text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
                  ESFR Fire Protection
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                FCS has constructed numerous distribution centers throughout Tampa Bay, ranging from 
                50,000 to over 200,000 square feet. These facilities feature tilt-wall construction 
                for durability, 32-36 foot clear heights for maximum storage density, and modern dock 
                configurations with full dock equipment packages.
              </p>
              <p className="text-gray-700">
                Our distribution center experience includes coordination with racking and material 
                handling equipment suppliers, ESFR sprinkler system design and installation, energy-
                efficient lighting and climate systems, and phased occupancy to meet tenant schedules. 
                We understand the operational requirements of logistics facilities and build accordingly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                Manufacturing Facility Construction
              </h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-brand-green-light/20 text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
                  Process Infrastructure
                </span>
                <span className="bg-brand-green-light/20 text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
                  Overhead Crane Systems
                </span>
                <span className="bg-brand-green-light/20 text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
                  Specialized Utilities
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                Manufacturing construction requires understanding how buildings support production 
                processes. FCS has built facilities for diverse manufacturing operations, coordinating 
                structural systems for overhead cranes, installing specialized electrical services 
                for production equipment, and accommodating process utilities like compressed air, 
                process water, and exhaust systems.
              </p>
              <p className="text-gray-700">
                Our manufacturing facility experience includes working with equipment vendors during 
                design to ensure proper structural provisions, installing foundations and anchor 
                systems for heavy equipment, and coordinating utility installation with equipment 
                startup schedules. The result is facilities that support efficient manufacturing 
                operations from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Industrial Construction FAQs
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

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-4 text-center">
            Industrial Construction Service Areas
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            FCS Construction delivers industrial and warehouse construction throughout Tampa Bay 
            and Central Florida. Our service area includes major industrial corridors and emerging 
            markets across the region.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((location) => (
              <div
                key={location.slug}
                className="bg-white rounded-lg p-4 text-center shadow-sm"
              >
                <span className="font-semibold text-brand-green-dark">
                  {location.name}, FL
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Major industrial corridors: I-4 Corridor (Tampa-Orlando), I-75 Corridor, 
              Port Tampa Bay industrial area, and Lakeland-Polk County logistics hub.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Ready to Build Your Industrial Facility?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From site selection through turnkey delivery, FCS delivers industrial construction 
            projects that meet your operational requirements, schedule, and budget. Contact us 
            for a detailed consultation on your warehouse, manufacturing facility, or flex 
            space project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Industrial Construction Bid
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Related Services"
            links={internalLinks}
          />
        </div>
      </section>
    </>
  );
}
