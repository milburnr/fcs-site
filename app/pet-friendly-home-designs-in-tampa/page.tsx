import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Dog, Home, Shield, Heart, Droplets } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Pet-Friendly Home Designs in Tampa | Custom Homes for Pet Owners - Florida Construction Specialists",
  description: "Build pet-friendly custom homes in Tampa with built-in features for dogs, cats, and more. Mudrooms, pet suites, fenced yards, durable flooring, and pet-washing stations. From $400K-$2M+.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Pet-Friendly Home Designs in Tampa", href: "/pet-friendly-home-designs-in-tampa/" },
];

const internalLinks = [
  { href: "/services/residential/", label: "Residential Construction Services" },
  { href: "/tampas-custom-family-home-builders/", label: "Custom Family Homes" },
  { href: "/tampa-custom-outdoor-living-spaces/", label: "Outdoor Living Spaces" },
  { href: "/spacious-family-homes-construction-in-tampa/", label: "Spacious Family Homes" },
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
            alt="Pet-friendly custom home design in Tampa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Pet-Friendly Home Designs in Tampa
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Homes designed for the whole family—including the four-legged members. Built-in pet amenities, durable finishes, secure outdoor spaces, and thoughtful details that make life better for pets and owners alike.
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
              For many Tampa Bay families, pets aren't just animals—they're beloved family members whose comfort and happiness matter deeply. Yet most homes are designed exclusively for humans, leaving pet owners to awkwardly accommodate their companions' needs after the fact. Florida Construction Specialists takes a different approach, designing custom homes with pets in mind from the beginning. The result is housing that works beautifully for everyone, with built-in features that make pet ownership easier and more enjoyable.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Designing for Life with Pets
            </h2>
            <p className="text-gray-600 mb-6">
              Pet-friendly design begins with understanding how pets actually use spaces. Dogs need easy outdoor access for bathroom breaks. Cats need elevated perches and sunny windows. Both need secure outdoor areas where they can enjoy fresh air safely. Pet food and supplies need organized storage. Grooming and bathing require appropriate facilities. Veterinary emergencies sometimes require immediate access. These functional requirements shape floor plans, material selections, and feature planning.
            </p>
            <p className="text-gray-600 mb-6">
              Beyond function, pet-friendly design considers aesthetics. Built-in feeding stations look better than bowls scattered on kitchen floors. Integrated pet doors maintain architectural integrity. Hidden litter box enclosures preserve bathroom beauty. Storage systems conceal pet supplies while keeping them accessible. The goal is homes that accommodate pets elegantly rather than appearing overrun by them.
            </p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
              <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
                <Dog className="w-6 h-6" />
                Pet-Friendly Home Essentials
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">Indoor Features</h4>
                  <ul className="space-y-1 text-orange-900">
                    <li>• Pet-washing stations</li>
                    <li>• Built-in feeding areas</li>
                    <li>• Durable, pet-proof flooring</li>
                    <li>• Hidden litter box enclosures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">Outdoor Features</h4>
                  <ul className="space-y-1 text-orange-900">
                    <li>• Secure fenced yards</li>
                    <li>• Dog runs and play areas</li>
                    <li>• Outdoor pet doors</li>
                    <li>• Shade structures for pets</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Mudrooms and Pet Entry Points
            </h2>
            <p className="text-gray-600 mb-6">
              The transition between outdoors and indoors creates the greatest pet-related mess challenges. Dogs return from walks with muddy paws, wet fur, and outdoor debris. Mudrooms designed for pets solve these problems with built-in pet-washing stations featuring hand-held sprayers, elevated platforms for comfortable washing height, non-slip flooring, proper drainage, and storage for towels and grooming supplies. Dirty dogs get clean before entering living spaces.
            </p>
            <p className="text-gray-600 mb-6">
              Mudroom features extend beyond washing. Durable tile or concrete flooring handles wet paws and accidents. Built-in cubbies store leashes, toys, and waste bags. Hooks at appropriate heights hold collars and harnesses. Washer/dryer connections allow immediate laundering of pet bedding and towels. Some designs include separate pet entries with dog doors leading directly to mudroom areas, keeping muddy prints out of main traffic patterns entirely.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Durable Flooring Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              Flooring takes abuse from pets—scratches from nails, stains from accidents, wear from constant traffic. Pet-friendly flooring selections balance durability with aesthetics. Luxury vinyl plank (LVP) provides wood appearance with superior resistance to scratches, moisture, and staining. Porcelain tile handles everything pets dish out while staying cool in Tampa's heat—dogs love lying on cool tile floors. Polished concrete offers industrial durability with easy cleaning.
            </p>
            <p className="text-gray-600 mb-6">
              Where clients prefer carpet—bedrooms, for example—we specify solution-dyed nylon with stain treatment that actually works against pet accidents. Low-pile or looped carpets resist pet damage better than plush styles. Carpet tiles in bonus rooms or pet areas allow replacement of damaged sections without re-carpeting entire rooms. Material selections consider both pet behavior and owner aesthetic preferences.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Built-In Feeding Stations
            </h2>
            <p className="text-gray-600 mb-6">
              Built-in feeding stations eliminate bowls cluttering kitchen floors while making feeding more convenient. Cabinet-base pullouts hold food and water dishes at appropriate heights, sliding away when not in use. Drawer-mounted bowls tip out for easy access then conceal completely. Water dispensers with continuous supply reduce refilling frequency. Nearby storage holds food bags, treats, and supplements.
            </p>
            <p className="text-gray-600 mb-6">
              Location matters for feeding stations. Areas away from main traffic paths let pets eat undisturbed. Easy-clean flooring beneath handles spills. Multiple pet households might need separated feeding areas to prevent food aggression. Large dogs benefit from elevated feeders that reduce neck strain. These details make daily feeding routines smoother while maintaining kitchen aesthetics.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Cat-Friendly Features
            </h2>
            <p className="text-gray-600 mb-6">
              Cats have different needs than dogs, requiring vertical space, sunny perches, and private bathroom areas. Built-in cat shelves and climbing structures integrate with architecture rather than looking like afterthoughts. Wide window sills or built-in window seats provide sunny observation posts. Catios—enclosed outdoor spaces accessible through cat doors—let indoor cats enjoy outdoor sensations safely.
            </p>
            <p className="text-gray-600 mb-6">
              Litter box solutions deserve particular attention. Built-in enclosures in laundry rooms, bathrooms, or utility areas hide boxes while providing ventilation and easy cleaning access. Cat doors in cabinet faces let cats access boxes while keeping them invisible to guests. Ventilation systems can include air filtration to manage odors. These features make multi-cat households much more pleasant for human occupants.
            </p>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Outdoor Pet Spaces
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa's climate supports year-round outdoor time for pets, and well-designed yards enhance that enjoyment. Secure fencing keeps dogs safely contained while looking attractive. Dog runs provide exercise space for active breeds. Shaded areas—covered structures, large trees, or shade sails—protect pets from intense sun. Artificial turf in designated pet areas handles heavy use without mud or dead patches.
            </p>
            <p className="text-gray-600 mb-6">
              Landscaping considerations include pet-safe plant selections—many common landscaping plants are toxic to dogs or cats. Designated bathroom areas with appropriate drainage and easy-clean surfaces simplify yard maintenance. Pool fencing and alarms protect pets as well as children. Outdoor water features provide drinking water and cooling. These elements create yards where pets thrive as much as their owners.
            </p>

            {/* Cost Table */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Pet-Friendly Feature Investment Guide
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                  <thead className="bg-brand-green-dark text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Pet-Friendly Feature</th>
                      <th className="px-6 py-4 text-left">Description</th>
                      <th className="px-6 py-4 text-left">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Pet Washing Station</td>
                      <td className="px-6 py-4">Elevated tub with sprayer, non-slip surface, drainage</td>
                      <td className="px-6 py-4">$3,000 - $8,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Built-In Feeding Station</td>
                      <td className="px-6 py-4">Cabinet-integrated bowls, storage, water supply</td>
                      <td className="px-6 py-4">$1,500 - $4,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Dedicated Pet Mudroom</td>
                      <td className="px-6 py-4">Washing station, storage, durable finishes, pet entry</td>
                      <td className="px-6 py-4">$15,000 - $35,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Secure Fenced Yard</td>
                      <td className="px-6 py-4">Privacy fencing, gates, dig-proof barriers</td>
                      <td className="px-6 py-4">$10,000 - $30,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Complete Pet-Friendly Package</td>
                      <td className="px-6 py-4">All interior and exterior pet amenities</td>
                      <td className="px-6 py-4">$30,000 - $75,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Costs vary based on specifications, materials, and home size. High-end finishes and custom features at higher end of ranges. These costs are in addition to base home construction. All prices reflect 2024 Tampa Bay market rates.
              </p>
            </div>

            {/* Features Grid */}
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Pet-Friendly Home Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Cleaning & Grooming</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Pet washing stations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Grooming supply storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Easy-clean flooring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dedicated laundry access</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Feeding & Comfort</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Built-in feeding stations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Pet bed nooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Window perches for cats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Climate-controlled spaces</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Safety & Security</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Secure fencing systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Pet-safe landscaping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Pool safety features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Hidden hazard protection</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-brand-green" />
                  <h3 className="font-bold text-lg text-brand-green-dark">Outdoor Spaces</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dog runs and play yards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Catios for indoor cats</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Shade structures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Outdoor water features</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Tampa Bay's Pet-Friendly Lifestyle
            </h2>
            <p className="text-gray-600 mb-6">
              Tampa Bay embraces pet ownership with dog parks throughout the region, pet-friendly restaurants and breweries, beaches allowing dogs during certain hours, and generally welcoming attitudes toward animal companions. Building a pet-friendly home fits naturally into this lifestyle, creating a base from which to enjoy everything the region offers pet lovers.
            </p>
            <p className="text-gray-600 mb-6">
              Neighborhoods vary in pet-friendliness. Some HOAs restrict dog breeds or sizes. Street traffic affects outdoor safety. Proximity to parks and trails matters for daily walks. We help clients evaluate neighborhoods from pet-centric perspectives alongside traditional criteria like schools and commutes.
            </p>

            {/* FAQ Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Do pet-friendly features affect home resale value?
                  </h3>
                  <p className="text-gray-600">
                    Most pet-friendly features appeal to buyers beyond just pet owners. Mudrooms, durable flooring, and fenced yards have broad appeal. Purpose-built pet features like washing stations attract pet-owning buyers who increasingly expect such amenities. The key is designing features that feel integrated rather than afterthoughts—elegant solutions that enhance homes for any owner while particularly appealing to pet families.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you handle large or multiple dogs?
                  </h3>
                  <p className="text-gray-600">
                    Large dogs need larger features: washing stations sized for Great Danes rather than Chihuahuas, wider pet doors, more substantial fencing. Multiple-dog households benefit from separated feeding stations, larger outdoor areas, and potentially separate indoor rest areas if dogs don't always get along. We discuss your specific pets during planning to ensure features match their actual needs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    What flooring is best for pets?
                  </h3>
                  <p className="text-gray-600">
                    Luxury vinyl plank (LVP) offers the best all-around pet performance: water-resistant, scratch-resistant, comfortable underfoot, and available in beautiful wood-look designs. Porcelain tile is nearly indestructible but harder underfoot. Polished concrete is extremely durable but requires area rugs for pet comfort. We recommend different solutions for different areas based on traffic, visibility, and pet behavior.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    Can existing homes be retrofitted with pet features?
                  </h3>
                  <p className="text-gray-600">
                    Many pet features can be added to existing homes: pet doors, washing stations in laundry rooms or garages, fencing, and flooring replacement. Built-in feeding stations are easier during kitchen renovations. Some features—like mudroom additions—require more significant construction. We evaluate existing conditions and recommend the most practical approach for adding pet amenities.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-brand-green-dark mb-2">
                    How do you handle exotic pets?
                  </h3>
                  <p className="text-gray-600">
                    Beyond cats and dogs, we've designed features for birds (aviaries, dedicated bird rooms), reptiles (custom terrariums, temperature-controlled spaces), fish (built-in aquariums, pond integration), and other exotic pets. Each species has unique requirements—we research specific needs and consult with veterinarians or specialists when designing custom accommodations for unusual pets.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Build Your Pet-Perfect Home
            </h2>
            <p className="text-gray-600 mb-6">
              Your pets deserve a home designed for their needs as much as yours. Florida Construction Specialists builds pet-friendly custom homes throughout Tampa Bay that make life better for the entire family—furry, feathered, or scaled members included. From basic pet-friendly features to elaborate accommodations, we create homes where pets thrive.
            </p>
            <p className="text-gray-600 mb-6">
              Contact us to discuss your vision for a pet-friendly home. We'll help you design a residence that works beautifully for every member of your family.
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
            Ready to Build Your Pet-Friendly Home?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Florida Construction Specialists for a consultation on pet-friendly custom home design in Tampa Bay.
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
