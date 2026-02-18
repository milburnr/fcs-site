import type { Metadata } from "next";
import Image from "next/image";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQ } from "@/components/FAQ";
import { InternalLinks } from "@/components/InternalLinks";
import { HighLevelForm } from "@/components/HighLevelForm";
import { BUSINESS_INFO } from "@/lib/constants";
import { BackToHub } from "@/components/BackToHub";
import { AuthorByline } from "@/components/AuthorByline";
import { CodeReference } from "@/components/CodeReference";
import { ProjectGallery, type GalleryPhoto } from "@/components/ProjectGallery";
import Link from "next/link";
import { Phone, Wind, Shield, Building2, Home, Droplets, AlertTriangle, CheckCircle, Clock, FileText, Users, Award, Hammer } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: 'https://floridaconstructionspecialists.com/insurance/hurricane-restoration/' },
  title: "Hurricane Restoration Tampa | Storm Damage Repair Contractor | FCS",
  description: "Hurricane restoration Tampa Bay: roof repairs, wind damage, flood recovery. Licensed large-loss specialist. 40+ years storm expertise. Call now.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Insurance", href: "/insurance/" },
  { name: "Hurricane Restoration", href: "/insurance/hurricane-restoration/" },
];

const faqs = [
  {
    question: "What types of hurricane damage do you restore?",
    answer: "We restore all hurricane damage including: complete roof systems (shingle, tile, metal, flat/TPO), structural wind damage to walls, framing, and trusses, water intrusion from compromised building envelopes, storm surge and flood damage, window and door replacement, exterior cladding (stucco, siding, fascia), interior water damage and mold remediation, HVAC and electrical systems, and complete building reconstruction when necessary. Our scope ranges from targeted repairs to full demolition and rebuild.",
  },
  {
    question: "How quickly can you respond after a hurricane?",
    answer: "Our response time depends on storm severity and accessibility. For established clients and large commercial properties, we maintain priority response protocols. Typically, we begin damage assessments within 24-72 hours of area accessibility. For the best protection, contact us BEFORE hurricane season to establish a relationship—this ensures you're on our priority list when storms hit and allows us to document your property's pre-storm condition.",
  },
  {
    question: "What makes FCS different from other hurricane restoration contractors?",
    answer: "Three key differentiators: First, we're always the PRIME contractor—never a subcontractor—ensuring single-point accountability. Second, our owner Frank Bragano brings unique dual expertise as both a licensed Executive General Adjuster (former Allstate commercial adjuster) and a 40+ year construction professional. This means we understand both sides of insurance claims. Third, we specialize in large-loss projects ($250K+) where complexity demands experienced project management and substantial bonding capacity.",
  },
  {
    question: "Does my insurance cover hurricane damage?",
    answer: "Florida insurance for hurricane damage is complex. Standard policies typically exclude flood damage (requiring separate NFIP or private flood insurance). Many policies have separate, higher hurricane/wind deductibles (often 2-5% of dwelling value). Named storm exclusions may apply. We help you understand your specific coverage, identify all applicable policies, and ensure your claim captures the full scope of covered damage. We work with public adjusters at VIP Public Adjusters when policyholder representation is needed.",
  },
  {
    question: "What is your hurricane restoration process?",
    answer: "Our comprehensive process: 1) Stabilization—tarping, board-up, water extraction to prevent further damage, 2) Detailed damage assessment with photo/video documentation, 3) Xactimate estimate preparation meeting insurance standards, 4) Coordination with your insurance adjuster and/or public adjuster, 5) Scope agreement and contract execution, 6) Structural repairs and building envelope restoration, 7) MEP (mechanical/electrical/plumbing) systems, 8) Interior finishes and restoration, 9) Final inspection and certificate of completion. We manage the entire process so you don't have to.",
  },
  {
    question: "Can you help negotiate with my insurance company?",
    answer: "Yes—insurance advocacy is central to what we do. We provide detailed Xactimate estimates, meet with adjusters on-site, prepare supplemental claims when damage is underestimated, document hidden damage discovered during repairs, and advocate for proper repair methodologies. For claims requiring formal policyholder representation, we work closely with VIP Public Adjusters. For appraisal disputes, Frank Bragano serves as a qualified appraiser given his Executive General Adjuster credentials.",
  },
  {
    question: "Do you handle commercial hurricane damage?",
    answer: "Commercial properties are our specialty. We have the bonding capacity, workforce depth, and project management expertise for large commercial restoration including: shopping centers and retail, office buildings, condominiums and HOAs, hotels and hospitality, industrial and warehouse facilities, multi-family residential, and institutional buildings. We understand business interruption concerns and work to minimize downtime through phased restoration when possible.",
  },
  {
    question: "What credentials and licenses do you have?",
    answer: "FCS holds Florida Certified Building Contractor license CBC1262722 with full commercial and residential authority. We maintain $5M+ in bonding capacity for large projects. Frank Bragano is a licensed Executive General Adjuster with experience at Allstate (1982-1989) and as a catastrophe adjuster for major carriers. We're Xactimate-certified for insurance estimates. All work is performed by licensed, insured professionals.",
  },
  {
    question: "Should I contact you before or after filing an insurance claim?",
    answer: "Contact us AS SOON AS POSSIBLE after damage occurs—ideally before or immediately after notifying your insurance. Early involvement allows us to: document damage before temporary repairs obscure it, ensure proper mitigation protects your claim, prepare accurate estimates that set appropriate expectations, attend the initial adjuster inspection, and identify coverage issues early. Waiting until after a claim is underpaid makes recovery more difficult.",
  },
  {
    question: "What areas do you serve for hurricane restoration?",
    answer: "We serve the greater Tampa Bay region including Hillsborough County (Tampa, Brandon, Plant City), Pinellas County (St. Petersburg, Clearwater), Pasco County, Manatee County (Bradenton), Sarasota County, and Polk County (Lakeland). For large commercial losses, we extend throughout Florida. Our focus on substantial projects ($250K+) allows us to deploy resources where they're most needed after major storms.",
  },
];

const services = [
  { icon: Wind, title: "Wind Damage Restoration", description: "Complete structural repairs from hurricane-force winds including roof systems, wall framing, trusses, and building envelope restoration." },
  { icon: Home, title: "Roof Repair & Replacement", description: "tarping to full roof replacement—shingle, tile, metal, and flat/TPO systems. Storm-rated products for Florida code compliance." },
  { icon: Droplets, title: "Water Intrusion Repair", description: "Address water damage from roof breaches, wind-driven rain, and flooding. Extraction, drying, mold prevention, and complete restoration." },
  { icon: Building2, title: "Commercial Restoration", description: "Large-scale commercial hurricane restoration with project management minimizing business interruption. Multi-million dollar capability." },
  { icon: Shield, title: "Insurance Claim Support", description: "Xactimate estimates, adjuster meetings, supplemental claims, and coordination with public adjusters when needed." },
];

const processSteps = [
  { step: "2", title: "Damage Documentation", description: "Comprehensive photo/video documentation, moisture mapping, structural assessment." },
  { step: "3", title: "Estimate Preparation", description: "Xactimate estimate meeting insurance industry standards. Line-item detail for full scope." },
  { step: "4", title: "Insurance Coordination", description: "Adjuster meetings, scope negotiations, supplemental claim support as needed." },
  { step: "5", title: "Restoration Execution", description: "Permitted construction with licensed trades. Regular progress updates and quality control." },
  { step: "6", title: "Final Inspection", description: "Punch list completion, final walkthrough, certificate of completion, warranty documentation." },
];

const relatedLinks = [
  { href: "/insurance/", label: "Insurance Services Overview" },
  { href: "/insurance/water-restoration/", label: "Water Damage Restoration" },
  { href: "/insurance/fire-restoration/", label: "Fire Damage Restoration" },
  { href: "/insurance/certified-estimating/", label: "Certified Estimating" },
  { href: "/insurance/appraisal-arbitration/", label: "Appraisal & Arbitration" },
  { href: "/insurance/guides/tampa-insurance-restoration-for-hurricane-damage/", label: "Hurricane Insurance Claims Guide" },
];

const galleryPhotos: GalleryPhoto[] = [
  {
    src: "/images/hurricane-restoration/hurricane-restoration-display.webp",
    caption: "Hurricane wind damage restoration — commercial roof system replacement",
  },
  {
    src: "/images/tampa-hurricane-damage-restoration/tampa-hurricane-damage-restoration-display.webp",
    caption: "Tampa Bay hurricane damage assessment and emergency stabilization",
  },
  {
    src: "/images/hurricane-restoration-construction/hurricane-restoration-construction-display.webp",
    caption: "Post-hurricane structural reconstruction and building envelope repair",
  },
  {
    src: "/images/hurricane-ian/hurricane-ian-display.webp",
    caption: "Hurricane Ian aftermath — large-loss commercial restoration project",
  },
];

// Rotate through hurricane hero images
const heroImages = [
  "/images/florida-hurricane-storm/florida-hurricane-storm-1-1920w.webp",
  "/images/florida-hurricane-storm/florida-hurricane-storm-9-1920w.webp",
  "/images/florida-hurricane-storm/florida-hurricane-storm-5-1920w.webp",
];
const heroImage = heroImages[0]; // Use satellite hurricane image

export default function HurricaneRestorationPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Hurricane and Storm Damage Restoration"
        serviceDescription="Complete hurricane and storm damage restoration for Tampa Bay commercial and residential properties. storm response, insurance claim support, and full reconstruction. Licensed CBC with 40+ years experience."
        minPrice="50000"
      serviceCategories={["Wind Damage Repair","Roof Restoration","Water Intrusion Repair","Emergency Board-Up"]}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero Section with Image */}
      <section className="relative text-white py-24 md:py-32 min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Florida hurricane satellite view - FCS storm damage restoration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={breadcrumbItems} className="mb-8 text-gray-300" />
          <BackToHub silo="commercial" customHubTitle="Insurance Services" customHubHref="/insurance/" />
          <AuthorByline variant="light" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 px-4 py-2 rounded-full mb-6">
              <Wind className="w-5 h-5 text-red-300" />
              <span className="text-red-200 font-medium">Tampa Bay Hurricane Specialists Since 1982</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hurricane & Storm Damage Restoration
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              When hurricanes devastate your property, you need a contractor who understands both construction AND insurance. 
              FCS has been restoring Tampa Bay after every major storm for over 40 years—as prime contractor, never a sub.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5" />
                urgent: {BUSINESS_INFO.phone}
              </a>
              <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30">
                Request Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-green-dark">40+</div>
              <div className="text-gray-600 text-sm">Years in Tampa Bay</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green-dark">$25M+</div>
              <div className="text-gray-600 text-sm">Storm Claims Handled</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green-dark">100%</div>
              <div className="text-gray-600 text-sm">Prime Contractor</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green-dark">CBC</div>
              <div className="text-gray-600 text-sm">Licensed & Bonded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Hurricane Restoration Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From storm response to final reconstruction—we handle every aspect of hurricane damage restoration for commercial and residential properties.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FCS Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Tampa Bay Trusts FCS After Hurricanes
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                When your property is damaged by a hurricane, you're dealing with two complex challenges simultaneously: 
                major construction and insurance claims. Most contractors only understand one side. FCS understands both.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Dual Insurance & Construction Expertise</h3>
                    <p className="text-gray-600">
                      Frank Bragano served as a Commercial Property Adjuster for Allstate (1982-1989) before becoming a licensed Executive General Adjuster. 
                      Combined with 40+ years of construction experience, he understands exactly how insurance claims should be documented and valued.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Always Prime Contractor</h3>
                    <p className="text-gray-600">
                      We never work as a subcontractor. This means single-point accountability, direct communication, 
                      and our full resources committed to your project—not split between a GC and their priorities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Public Adjuster Partnership</h3>
                    <p className="text-gray-600">
                      When policyholder representation is needed, we work with VIP Public Adjusters. 
                      This partnership ensures your interests are protected throughout the claim process while we focus on quality restoration.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                    <Hammer className="w-6 h-6 text-brand-green-dark" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Large Loss Specialists</h3>
                    <p className="text-gray-600">
                      We focus on substantial projects—typically $500,000 and above. This means commercial properties,
                      multi-family buildings, and significant residential damage. Our bonding capacity and resources match the scale of major hurricane restoration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-8">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Restoration Process</h3>
                <div className="space-y-4">
                  {processSteps.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-brand-green-dark rounded-full flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Tampa Bay's Hurricane Restoration Experts</h2>
            <p>
              Living in Tampa Bay means living with hurricane risk. From June through November, every property owner
              knows the threat is real. When storms strike—whether it's a direct hit or a near miss that still causes
              significant damage—you need a contractor who can restore your property properly while navigating the
              complex insurance landscape.
            </p>
            <p>
              Florida Construction Specialists has been that contractor for Tampa Bay since 1982. We've restored
              properties after Hurricane Elena (1985), the No-Name Storm (1993), Hurricane Frances and Jeanne (2004),
              Hurricane Charley (2004), Hurricane Irma (2017), Hurricane Michael (2018), and countless other named
              and unnamed storms that have impacted our region. Our hurricane restoration projects range from $500,000
              single-building roof replacements to $15 million+ multi-building condominium restorations—including
              100+ unit condo re-roofing and envelope repairs, and commercial facilities requiring 50,000+ sq ft
              of roof system replacement. Our bonding capacity supports projects exceeding $10 million without
              subcontractor dependency.
            </p>

            <h3>Understanding Hurricane Damage</h3>
            <p>
              Hurricane damage is rarely simple. A single storm can cause multiple types of damage that interact 
              in complex ways:
            </p>
            <ul>
              <li><strong>Wind damage</strong> to roofs, windows, doors, and structural elements</li>
              <li><strong>Water intrusion</strong> through compromised building envelopes</li>
              <li><strong>Flood damage</strong> from storm surge or inland flooding (often requiring separate insurance)</li>
              <li><strong>Debris impact</strong> from flying objects and fallen trees</li>
              <li><strong>Secondary damage</strong> including mold, rot, and structural degradation if not addressed quickly</li>
            </ul>
            <p>
              Proper restoration requires understanding how these damage types interact and ensuring all damage—including 
              hidden damage—is identified, documented, and repaired.
            </p>

            <h3>The Insurance Challenge</h3>
            <p>
              Hurricane claims in Florida are among the most complex and contested insurance matters. Carriers face 
              massive exposure after major storms and scrutinize claims carefully. Common challenges include:
            </p>
            <ul>
              <li>Disputes over whether damage was caused by wind (covered) or flood (often excluded)</li>
              <li>High hurricane deductibles (typically 2-5% of dwelling value)</li>
              <li>Depreciation disputes on building materials</li>
              <li>Scope disagreements about what repairs are actually needed</li>
              <li>Code upgrade coverage questions</li>
              <li>Pre-existing condition allegations</li>
            </ul>
            <p>
              This is where FCS's dual expertise becomes invaluable. Our owner's background as both an insurance
              adjuster and construction professional means we know how to document damage, prepare estimates, and
              advocate for proper repair scope—in the language insurance companies understand.
            </p>

            <h3>Hurricane-Specific Insurance and Code Complexities</h3>
            <p>
              Hurricane claims carry unique complexities that fire and water losses do not. Named storm deductibles
              operate differently from standard deductibles—typically calculated as 2-5% of the total insured value
              rather than a flat dollar amount. For a commercial property insured at $5 million, that means a
              $100,000-$250,000 deductible before coverage begins. FCS helps property owners understand these
              thresholds and document damage thoroughly to maximize recoverable value above the deductible.
            </p>
            <p>
              Wind damage and flood damage are covered by entirely separate insurance programs. Standard windstorm
              policies cover roof damage, structural wind loads, and wind-driven rain intrusion. However, storm
              surge and rising water require separate National Flood Insurance Program (NFIP) or private flood
              policies—and many property owners discover too late that their flood coverage is inadequate. After a
              hurricane, determining which damage was caused by wind versus surge is critical to claim routing, and
              FCS's damage documentation distinguishes between these mechanisms for accurate carrier assignment.
            </p>
            <p>
              FEMA's Substantial Damage Rule adds another layer: when hurricane damage exceeds 50% of a building's
              pre-storm market value, the entire structure must be brought into compliance with current Florida
              Building Code—not just the damaged portions. This triggers wind load upgrades, elevation certificate
              requirements, and post-hurricane surge zone reassessment that can significantly expand project scope.
              FCS works with dedicated engineering partners to evaluate substantial damage determinations and ensure
              that all code-triggered upgrades are captured in the insurance claim. Our first response includes
              emergency roof tarping and board-up to prevent secondary damage while claims are processed—stabilization
              that protects both the property and the policyholder's coverage position.
            </p>

            <h3>Prepare Before the Storm</h3>
            <p>
              The best time to establish a relationship with a restoration contractor is BEFORE you need one. 
              We encourage property owners—especially commercial property managers and HOA boards—to contact us 
              before hurricane season to:
            </p>
            <ul>
              <li>Document your property's current condition</li>
              <li>Review your insurance coverage and identify gaps</li>
              <li>Establish priority response status</li>
              <li>Understand the restoration process before you're in crisis mode</li>
            </ul>
            <p>
              When a hurricane is bearing down on Tampa Bay, everyone calls their contractor. Those with established 
              relationships get priority response. Don't wait until you're competing with thousands of other 
              desperate property owners.
            </p>
          </div>
        </div>
      </section>

      {/* Florida Building Code Reference */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <CodeReference
              code="Florida Building Code 8th Edition (2023)"
              section="Section 1609 — Wind Loads"
              description="All structural repairs after hurricane damage must meet current Florida Building Code wind load requirements. Tampa Bay properties require design for 150-170 mph wind speeds depending on proximity to the coast. FCS ensures all hurricane restoration work meets or exceeds these requirements, even when the original structure was built to older, lower standards."
              link="https://www.floridabuilding.org/fbc/thecode/3_FBC-8th-Edition-2023-Code-and-Commentary.htm"
              linkText="View Florida Building Code"
            />
          </div>
        </div>
      </section>

      {/* Hurricane Restoration Gallery */}
      <ProjectGallery photos={galleryPhotos} title="Hurricane Restoration Projects" />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hurricane Damage? Don't Wait.</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Every day without proper mitigation can worsen damage and complicate your insurance claim. 
            Contact FCS now for storm response and damage assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg">
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="/contact/" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border border-white/30">
              Request Consultation
            </Link>
          </div>
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
