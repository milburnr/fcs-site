import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Clock, ArrowRight, FileCheck, HardHat, Briefcase } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/commercial-construction-tampa/' },
  title: "Commercial Construction Tampa | Office",
  description: "Commercial construction in Tampa by Florida Construction Specialists. Design-build, medical facilities, office buildings, industrial projects.",
  openGraph: {
    title: "Commercial Construction Tampa | Office",
    description: "Commercial construction in Tampa by Florida Construction Specialists. Design-build, medical facilities, office buildings, industrial projects.",
    url: "https://floridaconstructionspecialists.com/commercial-construction-tampa/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "What is the typical timeline for commercial construction permitting through the City of Tampa?",
    answer: "Commercial construction permits in Tampa go through the City of Tampa Building Services Department. Plan review for standard commercial projects typically takes 4 to 8 weeks, though larger or more complex projects involving multiple departments can take 10 to 14 weeks. We submit complete packages with all required documentation to minimize review cycles. Projects in the Ybor City Historic District or Hyde Park Historic District require additional review through the respective historic preservation boards, which can add 3 to 6 weeks. Our team manages the entire permitting process so you can focus on your business."
  },
  {
    question: "How does Tampa's hurricane exposure affect commercial building design and construction costs?",
    answer: "Tampa sits directly on Tampa Bay with significant Gulf of Mexico exposure, placing it in Wind Zone 3 with 120 mph design wind speed requirements under the Florida Building Code. This affects structural framing, roof attachments, window and door impact ratings, and building envelope design. Hurricane-resistant construction typically adds 8 to 15 percent to structural costs compared to non-coastal areas, but it is a code requirement and also reduces long-term insurance costs. We design every commercial project to meet or exceed these wind load requirements, using enhanced roof tie-downs, impact-resistant glazing, and reinforced structural connections."
  },
  {
    question: "Which areas of Tampa have the strongest commercial construction activity right now?",
    answer: "The Water Street Tampa development continues to drive major commercial activity downtown, with office, retail, and mixed-use projects transforming the waterfront. The Westshore Business District remains the largest concentration of office space outside of Miami, with ongoing tenant improvement and renovation work. The Tampa International Airport corridor sees steady industrial and logistics construction. Emerging areas include the West Tampa neighborhood where redevelopment is accelerating, and the USF Research Park area near the University of South Florida campus where medical and technology office construction is growing."
  },
  {
    question: "Does FCS handle commercial renovation and tenant improvement projects in Tampa, or only new construction?",
    answer: "We handle both ground-up commercial construction and renovation projects throughout Tampa. Tenant improvements and commercial renovations actually represent a significant portion of our Tampa work, particularly in the Westshore Business District where existing office buildings undergo regular upgrades to attract and retain tenants. We also perform commercial renovations in downtown Tampa office towers, South Tampa retail spaces, and medical facility upgrades across Hillsborough County. Our renovation work includes interior buildouts, structural modifications, MEP system upgrades, ADA compliance updates, and complete commercial remodels."
  },
  {
    question: "What types of commercial construction does FCS specialize in within the Tampa market?",
    answer: "In the Tampa market, we deliver design-build construction, medical and healthcare facilities, multi-family developments, industrial and warehouse buildings, tenant improvements, retail construction, and commercial additions. Our Tampa commercial projects typically range from five hundred thousand to twenty-five million dollars. We have particular depth in medical facility construction, having completed projects throughout the Tampa General Hospital corridor and near BayCare Health System facilities. We also have extensive experience with industrial and logistics facilities near the Port of Tampa and along the I-4 corridor."
  },
  {
    question: "How does FCS manage construction scheduling around Tampa's rainy season?",
    answer: "Tampa receives over 50 inches of rainfall annually, with roughly 60 percent falling during the May through September rainy season in the form of intense afternoon thunderstorms. We build detailed CPM schedules that front-load weather-sensitive exterior work during the dry season when possible. For projects that span the rainy season, we schedule concrete pours, roofing work, and exterior envelope installation for morning hours before the typical afternoon storms. We maintain close coordination with our concrete and roofing subcontractors to take advantage of weather windows. This proactive scheduling approach prevents the delays that less experienced Tampa contractors encounter."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/commercial/" },
  { name: "Commercial Construction", href: "/commercial/" },
  { name: "Tampa", href: "/commercial-construction-tampa/" },
];

export default function CommercialConstructionTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Commercial Construction" />
      <ServiceSchema
        serviceName="Commercial Construction"
        serviceDescription="Full-service commercial construction in Tampa, FL. Design-build, medical facilities, office buildings, industrial projects, tenant improvements. Licensed CBC1262722, 40+ years experience."
        city="Tampa"
        minPrice="500000"
        serviceCategories={["Design-Build Construction", "Medical Facility Construction", "Office Building Construction", "Industrial Construction", "Tenant Improvements"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/tampa-commercial-construction-hero/tampa-commercial-construction-hero-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={breadcrumbItems} />
          <div className="max-w-4xl mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Serving Tampa, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Commercial Construction in Tampa, Florida
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              From the office towers lining the Westshore Business District to the medical campuses expanding near Tampa General Hospital, Florida Construction Specialists delivers commercial construction across every sector of Tampa's economy. As a prime general contractor with over four decades of experience, we bring in-house engineering, deep local knowledge, and the bonding capacity to handle projects from half a million to twenty-five million dollars and beyond.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">Since 1982</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">License {BUSINESS_INFO.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Building2 className="w-4 h-4 text-brand-gold" />
                <span className="text-white text-sm font-medium">{BUSINESS_INFO.projectsCompleted}+ Projects</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta text-center">
                Schedule Project Consultation
              </Link>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="btn-secondary flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Tampa's Commercial Construction Market Demands Experienced Contractors
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Tampa's commercial real estate market has undergone a fundamental transformation over the past decade. The Water Street Tampa development, a multi-billion dollar mixed-use project on the downtown waterfront, has reshaped expectations for commercial construction quality in the region. What was once a city dominated by low-rise office parks now supports a diverse commercial building stock that includes Class A high-rises downtown, advanced medical facilities in the Tampa General Hospital corridor, expanding logistics infrastructure near the Port of Tampa, and a revitalized Westshore Business District that remains the largest office market on Florida's west coast outside of Miami.
              </p>
              <p className="mb-6">
                This evolution creates specific challenges for commercial construction. Downtown Tampa projects must navigate dense urban conditions, underground utility complexity, and coordination with ongoing development activity. The Westshore corridor requires renovation and modernization of existing commercial buildings to compete with newer downtown inventory. Medical facility construction near Tampa General Hospital and in the BayCare Health System network demands AHCA compliance, infection control protocols, and specialized MEP systems. Industrial construction near the Port of Tampa and along the I-4 corridor requires heavy structural capacity, clear-span design, and logistics-optimized site layouts.
              </p>
              <p className="mb-6">
                Hillsborough County's population growth continues to fuel commercial construction demand beyond the urban core. New Tampa and the USF Research Park area attract medical office and technology construction. The West Tampa neighborhood is experiencing a redevelopment wave that blends commercial renovation with adaptive reuse. The Tampa Heights area, once largely residential, now supports mixed-use commercial projects that complement the growing Riverwalk district.
              </p>
              <p>
                Florida Construction Specialists has worked across all of these Tampa submarkets. As a prime general contractor, we never subcontract our general contracting services, which means every Tampa project gets direct accountability, a single point of contact, and the full weight of our in-house engineering and construction teams. Our principal's 43 years of combined construction and insurance industry experience, including work as an Executive General Adjuster, brings a risk management perspective that benefits every commercial project we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Break */}
      <ContentParallax
        src="/images/tampa-commercial-construction-hero/tampa-commercial-construction-hero-small.webp"
        alt="Commercial construction project in Tampa's business district"
        title="Building Tampa's Commercial Future"
        subtitle="Design-build, medical, industrial, and office construction across Hillsborough County"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Commercial Construction Capabilities for Tampa's Diverse Market
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every commercial sector in Tampa presents distinct construction requirements. We deliver specialized expertise across all of them.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Design-Build Construction",
                description: "Single-source delivery for Tampa commercial projects. We combine architectural coordination, engineering, and construction management under one contract, streamlining decision-making for projects in the Westshore corridor, downtown Tampa, and throughout Hillsborough County."
              },
              {
                icon: Shield,
                title: "Medical Facility Construction",
                description: "AHCA-compliant medical construction for the Tampa market, including surgical centers, specialty clinics, medical office buildings, and healthcare facility expansions. We understand the infection control, specialized systems, and regulatory requirements unique to healthcare construction."
              },
              {
                icon: HardHat,
                title: "Industrial and Warehouse",
                description: "Distribution centers, manufacturing facilities, and industrial flex space serving Tampa's logistics sector. Near the Port of Tampa and along the I-4 industrial corridor, we build facilities designed for heavy loading, clear-span requirements, and efficient logistics operations."
              },
              {
                icon: Briefcase,
                title: "Office and Tenant Improvements",
                description: "Commercial office buildouts and renovations throughout Tampa's office markets, from Class A towers downtown to suburban office parks in Carrollwood and New Tampa. We deliver tenant improvements that minimize disruption to building operations and neighboring tenants."
              },
              {
                icon: FileCheck,
                title: "Retail and Hospitality",
                description: "Retail center construction, restaurant buildouts, and hospitality projects across Tampa's commercial districts. From South Tampa's SoHo retail corridor to the International Plaza area, we build commercial spaces designed for customer engagement and operational efficiency."
              },
              {
                icon: Award,
                title: "Commercial Renovations",
                description: "Major commercial renovations and adaptive reuse projects throughout Tampa. We transform aging commercial buildings into modern, code-compliant spaces, including historic commercial properties in Ybor City and Hyde Park that require preservation board coordination."
              }
            ].map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-brand-green-bg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-green-dark" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Deep Roots in Tampa's Commercial Construction Landscape
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Successful commercial construction in Tampa requires more than technical capability. It requires understanding how the city works. Tampa's commercial construction environment spans multiple jurisdictions, overlay districts, and building code considerations that less experienced contractors often underestimate.
              </p>
              <p className="mb-6">
                The <a href="https://www.tampa.gov/building-services" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">City of Tampa Building Services Department</a> handles permitting for commercial projects within city limits, while unincorporated areas of Hillsborough County go through county construction services. We have established working relationships with both agencies and understand the nuances that affect plan review timelines, inspection scheduling, and Certificate of Occupancy processes.
              </p>
              <p className="mb-6">
                Tampa's weather patterns significantly influence commercial construction planning. The city receives over 50 inches of rainfall annually, concentrated in intense afternoon thunderstorms from May through September. This seasonal pattern affects concrete pours, roofing installation, exterior envelope work, and site grading schedules. Beyond rainfall, Tampa's direct exposure to Tampa Bay and the Gulf of Mexico places it in a high hurricane risk zone. Every commercial structure we build meets the Florida Building Code's Wind Zone 3 requirements, with enhanced structural connections, impact-rated glazing, and roof systems designed for 120 mph sustained winds.
              </p>
              <p className="mb-6">
                Our knowledge of Tampa neighborhoods shapes how we approach each project. Commercial construction in the Westshore Business District involves coordinating with property management companies and existing tenants. Downtown Tampa projects near Water Street require awareness of ongoing infrastructure changes and dense pedestrian traffic. Medical facility projects near Tampa General Hospital on Davis Islands or in the BayCare network across the city demand compliance with healthcare-specific codes. Industrial projects near Port Tampa and in the East Tampa industrial corridor require understanding of heavy vehicle access, environmental regulations, and utility capacity for manufacturing operations.
              </p>
              <p>
                Projects in Tampa's two designated historic districts, Ybor City and Hyde Park, require additional coordination with local preservation boards. The Barrio Latino Commission oversees commercial construction within Ybor City's National Historic Landmark District, while the Hyde Park Historic District has its own review process through the city's Architectural Review Commission. We have experience navigating both of these processes, understanding what modifications require Certificates of Appropriateness and how to balance modern commercial requirements with historic preservation standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Tampa Commercial Construction Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Every commercial project in Tampa follows a structured process designed for the local construction environment.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                step: "01",
                title: "Site Assessment and Pre-Construction",
                description: "We evaluate your Tampa site for soil conditions, flood zone classification, utility availability, and zoning compatibility. Hillsborough County's sandy soil with high water table requires careful foundation engineering, particularly for sites near Tampa Bay, the Hillsborough River, or low-lying areas in South Tampa and Harbour Island.",
                icon: FileCheck,
              },
              {
                step: "02",
                title: "Design Coordination and Value Engineering",
                description: "Whether working with your architect or providing design-build services, we coordinate all design disciplines to ensure constructability, code compliance, and cost efficiency. For Tampa commercial projects, this includes hurricane-resistant structural design, energy code compliance, and stormwater management planning per Hillsborough County requirements.",
                icon: Building2,
              },
              {
                step: "03",
                title: "Permitting Through City of Tampa",
                description: "We prepare and submit complete permit packages to the City of Tampa Building Services Department, coordinating plan review across building, fire, mechanical, electrical, and plumbing disciplines. For projects requiring zoning variances or overlay district approvals, we manage coordination with the appropriate city boards and commissions.",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Construction with Local Subcontractor Network",
                description: "Experienced superintendents manage daily construction using our established network of Tampa-based subcontractors who know local conditions and code expectations. We schedule strategically around the rainy season, coordinate with adjacent property operations in dense areas like Westshore and downtown, and maintain strict quality control on every phase.",
                icon: HardHat,
              },
              {
                step: "05",
                title: "Closeout and Certificate of Occupancy",
                description: "Thorough punch list resolution, final inspections, Certificate of Occupancy from the City of Tampa, and comprehensive warranty documentation. We provide complete as-built drawings, equipment manuals, and maintenance guides. For tenant improvement projects, we coordinate turnover with property management to minimize downtime.",
                icon: Award,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Tampa Commercial Construction FAQ"
        description="Common questions about commercial construction projects in Tampa, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Tampa" currentService="commercial-construction" currentServiceName="Commercial Construction" />

      {/* CTA Section */}
      <section className="section bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Start Your Tampa Commercial Construction Project
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on your commercial project in Tampa. We will discuss your vision, provide preliminary budgeting, and outline a clear path to successful project delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Project Consultation
            </Link>
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
              <span>License {BUSINESS_INFO.licenseNumber}</span>
              <span>In-House Engineering</span>
              <span>{BUSINESS_INFO.yearsInBusiness}+ Years Experience</span>
              <span>Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>
    <RelatedArticles pageSlug="commercial-construction-tampa" />
    </>
  );
}
