#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Related articles by category
const categories = {
  commercial: {
    pattern: /(commercial|office|retail|restaurant|warehouse|industrial|tenant|mall|business|contractor)/i,
    articles: [
      { title: "Mastering Commercial Construction Design in Florida", href: "/mastering-commercial-construction-design-in-florida/", description: "Learn the ins and outs of architectural design and commercial building design with our comprehensive guide for Florida projects." },
      { title: "Benefits of Design-Build for Commercial Projects", href: "/benefits-of-design-build-construction-for-commercial-project/", description: "Discover how design-build delivery streamlines commercial construction with single-source accountability." },
      { title: "Commercial Construction Budgeting Tips", href: "/commercial-construction-budgeting-tips-for-florida-specialists/", description: "Expert strategies for developing and managing budgets for commercial construction in Florida." },
      { title: "Tips for Commercial Renovation in Florida", href: "/tips-for-commercial-renovation-in-florida/", description: "Key considerations for successful commercial renovation projects in the Sunshine State." },
      { title: "Key Questions for Florida's Top Commercial Contractor", href: "/key-questions-for-floridas-top-commercial-contractor/", description: "Essential questions to ask before hiring a commercial contractor for your Florida project." },
      { title: "Value Engineering in Commercial Construction", href: "/value-engineering-in-commercial-construction/", description: "How value engineering optimizes costs without sacrificing quality in commercial projects." },
    ]
  },
  historic: {
    pattern: /(historic|restoration|preservation|heritage|shpo|landmark|ybor|hyde-park|certificate-of-appropriateness)/i,
    articles: [
      { title: "Tampa Historic Restoration Permits and Regulations", href: "/tampa-historic-restoration-permits-and-regulations/", description: "Navigate Tampa's historic restoration permit process including COA requirements and SHPO review." },
      { title: "Preserving Tampa's Cultural Heritage", href: "/preserving-tampas-cultural-heritage-through-restoration/", description: "How thoughtful restoration projects maintain Tampa Bay's architectural legacy." },
      { title: "Architectural Styles in Tampa's Historic Restoration", href: "/architectural-styles-in-tampas-historic-restoration/", description: "Understanding the diverse architectural heritage of Tampa's historic districts." },
      { title: "Historic Tax Credits for Commercial Buildings", href: "/historic-tax-credits-commercial-buildings/", description: "Maximize ROI with federal and state historic preservation tax incentives." },
      { title: "Tampa's Historic Districts Restoration Rules", href: "/tampas-historic-districts-restoration-rules/", description: "Guidelines for restoration projects in Tampa's designated historic areas." },
      { title: "Integrating Modern Amenities in Historic Homes", href: "/integrating-modern-amenities-in-tampas-historic-homes/", description: "Balancing modern comfort with historic preservation requirements." },
    ]
  },
  balcony: {
    pattern: /(balcony|waterproofing|exterior-waterproofing|deck|railing|sb4d|sb-4-d|milestone-inspection|sirs)/i,
    articles: [
      { title: "Balcony Restoration & Waterproofing for Longevity", href: "/balcony-restoration-and-exterior-waterproofing-for-longevity/", description: "Protect your investment with restoration systems engineered for 20+ years of service." },
      { title: "Florida SB4-D Compliance Guide", href: "/florida-sb4d-compliance-guide/", description: "Essential requirements for condo milestone inspections and structural integrity reserves." },
      { title: "Effective Balcony Maintenance Tips", href: "/effective-balcony-maintenance-tips/", description: "Proactive maintenance strategies to extend balcony lifespan and prevent costly repairs." },
      { title: "Condo Balcony Inspection Requirements", href: "/condo-balcony-inspection-requirements/", description: "Understanding inspection requirements under Florida's updated condo safety legislation." },
      { title: "Choosing the Right Waterproofing Solution", href: "/choosing-the-right-waterproofing-solution-your-ultimate-guide/", description: "Compare waterproofing systems for optimal performance in Florida's climate." },
      { title: "Discover the Best Balcony Decking Options", href: "/discover-the-best-balcony-decking-options-for-outdoor-spaces/", description: "Material options for durable, attractive balcony surfaces in coastal environments." },
    ]
  },
  insurance: {
    pattern: /(insurance|disaster|restoration|storm|hurricane|flood|water-damage|mold|claims|adjuster|fema)/i,
    articles: [
      { title: "Understanding Tampa Insurance Restoration Claims", href: "/understanding-tampa-insurance-restoration-claims/", description: "Navigate the insurance claim process for property damage restoration in Tampa Bay." },
      { title: "Tampa Insurance Restoration for Hurricane Damage", href: "/tampa-insurance-restoration-for-hurricane-damage/", description: "Expert restoration services for properties damaged by Florida hurricanes." },
      { title: "Insurance Arbitration and Appraisal", href: "/insurance-arbitration-appraisal/", description: "When and how to use appraisal and arbitration to resolve insurance disputes." },
      { title: "Claims Negotiation for Property Damage", href: "/claims-negotiation-for-property-damage-in-tampa/", description: "Maximize your insurance settlement with professional claims support." },
      { title: "Impact of Climate Change on Tampa Insurance Restoration", href: "/impact-of-climate-change-on-tampa-insurance-restoration/", description: "How changing weather patterns affect property damage and restoration needs." },
      { title: "Tampa's Building Codes for Insurance Restoration", href: "/tampas-building-codes-for-insurance-restoration/", description: "Code requirements that affect insurance restoration scope and costs." },
    ]
  },
  customHomes: {
    pattern: /(custom-home|luxury-home|family-home|bedroom|bathroom|kitchen|outdoor-living|art-studio|wine-cellar|smart-home|residential-lifetime)/i,
    articles: [
      { title: "Tampa's Custom Family Home Builders", href: "/tampas-custom-family-home-builders/", description: "What to look for when selecting a builder for your Tampa Bay dream home." },
      { title: "Hurricane Resistant Luxury Home Design", href: "/hurricane-resistant-luxury-home-design/", description: "Building beautiful homes that withstand Florida's severe weather." },
      { title: "Smart Home Integration in Tampa Custom Homes", href: "/smart-home-integration-in-tampa-custom-homes-2/", description: "Incorporating technology seamlessly into luxury home construction." },
      { title: "Climate Resilient Custom Homes in Tampa", href: "/climate-resilient-custom-homes-in-tampa/", description: "Design strategies for homes that perform in Florida's challenging environment." },
      { title: "Tampa Custom Homes with Green Building Practices", href: "/tampa-custom-homes-with-green-building-practices/", description: "Sustainable construction for energy-efficient custom homes." },
      { title: "Building Multi-Generational Homes in Tampa", href: "/building-multi-generational-homes-in-tampa/", description: "Design considerations for homes that accommodate extended families." },
    ]
  },
  sustainable: {
    pattern: /(sustainable|green|leed|energy-efficient|zero-net-energy|environmental)/i,
    articles: [
      { title: "Sustainable Building Practices in Florida", href: "/sustainable-building-practices-florida-green-construction/", description: "Green construction methods suited to Florida's climate and regulations." },
      { title: "Florida Leading the Way in LEED Certification", href: "/construction-florida-leading-way-leed-certification/", description: "How Florida projects are achieving LEED certification for commercial buildings." },
      { title: "Zero Net Energy in Commercial Construction", href: "/zero-net-energy-boosting-commercial-construction/", description: "Designing commercial buildings that produce as much energy as they consume." },
      { title: "Benefits of Sustainable Materials", href: "/benefits-of-sustainable-materials-in-commercial-construction/", description: "How green materials improve building performance and reduce costs." },
      { title: "Green Contractor Certifications", href: "/green-contractor-certifications-in-commercial-construction/", description: "Understanding certifications that validate sustainable construction expertise." },
      { title: "Sustainable Construction Trends in Florida", href: "/sustainable-construction-trends-in-florida/", description: "Emerging green building practices shaping Florida's construction industry." },
    ]
  },
  medical: {
    pattern: /(medical|healthcare|hospital|clinic|ahca|clean-room|senior-living)/i,
    articles: [
      { title: "Key Considerations for Building Medical Facilities", href: "/key-considerations-for-building-medical-facilities-in-florida/", description: "Specialized requirements for healthcare construction in Florida." },
      { title: "Navigating AHCA Inspections", href: "/navigating-ahca-inspections/", description: "Preparing for and passing Florida healthcare facility inspections." },
      { title: "Medical Facility Renovations", href: "/medical-facility-renovations-with-construction-specialists/", description: "Renovating healthcare spaces while maintaining operations and compliance." },
      { title: "Clean Room Construction Standards", href: "/clean-room-construction-standards/", description: "Meeting stringent requirements for controlled environment construction." },
      { title: "Senior Living Construction Requirements", href: "/senior-living-construction-requirements/", description: "Building assisted living and senior care facilities in Florida." },
      { title: "Medical Gas Piping Requirements", href: "/medical-gas-piping-requirements/", description: "Specialized piping systems for healthcare facility construction." },
    ]
  },
  projectManagement: {
    pattern: /(project-manager|construction-manager|scheduling|delays|timeline|budget|blueprint|planning|preconstruction)/i,
    articles: [
      { title: "The Essential Duties of a Construction Manager", href: "/the-essential-duties-of-a-construction-manager-in-florida/", description: "Understanding the construction manager's role in successful project delivery." },
      { title: "CPM Scheduling to Prevent Delays", href: "/cpm-scheduling-prevent-delays/", description: "Using critical path method scheduling to keep projects on track." },
      { title: "Avoid Commercial Construction Delays", href: "/avoid-commercial-construction-delays-in-florida/", description: "Common causes of delays and strategies to prevent them." },
      { title: "The Stages of Construction Project Management", href: "/the-stages-of-construction-project-management/", description: "From preconstruction through closeout - managing each phase effectively." },
      { title: "Building the Perfect Construction Blueprint", href: "/building-the-perfect-construction-blueprint/", description: "How detailed planning documents set projects up for success." },
      { title: "Construction Project Management and Scheduling", href: "/construction-project-management-and-scheduling/", description: "Best practices for managing commercial construction timelines." },
    ]
  },
  waterfront: {
    pattern: /(waterfront|seawall|shoreline|coastal|marina|flood-zone|breakaway)/i,
    articles: [
      { title: "Building on Tampa Bay Waterfront", href: "/building-on-tampa-bay-waterfront/", description: "Special considerations for waterfront property construction in Tampa Bay." },
      { title: "Living Shoreline vs Seawall", href: "/living-shoreline-vs-seawall/", description: "Comparing natural and hardened shoreline protection approaches." },
      { title: "Flood Zone VE vs AE Guide", href: "/flood-zone-ve-vs-ae-guide/", description: "Understanding flood zone designations and construction requirements." },
      { title: "Breakaway Wall Construction Requirements", href: "/breakaway-wall-construction-requirements/", description: "Building flood-compliant structures in coastal high hazard areas." },
      { title: "Marine Grade Building Materials Guide", href: "/marine-grade-building-materials-guide/", description: "Selecting materials that withstand coastal conditions." },
      { title: "Waterfront Lot Site Preparation", href: "/waterfront-lot-site-preparation/", description: "Preparing waterfront sites for construction in Florida." },
    ]
  },
  safety: {
    pattern: /(safety|accident|osha|zero-accident)/i,
    articles: [
      { title: "Zero Accident Workplace in Tampa's Commercial Construction", href: "/a-zero-accident-workplace-in-tampas-commercial-construction/", description: "Creating a culture of safety on commercial construction sites." },
      { title: "Ensuring Construction Site Safety", href: "/ensuring-construction-site-safety-a-top-priority/", description: "Best practices for maintaining safe construction environments." },
      { title: "Summer Construction Safety Tips", href: "/summer-construction-safety-tips-from-top-contractors/", description: "Protecting workers from heat and other summer hazards in Florida." },
      { title: "Tampa Commercial Construction Safety Standards", href: "/tampa-commercial-construction-safety-standards/", description: "Understanding safety requirements for Tampa area construction." },
      { title: "Zero Accidents Commercial Construction", href: "/zero-accidents-commercial-construction-safety-specialists/", description: "Achieving perfect safety records on commercial projects." },
      { title: "Tampa Post-Disaster Electrical Safety", href: "/tampas-post-disaster-electrical-safety-checks/", description: "Ensuring electrical safety during disaster restoration work." },
    ]
  }
};

// Get related articles for a page (exclude the current page's URL)
function getRelatedArticles(slug, category) {
  const articles = categories[category]?.articles || [];
  const currentHref = `/${slug}/`;
  return articles.filter(a => a.href !== currentHref).slice(0, 4);
}

// Determine best category for a page
function determineCategory(slug) {
  for (const [catName, cat] of Object.entries(categories)) {
    if (cat.pattern.test(slug)) {
      return catName;
    }
  }
  return 'commercial'; // default fallback
}

// Generate RelatedArticles import and component code
function generateRelatedArticlesCode(articles) {
  const articlesJson = JSON.stringify(articles, null, 2).replace(/"/g, '"');
  return {
    import: `import { RelatedArticles } from "@/components/RelatedArticles";`,
    articlesConst: `const relatedArticles = ${articlesJson.replace(/\n/g, '\n')};`,
    component: `
      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />`
  };
}

// Process a single file
function processFile(filePath, slug) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has RelatedArticles
  if (content.includes('RelatedArticles')) {
    console.log(`Skipping ${slug} - already has RelatedArticles`);
    return false;
  }
  
  // Skip if no InternalLinks (likely not a full article page)
  if (!content.includes('InternalLinks')) {
    console.log(`Skipping ${slug} - no InternalLinks found`);
    return false;
  }
  
  const category = determineCategory(slug);
  const articles = getRelatedArticles(slug, category);
  
  if (articles.length === 0) {
    console.log(`Skipping ${slug} - no related articles found`);
    return false;
  }
  
  const code = generateRelatedArticlesCode(articles);
  
  // Add import after InternalLinks import
  if (!content.includes('RelatedArticles')) {
    content = content.replace(
      /import { InternalLinks } from "@\/components\/InternalLinks";/,
      `import { InternalLinks } from "@/components/InternalLinks";\n${code.import}`
    );
  }
  
  // Add relatedArticles const after internalLinks const
  const internalLinksMatch = content.match(/const internalLinks = \[[\s\S]*?\];/);
  if (internalLinksMatch) {
    content = content.replace(
      internalLinksMatch[0],
      `${internalLinksMatch[0]}\n\n${code.articlesConst}`
    );
  }
  
  // Add RelatedArticles component before InternalLinks section
  content = content.replace(
    /(\s*{\/\* Internal Links \*\/}[\s\S]*?<InternalLinks)/,
    `${code.component}\n\n      $1`
  );
  
  // Alternative: if no "Internal Links" comment, look for InternalLinks component directly
  if (!content.includes('{/* Related Articles */}')) {
    content = content.replace(
      /(<section className="section bg-gray-50">[\s\S]*?<InternalLinks)/,
      `{/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      $1`
    );
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${slug} (${category})`);
  return true;
}

// Main
const appDir = path.join(__dirname, '..', 'app');
const articlesFile = '/tmp/fcs-articles-filtered.txt';
const articles = fs.readFileSync(articlesFile, 'utf8').trim().split('\n');

let updated = 0;
let skipped = 0;

for (const slug of articles) {
  if (!slug || slug === 'app' || slug === 'team-members' || slug === 'resources' || slug.includes('poseidon')) continue;
  
  const filePath = path.join(appDir, slug, 'page.tsx');
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${slug}`);
    continue;
  }
  
  try {
    if (processFile(filePath, slug)) {
      updated++;
    } else {
      skipped++;
    }
  } catch (err) {
    console.error(`Error processing ${slug}:`, err.message);
    skipped++;
  }
}

console.log(`\nDone! Updated: ${updated}, Skipped: ${skipped}`);
