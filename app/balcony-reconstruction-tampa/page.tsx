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
  HardHat,
  Home,
  Waves,
  Gauge,
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
  title: "Balcony Reconstruction in Tampa",
  description:
    "Tampa balcony reconstruction experts. SB4-D compliance, milestone inspections, condo balcony repair. Structural restoration for condos 3+ stories. Licensed, bonded. Call (813) 420-7561.",
  keywords:
    "balcony reconstruction Tampa, SB4-D compliance Tampa, condo balcony repair Tampa, milestone inspection Tampa, SIRS Tampa, balcony waterproofing Tampa, structural balcony repair Tampa, HOA balcony contractor Tampa",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Residential Services", href: "/services/residential/" },
  { name: "Balcony Reconstruction", href: "/services/residential/balcony-reconstruction/" },
  { name: "Tampa", href: "/balcony-reconstruction-tampa/" },
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
      "Complete structural restoration including concrete repair, rebar treatment, carbon fiber reinforcement, and load-bearing element replacement for deteriorated balconies.",
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    description:
      "Multi-layer waterproofing membranes, traffic-bearing deck coatings, drainage correction, and flashing systems designed for Tampa's coastal climate.",
  },
  {
    icon: Scale,
    title: "Railing Systems",
    description:
      "Code-compliant railing replacement including aluminum, glass, cable, and decorative options with proper anchorage engineering meeting current Florida Building Code.",
  },
  {
    icon: Wrench,
    title: "Concrete Restoration",
    description:
      "Spall repair, crack injection, surface restoration, and protective coatings using marine-grade materials with corrosion inhibitors for lasting performance.",
  },
  {
    icon: ClipboardCheck,
    title: "Milestone Inspection Support",
    description:
      "Coordination with structural engineers for Phase 1 and Phase 2 milestone inspections, repair scoping, and documentation for SB4-D compliance certification.",
  },
  {
    icon: FileText,
    title: "SIRS Compliance",
    description:
      "Structural Integrity Reserve Study support including repair estimates, reserve fund planning assistance, and phased reconstruction programs for associations.",
  },
];

const tampaNeighborhoods = [
  "Bayshore Boulevard",
  "Davis Islands",
  "Harbour Island",
  "Channelside",
  "South Tampa",
  "Hyde Park",
  "Westshore",
  "Rocky Point",
  "Downtown Tampa",
  "Tampa Heights",
  "Seminole Heights",
  "Carrollwood",
];

const processSteps = [
  {
    step: 1,
    title: "Initial Assessment",
    description:
      "Comprehensive structural evaluation including concrete testing, moisture mapping, rebar corrosion analysis, and scope development in coordination with licensed structural engineers.",
  },
  {
    step: 2,
    title: "Engineering & Documentation",
    description:
      "Detailed engineering drawings, repair specifications, milestone inspection coordination, and permit applications with the City of Tampa Building Department.",
  },
  {
    step: 3,
    title: "HOA/Board Presentation",
    description:
      "Professional proposals suitable for board meetings, cost options, phased approaches, and timeline presentations to support association decision-making.",
  },
  {
    step: 4,
    title: "Mobilization & Phasing",
    description:
      "Site setup, safety barriers, resident notification, and carefully sequenced work schedules to minimize disruption to building occupants.",
  },
  {
    step: 5,
    title: "Structural Reconstruction",
    description:
      "Concrete removal, rebar treatment or replacement, supplemental reinforcement, and new concrete placement using marine-grade mixes with corrosion inhibitors.",
  },
  {
    step: 6,
    title: "Waterproofing & Completion",
    description:
      "Multi-layer waterproofing installation, railing systems, final coatings, inspections, warranty documentation, and maintenance guidelines for long-term protection.",
  },
];

const tampaFaqs = [
  {
    question: "What is Florida SB4-D and how does it affect Tampa condominiums?",
    answer:
      "Florida Senate Bill 4-D, enacted in 2022 following the Surfside tragedy, mandates milestone structural inspections for all condominium and cooperative buildings three stories or taller. For Tampa Bay properties within three miles of the coastline (including most waterfront condos along Bayshore, Davis Islands, and Harbour Island), buildings 25 years or older must complete inspections by specific deadlines, then every 10 years thereafter. Buildings further inland have a 30-year threshold. Many Tampa condos built during the 1980s-1990s development boom are now approaching or past these critical inspection deadlines.",
  },
  {
    question: "What is a Structural Integrity Reserve Study (SIRS) and why is it required?",
    answer:
      "SIRS is a component of SB4-D requiring condominium associations to maintain adequate reserves for structural repairs including balconies, load-bearing walls, foundations, and other critical elements. Unlike previous reserve requirements that allowed 'pooled' funding, SIRS requires line-item reserves specifically allocated for structural components. This prevents associations from deferring critical repairs and ensures funds are available when milestone inspections identify necessary work. FCS works with associations on repair cost projections to support accurate SIRS budgeting.",
  },
  {
    question: "How much does balcony reconstruction cost in Tampa?",
    answer:
      "Tampa balcony reconstruction projects typically range from $100,000 to several million dollars depending on building size, number of units, extent of deterioration, and accessibility. Individual balcony costs range from $15,000-$50,000 per unit for comprehensive restoration including structural repairs, waterproofing, and railing replacement. Multi-unit projects achieve economies of scale with per-unit costs often 20-30% lower. FCS provides detailed assessments and proposals for HOA planning and reserve fund coordination.",
  },
  {
    question: "What causes balcony deterioration in Tampa's coastal climate?",
    answer:
      "Tampa Bay's environment is particularly harsh on balcony construction. Primary factors include: salt air corrosion accelerating rebar oxidation (especially within three miles of the bay), high humidity promoting concrete carbonation, intense UV exposure degrading waterproofing membranes, annual rainfall of 46+ inches overwhelming drainage systems, and hurricane-driven rain penetrating failed sealants. Properties along Bayshore Boulevard, Davis Islands, and waterfront high-rises face the most accelerated deterioration, requiring proactive inspection and maintenance.",
  },
  {
    question: "What are the warning signs that a Tampa condo needs balcony repair?",
    answer:
      "Critical warning signs include: cracking or spalling concrete (especially on balcony undersides), visible rust stains indicating rebar corrosion, soft or spongy deck surfaces when walked on, water pooling due to improper drainage slopes, loose or corroded railings, visible separation between balcony and building wall, deflection or sagging of the balcony slab, and efflorescence (white mineral deposits) on concrete surfaces. Any of these signs warrant immediate professional structural evaluation to prevent safety hazards.",
  },
  {
    question: "How long does balcony reconstruction take for a Tampa condominium building?",
    answer:
      "Project timelines depend on scope and building size. Individual balcony reconstruction typically requires 2-4 weeks per unit. For multi-unit projects, FCS phases work to minimize resident disruption, typically completing 4-6 balconies simultaneously with careful scheduling. A 50-unit building project might take 4-8 months depending on extent of repairs, weather conditions, and permit processing. Emergency structural repairs can be expedited when safety concerns require immediate action. Detailed schedules are provided during project planning.",
  },
  {
    question: "Can residents stay in their units during balcony reconstruction?",
    answer:
      "In most cases, yes. FCS implements careful scheduling, safety barriers, and noise management to allow continued occupancy. Residents need to clear balcony furniture during their unit's active work phase (typically 1-3 weeks per balcony). We schedule loud work during daytime hours and provide advance notice of all activities. Only in cases of severe structural deficiency requiring immediate shoring would temporary relocation be recommended, and such situations are identified during initial assessment.",
  },
  {
    question: "What waterproofing methods does FCS use for Tampa balconies?",
    answer:
      "Our waterproofing systems are specifically designed for Tampa's coastal climate and include: penetrating concrete sealers for substrate protection, elastomeric waterproofing membranes (polyurethane or epoxy-based), reinforced coating systems at critical junctions and transitions, slope correction to ensure proper drainage (minimum 1/4 inch per foot), professional flashing at door thresholds and wall intersections, and UV-stable traffic-bearing finish coatings. All systems carry manufacturer warranties and our 10-year workmanship guarantee.",
  },
  {
    question: "Does FCS work directly with Tampa HOAs and property managers?",
    answer:
      "Yes, working with HOA boards, property management companies, and condo associations throughout Tampa Bay is our specialty. We provide detailed proposals suitable for board presentations, attend association meetings when requested, offer flexible payment terms aligned with special assessment schedules, and maintain clear communication with all stakeholders throughout projects. Our experience with multi-family governance helps streamline decision-making and approval processes while protecting board members from liability exposure.",
  },
  {
    question: "What happens if our Tampa condo fails to comply with SB4-D requirements?",
    answer:
      "Non-compliance with SB4-D carries serious consequences: associations face potential personal liability exposure for board members, insurance carriers may deny coverage or significantly increase premiums, property values decline as buyers and lenders become aware of compliance issues, units may become unsellable or unfinanceable, and in extreme cases buildings can be declared unsafe for occupancy by local authorities. The December 31, 2024 deadline for many Tampa buildings has already passed for initial inspections, making immediate action critical for non-compliant properties.",
  },
];

const internalLinks = [
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/condo-structural-reserve-study-repairs/", label: "Structural Reserve Studies" },
  { href: "/services/residential/balcony-reconstruction/", label: "Balcony Reconstruction Services" },
  { href: "/services/residential/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function BalconyReconstructionTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Balcony Reconstruction" />
      <ServiceSchema
        serviceName="Balcony Reconstruction"
        serviceDescription="Expert balcony reconstruction and SB4-D compliance services for Tampa condominiums, apartments, and multi-family buildings. Structural repair, waterproofing, milestone inspection support. Projects from $100,000 to $10 million+."
        city="Tampa"
        minPrice="100000"
      />
      <FAQSchema faqs={tampaFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Tampa, FL</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Balcony Reconstruction in Tampa
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Tampa Bay's trusted contractor for condominium and multi-family balcony
              reconstruction. SB4-D compliance specialists with expertise in milestone
              inspections, structural restoration, and comprehensive waterproofing for buildings
              three stories and higher. Projects from $100K to $10M+.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <badge.icon className="w-5 h-5 text-brand-gold" />
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
              <strong>SB4-D Compliance Alert:</strong> Tampa buildings 3+ stories must complete
              milestone inspections. Many 1990s-era condos are now past their inspection
              deadlines. Contact FCS for immediate assessment.
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
                Tampa's Premier Balcony Reconstruction Contractor
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists is Tampa Bay's trusted prime contractor for
                large-scale balcony reconstruction and SB4-D compliance projects. With over 20
                years of experience serving Tampa's condominium associations, property managers,
                and multi-family building owners, we specialize in the complex structural
                restoration work required to protect residents and bring buildings into compliance
                with Florida's milestone inspection requirements.
              </p>

              <p className="text-gray-600 mb-6">
                Tampa's coastal environment presents unique challenges for balcony construction.
                Properties throughout the bay area, from high-rise towers along Bayshore Boulevard
                to waterfront communities on Davis Islands and Harbour Island, face accelerated
                deterioration from salt air exposure, intense UV radiation, high humidity, and
                seasonal heavy rainfall. Our team has restored balconies at condominiums throughout
                Tampa Bay, understanding both the technical requirements and the association
                governance processes that make these projects successful.
              </p>

              <p className="text-gray-600 mb-8">
                As a prime contractor, FCS maintains direct accountability for every project. We
                never operate as a subcontractor, ensuring your association works directly with the
                company responsible for quality, timeline, and warranty obligations. Our $10M+
                bonding capacity provides confidence that even the largest multi-unit projects will
                be completed to specification.
              </p>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                    alt="Balcony tile installation in Tampa"
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
                    src="/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png"
                    alt="Exterior waterproofing application"
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
                    src="/wp-content/uploads/2023/12/Old/custom-home-construction-2.jpg"
                    alt="Completed balcony restoration"
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
                  Who We Serve in Tampa
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Condo Associations</span>
                      <p className="text-sm text-gray-600">
                        Board members navigating SB4-D compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Property Managers</span>
                      <p className="text-sm text-gray-600">
                        Managing milestone inspection repairs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Multi-Family Owners</span>
                      <p className="text-sm text-gray-600">
                        Apartment complexes and rental properties
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Luxury Homeowners</span>
                      <p className="text-sm text-gray-600">
                        High-end residential balcony restoration
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
                      Need a Balcony Assessment for Your Tampa Building?
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
                  Request a complimentary assessment and proposal for your Tampa condominium
                  building's balcony reconstruction needs.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-full hover:bg-brand-gold-light transition-colors w-full"
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
                    <span className="font-bold">Inland:</span> 30 years, then every 10 years
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
              <RelatedServices city="Tampa" currentService="balcony-reconstruction" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="Tampa"
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
              Balcony Reconstruction Services in Tampa
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive balcony restoration and SB4-D compliance solutions for Tampa Bay
              condominiums and multi-family buildings.
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

      {/* Tampa-Specific Content Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Tampa Bay's Unique Balcony Challenges
              </h2>

              <p className="text-gray-600 mb-6">
                Tampa's position on Tampa Bay creates a microclimate that accelerates balcony
                deterioration beyond what's typical even in other Florida coastal communities. The
                combination of salt-laden air, extreme humidity, intense sun exposure, and
                seasonal heavy rainfall creates ideal conditions for concrete degradation and
                reinforcing steel corrosion.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Sun className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Intense UV Exposure</h4>
                    <p className="text-gray-600 text-sm">
                      Tampa averages 246 sunny days annually. UV radiation degrades waterproofing
                      membranes and causes concrete surface deterioration, requiring premium
                      UV-stable coatings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Waves className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Salt Air Corrosion</h4>
                    <p className="text-gray-600 text-sm">
                      Properties within three miles of Tampa Bay face accelerated rebar corrosion.
                      Chloride ions penetrate concrete and cause oxidation, leading to spalling and
                      structural weakening.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Heavy Rainfall</h4>
                    <p className="text-gray-600 text-sm">
                      Tampa receives 46+ inches of rain annually, much of it in intense summer
                      storms. Inadequate drainage and failed waterproofing lead to water intrusion
                      and accelerated deterioration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="w-6 h-6 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">High Humidity</h4>
                    <p className="text-gray-600 text-sm">
                      Average humidity of 74% promotes concrete carbonation, reducing pH and
                      eliminating the protective alkaline environment around reinforcing steel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6">
                Tampa Neighborhoods We Serve
              </h3>
              <p className="text-gray-600 mb-6">
                FCS provides balcony reconstruction services throughout Tampa and the surrounding
                bay area. Our team is familiar with local building departments, permit processes,
                and the specific challenges of Tampa's diverse building stock.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tampaNeighborhoods.map((neighborhood) => (
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
                SB4-D Compliance for Tampa Condominiums
              </h2>

              <p className="text-gray-200 mb-6">
                Florida Senate Bill 4-D, enacted in response to the Surfside condominium collapse,
                establishes mandatory milestone inspections and Structural Integrity Reserve
                Studies for buildings three stories or taller. For Tampa Bay properties, this
                legislation has created urgent timelines for assessment and, where necessary,
                structural repairs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Phase 1 Visual Inspection:</strong> Licensed engineer identifies areas
                    of potential concern through visual assessment of exterior elevated elements.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Phase 2 Testing:</strong> If substantial deterioration is found,
                    detailed testing and analysis quantifies repair requirements.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>SIRS Requirements:</strong> Associations must maintain reserves
                    specifically allocated for structural repairs, not pooled funds.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Compliance Certification:</strong> Engineers certify completed repairs
                    meet milestone inspection requirements.
                  </span>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-lg hover:bg-brand-gold-light transition-colors"
              >
                Discuss SB4-D Compliance <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Building2 className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-gray-300 text-sm">Condo Buildings Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <DollarSign className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">$30M+</div>
                <div className="text-gray-300 text-sm">Balcony Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-gray-300 text-sm">Years Tampa Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Clock className="w-10 h-10 text-brand-gold mx-auto mb-3" />
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
              warranty completion, with special attention to HOA governance and resident
              communication.
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
            Why Tampa HOAs Choose Florida Construction Specialists
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
                FCS always serves as the prime contractor, never a subcontractor. Your association
                gets direct accountability, single-point responsibility, and our full bonding
                protection on every project.
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
                We understand milestone inspection requirements, work seamlessly with structural
                engineers, and provide the documentation needed for compliance certification and
                insurance purposes.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                HOA Governance Experience
              </h3>
              <p className="text-gray-600">
                We've presented to hundreds of association boards and understand the decision-making
                process, special assessment coordination, and communication requirements that make
                projects successful.
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
                Request Your Tampa Balcony Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're responding to a milestone inspection report, planning proactive
                maintenance, or facing urgent structural concerns, FCS provides expert assessment
                and reconstruction solutions for Tampa Bay condominiums and multi-family
                buildings.
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
                    Coordination with structural engineers throughout project
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Speak with Our Team</h3>
                <p className="text-gray-200 mb-4">
                  For immediate assistance with your Tampa balcony reconstruction project:
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-brand-gold text-brand-green-dark font-bold py-3 px-6 rounded-lg hover:bg-brand-gold-light transition-colors"
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
        items={tampaFaqs}
        title="Tampa Balcony Reconstruction FAQs"
        description="Common questions about balcony reconstruction, SB4-D compliance, milestone inspections, and HOA projects in Tampa, Florida."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving Tampa and Tampa Bay
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists provides balcony reconstruction services throughout
              Tampa and the greater Tampa Bay region, including waterfront properties, downtown
              high-rises, and suburban multi-family communities.
            </p>
          </div>
          <GoogleMap city="Tampa" height={400} />
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
            Tampa's Trusted Balcony Reconstruction Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From SB4-D compliance assessments to full structural reconstruction, Florida
            Construction Specialists is Tampa Bay's premier contractor for condominium and
            multi-family balcony restoration. Contact us today to discuss your project.
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
