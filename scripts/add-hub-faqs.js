#!/usr/bin/env node

/**
 * Adds FAQ sections to remaining hub pages
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'app');

const hubPages = {
  'commercial/historic-restoration': {
    faqs: [
      {
        question: "How do historic tax credits work for commercial restoration?",
        answer: "Federal Historic Tax Credits offer a 20% credit on qualified rehabilitation expenses for income-producing properties on the National Register. Florida offers an additional 25% credit for approved projects. Combined, you can recover 45% of eligible costs. Credits are applied against tax liability over 5 years. FCS coordinates Part 1, 2, and 3 applications with SHPO and NPS to maximize your credit eligibility.",
      },
      {
        question: "What is the SHPO approval process?",
        answer: "SHPO (State Historic Preservation Office) reviews projects affecting historic properties. For tax credit projects, you submit Part 1 (property significance) and Part 2 (proposed work) applications. SHPO reviews for compliance with Secretary of Interior Standards. Typical review takes 30-45 days. FCS prepares documentation and coordinates with SHPO reviewers to ensure approval of your proposed restoration scope.",
      },
      {
        question: "How long does commercial historic restoration take?",
        answer: "Commercial historic restoration typically takes 12-24 months from design through completion. Key timeline factors: SHPO/NPS approvals (2-4 months), permit review (2-3 months), specialty material procurement (2-6 months), and phased construction. The regulatory review process for tax credits adds time upfront but the financial benefits justify the investment. We develop detailed CPM schedules accounting for all approval milestones.",
      },
      {
        question: "What is adaptive reuse and when does it make sense?",
        answer: "Adaptive reuse transforms historic buildings for new purposes while preserving their character—converting a warehouse to lofts, a school to offices, or a theater to retail. It makes sense when: the building has good bones, the location supports the new use, historic tax credits offset higher renovation costs, and community/market demand exists for the finished product. FCS has completed adaptive reuse projects throughout Tampa Bay.",
      },
      {
        question: "What materials must be used in historic restoration?",
        answer: "Secretary of Interior Standards require in-kind replacement when possible—same material, appearance, and design. When original materials are unavailable, compatible substitutes may be approved. For tax credit projects, SHPO reviews material choices. FCS maintains relationships with specialty suppliers for historic windows, terra cotta, ornamental plaster, and other period-appropriate materials.",
      },
      {
        question: "How do you handle structural upgrades in historic buildings?",
        answer: "Historic buildings often need seismic retrofitting, foundation repair, or structural reinforcement. The key is making upgrades while minimizing impact on character-defining features. Methods include: steel moment frames concealed within walls, carbon fiber reinforcement, micropile foundations, and hidden structural steel. All structural work must be approved as part of the historic tax credit application.",
      },
    ],
    sectionTitle: "Commercial Historic Restoration FAQs",
  },
  'commercial/condo-remediation': {
    faqs: [
      {
        question: "What is Florida SB4-D and how does it affect my condo?",
        answer: "Florida SB4-D (the Surfside-response legislation) requires condominium buildings 3+ stories to complete milestone structural inspections and Structural Integrity Reserve Studies (SIRS). Buildings must be inspected at 30 years (25 years if within 3 miles of coast), then every 10 years. Associations cannot waive reserves for structural components. Failure to comply can result in building closure orders.",
      },
      {
        question: "What are Phase 1 and Phase 2 milestone inspections?",
        answer: "Phase 1 is a visual inspection by a licensed engineer or architect to identify substantial structural deterioration. If substantial deterioration is found, Phase 2 requires destructive testing, detailed analysis, and a repair plan. Phase 2 reports must include cost estimates and timelines for required repairs. FCS works with qualified engineers to coordinate inspections and implement required remediation.",
      },
      {
        question: "What is a SIRS (Structural Integrity Reserve Study)?",
        answer: "A Structural Integrity Reserve Study is a 30-year reserve analysis specifically for structural components: roof, waterproofing, foundation, load-bearing walls, and primary structural systems. Unlike traditional reserve studies, SIRS cannot include pooling with non-structural items, and associations cannot vote to waive funding. SIRS determines the annual contribution needed to fund future structural repairs.",
      },
      {
        question: "How much does condo remediation typically cost?",
        answer: "Remediation costs vary widely based on deficiency type and extent. Concrete spalling repair: $15-50/SF. Balcony reconstruction: $300-600/SF. Post-tension cable repair: $5,000-15,000 per repair. Full building envelope rehabilitation: $50-150/SF of wall area. We provide detailed estimates after engineering assessment and help associations prioritize work based on severity and budget.",
      },
      {
        question: "Can owners live in the building during remediation?",
        answer: "In most cases, yes. We develop phased remediation plans that maintain building occupancy. Techniques include: working floor-by-floor, creating temporary weather barriers, scheduling noisy work during business hours, and maintaining life safety systems throughout. For severe structural issues, temporary evacuation of affected areas may be necessary. Safety is never compromised for occupancy.",
      },
      {
        question: "What funding options exist for SB4-D compliance work?",
        answer: "Common funding approaches: existing reserves (if adequately funded), special assessments (one-time charges to owners), bank loans (repaid through regular assessments over time), and phased construction (spreading work over multiple budget years). Many associations are combining approaches. FCS helps boards evaluate options and develop funding strategies that balance urgency with owner financial capacity.",
      },
    ],
    sectionTitle: "Condo Remediation & SB4-D FAQs",
  },
  'commercial/cpm-scheduling': {
    faqs: [
      {
        question: "What is CPM scheduling and why is it important?",
        answer: "Critical Path Method (CPM) scheduling identifies the longest sequence of dependent activities that determines project duration. By identifying the critical path, we know which tasks cannot slip without delaying the project. This allows focused management attention on critical activities while providing flexibility for non-critical tasks. CPM is essential for complex commercial projects with multiple trades and dependencies.",
      },
      {
        question: "How does CPM scheduling prevent delays?",
        answer: "CPM provides early warning of potential delays through: daily progress tracking against schedule, float analysis showing which activities have schedule margin, resource leveling to prevent bottlenecks, and what-if scenario modeling. When delays occur, we can quickly assess impact and develop recovery plans. The goal is identifying problems weeks before they become critical.",
      },
      {
        question: "What software do you use for CPM scheduling?",
        answer: "FCS uses Primavera P6 for complex projects and Microsoft Project for mid-size jobs. Both platforms support full CPM analysis including logic ties, resource loading, cost loading, and earned value tracking. We provide web-based dashboards for owner access to real-time schedule status. All schedules include baseline comparisons showing original plan versus current forecast.",
      },
      {
        question: "How often is the schedule updated?",
        answer: "We update schedules weekly at minimum, with daily updates during critical phases. Each update includes: actual start and finish dates, remaining duration assessments, new activities if scope changes, and revised logic if needed. Monthly narrative reports explain variances and recovery strategies. For projects with tight deadlines, we may update schedules multiple times per week.",
      },
      {
        question: "How do you handle schedule delays?",
        answer: "When delays occur, we: assess impact on critical path, identify root cause, develop recovery options (acceleration, resequencing, additional resources), evaluate cost implications, and recommend the best path forward. If delays are owner or design-caused, we document for potential time extensions. Our goal is always to find solutions, not just report problems.",
      },
      {
        question: "Do you provide schedule documentation for disputes?",
        answer: "Yes, our CPM schedules create a contemporaneous record valuable for delay claims or disputes. We maintain: baseline schedules (original plan), periodic updates (monthly or more), daily logs of progress and delays, and fragnet analyses showing delay impacts. If claims arise, this documentation supports or defends time extension and delay damage claims.",
      },
    ],
    sectionTitle: "CPM Scheduling FAQs",
  },
};

function processPage(pagePath, config) {
  const filePath = path.join(APP_DIR, pagePath, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ Not found: ${pagePath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already has FAQSchema
  if (/FAQSchema/.test(content)) {
    console.log(`✓ Already has FAQs: ${pagePath}`);
    return false;
  }

  // Add HelpCircle to imports
  content = content.replace(
    /(from "lucide-react";)/,
    `HelpCircle,
} $1`
  );
  content = content.replace(/,\n\} HelpCircle,\n\} from/, `,
  HelpCircle,
} from`);

  // Fix the import to be cleaner
  content = content.replace(
    /Phone,\n\} from "lucide-react";/,
    `Phone,
  HelpCircle,
} from "lucide-react";`
  );

  // Add FAQSchema import
  content = content.replace(
    /from "@\/components\/Schema";/,
    `FAQSchema } from "@/components/Schema";`
  );
  content = content.replace(
    /{ LocalBusinessSchema, ServiceSchema }/,
    `{ LocalBusinessSchema, ServiceSchema, FAQSchema }`
  );

  // Add Accordion imports
  content = content.replace(
    /import { Breadcrumb } from "@\/components\/Breadcrumb";/,
    `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumb } from "@/components/Breadcrumb";`
  );

  // Add FAQs array before the default export
  const faqsArray = `const faqs = ${JSON.stringify(config.faqs, null, 2)};

`;
  content = content.replace(
    /export default function/,
    faqsArray + 'export default function'
  );

  // Add FAQSchema component after ServiceSchema
  content = content.replace(
    /(<ServiceSchema[^>]+\/>)/,
    `$1
      <FAQSchema faqs={faqs} />`
  );

  // Add FAQ section before CTA
  const faqSection = `
      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-green-dark mb-8 text-center font-heading">
            ${config.sectionTitle}
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={\`faq-\${index}\`}
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

      {/* CTA */}`;

  content = content.replace(
    /\n\s*\{\/\* CTA \*\/\}/,
    faqSection
  );

  fs.writeFileSync(filePath, content);
  console.log(`✅ Added FAQs to: ${pagePath}`);
  return true;
}

console.log('🔧 Adding FAQs to hub pages\n');

let fixed = 0;
for (const [pagePath, config] of Object.entries(hubPages)) {
  if (processPage(pagePath, config)) {
    fixed++;
  }
}

console.log(`\n✅ Added FAQs to ${fixed} pages`);
