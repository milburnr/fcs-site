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
  Home,
  ClipboardCheck,
  Landmark,
  Truck,
  Heart,
  Search,
  Hammer,
  Target,
  MapPinned,
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
  title: "Condo Remediation Ruskin FL | SB4-D Compliance Sun City Center | FCS HQ",
  description:
    "Condo remediation experts HEADQUARTERED in Ruskin. SB4-D compliance, milestone inspections, SIRS for Sun City Center, Apollo Beach, South Hillsborough condos. Local expertise, fastest response. Call (813) 420-7561.",
  keywords:
    "condo remediation Ruskin FL, SB4-D compliance Sun City Center, milestone inspection Apollo Beach, SIRS South Hillsborough condos, condo structural repair Ruskin, condo balcony repair Sun City Center, HOA remediation contractor Ruskin, Florida condo safety compliance South Tampa, Gibsonton condo repair, Wimauma milestone inspection",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial Services", href: "/commercial/" },
  { name: "Condo Remediation", href: "/commercial/condo-remediation/" },
  { name: "Ruskin", href: "/condo-remediation-ruskin/" },
];

const trustBadges = [
  { icon: MapPinned, label: "Headquartered in Ruskin" },
  { icon: FileText, label: "SB4-D Compliance" },
  { icon: Shield, label: "Licensed CBC1262722" },
  { icon: Award, label: "40+ Years Experience" },
];

const services = [
  {
    icon: Search,
    title: "Milestone Inspection Support",
    description:
      "Coordination of Phase 1 and Phase 2 structural inspections with licensed engineers for Sun City Center, Apollo Beach, and South Hillsborough condominiums approaching or past their inspection deadlines.",
  },
  {
    icon: FileText,
    title: "SIRS Compliance",
    description:
      "Structural Integrity Reserve Study support including component assessment, repair cost projections, and funding strategy development for Ruskin-area condo associations preparing for new reserve requirements.",
  },
  {
    icon: Hammer,
    title: "Structural Remediation",
    description:
      "Expert repair of all structural deficiencies identified in milestone inspections—concrete restoration, rebar treatment, post-tension cable repair, and load-bearing element rehabilitation.",
  },
  {
    icon: Building2,
    title: "Balcony Reconstruction",
    description:
      "Complete balcony restoration including structural repair, waterproofing systems, railing replacement, and deck coatings for Sun City Center retirement condos and Apollo Beach waterfront properties.",
  },
  {
    icon: Wrench,
    title: "Concrete Restoration",
    description:
      "Spall repair, crack injection, carbonation treatment, and protective coatings using materials engineered for South Hillsborough's mix of coastal salt exposure and inland humidity.",
  },
  {
    icon: Users,
    title: "HOA & Board Support",
    description:
      "Experienced coordination with condo boards and property managers, including board presentations, phased project planning, and documentation for special assessment funding.",
  },
];

const localAreas = [
  "Ruskin",
  "Sun City Center",
  "Apollo Beach",
  "Gibsonton",
  "Wimauma",
  "Riverview South",
  "Balm",
  "Little Harbor",
  "Bahia Beach",
  "Cypress Creek",
  "Kings Point",
  "Freedom Plaza",
];

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "Meet with our team—often at our Ruskin headquarters just minutes from your property—to review inspection reports, building history, and association concerns.",
  },
  {
    step: 2,
    title: "Engineering Assessment",
    description:
      "Coordination with licensed structural engineers for comprehensive evaluation and repair specifications meeting Hillsborough County and SB4-D requirements.",
  },
  {
    step: 3,
    title: "Board Presentation",
    description:
      "Professional proposals with cost options, phasing strategies, and timeline projections designed for condo association decision-making and special assessment planning.",
  },
  {
    step: 4,
    title: "Permitting & Mobilization",
    description:
      "Hillsborough County permit applications, site preparation, resident notifications, and project scheduling with rapid mobilization from our local headquarters.",
  },
  {
    step: 5,
    title: "Phased Construction",
    description:
      "Strategic remediation execution to maintain building occupancy, with careful attention to the needs of Sun City Center's retirement community residents.",
  },
  {
    step: 6,
    title: "Certification & Documentation",
    description:
      "Engineering sign-off, compliance documentation, warranty materials, and ongoing maintenance recommendations for long-term structural protection.",
  },
];

const ruskinFaqs = [
  {
    question: "What makes FCS uniquely qualified for condo remediation in Ruskin and South Hillsborough?",
    answer:
      "Florida Construction Specialists is headquartered at 822 Bayview Drive in Ruskin—we're not just a contractor who serves this area, we're your neighbors. Our team lives and works in South Hillsborough County, giving us unmatched familiarity with local building stock, from Sun City Center's extensive 55+ community condominiums to Apollo Beach's waterfront towers. This local presence means faster response times, intimate knowledge of Hillsborough County building department processes, established relationships with local engineers, and genuine investment in our community's building safety. When emergencies arise, we're minutes away, not hours.",
  },
  {
    question: "How does SB4-D affect Sun City Center condominiums specifically?",
    answer:
      "Sun City Center's large inventory of 55+ community condominiums presents unique SB4-D compliance challenges. Many buildings were constructed during the community's rapid growth in the 1970s-1990s, meaning numerous properties have already passed or are approaching their 30-year milestone inspection requirement. Because Sun City Center is more than three miles from the coast, buildings have until their 30th anniversary (or December 31, 2025 for buildings already over 30), but this deadline is rapidly approaching for many properties. The community's concentration of fixed-income retirees also makes funding strategy particularly important—FCS helps boards develop phased approaches that minimize special assessment impacts while ensuring compliance.",
  },
  {
    question: "Are Apollo Beach condos subject to the stricter coastal SB4-D requirements?",
    answer:
      "Apollo Beach's location on Tampa Bay means many properties fall within the three-mile coastal zone, triggering earlier milestone inspection requirements (25 years vs. 30 years) and the December 31, 2024 deadline for buildings already at or past that age. The coastal location also means accelerated deterioration from salt air exposure, often resulting in more extensive remediation needs when inspections are completed. Properties in Bahia Beach, Little Harbor, and along the Apollo Beach waterfront should verify their coastal zone status immediately and contact FCS for compliance assessment if they haven't already begun the inspection process.",
  },
  {
    question: "What is the typical cost range for condo remediation projects in South Hillsborough?",
    answer:
      "Condo remediation costs vary significantly based on building size, condition, and deficiency severity. For South Hillsborough properties, milestone inspections typically cost $3,000-$15,000 for Phase 1, with Phase 2 adding $15,000-$75,000+ if triggered. SIRS studies range from $5,000-$30,000. Remediation construction depends on findings—concrete restoration runs $15-50/SF, balcony reconstruction $300-600/SF, and comprehensive building rehabilitation $50-150/SF of affected area. Sun City Center associations often benefit from phased approaches spreading costs across multiple budget cycles, while Apollo Beach coastal properties may require larger immediate investments due to salt damage severity. FCS provides detailed estimates after engineering assessment.",
  },
  {
    question: "How quickly can FCS respond to urgent condo remediation needs in Ruskin?",
    answer:
      "Because FCS is headquartered in Ruskin, we offer the fastest response times in South Hillsborough County. For urgent structural concerns identified during milestone inspections, we can typically have personnel on-site within hours for initial assessment. For emergency situations involving immediate safety concerns, our local presence enables same-day mobilization for stabilization measures. This rapid response capability is a significant advantage for Sun City Center and Apollo Beach associations facing time-sensitive compliance deadlines or unexpected structural discoveries.",
  },
  {
    question: "Does FCS have experience working with retirement community condo associations?",
    answer:
      "Extensive experience. Sun City Center is one of Florida's largest active adult communities, and FCS has been working with its condo associations for decades. We understand the unique dynamics of 55+ communities: the importance of clear communication with residents who may be more directly impacted by construction disruption, the sensitivity around fixed-income budgeting for special assessments, the need for accessibility considerations during construction, and the governance structures typical of retirement community associations. Our team presents information clearly, offers flexible phasing options, and maintains respectful communication throughout every project.",
  },
  {
    question: "What structural issues are most common in South Hillsborough condominiums?",
    answer:
      "South Hillsborough condos face a mix of deterioration patterns based on location. Sun City Center's inland buildings commonly show concrete carbonation, rebar corrosion from humidity exposure, roof system failures, and waterproofing breakdown on balconies and walkways. Apollo Beach and coastal properties additionally face accelerated salt-induced corrosion, more severe concrete spalling, and chloride contamination of reinforcing steel. Parking structures throughout the area often show expansion joint failures and traffic surface deterioration. FCS's local experience means we've addressed every common failure mode found in South Hillsborough building stock.",
  },
  {
    question: "How does FCS coordinate with Hillsborough County for condo remediation permits?",
    answer:
      "Our Ruskin headquarters location means we work with Hillsborough County building department regularly and have established efficient permit processes. We handle all permit applications, engineering submissions, and inspection scheduling. Our familiarity with county requirements helps avoid delays—we know what documentation reviewers expect and can address questions quickly. For complex remediation projects, we coordinate pre-application meetings to ensure smooth approval. This local expertise typically results in faster permit turnaround compared to contractors less familiar with Hillsborough County processes.",
  },
  {
    question: "Can residents stay in their Sun City Center condos during remediation work?",
    answer:
      "In most cases, yes. FCS develops remediation plans specifically designed to maintain building occupancy—particularly important for Sun City Center's retirement community residents who may have limited relocation options. Our approach includes working unit-by-unit or section-by-section, installing temporary weather protection, scheduling disruptive work during reasonable daytime hours, maintaining all life safety systems, and providing advance notice to affected residents. For the senior population in Sun City Center, we're especially attentive to noise management, accessibility during construction, and clear communication. Only severe structural deficiencies requiring immediate shoring would necessitate temporary relocation.",
  },
  {
    question: "What funding options exist for condo associations facing SB4-D compliance costs?",
    answer:
      "Common funding approaches include existing reserves (if previously funded), special assessments (one-time or multi-year), bank loans secured by future assessments, and phased construction spreading work across budget cycles. For Sun City Center's retirement community associations, we often recommend multi-year special assessment plans that minimize annual impacts on fixed-income residents. FCS helps boards understand all options, develop presentations for unit owners, and structure projects to align with funding availability. Our experience with South Hillsborough associations means we understand local preferences and can suggest approaches that have worked well for similar communities.",
  },
  {
    question: "What happens if our South Hillsborough condo misses SB4-D deadlines?",
    answer:
      "Non-compliance carries serious consequences: local building officials can issue notices of non-compliance escalating to building closure orders, board members may face personal liability for breach of fiduciary duty, insurance carriers may deny coverage or significantly increase premiums, and units become difficult or impossible to sell as buyers require compliance documentation. For Sun City Center's resale market—where many buyers are specifically seeking SB4-D compliant buildings—non-compliance can severely impact property values. If your association hasn't started compliance efforts, contact FCS immediately—there may still be time to meet deadlines, but every week matters.",
  },
  {
    question: "How does FCS's local presence benefit our condo remediation project?",
    answer:
      "Our Ruskin headquarters at 822 Bayview Drive provides tangible benefits throughout your project: faster initial response and site visits, reduced mobilization costs (no travel time charges), intimate familiarity with local building conditions and common issues, established relationships with Hillsborough County building officials, quick material procurement from local suppliers, ability to address warranty issues rapidly, and genuine accountability as your neighbors. When problems arise—as they can in any construction project—our team is minutes away rather than hours. We're invested in South Hillsborough's communities because we live here too.",
  },
];

const internalLinks = [
  { href: "/commercial/condo-remediation/", label: "Condo Remediation Services" },
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB4-D Compliance Guide" },
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Services" },
  { href: "/services/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/services/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CondoRemediationRuskinPage() {
  return (
    <>
      <LocalBusinessSchema city="Ruskin" service="Condo Remediation & SB4-D Compliance" />
      <ServiceSchema
        serviceName="Condo Remediation & SB4-D Compliance"
        serviceDescription="SB4-D compliance and condo remediation services for Ruskin, Sun City Center, Apollo Beach, and South Hillsborough County. Headquartered locally with milestone inspection support, SIRS assessments, and structural remediation. Projects from $100,000 to $10 million+."
        city="Ruskin"
        minPrice="100000"
      />
      <FAQSchema faqs={ruskinFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            {/* Headquarters Badge - PROMINENT */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-gold/20 border border-brand-gold/40 rounded-full mb-6">
              <Home className="w-5 h-5 text-brand-gold" />
              <span className="text-brand-gold font-bold">FCS HEADQUARTERS – Ruskin, FL</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Remediation & SB4-D Compliance in Ruskin
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl leading-relaxed">
              <strong>Your local experts for SB4-D compliance.</strong> Florida Construction
              Specialists is headquartered right here in Ruskin—serving Sun City Center, Apollo
              Beach, and all of South Hillsborough County with unmatched local knowledge and the
              fastest response times in the region.
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-3xl">
              From milestone inspections to complete structural remediation, we help condo
              associations navigate Florida's new safety requirements with the expertise and
              accountability that only comes from being your neighbors.
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
                Request Compliance Assessment
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
      <section className="py-4 bg-red-600">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white text-center md:text-left">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" />
            <p className="font-medium">
              <strong>SB4-D Deadline Alert:</strong> Many Sun City Center condos built in the
              1970s-90s are past their 30-year milestone. Apollo Beach coastal properties face
              December 31, 2024 deadlines. <span className="underline">Act now to avoid compliance penalties.</span>
            </p>
            <Link
              href="/contact/"
              className="flex-shrink-0 bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Get Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Local Headquarters Highlight Section */}
      <section className="py-16 bg-brand-green-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-brand-green font-semibold mb-4">
                <MapPinned className="w-5 h-5" />
                <span>OUR HOME BASE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Headquartered in Ruskin. Invested in Our Community.
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists isn't just another contractor serving South
                Hillsborough—<strong>we're based here at 822 Bayview Drive in Ruskin</strong>. Our
                team lives in your neighborhoods, shops at your stores, and has a genuine stake in
                the safety and quality of our community's buildings.
              </p>

              <p className="text-gray-600 mb-6">
                This local presence translates to real advantages for your condo association:
                faster response times when issues arise, intimate knowledge of local building
                stock and common problems, established relationships with Hillsborough County
                officials, and the accountability that comes from serving neighbors rather than
                distant clients.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <Truck className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800 block">Fastest Response</span>
                    <span className="text-sm text-gray-600">On-site within hours, not days</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <Landmark className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800 block">County Expertise</span>
                    <span className="text-sm text-gray-600">Hillsborough permit specialists</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <Heart className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800 block">Community Ties</span>
                    <span className="text-sm text-gray-600">40+ years serving South Hillsborough</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <Target className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800 block">Local Knowledge</span>
                    <span className="text-sm text-gray-600">We know your building types</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-brand-green" />
                </div>
                <h3 className="text-2xl font-bold text-brand-green-dark">FCS Headquarters</h3>
                <p className="text-gray-600">822 Bayview Drive, Ruskin, FL</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">To Sun City Center</span>
                  <span className="font-semibold text-brand-green-dark">~10 minutes</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">To Apollo Beach</span>
                  <span className="font-semibold text-brand-green-dark">~8 minutes</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">To Gibsonton</span>
                  <span className="font-semibold text-brand-green-dark">~12 minutes</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">To Riverview South</span>
                  <span className="font-semibold text-brand-green-dark">~15 minutes</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">To Wimauma</span>
                  <span className="font-semibold text-brand-green-dark">~18 minutes</span>
                </div>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-dark transition-colors w-full"
              >
                <Phone className="w-5 h-5" />
                Call Your Local Experts: {BUSINESS_INFO.phone}
              </a>
            </div>
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
                South Hillsborough's SB4-D Compliance & Condo Remediation Experts
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Florida Construction Specialists provides comprehensive SB4-D compliance and
                structural remediation services for condominium associations throughout South
                Hillsborough County. With our headquarters located in Ruskin, we offer unmatched
                local expertise for Sun City Center's extensive 55+ community, Apollo Beach's
                waterfront properties, and growing developments throughout Gibsonton, Wimauma, and
                Riverview South.
              </p>

              <p className="text-gray-600 mb-6">
                The passage of Florida Senate Bill 4-D in response to the Surfside tragedy created
                urgent compliance requirements for condominium buildings throughout our region.
                Buildings three stories or taller must now complete milestone structural
                inspections—at 25 years for coastal properties or 30 years for inland buildings—and
                maintain Structural Integrity Reserve Studies (SIRS) with mandatory funding. Many
                South Hillsborough condominiums, particularly those built during Sun City Center's
                rapid growth in the 1970s through 1990s, have already reached or passed these
                milestone ages.
              </p>

              <p className="text-gray-600 mb-6">
                FCS brings over 40 years of construction experience to every condo remediation
                project, with particular expertise in the building types common to South
                Hillsborough. Our portfolio includes major projects like the $4.9 million Tiara
                Condominium Association balcony reconstruction—demonstrating our capability to
                handle the largest and most complex compliance projects. But our local presence
                means we're equally committed to smaller associations facing their first milestone
                inspection.
              </p>

              <p className="text-gray-600 mb-8">
                Whether your Sun City Center association needs milestone inspection coordination,
                your Apollo Beach property requires structural remediation, or you're planning
                proactive maintenance to get ahead of compliance deadlines, FCS provides the
                expertise, accountability, and local knowledge that only comes from being
                headquartered in your community.
              </p>

              {/* Project Gallery */}
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Tiles-on-balcony.webp"
                    alt="Balcony restoration project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Balcony Restoration</p>
                    <p className="text-xs text-gray-200">Structural Rehabilitation</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/FCS-Exterior-Waterproofing.png"
                    alt="Waterproofing systems"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-semibold text-sm">Waterproofing</p>
                    <p className="text-xs text-gray-200">Building Protection</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src="/wp-content/uploads/2023/12/Old/custom-home-construction-2.jpg"
                    alt="Completed remediation"
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
                  Who We Serve in South Hillsborough
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Sun City Center HOAs</span>
                      <p className="text-sm text-gray-600">
                        55+ community associations navigating SB4-D compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Apollo Beach Condos</span>
                      <p className="text-sm text-gray-600">
                        Waterfront properties with coastal zone requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Property Managers</span>
                      <p className="text-sm text-gray-600">
                        Managing multiple South Hillsborough properties
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-800">Condo Boards</span>
                      <p className="text-sm text-gray-600">
                        Decision-makers facing milestone inspection results
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
                      Need SB4-D Compliance Help for Your South Hillsborough Condo?
                    </h4>
                    <p className="text-gray-600">
                      Meet with our local team—we're just minutes away from your property.
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
                <h3 className="text-xl font-bold mb-2">Your Local Headquarters</h3>
                <p className="text-gray-200 mb-4">
                  FCS is based right here in Ruskin. Contact us for a consultation at our office or
                  your property—we're just minutes away.
                </p>
                <div className="flex items-center gap-2 text-brand-green bg-white/10 rounded-lg px-4 py-2 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">822 Bayview Dr, Ruskin, FL</span>
                </div>
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
                    <span className="font-bold">Coastal (Apollo Beach):</span> 25 years
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Inland (Sun City Center):</span> 30 years
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">SIRS:</span> Reserve study required
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">Penalties:</span> Closure orders, liability
                  </li>
                </ul>
                <Link
                  href="/commercial/condo-remediation/"
                  className="text-amber-800 font-semibold text-sm mt-4 inline-flex items-center gap-1 hover:underline"
                >
                  Read Full SB4-D Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Services */}
              <RelatedServices city="Ruskin" currentService="condo-remediation" />

              {/* Nearby Locations */}
              <NearbyLocations
                currentCity="Ruskin"
                service="condo-remediation"
                serviceName="Condo Remediation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Condo Remediation Services in South Hillsborough
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive SB4-D compliance and structural remediation for Sun City Center, Apollo
              Beach, Ruskin, and surrounding communities—delivered by your local experts.
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

      {/* Sun City Center Focus Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Sun City Center: Florida's Premier 55+ Community
              </h2>

              <p className="text-gray-600 mb-6">
                Sun City Center represents one of Florida's largest concentrations of active adult
                community condominiums—and one of the areas most affected by SB4-D compliance
                requirements. Many of the community's condominium buildings were constructed during
                its rapid growth from the 1970s through 1990s, meaning a significant number have
                already passed or are approaching their 30-year milestone inspection deadlines.
              </p>

              <p className="text-gray-600 mb-6">
                FCS has been serving Sun City Center associations for decades, and we understand
                the unique dynamics of this retirement community. Our approach to condo remediation
                here accounts for the specific needs of 55+ residents: clear communication,
                sensitivity to fixed-income budgeting, accessibility considerations during
                construction, and phased project approaches that minimize disruption to daily life.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Building2 className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Extensive Condo Inventory</h4>
                    <p className="text-gray-600 text-sm">
                      Hundreds of condominium buildings including Kings Point, Freedom Plaza, and
                      numerous independent associations—many now requiring milestone inspections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Aging Building Stock</h4>
                    <p className="text-gray-600 text-sm">
                      Buildings from 1970s-90s construction boom are now 30-50+ years old, making
                      milestone inspection compliance an urgent priority for many associations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Retirement Community Expertise</h4>
                    <p className="text-gray-600 text-sm">
                      We understand fixed-income budgeting, accessibility needs, and the importance
                      of minimizing disruption for senior residents during construction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phased Funding Options</h4>
                    <p className="text-gray-600 text-sm">
                      Multi-year assessment plans and strategic project phasing to manage costs
                      appropriately for retirement community association budgets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Apollo Beach: Coastal Zone Compliance
              </h2>

              <p className="text-gray-600 mb-6">
                Apollo Beach's location on Tampa Bay places many of its condominium buildings
                within the coastal zone defined by SB4-D—triggering the stricter 25-year milestone
                inspection requirement and the December 31, 2024 deadline for buildings already at
                or past that age. Properties in Bahia Beach, Little Harbor, and along the Apollo
                Beach waterfront face accelerated compliance timelines.
              </p>

              <p className="text-gray-600 mb-6">
                Beyond compliance deadlines, Apollo Beach's coastal location means buildings face
                more aggressive environmental deterioration. Salt air from Tampa Bay accelerates
                concrete carbonation and rebar corrosion, often resulting in more extensive
                remediation needs when inspections are completed. FCS uses marine-grade materials
                and coastal construction methods appropriate for these demanding conditions.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-red-800 mb-2">Coastal Zone Alert</h4>
                    <p className="text-red-700 text-sm">
                      Apollo Beach properties within 3 miles of Tampa Bay must complete initial
                      milestone inspections at 25 years—with many buildings already past this
                      deadline. If your association hasn't started compliance, contact FCS
                      immediately.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                South Hillsborough Areas We Serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {localAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 text-brand-green" />
                    <span className="text-gray-700 text-sm">{area}</span>
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
                SB4-D Compliance for South Hillsborough Condominiums
              </h2>

              <p className="text-gray-200 mb-6">
                Florida's SB4-D legislation, passed in response to the Surfside condominium
                collapse, establishes mandatory milestone inspections and Structural Integrity
                Reserve Studies for buildings three stories or taller. South Hillsborough
                properties face varying deadlines based on location—coastal Apollo Beach at 25
                years, inland Sun City Center at 30 years—but urgency exists throughout the region.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Phase 1 Visual Inspection:</strong> Licensed engineer examines
                    structural components to identify substantial deterioration requiring further
                    investigation.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Phase 2 Testing:</strong> If deterioration found, detailed testing and
                    repair specifications are developed for Hillsborough County compliance.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>SIRS Requirements:</strong> Associations must maintain dedicated
                    structural reserves—no more voting to waive or underfund.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Remediation Execution:</strong> FCS implements all required repairs with
                    engineering certification for compliance documentation.
                  </span>
                </div>
              </div>

              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-green text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-green-forest transition-colors"
              >
                Discuss Your Compliance Needs <ArrowRight className="w-5 h-5" />
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
                <div className="text-3xl font-bold text-white mb-1">$7.4M+</div>
                <div className="text-gray-300 text-sm">Condo Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Calendar className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">40+</div>
                <div className="text-gray-300 text-sm">Years Florida Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <MapPinned className="w-10 h-10 text-brand-green mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">Local</div>
                <div className="text-gray-300 text-sm">Ruskin Headquarters</div>
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
              Our Condo Remediation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial consultation at our Ruskin headquarters to final certification, FCS
              manages every aspect of SB4-D compliance and structural remediation for South
              Hillsborough associations.
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
            Why South Hillsborough Associations Choose FCS
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Headquartered Locally
              </h3>
              <p className="text-gray-600">
                Our Ruskin headquarters means faster response times, reduced mobilization costs,
                and the accountability of serving neighbors. We're invested in this community
                because we live here too.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Prime Contractor Only
              </h3>
              <p className="text-gray-600">
                FCS always serves as prime contractor—never a subcontractor. Your association
                gets direct accountability, single-point responsibility, and our full $10M+
                bonding protection on every project.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-green-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-green-dark text-xl mb-3">
                Retirement Community Experts
              </h3>
              <p className="text-gray-600">
                Decades of experience with Sun City Center's 55+ associations. We understand
                fixed-income budgeting, accessibility needs, and the importance of minimizing
                disruption for senior residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="section bg-brand-green-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
                Proven Experience with Major Condo Projects
              </h2>
              <p className="text-lg text-gray-600">
                FCS has completed some of the largest condo remediation projects in the Tampa Bay
                region—demonstrating our capability to handle any scope of work.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-green-dark">
                    Tiara Condominium Association
                  </h3>
                  <p className="text-gray-600">St. Petersburg, FL</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-2xl font-bold text-brand-green">$4.9 Million</div>
                  <p className="text-gray-500 text-sm">Project Value</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Complete reconstruction of over 180 balconies including structural concrete
                repairs, traffic-bearing waterproofing systems, new railing installations, and
                finish coatings. Project completed in carefully coordinated phases to maintain
                full building occupancy throughout construction—demonstrating FCS's ability to
                handle the most complex condo remediation challenges while minimizing resident
                disruption.
              </p>

              <div className="grid sm:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-green-dark">180+</div>
                  <div className="text-sm text-gray-600">Balconies Reconstructed</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-green-dark">100%</div>
                  <div className="text-sm text-gray-600">Occupancy Maintained</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-green-dark">Phased</div>
                  <div className="text-sm text-gray-600">Construction Approach</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-brand-green-dark">Full</div>
                  <div className="text-sm text-gray-600">Compliance Documentation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Request Your South Hillsborough Compliance Assessment
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're responding to a milestone inspection report, preparing for upcoming
                compliance deadlines, or planning proactive structural maintenance, FCS provides
                expert assessment and remediation solutions for Sun City Center, Apollo Beach, and
                all of South Hillsborough County—with the local expertise that only comes from
                being headquartered in your community.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Complimentary consultation at our Ruskin headquarters or your property
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Detailed proposals suitable for board presentations and special assessments
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Phased approaches designed for retirement community budgets
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Fastest response times from our local headquarters
                  </span>
                </div>
              </div>

              <div className="bg-brand-green-dark text-white rounded-xl p-6">
                <h3 className="font-bold text-xl mb-2">Your Local Experts</h3>
                <p className="text-gray-200 mb-4">
                  FCS is headquartered at 822 Bayview Drive, Ruskin—just minutes from Sun City
                  Center and Apollo Beach. Call to speak with our team:
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

            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Assessment</h3>
              <HighLevelForm height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={ruskinFaqs}
        title="Ruskin & South Hillsborough Condo Remediation FAQs"
        description="Common questions about SB4-D compliance, milestone inspections, and condo remediation in Ruskin, Sun City Center, Apollo Beach, and South Hillsborough County."
      />

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Serving South Hillsborough County from Our Ruskin Headquarters
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Florida Construction Specialists is headquartered at 822 Bayview Drive in Ruskin,
              providing condo remediation and SB4-D compliance services throughout Sun City Center,
              Apollo Beach, Gibsonton, Wimauma, and all of South Hillsborough County.
            </p>
          </div>
          <GoogleMap city="Ruskin" height={400} />
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks title="Related Services & Resources" links={internalLinks} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Home className="w-6 h-6 text-brand-gold" />
            <span className="text-brand-gold font-bold">HEADQUARTERED IN RUSKIN</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Your Local SB4-D Compliance & Condo Remediation Experts
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From milestone inspections to complete structural remediation, Florida Construction
            Specialists is South Hillsborough's premier contractor for condo compliance—with the
            local expertise, faster response, and community accountability that only comes from
            being headquartered in your neighborhood.
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
