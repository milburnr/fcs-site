import { Calendar, Clock, Phone } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./AnimatedElements";
import { Breadcrumb } from "./Breadcrumb";
import { ArticleImage } from "./ArticleImage";
import { ArticleSchema } from "./Schema";
import type { Article } from "@/lib/articles";

interface Props {
  article: Article;
  children: React.ReactNode;
}

// Deterministic date formatter — no locale/TZ variance between server and client.
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map((s) => Number.parseInt(s, 10));
  if (!y || !m || !d) return iso;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export function ArticleLayout({ article, children }: Props) {
  const { frontmatter, readingTimeMinutes } = article;
  const formattedDate = formatDate(frontmatter.date);

  const breadcrumbItems = [
    { name: "Resources", href: "/resources" },
    { name: frontmatter.title, href: `/resources/${frontmatter.slug}/` },
  ];

  // FAQPage JSON-LD removed 2026-05-21: Google's May-2024 update deprecated
  // FAQ rich-result eligibility for general sites. frontmatter.faq still
  // renders as visible DOM elsewhere on the page; only the schema emit is
  // gone.

  return (
    <>
      <ArticleSchema
        headline={frontmatter.title}
        description={frontmatter.description}
        datePublished={frontmatter.date}
        dateModified={frontmatter.lastmod || frontmatter.date}
        slug={`/resources/${frontmatter.slug}/`}
        imageUrl={frontmatter.heroImage}
      />

      <Breadcrumb items={breadcrumbItems} />

      <article className="container-custom py-8 md:py-12">
        <FadeIn>
          <header className="max-w-4xl mx-auto mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-green-dark mb-4 leading-tight">
              {frontmatter.title}
            </h1>
            {frontmatter.description && (
              <p className="text-xl text-gray-text mb-6 leading-relaxed">
                {frontmatter.description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-6">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {readingTimeMinutes} min read
              </span>
              {frontmatter.city && (
                <span className="inline-flex items-center gap-1.5 text-brand-green font-medium">
                  {frontmatter.city}, FL
                </span>
              )}
            </div>
          </header>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {frontmatter.heroImage && (
            <ArticleImage
              src={frontmatter.heroImage}
              alt={frontmatter.heroAlt || frontmatter.title}
              caption={frontmatter.heroCaption}
              variant="hero"
              priority
            />
          )}
          <div className="prose prose-lg max-w-none">{children}</div>

          {frontmatter.faq && frontmatter.faq.length > 0 && (
            <FadeIn>
              <section className="mt-16" aria-labelledby="faq-heading">
                <h2
                  id="faq-heading"
                  className="text-3xl font-bold text-brand-green-dark mb-6"
                >
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {frontmatter.faq.map((item, i) => (
                    <div
                      key={i}
                      className="border-l-4 border-brand-gold pl-5"
                    >
                      <h3 className="text-xl font-semibold text-brand-green-dark mb-2">
                        {item.q}
                      </h3>
                      <p className="text-gray-text leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeIn>
          )}

          <FadeIn>
            <div className="mt-16 rounded-lg bg-[#074E01] text-white p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-gold mb-3">
                Ready to start your{frontmatter.city ? ` ${frontmatter.city}` : " Tampa Bay"} project?
              </h2>
              <p className="text-green-100 mb-6 leading-relaxed">
                Florida Construction Specialists is Tampa Bay&apos;s premier general contractor for large-scale commercial, residential, and restoration projects. Call us for a no-pressure consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+18134207561"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-[#074E01] font-semibold rounded hover:bg-brand-gold-dark transition"
                >
                  <Phone className="w-4 h-4" />
                  Call (813) 420-7561
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/30 rounded text-white hover:bg-white/10 transition"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </FadeIn>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <FadeIn>
              <div className="mt-10 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </article>
    </>
  );
}
