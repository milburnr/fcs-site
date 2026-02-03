import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Top Commercial Contractor with Quality Control",
  description: "Looking for a top commercial contractor in Florida? Florida Construction Specialists is a trusted name in the industry, known for its quality control and pro...",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Top Commercial Contractor with Quality Control", href: "/top-commercial-contractor-with-quality-control/" },
];


const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/services/commercial/design-build/", label: "Design-Build Construction" },
  { href: "/services/commercial/tenant-improvements/", label: "Tenant Improvements" },
  { href: "/services/commercial/medical-construction/", label: "Medical Facility Construction" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const relatedArticles = [
  {
    "title": "Mastering Commercial Construction Design in Florida",
    "href": "/mastering-commercial-construction-design-in-florida/",
    "description": "Learn the ins and outs of architectural design and commercial building design with our comprehensive guide for Florida projects."
  },
  {
    "title": "Benefits of Design-Build for Commercial Projects",
    "href": "/benefits-of-design-build-construction-for-commercial-project/",
    "description": "Discover how design-build delivery streamlines commercial construction with single-source accountability."
  },
  {
    "title": "Commercial Construction Budgeting Tips",
    "href": "/commercial-construction-budgeting-tips-for-florida-specialists/",
    "description": "Expert strategies for developing and managing budgets for commercial construction in Florida."
  },
  {
    "title": "Tips for Commercial Renovation in Florida",
    "href": "/tips-for-commercial-renovation-in-florida/",
    "description": "Key considerations for successful commercial renovation projects in the Sunshine State."
  }
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
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Florida Construction Specialists Top Commercial Contractor with Quality Control
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Looking for a top commercial contractor in Florida? Florida Construction Specialists is a trusted name in the industry, known for its quality control
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
                Quality control stands as the cornerstone of exceptional commercial construction, distinguishing top-tier contractors from their competitors. Florida Construction Specialists has earned recognition as Florida's premier commercial contractor through an unwavering commitment to quality excellence, implementing comprehensive quality control systems that ensure every project meets the highest standards of craftsmanship, safety, and performance. Our systematic approach to quality management spans every phase of construction, from initial planning through final delivery.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Comprehensive Quality Control Framework
              </h2>
              
              <p className="text-gray-600 mb-4">
                Our quality control framework encompasses multiple layers of oversight, inspection, and verification processes designed to identify and address potential issues before they impact project outcomes. This systematic approach ensures consistent quality delivery across all commercial construction projects.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Multi-Phase Quality Management System
              </h3>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold text-brand-green-dark mb-3">Pre-Construction Quality Planning</h4>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Design Review and Constructability Analysis:</strong> Comprehensive evaluation of plans and specifications to identify potential construction challenges</li>
                  <li><strong>Material Specification Verification:</strong> Detailed review of material requirements and performance standards</li>
                  <li><strong>Quality Control Plan Development:</strong> Creation of project-specific quality assurance protocols and inspection schedules</li>
                  <li><strong>Subcontractor Qualification:</strong> Rigorous vetting of subcontractors and suppliers based on quality track records</li>
                  <li><strong>Testing and Inspection Planning:</strong> Development of comprehensive testing schedules and quality benchmarks</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Construction Phase Quality Controls
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Daily Quality Inspections</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Work progress evaluation</li>
                    <li>• Material quality verification</li>
                    <li>• Workmanship assessment</li>
                    <li>• Safety compliance checks</li>
                    <li>• Documentation and reporting</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Milestone Quality Reviews</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Phase completion assessments</li>
                    <li>• Third-party quality audits</li>
                    <li>• Punch list development</li>
                    <li>• Client walk-through inspections</li>
                    <li>• Corrective action implementation</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Material Quality Assurance and Testing
              </h2>
              
              <p className="text-gray-600 mb-4">
                The foundation of any quality commercial construction project lies in the materials used. Our comprehensive material quality assurance program ensures that all products and materials meet or exceed specified standards through rigorous testing and verification procedures.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Material Testing and Verification Protocols
              </h3>

              <div className="space-y-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Concrete Quality Control</h4>
                    <p className="text-gray-600">
                      Comprehensive testing including slump tests, compressive strength testing, air content analysis, and temperature monitoring. All concrete deliveries are verified for mix design compliance and performance specifications.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Steel and Structural Materials</h4>
                    <p className="text-gray-600">
                      Mill test certificates verification, dimensional inspections, surface quality assessments, and welding quality testing ensure all structural components meet engineering specifications and safety requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">MEP Systems Components</h4>
                    <p className="text-gray-600">
                      Mechanical, electrical, and plumbing materials undergo factory certification review, performance testing, and compatibility verification to ensure system integration and long-term reliability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Finishing Materials</h4>
                    <p className="text-gray-600">
                      Flooring, wall systems, roofing materials, and architectural finishes are tested for durability, appearance, and performance characteristics before installation approval.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Workmanship Standards and Craft Excellence
              </h2>
              
              <p className="text-gray-600 mb-4">
                Superior workmanship requires skilled craftspeople working within established standards and procedures. Our quality control system emphasizes continuous training, clear expectations, and regular performance evaluation to maintain consistently high workmanship standards.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Craft Quality Standards
              </h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-yellow-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Concrete Work</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Proper mixing and placement</li>
                    <li>• Surface finishing techniques</li>
                    <li>• Curing procedure compliance</li>
                    <li>• Dimensional accuracy verification</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Steel Fabrication</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Welding quality standards</li>
                    <li>• Connection specifications</li>
                    <li>• Alignment and tolerance control</li>
                    <li>• Surface preparation and coating</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Finish Work</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Installation precision</li>
                    <li>• Joint and seam quality</li>
                    <li>• Surface preparation</li>
                    <li>• Aesthetic consistency</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Technology-Enhanced Quality Control
              </h2>
              
              <p className="text-gray-600 mb-4">
                Modern quality control leverages advanced technologies to enhance inspection accuracy, documentation efficiency, and real-time quality monitoring. Our technology integration provides superior quality oversight capabilities.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Digital Quality Management Tools
              </h3>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-3">Mobile Inspection Applications</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Real-time quality data collection</li>
                      <li>• Photo and video documentation</li>
                      <li>• Instant report generation</li>
                      <li>• Issue tracking and resolution</li>
                      <li>• Stakeholder communication</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-3">Advanced Measurement Systems</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Laser measurement and verification</li>
                      <li>• 3D scanning for dimensional accuracy</li>
                      <li>• Thermal imaging for system performance</li>
                      <li>• Drone-based progress monitoring</li>
                      <li>• Digital documentation systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Building Information Modeling (BIM) for Quality</h3>

              <p className="text-gray-600 mb-4">
                Our BIM implementation extends beyond design coordination to encompass quality control through model-based verification, clash detection, and progress tracking against design intent.
              </p>

              <ul className="text-gray-600 mb-6 space-y-2">
                <li><strong>Model-Based Quality Verification:</strong> Comparing as-built conditions against 3D models for dimensional accuracy</li>
                <li><strong>Clash Detection and Resolution:</strong> Identifying and resolving conflicts before they impact construction quality</li>
                <li><strong>Progress Tracking:</strong> Visual verification of work completion against project schedules and specifications</li>
                <li><strong>Change Order Management:</strong> Maintaining model accuracy through systematic change documentation</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Regulatory Compliance and Code Adherence
              </h2>
              
              <p className="text-gray-600 mb-4">
                Quality control in commercial construction requires strict adherence to building codes, safety regulations, and industry standards. Our compliance management system ensures all work meets or exceeds regulatory requirements throughout the construction process.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Code Compliance Management
              </h3>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-1">Florida Building Code Compliance</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive knowledge and application of state building codes including structural, fire safety, accessibility, and energy efficiency requirements.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-1">Local Jurisdiction Requirements</h4>
                  <p className="text-gray-600 text-sm">
                    Detailed understanding of municipal codes, zoning requirements, and local construction standards specific to each project location.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-1">Industry Standards Integration</h4>
                  <p className="text-gray-600 text-sm">
                    Implementation of relevant industry standards including ASTM, ACI, AISC, and other recognized quality benchmarks.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-1">Environmental Compliance</h4>
                  <p className="text-gray-600 text-sm">
                    Adherence to environmental regulations, stormwater management requirements, and sustainability standards.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Subcontractor Quality Management
              </h2>
              
              <p className="text-gray-600 mb-4">
                The quality of commercial construction projects depends heavily on subcontractor performance. Our comprehensive subcontractor quality management program ensures all team members meet our exacting standards and contribute to overall project excellence.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Subcontractor Qualification and Oversight
              </h3>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold text-brand-green-dark mb-3">Pre-Qualification Process</h4>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Performance History Review:</strong> Evaluation of past project quality, schedule adherence, and client satisfaction</li>
                  <li><strong>Quality System Assessment:</strong> Review of internal quality control procedures and certifications</li>
                  <li><strong>Financial Stability Verification:</strong> Ensuring adequate resources for quality project completion</li>
                  <li><strong>Safety Record Evaluation:</strong> Assessment of safety performance and training programs</li>
                  <li><strong>Technical Capability Review:</strong> Verification of expertise for specific project requirements</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Ongoing Performance Monitoring
              </h3>

              <ul className="text-gray-600 mb-6 space-y-2">
                <li><strong>Regular Quality Assessments:</strong> Systematic evaluation of work quality against established standards</li>
                <li><strong>Training and Development:</strong> Ongoing education programs to maintain and improve quality capabilities</li>
                <li><strong>Performance Feedback:</strong> Regular communication regarding quality expectations and improvement opportunities</li>
                <li><strong>Corrective Action Protocols:</strong> Systematic approach to addressing quality deficiencies and preventing recurrence</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Client Communication and Quality Transparency
              </h2>
              
              <p className="text-gray-600 mb-4">
                Quality control effectiveness requires transparent communication with clients throughout the construction process. Our communication protocols ensure clients remain informed about quality initiatives, inspection results, and project progress.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Quality Reporting and Documentation
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Regular Quality Reports</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Weekly quality status updates</li>
                    <li>• Inspection results summaries</li>
                    <li>• Testing data compilation</li>
                    <li>• Non-conformance tracking</li>
                    <li>• Corrective action status</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Client Walk-Through Programs</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Scheduled progress inspections</li>
                    <li>• Quality milestone reviews</li>
                    <li>• Issue identification and resolution</li>
                    <li>• Final quality verification</li>
                    <li>• Owner education and training</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Continuous Improvement and Quality Innovation
              </h2>
              
              <p className="text-gray-600 mb-4">
                Excellence in quality control requires continuous improvement and innovation. Our quality management system includes formal processes for identifying improvement opportunities, implementing best practices, and staying current with industry developments.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Quality Improvement Initiatives
              </h3>

              <div className="space-y-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Post-Project Quality Reviews</h4>
                    <p className="text-gray-600">
                      Systematic analysis of project outcomes identifying successful practices and improvement opportunities for future projects.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Industry Best Practice Integration</h4>
                    <p className="text-gray-600">
                      Continuous monitoring of industry developments and integration of proven quality enhancement techniques and technologies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Team Training and Development</h4>
                    <p className="text-gray-600">
                      Ongoing education programs ensuring team members maintain current knowledge of quality control techniques and industry standards.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Quality Control Metrics and Performance Measurement
              </h2>
              
              <p className="text-gray-600 mb-4">
                Effective quality control requires measurable performance indicators that track success and identify improvement opportunities. Our comprehensive metrics system provides objective measurement of quality performance across all project phases.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Key Performance Indicators
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-brand-green/5 rounded-lg">
                  <div className="text-3xl font-bold text-brand-green-dark mb-2">99.2%</div>
                  <div className="text-sm text-gray-600">Inspection Pass Rate</div>
                </div>
                
                <div className="text-center p-6 bg-brand-green/5 rounded-lg">
                  <div className="text-3xl font-bold text-brand-green-dark mb-2">98.8%</div>
                  <div className="text-sm text-gray-600">Quality Standards Compliance</div>
                </div>
                
                <div className="text-center p-6 bg-brand-green/5 rounded-lg">
                  <div className="text-3xl font-bold text-brand-green-dark mb-2">97.5%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction Rating</div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Industry Certifications and Quality Recognitions
              </h2>
              
              <p className="text-gray-600 mb-4">
                Our commitment to quality excellence is validated through industry certifications, quality awards, and professional recognitions that demonstrate our adherence to the highest construction standards.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Professional Certifications and Memberships
              </h3>

              <ul className="text-gray-600 mb-6 space-y-2">
                <li><strong>Associated General Contractors (AGC) Membership:</strong> Active participation in industry quality initiatives and best practice development</li>
                <li><strong>LEED Accredited Professionals:</strong> Certified expertise in sustainable construction and green building quality standards</li>
                <li><strong>Professional Engineer Oversight:</strong> Licensed professional engineering review of critical quality elements</li>
                <li><strong>Safety Certifications:</strong> OSHA compliance training and safety management system certifications</li>
                <li><strong>Quality Management Certifications:</strong> Formal training in quality management systems and continuous improvement methodologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Choose Florida Construction Specialists for Quality Excellence
              </h2>
              
              <p className="text-gray-600 mb-4">
                Our position as Florida's top commercial contractor with quality control stems from our comprehensive approach to quality management, advanced technology integration, and unwavering commitment to client satisfaction. Every aspect of our quality control system is designed to deliver superior construction outcomes.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Quality Control Advantages
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Systematic Approach</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive quality management system covering all phases of construction from planning through completion.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Technology Integration</h4>
                    <p className="text-gray-600 text-sm">
                      Advanced digital tools and measurement systems enhancing quality oversight and documentation accuracy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Expert Team</h4>
                    <p className="text-gray-600 text-sm">
                      Experienced quality professionals with deep knowledge of construction standards and best practices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Proven Results</h4>
                    <p className="text-gray-600 text-sm">
                      Track record of successful project delivery with consistently high quality outcomes and client satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-green/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                  Experience Unmatched Quality Control Excellence
                </h3>
                <p className="text-gray-600 mb-4">
                  Partner with Florida Construction Specialists for your next commercial construction project and experience the difference that comprehensive quality control makes. Our systematic approach to quality management ensures your project meets the highest standards of excellence while being delivered on time and within budget.
                </p>
                <Link 
                  href="/contact/"
                  className="inline-flex items-center text-brand-green-dark font-bold hover:text-brand-green"
                >
                  Discuss Your Quality Requirements <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists today for a free consultation.
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
