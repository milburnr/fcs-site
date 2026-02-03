import Link from "next/link";
import Image from "next/image";
import { ArticleSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Top Commercial Construction Florida | Standards",
  description: "Discover Florida&apos;s top-tier Commercial Construction specialist outshining competitors in multiple states. With a keen eye on the latest trends and regulations.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Top Commercial Construction in Florida", href: "/top-commercial-construction-in-florida/" },
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
            Florida Construction Specialists Leading the Way in Commercial Construction
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Discover Florida&apos;s top-tier Commercial Construction specialist outshining competitors in multiple states. With a keen eye on the latest trends and reg
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
                Florida's commercial construction industry stands as a beacon of innovation, quality, and excellence in the Southeast. With a robust economy, strategic geographic location, and forward-thinking building practices, the state has established itself as a leader in commercial development. Florida Construction Specialists exemplifies this excellence, delivering top-tier commercial construction services that set industry standards across the Tampa Bay region and beyond.
              </p>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Florida's Commercial Construction Industry Leadership
              </h2>
              
              <p className="text-gray-600 mb-4">
                Florida's commercial construction sector consistently ranks among the nation's most dynamic and innovative markets. The state's unique combination of year-round construction seasons, diverse economic sectors, and cutting-edge building technologies creates an environment where commercial construction excellence thrives.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Industry Growth and Market Position
              </h3>

              <ul className="text-gray-600 mb-6 space-y-2">
                <li><strong>Economic Impact:</strong> Florida's construction industry contributes over $50 billion annually to the state's economy</li>
                <li><strong>Employment Growth:</strong> The sector employs more than 500,000 professionals across various specialties</li>
                <li><strong>Market Volume:</strong> Commercial construction projects exceed $15 billion in annual value statewide</li>
                <li><strong>National Ranking:</strong> Florida consistently ranks in the top 5 states for construction activity and innovation</li>
                <li><strong>International Recognition:</strong> The state attracts global investment in commercial real estate development</li>
              </ul>

              <div className="bg-brand-green/5 p-6 rounded-lg mb-6">
                <h4 className="text-lg font-bold text-brand-green-dark mb-3">What Sets Florida Apart</h4>
                <p className="text-gray-600">
                  Florida's commercial construction industry benefits from a unique convergence of factors including favorable climate conditions enabling year-round construction, diverse economic sectors driving demand, innovative building codes promoting hurricane resilience, and a skilled workforce enhanced by leading educational institutions and continuous professional development programs.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Comparing Florida to Other States in Commercial Construction
              </h2>
              
              <p className="text-gray-600 mb-4">
                When evaluating commercial construction markets across the United States, Florida consistently demonstrates superior performance in key metrics including project completion rates, innovative building techniques, regulatory efficiency, and overall client satisfaction.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Competitive Advantages Over Other States
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Climate Benefits</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Florida:</strong> 12-month construction seasons with minimal weather delays
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Northern States:</strong> 6-8 month effective seasons with winter shutdowns
                  </p>
                </div>
                
                <div className="bg-green-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Regulatory Environment</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Florida:</strong> Streamlined permitting and business-friendly policies
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Other States:</strong> Often more complex regulatory frameworks
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Innovation Adoption</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Florida:</strong> Early adopter of green building and hurricane-resistant technologies
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Competitors:</strong> Often slower to implement new construction technologies
                  </p>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-3">Market Diversity</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Florida:</strong> Tourism, aerospace, agriculture, and technology sectors
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Other States:</strong> Often dependent on fewer economic sectors
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Florida Construction Specialists: Setting the Standard
              </h2>
              
              <p className="text-gray-600 mb-4">
                As Florida's premier commercial construction company, Florida Construction Specialists embodies the best of what the state's construction industry offers. Our comprehensive approach, innovative methodologies, and unwavering commitment to excellence position us at the forefront of commercial construction leadership.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Our Industry-Leading Capabilities
              </h3>

              <div className="space-y-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Advanced Project Management</h4>
                    <p className="text-gray-600">
                      Utilizing cutting-edge project management software and methodologies to ensure on-time, on-budget delivery of complex commercial projects. Our integrated approach coordinates all stakeholders from initial planning through final occupancy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Sustainable Construction Practices</h4>
                    <p className="text-gray-600">
                      Leading Florida's green building movement with LEED-certified projects, energy-efficient systems, and sustainable material sourcing. Our environmental stewardship reduces operational costs while enhancing building performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Hurricane-Resistant Engineering</h4>
                    <p className="text-gray-600">
                      Specializing in structures that exceed Florida Building Code requirements for wind resistance and severe weather protection. Our expertise in coastal construction ensures long-term durability and safety.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Technology Integration</h4>
                    <p className="text-gray-600">
                      Implementing Building Information Modeling (BIM), drone surveying, and IoT systems to optimize construction efficiency and building performance. Our tech-forward approach delivers superior outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Market Sectors and Specializations
              </h2>
              
              <p className="text-gray-600 mb-4">
                Florida's diverse economy creates opportunities for specialized commercial construction across multiple sectors. Our expertise spans the full spectrum of commercial development, adapting to each industry's unique requirements and regulations.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Key Industry Sectors
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border-l-4 border-brand-green pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-2">Healthcare Facilities</h4>
                  <p className="text-gray-600 text-sm">
                    Specialized construction for hospitals, medical centers, and outpatient facilities requiring strict regulatory compliance and infection control measures.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-2">Educational Institutions</h4>
                  <p className="text-gray-600 text-sm">
                    University buildings, K-12 schools, and research facilities designed for optimal learning environments and long-term durability.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-2">Retail and Hospitality</h4>
                  <p className="text-gray-600 text-sm">
                    Shopping centers, restaurants, hotels, and entertainment venues that capitalize on Florida's tourism economy and population growth.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-2">Industrial and Manufacturing</h4>
                  <p className="text-gray-600 text-sm">
                    Warehouses, distribution centers, and manufacturing facilities supporting Florida's logistics and production industries.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-2">Office and Corporate</h4>
                  <p className="text-gray-600 text-sm">
                    Modern office buildings, corporate headquarters, and mixed-use developments accommodating Florida's growing business sector.
                  </p>
                </div>
                
                <div className="border-l-4 border-brand-green pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-2">Government and Civic</h4>
                  <p className="text-gray-600 text-sm">
                    Municipal buildings, courthouses, and public safety facilities requiring specialized security and accessibility features.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Innovation and Technology Leadership
              </h2>
              
              <p className="text-gray-600 mb-4">
                Florida's commercial construction industry leads the nation in adopting innovative technologies and construction methodologies. This technological advancement enhances project efficiency, improves safety outcomes, and delivers superior building performance.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Cutting-Edge Construction Technologies
              </h3>

              <ul className="text-gray-600 mb-6 space-y-3">
                <li><strong>Building Information Modeling (BIM):</strong> 3D modeling and simulation for enhanced project visualization and coordination</li>
                <li><strong>Prefabricated Construction:</strong> Off-site manufacturing reducing construction time and improving quality control</li>
                <li><strong>Smart Building Systems:</strong> IoT integration for automated HVAC, lighting, and security management</li>
                <li><strong>Sustainable Materials:</strong> Advanced composites and recycled materials for environmental responsibility</li>
                <li><strong>Drone Technology:</strong> Aerial surveying and progress monitoring for improved project oversight</li>
                <li><strong>Virtual Reality:</strong> Immersive project visualization for stakeholder engagement and design validation</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Quality Assurance and Safety Standards
              </h2>
              
              <p className="text-gray-600 mb-4">
                Florida's top commercial construction companies maintain the highest quality and safety standards, exceeding national averages for project success and worker protection. These standards are essential for delivering exceptional results in Florida's demanding construction environment.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Comprehensive Quality Management
              </h3>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-3">Quality Control Processes</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Material inspection and testing protocols</li>
                      <li>• Regular third-party quality audits</li>
                      <li>• Continuous workforce training programs</li>
                      <li>• Digital documentation systems</li>
                      <li>• Performance tracking and analysis</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-3">Safety Excellence</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Zero-tolerance safety culture</li>
                      <li>• Daily safety briefings and inspections</li>
                      <li>• Advanced personal protective equipment</li>
                      <li>• Emergency response planning</li>
                      <li>• OSHA compliance monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Client Success Stories and Project Excellence
              </h2>
              
              <p className="text-gray-600 mb-4">
                The success of Florida's commercial construction industry is measured by the satisfaction of clients and the long-term performance of completed projects. Our portfolio demonstrates consistent delivery of projects that exceed expectations and provide lasting value.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Project Performance Metrics
              </h3>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-brand-green/5 rounded-lg">
                  <div className="text-3xl font-bold text-brand-green-dark mb-2">98%</div>
                  <div className="text-sm text-gray-600">On-Time Project Completion</div>
                </div>
                
                <div className="text-center p-6 bg-brand-green/5 rounded-lg">
                  <div className="text-3xl font-bold text-brand-green-dark mb-2">95%</div>
                  <div className="text-sm text-gray-600">Projects Under Budget</div>
                </div>
                
                <div className="text-center p-6 bg-brand-green/5 rounded-lg">
                  <div className="text-3xl font-bold text-brand-green-dark mb-2">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Economic Impact and Community Development
              </h2>
              
              <p className="text-gray-600 mb-4">
                Top commercial construction companies in Florida contribute significantly to economic growth and community development. Our projects create jobs, stimulate local economies, and enhance community infrastructure for long-term prosperity.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Community Investment Initiatives
              </h3>

              <ul className="text-gray-600 mb-6 space-y-2">
                <li><strong>Local Workforce Development:</strong> Training programs partnering with trade schools and unions</li>
                <li><strong>Supplier Partnerships:</strong> Prioritizing local and minority-owned business relationships</li>
                <li><strong>Community Infrastructure:</strong> Pro bono work for nonprofit organizations and civic projects</li>
                <li><strong>Environmental Stewardship:</strong> Green building practices reducing community environmental impact</li>
                <li><strong>Economic Multiplier Effect:</strong> Each construction dollar generating additional local economic activity</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Future Outlook and Industry Trends
              </h2>
              
              <p className="text-gray-600 mb-4">
                Florida's commercial construction industry continues evolving to meet changing market demands, technological advances, and environmental considerations. Understanding these trends positions us to deliver solutions that anticipate future needs and provide lasting value.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Emerging Industry Trends
              </h3>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-1">Resilient Design</h4>
                  <p className="text-gray-600 text-sm">
                    Increased focus on climate-adaptive construction techniques and materials for long-term durability.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-1">Smart Buildings</h4>
                  <p className="text-gray-600 text-sm">
                    Integration of AI, IoT, and automation systems for enhanced building performance and occupant comfort.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-1">Modular Construction</h4>
                  <p className="text-gray-600 text-sm">
                    Growing adoption of prefabricated construction methods for improved efficiency and quality control.
                  </p>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-lg font-bold text-brand-green-dark mb-1">Workforce Innovation</h4>
                  <p className="text-gray-600 text-sm">
                    Technology-enhanced training programs and digital tools improving construction productivity and safety.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
                Why Choose Florida Construction Specialists
              </h2>
              
              <p className="text-gray-600 mb-4">
                When selecting a commercial construction partner in Florida, discerning clients choose Florida Construction Specialists for our proven track record, comprehensive capabilities, and unwavering commitment to excellence. Our position as a top-tier Florida contractor is built on decades of successful projects and satisfied clients.
              </p>

              <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                Competitive Advantages
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Comprehensive Expertise</h4>
                    <p className="text-gray-600 text-sm">
                      Full-service capabilities spanning all commercial construction sectors with specialized knowledge in each area.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Local Market Knowledge</h4>
                    <p className="text-gray-600 text-sm">
                      Deep understanding of Florida's regulations, climate considerations, and market dynamics.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Technology Leadership</h4>
                    <p className="text-gray-600 text-sm">
                      Early adoption of construction technologies improving efficiency, quality, and client communication.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-green-dark mb-2">Proven Track Record</h4>
                    <p className="text-gray-600 text-sm">
                      Decades of successful project completions with consistently high client satisfaction ratings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-green/5 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3 font-heading">
                  Experience Florida's Top Commercial Construction
                </h3>
                <p className="text-gray-600 mb-4">
                  Partner with Florida Construction Specialists for your next commercial construction project and experience why we're recognized as Florida's premier commercial contractor. Our commitment to excellence, innovation, and client satisfaction sets us apart in the competitive Florida market.
                </p>
                <Link 
                  href="/contact/"
                  className="inline-flex items-center text-brand-green-dark font-bold hover:text-brand-green"
                >
                  Start Your Project Today <ArrowRight className="w-4 h-4 ml-2" />
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
