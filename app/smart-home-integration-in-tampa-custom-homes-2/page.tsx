import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Smartphone, Wifi, Shield, Volume2 } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema"
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Smart Home Integration in Tampa Custom Homes | Automation & Control - Florida Construction Specialists",
  description: "Integrate smart home technology in your Tampa custom home. Lighting control, climate automation, security, and entertainment systems. Complete automation from $25K-$200K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Smart Home Integration in Tampa Custom Homes", href: "/smart-home-integration-in-tampa-custom-homes-2/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/energy-efficient-custom-homes-in-tampa/", label: "Energy-Efficient Homes" },
  { href: "/secure-custom-home-construction-in-tampa/", label: "Home Security Features" },
  { href: "/custom-home-theaters-and-entertainment-spaces-in-tampa/", label: "Home Theater Spaces" },
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
            src="/wp-content/uploads/2023/12/custom-home-1.png"
            alt="Smart home technology integration in Tampa custom home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Smart Home Integration in Tampa Custom Homes
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Seamlessly control lighting, climate, security, entertainment, and more from any device. Professional-grade automation systems designed and installed during construction for invisible, reliable operation.
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
              Smart home technology has matured from novelty to necessity in Tampa's luxury custom homes. At Florida Construction Specialists, we integrate professional-grade automation systems during construction—when it's possible to run wiring invisibly, position components optimally, and create seamless control over your entire home environment. From the convenience of voice-activated lighting to the security of comprehensive camera systems to the energy savings of intelligent climate control, smart home integration enhances every aspect of modern living.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Professional vs. DIY Smart Home Systems
            </h2>
            <p className="text-gray-600 mb-6">
              While consumer-grade smart devices from Amazon, Google, and others have made basic home automation accessible to everyone, professional systems offer dramatically superior performance, reliability, and integration. Platforms like Savant, Crestron, and Control4 provide centralized control over hundreds of devices through purpose-built interfaces designed for daily living—not tech troubleshooting. These systems are programmed by certified technicians who understand how you want to live and configure automation to support your routines naturally.
            </p>
            <p className="text-gray-600 mb-6">
              The difference becomes clear in daily use. Consumer systems often require multiple apps, fail to communicate between brands, and struggle with complex scenes involving many devices. Professional systems present a single, intuitive interface—on wall-mounted touchscreens, tablets, remotes, or smartphones—that controls everything from one place. "Good night" might simultaneously set thermostats to sleeping temperatures, arm security, lock doors, turn off all lights, and lower motorized shades—all from one button press.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <Smartphone className="w-6 h-6" />
                Professional Automation Platforms
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Savant</h4>
                  <ul className="space-y-1 text-blue-900 text-sm">
                    <li>• Apple-like interface design</li>
                    <li>• Excellent AV integration</li>
                    <li>• Energy management focus</li>
                    <li>• Reliable cloud backup</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Control4</h4>
                  <ul className="space-y-1 text-blue-900 text-sm">
                    <li>• Extensive device support</li>
                    <li>• Scalable from starter to estate</li>
                    <li>• Strong dealer network</li>
                    <li>• Cost-effective professional tier</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Crestron</h4>
                  <ul className="space-y-1 text-blue-900 text-sm">
                    <li>• Maximum customization</li>
                    <li>• Enterprise-grade reliability</li>
                    <li>• Complex AV specialty</li>
                    <li>• Premium positioning</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Lighting Control Systems
            </h2>
            <p className="text-gray-600 mb-6">
              Intelligent lighting transforms how you experience your home throughout the day. We install comprehensive lighting control systems from Lutron (RadioRA 3 or HomeWorks QSX) that dim every fixture to precise levels, create scenes for different activities, and adjust automatically based on time, occupancy, or daylight availability. Unlike basic smart switches, these systems are designed specifically for lighting and provide flawless dimming of LED fixtures—no flickering, buzzing, or compatibility issues.
            </p>
            <p className="text-gray-600 mb-6">
              Scene programming creates the foundation for daily living. "Morning" scenes might gradually brighten bedroom lights while starting the coffee maker and raising shades. "Entertain" scenes set perfect ambient lighting throughout social spaces. "Movie" scenes dim lights and lower shades at the touch of a button. Vacation modes simulate occupancy patterns while you're away. Keypads at strategic locations provide one-touch access to favorite scenes, while apps enable control from anywhere.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Climate Automation
            </h2>
            <p className="text-gray-600 mb-6">
              In Tampa's demanding climate, intelligent climate control delivers both comfort and significant energy savings. Zoned HVAC systems with smart thermostats allow different areas of your home to maintain individual temperatures—keeping the master suite cool for sleeping while reducing conditioning in unused guest wings. Learning algorithms optimize schedules based on your actual patterns rather than manual programming.
            </p>
            <p className="text-gray-600 mb-6">
              Integration with occupancy sensors adjusts temperatures based on actual room use rather than time schedules. When the home is empty, setpoints adjust automatically to save energy, then pre-condition spaces before your scheduled return. Humidity control—critical in Tampa—maintains comfortable levels without the constant monitoring required with manual systems. Integration with motorized shades reduces solar heat gain, letting your AC work smarter rather than harder.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Security and Access Control
            </h2>
            <p className="text-gray-600 mb-6">
              Modern security integration goes far beyond basic alarm systems to provide comprehensive awareness and control. High-definition cameras with night vision cover entry points, driveways, and property perimeters—accessible via smartphone from anywhere in the world. Motion detection triggers alerts and recording, while AI-enhanced systems can distinguish between people, vehicles, and animals to reduce false notifications.
            </p>
            <p className="text-gray-600 mb-6">
              Electronic access control replaces traditional keying with smartphone credentials, keypads, or biometric readers. You can grant temporary access to contractors, monitor who enters and when, and lock/unlock doors remotely. Integration with your automation system enables arriving home to automatically disarm security, unlock doors, and activate welcome lighting—all triggered by your phone's geofence recognition as you approach.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Distributed Audio and Video
            </h2>
            <p className="text-gray-600 mb-6">
              Whole-home audio fills every room with your choice of music without visible speakers cluttering your carefully designed interiors. In-ceiling and in-wall speakers from brands like Sonance, Origin Acoustics, and Triad disappear into architecture while delivering impressive sound quality. Zones can play independently or sync together for entertaining, with individual volume control per room.
            </p>
            <p className="text-gray-600 mb-6">
              Video distribution eliminates cable boxes and streaming devices in every room. Centralized equipment in a climate-controlled media closet feeds any TV in the house, maintaining clean aesthetics throughout. Matrix switchers allow any source—cable, streaming, gaming—to play on any screen. Your master bedroom might display the morning news while the kitchen shows recipe videos and the gym plays workout content—all from the same centralized equipment.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Network Infrastructure
            </h2>
            <p className="text-gray-600 mb-6">
              Reliable smart home performance demands professional-grade networking infrastructure—not consumer routers struggling to serve dozens of connected devices. We install enterprise-grade systems from Ruckus, Ubiquiti, or Access Networks that provide strong Wi-Fi coverage throughout the property, including outdoor living spaces, pools, and guest houses. Wired backbone connections to bandwidth-intensive devices ensure streaming never buffers.
            </p>
            <p className="text-gray-600 mb-6">
              Structured wiring during construction runs Cat6a ethernet and coax to every TV location, office, and strategic points throughout the home. This future-proofs your investment for evolving technology—whatever comes next will likely need wired connectivity for optimal performance. Equipment closets with proper ventilation house networking gear, automation processors, and AV equipment in organized, serviceable configurations.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Smart Home Integration Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">System Level</th>
                      <th className="px-6 py-4 text-left">Home Size</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Smart Foundation</td>
                      <td className="px-6 py-4">2,500-4,000 sq ft</td>
                      <td className="px-6 py-4">$25,000 - $50,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Comprehensive Automation</td>
                      <td className="px-6 py-4">3,500-5,500 sq ft</td>
                      <td className="px-6 py-4">$50,000 - $100,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Luxury Smart Home</td>
                      <td className="px-6 py-4">5,000-8,000 sq ft</td>
                      <td className="px-6 py-4">$100,000 - $175,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Estate Technology</td>
                      <td className="px-6 py-4">8,000+ sq ft</td>
                      <td className="px-6 py-4">$175,000 - $300,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Smart Foundation includes lighting control, basic climate integration, and distributed audio. Comprehensive adds full security, motorized shades, and video distribution. Luxury includes premium AV, complex scenes, and full integration. Estate encompasses complete property automation. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Smart Home Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Central Control</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Single app for all systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wall-mounted touchscreens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Voice control integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Remote access from anywhere</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Security Integration</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>HD camera systems with NVR</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Smart locks and access control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Motion detection and alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Professional monitoring option</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Volume2 className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">AV Distribution</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Whole-home audio zones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Invisible speaker systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Video matrix switching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Outdoor entertainment systems</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Wifi className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Infrastructure</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Enterprise-grade Wi-Fi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Cat6a structured wiring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Climate-controlled equipment room</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Battery backup for core systems</span>
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
                    Can I start with basic automation and expand later?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely—this is actually our recommended approach for many clients. We install comprehensive infrastructure (wiring, network, equipment space) during construction, which is far less expensive than retrofitting later. Then we activate systems in phases based on budget and priorities. Lighting control might come first, followed by security, then full audio, then motorized shades. The infrastructure supports full capability whenever you're ready to expand.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Will my smart home system become obsolete?
                  </h3>
                  <p className="text-gray-600">
                    Professional platforms like Savant, Control4, and Crestron are designed for longevity with software updates extending system life. The infrastructure we install—wiring, speakers, motor locations—will support technology evolution for decades. While individual components may eventually need replacement (like any technology), the core investment remains valuable. We also select systems with strong manufacturer track records and dealer support for long-term serviceability.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do smart homes handle power outages?
                  </h3>
                  <p className="text-gray-600">
                    We design systems with resilience in mind. Battery backup protects automation processors, network equipment, and security systems during brief outages. For longer outages, integration with whole-home generators keeps everything running. Even without backup power, mechanical overrides allow manual operation of lights, locks, and HVAC—you're never locked out by technology failures. Professional systems are far more reliable than consumer alternatives in outage recovery.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What about cybersecurity for smart homes?
                  </h3>
                  <p className="text-gray-600">
                    Professional automation systems implement enterprise-grade security including encrypted communications, secure cloud connections, and regular security updates. We configure networks with proper segmentation—keeping IoT devices separated from computers and phones. Strong password policies, two-factor authentication, and guest network isolation protect your privacy. Consumer devices often have weaker security; professional installation addresses these vulnerabilities systematically.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do I need ongoing service for my smart home?
                  </h3>
                  <p className="text-gray-600">
                    Most professional systems include optional service agreements covering software updates, remote diagnostics, and on-site support. We recommend these agreements for complex installations—they ensure your system continues performing optimally and provide priority response if issues arise. Basic systems may only need occasional service calls as needs change or components age. We remain available for modifications, expansions, and troubleshooting throughout your ownership.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Integrate Intelligence Into Your Home
            </h2>
            <p className="text-gray-600 mb-6">
              Smart home technology should simplify life rather than complicate it. Florida Construction Specialists designs and installs professional automation systems that work seamlessly, respond intuitively, and remain reliable year after year. Whether you're building a tech-forward estate with every conceivable automation or simply want convenient lighting and climate control, we create systems tailored to your lifestyle and budget.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss smart home possibilities for your Tampa Bay custom home project. We'll help you understand options, prioritize features, and develop a technology plan that enhances your daily life.
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
            Ready to Build a Smart Custom Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on smart home integration in your Tampa Bay custom home.
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
