import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, MapPin, Building, Car, Users, FileText, AlertTriangle, DollarSign, Shield, TrendingUp } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Choosing the Perfect Location for Commercial Construction - Florida Construction Specialists",
  description: "Choosing the perfect location for commercial construction in Florida is crucial for achieving success in your business ventures. Contact Florida Construction Specialists today!",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Choosing the Perfect Location for Commercial Construction", href: "/choosing-the-perfect-location-for-commercial-construction/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/facility-building-turner-agricivic-center-arcadia-fl.jpg"
            alt="Commercial construction site location in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Choosing the Perfect Location for Your Florida Commercial Construction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Choosing the perfect location for commercial construction in Florida is crucial for achieving success in your business ventures. Learn how to evaluate sites in Tampa Bay for optimal results.
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
              In commercial real estate, the adage "location, location, location" exists for good reason. The site you choose for your commercial construction project will impact everything from construction costs to long-term business success. As Florida's leading commercial contractor serving Tampa, Lakeland, Sarasota, and the surrounding areas, Florida Construction Specialists helps clients evaluate potential sites and understand the construction implications of different locations throughout Tampa Bay.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Key Factors in Commercial Site Selection
            </h2>
            <p className="text-gray-600 mb-6">
              Selecting the optimal location for commercial construction requires balancing multiple factors. Understanding these considerations helps Tampa Bay business owners make informed decisions:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  Accessibility and Traffic
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  How customers, employees, and suppliers reach your facility directly impacts business success:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Proximity to major highways (I-275, I-75, I-4)</li>
                  <li>• Traffic patterns and peak hour congestion</li>
                  <li>• Public transportation access</li>
                  <li>• Turn lane and signal requirements</li>
                  <li>• Truck access for deliveries</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Visibility and Exposure
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  For retail and many service businesses, visibility drives customer traffic:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Traffic count on adjacent roads</li>
                  <li>• Signage visibility and allowances</li>
                  <li>• Corner lots vs. mid-block parcels</li>
                  <li>• Competitive visibility analysis</li>
                  <li>• Future development impacts</li>
                </ul>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Demographics and Labor
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Understanding the surrounding population is crucial:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Population density within trade area</li>
                  <li>• Income levels and spending patterns</li>
                  <li>• Workforce availability and skills</li>
                  <li>• Commute patterns for employees</li>
                  <li>• Growth projections for the area</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Zoning and Regulations
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Regulatory requirements vary significantly across Tampa Bay:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Zoning classification and permitted uses</li>
                  <li>• Height and density restrictions</li>
                  <li>• Parking requirements</li>
                  <li>• Setback and lot coverage rules</li>
                  <li>• Special overlay districts</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Site-Specific Construction Considerations
            </h2>
            <p className="text-gray-600 mb-6">
              Beyond business factors, site characteristics significantly impact construction costs and feasibility. Florida Construction Specialists evaluates these factors during pre-construction:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Site Factor</th>
                    <th className="px-6 py-3 text-left">Impact on Construction</th>
                    <th className="px-6 py-3 text-left">Cost Implications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium">Soil Conditions</td>
                    <td className="px-6 py-4">Foundation design, drainage requirements</td>
                    <td className="px-6 py-4">Can add $5-50/SF in difficult soils</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Flood Zone</td>
                    <td className="px-6 py-4">Elevation, flood vents, insurance</td>
                    <td className="px-6 py-4">AE zone can add 10-25% to costs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Topography</td>
                    <td className="px-6 py-4">Grading, retaining walls, drainage</td>
                    <td className="px-6 py-4">Significant slopes add $10-30/SF</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Wetlands</td>
                    <td className="px-6 py-4">Mitigation, setbacks, permit delays</td>
                    <td className="px-6 py-4">Can render portions unbuildable</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Utility Availability</td>
                    <td className="px-6 py-4">Extension costs, capacity limitations</td>
                    <td className="px-6 py-4">Extensions can cost $50K-500K+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium">Environmental Issues</td>
                    <td className="px-6 py-4">Remediation, monitoring, liability</td>
                    <td className="px-6 py-4">Highly variable; can kill deals</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Florida-Specific Site Selection Factors
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's environment creates unique considerations for commercial site selection:
            </p>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Flood Zone Considerations
              </h3>
              <p className="text-gray-600 mb-4">
                Flood zone designation significantly impacts construction costs, insurance, and risk. Key considerations for Tampa Bay sites:
              </p>
              <ul className="text-gray-600 space-y-2">
                <li><strong>Zone X (minimal flood hazard):</strong> Most favorable for construction; no elevation requirements</li>
                <li><strong>Zone AE (100-year flood zone):</strong> Requires elevated first floor, flood vents, and flood insurance</li>
                <li><strong>Zone VE (coastal high hazard):</strong> Most stringent requirements; substantial additional costs</li>
                <li><strong>Future Map Changes:</strong> FEMA remapping can change zone designations; research pending changes</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Hurricane Exposure</h4>
                <p className="text-gray-600 text-sm">
                  Tampa Bay hasn't had a direct major hurricane hit in over 100 years, but the risk is real. Sites closer to the coast face higher wind speeds and storm surge risk. Building codes require enhanced construction in High Velocity Hurricane Zones (HVHZ), increasing costs 5-15% compared to inland locations.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Water Table Issues</h4>
                <p className="text-gray-600 text-sm">
                  Tampa Bay's high water table affects foundation design and construction methods. Sites near the bay or in low-lying areas may require dewatering during construction, specialized foundation systems, or below-grade waterproofing. Geotechnical evaluation is essential before site acquisition.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Protected Species</h4>
                <p className="text-gray-600 text-sm">
                  Florida has extensive wildlife protection requirements. Sites may harbor gopher tortoises, burrowing owls, or other protected species requiring surveys, permitting, and potentially relocation before development. Environmental assessments should precede site acquisition.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold text-brand-green-dark mb-3">Stormwater Management</h4>
                <p className="text-gray-600 text-sm">
                  Florida's flat terrain and heavy rainfall require substantial stormwater management. Retention ponds, underground systems, or other solutions can consume significant site area (often 10-20% of the parcel). Factor stormwater requirements into usable acreage calculations.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Site Selection Checklist for Tampa Bay
            </h2>
            <p className="text-gray-600 mb-6">
              Use this comprehensive checklist when evaluating potential commercial construction sites:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-bold text-brand-green-dark mb-4">Due Diligence Items</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Legal & Regulatory</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>☐ Verify zoning allows intended use</li>
                    <li>☐ Review comprehensive plan designation</li>
                    <li>☐ Check for overlay districts or special requirements</li>
                    <li>☐ Confirm no deed restrictions limiting use</li>
                    <li>☐ Review title for easements or encumbrances</li>
                    <li>☐ Verify property boundaries with survey</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Physical Site</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>☐ Obtain geotechnical report</li>
                    <li>☐ Determine flood zone designation</li>
                    <li>☐ Complete Phase I environmental assessment</li>
                    <li>☐ Survey for protected species</li>
                    <li>☐ Identify wetlands and buffers</li>
                    <li>☐ Assess topography and drainage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Utilities & Infrastructure</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>☐ Confirm water service availability</li>
                    <li>☐ Verify sewer capacity (or percolation tests)</li>
                    <li>☐ Assess electrical service adequacy</li>
                    <li>☐ Check gas availability if needed</li>
                    <li>☐ Evaluate internet/telecom options</li>
                    <li>☐ Determine impact fee obligations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-brand-green-dark text-sm mb-2">Access & Transportation</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>☐ Evaluate road access points</li>
                    <li>☐ Review traffic study requirements</li>
                    <li>☐ Confirm driveway permits obtainable</li>
                    <li>☐ Assess truck turning requirements</li>
                    <li>☐ Check public transit accessibility</li>
                    <li>☐ Evaluate parking adequacy</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Tampa Bay's Commercial Growth Areas
            </h2>
            <p className="text-gray-600 mb-6">
              Understanding Tampa Bay's development patterns helps identify promising locations:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Westshore/Airport Area:</strong>
                  <span className="text-gray-600"> Tampa's premier office and corporate market, with excellent airport access and continued development. Higher land costs but strong tenant demand.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">I-75 Corridor (Pasco/Hillsborough):</strong>
                  <span className="text-gray-600"> Rapidly developing with strong residential growth driving retail and medical demand. More affordable land with good highway access.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Lakeland/Polk County:</strong>
                  <span className="text-gray-600"> Emerging industrial and distribution hub with I-4 access between Tampa and Orlando. Favorable land costs and growing population.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-green-dark">Sarasota/Bradenton:</strong>
                  <span className="text-gray-600"> Affluent market with strong retail and medical demand. Higher land costs but premium tenant base.</span>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              How Florida Construction Specialists Helps with Site Selection
            </h2>
            <p className="text-gray-600 mb-6">
              Our pre-construction services include comprehensive site evaluation to help you understand construction implications before committing to a property:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Constructability Analysis:</strong> We evaluate how easily your planned building can be constructed on the site, identifying potential challenges and cost implications.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Preliminary Budget Development:</strong> We provide rough order of magnitude costs for different sites, helping you compare total project costs including site-specific factors.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Permit Feasibility Assessment:</strong> We research local requirements and potential hurdles, estimating permit timelines and identifying deal-breakers early.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-600"><strong>Consultant Coordination:</strong> We help coordinate necessary studies (geotechnical, environmental, traffic) and interpret findings in construction terms.</span>
              </li>
            </ul>

            {/* FAQ Section */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions About Site Selection
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How early should I involve a contractor in site selection?
                  </h3>
                  <p className="text-gray-600">
                    Ideally, before you sign a purchase contract. Florida Construction Specialists can provide invaluable insight into construction costs for different sites, potentially saving you from expensive surprises. Even a preliminary site visit can reveal issues that affect feasibility or cost. Include contingencies in purchase contracts allowing time for proper due diligence.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What's the biggest site selection mistake you see in Tampa Bay?
                  </h3>
                  <p className="text-gray-600">
                    Underestimating the impact of flood zones. Properties in AE or VE flood zones can cost 15-30% more to develop due to elevation requirements, and carry significant ongoing insurance costs. Always verify flood zone designation early—it's one of the first questions we ask when clients present potential sites.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How much should I budget for site due diligence?
                  </h3>
                  <p className="text-gray-600">
                    For a typical commercial site in Tampa Bay, budget $15,000-$50,000 for comprehensive due diligence including boundary survey, geotechnical report, Phase I environmental assessment, wetland determination, and protected species survey. This investment is tiny compared to the cost of discovering problems after purchase.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    What if the site I want has zoning issues?
                  </h3>
                  <p className="text-gray-600">
                    Zoning changes or variances are possible but add time (6-12+ months) and uncertainty to projects. Success depends on the nature of the request, adjacent uses, and political climate. We can help assess the likelihood of approval and identify alternative approaches. Never purchase property requiring rezoning without appropriate contingencies.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    How do impact fees affect site selection in Tampa Bay?
                  </h3>
                  <p className="text-gray-600">
                    Impact fees vary significantly across Tampa Bay jurisdictions and can add $5-$20+ per square foot to project costs. Hillsborough County, Pinellas County, and individual municipalities each have their own fee structures. We include impact fee estimates in our site evaluations and can help compare the true development cost across different jurisdictions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
            Need Help Evaluating Commercial Sites?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for pre-construction site analysis. We'll help you understand the true cost and feasibility of your Tampa Bay site options.
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
