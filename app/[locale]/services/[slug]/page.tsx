import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/service-detail";
import {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetail
        locale={locale}
        service={service}
        relatedServices={getRelatedServices(service.slug)}
        relatedProjects={getProjectsByService(service.slug)}
      />
    </>
  );
}
