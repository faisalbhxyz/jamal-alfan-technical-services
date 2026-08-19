import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { Container, PageHero } from "@/components/ui";
import { BLOG_POSTS } from "@/lib/blog";
import { CITIES, SERVICES, SITE } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import { buildMetadata, pageJsonLd } from "@/lib/seo";
import { parseLocale } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const STATIC_PAGES = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/blog", key: "guides" },
  { href: "/projects", key: "projects" },
  { href: "/coverage", key: "coverage" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
  { href: "/quote", key: "quote" },
] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.meta.sitemapTitle,
    description: dict.meta.sitemapDescription,
    path: "/sitemap",
    keywords: locale === "ar" ? ["خريطة موقع جمال الفان"] : ["Jamal Alfan sitemap"],
  });
}

export default async function HtmlSitemapPage({ params }: PageProps) {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  const pageLabels: Record<(typeof STATIC_PAGES)[number]["key"], string> = {
    home: dict.breadcrumbs.home,
    services: dict.services.eyebrow,
    guides: dict.blog.eyebrow,
    projects: dict.projects.eyebrow,
    coverage: dict.coverage.eyebrow,
    about: dict.about.eyebrow,
    contact: dict.contact.eyebrow,
    quote: dict.quote.eyebrow,
  };

  const jsonLd = pageJsonLd(locale, {
    type: "CollectionPage",
    path: "/sitemap",
    name: dict.meta.sitemapTitle,
    description: dict.meta.sitemapDescription,
    crumbs: [
      { name: dict.breadcrumbs.home, path: "" },
      { name: dict.htmlSitemap.eyebrow, path: "/sitemap" },
    ],
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        title={dict.meta.sitemapTitle}
        crumbs={[
          { label: dict.breadcrumbs.home, href: localizedPath(locale, "/") },
          { label: dict.htmlSitemap.eyebrow },
        ]}
      />
      <article className="py-16 sm:py-20">
        <Container className="space-y-14">
          <p className="aeo-answer max-w-3xl text-lg leading-relaxed text-slate-600">
            {dict.meta.sitemapDescription}
          </p>
          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {dict.htmlSitemap.pages}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {STATIC_PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    href={localizedPath(locale, page.href)}
                    className="block rounded-2xl border border-slate-100 bg-white px-4 py-3 font-medium text-navy-900 shadow-card hover:border-brand-accent hover:text-brand-accent"
                  >
                    {pageLabels[page.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {dict.htmlSitemap.services}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={localizedPath(locale, `/services/${service.slug}`)}
                    className="block rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-card hover:border-brand-accent"
                  >
                    <span className="font-semibold text-navy-900">{service.title[locale]}</span>
                    <span className="mt-1 block text-sm text-slate-500">{service.short[locale]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {dict.htmlSitemap.guides}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={localizedPath(locale, `/blog/${post.slug}`)}
                    className="block rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-card hover:border-brand-accent"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                      {post.category[locale]}
                    </span>
                    <span className="mt-1 block font-semibold text-navy-900">
                      {post.title[locale]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              {dict.htmlSitemap.areas}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`${localizedPath(locale, "/coverage")}#${city.slug}`}
                    className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy-800 hover:border-brand-accent hover:text-brand-accent"
                  >
                    {city.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <p className="text-sm text-slate-500">
            <a
              href={`${SITE.domain}/sitemap.xml`}
              className="font-semibold text-brand-accent hover:underline"
            >
              {dict.htmlSitemap.xml}
            </a>
          </p>
        </Container>
      </article>
    </>
  );
}
