import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, TrendingUp, Building, Leaf, Sun, Zap, Droplets, Wind, Award, DollarSign } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Sustainable Construction Trends in Florida",
  description: "Explore the latest sustainable construction trends shaping Florida's commercial building industry. From smart buildings to net-zero energy, discover what's next.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Sustainable Construction Trends in Florida", href: "/sustainable-construction-trends-in-florida/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/sustainable-building-materials-in-commercial-construction/", label: "Sustainable Building Materials" },
  { href: "/zero-net-energy-boosting-commercial-construction/", label: "Zero Net Energy Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Sustainable Building Practices in Florida",
    "href": "/sustainable-building-practices-florida-green-construction/",
    "description": "Green construction methods suited to Florida's climate and regulations."
  },
  {
    "title": "Florida Leading the Way in LEED Certification",
    "href": "/construction-florida-leading-way-leed-certification/",
    "description": "How Florida projects are achieving LEED certification for commercial buildings."
  },
  {
    "title": "Zero Net Energy in Commercial Construction",
    "href": "/zero-net-energy-boosting-commercial-construction/",
    "description": "Designing commercial buildings that produce as much energy as they consume."
  },
  {
    "title": "Benefits of Sustainable Materials",
    "href": "/benefits-of-sustainable-materials-in-commercial-construction/",
    "description": "How green materials improve building performance and reduce costs."
  }
];

const faqs = [
  {
    question: "Which sustainable construction trends offer the best ROI for Tampa Bay projects?",
    answer: "The best ROI depends on your building type and goals, but generally LED lighting and smart controls offer the fastest payback (1-3 years), followed by high-efficiency HVAC and building envelope improvements (3-7 years). Solar PV delivers strong returns in Tampa's sunny climate (6-10 years after incentives). Indoor environmental quality improvements, while harder to quantify, deliver significant productivity and tenant retention benefits."
  },
  {
    question: "Is net-zero energy achievable for commercial buildings in Florida?",
    answer: "Yes, increasingly so. Single-story buildings with large roof areas (retail, office, light industrial, warehouse) are excellent NZE candidates. Multi-story buildings can achieve NZE with solar parking structures, facade integration, or nearby ground-mount arrays. The key is starting with aggressive efficiency to minimize the solar capacity needed. Tampa Bay's solar resources are among the best in the nation for NZE achievement."
  },
  {
    question: "How do sustainable buildings perform during hurricanes?",
    answer: "Sustainable buildings often perform better in hurricanes because they typically feature enhanced building envelopes, impact-resistant glazing, and superior construction quality. Solar panels are designed for high wind loads (180+ mph) and are safer than often assumed. Energy storage systems provide power during extended outages. Sustainable construction's emphasis on durability and resilience aligns well with hurricane preparedness."
  },
  {
    question: "What incentives are available for implementing these sustainable trends?",
    answer: "Florida offers numerous incentives: the federal 179D tax deduction (up to $5/sq ft for efficient buildings), 30% solar Investment Tax Credit, utility rebates from TECO and Duke Energy, PACE financing for qualifying improvements, and expedited permitting for LEED-registered projects in Tampa. Our team helps identify and maximize all available incentives for your project."
  },
  {
    question: "How do I prioritize which sustainable features to include in my project?",
    answer: "We recommend a structured approach: First, maximize efficiency (envelope, lighting, HVAC) to reduce operating costs. Second, add smart building systems for ongoing optimization. Third, consider renewable energy to offset remaining consumption. Finally, layer in IEQ and resilience features based on your priorities and budget. We provide detailed analyses to help prioritize investments based on your specific situation."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Sustainable construction trends in Florida"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Sustainable Construction Trends Shaping Florida's Future
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Stay ahead with the latest sustainable construction trends in Florida. Florida Construction Specialists brings cutting-edge green building innovations to Tampa Bay commercial projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
      </section>

      {/* Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Florida's construction industry is experiencing a sustainability revolution. As climate concerns intensify and building performance expectations rise, sustainable construction has moved from a niche specialty to mainstream practice. Florida Construction Specialists is at the forefront of this transformation, bringing the latest sustainable construction trends to commercial projects throughout Tampa, Lakeland, Sarasota, and the greater Tampa Bay region. Understanding these trends helps property owners and developers make informed decisions about their construction investments.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Trend 1: Net-Zero Energy Buildings
            </h2>
            <p className="text-gray-600 mb-6">
              Net-zero energy (NZE) buildings—which produce as much energy as they consume annually—are becoming increasingly achievable in Florida's sunny climate. The combination of dramatically reduced solar costs, improved building envelope technologies, and high-efficiency mechanical systems makes NZE a realistic goal for many commercial building types. Tampa Bay's 2,900+ annual sunshine hours provide exceptional solar generation potential.
            </p>
            <p className="text-gray-600 mb-6">
              We're seeing growing interest in NZE across building types: single-story retail, office buildings, light industrial, and educational facilities are all strong candidates. The economic case has strengthened significantly—with solar costs down 90% over the past decade and the 30% federal Investment Tax Credit available, NZE buildings often achieve payback periods of 6-10 years while eliminating ongoing energy costs.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Trend 2: Smart Buildings and Building Automation
            </h2>
            <p className="text-gray-600 mb-6">
              Smart building technology has matured rapidly, enabling unprecedented optimization of building performance. Modern building automation systems integrate HVAC, lighting, security, and occupancy sensing into cohesive platforms that reduce energy consumption by 15-30% while improving occupant comfort. Cloud-based analytics enable continuous commissioning, identifying and correcting performance issues in real-time.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Smart Building Technologies We're Implementing
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-600 space-y-2">
                  <li>• AI-powered HVAC optimization</li>
                  <li>• Occupancy-based lighting and climate control</li>
                  <li>• Predictive maintenance systems</li>
                  <li>• Indoor air quality monitoring</li>
                </ul>
                <ul className="text-gray-600 space-y-2">
                  <li>• Energy consumption dashboards</li>
                  <li>• Automated demand response</li>
                  <li>• Smart glass and shading systems</li>
                  <li>• Integrated building management platforms</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Trend 3: Embodied Carbon Focus
            </h2>
            <p className="text-gray-600 mb-6">
              The industry is increasingly recognizing that operational energy is only part of a building's carbon footprint. Embodied carbon—the emissions associated with material production, transportation, and construction—can represent 40-60% of a building's lifetime carbon impact. Florida Construction Specialists is addressing embodied carbon through material selection, regional sourcing, and construction waste reduction.
            </p>
            <p className="text-gray-600 mb-6">
              Low-carbon concrete alternatives, mass timber construction, recycled steel, and carbon-sequestering materials are gaining adoption. We're seeing architects and developers increasingly specify Environmental Product Declarations (EPDs) and conduct whole-building life cycle assessments to understand and minimize total carbon impact.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Trend 4: Climate Resilience Integration
            </h2>
            <p className="text-gray-600 mb-6">
              Florida's exposure to hurricanes, flooding, and sea level rise has made climate resilience a central focus of sustainable construction. The convergence of sustainability and resilience creates buildings that are both environmentally responsible and capable of withstanding climate impacts. This integration includes:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Wind className="w-5 h-5" />
                  Hurricane Resilience
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Enhanced structural connections exceeding code</li>
                  <li>• Impact-resistant glazing systems</li>
                  <li>• Protected mechanical equipment</li>
                  <li>• Backup power systems</li>
                  <li>• Rapid recovery design principles</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5" />
                  Flood Adaptation
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Elevated construction above flood levels</li>
                  <li>• Flood-resistant materials at lower levels</li>
                  <li>• Enhanced stormwater management</li>
                  <li>• Living shoreline protection</li>
                  <li>• Critical systems above flood elevation</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Trend 5: Indoor Environmental Quality Focus
            </h2>
            <p className="text-gray-600 mb-6">
              The WELL Building Standard and similar frameworks have elevated indoor environmental quality (IEQ) to a central design priority. Post-pandemic, occupants and employers are more attuned to indoor air quality, natural light, thermal comfort, and biophilic elements. Buildings that support occupant health and productivity command premium rents and experience better tenant retention.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">IEQ Focus Area</th>
                    <th className="px-6 py-3 text-left">Key Strategies</th>
                    <th className="px-6 py-3 text-left">Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Air Quality</td>
                    <td className="px-6 py-4">Enhanced ventilation, MERV-13+ filtration, CO2 monitoring</td>
                    <td className="px-6 py-4">30% fewer sick days, improved cognitive performance</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Natural Light</td>
                    <td className="px-6 py-4">Daylight optimization, circadian lighting, glare control</td>
                    <td className="px-6 py-4">18% productivity increase, improved sleep quality</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Thermal Comfort</td>
                    <td className="px-6 py-4">Zoned control, humidity management, radiant systems</td>
                    <td className="px-6 py-4">Reduced complaints, improved satisfaction</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Biophilic Design</td>
                    <td className="px-6 py-4">Living walls, natural materials, outdoor access</td>
                    <td className="px-6 py-4">Reduced stress, enhanced creativity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Trend 6: Electrification and Decarbonization
            </h2>
            <p className="text-gray-600 mb-6">
              The movement toward all-electric buildings is accelerating, driven by carbon reduction goals and improved heat pump technology. Modern heat pump systems deliver efficient heating and cooling in Florida's climate, eliminating on-site fossil fuel combustion. When combined with solar power, all-electric buildings can achieve dramatic carbon reductions or full carbon neutrality.
            </p>
            <p className="text-gray-600 mb-6">
              We're also seeing increased interest in EV charging infrastructure as electric vehicle adoption grows. Forward-thinking commercial developments are incorporating EV-ready parking from the outset, anticipating that EV charging will become an expected amenity rather than a premium feature.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Trend 7: Circular Economy Principles
            </h2>
            <p className="text-gray-600 mb-6">
              The construction industry is beginning to embrace circular economy principles—designing buildings for disassembly, specifying materials with recycled content and recyclability, and planning for adaptive reuse. This represents a fundamental shift from the traditional linear "take-make-dispose" model to one that keeps materials in productive use.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Design for Disassembly:</strong>
                  <span className="text-gray-600"> Specifying mechanical connections that allow future deconstruction and material recovery rather than demolition and disposal.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Material Passports:</strong>
                  <span className="text-gray-600"> Documenting building materials to facilitate future reuse and recycling at end of building life.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Adaptive Reuse Priority:</strong>
                  <span className="text-gray-600"> Renovating existing buildings rather than demolishing them, preserving embodied carbon and reducing waste.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Trend 8: Mass Timber Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Mass timber—including cross-laminated timber (CLT) and glue-laminated timber (glulam)—is emerging as a sustainable alternative to steel and concrete for multi-story commercial construction. Mass timber sequesters carbon, offers excellent thermal performance, and creates beautiful exposed wood interiors. Updated Florida Building Code provisions now enable taller mass timber structures.
            </p>
            <p className="text-gray-600 mb-6">
              While mass timber requires careful design for Florida's humidity and hurricane exposure, proper detailing and protective treatments make it a viable option for many commercial applications. The construction speed advantages of prefabricated mass timber components can offset higher material costs.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Cost Comparison: Sustainable vs. Conventional Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Understanding the financial implications of sustainable construction trends helps inform decision-making:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Sustainable Feature</th>
                    <th className="px-6 py-3 text-left">Initial Premium</th>
                    <th className="px-6 py-3 text-left">Annual Savings</th>
                    <th className="px-6 py-3 text-left">Simple Payback</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">High-Performance Envelope</td>
                    <td className="px-6 py-4">5-10%</td>
                    <td className="px-6 py-4">20-35% HVAC</td>
                    <td className="px-6 py-4">5-8 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Building Automation</td>
                    <td className="px-6 py-4">$3-7/SF</td>
                    <td className="px-6 py-4">15-30% energy</td>
                    <td className="px-6 py-4">3-5 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Solar PV System</td>
                    <td className="px-6 py-4">$15-25/SF</td>
                    <td className="px-6 py-4">40-100% electric</td>
                    <td className="px-6 py-4">6-10 years*</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Enhanced IEQ Systems</td>
                    <td className="px-6 py-4">$5-10/SF</td>
                    <td className="px-6 py-4">Productivity gains</td>
                    <td className="px-6 py-4">2-4 years**</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">EV Charging Infrastructure</td>
                    <td className="px-6 py-4">$2-5/SF parking</td>
                    <td className="px-6 py-4">Tenant amenity</td>
                    <td className="px-6 py-4">Market advantage</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mb-8">*After 30% federal ITC. **Based on productivity studies valuing occupant time.</p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida-Specific Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Sustainable construction in Florida requires strategies tailored to our unique climate and regulatory environment:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Sun className="w-5 h-5" />
                  Climate Advantages
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Exceptional solar generation potential</li>
                  <li>• Heating loads minimal—focus on cooling</li>
                  <li>• Natural ventilation opportunities in shoulder seasons</li>
                  <li>• Daylight abundance for harvesting</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  Climate Challenges
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• High humidity requiring moisture management</li>
                  <li>• Hurricane exposure demanding resilience</li>
                  <li>• Intense solar heat gain to manage</li>
                  <li>• Flood and sea level rise considerations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Partner with Florida's Sustainable Construction Leader
            </h2>
            <p className="text-gray-600 mb-6">
              Florida Construction Specialists stays at the forefront of sustainable construction trends, bringing the latest innovations to every project. Whether you're interested in net-zero energy, smart building technology, enhanced indoor environmental quality, or other sustainable features, our team provides the expertise to integrate these trends effectively and cost-efficiently.
            </p>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Sustainable Construction Trends
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Which sustainable construction trends offer the best ROI for Tampa Bay projects?
                  </h3>
                  <p className="text-gray-600">
                    The best ROI depends on your building type and goals, but generally LED lighting and smart controls offer the fastest payback (1-3 years), followed by high-efficiency HVAC and building envelope improvements (3-7 years). Solar PV delivers strong returns in Tampa's sunny climate (6-10 years after incentives). Indoor environmental quality improvements, while harder to quantify, deliver significant productivity and tenant retention benefits.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    Is net-zero energy achievable for commercial buildings in Florida?
                  </h3>
                  <p className="text-gray-600">
                    Yes, increasingly so. Single-story buildings with large roof areas (retail, office, light industrial, warehouse) are excellent NZE candidates. Multi-story buildings can achieve NZE with solar parking structures, facade integration, or nearby ground-mount arrays. The key is starting with aggressive efficiency to minimize the solar capacity needed. Tampa Bay's solar resources are among the best in the nation for NZE achievement.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do sustainable buildings perform during hurricanes?
                  </h3>
                  <p className="text-gray-600">
                    Sustainable buildings often perform better in hurricanes because they typically feature enhanced building envelopes, impact-resistant glazing, and superior construction quality. Solar panels are designed for high wind loads (180+ mph) and are safer than often assumed. Energy storage systems provide power during extended outages. Sustainable construction's emphasis on durability and resilience aligns well with hurricane preparedness.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What incentives are available for implementing these sustainable trends?
                  </h3>
                  <p className="text-gray-600">
                    Florida offers numerous incentives: the federal 179D tax deduction (up to $5/sq ft for efficient buildings), 30% solar Investment Tax Credit, utility rebates from TECO and Duke Energy, PACE financing for qualifying improvements, and expedited permitting for LEED-registered projects in Tampa. Our team helps identify and maximize all available incentives for your project.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do I prioritize which sustainable features to include in my project?
                  </h3>
                  <p className="text-gray-600">
                    We recommend a structured approach: First, maximize efficiency (envelope, lighting, HVAC) to reduce operating costs. Second, add smart building systems for ongoing optimization. Third, consider renewable energy to offset remaining consumption. Finally, layer in IEQ and resilience features based on your priorities and budget. We provide detailed analyses to help prioritize investments based on your specific situation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Services"
            links={internalLinks}
          />
        </div>
      </section>

      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Embrace Sustainable Construction?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists to bring the latest sustainable construction trends to your Tampa Bay project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Get Free Estimate
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
