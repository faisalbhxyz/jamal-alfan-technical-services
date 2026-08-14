import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta } from "@/components/sections";
import { Container, PageHero } from "@/components/ui";
import { PROJECTS, SERVICES } from "@/lib/content";
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
    title: dict.meta.projectsTitle,
    description: dict.meta.projectsDescription,
    path: "/projects",
  });
}

export default async function ProjectsPage({ params }: PageProps) {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.meta.projectsTitle}
        crumbs={[
          { label: dict.breadcrumbs.home, href: localizedPath(locale, "/") },
          { label: dict.projects.eyebrow },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => {
              const service = SERVICES.find((item) => item.slug === project.category);
              return (
                <article
                  id={project.slug}
                  key={project.slug}
                  className="overflow-hidden rounded-2xl bg-white shadow-card"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt[locale]}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                      {service?.title[locale]} · {project.location[locale]}
                    </p>
                    <h2 className="mt-1 font-display text-lg font-bold text-navy-900">
                      {project.title[locale]}
                    </h2>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <ContactCta locale={locale} />
    </>
  );
}
