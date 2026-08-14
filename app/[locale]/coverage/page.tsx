import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { ContactCta } from "@/components/sections";
import { ButtonLink, Container, PageHero } from "@/components/ui";
import { CITIES } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { parseLocale } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.meta.coverageTitle,
    description: dict.meta.coverageDescription,
    path: "/coverage",
  });
}

export default async function CoveragePage({ params }: PageProps) {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  const jsonLd = breadcrumbJsonLd(locale, [
    { name: dict.breadcrumbs.home, path: "" },
    { name: dict.areas.eyebrow, path: "/coverage" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title={dict.meta.coverageTitle}
        crumbs={[
          { label: dict.breadcrumbs.home, href: localizedPath(locale, "/") },
          { label: dict.coverage.eyebrow },
        ]}
      />
      <article className="py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
            — {dict.coverage.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            {dict.coverage.titleBefore}{" "}
            <span className="text-brand-accent">{dict.coverage.titleAccent}</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            {dict.coverage.lead}
          </p>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {CITIES.map((city) => (
              <li
                key={city.slug}
                id={city.slug}
                className="scroll-mt-28 rounded-2xl border border-slate-100 bg-white p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-accent-soft text-brand-accent">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-navy-900">
                      {city.name[locale]}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                      {city.region[locale]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {city.blurb[locale]}
                    </p>
                    <ButtonLink
                      href={localizedPath(locale, "/quote")}
                      size="sm"
                      className="mt-5"
                    >
                      {dict.nav.quote}
                    </ButtonLink>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </article>
      <ContactCta locale={locale} />
    </>
  );
}
