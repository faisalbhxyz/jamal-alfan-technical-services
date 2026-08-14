import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import {
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
import { buildMetadata } from "@/lib/seo";
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
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  const locale = parseLocale(raw);

  return (
    <>
      <Hero locale={locale} />
      <StatsBar locale={locale} />
      <ServicesPreview locale={locale} />
      <FieldWork locale={locale} />
      <WhyUs locale={locale} />
      <Process locale={locale} />
      <ProjectsPreview locale={locale} />
      <ServiceAreas locale={locale} />
      <LocalSeo locale={locale} />
      <FaqSection locale={locale} />
      <ContactCta locale={locale} />
    </>
  );
}
