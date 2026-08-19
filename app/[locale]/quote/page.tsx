import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { QuoteForm } from "@/components/quote-form";
import { Container, PageHero } from "@/components/ui";
import { SERVICES } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import { KEYWORD_CLUSTERS, buildMetadata, pageJsonLd } from "@/lib/seo";
import { parseLocale } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.meta.quoteTitle,
    description: dict.meta.quoteDescription,
    path: "/quote",
    keywords: KEYWORD_CLUSTERS.quote[locale],
  });
}

export default async function QuotePage({ params, searchParams }: PageProps) {
  const locale = parseLocale((await params).locale);
  const { service } = await searchParams;
  const dict = getDictionary(locale);
  const jsonLd = pageJsonLd(locale, {
    type: "WebPage",
    path: "/quote",
    name: dict.meta.quoteTitle,
    description: dict.meta.quoteDescription,
    crumbs: [
      { name: dict.breadcrumbs.home, path: "" },
      { name: dict.quote.eyebrow, path: "/quote" },
    ],
  });
  const preset =
    service && SERVICES.some((item) => item.slug === service) ? service : undefined;

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        title={dict.meta.quoteTitle}
        crumbs={[
          { label: dict.breadcrumbs.home, href: localizedPath(locale, "/") },
          { label: dict.quote.eyebrow },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
              — {dict.quote.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              {dict.quote.titleBefore}{" "}
              <span className="text-brand-accent">{dict.quote.titleAccent}</span>
            </h2>
            <p className="mt-4 text-slate-500">{dict.cta.body}</p>
          </div>
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card sm:p-8">
            <QuoteForm locale={locale} presetService={preset} />
          </div>
        </Container>
      </section>
    </>
  );
}
