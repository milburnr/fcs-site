import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ChefHat, Flame, Refrigerator, UtensilsCrossed, Wine } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Gourmet Kitchen Design in Tampa | Luxury Custom Kitchens",
  description: "Create stunning gourmet kitchens in Tampa custom homes. Professional-grade appliances, custom cabinetry, premium countertops, and chef-inspired design. Kitchen investments from $75K-$300K+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Gourmet Kitchen Design in Tampa", href: "/gourmet-kitchen-design-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/tampa-luxury-custom-home-building-services/", label: "Luxury Custom Home Building" },
  { href: "/high-end-home-construction-in-tampa/", label: "High-End Home Construction" },
  { href: "/designing-your-dream-home-in-tampa/", label: "Dream Home Design" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const faqs = [
  {
    question: "Are professional-grade appliances worth the premium?",
    answer: "For serious home cooks, absolutely. Professional ranges provide heat output and control that standard units can't match—essential for techniques like proper searing, wok cooking, and rapid boiling. Built-in refrigeration preserves food better and lasts longer. However, if you rarely cook elaborate meals, premium appliances may exceed your needs. Be honest about your cooking habits when specifying equipment."
  },
  {
    question: "How much space does a gourmet kitchen require?",
    answer: "Functional gourmet kitchens typically need 200-400 square feet minimum, with 300-500 square feet ideal for most serious home cooks. Islands require clearance of 42-48 inches on all sides for comfortable circulation. Butler's pantries add another 50-100+ square feet. Very large kitchens (500+ square feet) risk inefficient workflow if not designed carefully—bigger isn't always better."
  },
  {
    question: "What countertop material is best for gourmet kitchens?",
    answer: "There's no single best choice—optimal selection depends on your cooking style and maintenance tolerance. Quartzite offers excellent all-around performance with natural beauty. Quartz composites provide low maintenance with consistent appearance. Granite remains popular for good reason. Marble is ideal for pastry but requires careful maintenance. Many gourmet kitchens combine materials strategically."
  },
  {
    question: "Do gourmet kitchens add resale value?",
    answer: "High-quality kitchens consistently rank among the best investments for home value. Gourmet kitchens particularly appeal to buyers who will appreciate the features—serious cooks who understand equipment quality and design sophistication. In Tampa Bay's luxury market, premium kitchens are expected rather than exceptional. ROI typically ranges 60-80% for quality kitchen investments."
  },
  {
    question: "How do you accommodate multiple cooks?",
    answer: "Multi-cook kitchens require additional workspace, multiple prep areas, and careful traffic flow planning. Two prep sinks prevent congestion at the main sink. Separate prep zones with dedicated counter space let cooks work simultaneously. Clearances must accommodate passing each other safely around hot equipment. Some designs include separate stations for different tasks—baking areas, for example, separated from hot cooking zones."
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
            src="/images/custom-home-1/custom-home-1-display.webp"
            alt="Gourmet kitchen design in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Gourmet Kitchen Design in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Where culinary passion meets exceptional design. Professional-grade appliances, custom cabinetry, premium surfaces, and thoughtful layouts that inspire everyday cooking and memorable entertaining.
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
              For those who view cooking as art rather than chore, a gourmet kitchen isn't extravagance—it's essential infrastructure for passion. The right range, proper counter space, organized storage, and efficient workflow transform cooking from frustrating necessity into joyful creativity. Florida Construction Specialists designs and builds gourmet kitchens throughout Tampa Bay that rival professional restaurants while feeling like home, creating spaces where culinary dreams become daily reality.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              What Makes a Kitchen "Gourmet"
            </h2>
            <p className="text-gray-600 mb-6">
              Gourmet kitchens differ from standard kitchens in equipment quality, workspace quantity, and design sophistication. Where standard kitchens include basic appliances meeting minimum requirements, gourmet kitchens feature professional-grade equipment that performs like restaurant gear. Where standard kitchens provide adequate counter space, gourmet kitchens offer abundant workspace for complex multi-dish preparation. Where standard kitchens function adequately, gourmet kitchens inspire excellence.
            </p>
            <p className="text-gray-600 mb-6">
              True gourmet design also considers workflow—how ingredients move from storage to preparation to cooking to serving. Professional kitchens optimize these patterns for efficiency; home gourmet kitchens adapt professional principles for residential scale. The result is spaces that feel natural to work in, where everything needed is within reach, and cooking complex meals remains pleasurable rather than chaotic.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
              <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                <ChefHat className="w-6 h-6" />
                Gourmet Kitchen Essentials
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Equipment</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Professional-grade range/cooktop</li>
                    <li>• Double wall ovens</li>
                    <li>• Built-in refrigeration</li>
                    <li>• Warming drawers and steam ovens</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">Design Features</h4>
                  <ul className="space-y-1 text-amber-900">
                    <li>• Oversized islands with prep sink</li>
                    <li>• Butler's pantry and storage</li>
                    <li>• Premium countertops</li>
                    <li>• Custom cabinetry throughout</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Professional-Grade Appliances
            </h2>
            <p className="text-gray-600 mb-6">
              The heart of any gourmet kitchen is its range or cooktop. Professional-grade units from manufacturers like Wolf, Viking, Thermador, and La Cornue deliver BTU output that standard ranges can't match—essential for proper wok cooking, serious searing, and rapid boiling. Six-burner configurations with griddle or grill inserts provide versatility. Dual-fuel designs combine gas burners' responsiveness with electric ovens' even baking.
            </p>
            <p className="text-gray-600 mb-6">
              Supporting appliances complete the cooking arsenal. Double wall ovens allow simultaneous cooking at different temperatures. Steam ovens and combi-steam units enable healthy cooking techniques. Warming drawers keep finished dishes at serving temperature. Speed ovens combine convection and microwave for rapid cooking. Built-in coffee systems satisfy caffeine needs without countertop clutter. Each addition should serve your actual cooking style rather than simply adding features.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Refrigeration and Storage
            </h2>
            <p className="text-gray-600 mb-6">
              Serious cooking requires serious refrigeration. Built-in units from Sub-Zero, Thermador, and Miele offer capacity, organization, and preservation technology that standard refrigerators can't match. Multiple temperature zones preserve different ingredients optimally. Air purification extends produce freshness. Separate freezer columns provide restaurant-worthy frozen storage.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond refrigeration, gourmet kitchens require extensive dry storage. Walk-in or butler's pantries hold appliances, bulk ingredients, and serving pieces used less frequently. Kitchen cabinets feature organizational systems—spice drawers, pot lid organizers, mixer lifts, and custom inserts for every utensil. Nothing should require excavation; everything should have its designated, accessible place.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Countertops and Work Surfaces
            </h2>
            <p className="text-gray-600 mb-6">
              Counter surface selection balances aesthetics, durability, and function. Quartzite offers natural stone beauty with superior hardness and heat resistance. Granite remains popular for dramatic veining and proven durability. Quartz composites provide consistent appearance with excellent stain resistance. Marble, while softer and more maintenance-intensive, remains preferred for pastry work due to its cool surface.
            </p>
            <p className="text-gray-600 mb-6">
              Many gourmet kitchens incorporate multiple counter materials for different purposes. Butcher block sections provide integrated cutting surfaces. Stainless steel areas near ranges handle hot pots. Marble inserts serve pastry rolling. The overall design harmonizes these materials visually while optimizing each work zone functionally. Generous counter depth (26-30 inches versus standard 24) provides more usable workspace.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Island Design and Functionality
            </h2>
            <p className="text-gray-600 mb-6">
              Islands anchor most gourmet kitchens, providing workspace, storage, and social gathering point. Generous sizing—often 8+ feet long and 4+ feet deep—accommodates prep work, seating, and appliances without crowding. Multiple levels can separate prep workspace from dining counter. Island placement considers workflow triangle relationships with range, refrigerator, and sink.
            </p>
            <p className="text-gray-600 mb-6">
              Island features extend functionality. Prep sinks allow ingredient washing without interrupting main sink use. Cooktops positioned in islands enable cooking while facing family or guests. Integrated seating creates casual dining space. Below-counter refrigeration keeps ingredients at hand. Outlets every few feet power appliances wherever needed. Properly designed islands become command centers for culinary creation.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Custom Cabinetry
            </h2>
            <p className="text-gray-600 mb-6">
              Gourmet kitchen cabinetry requires furniture-quality construction and thoughtful organization. Inset doors with hidden hinges create clean lines. Full-extension drawer slides access deep storage completely. Soft-close mechanisms prevent slamming. Interior finishes match or complement exteriors. Construction uses solid hardwoods and premium plywood rather than particleboard.
            </p>
            <p className="text-gray-600 mb-6">
              Interior organization transforms cabinet utility. Drawer dividers organize utensils. Pull-out shelves bring rear contents forward. Vertical dividers store baking sheets and cutting boards. Corner solutions—super susans, blind corner pull-outs, or custom diagonal cabinets—maximize otherwise awkward space. Appliance garages hide small appliances while keeping them accessible. Every inch serves a purpose.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Gourmet Kitchen Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Kitchen Level</th>
                      <th className="px-6 py-4 text-left">Features</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Premium Custom Kitchen</td>
                      <td className="px-6 py-4">Quality appliances, semi-custom cabinetry, granite/quartz</td>
                      <td className="px-6 py-4">$75,000 - $125,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Gourmet Kitchen</td>
                      <td className="px-6 py-4">Pro-grade appliances, custom cabinetry, premium stone</td>
                      <td className="px-6 py-4">$125,000 - $200,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Chef's Dream Kitchen</td>
                      <td className="px-6 py-4">Top-tier appliances, full custom millwork, exotic surfaces</td>
                      <td className="px-6 py-4">$200,000 - $300,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Ultimate Culinary Suite</td>
                      <td className="px-6 py-4">Restaurant-grade equipment, bespoke everything, butler's pantry</td>
                      <td className="px-6 py-4">$300,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Appliances typically represent 25-40% of kitchen budget. Cabinetry ranges from $500-$2,000+ per linear foot depending on construction and finishes. Countertops range from $75-$300+ per square foot installed. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Gourmet Kitchen Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Flame className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Cooking Equipment</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Professional ranges (48"-60")</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Double convection ovens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Steam and combi-steam ovens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Commercial-style ventilation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Refrigerator className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Cold Storage</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Built-in refrigerator columns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Separate freezer drawers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Beverage centers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Under-counter refrigeration</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <UtensilsCrossed className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Prep & Cleanup</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Oversized main sink</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Prep sink in island</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Pot filler at range</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dual dishwashers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Wine className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Specialty Features</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Wine storage/refrigeration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Built-in coffee systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Warming drawers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Butler's pantry</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Ventilation: The Overlooked Essential
            </h2>
            <p className="text-gray-600 mb-6">
              Professional cooking generates significant heat, smoke, and odors that residential ventilation often can't handle. Gourmet kitchens require commercial-style ventilation—hood sizes and CFM ratings matched to range output. External blowers reduce kitchen noise while moving adequate air volume. Make-up air systems prevent negative pressure issues in tight modern homes. Proper ventilation is engineering, not decoration.
            </p>
            <p className="text-gray-600 mb-6">
              Hood design balances performance with aesthetics. Stainless steel commercial hoods make bold statements. Custom wood surrounds integrate hoods into traditional cabinetry. Concealed downdraft systems serve island cooktops when overhead hoods aren't feasible. Recirculating systems, while easier to install, never match true external exhaust performance for serious cooking.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay's Culinary Scene Inspiration
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay's vibrant culinary scene inspires home cooking. World-class restaurants demonstrate what's possible. Local farmers markets provide exceptional ingredients. Fishing opportunities bring fresh catch to home kitchens. Cuban, Spanish, and Southern influences suggest flavor profiles worth mastering. A gourmet kitchen equipped for these inspirations becomes the heart of Tampa Bay living.
            </p>
            <p className="text-gray-600 mb-6">
              Outdoor cooking complements indoor gourmet kitchens in Tampa's climate. Many clients combine sophisticated indoor kitchens with equally capable outdoor cooking spaces—grills, smokers, pizza ovens, and complete outdoor kitchens that extend culinary possibilities year-round. We design both environments as integrated systems.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Are professional-grade appliances worth the premium?
                  </h3>
                  <p className="text-gray-600">
                    For serious home cooks, absolutely. Professional ranges provide heat output and control that standard units can't match—essential for techniques like proper searing, wok cooking, and rapid boiling. Built-in refrigeration preserves food better and lasts longer. However, if you rarely cook elaborate meals, premium appliances may exceed your needs. Be honest about your cooking habits when specifying equipment.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How much space does a gourmet kitchen require?
                  </h3>
                  <p className="text-gray-600">
                    Functional gourmet kitchens typically need 200-400 square feet minimum, with 300-500 square feet ideal for most serious home cooks. Islands require clearance of 42-48 inches on all sides for comfortable circulation. Butler's pantries add another 50-100+ square feet. Very large kitchens (500+ square feet) risk inefficient workflow if not designed carefully—bigger isn't always better.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What countertop material is best for gourmet kitchens?
                  </h3>
                  <p className="text-gray-600">
                    There's no single best choice—optimal selection depends on your cooking style and maintenance tolerance. Quartzite offers excellent all-around performance with natural beauty. Quartz composites provide low maintenance with consistent appearance. Granite remains popular for good reason. Marble is ideal for pastry but requires careful maintenance. Many gourmet kitchens combine materials strategically.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do gourmet kitchens add resale value?
                  </h3>
                  <p className="text-gray-600">
                    High-quality kitchens consistently rank among the best investments for home value. Gourmet kitchens particularly appeal to buyers who will appreciate the features—serious cooks who understand equipment quality and design sophistication. In Tampa Bay's luxury market, premium kitchens are expected rather than exceptional. ROI typically ranges 60-80% for quality kitchen investments.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you accommodate multiple cooks?
                  </h3>
                  <p className="text-gray-600">
                    Multi-cook kitchens require additional workspace, multiple prep areas, and careful traffic flow planning. Two prep sinks prevent congestion at the main sink. Separate prep zones with dedicated counter space let cooks work simultaneously. Clearances must accommodate passing each other safely around hot equipment. Some designs include separate stations for different tasks—baking areas, for example, separated from hot cooking zones.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Create Your Culinary Sanctuary
            </h2>
            <p className="text-gray-600 mb-6">
              A gourmet kitchen transforms daily cooking from routine into ritual, from obligation into opportunity. Florida Construction Specialists designs and builds kitchens throughout Tampa Bay that inspire culinary creativity—spaces where serious cooks find joy in every meal preparation. Whether your passion is French technique, Italian simplicity, Asian flavors, or Southern comfort, we create kitchens equipped for your culinary journey.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your gourmet kitchen vision. We'll help you design a space where cooking dreams come true every day.
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
            Ready to Design Your Gourmet Kitchen?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on gourmet kitchen design in Tampa Bay.
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
