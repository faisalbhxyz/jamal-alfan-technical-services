import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { ServiceDetail } from "@/components/service-detail";
import {
  SERVICES,
  getProjectsByService,
  getRelatedServices,
  getService,
} from "@/lib/content";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { parseLocale } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = parseLocale(raw);
  const service = getService(slug);
  if (!service) {
    return {};
  }
  return buildMetadata({
    locale,
    title: service.seoTitle[locale],
    description: service.seoDescription[locale],
    path: `/services/${service.slug}`,
    image: service.image,
    imageAlt: service.imageAlt[locale],
    keywords: service.keywords[locale],
  });
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  const locale = parseLocale(raw);
  const service = getService(slug);
  if (!service) {
    notFound();
  }

  const jsonLd = serviceJsonLd(locale, service);

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiceDetail
        locale={locale}
        service={service}
        relatedServices={getRelatedServices(service.slug)}
        relatedProjects={getProjectsByService(service.slug)}
      />
    </>
  );
}
