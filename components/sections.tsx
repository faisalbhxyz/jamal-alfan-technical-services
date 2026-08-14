import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CITIES, FAQS, PROJECTS, SERVICES } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import { faqJsonLd } from "@/lib/seo";
import type { Locale } from "@/lib/types";
import { enquiryWhatsAppHref } from "@/lib/utils";

export function StatsBar({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const items = [dict.stats.years, dict.stats.trades, dict.stats.handover, dict.stats.response];

  return (
    <section className="relative z-10 -mt-10 px-4">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl bg-navy-900 shadow-card sm:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="border-white/10 px-5 py-6 text-center even:bg-navy-800 sm:border-e sm:last:border-e-0"
          >
            <p className="font-display text-3xl font-bold text-white">{item.value}</p>
            <p className="mt-1 text-xs font-medium text-slate-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ServicesPreview({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute -end-8 top-8 hidden h-40 w-24 opacity-20 lg:block">
        <svg viewBox="0 0 80 160" className="h-full w-full text-navy-900" aria-hidden="true">
          <path
            d="M40 8c-6 18-4 28 0 40 8 4 14 10 14 18s-8 16-14 20c-4 22-2 40 0 66"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
          />
          <circle cx="40" cy="28" r="16" fill="none" stroke="currentColor" strokeWidth="6" />
        </svg>
      </div>
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
        <div className="mt-12 text-center">
          <ButtonLink href={localizedPath(locale, "/services")} variant="navy">
            {dict.services.viewAll}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function FieldWork({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-slate-50 py-20 sm:py-24" id="field-work" aria-labelledby="field-work-heading">
      <Container>
        <SectionHeading
          eyebrow={dict.fieldWork.eyebrow}
          title={
            <>
              <span id="field-work-heading">{dict.fieldWork.titleBefore}</span>{" "}
              <span className="text-brand-accent">{dict.fieldWork.titleAccent}</span>
            </>
          }
          body={dict.fieldWork.body}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={localizedPath(locale, `/services/${service.slug}`)}
              className="group overflow-hidden rounded-2xl bg-white shadow-card"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.imageAlt[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {dict.fieldWork.eyebrow}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-navy-900 group-hover:text-brand-accent">
                  {service.title[locale]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{service.short[locale]}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhyUs({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={dict.why.eyebrow}
              title={
                <>
                  {dict.why.titleBefore}{" "}
                  <span className="text-brand-accent">{dict.why.titleAccent}</span>
                </>
              }
              body={dict.why.body}
            />
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {dict.why.items.map((item) => (
                <li key={item.title} className="rounded-2xl bg-white p-5 shadow-card">
                  <h3 className="font-display text-base font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-square lg:aspect-[4/5]">
            <Image
              src="/images/why.jpg"
              alt={
                locale === "ar"
                  ? "فريق فني يعمل على تشطيب داخلي"
                  : "Technical crew finishing an interior space"
              }
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Process({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={dict.process.eyebrow}
          title={
            <>
              {dict.process.titleBefore}{" "}
              <span className="text-brand-accent">{dict.process.titleAccent}</span>
            </>
          }
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.process.steps.map((step) => (
            <li
              key={step.n}
              className="relative rounded-2xl border border-slate-100 p-6 pt-8"
            >
              <span className="font-display text-3xl font-bold text-brand-accent/80">
                {step.n}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function ProjectsPreview({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={dict.projects.eyebrow}
          title={
            <>
              {dict.projects.titleBefore}{" "}
              <span className="text-brand-accent">{dict.projects.titleAccent}</span>
            </>
          }
          body={dict.projects.body}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-2xl bg-white shadow-card"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.imageAlt[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {project.location[locale]}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-navy-900">
                  {project.title[locale]}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href={localizedPath(locale, "/projects")} variant="navy">
            {dict.projects.viewAll}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function ContactCta({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden bg-slate-100 py-20 sm:py-24">
      <div className="pointer-events-none absolute -start-10 bottom-0 hidden w-48 opacity-90 lg:block">
        <svg viewBox="0 0 200 140" aria-hidden="true">
          <path d="M10 130 L70 80 L90 95 L140 40 L200 90 L200 140 Z" fill="#079CE0" />
          <rect x="78" y="70" width="28" height="18" fill="#022868" />
        </svg>
      </div>
      <Container className="relative text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
          — {dict.cta.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          {dict.cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-500">{dict.cta.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href={localizedPath(locale, "/quote")} size="lg">
            {dict.cta.button}
          </ButtonLink>
          <ButtonLink
            href={enquiryWhatsAppHref(locale)}
            variant="whatsapp"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {dict.cta.whatsapp}
          </ButtonLink>
          <ButtonLink href={localizedPath(locale, "/contact")} variant="navy" size="lg">
            {dict.cta.call}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function FeatureList({
  items,
  title,
}: {
  items: readonly string[];
  title: string;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-navy-900">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-600">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceAreas({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const featured = CITIES.slice(0, 8);

  return (
    <section className="py-20 sm:py-24" id="service-areas" aria-labelledby="areas-heading">
      <Container>
        <SectionHeading
          eyebrow={dict.areas.eyebrow}
          title={
            <>
              <span id="areas-heading">{dict.areas.titleBefore}</span>{" "}
              <span className="text-brand-accent">{dict.areas.titleAccent}</span>
            </>
          }
          body={dict.areas.body}
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((city) => (
            <li key={city.slug}>
              <Link
                href={`${localizedPath(locale, "/coverage")}#${city.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-card transition-colors hover:border-brand-accent"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent-soft text-brand-accent">
                  <MapPin className="h-4 w-4" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900 group-hover:text-brand-accent">
                  {city.name[locale]}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {city.region[locale]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{city.blurb[locale]}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CITIES.slice(8).map((city) => (
            <Link
              key={city.slug}
              href={`${localizedPath(locale, "/coverage")}#${city.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy-800 hover:border-brand-accent hover:text-brand-accent"
            >
              {city.name[locale]}
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href={localizedPath(locale, "/coverage")} variant="navy">
            {dict.areas.viewAll}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function LocalSeo({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="bg-navy-900 py-20 text-white sm:py-24" aria-labelledby="local-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-sky">
              — {dict.local.eyebrow}
            </p>
            <h2 id="local-heading" className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              {dict.local.titleBefore}{" "}
              <span className="text-brand-sky">{dict.local.titleAccent}</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-300">{dict.local.p1}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-300">{dict.local.p2}</p>
          </div>
          <ul className="grid gap-5">
            {dict.local.points.map((point) => (
              <li key={point.title} className="rounded-2xl bg-navy-800 p-6">
                <h3 className="font-display text-lg font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function FaqSection({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const jsonLd = faqJsonLd(locale);

  return (
    <section className="bg-slate-50 py-20 sm:py-24" id="faq" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <SectionHeading
          eyebrow={dict.faq.eyebrow}
          title={
            <>
              <span id="faq-heading">{dict.faq.titleBefore}</span>{" "}
              <span className="text-brand-accent">{dict.faq.titleAccent}</span>
            </>
          }
          body={dict.faq.body}
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((item) => (
            <details
              key={item.question.en}
              className="group rounded-2xl border border-slate-100 bg-white px-5 py-2 open:shadow-card"
            >
              <summary className="faq-summary cursor-pointer list-none py-3 font-display text-base font-bold text-navy-900">
                <span className="flex items-center justify-between gap-4">
                  {item.question[locale]}
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-accent-soft text-lg leading-none text-brand-accent group-open:bg-navy-900 group-open:text-white"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-slate-500">
                {item.answer[locale]}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
