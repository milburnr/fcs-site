import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Shield, Lock, Camera, AlertTriangle } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Secure Custom Home Construction in Tampa | Safety & Protection",
  description: "Build a secure custom home in Tampa with integrated security systems, safe rooms, reinforced construction, and smart access control. Complete security from $25K-$150K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Secure Custom Home Construction in Tampa", href: "/secure-custom-home-construction-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/climate-resilient-custom-homes-in-tampa/", label: "Climate-Resilient Homes" },
  { href: "/smart-home-integration-in-tampa-custom-homes-2/", label: "Smart Home Integration" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Homes" },
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
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Secure custom home construction in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Secure Custom Home Construction in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Protect your family and valuables with comprehensive security integrated during construction. Safe rooms, access control, surveillance systems, and reinforced construction designed for Tampa Bay's premier custom homes.
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

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Tampa Bay's luxury custom homes deserve comprehensive protection that goes far beyond basic alarm systems. Florida Construction Specialists integrates security features during construction—when it's most cost-effective and least obtrusive—creating homes that are as secure as they are beautiful. From reinforced construction and safe rooms to sophisticated surveillance and access control, we build peace of mind into every project. Your family's safety shouldn't be an afterthought; it should be part of your home's DNA.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Designing Security Into Your Home
            </h2>
            <p className="text-gray-600 mb-6">
              The most effective home security begins with intelligent design that creates natural barriers and surveillance opportunities. We apply Crime Prevention Through Environmental Design (CPTED) principles throughout our projects—positioning windows for natural surveillance of entry points, eliminating hiding spots near doors, and creating clear sight lines from street to house. These design choices deter potential intruders before any electronic system activates.
            </p>
            <p className="text-gray-600 mb-6">
              During construction, we can economically install features that would be expensive or impossible to add later: conduit for future security wiring, reinforced door frames, wall backing for heavy safes, and structural provisions for safe rooms. Pre-wiring every entry point for sensors, camera locations for optimal coverage, and networking infrastructure for sophisticated systems all cost a fraction of post-construction retrofitting.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Tampa Bay Security Considerations
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Local Factors</h4>
                  <ul className="space-y-1 text-red-900">
                    <li>• Premium neighborhoods attract attention</li>
                    <li>• Vacation absences create opportunities</li>
                    <li>• Construction phase vulnerability</li>
                    <li>• Service personnel access management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-900 mb-2">Protection Priorities</h4>
                  <ul className="space-y-1 text-red-900">
                    <li>• Perimeter detection and deterrence</li>
                    <li>• Entry point reinforcement</li>
                    <li>• Interior safe rooms/areas</li>
                    <li>• Valuable storage solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Safe Room Construction
            </h2>
            <p className="text-gray-600 mb-6">
              Safe rooms—also called panic rooms or hardened shelters—provide last-resort protection during home invasions or severe weather events. Built to FEMA 320/361 standards for storm protection or higher specifications for security purposes, these rooms offer impenetrable refuge until authorities arrive or danger passes. During construction, we can incorporate safe rooms seamlessly into floor plans at far less cost than retrofitting.
            </p>
            <p className="text-gray-600 mb-6">
              Safe room construction typically involves reinforced concrete or steel walls, ceiling, and floor—capable of withstanding prolonged forced entry attempts. Doors are heavy steel with commercial-grade locks and reinforced frames. Ventilation systems provide fresh air without compromising security. Communications equipment (landlines, cell boosters, two-way radios) maintains contact with emergency services. Some clients include supplies for extended shelter duration.
            </p>
            <p className="text-gray-600 mb-6">
              Locations vary based on family needs and home layout. Master bedroom closets offer convenient overnight access but may be obvious to intruders. Interior rooms on first floors provide easier access from anywhere in the house. Basement installations offer maximum protection but may be less accessible. We help determine optimal placement based on your specific security concerns and family composition.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Reinforced Entry Points
            </h2>
            <p className="text-gray-600 mb-6">
              Doors and windows are home security's weakest links, and standard residential construction provides minimal resistance to determined intruders. We upgrade all entry points with reinforced door frames using continuous steel strike plates anchored with 3-inch screws into wall studs—not just the typical half-inch screws that pop out with one kick. Solid core or steel entry doors with commercial-grade deadbolts provide additional resistance.
            </p>
            <p className="text-gray-600 mb-6">
              In Tampa Bay, impact-rated windows and doors serve double duty: protecting against hurricane-force winds and providing substantial security enhancement. These products withstand significant impact from tools and flying debris, making forced entry through windows extremely difficult and time-consuming. For maximum security, interior window films add shatter resistance even to impact windows.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Electronic Security Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Professional security system integration during construction enables optimal sensor placement, invisible wiring, and comprehensive coverage that retrofit installations can't match. We install contact sensors on every door and window, motion detectors in strategic locations, and glass break sensors in vulnerable areas. Perimeter detection at fence lines or property boundaries provides early warning before intruders reach the house.
            </p>
            <p className="text-gray-600 mb-6">
              Modern security systems integrate with smart home automation, allowing unified control and intelligent responses. Arming the security system might simultaneously activate outdoor lighting, engage door locks, and adjust camera settings. Alarm events trigger immediate notification to your phone and monitoring services while capturing video evidence and illuminating the property. Remote monitoring lets you check your home from anywhere.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Video Surveillance Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Comprehensive camera coverage provides both deterrent effect and evidentiary capability. During construction, we install weatherproof exterior cameras covering all entry points, driveways, garages, and property perimeters. Interior cameras protect valuable areas while maintaining family privacy in sensitive spaces. Modern cameras offer 4K resolution, night vision, and wide-angle coverage that older systems can't match.
            </p>
            <p className="text-gray-600 mb-6">
              Network video recorders (NVRs) store footage locally and in secure cloud backup, ensuring evidence survives even if intruders destroy on-site equipment. AI-enhanced analytics distinguish between people, vehicles, and animals—reducing false alerts while ensuring genuine threats are flagged. License plate recognition cameras capture vehicle details at entry points. Integration with automation enables cameras to trigger lights and begin recording upon detected motion.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Access Control and Smart Locks
            </h2>
            <p className="text-gray-600 mb-6">
              Electronic access control replaces traditional keying with more secure and manageable alternatives. Smartphone credentials, pin codes, or biometric readers grant access without physical keys that can be lost, copied, or stolen. You can grant temporary codes for housekeepers, contractors, or guests—automatically expiring when service is complete. Audit logs record every entry and exit with timestamps for accountability.
            </p>
            <p className="text-gray-600 mb-6">
              Integration with home automation creates seamless arrival experiences: your phone's geofence unlocks the door, disarms security, adjusts lighting and climate, and opens the garage as you pull into the driveway. Departure automation reverses this sequence, ensuring nothing is forgotten. Remote access lets you lock doors from anywhere—no more wondering if you secured the house.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Security Integration Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Security Level</th>
                      <th className="px-6 py-4 text-left">Features</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Essential Security</td>
                      <td className="px-6 py-4">Alarm, cameras, smart locks</td>
                      <td className="px-6 py-4">$25,000 - $50,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Comprehensive Protection</td>
                      <td className="px-6 py-4">Full coverage + access control</td>
                      <td className="px-6 py-4">$50,000 - $100,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Enhanced Security</td>
                      <td className="px-6 py-4">Above + safe room, perimeter</td>
                      <td className="px-6 py-4">$100,000 - $175,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Maximum Security</td>
                      <td className="px-6 py-4">Complete estate protection</td>
                      <td className="px-6 py-4">$175,000 - $300,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Essential includes basic alarm, 8-12 cameras, and smart locks. Comprehensive adds full perimeter coverage and integrated access control. Enhanced includes FEMA-rated safe room and property perimeter detection. Maximum encompasses complete estate security for larger properties. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Security Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Physical Security</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>FEMA-rated safe rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Reinforced entry doors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Impact-rated windows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Vault/safe installation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Surveillance</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>4K camera systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Night vision coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>NVR with cloud backup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>AI motion analytics</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lock className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Access Control</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Smart lock systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Keypad/biometric entry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Temporary access codes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Entry audit logging</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Alarm Systems</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Door/window sensors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Motion detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Glass break sensors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Professional monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How much does a residential safe room cost?
                  </h3>
                  <p className="text-gray-600">
                    Safe rooms built during new construction typically range from $15,000-50,000 depending on size, specification level, and equipment. A basic FEMA 320 shelter for storm protection costs less than a high-security panic room with reinforced construction, backup communications, and supplies storage. Building during construction saves 30-50% compared to retrofitting existing homes, where demolition and structural modifications increase costs significantly.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What camera resolution do you recommend?
                  </h3>
                  <p className="text-gray-600">
                    We recommend 4K (8MP) cameras for key areas like entry points and driveways where facial and license plate identification matters, with 1080p adequate for general coverage areas. 4K provides sufficient detail for law enforcement identification from reasonable distances. Storage requirements increase with resolution, so we size NVR systems appropriately and configure motion-activated recording to optimize storage while maintaining complete coverage.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can security systems be hacked?
                  </h3>
                  <p className="text-gray-600">
                    Any networked system carries some vulnerability, but professional security installations implement enterprise-grade protection: encrypted communications, secure cloud connections, regular firmware updates, and network segmentation. Consumer-grade DIY systems are more vulnerable than professional installations. We configure proper cybersecurity practices including strong passwords, two-factor authentication, and isolated networks for security equipment.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do I need professional monitoring?
                  </h3>
                  <p className="text-gray-600">
                    Professional monitoring provides 24/7 response when you can't respond personally—during sleep, travel, or when phones are silenced. Monitored systems verify alarms and dispatch authorities without requiring your intervention. Self-monitoring works for some clients, but response delays can be significant. Many insurance companies offer premium discounts for professionally monitored systems. We recommend monitoring for comprehensive security but design systems to function either way.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you secure homes during construction?
                  </h3>
                  <p className="text-gray-600">
                    Construction-phase security includes temporary fencing, lockable tool storage, camera systems, and controlled access for workers and deliveries. High-value materials are delivered just-in-time rather than stored on site. We maintain sign-in logs and background check key personnel. For luxury projects, we implement enhanced protocols including temporary alarm systems and security patrols during critical phases when expensive materials are installed.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build Security Into Your Home
            </h2>
            <p className="text-gray-600 mb-6">
              Your family's security deserves more than afterthought installation of basic alarms. Florida Construction Specialists integrates comprehensive security during construction—creating homes that protect as effectively as they impress. From safe rooms and reinforced construction to sophisticated electronics and access control, we build peace of mind into every custom home.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss security integration for your Tampa Bay custom home project. We'll assess your needs, explain options, and develop a security plan that protects what matters most.
            </p>

          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Explore Related Services"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready to Build a Secure Custom Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on security-focused custom home construction in Tampa Bay.
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
