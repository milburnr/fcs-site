import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Landmark, Shield, Award, Clock, CheckCircle, Phone, ArrowRight, FileText, Building2, Palette, History, Scale, MapPin, Hammer, BookOpen, Users, Star, Heart } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { HighLevelForm } from "@/components/HighLevelForm";
import { GoogleMap } from "@/components/GoogleMap";
import { InternalLinks, NearbyLocations, RelatedServices } from "@/components/InternalLinks";
import { BUSINESS_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Historic Restoration in St. Petersburg",
  description: "St. Petersburg historic restoration experts. Old Northeast Historic District, Bay Pines Veterans Hospital ($2M federal project), downtown St. Pete landmarks. SHPO compliance, Section 106. Call (813) 420-7561.",
  keywords: [
    "historic restoration st petersburg",
    "old northeast historic district restoration",
    "bay pines veterans hospital restoration",
    "st pete historic preservation",
    "SHPO compliance st petersburg",
    "section 106 compliance florida",
    "mediterranean revival restoration",
    "pinellas county historic preservation",
    "federal historic compliance",
    "waterfront historic properties st pete",
  ],
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Historic Restoration", href: "/services/historic-restoration/" },
  { name: "St. Petersburg", href: "/historic-restoration-st-petersburg/" },
];

// 10 St. Petersburg-specific historic restoration FAQs
const stPeteFaqs = [
  {
    question: "What historic districts does Florida Construction Specialists serve in St. Petersburg?",
    answer: "We serve all of St. Petersburg's designated historic districts including the Old Northeast Historic District (featuring 1920s bungalows, Colonial Revival, and Mediterranean Revival homes), the Downtown St. Petersburg historic core, the Kenwood Historic District, Roser Park Historic District, and the Historic Uptown neighborhood. Each district has specific preservation standards under Pinellas County and City of St. Petersburg Historic Preservation guidelines, and we have extensive experience navigating local review board requirements."
  },
  {
    question: "What is the significance of the Bay Pines Veterans Hospital project?",
    answer: "The Bay Pines VA Healthcare System restoration was a $2 million federal historic compliance project that Florida Construction Specialists completed with full Section 106 compliance and SHPO coordination. The facility, established in 1933, is listed on the National Register of Historic Places and serves as a critical healthcare facility for veterans. Our work preserved the original Mediterranean Revival architecture while upgrading critical healthcare infrastructure, demonstrating our expertise in both federal compliance and healthcare facility restoration."
  },
  {
    question: "What is Section 106 compliance and why does it matter for St. Petersburg historic projects?",
    answer: "Section 106 of the National Historic Preservation Act requires federal agencies to consider the effects of their undertakings on historic properties. For St. Petersburg projects involving federal funding, permits, or licenses, Section 106 review is mandatory. This includes projects at facilities like Bay Pines VA Hospital. FCS has extensive experience navigating Section 106 consultation, preparing documentation, and coordinating with the State Historic Preservation Office (SHPO) to ensure projects proceed smoothly while protecting historic resources."
  },
  {
    question: "What makes the Old Northeast Historic District unique for restoration work?",
    answer: "The Old Northeast Historic District, listed on the National Register of Historic Places in 2003, represents St. Petersburg's premier historic residential neighborhood. Developed primarily between 1910-1940, it features exceptional examples of Mediterranean Revival, Colonial Revival, Craftsman, and Bungalow architecture. The waterfront location along Tampa Bay means many properties face unique challenges from salt air, humidity, and storm exposure. Our restoration approaches address these environmental factors while preserving the architectural character that makes Old Northeast one of Florida's most desirable historic neighborhoods."
  },
  {
    question: "How do I obtain historic preservation approval in St. Petersburg?",
    answer: "St. Petersburg's historic preservation program operates through the Community Planning and Preservation Commission (CPPC). Properties in local historic districts require a Certificate of Appropriateness (COA) for exterior alterations visible from public rights-of-way. The application process involves submitting detailed plans and specifications, and some projects require full board review at monthly meetings. FCS prepares comprehensive COA applications, presents projects to the Commission when needed, and has established relationships with city preservation staff to facilitate approvals."
  },
  {
    question: "Are there tax incentives available for historic restoration in St. Petersburg?",
    answer: "Yes, St. Petersburg property owners may be eligible for multiple historic tax incentives: the Federal Historic Preservation Tax Credit (20% for income-producing properties), Florida's ad valorem property tax exemption for historic properties (up to 100% exemption on improvements for 10 years), and federal tax deductions for facade easement donations. Properties must be listed on the National Register (individually or as contributing structures in a historic district), and work must meet Secretary of Interior Standards. We coordinate all SHPO documentation required to qualify for these programs."
  },
  {
    question: "What waterfront-specific challenges affect historic properties in St. Petersburg?",
    answer: "St. Petersburg's waterfront historic properties face unique preservation challenges including salt air corrosion of metals and masonry, hurricane wind and water damage, elevated humidity causing wood deterioration and mold, foundation issues from water table fluctuations, and sea level rise considerations. Our restoration approaches address these environmental factors through appropriate material selection, enhanced waterproofing, storm protection systems, and maintenance planning that accounts for the coastal environment while preserving historic character."
  },
  {
    question: "What is the typical cost of historic restoration in St. Petersburg?",
    answer: "Historic restoration in St. Petersburg typically ranges from $175-375+ per square foot for full building restoration, $45-125 per square foot for facade restoration, and $125-275 per square foot for interior historic restoration. Costs vary based on building condition, preservation requirements, waterfront exposure, and whether the project pursues tax credits. Federal tax credits (20%) can substantially offset costs for income-producing properties, and Florida's property tax exemption provides additional long-term savings. We provide detailed budgeting during pre-construction."
  },
  {
    question: "How long does a historic restoration project take in St. Petersburg?",
    answer: "Timeline depends on project scope and approval requirements. Typical ranges: facade restoration 3-8 months, full building restoration 12-24 months, complex adaptive reuse or federal compliance projects 18-36 months. Additional time is needed for COA approvals (1-3 months), SHPO review for tax credit projects (4-6 months for Part 2 approval), and Section 106 consultation for federal undertakings (3-12 months depending on complexity). Our Bay Pines VA Hospital project required extensive federal coordination, demonstrating our ability to manage complex compliance timelines."
  },
  {
    question: "Can you restore historic Mediterranean Revival properties in St. Petersburg?",
    answer: "Mediterranean Revival restoration is one of our specialties, and St. Petersburg has exceptional examples of this style throughout Old Northeast, Downtown, and the Snell Isle area. These 1920s-era properties feature distinctive barrel tile roofs, stucco exteriors, arched openings, decorative ironwork, and courtyard layouts. Restoration requires expertise in historic stucco formulations, terra cotta and tile sourcing, ironwork restoration, and wood window rehabilitation. We've restored numerous Mediterranean Revival properties, preserving the romantic character that defines St. Petersburg's architectural heritage."
  },
];

// Cluster services for internal linking
const clusterServices = [
  {
    name: "SHPO Compliance",
    href: "/services/historic-restoration/shpo-compliance/",
    description: "Full compliance with Florida State Historic Preservation Office requirements, Section 106 consultation, and Secretary of the Interior's Standards.",
    icon: Shield,
  },
  {
    name: "Period-Accurate Material Sourcing",
    href: "/services/historic-restoration/material-sourcing/",
    description: "Expert sourcing of period-appropriate materials including historic masonry, Mediterranean tile, ironwork, and architectural elements.",
    icon: Palette,
  },
  {
    name: "Historic Tax Credits",
    href: "/services/historic-restoration/historic-tax-credits/",
    description: "Navigation of federal and Florida state historic tax credit programs, ensuring work meets qualification requirements.",
    icon: Scale,
  },
];

// Featured projects in St. Petersburg
const featuredProjects = [
  {
    name: "Bay Pines Veterans Hospital",
    location: "Bay Pines, St. Petersburg",
    type: "Federal Healthcare / National Register Property",
    value: "$2M",
    description: "Complete federal historic compliance project at the Bay Pines VA Healthcare System, a 1933 National Register property. Work included full Section 106 compliance, SHPO coordination, Mediterranean Revival facade restoration, and critical healthcare infrastructure upgrades. This project demonstrates our expertise in federal compliance and large-scale institutional historic restoration.",
    featured: true,
  },
  {
    name: "Old Northeast Residence",
    location: "Old Northeast Historic District",
    type: "Residential / Local Historic District",
    value: "$425K",
    description: "Complete restoration of a 1926 Mediterranean Revival residence in the Old Northeast Historic District. Project included historic stucco restoration, barrel tile roof replacement with period-appropriate materials, original wood window rehabilitation, and sensitive integration of modern HVAC systems.",
  },
  {
    name: "Downtown St. Pete Commercial Building",
    location: "Downtown St. Petersburg",
    type: "Commercial / Adaptive Reuse",
    value: "$875K",
    description: "Historic adaptive reuse of a 1920s commercial building in downtown St. Petersburg. Work preserved the historic storefront, restored the decorative facade, and converted upper floors to modern office space while maintaining historic character and qualifying for federal tax credits.",
  },
  {
    name: "Kenwood District Bungalow",
    location: "Kenwood Historic District",
    type: "Residential / Craftsman Restoration",
    value: "$285K",
    description: "Restoration of a 1925 Craftsman bungalow in the Kenwood Historic District. Project included front porch reconstruction with period-accurate details, wood siding restoration, original window rehabilitation, and restoration of interior craftsman millwork.",
  },
];

// Internal links for the page
const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Period Material Sourcing" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/historic-restoration-tampa/", label: "Historic Restoration Tampa" },
  { href: "/historic-restoration-lakeland/", label: "Historic Restoration Lakeland" },
];

export default function HistoricRestorationStPetersburgPage() {
  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema city="St. Petersburg" service="Historic Restoration" />
      <ServiceSchema
        serviceName="Historic Restoration"
        serviceDescription="Expert historic restoration services in St. Petersburg, Florida. Old Northeast Historic District, Bay Pines VA Hospital specialists. Section 106 compliance, SHPO coordination, Secretary of Interior Standards, historic tax credit navigation. Projects from $500K to $25M+."
        city="St. Petersburg"
        minPrice="500000"
      />
      <FAQSchema faqs={stPeteFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-900 via-amber-800 to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span className="text-brand-gold font-semibold">Serving St. Petersburg, FL</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading leading-tight">
                Historic Restoration in St. Petersburg
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Florida Construction Specialists is St. Petersburg's trusted historic restoration contractor. From the Mediterranean Revival gems of Old Northeast to federal landmark projects like Bay Pines Veterans Hospital, we preserve the Sunshine City's irreplaceable architectural heritage with SHPO compliance and Section 106 expertise.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Section 106</p>
                  <p className="text-xs text-gray-300">Compliant</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Landmark className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Federal</p>
                  <p className="text-xs text-gray-300">Projects</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <History className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Old Northeast</p>
                  <p className="text-xs text-gray-300">Specialists</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-brand-gold" />
                  <p className="text-sm font-semibold">Licensed</p>
                  <p className="text-xs text-gray-300">{BUSINESS_INFO.licenseNumber}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Schedule Historic Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Discuss Your St. Petersburg Historic Project
              </h2>
              <p className="text-gray-600 mb-6">
                Tell us about your historic property and restoration needs in St. Petersburg.
              </p>
              <HighLevelForm height={450} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project: Bay Pines VA Hospital */}
      <section className="section bg-amber-700">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Star className="w-4 h-4 text-brand-gold" />
                <span className="text-brand-gold font-semibold">Featured Federal Project</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                Bay Pines Veterans Hospital - $2M Federal Historic Compliance
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Florida Construction Specialists completed a $2 million historic restoration at the Bay Pines VA Healthcare System, one of the nation's oldest VA medical centers and a National Register property established in 1933.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/90"><strong>Full Section 106 Compliance</strong> - Complete federal historic preservation consultation and documentation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/90"><strong>SHPO Coordination</strong> - Direct coordination with Florida Division of Historical Resources throughout project</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/90"><strong>Mediterranean Revival Preservation</strong> - Original 1933 architectural character preserved and restored</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/90"><strong>Healthcare Infrastructure</strong> - Critical systems upgraded while maintaining historic integrity</span>
                </div>
              </div>
              <p className="text-white/80 text-sm border-t border-white/20 pt-4">
                This project demonstrates our expertise in navigating federal historic compliance requirements while delivering functioning healthcare infrastructure that serves those who served our country.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-amber-700" />
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark">Bay Pines VA Healthcare System</h3>
                  <p className="text-gray-600">National Register of Historic Places</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">$2M</p>
                  <p className="text-sm text-gray-600">Project Value</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">1933</p>
                  <p className="text-sm text-gray-600">Year Established</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">106</p>
                  <p className="text-sm text-gray-600">Section Compliance</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-amber-700">SHPO</p>
                  <p className="text-sm text-gray-600">Coordinated</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Location:</strong> Bay Pines, St. Petersburg, FL</p>
                <p><strong>Designation:</strong> National Register of Historic Places</p>
                <p><strong>Style:</strong> Mediterranean Revival</p>
                <p><strong>Compliance:</strong> Section 106, NHPA, Secretary of Interior Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - St. Petersburg's Historic Districts */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Preserving St. Petersburg's Architectural Heritage
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl mb-6">
                St. Petersburg's historic neighborhoods represent some of Florida's finest examples of early 20th-century residential and commercial architecture. From the waterfront estates of Old Northeast to the Craftsman bungalows of Kenwood, these irreplaceable structures tell the story of the Sunshine City's development as a premier Florida destination. At Florida Construction Specialists, we bring the specialized expertise required to preserve these architectural treasures for future generations.
              </p>
              <p className="mb-6">
                <strong>Old Northeast Historic District</strong> is St. Petersburg's crown jewel, listed on the National Register of Historic Places since 2003. This premier residential neighborhood, developed between 1910-1940, features exceptional Mediterranean Revival, Colonial Revival, Craftsman, and Bungalow architecture along tree-lined streets. The district's waterfront location along Tampa Bay creates unique preservation challenges from salt air exposure and storm vulnerability, requiring specialized restoration approaches that address environmental factors while preserving architectural character.
              </p>
              <p className="mb-6">
                <strong>Downtown St. Petersburg</strong> contains significant commercial and institutional buildings from the city's boom era of the 1920s. These structures include Mediterranean Revival and Art Deco commercial buildings, historic hotels, and civic buildings that define the downtown character. Restoration and adaptive reuse of these buildings supports downtown revitalization while preserving the architectural heritage that makes St. Petersburg unique among Florida cities.
              </p>
              <p className="mb-6">
                <strong>Kenwood Historic District</strong> and <strong>Roser Park</strong> offer exceptional examples of Craftsman bungalows and early American Foursquare homes. These neighborhoods represent middle-class residential development from the 1910s-1930s, featuring distinctive architectural details, mature landscaping, and walkable streetscapes that are increasingly valued by preservation-minded homeowners.
              </p>
              <p>
                Whether you're restoring a waterfront Mediterranean Revival estate in Old Northeast, rehabilitating a downtown commercial building for modern use, preserving a Kenwood bungalow, or navigating federal compliance at institutional properties like Bay Pines, FCS brings the expertise, craftsmanship, and regulatory knowledge to ensure your project succeeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Visual Break */}
      <ContentParallax
        src="/images/tampa-historic-building-restoration/tampa-historic-building-restoration-small.webp"
        alt="Historic building restoration"
        title="Preserving Architectural Heritage"
        subtitle="Certified historic preservation specialists"
        overlayOpacity={0.55}
      />

      {/* Services Grid - Cluster Pages */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Restoration Services in St. Petersburg
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services for St. Petersburg's historic preservation, restoration, and adaptive reuse projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clusterServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                  <service.icon className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 group-hover:text-brand-green transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-amber-700 font-semibold">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* St. Petersburg-Specific Content: Old Northeast Expertise */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Old Northeast Historic District Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                The Old Northeast Historic District represents the finest concentration of early 20th-century residential architecture in St. Petersburg. Working in this prestigious National Register district requires specialized knowledge of period architecture, local preservation regulations, and the unique challenges of waterfront historic properties. Florida Construction Specialists brings deep expertise in Old Northeast restoration.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Landmark className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark">Mediterranean Revival Specialists</h3>
                    <p className="text-gray-600 text-sm">Expert restoration of the distinctive Mediterranean Revival homes that define Old Northeast, including barrel tile roofs, stucco work, and decorative ironwork.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark">Waterfront Property Expertise</h3>
                    <p className="text-gray-600 text-sm">Understanding of the unique challenges facing waterfront historic properties including salt air exposure, humidity, and storm vulnerability.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-green-dark">CPPC Navigation</h3>
                    <p className="text-gray-600 text-sm">Experience working with St. Petersburg's Community Planning and Preservation Commission, preparing COA applications, and facilitating approvals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">Old Northeast's Historic Significance</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>National Register Listed</strong> - Listed on the National Register of Historic Places since 2003</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>1910-1940 Development</strong> - Representing St. Pete's boom era architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Multiple Architectural Styles</strong> - Mediterranean Revival, Colonial Revival, Craftsman, Bungalow</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Tampa Bay Waterfront</strong> - Prestigious waterfront location with unique preservation challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Tax Credit Eligible</strong> - Contributing properties qualify for federal and state historic tax incentives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="section bg-amber-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Restore Your St. Petersburg Historic Property
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From Old Northeast's waterfront estates to federal landmarks like Bay Pines, we bring the expertise St. Petersburg's historic properties deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-700 font-bold rounded-full hover:bg-gray-100 transition-all">
              Schedule Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-full hover:bg-brand-gold-light transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Featured St. Petersburg Historic Restoration Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of our historic preservation work in St. Petersburg, demonstrating our expertise from federal healthcare facilities to residential restoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.name} className={`bg-white rounded-xl shadow-md overflow-hidden ${project.featured ? 'ring-2 ring-amber-500' : ''}`}>
                <div className={`${project.featured ? 'bg-gradient-to-r from-amber-700 to-amber-600' : 'bg-amber-700'} text-white p-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{project.name}</h3>
                      <p className="text-amber-100 text-sm">{project.location}</p>
                    </div>
                    {project.featured && (
                      <Star className="w-6 h-6 text-brand-gold" />
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded">
                      {project.type}
                    </span>
                    <span className="bg-brand-green-bg text-brand-green-dark text-xs font-semibold px-2 py-1 rounded">
                      {project.value}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/gallery/" className="inline-flex items-center text-amber-700 font-semibold hover:underline">
              View Full Portfolio <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Federal Compliance Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">Federal Historic Compliance Expertise</h3>
              <p className="text-gray-600 mb-6">
                Our $2M Bay Pines Veterans Hospital project demonstrates FCS's capability for complex federal historic compliance work. Federal undertakings affecting historic properties require Section 106 consultation, a process that can be challenging without experienced guidance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-green-dark">Section 106 Consultation</p>
                    <p className="text-sm text-gray-600">Complete management of Section 106 review process required for federal undertakings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-green-dark">SHPO Coordination</p>
                    <p className="text-sm text-gray-600">Direct coordination with Florida Division of Historical Resources throughout project lifecycle</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Landmark className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-green-dark">National Register Properties</p>
                    <p className="text-sm text-gray-600">Experience with listed properties requiring enhanced preservation protocols</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Scale className="w-5 h-5 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-green-dark">Documentation & Reporting</p>
                    <p className="text-sm text-gray-600">Comprehensive documentation meeting federal requirements for historic preservation compliance</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
                Section 106 & Federal Compliance
              </h2>
              <p className="text-gray-600 mb-6">
                Section 106 of the National Historic Preservation Act (NHPA) requires federal agencies to consider the effects of their undertakings on historic properties. This applies to any project involving federal funding, federal permits, or federal licenses affecting properties listed on or eligible for the National Register.
              </p>
              <p className="text-gray-600 mb-6">
                In St. Petersburg, Section 106 compliance is particularly relevant for projects at federal facilities like Bay Pines VA Healthcare System, projects receiving federal grants or loans, and projects requiring federal permits (including Army Corps of Engineers permits for waterfront work).
              </p>
              <p className="text-gray-600">
                FCS's experience with the Bay Pines VA Hospital project demonstrates our ability to navigate complex federal compliance while delivering successful historic restoration outcomes. We manage the consultation process, coordinate with SHPO, prepare required documentation, and ensure work meets Secretary of Interior Standards—allowing projects to proceed smoothly while protecting significant historic resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Restoration Process */}
      <section className="section-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading">
              Our St. Petersburg Historic Restoration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A methodical approach that respects St. Petersburg's historic significance while achieving your project goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Historic Assessment & Documentation",
                description: "We begin with thorough documentation of existing conditions, historic research, and identification of character-defining features. For St. Petersburg properties, we research building history, original construction methods, and previous alterations to guide restoration approaches.",
                icon: BookOpen,
              },
              {
                step: "02",
                title: "Preservation Planning",
                description: "Working with architects and preservation consultants, we develop approaches that address deterioration while preserving character-defining features. For waterfront properties, we incorporate strategies addressing salt air, humidity, and storm exposure.",
                icon: FileText,
              },
              {
                step: "03",
                title: "Regulatory Coordination",
                description: "We navigate CPPC approvals for local historic districts, Section 106 consultation for federal undertakings, SHPO coordination for tax credits, and building permits. Our relationships with regulatory staff help streamline approvals.",
                icon: Scale,
              },
              {
                step: "04",
                title: "Material Sourcing",
                description: "We source period-appropriate materials—from Mediterranean barrel tiles and historic stucco formulations to compatible wood species and period hardware. Matching original materials is essential for successful St. Petersburg restoration.",
                icon: Palette,
              },
              {
                step: "05",
                title: "Skilled Execution",
                description: "Restoration work is performed by craftspeople experienced in historic techniques. Whether traditional stucco methods, tile roofing, plaster restoration, or period-accurate carpentry, the work honors original craftsmanship.",
                icon: Hammer,
              },
              {
                step: "06",
                title: "Documentation & Completion",
                description: "We provide thorough documentation of all restoration work—essential for tax credit applications, Section 106 compliance, future maintenance planning, and the historic record. For tax credit projects, we prepare SHPO Part 3 certification.",
                icon: CheckCircle,
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-white rounded-xl p-6 shadow-sm">
                <div className="absolute -top-4 left-6 bg-amber-700 text-white text-sm font-bold px-3 py-1 rounded-full">
                  Step {item.step}
                </div>
                <div className="mt-4">
                  <item.icon className="w-10 h-10 text-amber-700 mb-4" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Why St. Petersburg Chooses FCS for Historic Restoration
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Always Prime Contractor</h3>
                    <p className="text-gray-300">We never work as a subcontractor on St. Petersburg historic projects. You get direct accountability, single-point contact, and our full commitment throughout the restoration.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center">
                    <Landmark className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Federal Compliance Proven</h3>
                    <p className="text-gray-300">Our $2M Bay Pines VA Hospital project demonstrates proven capability for federal historic compliance including Section 106 consultation and SHPO coordination.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Tax Credit Navigation</h3>
                    <p className="text-gray-300">We help St. Petersburg property owners maximize historic tax credits, coordinating SHPO applications and ensuring work meets certification requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <Users className="w-10 h-10 mx-auto mb-3 text-brand-gold" />
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <Building2 className="w-10 h-10 mx-auto mb-3 text-brand-gold" />
                <div className="text-3xl font-bold mb-1">$10M+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <Landmark className="w-10 h-10 mx-auto mb-3 text-brand-gold" />
                <div className="text-3xl font-bold mb-1">$2M</div>
                <div className="text-sm text-gray-300">Bay Pines Project</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white">
                <Award className="w-10 h-10 mx-auto mb-3 text-brand-gold" />
                <div className="text-3xl font-bold mb-1">150+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs & Timeline Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            St. Petersburg Historic Restoration: Costs & Timelines
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-amber-700 text-white">
                    <th className="text-left p-4 font-semibold">Project Type</th>
                    <th className="text-left p-4 font-semibold">Cost Range</th>
                    <th className="text-left p-4 font-semibold">Typical Timeline</th>
                    <th className="text-left p-4 font-semibold">Tax Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Facade Restoration</td>
                    <td className="p-4">$45-125/SF (facade)</td>
                    <td className="p-4">3-8 months</td>
                    <td className="p-4">Potentially eligible</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Full Building Restoration</td>
                    <td className="p-4">$175-375+/SF</td>
                    <td className="p-4">12-24 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-medium">Interior Historic Restoration</td>
                    <td className="p-4">$125-275/SF</td>
                    <td className="p-4">6-14 months</td>
                    <td className="p-4">Part of whole-building</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-medium">Adaptive Reuse</td>
                    <td className="p-4">$150-325/SF</td>
                    <td className="p-4">14-30 months</td>
                    <td className="p-4">20% Federal (income properties)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Federal Compliance Projects</td>
                    <td className="p-4">$200-400+/SF</td>
                    <td className="p-4">18-36 months</td>
                    <td className="p-4">Varies by project</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              * Costs vary based on building condition, waterfront exposure, and level of restoration. Federal Historic Tax Credits (20%) available for qualifying income-producing properties. Florida ad valorem exemption may provide additional savings.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <FAQ
              items={stPeteFaqs}
              title="Historic Restoration in St. Petersburg - Frequently Asked Questions"
              description="Common questions about historic preservation and restoration projects in St. Petersburg, Florida."
            />
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading">
              Historic Restoration Services in St. Petersburg
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving all of St. Petersburg's historic districts including Old Northeast, Downtown St. Pete, Kenwood, Roser Park, and Historic Uptown.
            </p>
          </div>
          <GoogleMap city="St. Petersburg" height={400} />
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <InternalLinks
                title="Historic Restoration Resources"
                links={internalLinks}
              />
            </div>
            <div className="space-y-6">
              <RelatedServices city="St. Petersburg" currentService="historic-restoration" />
              <NearbyLocations currentCity="St. Petersburg" service="historic-restoration" serviceName="Historic Restoration" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-amber-700">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Preserve St. Petersburg's Architectural Heritage
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Contact Florida Construction Specialists to discuss your St. Petersburg historic restoration project. Whether you're restoring an Old Northeast waterfront estate, navigating federal compliance for an institutional property, or exploring adaptive reuse possibilities downtown, we have the expertise to bring your vision to life while honoring the past.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-700 font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {BUSINESS_INFO.phone}
                </a>
                <Link href="/contact/" className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-green-dark font-bold rounded-full hover:bg-brand-gold-light transition-all">
                  Contact Us Online
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-white/80 mb-4">Trusted for St. Petersburg historic preservation:</p>
                <div className="flex flex-wrap gap-4 text-sm text-white/90">
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Section 106 Compliant</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Secretary of Interior Standards</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Bay Pines VA Experience</span>
                  <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Old Northeast Specialists</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Schedule Your Consultation
              </h3>
              <HighLevelForm height={400} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
