import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, Clock, AlertTriangle, FileCheck, Users, Wrench, ClipboardCheck, Home, DollarSign, HardHat, FileText, Droplets, Wind, Flame, Search, MapPin, Heart, Anchor } from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";
import { ContentParallax } from "@/components/ContentImage";

export const metadata: Metadata = {
  title: "Insurance Restoration Ruskin FL | Your LOCAL Contractor - FCS Headquarters",
  description: "FCS is headquartered right here in Ruskin, FL - 822 Bayview Dr. 43 years insurance industry experience serving South Hillsborough: Ruskin, Sun City Center, Apollo Beach, Gibsonton, Wimauma. Fastest response times because we're already here.",
  keywords: "insurance restoration Ruskin FL, property damage Sun City Center, storm damage Apollo Beach, South Hillsborough restoration, local contractor Ruskin, hurricane damage Ruskin, flood restoration Apollo Beach",
};

const southHillsboroughAreas = [
  { name: "Ruskin", description: "FCS Headquarters - 822 Bayview Dr" },
  { name: "Sun City Center", description: "55+ Community Specialists" },
  { name: "Apollo Beach", description: "Waterfront Property Claims" },
  { name: "Gibsonton", description: "Residential & Commercial" },
  { name: "Wimauma", description: "Agricultural & Rural Properties" },
];

const insuranceExperience = [
  { stat: "43", label: "Years Insurance Industry Experience" },
  { stat: "7", label: "Years as Insurance Adjuster" },
  { stat: "28", label: "Years Insurance Restoration Contractor" },
  { stat: "HOME", label: "Based Right Here in Ruskin" }
];

const localExpertise = [
  "Immediate response - we're already in your neighborhood",
  "Deep knowledge of South Hillsborough construction",
  "Long-standing relationships with local officials",
  "Understanding of coastal vs. inland damage patterns",
  "55+ community restoration experience",
  "Agricultural property claims expertise",
  "Tampa Bay waterfront damage specialization",
  "Hillsborough County permit familiarity"
];

const faqs = [
  {
    question: "Why does it matter that FCS is headquartered in Ruskin?",
    answer: "Location matters enormously in disaster response. When a hurricane or storm hits South Hillsborough, we don't have to drive from Tampa or across the Bay—we're already here at 822 Bayview Dr in Ruskin. Our team lives and works in this community. We can have boots on the ground within hours, not days. During major events when outside contractors are overwhelmed or unavailable, your local contractor is still here, ready to serve neighbors we've known for years. Plus, our deep familiarity with South Hillsborough construction, local code requirements, and Hillsborough County permitting processes eliminates learning curves that delay out-of-area contractors."
  },
  {
    question: "What areas of South Hillsborough does FCS serve from your Ruskin headquarters?",
    answer: "From our Ruskin headquarters at 822 Bayview Dr, we serve all of South Hillsborough County including Ruskin, Sun City Center, Apollo Beach, Gibsonton, Wimauma, and the surrounding unincorporated areas. We also respond throughout Hillsborough County (Tampa, Brandon, Riverview, Valrico) and the broader Tampa Bay region. However, South Hillsborough is our home territory—these are the communities where our team lives, where we shop, where our kids go to school. When disaster strikes here, it's personal."
  },
  {
    question: "Do you specialize in Sun City Center restoration work?",
    answer: "Yes, FCS has extensive experience with Sun City Center properties and the unique needs of 55+ communities. We understand the architectural standards of planned communities, the HOA coordination requirements, and the importance of working efficiently while respecting residents' comfort and routines. Many Sun City Center homes have specific construction characteristics—lanais, tile roofs, particular window systems—that require knowledgeable restoration. We also understand that many residents are on fixed incomes and need clear communication about insurance coverage to avoid unexpected costs."
  },
  {
    question: "How quickly can FCS respond to storm damage in Apollo Beach?",
    answer: "Apollo Beach is just minutes from our Ruskin headquarters. For waterfront properties along Tampa Bay, we can typically be on-site the same day for assessment, often within hours during normal conditions. During major storm events when demand is high, our local presence still means we reach South Hillsborough properties faster than contractors traveling from Tampa or elsewhere. Apollo Beach waterfront properties often experience unique damage patterns—wind-driven salt spray, storm surge exposure, dock and seawall impacts—that require specialized assessment. Our familiarity with these coastal conditions ensures nothing is missed."
  },
  {
    question: "What makes insurance restoration different from regular construction?",
    answer: "Insurance restoration requires a completely different skill set than standard construction. Every aspect of the work must be documented for insurance purposes—before, during, and after. Estimates must be prepared in industry-standard formats (Xactimate) that adjusters can evaluate. Hidden damage must be discovered and properly claimed through supplemental documentation. The scope of work must align with insurance coverage while meeting building codes. FCS's 43 years of insurance industry experience—including 7 years as an Allstate adjuster—means we understand both the construction AND the insurance sides of restoration. Most contractors know how to build; we also know how to get it covered."
  },
  {
    question: "Does FCS handle both hurricane and flood damage claims?",
    answer: "Yes, but it's crucial to understand that hurricane damage and flood damage are covered by completely different insurance policies with different rules. Standard property insurance covers wind damage; flood damage requires separate NFIP or private flood insurance. During hurricanes, both types of damage often occur simultaneously—wind damages the roof while storm surge floods the first floor. FCS has extensive experience documenting damage to properly allocate between windstorm and flood coverage, ensuring each claim captures the appropriate damage. Our insurance background helps navigate these complex multi-policy situations."
  },
  {
    question: "Can you help with agricultural property restoration in Wimauma and south county?",
    answer: "Absolutely. South Hillsborough includes significant agricultural operations and rural properties that have unique restoration needs. Farm buildings, equipment storage structures, irrigation systems, and agricultural processing facilities require contractors who understand their construction and function. FCS has experience with agricultural property insurance claims and the specific documentation these carriers require. We understand that agricultural damage has business interruption implications—crops and livestock don't wait—and work to expedite restoration accordingly."
  },
  {
    question: "What should I do if my property is damaged during a storm?",
    answer: "First, ensure your safety and document everything with photos and video before any cleanup. Contact your insurance company to report the claim. Take reasonable steps to prevent further damage (tarping, removing standing water) but don't begin permanent repairs until damage is documented and inspected. Then call FCS. As your local contractor, we can often assess damage faster than out-of-area services. Our early involvement helps ensure proper documentation from the start, identifies hidden damage that might be missed, and begins the claims process correctly. For South Hillsborough properties, we're often on-site faster than insurance adjusters."
  },
  {
    question: "How does FCS work with my insurance company?",
    answer: "FCS has 43 years of experience working with insurance carriers—7 of those years as an insurance adjuster ourselves. We prepare certified Xactimate estimates in the same format adjusters use. We coordinate adjuster meetings and walk them through our damage documentation. We speak the insurance industry's language, which facilitates smoother claim processing. When scope disagreements occur, we negotiate professionally with proper documentation rather than adversarial dispute. Our goal is fair settlement of your claim and complete restoration of your property—and our insurance expertise helps achieve both."
  },
  {
    question: "Do you handle large commercial losses in South Hillsborough?",
    answer: "Yes, FCS specializes in large loss insurance restoration for commercial properties—typically claims from $250,000 to $25 million. South Hillsborough has significant commercial development along US-41, the Apollo Beach and Ruskin business districts, and industrial areas throughout the region. We've restored retail centers, industrial facilities, multi-family complexes, and municipal buildings after storm damage. Commercial claims involve additional complexity—business interruption coverage, tenant coordination, code upgrade requirements—that requires experienced contractors. FCS brings that experience to every commercial project."
  }
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Disaster Recovery", href: "/disaster-recovery/" },
  { name: "Insurance Restoration Ruskin", href: "/insurance-restoration-ruskin/" },
];

export default function InsuranceRestorationRuskinPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Insurance Restoration Ruskin FL"
        serviceDescription="FCS is headquartered in Ruskin, FL providing insurance restoration services throughout South Hillsborough County. 43 years insurance industry experience serving Ruskin, Sun City Center, Apollo Beach, Gibsonton, and Wimauma."
      />

      <Breadcrumb items={[
        { name: "Disaster Recovery", href: "/disaster-recovery/" },
        { name: "Ruskin Insurance Restoration", href: "/insurance-restoration-ruskin/" },
      ]} />

      {/* Hero Section - Emphasizing LOCAL */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hurricane-ian/hurricane-ian-display.webp"
            alt="Insurance restoration services in Ruskin and South Hillsborough"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/95 via-brand-green/90 to-brand-gold/30" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-brand-gold" />
              <span className="text-brand-gold font-bold text-lg">FCS Headquarters: 822 Bayview Dr, Ruskin FL</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Your LOCAL Insurance Restoration Contractor<br />
              <span className="text-brand-gold">Headquartered Right Here in Ruskin</span>
            </h1>
            <p className="text-xl text-gray-100 mb-4 max-w-3xl">
              When disaster strikes South Hillsborough, you don't want a contractor driving from across the Bay. 
              FCS is already here—we've called Ruskin home for years.
            </p>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl">
              <strong className="text-white">43 years of insurance industry experience</strong>—7 years as an insurance 
              adjuster, 28 years running insurance restoration—combined with true local presence. We know 
              your neighborhoods, your construction, and your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Get Local Emergency Response
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Your Ruskin Neighbors: {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with LOCAL emphasis */}
      <section className="py-8 bg-brand-green-dark">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {insuranceExperience.map((item) => (
              <div key={item.label}>
                <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{item.stat}</div>
                <div className="text-white/90 text-sm md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters - Key Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Why Your LOCAL Contractor Makes All the Difference
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                After a hurricane, tornado, or major storm, every contractor from three states will 
                descend on damaged areas looking for work. They don't know your community. They don't 
                know local construction. They don't know Hillsborough County codes and permitting. 
                And when the job gets difficult or a bigger opportunity appears elsewhere—they're gone.
              </p>
              
              <p className="mb-6">
                Florida Construction Specialists is different. <strong>Our headquarters is at 822 Bayview Dr 
                in Ruskin</strong>—not Tampa, not St. Pete, not some out-of-state corporate office. When we 
                say we serve South Hillsborough, we mean we <em>live</em> in South Hillsborough. Our team members 
                shop at the same stores you do, eat at the same restaurants, and send their kids to 
                the same schools.
              </p>
              
              <p className="mb-6">
                This local presence translates to real advantages for property owners facing disaster recovery:
              </p>

              <div className="bg-brand-green-bg rounded-xl p-8 my-8">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-6">The Local Advantage</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brand-green-dark mb-2">Fastest Response Times</h4>
                    <p className="text-gray-700">
                      When storm damage occurs, we're already here. No waiting for contractors to 
                      drive from Tampa or across the Bay. We can often assess damage the same day—
                      sometimes within hours.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark mb-2">Deep Local Knowledge</h4>
                    <p className="text-gray-700">
                      We know South Hillsborough construction—the common building types, typical 
                      materials, and construction eras. We know which neighborhoods have flood 
                      exposure and which properties face unique wind risks.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark mb-2">Established Relationships</h4>
                    <p className="text-gray-700">
                      Years of working in Hillsborough County means established relationships with 
                      building officials, inspectors, and permitting staff. Projects move faster 
                      when your contractor knows the process.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-green-dark mb-2">Accountability</h4>
                    <p className="text-gray-700">
                      We're not going anywhere. Our headquarters is here, our reputation is here, 
                      and our community is here. We'll still be around years from now if any 
                      questions arise about your restoration.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-6">
                This isn't just about convenience—it's about results. During major disaster events 
                when demand overwhelms available contractors, local presence means you're not competing 
                with every damaged property in the region for attention. When out-of-area contractors 
                are still figuring out Hillsborough County requirements, we're already pulling permits. 
                When the storm chasers move on to the next disaster, we're still here completing your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* South Hillsborough Service Areas */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Serving All of South Hillsborough County
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              From our Ruskin headquarters, we provide insurance restoration services throughout 
              South Hillsborough—each community with its unique characteristics and restoration needs.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {southHillsboroughAreas.map((area) => (
                <div key={area.name} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-brand-green">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-brand-green flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-brand-green-dark">{area.name}</h3>
                      <p className="text-gray-600">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sun City Center Expertise */}
      <section id="sun-city-center" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Sun City Center: 55+ Community Restoration Expertise
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Sun City Center is one of Florida's premier 55+ communities, with over 16,000 residents 
                in a master-planned environment featuring distinctive architecture, extensive community 
                amenities, and specific HOA standards. Restoring properties here requires understanding 
                both the physical construction and the community culture.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Understanding 55+ Community Needs</h3>
              <p className="mb-4">
                Residents of Sun City Center have chosen an active retirement lifestyle in a community 
                designed for their needs. When disaster damage disrupts this life, restoration must 
                consider factors beyond basic construction:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Fixed Income Considerations:</strong> Many residents live on retirement income and need 
                clear understanding of what insurance will cover versus out-of-pocket costs. We provide 
                detailed estimates and explain coverage to help residents plan appropriately.</li>
                <li><strong>Minimal Disruption:</strong> Lengthy, noisy construction projects significantly impact 
                quality of life. We work efficiently to minimize disruption while maintaining quality.</li>
                <li><strong>Communication:</strong> We keep residents informed throughout the project with 
                clear, jargon-free updates. Questions are answered promptly and thoroughly.</li>
                <li><strong>Respect:</strong> Our crews understand they're working in people's homes and 
                community. Professional behavior, cleanliness, and courtesy are mandatory.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Sun City Center Construction Knowledge</h3>
              <p className="mb-4">
                Sun City Center homes share common construction characteristics that experienced 
                restoration contractors recognize:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Concrete Block Construction:</strong> Most homes feature CBS (concrete block stucco) 
                construction that performs well in hurricanes but has specific repair requirements.</li>
                <li><strong>Tile Roofing:</strong> Many homes have tile roofs requiring careful handling and 
                proper replacement techniques. Tile damage isn't always visible from ground level.</li>
                <li><strong>Lanai Structures:</strong> Florida rooms and screened lanais are common—and 
                particularly vulnerable to wind damage. Proper restoration maintains both function 
                and appearance.</li>
                <li><strong>Single-Story Design:</strong> Most homes are single-story for accessibility, 
                simplifying some restoration work but requiring attention to roof access.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">HOA Coordination</h3>
              <p className="mb-4">
                Sun City Center operates under community association governance with architectural 
                standards, approved contractor requirements, and specific procedures for exterior 
                modifications. FCS understands these requirements and coordinates with the Community 
                Association throughout the restoration process.
              </p>

              <p className="mb-4">
                When insurance claims involve exterior elements—roofing, stucco, paint colors—we 
                ensure restoration complies with community standards. Our documentation includes 
                association approval where required. This prevents residents from encountering 
                compliance issues after restoration is complete.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Common Storm Damage Patterns in Sun City Center</h3>
              <p className="mb-4">
                Years of serving Sun City Center has taught us the common damage patterns these 
                homes experience:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Tile Roof Damage:</strong> Cracked, shifted, or missing tiles—often not visible 
                from ground inspection. Underlayment damage beneath intact-appearing tiles.</li>
                <li><strong>Lanai Screen and Structure:</strong> Screen panels, pool cages, and lanai 
                structures are highly susceptible to wind damage.</li>
                <li><strong>Soffit and Fascia:</strong> Wind-driven rain entry through soffit damage is 
                common, causing interior ceiling and wall damage.</li>
                <li><strong>Stucco Cracking:</strong> Structural movement from high winds can crack stucco, 
                creating water intrusion pathways.</li>
                <li><strong>HVAC System Damage:</strong> Exterior condenser units and roof-mounted equipment 
                are vulnerable to both wind and debris impact.</li>
              </ul>

              <p>
                FCS's local knowledge means we know exactly where to look for damage in Sun City Center 
                homes. This thorough assessment ensures complete insurance documentation and prevents 
                undiscovered damage from causing problems later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apollo Beach Waterfront */}
      <section id="apollo-beach" className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-600 rounded-xl">
                <Anchor className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Apollo Beach: Waterfront Property Insurance Claims
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Apollo Beach's location on Tampa Bay creates stunning waterfront living—and unique 
                disaster risks. Properties here face wind, rain, storm surge, and saltwater exposure 
                that inland properties don't experience. Insurance claims for waterfront damage 
                require specialized expertise.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Waterfront Damage Complexity</h3>
              <p className="mb-4">
                Apollo Beach waterfront properties often experience multiple damage types simultaneously 
                during storm events. A single hurricane might cause:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Wind Damage:</strong> Roof, window, and structural damage from sustained winds 
                and gusts—covered by standard property insurance.</li>
                <li><strong>Storm Surge:</strong> Flooding from Tampa Bay water pushed ashore by storm 
                winds—requires separate flood insurance (NFIP or private).</li>
                <li><strong>Wind-Driven Rain:</strong> Water intrusion through wind-damaged openings—
                generally covered under windstorm as part of the wind loss.</li>
                <li><strong>Saltwater Damage:</strong> Corrosion and damage from salt-laden air and 
                water exposure—coverage depends on source and policy.</li>
              </ul>

              <p className="mb-4">
                Properly documenting and attributing damage to the correct coverage is essential for 
                complete claim recovery. Storm surge flooding up to three feet requires flood insurance 
                coverage; wind-driven rain coming through a wind-damaged roof is windstorm coverage. 
                Getting this wrong means either claiming non-covered damage (creating disputes) or 
                failing to claim covered damage (losing money).
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">NFIP vs. Wind Coverage for Waterfront Properties</h3>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-amber-800 mb-2">Critical for Apollo Beach Property Owners</h4>
                    <p className="text-amber-900">
                      NFIP flood coverage ONLY covers direct physical damage from flood water contact. 
                      Damage above the flood line from moisture, humidity, or mold is NOT covered—even 
                      if the flood event caused those conditions. This distinction dramatically affects 
                      waterfront claims.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                FCS has extensive experience with dual-peril situations common to Apollo Beach. Our 
                documentation clearly distinguishes wind damage from flood damage, supporting proper 
                claims under each policy. We understand NFIP's strict "direct contact" rule and help 
                property owners understand what each policy will and won't cover.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Dock, Seawall, and Marine Structure Damage</h3>
              <p className="mb-4">
                Many Apollo Beach properties include docks, seawalls, boat lifts, and other marine 
                structures. Storm damage to these elements involves specific coverage considerations:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Standard property policies often exclude or severely limit dock and seawall coverage</li>
                <li>NFIP specifically excludes docks, piers, and similar structures</li>
                <li>Marine structure coverage may require separate policies or endorsements</li>
                <li>Seawall damage can affect property stability and requires professional assessment</li>
              </ul>

              <p className="mb-4">
                FCS helps Apollo Beach property owners understand what's covered and document damage 
                appropriately. Where coverage exists, we prepare proper claims. Where coverage gaps 
                exist, we provide clear repair estimates so owners can make informed decisions.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Saltwater Corrosion Assessment</h3>
              <p className="mb-4">
                Storm surge and wind-driven salt spray accelerate corrosion on HVAC systems, electrical 
                components, metal fasteners, and building systems. This damage may not be immediately 
                apparent but can cause failures months later.
              </p>

              <p>
                Our assessment of waterfront storm damage includes evaluation of salt exposure to 
                critical systems. Documenting this damage early—while it's clearly connected to the 
                storm event—supports proper insurance claims. Waiting until systems fail later makes 
                connecting damage to the covered event much more difficult.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 43 Years Insurance Expertise */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                43 Years Insurance Industry Experience—Working for South Hillsborough
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                FCS's insurance expertise isn't theoretical—it comes from 43 years of hands-on 
                experience in the insurance industry. Seven years as an Allstate field adjuster, 
                evaluating claims and determining coverage. Twenty-eight years running a statewide 
                insurance restoration firm. This background is extraordinarily rare among contractors.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">From the Adjuster's Side of the Desk</h3>
              <p className="mb-4">
                Our principal spent seven years as an insurance adjuster, processing claims for 
                Allstate policyholders throughout Florida. This experience provided deep insight 
                into how carriers evaluate claims:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>What documentation adjusters need to approve scope items</li>
                <li>How coverage decisions are made and what supports them</li>
                <li>Where claims typically fall short and why</li>
                <li>What separates smooth claims from contentious disputes</li>
                <li>How to present information in formats carriers can process efficiently</li>
              </ul>

              <p className="mb-4">
                This adjuster perspective shapes everything about how FCS handles insurance restoration. 
                We don't fight with adjusters—we work with them professionally, providing the documentation 
                they need to evaluate and approve claims. This collaborative approach produces better 
                results than adversarial relationships.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">What This Means for South Hillsborough Property Owners</h3>
              <p className="mb-4">
                When you hire FCS for insurance restoration, you get both a contractor who can restore 
                your property AND an insurance expert who can navigate your claim:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-brand-green-dark mb-3">Certified Xactimate Estimates</h4>
                  <p>Our estimates use the same software and pricing that insurance adjusters use, 
                  allowing direct comparison and productive negotiation rather than format conflicts.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-brand-green-dark mb-3">Comprehensive Documentation</h4>
                  <p>We document damage the way insurance companies need to see it—comprehensive 
                  photography, detailed measurements, and clear scope descriptions that support claim approval.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-brand-green-dark mb-3">Hidden Damage Discovery</h4>
                  <p>43 years of claims experience means we know exactly where damage hides. We find 
                  problems that surface inspections miss and document them for supplemental claims.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-brand-green-dark mb-3">Supplement Preparation</h4>
                  <p>When additional damage is discovered during restoration, we prepare professional 
                  supplemental claims with documentation that supports coverage approval.</p>
                </div>
              </div>

              <p>
                Most contractors know construction. FCS knows construction AND insurance. This 
                dual expertise is why we achieve better outcomes for property owners—fair settlements, 
                complete restoration, and fewer disputes along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural and Rural Property Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-green rounded-xl">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Wimauma and South County: Agricultural Property Restoration
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                South Hillsborough includes significant agricultural operations—strawberry farms, 
                vegetable operations, nurseries, and cattle ranches with substantial building 
                investments. Agricultural property damage involves unique restoration considerations 
                and insurance complexities.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Agricultural Building Restoration</h3>
              <p className="mb-4">
                Farm buildings differ significantly from residential or commercial construction. 
                Packing houses, equipment barns, cold storage facilities, and processing buildings 
                have specific requirements:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Large Clear-Span Structures:</strong> Agricultural buildings often feature 
                wide spans without interior columns—engineering restoration of these structures 
                requires specific expertise.</li>
                <li><strong>Specialized Systems:</strong> Irrigation controls, refrigeration equipment, 
                processing machinery, and environmental systems require careful assessment and 
                restoration coordination.</li>
                <li><strong>Operational Urgency:</strong> Agricultural operations are time-sensitive. 
                Storm damage during harvest season has immediate financial impact beyond building damage.</li>
                <li><strong>Code Requirements:</strong> Agricultural buildings have specific code 
                provisions that differ from commercial construction.</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Agricultural Insurance Claims</h3>
              <p className="mb-4">
                Agricultural insurance differs from standard property coverage. Farm policies may 
                include coverage for buildings, equipment, livestock, and crops—each with different 
                documentation requirements. Business interruption on farms considers crop cycles, 
                planting windows, and seasonal revenue patterns.
              </p>

              <p className="mb-4">
                FCS has experience with agricultural insurance claims and understands the documentation 
                these specialized carriers require. We work with farm insurance adjusters to ensure 
                proper claim handling for agricultural properties.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Rural Property Access</h3>
              <p>
                South county rural properties may have access challenges after major storms—downed 
                trees, damaged roads, power outages. Our local presence means we can often reach 
                rural properties faster than out-of-area contractors who don't know alternate routes 
                or local conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hillsborough County Emergency Management */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-red-600 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Working with Hillsborough County Emergency Management
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl mb-6">
                Hillsborough County has specific emergency management procedures, building department 
                processes, and recovery protocols that affect disaster restoration. Local knowledge 
                of these systems accelerates project timelines.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Post-Disaster Permitting</h3>
              <p className="mb-4">
                After declared disasters, Hillsborough County may implement expedited permitting 
                procedures for storm damage repairs. Understanding these procedures—and having 
                established relationships with building department staff—helps move projects forward 
                when speed matters most.
              </p>

              <p className="mb-4">
                FCS maintains familiarity with Hillsborough County permitting requirements and 
                processes. Our local presence means we know who to contact, what documentation 
                is required, and how to navigate the system efficiently. This institutional 
                knowledge saves time on every project.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">Evacuation Zone Awareness</h3>
              <p className="mb-4">
                South Hillsborough includes multiple evacuation zones—Zone A along the coast and 
                Tampa Bay, with additional zones extending inland. Understanding which properties 
                face storm surge risk versus wind-only risk helps predict damage patterns and 
                ensure appropriate insurance documentation.
              </p>

              <p className="mb-4">
                Properties in Zone A (Apollo Beach waterfront, Ruskin areas near the Bay) need 
                both windstorm and flood insurance for complete protection. We help property 
                owners understand their exposure and document damage to the appropriate policies.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8 mb-4">FEMA Coordination When Applicable</h3>
              <p>
                Major disasters may qualify for FEMA assistance programs. When FEMA declarations 
                affect Hillsborough County, additional documentation and processes may apply. 
                FCS has experience with FEMA-related restoration, including public assistance 
                projects for municipal and community buildings, and understands the additional 
                requirements these projects entail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise List */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              The Local Expertise Advantage
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <ul className="grid md:grid-cols-2 gap-4">
                {localExpertise.map((item) => (
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

      {/* Insurance Restoration Services */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Complete Insurance Restoration Services for South Hillsborough
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From emergency response through complete restoration, FCS provides comprehensive 
            insurance claim support for properties throughout Ruskin, Sun City Center, Apollo Beach, 
            and surrounding communities.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <Wind className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Hurricane & Storm Damage</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Roof damage assessment and repair</li>
                <li>• Window and door replacement</li>
                <li>• Structural damage restoration</li>
                <li>• Emergency tarping and board-up</li>
                <li>• Water intrusion remediation</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Droplets className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Flood Damage Restoration</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• NFIP claim documentation</li>
                <li>• Storm surge damage assessment</li>
                <li>• Water extraction and drying</li>
                <li>• Mold prevention and remediation</li>
                <li>• Complete flood restoration</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Flame className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Fire Damage Recovery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fire damage assessment</li>
                <li>• Smoke and soot remediation</li>
                <li>• Structural evaluation</li>
                <li>• Complete reconstruction</li>
                <li>• Contents restoration coordination</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <FileCheck className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Insurance Claim Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Certified Xactimate estimates</li>
                <li>• Comprehensive documentation</li>
                <li>• Adjuster meeting coordination</li>
                <li>• Supplemental claim preparation</li>
                <li>• Scope negotiation support</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Building2 className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Commercial Restoration</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Large loss specialization ($250K-$25M)</li>
                <li>• Business interruption coordination</li>
                <li>• Multi-tenant property claims</li>
                <li>• Industrial facility recovery</li>
                <li>• Code upgrade compliance</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Home className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="text-xl font-bold text-brand-green-dark mb-3">Residential Restoration</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• High-value home restoration</li>
                <li>• 55+ community expertise</li>
                <li>• HOA coordination</li>
                <li>• Lanai and pool cage repair</li>
                <li>• Complete property reconstruction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={faqs} 
        title="Ruskin & South Hillsborough Insurance Restoration FAQs" 
      />

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-brand-gold" />
              <span className="text-brand-gold font-bold">822 Bayview Dr, Ruskin FL</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Your Local Contractor.<br />
              43 Years Insurance Expertise.<br />
              <span className="text-brand-gold">Already Right Here in Ruskin.</span>
            </h2>
            <p className="text-xl text-white/90 mb-4">
              When storm damage strikes South Hillsborough, you need a contractor who's already here—
              not one driving from across the Bay.
            </p>
            <p className="text-lg text-white/80 mb-8">
              FCS combines true local presence with 43 years of insurance industry experience. 
              We're your neighbors, and we're here to help our community recover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="btn-cta">
                Contact Your Local Restoration Experts
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
              Florida State Certified General Contractor CGC#1522434<br />
              Serving Ruskin, Sun City Center, Apollo Beach, Gibsonton, Wimauma & South Hillsborough
            </p>
          </div>
        </div>
      </section>

      {/* Related Services Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-green-dark mb-8 text-center font-heading">
              Related Insurance Restoration Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/disaster-recovery/" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                  Storm & Disaster Recovery
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete disaster recovery services with 43 years insurance expertise
                </p>
                <span className="text-brand-green font-medium flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/services/" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                  All Services
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Commercial construction and restoration throughout Tampa Bay
                </p>
                <span className="text-brand-green font-medium flex items-center gap-1">
                  View Services <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/contact/" className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                <h3 className="text-lg font-bold text-brand-green-dark mb-2 group-hover:text-brand-green">
                  Contact FCS
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Reach your local Ruskin restoration experts today
                </p>
                <span className="text-brand-green font-medium flex items-center gap-1">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
