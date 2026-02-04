import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import {
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Building2,
  Shield,
  Award,
  AlertTriangle,
  FileText,
  Wrench,
  Clock,
  Calendar,
  DollarSign,
  Users,
  Sun,
  Droplets,
  Scale,
  ClipboardCheck,
  Waves,
  Gauge,
  Palmtree,
} from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import {
  LocalBusinessSchema,
  ServiceSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks, RelatedServices, NearbyLocations } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Balcony Reconstruction in Clearwater",
  description:
    "Clearwater balcony reconstruction experts. SB4-D compliance, milestone inspections, condo balcony repair. Structural restoration for condos 3+ stories. Licensed, bonded. Call (813) 420-7561.",
  keywords:
    "balcony reconstruction Clearwater, SB4-D compliance Clearwater, condo balcony repair Clearwater, milestone inspection Clearwater, SIRS Clearwater, balcony waterproofing Clearwater, structural balcony repair Clearwater, HOA balcony contractor Clearwater, Sand Key condo repair, Clearwater Beach balcony restoration",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Residential Services", href: "/services/residential/" },
  { name: "Balcony Reconstruction", href: "/services/residential/balcony-reconstruction/" },
  { name: "Clearwater", href: "/balcony-reconstruction-clearwater/" },
];

const trustBadges = [
  { icon: FileText, label: "SB4-D Compliance" },
  { icon: ClipboardCheck, label: "Milestone Inspections" },
  { icon: Shield, label: "Licensed CBC1262722" },
  { icon: Award, label: "20+ Years Experience" },
];

const services = [
  {
    icon: Building2,
    title: "Structural Balcony Repair",
    description:
      "Complete structural restoration including concrete repair, rebar treatment, carbon fiber reinforcement, and load-bearing element replacement for deteriorated balconies on Clearwater Beach high-rises and condominiums.",
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    description:
      "Multi-layer waterproofing membranes, traffic-bearing deck coatings, drainage correction, and flashing systems engineered specifically for Clearwater's beachfront salt air and UV exposure.",
  },
  {
    icon: Scale,
    title: "Railing Systems",
    description:
      "Code-compliant railing replacement including aluminum, glass, cable, and decorative options with proper anchorage engineering meeting current Florida Building Code and Clearwater building requirements.",
  },
  {
    icon: Wrench,
    title: "Concrete Restoration",
    description:
      "Spall repair, crack injection, surface restoration, and protective coatings using marine-grade materials with enhanced corrosion inhibitors for Clearwater's demanding Gulf Coast environment.",
  },
  {
    icon: ClipboardCheck,
    title: "Milestone Inspection Support",
    description:
      "Coordination with structural engineers for Phase 1 and Phase 2 milestone inspections, repair scoping, and documentation for SB4-D compliance certification of Clearwater buildings.",
  },
  {
    icon: FileText,
    title: "SIRS Compliance",
    description:
      "Structural Integrity Reserve Study support including repair estimates, reserve fund planning assistance, and phased reconstruction programs for Clearwater condo associations.",
  },
];

const clearwaterNeighborhoods = [
  "Clearwater Beach",
  "Sand Key",
  "Island Estates",
  "Belleair",
  "Belleair Beach",
  "Belleair Bluffs",
  "Downtown Clearwater",
  "Clearwater Point",
  "Harbor Oaks",
  "Countryside",
  "Safety Harbor",
  "Dunedin",
];

const processSteps = [
  {
    step: 1,
    title: "Initial Assessment",
    description:
      "Comprehensive structural evaluation including concrete testing, moisture mapping, rebar corrosion analysis, and scope development specifically for Clearwater's beachfront building conditions.",
  },
  {
    step: 2,
    title: "Engineering & Documentation",
    description:
      "Detailed engineering drawings, repair specifications, milestone inspection coordination, and permit applications with the City of Clearwater Building Department.",
  },
  {
    step: 3,
    title: "HOA/Board Presentation",
    description:
      "Professional proposals suitable for condo association board meetings, cost options, phased approaches, and timeline presentations to support Clearwater HOA decision-making.",
  },
  {
    step: 4,
    title: "Mobilization & Phasing",
    description:
      "Site setup, safety barriers, resident notification, and carefully sequenced work schedules designed to minimize disruption to beachfront property residents and seasonal occupants.",
  },
  {
    step: 5,
    title: "Structural Reconstruction",
    description:
      "Concrete removal, rebar treatment or replacement, supplemental reinforcement, and new concrete placement using marine-grade mixes with enhanced corrosion protection for coastal conditions.",
  },
  {
    step: 6,
    title: "Waterproofing & Completion",
    description:
      "Multi-layer waterproofing installation, railing systems, final coatings, inspections, warranty documentation, and maintenance guidelines optimized for Clearwater's Gulf Coast exposure.",
  },
];

const clearwaterFaqs = [
  {
    question: "What is Florida SB4-D and how does it affect Clearwater condominiums?",
    answer:
      "Florida Senate Bill 4-D, enacted in 2022 following the Surfside tragedy, mandates milestone structural inspections for all condominium and cooperative buildings three stories or taller. For Clearwater properties within three miles of the coastline, which includes virtually all of Clearwater Beach, Sand Key, and Island Estates, buildings 25 years or older must complete inspections by specific deadlines, then every 10 years thereafter. Many Clearwater beachfront condos built during the 1970s-1990s tourism boom are now past their critical inspection deadlines, requiring immediate attention to avoid compliance penalties.",
  },
  {
    question: "Why are Clearwater Beach balconies especially vulnerable to deterioration?",
    answer:
      "Clearwater Beach condominiums face some of the most aggressive environmental conditions in Florida for balcony deterioration. The combination of direct Gulf of Mexico salt spray, intense tropical UV exposure (Clearwater averages 240+ sunny days annually), high humidity averaging 75%+, and seasonal hurricane-driven rain creates ideal conditions for accelerated concrete carbonation and reinforcing steel corrosion. Beachfront properties on Sand Key and Clearwater Beach experience salt air concentrations 3-5 times higher than even inland Tampa locations, requiring specialized marine-grade materials and more frequent maintenance.",
  },
  {
    question: "How much does balcony reconstruction cost for Clearwater condominiums?",
    answer:
      "Clearwater balcony reconstruction projects typically range from $100,000 to several million dollars depending on building size, number of units, extent of deterioration, and beachfront accessibility challenges. Individual balcony costs range from $15,000-$50,000+ per unit for comprehensive restoration including structural repairs, waterproofing, and railing replacement. Sand Key and Clearwater Beach high-rises often face higher costs due to salt air damage severity and logistics of working on beachfront properties. FCS provides detailed assessments and phased proposals designed for HOA reserve fund coordination.",
  },
  {
    question: "What are the warning signs of balcony deterioration on Clearwater Beach condos?",
    answer:
      "Critical warning signs specific to Clearwater beachfront balconies include: cracking or spalling concrete especially on the underside of balcony slabs, rust stains or orange discoloration indicating rebar corrosion, soft or hollow-sounding deck surfaces when walked on, visible separation between the balcony and building wall, salt crystal deposits (efflorescence) on concrete surfaces, deteriorated or corroded railings particularly at anchor points, water pooling due to failed drainage slopes, and peeling or bubbling waterproofing coatings. Clearwater's salt air accelerates these conditions dramatically compared to inland properties.",
  },
  {
    question: "Do Clearwater buildings closer to the Gulf have stricter SB4-D requirements?",
    answer:
      "Yes. Under SB4-D, buildings within three miles of the coastline must complete their initial milestone inspection at 25 years of age, while inland buildings have until 30 years. Since virtually all of Clearwater Beach, Sand Key, Island Estates, and Belleair Beach fall within this coastal zone, these properties face earlier and more frequent inspection requirements. Additionally, the accelerated deterioration from Gulf salt exposure means these buildings often require more extensive repairs when inspected, making proactive assessment even more critical for Clearwater beachfront associations.",
  },
  {
    question: "How does FCS work with Clearwater condo associations and property managers?",
    answer:
      "Florida Construction Specialists has extensive experience working with Clearwater Beach condo associations and property management companies. We understand the unique dynamics of beachfront community governance, seasonal resident populations, and special assessment coordination. Our team provides detailed proposals suitable for board presentations, attends association meetings when requested, offers flexible payment terms aligned with special assessment schedules, and maintains clear communication with all stakeholders. We're familiar with Clearwater's building department requirements and have established relationships that help streamline permit processes.",
  },
  {
    question: "Can residents remain in their Clearwater condo during balcony reconstruction?",
    answer:
      "In most cases, yes. FCS implements careful scheduling, safety barriers, and noise management to allow continued occupancy during balcony reconstruction. Residents need to clear balcony furniture and may have restricted balcony access during their unit's active work phase (typically 2-4 weeks per balcony). For beachfront properties, we coordinate work schedules to minimize disruption during peak tourism seasons when many Clearwater units are occupied. Only in cases of severe structural deficiency requiring immediate shoring would temporary relocation be recommended.",
  },
  {
    question: "What waterproofing systems does FCS use for Clearwater beachfront balconies?",
    answer:
      "Our Clearwater waterproofing systems are specifically engineered for extreme Gulf Coast exposure and include: deep-penetrating concrete sealers with enhanced chloride ion resistance, premium elastomeric waterproofing membranes rated for coastal UV exposure, reinforced coating systems at critical junctions and transitions, slope correction ensuring proper drainage (minimum 1/4 inch per foot), professional flashing at door thresholds and wall intersections using marine-grade materials, and UV-stable traffic-bearing finish coatings. All systems carry manufacturer warranties appropriate for coastal installation plus our 10-year workmanship guarantee.",
  },
  {
    question: "How long does balcony reconstruction take for a Sand Key or Clearwater Beach high-rise?",
    answer:
      "Project timelines depend on building size, extent of deterioration, and accessibility. For Clearwater Beach and Sand Key high-rises, individual balcony reconstruction typically requires 2-4 weeks per unit. Multi-unit projects are phased to minimize resident disruption, typically completing 4-6 balconies simultaneously. A 100+ unit beachfront tower might take 8-14 months depending on scope, weather conditions, permit processing, and coordination around seasonal occupancy patterns. We provide detailed schedules during project planning that account for Clearwater's unique considerations.",
  },
  {
    question: "What happens if a Clearwater condo association fails to comply with SB4-D?",
    answer:
      "Non-compliance with SB4-D carries serious consequences for Clearwater condominiums: associations face potential personal liability exposure for board members, insurance carriers may deny coverage or dramatically increase premiums, property values decline significantly in Clearwater's competitive beachfront market as buyers become aware of compliance issues, units may become unsellable or unfinanceable, and in extreme cases buildings can be declared unsafe for occupancy. Given Clearwater Beach's high property values and desirability, non-compliant buildings face particularly severe market penalties. The initial inspection deadline for many Clearwater buildings has already passed, making immediate action critical.",
  },
];

const internalLinks = [
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/services/residential/balcony-reconstruction/", label: "Balcony Reconstruction Services" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/balcony-reconstruction-tampa/", label: "Balcony Reconstruction Tampa" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function BalconyReconstructionClearwaterPage() {
  return (
    <>
      <LocalBusinessSchema city="Clearwater" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction"
        serviceDescription="Expert balcony reconstruction and SB4-D compliance services for Clearwater Beach condominiums, Sand Key high-rises, and multi-family buildings. Structural repair, waterproofing, milestone inspection support. Projects from $100,000 to $10 million+."
        city="Clearwater"
        minPrice="100000"
      />
      <FAQSchema faqs={clearwaterFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green font-semibold">Serving Clearwater, FL</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Balcony Reconstruction in Clearwater
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Clearwater Beach's trusted contractor for beachfront condominium and multi-family balcony
              reconstruction. SB4-D compliance specialists with expertise in milestone
              inspections, structural restoration, and comprehensive waterproofing for Gulf Coast buildings
              three stories and higher. Projects from $100K to $10M+.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <badge.icon className="w-5 h-5 text-brand-green" />
                  <span className="text-white font-medium">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request Balcony Assessment
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

      {/* SB4-D Alert Banner */}
      <section className="py-4 bg-amber-50 border-y border-amber-200">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 text-amber-800">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-semibold text-center">
              <strong>SB4-D Compliance Alert:</strong> Clearwater Beach buildings 3+ stories must complete
              milestone inspections. Many 1980s-90s era condos on Sand Key and Clearwater Beach are now past deadlines. Contact FCS for immediate assessment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Clearwater Beach's Premier Balcony Reconstruction Contractor
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists is Clearwater's trusted prime contractor for
                large-scale balcony reconstruction and SB4-D compliance projects. With over 20
                years of experience serving Clearwater Beach condominium associations, Sand Key
                property managers, and waterfront building owners, we specialize in the complex structural
                restoration work required to protect residents and bring beachfront buildings into compliance
                with Florida's milestone inspection requirements.
              </p>

              <p className="text-gray-600 mb-6">
                Clearwater Beach's Gulf Coast location presents the most demanding environmental challenges
                for balcony construction anywhere in the Tampa Bay region. Properties throughout the barrier
                islands, from the iconic high-rises along Gulfview Boulevard to luxury condominiums on Sand Key
                and Island Estates, face accelerated deterioration from direct salt spray, intense tropical
                UV radiation, extreme humidity, and seasonal hurricane exposure. Our team has restored balconies
                at numerous Clearwater beachfront condominiums, understanding both the technical requirements
                specific to coastal construction and the association governance processes that make these
                projects successful.
              </p>

              <p className="text-gray-600 mb-8">
                As a prime contractor, FCS maintains direct accountability for every project. We
                never operate as a subcontractor, ensuring your association works directly with the
                company responsible for quality, timeline, and warranty obligations. Our $10M+
                bonding capacity provides confidence that even the largest beachfront tower projects will
                be completed to specification, with materials and methods specifically engineered for
                Clearwater's unique coastal environment.
              </p>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                    alt="Balcony tile installation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Balcony Decking</p>
                    <p className="text-xs text-gray-200">Tile Installation</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/FCS-Exterior-Waterproofing/fcs-exterior-waterproofing-display.webp"
                    alt="Waterproofing application"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Waterproofing</p>
                    <p className="text-xs text-gray-200">Structural Protection</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/custom-home-construction-2/custom-home-construction-2-display.webp"
                    alt="Completed project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Completed Project</p>
                    <p className="text-xs text-gray-200">Quality Construction</p>
                  </div>
                </div>
              </div>

              {/* Target Audience Section */}
              <div className="bg-brand-green-bg rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-brand-green" />
                  Who We Serve in Clearwater
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Condo Associations</span>
                      <p className="text-sm text-gray-600">
                        Board members navigating SB4-D compliance for beachfront properties
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Property Managers</span>
                      <p className="text-sm text-gray-600">
                        Managing milestone inspection repairs for Sand Key and Clearwater Beach
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Waterfront Building Owners</span>
                      <p className="text-sm text-gray-600">
                        Gulf-front and bay-front multi-family properties
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">HOA Boards</span>
                      <p className="text-sm text-gray-600">
                        Decision-makers seeking qualified contractors for $100K+ projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Need a Balcony Assessment for Your Clearwater Building?
                    </h4>
                    <p className="text-gray-600">
                      We provide complimentary consultations for qualified projects.
                    </p>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-dark transition-colors whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5" />
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">HOA & Property Managers</h3>
                <p className="text-gray-200 mb-4">
                  Request a complimentary assessment and proposal for your Clearwater Beach condominium
                  building's balcony reconstruction needs.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-full hover:bg-brand-green-forest transition-colors w-full"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* SB4-D Info Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  SB4-D Quick Facts
                </h3>
                <ul className="space-y-2 text-amber-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Applies to:</span> Buildings 3+ stories
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Coastal:</span> 25 years, then every 10 years
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Clearwater Beach:</span> All within coastal zone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">SIRS:</span> Reserve study now required
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Penalties:</span> Liability, insurance, sales
                  </li>
                </ul>
                <Link
                  href="/florida-sb4d-compliance-guide/"
                  className="text-amber-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Read Full SB4-D Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Services */}
              <RelatedServices city="Clearwater" currentService="balcony-reconstruction" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="Clearwater"
                service="balcony-reconstruction"
                serviceName="Balcony Reconstruction"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Visual Break */}
      <ContentParallax
        src="/images/fcs-balcony-waterproofing/fcs-balcony-waterproofing-large.webp"
        alt="Balcony reconstruction services"
        title="Expert Balcony Reconstruction"
        subtitle="40+ years protecting Tampa Bay condos and multi-family properties"
        overlayOpacity={0.55}
      />

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Balcony Reconstruction Services in Clearwater
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive balcony restoration and SB4-D compliance solutions for Clearwater Beach
              condominiums, Sand Key high-rises, and Gulf Coast multi-family buildings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-brand-green-bg rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clearwater-Specific Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Clearwater Beach's Unique Balcony Challenges
              </h2>

              <p className="text-gray-600 mb-6">
                Clearwater's position directly on the Gulf of Mexico creates the most aggressive
                environmental conditions for balcony construction in the entire Tampa Bay area. The
                combination of intense salt spray, extreme UV exposure, tropical humidity, and
                hurricane-driven weather creates ideal conditions for rapid concrete degradation and
                reinforcing steel corrosion that requires specialized restoration approaches.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Waves className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Direct Gulf Salt Exposure</h4>
                    <p className="text-gray-600 text-sm">
                      Clearwater Beach balconies face direct Gulf of Mexico salt spray, with chloride
                      concentrations 3-5x higher than inland Tampa properties. This dramatically
                      accelerates rebar corrosion and concrete spalling.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Intense Tropical UV</h4>
                    <p className="text-gray-600 text-sm">
                      Clearwater averages 240+ sunny days annually with intense tropical UV radiation.
                      This degrades waterproofing membranes faster than anywhere else in the region,
                      requiring premium UV-stable coatings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hurricane & Storm Exposure</h4>
                    <p className="text-gray-600 text-sm">
                      Beachfront properties face direct hurricane impacts with wind-driven rain
                      penetrating failed sealants. Summer storms bring heavy rainfall that
                      overwhelms inadequate drainage systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Extreme Humidity</h4>
                    <p className="text-gray-600 text-sm">
                      Average humidity of 75%+ promotes concrete carbonation year-round, reducing
                      pH levels and eliminating the protective alkaline environment that protects
                      reinforcing steel from corrosion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Clearwater Areas We Serve
              </h3>
              <p className="text-gray-600 mb-6">
                FCS provides balcony reconstruction services throughout Clearwater and surrounding
                beach communities. Our team is familiar with local building departments, permit
                processes, and the specific challenges of Clearwater's diverse beachfront building stock.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {clearwaterNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-700 text-sm">{neighborhood}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SB4-D Compliance Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                SB4-D Compliance for Clearwater Condominiums
              </h2>

              <p className="text-gray-200 mb-6">
                Florida Senate Bill 4-D, enacted in response to the Surfside condominium collapse,
                establishes mandatory milestone inspections and Structural Integrity Reserve
                Studies for buildings three stories or taller. For Clearwater Beach properties,
                virtually all beachfront buildings fall within the coastal zone requiring inspection
                at 25 years, creating urgent timelines for assessment and structural repairs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Phase 1 Visual Inspection:</strong> Licensed engineer identifies areas
                    of potential concern through visual assessment of exterior elevated elements including balconies.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Phase 2 Testing:</strong> If substantial deterioration is found,
                    detailed testing and analysis quantifies repair requirements for Clearwater's coastal conditions.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>SIRS Requirements:</strong> Clearwater associations must maintain reserves
                    specifically allocated for structural repairs, not pooled funds.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Compliance Certification:</strong> Engineers certify completed repairs
                    meet milestone inspection requirements for continued occupancy.
                  </span>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
              >
                Discuss SB4-D Compliance <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-gray-300 text-sm">Condo Buildings Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$30M+</div>
                <div className="text-gray-300 text-sm">Balcony Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-gray-300 text-sm">Years Florida Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Clock className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">10 Yr</div>
                <div className="text-gray-300 text-sm">Waterproofing Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our Balcony Reconstruction Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              FCS manages every aspect of balcony reconstruction from initial assessment through
              warranty completion, with special attention to beachfront property logistics and
              condo association governance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FCS Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Why Clearwater HOAs Choose Florida Construction Specialists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Prime Contractor Only
              </h3>
              <p className="text-gray-600">
                FCS always serves as the prime contractor, never a subcontractor. Your Clearwater
                association gets direct accountability, single-point responsibility, and our full
                bonding protection on every beachfront project.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                SB4-D Expertise
              </h3>
              <p className="text-gray-600">
                We understand milestone inspection requirements for Clearwater's coastal zone
                properties, work seamlessly with structural engineers, and provide documentation
                needed for compliance certification.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Palmtree className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Coastal Construction Experts
              </h3>
              <p className="text-gray-600">
                Our team specializes in beachfront construction challenges unique to Clearwater.
                We use marine-grade materials and methods specifically engineered for Gulf Coast
                salt air and weather exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Request Your Clearwater Balcony Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're responding to a milestone inspection report, planning proactive
                maintenance, or facing urgent structural concerns at your Clearwater Beach or
                Sand Key property, FCS provides expert assessment and reconstruction solutions
                for Gulf Coast condominiums and multi-family buildings.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Complimentary consultation for qualified projects ($100K+)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Detailed proposals suitable for board presentations
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Phased approaches to accommodate reserve fund planning
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Marine-grade materials for Clearwater's coastal environment
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Speak with Our Team</h3>
                <p className="text-gray-200 mb-4">
                  For immediate assistance with your Clearwater balcony reconstruction project:
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Assessment</h3>
              <HighLevelForm height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={clearwaterFaqs}
        title="Clearwater Balcony Reconstruction FAQs"
        description="Common questions about balcony reconstruction, SB4-D compliance, milestone inspections, and HOA projects in Clearwater, Florida."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Clearwater Beach and Surrounding Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides balcony reconstruction services throughout
              Clearwater Beach, Sand Key, Island Estates, and surrounding Pinellas County communities,
              including beachfront high-rises and waterfront condominiums.
            </p>
          </div>
          <GoogleMap city="Clearwater" height={400} />
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks title="Related Services & Locations" links={internalLinks} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Clearwater's Trusted Balcony Reconstruction Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From SB4-D compliance assessments to full structural reconstruction, Florida
            Construction Specialists is Clearwater Beach's premier contractor for beachfront
            condominium and multi-family balcony restoration. Contact us today to discuss your project.
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
