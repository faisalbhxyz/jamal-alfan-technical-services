import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { SeoImage } from "@/components/seo-image";
import { QuoteForm } from "@/components/quote-form";
import { ContactCta } from "@/components/sections";
import { ServiceCard } from "@/components/service-card";
import { ButtonLink, Container } from "@/components/ui";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { getPostsByService } from "@/lib/blog";
import { getCoverageCities, SITE } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import type { Locale, Project, Service } from "@/lib/types";
import { serviceWhatsAppHref, telHref } from "@/lib/utils";

interface ServiceDetailProps {
  locale: Locale;
  service: Service;
  relatedServices: Service[];
  relatedProjects: Project[];
}

export function ServiceDetail({
  locale,
  service,
  relatedServices,
  relatedProjects,
}: ServiceDetailProps) {
  const dict = getDictionary(locale);
  const callPhone = SITE.phones[0];
  const whatsappHref = serviceWhatsAppHref(locale, service.title[locale]);
  const relatedGuides = getPostsByService(service.slug);

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-slate-50">
          <div className="ruler-edge h-3 w-full opacity-70" />
          <Container className="py-10 sm:py-14">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <li>
                  <Link
                    href={localizedPath(locale, "/")}
                    className="hover:text-brand-accent"
                  >
                    {dict.breadcrumbs.home}
                  </Link>
                </li>
                <li aria-hidden="true" className="text-slate-300">
                  /
                </li>
                <li>
                  <Link
                    href={localizedPath(locale, "/services")}
                    className="hover:text-brand-accent"
                  >
                    {dict.services.eyebrow}
                  </Link>
                </li>
                <li aria-hidden="true" className="text-slate-300">
                  /
                </li>
                <li className="font-medium text-brand-accent" aria-current="page">
                  {service.title[locale]}
                </li>
              </ol>
            </nav>

            <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
                  — {dict.services.eyebrow}
                </p>
                <h1 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
                  {service.h1[locale]}
                </h1>
                <p className="aeo-answer mt-5 text-lg leading-relaxed text-slate-600">
                  {service.intro[locale]}
                </p>
                <h2 className="sr-only">{dict.servicePage.factsTitle}</h2>
                <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { dt: dict.servicePage.factCoverage, dd: dict.servicePage.factCoverageValue },
                    { dt: dict.servicePage.factLanguages, dd: dict.servicePage.factLanguagesValue },
                    { dt: dict.servicePage.factResponse, dd: dict.servicePage.factResponseValue },
                    { dt: dict.servicePage.factSequence, dd: dict.servicePage.factSequenceValue },
                  ].map((fact) => (
                    <div
                      key={fact.dt}
                      className="rounded-2xl border border-slate-100 bg-white px-3 py-3"
                    >
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        {fact.dt}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold leading-snug text-navy-900">
                        {fact.dd}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink
                    href={localizedPath(locale, `/quote?service=${service.slug}`)}
                    size="lg"
                  >
                    {dict.servicePage.cta}
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappHref}
                    variant="whatsapp"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    {dict.servicePage.ctaWhatsapp}
                  </ButtonLink>
                  <ButtonLink href={telHref(callPhone.e164)} variant="navy" size="lg">
                    <Phone className="h-4 w-4" />
                    {dict.servicePage.ctaCall}
                  </ButtonLink>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                <SeoImage
                  src={service.image}
                  alt={service.imageAlt[locale]}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
          <div className="band-hatch h-3 w-full" />
        </header>

        <Container className="grid items-start gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_22rem] sm:py-20">
          <div className="min-w-0">
            {service.sections.map((section) => (
              <section key={section.heading[locale]} className="mb-10">
                <h2 className="font-display text-2xl font-bold text-navy-900">
                  {section.heading[locale]}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {section.body[locale]}
                </p>
              </section>
            ))}

            <section>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                {dict.servicePage.features}
              </h2>
              <ul className="mt-5 space-y-3">
                {service.features[locale].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-2xl font-bold text-navy-900">
                {dict.servicePage.processTitle}
              </h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.process.map((step, index) => (
                  <li
                    key={step.title[locale]}
                    className="rounded-2xl border border-slate-100 p-5"
                  >
                    <span className="font-display text-2xl font-bold text-brand-accent/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-navy-900">
                      {step.title[locale]}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {step.text[locale]}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <h2 className="font-display text-xl font-bold text-navy-900">
                {dict.servicePage.quoteTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {dict.servicePage.quoteBody}
              </p>
              <div className="mt-6">
                <QuoteForm locale={locale} presetService={service.slug} />
              </div>
            </div>
          </aside>
        </Container>

        <section className="bg-slate-50 py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              {dict.servicePage.citiesTitle}
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
              {dict.servicePage.localBody}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {getCoverageCities().map((city) => (
                <li
                  key={city.slug}
                  className="rounded-2xl bg-white px-4 py-3 shadow-card"
                >
                  <Link
                    href={`${localizedPath(locale, "/coverage")}#${city.slug}`}
                    className="block hover:text-brand-accent"
                  >
                    <p className="font-semibold text-navy-900">{city.name[locale]}</p>
                    <p className="text-xs text-slate-500">{city.region[locale]}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              {dict.servicePage.faqTitle}
            </h2>
            <div className="mt-8 space-y-3">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question[locale]}
                  className="group rounded-2xl border border-slate-100 bg-white p-5 open:shadow-card"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-display text-lg font-bold text-navy-900 marker:content-none [&::-webkit-details-marker]:hidden">
                    <h3 className="inline text-lg font-bold">{faq.question[locale]}</h3>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-brand-accent transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p
                    data-aeo="faq"
                    className="mt-3 text-[15px] leading-relaxed text-slate-600"
                  >
                    {faq.answer[locale]}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {relatedGuides.length > 0 ? (
          <section className="py-16 sm:py-20">
            <Container>
              <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
                {dict.blog.serviceGuides}
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedGuides.map((post) => (
                  <BlogCard key={post.slug} post={post} locale={locale} />
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        {relatedProjects.length > 0 ? (
          <section className="bg-slate-50 py-16 sm:py-20">
            <Container>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                {dict.servicePage.related}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {relatedProjects.map((project) => (
                  <figure
                    key={project.slug}
                    className="overflow-hidden rounded-2xl bg-white shadow-card"
                  >
                    <div className="relative aspect-[16/10]">
                      <SeoImage
                        src={project.image}
                        alt={project.imageAlt[locale]}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                        {project.location[locale]}
                      </p>
                      <p className="mt-1 font-semibold text-navy-900">
                        {project.title[locale]}
                      </p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        {relatedServices.length > 0 ? (
          <section className="py-16 sm:py-20">
            <Container>
              <h2 className="font-display text-2xl font-bold text-navy-900">
                {dict.servicePage.relatedServices}
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedServices.map((item) => (
                  <ServiceCard key={item.slug} service={item} locale={locale} />
                ))}
              </div>
            </Container>
          </section>
        ) : null}
      </article>
      <ContactCta locale={locale} />
    </>
  );
}
