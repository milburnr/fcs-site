import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { FAQWithSchema } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Historic Building Preservation Tampa | FCS",
  description: "Comprehensive guide to historic building preservation in Tampa. Learn about National Register listings, local designations, tax credits, and preservation standards.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Historic Building Preservation in Tampa", href: "/historic-building-preservation-in-tampa/" },
];


const internalLinks = [
  { href: "/services/historic-restoration/", label: "Historic Restoration Services" },
  { href: "/services/historic-restoration/shpo-compliance/", label: "SHPO Compliance" },
  { href: "/services/historic-restoration/historic-tax-credits/", label: "Historic Tax Credits" },
  { href: "/services/historic-restoration/material-sourcing/", label: "Historic Material Sourcing" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "How do I know if my building is historically designated?",
    answer: "Check with Tampa's Architectural Review & Historic Preservation office, which maintains records of all local designations including four local historic districts and 59 local landmarks. For National Register status, search the National Park Service database or consult with the Florida Division of Historical Resources. Property records may note historic designation, and buildings within historic districts may be contributing or non-contributing structures.",
  },
  {
    question: "What maintenance can I perform without a Certificate of Appropriateness?",
    answer: "Routine maintenance that does not alter the appearance of historic materials—such as cleaning, minor repairs, and repainting in matching colors—typically does not require COA approval. However, any work involving removal, replacement, or alteration of historic materials generally requires review. When in doubt, consult with the Historic Preservation office before beginning work.",
  },
  {
    question: "Can I make changes to the interior of a historic building?",
    answer: "Interior work typically does not require local historic review unless the interior is specifically designated or the building is seeking federal historic tax credits. However, interior alterations may still require standard building permits and must comply with building codes. Tax credit projects must meet the Secretary of the Interior's Standards for both interior and exterior work.",
  },
  {
    question: "What happens if I do work without required approvals?",
    answer: "Work performed without required COA approval may result in enforcement action, including fines up to $15,000 for irreparable damage to contributing historic structures under Tampa's recently amended ordinance. You may be required to remove non-compliant alterations and restore the building to its previous condition. For tax credit projects, non-compliant work can result in credit denial or recapture.",
  },
  {
    question: "How long does the historic review process take?",
    answer: "Simple projects may receive staff-level approval within 1-2 weeks. Projects requiring commission review are scheduled for monthly meetings and typically take 4-8 weeks for approval. Complex projects may require multiple meetings or negotiations. Federal tax credit review by SHPO and the National Park Service adds 3-6 months to the timeline. Early engagement with review authorities helps streamline the process.",
  },
  {
    question: "Where can I find craftspeople skilled in historic preservation?",
    answer: "Florida Construction Specialists maintains relationships with skilled tradespeople experienced in historic masonry, plasterwork, wood restoration, and other specialized preservation trades. Tampa Preservation, Inc. and the Florida Trust for Historic Preservation can also provide referrals. For specialized work, craftspeople may need to be brought from other regions where particular skills remain practiced.",
  },
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/historic-preservation/historic-preservation-display.webp"
            alt="Historic building restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 via-amber-800/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Historic Building Preservation in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Tampa&apos;s historic buildings—from Ybor City&apos;s social clubs to Hyde Park&apos;s commercial landmarks—represent irreplaceable cultural and architectural heritage. Expert preservation ensures these treasures endure.
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
            
              <p className="text-gray-600 mb-6">
                Historic building preservation in Tampa encompasses far more than maintaining old structures—it protects the physical evidence of our community&apos;s story, from the immigrant experience in Ybor City to the elegant development of Hyde Park and Tampa Heights. With over 59 locally designated historic landmarks, four local historic districts, and the nationally recognized Ybor City National Historic Landmark District, Tampa possesses an extraordinary collection of historic resources demanding specialized preservation expertise.
              </p>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists has served as a trusted partner for Tampa&apos;s most significant historic preservation projects. Our team understands that every historic building presents unique challenges requiring tailored approaches—combining technical expertise in traditional building methods with deep knowledge of preservation standards and regulatory requirements.
              </p>

              <div className="mb-8">
                <Image
                  src="/wp-content/uploads/2024/01/i9.jpg"
                  alt="Historic brick commercial building with exterior lighting at twilight after restoration"
                  width={800}
                  height={500}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Understanding Historic Designation Levels
              </h2>
              <p className="text-gray-600 mb-6">
                Tampa&apos;s historic buildings may be protected under multiple designation systems, each carrying different requirements and incentive opportunities. Understanding these designations is essential for planning preservation work.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                National Register of Historic Places
              </h3>
              <p className="text-gray-600 mb-6">
                The National Register of Historic Places, administered by the National Park Service, is the nation&apos;s official list of cultural resources worthy of preservation. Tampa has dozens of individually listed properties and several National Register historic districts. Notable Tampa listings include:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Tampa Theatre</strong> (1926) - Mediterranean Revival movie palace</li>
                <li><strong>Centro Asturiano de Tampa</strong> (1914) - Spanish immigrant social club added to the Register in 1974</li>
                <li><strong>Italian Club</strong> (1918) - Grand clubhouse serving Tampa&apos;s Italian community</li>
                <li><strong>Henry B. Plant Museum</strong> (Tampa Bay Hotel, 1891) - Moorish Revival landmark</li>
                <li><strong>Cuban Club (Circulo Cubano)</strong> - Social club representing Cuban immigrants</li>
                <li><strong>Ybor City Historic District</strong> - Designated a National Historic Landmark in 1990</li>
              </ul>

              <p className="text-gray-600 mb-6">
                National Register listing provides recognition and eligibility for the 20% federal historic tax credit for income-producing properties but does not restrict what private owners can do with their property unless federal funds or permits are involved.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Local Historic Designation
              </h3>
              <p className="text-gray-600 mb-6">
                Tampa&apos;s local historic preservation program, codified in Chapter 27 of the City Code, provides regulatory protection for designated properties. The City of Tampa maintains four local historic districts and 59 local historic landmarks with multiple property designations. Local designation requires review of exterior alterations by the appropriate commission:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Barrio Latino Commission:</strong> Reviews all projects within the Ybor City Historic District</li>
                <li><strong>Architectural Review Commission:</strong> Reviews projects in Hyde Park and other locally designated districts</li>
                <li><strong>Historic Preservation Commission:</strong> Reviews individually designated local historic landmarks</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Tampa&apos;s Premier Historic Properties
              </h2>
              
              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                The Italian Club (L&apos;Unione Italiana)
              </h3>
              <p className="text-gray-600 mb-6">
                Constructed in 1918, the Italian Club stands as one of Ybor City&apos;s most architecturally significant structures. The four-story building served as the social, cultural, and healthcare center for Tampa&apos;s Italian immigrant community. Its preservation presents typical challenges for Tampa&apos;s grand social clubs: maintaining ornate interior spaces while adapting for contemporary event use, addressing decades of deferred maintenance, and meeting modern building codes while preserving historic character. The building exemplifies successful preservation allowing continued community use.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Centro Asturiano de Tampa
              </h3>
              <p className="text-gray-600 mb-6">
                The Centro Asturiano, a social club for immigrants from Asturias, Spain, was added to the National Register of Historic Places on July 24, 1974. The organization provided its members with healthcare, burial services, and community throughout their lives. Today, the 110-year-old building requires ongoing preservation work to maintain its historic fabric while continuing to serve as an event venue and cultural center. The building&apos;s historic gymnasium, containing original early 20th-century exercise equipment, represents an opportunity for museum interpretation.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Tampa Theatre
              </h3>
              <p className="text-gray-600 mb-6">
                Built in 1926, the Tampa Theatre represents one of America&apos;s finest surviving examples of atmospheric theater design. Its Mediterranean Revival exterior and elaborately decorated interior—featuring a &quot;stars and clouds&quot; ceiling—require specialized preservation techniques for decorative plasterwork, historic lighting systems, and theatrical equipment. The theater demonstrates how historic preservation and adaptive programming can create sustainable cultural institutions.
              </p>

              <div className="mb-8">
                <Image
                  src="/wp-content/uploads/2024/01/1111.jpg"
                  alt="Historic church building restoration with scaffolding and clay tile roof repair in progress"
                  width={800}
                  height={500}
                  className="rounded-lg w-full object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                The Secretary of the Interior&apos;s Standards for Preservation
              </h2>
              <p className="text-gray-600 mb-6">
                The Secretary of the Interior&apos;s Standards provide the philosophical and technical framework for historic preservation work. Four distinct treatment approaches apply to different preservation scenarios:
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Preservation
              </h3>
              <p className="text-gray-600 mb-6">
                The most conservative approach, preservation focuses on maintaining and repairing historic materials and features rather than replacing them. Preservation applies when the goal is to retain the building exactly as it exists, including later alterations that have acquired significance.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Rehabilitation
              </h3>
              <p className="text-gray-600 mb-6">
                The most commonly applied treatment, rehabilitation acknowledges the need to alter or add to a historic property to meet continuing or new uses while retaining the property&apos;s character-defining features. Rehabilitation is the treatment required for projects seeking the federal historic tax credit.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Restoration
              </h3>
              <p className="text-gray-600 mb-6">
                Restoration depicts a property at a particular period in its history by removing features from other periods and reconstructing missing features from the target period. Restoration typically applies to museum properties or buildings of exceptional significance.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Reconstruction
              </h3>
              <p className="text-gray-600 mb-6">
                Reconstruction involves recreating vanished or non-surviving portions of a property for interpretive purposes. This treatment applies only in limited circumstances where documentary and physical evidence permits accurate recreation.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Historic Preservation Cost Ranges
              </h2>
              <p className="text-gray-600 mb-6">
                Historic preservation costs vary based on building condition, scope of work, and required treatment approach. The following table provides typical cost ranges for Tampa-area preservation projects:
              </p>

              {/* Cost Table */}
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-brand-green-dark text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Preservation Work Type</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Cost Range (per sq ft)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Historic Assessment & Documentation</td>
                      <td className="border border-gray-300 px-4 py-3">$1 - $3</td>
                      <td className="border border-gray-300 px-4 py-3">Conditions assessment, historic research</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Masonry Restoration</td>
                      <td className="border border-gray-300 px-4 py-3">$40 - $150</td>
                      <td className="border border-gray-300 px-4 py-3">Repointing, brick replacement, cleaning</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Exterior Wood Restoration</td>
                      <td className="border border-gray-300 px-4 py-3">$50 - $175</td>
                      <td className="border border-gray-300 px-4 py-3">Siding, trim, porch elements</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Historic Roof Restoration</td>
                      <td className="border border-gray-300 px-4 py-3">$35 - $125</td>
                      <td className="border border-gray-300 px-4 py-3">Clay tile, slate, historic metal roofing</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Window Restoration</td>
                      <td className="border border-gray-300 px-4 py-3">$800 - $2,500 per unit</td>
                      <td className="border border-gray-300 px-4 py-3">Complete restoration including hardware</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Decorative Plaster/Terra Cotta</td>
                      <td className="border border-gray-300 px-4 py-3">$75 - $300</td>
                      <td className="border border-gray-300 px-4 py-3">Ornamental element repair and restoration</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Interior Historic Finishes</td>
                      <td className="border border-gray-300 px-4 py-3">$50 - $200</td>
                      <td className="border border-gray-300 px-4 py-3">Historic paint, plaster, millwork</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-bold">Comprehensive Preservation (Total)</td>
                      <td className="border border-gray-300 px-4 py-3 font-bold">$175 - $400</td>
                      <td className="border border-gray-300 px-4 py-3">Full exterior and significant interior work</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 mb-6">
                Projects qualifying for the <Link href="/services/historic-restoration/historic-tax-credits/" className="text-brand-green-dark hover:underline">20% federal historic tax credit</Link> can offset a significant portion of these costs, making ambitious preservation projects economically viable.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                The Certificate of Appropriateness Process
              </h2>
              <p className="text-gray-600 mb-6">
                Work on locally designated historic properties in Tampa requires a Certificate of Appropriateness (COA) before building permits can be issued. The COA process ensures proposed work is compatible with the property&apos;s historic character.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                What Requires a COA?
              </h3>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Exterior alterations visible from public rights-of-way</li>
                <li>New construction (including additions)</li>
                <li>Demolition of any portion of a historic structure</li>
                <li>Changes to site features including landscaping, parking, and signage</li>
                <li>Certain interior work in buildings with designated interior spaces</li>
              </ul>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                The Review Process
              </h3>
              <p className="text-gray-600 mb-6">
                COA applications are reviewed by the appropriate commission at monthly public hearings. The review considers:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Compatibility with the property&apos;s historic character</li>
                <li>Impact on character-defining features</li>
                <li>Appropriateness of proposed materials and design</li>
                <li>Compliance with applicable design guidelines</li>
                <li>Secretary of the Interior&apos;s Standards (as guidance)</li>
              </ul>

              <p className="text-gray-600 mb-6">
                Florida Construction Specialists routinely represents clients before Tampa&apos;s preservation commissions, preparing application materials and presenting projects in the most favorable light while building relationships that facilitate smooth approvals.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Preservation Planning: A Systematic Approach
              </h2>
              <p className="text-gray-600 mb-6">
                Successful historic building preservation follows a systematic process that identifies needs, prioritizes work, and implements solutions appropriate to the building&apos;s significance and condition.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">1. Historic Structure Report:</strong>
                    <p className="text-gray-600">Documents the building&apos;s history, architectural significance, and physical condition, establishing a baseline for preservation decisions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">2. Conditions Assessment:</strong>
                    <p className="text-gray-600">Systematic evaluation of all building systems and components, identifying deterioration and prioritizing repairs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">3. Preservation Plan:</strong>
                    <p className="text-gray-600">Establishes treatment philosophy and prioritized work program, often phased over multiple years based on urgency and funding</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-brand-green-dark">4. Maintenance Plan:</strong>
                    <p className="text-gray-600">Defines ongoing maintenance tasks and schedules to prevent deterioration and protect preservation investments</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Financial Incentives for Historic Preservation
              </h2>
              <p className="text-gray-600 mb-6">
                Several incentive programs help offset the costs of historic preservation:
              </p>
              
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li><strong>Federal Historic Tax Credit (20%):</strong> Available for certified rehabilitation of income-producing National Register properties</li>
                <li><strong>Property Tax Assessment Freeze:</strong> Florida law allows local governments to freeze property tax assessments for qualifying historic properties</li>
                <li><strong>Preservation Grants:</strong> Various federal, state, and private grant programs support preservation work</li>
                <li><strong>Conservation Easements:</strong> Charitable contribution deductions for donating preservation restrictions</li>
              </ul>

              <p className="text-gray-600 mb-6">
                Our <Link href="/services/historic-restoration/shpo-compliance/" className="text-brand-green-dark hover:underline">SHPO compliance services</Link> help property owners navigate these programs and maximize available incentives.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Partner with Tampa&apos;s Historic Preservation Experts
              </h2>
              <p className="text-gray-600 mb-6">
                Historic building preservation demands expertise, dedication, and genuine respect for architectural heritage. Florida Construction Specialists brings all three to every project, from routine maintenance to comprehensive rehabilitation of Tampa&apos;s most significant landmarks.
              </p>
              
              <p className="text-gray-600 mb-6">
                Whether you own a locally designated property requiring COA-compliant repairs, a National Register building seeking tax credit rehabilitation, or a contributing structure within one of Tampa&apos;s historic districts, our team provides the expertise to preserve what matters while meeting your functional and financial objectives.
              </p>
              
              <p className="text-gray-600 mb-6">
                <Link href="/contact/" className="text-brand-green-dark hover:underline font-semibold">Contact us today</Link> for a consultation on your historic preservation project. We&apos;ll assess your building&apos;s needs, explain applicable regulations and incentives, and develop a preservation approach that honors Tampa&apos;s irreplaceable architectural heritage.
              </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={faqs} 
        title="Frequently Asked Questions" 
        description="Common questions about historic building preservation in Tampa"
      />
      
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for expert historic building preservation in Tampa.
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
