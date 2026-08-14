"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { NAV, SITE } from "@/lib/content";
import { getDictionary, localizedPath } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { cn, enquiryWhatsAppHref, telHref } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const [open, setOpen] = useState(false);

  function isActive(href: string): boolean {
    const full = localizedPath(locale, href || "/");
    if (href === "") {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname === full || pathname.startsWith(`${full}/`);
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-slate-100 bg-white md:block">
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between gap-4 px-4 text-xs text-navy-700 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            {SITE.phones.map((phone) => (
              <span key={phone.e164} className="inline-flex items-center gap-2">
                <a
                  href={telHref(phone.e164)}
                  className="inline-flex items-center gap-1.5 hover:text-brand-accent"
                >
                  <Phone className="h-3.5 w-3.5 text-brand-accent" />
                  <span dir="ltr">{phone.display}</span>
                </a>
                {phone.whatsapp ? (
                  <a
                    href={enquiryWhatsAppHref(locale)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#25D366] hover:text-[#1ebe57]"
                    aria-label={dict.contact.whatsapp}
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    <span className="font-semibold">{dict.contact.whatsapp}</span>
                  </a>
                ) : null}
              </span>
            ))}
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-1.5 hover:text-brand-accent"
            >
              <Mail className="h-3.5 w-3.5 text-brand-accent" />
              {SITE.email}
            </a>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-accent" />
            {locale === "ar" ? SITE.locationAr : SITE.location}
          </span>
        </div>
      </div>

      <div className="border-b border-slate-100/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <Link href={localizedPath(locale, "/")} className="min-w-0">
            <Logo compact priority />
            <span className="sr-only">{SITE.name}</span>
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              const href = localizedPath(locale, item.href || "/");
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={href}
                  className={cn(
                    "text-sm font-medium tracking-tight transition-colors",
                    active
                      ? "text-brand-accent"
                      : "text-navy-800 hover:text-brand-accent",
                  )}
                >
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitch locale={locale} />
            <ButtonLink
              href={localizedPath(locale, "/quote")}
              size="sm"
              className="hidden sm:inline-flex"
            >
              {dict.nav.quote}
            </ButtonLink>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy-900 lg:hidden"
              aria-expanded={open}
              aria-label={open ? dict.nav.close : dict.nav.menu}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={localizedPath(locale, item.href || "/")}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base font-medium",
                    isActive(item.href)
                      ? "bg-brand-accent-soft text-brand-accent"
                      : "text-navy-800",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label[locale]}
                </Link>
              ))}
              <a
                href={enquiryWhatsAppHref(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-base font-medium text-[#25D366]"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon className="h-5 w-5" />
                {dict.contact.whatsapp}
              </a>
              <ButtonLink
                href={localizedPath(locale, "/quote")}
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                {dict.nav.quote}
              </ButtonLink>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
