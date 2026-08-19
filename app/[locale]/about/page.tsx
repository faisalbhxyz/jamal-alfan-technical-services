import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { ContactCta, LocalSeo } from "@/components/sections";
import { SeoImage } from "@/components/seo-image";
import { Container, PageHero } from "@/components/ui";
import { SITE } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import { KEYWORD_CLUSTERS, buildMetadata, pageJsonLd } from "@/lib/seo";
import { parseLocale } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
    path: "/about",
    image: "/images/about.jpg",
    imageAlt:
      locale === "ar"
        ? "فريق جمال الفان في موقع تشطيب فيلا بدبي"
        : "Jamal Alfan crew on a villa finishing site in Dubai",
    keywords: KEYWORD_CLUSTERS.about[locale],
  });
}

export default async function AboutPage({ params }: PageProps) {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  const jsonLd = pageJsonLd(locale, {
    type: "AboutPage",
    path: "/about",
    name: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
    crumbs: [
      { name: dict.breadcrumbs.home, path: "" },
      { name: dict.about.eyebrow, path: "/about" },
    ],
    image: "/images/about.jpg",
    imageAlt:
      locale === "ar"
        ? "فريق جمال الفان في موقع تشطيب فيلا بدبي"
        : "Jamal Alfan crew on a villa finishing site in Dubai",
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        title={dict.meta.aboutTitle}
        crumbs={[
          { label: dict.breadcrumbs.home, href: localizedPath(locale, "/") },
          { label: dict.about.eyebrow },
        ]}
      />
      <article className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <SeoImage
              src="/images/about.jpg"
              alt={
                locale === "ar"
                  ? "فريق جمال الفان في موقع تشطيب فيلا بدبي"
                  : "Jamal Alfan crew on a villa finishing site in Dubai, UAE"
              }
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
              — {dict.about.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              {dict.about.titleBefore}{" "}
              <span className="text-brand-accent">{dict.about.titleAccent}</span>
            </h2>
            <p className="aeo-answer mt-5 text-lg leading-relaxed text-navy-800">
              {dict.about.lead}
            </p>
            <p className="mt-4 leading-relaxed text-slate-500">{dict.about.p1}</p>
            <p className="mt-4 leading-relaxed text-slate-500">{dict.about.p2}</p>
          </div>
        </Container>
        <Container className="mt-16">
          <h2 className="font-display text-2xl font-bold text-navy-900">
            {dict.about.valuesTitle}
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {dict.about.values.map((value) => (
              <li key={value.title} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{value.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-slate-400">
            {SITE.sloganEn} · {SITE.sloganAr}
          </p>
        </Container>
      </article>
      <LocalSeo locale={locale} />
      <ContactCta locale={locale} />
    </>
  );
}
