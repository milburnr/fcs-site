import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Shield, Users, Clock, AlertTriangle, DollarSign, FileText, MessageSquare, Target, Calendar, Lightbulb } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema, ArticleSchema } from "@/components/Schema";
import { InternalLinks } from "@/components/InternalLinks";

export const metadata: Metadata = {
  title: "Surviving a Commercial Construction Project | Expert Guide Tampa FL",
  description: "Expert strategies for navigating commercial construction in Tampa Bay. Learn how to manage timelines, budgets, contractor relationships, and avoid common pitfalls from Florida Construction Specialists.",
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Surviving a Commercial Construction Project", href: "/surviving-a-commercial-construction-project/" },
];

const internalLinks = [
  { href: "/services/commercial/", label: "Commercial Construction Services" },
  { href: "/expert-tips-for-planning-your-commercial-construction-project/", label: "Project Planning Tips" },
  { href: "/avoid-commercial-construction-delays-in-florida/", label: "Avoiding Construction Delays" },
  { href: "/construction-project-management-and-scheduling/", label: "Project Management Guide" },
  { href: "/contact/", label: "Schedule a Consultation" },
];

const survivalStrategies = [
  {
    icon: Target,
    title: "Set Clear Expectations",
    description: "Define success criteria, communication protocols, and decision-making processes before construction begins.",
  },
  {
    icon: DollarSign,
    title: "Protect Your Budget",
    description: "Build in contingencies, manage scope creep, and understand what's driving costs at every stage.",
  },
  {
    icon: Clock,
    title: "Manage Your Timeline",
    description: "Understand critical path activities, plan for delays, and make decisions promptly when needed.",
  },
  {
    icon: MessageSquare,
    title: "Communicate Consistently",
    description: "Establish regular updates, document everything, and address issues before they escalate.",
  },
];

const commonPitfalls = [
  {
    pitfall: "Underestimating Complexity",
    symptom: "Constant surprises, budget overruns, schedule delays",
    solution: "Thorough planning, experienced contractor, realistic expectations",
  },
  {
    pitfall: "Poor Communication",
    symptom: "Misunderstandings, rework, relationship strain",
    solution: "Regular meetings, written documentation, designated contacts",
  },
  {
    pitfall: "Scope Creep",
    symptom: "Budget grows continuously, timeline extends",
    solution: "Change order discipline, clear scope definition, decision protocols",
  },
  {
    pitfall: "Decision Delays",
    symptom: "Work stops waiting for answers, costs increase",
    solution: "Empowered decision-makers, deadline commitments, prepared options",
  },
  {
    pitfall: "Wrong Contractor",
    symptom: "Quality issues, poor communication, adversarial relationship",
    solution: "Thorough vetting, reference checks, experience verification",
  },
];

const projectPhases = [
  {
    phase: "Planning & Design",
    duration: "3-6 months",
    yourRole: "Define requirements, make design decisions, approve budgets",
    challenges: "Decision fatigue, scope expansion, budget pressure",
    tips: "Prioritize must-haves, trust your team's expertise, stick to decisions",
  },
  {
    phase: "Permitting",
    duration: "2-6 months",
    yourRole: "Patience, provide information when requested",
    challenges: "Timeline uncertainty, required revisions, waiting",
    tips: "Budget for delays, stay responsive, let contractor manage process",
  },
  {
    phase: "Early Construction",
    duration: "2-4 months",
    yourRole: "Site visits, progress monitoring, first decisions on field conditions",
    challenges: "Hidden conditions, material lead times, weather",
    tips: "Expect surprises, respond quickly to decisions, maintain contingency",
  },
  {
    phase: "Mid Construction",
    duration: "2-6 months",
    yourRole: "Finish selections, equipment decisions, ongoing oversight",
    challenges: "Decision overload, coordination complexity, change orders",
    tips: "Stay engaged, trust your team, focus on what matters most",
  },
  {
    phase: "Final Construction",
    duration: "1-2 months",
    yourRole: "Punch lists, training preparation, occupancy planning",
    challenges: "Details, competing priorities, move-in pressure",
    tips: "Be thorough but reasonable, plan ahead for move-in",
  },
];

const budgetRealities = [
  { category: "Design Fees", percentage: "6-12%", notes: "Often underestimated; quality design saves construction costs" },
  { category: "Site Work", percentage: "10-20%", notes: "Highly variable; hidden conditions affect this most" },
  { category: "Building Shell", percentage: "25-35%", notes: "Structure, envelope, roofing" },
  { category: "Interior Finishes", percentage: "15-25%", notes: "Most visible; owner choices drive cost" },
  { category: "MEP Systems", percentage: "20-30%", notes: "HVAC, electrical, plumbing, fire protection" },
  { category: "Soft Costs", percentage: "15-25%", notes: "Permits, insurance, legal, contingency" },
];

const communicationSchedule = [
  { type: "Weekly Progress Meeting", participants: "Owner, PM, Superintendent", purpose: "Progress review, upcoming activities, issue resolution" },
  { type: "Monthly Executive Review", participants: "Owner principals, GC leadership", purpose: "Budget status, schedule status, strategic issues" },
  { type: "Bi-Weekly OAC Meeting", participants: "Owner, Architect, Contractor", purpose: "Design clarifications, RFI review, change orders" },
  { type: "Daily Reports", participants: "Superintendent → PM → Owner", purpose: "Activities, manpower, weather, issues" },
];

const faqs = [
  {
    question: "How involved should I be during construction?",
    answer: "Stay engaged without micromanaging. Attend weekly progress meetings, visit the site regularly (with proper notification), make decisions promptly when needed, and review monthly reports carefully. Don't second-guess every decision or bypass the chain of communication. Your project manager is your primary contact—use them. Good contractors welcome engaged owners; they become frustrated with micromanagers."
  },
  {
    question: "How do I handle unexpected costs?",
    answer: "First, understand whether the cost is truly unexpected (hidden conditions, owner changes) or should have been anticipated (contractor error, poor planning). For legitimate unexpected costs, work with your contractor to explore alternatives and value engineering. Use your contingency strategically—it exists for exactly these situations. Document all changes with proper change orders. If changes seem excessive, request detailed breakdowns and consider third-party review."
  },
  {
    question: "What do I do if the project falls behind schedule?",
    answer: "First, understand why—weather delays, permit issues, material shortages, and owner decision delays affect schedules differently than contractor underperformance. Work with your contractor on recovery options: overtime, additional crews, re-sequencing work, or adjusting scope. For critical milestones, establish clear expectations and accountability. Document delays carefully as they occur—this matters if disputes arise later."
  },
  {
    question: "How do I know if my contractor is doing good work?",
    answer: "Visit the site regularly and observe: Is the site clean and organized? Are workers wearing proper safety equipment? Does work appear neat and professional? Review inspection records—are inspections passing first time? Check that materials match specifications. Ask questions about anything that doesn't look right. Your architect should also be reviewing work for conformance with design. Trust your instincts—problems you sense usually prove real."
  },
  {
    question: "What happens if I have a dispute with my contractor?",
    answer: "Address issues early and directly. Most disputes stem from miscommunication that escalates. Start with your project manager, then escalate to company leadership if needed. Review your contract's dispute resolution provisions—most require mediation before litigation. Document everything in writing. Remember that ongoing construction creates leverage on both sides; adversarial relationships rarely produce good outcomes. Professional contractors prefer resolving issues to fighting about them."
  }
];

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <ArticleSchema
        headline="Surviving a Commercial Construction Project"
        description="Expert strategies for navigating commercial construction in Tampa Bay."
        datePublished="2024-01-15"
        dateModified="2025-01-15"
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facility-building-turner-agricivic-center-arcadia-fl/facility-building-turner-agricivic-center-arcadia-fl-display.webp"
            alt="Surviving commercial construction project in Tampa Bay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green-dark/90 via-brand-green-forest/85 to-brand-green-dark/90" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Surviving a Commercial Construction Project: Expert Strategies for Success
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Commercial construction is complex, stressful, and high-stakes. Learn practical strategies from Florida Construction Specialists for navigating your Tampa Bay project from start to successful completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact/" className="btn-cta">
              Get Expert Guidance
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

      {/* Survival Strategies */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {survivalStrategies.map((strategy, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <strategy.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                <h3 className="text-lg font-bold text-brand-green-dark mb-2">{strategy.title}</h3>
                <p className="text-gray-600 text-sm">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-6 font-heading">
              Why Commercial Construction Feels So Challenging
            </h2>
            <p className="text-gray-600 mb-6">
              Let's be honest: commercial construction is hard. Even with the best contractor, realistic budget, and reasonable timeline, you're going to experience stress. Understanding why helps you navigate the challenges more effectively.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Complexity:</strong> A commercial building involves thousands of components, hundreds of decisions, and dozens of specialized trades—all coordinated over months or years. No amount of planning eliminates all surprises. Hidden site conditions, material delays, weather events, and changing requirements are normal, not exceptional.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Investment:</strong> For most business owners, their commercial project represents one of the largest investments they'll ever make. The stakes are genuinely high. This creates pressure that colors every interaction and decision.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Unfamiliarity:</strong> Unless you're a developer or serial builder, you're navigating a world you don't fully understand. The terminology is foreign, the processes are opaque, and the timelines feel arbitrary. This knowledge gap creates anxiety.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Loss of Control:</strong> Once construction begins, you're dependent on your contractor, the weather, the permit office, and countless other factors outside your direct control. For business owners accustomed to running things, this feels deeply uncomfortable.
            </p>
            <p className="text-gray-600 mb-6">
              The good news: thousands of commercial projects complete successfully every year in Tampa Bay. With the right mindset, team, and strategies, yours will too. This guide shares what we've learned from helping hundreds of owners through the process.
            </p>

            <h2 className="text-2xl font-bold text-brand-green-dark mb-4 font-heading">
              Choosing the Right Team: Your Most Important Decision
            </h2>
            <p className="text-gray-600 mb-6">
              Nothing affects your construction experience more than your choice of contractor. The right partner anticipates problems, communicates proactively, and handles challenges professionally. The wrong partner creates problems, hides issues, and makes every day stressful.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Look for experience in your building type.</strong> A contractor who's built dozens of medical facilities understands AHCA requirements, infection control during construction, and specialized equipment installation. A contractor who's never done medical work will learn on your project—at your expense.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Check references thoroughly.</strong> Don't just get names—actually call them. Ask about communication, problem-solving, budget management, and whether they'd hire the contractor again. References from similar projects are most valuable.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Evaluate chemistry.</strong> You'll work closely with these people for months. Do they listen? Do they explain things clearly? Do they seem trustworthy? Construction inevitably involves conflict—you want partners who resolve issues professionally.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Consider design-build.</strong> Having one team responsible for both design and construction eliminates the finger-pointing that plagues traditional projects. When problems arise, there's no question about accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Project Phases Table */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              What to Expect at Each Project Phase
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-4 py-4 text-left font-heading">Phase</th>
                    <th className="px-4 py-4 text-left font-heading">Duration</th>
                    <th className="px-4 py-4 text-left font-heading">Your Role</th>
                    <th className="px-4 py-4 text-left font-heading">Common Challenges</th>
                    <th className="px-4 py-4 text-left font-heading">Survival Tips</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projectPhases.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-4 font-semibold text-brand-green-dark">{row.phase}</td>
                      <td className="px-4 py-4 text-gray-600">{row.duration}</td>
                      <td className="px-4 py-4 text-gray-600 text-sm">{row.yourRole}</td>
                      <td className="px-4 py-4 text-gray-600 text-sm">{row.challenges}</td>
                      <td className="px-4 py-4 text-brand-green text-sm">{row.tips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Protecting Your Budget: What You Need to Know
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Budget stress is universal in construction. Even well-planned projects experience cost pressure from change orders, unexpected conditions, and scope evolution. Understanding where money goes—and what drives cost changes—helps you stay in control.
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Category</th>
                    <th className="px-6 py-4 text-left font-heading">% of Budget</th>
                    <th className="px-6 py-4 text-left font-heading">What Affects Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {budgetRealities.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.category}</td>
                      <td className="px-6 py-4 text-brand-green font-semibold">{row.percentage}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <DollarSign className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Budget Protection Strategies</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Build 10-15% contingency into initial budget</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Get GMP (Guaranteed Maximum Price) when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Resist scope creep—every addition costs money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Make decisions promptly to avoid delay costs</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <AlertTriangle className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">What Causes Cost Overruns</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Owner-requested changes and additions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Hidden conditions (soil, structural, utilities)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Delayed decisions causing work disruption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Design errors requiring field corrections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              Establishing Effective Communication
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-6">
                Poor communication causes more construction problems than technical failures. Establishing clear protocols before construction begins prevents misunderstandings and builds the trust needed to resolve inevitable conflicts.
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Meeting Type</th>
                    <th className="px-6 py-4 text-left font-heading">Participants</th>
                    <th className="px-6 py-4 text-left font-heading">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {communicationSchedule.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.type}</td>
                      <td className="px-6 py-4 text-gray-600">{row.participants}</td>
                      <td className="px-6 py-4 text-gray-600">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-brand-green/5 rounded-xl p-8 border border-brand-green/20">
              <h3 className="text-xl font-bold text-brand-green-dark mb-6 font-heading">Communication Best Practices</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Designate a single point of contact for your organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Put important communications in writing (email)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Respond to requests within 24-48 hours</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Visit the site regularly with advance notice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Address concerns early before they escalate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Praise good work as well as noting concerns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4 font-heading text-center">
              Common Pitfalls and How to Avoid Them
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Learn from others' mistakes. These issues derail construction projects regularly.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-brand-green-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-heading">Pitfall</th>
                    <th className="px-6 py-4 text-left font-heading">Symptoms</th>
                    <th className="px-6 py-4 text-left font-heading">Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {commonPitfalls.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-700">{row.pitfall}</td>
                      <td className="px-6 py-4 text-red-600">{row.symptom}</td>
                      <td className="px-6 py-4 text-brand-green">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Mindset Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading">
              The Mindset for Construction Success
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <Lightbulb className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Expect Problems</h3>
                <p className="text-gray-600">
                  No construction project is problem-free. Hidden conditions, weather delays, material shortages, and human errors are normal parts of every project. The question isn't whether problems will occur, but how they're handled. Choose partners who solve problems professionally rather than hiding them or making excuses.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <Users className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Trust Your Team</h3>
                <p className="text-gray-600">
                  You hired professionals for a reason. Let them do their jobs. Second-guessing every decision, bypassing project managers, and micromanaging details wastes everyone's time and damages relationships. Provide input, ask questions, and make decisions—but avoid the urge to direct every activity.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <Clock className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Decide Promptly</h3>
                <p className="text-gray-600">
                  Construction moves fast. Delayed decisions stop work, disrupt schedules, and add cost. When your team needs an answer, provide it quickly. If you need time to decide, communicate that clearly with a specific deadline. Decision paralysis is one of the most expensive owner behaviors.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <Target className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold text-brand-green-dark mb-4 font-heading">Focus on Outcomes</h3>
                <p className="text-gray-600">
                  Don't lose sight of why you're building. Individual frustrations matter less than the final result. A great building that's a few weeks late is still a great building. Keep perspective when daily challenges seem overwhelming. The finish line is worth the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-8 font-heading text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-brand-green-dark mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section bg-white">
        <div className="container-custom">
          <InternalLinks
            title="Related Resources"
            links={internalLinks}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ready for a Partner Who Makes Construction Manageable?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists helps Tampa Bay business owners navigate commercial construction with less stress and better outcomes. Contact us to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Consultation
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
