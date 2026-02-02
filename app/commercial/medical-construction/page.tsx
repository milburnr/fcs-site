import type { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  CheckCircle,
  Shield,
  ClipboardCheck,
  ArrowRight,
  Phone,
  HelpCircle,
  Building2,
  Thermometer,
  Zap,
  Wind,
  Lock,
  AlertTriangle,
  Clock,
  FileCheck,
  Users,
  Hammer,
  HeartPulse,
  Syringe,
  Activity,
  Pill,
  Eye,
  Bone,
  Cross,
} from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BackToHub } from "@/components/BackToHub";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Medical Facility Construction Tampa | AHCA Compliant Healthcare Builder | FCS",
  description:
    "Expert medical facility construction in Tampa Bay. AHCA compliant healthcare construction, clean rooms, medical gas systems, hospital renovations. 40+ years experience building medical offices, surgical centers, and healthcare facilities across Florida.",
  keywords:
    "medical facility construction Tampa, healthcare construction Florida, AHCA compliant construction, medical office construction Tampa Bay, hospital construction contractor, surgical center construction, clean room construction, medical gas installation",
  openGraph: {
    title: "Medical Facility Construction Tampa | AHCA Compliant Healthcare Builder",
    description: "Expert medical facility construction in Tampa Bay. AHCA compliant healthcare construction, clean rooms, medical gas systems. 40+ years experience.",
    type: "website",
  },
};

const features = [
  {
    title: "AHCA Compliance Expertise",
    description: "Complete understanding of Agency for Health Care Administration requirements. We navigate the licensing process from pre-construction meetings through final inspections.",
    icon: ClipboardCheck,
  },
  {
    title: "Medical Gas Systems",
    description: "ASSE 6000 certified medical gas piping installation including oxygen, nitrogen, medical air, vacuum, and specialty gas systems per NFPA 99 standards.",
    icon: Shield,
  },
  {
    title: "Clean Room Construction",
    description: "ISO-classified clean room environments for surgical suites, compounding pharmacies, laboratories, and sterile processing departments.",
    icon: CheckCircle,
  },
  {
    title: "Infection Control Protocols",
    description: "ICRA-trained teams with proven protocols for construction in occupied healthcare facilities without compromising patient safety.",
    icon: Stethoscope,
  },
];

const facilityTypes = [
  { name: "Hospitals & Medical Centers", icon: Building2 },
  { name: "Ambulatory Surgery Centers", icon: Syringe },
  { name: "Medical Office Buildings", icon: HeartPulse },
  { name: "Urgent Care Facilities", icon: Activity },
  { name: "Dental & Specialty Clinics", icon: Cross },
  { name: "Diagnostic Imaging Centers", icon: Eye },
  { name: "Rehabilitation Facilities", icon: Bone },
  { name: "Pharmacy & Retail Healthcare", icon: Pill },
];

const faqs = [
  {
    question: "What AHCA requirements apply to medical construction in Florida?",
    answer:
      "The Agency for Health Care Administration (AHCA) requires licensed healthcare facilities to meet specific construction standards under Florida Administrative Code 59A. This includes proper HVAC with specific air change requirements (typically 6-25 ACH depending on space type), infection control barriers during construction (ICRA), medical gas system certifications, emergency power systems meeting NFPA 110, and accessibility compliance under ADA and Florida Building Code. AHCA requires plan review before construction begins, and facilities cannot operate until AHCA issues a license following construction inspections. FCS coordinates AHCA pre-construction meetings and ensures all inspections are scheduled and passed for timely licensure.",
  },
  {
    question: "How long does medical facility construction take?",
    answer:
      "Typical medical construction timelines vary by facility complexity. Simple physician offices may complete in 10-12 weeks. Medical office buildings with multiple suites typically require 4-6 months. Urgent care centers average 3-4 months. Surgical centers with clean rooms and medical gas systems require 6-9 months. Hospital renovations can take 12-18 months depending on scope and phasing requirements. AHCA licensing inspections, equipment installation, and commissioning often extend timelines by 2-4 weeks. We provide detailed CPM schedules that account for permitting, construction, equipment procurement, and regulatory approvals.",
  },
  {
    question: "What is clean room construction and does my facility need it?",
    answer:
      "Clean rooms are controlled environments that limit airborne particles, temperature, and humidity to specific levels. They're classified by ISO standards from ISO 1 (cleanest) to ISO 9. Healthcare applications typically require ISO 5-8. Operating rooms usually need ISO 7, compounding pharmacies require ISO 5-7, and laboratories vary from ISO 6-8. Clean room construction requires sealed surfaces, HEPA filtration (99.97% efficiency at 0.3 microns), positive or negative pressure differentials, specialized finishes, and proper gowning areas. Not all medical facilities need clean rooms—general medical offices, most dental offices, and standard examination rooms don't require clean room classification. We help determine requirements based on your services and regulatory requirements.",
  },
  {
    question: "Can you renovate while my medical practice remains operational?",
    answer:
      "Yes, we specialize in phased construction in occupied medical facilities. This requires comprehensive ICRA (Infection Control Risk Assessment) protocols. We construct sealed barriers from floor to ceiling deck, maintain negative air pressure in construction zones (verified by continuous monitoring), create dedicated entry/exit paths for workers away from patient areas, and deploy HEPA air scrubbers. We coordinate with your operations to schedule demolition and noisy work during off-hours or weekends. For hospitals, we work with infection control nurses to ensure compliance with Joint Commission standards. Patient and staff safety is never compromised during construction.",
  },
  {
    question: "What medical gas systems do you install?",
    answer:
      "FCS installs complete medical gas piping systems including oxygen (O2), medical air, nitrogen (N2), nitrous oxide (N2O), carbon dioxide (CO2), WAGD (waste anesthetic gas disposal), and vacuum systems. Our ASSE 6010/6020/6030 certified installers follow NFPA 99 Health Care Facilities Code and CGA standards. All systems include zone valve boxes for area isolation, area alarm panels, master alarms at the nurse station, and proper labeling per CGA C-9. We coordinate with medical equipment vendors, perform required testing including standing pressure tests (24-hour), cross-connection tests, and gas purity verification before AHCA inspection.",
  },
  {
    question: "How much does medical construction cost per square foot?",
    answer:
      "Medical construction costs in Tampa Bay vary significantly by facility type and complexity. General medical offices: $175-275/SF. Dental offices with operatories: $225-375/SF. Urgent care centers: $275-425/SF. Ambulatory surgery centers: $425-650/SF. Diagnostic imaging centers (with radiation shielding): $325-525/SF. Hospital renovations: $350-600/SF. These ranges include typical finishes, medical-grade HVAC, plumbing for medical fixtures, and basic medical infrastructure. Clean rooms add $150-300/SF depending on ISO classification. Medical gas systems add $25-75/SF. Specialized equipment foundations and shielding are additional. We provide detailed estimates based on your specific program and equipment requirements.",
  },
  {
    question: "What permits are required for medical facility construction in Florida?",
    answer:
      "Medical construction requires multiple permits at both local and state levels. Local permits include building permits, mechanical permits (HVAC), electrical permits, plumbing permits, and fire protection permits. State-level requirements include AHCA plan review and approval for licensed facilities, which must be obtained before local building permits in most jurisdictions. Additional permits may include DEP permits for medical waste, radiation machine registration with the Florida Department of Health for imaging equipment, and fire marshal approval for certain facility types. FCS manages the complete permitting process, coordinating with local building departments, AHCA, and other regulatory agencies.",
  },
  {
    question: "What is ICRA and why is it important for medical construction?",
    answer:
      "ICRA (Infection Control Risk Assessment) is a systematic process for evaluating infection risks during construction, renovation, or maintenance in healthcare facilities. Required by Joint Commission and CMS for hospitals, it's also best practice for all healthcare construction. ICRA classifies construction activities (Type A-D) and patient risk groups (Low, Medium, High, Highest) to determine required precautions. This determines barrier requirements, air handling, traffic patterns, and cleaning protocols. ICRA Matrix classifications range from Class I (minimal precautions) to Class IV (maximum protection including anteroom, HEPA filtration, and sealed barriers). FCS provides ICRA documentation and coordinates with facility infection control staff.",
  },
  {
    question: "How do you ensure quality in medical construction?",
    answer:
      "Medical construction quality assurance involves multiple layers of verification. We maintain detailed documentation including daily logs, inspection reports, and test results. Specialized systems require certified installers—medical gas by ASSE-certified technicians, fire alarm by NICET-certified professionals, and electrical by licensed contractors. Third-party testing includes air balancing reports, clean room certification (particle counts), medical gas purity testing, and emergency power load bank testing. We conduct pre-inspection reviews before AHCA visits and maintain punch list tracking through completion. Our quality control process is designed to achieve first-time inspection approval.",
  },
  {
    question: "What emergency power requirements apply to healthcare facilities?",
    answer:
      "Healthcare emergency power systems must comply with NFPA 110 (Emergency and Standby Power Systems) and NFPA 99 (Health Care Facilities Code). Hospitals require Type 10 systems (10-second transfer time) for life safety and critical loads. Surgical centers and facilities with life support equipment need similar provisions. Requirements include automatic transfer switches (ATS), generator sizing for 100% of essential electrical load, minimum fuel capacity (often 96 hours for hospitals), weekly testing protocols, and load bank testing. AHCA requires emergency power to serve life safety, critical branch (patient care), and equipment branch loads. FCS coordinates with electrical engineers and equipment suppliers to ensure compliant emergency power systems.",
  },
  {
    question: "Do you handle medical equipment coordination and installation?",
    answer:
      "While FCS doesn't directly sell medical equipment, we provide comprehensive coordination services essential for successful equipment integration. This includes reviewing equipment specifications during design, coordinating structural requirements (floor loading, vibration isolation), providing rough-in for electrical, plumbing, and medical gases, installing equipment pads and mounting systems, coordinating delivery access and rigging requirements, and final connection of building utilities. For imaging equipment, we coordinate lead-lined room construction and verify shielding with radiation physicists. We work directly with equipment vendors and your medical planner to ensure equipment spaces are properly prepared before delivery.",
  },
  {
    question: "What financing options are available for medical construction projects?",
    answer:
      "Medical construction projects can access various financing sources. Traditional options include SBA 504 loans (favorable terms for owner-occupied facilities), conventional construction loans converting to permanent mortgages, and healthcare-specific lenders who understand medical real estate. Equipment financing can often be separated from construction loans for better terms. Some healthcare systems use revenue bonds or lease arrangements. Landlords in medical office buildings may provide tenant improvement allowances. FCS can provide references to healthcare-focused lenders and work with your financial team to structure payment schedules that align with financing draws. We also offer value engineering to help control costs without compromising quality or compliance.",
  },
];

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Commercial", href: "/commercial/" },
  { name: "Medical Construction", href: "/commercial/medical-construction/" },
];

const internalLinks = [
  { href: "/commercial/", label: "Commercial Construction Services" },
  { href: "/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/commercial/office-construction/", label: "Office Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function MedicalConstructionPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
    { name: "Medical & Healthcare", href: "/commercial/medical-construction/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" service="Medical Facility Construction" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Medical Facility Construction Tampa"
        serviceDescription="AHCA-compliant medical facility construction including hospitals, surgical centers, medical offices, clean rooms, and medical gas systems throughout Tampa Bay and Florida"
        minPrice="250000"
      />
      <FAQSchema faqs={faqs} />

      <Breadcrumb items={breadcrumbItems} />

      <div className="container-custom py-8">
        <BackToHub silo="commercial" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-12 h-12 text-brand-gold" />
              <span className="bg-brand-green/30 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
                Medical Facility Construction
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Medical Facility Construction Tampa | AHCA Compliant Healthcare Builder
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Florida&apos;s trusted medical construction contractor with over {BUSINESS_INFO.yearsInBusiness} of experience 
              building AHCA-compliant healthcare facilities. From surgical centers to medical office buildings, 
              we deliver projects that meet the stringent requirements of healthcare construction—on time, 
              on budget, and ready for licensing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all shadow-lg"
              >
                Request Healthcare Construction Bid
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8">
              Tampa Bay&apos;s Premier Medical Construction Contractor
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Healthcare facility construction demands a level of precision, compliance knowledge, and specialized 
                expertise that few general contractors possess. At Florida Construction Specialists, medical construction 
                isn&apos;t a sideline—it&apos;s a core competency developed over four decades of building healthcare 
                environments throughout Tampa Bay and across Florida.
              </p>
              <p className="leading-relaxed mb-6">
                Our medical construction team understands that healthcare facilities are fundamentally different from 
                other commercial buildings. The stakes are higher—these are environments where lives are saved, 
                diagnoses are made, and patients receive care during their most vulnerable moments. Construction 
                deficiencies that might be minor inconveniences in office buildings can compromise patient safety 
                or prevent facility licensing in healthcare settings.
              </p>
              <p className="leading-relaxed mb-6">
                We&apos;ve earned our reputation as Tampa Bay&apos;s go-to medical facility contractor through 
                consistent delivery on complex healthcare projects. Our portfolio includes ambulatory surgery centers, 
                medical office buildings, urgent care facilities, diagnostic imaging centers, dental practices, 
                rehabilitation facilities, and hospital renovations. Each project reinforces our understanding of 
                AHCA requirements, infection control protocols, medical gas systems, and the unique challenges of 
                healthcare construction.
              </p>
              <p className="leading-relaxed">
                When you partner with FCS for medical construction, you get more than a contractor—you get a team 
                that speaks the language of healthcare construction, anticipates regulatory requirements, and 
                delivers facilities ready for immediate licensure and operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4 text-center">
            Healthcare Construction Expertise
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Specialized capabilities that set FCS apart in medical facility construction
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <Icon className="w-12 h-12 text-brand-green mb-6" />
                  <h3 className="text-xl font-bold text-brand-green-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Types of Medical Facilities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-6 text-center">
              Types of Medical Facilities We Build
            </h2>
            <p className="text-xl text-gray-600 text-center">
              Comprehensive construction services for every healthcare facility type
            </p>
          </div>

          {/* Facility Type Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {facilityTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.name} className="bg-brand-green-bg rounded-xl p-6 text-center hover:bg-brand-green/10 transition-colors">
                  <Icon className="w-10 h-10 text-brand-green mx-auto mb-4" />
                  <h3 className="font-bold text-brand-green-dark">{type.name}</h3>
                </div>
              );
            })}
          </div>

          {/* Detailed Facility Descriptions */}
          <div className="space-y-12">
            {/* Hospitals and Medical Centers */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-10 h-10 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark font-heading">
                  Hospitals and Medical Centers
                </h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Hospital construction represents the most complex category of healthcare building, requiring 
                  integration of numerous specialized systems and compliance with multiple regulatory frameworks. 
                  FCS has extensive experience with hospital renovation projects, additions, and tenant improvements 
                  within hospital settings throughout the Tampa Bay region.
                </p>
                <p>
                  Hospital projects demand exceptional coordination due to the 24/7 nature of operations. Construction 
                  activities must be carefully phased to maintain uninterrupted patient care. Our teams are experienced 
                  in working within active hospital environments, implementing ICRA Class IV protocols when working 
                  near operating rooms, intensive care units, and immunocompromised patient areas. We coordinate closely 
                  with hospital administration, facilities management, and infection control committees to ensure every 
                  phase of construction maintains the highest safety standards.
                </p>
                <p>
                  Key hospital construction elements include redundant mechanical and electrical systems, emergency 
                  power systems meeting NFPA 110 Type 10 requirements, complex medical gas distribution networks, 
                  nurse call and patient monitoring system integration, specialized ventilation for isolation rooms 
                  and operating suites, and life safety systems designed for patient evacuation challenges. Our 
                  experience spans emergency department expansions, surgical suite renovations, patient room 
                  modernizations, and diagnostic center buildouts within hospital settings.
                </p>
              </div>
            </div>

            {/* Ambulatory Surgery Centers */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Syringe className="w-10 h-10 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark font-heading">
                  Ambulatory Surgery Centers (ASCs)
                </h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Ambulatory surgery centers have become one of the fastest-growing segments in healthcare 
                  construction as procedures migrate from hospital settings to lower-cost outpatient facilities. 
                  FCS builds ASCs that meet the stringent requirements of AHCA licensing while optimizing 
                  operational efficiency and patient flow.
                </p>
                <p>
                  ASC construction requires sophisticated understanding of surgical workflow. Operating rooms must 
                  meet specific dimensional requirements, typically 400-600 square feet per room with minimum 
                  20-foot clear spans. These spaces require ISO Class 7 or 8 clean room environments with 20-25 
                  air changes per hour, laminar flow diffusers, and positive pressure relationships to adjacent 
                  spaces. Pre-operative and post-anesthesia care units must be sized appropriately for procedure 
                  volumes with proper sight lines for patient monitoring.
                </p>
                <p>
                  Medical gas systems in ASCs typically include oxygen, medical air, nitrogen for surgical tools, 
                  nitrous oxide in some facilities, vacuum systems, and WAGD (waste anesthetic gas disposal). 
                  We install zone valve boxes for area isolation and complete alarm systems as required by NFPA 99. 
                  Our ASC projects also address the specific requirements of different surgical specialties—orthopedic 
                  procedures may need specialized equipment supports, ophthalmology requires controlled lighting, 
                  and GI centers need specific scope processing areas.
                </p>
              </div>
            </div>

            {/* Medical Office Buildings */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <HeartPulse className="w-10 h-10 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark font-heading">
                  Medical Office Buildings
                </h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Medical office buildings (MOBs) serve as the backbone of outpatient healthcare delivery, housing 
                  physician practices, specialty clinics, and diagnostic services. Unlike standard office buildings, 
                  MOBs require infrastructure specifically designed for healthcare use—enhanced plumbing systems, 
                  medical-grade HVAC, and electrical systems capable of supporting medical equipment.
                </p>
                <p>
                  FCS approaches MOB construction with careful attention to flexibility. Healthcare is an evolving 
                  industry, and today&apos;s family practice suite may become tomorrow&apos;s specialty clinic. We design 
                  building systems with capacity for future tenant requirements—oversized electrical services, 
                  accessible plumbing chases, and HVAC systems that can accommodate additional air handling for 
                  procedure rooms. This forward-thinking approach protects owner investments and simplifies future 
                  tenant improvements.
                </p>
                <p>
                  Tenant improvement buildouts within MOBs must balance regulatory compliance with cost efficiency. 
                  Not all medical office spaces require the same level of construction sophistication. A psychiatry 
                  practice has different needs than an OB/GYN office. We help physician groups and healthcare systems 
                  understand their specific requirements and avoid over-building where regulations don&apos;t require it, 
                  while ensuring full compliance where they do. Our experience helps owners maximize usable space 
                  while meeting accessibility requirements, exam room sizing standards, and appropriate finish levels.
                </p>
              </div>
            </div>

            {/* Urgent Care Facilities */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Activity className="w-10 h-10 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark font-heading">
                  Urgent Care Facilities
                </h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Urgent care centers occupy a unique niche in healthcare delivery, providing immediate care for 
                  non-life-threatening conditions without the wait times and costs of emergency departments. These 
                  facilities require careful design balancing clinical functionality with retail-like accessibility 
                  and efficiency. FCS has built numerous urgent care centers across Tampa Bay for both independent 
                  operators and major healthcare systems.
                </p>
                <p>
                  Efficient patient flow is critical in urgent care design. From check-in to discharge, every step 
                  must be optimized for throughput without sacrificing care quality. We work with urgent care 
                  operators to design layouts that minimize patient wait times, maximize provider efficiency, and 
                  create comfortable experiences that encourage repeat visits and positive reviews. This includes 
                  strategic placement of triage areas, flexible exam rooms that can serve multiple functions, and 
                  efficient imaging alcoves.
                </p>
                <p>
                  Urgent care construction must also accommodate diagnostic equipment within compact footprints. 
                  Most centers require X-ray capabilities, which means incorporating properly shielded imaging rooms 
                  without excessive space consumption. Laboratory areas need appropriate specimen handling and point-of-care 
                  testing capabilities. Treatment areas must handle minor procedures with appropriate lighting, 
                  medical gas (typically oxygen only), and emergency equipment. Despite their smaller scale, urgent 
                  care centers require thoughtful integration of building systems to deliver efficient, effective 
                  healthcare environments.
                </p>
              </div>
            </div>

            {/* Dental and Specialty Clinics */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Cross className="w-10 h-10 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark font-heading">
                  Dental and Specialty Clinics
                </h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Dental offices and specialty clinics represent a significant portion of healthcare construction, 
                  ranging from single-practitioner offices to multi-location dental service organizations (DSOs) 
                  and specialty practices including dermatology, plastic surgery, podiatry, and pain management. 
                  Each specialty brings unique construction requirements that demand experienced healthcare contractors.
                </p>
                <p>
                  Dental construction requires specialized infrastructure including dental vacuum systems (wet or dry), 
                  compressed air systems for handpieces, nitrous oxide piping for sedation dentistry, and significant 
                  plumbing for operatory units. Modern dental offices increasingly incorporate cone beam CT imaging, 
                  requiring shielded imaging rooms. Sterilization centers must meet specific standards with appropriate 
                  dirty-to-clean workflow patterns. FCS understands the nuances of dental construction, from 
                  orthodontic offices with minimal clinical infrastructure to oral surgery centers requiring full 
                  medical gas systems and recovery areas.
                </p>
                <p>
                  Specialty clinics present diverse requirements based on procedures performed. Dermatology practices 
                  may need Mohs surgery suites with specific lighting and specimen handling areas. Plastic surgery 
                  offices range from consultation-only spaces to fully equipped procedure rooms rivaling ASCs. 
                  Pain management clinics require fluoroscopy-compatible procedure rooms with radiation shielding. 
                  Dialysis centers need extensive plumbing, water treatment systems, and specialized HVAC. Our 
                  experience across specialty types allows us to guide owners through requirements specific to their 
                  practice type.
                </p>
              </div>
            </div>

            {/* Diagnostic Imaging Centers */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="w-10 h-10 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark font-heading">
                  Diagnostic Imaging Centers
                </h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Diagnostic imaging centers house some of the most sophisticated and expensive medical equipment 
                  in healthcare—MRI machines, CT scanners, PET scanners, and linear accelerators. Construction 
                  for imaging facilities requires precise coordination between building construction, equipment 
                  vendors, and radiation physicists to create safe, effective diagnostic environments.
                </p>
                <p>
                  MRI construction presents unique challenges due to the powerful magnetic fields involved. 
                  MRI rooms require RF (radio frequency) shielding to prevent interference with image quality, 
                  typically using copper mesh or sheet copper enclosures. The magnetic field affects construction 
                  materials—ferrous metals must be eliminated within the 5-gauss line, requiring specialized 
                  framing, door hardware, and HVAC components. MRI equipment is extraordinarily heavy (up to 
                  30,000 pounds), requiring reinforced floor structures and often specialized vibration isolation.
                </p>
                <p>
                  CT and X-ray rooms require radiation shielding, typically lead-lined walls, doors, and observation 
                  windows. Shielding requirements are calculated by radiation physicists based on equipment output, 
                  room layout, and adjacent space occupancy. FCS coordinates with physicists during design to ensure 
                  proper shielding is specified, then verifies installation through careful quality control. We 
                  understand the coordination required between shielding installation, room finishes, and equipment 
                  installation to achieve certified imaging environments ready for patient care.
                </p>
              </div>
            </div>

            {/* Rehabilitation Facilities */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Bone className="w-10 h-10 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark font-heading">
                  Rehabilitation Facilities
                </h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Rehabilitation facilities serve patients recovering from injuries, surgeries, strokes, and other 
                  conditions requiring physical, occupational, or speech therapy. These facilities range from 
                  outpatient therapy clinics to inpatient rehabilitation hospitals. FCS builds rehabilitation 
                  environments optimized for patient recovery and therapy effectiveness throughout Tampa Bay.
                </p>
                <p>
                  Physical therapy spaces require significant open floor areas for exercise equipment, gait training, 
                  and functional activities. Ceiling heights must accommodate overhead track systems for body-weight 
                  supported treadmill training. Flooring must be durable yet forgiving—typically rubber or vinyl 
                  compositions that can withstand equipment while providing appropriate surfaces for balance training 
                  and fall recovery practice. Hydrotherapy pools present significant construction challenges including 
                  structural requirements, humidity control, pool chemistry systems, and accessible entry features.
                </p>
                <p>
                  Inpatient rehabilitation facilities combine therapy spaces with patient room requirements similar 
                  to hospitals, including medical gas, nurse call systems, and patient monitoring capabilities. 
                  These facilities must meet AHCA requirements for inpatient settings while creating environments 
                  that encourage patient progress. Design features like residential-style kitchens for daily living 
                  retraining, accessible bathroom training areas, and outdoor therapy gardens require construction 
                  expertise spanning both clinical and residential building types.
                </p>
              </div>
            </div>

            {/* Pharmacy and Retail Healthcare */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Pill className="w-10 h-10 text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-green-dark font-heading">
                  Pharmacy and Retail Healthcare
                </h3>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The pharmacy sector has evolved dramatically, with compounding pharmacies, specialty pharmacies, 
                  infusion centers, and retail clinic models creating diverse construction requirements. FCS builds 
                  pharmacy facilities ranging from traditional retail locations to sophisticated sterile compounding 
                  operations requiring the highest levels of environmental control.
                </p>
                <p>
                  Compounding pharmacies present some of the most demanding construction requirements in healthcare. 
                  USP 797 and USP 800 standards mandate specific clean room classifications, air handling requirements, 
                  and workflow patterns for sterile and hazardous drug preparation. Primary engineering controls 
                  (laminar flow hoods and biological safety cabinets) must operate within appropriately classified 
                  buffer rooms and ante areas. Clean room construction for compounding requires meticulous attention 
                  to surface finishes, ceiling systems, and pressure relationships to maintain required conditions.
                </p>
                <p>
                  Retail healthcare—including minute clinics, pharmacy-based care clinics, and urgent care within 
                  retail settings—requires healthcare construction expertise within the constraints of retail 
                  environments. These projects often involve working within existing retail spaces, coordinating 
                  with landlord requirements, and meeting healthcare regulations within commercial zoning. Patient 
                  privacy, clinical workflow, and regulatory compliance must be achieved alongside retail 
                  considerations like customer visibility and shopping center restrictions. Our experience bridges 
                  both commercial retail and healthcare construction requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AHCA Compliance Section */}
      <section className="py-16 bg-brand-green-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <ClipboardCheck className="w-12 h-12 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                AHCA Compliance and Licensing in Florida
              </h2>
            </div>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Understanding Florida&apos;s Agency for Health Care Administration (AHCA) requirements is essential 
                for successful healthcare construction. AHCA oversees licensing for healthcare facilities including 
                hospitals, ambulatory surgery centers, clinical laboratories, and other licensed healthcare providers. 
                Construction that doesn&apos;t meet AHCA requirements cannot receive licensure—meaning your facility 
                cannot legally operate.
              </p>

              <h3 className="text-2xl font-bold text-brand-gold mt-12 mb-4">
                Understanding AHCA&apos;s Role
              </h3>
              <p className="text-white/90">
                AHCA is Florida&apos;s primary healthcare regulatory agency, responsible for licensing over 48,000 
                healthcare facilities and providers. For construction purposes, AHCA serves as a plan review 
                authority and inspection agency for licensed healthcare facilities. This means that before 
                you can obtain local building permits for certain healthcare projects, you must first receive 
                AHCA approval of your construction documents. AHCA review ensures that proposed construction 
                meets the specific requirements of Florida Administrative Code Chapter 59A and applicable building 
                codes for healthcare occupancies.
              </p>

              <h3 className="text-2xl font-bold text-brand-gold mt-12 mb-4">
                Facility Types Requiring AHCA Licensing
              </h3>
              <p className="text-white/90 mb-4">
                Not all healthcare facilities require AHCA licensing, and requirements vary by facility type. 
                Licensed facility types include:
              </p>
              <ul className="text-white/90 space-y-2 mb-6">
                <li>• Hospitals and hospital-based facilities (including hospital outpatient departments)</li>
                <li>• Ambulatory surgery centers (Class A, B, and C based on anesthesia levels)</li>
                <li>• Clinical laboratories</li>
                <li>• Nursing homes and assisted living facilities</li>
                <li>• Hospice facilities</li>
                <li>• Home health agencies</li>
                <li>• Birth centers</li>
              </ul>
              <p className="text-white/90">
                Importantly, many healthcare facilities are NOT AHCA-licensed and don&apos;t require state plan 
                review. Standard physician offices, most dental offices, physical therapy clinics, and medical 
                office buildings generally don&apos;t require AHCA licensing (though they must still meet applicable 
                building codes). Understanding which category your project falls into is an essential first step 
                in the construction planning process.
              </p>

              <h3 className="text-2xl font-bold text-brand-gold mt-12 mb-4">
                The AHCA Plan Review Process
              </h3>
              <p className="text-white/90 mb-4">
                For projects requiring AHCA approval, the plan review process involves several steps:
              </p>
              <div className="bg-white/10 rounded-xl p-6 mb-6">
                <ol className="text-white/90 space-y-4">
                  <li><strong>1. Pre-Submission Meeting:</strong> We recommend meeting with AHCA before design 
                  completion to discuss project scope, applicable requirements, and any unique conditions.</li>
                  <li><strong>2. Document Submission:</strong> Complete construction documents, including 
                  architectural, structural, mechanical, electrical, and plumbing drawings, are submitted to 
                  AHCA along with required application forms and fees.</li>
                  <li><strong>3. Plan Review:</strong> AHCA reviewers examine documents for compliance with 
                  Florida Administrative Code and applicable healthcare standards. Review times vary but 
                  typically range from 30-90 days depending on project complexity.</li>
                  <li><strong>4. Comments and Revisions:</strong> Most projects receive review comments requiring 
                  design clarifications or modifications. The design team addresses comments and resubmits.</li>
                  <li><strong>5. Approval:</strong> Upon satisfactory review, AHCA issues a plan approval letter 
                  authorizing construction to proceed. This approval is typically required before local 
                  building permits can be issued.</li>
                </ol>
              </div>

              <h3 className="text-2xl font-bold text-brand-gold mt-12 mb-4">
                AHCA Inspection Requirements
              </h3>
              <p className="text-white/90">
                AHCA construction inspections verify that completed work matches approved plans. Inspections 
                occur at critical milestones and upon substantial completion. Specific inspection points 
                include underground plumbing, above-ceiling conditions before close-up, medical gas rough-in, 
                and final life safety systems. AHCA conducts a comprehensive final inspection before 
                issuing or modifying a facility license. This inspection covers all aspects of construction 
                including finishes, equipment installation, life safety systems, and medical gas certification. 
                Failing AHCA inspection delays facility opening until deficiencies are corrected and re-inspected.
              </p>

              <h3 className="text-2xl font-bold text-brand-gold mt-12 mb-4">
                Common AHCA Compliance Pitfalls
              </h3>
              <p className="text-white/90 mb-4">
                Based on our experience, common issues that cause AHCA inspection failures include:
              </p>
              <ul className="text-white/90 space-y-2 mb-6">
                <li>• Air balance not meeting specified air change and pressure requirements</li>
                <li>• Medical gas system deficiencies (labeling, alarms, certifications)</li>
                <li>• Door hardware not meeting fire/smoke rating requirements</li>
                <li>• Missing or incorrect signage (room identification, exit signs, medical gas labels)</li>
                <li>• Emergency power systems not covering all required loads</li>
                <li>• Accessibility deficiencies in patient care areas</li>
                <li>• Unapproved changes from approved plans</li>
              </ul>

              <h3 className="text-2xl font-bold text-brand-gold mt-12 mb-4">
                FCS AHCA Experience
              </h3>
              <p className="text-white/90">
                Florida Construction Specialists has successfully navigated the AHCA process on numerous 
                healthcare projects throughout Florida. We understand what AHCA inspectors look for and 
                design our construction quality control processes to address these requirements. Our 
                pre-inspection reviews identify potential issues before AHCA arrives, and our documentation 
                systems ensure required certifications and test results are ready for inspector review. 
                We coordinate with project architects, engineers, and equipment vendors to ensure all 
                parties understand AHCA requirements from project inception through final licensing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Room Construction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Wind className="w-12 h-12 text-brand-green" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Clean Room and Sterile Environment Construction
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                Clean room construction creates controlled environments essential for surgical procedures, 
                pharmaceutical compounding, laboratory work, and medical device manufacturing. These specialized 
                spaces require precise control of airborne particulates, temperature, humidity, and pressure 
                relationships—achieved through careful integration of construction systems and finishes.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Clean Room Classifications
              </h3>
              <p>
                Clean rooms are classified by the concentration of airborne particles they maintain. The 
                International Organization for Standardization (ISO) 14644-1 standard defines classifications 
                from ISO 1 (fewest particles) to ISO 9 (standard room air). Healthcare applications typically 
                require ISO 5 through ISO 8 classifications:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 my-6">
                <ul className="space-y-3">
                  <li><strong>ISO 5 (Class 100):</strong> Required for sterile compounding primary engineering 
                  controls, some surgical applications. Maximum 3,520 particles ≥0.5μm per cubic meter.</li>
                  <li><strong>ISO 6 (Class 1,000):</strong> Used for buffer rooms in sterile compounding. 
                  Maximum 35,200 particles ≥0.5μm per cubic meter.</li>
                  <li><strong>ISO 7 (Class 10,000):</strong> Standard for operating rooms, sterile compounding 
                  ante rooms, some laboratory applications. Maximum 352,000 particles ≥0.5μm per cubic meter.</li>
                  <li><strong>ISO 8 (Class 100,000):</strong> Used for general surgical environments, some 
                  procedure rooms. Maximum 3,520,000 particles ≥0.5μm per cubic meter.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                HVAC Requirements for Clean Rooms
              </h3>
              <p>
                Clean room HVAC systems must deliver high volumes of filtered air while maintaining precise 
                temperature, humidity, and pressure conditions. Key requirements include:
              </p>
              <p>
                <strong>Air Changes:</strong> Clean rooms require significantly more air changes per hour 
                (ACH) than standard spaces. Operating rooms typically need 20-25 ACH, with a minimum of 4 
                ACH from outside air. ISO 5 environments may require 300-600 ACH when achieved through 
                laminar flow systems.
              </p>
              <p>
                <strong>Filtration:</strong> HEPA (High Efficiency Particulate Air) filters remove 99.97% 
                of particles 0.3 microns and larger. These filters are installed as terminal units in 
                ceiling systems, providing filtered air directly into the clean space. Pre-filters protect 
                HEPA filters and extend their service life.
              </p>
              <p>
                <strong>Pressure Differentials:</strong> Clean rooms maintain positive pressure relative 
                to less clean adjacent spaces, ensuring air flows outward rather than allowing contaminated 
                air to enter. Typically, 0.01-0.05 inches water gauge pressure differential is maintained 
                between spaces of different classifications.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Construction Materials and Finishes
              </h3>
              <p>
                Clean room construction requires materials that don&apos;t generate particles, are easy to 
                clean, and resist microbial growth. Wall systems typically use flush-joint gypsum board 
                with epoxy paint, or pre-manufactured modular wall systems with sealed joints. Flooring 
                must be seamless or heat-welded with integral cove bases—sheet vinyl, poured epoxy, or 
                specialty flooring systems are common choices. Ceiling systems use lay-in tiles with 
                gasketed grid systems or monolithic drywall ceilings. All penetrations must be sealed, 
                and transitions between materials must eliminate ledges and gaps where particles can 
                accumulate.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Clean Room Construction Protocols
              </h3>
              <p>
                Building clean rooms requires construction protocols beyond standard practice. FCS implements 
                progressively cleaner construction as work advances toward completion. During rough construction, 
                clean room areas are isolated from general construction activity. As finishes are installed, 
                workers enter through designated paths, tools are cleaned before entry, and packaging materials 
                are removed outside the space. Before commissioning, thorough cleaning removes all construction 
                residue. Particle counts and air balance verification confirm the space achieves specified 
                classifications before equipment installation and operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Gas Systems */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="w-12 h-12 text-brand-green" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Medical Gas Systems
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                Medical gas systems deliver life-sustaining gases to patient care areas throughout healthcare 
                facilities. These systems must be designed, installed, tested, and certified to rigorous standards—
                errors can have fatal consequences. FCS employs ASSE-certified medical gas installers and follows 
                comprehensive quality assurance processes to ensure safe, compliant medical gas systems.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Types of Medical Gases
              </h3>
              <div className="bg-white rounded-xl p-6 my-6">
                <ul className="space-y-3">
                  <li><strong>Oxygen (O2):</strong> The most common medical gas, used for respiratory therapy, 
                  anesthesia, and emergency care. Piped from bulk liquid storage or cylinder manifolds.</li>
                  <li><strong>Medical Air:</strong> Filtered, dried compressed air used for respiratory therapy 
                  equipment. Generated by medical air compressors meeting specific purity requirements.</li>
                  <li><strong>Nitrogen (N2):</strong> Used to power surgical tools and for cryotherapy. 
                  Typically piped to operating rooms and procedure areas.</li>
                  <li><strong>Nitrous Oxide (N2O):</strong> Used for sedation in surgical and dental settings. 
                  Requires careful controls due to abuse potential.</li>
                  <li><strong>Carbon Dioxide (CO2):</strong> Used for insufflation during laparoscopic procedures. 
                  Less common in piped systems.</li>
                  <li><strong>Vacuum:</strong> Medical-surgical vacuum for suction during procedures. Generated 
                  by vacuum pumps with specific performance requirements.</li>
                  <li><strong>WAGD:</strong> Waste Anesthetic Gas Disposal removes exhaled anesthetic gases 
                  from operating rooms to protect staff.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                NFPA 99 Compliance
              </h3>
              <p>
                NFPA 99 (Health Care Facilities Code) governs medical gas system design, installation, testing, 
                and maintenance. Key requirements include:
              </p>
              <p>
                <strong>Piping materials:</strong> Type K or L copper tubing, brazed with appropriate 
                filler metals. BCuP-5 (15% silver) is common; higher silver content required for nitrogen 
                and nitrous oxide.
              </p>
              <p>
                <strong>Testing:</strong> Systems must pass standing pressure tests (24 hours at 150% 
                operating pressure), cross-connection tests (verifying correct gas at each outlet), 
                and purity tests (verifying gas meets specifications).
              </p>
              <p>
                <strong>Certification:</strong> Third-party verification by qualified personnel is required 
                before systems can be placed in service. Documentation must be maintained for the life 
                of the system.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Zone Valve Boxes and Alarms
              </h3>
              <p>
                Zone valve boxes allow isolation of medical gas systems by area, enabling maintenance 
                or emergency shutdown without affecting the entire facility. Located in corridor walls 
                outside protected areas, zone valves must be accessible and clearly labeled. Area alarm 
                panels monitor pressure and alert staff to system problems. Master alarms at nursing 
                stations provide facility-wide monitoring. All alarms require visual and audible signals 
                with battery backup for power failures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Medical Systems */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Zap className="w-12 h-12 text-brand-green" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Specialized Medical Systems
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                Beyond medical gases and clean rooms, healthcare facilities require numerous specialized systems 
                for patient safety, clinical efficiency, and regulatory compliance. FCS coordinates installation 
                of these systems with building construction, ensuring proper infrastructure and integration.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Nurse Call and Communication Systems
              </h3>
              <p>
                Nurse call systems are the communication backbone of inpatient and procedure areas, enabling 
                patients to request assistance and staff to coordinate care. Modern nurse call systems integrate 
                with patient monitoring, staff location, and clinical communication platforms. Basic systems 
                include bedside call buttons and bathroom pull cords connected to corridor lights and 
                staff stations. Advanced systems incorporate wireless phones, real-time location tracking, 
                integration with EMR systems, and escalation protocols for unanswered calls. Infrastructure 
                requirements include network cabling, power for devices, and coordination with ceiling, wall, 
                and headwall designs.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Security and Access Control
              </h3>
              <p>
                Healthcare facilities require sophisticated security systems balancing patient safety, staff 
                protection, and appropriate access. Systems include card readers or biometric access at 
                controlled doors, video surveillance in common areas and sensitive locations, infant 
                protection systems in obstetric units, psychiatric unit door controls, and pharmacy and 
                medication room security. Construction coordination includes providing power and data 
                connections, door hardware compatible with access control, and surveillance camera 
                mounting locations with appropriate sight lines.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Medical Equipment Planning
              </h3>
              <p>
                Large medical equipment requires extensive coordination between construction and equipment 
                vendors. Imaging equipment (MRI, CT, X-ray) needs structural supports, shielding, power 
                conditioning, and cooling. Surgical equipment requires mounting systems, power connections, 
                and medical gas supply. Laboratory equipment needs utilities, ventilation, and workflow 
                planning. FCS coordinates with equipment vendors throughout construction, ensuring 
                infrastructure is properly installed before equipment delivery. We participate in 
                equipment planning meetings, review vendor specifications, and verify rough-in 
                installations against equipment requirements.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Emergency Power Systems
              </h3>
              <p>
                Healthcare facilities require emergency power systems that activate within seconds of 
                normal power loss. NFPA 110 classifies systems by transfer time—Type 10 (10 seconds) 
                is required for hospitals and ASCs with general anesthesia. Generator sizing must cover 
                all essential loads including life safety (egress lighting, fire alarm), critical branch 
                (patient care equipment), and equipment branch (HVAC, refrigeration). Automatic transfer 
                switches sense power loss and switch to generator power. Monthly testing and annual load 
                bank testing verify system readiness. Construction includes generator pads, fuel systems, 
                exhaust routing, and electrical distribution for emergency circuits.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                IT Infrastructure for Healthcare
              </h3>
              <p>
                Healthcare IT infrastructure supports clinical systems, imaging networks, patient monitoring, 
                and administrative functions. Requirements extend beyond standard commercial IT: redundant 
                network paths for critical systems, isolated networks for medical devices, wireless coverage 
                for mobile clinical applications, and data center or server room environments with appropriate 
                cooling and power protection. HIPAA requirements influence physical security of IT spaces and 
                network design. FCS works with healthcare IT consultants to ensure construction provides 
                appropriate pathways, spaces, and environmental conditions for technology systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Medical Construction Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Hammer className="w-12 h-12 text-brand-green" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                The Medical Construction Process
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                Medical facility construction follows a structured process designed to deliver compliant, 
                functional healthcare environments. Understanding this process helps healthcare organizations 
                plan effectively and avoid costly delays.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Pre-Construction Planning
              </h3>
              <p>
                Successful medical construction begins long before breaking ground. Pre-construction planning 
                includes defining clinical programs and space requirements, engaging healthcare architects and 
                planners, developing preliminary budgets and schedules, identifying regulatory requirements and 
                approval pathways, and selecting project delivery method (design-bid-build, design-build, 
                construction management). For FCS projects, we often engage during pre-construction to provide 
                cost feedback during design development, identify constructability issues, and develop realistic 
                schedules accounting for permit timelines and equipment procurement.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Design Coordination
              </h3>
              <p>
                Medical facility design requires coordination among multiple specialized consultants: healthcare 
                architects, medical planners, mechanical engineers (often healthcare specialists), electrical 
                engineers, medical equipment planners, and sometimes infection control consultants, radiation 
                physicists, or clean room specialists. Design must address clinical workflow, patient experience, 
                staff efficiency, and regulatory compliance simultaneously. FCS participates in design 
                coordination meetings, providing construction perspective on phasing, access, and constructability.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Permitting: Building and AHCA
              </h3>
              <p>
                Medical projects typically require both local building permits and, for licensed facilities, 
                AHCA approval. These processes run partially in parallel but must be coordinated. AHCA plan 
                approval is often required before local permits can be issued. We track both approval 
                processes, respond promptly to review comments, and maintain communication with both 
                jurisdictions to minimize delays. Typical permitting timelines range from 6-12 weeks for 
                simpler projects to 4-6 months for complex facilities requiring extensive AHCA review.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Infection Control During Construction
              </h3>
              <p>
                Construction in or adjacent to occupied healthcare facilities requires rigorous infection 
                control measures. ICRA (Infection Control Risk Assessment) determines appropriate precautions 
                based on construction activities and nearby patient populations. Measures may include sealed 
                barriers (floor to deck), negative pressure in construction zones, HEPA air filtration, 
                dedicated worker access routes, and daily cleaning protocols. FCS trains all workers on 
                ICRA requirements and monitors compliance throughout construction.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Phased Construction in Occupied Facilities
              </h3>
              <p>
                Many medical construction projects occur within operating facilities. Phased construction 
                maintains clinical operations while progressively completing new or renovated spaces. Phase 
                planning considers clinical adjacencies (avoiding construction near sensitive areas), 
                utility shutdowns (scheduled during off-hours), noise and vibration impacts, and temporary 
                workflow modifications. We develop detailed phase plans with facility stakeholders, 
                identifying each phase&apos;s scope, duration, and operational impacts.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Commissioning and Turnover
              </h3>
              <p>
                Healthcare facility commissioning verifies that all systems perform as designed before 
                patient care begins. This includes air balance verification (documenting air changes and 
                pressure relationships), medical gas testing and certification, emergency power testing, 
                fire alarm and suppression system testing, and equipment startup coordination. FCS 
                coordinates commissioning activities with testing agencies, equipment vendors, and 
                facility operations staff. We maintain comprehensive documentation packages for regulatory 
                inspections and ongoing facility management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation in Occupied Facilities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="w-12 h-12 text-brand-green" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Renovation in Occupied Healthcare Facilities
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                Renovating healthcare facilities while maintaining operations presents unique challenges. 
                Patients cannot simply relocate during construction, clinical services cannot pause, and 
                infection control cannot be compromised. FCS has extensive experience executing renovations 
                in active healthcare environments throughout Tampa Bay.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Infection Control Risk Assessment (ICRA)
              </h3>
              <p>
                ICRA is a formal process for identifying infection risks during construction and determining 
                appropriate mitigation measures. The process evaluates construction activities (Type A through 
                Type D, from non-invasive to major demolition) against patient risk groups (Low, Medium, High, 
                and Highest risk populations). The intersection determines required precautions through the 
                ICRA Matrix, ranging from Class I (standard precautions) through Class IV (maximum isolation 
                with anteroom, sealed barriers, and HEPA filtration).
              </p>
              <p>
                FCS works with facility infection control professionals to complete ICRA assessments before 
                construction begins. We document required measures in our safety plans and verify implementation 
                through daily inspections.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Dust Containment Systems
              </h3>
              <p>
                Construction dust in healthcare settings poses serious infection risks. Dust containment 
                includes sealed barriers constructed from floor to ceiling deck using drywall or heavy plastic 
                sheeting. Negative air machines with HEPA filtration maintain lower pressure in construction 
                zones, preventing dust migration. Sticky mats at transition points capture debris. Workers 
                entering from construction zones clean footwear and clothing before entering clinical areas. 
                All debris is bagged before removal through clinical spaces.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Maintaining Operations
              </h3>
              <p>
                Clinical operations cannot stop for construction. We coordinate utility shutdowns for nights 
                and weekends when possible. When services must be interrupted during business hours, we 
                provide advance notice and minimize duration. Temporary facilities (swing space) may be 
                required for longer interruptions. We maintain clear communication with facility operations 
                staff, providing daily updates on activities and any impacts to normal operations.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-10 mb-4">
                Patient Safety Protocols
              </h3>
              <p>
                Patient safety drives every decision in occupied facility construction. Noise-generating 
                activities are scheduled to minimize patient impact. Vibration-sensitive areas (imaging, 
                laboratories) are protected from construction impacts. Emergency egress is maintained at 
                all times. Fire protection systems remain operational or temporary measures are implemented. 
                Construction traffic routes avoid patient areas. Workers are screened and trained on 
                appropriate behavior in healthcare settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <FileCheck className="w-12 h-12 text-brand-green" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Medical Construction Experience
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                Florida Construction Specialists has delivered medical construction projects across the full 
                spectrum of healthcare facility types. Our portfolio demonstrates capability with complex 
                regulatory requirements, specialized building systems, and the unique challenges of 
                healthcare construction.
              </p>

              <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                  Multi-Specialty Ambulatory Surgery Center
                </h3>
                <p className="mb-4">
                  This 15,000 square foot ambulatory surgery center in Hillsborough County serves multiple 
                  surgical specialties including orthopedics, ophthalmology, and gastroenterology. The 
                  project included four operating rooms with ISO 7 environments, sterile processing, 
                  pre-operative and PACU areas, and complete medical gas systems.
                </p>
                <p>
                  FCS managed the complex AHCA approval process, coordinating design modifications to address 
                  review comments while maintaining the project schedule. Our medical gas installation team 
                  achieved first-time certification, and the facility passed AHCA final inspection without 
                  deficiencies, enabling the planned opening date.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                  Diagnostic Imaging Center Expansion
                </h3>
                <p className="mb-4">
                  An existing diagnostic imaging facility required expansion to add MRI capability to their 
                  CT and X-ray services. The project involved complex shielding requirements, significant 
                  structural modifications for equipment weight, and RF shielding for the MRI suite.
                </p>
                <p>
                  Working within an operating facility required careful phasing to maintain existing services 
                  during construction. FCS coordinated with the MRI equipment vendor on precise placement 
                  requirements and achieved the specialized shielding installation within a compressed 
                  schedule to meet equipment delivery timing.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                  Medical Office Building Tenant Improvements
                </h3>
                <p className="mb-4">
                  FCS completed multiple tenant improvement projects within a Class A medical office building 
                  in Tampa, including primary care practices, a multi-provider cardiology group, and an 
                  interventional pain management clinic with a fluoroscopy suite.
                </p>
                <p>
                  Each project required different levels of medical infrastructure—from standard exam rooms 
                  to procedure rooms with medical gas and specialized HVAC. Our understanding of various 
                  practice requirements helped owners avoid over-building while ensuring regulatory 
                  compliance for their specific services.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-brand-green-dark mb-4">
                  Hospital Emergency Department Renovation
                </h3>
                <p className="mb-4">
                  This phased renovation of an active emergency department expanded capacity and modernized 
                  clinical spaces while maintaining 24/7 ED operations. The project required ICRA Class IV 
                  precautions due to proximity to critical patient care areas.
                </p>
                <p>
                  FCS executed the renovation in carefully planned phases, relocating services temporarily 
                  while each section was renovated. Close coordination with hospital administration, 
                  nursing leadership, and infection control ensured zero construction-related incidents 
                  throughout the project duration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why FCS */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-6">
                Why Choose FCS for Medical Construction?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Healthcare facility construction requires specialized knowledge, proven processes, and a 
                commitment to quality that few contractors can deliver. FCS brings four decades of 
                experience to every medical construction project.
              </p>
              <div className="space-y-4">
                {[
                  "AHCA inspection experience—we know what regulators look for and prepare accordingly",
                  "ASSE-certified medical gas piping installers with documented first-time certification success",
                  "ICRA-trained teams for safe construction in active healthcare environments",
                  "Clean room construction capabilities from ISO 5 through ISO 8 classifications",
                  `${BUSINESS_INFO.yearsInBusiness} of healthcare construction expertise in Tampa Bay`,
                  "Direct coordination with healthcare equipment vendors for seamless integration",
                  "Comprehensive documentation supporting licensing and ongoing facility management",
                  "Proven track record of on-time, on-budget medical facility delivery",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-green-bg rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Healthcare Project Consultation
              </h3>
              <p className="text-gray-600 mb-6">
                Planning a medical facility? We provide complimentary consultations for healthcare 
                construction projects to discuss your requirements, regulatory pathway, timeline, and budget.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact/"
                  className="block w-full py-4 bg-brand-green text-white font-bold rounded-lg text-center hover:bg-brand-green-dark transition-colors"
                >
                  Schedule Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white text-brand-green-dark font-bold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-4 text-center">
            Medical Construction Service Areas
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            FCS provides medical facility construction throughout Tampa Bay and across Florida
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {LOCATIONS.map((location) => (
              <div
                key={location.slug}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-semibold text-brand-green-dark">
                  {location.name}, FL
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4 text-center font-heading">
            Medical Construction Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Answers to common questions about healthcare facility construction in Florida
          </p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-gray-50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-brand-green-dark hover:no-underline py-4">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-gold mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 pl-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-green-dark">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Build Your Healthcare Facility?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            From AHCA compliance navigation to medical gas certification, from clean room construction 
            to renovation in occupied facilities—FCS delivers healthcare construction expertise that 
            ensures your project succeeds. Contact us to discuss your medical facility project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all shadow-lg"
            >
              Request Healthcare Construction Bid
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Our Commercial Services"
            links={internalLinks}
          />
        </div>
      </section>
    </>
  );
}
