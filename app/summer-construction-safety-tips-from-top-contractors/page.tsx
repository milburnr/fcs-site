import Link from "next/link";
import Image from "next/image";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema"
import { Phone, CheckCircle, AlertTriangle, Sun, Droplets, CloudLightning, Thermometer, Clock } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { InternalLinks } from "@/components/InternalLinks";
import { RelatedArticles } from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Summer Construction Safety Tampa | Heat Safety",
  description: "Expert summer construction safety tips from top Tampa contractors. Learn about OSHA heat illness prevention, Florida-specific hazards, and keeping workers safe during hot weather construction.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Summer Construction Safety Tips from Top Contractors", href: "/summer-construction-safety-tips-from-top-contractors/" },
];

const faqs = [
  {
    question: "At what temperature should construction work be modified or stopped?",
    answer: "OSHA doesn't specify a temperature threshold, but recommends increased precautions when the heat index exceeds 80°F, with high alert at 91°F and very high alert at 103°F. In Florida's summer, heat index regularly exceeds 100°F. We implement modified schedules, increased breaks, and close monitoring when conditions warrant. Work may be suspended during extreme heat events when controls cannot adequately protect workers."
  },
  {
    question: "How much water should construction workers drink in hot weather?",
    answer: "OSHA recommends workers drink about 1 cup (8 ounces) of water every 15-20 minutes during hot weather, or about 1 quart per hour. Don't wait until you're thirsty—by then dehydration has begun. Avoid energy drinks, caffeine, and alcohol which can increase dehydration. Workers should drink before, during, and after shifts. Our sites provide unlimited cool water accessible within easy walking distance."
  },
  {
    question: "What are signs of heat stroke versus heat exhaustion?",
    answer: "Heat exhaustion symptoms include heavy sweating, weakness, cold/pale/clammy skin, fast/weak pulse, nausea, and fainting. Heat stroke is life-threatening: high body temperature (103°F+), hot/red/dry skin, rapid/strong pulse, confusion, and possible loss of consciousness. Heat exhaustion requires rest in a cool area and fluids. Heat stroke requires immediate 911 call and cooling measures. All workers are trained to recognize symptoms."
  },
  {
    question: "How long does heat acclimatization take?",
    answer: "Full acclimatization typically takes 7-14 days of gradually increasing heat exposure. New workers or those returning from extended absence should work limited hours the first days, gradually increasing over 1-2 weeks. OSHA recommends new workers spend only 20% of time in heat on day one, increasing 20% each subsequent day. Our acclimatization protocol protects new and returning workers during adjustment."
  },
  {
    question: "When is it too dangerous to work outside during Florida summer storms?",
    answer: "Work stops when lightning is detected within 10 miles (approximately 30-second flash-to-bang count). Workers should seek shelter in substantial buildings or hard-topped vehicles—not under trees, scaffolding, or cranes. Wait 30 minutes after the last thunder before resuming work. High winds require securing materials and stopping elevated work. We monitor weather continuously and have clear protocols for storm response."
  }
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/ensuring-construction-site-safety-a-top-priority/", label: "Construction Site Safety" },
  { href: "/safety-first-in-florida-commercial-construction-projects/", label: "Safety First in Commercial Projects" },
  { href: "/post-disaster-health-and-safety-inspections-in-tampa/", label: "Post-Disaster Safety Inspections" },
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
      <FAQSchema faqs={faqs} />
      
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Summer construction safety in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 via-orange-500/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Summer Construction Safety Tips from Top Tampa Contractors
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Expert guidance on protecting construction workers during Florida's brutal summer months, including OSHA heat illness prevention, storm safety protocols, and best practices from Tampa Bay's leading commercial contractors.
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
              Summer construction in Florida presents some of the most challenging working conditions in the country. With heat indices regularly exceeding 100°F, near-daily afternoon thunderstorms, intense UV radiation, and hurricane threats, Tampa Bay construction crews face hazards that demand specialized safety protocols. Florida Construction Specialists has developed comprehensive summer safety programs that protect workers while maintaining productivity throughout the region's hottest months.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Heat Illness is Preventable but Can Be Fatal</h3>
                  <p className="text-red-700">Dozens of workers die from heat-related illness each year, with hundreds more suffering serious injuries. Heat stroke can develop rapidly and is life-threatening without immediate treatment. Every construction worker and supervisor must know the signs and proper response. Prevention through water, rest, and shade saves lives.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              OSHA Heat Illness Prevention Requirements
            </h2>
            
            <p className="text-gray-600 mb-6">
              While OSHA doesn't have a specific heat standard, employers have a General Duty Clause obligation to protect workers from recognized hazards including heat illness. OSHA's recommended heat illness prevention program includes:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-400">
                <Droplets className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Water</h3>
                <p className="text-gray-600">Provide cool drinking water in sufficient quantity—at least one quart per worker per hour. Water should be located close to work areas. Encourage drinking every 15-20 minutes.</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border-2 border-green-400">
                <Clock className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Rest</h3>
                <p className="text-gray-600">Allow workers to take breaks to cool down. In high heat, rest breaks should be frequent and mandatory—not optional. Use a buddy system to monitor for heat illness symptoms.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-400">
                <Sun className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Shade</h3>
                <p className="text-gray-600">Provide shaded areas for breaks and recovery. Shade should be close to work areas and able to accommodate all workers during breaks. Tents, canopies, or buildings qualify.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Understanding Heat Illness Levels
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Heat Index</th>
                    <th className="px-6 py-4 text-left">Risk Level</th>
                    <th className="px-6 py-4 text-left">Required Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 bg-green-50">
                    <td className="px-6 py-4 font-medium">Below 80°F</td>
                    <td className="px-6 py-4 text-gray-600">Lower (Caution)</td>
                    <td className="px-6 py-4 text-gray-600">Basic heat safety: water, training, first aid</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-yellow-50">
                    <td className="px-6 py-4 font-medium">80°F - 90°F</td>
                    <td className="px-6 py-4 text-gray-600">Moderate</td>
                    <td className="px-6 py-4 text-gray-600">Water breaks every 15-20 min, buddy system, shade available</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-orange-50">
                    <td className="px-6 py-4 font-medium">91°F - 103°F</td>
                    <td className="px-6 py-4 text-gray-600">High</td>
                    <td className="px-6 py-4 text-gray-600">Scheduled mandatory rest breaks, active monitoring, modified pace</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-medium">103°F - 115°F</td>
                    <td className="px-6 py-4 text-gray-600">Very High</td>
                    <td className="px-6 py-4 text-gray-600">15-min breaks every 45 min, physiological monitoring, work cessation considered</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-100">
                    <td className="px-6 py-4 font-medium">Above 115°F</td>
                    <td className="px-6 py-4 text-gray-600">Extreme</td>
                    <td className="px-6 py-4 text-gray-600">Reschedule work to cooler times or cease operations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              *Heat index combines temperature and humidity. Florida's high humidity often creates heat indices 10-15°F above actual temperature. Tampa regularly sees heat indices above 100°F from June through September.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Recognizing Heat Illness Symptoms
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Heat Exhaustion (Serious)</h3>
                <p className="text-gray-600 mb-3">Requires immediate intervention but not usually life-threatening:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Heavy sweating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Cold, pale, clammy skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Fast, weak pulse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Nausea or vomiting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Muscle cramps, weakness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>Dizziness, headache, fainting</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-3 font-semibold">Response: Move to cool area, loosen clothing, apply cool wet cloths, sip water. Get medical help if symptoms worsen or last more than 1 hour.</p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Heat Stroke (Life-Threatening)</h3>
                <p className="text-gray-600 mb-3">Medical emergency requiring immediate 911 call:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>High body temperature (103°F+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Hot, red, dry or damp skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Rapid, strong pulse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Confusion, altered mental state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Slurred speech</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Loss of consciousness</span>
                  </li>
                </ul>
                <p className="text-red-700 mt-3 font-semibold">Response: CALL 911 IMMEDIATELY. Move to cool area. Use cold water or ice packs on neck, armpits, groin. Do NOT give fluids. Stay with person until help arrives.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Summer Schedule Modifications
            </h2>

            <p className="text-gray-600 mb-6">
              During Florida's hottest months, modified work schedules can significantly reduce heat exposure while maintaining productivity:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Early Start Programs</h3>
                <p className="text-gray-600 mb-3">Beginning work at 6:00 AM or earlier allows crews to complete significant work before peak heat. Many crews work 6 AM - 2 PM during summer, avoiding the hottest afternoon hours while still achieving full shifts. This requires coordination with:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Municipal noise ordinances (typically allow construction starting 7 AM)</li>
                  <li>• Material delivery schedules</li>
                  <li>• Subcontractor availability</li>
                  <li>• Building occupant schedules for renovation projects</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Strategic Task Scheduling</h3>
                <p className="text-gray-600 mb-3">Schedule the most physically demanding work during cooler morning hours. Reserve afternoons for less strenuous tasks or work in shaded/indoor areas:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Morning: Concrete work, roofing, heavy lifting, outdoor MEP rough-in</li>
                  <li>• Midday: Indoor work, planning, inspections, material staging</li>
                  <li>• Afternoon: Interior finish work, air-conditioned areas, administrative tasks</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Lightning and Storm Safety
            </h2>

            <p className="text-gray-600 mb-6">
              Florida leads the nation in lightning fatalities, and Tampa Bay is the "lightning capital" of North America. Construction workers face elevated risk due to outdoor exposure, elevated positions, and proximity to metal structures.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <CloudLightning className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Lightning Safety Protocol</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Monitor weather continuously during storm season</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Use 30-30 rule: Seek shelter if flash-to-bang is 30 seconds or less</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Evacuate scaffolds, cranes, and elevated positions first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Shelter in substantial buildings or hard-topped vehicles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Wait 30 minutes after last thunder to resume work</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Unsafe Shelter Locations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Under trees (even partially completed buildings)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Near scaffolding, cranes, or metal structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Open-sided equipment cabs or convertibles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>Near power lines or metal fencing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>In open areas or on high ground</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Additional Summer Safety Considerations
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Sun className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">UV Protection</h3>
                <p className="text-gray-600 mb-3">Florida's UV index regularly reaches "extreme" levels:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Provide UV-blocking safety glasses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Encourage wide-brim hard hat attachments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Make sunscreen readily available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Long-sleeve moisture-wicking shirts reduce exposure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <Thermometer className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-3">Clothing and PPE</h3>
                <p className="text-gray-600 mb-3">Balance protection with heat management:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Light-colored, loose-fitting clothing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Moisture-wicking fabrics when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Vented hard hats with sweatbands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>Cooling vests for high-heat tasks</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Worker Acclimatization Program
            </h2>

            <p className="text-gray-600 mb-6">
              New workers and those returning from extended absence are at significantly higher risk for heat illness. OSHA recommends a gradual acclimatization program:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Day</th>
                    <th className="px-6 py-4 text-left">New Workers</th>
                    <th className="px-6 py-4 text-left">Returning Workers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Day 1</td>
                    <td className="px-6 py-4 text-gray-600">20% of normal workload in heat</td>
                    <td className="px-6 py-4 text-gray-600">50% of normal workload in heat</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Day 2</td>
                    <td className="px-6 py-4 text-gray-600">40% of normal workload</td>
                    <td className="px-6 py-4 text-gray-600">60% of normal workload</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Day 3</td>
                    <td className="px-6 py-4 text-gray-600">60% of normal workload</td>
                    <td className="px-6 py-4 text-gray-600">80% of normal workload</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Day 4</td>
                    <td className="px-6 py-4 text-gray-600">80% of normal workload</td>
                    <td className="px-6 py-4 text-gray-600">100% of normal workload</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Day 5+</td>
                    <td className="px-6 py-4 text-gray-600">100% of normal workload</td>
                    <td className="px-6 py-4 text-gray-600">Full duties</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mb-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-brand-green-dark text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Summer-Safe Commercial Construction</h3>
              <p className="mb-6 text-gray-200">
                Florida Construction Specialists maintains comprehensive summer safety programs that protect workers while delivering quality projects throughout Tampa Bay's challenging summer conditions. Contact us to discuss your commercial construction project with a team that takes summer safety seriously.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/" className="btn-cta text-center">
                  Get Free Estimate
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      

      {/* Internal Links */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Safety Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Year-Round Construction Excellence
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for commercial construction backed by comprehensive safety programs designed for Florida's demanding climate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule Consultation
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
