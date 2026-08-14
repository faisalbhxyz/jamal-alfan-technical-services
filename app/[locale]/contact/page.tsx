import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { Container, PageHero } from "@/components/ui";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CITIES, getWhatsAppPhone, SITE } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { enquiryWhatsAppHref, parseLocale, telHref } from "@/lib/utils";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: PageProps) {
  const locale = parseLocale((await params).locale);
  const dict = getDictionary(locale);
  const wa = enquiryWhatsAppHref(locale);
  const whatsappPhone = getWhatsAppPhone();

  return (
    <>
      <PageHero
        title={dict.meta.contactTitle}
        crumbs={[
          { label: dict.breadcrumbs.home, href: localizedPath(locale, "/") },
          { label: dict.contact.eyebrow },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
              — {dict.contact.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900">
              {dict.contact.titleBefore}{" "}
              <span className="text-brand-accent">{dict.contact.titleAccent}</span>
            </h2>
            <p className="mt-4 text-slate-500">{dict.contact.body}</p>

            <ul className="mt-8 space-y-4">
              {SITE.phones.map((phone) => (
                <li key={phone.e164}>
                  <a
                    href={telHref(phone.e164)}
                    className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 hover:border-brand-accent"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {dict.contact.phones}
                      </span>
                      <span className="font-display text-lg font-bold text-navy-900" dir="ltr">
                        {phone.display}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 hover:border-brand-accent"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {dict.contact.whatsapp}
                    </span>
                    <span className="font-display text-lg font-bold text-navy-900" dir="ltr">
                      {whatsappPhone.display}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4 hover:border-brand-accent"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {dict.contact.email}
                    </span>
                    <span className="break-all font-medium text-navy-900">{SITE.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {dict.contact.region}
                  </span>
                  <span className="font-medium text-navy-900">{dict.contact.regionValue}</span>
                </span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              <strong className="text-navy-800">{dict.contact.hours}:</strong>{" "}
              {dict.contact.hoursValue}
            </p>
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {dict.footer.areas}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {CITIES.map((city) => (
                  <li key={city.slug}>
                    <a
                      href={`${localizedPath(locale, "/coverage")}#${city.slug}`}
                      className="inline-flex rounded-full border border-slate-200 px-3 py-1.5 text-sm text-navy-800 hover:border-brand-accent hover:text-brand-accent"
                    >
                      {city.name[locale]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
            <QuoteForm locale={locale} />
          </div>
        </Container>
      </section>
    </>
  );
}
