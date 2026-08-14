import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CITIES, getWhatsAppPhone, NAV, SERVICES, SITE } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { enquiryWhatsAppHref, telHref, whatsappHref } from "@/lib/utils";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Logo onDark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            {dict.footer.blurb}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            {dict.footer.services}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={localizedPath(locale, `/services/${service.slug}`)}
                  className="hover:text-brand-accent"
                >
                  {service.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            {dict.footer.company}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={localizedPath(locale, item.href || "/")}
                  className="hover:text-brand-accent"
                >
                  {item.label[locale]}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={localizedPath(locale, "/quote")}
                className="hover:text-brand-accent"
              >
                {dict.nav.quote}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            {dict.footer.contact}
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {SITE.phones.map((phone) => (
              <li key={phone.e164}>
                <a
                  href={telHref(phone.e164)}
                  className="inline-flex items-center gap-2 hover:text-brand-accent"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy-800 text-brand-sky">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <span dir="ltr">{phone.display}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={enquiryWhatsAppHref(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-accent"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                <span>
                  {dict.contact.whatsapp}
                  <span className="ms-1" dir="ltr">
                    {getWhatsAppPhone().display}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 hover:text-brand-accent"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy-800 text-brand-sky">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                {SITE.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy-800 text-brand-sky">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              {locale === "ar" ? SITE.locationAr : SITE.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            {dict.footer.areas}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
            {CITIES.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`${localizedPath(locale, "/coverage")}#${city.slug}`}
                  className="hover:text-brand-accent"
                >
                  {city.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10" dir="ltr">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 sm:px-6 lg:px-8">
          <p>
            © {year} {SITE.legalName}. {dict.footer.rights}
          </p>
          <a
            href={whatsappHref("+8801310790697")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 hover:text-brand-accent"
          >
            Developed By Adstryker
          </a>
        </div>
      </div>
    </footer>
  );
}
