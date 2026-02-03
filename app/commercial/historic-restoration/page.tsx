import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  CheckCircle,
  Award,
  FileText,
  ArrowRight,
  Phone,
  HelpCircle,
  Building2,
  Shield,
  Clock,
  DollarSign,
  Wrench,
  Hammer,
  BookOpen,
  Scale,
  Home,
  Church,
  GraduationCap,
  Factory,
  MapPin,
} from "lucide-react";
import { BUSINESS_INFO, LOCATIONS } from "@/lib/constants";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/Schema";
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
  title: "Historic Restoration Tampa | SHPO Compliance | FCS",
  description:
    "Expert historic restoration in Tampa Bay with proven National Register experience. Historic tax credits, SHPO compliance, Ybor City specialists. Italian Club, Lion's Eye Institute, Bay Pines VA Hospital restoration.",
  keywords:
    "historic restoration Tampa, historic preservation Florida, SHPO compliance, historic tax credits Florida, National Register restoration, Ybor City restoration, historic building restoration, Secretary of Interior Standards",
};

const features = [
  {
    title: "National Register Experience",
    description: "Proven track record restoring properties listed on the National Register of Historic Places",
    icon: Award,
  },
  {
    title: "SHPO Compliance",
    description: "Full coordination with Florida State Historic Preservation Office requirements and approvals",
    icon: FileText,
  },
  {
    title: "Historic Tax Credits",
    description: "Navigate federal and state historic tax credit programs to maximize project funding",
    icon: DollarSign,
  },
  {
    title: "Period-Authentic Restoration",
    description: "Traditional materials, techniques, and craftsmanship that meet Secretary of Interior Standards",
    icon: Wrench,
  },
];

const projectTypes = [
  { name: "Commercial Historic Buildings", icon: Building2 },
  { name: "Historic Homes & Estates", icon: Home },
  { name: "Churches & Religious Buildings", icon: Church },
  { name: "Government & Civic Buildings", icon: Scale },
  { name: "Educational Institutions", icon: GraduationCap },
  { name: "Industrial Heritage Sites", icon: Factory },
];

const caseStudies = [
  {
    name: "Italian American Club, Ybor City",
    description: "Complete interior and exterior restoration of this iconic National Historic Register landmark in the heart of Ybor City's historic district. Work included facade restoration, ornamental plaster repair, historic window rehabilitation, and period-appropriate interior finishes.",
    designation: "National Historic Register",
    scope: "Complete Interior/Exterior Restoration",
  },
  {
    name: "Lion's Eye Institute, Ybor City",
    description: "Sensitive restoration of this National Historic Register property, preserving its architectural character while accommodating modern medical facility requirements. Careful integration of new building systems while maintaining historic integrity.",
    designation: "National Historic Register",
    scope: "Historic Restoration & Adaptive Reuse",
  },
  {
    name: "Bay Pines Veterans Hospital",
    description: "Major federal historic restoration project requiring compliance with both federal preservation standards and VA facility requirements. Comprehensive exterior envelope restoration including masonry repair, window restoration, and waterproofing.",
    designation: "Federal Historic Property",
    scope: "$2M Federal Historic Restoration",
  },
  {
    name: "Plant High School, Tampa",
    description: "Extensive tuckpointing and brick restoration project preserving this beloved Tampa educational landmark. Work included comprehensive mortar analysis, careful joint preparation, and color-matched repointing using historically appropriate lime-based mortars.",
    designation: "Local Historic Landmark",
    scope: "$525K Tuckpointing & Brick Restoration",
  },
  {
    name: "Italian Club Tampa",
    description: "Major exterior waterproofing and historic restoration project addressing decades of moisture infiltration while preserving ornate architectural details. Included facade cleaning, masonry repair, and installation of concealed waterproofing systems.",
    designation: "National Historic Register",
    scope: "$1.2M Exterior Waterproofing/Historic Restoration",
  },
  {
    name: "Historic Sebring Fire Station",
    description: "FEMA compliance restoration following storm damage, requiring coordination with both federal emergency management requirements and historic preservation standards. Careful documentation and approval process ensured funding eligibility while maintaining historic character.",
    designation: "Local Historic Landmark",
    scope: "FEMA Compliance Restoration",
  },
  {
    name: "Wotjowicz House, Ybor City",
    description: "Ground-up new construction within Ybor City's historic barrio, requiring design review and approval to ensure compatibility with surrounding historic structures. Demonstrates FCS expertise in navigating local historic district requirements for infill construction.",
    designation: "Ybor City Historic District",
    scope: "New Construction in Historic District",
  },
  {
    name: "Ferraro House, Ybor City",
    description: "Residential project within Ybor City's historic barrio requiring full compliance with local historic district design guidelines. Work included exterior restoration and modifications that respect the neighborhood's character-defining features.",
    designation: "Ybor City Historic District",
    scope: "Historic Barrio Compliance",
  },
];

const faqs = [
  {
    question: "What qualifies a building for historic tax credits in Florida?",
    answer: "To qualify for federal historic tax credits, a building must be listed on the National Register of Historic Places individually or as a contributing structure in a registered historic district. The building must be income-producing (commercial, rental residential, industrial). Florida's historic tax credit has similar eligibility requirements. FCS can help you determine if your property qualifies and guide you through the certification process with the State Historic Preservation Office (SHPO)."
  },
  {
    question: "How much can we save with historic tax credits?",
    answer: "The Federal Historic Tax Credit provides a 20% credit on qualified rehabilitation expenditures for income-producing historic properties. Florida's Historic Preservation Tax Credit offers an additional credit on eligible projects. Combined, property owners can potentially recover a significant portion of restoration costs. Qualifying expenditures include labor, materials, architectural fees, and building systems—but exclude land acquisition, new additions, and site improvements. FCS coordinates with your tax advisors to maximize eligible expenses."
  },
  {
    question: "What is the SHPO review process for historic restoration?",
    answer: "Florida's State Historic Preservation Office (SHPO) reviews projects affecting historic properties through a three-part application process for tax credit projects. Part 1 certifies the property's historic significance. Part 2 describes the proposed work and must demonstrate compliance with Secretary of Interior Standards. Part 3 certifies completion. Reviews typically take 30-45 days per submission. FCS prepares detailed documentation, coordinates with SHPO reviewers, and addresses any concerns to ensure project approval."
  },
  {
    question: "What are the Secretary of Interior Standards for historic restoration?",
    answer: "The Secretary of Interior's Standards for the Treatment of Historic Properties are federal guidelines that govern historic rehabilitation, restoration, preservation, and reconstruction. For tax credit projects, work must comply with these standards. Key principles include: preserving character-defining features, repairing rather than replacing historic materials, using compatible new materials when replacement is necessary, and ensuring new work is reversible when possible. FCS has extensive experience applying these standards to ensure project approval."
  },
  {
    question: "Can we add modern HVAC and electrical to a historic building?",
    answer: "Yes, modern building systems can be integrated into historic structures when done sensitively. The key is minimizing impact on character-defining features. HVAC can be concealed in existing chases, attic spaces, or new dropped ceilings in non-historic areas. Electrical and data cabling can be routed through existing conduit paths or concealed in walls. Fire suppression systems require careful placement to avoid damaging ornamental features. FCS designs system integrations that meet code requirements while preserving historic integrity."
  },
  {
    question: "What's the difference between restoration and rehabilitation?",
    answer: "Restoration returns a building to its appearance at a specific historic period, often removing later alterations. Rehabilitation adapts a historic building for contemporary use while preserving character-defining features. Renovation typically refers to general updating without specific historic preservation requirements. For tax credit projects, rehabilitation is most common—it allows modern code compliance and functional improvements while maintaining the features that make the building historically significant. FCS helps clients choose the appropriate approach based on project goals and regulatory requirements."
  },
  {
    question: "How long does a historic restoration project typically take?",
    answer: "Historic restoration projects typically take 12-24 months from initial assessment through completion, depending on scope and complexity. Key timeline factors include: SHPO and NPS review periods (2-4 months), local permitting (2-3 months), specialty material procurement (2-6 months for custom windows, ornamental elements, or matching historic materials), and construction duration. FCS develops detailed schedules that account for regulatory reviews, long-lead items, and seasonal considerations for exterior work."
  },
  {
    question: "Do you work with local historic districts like Ybor City?",
    answer: "Yes, FCS has extensive experience in Tampa's local historic districts, particularly Ybor City. Local historic districts have their own design review processes separate from federal requirements. Ybor City's Barrio Latino Commission reviews exterior alterations and new construction for compatibility. We've completed multiple projects in Ybor including the Italian American Club, Lion's Eye Institute, Wotjowicz House, and Ferraro House. Our familiarity with local review processes helps expedite approvals."
  },
  {
    question: "What historic materials and techniques do you specialize in?",
    answer: "FCS specializes in traditional construction materials and techniques required for authentic historic restoration. Our capabilities include: historic masonry (brick, stone, terra cotta repair and repointing using lime-based mortars), ornamental plaster restoration, historic window rehabilitation and replication, architectural metalwork repair, wood restoration and millwork replication, and period-appropriate roofing systems. We maintain relationships with specialty suppliers and craftspeople who can match historic materials and details."
  },
  {
    question: "Can you help with FEMA funding for historic building damage?",
    answer: "Yes, FCS has experience coordinating FEMA requirements with historic preservation standards, as demonstrated in our Historic Sebring Fire Station project. When historic buildings are damaged by disasters, FEMA's Public Assistance program can fund repairs, but work must comply with Section 106 of the National Historic Preservation Act. This requires SHPO review to ensure repairs don't harm historic character. FCS navigates both FEMA documentation requirements and historic preservation reviews to maximize funding while maintaining compliance."
  },
];

const internalLinks = [
  { href: "/commercial/waterproofing/", label: "Commercial Waterproofing" },
  { href: "/commercial/masonry/", label: "Commercial Masonry Services" },
  { href: "/commercial/concrete-restoration/", label: "Concrete Restoration" },
  { href: "/services/disaster-recovery/", label: "Disaster Recovery Services" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

export default function CommercialHistoricRestorationPage() {
  const breadcrumbItems = [
    { name: "Commercial Services", href: "/commercial/" },
    { name: "Historic Restoration", href: "/commercial/historic-restoration/" },
  ];

  return (
    <>
      <LocalBusinessSchema schemaType="GeneralContractor" service="Historic Restoration Tampa" />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ServiceSchema
        serviceName="Historic Restoration Services"
        serviceDescription="Expert historic restoration in Tampa Bay with National Register experience. Historic tax credits, SHPO compliance, and period-authentic restoration using traditional materials and techniques."
        minPrice="100000"
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
              <Landmark className="w-12 h-12 text-brand-gold" />
              <span className="bg-brand-gold/20 text-brand-gold px-4 py-1 rounded-full text-sm font-bold border border-brand-gold/30">
                NATIONAL REGISTER EXPERIENCE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Historic Restoration Tampa<br />
              <span className="text-brand-gold">Preserving Florida&apos;s Architectural Heritage</span>
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Florida Construction Specialists brings proven expertise to historic preservation projects 
              throughout Tampa Bay. With completed restorations of National Historic Register properties 
              including the Italian American Club and Lion&apos;s Eye Institute in Ybor City, federal projects 
              like Bay Pines Veterans Hospital, and local landmarks like Plant High School, we deliver 
              authentic restoration that meets the most demanding preservation standards.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Our comprehensive historic restoration services encompass SHPO compliance coordination, 
              historic tax credit navigation, traditional materials and techniques, and sensitive 
              integration of modern building systems. Whether your project involves a contributing 
              structure in a local historic district or a individually-listed National Register property, 
              FCS has the experience and expertise to preserve your building&apos;s historic character 
              while meeting contemporary requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all shadow-lg"
              >
                Request Historic Restoration Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20"
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading mb-8 text-center">
              Tampa Bay&apos;s Trusted Historic Restoration Contractor
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Florida Construction Specialists has established a distinguished reputation for historic 
                restoration excellence throughout the Tampa Bay region. Our portfolio includes some of 
                the area&apos;s most significant preservation projects, from National Historic Register 
                landmarks in Ybor City to federally-owned historic facilities at Bay Pines Veterans Hospital. 
                This diverse experience has equipped our team with comprehensive knowledge of historic 
                preservation requirements at every level—federal, state, and local.
              </p>
              <p>
                Our historic restoration credentials include successful navigation of the State Historic 
                Preservation Office (SHPO) review process, coordination with the National Park Service 
                for federal tax credit certification, and compliance with local historic district commissions 
                including Ybor City&apos;s Barrio Latino Commission. We understand that historic restoration 
                projects require a different approach than conventional construction—one that prioritizes 
                preservation of character-defining features, employs traditional materials and techniques, 
                and maintains compliance with the Secretary of Interior&apos;s Standards for the Treatment of 
                Historic Properties.
              </p>
              <p>
                Notable FCS historic restoration projects include complete interior and exterior restoration 
                of the Italian American Club in Ybor City, the $2 million Bay Pines Veterans Hospital 
                federal historic restoration, $1.2 million exterior waterproofing and historic restoration 
                of the Italian Club Tampa, and $525,000 tuckpointing and brick restoration at Plant High 
                School. Each project demonstrates our commitment to authentic preservation, technical 
                expertise with traditional construction methods, and ability to navigate complex regulatory 
                requirements while delivering successful outcomes for property owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-brand-green-dark font-heading mb-4 text-center">
            Historic Restoration Expertise
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            FCS combines proven preservation experience with comprehensive technical capabilities to deliver 
            historic restoration projects that meet the highest standards of authenticity and compliance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <Icon className="w-12 h-12 text-brand-green mb-4" />
                  <h3 className="text-lg font-bold text-brand-green-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Understanding Historic Preservation */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Understanding Historic Preservation
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">What Qualifies as Historic?</h3>
              <p>
                Historic significance is determined through evaluation against specific criteria established 
                by federal, state, and local preservation programs. At the federal level, the National 
                Register of Historic Places uses four criteria: association with significant historical 
                events (Criterion A), association with significant persons (Criterion B), embodiment of 
                distinctive architectural characteristics (Criterion C), and potential to yield important 
                historical information (Criterion D). Properties typically must be at least 50 years old, 
                though exceptions exist for properties of exceptional significance.
              </p>
              <p>
                Beyond age, properties must retain sufficient integrity to convey their historical significance. 
                Integrity is evaluated across seven aspects: location, design, setting, materials, workmanship, 
                feeling, and association. A building that has been significantly altered may lack the integrity 
                necessary for historic designation, even if it meets other criteria. Understanding these 
                evaluation factors helps property owners assess whether their buildings may qualify for 
                historic designation and associated benefits.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">National Register of Historic Places</h3>
              <p>
                The National Register of Historic Places is the official federal list of districts, sites, 
                buildings, structures, and objects significant in American history, architecture, archaeology, 
                engineering, and culture. Maintained by the National Park Service, the Register includes 
                properties significant at the national, state, or local level. Listing provides formal 
                recognition of historic significance, eligibility for federal historic tax credits, 
                consideration in federal project planning, and qualification for federal preservation grants 
                when available.
              </p>
              <p>
                Properties can be listed individually or as contributing resources within historic districts. 
                Individual listing requires meeting significance criteria on the property&apos;s own merits. 
                District listing recognizes the collective significance of a cohesive historic area, with 
                individual buildings classified as contributing (adding to the district&apos;s significance) 
                or non-contributing. In Tampa Bay, significant National Register resources include Ybor City 
                National Historic Landmark District, Hyde Park Historic District, and numerous individually 
                listed properties throughout the region.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Local Historic Districts</h3>
              <p>
                Local historic districts provide an additional layer of protection beyond National Register 
                listing. While National Register listing is primarily honorary and does not restrict what 
                private property owners can do with their buildings, local historic districts typically 
                include design review requirements enforced through zoning regulations. Property owners 
                within local historic districts must obtain approval before making exterior alterations, 
                demolitions, or new construction.
              </p>
              <p>
                In Tampa, Ybor City&apos;s Barrio Latino Commission reviews projects within the local historic 
                district, applying design guidelines that address building materials, architectural details, 
                signage, and compatibility with surrounding historic structures. Tampa&apos;s other local historic 
                districts include portions of Hyde Park, Seminole Heights, and West Tampa. Understanding 
                local design review requirements is essential for any project within these designated areas.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Secretary of Interior&apos;s Standards</h3>
              <p>
                The Secretary of Interior&apos;s Standards for the Treatment of Historic Properties provide 
                philosophical and practical guidance for historic preservation work. These standards govern 
                four treatment approaches: Preservation (maintaining a property&apos;s existing form and materials), 
                Rehabilitation (adapting a property for continued or new use while retaining historic features), 
                Restoration (returning a property to its appearance at a specific historic period), and 
                Reconstruction (re-creating vanished historic resources).
              </p>
              <p>
                For projects seeking federal historic tax credits, compliance with the Rehabilitation Standards 
                is mandatory. Key principles include: preserving character-defining features, repairing rather 
                than replacing historic materials when feasible, using in-kind materials when replacement is 
                necessary, ensuring new additions are compatible but distinguishable from historic fabric, 
                and making alterations reversible when possible. These standards form the basis for SHPO 
                review of proposed work.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Why Historic Preservation Matters</h3>
              <p>
                Historic preservation provides multiple benefits that extend beyond individual properties to 
                entire communities. Economically, historic preservation supports local jobs, increases property 
                values, attracts heritage tourism, and revitalizes downtown areas. Studies consistently show 
                that historic districts appreciate faster than non-historic areas and generate higher property 
                tax revenues over time.
              </p>
              <p>
                Environmentally, preserving existing buildings is inherently sustainable—the greenest building 
                is often one that already exists. Historic buildings embody significant &quot;embodied energy&quot; in 
                their original construction materials. Adaptive reuse avoids demolition waste and the carbon 
                footprint of new construction. Many historic buildings feature passive design strategies 
                (thick masonry walls, high ceilings, operable windows) that reduce energy consumption when 
                properly maintained.
              </p>
              <p>
                Culturally, historic buildings connect communities to their heritage, providing tangible links 
                to the people and events that shaped local identity. Tampa Bay&apos;s historic resources tell the 
                story of the region&apos;s development—from the cigar industry heritage of Ybor City to the railroad 
                legacy of Plant System hotels to the military history preserved at Bay Pines. Preservation 
                ensures these stories remain visible for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Florida SHPO Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Florida SHPO Requirements
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">State Historic Preservation Office Role</h3>
              <p>
                Florida&apos;s State Historic Preservation Office (SHPO), housed within the Division of Historical 
                Resources under the Department of State, serves as the primary state agency for historic 
                preservation. SHPO administers the National Register program in Florida, reviews federal and 
                state historic tax credit applications, conducts Section 106 reviews for federally-funded or 
                licensed projects, maintains the Florida Master Site File of recorded archaeological and 
                historical sites, and provides technical assistance to property owners, local governments, 
                and preservation organizations.
              </p>
              <p>
                For historic restoration projects, SHPO&apos;s most direct involvement typically comes through 
                historic tax credit review. SHPO evaluates whether proposed work complies with the Secretary 
                of Interior&apos;s Standards, provides comments and recommendations for achieving compliance, 
                and forwards approved applications to the National Park Service for final federal certification. 
                Building a positive working relationship with SHPO staff helps ensure smooth project reviews 
                and timely approvals.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">The Review Process</h3>
              <p>
                SHPO&apos;s review process for historic tax credit projects follows a three-part application system. 
                Part 1 establishes the property&apos;s historic significance—either confirming existing National 
                Register listing or evaluating whether a property within a registered district qualifies as 
                contributing. Part 2 describes the proposed scope of work in detail, including existing conditions, 
                proposed treatments, and materials to be used. Part 3, submitted after construction, certifies 
                that completed work matches the approved scope.
              </p>
              <p>
                Each part undergoes SHPO review for compliance with preservation standards. Reviewers examine 
                whether proposed treatments are appropriate for the building&apos;s historic character, whether 
                materials and techniques align with preservation best practices, and whether the overall 
                approach preserves the features that make the building historically significant. Reviews 
                typically take 30-45 days, though complex projects may require longer evaluation periods or 
                multiple revision cycles.
              </p>
              <p>
                SHPO staff may request additional information, clarification, or modifications to proposed work 
                during review. Responsive communication and willingness to address concerns constructively helps 
                maintain project momentum. FCS&apos;s experience with SHPO review processes enables us to anticipate 
                potential issues and prepare applications that address reviewer concerns proactively.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Documentation Requirements</h3>
              <p>
                Historic tax credit applications require comprehensive documentation demonstrating existing 
                conditions, proposed treatments, and preservation rationale. Part 2 applications typically 
                include detailed written descriptions of each work item, keyed photographs showing existing 
                conditions, architectural drawings illustrating proposed changes, specifications for materials 
                and methods, and narrative explanations of how work complies with preservation standards.
              </p>
              <p>
                Photographic documentation is particularly important. SHPO expects before-condition photographs 
                of all areas where work is proposed, close-up images of deterioration or damage, views showing 
                context and relationships between building elements, and photographs of character-defining 
                features that will be affected by the work. Documentation should be systematic and comprehensive, 
                enabling reviewers to understand existing conditions without visiting the site.
              </p>
              <p>
                For complex projects, SHPO may request supplementary documentation including historic photographs 
                or drawings showing original conditions, materials analysis reports (mortar analysis, paint 
                studies, wood species identification), structural engineering assessments, or product data for 
                proposed replacement materials. FCS prepares documentation packages that anticipate information 
                needs and provide reviewers with clear, complete project information.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Certificate of Appropriateness</h3>
              <p>
                Beyond state SHPO review, projects in local historic districts require Certificates of 
                Appropriateness (COA) from local historic preservation commissions. In Tampa, the Barrio 
                Latino Commission reviews projects within the Ybor City local historic district, while 
                the Architectural Review Commission addresses projects in other local historic districts. 
                COA applications address exterior alterations, new construction, demolition, and signage 
                within designated districts.
              </p>
              <p>
                Local review focuses on compatibility with district character and compliance with adopted 
                design guidelines. Guidelines typically address materials, colors, proportions, architectural 
                details, and overall design compatibility. Review processes vary by jurisdiction—some commissions 
                meet monthly while others conduct administrative reviews for minor projects. Understanding 
                local timelines and procedures helps coordinate project schedules effectively.
              </p>
              <p>
                Projects requiring both SHPO review (for tax credits) and local COA approval must navigate 
                parallel regulatory processes. While standards are generally compatible, specific requirements 
                may differ. FCS coordinates submissions to ensure consistency between applications and addresses 
                any conflicting guidance through consultation with both reviewing authorities.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Tax Credit Eligibility</h3>
              <p>
                SHPO certification is essential for federal and state historic tax credit eligibility. Only 
                projects with approved Part 2 applications qualify for tax credits, and credit amounts are 
                based on certified rehabilitation expenditures. Work completed without Part 2 approval, or 
                work that deviates from approved scope without amendment, may be disqualified from credit 
                calculation.
              </p>
              <p>
                Timing is critical for tax credit projects. Part 2 applications should be submitted before 
                construction begins, allowing sufficient time for SHPO review and any necessary revisions. 
                While construction can proceed at owner&apos;s risk before receiving Part 2 approval, beginning 
                work without approval increases risk that proposed treatments will require modification. 
                FCS develops project schedules that account for review timelines and minimize risks associated 
                with phased approvals.
              </p>
              <p>
                For substantial rehabilitation projects (expenditures exceeding the adjusted basis of the 
                building), a 24-month measuring period applies for federal credits. Work completed outside 
                this window may not qualify. Florida&apos;s tax credit program has its own timing requirements 
                and application deadlines. FCS helps clients understand and meet timing requirements to 
                maximize credit eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Tax Credits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Historic Tax Credits in Florida
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Federal Historic Tax Credit (20%)</h3>
              <p>
                The Federal Historic Tax Credit (HTC) provides a 20% credit against federal income tax liability 
                for qualified rehabilitation expenditures on certified historic structures used for income-producing 
                purposes. Established by the Tax Reform Act of 1976 and modified by subsequent legislation, the 
                HTC has facilitated billions of dollars in private investment in historic preservation across 
                the nation. The program is administered jointly by the National Park Service and the Internal 
                Revenue Service, with state historic preservation offices providing initial review.
              </p>
              <p>
                Eligibility requirements include: the building must be a certified historic structure (listed 
                on the National Register individually or as a contributing building in a registered historic 
                district), the rehabilitation must be substantial (qualified expenditures must exceed the 
                greater of $5,000 or the adjusted basis of the building), the building must be placed in 
                service for an income-producing use (commercial, industrial, agricultural, or residential 
                rental—owner-occupied residential is not eligible), and the rehabilitation work must be 
                certified as meeting the Secretary of Interior&apos;s Standards.
              </p>
              <p>
                Credits are claimed in the tax year the rehabilitated building is placed in service. For 
                phased projects, credits may be claimed proportionally as each phase is completed. The credit 
                is subject to passive activity and at-risk rules, with recapture provisions if the property 
                is disposed of within five years. Property owners work with tax professionals to structure 
                ownership and financing arrangements that maximize credit utilization.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Florida Historic Preservation Tax Credit</h3>
              <p>
                Florida&apos;s Historic Preservation Tax Credit program provides additional incentive for rehabilitation 
                of historic structures. The state credit applies to income-producing properties that have been 
                rehabilitated in accordance with the Secretary of Interior&apos;s Standards. Like the federal program, 
                the state credit requires SHPO certification of both property significance and rehabilitation work.
              </p>
              <p>
                The Florida program has specific application requirements and deadlines. Property owners must 
                apply to participate in the program before beginning rehabilitation work, and credits are 
                allocated through a competitive process when applications exceed available funding. The state 
                credit can be combined with the federal credit, allowing projects to recover a substantial 
                portion of qualified rehabilitation costs through tax incentives.
              </p>
              <p>
                Additional state incentives may be available for properties listed on the National Register, 
                including ad valorem tax exemptions for qualifying rehabilitated properties. Local governments 
                may also offer incentives for historic preservation projects, including tax increment financing 
                (TIF), facade improvement grants, or reduced permit fees. FCS helps clients identify and 
                pursue all available incentive programs.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Qualifying Expenditures</h3>
              <p>
                Qualified rehabilitation expenditures (QREs) for tax credit purposes include most costs directly 
                associated with rehabilitation work on the historic building. Eligible expenses include: 
                construction costs for work on the building itself (labor, materials, contractor fees), 
                architectural and engineering fees related to the rehabilitation, project management costs, 
                developer fees (within IRS limits), and construction period interest (in some cases).
              </p>
              <p>
                Certain costs are specifically excluded from QRE calculation: acquisition costs for the 
                building or land, costs attributable to new construction or additions (unless the addition 
                is not visible from public rights-of-way), site improvements including parking lots, landscaping, 
                and sidewalks, furniture and equipment that is not permanently attached to the building, and 
                costs allocated to building components that are not structural, such as tenant improvements 
                in commercial spaces.
              </p>
              <p>
                Careful cost allocation is essential for maximizing QRE calculation. Construction contracts 
                should segregate eligible and ineligible costs, and accounting systems should track expenditures 
                by building component. FCS works with owners&apos; tax advisors to structure contracts and 
                documentation that support maximum QRE determination.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Application Process</h3>
              <p>
                The historic tax credit application process begins with Part 1, establishing the property&apos;s 
                historic significance. For buildings already listed on the National Register individually, 
                Part 1 confirms existing listing. For buildings in registered historic districts, Part 1 
                documents the property&apos;s status as a contributing structure. SHPO reviews Part 1 applications 
                and forwards approved applications to the National Park Service for certification.
              </p>
              <p>
                Part 2 describes the proposed rehabilitation work in comprehensive detail. The application 
                includes existing condition photographs, proposed treatment descriptions for each building 
                component, material specifications, and architectural drawings showing proposed changes. 
                SHPO reviews Part 2 for compliance with the Secretary&apos;s Standards, requesting modifications 
                or clarifications as needed. Approved Part 2 applications proceed to NPS for certification.
              </p>
              <p>
                Part 3 is submitted after rehabilitation completion, certifying that work was completed in 
                accordance with the approved Part 2 scope. Documentation includes completion photographs, 
                final expenditure amounts, and certification that no unapproved changes were made. SHPO reviews 
                Part 3 and forwards to NPS for final certification. The Part 3 certification letter is required 
                to claim the tax credit.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Working with SHPO</h3>
              <p>
                Successful historic tax credit projects typically involve ongoing coordination with SHPO 
                throughout the design and construction process. Pre-application consultation with SHPO staff 
                helps identify potential issues early, before detailed designs are developed. SHPO can advise 
                on whether proposed approaches are likely to meet the Standards, suggest alternatives for 
                problematic elements, and clarify documentation requirements.
              </p>
              <p>
                During project execution, Part 2 amendments may be necessary when field conditions differ 
                from application assumptions or when design refinements occur. SHPO prefers to review proposed 
                changes before implementation rather than discovering unauthorized deviations during Part 3 
                review. Maintaining open communication with assigned SHPO reviewers helps ensure projects 
                remain on track for certification.
              </p>
              <p>
                FCS&apos;s experience with Florida SHPO enables us to prepare applications that address reviewer 
                expectations, anticipate questions, and present proposed work in context that facilitates 
                approval. Our relationships with SHPO staff, developed through multiple successful projects, 
                support effective communication throughout the review process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Historic Restoration Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Types of Historic Restoration Projects
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Commercial Historic Buildings</h3>
              <p>
                Commercial historic buildings represent the largest segment of tax credit-eligible rehabilitation 
                projects. These properties include downtown office buildings from the late 19th and early 20th 
                centuries, historic storefronts and retail buildings, hotels and hospitality properties, 
                warehouses and industrial lofts converted to modern uses, and mixed-use buildings combining 
                retail, office, and residential. Commercial projects benefit from both federal and state tax 
                credits due to their income-producing nature.
              </p>
              <p>
                Tampa Bay&apos;s commercial historic inventory reflects the region&apos;s development history. Downtown 
                Tampa features early 20th century office towers, department store buildings, and financial 
                institutions. Ybor City&apos;s cigar industry heritage survives in factory buildings, social club 
                halls, and commercial structures along Seventh Avenue. Throughout the region, historic 
                commercial buildings offer rehabilitation opportunities that combine preservation values 
                with economic revitalization.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Historic Homes and Estates</h3>
              <p>
                Historic residential properties present unique restoration challenges and opportunities. 
                Grand historic estates often feature high-quality materials and craftsmanship that merit 
                preservation, from ornamental plaster and carved woodwork to tile roofs and masonry construction. 
                Vernacular historic homes, while more modest, document everyday life and regional building 
                traditions. Historic residential districts like Hyde Park and Seminole Heights contain 
                significant concentrations of preservable housing stock.
              </p>
              <p>
                Tax credit eligibility for residential properties requires income-producing use—owner-occupied 
                single-family homes do not qualify for federal historic tax credits. However, residential 
                properties converted to rental use, bed-and-breakfasts, or commercial purposes may qualify. 
                Properties within local historic districts face design review requirements regardless of 
                tax credit eligibility, ensuring restoration work maintains neighborhood character.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Churches and Religious Buildings</h3>
              <p>
                Religious properties often feature exceptional architectural quality and craftsmanship, 
                including stained glass windows, decorative masonry, ornamental metalwork, and elaborate 
                interior finishes. Historic churches, synagogues, and other religious buildings contribute 
                significantly to community identity and streetscape character. Many religious properties 
                are listed on the National Register for their architectural significance.
              </p>
              <p>
                Tax credit eligibility for religious properties requires that rehabilitated portions be 
                used for income-producing purposes. Adaptive reuse of portions of religious buildings 
                (community centers, event spaces, offices) may qualify while worship spaces continue 
                religious use. The distinction between income-producing and religious use must be 
                carefully documented for tax credit purposes. FCS has experience with religious 
                property restoration that addresses both preservation and continuing use requirements.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Government and Civic Buildings</h3>
              <p>
                Government and civic buildings—courthouses, city halls, libraries, post offices, and 
                public assembly buildings—represent significant architectural investments by earlier 
                generations. These buildings often feature high-quality materials and prominent locations 
                that merit continued preservation. Civic buildings may be individually listed on the 
                National Register or contribute to downtown historic districts.
              </p>
              <p>
                Restoration of publicly-owned historic buildings typically involves compliance with 
                Section 106 of the National Historic Preservation Act when federal funding or permits 
                are involved. Section 106 requires federal agencies to consider the effects of their 
                undertakings on historic properties and provide SHPO and other parties opportunity 
                to comment. FCS&apos;s experience with projects like Bay Pines Veterans Hospital demonstrates 
                capability in navigating federal historic preservation requirements.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Educational Institutions</h3>
              <p>
                Historic schools, colleges, and university buildings often feature distinguished 
                architecture and high-quality construction that supports continued use. Educational 
                buildings may include administrative structures, classroom buildings, auditoriums, 
                gymnasiums, and dormitories. Many educational campuses contain multiple historic 
                resources that could be rehabilitated individually or as coordinated projects.
              </p>
              <p>
                Plant High School in Tampa exemplifies the preservation challenges and opportunities 
                presented by historic educational buildings. FCS&apos;s $525,000 tuckpointing and brick 
                restoration project addressed weathering and deterioration while maintaining the 
                building&apos;s character-defining masonry. Educational property restoration must 
                accommodate continuing operations while completing preservation work, requiring 
                careful phasing and coordination.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Industrial Heritage Sites</h3>
              <p>
                Industrial buildings—factories, warehouses, power plants, and transportation facilities—
                document economic history and often feature robust construction suitable for adaptive 
                reuse. Tampa Bay&apos;s cigar industry left a significant inventory of factory buildings in 
                Ybor City, many now converted to commercial, residential, and entertainment uses. 
                Port and railroad facilities represent additional industrial heritage resources.
              </p>
              <p>
                Industrial building rehabilitation often involves extensive systems upgrades to support 
                new uses while large floor plates and high ceilings offer flexible spaces adaptable to 
                various programs. Industrial buildings may require environmental remediation as part of 
                rehabilitation, with brownfield incentives potentially available alongside historic tax 
                credits. FCS evaluates industrial property conditions comprehensively, addressing 
                structural, environmental, and preservation requirements in integrated project approaches.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div key={type.name} className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4">
                    <Icon className="w-10 h-10 text-brand-green flex-shrink-0" />
                    <span className="font-semibold text-brand-green-dark">{type.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Restoration vs Rehabilitation vs Renovation */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Restoration vs Rehabilitation vs Renovation
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Defining the Differences</h3>
              <p>
                The terms restoration, rehabilitation, and renovation are often used interchangeably 
                in common usage, but they have distinct meanings in historic preservation that affect 
                project approach, regulatory requirements, and tax credit eligibility. Understanding 
                these distinctions helps property owners choose appropriate treatment approaches and 
                communicate clearly with preservation professionals and regulatory agencies.
              </p>
              <p>
                <strong>Restoration</strong> returns a building to its appearance at a specific period in history, 
                typically the period of greatest significance. Restoration may involve removing later 
                additions or alterations that obscure the historic character, reconstructing missing 
                elements based on documentary evidence, and applying finishes consistent with the 
                target period. Restoration is most appropriate when the goal is to interpret a 
                property&apos;s appearance at a particular historic moment, such as for museums or 
                historic house interpretations.
              </p>
              <p>
                <strong>Rehabilitation</strong> adapts a historic property for continued or new use while preserving 
                character-defining features. Rehabilitation acknowledges that buildings must evolve 
                to remain useful, allowing alterations and additions that meet contemporary needs when 
                such changes do not damage historic character. The Secretary of Interior&apos;s Standards 
                for Rehabilitation govern historic tax credit projects, making rehabilitation the 
                most common treatment for income-producing historic properties.
              </p>
              <p>
                <strong>Renovation</strong> (or remodeling) refers to general building updating without specific 
                historic preservation requirements or methods. Renovation projects may or may not 
                respect historic character depending on owner preferences and local regulations. 
                Buildings not subject to historic designation or located outside historic districts 
                may be renovated freely, while designated properties require compliance with 
                applicable preservation standards.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">When Each Approach Is Appropriate</h3>
              <p>
                The appropriate treatment approach depends on the property&apos;s significance, condition, 
                intended use, and owner objectives. Restoration is typically reserved for properties 
                with exceptional significance where interpretive or commemorative use justifies the 
                higher cost and reduced flexibility. Examples include house museums, important historic 
                sites, and properties whose specific historic appearance is essential to their 
                significance.
              </p>
              <p>
                Rehabilitation is appropriate for most historic properties that will continue in 
                active use. It provides flexibility to meet contemporary code requirements, upgrade 
                building systems, and modify spaces for new programs while maintaining the features 
                that make the building historically significant. For tax credit projects, rehabilitation 
                is essentially required since the Standards for Rehabilitation govern credit eligibility.
              </p>
              <p>
                Renovation may be appropriate for properties without historic designation or 
                significance, properties where historic character has been substantially lost 
                through previous alterations, or situations where preservation is not an owner 
                priority. Property owners should understand, however, that renovation of designated 
                properties may violate local historic district regulations and could result in 
                loss of historic status and associated benefits.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Compliance Implications</h3>
              <p>
                Treatment approach has significant implications for regulatory compliance. Restoration 
                projects must document the target period thoroughly and demonstrate that treatments 
                accurately reflect historic conditions. This may require extensive historical research, 
                materials analysis, and consultation with preservation specialists. SHPO review of 
                restoration projects scrutinizes accuracy and appropriateness of treatments.
              </p>
              <p>
                Rehabilitation projects must demonstrate compliance with all ten Standards for 
                Rehabilitation, which address preservation of character-defining features, 
                compatibility of new work, and reversibility of alterations. SHPO reviewers 
                evaluate proposed treatments against each applicable standard, requesting 
                modifications when compliance issues are identified.
              </p>
              <p>
                FCS helps clients select appropriate treatment approaches based on project goals, 
                regulatory requirements, and practical considerations. Our experience with all 
                treatment types enables us to guide projects toward approaches that satisfy 
                owner objectives while achieving regulatory approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historic Materials and Techniques */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Hammer className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Historic Materials and Techniques
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Masonry Restoration</h3>
              <p>
                Historic masonry—brick, stone, terra cotta, and concrete block—requires specialized 
                restoration approaches that differ significantly from modern masonry practices. 
                Understanding the characteristics of historic masonry materials and construction 
                methods is essential for successful preservation. FCS&apos;s masonry restoration 
                capabilities have been demonstrated on projects ranging from Plant High School&apos;s 
                brick restoration to the Italian Club Tampa&apos;s ornamental facade work.
              </p>
              <p>
                <strong>Brick restoration</strong> begins with assessment of brick condition, mortar composition, 
                and deterioration patterns. Historic bricks are typically softer and more porous 
                than modern bricks, making them vulnerable to damage from inappropriate repairs. 
                Repointing (replacing deteriorated mortar) must use mortar that matches the original 
                in composition, color, texture, and joint profile. Modern Portland cement mortars 
                are typically too hard for historic masonry and can cause brick damage; lime-based 
                mortars compatible with the original construction are preferred.
              </p>
              <p>
                <strong>Stone restoration</strong> addresses weathering, staining, biological growth, previous 
                inappropriate repairs, and structural issues. Cleaning methods must be selected 
                carefully—harsh chemical or abrasive cleaning can damage stone surfaces and 
                accelerate future deterioration. Stone replacement should use material matching 
                the original in type, color, texture, and finish. Dutchman repairs replace 
                deteriorated portions while preserving as much original stone as possible.
              </p>
              <p>
                <strong>Terra cotta restoration</strong> presents unique challenges due to the material&apos;s hollow 
                construction, glazed surfaces, and complex ornamental forms. Failed glazes allow 
                moisture infiltration that causes internal deterioration and spalling. Terra cotta 
                repair options include patching with compatible materials, replacement with matching 
                new terra cotta from specialty manufacturers, and in some cases, approved substitute 
                materials when original cannot be replicated.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Historic Woodwork</h3>
              <p>
                Historic woodwork encompasses structural timber framing, exterior siding and trim, 
                windows and doors, interior millwork and cabinetry, and decorative elements including 
                columns, cornices, and ornamental details. Wood restoration requires understanding 
                of species characteristics, historic construction methods, deterioration mechanisms, 
                and appropriate repair techniques.
              </p>
              <p>
                Exterior wood elements face weathering from moisture, UV exposure, and biological 
                attack. Preservation strategies include maintaining protective finishes, addressing 
                water infiltration sources, and repairing deteriorated areas before damage spreads. 
                Epoxy consolidation can stabilize deteriorated wood in place, while Dutchman repairs 
                replace localized damage with matching new wood. Full replacement is appropriate 
                only when repair is not feasible.
              </p>
              <p>
                Interior woodwork preservation focuses on maintaining existing materials, finishes, 
                and configurations. Paint removal requires care to avoid damaging wood surfaces and 
                may require lead paint safe work practices. Missing or damaged elements can often 
                be replicated by skilled woodworkers using traditional methods. FCS maintains 
                relationships with craftspeople capable of producing custom millwork matching 
                historic profiles and joinery.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Metal Restoration</h3>
              <p>
                Historic buildings incorporate metals in structural and decorative applications, 
                including cast iron columns and storefronts, wrought and cast iron railings, 
                pressed metal cornices and ceilings, copper roofing and flashing, bronze hardware 
                and fixtures, and steel structural elements. Each metal type has distinct 
                deterioration characteristics and restoration requirements.
              </p>
              <p>
                Cast iron preservation addresses corrosion through cleaning to remove rust and 
                failed coatings, treatment with corrosion inhibitors, and application of protective 
                paint systems. Missing sections can be replicated through casting from surviving 
                examples. Wrought iron requires similar treatment, with careful attention to 
                maintaining the material&apos;s characteristic surface texture and handcrafted details.
              </p>
              <p>
                Copper and bronze develop protective patina over time that should be preserved 
                where possible. Cleaning methods must avoid removing patina or damaging surfaces. 
                Copper roofing preservation includes maintaining seams and joints, addressing 
                galvanic corrosion at dissimilar metal contacts, and ensuring proper flashing 
                integration with adjacent materials.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Plaster Repair</h3>
              <p>
                Historic plaster systems include both traditional three-coat lime plaster and 
                later gypsum-based materials. Ornamental plaster—decorative cornices, medallions, 
                columns, and cast elements—requires specialized conservation techniques. FCS&apos;s 
                Italian American Club restoration included significant ornamental plaster work 
                preserving the building&apos;s elaborate interior character.
              </p>
              <p>
                Plaster deterioration results from moisture infiltration, structural movement, 
                mechanical damage, and loss of key (the bond between plaster and lath). Repair 
                strategies depend on the type and extent of damage. Localized repairs can address 
                cracks, holes, and areas of failed key while preserving surrounding original plaster. 
                Extensive damage may require larger replacement areas matched to original appearance.
              </p>
              <p>
                Ornamental plaster restoration may include cleaning, consolidation, patching, 
                and replication of damaged or missing elements. Missing ornamental features 
                can be reproduced by casting from surviving examples or fabricated from 
                documentary evidence. FCS works with skilled plasterers experienced in 
                traditional ornamental techniques.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Historic Windows</h3>
              <p>
                Historic windows are often character-defining features contributing to a building&apos;s 
                historic appearance and significance. Wood windows with divided lights, distinctive 
                muntin profiles, and period glass are typically worth preserving rather than replacing. 
                Window restoration can achieve thermal performance approaching new windows while 
                maintaining historic character.
              </p>
              <p>
                Window rehabilitation includes repairing sash and frames, replacing deteriorated 
                components with matching materials, restoring operating hardware, reglazing as 
                needed, and applying weather-stripping to reduce infiltration. Interior storm 
                windows can improve thermal performance without altering exterior appearance. 
                When replacement is unavoidable, new windows should match the historic windows 
                in material, design, dimensions, and profiles.
              </p>
              <p>
                SHPO review carefully scrutinizes window treatments in tax credit projects. 
                Wholesale replacement of historic windows with vinyl or aluminum units is 
                generally not approvable. FCS advocates for window preservation approaches 
                that maintain historic character while meeting owner performance expectations.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Period-Appropriate Replacements</h3>
              <p>
                When historic materials cannot be repaired, replacement with compatible materials 
                is necessary. The Secretary of Interior&apos;s Standards require replacement materials 
                to match the original in design, color, texture, and where possible, materials. 
                Substitute materials may be acceptable when they achieve an appropriate visual 
                match and do not damage adjacent historic materials.
              </p>
              <p>
                Sourcing period-appropriate replacement materials requires understanding of 
                historic products and contemporary alternatives. FCS maintains relationships 
                with specialty suppliers offering historically compatible materials including 
                traditional mortars, period hardware, architectural glass, roofing materials, 
                and ornamental elements. For unique requirements, custom fabrication by 
                skilled craftspeople produces components matching historic originals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrating Modern Systems */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                Integrating Modern Systems in Historic Buildings
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">HVAC in Historic Buildings</h3>
              <p>
                Modern heating, ventilation, and air conditioning systems can be integrated into 
                historic buildings when design minimizes impact on character-defining features. 
                The challenge lies in routing ductwork, placing equipment, and locating registers 
                or diffusers without damaging historic fabric or disrupting significant interior 
                spaces. Successful HVAC integration requires creative engineering and close 
                coordination between preservation specialists and mechanical engineers.
              </p>
              <p>
                Strategies for HVAC integration include utilizing existing vertical chases (former 
                chimneys, unused shafts) for risers, concealing horizontal runs above new dropped 
                ceilings in less significant spaces, placing air handling equipment in basements 
                or attic spaces, using high-velocity small-duct systems that require smaller 
                penetrations, and locating registers and returns where they cause minimal 
                visual impact. For buildings with exceptional ornamental ceilings, slot diffusers 
                in perimeter locations may be preferable to conventional ceiling registers.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Electrical Upgrades</h3>
              <p>
                Historic buildings typically require substantial electrical system upgrades to 
                meet modern loads and code requirements. Original wiring systems may be inadequate 
                for contemporary use and could present safety hazards. Electrical rehabilitation 
                must balance capacity needs with preservation of historic fabric.
              </p>
              <p>
                Electrical routing strategies parallel HVAC approaches, utilizing existing 
                conduit paths where possible, concealing wiring in walls during plaster repairs, 
                and minimizing visible surface-mounted components. New electrical panels and 
                equipment are typically located in utility areas where visual impact is minimal. 
                Data and telecommunications cabling follows similar routing principles, often 
                sharing pathways with electrical distribution.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Plumbing Modernization</h3>
              <p>
                Plumbing upgrades in historic buildings address both supply and drainage systems. 
                Original supply piping may include lead service lines or lead-jointed connections 
                requiring remediation. Galvanized supply piping eventually corrodes and restricts 
                flow. Drainage systems using cast iron, clay, or obsolete materials may require 
                replacement or relining to restore function.
              </p>
              <p>
                Restroom additions or relocations must be sensitively sited to minimize impact 
                on significant spaces. Chase construction for vertical risers may be designed 
                to appear as historic elements or concealed within closets or service areas. 
                Where historic fixtures survive and function properly, preservation may be 
                preferable to replacement with modern units.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Fire Protection</h3>
              <p>
                Fire suppression requirements present significant challenges for historic 
                preservation. Exposed sprinkler piping and heads can disrupt ornamental 
                ceilings and walls. Fire alarm devices must be located for effectiveness 
                while minimizing visual impact. Careful design and close code official 
                coordination help achieve protection goals while preserving character.
              </p>
              <p>
                Concealed sprinkler heads minimize ceiling disruption where permitted by 
                code. Routing strategies place piping in accessible spaces above ceilings 
                or behind walls where possible. Historic buildings may qualify for 
                alternative compliance methods or variances under applicable codes. 
                FCS coordinates with fire protection engineers and code officials to 
                develop systems that protect both occupants and historic fabric.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Technology Infrastructure</h3>
              <p>
                Contemporary building use requires robust data infrastructure including 
                structured cabling, wireless access points, and security systems. Technology 
                requirements continue evolving, making future adaptability an important 
                design consideration. Infrastructure should be installed in ways that 
                permit future upgrades without major additional disruption.
              </p>
              <p>
                Wireless systems reduce the extent of physical cabling required, though 
                access points must still be sensitively located. Security cameras and 
                access control devices should be placed to minimize visibility while 
                achieving coverage objectives. Building automation systems can improve 
                energy efficiency while respecting historic character through careful 
                sensor and control placement.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">ADA Compliance</h3>
              <p>
                The Americans with Disabilities Act requires accessibility accommodations 
                in rehabilitated historic buildings, with some flexibility recognizing 
                that strict compliance may threaten historic character. Under ADA, 
                alterations to historic properties must comply &quot;to the maximum extent 
                feasible&quot; without threatening or destroying historic significance.
              </p>
              <p>
                Accessibility improvements may include entry modifications (ramps, lifts, 
                automatic doors), restroom adaptations, and path-of-travel improvements. 
                Where full compliance would damage historic features, alternative methods 
                may be acceptable. FCS works with accessibility consultants and SHPO to 
                develop solutions that achieve accessibility goals while preserving 
                significant historic elements. Documentation of accessibility consultation 
                supports both ADA and historic tax credit compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Historic Restoration Process */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-10 h-10 text-brand-gold" />
              <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading">
                The Historic Restoration Process
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Initial Assessment</h3>
              <p>
                Historic restoration projects begin with comprehensive assessment of existing 
                conditions, historic significance, and project feasibility. FCS conducts detailed 
                building surveys documenting structural systems, building envelope condition, 
                interior finishes, mechanical and electrical systems, and site conditions. 
                Assessment identifies deterioration, previous alterations, and hidden conditions 
                that will affect restoration scope and cost.
              </p>
              <p>
                Significance assessment evaluates the building&apos;s historic importance, identifying 
                character-defining features that must be preserved and understanding the property&apos;s 
                relationship to its historic context. For tax credit projects, this assessment 
                informs Part 1 application preparation. For all historic projects, understanding 
                significance guides treatment decisions throughout the project.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Historic Documentation</h3>
              <p>
                Thorough documentation establishes the basis for preservation decisions and regulatory 
                submissions. Documentation includes measured drawings of existing conditions, 
                photographic recording of exterior and interior features, research into building 
                history and original construction, and investigation of previous alterations. 
                Historic photographs, original drawings, and archival records provide valuable 
                evidence of original appearance.
              </p>
              <p>
                Technical documentation may include materials analysis (mortar analysis, paint 
                studies, wood identification), structural assessment, environmental investigation, 
                and building systems evaluation. This technical information informs treatment 
                recommendations and supports SHPO application preparation.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Design Development</h3>
              <p>
                Design development translates assessment findings and owner program requirements 
                into proposed treatments meeting preservation standards. For tax credit projects, 
                designs must demonstrate compliance with Secretary of Interior&apos;s Standards. Design 
                documentation includes treatment plans for each building component, specifications 
                for materials and methods, and drawings showing proposed alterations and additions.
              </p>
              <p>
                FCS collaborates with architects, engineers, and preservation consultants to develop 
                designs that achieve owner objectives while maintaining regulatory compliance. Early 
                consultation with SHPO helps identify potential issues before detailed design 
                investments. Design refinement continues through the regulatory review process as 
                reviewer comments are addressed.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">SHPO Coordination</h3>
              <p>
                For tax credit projects, SHPO coordination is essential throughout the project. 
                Part 1 and Part 2 applications must be prepared, submitted, and approved before 
                construction begins (or work proceeds at owner&apos;s risk). FCS prepares comprehensive 
                application packages addressing all documentation requirements and anticipating 
                reviewer questions.
              </p>
              <p>
                During construction, Part 2 amendments address field conditions or design changes 
                not covered by original approval. Regular communication with SHPO reviewers maintains 
                project momentum and ensures continued compliance. Part 3 submission after completion 
                certifies that work was executed as approved.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Construction Phase</h3>
              <p>
                Historic restoration construction requires skilled craftspeople, appropriate materials, 
                and careful execution. FCS&apos;s construction team includes personnel experienced in 
                traditional construction methods and historic materials. We maintain quality control 
                procedures ensuring work meets preservation specifications.
              </p>
              <p>
                Construction phasing considers preservation priorities, operational requirements for 
                occupied buildings, and seasonal factors for exterior work. Progress documentation 
                tracks work completion and provides evidence for Part 3 certification. Field decisions 
                regarding unforeseen conditions are evaluated against preservation standards and 
                coordinated with SHPO when necessary.
              </p>

              <h3 className="text-2xl font-bold text-brand-green-dark mt-8">Final Documentation</h3>
              <p>
                Project completion includes comprehensive documentation of finished work. Completion 
                photographs record restored conditions for comparison with before-condition 
                documentation. As-built drawings document final configurations. Maintenance 
                recommendations help owners preserve restoration investments over time.
              </p>
              <p>
                For tax credit projects, Part 3 documentation certifies completion in accordance 
                with approved scope. Final cost accounting establishes qualified rehabilitation 
                expenditures for credit calculation. FCS provides documentation packages supporting 
                both regulatory certification and owner record-keeping requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Award className="w-10 h-10 text-brand-gold" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark font-heading text-center">
              FCS Historic Restoration Portfolio
            </h2>
          </div>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our portfolio demonstrates proven expertise across diverse historic property types, 
            regulatory frameworks, and restoration challenges. Each project reflects our commitment 
            to authentic preservation and successful project outcomes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <Landmark className="w-8 h-8 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-dark mb-1">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-brand-green/10 text-brand-green-dark px-3 py-1 rounded-full text-sm font-medium">
                        {project.designation}
                      </span>
                      <span className="bg-brand-gold/10 text-brand-gold-dark px-3 py-1 rounded-full text-sm font-medium">
                        {project.scope}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <HelpCircle className="w-10 h-10 text-brand-gold" />
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading text-center">
              Historic Restoration Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-lg px-6 shadow-sm"
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

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <MapPin className="w-10 h-10 text-brand-gold" />
            <h2 className="text-3xl font-bold text-brand-green-dark font-heading text-center">
              Historic Restoration Service Areas
            </h2>
          </div>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            FCS provides historic restoration services throughout the Tampa Bay region and 
            Central Florida. Our service area includes numerous National Register properties, 
            local historic districts, and individual landmarks.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCATIONS.map((location) => (
              <div
                key={location.slug}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-brand-green-dark">
                  {location.name}, FL
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-brand-green/5 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-brand-green-dark mb-3 text-center">
              Notable Historic Districts We Serve
            </h3>
            <div className="grid grid-cols-2 gap-2 text-center">
              <span className="text-gray-700">Ybor City National Historic Landmark</span>
              <span className="text-gray-700">Hyde Park Historic District</span>
              <span className="text-gray-700">Seminole Heights</span>
              <span className="text-gray-700">West Tampa Historic District</span>
              <span className="text-gray-700">Downtown St. Petersburg</span>
              <span className="text-gray-700">Kenwood Historic District</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom text-center">
          <Landmark className="w-16 h-16 text-brand-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Preserve Tampa Bay&apos;s Architectural Heritage
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            From National Register landmarks to local historic districts, FCS brings proven 
            expertise to every historic restoration project. Our portfolio of completed 
            restorations—including the Italian American Club, Bay Pines Veterans Hospital, 
            and Plant High School—demonstrates our commitment to authentic preservation.
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let us help you navigate historic tax credits, SHPO compliance, and the specialized 
            requirements of restoring Florida&apos;s irreplaceable historic buildings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact/" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-white font-bold rounded-full hover:bg-brand-gold-dark transition-all shadow-lg"
            >
              Request Historic Restoration Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            title="Related Services"
            links={internalLinks}
          />
        </div>
      </section>
    </>
  );
}
