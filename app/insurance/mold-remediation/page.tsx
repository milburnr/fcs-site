import type { Metadata } from "next";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import Link from "next/link";
import { Phone, AlertTriangle, Shield, Building2, Wind, Droplets, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance/mold-remediation/' },
  title: "Mold Remediation | Professional Mold Removal | FCS Tampa",
  description: "Professional mold remediation for commercial and residential properties in Tampa Bay. Assessment, containment, removal, and prevention. Insurance claim expertise.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance", href: "/insurance/" },
  { name: "Mold Remediation", href: "/insurance/mold-remediation/" },
];

const faqs = [
  {
    question: "How do you know if you have mold?",
    answer: "Signs include visible mold growth, musty odors, water stains, peeling paint, and health symptoms like allergies or respiratory issues. Professional testing can confirm mold presence and identify species. If you've had water damage, mold should be assumed and inspected.",
  },
  {
    question: "Does insurance cover mold remediation?",
    answer: "Coverage varies significantly by policy. Mold resulting from a covered water loss (like a pipe burst) is often covered. Pre-existing mold or mold from maintenance failures typically isn't. We help determine coverage and document properly for insurance.",
  },
  {
    question: "What is the mold remediation process?",
    answer: "Our process: 1) Assessment and testing, 2) Containment to prevent spread, 3) Air filtration with HEPA equipment, 4) Removal of mold and affected materials, 5) Cleaning and disinfection, 6) Drying and dehumidification, 7) Restoration of removed materials, 8) Post-remediation testing.",
  },
  {
    question: "How long does mold remediation take?",
    answer: "Timeline depends on extent. Small areas: 1-3 days. Large commercial projects: weeks to months. We provide detailed timelines during assessment. The key is doing it right—cutting corners leads to recurrence.",
  },
  {
    question: "Can I stay in the building during remediation?",
    answer: "It depends on extent and location. Small, contained areas may allow occupancy in other parts of the building. Large-scale remediation often requires temporary relocation. We minimize disruption while prioritizing safety.",
  },
  {
    question: "How do you prevent mold from returning?",
    answer: "We address root causes—fix the moisture source, ensure proper drying, improve ventilation, and treat surfaces with antimicrobial products. Without addressing moisture, mold will return regardless of how well it's remediated.",
  },
];

const services = [
  { icon: AlertTriangle, title: "Mold Assessment", description: "Professional testing and assessment to identify mold type, extent, and source." },
  { icon: Shield, title: "Containment", description: "Proper containment prevents mold spores from spreading during remediation." },
  { icon: Wind, title: "Air Filtration", description: "HEPA filtration removes airborne mold spores throughout the process." },
  { icon: Building2, title: "Commercial Remediation", description: "Large-scale remediation for commercial buildings and multi-family properties." },
  { icon: Droplets, title: "Moisture Control", description: "Address the water source that caused mold to prevent recurrence." },
  { icon: CheckCircle, title: "Post-Remediation Testing", description: "Independent testing verifies successful remediation before project closeout." },
];

const relatedLinks = [
  { href: "/insurance/", label: "Insurance Services Overview" },
  { href: "/insurance/water-restoration/", label: "Water Restoration" },
  { href: "/insurance/hurricane-restoration/", label: "Hurricane Restoration" },
  { href: "/insurance/certified-estimating/", label: "Certified Estimating" },
];

export default function MoldRemediationPage() {
  return (
    <>
      <LocalBusinessSchema service="Mold Remediation" />
      <ServiceSchema
        serviceName="Mold Remediation Services"
        serviceDescription="Professional mold remediation for Tampa Bay commercial and residential properties. Assessment, containment, removal, and prevention with insurance claim expertise."
        minPrice="5000"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 px-4 py-2 rounded-full mb-6">
              <AlertTriangle className="w-5 h-5 text-green-400" />
              <span className="text-green-200 font-medium">Certified Remediation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mold Remediation
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Professional mold assessment, containment, and removal. We address the problem properly 
              and eliminate the moisture source to prevent recurrence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30">
                Request Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mold Remediation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete mold remediation from assessment through restoration.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Professional Mold Remediation for Tampa Bay Properties</h2>
            <p>
              Mold isn't just unsightly—it actively destroys building materials and poses serious health risks to occupants. In Tampa Bay's subtropical climate, with average humidity exceeding 70%, mold can establish itself within 24-48 hours after water intrusion. Professional remediation addresses both the visible growth and the underlying moisture problem that allowed mold to flourish.
            </p>
            <p>
              Florida Construction Specialists provides comprehensive mold remediation for commercial and residential properties throughout Tampa Bay. Our approach combines industry-standard protocols with the construction expertise needed to properly restore affected areas after mold removal.
            </p>

            <h3>Understanding Mold in Florida Buildings</h3>
            <p>
              Mold requires three conditions to grow: moisture, organic material (like wood, drywall, or carpet), and appropriate temperatures. Tampa Bay provides ideal conditions year-round. Common mold triggers in our area include:
            </p>
            <ul>
              <li><strong>Hurricane and Storm Damage:</strong> Roof leaks, window failures, and flooding introduce massive amounts of moisture that can persist in building materials for weeks.</li>
              <li><strong>AC System Failures:</strong> When air conditioning stops working in Florida, humidity spikes rapidly. Condensation on cold surfaces (like supply ducts) creates perfect mold conditions.</li>
              <li><strong>Plumbing Leaks:</strong> Both sudden pipe bursts and slow, hidden leaks create moisture environments where mold thrives undetected.</li>
              <li><strong>Building Envelope Failures:</strong> Failed caulking, deteriorated flashing, and improperly sealed penetrations allow moisture intrusion that feeds mold growth in wall cavities.</li>
              <li><strong>Elevated Humidity:</strong> Properties with inadequate ventilation or oversized AC systems (which short-cycle and don't dehumidify properly) maintain humidity levels that support mold.</li>
            </ul>

            <h3>Health Implications of Mold Exposure</h3>
            <p>
              Mold produces allergens, irritants, and in some cases, toxic substances called mycotoxins. Health effects vary by individual and mold species, but can include:
            </p>
            <ul>
              <li>Respiratory symptoms: coughing, wheezing, throat irritation</li>
              <li>Allergic reactions: sneezing, runny nose, red eyes, skin rash</li>
              <li>Asthma attacks in sensitive individuals</li>
              <li>Headaches, fatigue, and difficulty concentrating</li>
              <li>More severe reactions in immunocompromised individuals</li>
            </ul>
            <p>
              These health concerns make proper remediation essential—not just for building preservation, but for occupant safety.
            </p>

            <h3>Why Professional Mold Remediation Matters</h3>
            <p>
              DIY mold removal often makes problems worse. Disturbing mold without proper containment releases millions of spores into the air, spreading contamination throughout the building. Professional remediation provides:
            </p>
            <ul>
              <li><strong>Proper Containment:</strong> We isolate affected areas with negative air pressure to prevent cross-contamination during removal.</li>
              <li><strong>Complete Identification:</strong> Mold visible on surfaces is often just the tip of the problem. We find hidden growth in wall cavities, above ceilings, and under flooring.</li>
              <li><strong>Safe Removal:</strong> Trained technicians with proper PPE safely remove mold-affected materials without exposing themselves or building occupants.</li>
              <li><strong>Root Cause Correction:</strong> Removing mold without fixing the moisture source guarantees recurrence. We identify and address underlying water issues.</li>
              <li><strong>HEPA Filtration:</strong> Air scrubbers remove airborne spores throughout the remediation process and continue operating until testing confirms clean air.</li>
              <li><strong>Post-Remediation Verification:</strong> Independent testing confirms successful remediation before restoration work begins.</li>
            </ul>

            <h3>The FCS Mold Remediation Process</h3>
            <p>
              Our remediation follows IICRC S520 standards—the industry reference for professional mold remediation:
            </p>
            <ol>
              <li><strong>Assessment:</strong> Thorough inspection to determine mold extent, species (when needed), and moisture sources. This may include air and surface sampling, moisture mapping, and thermal imaging to locate hidden water.</li>
              <li><strong>Containment:</strong> Affected areas are sealed with polyethylene sheeting. Negative air machines create pressure differentials that prevent spores from spreading to unaffected areas.</li>
              <li><strong>Air Filtration:</strong> HEPA-filtered air scrubbers capture airborne spores throughout the work area, running continuously during remediation.</li>
              <li><strong>Material Removal:</strong> Porous materials with mold growth (drywall, insulation, carpet) are carefully removed and properly disposed. We remove 12-24 inches beyond visible growth to ensure complete removal.</li>
              <li><strong>Cleaning:</strong> Non-porous surfaces are cleaned with appropriate antimicrobial solutions. HEPA vacuuming removes surface spores from structural materials.</li>
              <li><strong>Drying:</strong> Commercial dehumidification and drying equipment reduces moisture levels to prevent recurrence. We monitor until materials reach safe moisture content.</li>
              <li><strong>Post-Remediation Testing:</strong> Independent hygienists verify successful remediation before containment is removed and restoration begins.</li>
              <li><strong>Restoration:</strong> As a licensed general contractor, FCS restores affected areas—replacing drywall, insulation, flooring, and other materials removed during remediation.</li>
            </ol>

            <h3>Commercial Mold Remediation Challenges</h3>
            <p>
              Commercial properties present unique mold remediation challenges that require specialized expertise:
            </p>
            <ul>
              <li><strong>Business Continuity:</strong> Most commercial operations can't simply shut down during remediation. We develop work plans that minimize operational disruption while maintaining proper protocols.</li>
              <li><strong>Complex HVAC Systems:</strong> Commercial HVAC can spread mold spores throughout buildings. We assess and address HVAC contamination as part of comprehensive remediation.</li>
              <li><strong>Multi-Story Buildings:</strong> Mold in wall cavities can affect multiple floors. We trace contamination vertically and horizontally to ensure complete remediation.</li>
              <li><strong>Occupied Spaces:</strong> Commercial remediation often occurs with adjacent spaces occupied. Enhanced containment and monitoring protect building occupants.</li>
              <li><strong>Documentation Requirements:</strong> Commercial properties require detailed documentation for insurance claims, lease obligations, and regulatory compliance.</li>
            </ul>

            <h3>Mold Insurance Claims: What Property Owners Need to Know</h3>
            <p>
              Insurance coverage for mold is one of the most complex areas in property claims. Key considerations include:
            </p>
            <ul>
              <li><strong>Covered Peril Requirement:</strong> Most policies cover mold only when it results from a "covered peril"—like sudden water damage from a pipe burst or hurricane. Mold from long-term leaks, deferred maintenance, or humidity issues is typically excluded.</li>
              <li><strong>Coverage Limits:</strong> Many policies cap mold coverage at $10,000-$50,000, regardless of actual remediation costs. Review your policy limits before a loss occurs.</li>
              <li><strong>Prompt Reporting:</strong> Delays in reporting water damage can give insurers grounds to deny mold claims. Report water intrusion immediately, even if mold hasn't yet appeared.</li>
              <li><strong>Documentation:</strong> Proper documentation of the water source, timeline, and remediation scope is essential for claim approval. FCS provides comprehensive documentation that supports insurance claims.</li>
            </ul>
            <p>
              We help property owners understand their coverage, document claims properly, and navigate the often-complicated mold claim process.
            </p>

            <h3>Preventing Mold Recurrence</h3>
            <p>
              Successful remediation eliminates current mold, but prevention requires addressing underlying moisture issues. FCS identifies and corrects:
            </p>
            <ul>
              <li>Building envelope failures that allow water intrusion</li>
              <li>Plumbing deficiencies and hidden leaks</li>
              <li>HVAC issues affecting humidity control</li>
              <li>Ventilation problems in high-moisture areas</li>
              <li>Drainage and grading issues around foundations</li>
            </ul>
            <p>
              Because we're both remediators and general contractors, we provide complete solutions—from mold removal through the construction work needed to prevent recurrence.
            </p>

            <h3>Tampa Bay Mold Remediation: Local Expertise Matters</h3>
            <p>
              Florida's climate creates mold conditions year-round, not just during storm season. FCS understands the specific challenges Tampa Bay properties face:
            </p>
            <ul>
              <li>Hurricane season water intrusion patterns</li>
              <li>AC system moisture issues common in our climate</li>
              <li>Building code requirements for moisture management</li>
              <li>Local insurance carrier practices for mold claims</li>
              <li>Construction methods appropriate for Florida's humidity</li>
            </ul>
            <p>
              If you've discovered mold or experienced water damage that may lead to mold growth, contact Florida Construction Specialists promptly. Early intervention minimizes damage, reduces remediation costs, and protects building occupants from extended exposure.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Concerned About Mold?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact FCS for professional mold assessment and remediation.
          </p>
          <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
            <Phone className="w-5 h-5" />
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <HighLevelForm variant="commercial" />
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <InternalLinks title="Related Services" links={relatedLinks} />
        </div>
      </section>
    </>
  );
}
