import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ArrowRight, Building2, Shield, Award, DollarSign, Wrench, Clock, FileText, TrendingUp } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { FAQWithSchema } from "@/components/FAQ";
import { LocalBusinessSchema, ServiceSchema, BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Condo Structural Reserve Study Repairs | SIRS Capital Projects | FCS Tampa Bay",
  description: "Expert planning and execution of major condo capital projects identified in Structural Integrity Reserve Studies. Roof replacement, concrete restoration, waterproofing, and more throughout Tampa Bay.",
  keywords: "structural integrity reserve study repairs, SIRS repairs florida, condo reserve fund repairs, florida condo capital improvements, condo structural repairs tampa",
};

const capitalProjectTypes = [
  "Roof replacement and restoration",
  "Structural concrete restoration",
  "Building envelope waterproofing",
  "Plumbing system replacement",
  "Electrical system upgrades",
  "Fire protection modernization",
  "Window and door replacement",
  "Parking structure rehabilitation",
];

const faqs = [
  {
    question: "How do we know if our reserve study is accurate?",
    answer: "A quality SIRS should be prepared by a licensed Florida engineer or architect who physically inspects the building—not just reviews documents. Look for detailed component condition assessments, realistic remaining useful life estimates, and replacement costs based on current Tampa Bay market rates. If your study seems to underestimate costs or overestimate component life, consider getting a second opinion before major decisions.",
  },
  {
    question: "Can we defer some repairs to spread costs over more years?",
    answer: "Strategic deferral is possible for some items, but others cannot safely wait. Your SIRS will indicate remaining useful life for each component. Items past their useful life or showing active deterioration should not be deferred. We can help you develop a phased approach that addresses critical items first while creating a realistic timeline for less urgent repairs—all while maintaining compliance.",
  },
  {
    question: "What if our contractor finds more damage than expected during repairs?",
    answer: "This is common, especially with concrete restoration where hidden damage isn't visible until demolition begins. Quality contracts include provisions for change orders and unforeseen conditions. FCS provides detailed initial assessments to minimize surprises, but we also recommend budgeting a 10-15% contingency for capital projects. We communicate immediately when additional issues are discovered.",
  },
  {
    question: "How long do major capital projects typically take?",
    answer: "Timelines vary significantly by scope. Roof replacement for a mid-rise: 2-4 months. Building-wide concrete restoration: 6-18 months. Complete plumbing re-pipe: 4-8 months. Waterproofing/coating: 2-4 months. Most large condo projects are phased to minimize disruption, which extends overall timeline but allows residents to remain in place. We provide detailed schedules during pre-construction.",
  },
  {
    question: "What warranties should we expect for major capital improvements?",
    answer: "Warranties vary by project type. Roofing typically carries 20-30 year manufacturer warranties plus 1-2 year workmanship. Concrete repairs: 5-10 year material warranties, 1-2 year workmanship. Waterproofing: 5-15 year system warranties. Plumbing: varies by material (50+ years for PVC/CPVC). FCS provides clear warranty documentation and assists with warranty claims if issues arise.",
  },
  {
    question: "Should we use the same contractor for all SIRS repairs or bid each separately?",
    answer: "Both approaches have merit. A single contractor provides continuity, simplified coordination, and often better pricing through volume. Separate bidding may yield lower prices for specific trades but creates coordination challenges. For buildings with multiple major projects, we recommend a phased master agreement with FCS—you get competitive pricing, consistent quality, and a partner who knows your building's needs over time.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "SIRS Repairs", href: "/condo-structural-reserve-study-repairs/" },
];

const internalLinks = [
  { href: "/condo-milestone-inspection-remediation/", label: "Milestone Inspection Remediation" },
  { href: "/sb-4-d-compliance-tampa-bay-condos/", label: "SB 4-D Compliance Guide" },
  { href: "/balcony-reconstruction/", label: "Balcony Reconstruction" },
  { href: "/exterior-waterproofing/", label: "Exterior Waterproofing" },
  { href: "/commercial-construction/", label: "Commercial Construction" },
  { href: "/contact/", label: "Request Consultation" },
];

export default function SIRSRepairsPage() {
  return (
    <>
      <LocalBusinessSchema service="Condo Capital Project Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Structural Reserve Study Repairs"
        serviceDescription="Expert planning and execution of major condo capital projects identified in Structural Integrity Reserve Studies. Roof replacement, concrete restoration, waterproofing, plumbing, electrical, and more throughout Tampa Bay."
        minPrice="250000"
      />

      <Breadcrumb items={[
        { name: "Services", href: "/services/" },
        { name: "SIRS Repairs", href: "/condo-structural-reserve-study-repairs/" },
      ]} />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wp-content/uploads/2023/12/FCS-commercial-project.webp"
            alt="Condo capital improvement construction project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full mb-4">
              <span className="text-brand-gold font-semibold">SIRS Capital Project Specialists</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Condo Structural Reserve Study Repairs
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Your SIRS identified millions in upcoming repairs. Now you need a contractor who can plan, phase, and execute major capital projects—without disrupting your residents or breaking your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-cta">
                Plan Your Capital Project
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
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">In-House Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">$25M+ Completed Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-brand-green" />
              <span className="font-semibold text-gray-700">Prime Contractor Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Your SIRS Report */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Your SIRS Report
            </h2>
            <p className="text-gray-600 mb-8">
              Your Structural Integrity Reserve Study (SIRS) is more than a compliance document—it's a roadmap for your building's next decade of major capital improvements. Understanding what it tells you is the first step toward smart project planning.
            </p>

            {/* 8 Components */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                The 8 Required SIRS Components
              </h3>
              <p className="text-gray-600 mb-4">
                Florida law requires your SIRS to address funding for these specific building systems. Starting January 1, 2026, reserves for these items cannot be waived:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { num: "1", name: "Roof", desc: "Replacement and major repair costs" },
                  { num: "2", name: "Structural Systems", desc: "Load-bearing walls, floor foundations, primary structural members" },
                  { num: "3", name: "Fireproofing & Fire Protection", desc: "Sprinklers, alarms, fire-rated assemblies" },
                  { num: "4", name: "Plumbing", desc: "Main lines, risers, and common element piping" },
                  { num: "5", name: "Electrical Systems", desc: "Main panels and common area wiring" },
                  { num: "6", name: "Waterproofing & Exterior Painting", desc: "Building envelope protection" },
                  { num: "7", name: "Windows & Exterior Doors", desc: "Common element windows, sliding doors" },
                  { num: "8", name: "Items Over $25,000", desc: "Any component affecting structural integrity" },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-3 bg-white rounded-lg p-3">
                    <div className="w-6 h-6 bg-brand-green text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.num}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-green-dark text-sm">{item.name}</p>
                      <p className="text-gray-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reading the Numbers */}
            <h3 className="text-xl font-bold text-brand-green-dark mb-4">Reading the Numbers in Your SIRS</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border rounded-xl p-5">
                <Clock className="w-8 h-8 text-brand-green mb-3" />
                <h4 className="font-bold text-brand-green-dark mb-2">Remaining Useful Life (RUL)</h4>
                <p className="text-gray-600 text-sm">
                  How many years until a component needs replacement. RUL of 0-5 years means action is needed soon. Negative RUL means the component is past due.
                </p>
              </div>
              <div className="bg-white border rounded-xl p-5">
                <DollarSign className="w-8 h-8 text-brand-green mb-3" />
                <h4 className="font-bold text-brand-green-dark mb-2">Replacement Cost</h4>
                <p className="text-gray-600 text-sm">
                  The estimated cost to replace each component at current prices. Check that costs reflect Tampa Bay market rates—national averages may underestimate.
                </p>
              </div>
              <div className="bg-white border rounded-xl p-5">
                <TrendingUp className="w-8 h-8 text-brand-green mb-3" />
                <h4 className="font-bold text-brand-green-dark mb-2">Annual Contribution</h4>
                <p className="text-gray-600 text-sm">
                  What the association must set aside yearly to fund future replacements. This becomes your minimum required reserve funding starting 2026.
                </p>
              </div>
            </div>

            {/* Prioritizing Repairs */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h3 className="font-bold text-amber-800 mb-3">Prioritizing SIRS Repairs</h3>
              <p className="text-amber-700 mb-3">
                Not all items are equally urgent. Work with your engineer and contractor to categorize repairs:
              </p>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-start gap-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded mt-0.5">Critical</span>
                  <span>Safety issues, active water intrusion, structural concerns—address immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-amber-500 text-white text-xs px-2 py-0.5 rounded mt-0.5">Near-Term</span>
                  <span>Components at or past useful life, showing deterioration—plan within 1-2 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded mt-0.5">Planned</span>
                  <span>Items with 3-10 years remaining—include in long-term capital plan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Major Repair Categories */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Major Repair Categories for Tampa Bay Condos
          </h2>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Image for section */}
            <div className="mb-8">
              <Image
                src="/wp-content/uploads/2024/01/m88.jpg"
                alt="Commercial building construction site with crane and excavator working on concrete structure"
                width={1000}
                height={500}
                className="rounded-lg w-full object-cover"
              />
            </div>
            
            {/* Roof */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-brand-green p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Roof Replacement & Restoration</h3>
                  <p className="text-green-100 text-sm mb-4">SIRS Component #1</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Typical Life:</strong> 15-30 years</p>
                    <p><strong>Cost Range:</strong> $8-15/SF</p>
                    <p><strong>Timeline:</strong> 2-4 months</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="font-bold text-brand-green-dark mb-3">Florida Roofing Challenges</h4>
                  <p className="text-gray-600 mb-4">
                    Tampa Bay roofs face hurricanes, UV exposure, heavy rain, and extreme heat cycling. Most SIRS reports identify roof replacement as one of the largest capital expenses.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Options Include:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Full tear-off and replacement</li>
                        <li>• Roof restoration coating systems</li>
                        <li>• Modified bitumen systems</li>
                        <li>• TPO/EPDM membrane systems</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">FCS Provides:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Hurricane code compliance</li>
                        <li>• 20-30 year warranty systems</li>
                        <li>• Coordination with waterproofing</li>
                        <li>• Minimal resident disruption</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Structural Concrete */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-brand-green p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Structural Concrete Repairs</h3>
                  <p className="text-green-100 text-sm mb-4">SIRS Component #2</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Cost Range:</strong> $50-200/SF</p>
                    <p><strong>Timeline:</strong> 6-18 months</p>
                    <p><strong>Complexity:</strong> High</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="font-bold text-brand-green-dark mb-3">Why Tampa Bay Buildings Need Concrete Work</h4>
                  <p className="text-gray-600 mb-4">
                    Salt air, moisture intrusion, and chloride contamination cause reinforcing steel to corrode, leading to spalling, cracking, and structural concerns. Buildings from the 1970s-1990s are particularly susceptible.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Common Issues:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Spalling with exposed rebar</li>
                        <li>• Carbonation deterioration</li>
                        <li>• Post-tension cable corrosion</li>
                        <li>• Foundation/pile cap damage</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Repair Methods:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Patch and repair</li>
                        <li>• Section removal/replacement</li>
                        <li>• Cathodic protection</li>
                        <li>• Protective coating systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Waterproofing */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-brand-green p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Building Envelope Waterproofing</h3>
                  <p className="text-green-100 text-sm mb-4">SIRS Component #6</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Typical Life:</strong> 10-20 years</p>
                    <p><strong>Cost Range:</strong> $5-20/SF</p>
                    <p><strong>Timeline:</strong> 2-4 months</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="font-bold text-brand-green-dark mb-3">Florida Climate Protection</h4>
                  <p className="text-gray-600 mb-4">
                    The building envelope is your first defense against water intrusion. Failed coatings and sealants lead to interior damage, mold, and accelerated structural deterioration.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Systems Include:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Elastomeric wall coatings</li>
                        <li>• Joint sealant replacement</li>
                        <li>• Below-grade waterproofing</li>
                        <li>• Deck and balcony membranes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Products We Use:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Sika waterproofing systems</li>
                        <li>• BASF wall coatings</li>
                        <li>• Tremco sealants</li>
                        <li>• 5-15 year warranties</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plumbing */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-brand-green p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Plumbing System Replacement</h3>
                  <p className="text-green-100 text-sm mb-4">SIRS Component #4</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Typical Life:</strong> 40-60 years</p>
                    <p><strong>Cost Range:</strong> $5,000-15,000/unit</p>
                    <p><strong>Timeline:</strong> 4-8 months</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="font-bold text-brand-green-dark mb-3">Cast Iron to PVC Conversion</h4>
                  <p className="text-gray-600 mb-4">
                    Many Tampa Bay condos built before 1980 have cast iron drain lines that are now failing. Re-piping is one of the most disruptive but necessary capital projects.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Project Scope:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Riser replacement</li>
                        <li>• Horizontal branch lines</li>
                        <li>• Common area piping</li>
                        <li>• Water service lines</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">FCS Approach:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Stack-by-stack phasing</li>
                        <li>• Minimize unit access time</li>
                        <li>• Coordinate with residents</li>
                        <li>• Proper ceiling/wall restoration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Electrical */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-brand-green p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Electrical System Upgrades</h3>
                  <p className="text-green-100 text-sm mb-4">SIRS Component #5</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Typical Life:</strong> 30-50 years</p>
                    <p><strong>Cost Range:</strong> $500K-2M+</p>
                    <p><strong>Timeline:</strong> 3-6 months</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="font-bold text-brand-green-dark mb-3">Modernization and Code Compliance</h4>
                  <p className="text-gray-600 mb-4">
                    Older electrical systems may lack capacity for modern demands or fail to meet current code requirements. Upgrades improve safety and support amenities like EV charging.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Common Projects:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Main service upgrades</li>
                        <li>• Panel replacements</li>
                        <li>• Common area rewiring</li>
                        <li>• Lighting modernization</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Future-Ready:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• EV charging infrastructure</li>
                        <li>• Generator connections</li>
                        <li>• Smart building systems</li>
                        <li>• Energy efficiency upgrades</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fire Protection */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-brand-green p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Fire Protection & Life Safety</h3>
                  <p className="text-green-100 text-sm mb-4">SIRS Component #3</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Typical Life:</strong> 25-50 years</p>
                    <p><strong>Cost Range:</strong> $200K-1M+</p>
                    <p><strong>Timeline:</strong> 2-4 months</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h4 className="font-bold text-brand-green-dark mb-3">NFPA Compliance and Modernization</h4>
                  <p className="text-gray-600 mb-4">
                    Fire protection systems must meet current NFPA codes. Older sprinkler systems, outdated alarms, and inadequate emergency lighting are common SIRS findings.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Systems Covered:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Fire sprinkler systems</li>
                        <li>• Fire alarm upgrades</li>
                        <li>• Emergency lighting</li>
                        <li>• Exit signage</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Compliance:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• NFPA 13 sprinkler standards</li>
                        <li>• NFPA 72 alarm requirements</li>
                        <li>• ADA egress compliance</li>
                        <li>• Annual inspection coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Your Capital Project */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            Planning Your Capital Improvement Project
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 flex items-center gap-2">
                  <Wrench className="w-6 h-6" />
                  Project Planning Steps
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Engineering Assessment",
                      desc: "Start with a detailed engineering scope that goes beyond your SIRS. Identify exact repair quantities and methods.",
                    },
                    {
                      step: "2",
                      title: "Multiple Contractor Bids",
                      desc: "Get at least 3 qualified bids. Ensure contractors are bidding the same scope for accurate comparison.",
                    },
                    {
                      step: "3",
                      title: "Phasing Strategy",
                      desc: "For occupied buildings, develop a phasing plan that maintains resident safety and minimizes disruption.",
                    },
                    {
                      step: "4",
                      title: "Resident Communication",
                      desc: "Develop a communication plan before construction begins. Informed residents are cooperative residents.",
                    },
                    {
                      step: "5",
                      title: "Temporary Accommodations",
                      desc: "For disruptive work (plumbing, major structural), plan for temporary water shutoffs or unit access.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-green-dark">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-brand-green-dark mb-4">
                  General Contractor vs. Construction Manager
                </h3>
                <p className="text-gray-600 mb-4">
                  For projects under $2M, a qualified general contractor like FCS typically provides the best value. We manage all subcontractors, permitting, and coordination.
                </p>
                <p className="text-gray-600 mb-4">
                  For larger, multi-phase programs ($5M+), some associations hire a separate construction manager or owner's representative. FCS can work in either model.
                </p>
                <div className="bg-white rounded-lg p-4 border-l-4 border-brand-green">
                  <p className="text-sm text-gray-700">
                    <strong>FCS Advantage:</strong> As a prime contractor with full project management capabilities, we often eliminate the need for separate construction management—saving associations 3-5% on overall project costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <DollarSign className="w-8 h-8 text-brand-green" />
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading">
              Financing Major SIRS Repairs
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-center mb-8">
              Funding multi-million dollar capital projects is the biggest challenge many condo boards face. Here are the primary options and their trade-offs:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Special Assessments */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Special Assessments
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Direct billing to unit owners, typically based on ownership percentage. Can be structured as lump sum or spread over 12-24 months.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>No interest costs</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Fastest funding method</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-700">
                    <span className="w-4 h-4 text-center">✗</span>
                    <span>Can strain owner finances</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-700">
                    <span className="w-4 h-4 text-center">✗</span>
                    <span>Collection challenges possible</span>
                  </div>
                </div>
              </div>

              {/* Bank Loans */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Bank Loans / Lines of Credit
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Association borrows funds and repays through increased monthly assessments over 5-15 years.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Spreads cost over time</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>More affordable monthly payments</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-700">
                    <span className="w-4 h-4 text-center">✗</span>
                    <span>Interest adds 15-30% to cost</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-700">
                    <span className="w-4 h-4 text-center">✗</span>
                    <span>Lender approval required</span>
                  </div>
                </div>
              </div>

              {/* Fannie/FHA Impact */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Fannie Mae / FHA Considerations
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Non-compliant or under-reserved buildings may lose Fannie Mae certification, impacting unit owners' ability to sell or refinance.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-amber-700">
                    <span className="w-4 h-4 text-center">⚠</span>
                    <span>Deferred maintenance disqualifies buildings</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-700">
                    <span className="w-4 h-4 text-center">⚠</span>
                    <span>Inadequate reserves cause issues</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Completing repairs helps restore eligibility</span>
                  </div>
                </div>
              </div>

              {/* Reserve Fund Increase */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-green-dark mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Reserve Contribution Increases
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Starting January 2026, associations must fully fund SIRS reserves. Monthly assessment increases are likely for most buildings.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-amber-700">
                    <span className="w-4 h-4 text-center">⚠</span>
                    <span>No more reserve waivers for structural items</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-700">
                    <span className="w-4 h-4 text-center">⚠</span>
                    <span>Many associations are significantly underfunded</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Proper funding prevents future special assessments</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-green-bg rounded-xl p-6">
              <h3 className="font-bold text-brand-green-dark mb-3 text-center">FCS Flexible Payment Structures</h3>
              <p className="text-gray-700 text-center">
                We understand the financial challenges associations face. FCS can structure project payments to align with special assessment collection schedules, reducing the need for bridge financing. Contact us to discuss payment options for your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why FCS */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                The FCS Approach to Condo Capital Projects
              </h2>
              <p className="text-gray-600 mb-6">
                Managing multi-million dollar capital projects in occupied buildings requires more than construction skills. It requires communication, coordination, and a genuine understanding of how condo associations work.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Commercial Expertise, Not Residential",
                    desc: "Our $25M+ track record is in large-scale commercial and multi-family projects. We're not a residential contractor trying to scale up.",
                  },
                  {
                    title: "Single Point of Accountability",
                    desc: "As prime contractor, FCS is responsible for everything—subcontractors, permitting, timeline, quality. One call solves any issue.",
                  },
                  {
                    title: "Occupied Building Specialists",
                    desc: "We've completed dozens of projects in occupied condos. We know how to phase work, communicate with residents, and minimize disruption.",
                  },
                  {
                    title: "Engineering Collaboration",
                    desc: "We work with your SIRS engineer—not against them. Seamless coordination means better outcomes and fewer surprises.",
                  },
                  {
                    title: "Tampa Bay Local Knowledge",
                    desc: "Based in Ruskin, we know Hillsborough and Pinellas building departments, local codes, and Tampa Bay construction realities.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-brand-green-dark">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6">
                Capital Project Services Include:
              </h3>
              <ul className="space-y-3">
                {capitalProjectTypes.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t">
                <Link
                  href="/contact/"
                  className="btn-cta w-full text-center"
                >
                  Discuss Your Capital Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks 
            title="Related Condo Resources" 
            links={internalLinks} 
          />
        </div>
      </section>

      {/* FAQ */}
      <FAQWithSchema 
        items={faqs} 
        title="SIRS Repairs FAQs" 
        description="Common questions about planning and executing condo capital improvement projects"
      />

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Plan Your SIRS Capital Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists offers complimentary capital project consultations for Tampa Bay condo associations. We'll review your SIRS, discuss priorities, and outline a realistic project approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Project Consultation
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
