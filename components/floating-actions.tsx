import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SITE } from "@/lib/content";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { enquiryWhatsAppHref, telHref } from "@/lib/utils";

interface FloatingActionsProps {
  locale: Locale;
}

export function FloatingActions({ locale }: FloatingActionsProps) {
  const dict = getDictionary(locale);
  const primary = SITE.phones[0];
  const wa = enquiryWhatsAppHref(locale);

  return (
    <>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 end-4 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg sm:flex"
        aria-label={dict.contact.whatsapp}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px bg-navy-900 p-2 sm:hidden">
        <a
          href={telHref(primary.e164)}
          className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-navy-800 text-xs font-semibold text-white"
        >
          <Phone className="h-4 w-4 text-brand-sky" />
          {dict.hero.ctaCall}
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-xs font-semibold text-white"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {dict.hero.ctaWhatsapp}
        </a>
      </div>
    </>
  );
}
