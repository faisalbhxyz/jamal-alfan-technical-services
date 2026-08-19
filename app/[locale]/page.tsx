import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import {
  BlogPreview,
  ContactCta,
  FaqSection,
  FieldWork,
  LocalSeo,
  Process,
  ProjectsPreview,
  ServiceAreas,
  ServicesPreview,
  StatsBar,
  WhyUs,
} from "@/components/sections";
import { getDictionary } from "@/lib/i18n";
import { KEYWORD_CLUSTERS, buildMetadata, homeJsonLd } from "@/lib/seo";
import { parseLocale } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = parseLocale(raw);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
    image: "/images/hero.jpg",
    imageAlt:
      locale === "ar"
        ? "تشطيب فيلا في دبي من جمال الفان"
        : "Villa interior finishing in Dubai by Jamal Alfan",
    keywords: KEYWORD_CLUSTERS.home[locale],
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale = parseLocale(raw);

  return (
    <>
      <JsonLd data={homeJsonLd(locale)} />
      <Hero locale={locale} />
      <StatsBar locale={locale} />
      <ServicesPreview locale={locale} />
      <FieldWork locale={locale} />
      <WhyUs locale={locale} />
      <Process locale={locale} />
      <ProjectsPreview locale={locale} />
      <BlogPreview locale={locale} />
      <ServiceAreas locale={locale} />
      <LocalSeo locale={locale} />
      <FaqSection locale={locale} />
      <ContactCta locale={locale} />
    </>
  );
}
