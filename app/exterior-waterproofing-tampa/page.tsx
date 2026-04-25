import Link from "next/link";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";
import { Phone, MapPin, CheckCircle, Building2, Shield, Award, Droplets, CloudRain, Waves, Layers, Wrench, FileCheck } from "lucide-react";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQWithSchema } from "@/components/FAQ";
import { RelatedServiceLocations } from "@/components/RelatedServiceLocations";
import { BUSINESS_INFO } from "@/lib/constants";
import { CodeReference } from "@/components/CodeReference";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  alternates: { canonical: "https://floridaconstructionspecialists.com/exterior-waterproofing-tampa/" },
  title: "Exterior Waterproofing Tampa",
  description:
    "Professional exterior waterproofing in Tampa. Building envelope foundation parking deck and plaza waterproofing for commercial and residential properties.",
  openGraph: {
    title: "Exterior Waterproofing Tampa",
    description: "Professional exterior waterproofing in Tampa. Building envelope foundation parking deck and plaza waterproofing for commercial and residential properties.",
    url: "https://floridaconstructionspecialists.com/exterior-waterproofing-tampa/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const faqs = [
  {
    question: "How does Tampa's rainfall compare to other Florida cities, and what does that mean for waterproofing?",
    answer:
      "Tampa receives approximately 50 inches of rain annually, with roughly 60% falling during the June through September wet season. What makes Tampa particularly challenging is not just the volume but the intensity. Afternoon thunderstorms can drop 2-3 inches in under an hour, creating hydrostatic pressure that overwhelms improperly waterproofed building envelopes. Properties along Bayshore Boulevard and in low-lying areas near the Hillsborough River face compounded exposure from both rainfall and rising water tables during wet season. FCS designs waterproofing systems specifically for these high-intensity rainfall events rather than relying on systems rated for average conditions.",
  },
  {
    question: "What are the most common waterproofing failures FCS encounters in Tampa commercial buildings?",
    answer:
      "The most frequent failures we diagnose in Tampa buildings involve three primary areas. First, sealant joints in curtain wall systems that have degraded from UV exposure and thermal cycling, which is especially common in Westshore and downtown office towers built between 1985 and 2005. Second, below-grade waterproofing failures in parking structures where original membranes have deteriorated from chloride contamination and traffic wear. Third, plaza deck waterproofing at mixed-use developments like those in Channelside and Water Street where pedestrian traffic and ponding water have compromised membrane integrity. Each failure type requires a different remediation approach, and our diagnostics include infrared thermography and flood testing to pinpoint exact intrusion paths.",
  },
  {
    question: "Do Tampa condominiums need waterproofing assessments under SB 4-D milestone inspections?",
    answer:
      "While SB 4-D milestone inspections focus on structural integrity, waterproofing deficiencies are frequently identified during these inspections because water intrusion is a leading cause of structural deterioration. For condominiums along Tampa's Bayshore corridor, Davis Islands, and Harbour Island where buildings are exposed to salt air and driving rain, inspectors routinely flag waterproofing failures at balcony connections, expansion joints, and parking deck membranes. FCS works with associations to address waterproofing deficiencies identified during milestone inspections, often combining structural repairs with comprehensive re-waterproofing to satisfy inspection requirements and prevent future deterioration.",
  },
  {
    question: "What waterproofing systems perform best in Tampa's coastal climate?",
    answer:
      "Tampa's combination of high UV exposure, salt air near the bay, intense rainfall, and hurricane-force winds requires waterproofing systems with specific performance characteristics. For building envelopes, we specify fluid-applied polyurethane membranes with UV-stable topcoats that maintain flexibility through Tampa's thermal cycles. For below-grade applications, crystalline waterproofing integrated with bentonite sheet membranes provides redundant protection against hydrostatic pressure. Parking structures receive traffic-bearing polyurethane systems with aggregate broadcast for slip resistance. FCS is a certified applicator for manufacturers including Tremco, Sika, and Carlisle, and we select systems based on each building's specific exposure conditions rather than applying a one-size-fits-all approach.",
  },
  {
    question: "How does hurricane season affect waterproofing project scheduling in Tampa?",
    answer:
      "Hurricane season runs June through November, which overlaps with Tampa's wet season and creates scheduling considerations for exterior waterproofing. Most membrane systems require dry substrates for proper adhesion, so FCS schedules critical applications during morning hours before afternoon storms develop, and we maintain weather monitoring throughout active projects. For emergency waterproofing after hurricane damage, we deploy rapid-response temporary protection systems within 24-48 hours, followed by permanent waterproofing once conditions stabilize. Property managers in areas like Downtown Tampa and Harbour Island often schedule preventive waterproofing during the dry season from December through May to avoid wet-season complications.",
  },
  {
    question: "Can FCS waterproof an occupied Tampa building without displacing tenants?",
    answer:
      "Yes, FCS regularly performs exterior waterproofing on occupied commercial buildings, condominiums, and parking structures throughout Tampa. Our phased approach allows tenants and residents to continue normal operations while work progresses. For parking garages, we section off areas in rotation so parking capacity is reduced but never eliminated. For building envelope work on occupied towers in Downtown Tampa or along Bayshore, we use swing-stage access and coordinate with property management to minimize disruption to specific floors and units. Noise-generating activities like surface preparation are scheduled during business hours per City of Tampa ordinances, and we provide advance notice to affected occupants for each phase.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Exterior Waterproofing", href: "/commercial/guides/balcony-reconstruction-exterior-waterproofing/" },
  { name: "Tampa", href: "/exterior-waterproofing-tampa/" },
];

export default function ExteriorWaterproofingTampaPage() {
  return (
    <>
      <LocalBusinessSchema city="Tampa" service="Exterior Waterproofing" />
      <ServiceSchema
        serviceName="Exterior Waterproofing"
        serviceDescription="Professional exterior waterproofing for Tampa commercial and residential buildings. Building envelope, foundation, parking deck, and plaza waterproofing with manufacturer-backed warranties."
        city="Tampa"
        serviceCategories={["Building Envelope Waterproofing", "Foundation Waterproofing", "Parking Deck Waterproofing", "Plaza Deck Waterproofing", "Remedial Waterproofing"]}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp')] bg-cover bg-center opacity-20" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span className="text-brand-gold font-semibold">Tampa, Florida</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Exterior Waterproofing in Tampa
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Tampa properties absorb more moisture punishment than almost anywhere in the continental United States. FCS provides the building envelope, foundation, and deck waterproofing systems that keep water out for the long term.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Request Waterproofing Assessment
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-gold" /> Since 1982
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-gold" /> Licensed CBC1262722
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-gold" /> Prime Contractor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tampa Market Introduction */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Fifty Inches of Rain, Twelve Months of Humidity, and a Building Stock That Never Gets a Break
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Tampa sits at the convergence of weather patterns that test building envelopes like few other American cities. The annual rainfall approaches 50 inches, concentrated heavily in summer thunderstorms that can deliver several inches in a single afternoon. Humidity rarely drops below 60% even in winter months. Salt-laden air migrates inland from Tampa Bay, accelerating the degradation of sealants, coatings, and membrane systems. And every June through November, the possibility of a direct hurricane strike means that waterproofing systems must perform not just under normal conditions but under wind-driven rain at 100+ miles per hour.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              The consequences of waterproofing failure in Tampa are both predictable and severe. Water intrusion leads to mold growth within 48-72 hours in Tampa's warm, humid conditions. Steel reinforcement in concrete structures corrodes rapidly when chloride-laden moisture penetrates the building envelope. Interior finishes, electrical systems, and mechanical equipment suffer damage that far exceeds the cost of preventive waterproofing. Property managers along Bayshore Boulevard, in Westshore's commercial towers, and throughout downtown Tampa understand that waterproofing is not a maintenance item to defer. It is the single most important protective system on their buildings.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              What makes Tampa's waterproofing challenges distinct from other Florida markets is the concentration of building types that demand specialized approaches. Downtown Tampa's office towers and the Water Street development require curtain wall and high-rise envelope systems. The condominium corridor along Bayshore Boulevard from South Tampa through Harbour Island presents aging mid-rise and high-rise buildings with original waterproofing that has exceeded its service life. Parking structures serving hospitals, office parks, and residential towers throughout Hillsborough County face the dual assault of weather exposure and vehicular traffic wear. Industrial facilities along the Port Tampa corridor and East Tampa need foundation waterproofing rated for high water tables and seasonal flooding. Each building type requires a different waterproofing strategy, and applying the wrong system to the wrong substrate is a failure waiting to happen.
            </p>

            <p className="text-lg text-gray-700">
              Florida Construction Specialists has waterproofed buildings across every Tampa submarket since 1982. From the glass-curtain office towers in the Westshore Business District to the historic masonry buildings of Ybor City, from the luxury condominiums on Davis Islands to the medical campuses near Tampa General Hospital, FCS brings the diagnostic capability and manufacturer-certified installation expertise that Tampa's building stock demands.
            </p>

            <CodeReference
              code="Florida Statute 553.899"
              section="Waterproofing as a Milestone Inspection Element"
              description="SB 4-D milestone inspections evaluate waterproofing membrane integrity as part of the structural assessment for condominium buildings 3+ stories. Failed waterproofing that allows moisture intrusion into structural elements can trigger remediation requirements under the statute."
              link="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0553/Sections/0553.899.html"
              linkText="View F.S. 553.899"
            />
          </div>
        </div>
      </section>

      {/* ContentParallax Visual Break */}
      <ContentParallax
        src="/images/fcs-exterior-waterproofing/fcs-exterior-waterproofing-display.webp"
        alt="Exterior waterproofing membrane installation on Tampa commercial building"
        title="Defending Tampa Buildings Against Moisture"
        subtitle="Premium membrane systems engineered for Florida's most demanding climate conditions"
        overlayOpacity={0.55}
      />

      {/* Service Capabilities in Tampa */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Waterproofing Systems for Every Tampa Building Type
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Different buildings face different moisture challenges. FCS specifies and installs the waterproofing system matched to your building's construction, exposure, and use.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark">Building Envelope Systems</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Tampa's commercial buildings, particularly the glass-and-steel towers along the Westshore corridor and downtown, require comprehensive envelope waterproofing that addresses curtain wall joints, window perimeters, expansion joints, and penetrations. FCS installs fluid-applied membranes behind cladding systems and performs sealant replacement programs that restore weather-tight integrity to aging facades. For buildings in the International Plaza area and along Kennedy Boulevard, where afternoon storm winds drive rain horizontally into vertical surfaces, proper envelope waterproofing is the difference between dry interiors and recurring leak complaints.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <Layers className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark">Foundation and Below-Grade</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Tampa's water table rises significantly during wet season, creating hydrostatic pressure against foundation walls and below-grade parking levels. Properties in low-lying areas near the Hillsborough River, in parts of Seminole Heights, and throughout flood-prone zones in South Tampa face chronic below-grade moisture intrusion. FCS installs positive-side membrane systems during new construction and performs negative-side crystalline waterproofing and injection grouting for remedial applications. Proper drainage board installation and water management systems complement the waterproofing to manage groundwater without relying solely on membrane integrity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <Waves className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark">Parking Deck and Plaza Waterproofing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Parking structures throughout Tampa serve hospitals, office complexes, condominiums, and mixed-use developments. These structures endure the combined assault of heavy rainfall, vehicular traffic, road salts tracked in from coastal roads, and thermal expansion. FCS installs traffic-bearing polyurethane membrane systems with aggregate broadcast for traction, complete with joint treatments, drain installations, and wearing courses. For plaza decks at developments like those in Channelside and the Riverwalk district, we install pedestrian-rated systems beneath pavers or decorative surfaces that protect the structural slab while supporting the intended use above.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <CloudRain className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-green-dark">Remedial and Emergency Waterproofing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Many Tampa buildings, particularly condominiums built in the 1970s through 1990s along Bayshore Boulevard and on Harbour Island, have original waterproofing that has long exceeded its service life. FCS provides comprehensive diagnostics including infrared thermography, flood testing, and core sampling to identify failure points before designing remediation strategies. After hurricanes or severe storms, our emergency response team deploys temporary waterproofing within 24-48 hours to prevent further damage while permanent systems are designed and installed. This rapid-response capability has protected Tampa properties from millions of dollars in secondary water damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Waterproofing Expertise Built Over Four Decades
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              FCS has waterproofed hundreds of Tampa buildings since 1982, developing intimate knowledge of how different building types in different Tampa submarkets respond to the local climate. The concrete high-rises along Bayshore Boulevard behave differently than the steel-frame office buildings in Westshore. The historic masonry structures in Ybor City and Tampa Heights require approaches that would be entirely wrong for the modern curtain-wall towers in the Water Street district. This accumulated knowledge, combined with manufacturer certifications from Tremco, Sika, Carlisle, and other premium waterproofing manufacturers, allows FCS to specify and install systems with confidence that they will perform for their full rated service life in Tampa's conditions.
            </p>

            <div className="bg-brand-green-dark/5 border-l-4 border-brand-green rounded-r-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">
                <FileCheck className="w-5 h-5 inline mr-2" />
                City of Tampa Building Services Department
              </h3>
              <p className="text-gray-700 mb-3">
                Waterproofing work in Tampa that involves structural modifications, re-roofing, or significant exterior alterations requires permits through the City of Tampa Building Services Department. FCS manages all permitting requirements and coordinates with Hillsborough County for properties outside city limits. For buildings in historic overlay districts like Ybor City and Hyde Park, additional review by the respective historic commissions may apply to exterior waterproofing that alters the building's appearance.
              </p>
              <a
                href="https://www.tampa.gov/building-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green font-semibold hover:text-brand-green-dark transition-colors"
              >
                City of Tampa Building Services Department
              </a>
            </div>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
              Weather-Driven Waterproofing Demands
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Intense Summer Rainfall:</strong> Tampa's wet season delivers approximately 30 inches of rain between June and September, often in violent afternoon thunderstorms. These high-intensity events create sudden hydrostatic loads on building envelopes and foundation walls that steady, moderate rainfall would not. Waterproofing systems must be designed for peak loading, not average conditions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Year-Round Humidity:</strong> Tampa's relative humidity typically ranges from 60% to 85%, promoting mold growth and corrosion whenever moisture reaches organic materials or steel reinforcement. Waterproofing systems must be breathable enough to allow trapped moisture to escape while preventing new moisture from entering, a balance that requires careful system selection.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Hurricane Wind-Driven Rain:</strong> Tampa's Gulf-facing exposure means hurricanes approach with sustained winds that drive rain horizontally into building facades at pressures exceeding 30 pounds per square foot. Standard waterproofing that handles gravity-flow water may fail completely under wind-driven conditions. FCS specifies systems tested to ASTM E331 standards for wind-driven rain resistance.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>UV and Thermal Cycling:</strong> Tampa's intense sun heats exposed surfaces to 160+ degrees Fahrenheit, followed by afternoon storm cooling of 30-40 degrees in minutes. This thermal shock cycle breaks down rigid sealants and coatings. FCS uses elastomeric systems rated for the thermal movement that Tampa's climate demands.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
              Tampa Areas We Protect
            </h3>

            <p className="text-gray-700 mb-4">
              FCS provides waterproofing services across all Tampa submarkets. Our teams work regularly on commercial properties in the Westshore Business District and along the Kennedy Boulevard corridor, where office tower facades and parking structures require ongoing waterproofing maintenance. In South Tampa, the condominium buildings stretching from Gandy through Bayshore Boulevard to Harbour Island represent one of the largest concentrations of mid-rise and high-rise waterproofing work in the Tampa Bay region. The medical campuses anchored by Tampa General Hospital and facilities near USF depend on waterproofing integrity to protect sensitive medical environments. Residential waterproofing for custom homes in Palma Ceia, Beach Park, Davis Islands, and Culbreath Isles addresses foundation protection, stucco systems, and pool deck waterproofing for properties that represent significant homeowner investments.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-brand-green-dark text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-heading">
            Our Tampa Waterproofing Process
          </h2>
          <p className="text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            Effective waterproofing requires systematic assessment, proper system selection, and meticulous installation. Our proven process accounts for Tampa-specific conditions at every step.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Diagnostic Assessment",
                description:
                  "Comprehensive building survey including infrared thermography, flood testing, core sampling, and visual inspection to identify all moisture intrusion paths and substrate conditions.",
                icon: Wrench,
              },
              {
                step: 2,
                title: "System Engineering",
                description:
                  "Waterproofing system specification based on building type, exposure conditions, and performance requirements. Includes detail drawings, material specifications, and budget development.",
                icon: FileCheck,
              },
              {
                step: 3,
                title: "Surface Preparation",
                description:
                  "Substrate cleaning, concrete crack repair, spall repair, and surface profiling to achieve proper membrane adhesion. In Tampa's climate, surface preparation quality determines long-term performance.",
                icon: Layers,
              },
              {
                step: 4,
                title: "Membrane Installation",
                description:
                  "Application of primers, membranes, flashings, and termination details per manufacturer specifications. Weather monitoring ensures dry conditions for proper adhesion during Tampa's wet season.",
                icon: Droplets,
              },
              {
                step: 5,
                title: "Quality Verification",
                description:
                  "Flood testing, adhesion pull testing, thickness verification, and photographic documentation of all installations. Deficiencies are corrected before protection courses are installed.",
                icon: CheckCircle,
              },
              {
                step: 6,
                title: "Protection and Warranty",
                description:
                  "Installation of protection courses, drainage boards, or wearing surfaces. Complete warranty documentation, maintenance schedule, and as-built drawings delivered to property management.",
                icon: Shield,
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <div className="text-brand-gold font-semibold text-sm mb-1">Step {item.step}</div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQWithSchema
        items={faqs}
        title="Tampa Exterior Waterproofing FAQs"
        description="Common questions about exterior waterproofing for commercial and residential buildings in Tampa, Florida."
      />

      {/* Internal Links */}
      <RelatedServiceLocations currentCity="Tampa" currentService="exterior-waterproofing" currentServiceName="Exterior Waterproofing" />

      {/* CTA Section */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Stop Tampa's Weather from Damaging Your Building
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            From building envelope diagnostics to complete waterproofing system installation, FCS protects Tampa properties against the moisture challenges that define Florida's Gulf Coast. Schedule a complimentary waterproofing assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request Waterproofing Assessment
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
    <RelatedArticles pageSlug="exterior-waterproofing-tampa" />
    </>
  );
}
