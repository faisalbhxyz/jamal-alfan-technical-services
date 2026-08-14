import type { Metadata } from "next";
import { ServiceCard } from "@/components/service-card";
import { ContactCta, FaqSection, ServiceAreas } from "@/components/sections";
import { Container, PageHero, SectionHeading } from "@/components/ui";
import { SERVICES } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { parseLocale } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.meta.servicesTitle,
    description: dict.meta.servicesDescription,
    path: "/services",
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.meta.servicesTitle}
        crumbs={[
          { label: dict.breadcrumbs.home, href: localizedPath(locale, "/") },
          { label: dict.services.eyebrow },
        ]}
      />
      <section className="relative overflow-hidden py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={dict.services.eyebrow}
            title={
              <>
                {dict.services.titleBefore}{" "}
                <span className="text-brand-accent">{dict.services.titleAccent}</span>
              </>
            }
            body={dict.services.body}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} locale={locale} />
            ))}
          </div>
        </Container>
      </section>
      <ServiceAreas locale={locale} />
      <FaqSection locale={locale} />
      <ContactCta locale={locale} />
    </>
  );
}
