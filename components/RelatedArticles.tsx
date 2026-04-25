import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { getAllArticles, type Article } from "@/lib/articles";

// Legacy shape used by guide pages (passed manually)
export interface RelatedArticle {
  title: string;
  href: string;
  description: string;
}

interface RelatedArticlesProps {
  // Auto-discovery mode (server component, used on service/service-city pages)
  pageSlug?: string;
  limit?: number;
  heading?: string;

  // Legacy mode (manually passed list, used on guide pages)
  articles?: RelatedArticle[];
  title?: string;
  variant?: "commercial" | "residential" | "neutral";
}

const VARIANT_COLORS = {
  commercial: {
    title: "text-brand-green-dark",
    border: "border-brand-green/10 hover:border-brand-green/30",
    tag: "bg-brand-green-bg text-brand-green-dark",
    link: "text-brand-green",
    icon: "text-brand-green",
  },
  residential: {
    title: "text-brand-gold-dark",
    border: "border-brand-gold/10 hover:border-brand-gold/30",
    tag: "bg-brand-gold-bg text-brand-gold-dark",
    link: "text-brand-gold",
    icon: "text-brand-gold",
  },
  neutral: {
    title: "text-gray-900",
    border: "border-gray-200 hover:border-gray-300",
    tag: "bg-gray-100 text-gray-700",
    link: "text-brand-green",
    icon: "text-brand-green",
  },
};

function tokenize(slug: string): string[] {
  return slug
    .toLowerCase()
    .split(/[\-_/]+/)
    .filter((t) => t.length >= 3);
}

function scoreArticle(article: Article, tokens: string[]): number {
  const fm = article.frontmatter;
  const haystack = [
    fm.title,
    fm.description,
    fm.slug,
    fm.city || "",
    fm.topic || "",
    (fm.tags || []).join(" "),
  ]
    .join(" ")
    .toLowerCase();
  let score = 0;
  for (const t of tokens) {
    if (haystack.includes(t)) score++;
  }
  return score;
}

interface PickedArticle {
  slug: string;
  title: string;
  description: string;
  readingTimeMinutes: number;
}

function pickArticles(pageSlug: string, limit: number): PickedArticle[] {
  const all = getAllArticles();
  if (all.length === 0) return [];

  const tokens = tokenize(pageSlug);
  const scored = all.map((a) => ({ a, score: scoreArticle(a, tokens) }));
  const matched = scored
    .filter((s) => s.score > 0)
    .sort((x, y) => y.score - x.score)
    .slice(0, limit);

  let chosen = matched.map((m) => m.a);

  if (chosen.length < 2) {
    // Fallback: use most recent articles (already date-sorted in getAllArticles)
    const seen = new Set(chosen.map((a) => a.frontmatter.slug));
    for (const a of all) {
      if (chosen.length >= limit) break;
      if (!seen.has(a.frontmatter.slug)) {
        chosen.push(a);
        seen.add(a.frontmatter.slug);
      }
    }
  }

  return chosen.map((a) => ({
    slug: a.frontmatter.slug,
    title: a.frontmatter.title,
    description: a.frontmatter.description,
    readingTimeMinutes: a.readingTimeMinutes,
  }));
}

export function RelatedArticles({
  pageSlug,
  limit = 4,
  heading = "Related Reading",
  articles,
  title,
  variant = "commercial",
}: RelatedArticlesProps) {
  // Legacy mode: caller passed articles directly (used by guide pages)
  if (articles && articles.length > 0) {
    const c = VARIANT_COLORS[variant];
    const displayTitle = title || "Related Articles";
    return (
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className={`w-6 h-6 ${c.icon}`} />
              <h2 className={`text-2xl font-bold font-heading ${c.title}`}>
                {displayTitle}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-1">
              {articles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className={`group block rounded-xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${c.border}`}
                >
                  <h3 className={`font-bold font-heading text-lg mb-2 transition-colors group-hover:${c.link}`}>
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {article.description}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-sm font-semibold ${c.link}`}>
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Auto mode: discover from MDX articles by pageSlug
  if (!pageSlug) return null;

  const picked = pickArticles(pageSlug, limit);
  if (picked.length === 0) return null;

  const c = VARIANT_COLORS.commercial;
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className={`w-6 h-6 ${c.icon}`} />
            <h2 className={`text-2xl md:text-3xl font-bold font-heading ${c.title}`}>
              {heading}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {picked.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}/`}
                className={`group block rounded-xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${c.border}`}
              >
                <h3 className={`font-bold font-heading text-lg mb-2 text-brand-green-dark transition-colors group-hover:${c.link}`}>
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <span className={`inline-flex items-center gap-1 text-sm font-semibold ${c.link}`}>
                  {article.readingTimeMinutes} min read
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedArticles;
