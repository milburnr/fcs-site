import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Factory,
  Stethoscope,
  ShieldCheck,
  Landmark,
  Building,
  Calendar,
  ArrowRight,
  Phone,
  CheckCircle,
  Briefcase,
  HardHat,
  Users,
  GraduationCap,
  Hotel,
  Warehouse
} from "lucide-react";
import { BUSINESS_INFO, LOCATIONS, FAQ_DATABASE } from "@/lib/constants";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Breadcrumb } from "@/components/Breadcrumb";
import { HubRelatedArticles } from "@/components/HubRelatedArticles";
import { HighLevelForm } from "@/components/HighLevelForm";
import { ParallaxSection, ParallaxCardsContainer, ParallaxCard } from "@/components/ParallaxSection";
import { PARALLAX_IMAGES, AI_IMAGES, AI_IMAGE_ALT } from "@/lib/imageMapping";
import { FAQWithSchema } from "@/components/FAQ";

import { InternalLinks } from "@/components/InternalLinks";
export const metadata: Metadata = {
  title: "Commercial Construction Services Tampa | $500K-$25M+ Projects | FCS",
  description:
    "Tampa Bay's premier commercial general contractor. Medical facilities, multi-family developments, industrial construction, and large-loss disaster recovery. 40+ years experience and in-house engineering.",
  keywords:
    "commercial construction Tampa, general contractor Tampa Bay, medical facility construction, multi-family construction, industrial construction Florida",
};

// Commercial service clusters with icons and images
const commercialClusters = [
  {
    name: "Medical & Healthcare",
    href: "/commercial/medical-construction/",
    icon: Stethoscope,
    image: AI_IMAGES.medical,
    imageAlt: AI_IMAGE_ALT.medical,
    description: "AHCA-compliant medical facilities, clean rooms, and healthcare construction",
    keywords: ["AHCA compliance", "Medical gas piping", "Clean room construction"],
  },
  {
    name: "Multi-Family Construction",
    href: "/multi-family-construction/",
    icon: Building,
    image: AI_IMAGES.multifamily,
    imageAlt: AI_IMAGE_ALT.multifamily,
    description: "Condominiums, apartment complexes, and mixed-use residential developments",
    keywords: ["Condo construction", "Apartment buildings", "Mixed-use development"],
  },
  {
    name: "Industrial & Flex Space",
    href: "/commercial/industrial-construction/",
    icon: Factory,
    image: AI_IMAGES.industrial,
    imageAlt: AI_IMAGE_ALT.industrial,
    description: "Tilt-wall construction, steel erection, and warehouse facilities",
    keywords: ["Tilt-wall construction", "Steel erection", "Warehouse facilities"],
  },
  {
    name: "Disaster Recovery (B2B)",
    href: "/disaster-recovery/",
    icon: ShieldCheck,
    image: AI_IMAGES.hurricane,
    imageAlt: AI_IMAGE_ALT.hurricane,
    description: "Large-loss insurance restoration for commercial and multi-family properties",
    keywords: ["Large loss restoration", "Insurance claims", "Commercial restoration"],
  },
  {
    name: "Historic Restoration (Comm)",
    href: "/commercial/historic-restoration/",
    icon: Landmark,
    image: AI_IMAGES.historic,
    imageAlt: AI_IMAGE_ALT.historic,
    description: "Historic tax credits, SHPO compliance, and adaptive reuse projects",
    keywords: ["Historic tax credits", "SHPO compliance", "Adaptive reuse"],
  },
  {
    name: "Condo Remediation & SB4-D",
    href: "/commercial/condo-remediation/",
    icon: Building2,
    image: AI_IMAGES.condo,
    imageAlt: AI_IMAGE_ALT.condo,
    description: "SB4-D compliance, milestone inspections, and SIRS structural assessments",
    keywords: ["SB4-D compliance", "Milestone inspections", "SIRS assessments"],
  },
  {
    name: "CPM Scheduling",
    href: "/commercial/cpm-scheduling/",
    icon: Calendar,
    image: AI_IMAGES.office,
    imageAlt: AI_IMAGE_ALT.office,
    description: "Critical path method scheduling to prevent delays and cost overruns",
    keywords: ["CPM scheduling", "Project timelines", "Delay prevention"],
  },
];

// Featured commercial projects
const featuredProjects = [
  {
    name: "Turner Agri-Center",
    location: "Polk County, FL",
    value: "$12.5M",
    description: "Complete rebuild of the Turner Agri-Civic Center after catastrophic damage from Hurricane Charley. This project included structural steel erection, full MEP systems, and specialized agricultural exhibition facilities serving the greater Polk County community.",
    type: "Disaster Recovery / Public Facility",
    icon: Building2,
  },
  {
    name: "Tiara Condominium Association",
    location: "Tampa Bay Area",
    value: "$4.9M",
    description: "Comprehensive balcony restoration and exterior waterproofing for this multi-building condominium complex. Scope included structural concrete repair, waterproof membrane installation, and building envelope restoration while maintaining resident occupancy.",
    type: "Multi-Family / Balcony Restoration",
    icon: Building,
  },
  {
    name: "Leon County Detention Center",
    location: "Tallahassee, FL",
    value: "$1.8M",
    description: "Water damage restoration for this critical government facility requiring specialized security protocols, phased construction to maintain operations, and compliance with state detention facility standards throughout the restoration process.",
    type: "Government / Disaster Recovery",
    icon: ShieldCheck,
  },
  {
    name: "Bay Pines Veterans Hospital",
    location: "Bay Pines, FL",
    value: "$2M",
    description: "Historic restoration of this landmark federal facility honoring veterans. Project required strict federal compliance, coordination with VA facilities management, SHPO adherence for historic preservation, and specialized infection control during active hospital operations.",
    type: "Historic Restoration / Healthcare",
    icon: Landmark,
  },
];

// Industries served
const industriesServed = [
  {
    name: "Medical & Healthcare",
    icon: Stethoscope,
    description: "AHCA-compliant construction for hospitals, clinics, surgical centers, and specialized medical facilities",
  },
  {
    name: "Multi-Family Residential",
    icon: Building,
    description: "Condominiums, apartment complexes, senior living, and mixed-use developments",
  },
  {
    name: "Industrial & Warehouse",
    icon: Warehouse,
    description: "Distribution centers, manufacturing facilities, flex space, and logistics buildings",
  },
  {
    name: "Retail & Hospitality",
    icon: Hotel,
    description: "Hotels, restaurants, retail centers, and entertainment venues",
  },
  {
    name: "Educational Institutions",
    icon: GraduationCap,
    description: "Schools, universities, training facilities, and campus buildings",
  },
  {
    name: "Government & Municipal",
    icon: Briefcase,
    description: "Civic buildings, detention facilities, public works, and federal projects",
  },
];

// Featured commercial articles (placeholder - will be populated from actual content)
const featuredArticles = [
  {
    title: "Navigating AHCA Inspections for Medical Facilities",
    href: "/ahca-compliance-medical-construction/",
    category: "Medical Construction",
    excerpt: "Essential compliance requirements for healthcare construction in Florida",
  },
  {
    title: "Florida SB4-D Compliance Guide for Condo Associations",
    href: "/sb4d-compliance-guide/",
    category: "Condo Remediation",
    excerpt: "Understanding the new milestone inspection and SIRS requirements",
  },
  {
    title: "CPM Scheduling to Prevent Commercial Project Delays",
    href: "/cpm-scheduling-commercial-construction/",
    category: "Project Management",
    excerpt: "How critical path method scheduling keeps large projects on track",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
];

export default function CommercialHubPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${AI_IMAGES.commercialHero}')` }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block bg-brand-green/30 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              B2B CONSTRUCTION SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Commercial Construction Tampa | Risk & ROI Focus
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl">
              Large-scale commercial projects from $500K to $25M+. Medical facilities,
              multi-family developments, industrial construction, and disaster recovery
              with {BUSINESS_INFO.yearsInBusiness} experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all"
              >
                Request a Bid
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

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.projectValueRange}</p>
              <p className="text-sm text-gray-600">Project Range</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.yearsInBusiness}</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">{BUSINESS_INFO.projectsCompleted}</p>
              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div>
              <p className="text-3xl font-bold text-brand-green-dark">In-House</p>
              <p className="text-sm text-gray-600">Engineering & Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8 text-center">
              Tampa Bay's Premier Commercial General Contractor
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                For over four decades, Florida Construction Specialists has served as Tampa Bay's trusted partner for complex commercial construction projects. Unlike residential contractors who occasionally take on commercial work, FCS was built from the ground up to handle the unique demands of business-to-business construction—where risk mitigation, regulatory compliance, and return on investment drive every decision.
              </p>
              
              <p>
                Our commercial division handles projects ranging from $500,000 tenant improvements to $25 million+ ground-up developments. This focused expertise means we understand that commercial construction isn't just about building structures—it's about enabling business operations, meeting strict compliance requirements, and delivering facilities that generate returns for property owners and investors.
              </p>
              
              <p>
                What sets Florida Construction Specialists apart in the Tampa Bay commercial construction market is our comprehensive in-house capability. While most general contractors coordinate between multiple outside consultants, FCS maintains an in-house licensed engineer and architectural draftsman on staff. This integration allows us to identify constructability issues during pre-construction, respond rapidly to field conditions, and maintain tighter project control throughout the construction process.
              </p>
              
              <p>
                Our project portfolio spans virtually every commercial sector: medical facilities requiring AHCA compliance and specialized clean room construction, multi-family residential developments from condominiums to apartment complexes, industrial facilities including tilt-wall construction and steel erection, and large-loss disaster recovery for commercial properties throughout Florida.
              </p>
              
              <p>
                The commercial construction landscape in Florida presents unique challenges—from stringent building codes designed for hurricane resistance to complex regulatory requirements across multiple agencies. FCS has built lasting relationships with building departments throughout Tampa Bay, streamlining permit approvals and inspections. Our familiarity with agencies including AHCA, the State Historic Preservation Office (SHPO), FEMA, and local municipalities allows us to navigate compliance requirements efficiently, avoiding costly delays that impact project timelines and budgets.
              </p>
              
              <p>
                Whether you're a property developer breaking ground on a new multi-family community, a healthcare system expanding medical facilities, or a property manager facing major disaster recovery, Florida Construction Specialists brings the experience, resources, and accountability that commercial projects demand. We don't just build structures—we deliver completed projects that meet your operational requirements, compliance obligations, and investment objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Clusters Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
              Commercial Construction Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized B2B construction services focused on risk mitigation,
              compliance, and return on investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialClusters.map((cluster) => {
              const Icon = cluster.icon;
              return (
                <Link
                  key={cluster.name}
                  href={cluster.href}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-brand-green/30"
                >
                  {/* Service Image */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={cluster.image}
                      alt={cluster.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-brand-green-dark" />
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green transition-colors font-heading">
                      {cluster.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{cluster.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cluster.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Commercial Clients Choose FCS - Parallax Section */}
      <ParallaxSection
        backgroundImage={PARALLAX_IMAGES.commercial}
        title="Why Commercial Clients Choose FCS"
        subtitle="Risk management and ROI delivered through experienced project management"
        overlayOpacity={0.6}
        cardOverlap={200}
        minHeight="400px"
      />
      <ParallaxCardsContainer overlap={200} className="pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-green-dark font-heading mb-6">
              Our Commercial Advantage
            </h3>
            
            <div className="prose prose-lg max-w-none text-gray-700 mb-6">
              <p>
                Commercial property owners and developers face significant risks when selecting a general contractor. Project delays cascade into lost revenue, cost overruns erode investment returns, and compliance failures can halt operations entirely. Florida Construction Specialists has built our commercial practice specifically to address these risks through experienced project management, integrated capabilities, and direct accountability.
              </p>
              
              <p>
                <strong>FCS always serves as the prime general contractor on our projects—we never subcontract the management of your project to another firm.</strong> This distinction matters enormously in commercial construction. As prime contractor, we maintain direct contractual relationships with property owners, complete control over project execution, and full accountability for results. You work directly with our project managers and leadership team, not through intermediaries who may have divided loyalties.
              </p>
              
              <p>
                Our in-house engineering and architectural drafting capabilities represent a significant competitive advantage. Having a licensed engineer on staff means we can evaluate structural conditions, resolve field conflicts, and generate solutions without waiting for outside consultants. Our architectural draftsman produces shop drawings, as-built documentation, and permit sets in-house, maintaining schedule continuity that outside firms simply cannot match.
              </p>
              
              <p>
                With 43 years of insurance restoration experience, FCS brings unmatched expertise to large-loss commercial claims. We understand the insurance process from initial damage assessment through final settlement, providing certified estimates that withstand adjuster scrutiny while advocating for complete property restoration. This expertise extends beyond disaster recovery—it informs how we document projects, manage change orders, and protect client interests throughout construction.
              </p>
              
              <p>
                Regulatory compliance is woven into every project we undertake. Our team has navigated AHCA inspections for medical facilities, SHPO requirements for historic properties, FEMA regulations for flood zone construction, and building department reviews across every Tampa Bay jurisdiction. These established relationships and documented compliance history accelerate approvals and reduce the regulatory risk that delays commercial projects.
              </p>
              
              <p>
                Finally, we employ Critical Path Method (CPM) scheduling on all commercial projects to prevent the delays that erode profitability. CPM identifies the sequence of activities that determine project duration, allowing us to focus resources on critical tasks, identify potential delays before they impact completion, and make informed decisions when schedule conflicts arise.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 shadow-xl overflow-hidden">
            <HighLevelForm variant="commercial" />
          </div>
        </div>
      </ParallaxCardsContainer>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
              Featured Commercial Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of completed projects demonstrating our capabilities across commercial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.name}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-brand-green-bg rounded-lg flex items-center justify-center">
                      <Icon className="w-7 h-7 text-brand-green-dark" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-green-dark font-heading">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-500">{project.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-brand-gold">{project.value}</span>
                      <p className="text-xs text-gray-500">Project Value</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-brand-green-bg text-brand-green-dark px-3 py-1 rounded-full font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              These projects represent just a portion of the 300+ commercial projects FCS has completed throughout Florida and the Southeast.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-white font-bold rounded-full hover:bg-brand-green-dark transition-all"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Florida Construction Specialists brings sector-specific expertise to commercial construction across Tampa Bay. Each industry presents unique requirements—from regulatory compliance and specialized systems to operational constraints during construction. Our experience across these sectors means we understand your industry's specific challenges before breaking ground.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesServed.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.name}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-green-bg rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-green-dark" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-green-dark font-heading">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-10 bg-brand-green-bg rounded-xl p-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700">
                No matter your industry, FCS approaches each project with the same commitment: understanding your operational requirements, navigating applicable regulations, and delivering a facility that serves your business objectives. Our cross-sector experience often reveals solutions and efficiencies that specialists within a single industry might miss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <HubRelatedArticles
            silo="commercial"
            title="Commercial Construction Insights"
            articles={featuredArticles}
            showAll={false}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema 
        items={FAQ_DATABASE.commercial}
        title="Commercial Construction FAQs"
        description="Answers to common questions about our commercial construction services, capabilities, and process"
      />

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-8 text-center">
            Commercial Service Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((location) => {
              // Strip -fl suffix for URL (pages are /commercial-construction-tampa/, not /commercial-construction-tampa-fl/)
              const urlSlug = location.slug.replace('-fl', '');
              return (
                <Link
                  key={location.slug}
                  href={`/commercial-construction-${urlSlug}/`}
                  className="bg-gray-50 rounded-lg p-4 text-center hover:bg-brand-green hover:text-white transition-colors group"
                >
                  <span className="font-semibold text-brand-green-dark group-hover:text-white transition-colors">
                    {location.name}, FL
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Discuss Your Commercial Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From $500K tenant improvements to $25M+ developments,
            Florida Construction Specialists has the experience and bonding capacity
            to deliver your project on time and on budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Commercial Bid
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[{"href":"/services/commercial/","label":"Commercial Construction Services"},{"href":"/commercial-construction-tampa/","label":"Commercial Construction Tampa"},{"href":"/services/commercial/design-build/","label":"Design-Build Services"},{"href":"/services/commercial/medical-construction/","label":"Medical Facility Construction"},{"href":"/services/commercial/tenant-improvements/","label":"Tenant Improvements"}]}
            title="Related Resources"
            
          />
        </div>
      </section>

    </>
  );
}
